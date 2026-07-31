import { motion } from 'framer-motion'
import { TRUSTED_PARTNERS } from '@/utils/constants'

export function TrustedPartners() {
  return (
    <section className="border-b border-border bg-white py-12 md:py-16" aria-label="Industries served">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-center text-royal">Trusted across enterprise sectors</p>
        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-3 lg:grid-cols-6">
          {TRUSTED_PARTNERS.map((partner, index) => (
            <motion.li
              key={partner}
              className="flex items-center justify-center text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <span className="font-display text-base font-medium tracking-wide text-navy/40 md:text-lg">
                {partner}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
