import { motion } from 'framer-motion'
import { STATS } from '@/utils/constants'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export function Stats() {
  return (
    <section className="bg-navy py-16 md:py-24" aria-label="Impact statistics">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-y border-white/10 py-10 sm:grid-cols-3 sm:gap-6 md:py-14">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                light
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
