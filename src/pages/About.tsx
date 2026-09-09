import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { COMPANY } from '@/utils/constants'

export function AboutPage() {
  return (
    <PageTransition>
      <SEO
        title="About Real Block Technologies"
        description={COMPANY.proposition}
        path="/about"
      />
      <PageHero
        eyebrow="About"
        title="Institutional tokenisation for mining issuers"
        description={COMPANY.proposition}
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-lg leading-relaxed text-ink-muted sm:px-6">
          <p>
            Mining companies control royalties, production rights and other real-world assets that can
            support sophisticated capital structures. Those structures are often trapped in paper
            contracts, fragmented data rooms and processes that were never designed for digital
            investment products.
          </p>
          <p>
            Real Block Technologies focuses on one product — Tokenised Royalty — and one service —
            Tokenisation as a Service — so issuers have a clear path from economic right to a
            compliance-oriented digital representation.
          </p>
          <div className="rounded-xl border border-border bg-surface p-8">
            <p className="eyebrow text-cyan-dark">Positioning</p>
            <p className="mt-3 text-navy">{COMPANY.proposition}</p>
          </div>
          <p className="text-base">
            We are not a cryptocurrency company, not an investment marketplace, and not a substitute
            for licensed intermediaries. Where an offering proceeds, regulated activities are conducted
            by authorized entities.
          </p>
        </div>
      </section>
      <CTASection />
    </PageTransition>
  )
}
