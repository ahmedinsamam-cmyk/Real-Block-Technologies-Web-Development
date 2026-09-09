import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { COMPANY } from '@/utils/constants'

export function Hero() {
  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-navy">
      <div className="absolute inset-0 grid-fine" aria-hidden />
      <div className="absolute inset-0 hero-photo opacity-90" aria-hidden />
      <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-center px-4 pt-28 pb-16 sm:px-6 md:pb-20 lg:px-8">
        <motion.p
          className="eyebrow mb-5 text-cyan"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          For mining companies
        </motion.p>
        <motion.h1
          className="max-w-4xl text-4xl font-semibold leading-[1.08] text-white text-balance sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          From mineral royalties to compliant digital investment products
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
        >
          {COMPANY.proposition}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button to="/product" variant="primary" size="lg">
            Tokenised Royalty
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button to="/service" variant="outline" size="lg">
            Tokenisation as a Service
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
