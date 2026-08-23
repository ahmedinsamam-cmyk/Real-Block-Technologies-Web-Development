import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { CTASection } from '@/components/CTASection'
import { SERVICES } from '@/data/resourceCapital'

export function ServicesPage() {
  return (
    <PageTransition>
      <SEO
        title="Resource Capital Services"
        description="From resource intelligence to capital-product creation and digital lifecycle management for mining and mineral companies."
        path="/services"
      />
      <PageHero
        eyebrow="Services"
        title="Resource Capital Services"
        description="From resource intelligence to capital-product creation and digital lifecycle management."
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {SERVICES.map((service) => (
            <article key={service.id} id={service.id} className="scroll-mt-28 border border-border p-6 md:p-10">
              <p className="eyebrow text-copper">{service.number}</p>
              <h2 className="mt-3 font-display text-3xl text-navy">{service.title}</h2>
              <p className="mt-4 max-w-3xl text-ink-muted">{service.description}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-navy">— {item}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-semibold text-copper">Deliverable: {service.deliverable}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </PageTransition>
  )
}
