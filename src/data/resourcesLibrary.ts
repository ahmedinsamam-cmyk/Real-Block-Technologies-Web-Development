export type ResourceCategory =
  | 'Guide'
  | 'Checklist'
  | 'Capability Statement'
  | 'Whitepaper'
  | 'Playbook';

export interface LibraryResource {
  slug: string;
  title: string;
  category: ResourceCategory;
  description: string;
  pages: string;
  readTime: string;
  topics: string[];
  gated: boolean;
  featured?: boolean;
}

export const resourcesLibrary: LibraryResource[] = [
  {
    slug: 'rwa-tokenization-readiness-checklist',
    title: 'RWA Tokenization Readiness Checklist',
    category: 'Checklist',
    description: 'A practical checklist covering asset eligibility, custody, compliance, and launch readiness for real estate, art, and membership programs.',
    pages: '8 pages',
    readTime: '10 min',
    topics: ['RWA', 'Tokenization', 'Compliance'],
    gated: true,
    featured: true,
  },
  {
    slug: 'enterprise-ai-adoption-guide',
    title: 'Enterprise AI Adoption Guide',
    category: 'Guide',
    description: 'How mid-to-large organizations move from AI pilots to production systems with governance, ROI measurement, and change management.',
    pages: '18 pages',
    readTime: '22 min',
    topics: ['AI', 'Governance', 'Operations'],
    gated: true,
    featured: true,
  },
  {
    slug: 'real-block-capability-statement',
    title: 'Real Block Technologies Capability Statement',
    category: 'Capability Statement',
    description: 'Overview of services, industries, delivery model, and engagement options for procurement and partnership teams.',
    pages: '6 pages',
    readTime: '8 min',
    topics: ['Company', 'Services'],
    gated: false,
    featured: true,
  },
  {
    slug: 'blockchain-for-enterprise-operations-whitepaper',
    title: 'Blockchain for Enterprise Operations',
    category: 'Whitepaper',
    description: 'A whitepaper on permissioned ledgers, audit trails, and operational blockchain use cases beyond speculation.',
    pages: '24 pages',
    readTime: '30 min',
    topics: ['Blockchain', 'Operations', 'Audit'],
    gated: true,
  },
  {
    slug: 'fintech-modernization-playbook',
    title: 'FinTech Modernization Playbook',
    category: 'Playbook',
    description: 'A phased approach to payments, digital banking, and treasury workflow modernization with architecture and compliance considerations.',
    pages: '16 pages',
    readTime: '20 min',
    topics: ['FinTech', 'Payments', 'Banking'],
    gated: true,
  },
  {
    slug: 'workday-dynamics-hubspot-integration-checklist',
    title: 'Workday · Dynamics 365 · HubSpot Integration Checklist',
    category: 'Checklist',
    description: 'Pre-implementation checklist for ERP and CRM professional services engagements across Workday, Dynamics 365, and HubSpot.',
    pages: '10 pages',
    readTime: '12 min',
    topics: ['Consulting', 'ERP', 'CRM'],
    gated: true,
  },
  {
    slug: 'rwa-operator-guide',
    title: 'RWA Operator Guide: From Asset to Token Program',
    category: 'Guide',
    description: 'Step-by-step guide for operators launching tokenization-as-a-service programs for real estate, artworks, antiques, and memberships.',
    pages: '20 pages',
    readTime: '25 min',
    topics: ['RWA', 'Real Estate', 'Memberships'],
    gated: true,
  },
  {
    slug: 'ai-governance-checklist',
    title: 'AI Governance & Risk Checklist',
    category: 'Checklist',
    description: 'Controls, documentation, and review practices for responsible enterprise AI deployment.',
    pages: '7 pages',
    readTime: '9 min',
    topics: ['AI', 'Risk', 'Governance'],
    gated: true,
  },
  {
    slug: 'healthcare-operations-ai-guide',
    title: 'AI for Healthcare Operations Guide',
    category: 'Guide',
    description: 'Where AI creates value in clinical operations, scheduling, and administrative workflows—without compromising compliance.',
    pages: '14 pages',
    readTime: '18 min',
    topics: ['Healthcare', 'AI'],
    gated: true,
  },
  {
    slug: 'manufacturing-traceability-whitepaper',
    title: 'Digital Traceability in Manufacturing',
    category: 'Whitepaper',
    description: 'How blockchain and AI improve provenance, quality events, and supplier accountability across manufacturing networks.',
    pages: '22 pages',
    readTime: '28 min',
    topics: ['Manufacturing', 'Blockchain', 'AI'],
    gated: true,
  },
  {
    slug: 'banking-digital-transformation-capability',
    title: 'Banking & Financial Services Capability Brief',
    category: 'Capability Statement',
    description: 'How Real Block supports banks and financial institutions with FinTech modernization, AI, and secure digital infrastructure.',
    pages: '5 pages',
    readTime: '7 min',
    topics: ['Banking', 'FinTech'],
    gated: false,
  },
  {
    slug: 'strategy-session-preparation-guide',
    title: 'Strategy Session Preparation Guide',
    category: 'Guide',
    description: 'What to prepare before a Real Block strategy session so your leadership team gets maximum value from the conversation.',
    pages: '4 pages',
    readTime: '6 min',
    topics: ['Engagement', 'Strategy'],
    gated: false,
  },
];

export function getResourceBySlug(slug: string) {
  return resourcesLibrary.find((r) => r.slug === slug);
}
