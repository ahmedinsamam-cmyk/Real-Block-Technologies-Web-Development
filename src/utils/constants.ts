export const COMPANY = {
  name: 'Real Block Technologies',
  shortName: 'Real Block',
  category: 'Digital investment products',
  tagline: 'Compliant digital investment products from real-world mining assets',
  proposition:
    'Real Block Technologies helps mining companies transform mineral resources, royalties and other real-world assets into compliant digital investment products.',
  email: 'contact@realblocktechnologies.com',
  phone: '+1 (555) 014-2800',
  address: 'Enterprise Technology Hub, Global Operations',
  url: 'https://realblocktechnologies.com',
} as const

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/real-block-technologies/',
  twitter: 'https://twitter.com/realblocktech',
  youtube: 'https://www.youtube.com/@realblocktechnologies',
} as const

export const CALENDLY_URL = 'https://calendly.com/realblocktechnologies'

export const MEETING_TYPES = [
  {
    slug: 'discovery-call',
    title: '30 Minute Discovery Call',
    duration: '30 minutes',
    description: 'Review the asset, royalty interest, and whether a tokenised structure is appropriate.',
  },
  {
    slug: 'strategy-session',
    title: '60 Minute Structuring Session',
    duration: '60 minutes',
    description: 'Walk through Tokenised Royalty architecture and Tokenisation as a Service scope.',
  },
  {
    slug: 'enterprise-workshop',
    title: 'Issuer Workshop',
    duration: '90–120 minutes',
    description: 'Leadership session on documentation, issuance workflow, and regulatory pathway.',
  },
] as const

export const CONSULTATION_TOPICS = [
  'Tokenised Royalty',
  'Mineral royalty interest',
  'Tokenisation as a Service',
  'Critical mineral project',
  'Production-linked cash flow',
  'Other real-world asset',
] as const

export const SEO_KEYWORDS = [
  'Tokenised royalty',
  'Tokenized royalty',
  'Mining royalty tokenization',
  'Tokenisation as a Service',
  'Mineral resource tokenization',
  'Real-world asset tokenization mining',
  'Compliant digital investment products',
  'Mining companies digital securities',
] as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Product', href: '/product' },
  { label: 'Service', href: '/service' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export const FOOTER_PRODUCTS = [
  { label: 'Tokenised Royalty', href: '/product' },
] as const

export const FOOTER_SERVICES = [
  { label: 'Tokenisation as a Service', href: '/service' },
] as const

export const FOOTER_COMPANY = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
] as const

export const LEGAL_DISCLAIMER =
  'Real Block Technologies provides structuring, technology and issuance-support services for mining companies exploring compliant digital investment products. Content on this website is informational and illustrative. It is not an offer, solicitation, recommendation or guarantee of any security, token or investment. This website is not a marketplace, exchange, ATS, broker-dealer or crowdfunding platform. Any actual issuance, offering, distribution, custody or other regulated activity will be conducted only by appropriately authorized or registered entities where required, and remains subject to legal, regulatory, technical, financial and commercial validation.'
