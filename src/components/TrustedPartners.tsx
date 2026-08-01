import { motion } from 'framer-motion'
import { TRUSTED_PARTNERS } from '@/utils/constants'

export function TrustedPartners() {
  return (
    <section className="border-b border-border bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-center text-royal">Trusted by forward-looking enterprises</p>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
          {TRUSTED_PARTNERS.map((partner, index) => (
            <motion.div
              key={partner}
              className="flex items-center justify-center text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <span className="font-display text-lg font-medium tracking-wide text-navy/35 md:text-xl">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
