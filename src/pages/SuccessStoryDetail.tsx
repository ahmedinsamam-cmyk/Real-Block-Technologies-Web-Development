import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { CTASection } from '@/components/CTASection'
import { Button } from '@/components/Button'
import { getSuccessStoryBySlug } from '@/data/successStories'

export function SuccessStoryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const story = slug ? getSuccessStoryBySlug(slug) : undefined

  if (!story) {
    return <Navigate to="/success-stories" replace />
  }

  return (
    <PageTransition>
      <SEO
        title={story.title}
        description={story.challenge}
        path={`/success-stories/${story.slug}`}
      />

      <section className="border-b border-border bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/success-stories"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-royal"
          >
            <ArrowLeft className="h-4 w-4" />
            All success stories
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-royal uppercase">
              {story.industry}
            </span>
            {story.illustrative && (
              <span className="border border-navy/20 bg-white px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-navy uppercase">
                {story.label}
              </span>
            )}
          </div>
          <h1 className="mt-3 font-display text-3xl font-medium text-navy md:text-5xl">
            {story.title}
          </h1>
          <p className="mt-3 text-sm text-ink-muted">{story.clientType}</p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-medium text-navy">Challenge</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">{story.challenge}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium text-navy">Approach</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">{story.approach}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium text-navy">Outcomes</h2>
            <ul className="mt-4 space-y-3">
              {story.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-base text-ink-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium text-navy">Services involved</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {story.services.map((s) => (
                <li key={s} className="border border-border px-3 py-1.5 text-sm font-medium text-navy">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <Button to="/strategy-session" variant="primary">
            Discuss a similar engagement
          </Button>
        </div>
      </section>

      <CTASection
        title="Ready to design your own engagement?"
        primaryLabel="Book a Strategy Session"
        primaryTo="/strategy-session"
      />
    </PageTransition>
  )
}
