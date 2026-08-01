import { motion } from 'framer-motion'
import { whyChoose, trustSections } from '@/data/trust'
import { SectionHeading } from '@/components/SectionHeading'

export function TrustSignals() {
  return (
    <>
      <section className="bg-white py-20 md:py-28" aria-labelledby="why-choose-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div id="why-choose-heading">
            <SectionHeading
              eyebrow="Why Real Block"
              title="Built for executives who need technology to create durable advantage"
              description="We combine institutional consulting discipline with deep capability in AI, blockchain, and real-world asset programs."
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.id}
                  className="border-t border-border pt-6"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center bg-navy text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-navy md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-[0.95rem]">
                    {item.description}
                  </p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28" aria-labelledby="capabilities-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trust & capability"
            title="The foundations enterprises evaluate before they engage"
            description="Methodology, expertise, security posture, and global delivery—presented with the clarity a buying committee expects."
          />

          <h2 id="capabilities-heading" className="sr-only">
            Trust and capability pillars
          </h2>

          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {trustSections.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.id}
                  className="bg-white p-7 md:p-8"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                >
                  <Icon className="h-6 w-6 text-royal" aria-hidden />
                  <h3 className="mt-4 font-display text-xl font-medium text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
