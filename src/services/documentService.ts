/**
 * Document / resource library service.
 * Storage target: Cloudflare R2 (via public URL or Worker signed URLs).
 *
 * Configure:
 *   VITE_R2_PUBLIC_BASE_URL — e.g. https://assets.realblocktechnologies.com
 *   VITE_DOCUMENT_API_URL — optional signed URL / tracking endpoint
 */

export type ResourceCategory =
  | 'guide'
  | 'whitepaper'
  | 'case_study'
  | 'brochure'
  | 'presentation'
  | 'framework'
  | 'capability'

export interface LibraryResource {
  id: string
  title: string
  description: string
  category: ResourceCategory
  /** Local path or R2 object key */
  fileKey: string
  gated: boolean
  format: 'PDF'
  tags: string[]
}

export const RESOURCE_LIBRARY: LibraryResource[] = [
  {
    id: 'company-presentation',
    title: 'Company Presentation',
    description: 'Overview of Real Block Technologies for enterprise introductions and partner meetings.',
    category: 'presentation',
    fileKey: 'Company_Presentation.pdf',
    gated: true,
    format: 'PDF',
    tags: ['sales', 'overview'],
  },
  {
    id: 'service-brochure',
    title: 'Service Brochure',
    description: 'Concise brochure covering AI, blockchain, RWA, and enterprise consulting services.',
    category: 'brochure',
    fileKey: 'Service_Brochure.pdf',
    gated: true,
    format: 'PDF',
    tags: ['sales', 'services'],
  },
  {
    id: 'rwa-guide',
    title: 'Enterprise Guide to RWA Tokenization',
    description: 'Seven-chapter leadership guide to real-world asset tokenization.',
    category: 'guide',
    fileKey: 'Enterprise_Guide_to_RWA_Tokenization.pdf',
    gated: true,
    format: 'PDF',
    tags: ['rwa', 'tokenization'],
  },
  {
    id: 'ai-framework',
    title: 'AI Transformation Framework',
    description: 'A structured framework for discovering, piloting, and scaling enterprise AI.',
    category: 'framework',
    fileKey: 'AI_Transformation_Framework.pdf',
    gated: true,
    format: 'PDF',
    tags: ['ai', 'transformation'],
  },
  {
    id: 'capability-statement',
    title: 'Enterprise Capability Statement',
    description: 'Capability statement for RFPs, procurement, and strategic partnership evaluations.',
    category: 'capability',
    fileKey: 'Enterprise_Capability_Statement.pdf',
    gated: true,
    format: 'PDF',
    tags: ['sales', 'enterprise'],
  },
  {
    id: 'ai-case-study',
    title: 'AI Enterprise Automation Case Study',
    description: 'How AI automation improved financial operations outcomes.',
    category: 'case_study',
    fileKey: 'AI_Enterprise_Automation_Case_Study.pdf',
    gated: true,
    format: 'PDF',
    tags: ['ai', 'case-study'],
  },
  {
    id: 'rwa-case-study',
    title: 'Real Estate Tokenization Case Study',
    description: 'Digitizing a commercial real estate portfolio for investor access.',
    category: 'case_study',
    fileKey: 'Real_Estate_Tokenization_Case_Study.pdf',
    gated: true,
    format: 'PDF',
    tags: ['rwa', 'case-study'],
  },
  {
    id: 'dx-case-study',
    title: 'Digital Transformation Case Study',
    description: 'Phased enterprise digital transformation with measurable milestones.',
    category: 'case_study',
    fileKey: 'Digital_Transformation_Case_Study.pdf',
    gated: true,
    format: 'PDF',
    tags: ['transformation', 'case-study'],
  },
]

export function resolveResourceUrl(fileKey: string): string {
  const r2Base = import.meta.env.VITE_R2_PUBLIC_BASE_URL as string | undefined
  if (r2Base) {
    return `${r2Base.replace(/\/$/, '')}/${fileKey}`
  }
  return `/resources/${fileKey}`
}

export async function getSignedDownloadUrl(fileKey: string): Promise<string> {
  const api = import.meta.env.VITE_DOCUMENT_API_URL as string | undefined
  if (!api) return resolveResourceUrl(fileKey)

  try {
    const res = await fetch(`${api}?key=${encodeURIComponent(fileKey)}`)
    if (!res.ok) return resolveResourceUrl(fileKey)
    const data = (await res.json()) as { url?: string }
    return data.url ?? resolveResourceUrl(fileKey)
  } catch {
    return resolveResourceUrl(fileKey)
  }
}

export function trackDownloadLocally(resourceId: string, email?: string): void {
  try {
    const key = 'rbt_download_log_v1'
    const log = JSON.parse(localStorage.getItem(key) ?? '[]') as unknown[]
    log.push({ resourceId, email, at: new Date().toISOString() })
    localStorage.setItem(key, JSON.stringify(log.slice(-200)))
  } catch {
    // ignore
  }
}
