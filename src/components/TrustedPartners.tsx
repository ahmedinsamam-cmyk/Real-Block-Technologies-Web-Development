import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/SectionHeading'
import { TRUSTED_PARTNERS } from '@/utils/constants'

export function TrustedPartners() {
  return (
    <section className="border-y border-border bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trust"
          title="Trusted Technology Partners"
          description="We collaborate with forward-looking enterprises and technology organizations preparing for AI, blockchain, and digital asset transformation."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {TRUSTED_PARTNERS.map((partner, index) => (
            <motion.div
              key={partner}
              className="flex h-20 items-center justify-center rounded-xl border border-border bg-surface px-3 text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="font-display text-sm font-bold tracking-wide text-navy/55">{partner}</span>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-ink-muted">
          Placeholder partner marks for launch. Replace with approved client or alliance logos.
        </p>
      </div>
    </section>
  )
}
