import { useEffect, useRef } from 'react'
import { CalendarDays, Clock3 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { CALENDLY_URL, CONSULTATION_TOPICS } from '@/utils/constants'
import { trackEvent, trackCtaClick } from '@/utils/analytics'

interface ConsultationBookingProps {
  title?: string
  description?: string
  ctaLabel?: string
  /** When true, embed the Calendly inline widget */
  embed?: boolean
  variant?: 'section' | 'compact'
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement
        prefill?: Record<string, string>
        utm?: Record<string, string>
      }) => void
    }
  }
}

function loadCalendlyAssets(): Promise<void> {
  return new Promise((resolve) => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[data-calendly]')
    if (existingScript && window.Calendly) {
      resolve()
      return
    }

    if (!document.querySelector('link[data-calendly-css]')) {
      const link = document.createElement('link')
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      link.rel = 'stylesheet'
      link.setAttribute('data-calendly-css', 'true')
      document.head.appendChild(link)
    }

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve())
      return
    }

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.setAttribute('data-calendly', 'true')
    script.onload = () => resolve()
    document.body.appendChild(script)
  })
}

export function ConsultationBooking({
  title = 'Ready to Transform Your Business?',
  description = 'Book a free 30-minute discovery consultation with our enterprise technology advisors.',
  ctaLabel = 'Book a Free Consultation',
  embed = false,
  variant = 'section',
}: ConsultationBookingProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!embed || !containerRef.current) return

    let cancelled = false

    loadCalendlyAssets().then(() => {
      if (cancelled || !containerRef.current || !window.Calendly) return
      containerRef.current.innerHTML = ''
      window.Calendly.initInlineWidget({
        url: `${CALENDLY_URL}?hide_gdpr_banner=1`,
        parentElement: containerRef.current,
      })
      trackEvent({ event: 'consultation_booking', label: 'calendly_embed_view' })
    })

    return () => {
      cancelled = true
    }
  }, [embed])

  if (variant === 'compact') {
    return (
      <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
        <div className="flex items-center gap-2 text-royal">
          <CalendarDays className="h-5 w-5" />
          <span className="text-xs font-semibold tracking-wider uppercase">Consultation</span>
        </div>
        <h3 className="mt-3 font-display text-xl font-bold text-navy">{title}</h3>
        <p className="mt-2 text-sm text-ink-muted">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {CONSULTATION_TOPICS.map((topic) => (
            <li key={topic} className="rounded-md bg-surface px-2.5 py-1 text-xs font-semibold text-navy">
              {topic}
            </li>
          ))}
        </ul>
        <Button
          to="/contact#consultation"
          variant="primary"
          className="mt-6"
          onClick={() => trackCtaClick(ctaLabel)}
        >
          {ctaLabel}
        </Button>
      </div>
    )
  }

  return (
    <section className="bg-white py-20 md:py-24" id="consultation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Book a Consultation" title={title} description={description} />

        <div className="mx-auto mb-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-navy">
            <Clock3 className="h-3.5 w-3.5 text-royal" />
            30-minute discovery consultation
          </span>
          {CONSULTATION_TOPICS.map((topic) => (
            <span
              key={topic}
              className="rounded-md border border-border bg-white px-3 py-1.5 text-xs font-semibold text-ink-muted"
            >
              {topic}
            </span>
          ))}
        </div>

        {embed ? (
          <motion.div
            className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              ref={containerRef}
              className="calendly-inline-widget min-h-[700px] w-full"
              data-url={CALENDLY_URL}
            />
            <p className="border-t border-border px-4 py-3 text-center text-xs text-ink-muted">
              Scheduler powered by Calendly. Replace{' '}
              <span className="font-mono text-navy">{CALENDLY_URL}</span> with your live scheduling link.
            </p>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <Button
              to="/contact#consultation"
              variant="gold"
              size="lg"
              onClick={() => trackCtaClick(ctaLabel)}
            >
              <CalendarDays className="h-4 w-4" />
              {ctaLabel}
            </Button>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-royal hover:text-royal-dark"
              onClick={() => trackEvent({ event: 'consultation_booking', label: 'calendly_external' })}
            >
              Or open Calendly in a new tab
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
