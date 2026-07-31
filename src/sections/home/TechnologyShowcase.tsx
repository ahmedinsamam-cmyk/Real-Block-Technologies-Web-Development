import { motion } from 'framer-motion'
import { technologyShowcase, techMarks } from '@/data/technologies'
import { SectionHeading } from '@/components/SectionHeading'

export function TechnologyShowcase() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="tech-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology expertise"
          title="Platforms and practices we put to work for enterprise clients"
          description="We select and integrate proven technologies based on architecture fit, security posture, and operating reality—not trend cycles."
        />

        <h2 id="tech-heading" className="sr-only">
          Technology showcase
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {technologyShowcase.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <h3 className="border-b border-border pb-3 font-display text-lg font-medium text-navy">
                {category.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {category.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-ink-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="eyebrow text-center text-royal">Representative stack</p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {techMarks.map((mark) => (
              <li
                key={mark}
                className="font-display text-lg font-medium tracking-wide text-navy/30 md:text-xl"
              >
                {mark}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
