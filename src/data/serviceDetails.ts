export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceDetailContent {
  problem: string
  solution: string
  benefits: string[]
  techStack: string[]
  process: { title: string; description: string }[]
  expectedOutcomes: string[]
  faqs: ServiceFaq[]
  relatedResources: { label: string; href: string }[]
}

export const serviceDetailsById: Record<string, ServiceDetailContent> = {
  consulting: {
    problem:
      'Leadership teams often face fragmented digital initiatives, unclear platform priorities, and technology decisions that do not translate into operating outcomes.',
    solution:
      'We provide enterprise technology consulting and professional services for Workday, Microsoft Dynamics 365, and HubSpot—connecting strategy, configuration, integration, and delivery governance so investments produce measurable results within scoped engagements.',
    benefits: [
      'Platform-aligned professional services (Workday, D365, HubSpot)',
      'Executive clarity on priorities and sequencing',
      'Reduced delivery risk through staged governance',
      'Clearer vendor and architecture decisions',
      'Adoption-focused operating model support',
    ],
    techStack: [
      'Workday professional services',
      'Microsoft Dynamics 365',
      'HubSpot CRM & RevOps',
      'Integration and API strategy',
      'Program governance toolkits',
    ],
    process: [
      {
        title: 'Current-state diagnosis',
        description: 'Map capabilities, systems, stakeholders, and value leakage across the operating model.',
      },
      {
        title: 'Platform & target design',
        description: 'Define Workday / D365 / HubSpot scope, architecture, and capability roadmap.',
      },
      {
        title: 'Scoped delivery plan',
        description: 'Sequence work by impact, feasibility, and dependency with clear milestones.',
      },
      {
        title: 'Implementation support',
        description: 'Provide professional services, oversight, and adoption support through launch.',
      },
    ],
    expectedOutcomes: [
      'Actionable platform implementation plan',
      'Architecture decisions with documented trade-offs',
      'Governed delivery cadence for focused workstreams',
    ],
    faqs: [
      {
        question: 'Which platforms do you support?',
        answer:
          'We provide professional services for Workday, Microsoft Dynamics 365, and HubSpot, alongside broader enterprise technology advisory.',
      },
      {
        question: 'Do you advise or implement?',
        answer:
          'Both. Engagements can be advisory-only or include hands-on professional services and implementation oversight.',
      },
      {
        question: 'How are engagements structured?',
        answer:
          'Every engagement is proposal-based with clear deliverables, timelines, and success criteria agreed up front.',
      },
    ],
    relatedResources: [
      { label: 'Case studies', href: '/case-studies' },
      { label: 'Resource library', href: '/resources' },
      { label: 'Book a consultation', href: '/contact#consultation' },
    ],
  },
  blockchain: {
    problem:
      'Enterprises exploring blockchain often struggle to separate hype from practical use cases, select the right architecture, and connect new rails to existing controls.',
    solution:
      'Our blockchain advisory evaluates business fit, designs secure architectures, and plans implementation that integrates with enterprise systems, compliance, and operations.',
    benefits: [
      'Clarity on where blockchain creates real value',
      'Security-aware protocol and pattern selection',
      'Integration plans for legacy and cloud systems',
      'Reduced regulatory and operational surprise',
      'A credible path from pilot to production',
    ],
    techStack: [
      'Permissioned and public ledger design',
      'Smart contract strategy',
      'Identity and access patterns',
      'Oracle and integration layers',
      'Security review frameworks',
    ],
    process: [
      {
        title: 'Use-case qualification',
        description: 'Assess whether blockchain is the right primitive for the business problem.',
      },
      {
        title: 'Architecture selection',
        description: 'Compare protocol, custody, identity, and data models against enterprise constraints.',
      },
      {
        title: 'Security & controls design',
        description: 'Define threat models, key management, and operational controls.',
      },
      {
        title: 'Implementation roadmap',
        description: 'Plan build, integration, testing, and production readiness milestones.',
      },
    ],
    expectedOutcomes: [
      'Practical blockchain strategy document',
      'Target architecture with security controls',
      'Phased implementation and integration plan',
    ],
    faqs: [
      {
        question: 'Public chain or private network?',
        answer:
          'It depends on trust boundaries, performance needs, and regulatory posture. We recommend based on the use case—not ideology.',
      },
      {
        question: 'Do you write smart contracts?',
        answer:
          'We advise on strategy and architecture and can support implementation partners or engineering teams through design and review.',
      },
      {
        question: 'How do you address compliance?',
        answer:
          'We incorporate jurisdictional, custody, and audit considerations into architecture decisions from the start.',
      },
    ],
    relatedResources: [
      { label: 'RWA tokenization', href: '/services/real-estate-tokenization' },
      { label: 'RWA enterprise guide', href: '/resources/rwa-tokenization-guide' },
      { label: 'Book a consultation', href: '/contact#consultation' },
    ],
  },
  fintech: {
    problem:
      'Finance and operations teams often struggle with fragmented FinTech tools, slow workflows, and limited visibility across digital financial operations.',
    solution:
      'We modernize FinTech capabilities—stack advisory, workflow automation, payments and reporting modernization, and digital financial operations—designed for practical enterprise adoption.',
    benefits: [
      'Clearer financial operations visibility',
      'Faster reporting and workflow cycles',
      'Reduced manual reconciliation burden',
      'Stronger control and audit posture',
      'Better decision support for finance leaders',
    ],
    techStack: [
      'FinTech platform advisory',
      'Workflow automation',
      'Financial data & reporting layers',
      'Payment operations tooling',
      'Integration with ERP/CRM stacks',
    ],
    process: [
      {
        title: 'Finance operations assessment',
        description: 'Diagnose visibility gaps, manual work, and system fragmentation.',
      },
      {
        title: 'FinTech stack design',
        description: 'Define the operating and technology model for digital finance workflows.',
      },
      {
        title: 'Automation & integration',
        description: 'Implement workflows, data pipelines, and decision dashboards.',
      },
      {
        title: 'Controls & adoption',
        description: 'Embed audit controls, training, and continuous improvement loops.',
      },
    ],
    expectedOutcomes: [
      'Unified view of digital financial operations',
      'Accelerated reporting and workflow cycles',
      'Scalable FinTech foundation for growth',
    ],
    faqs: [
      {
        question: 'Is this treasury management?',
        answer:
          'No. We focus on FinTech solutions—platforms, workflows, and digital financial operations—rather than classic treasury management system replacement.',
      },
      {
        question: 'How are FinTech engagements structured?',
        answer:
          'FinTech engagements are proposal-based with clear milestones, deliverables, and adoption support.',
      },
      {
        question: 'How quickly can we see value?',
        answer:
          'Many programs deliver early wins in reporting and exception handling within the first delivery phase, then expand.',
      },
    ],
    relatedResources: [
      { label: 'AI solutions', href: '/services/ai-solutions' },
      { label: 'Case studies', href: '/case-studies' },
      { label: 'Book a consultation', href: '/contact#consultation' },
    ],
  },
  rwa: {
    problem:
      'Owners of real estate, collectibles, and membership businesses lack practical ways to digitize ownership, distribute rent share, or manage membership access at scale.',
    solution:
      'We provide Tokenization-as-a-Service (TaaS) for real estate, artworks, antiques, rent-share distribution, and membership services.',
    benefits: [
      'TaaS model tailored to physical and experiential assets',
      'Real estate digitization pathways',
      'Artwork and antique representation models',
      'Rent-share distribution design',
      'Membership and access service tokenization',
    ],
    techStack: [
      'Tokenization-as-a-Service (TaaS)',
      'RWA architecture for physical assets',
      'Membership & access controls',
      'Rent-share distribution workflows',
      'Lifecycle and reporting design',
    ],
    process: [
      {
        title: 'Asset & use-case readiness',
        description: 'Confirm asset type fit across real estate, art, antiques, rent share, and membership programs.',
      },
      {
        title: 'TaaS solution design',
        description: 'Design digital representation, access rules, and distribution workflows.',
      },
      {
        title: 'Build & integrate',
        description: 'Implement the tokenization service layer and operational tooling.',
      },
      {
        title: 'Operate & optimize',
        description: 'Stand up reporting, lifecycle events, and continuous improvement.',
      },
    ],
    expectedOutcomes: [
      'Scoped TaaS engagement with clear deliverables',
      'Digital model for qualifying physical assets',
      'Operating design for rent share or membership flows',
    ],
    faqs: [
      {
        question: 'What assets does your TaaS cover?',
        answer:
          'Our TaaS offering focuses on real estate, artworks, antiques, rent-share distribution, and membership services.',
      },
      {
        question: 'What is Tokenization-as-a-Service (TaaS)?',
        answer:
          'TaaS is a scoped service model where we design and deliver tokenization capabilities for qualifying real-world assets without requiring you to build the full stack in-house.',
      },
      {
        question: 'How are TaaS engagements structured?',
        answer:
          'TaaS and advisory engagements are proposal-based and sized to asset complexity, with clear deliverables and timelines.',
      },
    ],
    relatedResources: [
      { label: 'RWA enterprise guide', href: '/resources/rwa-tokenization-guide' },
      { label: 'Blockchain advisory', href: '/services/blockchain-advisory' },
      { label: 'Book a consultation', href: '/contact#consultation' },
    ],
  },
  ai: {
    problem:
      'Enterprises struggle to move AI from isolated pilots to production systems that reduce cost, improve decisions, and fit governance requirements.',
    solution:
      'We design and implement AI solutions—automation, analytics, and decision intelligence—with clear use-case prioritization, human oversight, and measurable ROI.',
    benefits: [
      'Prioritized portfolio of high-ROI use cases',
      'Reduced manual effort in critical workflows',
      'Better forecasting and decision quality',
      'Governed path from pilot to scale',
      'Durable operating advantage—not one-off demos',
    ],
    techStack: [
      'LLM and RAG architectures',
      'Document intelligence',
      'Predictive analytics',
      'Workflow automation',
      'MLOps and model governance',
    ],
    process: [
      {
        title: 'Opportunity discovery',
        description: 'Identify automation and intelligence opportunities with clear value hypotheses.',
      },
      {
        title: 'Solution design',
        description: 'Define data, models, workflows, controls, and success metrics.',
      },
      {
        title: 'Pilot build',
        description: 'Deliver a controlled pilot with measurable outcomes and risk safeguards.',
      },
      {
        title: 'Scale & optimize',
        description: 'Industrialize successful pilots into production operating capabilities.',
      },
    ],
    expectedOutcomes: [
      'Ranked AI use-case portfolio',
      'Production automation with measurable ROI',
      'Governance model for responsible scale',
    ],
    faqs: [
      {
        question: 'Where should we start with AI?',
        answer:
          'We typically start with high-volume, rules-heavy workflows or decision bottlenecks where data quality and ROI can be proven quickly.',
      },
      {
        question: 'How do you handle data privacy?',
        answer:
          'Data handling, retention, and access controls are designed into the solution architecture before implementation.',
      },
      {
        question: 'Will AI replace our teams?',
        answer:
          'Our focus is augmenting teams—removing repetitive work and elevating judgment—not indiscriminate replacement.',
      },
    ],
    relatedResources: [
      { label: 'Case studies', href: '/case-studies' },
      { label: 'Resource library', href: '/resources' },
      { label: 'Book a consultation', href: '/contact#consultation' },
    ],
  },
}
