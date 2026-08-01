import { Navigate, useParams, Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { Button } from '@/components/Button'
import { services } from '@/data/content'

const SLUG_TO_ID: Record<string, string> = {
  'real-estate-tokenization': 'rwa',
  'ai-solutions': 'ai',
  'enterprise-consulting': 'consulting',
  'blockchain-advisory': 'blockchain',
  'treasury-fintech': 'treasury',
  'software-development': 'software',
}

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const serviceId = slug ? SLUG_TO_ID[slug] : undefined
  const service = services.find((item) => item.id === serviceId)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const Icon = service.icon

  return (
    <PageTransition>
      <SEO
        title={service.title}
        description={service.description}
        path={`/services/${slug}`}
      />
      <PageHero eyebrow="Services" title={service.title} description={service.description} />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center bg-navy text-white">
              <Icon className="h-7 w-7" />
            </div>
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              How we help
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
              {service.longDescription ?? service.description}
            </p>

            <h3 className="mt-10 font-display text-2xl font-semibold text-navy">What we deliver</h3>
            <ul className="mt-4 space-y-3">
              {service.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3 text-sm text-ink-muted md:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <aside className="border border-border bg-surface p-6 md:p-8 lg:self-start">
            <h3 className="font-display text-xl font-semibold text-navy">Expected outcomes</h3>
            <ul className="mt-4 space-y-3">
              {(service.outcomes ?? service.details.slice(0, 3)).map((item) => (
                <li key={item} className="border border-border bg-white px-3 py-2.5 text-sm text-navy">
                  {item}
                </li>
              ))}
            </ul>
            <Button to="/contact#consultation" variant="primary" className="mt-6 w-full">
              Discuss this service
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link to="/services" className="mt-4 block text-center text-sm font-semibold text-navy hover:text-royal">
              View all services
            </Link>
          </aside>
        </div>
      </section>

      <CTASection
        title={`Ready to explore ${service.title}?`}
        description="Book a discovery consultation and we will map the right engagement approach for your team."
        primaryLabel="Book a Free Consultation"
      />
    </PageTransition>
  )
}
