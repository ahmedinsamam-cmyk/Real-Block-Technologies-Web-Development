import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { useLocale } from '@/components/LocaleProvider'

interface CTASectionProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryTo = '/strategy-session',
  secondaryLabel,
  secondaryTo = '/services',
}: CTASectionProps) {
  const { t } = useLocale()

  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="absolute inset-0 section-photo-c" />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          className="font-display text-4xl font-medium text-white md:text-5xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {title ?? t('cta.defaultTitle')}
        </motion.h2>
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base text-white/65 md:text-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          {description ?? t('cta.defaultBody')}
        </motion.p>
        <motion.div
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Button to={primaryTo} variant="gold" size="lg">
            {primaryLabel ?? t('cta.primary')}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button to={secondaryTo} variant="outline" size="lg">
            {secondaryLabel ?? t('cta.secondary')}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
