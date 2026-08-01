export interface SuccessStory {
  slug: string;
  title: string;
  clientType: string;
  industry: string;
  challenge: string;
  approach: string;
  outcomes: string[];
  services: string[];
  illustrative: boolean;
  label: string;
}

export const successStories: SuccessStory[] = [
  {
    slug: 'real-estate-fractional-ownership-platform',
    title: 'Fractional Ownership Platform for a Regional Real Estate Operator',
    clientType: 'Real estate operator',
    industry: 'Real Estate',
    challenge:
      'The operator needed a compliant digital pathway to offer fractional participation in selected properties without rebuilding their entire technology stack.',
    approach:
      'We designed a tokenization-as-a-service program covering asset onboarding, investor experience, compliance workflow, and operational reporting—integrated with existing property systems.',
    outcomes: [
      'Launched a pilot tokenized ownership program for selected assets',
      'Reduced manual investor onboarding steps',
      'Established a reusable operating model for future properties',
    ],
    services: ['RWA Tokenization', 'Blockchain', 'Enterprise Consulting'],
    illustrative: true,
    label: 'Illustrative engagement',
  },
  {
    slug: 'bank-operations-ai-modernization',
    title: 'Operations Intelligence for a Mid-Sized Banking Group',
    clientType: 'Banking group',
    industry: 'Banking',
    challenge:
      'Operations teams relied on fragmented reporting across branches, delaying exception handling and leadership visibility.',
    approach:
      'We implemented an AI analytics layer on existing core data sources, with governed dashboards, anomaly detection, and workflow routing for high-priority exceptions.',
    outcomes: [
      'Faster exception detection across daily operations',
      'Improved leadership visibility into operational risk indicators',
      'Reusable AI patterns for adjacent banking workflows',
    ],
    services: ['AI Solutions', 'FinTech', 'Enterprise Consulting'],
    illustrative: true,
    label: 'Illustrative engagement',
  },
  {
    slug: 'manufacturing-supply-chain-traceability',
    title: 'Supply Chain Traceability for a Manufacturing Network',
    clientType: 'Manufacturing enterprise',
    industry: 'Manufacturing',
    challenge:
      'Quality events and supplier disputes were difficult to resolve due to incomplete provenance records across plants and partners.',
    approach:
      'We designed a permissioned ledger and AI-assisted quality analytics program linking batch records, supplier events, and audit evidence.',
    outcomes: [
      'Improved audit readiness for key product lines',
      'Faster root-cause analysis for quality incidents',
      'Stronger supplier accountability with shared event history',
    ],
    services: ['Blockchain', 'AI Solutions', 'Enterprise Consulting'],
    illustrative: true,
    label: 'Illustrative engagement',
  },
  {
    slug: 'healthcare-scheduling-ai',
    title: 'Scheduling & Administrative AI for a Healthcare Network',
    clientType: 'Healthcare provider network',
    industry: 'Healthcare',
    challenge:
      'Administrative teams spent excessive time on scheduling conflicts, no-show prediction, and manual reporting across clinics.',
    approach:
      'We delivered AI-assisted scheduling and operations analytics with privacy-conscious design, staff workflows, and measurable KPI tracking.',
    outcomes: [
      'Reduced scheduling conflict rate in pilot clinics',
      'Better no-show prediction for capacity planning',
      'Clearer operational reporting for clinical administrators',
    ],
    services: ['AI Solutions', 'Enterprise Consulting'],
    illustrative: true,
    label: 'Illustrative engagement',
  },
  {
    slug: 'membership-token-program',
    title: 'Membership & Access Token Program for a Lifestyle Brand',
    clientType: 'Lifestyle & membership brand',
    industry: 'Professional Services',
    challenge:
      'The brand wanted digital memberships with transferable access rights and clearer lifecycle management across venues.',
    approach:
      'We designed a membership tokenization program covering issuance, access rules, renewals, and operator dashboards.',
    outcomes: [
      'Digitized membership issuance and renewal flows',
      'Clearer access control across participating venues',
      'Foundation for future loyalty and partner expansions',
    ],
    services: ['RWA Tokenization', 'Blockchain'],
    illustrative: true,
    label: 'Illustrative engagement',
  },
  {
    slug: 'erp-crm-integration-program',
    title: 'Workday & HubSpot Alignment for a Growing Enterprise',
    clientType: 'Growth-stage enterprise',
    industry: 'Professional Services',
    challenge:
      'Finance and revenue teams operated on disconnected systems, creating reporting delays and duplicate data entry.',
    approach:
      'Through our enterprise consulting practice, we aligned Workday and HubSpot processes, integrations, and reporting ownership.',
    outcomes: [
      'Reduced duplicate data entry between finance and sales',
      'Improved forecast and billing visibility',
      'Documented operating model for ongoing platform support',
    ],
    services: ['Enterprise Consulting', 'FinTech'],
    illustrative: true,
    label: 'Illustrative engagement',
  },
];

export function getSuccessStoryBySlug(slug: string) {
  return successStories.find((s) => s.slug === slug);
}
