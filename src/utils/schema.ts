import { COMPANY } from '@/utils/constants'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: COMPANY.url,
    logo: `${COMPANY.url}/favicon.svg`,
    description:
      'AI, Blockchain, and Real World Asset (RWA) technology consulting company helping enterprises transform physical assets, financial operations, and business processes.',
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
      availableLanguage: ['English', 'Spanish', 'French', 'Arabic', 'Chinese'],
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'AI Consulting Company',
      'Blockchain Consulting',
      'Real World Asset Tokenization',
      'Enterprise AI Solutions',
      'Digital Transformation Consulting',
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
      'Enterprise consulting for AI transformation, blockchain strategy, and real-world asset tokenization.',
    priceRange: '$$$',
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    serviceType: [
      'AI Consulting',
      'Blockchain Consulting',
      'Real World Asset Tokenization',
      'Digital Transformation Consulting',
      'Enterprise Technology Consulting',
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
