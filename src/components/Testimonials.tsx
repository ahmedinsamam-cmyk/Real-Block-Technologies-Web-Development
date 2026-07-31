import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/data/content'
import { SectionHeading } from '@/components/SectionHeading'

export function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Perspective"
          title="Trusted by forward-looking enterprise teams"
          description="Leaders engage Real Block Technologies to navigate complex AI, blockchain, and digital asset initiatives with clarity and rigor."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              className="relative rounded-xl border border-border bg-surface p-6 md:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
            >
              <Quote className="mb-4 h-8 w-8 text-gold/80" aria-hidden />
              <p className="text-sm leading-relaxed text-ink md:text-[0.95rem]">"{item.quote}"</p>
              <footer className="mt-6 border-t border-border pt-4">
                <cite className="not-italic">
                  <span className="block font-display text-sm font-semibold text-navy">{item.name}</span>
                  <span className="text-xs text-ink-muted">{item.company}</span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
