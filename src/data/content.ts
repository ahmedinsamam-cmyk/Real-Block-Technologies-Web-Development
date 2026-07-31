import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  Brain,
  Briefcase,
  Blocks,
  Landmark,
  Code2,
  Factory,
  HeartPulse,
  Truck,
  Users,
  Home,
} from 'lucide-react'

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
  href: string
  details: string[]
}

export const services: ServiceItem[] = [
  {
    id: 'rwa',
    title: 'Real World Asset (RWA) Tokenization',
    description:
      'Helping businesses digitize and manage physical assets using blockchain infrastructure.',
    icon: Building2,
    href: '/services/real-estate-tokenization',
    details: [
      'Asset digitization frameworks',
      'On-chain ownership models',
      'Compliance-aligned architecture',
      'Investor access platforms',
    ],
  },
  {
    id: 'ai',
    title: 'AI Business Solutions',
    description: 'AI-powered automation, analytics, and decision intelligence solutions.',
    icon: Brain,
    href: '/services/ai-solutions',
    details: [
      'Process automation',
      'Decision intelligence',
      'Predictive analytics',
      'Document understanding',
    ],
  },
  {
    id: 'consulting',
    title: 'Enterprise Technology Consulting',
    description: 'Digital transformation advisory and implementation services.',
    icon: Briefcase,
    href: '/services',
    details: [
      'Transformation roadmaps',
      'Architecture advisory',
      'Implementation oversight',
      'Operating model redesign',
    ],
  },
  {
    id: 'blockchain',
    title: 'Blockchain Advisory',
    description: 'Blockchain strategy, architecture, and implementation guidance.',
    icon: Blocks,
    href: '/services',
    details: [
      'Protocol selection',
      'Smart contract strategy',
      'Security reviews',
      'Integration planning',
    ],
  },
  {
    id: 'treasury',
    title: 'Treasury & Financial Technology Solutions',
    description: 'Modern solutions for CFOs, finance teams, and capital optimization.',
    icon: Landmark,
    href: '/services',
    details: [
      'Treasury modernization',
      'Capital optimization',
      'Financial workflows',
      'Reporting automation',
    ],
  },
  {
    id: 'software',
    title: 'Software Development',
    description: 'Custom enterprise applications and SaaS solutions.',
    icon: Code2,
    href: '/services',
    details: [
      'Enterprise applications',
      'SaaS platforms',
      'API integrations',
      'Cloud-native delivery',
    ],
  },
]

export interface IndustryItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
  outcomes: string[]
}

export const industries: IndustryItem[] = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    description:
      'Digitize property portfolios, streamline transactions, and unlock new capital pathways through tokenization and intelligent operations.',
    icon: Home,
    outcomes: [
      'Portfolio digitization',
      'Fractional ownership models',
      'Operational automation',
    ],
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    description:
      'Modernize treasury, compliance, and client experiences with AI-enabled workflows and blockchain-ready infrastructure.',
    icon: Landmark,
    outcomes: ['Treasury efficiency', 'Risk intelligence', 'Digital asset readiness'],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description:
      'Connect physical production with digital intelligence to improve visibility, quality, and supply-chain resilience.',
    icon: Factory,
    outcomes: ['Process optimization', 'Predictive maintenance', 'Supply transparency'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description:
      'Apply secure automation and analytics to improve operational performance while protecting sensitive information.',
    icon: HeartPulse,
    outcomes: ['Administrative automation', 'Data intelligence', 'Secure workflows'],
  },
  {
    id: 'logistics',
    title: 'Logistics',
    description:
      'Increase shipment visibility, reduce friction, and create trusted digital records across complex supply networks.',
    icon: Truck,
    outcomes: ['Traceability', 'Exception handling', 'Partner coordination'],
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description:
      'Equip advisory and delivery teams with AI tools that accelerate insight generation and client value.',
    icon: Users,
    outcomes: ['Knowledge automation', 'Delivery acceleration', 'Client intelligence'],
  },
]

export interface CaseStudy {
  id: string
  title: string
  industry: string
  challenge: string
  solution: string
  technology: string[]
  results: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'financial-ops',
    title: 'Automating Enterprise Financial Operations',
    industry: 'Financial Services',
    challenge:
      'A multi-entity finance organization struggled with fragmented workflows, manual reconciliations, and delayed reporting across regional teams.',
    solution:
      'We designed an AI-assisted operating model that automated invoice processing, exception routing, and management reporting while preserving audit controls.',
    technology: ['AI Document Intelligence', 'Workflow Automation', 'Cloud Integration'],
    results: [
      '65% reduction in manual reconciliation effort',
      'Faster month-end close cycles',
      'Improved audit readiness and reporting accuracy',
    ],
  },
  {
    id: 'property-tokenization',
    title: 'Digitizing a Commercial Real Estate Portfolio',
    industry: 'Real Estate',
    challenge:
      'A property group needed a structured approach to represent selected assets digitally and prepare for institutional investor participation.',
    solution:
      'We delivered a tokenization readiness program covering asset structuring, compliance considerations, investor access design, and lifecycle management controls.',
    technology: ['RWA Architecture', 'Blockchain Advisory', 'Investor Portal Design'],
    results: [
      'Clear asset digitization blueprint',
      'Investor-ready digital representation model',
      'Operational framework for ongoing asset management',
    ],
  },
  {
    id: 'manufacturing-intelligence',
    title: 'Predictive Operations for Manufacturing Networks',
    industry: 'Manufacturing',
    challenge:
      'Production leadership lacked early signals on equipment risk and supply disruption, leading to unplanned downtime.',
    solution:
      'We implemented predictive analytics and decision dashboards that connected plant telemetry with planning and maintenance workflows.',
    technology: ['Predictive Analytics', 'AI Agents', 'Business Intelligence'],
    results: [
      'Earlier detection of operational risk',
      'Reduced unplanned downtime',
      'Stronger coordination between plants and supply partners',
    ],
  },
  {
    id: 'treasury-modernization',
    title: 'Modernizing Treasury Visibility for a Growth Enterprise',
    industry: 'Professional Services',
    challenge:
      'Finance leaders needed better visibility into cash positions, working capital, and capital allocation decisions.',
    solution:
      'We built a treasury technology roadmap and implemented integrated dashboards, forecasting support, and process redesign for capital optimization.',
    technology: ['FinTech Platforms', 'Analytics', 'Process Redesign'],
    results: [
      'Unified cash visibility',
      'Improved forecasting confidence',
      'Faster capital allocation decisions',
    ],
  },
]

export interface InsightArticle {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
}

export const insights: InsightArticle[] = [
  {
    id: 'ai-enterprise-ops',
    title: 'How AI is Transforming Enterprise Operations',
    excerpt:
      'Explore how leading organizations use AI automation, agents, and analytics to redesign operating models and unlock measurable efficiency.',
    category: 'Artificial Intelligence',
    readTime: '6 min read',
    date: 'June 12, 2026',
  },
  {
    id: 'rwa-future',
    title: 'The Future of Real World Asset Tokenization',
    excerpt:
      'A practical look at how asset tokenization is evolving from experimentation into enterprise-grade infrastructure for capital markets and ownership.',
    category: 'Digital Assets',
    readTime: '8 min read',
    date: 'May 28, 2026',
  },
  {
    id: 'digital-asset-strategy',
    title: 'Why Companies Need Digital Asset Strategies',
    excerpt:
      'Enterprises that treat digital assets as a strategic capability—not a pilot—are better prepared for new markets, investors, and operational models.',
    category: 'Strategy',
    readTime: '5 min read',
    date: 'April 19, 2026',
  },
  {
    id: 'blockchain-advisory',
    title: 'Building a Practical Blockchain Roadmap',
    excerpt:
      'From architecture choices to governance and integration, a structured advisory approach reduces risk and accelerates value realization.',
    category: 'Blockchain',
    readTime: '7 min read',
    date: 'March 4, 2026',
  },
  {
    id: 'cfo-fintech',
    title: 'What CFOs Should Expect from Modern FinTech Stacks',
    excerpt:
      'Treasury, forecasting, and capital optimization tools are converging—here is how finance leaders can evaluate the next generation of solutions.',
    category: 'Finance',
    readTime: '6 min read',
    date: 'February 11, 2026',
  },
  {
    id: 'ai-agents-enterprise',
    title: 'Enterprise AI Agents: Beyond the Pilot Phase',
    excerpt:
      'Successful AI agent programs combine clear workflows, human oversight, and measurable outcomes—not isolated demos.',
    category: 'Artificial Intelligence',
    readTime: '7 min read',
    date: 'January 22, 2026',
  },
]

export interface JobOpening {
  id: string
  title: string
  team: string
  location: string
  type: string
}

export const jobs: JobOpening[] = [
  {
    id: 'senior-ai-consultant',
    title: 'Senior AI Solutions Consultant',
    team: 'Advisory',
    location: 'Remote / Hybrid',
    type: 'Full-time',
  },
  {
    id: 'blockchain-architect',
    title: 'Blockchain Architect',
    team: 'Technology',
    location: 'Remote / Hybrid',
    type: 'Full-time',
  },
  {
    id: 'engagement-manager',
    title: 'Engagement Manager',
    team: 'Client Delivery',
    location: 'Remote / Hybrid',
    type: 'Full-time',
  },
]

export const testimonials = [
  {
    quote:
      'Real Block Technologies brought clarity to a complex digital asset initiative and helped our leadership team move from concept to an actionable enterprise roadmap.',
    name: 'Director of Innovation',
    company: 'Global Property Group',
  },
  {
    quote:
      'Their AI and process redesign work materially improved our finance operations. The engagement was structured, pragmatic, and outcomes-focused.',
    name: 'VP of Finance Operations',
    company: 'Multi-entity Enterprise',
  },
  {
    quote:
      'We valued their ability to connect blockchain strategy with real business constraints—compliance, investor experience, and long-term asset management.',
    name: 'Head of Digital Strategy',
    company: 'Investment Platform',
  },
]

export const faqs = [
  {
    question: 'What types of organizations do you work with?',
    answer:
      'We partner with enterprises and growth organizations across real estate, financial services, manufacturing, healthcare, logistics, and professional services that are ready to adopt AI, blockchain, and digital asset capabilities.',
  },
  {
    question: 'Do you only provide strategy, or also implementation?',
    answer:
      'Both. Our engagements range from strategic advisory and architecture design to hands-on implementation, integration, and operating model support.',
  },
  {
    question: 'How do you approach real-world asset tokenization projects?',
    answer:
      'We begin with asset readiness, regulatory considerations, and business objectives, then design the digital representation, blockchain architecture, investor access model, and ongoing management processes.',
  },
  {
    question: 'Can you integrate with existing enterprise systems?',
    answer:
      'Yes. We design solutions that connect with ERP, CRM, treasury, data, and cloud platforms so new capabilities enhance—not disrupt—your current technology landscape.',
  },
]
