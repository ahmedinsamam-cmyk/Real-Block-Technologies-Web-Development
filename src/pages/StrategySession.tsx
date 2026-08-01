import { useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/Button'
import { ConsultationBooking } from '@/components/ConsultationBooking'
import { captureLead } from '@/services/leadService'
import { trackCtaClick, trackEvent } from '@/utils/analytics'
import { COUNTRY_OPTIONS } from '@/utils/i18n'
import { sanitizeText, checkRateLimit } from '@/utils/security'

const FOCUS_AREAS = [
  'RWA Tokenization (TaaS)',
  'AI Solutions',
  'FinTech',
  'Enterprise Consulting (Workday / Dynamics / HubSpot)',
  'Blockchain Advisory',
  'Not sure yet',
] as const

const TIMELINES = ['Exploring (3+ months)', 'Planning (1–3 months)', 'Ready to start (within 30 days)'] as const

const COMPANY_SIZES = ['1–50', '51–200', '201–1,000', '1,000+'] as const

const ROLES = [
  'C-level / Founder',
  'VP / Director',
  'Program / Project lead',
  'Operations / Finance',
  'Other',
] as const

interface QualAnswers {
  focus: string
  timeline: string
  companySize: string
  role: string
  country: string
  name: string
  email: string
  company: string
  challenge: string
}

const initial: QualAnswers = {
  focus: '',
  timeline: '',
  companySize: '',
  role: '',
  country: '',
  name: '',
  email: '',
  company: '',
  challenge: '',
}

export function StrategySessionPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<QualAnswers>(initial)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const qualified = useMemo(() => {
    const readySoon =
      answers.timeline === 'Planning (1–3 months)' ||
      answers.timeline === 'Ready to start (within 30 days)'
    const decisionMaker =
      answers.role === 'C-level / Founder' || answers.role === 'VP / Director'
    return readySoon || decisionMaker
  }, [answers.timeline, answers.role])

  const update = <K extends keyof QualAnswers>(key: K, value: QualAnswers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }

  const canNext = () => {
    if (step === 0) return Boolean(answers.focus && answers.timeline)
    if (step === 1) return Boolean(answers.companySize && answers.role && answers.country)
    if (step === 2) {
      return (
        answers.name.trim().length > 1 &&
        answers.email.includes('@') &&
        answers.company.trim().length > 1 &&
        answers.challenge.trim().length > 10
      )
    }
    return true
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (!checkRateLimit('strategy_session', 5, 60_000)) {
      setError('Please wait a moment before submitting again.')
      return
    }
    setSubmitting(true)
    try {
      await captureLead({
        name: sanitizeText(answers.name),
        email: sanitizeText(answers.email),
        company: sanitizeText(answers.company),
        country: answers.country,
        serviceInterest: answers.focus,
        source: 'consultation',
        message: [
          `Focus: ${answers.focus}`,
          `Timeline: ${answers.timeline}`,
          `Company size: ${answers.companySize}`,
          `Role: ${answers.role}`,
          `Country: ${answers.country}`,
          `Challenge: ${sanitizeText(answers.challenge)}`,
          `Qualified signal: ${qualified ? 'yes' : 'nurture'}`,
        ].join('\n'),
        metadata: {
          flow: 'strategy_session',
          timeline: answers.timeline,
          companySize: answers.companySize,
          role: answers.role,
        },
      })
      trackEvent({
        event: 'strategy_session_qualified',
        label: answers.focus,
      })
      setSubmitted(true)
      setStep(3)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <PageTransition>
      <SEO
        title="Book a Strategy Session"
        description="Qualify your priorities and book a Real Block Technologies strategy session on AI, RWA, FinTech, blockchain, or enterprise platforms."
        path="/strategy-session"
      />
      <PageHero
        eyebrow="Strategy Session"
        title="Book a strategy session with clear qualification"
        description="Answer a few questions so we can prepare a focused conversation—and route you to the right advisors."
      />

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex gap-2">
            {['Focus', 'Context', 'Details', 'Schedule'].map((label, i) => (
              <div key={label} className="flex-1">
                <div
                  className={`h-1 ${i <= step ? 'bg-navy' : 'bg-border'}`}
                  aria-hidden
                />
                <p
                  className={`mt-2 text-[0.65rem] font-semibold tracking-wide uppercase ${
                    i <= step ? 'text-navy' : 'text-ink-muted'
                  }`}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          {!submitted && step < 3 && (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (step < 2) {
                  if (canNext()) setStep((s) => s + 1)
                  return
                }
                void onSubmit(e)
              }}
              className="border border-border bg-white p-6 md:p-8"
            >
              {step === 0 && (
                <div className="space-y-6">
                  <fieldset>
                    <legend className="font-display text-xl font-medium text-navy">
                      What is your primary focus?
                    </legend>
                    <div className="mt-4 space-y-2">
                      {FOCUS_AREAS.map((item) => (
                        <label
                          key={item}
                          className={`flex cursor-pointer items-center gap-3 border px-3 py-3 text-sm ${
                            answers.focus === item
                              ? 'border-navy bg-surface'
                              : 'border-border hover:border-navy/40'
                          }`}
                        >
                          <input
                            type="radio"
                            name="focus"
                            className="accent-navy"
                            checked={answers.focus === item}
                            onChange={() => update('focus', item)}
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="font-display text-xl font-medium text-navy">
                      What is your timeline?
                    </legend>
                    <div className="mt-4 space-y-2">
                      {TIMELINES.map((item) => (
                        <label
                          key={item}
                          className={`flex cursor-pointer items-center gap-3 border px-3 py-3 text-sm ${
                            answers.timeline === item
                              ? 'border-navy bg-surface'
                              : 'border-border hover:border-navy/40'
                          }`}
                        >
                          <input
                            type="radio"
                            name="timeline"
                            className="accent-navy"
                            checked={answers.timeline === item}
                            onChange={() => update('timeline', item)}
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <fieldset>
                    <legend className="font-display text-xl font-medium text-navy">
                      Company size
                    </legend>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {COMPANY_SIZES.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className={`border px-3 py-3 text-sm font-medium ${
                            answers.companySize === item
                              ? 'border-navy bg-navy text-white'
                              : 'border-border text-navy hover:border-navy/40'
                          }`}
                          onClick={() => update('companySize', item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="font-display text-xl font-medium text-navy">Your role</legend>
                    <div className="mt-4 space-y-2">
                      {ROLES.map((item) => (
                        <label
                          key={item}
                          className={`flex cursor-pointer items-center gap-3 border px-3 py-3 text-sm ${
                            answers.role === item
                              ? 'border-navy bg-surface'
                              : 'border-border hover:border-navy/40'
                          }`}
                        >
                          <input
                            type="radio"
                            name="role"
                            className="accent-navy"
                            checked={answers.role === item}
                            onChange={() => update('role', item)}
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div>
                    <label htmlFor="country" className="font-display text-xl font-medium text-navy">
                      Country / region
                    </label>
                    <select
                      id="country"
                      value={answers.country}
                      onChange={(e) => update('country', e.target.value)}
                      className="mt-4 w-full border border-border bg-white px-3 py-3 text-sm outline-none focus:border-navy"
                    >
                      <option value="">Select…</option>
                      {COUNTRY_OPTIONS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="font-display text-xl font-medium text-navy">Your details</h2>
                  <input
                    required
                    placeholder="Full name"
                    value={answers.name}
                    onChange={(e) => update('name', e.target.value)}
                    className="w-full border border-border px-3 py-3 text-sm outline-none focus:border-navy"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Work email"
                    value={answers.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full border border-border px-3 py-3 text-sm outline-none focus:border-navy"
                  />
                  <input
                    required
                    placeholder="Company"
                    value={answers.company}
                    onChange={(e) => update('company', e.target.value)}
                    className="w-full border border-border px-3 py-3 text-sm outline-none focus:border-navy"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe the challenge or opportunity (min. ~10 characters)"
                    value={answers.challenge}
                    onChange={(e) => update('challenge', e.target.value)}
                    className="w-full border border-border px-3 py-3 text-sm outline-none focus:border-navy"
                  />
                </div>
              )}

              {error && <p className="mt-4 text-sm text-red-700">{error}</p>}

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                ) : (
                  <span />
                )}
                <Button
                  type="submit"
                  variant="primary"
                  disabled={!canNext() || submitting}
                  onClick={() => {
                    if (step < 2) trackCtaClick(`strategy_step_${step}`)
                  }}
                >
                  {step === 2 ? (submitting ? 'Submitting…' : 'Continue to schedule') : 'Continue'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          )}

          {(submitted || step === 3) && (
            <div className="border border-border bg-white p-6 md:p-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-royal" />
                <div>
                  <h2 className="font-display text-2xl font-medium text-navy">
                    {qualified ? 'You are ready to schedule' : 'Thanks — we will follow up'}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {qualified
                      ? 'Based on your answers, a strategy session is a strong next step. Pick a time below or use Calendly.'
                      : 'We have your details. Our team will send a preparation note and recommend the right conversation format.'}
                  </p>
                  <p className="mt-3 text-sm text-ink-muted">
                    Prefer email?{' '}
                    <a href="mailto:contact@realblocktechnologies.com" className="font-semibold text-navy">
                      contact@realblocktechnologies.com
                    </a>
                  </p>
                  <Link to="/resources" className="mt-4 inline-block text-sm font-semibold text-royal">
                    Browse preparation resources →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {(submitted || step === 3) && (
        <ConsultationBooking
          title="Select your strategy session time"
          description="Choose a meeting type. Calendar confirmation is sent automatically."
          ctaLabel="Open calendar"
          embed
        />
      )}
    </PageTransition>
  )
}
