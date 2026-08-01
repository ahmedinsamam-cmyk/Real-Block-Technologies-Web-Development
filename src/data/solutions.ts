export interface SolutionProblem {
  id: string
  problem: string
  outcome: string
  description: string
  solutions: string[]
  href: string
}

/** Solutions organized by business problem — not technology labels */
export const solutionsByProblem: SolutionProblem[] = [
  {
    id: 'illiquid-assets',
    problem: 'Physical assets are hard to digitize and manage',
    outcome: 'Governed digital representation and operating design',
    description:
      'Owners of real estate, collectibles, and membership businesses need practical ways to digitize ownership, distribute rent share, and manage access.',
    solutions: ['RWA Tokenization (TaaS)', 'Blockchain Advisory'],
    href: '/services/real-estate-tokenization',
  },
  {
    id: 'manual-operations',
    problem: 'Manual processes slow decisions and raise cost',
    outcome: 'Automation with measurable operating ROI',
    description:
      'Leadership teams struggle to move beyond pilots into production AI that reduces cycle time and improves decision quality.',
    solutions: ['AI Business Solutions', 'Enterprise Technology Consulting'],
    href: '/services/ai-solutions',
  },
  {
    id: 'platform-fragmentation',
    problem: 'Enterprise platforms are fragmented and under-adopted',
    outcome: 'Platform-aligned professional services and adoption',
    description:
      'Workday, Dynamics 365, and HubSpot investments stall when implementation, integration, and change management are disconnected.',
    solutions: ['Workday / Dynamics 365 / HubSpot services', 'Enterprise Consulting'],
    href: '/services/enterprise-consulting',
  },
  {
    id: 'finance-visibility',
    problem: 'Finance teams lack unified digital operations',
    outcome: 'Clearer workflows, reporting, and FinTech stack design',
    description:
      'Finance and operations leaders need visibility, automation, and modern FinTech tooling without multi-year transformation programs.',
    solutions: ['FinTech Solutions', 'AI automation for finance'],
    href: '/services/fintech',
  },
  {
    id: 'blockchain-uncertainty',
    problem: 'Blockchain ambition without a practical roadmap',
    outcome: 'Fit-for-purpose architecture and delivery plan',
    description:
      'Enterprises need clarity on where blockchain creates value, how to integrate it, and how to govern risk.',
    solutions: ['Blockchain Advisory', 'RWA Tokenization (TaaS)'],
    href: '/services/blockchain-advisory',
  },
  {
    id: 'transformation-alignment',
    problem: 'Technology initiatives lack executive alignment',
    outcome: 'Sequenced roadmap with clear deliverables',
    description:
      'Sponsors need a structured way to prioritize initiatives, set governance, and connect strategy to delivery.',
    solutions: ['Enterprise Technology Consulting', 'Strategy Session'],
    href: '/strategy-session',
  },
]
