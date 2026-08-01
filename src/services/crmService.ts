/**
 * HubSpot CRM integration service.
 * Primary CRM for Real Block Technologies lead operations.
 *
 * Configure:
 *   VITE_HUBSPOT_PORTAL_ID
 *   VITE_HUBSPOT_ACCESS_TOKEN (server-side only — never expose in client builds)
 *   VITE_LEAD_API_URL — preferred: your Cloudflare Worker / API that proxies HubSpot
 *   VITE_CRM_PROVIDER=hubspot
 */

import { trackEvent } from '@/utils/analytics'

export type LeadPriority = 'high' | 'medium' | 'low'

export type ServiceInterest =
  | 'ai_transformation'
  | 'rwa_tokenization'
  | 'blockchain_strategy'
  | 'enterprise_automation'
  | 'treasury_fintech'
  | 'software_development'
  | 'general'

export type CrmLeadSource =
  | 'contact_form'
  | 'consultation_booking'
  | 'newsletter'
  | 'resource_download'
  | 'chat_widget'
  | 'help_center'
  | 'other'

export interface CrmContact {
  id?: string
  firstName: string
  lastName: string
  email: string
  companyName: string
  jobTitle?: string
  industry?: string
  country?: string
  serviceInterest?: ServiceInterest
  leadSource: CrmLeadSource
  phone?: string
  message?: string
  resourceId?: string
  locale?: string
  timezone?: string
  metadata?: Record<string, string | number | boolean>
}

export interface CrmLeadScoreInput {
  companyName?: string
  leadSource: CrmLeadSource
  downloadedResources?: number
  consultationRequested?: boolean
  isEnterpriseDomain?: boolean
}

export interface CrmEngagement {
  contactEmail: string
  event:
    | 'page_view'
    | 'cta_click'
    | 'resource_download'
    | 'newsletter_subscribe'
    | 'consultation_booked'
    | 'chat_started'
    | 'chat_lead_captured'
  label?: string
  properties?: Record<string, string | number | boolean>
}

export interface CrmResult {
  success: boolean
  contactId?: string
  priority?: LeadPriority
  message: string
}

const CRM_STORAGE_KEY = 'rbt_crm_contacts_v1'
const ENGAGEMENT_STORAGE_KEY = 'rbt_crm_engagements_v1'

/** Enterprise-heuristic domains / keywords for lead scoring */
const ENTERPRISE_HINTS = [
  'group',
  'holdings',
  'capital',
  'bank',
  'global',
  'international',
  'corp',
  'ltd',
  'inc',
  'plc',
  'partners',
]

export function scoreLead(input: CrmLeadScoreInput): LeadPriority {
  const downloads = input.downloadedResources ?? 0
  const company = (input.companyName ?? '').toLowerCase()
  const looksEnterprise =
    input.isEnterpriseDomain ||
    ENTERPRISE_HINTS.some((hint) => company.includes(hint)) ||
    company.length > 18

  if (
    input.consultationRequested ||
    input.leadSource === 'consultation_booking' ||
    downloads >= 2 ||
    (looksEnterprise && input.leadSource === 'resource_download')
  ) {
    return 'high'
  }

  if (input.leadSource === 'newsletter' || input.leadSource === 'chat_widget') {
    return 'medium'
  }

  return 'low'
}

function splitName(fullName?: string): { firstName: string; lastName: string } {
  if (!fullName?.trim()) return { firstName: '', lastName: '' }
  const parts = fullName.trim().split(/\s+/)
  return {
    firstName: parts[0] ?? '',
    lastName: parts.slice(1).join(' ') || parts[0] || '',
  }
}

export function toCrmContact(partial: {
  name?: string
  firstName?: string
  lastName?: string
  email: string
  company?: string
  companyName?: string
  jobTitle?: string
  industry?: string
  country?: string
  serviceInterest?: ServiceInterest
  leadSource: CrmLeadSource
  phone?: string
  message?: string
  resourceId?: string
  locale?: string
  timezone?: string
}): CrmContact {
  const names =
    partial.firstName || partial.lastName
      ? { firstName: partial.firstName ?? '', lastName: partial.lastName ?? '' }
      : splitName(partial.name)

  return {
    firstName: names.firstName,
    lastName: names.lastName,
    email: partial.email.trim().toLowerCase(),
    companyName: (partial.companyName ?? partial.company ?? '').trim(),
    jobTitle: partial.jobTitle,
    industry: partial.industry,
    country: partial.country,
    serviceInterest: partial.serviceInterest ?? 'general',
    leadSource: partial.leadSource,
    phone: partial.phone,
    message: partial.message,
    resourceId: partial.resourceId,
    locale: partial.locale,
    timezone: partial.timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone,
  }
}

function hubspotProperties(contact: CrmContact, priority: LeadPriority) {
  return {
    email: contact.email,
    firstname: contact.firstName,
    lastname: contact.lastName,
    company: contact.companyName,
    jobtitle: contact.jobTitle ?? '',
    industry: contact.industry ?? '',
    country: contact.country ?? '',
    phone: contact.phone ?? '',
    hs_lead_status: priority === 'high' ? 'NEW' : 'OPEN',
    lifecyclestage: priority === 'high' ? 'opportunity' : 'lead',
    // Custom properties — create these in HubSpot
    service_interest: contact.serviceInterest ?? 'general',
    lead_source_detail: contact.leadSource,
    lead_priority: priority,
    rbt_resource_id: contact.resourceId ?? '',
    rbt_locale: contact.locale ?? 'en',
    rbt_timezone: contact.timezone ?? '',
    message: contact.message ?? '',
  }
}

async function postToLeadApi(payload: unknown): Promise<{ ok: boolean; id?: string }> {
  const apiUrl = import.meta.env.VITE_LEAD_API_URL as string | undefined
  if (!apiUrl) return { ok: false }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CRM-Provider': 'hubspot',
      },
      body: JSON.stringify(payload),
    })
    if (!response.ok) return { ok: false }
    const data = (await response.json().catch(() => ({}))) as { id?: string }
    return { ok: true, id: data.id }
  } catch {
    return { ok: false }
  }
}

function persistLocal(key: string, record: unknown): void {
  try {
    const existing = JSON.parse(localStorage.getItem(key) ?? '[]') as unknown[]
    existing.push(record)
    localStorage.setItem(key, JSON.stringify(existing.slice(-300)))
  } catch {
    // ignore
  }
}

/** Create or upsert a HubSpot contact / lead */
export async function createContact(contact: CrmContact): Promise<CrmResult> {
  const priority = scoreLead({
    companyName: contact.companyName,
    leadSource: contact.leadSource,
    consultationRequested: contact.leadSource === 'consultation_booking',
    downloadedResources: contact.resourceId ? 1 : 0,
  })

  const id = `crm_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  const record = {
    ...contact,
    id,
    priority,
    createdAt: new Date().toISOString(),
    hubspotProperties: hubspotProperties(contact, priority),
  }

  persistLocal(CRM_STORAGE_KEY, record)

  const forwarded = await postToLeadApi({
    action: 'createContact',
    provider: 'hubspot',
    portalId: import.meta.env.VITE_HUBSPOT_PORTAL_ID,
    properties: record.hubspotProperties,
    contact: record,
  })

  trackEvent({
    event: 'lead_capture',
    label: contact.leadSource,
    metadata: { priority, forwarded: forwarded.ok },
  })

  return {
    success: true,
    contactId: forwarded.id ?? id,
    priority,
    message: forwarded.ok
      ? 'Contact created in HubSpot via lead API.'
      : 'Contact stored locally. Configure VITE_LEAD_API_URL to sync with HubSpot.',
  }
}

/** Update an existing lead (status, score, properties) */
export async function updateLead(
  email: string,
  updates: Partial<CrmContact> & { priority?: LeadPriority },
): Promise<CrmResult> {
  const record = {
    email: email.trim().toLowerCase(),
    ...updates,
    updatedAt: new Date().toISOString(),
  }
  persistLocal(CRM_STORAGE_KEY, { action: 'updateLead', ...record })

  const forwarded = await postToLeadApi({
    action: 'updateLead',
    provider: 'hubspot',
    email: record.email,
    properties: updates,
  })

  return {
    success: true,
    contactId: email,
    priority: updates.priority,
    message: forwarded.ok ? 'Lead updated in HubSpot.' : 'Lead update stored locally.',
  }
}

/** Track engagement events for CRM timelines / workflows */
export async function trackEngagement(engagement: CrmEngagement): Promise<CrmResult> {
  const record = {
    ...engagement,
    timestamp: new Date().toISOString(),
  }
  persistLocal(ENGAGEMENT_STORAGE_KEY, record)

  await postToLeadApi({
    action: 'trackEngagement',
    provider: 'hubspot',
    engagement: record,
  })

  trackEvent({
    event:
      engagement.event === 'consultation_booked'
        ? 'consultation_booking'
        : engagement.event === 'newsletter_subscribe'
          ? 'newsletter_subscription'
          : engagement.event === 'resource_download'
            ? 'resource_download'
            : 'cta_click',
    label: engagement.label ?? engagement.event,
  })

  return {
    success: true,
    message: 'Engagement tracked.',
  }
}

export function getLocalCrmSnapshot() {
  try {
    return {
      contacts: JSON.parse(localStorage.getItem(CRM_STORAGE_KEY) ?? '[]'),
      engagements: JSON.parse(localStorage.getItem(ENGAGEMENT_STORAGE_KEY) ?? '[]'),
    }
  } catch {
    return { contacts: [], engagements: [] }
  }
}
