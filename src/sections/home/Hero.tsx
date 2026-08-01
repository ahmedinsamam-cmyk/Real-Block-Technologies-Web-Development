import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { trackCtaClick } from '@/utils/analytics'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 hero-photo" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-navy/20"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:justify-center md:pb-28 md:pt-32 lg:px-8">
        <motion.p
          className="eyebrow mb-6 text-gold-light"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          Real Block Technologies
        </motion.p>
        <motion.h1
          className="max-w-5xl font-display text-[2.85rem] leading-[1.05] font-medium text-white text-balance sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          Tokenizing real assets.
          <br className="hidden sm:block" />
          Powering enterprise intelligence.
        </motion.h1>
        <motion.p
          className="mt-7 max-w-xl text-base leading-relaxed text-white/72 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          AI, blockchain, and real-world asset consulting for organizations transforming physical
          value into digital advantage.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
        >
          <Button
            to="/contact#consultation"
            variant="gold"
            size="lg"
            onClick={() => trackCtaClick('hero_consultation')}
          >
            Schedule Consultation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          <Button to="/services" variant="outline" size="lg">
            Explore Solutions
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
