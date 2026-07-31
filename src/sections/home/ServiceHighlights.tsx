import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { ServiceCard } from '@/components/ServiceCard'
import { services } from '@/data/content'
import { Button } from '@/components/Button'

export function ServiceHighlights() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Deliver"
          title="Enterprise technology services built for measurable outcomes"
          description="From real-world asset tokenization to AI automation and blockchain advisory, we help organizations modernize how value is created, managed, and scaled."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/services" variant="ghost">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
