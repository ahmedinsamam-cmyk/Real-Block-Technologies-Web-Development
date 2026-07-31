export const COMPANY = {
  name: 'Real Block Technologies',
  shortName: 'Real Block',
  tagline: 'Institutional consulting for AI, blockchain, and real-world asset transformation',
  email: 'contact@realblocktechnologies.com',
  phone: '',
  address: 'Serving enterprises worldwide',
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
    description: 'Qualify priorities and identify the right engagement path.',
  },
  {
    slug: 'strategy-session',
    title: '60 Minute Strategy Session',
    duration: '60 minutes',
    description: 'Deep-dive on AI, RWA, or blockchain strategy with advisors.',
  },
  {
    slug: 'enterprise-workshop',
    title: 'Enterprise Transformation Workshop',
    duration: '90–120 minutes',
    description: 'Facilitated workshop for leadership alignment and roadmap design.',
  },
] as const

export const CONSULTATION_TOPICS = [
  'AI Transformation',
  'RWA Tokenization',
  'Blockchain Strategy',
  'Enterprise Automation',
] as const

export const SEO_KEYWORDS = [
  'AI Consulting Company',
  'Blockchain Consulting',
  'Real World Asset Tokenization',
  'Enterprise AI Solutions',
  'Digital Transformation Consulting',
] as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
] as const

export const FOOTER_SERVICES = [
  { label: 'RWA Tokenization', href: '/services/real-estate-tokenization' },
  { label: 'AI Solutions', href: '/services/ai-solutions' },
  { label: 'Enterprise Consulting', href: '/services/enterprise-consulting' },
  { label: 'Blockchain Advisory', href: '/services/blockchain-advisory' },
  { label: 'Treasury & FinTech', href: '/services/treasury-fintech' },
  { label: 'Software Development', href: '/services/software-development' },
] as const

export const FOOTER_COMPANY = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
] as const

export const FOOTER_RESOURCES = [
  { label: 'Resource Library', href: '/resources' },
  { label: 'RWA Guide', href: '/resources/rwa-tokenization-guide' },
  { label: 'Insights', href: '/insights' },
  { label: 'Help Center', href: '/help' },
] as const

export const FOOTER_INDUSTRIES = [
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'Financial Services', href: '/industries/financial-services' },
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Logistics', href: '/industries/logistics' },
  { label: 'Professional Services', href: '/industries/professional-services' },
] as const

export const FOOTER_LEGAL = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
] as const

export const STATS = [
  { value: 50, suffix: '+', label: 'Enterprise Processes Optimized' },
  { value: 30, suffix: '+', label: 'Technology Implementations' },
  { value: 10, suffix: '+', label: 'Industry Solutions' },
] as const

export const TRUST_INDICATORS = [
  'Enterprise-grade security practices',
  'Cross-industry delivery experience',
  'AI + blockchain specialists',
  'Outcome-focused engagements',
] as const

/** Sector marks — replace with client logos when approved */
export const TRUSTED_PARTNERS = [
  'Real Estate',
  'Financial Services',
  'Manufacturing',
  'Healthcare',
  'Logistics',
  'Professional Services',
] as const
