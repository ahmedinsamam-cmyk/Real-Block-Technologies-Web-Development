import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'

const CAPABILITIES = [
  'Digital asset registry',
  'Digital ownership records',
  'Product lifecycle management',
  'Tokenization feasibility',
  'Digital security architecture',
  'Blockchain infrastructure',
  'Automated reporting',
  'Data integration',
  'Lifecycle workflows',
]

export function DigitalCapitalPage() {
  return (
    <PageTransition>
      <SEO
        title="Digital Capital Infrastructure"
        description="Digital infrastructure for recording, monitoring and managing resource assets, economic rights and capital products after the economics are established."
        path="/digital-capital"
      />
      <PageHero
        eyebrow="Supporting technology"
        title="Digital Capital Infrastructure"
        description="Once the underlying economics and product structure have been established, digital infrastructure can improve how resource assets, economic rights and capital products are recorded, monitored and managed."
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-copper">Sequence</p>
          <p className="mt-4 font-display text-3xl text-navy">Resource → Product → Digital Infrastructure</p>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Technology supports the capital product. It is not the product itself. AI, data and blockchain remain capabilities — not the company's primary identity.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-navy">AI</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {['Document intelligence','Asset data extraction','Contract analysis','Scenario analysis','Data normalization','Reporting'].map((i)=>(<li key={i}>{i}</li>))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy">Data</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {['Resource Passport','Asset database','Financial models','Product data','Risk information'].map((i)=>(<li key={i}>{i}</li>))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy">Digital assets</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {['Digital records','Digital ownership','Lifecycle management'].map((i)=>(<li key={i}>{i}</li>))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy">Blockchain, where appropriate</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {['Digital securities','Digital ownership','Transfer controls','Settlement','Automated records'].map((i)=>(<li key={i}>{i}</li>))}
              </ul>
            </div>
          </div>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((item) => (
              <li key={item} className="border border-border px-4 py-3 text-sm font-medium text-navy">{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </PageTransition>
  )
}
