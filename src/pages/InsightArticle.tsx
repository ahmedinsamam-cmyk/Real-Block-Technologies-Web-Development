import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { CTASection } from '@/components/CTASection'
import { getInsightBySlug, INSIGHT_BODIES } from '@/data/resourceCapital'
import { articleSchema } from '@/utils/schema'

export function InsightArticlePage() {
  const { slug } = useParams()
  const article = slug ? getInsightBySlug(slug) : undefined
  if (!article) return <Navigate to="/insights" replace />
  const body = INSIGHT_BODIES[article.slug] ?? [article.excerpt]

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
          datePublished: article.date,
          path: `/insights/${article.slug}`,
        })}
      />
      <article className="bg-white pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-copper">{article.category}</p>
          <h1 className="mt-4 font-display text-4xl font-medium text-navy md:text-5xl">{article.title}</h1>
          <p className="mt-4 text-sm text-ink-muted">{article.date} · {article.readTime}</p>
          <div className="mt-10 space-y-5 text-base leading-relaxed text-ink-muted">
            {body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <Link to="/insights" className="mt-10 inline-block text-sm font-semibold text-navy hover:text-copper">
            All insights
          </Link>
        </div>
      </article>
      <CTASection />
    </PageTransition>
  )
}
