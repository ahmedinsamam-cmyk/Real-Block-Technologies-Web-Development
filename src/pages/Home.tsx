import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { FAQ } from '@/components/FAQ'
import { Testimonials } from '@/components/Testimonials'
import { CTASection } from '@/components/CTASection'
import { Hero } from '@/sections/home/Hero'
import { Stats } from '@/sections/home/Stats'
import { ServiceHighlights } from '@/sections/home/ServiceHighlights'
import { CapabilityPillars } from '@/sections/home/CapabilityPillars'

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
      <CapabilityPillars />
      <ServiceHighlights />
      <Testimonials />
      <FAQ />
      <CTASection />
    </PageTransition>
  )
}
