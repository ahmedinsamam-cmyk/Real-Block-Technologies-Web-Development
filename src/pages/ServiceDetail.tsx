import { Navigate, useParams, Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { FAQ } from '@/components/FAQ'
import { Button } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { services } from '@/data/content'
import { serviceDetailsById } from '@/data/serviceDetails'
import { faqSchema } from '@/utils/schema'

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
  const detail = serviceId ? serviceDetailsById[serviceId] : undefined

  if (!service || !detail) {
    return <Navigate to="/services" replace />
  }

  const Icon = service.icon

  return (
    <PageTransition>
      <SEO
        title={service.title}
        description={service.description}
        path={`/services/${slug}`}
        jsonLd={faqSchema(detail.faqs)}
      />
      <PageHero eyebrow="Services" title={service.title} description={service.description} />

      {/* Problem / Solution */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow text-royal">The problem</p>
              <h2 className="mt-4 font-display text-3xl font-medium text-navy md:text-4xl">
                Where value leaks today
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
                {detail.problem}
              </p>
            </div>
            <div>
              <p className="eyebrow text-royal">Our solution</p>
              <h2 className="mt-4 font-display text-3xl font-medium text-navy md:text-4xl">
                How Real Block engages
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
                {detail.solution}
              </p>
              <div className="mt-6 flex h-12 w-12 items-center justify-center bg-navy text-white">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits + Outcomes */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Business benefits"
              title="What changes for your organization"
            />
            <ul className="space-y-3">
              {detail.benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-muted md:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-2xl font-medium text-navy">What we deliver</h3>
            <ul className="mt-4 space-y-3">
              {service.details.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-muted md:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="border border-border bg-white p-6 md:p-8 lg:self-start">
            <h3 className="font-display text-xl font-medium text-navy">Expected outcomes</h3>
            <ul className="mt-4 space-y-3">
              {detail.expectedOutcomes.map((item) => (
                <li key={item} className="border border-border bg-surface px-3 py-2.5 text-sm text-navy">
                  {item}
                </li>
              ))}
            </ul>
            <Button to="/contact#consultation" variant="primary" className="mt-6 w-full">
              Discuss this service
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Link
              to="/services"
              className="mt-4 block text-center text-sm font-semibold text-navy transition hover:text-royal"
            >
              View all services
            </Link>
          </aside>
        </div>
      </section>

      {/* Tech stack */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            eyebrow="Technology stack"
            title="Capabilities applied on this engagement type"
          />
          <ul className="flex flex-wrap gap-3">
            {detail.techStack.map((tech) => (
              <li
                key={tech}
                className="border border-border bg-surface px-4 py-2 text-sm font-medium text-navy"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Implementation process */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Implementation process"
            title="How delivery typically unfolds"
            description="A structured path from diagnosis to production—adapted to your operating model and risk posture."
          />
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {detail.process.map((step, index) => (
              <li key={step.title} className="border-t border-border pt-5">
                <span className="eyebrow text-royal">0{index + 1}</span>
                <h3 className="mt-3 font-display text-xl font-medium text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related resources */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-medium text-navy">Related resources</h2>
          <ul className="mt-6 flex flex-wrap gap-4">
            {detail.relatedResources.map((resource) => (
              <li key={resource.href}>
                <Link
                  to={resource.href}
                  className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-sm font-semibold text-navy transition hover:border-navy hover:bg-surface"
                >
                  {resource.label}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ items={detail.faqs} />

      <CTASection
        title={`Ready to explore ${service.title}?`}
        description="Book a discovery consultation and we will map the right engagement approach for your team."
        primaryLabel="Book a consultation"
        primaryTo="/contact#consultation"
      />
    </PageTransition>
  )
}
