import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { Button } from '@/components/Button'

const SEGMENTS = [
  { title: 'Producers', items: ['Royalties', 'Future production', 'Inventory', 'Infrastructure'] },
  { title: 'Developers', items: ['Project financing', 'Critical minerals', 'Development capital', 'Strategic structures'] },
  { title: 'Royalty holders', items: ['Royalty monetization', 'Portfolio structuring', 'Digital management'] },
  { title: 'Infrastructure owners', items: ['Revenue structures', 'Infrastructure financing', 'Asset monetization'] },
]

export function MiningCompaniesPage() {
  return (
    <PageTransition>
      <SEO
        title="For Mining & Mineral Companies"
        description="You own the resource. We help create the capital structure — for producers, developers, royalty holders and infrastructure owners."
        path="/mining-companies"
      />
      <PageHero
        eyebrow="For resource owners"
        title="You own the resource. We help create the capital structure."
        description="Built for mining companies, mineral producers, project developers, royalty holders and mining infrastructure owners. The conversion path is mining company to Real Block — not a retail investor marketplace."
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {SEGMENTS.map((segment) => (
              <article key={segment.title} className="border border-border p-8">
                <h2 className="font-display text-3xl text-navy">{segment.title}</h2>
                <p className="mt-3 text-sm text-ink-muted">Potential opportunities</p>
                <ul className="mt-4 space-y-2 text-navy">
                  {segment.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Button to="/submit-asset" variant="primary" size="lg">Submit Your Asset</Button>
          </div>
        </div>
      </section>
      <CTASection />
    </PageTransition>
  )
}
