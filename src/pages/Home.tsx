import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { FAQ } from '@/components/FAQ'
import { Testimonials } from '@/components/Testimonials'
import { ConsultationBooking } from '@/components/ConsultationBooking'
import { LinkedInCTA } from '@/components/LinkedInCTA'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { TrustedPartners } from '@/components/TrustedPartners'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/Button'
import { Hero } from '@/sections/home/Hero'
import { Stats } from '@/sections/home/Stats'
import { ServiceHighlights } from '@/sections/home/ServiceHighlights'
import { CapabilityPillars } from '@/sections/home/CapabilityPillars'
import { trackCtaClick } from '@/utils/analytics'

export function HomePage() {
  return (
    <PageTransition>
      <SEO
        title="Real Block Technologies | AI, Blockchain & RWA Consulting"
        description="Enterprise consulting for AI, blockchain, and real-world asset transformation. Unlock value from physical assets and digital operations."
        path="/"
      />
      <Hero />
      <Stats />
      <TrustedPartners />
      <CapabilityPillars />
      <ServiceHighlights />
      <Testimonials />

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Resources"
            title="Lead with insight. Convert with value."
            description="Download our enterprise RWA guide or subscribe for ongoing technology briefings."
          />
          <div className="mb-8 flex justify-center">
            <Button
              to="/resources/rwa-tokenization-guide"
              variant="secondary"
              onClick={() => trackCtaClick('home_rwa_guide')}
            >
              Get the Free RWA Guide
            </Button>
          </div>
          <NewsletterSignup />
        </div>
      </section>

      <ConsultationBooking
        title="Ready to Transform Your Business?"
        description="Book a free 30-minute discovery consultation covering AI transformation, RWA tokenization, blockchain strategy, and enterprise automation."
        ctaLabel="Book a Free Consultation"
      />
      <FAQ />
      <LinkedInCTA />
    </PageTransition>
  )
}
