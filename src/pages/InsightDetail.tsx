import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { CTASection } from '@/components/CTASection'
import { SocialShare } from '@/components/SocialShare'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { getInsightBySlug, insights } from '@/data/insights'
import { articleSchema } from '@/utils/schema'

export function InsightDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getInsightBySlug(slug) : undefined

  if (!article) {
    return <Navigate to="/insights" replace />
  }

  const related = insights
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3)

  return (
    <PageTransition>
      <SEO
        title={article.title}
        description={article.excerpt}
        path={`/insights/${article.slug}`}
        type="article"
        jsonLd={articleSchema({
          title: article.title,
          description: article.excerpt,
          path: `/insights/${article.slug}`,
          datePublished: article.date,
        })}
      />

      <article className="bg-white">
        <header className="border-b border-border bg-surface py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link
              to="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-royal"
            >
              <ArrowLeft className="h-4 w-4" />
              All insights
            </Link>
            <p className="mt-6 text-[0.7rem] font-semibold tracking-[0.18em] text-royal uppercase">
              {article.category}
            </p>
            <h1 className="mt-3 font-display text-3xl font-medium text-navy md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">{article.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-ink-muted">
              <span>{article.author}</span>
              <time>{article.date}</time>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {article.readTime}
              </span>
            </div>
            <div className="mt-6">
              <SocialShare title={article.title} excerpt={article.excerpt} path={`/insights/${article.slug}`} />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="space-y-6">
            {article.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-ink md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="border border-border px-2.5 py-1 text-xs text-ink-muted">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-surface py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-medium text-navy">Related insights</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/insights/${item.slug}`}
                  className="border border-border bg-white p-5 transition hover:border-navy/30"
                >
                  <p className="text-[0.65rem] font-semibold tracking-wider text-royal uppercase">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-medium text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted line-clamp-3">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-14">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>

      <CTASection
        title="Discuss this topic with our advisors"
        description="Book a strategy session to apply these ideas to your operating context."
        primaryLabel="Book a Strategy Session"
        primaryTo="/strategy-session"
      />
    </PageTransition>
  )
}
