import { trackEvent } from '@/utils/analytics'

/**
 * CRM-ready lead management service.
 * Frontend submissions are persisted locally and prepared for HubSpot,
 * Salesforce, Monday.com, Mailchimp, ConvertKit, or a custom API.
 *
 * Configure:
 *   VITE_LEAD_API_URL — optional REST endpoint for lead ingestion
 *   VITE_CRM_PROVIDER — hubspot | salesforce | monday | custom
 */

export type LeadSource =
  | 'contact_form'
  | 'case_study_download'
  | 'rwa_guide_download'
  | 'newsletter'
  | 'consultation'
  | 'other'

export interface LeadPayload {
  name?: string
  email: string
  company?: string
  jobTitle?: string
  industry?: string
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
}

const STORAGE_KEY = 'rbt_leads_v1'

function createLeadId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
}

function readLocalLeads(): LeadPayload[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as LeadPayload[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeLocalLead(lead: LeadPayload & { id: string; createdAt: string }): void {
  try {
    const existing = readLocalLeads()
    existing.push(lead)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(-200)))
  } catch {
    // Storage may be unavailable (private mode); ignore
  }
}

async function forwardToApi(lead: LeadPayload & { id: string; createdAt: string }): Promise<boolean> {
  const apiUrl = import.meta.env.VITE_LEAD_API_URL as string | undefined
  if (!apiUrl) return false

  const provider = (import.meta.env.VITE_CRM_PROVIDER as string | undefined) ?? 'custom'

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CRM-Provider': provider,
      },
      body: JSON.stringify({
        provider,
        // HubSpot / Salesforce / Monday-compatible envelope
        properties: {
          email: lead.email,
          firstname: lead.name,
          company: lead.company,
          jobtitle: lead.jobTitle,
          industry: lead.industry,
          phone: lead.phone,
          message: lead.message,
          lead_source: lead.source,
          resource_id: lead.resourceId,
          resource_title: lead.resourceTitle,
        },
        lead,
      }),
    })
    return response.ok
  } catch {
    return false
  }
}

async function persistLead(payload: LeadPayload, analyticsEvent: 'lead_capture' | 'newsletter_subscription' | 'resource_download'): Promise<LeadResponse> {
  const id = createLeadId()
  const createdAt = new Date().toISOString()
  const record = {
    ...payload,
    id,
    createdAt,
    pagePath: payload.pagePath ?? (typeof window !== 'undefined' ? window.location.pathname : undefined),
  }

  writeLocalLead(record)
  const forwardedToApi = await forwardToApi(record)

  trackEvent({
    event: analyticsEvent,
    label: payload.resourceTitle ?? payload.source,
    metadata: {
      source: payload.source,
      forwardedToApi,
    },
  })

  return {
    success: true,
    id,
    storedLocally: true,
    forwardedToApi,
    message: forwardedToApi
      ? 'Lead captured and forwarded to CRM endpoint.'
      : 'Lead captured locally. Configure VITE_LEAD_API_URL to sync with HubSpot, Salesforce, or Monday.',
  }
}

/** Generic lead capture for contact forms and gated content */
export async function captureLead(payload: LeadPayload): Promise<LeadResponse> {
  if (!payload.email?.trim()) {
    return {
      success: false,
      id: '',
      storedLocally: false,
      forwardedToApi: false,
      message: 'Email is required.',
    }
  }

  return persistLead(payload, 'lead_capture')
}

/** Newsletter subscription — ready for Mailchimp / ConvertKit / HubSpot */
export async function submitNewsletter(email: string, metadata?: Record<string, string>): Promise<LeadResponse> {
  return persistLead(
    {
      email,
      source: 'newsletter',
      metadata,
    },
    'newsletter_subscription',
  )
}

/** Resource / PDF download lead capture */
export async function downloadResource(
  payload: Omit<LeadPayload, 'source'> & { source?: LeadSource },
): Promise<LeadResponse> {
  return persistLead(
    {
      ...payload,
      source: payload.source ?? 'case_study_download',
    },
    'resource_download',
  )
}

/** Trigger browser download after successful lead capture */
export function triggerFileDownload(filePath: string, fileName?: string): void {
  const anchor = document.createElement('a')
  anchor.href = filePath
  anchor.download = fileName ?? filePath.split('/').pop() ?? 'resource.pdf'
  anchor.rel = 'noopener'
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}
