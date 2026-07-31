import type { LucideIcon } from 'lucide-react'
import {
  ShieldCheck,
  Globe2,
  Layers3,
  Target,
  Scale,
  Building,
  Workflow,
  LineChart,
} from 'lucide-react'

export interface TrustPillar {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const whyChoose: TrustPillar[] = [
  {
    id: 'institutional-rigor',
    title: 'Institutional rigor',
    description:
      'Engagements designed for executive stakeholders—clear governance, documented decisions, and delivery discipline that holds up under board and audit scrutiny.',
    icon: Scale,
  },
  {
    id: 'outcome-focus',
    title: 'Outcome-focused delivery',
    description:
      'Every initiative is anchored to measurable business outcomes: cycle-time reduction, capital efficiency, operating visibility, and risk control.',
    icon: Target,
  },
  {
    id: 'dual-depth',
    title: 'AI + blockchain depth',
    description:
      'Specialists who connect emerging technology to enterprise architecture, compliance constraints, and real operating models—not demos in isolation.',
    icon: Layers3,
  },
  {
    id: 'cross-industry',
    title: 'Cross-industry experience',
    description:
      'Proven patterns across real estate, financial services, manufacturing, healthcare, logistics, and professional services.',
    icon: Building,
  },
]

export const trustSections: TrustPillar[] = [
  {
    id: 'methodology',
    title: 'Delivery methodology',
    description:
      'A structured path from discovery to continuous optimization—with checkpoints, risk controls, and executive reporting at every stage.',
    icon: Workflow,
  },
  {
    id: 'technology',
    title: 'Technology expertise',
    description:
      'Practical fluency across AI platforms, blockchain infrastructure, cloud-native systems, integrations, and data architecture.',
    icon: Layers3,
  },
  {
    id: 'industries',
    title: 'Industry experience',
    description:
      'Domain-aware advisory that respects sector regulations, capital structures, and operating realities.',
    icon: Building,
  },
  {
    id: 'security',
    title: 'Security & compliance',
    description:
      'Security-by-design principles, least-privilege access patterns, and compliance-aware solution design for regulated environments.',
    icon: ShieldCheck,
  },
  {
    id: 'global',
    title: 'Global delivery',
    description:
      'Remote-first, globally capable teams that collaborate with distributed stakeholders across time zones and markets.',
    icon: Globe2,
  },
  {
    id: 'architecture',
    title: 'Enterprise architecture',
    description:
      'Target-state architectures that integrate with existing ERP, CRM, treasury, and data platforms—built to scale beyond the pilot.',
    icon: Layers3,
  },
  {
    id: 'outcomes',
    title: 'Business outcomes',
    description:
      'Programs measured against commercial and operational KPIs so technology investment translates into durable advantage.',
    icon: LineChart,
  },
]

export const businessOutcomes = [
  {
    metric: 'Faster decisions',
    detail: 'Executive-ready insight from automated reporting, analytics, and governed AI workflows.',
  },
  {
    metric: 'Lower operating friction',
    detail: 'Fewer manual handoffs across finance, operations, and asset lifecycle processes.',
  },
  {
    metric: 'Stronger controls',
    detail: 'Auditability, access governance, and compliance-aligned digital infrastructure.',
  },
  {
    metric: 'New capital pathways',
    detail: 'Institutional-ready models for digital asset representation and investor access.',
  },
]

export const securityPractices = [
  'Security and privacy requirements defined before build',
  'Role-based access and least-privilege design patterns',
  'Audit-ready logging and operational documentation',
  'Vendor and protocol due diligence for emerging tech stacks',
  'Change-management aligned to enterprise risk frameworks',
]
