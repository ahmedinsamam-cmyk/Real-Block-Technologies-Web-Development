import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { FAQ } from '@/components/FAQ'
import { Testimonials } from '@/components/Testimonials'
import { ConsultationBooking } from '@/components/ConsultationBooking'
import { LinkedInCTA } from '@/components/LinkedInCTA'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { CTASection } from '@/components/CTASection'
import { Button } from '@/components/Button'
import { PlatformExpertise } from '@/components/PlatformExpertise'
import { Hero } from '@/sections/home/Hero'
import { Stats } from '@/sections/home/Stats'
import { ServiceHighlights } from '@/sections/home/ServiceHighlights'
import { SolutionsByProblem } from '@/sections/home/SolutionsByProblem'
import { CapabilityPillars } from '@/sections/home/CapabilityPillars'
import { TrustSignals } from '@/sections/home/TrustSignals'
import { TechnologyShowcase } from '@/sections/home/TechnologyShowcase'
import { BusinessOutcomes } from '@/sections/home/BusinessOutcomes'
import { trackCtaClick } from '@/utils/analytics'

export function HomePage() {
  return (
    <PageTransition>
      <SEO
        title="Real Block Technologies | AI, Blockchain, FinTech & RWA Consulting"
        description="Enterprise consulting for AI, FinTech, blockchain, and RWA Tokenization-as-a-Service."
        path="/"
      />
      <Hero />
      <TrustSignals />
      <CapabilityPillars />
      <SolutionsByProblem />
      <PlatformExpertise />
      <Stats />
      <ServiceHighlights />
      <TechnologyShowcase />
      <BusinessOutcomes />
      <Testimonials />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 section-photo-a" aria-hidden />
        <div className="absolute inset-0 bg-navy/70" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="eyebrow text-gold-light">Enterprise resource</p>
          <h2 className="mt-4 font-display text-3xl font-medium text-white md:text-5xl lg:text-[3.25rem]">
            The enterprise guide to real-world asset tokenization
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
              Download free guide
            </Button>
            <Button to="/resources" variant="outline" size="lg">
              Browse resources
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow text-royal">Insights</p>
            <h2 className="mt-4 font-display text-3xl font-medium text-navy md:text-4xl">
              Briefings for digital transformation leaders
            </h2>
            <p className="mt-3 text-sm text-ink-muted md:text-base">
              Occasional perspectives on AI, blockchain, and asset digitization—no noise.
            </p>
          </div>
          <div className="mt-10">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <ConsultationBooking
        title="Start with a structured strategy session"
        description="Qualify priorities across AI transformation, RWA tokenization, blockchain strategy, and enterprise platforms—then book the right conversation."
        ctaLabel="Book a Strategy Session"
      />
      <FAQ />
      <LinkedInCTA />
      <CTASection
        title="Partner with an advisory team built for institutional outcomes."
        description="Real Block Technologies designs and delivers AI, blockchain, and real-world asset solutions with the governance executives require."
        primaryLabel="Book a Strategy Session"
        primaryTo="/strategy-session"
      />
    </PageTransition>
  )
}
