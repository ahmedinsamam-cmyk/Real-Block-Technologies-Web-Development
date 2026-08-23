import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { FAQ } from '@/components/FAQ'
import { CTASection } from '@/components/CTASection'
import { Button } from '@/components/Button'
import { ProductCard } from '@/components/ProductCard'
import { Hero } from '@/sections/home/Hero'
import {
  CAPITAL_FLOW,
  RESOURCE_RIGHTS,
  PROCESS_STEPS,
  RCPS,
  PASSPORT_SECTIONS,
  CAPITAL_SCORE,
  INSIGHTS,
} from '@/data/resourceCapital'

export function HomePage() {
  return (
    <PageTransition>
      <SEO
        title="Real Block Technologies | Resource Capital"
        description="We create and structure capital products from the economic value of mining and mineral assets. Resource intelligence, product architecture and digital asset registry for resource owners."
        path="/"
      />
      <Hero />

      <section className="bg-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-copper">The opportunity</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-medium text-navy md:text-5xl">
            Your resource may contain more capital opportunities than you realize.
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink-muted md:text-lg">
            <p>A mine is more than a mineral deposit. It can represent multiple economic rights, future cash flows and financing opportunities.</p>
            <p>Real Block helps identify those opportunities and translate them into structured Resource Capital Products.</p>
          </div>
          <div className="mt-12 border border-border bg-stone p-6 md:p-10">
            <p className="eyebrow text-center text-copper">Resource</p>
            <div className="mx-auto my-4 h-8 w-px bg-copper/50" />
            <div className="grid gap-3 sm:grid-cols-5">
              {RESOURCE_RIGHTS.map((item) => (
                <div key={item} className="border border-border bg-white px-3 py-4 text-center text-sm font-semibold text-navy">
                  {item}
                </div>
              ))}
            </div>
            <div className="mx-auto my-4 h-8 w-px bg-copper/50" />
            <p className="text-center font-display text-2xl text-navy">Capital</p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-copper-light">Category</p>
          <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">Resource Capital</h2>
          <p className="mt-5 max-w-3xl text-lg text-white/65">
            Turning economic rights arising from Earth's resources into structured capital opportunities.
          </p>
          <p className="mt-6 max-w-3xl text-white/60">
            Resource Capital is the economic value that can potentially be unlocked from natural resources, production, royalties, inventory, projects, infrastructure and associated contractual rights.
          </p>
          <p className="mt-6 max-w-3xl font-display text-2xl text-white">
            Create better capital structures from real-world economic value.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-white/45">
            The objective is not simply to tokenize assets. Technology supports the capital product. It is not the product itself.
          </p>
          <ol className="mt-12 grid gap-3 md:grid-cols-5">
            {CAPITAL_FLOW.map((step, index) => (
              <li key={step} className="border border-white/10 bg-white/5 p-4">
                <p className="text-[0.65rem] tracking-[0.18em] text-copper-light uppercase">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-2 text-sm font-semibold leading-snug">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-stone py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-copper">Process</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-navy">From resource to capital-market readiness</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <article key={step.id} className="border border-border bg-white p-6">
                <p className="eyebrow text-copper">{step.id}</p>
                <h3 className="mt-3 font-display text-2xl text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-copper">Illustrative architectures</p>
              <h2 className="mt-4 font-display text-4xl font-medium text-navy">Resource Capital Products</h2>
              <p className="mt-4 max-w-2xl text-ink-muted">
                An RCP is an illustrative financial-product architecture built around the economic rights, cash flows or financing potential associated with a real-world resource.
              </p>
            </div>
            <Button to="/products" variant="ghost">
              View all products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {RCPS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow text-copper">Proprietary framework</p>
            <h2 className="mt-4 font-display text-4xl font-medium text-navy">Resource Passport™</h2>
            <p className="mt-4 text-ink-muted">
              A standardized digital profile designed to organize the technical, legal, financial and commercial information associated with a resource asset. Real Block Technologies' proprietary framework — not an internationally recognized industry standard.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PASSPORT_SECTIONS.map((section) => (
                <div key={section.title} className="border border-border bg-white p-4">
                  <h3 className="font-display text-lg text-navy">{section.title}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-ink-muted">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow text-copper">Proprietary framework</p>
            <h2 className="mt-4 font-display text-4xl font-medium text-navy">Resource Capital Score™</h2>
            <p className="mt-4 text-ink-muted">Illustrative example only. This score is not an investment recommendation.</p>
            <dl className="mt-8 space-y-3">
              {CAPITAL_SCORE.map((item) => (
                <div key={item.label} className="flex items-center justify-between border border-border bg-white px-4 py-3">
                  <dt className="text-sm text-ink-muted">{item.label}</dt>
                  <dd className="font-display text-xl text-navy">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-copper-light">Infrastructure layer</p>
          <h2 className="mt-4 font-display text-4xl font-medium">Digital Asset Registry & Management</h2>
          <p className="mt-5 max-w-3xl text-white/65">
            A digital record and lifecycle management layer for resource assets, economic rights and associated capital-product structures. This is supporting infrastructure for RCPs — not a sixth product.
          </p>
          <Button to="/digital-asset-registry" variant="gold" size="lg" className="mt-8">
            Explore the registry
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="bg-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-copper">Primary customer</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-navy">You own the resource. We help create the capital structure.</h2>
          <p className="mt-5 max-w-3xl text-ink-muted">
            Built for mining companies, mineral producers, project developers, royalty holders and resource infrastructure owners — and the CEOs, CFOs, treasurers and capital-markets teams who evaluate financing options.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/mining-companies" variant="primary">
              For Mining Companies
            </Button>
            <Button to="/submit-asset" variant="ghost">
              Submit Your Asset
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-stone py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-copper">Capital-market partners</p>
          <h2 className="mt-4 font-display text-3xl font-medium text-navy">Prepared for review by appropriate partners</h2>
          <p className="mt-4 max-w-3xl text-ink-muted">
            We prepare resource-backed product structures for potential review by appropriate financing, institutional and regulated capital-market partners. This website is not a retail investment marketplace.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-3xl text-navy">Insights for resource executives</h2>
            <Link to="/insights" className="text-sm font-semibold text-navy hover:text-copper">
              All insights
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {INSIGHTS.slice(0, 3).map((article) => (
              <Link key={article.slug} to={`/insights/${article.slug}`} className="border border-border p-6 hover:border-copper/40">
                <p className="text-xs font-semibold tracking-wider text-copper uppercase">{article.category}</p>
                <h3 className="mt-3 font-display text-xl text-navy">{article.title}</h3>
                <p className="mt-3 text-sm text-ink-muted">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </PageTransition>
  )
}
