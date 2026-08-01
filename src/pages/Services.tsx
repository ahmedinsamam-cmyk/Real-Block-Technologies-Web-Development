import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { ServiceCard } from '@/components/ServiceCard'
import { ConsultationBooking } from '@/components/ConsultationBooking'
import { PlatformExpertise } from '@/components/PlatformExpertise'
import { services } from '@/data/content'

export function ServicesPage() {
  return (
    <PageTransition>
      <SEO
        title="Services"
        description="RWA Tokenization-as-a-Service, AI solutions, enterprise consulting (Workday, Dynamics 365, HubSpot), blockchain advisory, and FinTech solutions."
        path="/services"
      />
      <PageHero
        eyebrow="Services"
        title="Professional services for focused enterprise outcomes"
        description="Advisory and implementation across AI, FinTech, enterprise platforms, blockchain, and RWA Tokenization-as-a-Service."
      />
      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Five practice areas. One practical delivery model."
            description="Engage us for a focused initiative with clear deliverables—strategy, architecture, and execution connected."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      <PlatformExpertise />
      <ConsultationBooking
        title="Discuss your next enterprise initiative"
        description="Schedule a discovery call to prioritize AI, FinTech, platforms, or RWA TaaS against your operating goals."
        ctaLabel="Book a consultation"
      />
    </PageTransition>
  )
}
