import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { REGISTRY_CAPABILITIES } from '@/data/resourceCapital'

export function DigitalAssetRegistryPage() {
  return (
    <PageTransition>
      <SEO
        title="Digital Asset Registry & Management"
        description="A digital record and lifecycle management layer for resource assets, economic rights and associated capital-product structures."
        path="/digital-asset-registry"
      />
      <PageHero
        eyebrow="Infrastructure layer"
        title="Digital Asset Registry & Management"
        description="A digital record and lifecycle management layer for resource assets, economic rights and associated capital-product structures. Supporting infrastructure for Resource Capital Products — not a standalone investment product."
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REGISTRY_CAPABILITIES.map((group) => (
              <article key={group.title} className="border border-border p-6">
                <h2 className="font-display text-xl text-navy">{group.title}</h2>
                <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-16 border border-border bg-navy p-6 text-white md:p-10">
            <p className="eyebrow text-copper-light">Dashboard prototype</p>
            <p className="mt-2 text-xs text-white/45">Illustrative example only</p>
            <h2 className="mt-4 font-display text-3xl">Copper Project Alpha</h2>
            <dl className="mt-6 grid gap-4 sm:grid-cols-4 text-sm">
              <div><dt className="text-white/45">Asset ID</dt><dd>RB-CU-001</dd></div>
              <div><dt className="text-white/45">Commodity</dt><dd>Copper</dd></div>
              <div><dt className="text-white/45">Country</dt><dd>Illustrative</dd></div>
              <div><dt className="text-white/45">Status</dt><dd>Producing</dd></div>
            </dl>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="border border-white/10 p-4">
                <h3 className="text-sm tracking-wider text-white/45 uppercase">Capital products</h3>
                <p className="mt-3">RCP-01 Copper Royalty — Structuring</p>
                <p>RCP-02 Future Production — Assessment</p>
              </div>
              <div className="border border-white/10 p-4">
                <h3 className="text-sm tracking-wider text-white/45 uppercase">Asset data</h3>
                <p className="mt-3">Resource 2.4 Mt · Annual production 120 kt · Mine life 17 years</p>
              </div>
              <div className="border border-white/10 p-4">
                <h3 className="text-sm tracking-wider text-white/45 uppercase">Economic rights</h3>
                <p className="mt-3">Royalty 2% · Offtake 15% · Ownership 100%</p>
              </div>
              <div className="border border-white/10 p-4">
                <h3 className="text-sm tracking-wider text-white/45 uppercase">Readiness</h3>
                <p className="mt-3">Asset 92% · Financial 84% · Structuring 81% · Digital 76%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </PageTransition>
  )
}
