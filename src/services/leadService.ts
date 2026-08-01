import { trackEvent } from '@/utils/analytics'
import { createContact, toCrmContact, trackEngagement, type CrmLeadSource } from '@/services/crmService'
import { triggerResourceFollowUp, triggerWelcomeSeries } from '@/services/emailAutomation'
import { checkRateLimit, getRecaptchaToken, sanitizeEmail, sanitizeLeadFields } from '@/utils/security'
import { detectLocale, detectTimezone } from '@/utils/i18n'
import { trackDownloadLocally } from '@/services/documentService'

/**
 * Unified lead capture layer used by forms across the site.
 * Orchestrates CRM (HubSpot), email automation, analytics, and security checks.
 */

export type LeadSource =
  | 'contact_form'
  | 'case_study_download'
  | 'rwa_guide_download'
  | 'newsletter'
  | 'consultation'
  | 'chat_widget'
  | 'resource_library'
  | 'other'

export interface LeadPayload {
  name?: string
  firstName?: string
  lastName?: string
  email: string
  company?: string
  jobTitle?: string
  industry?: string
  country?: string
  serviceInterest?: string
  phone?: string
  message?: string
  source: LeadSource
  resourceId?: string
  resourceTitle?: string
  pagePath?: string
  metadata?: Record<string, string>
}

export interface LeadResponse {
  success: boolean
  id: string
  storedLocally: boolean
  forwardedToApi: boolean
  message: string
  priority?: 'high' | 'medium' | 'low'
}

function mapSource(source: LeadSource): CrmLeadSource {
  switch (source) {
    case 'consultation':
      return 'consultation_booking'
    case 'newsletter':
      return 'newsletter'
    case 'case_study_download':
    case 'rwa_guide_download':
    case 'resource_library':
      return 'resource_download'
    case 'chat_widget':
      return 'chat_widget'
    case 'contact_form':
      return 'contact_form'
    default:
      return 'other'
  }
}

export async function captureLead(payload: LeadPayload): Promise<LeadResponse> {
  const rate = checkRateLimit(`lead:${payload.source}`, 8, 60_000)
  if (!rate.allowed) {
    return {
      success: false,
      id: '',
      storedLocally: false,
      forwardedToApi: false,
      message: 'Too many submissions. Please wait a moment and try again.',
    }
  }

  const clean = sanitizeLeadFields({
    name: payload.name,
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: sanitizeEmail(payload.email),
    company: payload.company,
    jobTitle: payload.jobTitle,
    industry: payload.industry,
    country: payload.country,
    phone: payload.phone,
    message: payload.message,
  })

  if (!clean.email) {
    return {
      success: false,
      id: '',
      storedLocally: false,
      forwardedToApi: false,
      message: 'Email is required.',
    }
  }

  const recaptchaToken = await getRecaptchaToken(payload.source)

  const contact = toCrmContact({
    name: clean.name,
    firstName: clean.firstName,
    lastName: clean.lastName,
    email: clean.email,
    company: clean.company,
    jobTitle: clean.jobTitle,
    industry: clean.industry,
    country: clean.country,
    phone: clean.phone,
    message: clean.message,
    leadSource: mapSource(payload.source),
    resourceId: payload.resourceId,
    locale: detectLocale(),
    timezone: detectTimezone(),
  })

  contact.metadata = {
    ...payload.metadata,
    ...(recaptchaToken ? { recaptchaToken } : {}),
    pagePath: payload.pagePath ?? (typeof window !== 'undefined' ? window.location.pathname : ''),
    serviceInterest: payload.serviceInterest ?? '',
  }

  const crm = await createContact(contact)

  await trackEngagement({
    contactEmail: clean.email,
    event:
      payload.source === 'consultation'
        ? 'consultation_booked'
        : payload.source === 'newsletter'
          ? 'newsletter_subscribe'
          : payload.resourceId
            ? 'resource_download'
            : 'cta_click',
    label: payload.resourceTitle ?? payload.source,
  })

  if (payload.resourceId) {
    trackDownloadLocally(payload.resourceId, clean.email)
    void triggerResourceFollowUp(clean.email, payload.resourceTitle ?? payload.resourceId)
  }

  trackEvent({
    event: 'lead_capture',
    label: payload.source,
    metadata: { priority: crm.priority },
  })

  return {
    success: crm.success,
    id: crm.contactId ?? '',
    storedLocally: true,
    forwardedToApi: crm.message.includes('HubSpot'),
    message: crm.message,
    priority: crm.priority,
  }
}

export async function submitNewsletter(email: string, metadata?: Record<string, string>): Promise<LeadResponse> {
  const result = await captureLead({
    email,
    source: 'newsletter',
    metadata,
  })
  if (result.success) {
    void triggerWelcomeSeries(sanitizeEmail(email))
    trackEvent({ event: 'newsletter_subscription', label: 'newsletter' })
  }
  return result
}

export async function downloadResource(
  payload: Omit<LeadPayload, 'source'> & { source?: LeadSource },
): Promise<LeadResponse> {
  const result = await captureLead({
    ...payload,
    source: payload.source ?? 'case_study_download',
  })
  if (result.success) {
    trackEvent({
      event: 'resource_download',
      label: payload.resourceTitle ?? payload.resourceId,
    })
  }
  return result
}

export function triggerFileDownload(filePath: string, fileName?: string): void {
  const anchor = document.createElement('a')
  anchor.href = filePath
  anchor.download = fileName ?? filePath.split('/').pop() ?? 'resource.pdf'
  anchor.rel = 'noopener'
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}
