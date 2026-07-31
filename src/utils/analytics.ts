/**
 * Analytics placeholders for GA4, LinkedIn Insight Tag, and Meta Pixel.
 * Replace measurement IDs via Vite env vars before production launch.
 *
 * VITE_GA4_MEASUREMENT_ID
 * VITE_LINKEDIN_PARTNER_ID
 * VITE_META_PIXEL_ID
 */

export type AnalyticsEvent =
  | 'page_view'
  | 'cta_click'
  | 'consultation_booking'
  | 'resource_download'
  | 'newsletter_subscription'
  | 'lead_capture'
  | 'linkedin_follow'

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
  }
}

const isBrowser = typeof window !== 'undefined'

export function initAnalytics(): void {
  if (!isBrowser) return

  const ga4 = import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined
  const linkedIn = import.meta.env.VITE_LINKEDIN_PARTNER_ID as string | undefined
  const meta = import.meta.env.VITE_META_PIXEL_ID as string | undefined

  if (ga4) {
    // Placeholder: load gtag.js in production when ID is configured
    window.dataLayer = window.dataLayer || []
    window.gtag =
      window.gtag ||
      function gtag(...args: unknown[]) {
        window.dataLayer?.push(args)
      }
    window.gtag('js', new Date())
    window.gtag('config', ga4)
  }

  if (linkedIn) {
    // Placeholder for LinkedIn Insight Tag partner ID wiring
    window.lintrk =
      window.lintrk ||
      function lintrk() {
        /* LinkedIn Insight Tag stub */
      }
  }

  if (meta) {
    // Placeholder for Meta Pixel
    window.fbq =
      window.fbq ||
      function fbq() {
        /* Meta Pixel stub */
      }
  }

  if (import.meta.env.DEV) {
    console.info('[analytics] Initialized (placeholder mode)', { ga4, linkedIn, meta })
  }
}

export function trackEvent(payload: AnalyticsPayload): void {
  if (!isBrowser) return

  const detail = {
    ...payload,
    path: payload.path ?? window.location.pathname,
    timestamp: new Date().toISOString(),
  }

  // Google Analytics 4
  window.gtag?.('event', payload.event, {
    event_label: payload.label,
    page_path: detail.path,
    ...payload.metadata,
  })

  // LinkedIn Insight conversion (configure conversion IDs in production)
  if (payload.event === 'consultation_booking' || payload.event === 'lead_capture') {
    window.lintrk?.('track', { conversion_id: payload.label })
  }

  // Meta Pixel
  if (payload.event === 'lead_capture' || payload.event === 'newsletter_subscription') {
    window.fbq?.('track', 'Lead', { content_name: payload.label })
  }

  if (import.meta.env.DEV) {
    console.info('[analytics]', detail)
  }
}

export function trackPageView(path: string): void {
  trackEvent({ event: 'page_view', path })
}

export function trackCtaClick(label: string): void {
  trackEvent({ event: 'cta_click', label })
}
