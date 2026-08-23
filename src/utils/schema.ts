import { COMPANY } from '@/utils/constants'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: COMPANY.url,
    logo: `${COMPANY.url}/favicon.svg`,
    description:
      'Real Block Technologies helps mining and mineral companies identify, value and structure economic rights arising from their resources into potential capital products, supported by digital asset registry and management infrastructure.',
    slogan: COMPANY.tagline,
    sameAs: [
      'https://www.linkedin.com/company/real-block-technologies/',
      'https://twitter.com/realblocktech',
      'https://www.youtube.com/@realblocktechnologies',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: COMPANY.email,
      availableLanguage: ['English'],
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Resource Capital',
      'Mining finance',
      'Mining royalty financing',
      'Mineral project financing',
      'Critical mineral financing',
      'Future production financing',
      'Mineral inventory financing',
      'Digital asset registry for mining',
    ],
  }
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: COMPANY.name,
    url: COMPANY.url,
    image: `${COMPANY.url}/og-image.png`,
    description:
      'Resource intelligence, capital-product structuring and digital asset registry services for mining and mineral companies.',
    priceRange: '$$$',
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    serviceType: [
      'Resource Capital structuring',
      'Mining asset intelligence',
      'Royalty and production structuring',
      'Digital asset registry',
      'Financial modelling for mining',
    ],
  }
}

export function articleSchema(article: {
  title: string
  description: string
  datePublished: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    author: {
      '@type': 'Organization',
      name: COMPANY.name,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      logo: {
        '@type': 'ImageObject',
        url: `${COMPANY.url}/favicon.svg`,
      },
    },
    mainEntityOfPage: `${COMPANY.url}${article.path}`,
  }
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function injectJsonLd(id: string, data: Record<string, unknown>): void {
  if (typeof document === 'undefined') return
  let script = document.getElementById(id) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}
