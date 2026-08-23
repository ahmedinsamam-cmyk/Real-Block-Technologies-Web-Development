import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { CAPITAL_FLOW, PROCESS_STEPS, RESOURCE_RIGHTS } from '@/data/resourceCapital'

export function ResourceCapitalPage() {
  return (
    <PageTransition>
      <SEO
        title="Resource Capital"
        description="Resource Capital turns economic rights arising from Earth's resources into structured capital opportunities for mining and mineral companies."
        path="/resource-capital"
      />
      <PageHero
        eyebrow="Resource Capital"
        title="Turning economic rights arising from Earth's resources into structured capital opportunities."
        description="Real Block starts with the economics of the asset—not with tokenization. Digital infrastructure is introduced where it can improve how those structures are recorded and managed."
      />
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-lg leading-relaxed text-ink-muted">
            Resource Capital is the economic value that can potentially be unlocked from natural resources, production, royalties, inventory, projects, infrastructure and associated contractual rights.
          </p>
          <p className="mt-6 max-w-3xl font-display text-2xl text-navy">
            Create better capital structures from real-world economic value.
          </p>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {['Natural resources', 'Production', 'Royalties', 'Inventory', 'Projects', 'Infrastructure', 'Associated contractual rights'].map((item) => (
              <div key={item} className="border border-border bg-stone px-4 py-5 font-semibold text-navy">{item}</div>
            ))}
          </div>
          <ol className="mt-16 grid gap-3 md:grid-cols-5">
            {CAPITAL_FLOW.map((step, i) => (
              <li key={step} className="border border-border p-4">
                <p className="text-[0.65rem] tracking-[0.16em] text-copper uppercase">{String(i + 1).padStart(2, '0')}</p>
                <p className="mt-2 text-sm font-semibold text-navy">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-16 grid gap-4 md:grid-cols-5">
            {RESOURCE_RIGHTS.map((item) => (
              <div key={item} className="border border-border p-4 text-center text-sm font-semibold text-navy">{item}</div>
            ))}
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <article key={step.id} className="border border-border p-6">
                <p className="eyebrow text-copper">{step.id}</p>
                <h2 className="mt-3 font-display text-2xl text-navy">{step.title}</h2>
                <p className="mt-3 text-sm text-ink-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageTransition>
  )
}
