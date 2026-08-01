import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTASection } from '@/components/CTASection'
import { industries } from '@/data/content'

export function IndustriesPage() {
  return (
    <PageTransition>
      <SEO
        title="Industries"
        description="Industry solutions from Real Block Technologies across real estate, banking, manufacturing, healthcare, logistics, and professional services."
        path="/industries"
      />
      <PageHero
        eyebrow="Industries"
        title="Domain expertise for complex operating environments"
        description="Dedicated landing pages for Real Estate, Banking, Manufacturing, and Healthcare—plus logistics and professional services."
      />
      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sectors"
            title="Where we create impact"
            description="Each engagement is tailored to industry constraints, stakeholder expectations, and the systems that already power your business."
          />
          <div className="space-y-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <motion.article
                  key={industry.id}
                  id={industry.id}
                  className="grid gap-6 border border-border bg-white p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-navy text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
                      {industry.title}
                    </h2>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted md:text-base">
                      {industry.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {industry.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-navy"
                        >
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={industry.href}
                    className="inline-flex items-center justify-center gap-1.5 border border-navy px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white md:self-center"
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
      <CTASection />
    </PageTransition>
  )
}
