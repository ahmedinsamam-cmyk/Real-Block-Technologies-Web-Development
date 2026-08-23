import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { CTASection } from '@/components/CTASection'
import { INSIGHTS } from '@/data/resourceCapital'

export function InsightsPage() {
  return (
    <PageTransition>
      <SEO
        title="Insights"
        description="Perspectives on mining finance, Resource Capital and structured capital products for resource owners and mining executives."
        path="/insights"
      />
      <PageHero
        eyebrow="Insights"
        title="Resource finance for mining executives"
        description="Practical analysis for CEOs, CFOs and capital-markets teams evaluating how economic rights inside mining assets can support capital structures."
      />
      <section className="bg-stone py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {INSIGHTS.map((article) => (
            <Link key={article.slug} to={`/insights/${article.slug}`} className="flex flex-col border border-border bg-white p-6 hover:border-copper/40">
              <p className="text-xs font-semibold tracking-wider text-copper uppercase">{article.category}</p>
              <h2 className="mt-3 font-display text-xl text-navy">{article.title}</h2>
              <p className="mt-3 flex-1 text-sm text-ink-muted">{article.excerpt}</p>
              <p className="mt-4 text-xs text-ink-muted">{article.date} · {article.readTime}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-xl px-4">
          <NewsletterSignup />
        </div>
      </section>
      <CTASection />
    </PageTransition>
  )
}
