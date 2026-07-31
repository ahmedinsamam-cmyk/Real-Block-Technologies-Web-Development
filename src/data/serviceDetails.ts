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
      'Leadership teams often face fragmented digital initiatives, unclear investment priorities, and technology decisions that do not translate into operating outcomes.',
    solution:
      'We provide enterprise technology consulting that connects strategy, architecture, and delivery governance—so transformation programs are sequenced, funded, and executed with accountability.',
    benefits: [
      'Executive alignment on priorities and investment sequencing',
      'Reduced delivery risk through staged governance',
      'Clearer vendor and architecture decisions',
      'Operating model changes that sustain adoption',
      'Measurable KPIs tied to each workstream',
    ],
    techStack: [
      'Enterprise architecture frameworks',
      'Cloud platform assessments',
      'Integration and API strategy',
      'Data and AI readiness models',
      'Program governance toolkits',
    ],
    process: [
      {
        title: 'Current-state diagnosis',
        description: 'Map capabilities, systems, stakeholders, and value leakage across the operating model.',
      },
      {
        title: 'Target operating design',
        description: 'Define the future-state architecture, process model, and capability roadmap.',
      },
      {
        title: 'Portfolio prioritization',
        description: 'Sequence initiatives by impact, feasibility, dependency, and risk.',
      },
      {
        title: 'Delivery oversight',
        description: 'Establish governance, decision forums, and implementation support through launch.',
      },
    ],
    expectedOutcomes: [
      'Board-ready transformation roadmap',
      'Architecture decisions with documented trade-offs',
      'Governed delivery cadence for multi-workstream programs',
    ],
    faqs: [
      {
        question: 'Do you advise or implement?',
        answer:
          'Both. We can lead strategy-only engagements or stay through architecture, vendor selection, and implementation oversight.',
      },
      {
        question: 'How do you engage executive sponsors?',
        answer:
          'We structure decision forums, milestone reviews, and concise reporting designed for C-suite and board audiences.',
      },
      {
        question: 'Can you work alongside incumbent vendors?',
        answer:
          'Yes. We frequently operate as an independent advisor coordinating internal teams, system integrators, and product vendors.',
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
  treasury: {
    problem:
      'CFOs and finance leaders often lack unified cash visibility, struggle with slow forecasting cycles, and operate fragmented treasury and capital workflows.',
    solution:
      'We modernize treasury and financial technology stacks—improving visibility, forecasting, controls, and decision support for multi-entity finance organizations.',
    benefits: [
      'Unified cash and capital visibility',
      'Faster forecasting and close cycles',
      'Reduced manual reconciliation burden',
      'Stronger audit and control posture',
      'Better decision support for finance leadership',
    ],
    techStack: [
      'Treasury management integrations',
      'AI-assisted forecasting',
      'Workflow automation',
      'Financial data platforms',
      'Reporting and dashboard layers',
    ],
    process: [
      {
        title: 'Finance operations assessment',
        description: 'Diagnose visibility gaps, manual work, and system fragmentation.',
      },
      {
        title: 'Target finance stack design',
        description: 'Define the operating and technology model for treasury and reporting.',
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
      'Single source of truth for cash and capital views',
      'Accelerated reporting and forecasting cycles',
      'Scalable automation foundation for finance ops',
    ],
    faqs: [
      {
        question: 'Do you replace our TMS?',
        answer:
          'Not always. We often improve the surrounding architecture, integrations, and workflows—and recommend replacement only when justified.',
      },
      {
        question: 'Can this work across entities and regions?',
        answer:
          'Yes. Multi-entity visibility and consolidation patterns are a core part of our treasury modernization work.',
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
  software: {
    problem:
      'Enterprises need custom applications and SaaS platforms that meet security, scalability, and integration standards—but generic builds often fail under real operating load.',
    solution:
      'We design and deliver cloud-native enterprise applications and SaaS products with secure architecture, API integrations, and production-grade delivery practices.',
    benefits: [
      'Products built for real enterprise constraints',
      'Reliable integrations with core systems',
      'Secure, scalable cloud delivery',
      'Faster iteration with disciplined engineering',
      'Documentation and operability from day one',
    ],
    techStack: [
      'React / TypeScript front ends',
      'Cloud-native backends',
      'API and event architectures',
      'Kubernetes and CI/CD',
      'Observability and security tooling',
    ],
    process: [
      {
        title: 'Product & architecture discovery',
        description: 'Clarify users, workflows, non-functionals, and system boundaries.',
      },
      {
        title: 'Solution blueprint',
        description: 'Define UX flows, data model, APIs, and security requirements.',
      },
      {
        title: 'Iterative build',
        description: 'Deliver in increments with demos, quality gates, and documentation.',
      },
      {
        title: 'Launch & harden',
        description: 'Productionize with monitoring, support runbooks, and performance tuning.',
      },
    ],
    expectedOutcomes: [
      'Production-ready applications or platforms',
      'Documented APIs and integration contracts',
      'Operable systems with clear ownership',
    ],
    faqs: [
      {
        question: 'Do you build greenfield or extend existing systems?',
        answer:
          'Both. We deliver new platforms and also extend or modernize existing enterprise applications.',
      },
      {
        question: 'How do you handle security?',
        answer:
          'Security requirements are defined up front and validated through design reviews, access controls, and testing.',
      },
      {
        question: 'Can you support after launch?',
        answer:
          'Yes. We offer hypercare and ongoing optimization engagements after go-live.',
      },
    ],
    relatedResources: [
      { label: 'Enterprise consulting', href: '/services/enterprise-consulting' },
      { label: 'AI solutions', href: '/services/ai-solutions' },
      { label: 'Book a consultation', href: '/contact#consultation' },
    ],
  },
  rwa: {
    problem:
      'Physical and financial assets remain operationally fragmented and capital-inefficient, with limited institutional pathways for digital ownership and access.',
    solution:
      'We help enterprises structure, digitize, and operate real-world asset programs with blockchain infrastructure, compliance-aware design, and investor access models.',
    benefits: [
      'Liquidity and access pathways for illiquid assets',
      'Transparent ownership and transaction records',
      'Fractional and co-investment structures',
      'Lifecycle operations designed for scale',
      'Institutional readiness for digital markets',
    ],
    techStack: [
      'RWA architecture frameworks',
      'Blockchain infrastructure',
      'Investor access portals',
      'Compliance workflow design',
      'Asset lifecycle controls',
    ],
    process: [
      {
        title: 'Asset readiness',
        description: 'Identify assets, legal wrappers, and operational prerequisites.',
      },
      {
        title: 'Digital representation',
        description: 'Design ownership, data, and control models for on-chain representation.',
      },
      {
        title: 'Market access design',
        description: 'Define investor journeys, eligibility, and servicing workflows.',
      },
      {
        title: 'Operate & optimize',
        description: 'Stand up reporting, lifecycle events, and continuous controls.',
      },
    ],
    expectedOutcomes: [
      'Tokenization readiness roadmap',
      'Governed digital ownership model',
      'Operating design for ongoing asset management',
    ],
    faqs: [
      {
        question: 'Is this only for real estate?',
        answer:
          'Real estate is a primary use case, but the same frameworks apply to other qualifying real-world and financial assets.',
      },
      {
        question: 'Do you handle legal structuring?',
        answer:
          'We collaborate with legal counsel and focus on technology, architecture, and operating design that support compliant structures.',
      },
      {
        question: 'How long to reach a pilot?',
        answer:
          'Focused readiness and design phases often complete in weeks to a few months depending on asset complexity and stakeholders.',
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
