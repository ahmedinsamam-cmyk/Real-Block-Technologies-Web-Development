import { useEffect } from 'react'
import { SEO_KEYWORDS } from '@/utils/constants'
import {
  injectJsonLd,
  organizationSchema,
  professionalServiceSchema,
} from '@/utils/schema'

interface SEOProps {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
  image?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  noIndex?: boolean
}

const SITE_NAME = 'Real Block Technologies'
const BASE_URL = 'https://realblocktechnologies.com'
const DEFAULT_IMAGE = `${BASE_URL}/og-image.svg`

export function SEO({
  title,
  description,
  path = '/',
  type = 'website',
  image = DEFAULT_IMAGE,
  jsonLd,
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
    document.title = fullTitle

    const setMeta = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attr, key)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    setMeta('name', 'description', description)
    setMeta('name', 'keywords', SEO_KEYWORDS.join(', '))
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', `${BASE_URL}${path}`)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:image', image)
    setMeta('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow')

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${BASE_URL}${path}`

    injectJsonLd('org-schema', organizationSchema())
    injectJsonLd('service-schema', professionalServiceSchema())

    if (jsonLd) {
      const payload = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      payload.forEach((item, index) => injectJsonLd(`page-schema-${index}`, item))
    }
  }, [title, description, path, type, image, jsonLd, noIndex])

  return null
}
