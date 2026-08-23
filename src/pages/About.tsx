import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'

export function AboutPage() {
  return (
    <PageTransition>
      <SEO
        title="About Real Block Technologies"
        description="Building the bridge between Earth's resources and digital capital. Resource intelligence, capital-product structuring and digital asset registry for mining companies."
        path="/about"
      />
      <PageHero
        eyebrow="About"
        title="Building the bridge between Earth's resources and digital capital."
        description="Earth's resources represent enormous economic value, yet the path from resource ownership to capital remains fragmented."
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-4 text-lg leading-relaxed text-ink-muted sm:px-6">
          <p>Technical information, ownership rights, financial models, contractual rights and capital markets often operate in separate systems.</p>
          <p>Real Block Technologies brings these elements together to help resource companies identify, structure and manage potential capital products.</p>
          <div className="border border-border bg-stone p-8">
            <p className="eyebrow text-copper">Mission</p>
            <h2 className="mt-3 font-display text-3xl text-navy">Transforming Earth's Resources into Digital Capital</h2>
          </div>
          <div className="border border-border p-8">
            <p className="eyebrow text-copper">Vision</p>
            <p className="mt-3 text-navy">Create a new infrastructure layer connecting real-world resource economics with modern capital markets.</p>
          </div>
          <p className="text-base">
            Mining companies do not need another tokenization consultant. They need to understand what capital can potentially be created from the economic value they already control. Real Block helps them discover, structure and manage those opportunities.
          </p>
        </div>
      </section>
      <CTASection />
    </PageTransition>
  )
}
