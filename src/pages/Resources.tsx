import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/Button'
import { LeadCaptureModal } from '@/components/LeadCaptureModal'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { RESOURCE_LIBRARY, resolveResourceUrl, type LibraryResource } from '@/services/documentService'
import { trackCtaClick } from '@/utils/analytics'

const categoryLabel: Record<string, string> = {
  guide: 'Guide',
  whitepaper: 'Whitepaper',
  case_study: 'Case Study',
  brochure: 'Brochure',
  presentation: 'Presentation',
  framework: 'Framework',
  capability: 'Capability',
}

export function ResourcesPage() {
  const [active, setActive] = useState<LibraryResource | null>(null)

  return (
    <PageTransition>
      <SEO
        title="Resource Library"
        description="Download enterprise sales assets: company presentation, service brochure, RWA guide, AI framework, capability statement, and case studies."
        path="/resources"
      />
      <PageHero
        eyebrow="Document Library"
        title="Sales enablement & research resources"
        description="Gated PDF assets for executives, partners, and procurement teams. Downloads are tracked and synced for CRM follow-up."
      />

      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Downloads"
            title="Guides, brochures, frameworks, and case studies"
            description="Files can be served from local storage or Cloudflare R2 when VITE_R2_PUBLIC_BASE_URL is configured."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {RESOURCE_LIBRARY.map((resource, index) => (
              <motion.article
                key={resource.id}
                className="flex h-full flex-col rounded-xl border border-border bg-white p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-md bg-navy/5 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-royal uppercase">
                    {categoryLabel[resource.category] ?? resource.category}
                  </span>
                  <FileText className="h-5 w-5 text-gold" />
                </div>
                <h2 className="font-display text-lg font-bold text-navy">{resource.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{resource.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-border px-2 py-0.5 text-[0.65rem] text-ink-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="primary"
                  className="mt-6"
                  onClick={() => {
                    trackCtaClick(`resource_${resource.id}`)
                    setActive(resource)
                  }}
                >
                  <Download className="h-4 w-4" />
                  Download {resource.format}
                </Button>
              </motion.article>
            ))}
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
          description="Complete this form to receive the PDF. Your details sync to HubSpot-ready CRM capture and nurture workflows."
          resourcePath={resolveResourceUrl(active.fileKey)}
          resourceId={active.id}
          resourceTitle={active.title}
          source="resource_library"
          fields={['name', 'company', 'email', 'jobTitle']}
        />
      )}
    </PageTransition>
  )
}
