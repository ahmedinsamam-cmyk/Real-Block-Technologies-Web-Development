export interface FocusedIndustry {
  slug: string;
  name: string;
  navLabel: string;
  heroTitle: string;
  heroDescription: string;
  problems: { title: string; description: string }[];
  solutions: { title: string; description: string; href: string }[];
  outcomes: string[];
  relatedInsights: string[];
}

/** Priority industry landing pages requested for SEO and sales focus */
export const focusedIndustries: FocusedIndustry[] = [
  {
    slug: 'real-estate',
    name: 'Real Estate',
    navLabel: 'Real Estate',
    heroTitle: 'Real estate tokenization & digital ownership programs',
    heroDescription:
      'Help property operators and developers launch fractional ownership, rent-share, and digital asset programs with clear compliance and operational design.',
    problems: [
      {
        title: 'Illiquid ownership structures',
        description: 'Traditional ownership models limit participation and create high friction for secondary transfers.',
      },
      {
        title: 'Manual investor operations',
        description: 'Onboarding, reporting, and distributions often rely on fragmented spreadsheets and email workflows.',
      },
      {
        title: 'Unclear digital pathway',
        description: 'Teams know tokenization matters but lack a practical operating model from asset selection to launch.',
      },
    ],
    solutions: [
      {
        title: 'RWA Tokenization-as-a-Service',
        description: 'End-to-end programs for real estate, rent-share, and property-linked digital ownership.',
        href: '/services/rwa-tokenization',
      },
      {
        title: 'Blockchain infrastructure',
        description: 'Permissioned ledgers, custody design, and audit-ready ownership records.',
        href: '/services/blockchain',
      },
      {
        title: 'Enterprise systems alignment',
        description: 'Connect property operations, CRM, and finance platforms to the token program.',
        href: '/services/consulting',
      },
    ],
    outcomes: [
      'Faster path from asset selection to pilot launch',
      'Clearer investor onboarding and reporting workflows',
      'Reusable model for additional properties and funds',
    ],
    relatedInsights: [
      'the-future-of-real-world-asset-tokenization',
      'digitizing-real-estate-portfolios-for-operators',
      'security-and-compliance-by-design-for-emerging-tech',
    ],
  },
  {
    slug: 'banking',
    name: 'Banking',
    navLabel: 'Banking',
    heroTitle: 'Banking modernization with AI & FinTech systems',
    heroDescription:
      'Support banks and financial institutions with operations intelligence, digital product infrastructure, and secure modernization programs.',
    problems: [
      {
        title: 'Fragmented operations data',
        description: 'Branch and product data lives in silos, slowing exception handling and leadership visibility.',
      },
      {
        title: 'Legacy digital channels',
        description: 'Customer and internal workflows need modern payment, onboarding, and reporting experiences.',
      },
      {
        title: 'Compliance pressure',
        description: 'New initiatives must preserve auditability, access controls, and regulatory readiness.',
      },
    ],
    solutions: [
      {
        title: 'FinTech solutions',
        description: 'Payments, digital banking workflows, and financial operations modernization.',
        href: '/services/fintech',
      },
      {
        title: 'AI for banking operations',
        description: 'Anomaly detection, forecasting, and decision support for operations teams.',
        href: '/services/ai-solutions',
      },
      {
        title: 'Platform consulting',
        description: 'Workday, Dynamics 365, and HubSpot professional services for financial institutions.',
        href: '/services/enterprise-consulting',
      },
    ],
    outcomes: [
      'Better visibility into operational exceptions',
      'Modernized customer and internal workflows',
      'Stronger governance around AI and digital programs',
    ],
    relatedInsights: [
      'digital-transformation-priorities-for-banking-leaders',
      'what-cfos-should-expect-from-modern-fintech-stacks',
      'how-ai-is-transforming-enterprise-operations',
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    navLabel: 'Manufacturing',
    heroTitle: 'Manufacturing intelligence, traceability & AI operations',
    heroDescription:
      'Improve quality, supply chain visibility, and plant operations with AI analytics and blockchain-backed traceability.',
    problems: [
      {
        title: 'Limited provenance',
        description: 'Batch history and supplier events are hard to reconstruct during quality or audit reviews.',
      },
      {
        title: 'Reactive quality management',
        description: 'Issues are discovered late, increasing scrap, rework, and customer impact.',
      },
      {
        title: 'Disconnected plant data',
        description: 'OT and IT systems rarely produce a unified view for decision-makers.',
      },
    ],
    solutions: [
      {
        title: 'Traceability blockchain',
        description: 'Permissioned event history for batches, suppliers, and quality milestones.',
        href: '/services/blockchain-advisory',
      },
      {
        title: 'AI operations',
        description: 'Predictive quality, demand, and maintenance insights from plant and supply data.',
        href: '/services/ai-solutions',
      },
      {
        title: 'Systems integration',
        description: 'Align ERP and operational platforms through enterprise consulting.',
        href: '/services/enterprise-consulting',
      },
    ],
    outcomes: [
      'Faster quality root-cause analysis',
      'Stronger supplier accountability',
      'Clearer plant and network visibility',
    ],
    relatedInsights: [
      'ai-for-manufacturing-operations-visibility',
      'building-a-practical-blockchain-roadmap',
      'enterprise-ai-agents-beyond-the-pilot-phase',
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    navLabel: 'Healthcare',
    heroTitle: 'Healthcare operations AI & digital transformation',
    heroDescription:
      'Help healthcare networks improve scheduling, administrative operations, and decision support with privacy-conscious AI programs.',
    problems: [
      {
        title: 'Administrative overload',
        description: 'Staff spend too much time on scheduling conflicts, manual reporting, and coordination.',
      },
      {
        title: 'Limited operational foresight',
        description: 'Leaders lack timely insight into capacity, no-shows, and workflow bottlenecks.',
      },
      {
        title: 'Compliance sensitivity',
        description: 'Any AI initiative must respect privacy, access control, and clinical governance.',
      },
    ],
    solutions: [
      {
        title: 'AI for clinical operations',
        description: 'Scheduling support, forecasting, and administrative automation designed for healthcare contexts.',
        href: '/services/ai-solutions',
      },
      {
        title: 'Enterprise consulting',
        description: 'Process and platform alignment across clinical administration and business systems.',
        href: '/services/enterprise-consulting',
      },
      {
        title: 'Secure digital infrastructure',
        description: 'Governance, access, and audit patterns for sensitive operational data.',
        href: '/services/blockchain-advisory',
      },
    ],
    outcomes: [
      'Reduced scheduling friction in pilot clinics',
      'Better capacity and no-show visibility',
      'Governed AI patterns ready for broader rollout',
    ],
    relatedInsights: [
      'secure-automation-in-healthcare-operations',
      'how-ai-is-transforming-enterprise-operations',
      'how-to-scope-an-enterprise-technology-engagement',
    ],
  },
];

/** Alias legacy financial-services URL to banking landing content */
export const INDUSTRY_ALIASES: Record<string, string> = {
  'financial-services': 'banking',
};

export function getFocusedIndustry(slug: string) {
  return focusedIndustries.find((i) => i.slug === slug);
}
