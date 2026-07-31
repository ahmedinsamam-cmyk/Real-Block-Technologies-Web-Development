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
  longDescription?: string
  outcomes?: string[]
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
    longDescription:
      'We help enterprises structure, digitize, and manage real-world assets with blockchain infrastructure designed for institutional controls, investor access, and long-term operations.',
    outcomes: [
      'Clear tokenization readiness roadmap',
      'Digital ownership and access models',
      'Lifecycle management operating design',
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
    longDescription:
      'From strategy to production systems, we design AI capabilities that automate work, improve decisions, and create durable operating advantage.',
    outcomes: [
      'Prioritized AI use-case portfolio',
      'Measurable automation ROI',
      'Governed path from pilot to scale',
    ],
  },
  {
    id: 'consulting',
    title: 'Enterprise Technology Consulting',
    description: 'Digital transformation advisory and implementation services.',
    icon: Briefcase,
    href: '/services/enterprise-consulting',
    details: [
      'Transformation roadmaps',
      'Architecture advisory',
      'Implementation oversight',
      'Operating model redesign',
    ],
    longDescription:
      'We partner with leadership teams to define transformation priorities, design target architectures, and oversee delivery so technology investments translate into business outcomes.',
    outcomes: [
      'Executive-aligned transformation roadmap',
      'Architecture and vendor decision support',
      'Delivery governance that reduces risk',
    ],
  },
  {
    id: 'blockchain',
    title: 'Blockchain Advisory',
    description: 'Blockchain strategy, architecture, and implementation guidance.',
    icon: Blocks,
    href: '/services/blockchain-advisory',
    details: [
      'Protocol selection',
      'Smart contract strategy',
      'Security reviews',
      'Integration planning',
    ],
    longDescription:
      'Our blockchain advisory helps enterprises evaluate fit, select architecture patterns, and plan secure implementations connected to existing systems and controls.',
    outcomes: [
      'Practical blockchain strategy',
      'Security-aware architecture choices',
      'Integration plan for enterprise systems',
    ],
  },
  {
    id: 'treasury',
    title: 'Treasury & Financial Technology Solutions',
    description: 'Modern solutions for CFOs, finance teams, and capital optimization.',
    icon: Landmark,
    href: '/services/treasury-fintech',
    details: [
      'Treasury modernization',
      'Capital optimization',
      'Financial workflows',
      'Reporting automation',
    ],
    longDescription:
      'We help CFOs and finance leaders modernize treasury visibility, forecasting, and capital workflows with technology and process redesign built for scale.',
    outcomes: [
      'Unified cash and capital visibility',
      'Faster forecasting and reporting cycles',
      'Stronger decision support for finance leaders',
    ],
  },
  {
    id: 'software',
    title: 'Software Development',
    description: 'Custom enterprise applications and SaaS solutions.',
    icon: Code2,
    href: '/services/software-development',
    details: [
      'Enterprise applications',
      'SaaS platforms',
      'API integrations',
      'Cloud-native delivery',
    ],
    longDescription:
      'Our engineering teams design and build secure, cloud-native applications and SaaS platforms that support digital asset, AI, and enterprise operating models.',
    outcomes: [
      'Production-ready custom applications',
      'Reliable API and system integrations',
      'Scalable cloud delivery practices',
    ],
  },
]

export interface IndustryItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
  outcomes: string[]
  href: string
  challenges?: string[]
  capabilities?: string[]
}

export const industries: IndustryItem[] = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    href: '/industries/real-estate',
    description:
      'Digitize property portfolios, streamline transactions, and unlock new capital pathways through tokenization and intelligent operations.',
    icon: Home,
    outcomes: [
      'Portfolio digitization',
      'Fractional ownership models',
      'Operational automation',
    ],
    challenges: [
      'Illiquid assets and fragmented ownership processes',
      'Manual portfolio and investor reporting',
      'Limited pathways for institutional digital participation',
    ],
    capabilities: [
      'RWA tokenization readiness',
      'Investor access design',
      'Property operations automation',
    ],
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    href: '/industries/financial-services',
    description:
      'Modernize treasury, compliance, and client experiences with AI-enabled workflows and blockchain-ready infrastructure.',
    icon: Landmark,
    outcomes: ['Treasury efficiency', 'Risk intelligence', 'Digital asset readiness'],
    challenges: [
      'Fragmented finance operations across entities',
      'Slow reporting and reconciliation cycles',
      'Pressure to prepare for digital asset markets',
    ],
    capabilities: [
      'AI-assisted finance workflows',
      'Treasury modernization',
      'Blockchain and digital asset advisory',
    ],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    href: '/industries/manufacturing',
    description:
      'Connect physical production with digital intelligence to improve visibility, quality, and supply-chain resilience.',
    icon: Factory,
    outcomes: ['Process optimization', 'Predictive maintenance', 'Supply transparency'],
    challenges: [
      'Unplanned downtime and weak early-warning signals',
      'Disconnected plant and supply data',
      'Limited predictive decision support',
    ],
    capabilities: [
      'Predictive analytics',
      'Operations intelligence dashboards',
      'Process automation programs',
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    href: '/industries/healthcare',
    description:
      'Apply secure automation and analytics to improve operational performance while protecting sensitive information.',
    icon: HeartPulse,
    outcomes: ['Administrative automation', 'Data intelligence', 'Secure workflows'],
    challenges: [
      'High administrative burden',
      'Fragmented operational data',
      'Strict security and compliance requirements',
    ],
    capabilities: [
      'Document intelligence',
      'Secure workflow automation',
      'Operational analytics',
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics',
    href: '/industries/logistics',
    description:
      'Increase shipment visibility, reduce friction, and create trusted digital records across complex supply networks.',
    icon: Truck,
    outcomes: ['Traceability', 'Exception handling', 'Partner coordination'],
    challenges: [
      'Limited end-to-end shipment visibility',
      'Exception handling delays',
      'Partner coordination across networks',
    ],
    capabilities: [
      'Traceability architectures',
      'Exception automation',
      'Partner data coordination',
    ],
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    href: '/industries/professional-services',
    description:
      'Equip advisory and delivery teams with AI tools that accelerate insight generation and client value.',
    icon: Users,
    outcomes: ['Knowledge automation', 'Delivery acceleration', 'Client intelligence'],
    challenges: [
      'Knowledge trapped in documents and inboxes',
      'Inconsistent delivery speed across teams',
      'Limited reusable client intelligence',
    ],
    capabilities: [
      'Knowledge automation',
      'AI-assisted delivery tooling',
      'Client insight systems',
    ],
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
  businessImpact: string
  pdfPath?: string
  pdfFileName?: string
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
    businessImpact:
      'Finance leaders gained faster close cycles, stronger controls, and a scalable automation foundation for multi-entity operations.',
    pdfPath: '/resources/AI_Enterprise_Automation_Case_Study.pdf',
    pdfFileName: 'AI_Enterprise_Automation_Case_Study.pdf',
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
    businessImpact:
      'The organization established a practical path from physical assets to governed digital representation and investor access.',
    pdfPath: '/resources/Real_Estate_Tokenization_Case_Study.pdf',
    pdfFileName: 'Real_Estate_Tokenization_Case_Study.pdf',
  },
  {
    id: 'digital-transformation',
    title: 'Enterprise Digital Transformation Program',
    industry: 'Cross-Industry',
    challenge:
      'Leadership needed a coordinated approach to modernize operations with AI automation and emerging digital infrastructure—without disrupting core business.',
    solution:
      'We built a phased transformation roadmap spanning opportunity discovery, architecture design, controlled pilots, and scaled operating model change.',
    technology: ['AI Strategy', 'Process Automation', 'Enterprise Architecture'],
    results: [
      'Prioritized transformation portfolio',
      'Reduced delivery risk through staged pilots',
      'Clear governance for scale-up decisions',
    ],
    businessImpact:
      'Executives aligned technology investment to measurable outcomes and accelerated decision-making across digital initiatives.',
    pdfPath: '/resources/Digital_Transformation_Case_Study.pdf',
    pdfFileName: 'Digital_Transformation_Case_Study.pdf',
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
    businessImpact:
      'Operations teams improved resilience and visibility across plants, enabling faster intervention before disruption escalated.',
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
      'Real Block brought structure to a complex automation agenda. We left with prioritized use cases, clear governance, and a delivery plan our executives could fund with confidence.',
    name: 'Chief Operating Officer',
    company: 'Multi-entity Operating Group',
  },
  {
    quote:
      'They translated digital asset ambition into an actionable enterprise roadmap—architecture, controls, and investor experience—without overselling the technology.',
    name: 'Director of Innovation',
    company: 'Global Property Platform',
  },
  {
    quote:
      'Their AI and process redesign work materially improved our finance operations. The engagement was structured, pragmatic, and outcomes-focused from week one.',
    name: 'VP of Finance Operations',
    company: 'International Finance Organization',
  },
  {
    quote:
      'We valued their ability to connect blockchain strategy with real business constraints—compliance, investor experience, and long-term asset management.',
    name: 'Head of Digital Strategy',
    company: 'Capital Markets Platform',
  },
]

export const faqs = [
  {
    question: 'What is RWA tokenization?',
    answer:
      'Real World Asset (RWA) tokenization creates a digital representation of a physical or financial asset on blockchain infrastructure, enabling structured ownership, transferability, investor access, and lifecycle management while remaining linked to the underlying asset.',
  },
  {
    question: 'How can AI improve business operations?',
    answer:
      'AI can automate repetitive workflows, improve forecasting, extract insight from documents, and support decision-making with agents and analytics—reducing cycle times and elevating operating quality across finance, operations, and customer processes.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Timelines vary by scope. Focused pilots often complete in weeks to a few months, while multi-workstream enterprise programs are phased across quarters. We define milestones, governance, and success metrics before delivery begins.',
  },
  {
    question: 'Do you work with global clients?',
    answer:
      'Yes. We support enterprises and growth organizations worldwide, adapting our advisory and delivery approach to regional operating models, stakeholder needs, and technology landscapes.',
  },
  {
    question: 'What types of organizations do you work with?',
    answer:
      'We partner with enterprises across real estate, financial services, manufacturing, healthcare, logistics, and professional services that are ready to adopt AI, blockchain, and digital asset capabilities.',
  },
  {
    question: 'Do you only provide strategy, or also implementation?',
    answer:
      'Both. Our engagements range from strategic advisory and architecture design to hands-on implementation, integration, and operating model support.',
  },
]
