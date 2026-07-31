import { ArrowRight, ShieldCheck, Globe2, Sparkles, Building } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { TechBackground } from '@/components/TechBackground'
import { TRUST_INDICATORS } from '@/utils/constants'

const trustIcons = [ShieldCheck, Globe2, Sparkles, Building]

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24">
      <TechBackground />
      <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <motion.p
          className="mb-5 font-body text-[0.7rem] font-semibold tracking-[0.28em] text-gold-light uppercase"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Real Block Technologies
        </motion.p>
        <motion.h1
          className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-white text-balance sm:text-6xl md:text-7xl lg:text-[4.75rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          Transforming Real Assets Into Digital Intelligence
        </motion.h1>
        <motion.p
          className="mt-7 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          Enterprise consulting for AI, blockchain, and real-world asset tokenization—helping
          organizations unlock value from physical assets and financial operations.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
        >
          <Button to="/contact" variant="gold" size="lg">
            Schedule Consultation
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button to="/services" variant="outline" size="lg">
            Explore Services
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
        >
          {TRUST_INDICATORS.map((item, index) => {
            const Icon = trustIcons[index]
            return (
              <div
                key={item}
                className="flex items-start gap-3 border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-sm"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" aria-hidden />
                <span className="text-xs font-medium leading-snug text-white/75">{item}</span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
