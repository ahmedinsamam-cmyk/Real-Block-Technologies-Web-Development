import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SiteSearch } from '@/components/SiteSearch'
import { CTASection } from '@/components/CTASection'

export function SearchPage() {
  return (
    <PageTransition>
      <SEO
        title="Search"
        description="Search Real Block Technologies insights and resource library."
        path="/search"
      />
      <PageHero
        eyebrow="Search"
        title="Find insights and resources"
        description="Search across articles, guides, checklists, whitepapers, and capability statements."
      />
      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <SiteSearch scope="all" placeholder="Search insights and resources…" />
          <p className="mt-6 text-center text-sm text-ink-muted">
            Tip: try terms like “tokenization”, “Workday”, “banking”, or “checklist”.
          </p>
        </div>
      </section>
      <CTASection
        primaryLabel="Book a Strategy Session"
        primaryTo="/strategy-session"
      />
    </PageTransition>
  )
}
