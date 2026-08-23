import { motion } from 'framer-motion'
import { testimonials } from '@/data/content'

export function Testimonials() {
  const featured = testimonials.slice(0, 3)

  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-light">Client Perspective</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-white md:text-5xl">
            Built for institutions. Trusted by operators.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((item, index) => (
            <motion.blockquote
              key={item.name}
              className="border border-white/10 bg-white/[0.03] p-7 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <p className="font-display text-xl leading-relaxed text-white/90 md:text-2xl">
                “{item.quote}”
              </p>
              <footer className="mt-8 border-t border-white/10 pt-5">
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-white">{item.name}</span>
                  <span className="text-xs text-white/45">{item.company}</span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
