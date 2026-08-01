/**
 * Analytics for GA4 + LinkedIn Insight Tag + Meta Pixel.
 *
 * VITE_GA4_MEASUREMENT_ID
 * VITE_LINKEDIN_PARTNER_ID
 * VITE_META_PIXEL_ID
 * VITE_GOOGLE_SITE_VERIFICATION — Search Console
 */

export type AnalyticsEvent =
  | 'page_view'
  | 'cta_click'
  | 'consultation_booking'
  | 'resource_download'
  | 'newsletter_subscription'
  | 'lead_capture'
  | 'linkedin_follow'
  | 'chat_open'
  | 'chat_lead'
  | 'social_share'
  | 'help_center_view'

export interface AnalyticsPayload {
  event: AnalyticsEvent
  label?: string
  path?: string
  metadata?: Record<string, string | number | boolean | undefined>
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    lintrk?: (action: string, payload?: Record<string, unknown>) => void
    fbq?: (...args: unknown[]) => void
    _linkedin_partner_id?: string
  }
}

const isBrowser = typeof window !== 'undefined'

function loadScript(src: string, id: string): void {
  if (!isBrowser || document.getElementById(id)) return
  const script = document.createElement('script')
  script.id = id
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

export function initAnalytics(): void {
  if (!isBrowser) return

  const ga4 = import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined
  const linkedIn = import.meta.env.VITE_LINKEDIN_PARTNER_ID as string | undefined
  const meta = import.meta.env.VITE_META_PIXEL_ID as string | undefined
  const gsc = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined

  if (gsc && !document.querySelector('meta[name="google-site-verification"]')) {
    const metaTag = document.createElement('meta')
    metaTag.name = 'google-site-verification'
    metaTag.content = gsc
    document.head.appendChild(metaTag)
  }

  if (ga4) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${ga4}`, 'ga4-script')
    window.dataLayer = window.dataLayer || []
    window.gtag =
      window.gtag ||
      function gtag(...args: unknown[]) {
        window.dataLayer?.push(args)
      }
    window.gtag('js', new Date())
    window.gtag('config', ga4, { anonymize_ip: true })
  }

  if (linkedIn) {
    window._linkedin_partner_id = linkedIn
    window.lintrk =
      window.lintrk ||
      function lintrk() {
        /* Insight Tag stub until official snippet loads */
      }
    loadScript('https://snap.licdn.com/li.lms-analytics/insight.min.js', 'linkedin-insight')
  }

  if (meta) {
    window.fbq =
      window.fbq ||
      function fbq() {
        /* Meta Pixel stub */
      }
  }

  if (import.meta.env.DEV) {
    console.info('[analytics] Initialized', { ga4, linkedIn, meta, gsc })
  }
}

export function trackEvent(payload: AnalyticsPayload): void {
  if (!isBrowser) return

  const detail = {
    ...payload,
    path: payload.path ?? window.location.pathname,
    timestamp: new Date().toISOString(),
  }

  window.gtag?.('event', payload.event, {
    event_label: payload.label,
    page_path: detail.path,
    ...payload.metadata,
  })

  if (
    payload.event === 'consultation_booking' ||
    payload.event === 'lead_capture' ||
    payload.event === 'resource_download'
  ) {
    window.lintrk?.('track', { conversion_id: payload.label })
  }

  if (payload.event === 'lead_capture' || payload.event === 'newsletter_subscription') {
    window.fbq?.('track', 'Lead', { content_name: payload.label })
  }

  if (import.meta.env.DEV) {
    console.info('[analytics]', detail)
  }
}

export function trackPageView(path: string): void {
  trackEvent({ event: 'page_view', path })
  window.gtag?.('event', 'page_view', { page_path: path })
}

export function trackCtaClick(label: string): void {
  trackEvent({ event: 'cta_click', label })
}
