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
  title = 'Ready to structure a Tokenised Royalty?',
  description = 'Talk with Real Block about transforming a mineral resource, royalty or other real-world asset into a compliant digital investment product.',
  primaryLabel = 'Talk to us',
  primaryTo = '/contact',
  secondaryLabel = 'Tokenisation as a Service',
  secondaryTo = '/service',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-24">
      <div className="absolute inset-0 grid-fine opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="eyebrow text-cyan">Next step</p>
        <motion.h2
          className="mt-4 text-3xl font-semibold text-white md:text-4xl"
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
          transition={{ delay: 0.08 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
        >
          <Button to={primaryTo} variant="primary" size="lg">
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
