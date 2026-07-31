import { useEffect, useState, type FormEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, Mail, MapPin, Globe2 } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/Button'
import { ConsultationBooking } from '@/components/ConsultationBooking'
import { COMPANY } from '@/utils/constants'
import { COUNTRY_OPTIONS, detectTimezone, COMMERCIAL_POSITIONING } from '@/utils/i18n'
import {
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from '@/utils/validation'
import { captureLead } from '@/services/leadService'

const initialForm: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  jobTitle: '',
  industry: '',
  country: '',
  phone: '',
  serviceInterest: '',
  message: '',
}

const industries = [
  'Real Estate',
  'Financial Services',
  'Manufacturing',
  'Healthcare',
  'Logistics',
  'Professional Services',
  'Other',
]

const serviceInterests = [
  { value: 'ai_transformation', label: 'AI Transformation' },
  { value: 'rwa_tokenization', label: 'RWA Tokenization' },
  { value: 'blockchain_strategy', label: 'Blockchain Strategy' },
  { value: 'enterprise_automation', label: 'Enterprise Automation' },
  { value: 'treasury_fintech', label: 'Treasury & FinTech' },
  { value: 'software_development', label: 'Software Development' },
  { value: 'general', label: 'General Inquiry' },
]

export function ContactPage() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const location = useLocation()
  const timezone = detectTimezone()

  useEffect(() => {
    if (location.hash === '#consultation') {
      document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash])

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const nextErrors = validateContactForm(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    const result = await captureLead({
      firstName: form.firstName,
      lastName: form.lastName,
      name: `${form.firstName} ${form.lastName}`,
      company: form.company,
      email: form.email,
      jobTitle: form.jobTitle,
      industry: form.industry,
      country: form.country,
      phone: form.phone,
      serviceInterest: form.serviceInterest,
      message: form.message,
      source: 'contact_form',
      metadata: { timezone },
    })
    setSubmitting(false)

    if (result.success) {
      setSubmitted(true)
      setForm(initialForm)
    }
  }

  return (
    <PageTransition>
      <SEO
        title="Contact"
        description="Schedule a consultation with Real Block Technologies. Global enterprise contact form for AI, blockchain, and RWA initiatives."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your transformation priorities"
        description="Submit an international inquiry or book a Calendly consultation. Timezone-aware scheduling and currency-neutral proposals."
      />

      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.3fr] lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">Global enterprise inquiry</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
              {COMMERCIAL_POSITIONING.pricingNote}
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 text-sm text-ink-muted">
                <Mail className="mt-0.5 h-4 w-4 text-royal" aria-hidden />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-royal">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-muted">
                <MapPin className="mt-0.5 h-4 w-4 text-royal" aria-hidden />
                {COMPANY.address}
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-muted">
                <Globe2 className="mt-0.5 h-4 w-4 text-royal" />
                Detected timezone: {timezone}
              </li>
            </ul>
          </div>

          <motion.div
            className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-royal" />
                <h3 className="mt-4 font-display text-xl font-bold text-navy">Thank you for reaching out</h3>
                <p className="mt-2 max-w-md text-sm text-ink-muted">
                  Your inquiry was captured for HubSpot-ready CRM follow-up. Book time below if you prefer an
                  immediate calendar slot.
                </p>
                <Button className="mt-6" variant="ghost" onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First Name" id="firstName" value={form.firstName} error={errors.firstName} onChange={(v) => updateField('firstName', v)} autoComplete="given-name" />
                  <Field label="Last Name" id="lastName" value={form.lastName} error={errors.lastName} onChange={(v) => updateField('lastName', v)} autoComplete="family-name" />
                  <Field label="Business Email" id="email" type="email" value={form.email} error={errors.email} onChange={(v) => updateField('email', v)} autoComplete="email" />
                  <Field label="Company Name" id="company" value={form.company} error={errors.company} onChange={(v) => updateField('company', v)} autoComplete="organization" />
                  <Field label="Job Title" id="jobTitle" value={form.jobTitle} error={errors.jobTitle} onChange={(v) => updateField('jobTitle', v)} autoComplete="organization-title" />
                  <Field label="Phone" id="phone" type="tel" value={form.phone} error={errors.phone} onChange={(v) => updateField('phone', v)} autoComplete="tel" />
                  <SelectField
                    label="Industry"
                    id="industry"
                    value={form.industry}
                    error={errors.industry}
                    onChange={(v) => updateField('industry', v)}
                    options={industries.map((i) => ({ value: i, label: i }))}
                  />
                  <SelectField
                    label="Country"
                    id="country"
                    value={form.country}
                    error={errors.country}
                    onChange={(v) => updateField('country', v)}
                    options={COUNTRY_OPTIONS.map((c) => ({ value: c, label: c }))}
                  />
                </div>
                <SelectField
                  label="Service Interest"
                  id="serviceInterest"
                  value={form.serviceInterest}
                  error={errors.serviceInterest}
                  onChange={(v) => updateField('serviceInterest', v)}
                  options={serviceInterests}
                />
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-royal/30 ${
                      errors.message ? 'border-red-400' : 'border-border focus:border-royal'
                    }`}
                    placeholder="Tell us about objectives, timeline, and stakeholders."
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
                </div>
                <p className="text-[0.7rem] text-ink-muted">
                  Protected with validation, sanitization, rate limiting, and optional Google reCAPTCHA.
                </p>
                <Button type="submit" variant="primary" size="lg" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Submit Inquiry'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <ConsultationBooking
        embed
        title="Book a Free Consultation"
        description="Choose a meeting type and schedule instantly. Confirmation and calendar invites are handled by Calendly."
      />
    </PageTransition>
  )
}

function Field({
  label,
  id,
  value,
  error,
  onChange,
  type = 'text',
  autoComplete,
}: {
  label: string
  id: string
  value: string
  error?: string
  onChange: (value: string) => void
  type?: string
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-royal/30 ${
          error ? 'border-red-400' : 'border-border focus:border-royal'
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  )
}

function SelectField({
  label,
  id,
  value,
  error,
  onChange,
  options,
}: {
  label: string
  id: string
  value: string
  error?: string
  onChange: (value: string) => void
  options: Array<{ value: string; label: string }>
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-royal/30 ${
          error ? 'border-red-400' : 'border-border focus:border-royal'
        }`}
      >
        <option value="">Select…</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  )
}
