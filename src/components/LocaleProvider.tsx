import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  detectLocale,
  type AppLocale,
} from '@/utils/i18n'
import { translate } from '@/i18n/translations'

interface LocaleContextValue {
  locale: AppLocale
  setLocale: (locale: AppLocale) => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

const STORAGE_KEY = 'rbt_locale'

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<AppLocale>(() => {
    if (typeof window === 'undefined') return DEFAULT_LOCALE
    const stored = window.localStorage.getItem(STORAGE_KEY) as AppLocale | null
    if (stored && SUPPORTED_LOCALES.some((l) => l.code === stored)) return stored
    return detectLocale()
  })

  const setLocale = useCallback((next: AppLocale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const meta = SUPPORTED_LOCALES.find((l) => l.code === locale) ?? SUPPORTED_LOCALES[0]

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = meta.dir
  }, [locale, meta.dir])

  const t = useCallback((key: string) => translate(locale, key), [locale])

  const value = useMemo(
    () => ({ locale, setLocale, t, dir: meta.dir }),
    [locale, setLocale, t, meta.dir],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => undefined,
      t: (key: string) => translate(DEFAULT_LOCALE, key),
      dir: 'ltr' as const,
    }
  }
  return ctx
}

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { locale, setLocale, t } = useLocale()

  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">{t('common.language')}</span>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as AppLocale)}
        className={`appearance-none border bg-transparent py-1.5 pr-6 pl-2 text-xs font-medium outline-none ${
          dark
            ? 'border-white/20 text-white/80 hover:border-white'
            : 'border-border text-ink-muted hover:border-navy hover:text-navy'
        }`}
        aria-label={t('common.language')}
      >
        {SUPPORTED_LOCALES.map((l) => (
          <option key={l.code} value={l.code} className="text-navy">
            {l.label}
          </option>
        ))}
      </select>
    </label>
  )
}
