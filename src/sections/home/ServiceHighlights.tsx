import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/data/content'
import { Button } from '@/components/Button'

export function ServiceHighlights() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-royal">Solutions</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-navy md:text-5xl lg:text-[3.35rem]">
            Solutions designed for enterprise outcomes
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
            Advisory and implementation across TaaS tokenization, AI, blockchain, FinTech, and
            enterprise platforms—sequenced to reduce risk and accelerate value.
          </p>
        </div>

        <div className="mt-16 divide-y divide-border border-y border-border bg-white">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <Link
                  to={service.href}
                  className="group grid gap-4 px-5 py-7 transition hover:bg-surface sm:grid-cols-[auto_1fr_auto] sm:items-center sm:px-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center bg-navy text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-navy group-hover:text-navy-light">
                      {service.title}
                    </h3>
                    <p className="mt-1 max-w-3xl text-sm leading-relaxed text-ink-muted">
                      {service.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button to="/services" variant="ghost">
            View all services
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
