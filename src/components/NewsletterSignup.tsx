import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/Button'
import { submitNewsletter } from '@/services/leadService'

interface NewsletterSignupProps {
  variant?: 'light' | 'dark' | 'footer'
  className?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function NewsletterSignup({ variant = 'light', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const isDark = variant === 'dark' || variant === 'footer'

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!email.trim()) {
      setError('Please enter your business email.')
      return
    }
    if (!EMAIL_REGEX.test(email)) {
      setError('Please enter a valid business email.')
      return
    }

    setSubmitting(true)
    setError('')
    const result = await submitNewsletter(email.trim())
    setSubmitting(false)

    if (result.success) {
      setSuccess(true)
      setEmail('')
    } else {
      setError(result.message)
    }
  }

  if (success) {
    return (
      <div
        className={`flex items-start gap-3 rounded-xl border p-5 ${
          isDark ? 'border-white/15 bg-white/5 text-white' : 'border-border bg-surface text-navy'
        } ${className}`}
      >
        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${isDark ? 'text-gold' : 'text-royal'}`} />
        <p className="text-sm leading-relaxed">
          Thank you for subscribing to Real Block Technologies insights.
        </p>
      </div>
    )
  }

  return (
    <div
      className={`rounded-xl border p-5 md:p-6 ${
        isDark ? 'border-white/15 bg-white/5' : 'border-border bg-white'
      } ${className}`}
    >
      <h3
        className={`font-display text-lg font-bold ${isDark ? 'text-white' : 'text-navy'} ${
          variant === 'footer' ? 'text-base' : ''
        }`}
      >
        Stay Ahead of Digital Transformation
      </h3>
      <p className={`mt-2 text-sm ${isDark ? 'text-white/65' : 'text-ink-muted'}`}>
        Receive insights on AI, Blockchain, Tokenization, and Enterprise Technology.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row" noValidate>
        <div className="flex-1">
          <label htmlFor={`newsletter-email-${variant}`} className="sr-only">
            Business Email
          </label>
          <input
            id={`newsletter-email-${variant}`}
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (error) setError('')
            }}
            placeholder="Business email"
            className={`w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-royal/30 ${
              isDark
                ? 'border-white/20 bg-navy/40 text-white placeholder:text-white/40 focus:border-gold'
                : 'border-border bg-white text-ink focus:border-royal'
            } ${error ? 'border-red-400' : ''}`}
          />
          {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
        </div>
        <Button type="submit" variant={isDark ? 'gold' : 'primary'} disabled={submitting}>
          {submitting ? 'Subscribing…' : 'Subscribe'}
        </Button>
      </form>
      <p className={`mt-3 text-[0.7rem] ${isDark ? 'text-white/40' : 'text-ink-muted'}`}>
        Integration-ready for Mailchimp, ConvertKit, and HubSpot.
      </p>
    </div>
  )
}
