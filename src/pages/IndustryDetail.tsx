import { Navigate, useParams, Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { Button } from '@/components/Button'
import { industries } from '@/data/content'

export function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const industry = industries.find((item) => item.id === slug)

  if (!industry) {
    return <Navigate to="/industries" replace />
  }

  const Icon = industry.icon

  return (
    <PageTransition>
      <SEO
        title={`${industry.title} Solutions`}
        description={industry.description}
        path={`/industries/${industry.id}`}
      />
      <PageHero
        eyebrow="Industries"
        title={`${industry.title} industry solutions`}
        description={industry.description}
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
              {(industry.challenges ?? industry.outcomes).map((item) => (
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
              {(industry.capabilities ?? industry.outcomes).map((item) => (
                <li key={item} className="border border-border bg-white px-3 py-2.5 text-sm font-medium text-navy">
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-display text-xl font-semibold text-navy">Outcomes</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {industry.outcomes.map((outcome) => (
                <li key={outcome} className="border border-border bg-white px-3 py-1.5 text-xs font-semibold text-navy">
                  {outcome}
                </li>
              ))}
            </ul>
            <Button to="/contact#consultation" variant="primary" className="mt-8 w-full">
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
        title={`Build your ${industry.title.toLowerCase()} transformation roadmap`}
        primaryLabel="Book a Free Consultation"
      />
    </PageTransition>
  )
}
