import { ArrowRight, ShieldCheck, Globe2, Sparkles, Building } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { TechBackground } from '@/components/TechBackground'
import { TRUST_INDICATORS } from '@/utils/constants'

const trustIcons = [ShieldCheck, Globe2, Sparkles, Building]

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20">
      <TechBackground />
      <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <motion.p
          className="mb-5 font-display text-xs font-semibold tracking-[0.22em] text-gold uppercase"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Real Block Technologies
        </motion.p>
        <motion.h1
          className="max-w-4xl font-display text-4xl font-extrabold leading-[1.1] text-white text-balance sm:text-5xl md:text-6xl lg:text-[3.75rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          Transforming Real Assets Into Digital Intelligence
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          Real Block Technologies helps organizations unlock value from real-world assets through AI,
          blockchain, automation, and enterprise technology solutions.
        </motion.p>
        <motion.div
          className="mt-9 flex flex-wrap gap-4"
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
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
        >
          {TRUST_INDICATORS.map((item, index) => {
            const Icon = trustIcons[index]
            return (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span className="text-xs font-medium leading-snug text-white/80">{item}</span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
