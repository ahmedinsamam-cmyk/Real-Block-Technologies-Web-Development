import { motion } from 'framer-motion'
import { STATS } from '@/utils/constants'

export function Stats() {
  return (
    <section className="bg-navy py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-y border-white/10 py-10 sm:grid-cols-3 sm:gap-6 md:py-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center sm:text-left"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="font-display text-5xl font-medium text-white md:text-6xl">
                {stat.value}
                <span className="text-gold-light">{stat.suffix}</span>
              </div>
              <p className="mt-3 text-sm text-white/55 md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
