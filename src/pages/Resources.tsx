import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/Button'
import { LeadCaptureModal } from '@/components/LeadCaptureModal'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { SiteSearch } from '@/components/SiteSearch'
import { resourcesLibrary, type LibraryResource, type ResourceCategory } from '@/data/resourcesLibrary'
import { RESOURCE_LIBRARY, resolveResourceUrl, type LibraryResource as PdfResource } from '@/services/documentService'
import { trackCtaClick } from '@/utils/analytics'

const FILTERS: Array<'All' | ResourceCategory> = [
  'All',
  'Guide',
  'Checklist',
  'Capability Statement',
  'Whitepaper',
  'Playbook',
]

export function ResourcesPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')
  const [active, setActive] = useState<LibraryResource | PdfResource | null>(null)
  const [activeIsPdf, setActiveIsPdf] = useState(false)

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? resourcesLibrary
        : resourcesLibrary.filter((r) => r.category === filter),
    [filter],
  )

  return (
    <PageTransition>
      <SEO
        title="Resource Library"
        description="Guides, checklists, capability statements, whitepapers, and playbooks from Real Block Technologies for AI, RWA, FinTech, and enterprise platforms."
        path="/resources"
      />
      <PageHero
        eyebrow="Resources"
        title="Guides, checklists, whitepapers & capability statements"
        description="Practical assets for executives, operators, and procurement teams evaluating AI, tokenization, FinTech, and enterprise platform programs."
      />

      <section className="border-b border-border bg-white py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SiteSearch scope="resources" placeholder="Search resources…" />
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Library"
            title="Browse by format"
            description="Open resources are available immediately. Gated assets use a short form for CRM follow-up."
          />

          <div className="mb-8 flex flex-wrap gap-2">
            {FILTERS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`border px-3 py-1.5 text-xs font-semibold ${
                  filter === item
                    ? 'border-navy bg-navy text-white'
                    : 'border-border bg-white text-ink-muted hover:border-navy/40'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((resource, index) => (
              <motion.article
                key={resource.slug}
                id={resource.slug}
                className="flex h-full flex-col border border-border bg-white p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="bg-navy/5 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-royal uppercase">
                    {resource.category}
                  </span>
                  <FileText className="h-5 w-5 text-gold" />
                </div>
                <h2 className="font-display text-lg font-bold text-navy">{resource.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {resource.description}
                </p>
                <p className="mt-3 text-xs text-ink-muted">
                  {resource.pages} · {resource.readTime}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {resource.topics.map((tag) => (
                    <span key={tag} className="border border-border px-2 py-0.5 text-[0.65rem] text-ink-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="primary"
                  className="mt-6"
                  onClick={() => {
                    trackCtaClick(`resource_${resource.slug}`)
                    setActiveIsPdf(false)
                    setActive(resource)
                  }}
                >
                  <Download className="h-4 w-4" />
                  {resource.gated ? 'Request download' : 'Get resource'}
                </Button>
              </motion.article>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="font-display text-2xl font-medium text-navy">PDF sales assets</h3>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted">
              Additional downloadable PDFs from our document service (local or Cloudflare R2).
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {RESOURCE_LIBRARY.map((resource) => (
                <article key={resource.id} className="flex h-full flex-col border border-border bg-white p-6">
                  <span className="w-fit bg-navy/5 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-royal uppercase">
                    {resource.category}
                  </span>
                  <h4 className="mt-3 font-display text-lg font-bold text-navy">{resource.title}</h4>
                  <p className="mt-2 flex-1 text-sm text-ink-muted">{resource.description}</p>
                  <Button
                    variant="ghost"
                    className="mt-5"
                    onClick={() => {
                      trackCtaClick(`pdf_resource_${resource.id}`)
                      setActiveIsPdf(true)
                      setActive(resource)
                    }}
                  >
                    <Download className="h-4 w-4" />
                    Download {resource.format}
                  </Button>
                </article>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-2xl">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {active && (
        <LeadCaptureModal
          open={Boolean(active)}
          onClose={() => setActive(null)}
          title={`Download ${active.title}`}
          description="Complete this form to receive the asset. Your details sync for CRM follow-up."
          resourcePath={
            activeIsPdf && 'fileKey' in active
              ? resolveResourceUrl(active.fileKey)
              : '/resources/rwa-tokenization-guide'
          }
          resourceId={'id' in active ? active.id : active.slug}
          resourceTitle={active.title}
          source="resource_library"
          fields={['name', 'company', 'email', 'jobTitle']}
        />
      )}
    </PageTransition>
  )
}
