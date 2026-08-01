import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowRight, X } from 'lucide-react'
import { Button } from '@/components/Button'
import { trackCtaClick } from '@/utils/analytics'

const HIDDEN_PATHS = ['/contact', '/privacy', '/terms', '/strategy-session', '/portal']

export function StickyConsultationBar() {
  const location = useLocation()
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    setDismissed(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 520)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed || HIDDEN_PATHS.some((path) => location.pathname.startsWith(path))) {
    return null
  }

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      role="region"
      aria-label="Schedule consultation"
    >
      <div className="border-t border-navy/10 bg-white/95 shadow-[0_-8px_30px_rgba(10,10,11,0.08)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-navy md:text-base">
              Speak with an advisor
            </p>
            <p className="hidden text-xs text-ink-muted sm:block md:text-sm">
              Book a strategy session for AI, RWA, FinTech, or blockchain initiatives.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              to="/strategy-session"
              variant="primary"
              size="sm"
              onClick={() => trackCtaClick('sticky_strategy_session')}
            >
              <span className="hidden sm:inline">Book strategy session</span>
              <span className="sm:hidden">Book</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Button>
            <button
              type="button"
              className="rounded p-2 text-ink-muted transition hover:bg-surface hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/25"
              aria-label="Dismiss consultation bar"
              onClick={() => setDismissed(true)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
