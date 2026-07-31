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
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="absolute inset-0 gradient-navy" />
      <div className="absolute inset-0 hero-photo opacity-30" />
      <div className="absolute inset-0 bg-navy/75" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          className="font-display text-4xl font-semibold text-white md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base text-white/65 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
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
