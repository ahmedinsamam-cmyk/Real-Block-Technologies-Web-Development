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
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl">
            Real Block Technologies
          </p>
          <div className="mt-4 h-px w-16 bg-gold-light/80" aria-hidden />
        </motion.div>

        <motion.h1
          className="mt-8 max-w-5xl font-display text-[2.5rem] leading-[1.06] font-medium text-white text-balance sm:text-5xl md:text-6xl lg:text-[4.5rem]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          Enterprise consulting for AI, FinTech, and real-world asset tokenization.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:mt-8 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          Scoped professional services for mid-market enterprises—platforms, automation, and
          Tokenization-as-a-Service with clear deliverables and practical ROI.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap gap-3 md:mt-11"
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
            Schedule consultation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          <Button to="/services" variant="outline" size="lg">
            Explore solutions
          </Button>
        </motion.div>

        <motion.ul
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/55 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          aria-label="Focus areas"
        >
          {['RWA TaaS', 'Enterprise AI', 'FinTech', 'Workday · D365 · HubSpot'].map((item) => (
            <li key={item} className="font-medium tracking-wide">
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
