import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { LinkedInCTA } from '@/components/LinkedInCTA'
import { CTASection } from '@/components/CTASection'
import { SiteSearch } from '@/components/SiteSearch'
import { insights } from '@/data/insights'

export function InsightsPage() {
  return (
    <PageTransition>
      <SEO
        title="Insights"
        description="Thought leadership on AI, real-world asset tokenization, blockchain strategy, FinTech, and enterprise digital transformation from Real Block Technologies."
        path="/insights"
      />
      <PageHero
        eyebrow="Insights"
        title="Perspectives that build authority on AI, assets, and enterprise systems"
        description="High-quality articles for leaders evaluating emerging technology investments—written to inform strategy, not chase trends."
      />

      <section className="border-b border-border bg-white py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SiteSearch scope="insights" placeholder="Search insights…" />
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={`${insights.length} articles`}
            title="Latest thinking from our practice"
            description="Browse by topic across AI, RWA, blockchain, FinTech, and enterprise platforms."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {insights.map((article, index) => (
              <motion.article
                key={article.slug}
                className="group flex h-full flex-col border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-navy/25 hover:shadow-lg hover:shadow-navy/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="bg-navy/5 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-royal uppercase">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-ink-muted">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-lg font-bold text-navy group-hover:text-royal md:text-xl">
                  <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{article.excerpt}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <time className="text-xs text-ink-muted">{article.date}</time>
                  <Link
                    to={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-royal"
                  >
                    Read article
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>

      <LinkedInCTA />

      <CTASection
        title="Looking for tailored insight for your industry?"
        description="Connect with our team to discuss your priorities and receive a briefing aligned to your operating context."
        primaryLabel="Book a Strategy Session"
        primaryTo="/strategy-session"
      />
    </PageTransition>
  )
}
