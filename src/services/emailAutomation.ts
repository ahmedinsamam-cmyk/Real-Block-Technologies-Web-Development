/**
 * Email marketing automation — Mailchimp / ConvertKit ready.
 *
 * Configure:
 *   VITE_EMAIL_PROVIDER=mailchimp | convertkit
 *   VITE_EMAIL_API_URL — serverless endpoint that triggers campaigns
 *   VITE_MAILCHIMP_AUDIENCE_ID
 *   VITE_CONVERTKIT_FORM_ID
 */

export type EmailProvider = 'mailchimp' | 'convertkit'

export type AutomationCampaignId =
  | 'new_subscriber_welcome'
  | 'resource_download_followup'
  | 'consultation_nurture'

export interface EmailSequenceStep {
  dayOffset: number
  subject: string
  preview: string
  ctaLabel?: string
  ctaPath?: string
}

export interface AutomationCampaign {
  id: AutomationCampaignId
  name: string
  providerTags: string[]
  trigger: string
  steps: EmailSequenceStep[]
}

/** Predefined nurture sequences for sales enablement */
export const EMAIL_CAMPAIGNS: AutomationCampaign[] = [
  {
    id: 'new_subscriber_welcome',
    name: 'New Subscriber Welcome',
    providerTags: ['newsletter', 'welcome-series'],
    trigger: 'newsletter_subscription',
    steps: [
      {
        dayOffset: 0,
        subject: 'Welcome to Real Block Technologies',
        preview: 'Insights on AI, blockchain, and real-world asset transformation.',
        ctaLabel: 'Explore Services',
        ctaPath: '/services',
      },
      {
        dayOffset: 2,
        subject: 'Introduction to AI Transformation',
        preview: 'How enterprises move from AI ambition to operating impact.',
        ctaLabel: 'View AI Solutions',
        ctaPath: '/services/ai-solutions',
      },
      {
        dayOffset: 5,
        subject: 'RWA Tokenization Guide',
        preview: 'A practical briefing for leaders evaluating asset digitization.',
        ctaLabel: 'Download the Guide',
        ctaPath: '/resources/rwa-tokenization-guide',
      },
      {
        dayOffset: 8,
        subject: 'Book a Consultation',
        preview: 'Ready to discuss your transformation priorities?',
        ctaLabel: 'Book a Free Consultation',
        ctaPath: '/contact#consultation',
      },
    ],
  },
  {
    id: 'resource_download_followup',
    name: 'Resource Download Follow-up',
    providerTags: ['resource-download', 'nurture'],
    trigger: 'resource_download',
    steps: [
      {
        dayOffset: 0,
        subject: 'Thank you — your resource is ready',
        preview: 'Here is your download and a few related materials.',
        ctaLabel: 'Browse Resources',
        ctaPath: '/resources',
      },
      {
        dayOffset: 1,
        subject: 'Related case study for your team',
        preview: 'See how similar organizations approached digital transformation.',
        ctaLabel: 'View Case Studies',
        ctaPath: '/case-studies',
      },
      {
        dayOffset: 3,
        subject: 'Would a discovery call help?',
        preview: 'Book a 30-minute consultation with our advisors.',
        ctaLabel: 'Book Consultation',
        ctaPath: '/contact#consultation',
      },
    ],
  },
  {
    id: 'consultation_nurture',
    name: 'Consultation Nurture',
    providerTags: ['consultation', 'sales'],
    trigger: 'consultation_booking',
    steps: [
      {
        dayOffset: 0,
        subject: 'Your consultation is confirmed',
        preview: 'What to expect in your Real Block Technologies discovery call.',
        ctaLabel: 'Prepare for your meeting',
        ctaPath: '/services',
      },
    ],
  },
]

export interface EmailSubscriberPayload {
  email: string
  firstName?: string
  lastName?: string
  company?: string
  tags?: string[]
  campaignId?: AutomationCampaignId
  metadata?: Record<string, string>
}

export interface EmailAutomationResult {
  success: boolean
  provider: EmailProvider | 'local'
  campaignId?: AutomationCampaignId
  message: string
}

async function postEmailApi(body: unknown): Promise<boolean> {
  const apiUrl = import.meta.env.VITE_EMAIL_API_URL as string | undefined
  if (!apiUrl) return false
  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    return res.ok
  } catch {
    return false
  }
}

export function getCampaign(id: AutomationCampaignId): AutomationCampaign | undefined {
  return EMAIL_CAMPAIGNS.find((c) => c.id === id)
}

/** Enroll subscriber into a welcome / nurture sequence */
export async function enrollInCampaign(
  payload: EmailSubscriberPayload,
  campaignId: AutomationCampaignId,
): Promise<EmailAutomationResult> {
  const provider = (import.meta.env.VITE_EMAIL_PROVIDER as EmailProvider | undefined) ?? 'mailchimp'
  const campaign = getCampaign(campaignId)

  const body = {
    action: 'enrollCampaign',
    provider,
    campaignId,
    campaign,
    audienceId: import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID,
    formId: import.meta.env.VITE_CONVERTKIT_FORM_ID,
    subscriber: payload,
  }

  try {
    localStorage.setItem(
      'rbt_email_enrollments_v1',
      JSON.stringify([
        ...JSON.parse(localStorage.getItem('rbt_email_enrollments_v1') ?? '[]'),
        { ...body, enrolledAt: new Date().toISOString() },
      ].slice(-100)),
    )
  } catch {
    // ignore
  }

  const forwarded = await postEmailApi(body)

  return {
    success: true,
    provider: forwarded ? provider : 'local',
    campaignId,
    message: forwarded
      ? `Enrolled in ${campaign?.name ?? campaignId} via ${provider}.`
      : `Enrollment stored locally for ${campaign?.name ?? campaignId}. Configure VITE_EMAIL_API_URL.`,
  }
}

export async function triggerResourceFollowUp(email: string, resourceTitle: string) {
  return enrollInCampaign(
    {
      email,
      tags: ['resource-download'],
      metadata: { resourceTitle },
      campaignId: 'resource_download_followup',
    },
    'resource_download_followup',
  )
}

export async function triggerWelcomeSeries(email: string, firstName?: string) {
  return enrollInCampaign(
    {
      email,
      firstName,
      tags: ['newsletter', 'welcome-series'],
      campaignId: 'new_subscriber_welcome',
    },
    'new_subscriber_welcome',
  )
}
