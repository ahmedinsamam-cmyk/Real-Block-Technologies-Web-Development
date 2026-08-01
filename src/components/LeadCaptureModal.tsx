import { useEffect, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, X } from 'lucide-react'
import { Button } from '@/components/Button'
import {
  downloadResource,
  triggerFileDownload,
  type LeadSource,
} from '@/services/leadService'

export interface LeadCaptureFields {
  name: string
  company: string
  email: string
  jobTitle?: string
  industry?: string
}

interface LeadCaptureModalProps {
  open: boolean
  onClose: () => void
  title: string
  description?: string
  resourcePath: string
  resourceId: string
  resourceTitle: string
  source: LeadSource
  fields?: Array<'name' | 'company' | 'email' | 'jobTitle' | 'industry'>
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function LeadCaptureModal({
  open,
  onClose,
  title,
  description = 'Share your details to download this enterprise resource.',
  resourcePath,
  resourceId,
  resourceTitle,
  source,
  fields = ['name', 'company', 'email', 'jobTitle'],
}: LeadCaptureModalProps) {
  const [form, setForm] = useState<LeadCaptureFields>({
    name: '',
    company: '',
    email: '',
    jobTitle: '',
    industry: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof LeadCaptureFields, string>>>({})
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const update = (key: keyof LeadCaptureFields, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof LeadCaptureFields, string>> = {}
    if (fields.includes('name') && !form.name.trim()) next.name = 'Name is required.'
    if (fields.includes('company') && !form.company.trim()) next.company = 'Company is required.'
    if (fields.includes('email')) {
      if (!form.email.trim()) next.email = 'Business email is required.'
      else if (!EMAIL_REGEX.test(form.email)) next.email = 'Enter a valid email address.'
    }
    if (fields.includes('jobTitle') && !form.jobTitle?.trim()) next.jobTitle = 'Job title is required.'
    if (fields.includes('industry') && !form.industry?.trim()) next.industry = 'Industry is required.'
    return next
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    const result = await downloadResource({
      name: form.name.trim(),
      company: form.company.trim(),
      email: form.email.trim(),
      jobTitle: form.jobTitle?.trim(),
      industry: form.industry?.trim(),
      source,
      resourceId,
      resourceTitle,
    })
    setSubmitting(false)

    if (result.success) {
      triggerFileDownload(resourcePath, resourcePath.split('/').pop())
      onClose()
      setForm({ name: '', company: '', email: '', jobTitle: '', industry: '' })
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
            aria-label="Close dialog"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-capture-title"
            className="relative z-10 w-full max-w-lg rounded-2xl border border-border bg-white p-6 shadow-2xl md:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 rounded-md p-1 text-ink-muted hover:bg-surface hover:text-navy"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="mb-2 inline-flex items-center gap-2 text-royal">
              <Download className="h-4 w-4" />
              <span className="text-xs font-semibold tracking-wider uppercase">Resource Download</span>
            </div>
            <h2 id="lead-capture-title" className="font-display text-xl font-bold text-navy md:text-2xl">
              {title}
            </h2>
            <p className="mt-2 text-sm text-ink-muted">{description}</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              {fields.includes('name') && (
                <Field
                  id="lead-name"
                  label="Name"
                  value={form.name}
                  error={errors.name}
                  onChange={(v) => update('name', v)}
                  autoComplete="name"
                />
              )}
              {fields.includes('company') && (
                <Field
                  id="lead-company"
                  label="Company"
                  value={form.company}
                  error={errors.company}
                  onChange={(v) => update('company', v)}
                  autoComplete="organization"
                />
              )}
              {fields.includes('email') && (
                <Field
                  id="lead-email"
                  label="Business Email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={(v) => update('email', v)}
                  autoComplete="email"
                />
              )}
              {fields.includes('jobTitle') && (
                <Field
                  id="lead-job"
                  label="Job Title"
                  value={form.jobTitle ?? ''}
                  error={errors.jobTitle}
                  onChange={(v) => update('jobTitle', v)}
                  autoComplete="organization-title"
                />
              )}
              {fields.includes('industry') && (
                <Field
                  id="lead-industry"
                  label="Industry"
                  value={form.industry ?? ''}
                  error={errors.industry}
                  onChange={(v) => update('industry', v)}
                />
              )}
              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
                {submitting ? 'Preparing download…' : 'Download PDF'}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = 'text',
  autoComplete,
}: {
  id: string
  label: string
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
        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-ink outline-none transition focus:ring-2 focus:ring-royal/30 ${
          error ? 'border-red-400' : 'border-border focus:border-royal'
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  )
}
