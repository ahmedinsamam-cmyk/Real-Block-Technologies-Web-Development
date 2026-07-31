import { useEffect, useState, type ReactNode } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import App from '@/App'
import { LoadingScreen } from '@/components/LoadingScreen'
import { initAnalytics, trackPageView } from '@/utils/analytics'

function AnalyticsListener() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location.pathname, location.search])

  return null
}

export function Root({ children }: { children?: ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initAnalytics()
    const timer = window.setTimeout(() => setLoading(false), 900)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      <AnalyticsListener />
      {loading && <LoadingScreen />}
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {children ?? <App />}
      </div>
    </BrowserRouter>
  )
}
