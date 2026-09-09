import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { LegalNotice } from '@/components/LegalNotice'
import { SERVICE_POINTS } from '@/data/site'

export function ServicePage() {
  return (
    <PageTransition>
      <SEO
        title="Tokenisation as a Service"
        description="Tokenisation as a Service helps mining companies prepare, document and support issuance of compliant digital investment products such as Tokenised Royalty."
        path="/service"
      />
      <PageHero
        eyebrow="Service"
        title="Tokenisation as a Service"
        description="The operating layer behind Tokenised Royalty: structuring, documentation, issuance workflow and lifecycle administration for mining issuers."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
            <p>
              Tokenisation as a Service is how Real Block works with mining companies to turn a defined
              real-world asset — typically a royalty or similar cash-flow right — into a digital
              investment product that can be reviewed, issued and administered through authorized
              parties.
            </p>
            <p>
              We do not replace legal counsel, regulators or licensed intermediaries. We coordinate the
              product architecture and technology so those parties can do their jobs.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {SERVICE_POINTS.map((item) => (
              <div key={item.title} className="rounded-xl border border-border p-7">
                <h2 className="text-xl font-semibold text-navy">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <LegalNotice
              text="Tokenisation as a Service is a professional services and technology engagement. It is not an offer of securities, investment advice, brokerage or custody. Issuance, distribution and other regulated activities, if any, are performed only by appropriately authorized entities."
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Start Tokenisation as a Service"
        description="Tell us about the mineral resource, royalty or other real-world asset. We will propose a scoped engagement."
        primaryLabel="Talk to us"
        primaryTo="/contact"
        secondaryLabel="Tokenised Royalty"
        secondaryTo="/product"
      />
    </PageTransition>
  )
}
