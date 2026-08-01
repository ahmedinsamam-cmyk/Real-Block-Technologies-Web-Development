/**
 * Security utilities: sanitization, rate limiting, reCAPTCHA helpers.
 *
 * Configure:
 *   VITE_RECAPTCHA_SITE_KEY
 *   VITE_RECAPTCHA_ENABLED=true
 */

const RATE_LIMIT_KEY = 'rbt_rate_limit_v1'

export function sanitizeText(input: string, maxLength = 2000): string {
  return input
    .replace(/[^\S\n\r\t ]+/g, '')
    .split('')
    .filter((ch) => {
      const code = ch.charCodeAt(0)
      return code === 9 || code === 10 || code === 13 || code >= 32
    })
    .join('')
    .replace(/<[^>]*>/g, '')
    .trim()
    .slice(0, maxLength)
}

export function sanitizeEmail(input: string): string {
  return sanitizeText(input, 254).toLowerCase()
}

export function sanitizeLeadFields<T extends Record<string, string | undefined>>(fields: T): T {
  const next = { ...fields }
  for (const key of Object.keys(next) as Array<keyof T>) {
    const value = next[key]
    if (typeof value === 'string') {
      next[key] = sanitizeText(value, key === 'message' ? 5000 : 200) as T[keyof T]
    }
  }
  return next
}

interface RateLimitBucket {
  count: number
  windowStart: number
}

/** Simple client-side rate limit (complement with server-side limits in production) */
export function checkRateLimit(
  action: string,
  limit = 5,
  windowMs = 60_000,
): { allowed: boolean; retryAfterMs: number } {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY)
    const store = (raw ? JSON.parse(raw) : {}) as Record<string, RateLimitBucket>
    const now = Date.now()
    const bucket = store[action]

    if (!bucket || now - bucket.windowStart > windowMs) {
      store[action] = { count: 1, windowStart: now }
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(store))
      return { allowed: true, retryAfterMs: 0 }
    }

    if (bucket.count >= limit) {
      return { allowed: false, retryAfterMs: windowMs - (now - bucket.windowStart) }
    }

    bucket.count += 1
    store[action] = bucket
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(store))
    return { allowed: true, retryAfterMs: 0 }
  } catch {
    return { allowed: true, retryAfterMs: 0 }
  }
}

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

let recaptchaLoading: Promise<void> | null = null

export function isRecaptchaEnabled(): boolean {
  return (
    import.meta.env.VITE_RECAPTCHA_ENABLED === 'true' &&
    Boolean(import.meta.env.VITE_RECAPTCHA_SITE_KEY)
  )
}

export async function loadRecaptcha(): Promise<void> {
  if (!isRecaptchaEnabled() || typeof window === 'undefined') return
  if (window.grecaptcha) return
  if (recaptchaLoading) return recaptchaLoading

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string
  recaptchaLoading = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA'))
    document.head.appendChild(script)
  })

  return recaptchaLoading
}

/** Returns a reCAPTCHA v3 token when enabled; otherwise empty string */
export async function getRecaptchaToken(action: string): Promise<string> {
  if (!isRecaptchaEnabled()) return ''
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string
  await loadRecaptcha()

  return new Promise((resolve) => {
    const timeout = window.setTimeout(() => resolve(''), 2500)

    if (!window.grecaptcha?.ready) {
      window.clearTimeout(timeout)
      resolve('')
      return
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha
        ?.execute(siteKey, { action })
        .then((token) => {
          window.clearTimeout(timeout)
          resolve(token)
        })
        .catch(() => {
          window.clearTimeout(timeout)
          resolve('')
        })
    })
  })
}

export function enforceHttpsInProduction(): void {
  if (typeof window === 'undefined') return
  if (!import.meta.env.PROD) return
  if (window.location.protocol === 'https:') return
  if (window.location.hostname === 'localhost') return
  window.location.replace(`https://${window.location.host}${window.location.pathname}${window.location.search}`)
}
