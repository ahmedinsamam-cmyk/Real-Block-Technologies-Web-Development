import { useEffect, type ReactNode } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import App from '@/App'
import { initAnalytics, trackPageView } from '@/utils/analytics'
import { enforceHttpsInProduction, loadRecaptcha } from '@/utils/security'

function AnalyticsListener() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location.pathname, location.search])

  return null
}

export function Root({ children }: { children?: ReactNode }) {
  useEffect(() => {
    enforceHttpsInProduction()
    initAnalytics()

    let cancelled = false
    const run = () => {
      if (!cancelled) void loadRecaptcha()
    }

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }

    let idleId: number | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    if (typeof w.requestIdleCallback === 'function') {
      idleId = w.requestIdleCallback(run, { timeout: 2500 })
    } else {
      timeoutId = setTimeout(run, 800)
    }

    return () => {
      cancelled = true
      if (idleId !== undefined && typeof w.cancelIdleCallback === 'function') {
        w.cancelIdleCallback(idleId)
      }
      if (timeoutId !== undefined) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <BrowserRouter>
      <AnalyticsListener />
      {children ?? <App />}
    </BrowserRouter>
  )
}
