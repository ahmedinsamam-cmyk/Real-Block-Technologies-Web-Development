import { useEffect, useRef, useState } from 'react'
import { CalendarDays, Clock3, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { useLocale } from '@/components/LocaleProvider'
import { CALENDLY_URL, CONSULTATION_TOPICS, MEETING_TYPES } from '@/utils/constants'
import { trackEvent, trackCtaClick } from '@/utils/analytics'

interface ConsultationBookingProps {
  title?: string
  description?: string
  ctaLabel?: string
  ctaTo?: string
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
  description = 'Book a consultation with our enterprise technology advisors. Calendar invites are sent automatically via Calendly.',
  ctaLabel = 'Book a Free Consultation',
  ctaTo = '/strategy-session',
  embed = false,
  variant = 'section',
}: ConsultationBookingProps) {
  const { t } = useLocale()
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedMeeting, setSelectedMeeting] = useState<string>(MEETING_TYPES[0].slug)
  const [confirmed, setConfirmed] = useState(false)

  const activeMeeting = MEETING_TYPES.find((m) => m.slug === selectedMeeting) ?? MEETING_TYPES[0]
  const calendlyEventUrl = `${CALENDLY_URL}/${activeMeeting.slug}`

  useEffect(() => {
    if (!embed || !containerRef.current) return

    let cancelled = false

    loadCalendlyAssets().then(() => {
      if (cancelled || !containerRef.current || !window.Calendly) return
      containerRef.current.innerHTML = ''
      window.Calendly.initInlineWidget({
        url: `${calendlyEventUrl}?hide_gdpr_banner=1`,
        parentElement: containerRef.current,
      })
      trackEvent({
        event: 'consultation_booking',
        label: `calendly_embed_${activeMeeting.slug}`,
      })
    })

    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== 'object' || !event.data) return
      const data = event.data as { event?: string }
      if (data.event === 'calendly.event_scheduled') {
        setConfirmed(true)
        trackEvent({ event: 'consultation_booking', label: 'calendly_scheduled' })
      }
    }
    window.addEventListener('message', onMessage)

    return () => {
      cancelled = true
      window.removeEventListener('message', onMessage)
    }
  }, [embed, calendlyEventUrl, activeMeeting.slug])

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
          to={ctaTo}
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
        <SectionHeading eyebrow={t('booking.eyebrow')} title={title} description={description} />

        <div className="mx-auto mb-8 grid max-w-4xl gap-3 md:grid-cols-3">
          {MEETING_TYPES.map((meeting) => (
            <button
              key={meeting.slug}
              type="button"
              onClick={() => {
                setSelectedMeeting(meeting.slug)
                setConfirmed(false)
                trackCtaClick(`meeting_type_${meeting.slug}`)
              }}
              className={`rounded-xl border p-4 text-left transition ${
                selectedMeeting === meeting.slug
                  ? 'border-royal bg-royal/5 shadow-sm'
                  : 'border-border bg-surface hover:border-royal/40'
              }`}
            >
              <p className="font-display text-sm font-bold text-navy">{meeting.title}</p>
              <p className="mt-1 flex items-center gap-1 text-xs text-ink-muted">
                <Clock3 className="h-3.5 w-3.5" />
                {meeting.duration}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">{meeting.description}</p>
            </button>
          ))}
        </div>

        <div className="mx-auto mb-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {CONSULTATION_TOPICS.map((topic) => (
            <span
              key={topic}
              className="rounded-md border border-border bg-white px-3 py-1.5 text-xs font-semibold text-ink-muted"
            >
              {topic}
            </span>
          ))}
        </div>

        {confirmed && (
          <div className="mx-auto mb-6 flex max-w-3xl items-start gap-3 rounded-xl border border-royal/20 bg-royal/5 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-royal" />
            <div>
              <p className="font-display text-sm font-bold text-navy">Consultation confirmed</p>
              <p className="mt-1 text-sm text-ink-muted">
                A calendar invitation has been sent via Calendly. Our team looks forward to speaking with you.
              </p>
            </div>
          </div>
        )}

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
              data-url={calendlyEventUrl}
            />
            <p className="border-t border-border px-4 py-3 text-center text-xs text-ink-muted">
              Embedded Calendly scheduler for <span className="font-semibold text-navy">{activeMeeting.title}</span>.
              Replace event slugs under your Calendly account when live.
            </p>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <Button
              to={ctaTo}
              variant="gold"
              size="lg"
              onClick={() => trackCtaClick(ctaLabel)}
            >
              <CalendarDays className="h-4 w-4" />
              {ctaLabel}
            </Button>
            <a
              href={calendlyEventUrl}
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
