import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { ServiceCard } from '@/components/ServiceCard'
import { CTASection } from '@/components/CTASection'
import { services } from '@/data/content'

export function ServicesPage() {
  return (
    <PageTransition>
      <SEO
        title="Services"
        description="Explore Real Block Technologies services: RWA tokenization, AI solutions, enterprise consulting, blockchain advisory, treasury technology, and software development."
        path="/services"
      />
      <PageHero
        eyebrow="Services"
        title="Technology consulting for enterprise transformation"
        description="End-to-end advisory and implementation services spanning AI, blockchain, real-world assets, finance technology, and custom software."
      />
      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Six practice areas. One integrated delivery model."
            description="Engage us for a focused initiative or a broader transformation program—our teams connect strategy, architecture, and execution."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Need a tailored service roadmap?"
        description="Tell us about your priorities and we will recommend the right mix of advisory, architecture, and implementation support."
      />
    </PageTransition>
  )
}
