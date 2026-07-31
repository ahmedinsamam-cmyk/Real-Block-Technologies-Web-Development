/**
 * Sanity CMS–ready content architecture.
 * Swap local content modules for Sanity queries when VITE_SANITY_PROJECT_ID is set.
 *
 * Configure:
 *   VITE_SANITY_PROJECT_ID
 *   VITE_SANITY_DATASET=production
 *   VITE_SANITY_API_VERSION=2025-01-01
 */

export type CmsDocumentType =
  | 'post'
  | 'caseStudy'
  | 'resource'
  | 'industryPage'
  | 'helpArticle'
  | 'faq'

export interface CmsImage {
  url: string
  alt?: string
}

export interface CmsSeo {
  title?: string
  description?: string
  ogImage?: string
}

export interface CmsPost {
  _type: 'post'
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  publishedAt: string
  readTime?: string
  body?: string
  seo?: CmsSeo
}

export interface CmsCaseStudy {
  _type: 'caseStudy'
  id: string
  title: string
  slug: string
  industry: string
  challenge: string
  solution: string
  technology: string[]
  businessImpact: string
  pdfUrl?: string
  seo?: CmsSeo
}

export interface CmsResource {
  _type: 'resource'
  id: string
  title: string
  slug: string
  description: string
  category: 'guide' | 'whitepaper' | 'case_study' | 'brochure' | 'presentation' | 'framework'
  fileUrl: string
  gated: boolean
  seo?: CmsSeo
}

export interface CmsIndustryPage {
  _type: 'industryPage'
  id: string
  title: string
  slug: string
  description: string
  outcomes: string[]
  seo?: CmsSeo
}

export interface CmsHelpArticle {
  _type: 'helpArticle'
  id: string
  title: string
  slug: string
  category: string
  summary: string
  body: string
}

export function isSanityConfigured(): boolean {
  return Boolean(import.meta.env.VITE_SANITY_PROJECT_ID)
}

export function getSanityConfig() {
  return {
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined,
    dataset: (import.meta.env.VITE_SANITY_DATASET as string | undefined) ?? 'production',
    apiVersion: (import.meta.env.VITE_SANITY_API_VERSION as string | undefined) ?? '2025-01-01',
    useCdn: true,
  }
}

/**
 * Placeholder fetcher — wire @sanity/client in production.
 * Until configured, callers should fall back to local `src/data` modules.
 */
export async function fetchCmsDocuments<T>(_type: CmsDocumentType): Promise<T[]> {
  if (!isSanityConfigured()) return []

  // Example GROQ endpoint shape for a future Cloudflare Worker proxy:
  // GET /api/cms?type=post
  const apiUrl = import.meta.env.VITE_CMS_API_URL as string | undefined
  if (!apiUrl) return []

  try {
    const res = await fetch(`${apiUrl}?type=${_type}`)
    if (!res.ok) return []
    return (await res.json()) as T[]
  } catch {
    return []
  }
}

/** Maps LinkedIn post draft from a blog article (social content workflow) */
export function blogToLinkedInDraft(post: Pick<CmsPost, 'title' | 'excerpt' | 'slug'>): string {
  const url = `https://realblocktechnologies.com/insights#${post.slug}`
  return [
    post.title,
    '',
    post.excerpt,
    '',
    'Read more from Real Block Technologies:',
    url,
    '',
    '#AI #Blockchain #RWA #DigitalTransformation #EnterpriseTechnology',
  ].join('\n')
}
