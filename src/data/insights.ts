export interface InsightArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  author: string
  tags: string[]
  /** Paragraphs of article body for SEO detail pages */
  body: string[]
}

export const insights: InsightArticle[] = [
  {
    id: 'ai-enterprise-ops',
    slug: 'how-ai-is-transforming-enterprise-operations',
    title: 'How AI is Transforming Enterprise Operations',
    excerpt:
      'Explore how leading organizations use AI automation, agents, and analytics to redesign operating models and unlock measurable efficiency.',
    category: 'Artificial Intelligence',
    readTime: '6 min read',
    date: 'June 12, 2026',
    author: 'Real Block Technologies',
    tags: ['ai', 'operations', 'automation'],
    body: [
      'Enterprise operations are shifting from manual handoffs to intelligent workflows. The organizations seeing durable results treat AI as an operating capability—not a side experiment.',
      'High-value starting points typically include document-heavy processes, exception handling, forecasting, and decision support for managers. Success depends on data readiness, clear ownership, and human oversight.',
      'A practical path starts with discovery, a controlled pilot with measurable KPIs, and a scale plan that includes governance, training, and integration with existing systems.',
      'Real Block Technologies helps enterprises prioritize use cases, design governed AI solutions, and deliver automation that improves cycle time and decision quality.',
    ],
  },
  {
    id: 'rwa-future',
    slug: 'the-future-of-real-world-asset-tokenization',
    title: 'The Future of Real World Asset Tokenization',
    excerpt:
      'A practical look at how asset tokenization is evolving from experimentation into enterprise-grade infrastructure for ownership and access.',
    category: 'Digital Assets',
    readTime: '8 min read',
    date: 'May 28, 2026',
    author: 'Real Block Technologies',
    tags: ['rwa', 'tokenization', 'taas'],
    body: [
      'Real-world asset tokenization is moving from concept decks into operating programs for physical and experiential assets.',
      'Enterprises evaluating Tokenization-as-a-Service should focus on asset readiness, access models, lifecycle operations, and clear delivery milestones.',
      'For real estate, artworks, antiques, rent-share distribution, and membership services, the opportunity is operational clarity as much as technology novelty.',
      'A structured TaaS engagement reduces build risk and helps sponsors establish governed digital representation without inventing an entire stack in-house.',
    ],
  },
  {
    id: 'digital-asset-strategy',
    slug: 'why-companies-need-digital-asset-strategies',
    title: 'Why Companies Need Digital Asset Strategies',
    excerpt:
      'Enterprises that treat digital assets as a strategic capability—not a pilot—are better prepared for new markets and operating models.',
    category: 'Strategy',
    readTime: '5 min read',
    date: 'April 19, 2026',
    author: 'Real Block Technologies',
    tags: ['strategy', 'digital-assets'],
    body: [
      'Digital assets are no longer only a technology topic. They affect ownership models, customer experience, reporting, and partner ecosystems.',
      'Without a strategy, organizations accumulate disconnected pilots, unclear governance, and delayed decisions.',
      'A useful digital asset strategy defines business outcomes, eligible asset classes, risk posture, and a phased delivery roadmap executives can fund.',
    ],
  },
  {
    id: 'blockchain-advisory',
    slug: 'building-a-practical-blockchain-roadmap',
    title: 'Building a Practical Blockchain Roadmap',
    excerpt:
      'From architecture choices to governance and integration, a structured advisory approach reduces risk and accelerates value realization.',
    category: 'Blockchain',
    readTime: '7 min read',
    date: 'March 4, 2026',
    author: 'Real Block Technologies',
    tags: ['blockchain', 'roadmap'],
    body: [
      'Blockchain programs fail when they begin with a protocol preference instead of a business problem.',
      'A practical roadmap starts with use-case qualification, architecture options, security and controls, and integration with existing enterprise systems.',
      'Advisory should leave executives with clear trade-offs, a delivery sequence, and criteria for go/no-go decisions at each phase.',
    ],
  },
  {
    id: 'cfo-fintech',
    slug: 'what-cfos-should-expect-from-modern-fintech-stacks',
    title: 'What CFOs Should Expect from Modern FinTech Stacks',
    excerpt:
      'Finance leaders evaluating FinTech platforms need clarity on workflows, reporting, integrations, and adoption—not vendor hype.',
    category: 'Finance',
    readTime: '6 min read',
    date: 'February 11, 2026',
    author: 'Real Block Technologies',
    tags: ['fintech', 'cfo', 'finance'],
    body: [
      'Modern FinTech stacks promise visibility and speed, but value appears only when workflows, data, and controls are redesigned together.',
      'CFOs should evaluate platforms on integration quality, reporting latency, auditability, and change-management requirements.',
      'Scoped professional services engagements help finance teams modernize without committing to open-ended transformation programs.',
    ],
  },
  {
    id: 'ai-agents-enterprise',
    slug: 'enterprise-ai-agents-beyond-the-pilot-phase',
    title: 'Enterprise AI Agents: Beyond the Pilot Phase',
    excerpt:
      'Successful AI agent programs combine clear workflows, human oversight, and measurable outcomes—not isolated demos.',
    category: 'Artificial Intelligence',
    readTime: '7 min read',
    date: 'January 22, 2026',
    author: 'Real Block Technologies',
    tags: ['ai', 'agents'],
    body: [
      'AI agents are powerful when they execute bounded workflows with escalation paths and audit logs.',
      'Pilots become production systems when organizations define ownership, data access, evaluation metrics, and human review points.',
      'Enterprises should prioritize agents that remove repetitive work while elevating judgment—not replace accountability.',
    ],
  },
  {
    id: 'workday-adoption',
    slug: 'getting-value-from-workday-implementations',
    title: 'Getting Value from Workday Implementations',
    excerpt:
      'Workday programs succeed when configuration, integration, and adoption are treated as one professional services engagement.',
    category: 'Enterprise Platforms',
    readTime: '6 min read',
    date: 'December 9, 2025',
    author: 'Real Block Technologies',
    tags: ['workday', 'erp', 'hr'],
    body: [
      'Workday can transform HR and finance operations—but only when process design and change management keep pace with configuration.',
      'Common failure modes include weak integration planning, unclear ownership, and underfunded training.',
      'Professional services focused on outcomes help organizations move from go-live to measurable adoption.',
    ],
  },
  {
    id: 'dynamics-365-ops',
    slug: 'microsoft-dynamics-365-for-operating-advantage',
    title: 'Microsoft Dynamics 365 for Operating Advantage',
    excerpt:
      'Dynamics 365 delivers value when ERP and CRM design aligns to how teams actually sell, fulfill, and report.',
    category: 'Enterprise Platforms',
    readTime: '6 min read',
    date: 'November 18, 2025',
    author: 'Real Block Technologies',
    tags: ['dynamics-365', 'erp', 'crm'],
    body: [
      'Dynamics 365 implementations often stall between technical go-live and operational excellence.',
      'Leaders should prioritize process simplification, data quality, and role-based adoption plans.',
      'Scoped advisory and implementation support can accelerate time-to-value across sales, service, and finance workflows.',
    ],
  },
  {
    id: 'hubspot-revops',
    slug: 'hubspot-professional-services-for-revenue-teams',
    title: 'HubSpot Professional Services for Revenue Teams',
    excerpt:
      'HubSpot becomes a growth system when CRM design, automation, and reporting reflect the real revenue operating model.',
    category: 'Enterprise Platforms',
    readTime: '5 min read',
    date: 'October 7, 2025',
    author: 'Real Block Technologies',
    tags: ['hubspot', 'crm', 'revops'],
    body: [
      'HubSpot is frequently underused as a contact database rather than a revenue operations platform.',
      'Professional services should connect pipeline design, marketing automation, and reporting dashboards to executive KPIs.',
      'When done well, teams gain cleaner handoffs, faster reporting, and clearer ownership across marketing and sales.',
    ],
  },
  {
    id: 'manufacturing-ai',
    slug: 'ai-for-manufacturing-operations-visibility',
    title: 'AI for Manufacturing Operations Visibility',
    excerpt:
      'Manufacturers use predictive analytics and process intelligence to reduce downtime and improve plant coordination.',
    category: 'Industries',
    readTime: '7 min read',
    date: 'September 16, 2025',
    author: 'Real Block Technologies',
    tags: ['manufacturing', 'ai', 'operations'],
    body: [
      'Unplanned downtime and fragmented plant data remain costly for manufacturing networks.',
      'AI programs that connect telemetry, maintenance workflows, and decision dashboards create earlier intervention windows.',
      'Start with a high-impact line or plant, prove ROI, then scale patterns across the network.',
    ],
  },
  {
    id: 'healthcare-automation',
    slug: 'secure-automation-in-healthcare-operations',
    title: 'Secure Automation in Healthcare Operations',
    excerpt:
      'Healthcare organizations can reduce administrative burden with secure document intelligence and workflow automation.',
    category: 'Industries',
    readTime: '6 min read',
    date: 'August 21, 2025',
    author: 'Real Block Technologies',
    tags: ['healthcare', 'automation', 'security'],
    body: [
      'Administrative load and fragmented operational data constrain healthcare performance.',
      'Automation programs must be designed with privacy, access control, and auditability from day one.',
      'Document intelligence and secure workflow redesign are practical entry points with measurable cycle-time gains.',
    ],
  },
  {
    id: 'banking-digital',
    slug: 'digital-transformation-priorities-for-banking-leaders',
    title: 'Digital Transformation Priorities for Banking Leaders',
    excerpt:
      'Banking and financial institutions need sequenced modernization across client experience, risk, and operations.',
    category: 'Industries',
    readTime: '7 min read',
    date: 'July 14, 2025',
    author: 'Real Block Technologies',
    tags: ['banking', 'fintech', 'transformation'],
    body: [
      'Banking leaders face pressure to modernize while protecting controls and customer trust.',
      'Priority initiatives often include workflow automation, data visibility, and FinTech stack modernization.',
      'A sequenced roadmap with clear deliverables helps institutions avoid scattered digital initiatives.',
    ],
  },
  {
    id: 'real-estate-ops',
    slug: 'digitizing-real-estate-portfolios-for-operators',
    title: 'Digitizing Real Estate Portfolios for Operators',
    excerpt:
      'Property operators can improve reporting, access design, and asset lifecycle management with practical digitization programs.',
    category: 'Industries',
    readTime: '6 min read',
    date: 'June 3, 2025',
    author: 'Real Block Technologies',
    tags: ['real-estate', 'rwa', 'operations'],
    body: [
      'Real estate operators often rely on fragmented ownership records and manual investor or tenant reporting.',
      'Digitization programs should begin with data standards, access models, and operating workflows—then introduce tokenization where it fits.',
      'Tokenization-as-a-Service can accelerate delivery for qualifying portfolio and membership use cases.',
    ],
  },
  {
    id: 'engagement-design',
    slug: 'how-to-scope-an-enterprise-technology-engagement',
    title: 'How to Scope an Enterprise Technology Engagement',
    excerpt:
      'Clear scoping—outcomes, milestones, and ownership—turns technology ambition into an executable professional services engagement.',
    category: 'Strategy',
    readTime: '5 min read',
    date: 'May 8, 2025',
    author: 'Real Block Technologies',
    tags: ['consulting', 'delivery'],
    body: [
      'Vague scopes create delayed decisions and weak accountability.',
      'Strong engagements define the business problem, success metrics, deliverables, and decision forums before build begins.',
      'Proposal-based professional services work best when both sides agree on what “done” looks like at each milestone.',
    ],
  },
  {
    id: 'security-by-design',
    slug: 'security-and-compliance-by-design-for-emerging-tech',
    title: 'Security and Compliance by Design for Emerging Tech',
    excerpt:
      'AI and tokenization programs earn executive trust when security and compliance are designed in—not bolted on later.',
    category: 'Risk & Governance',
    readTime: '6 min read',
    date: 'April 2, 2025',
    author: 'Real Block Technologies',
    tags: ['security', 'compliance', 'governance'],
    body: [
      'Emerging technology programs often postpone security reviews until late-stage testing—creating expensive rework.',
      'Controls, access models, logging, and vendor due diligence should shape architecture decisions from discovery onward.',
      'Enterprises that embed governance early move faster through executive and risk committee approvals.',
    ],
  },
]

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insights.find((item) => item.slug === slug || item.id === slug)
}
