export interface ProcessStep {
  id: string
  title: string
  description: string
  duration: string
}

export const deliveryProcess: ProcessStep[] = [
  {
    id: 'discovery',
    title: 'Discovery',
    description:
      'Align on business objectives, stakeholders, constraints, and success metrics. Map current-state operations and opportunity areas.',
    duration: '1–2 weeks',
  },
  {
    id: 'assessment',
    title: 'Assessment',
    description:
      'Evaluate technology readiness, data quality, compliance requirements, and architectural fit for AI, blockchain, or tokenization initiatives.',
    duration: '1–3 weeks',
  },
  {
    id: 'solution-design',
    title: 'Solution design',
    description:
      'Define target architecture, operating model, integration approach, risk controls, and a phased delivery plan with clear ownership.',
    duration: '2–4 weeks',
  },
  {
    id: 'implementation',
    title: 'Implementation',
    description:
      'Build and integrate solutions in controlled increments—with sprint reviews, documentation, and executive progress reporting.',
    duration: 'Phased',
  },
  {
    id: 'testing',
    title: 'Testing',
    description:
      'Validate functional, security, and operational readiness through structured UAT, controls testing, and go-live criteria.',
    duration: '1–3 weeks',
  },
  {
    id: 'go-live',
    title: 'Go live',
    description:
      'Launch with runbooks, support models, training, and hypercare so teams adopt the solution with confidence.',
    duration: 'Launch window',
  },
  {
    id: 'optimization',
    title: 'Continuous optimization',
    description:
      'Measure outcomes, refine workflows, expand use cases, and improve performance based on production signal.',
    duration: 'Ongoing',
  },
]
