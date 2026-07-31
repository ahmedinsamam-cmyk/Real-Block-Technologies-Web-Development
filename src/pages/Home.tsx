import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { FAQ } from '@/components/FAQ'
import { Testimonials } from '@/components/Testimonials'
import { ConsultationBooking } from '@/components/ConsultationBooking'
import { LinkedInCTA } from '@/components/LinkedInCTA'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { TrustedPartners } from '@/components/TrustedPartners'
import { CTASection } from '@/components/CTASection'
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
      <TrustedPartners />
      <CapabilityPillars />
      <Stats />
      <ServiceHighlights />
      <Testimonials />

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 section-photo-a" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="eyebrow text-gold-light">Enterprise Resource</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-white md:text-5xl lg:text-[3.4rem]">
            The Enterprise Guide to Real World Asset Tokenization
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            A practical leadership briefing covering architecture, infrastructure, use cases, and an
            implementation roadmap.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button
              to="/resources/rwa-tokenization-guide"
              variant="gold"
              size="lg"
              onClick={() => trackCtaClick('home_rwa_guide')}
            >
              Download Free Guide
            </Button>
            <Button to="/resources" variant="outline" size="lg">
              Browse Resources
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-28">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow text-royal">Insights</p>
            <h2 className="mt-4 font-display text-4xl font-medium text-navy">
              Stay ahead of digital transformation
            </h2>
          </div>
          <div className="mt-10">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <ConsultationBooking
        title="Ready to transform your asset strategy?"
        description="Book a discovery consultation covering AI transformation, RWA tokenization, blockchain strategy, and enterprise automation."
        ctaLabel="Book a Free Consultation"
      />
      <FAQ />
      <LinkedInCTA />
      <CTASection
        title="Build the next chapter of digital value."
        description="Partner with Real Block Technologies to design and deliver institutional-grade AI, blockchain, and real-world asset solutions."
        primaryLabel="Schedule Consultation"
      />
    </PageTransition>
  )
}
