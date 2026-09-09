import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { LegalNotice } from '@/components/LegalNotice'
import { PRODUCT_POINTS } from '@/data/site'

export function ProductPage() {
  return (
    <PageTransition>
      <SEO
        title="Tokenised Royalty"
        description="Tokenised Royalty is Real Block’s product for mining companies: a structured digital investment product architecture around mineral royalties and similar cash-flow rights."
        path="/product"
      />
      <PageHero
        eyebrow="Product"
        title="Tokenised Royalty"
        description="A digital investment product architecture for mining royalties and related economic rights — designed so issuers can explore a compliant structure before any offering takes place."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
            <p>
              A royalty is a defined claim on production or revenue. Tokenised Royalty takes that
              real-world right and describes how it could be documented, allocated and recorded as a
              digital investment product for eligible investors — subject to law and authorized issuance.
            </p>
            <p>
              The product is for mining companies and royalty holders. It is not a cryptocurrency, and it
              is not available to buy on this website.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {PRODUCT_POINTS.map((item) => (
              <div key={item.title} className="rounded-xl border border-border p-7">
                <h2 className="text-xl font-semibold text-navy">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <LegalNotice />
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss a Tokenised Royalty"
        description="Share the royalty, mineral interest or production-linked right you control. We will outline whether a Tokenised Royalty architecture is appropriate."
        primaryLabel="Talk to us"
        primaryTo="/contact"
        secondaryLabel="Tokenisation as a Service"
        secondaryTo="/service"
      />
    </PageTransition>
  )
}
