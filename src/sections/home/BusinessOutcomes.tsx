import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { businessOutcomes, securityPractices } from '@/data/trust'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/Button'

export function BusinessOutcomes() {
  return (
    <section className="bg-surface py-20 md:py-28" aria-labelledby="outcomes-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Business outcomes"
              title="What enterprise sponsors should expect from an engagement"
              description="We define success in commercial and operational terms—so technology investment is measured against outcomes leadership can defend."
            />
            <h2 id="outcomes-heading" className="sr-only">
              Business outcomes
            </h2>
            <div className="space-y-6">
              {businessOutcomes.map((item, index) => (
                <motion.div
                  key={item.metric}
                  className="border-l-2 border-royal pl-5"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <h3 className="font-display text-xl font-medium text-navy">{item.metric}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border border-border bg-white p-8 md:p-10">
            <p className="eyebrow text-royal">Security & compliance</p>
            <h3 className="mt-4 font-display text-3xl font-medium text-navy">
              Controls designed in—not bolted on
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
              Emerging technology programs fail when security and compliance are treated as late-stage
              checklists. We embed them into architecture and delivery from day one.
            </p>
            <ul className="mt-8 space-y-3">
              {securityPractices.map((practice) => (
                <li key={practice} className="flex items-start gap-3 text-sm text-ink-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" aria-hidden />
                  {practice}
                </li>
              ))}
            </ul>
            <Button to="/contact#consultation" variant="ghost" className="mt-8">
              Discuss your requirements
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
