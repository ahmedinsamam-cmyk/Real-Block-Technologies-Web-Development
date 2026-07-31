import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Mail, Phone, MapPin } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/Button'
import { COMPANY } from '@/utils/constants'
import {
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from '@/utils/validation'

const initialForm: ContactFormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

export function ContactPage() {
  const [form, setForm] = useState<ContactFormData>(initialForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const nextErrors = validateContactForm(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    // Frontend-only demo submission — wire to CRM/API in production.
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setForm(initialForm)
    }, 700)
  }

  return (
    <PageTransition>
      <SEO
        title="Contact"
        description="Schedule a consultation with Real Block Technologies. Contact our team about AI, blockchain, and real-world asset initiatives."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your transformation priorities"
        description="Share a brief overview of your initiative and our team will follow up to schedule a consultation."
      />

      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">Book a consultation</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
              Whether you are evaluating tokenization readiness, designing an AI roadmap, or modernizing
              financial operations, we are ready to help you move with clarity.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 text-sm text-ink-muted">
                <Mail className="mt-0.5 h-4 w-4 text-royal" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-royal">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-muted">
                <Phone className="mt-0.5 h-4 w-4 text-royal" />
                <a href={`tel:${COMPANY.phone.replace(/\D/g, '')}`} className="hover:text-royal">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-muted">
                <MapPin className="mt-0.5 h-4 w-4 text-royal" />
                {COMPANY.address}
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
                  Your message has been received. A member of our team will respond shortly to schedule
                  your consultation.
                </p>
                <Button className="mt-6" variant="ghost" onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Name"
                    id="name"
                    value={form.name}
                    error={errors.name}
                    onChange={(v) => updateField('name', v)}
                    autoComplete="name"
                  />
                  <Field
                    label="Company"
                    id="company"
                    value={form.company}
                    error={errors.company}
                    onChange={(v) => updateField('company', v)}
                    autoComplete="organization"
                  />
                  <Field
                    label="Email"
                    id="email"
                    type="email"
                    value={form.email}
                    error={errors.email}
                    onChange={(v) => updateField('email', v)}
                    autoComplete="email"
                  />
                  <Field
                    label="Phone"
                    id="phone"
                    type="tel"
                    value={form.phone}
                    error={errors.phone}
                    onChange={(v) => updateField('phone', v)}
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:ring-2 focus:ring-royal/30 ${
                      errors.message ? 'border-red-400' : 'border-border focus:border-royal'
                    }`}
                    placeholder="Tell us about your initiative, timeline, and objectives."
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Book Consultation'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

interface FieldProps {
  label: string
  id: string
  value: string
  error?: string
  onChange: (value: string) => void
  type?: string
  autoComplete?: string
}

function Field({ label, id, value, error, onChange, type = 'text', autoComplete }: FieldProps) {
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
        className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:ring-2 focus:ring-royal/30 ${
          error ? 'border-red-400' : 'border-border focus:border-royal'
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  )
}
