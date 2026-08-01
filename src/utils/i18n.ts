/**
 * Internationalization architecture (multi-language ready).
 * Currency-neutral consulting positioning + timezone-aware forms.
 *
 * Future: wire react-i18next or similar. For now, provide locale context + copy map.
 */

export type AppLocale = 'en' | 'es' | 'ar' | 'zh' | 'fr'

export const SUPPORTED_LOCALES: Array<{ code: AppLocale; label: string; dir: 'ltr' | 'rtl' }> = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'es', label: 'Español', dir: 'ltr' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'zh', label: '中文', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
]

export const DEFAULT_LOCALE: AppLocale = 'en'

/** Currency-neutral enterprise engagement messaging */
export const COMMERCIAL_POSITIONING = {
  model: 'Scoped professional services engagements',
  pricingNote:
    'Typical enterprise engagements range from $5,000 to $50,000, scoped to objectives, complexity, and delivery model.',
  currencyNeutral: true,
  engagementRange: { min: 5000, max: 50000, currency: 'USD' },
} as const

export const COUNTRY_OPTIONS = [
  'Sri Lanka',
  'United States',
  'United Kingdom',
  'United Arab Emirates',
  'Saudi Arabia',
  'Singapore',
  'India',
  'Germany',
  'Canada',
  'Australia',
  'Other',
] as const

export function detectLocale(): AppLocale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE
  const lang = navigator.language.slice(0, 2).toLowerCase()
  const match = SUPPORTED_LOCALES.find((l) => l.code === lang)
  return match?.code ?? DEFAULT_LOCALE
}

export function detectTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  } catch {
    return 'UTC'
  }
}

/** Minimal UI strings for future locale packs */
export const UI_STRINGS: Record<AppLocale, Record<string, string>> = {
  en: {
    bookConsultation: 'Book a Free Consultation',
    subscribe: 'Subscribe',
    downloadResource: 'Download Resource',
    contactUs: 'Contact Us',
  },
  es: {
    bookConsultation: 'Reserve una consulta gratuita',
    subscribe: 'Suscribirse',
    downloadResource: 'Descargar recurso',
    contactUs: 'Contáctenos',
  },
  fr: {
    bookConsultation: 'Réserver une consultation gratuite',
    subscribe: "S'abonner",
    downloadResource: 'Télécharger la ressource',
    contactUs: 'Nous contacter',
  },
  zh: {
    bookConsultation: '预约免费咨询',
    subscribe: '订阅',
    downloadResource: '下载资料',
    contactUs: '联系我们',
  },
  ar: {
    bookConsultation: 'احجز استشارة مجانية',
    subscribe: 'اشترك',
    downloadResource: 'تحميل المورد',
    contactUs: 'اتصل بنا',
  },
}
