export const CAPITAL_FLOW = [
  'RESOURCE',
  'INTELLIGENCE',
  'ECONOMIC RIGHTS',
  'VALUATION',
  'STRUCTURING',
  'RESOURCE CAPITAL PRODUCT',
  'VALIDATION',
  'DIGITAL ASSET REGISTRY',
  'DIGITAL ASSET MANAGEMENT',
  'CAPITAL-MARKET READINESS',
] as const

export const RESOURCE_RIGHTS = [
  'Royalty',
  'Future production',
  'Project',
  'Inventory',
  'Infrastructure',
] as const

export const PROCESS_STEPS = [
  {
    id: '01',
    title: 'Discover',
    description: 'Identify the resource, ownership and potential economic opportunities.',
  },
  {
    id: '02',
    title: 'Assess',
    description: 'Analyze technical, financial, legal and commercial information.',
  },
  {
    id: '03',
    title: 'Map rights',
    description:
      'Identify royalties, production rights, offtake, inventory, project interests and infrastructure economics.',
  },
  {
    id: '04',
    title: 'Value',
    description: 'Model potential cash flows, scenarios and economic outcomes.',
  },
  {
    id: '05',
    title: 'Structure',
    description: 'Determine potential capital-product structures.',
  },
  {
    id: '06',
    title: 'Create',
    description: 'Develop the Resource Capital Product architecture.',
  },
  {
    id: '07',
    title: 'Validate',
    description:
      'Subject the structure to appropriate legal, regulatory, technical and commercial validation.',
  },
  {
    id: '08',
    title: 'Digitize',
    description: 'Create digital records and infrastructure where appropriate.',
  },
  {
    id: '09',
    title: 'Manage',
    description: 'Maintain asset, rights, documentation and product lifecycle information.',
  },
] as const

export interface ResourceCapitalProduct {
  id: string
  code: string
  slug: string
  name: string
  productType: string
  underlying: string
  economicRight: string
  status: string
  description: string
  applications: string[]
  minerals?: string[]
  infrastructure?: string[]
  legalConcept: string
  href: string
}

export const RCPS: ResourceCapitalProduct[] = [
  {
    id: 'rcp-01',
    code: 'RCP-01',
    slug: 'rcp-01',
    name: 'Copper Royalty Product',
    productType: 'Royalty',
    underlying: 'Copper mining asset',
    economicRight: 'Illustrative royalty',
    status: 'Prototype',
    description:
      'An illustrative Resource Capital Product demonstrating how a copper royalty could be analyzed, valued and structured into a potential capital product.',
    applications: [
      'Mine expansion',
      'Development capital',
      'Working capital',
      'Debt restructuring',
      'Strategic financing',
    ],
    legalConcept:
      'RCP-01 Copper Royalty Product is an illustrative Resource Capital Product demonstrating how a copper royalty could be analyzed, valued and structured into a potential capital product, subject to legal, regulatory, technical and commercial validation.',
    href: '/products/rcp-01',
  },
  {
    id: 'rcp-02',
    code: 'RCP-02',
    slug: 'rcp-02',
    name: 'Future Production Product',
    productType: 'Future Production',
    underlying: 'Mineral production',
    economicRight: 'Illustrative future-production entitlement',
    status: 'Prototype',
    description:
      'An illustrative Resource Capital Product demonstrating how defined future mineral production could be analyzed, valued and structured into a potential capital product.',
    applications: [
      'Mine development',
      'Expansion',
      'Production financing',
      'Long-term capital planning',
    ],
    legalConcept:
      'RCP-02 Future Production Product is an illustrative Resource Capital Product demonstrating how defined future mineral production could be analyzed, valued and structured into a potential capital product, subject to legal, regulatory, technical and commercial validation.',
    href: '/products/rcp-02',
  },
  {
    id: 'rcp-03',
    code: 'RCP-03',
    slug: 'rcp-03',
    name: 'Critical Mineral Project Product',
    productType: 'Project',
    underlying: 'Critical mineral development project',
    economicRight: 'Illustrative project economics',
    status: 'Prototype',
    description:
      'An illustrative Resource Capital Product demonstrating how a critical-mineral development project could be analyzed, valued and structured into a potential capital product.',
    applications: [
      'Development capital',
      'Construction financing',
      'Strategic project financing',
      'Expansion',
    ],
    minerals: ['Copper', 'Lithium', 'Graphite', 'Nickel', 'Cobalt', 'Rare earth elements'],
    legalConcept:
      'RCP-03 Critical Mineral Project Product is an illustrative Resource Capital Product demonstrating how a critical-mineral development project could be analyzed, valued and structured into a potential capital product, subject to legal, regulatory, technical and commercial validation.',
    href: '/products/rcp-03',
  },
  {
    id: 'rcp-04',
    code: 'RCP-04',
    slug: 'rcp-04',
    name: 'Mineral Inventory Product',
    productType: 'Inventory',
    underlying: 'Verified physical mineral inventory',
    economicRight: 'Illustrative inventory claim',
    status: 'Prototype',
    description:
      'An illustrative Resource Capital Product demonstrating how verified mineral inventory could be analyzed, valued and structured into a potential financing or capital product.',
    applications: [
      'Working capital',
      'Inventory financing',
      'Commodity supply-chain financing',
      'Processing/refining finance',
    ],
    legalConcept:
      'RCP-04 Mineral Inventory Product is an illustrative Resource Capital Product demonstrating how verified mineral inventory could be analyzed, valued and structured into a potential capital product, subject to legal, regulatory, technical and commercial validation.',
    href: '/products/rcp-04',
  },
  {
    id: 'rcp-05',
    code: 'RCP-05',
    slug: 'rcp-05',
    name: 'Resource Infrastructure Product',
    productType: 'Infrastructure',
    underlying: 'Resource infrastructure',
    economicRight: 'Illustrative infrastructure cash flows',
    status: 'Prototype',
    description:
      'An illustrative Resource Capital Product demonstrating how resource-related infrastructure and associated economic rights or cash flows could be analyzed, valued and structured into a potential capital product.',
    applications: [
      'Revenue structures',
      'Infrastructure financing',
      'Asset monetization',
    ],
    infrastructure: [
      'Processing facilities',
      'Ports',
      'Rail',
      'Storage',
      'Pipelines',
      'Power infrastructure',
      'Mining logistics',
    ],
    legalConcept:
      'RCP-05 Resource Infrastructure Product is an illustrative Resource Capital Product demonstrating how resource-related infrastructure and associated economic rights or cash flows could be analyzed, valued and structured into a potential capital product, subject to legal, regulatory, technical and commercial validation.',
    href: '/products/rcp-05',
  },
]

export const SERVICES = [
  {
    id: 'intelligence',
    number: '01',
    title: 'Resource Asset Intelligence',
    description:
      'Analyze and organize ownership, resource/reserve data, production, technical information, existing agreements, economic rights and financial information.',
    deliverable: 'Resource Passport™',
    items: [
      'Ownership',
      'Resource/reserve data',
      'Production',
      'Technical information',
      'Existing agreements',
      'Economic rights',
      'Financial information',
    ],
  },
  {
    id: 'opportunity',
    number: '02',
    title: 'Capital Opportunity Assessment',
    description:
      'Identify potential capital opportunities arising from royalties, future production, projects, inventory, infrastructure and other economic rights.',
    deliverable: 'Resource Capital Opportunity Report™',
    items: ['Royalties', 'Future production', 'Projects', 'Inventory', 'Infrastructure', 'Other economic rights'],
  },
  {
    id: 'structuring',
    number: '03',
    title: 'Capital Product Structuring',
    description:
      'Design potential royalty, future production, project, inventory, infrastructure and hybrid structures.',
    deliverable: 'Resource Capital Product Architecture',
    items: [
      'Royalty products',
      'Future production products',
      'Project structures',
      'Inventory structures',
      'Infrastructure structures',
      'Hybrid structures',
    ],
  },
  {
    id: 'modelling',
    number: '04',
    title: 'Financial & Scenario Modelling',
    description:
      'Build production, revenue, cash-flow, commodity scenario, sensitivity, valuation and risk models.',
    deliverable: 'Resource Cash Flow Model™',
    items: [
      'Production models',
      'Revenue models',
      'Cash-flow models',
      'Commodity scenarios',
      'Sensitivity analysis',
      'Valuation models',
      'Risk analysis',
    ],
  },
  {
    id: 'registry',
    number: '05',
    title: 'Digital Asset Registry & Management',
    description:
      'Provide digital infrastructure concepts for asset records, economic rights, product records, documentation, lifecycle events, reporting, audit trails and digital representations.',
    deliverable: 'Digital Asset Registry & Management layer',
    items: [
      'Asset records',
      'Economic rights',
      'Product records',
      'Documentation',
      'Lifecycle events',
      'Reporting',
      'Audit trails',
      'Digital representations',
    ],
  },
] as const

export const PASSPORT_SECTIONS = [
  {
    title: 'Asset Identity',
    items: ['Asset', 'Owner', 'Country', 'Commodity', 'Development stage'],
  },
  {
    title: 'Resource',
    items: ['Resource', 'Reserve', 'Production', 'Mine life'],
  },
  {
    title: 'Economic Rights',
    items: ['Royalty', 'Production rights', 'Offtake', 'Inventory', 'Infrastructure', 'Ownership'],
  },
  {
    title: 'Financial',
    items: ['Revenue', 'CAPEX', 'OPEX', 'Cash flow', 'Valuation'],
  },
  {
    title: 'Risk',
    items: ['Commodity', 'Technical', 'Operational', 'Jurisdiction', 'Counterparty', 'Liquidity'],
  },
  {
    title: 'Readiness',
    items: ['Asset readiness', 'Structuring readiness', 'Financing readiness', 'Digital readiness'],
  },
] as const

export const CAPITAL_SCORE = [
  { label: 'Asset Quality', value: '8.7/10' },
  { label: 'Economic Visibility', value: '8.1/10' },
  { label: 'Cash Flow Quality', value: '7.9/10' },
  { label: 'Structuring Readiness', value: '8.3/10' },
  { label: 'Financing Readiness', value: '7.8/10' },
  { label: 'Digital Readiness', value: '6.9/10' },
] as const

export const REGISTRY_CAPABILITIES = [
  {
    title: 'Asset Identity',
    items: ['Asset ID', 'Asset owner', 'Location', 'Commodity', 'Development stage'],
  },
  {
    title: 'Ownership & Rights',
    items: [
      'Ownership interests',
      'Royalties',
      'Production rights',
      'Offtake',
      'Joint ventures',
      'Encumbrances',
      'SPV interests',
    ],
  },
  {
    title: 'Technical Information',
    items: ['Resource', 'Reserve', 'Production', 'Mine life', 'Technical reports', 'Supporting documents'],
  },
  {
    title: 'Financial Information',
    items: ['Valuation', 'Cash flow', 'CAPEX', 'OPEX', 'Revenue', 'Financing'],
  },
  {
    title: 'Product Information',
    items: ['RCP type', 'Product status', 'Economic rights', 'Supporting documents', 'Structure'],
  },
  {
    title: 'Lifecycle Management',
    items: [
      'Asset updates',
      'Production updates',
      'Royalty calculations',
      'Cash-flow records',
      'Document versioning',
      'Audit trail',
      'Reporting',
      'Corporate actions',
      'Product status',
    ],
  },
] as const

export const INSIGHTS = [
  {
    slug: 'unlock-capital-without-selling-equity',
    title: 'How Mining Companies Can Unlock Capital Without Selling More Equity',
    excerpt:
      'Resource owners often default to equity dilution. Structured economic rights can create alternative capital pathways.',
    category: 'Mining finance',
    date: '2026-06-12',
    readTime: '8 min',
  },
  {
    slug: 'five-economic-rights-inside-a-mining-asset',
    title: 'Five Economic Rights Hidden Inside a Mining Asset',
    excerpt:
      'A mine is more than a deposit. Royalty, production, inventory, project and infrastructure rights can each support capital design.',
    category: 'Resource Capital',
    date: '2026-06-04',
    readTime: '7 min',
  },
  {
    slug: 'royalty-vs-future-production-financing',
    title: 'Royalty Financing vs Future Production Financing',
    excerpt:
      'Two distinct economic rights, two different capital architectures. When each may be more appropriate.',
    category: 'Structuring',
    date: '2026-05-22',
    readTime: '9 min',
  },
  {
    slug: 'structure-a-mineral-project-for-capital',
    title: 'How to Structure a Mineral Project for Capital',
    excerpt:
      'Development-stage assets need more than a resource estimate. Mapping rights, cash flows and readiness is the starting point.',
    category: 'Project finance',
    date: '2026-05-11',
    readTime: '8 min',
  },
  {
    slug: 'what-is-resource-capital',
    title: 'What Is Resource Capital?',
    excerpt:
      'Resource Capital is the economic value that can potentially be unlocked from natural resources and associated contractual rights.',
    category: 'Resource Capital',
    date: '2026-04-28',
    readTime: '6 min',
  },
  {
    slug: 'structuring-before-tokenization',
    title: 'Why Financial Structuring Should Come Before Tokenization',
    excerpt:
      'Digital records can improve lifecycle management. They cannot replace the economics, rights and validation of a capital product.',
    category: 'Digital infrastructure',
    date: '2026-04-16',
    readTime: '7 min',
  },
  {
    slug: 'future-of-critical-mineral-financing',
    title: 'The Future of Critical Mineral Financing',
    excerpt:
      'Copper, lithium, nickel and rare earths sit at the centre of industrial strategy. Capital structures must match the geology and the offtake.',
    category: 'Critical minerals',
    date: '2026-04-03',
    readTime: '8 min',
  },
  {
    slug: 'monetize-existing-royalties',
    title: 'How Mining Companies Can Monetize Existing Royalties',
    excerpt:
      'Existing royalty interests can be analyzed, valued and, where appropriate, structured into a potential capital product architecture.',
    category: 'Royalty',
    date: '2026-03-21',
    readTime: '7 min',
  },
  {
    slug: 'from-mine-to-capital-product',
    title: 'From Mine to Capital Product',
    excerpt:
      'A practical sequence: resource intelligence, rights mapping, valuation, structuring, validation and digital registry.',
    category: 'Process',
    date: '2026-03-08',
    readTime: '9 min',
  },
  {
    slug: 'what-is-a-resource-capital-product',
    title: 'What Is a Resource Capital Product?',
    excerpt:
      'An RCP is an illustrative financial-product architecture built around the economic rights associated with a real-world resource.',
    category: 'Products',
    date: '2026-02-24',
    readTime: '6 min',
  },
]

export const FAQS = [
  {
    question: 'Does Real Block sell securities or raise capital on behalf of investors?',
    answer:
      'No. Real Block provides resource intelligence, capital-product structuring, financial modelling and digital asset registry services. Any actual securities offering, brokerage, custody or distribution would be conducted by appropriately authorized entities where required.',
  },
  {
    question: 'Are Resource Capital Products available for purchase?',
    answer:
      'RCPs shown on this website are illustrative product architectures and prototypes unless explicitly stated otherwise. They are not presented as securities currently available for purchase.',
  },
  {
    question: 'Who is this for?',
    answer:
      'Mining companies, mineral producers, project developers, royalty holders, infrastructure owners and other resource companies evaluating potential capital structures around assets they already control.',
  },
  {
    question: 'Do you start with tokenization?',
    answer:
      'No. We start with the economics of the asset—ownership, rights, cash flows and structure. Digital infrastructure is introduced where it can improve records, monitoring and lifecycle management.',
  },
  {
    question: 'What happens after we submit an asset?',
    answer:
      'We review the information provided and discuss whether a Resource Capital assessment may be appropriate. Submitting an asset does not constitute an application for funding and does not guarantee financing.',
  },
]

export const INSIGHT_BODIES: Record<string, string[]> = {
  'unlock-capital-without-selling-equity': [
    'Mining companies frequently meet capital needs by issuing equity. That path is familiar, but it is not the only way to translate resource economics into financing capacity.',
    'A producing mine or advanced project can contain several economic rights: a royalty on production, a defined share of future output, inventory already extracted, infrastructure cash flows, or project-level economics that can be ring-fenced.',
    'The practical question for a CEO or CFO is not “how do we tokenize.” It is “what capital could potentially be created from value we already control, without unnecessarily diluting owners.”',
    'Real Block’s work begins with intelligence: ownership, technical data, existing agreements and cash-flow visibility. Only then can a potential Resource Capital Product architecture be designed—and only then does digital registry become relevant.',
    'Any actual financing remains subject to legal, regulatory, technical and commercial validation, and where applicable to authorized capital-market partners.',
  ],
  'five-economic-rights-inside-a-mining-asset': [
    'A mineral deposit is the geological starting point. Capital design starts one layer higher: the economic rights attached to that deposit.',
    'Royalty rights can separate a share of revenue from operating control. Future production entitlements can define a volume or value of output over time. Project interests can package development economics. Inventory can support working-capital structures. Infrastructure can generate tolls, processing fees or logistics cash flows.',
    'These rights often already exist in contracts, JVs, offtake agreements or internal planning models. They are rarely presented as a coherent capital map.',
    'Mapping them is the difference between “we own a mine” and “we understand which claims on cash flow could support a structured product.”',
  ],
  'royalty-vs-future-production-financing': [
    'Royalty structures typically attach to revenue or production value. Future production structures attach to a defined volume or stream of output. They are related, but they are not interchangeable.',
    'A royalty may be more suitable when a company wants to retain operating control while creating a claim on a percentage of value. A future-production architecture may be more suitable when counterparties care about physical delivery, offtake alignment or volume certainty.',
    'Commodity price paths, mine plan confidence, counterparty credit and jurisdiction all change the analysis. The correct structure is the one that matches the right, not the one that is fashionable.',
    'RCP-01 and RCP-02 are illustrative architectures for these two families. They are prototypes, not offerings.',
  ],
  'structure-a-mineral-project-for-capital': [
    'Development-stage assets often arrive with a resource estimate and a capital cost. Financiers also need rights clarity, offtake logic, jurisdiction risk, and a view of how cash would flow once production starts.',
    'Structuring a project for capital means organizing those elements into a readable architecture: what is owned, what is pledged, what is contracted, and what remains residual equity.',
    'Critical mineral projects add industrial-policy and offtake complexity. The geology still matters; so does who has the right to the first tonne.',
    'RCP-03 illustrates how a project-level Resource Capital Product could be framed after that work is done.',
  ],
  'what-is-resource-capital': [
    'Resource Capital is the economic value that can potentially be unlocked from natural resources, production, royalties, inventory, projects, infrastructure and associated contractual rights.',
    'The objective is not simply to create a digital token. The objective is to create better capital structures from real-world economic value.',
    'Digital records can then support how those structures are monitored. Technology supports the capital product. It is not the product itself.',
  ],
  'structuring-before-tokenization': [
    'Tokenization without a defined economic right is a wrapper around ambiguity. Markets do not need another digital representation of an unresolved claim.',
    'Financial structuring answers: what cash flow, who owns it, what happens in downside scenarios, and what legal form the claim takes. Digital infrastructure answers: how that claim is recorded, updated and reported.',
    'Real Block sequences the work as Resource → Product → Digital Infrastructure. Blockchain, where appropriate, is a supporting layer—not the company’s identity.',
  ],
  'future-of-critical-mineral-financing': [
    'Copper, lithium, graphite, nickel, cobalt and rare earths sit at the centre of energy, defence and industrial supply chains. Capital is competing for projects that can actually be permitted, financed and delivered.',
    'Project finance, offtake-linked structures, strategic equity and royalty-style claims will coexist. The differentiator is the quality of the underlying rights map and cash-flow model.',
    'Companies that can present a coherent Resource Passport—identity, resource, rights, financials, risk and readiness—are easier for capital-market partners to review.',
  ],
  'monetize-existing-royalties': [
    'Many resource companies already hold royalties: retained interests, NSR arrangements, or portfolio royalties from prior transactions. Those interests are often under-documented as capital products.',
    'Monetization in this context means analyzing, valuing and potentially structuring the royalty into an architecture that could be reviewed by appropriate partners. It does not mean a public sale on this website.',
    'RCP-01 is an illustrative copper royalty product showing how that analysis can be presented.',
  ],
  'from-mine-to-capital-product': [
    'The sequence is deliberate: discover the asset, assess information quality, map economic rights, value cash flows, structure a product, create the architecture, validate, digitize where appropriate, and manage the lifecycle.',
    'Skipping to a token ticker inverts the order. Capital-market readiness is the last step, not the first slide.',
    'Digital Asset Registry & Management is the infrastructure layer that can sit under any RCP once the economics exist.',
  ],
  'what-is-a-resource-capital-product': [
    'A Resource Capital Product (RCP) is an illustrative financial-product architecture built around the economic rights, cash flows or financing potential associated with a real-world resource.',
    'Unless explicitly stated otherwise, RCPs on this website are product architectures and prototypes. They are not securities currently available for purchase.',
    'The five families shown—royalty, future production, critical mineral project, mineral inventory and resource infrastructure—cover the principal rights maps we see inside mining assets.',
  ],
}

export function getRcpBySlug(slug: string) {
  return RCPS.find((item) => item.slug === slug)
}

export function getInsightBySlug(slug: string) {
  return INSIGHTS.find((item) => item.slug === slug)
}

