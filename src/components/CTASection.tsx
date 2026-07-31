import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'

interface CTASectionProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export function CTASection({
  title = 'Ready to unlock the next chapter of digital transformation?',
  description = 'Partner with Real Block Technologies to design and deliver AI, blockchain, and real-world asset solutions built for enterprise outcomes.',
  primaryLabel = 'Schedule Consultation',
  primaryTo = '/contact',
  secondaryLabel = 'Explore Services',
  secondaryTo = '/services',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 gradient-hero-mesh" />
      <div className="absolute inset-0 grid-tech opacity-40" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          className="font-display text-3xl font-bold text-white md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button to={primaryTo} variant="gold" size="lg">
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button to={secondaryTo} variant="outline" size="lg">
            {secondaryLabel}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
