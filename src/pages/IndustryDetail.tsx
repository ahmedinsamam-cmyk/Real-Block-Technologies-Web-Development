import { Navigate, useParams, Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { Button } from '@/components/Button'
import { industries } from '@/data/content'
import {
  getFocusedIndustry,
  INDUSTRY_ALIASES,
} from '@/data/industriesFocused'
import { getInsightBySlug } from '@/data/insights'

export function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const resolvedSlug = slug ? (INDUSTRY_ALIASES[slug] ?? slug) : undefined
  const focused = resolvedSlug ? getFocusedIndustry(resolvedSlug) : undefined
  const industry = industries.find(
    (item) => item.id === slug || item.id === resolvedSlug || (slug === 'banking' && item.id === 'financial-services'),
  )

  if (!focused && !industry) {
    return <Navigate to="/industries" replace />
  }

  if (focused) {
    const related = focused.relatedInsights
      .map((s) => getInsightBySlug(s))
      .filter(Boolean)

    return (
      <PageTransition>
        <SEO
          title={`${focused.name} Solutions`}
          description={focused.heroDescription}
          path={`/industries/${focused.slug}`}
        />
        <PageHero
          eyebrow={`${focused.name} industry`}
          title={focused.heroTitle}
          description={focused.heroDescription}
        />

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              Problems we help solve
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {focused.problems.map((p) => (
                <div key={p.title} className="border border-border bg-surface p-5">
                  <h3 className="font-display text-lg font-medium text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              How we engage
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {focused.solutions.map((s) => (
                <Link
                  key={s.title}
                  to={s.href}
                  className="border border-border bg-white p-5 transition hover:border-navy/30"
                >
                  <h3 className="font-display text-lg font-medium text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>

            <h3 className="mt-12 font-display text-2xl font-medium text-navy">Typical outcomes</h3>
            <ul className="mt-4 space-y-3">
              {focused.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm text-ink-muted md:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                  {o}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="/strategy-session" variant="primary">
                Book a strategy session
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/success-stories" variant="ghost">
                View success stories
              </Button>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="bg-white py-14 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl font-medium text-navy">Related insights</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {related.map((article) =>
                  article ? (
                    <Link
                      key={article.slug}
                      to={`/insights/${article.slug}`}
                      className="border border-border p-5 transition hover:border-navy/30"
                    >
                      <p className="text-[0.65rem] font-semibold tracking-wider text-royal uppercase">
                        {article.category}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-medium text-navy">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-muted line-clamp-3">{article.excerpt}</p>
                    </Link>
                  ) : null,
                )}
              </div>
            </div>
          </section>
        )}

        <CTASection
          title={`Build your ${focused.name.toLowerCase()} transformation roadmap`}
          primaryLabel="Book a Strategy Session"
          primaryTo="/strategy-session"
        />
      </PageTransition>
    )
  }

  const Icon = industry!.icon

  return (
    <PageTransition>
      <SEO
        title={`${industry!.title} Solutions`}
        description={industry!.description}
        path={`/industries/${industry!.id}`}
      />
      <PageHero
        eyebrow="Industries"
        title={`${industry!.title} industry solutions`}
        description={industry!.description}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-navy text-white">
              <Icon className="h-7 w-7" />
            </div>
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              Industry challenges we address
            </h2>
            <ul className="mt-6 space-y-3">
              {(industry!.challenges ?? industry!.outcomes).map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-muted md:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-border bg-surface p-6 md:p-8">
            <h3 className="font-display text-2xl font-semibold text-navy">Capabilities</h3>
            <ul className="mt-4 space-y-3">
              {(industry!.capabilities ?? industry!.outcomes).map((item) => (
                <li key={item} className="border border-border bg-white px-3 py-2.5 text-sm font-medium text-navy">
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-display text-xl font-semibold text-navy">Outcomes</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {industry!.outcomes.map((outcome) => (
                <li key={outcome} className="border border-border bg-white px-3 py-1.5 text-xs font-semibold text-navy">
                  {outcome}
                </li>
              ))}
            </ul>
            <Button to="/strategy-session" variant="primary" className="mt-8 w-full">
              Talk to an industry advisor
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link
              to="/industries"
              className="mt-4 block text-center text-sm font-semibold text-navy hover:text-royal"
            >
              View all industries
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={`Build your ${industry!.title.toLowerCase()} transformation roadmap`}
        primaryLabel="Book a Strategy Session"
        primaryTo="/strategy-session"
      />
    </PageTransition>
  )
}
