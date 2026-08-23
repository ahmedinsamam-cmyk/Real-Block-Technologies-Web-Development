import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 hero-photo" aria-hidden />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 md:justify-center md:pb-28 md:pt-28 lg:px-8">
        <motion.p
          className="eyebrow mb-6 text-copper-light"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Resource Capital
        </motion.p>
        <motion.h1
          className="max-w-5xl font-display text-[2.6rem] leading-[1.06] font-medium text-white text-balance sm:text-6xl md:text-7xl lg:text-[4.6rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06 }}
        >
          Transforming Earth's Resources into Digital Capital
        </motion.h1>
        <motion.p
          className="mt-7 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
        >
          We create and structure capital products from the economic value of mining and mineral
          assets.
        </motion.p>
        <motion.p
          className="mt-4 max-w-2xl text-sm leading-relaxed text-white/58 md:text-base"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
        >
          From royalties and future production to critical-mineral projects, inventories and resource
          infrastructure, we help companies identify potential ways to unlock capital from the assets
          and economic rights they already control.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
        >
          <Button to="/submit-asset" variant="gold" size="lg">
            Submit Your Asset
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button to="/resource-capital" variant="outline" size="lg">
            Explore Resource Capital
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
