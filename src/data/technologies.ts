export interface TechCategory {
  id: string
  title: string
  items: string[]
}

export const technologyShowcase: TechCategory[] = [
  {
    id: 'ai',
    title: 'Artificial intelligence',
    items: [
      'Large language models & enterprise RAG',
      'Document intelligence & OCR pipelines',
      'Predictive analytics & forecasting',
      'AI agents with human oversight',
      'MLOps and model governance',
    ],
  },
  {
    id: 'blockchain',
    title: 'Blockchain & digital assets',
    items: [
      'Permissioned & public chain architecture',
      'Smart contract strategy & review',
      'RWA tokenization frameworks',
      'Digital identity & access controls',
      'Custody and investor portal patterns',
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & platforms',
    items: [
      'AWS, Azure, and multi-cloud design',
      'API-first integrations',
      'Event-driven architectures',
      'Data lakes & warehouse patterns',
      'CI/CD and secure delivery pipelines',
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise systems',
    items: [
      'ERP / CRM / FinTech integrations',
      'Workflow orchestration',
      'Identity and access management',
      'Observability and audit logging',
      'SaaS and custom application delivery',
    ],
  },
]

export const techMarks = [
  'AWS',
  'Azure',
  'OpenAI',
  'Anthropic',
  'Ethereum',
  'Hyperledger',
  'Polygon',
  'PostgreSQL',
  'Kubernetes',
  'Terraform',
  'Snowflake',
  'Salesforce',
]
