import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-14 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <p
          className={`mb-4 font-body text-[0.7rem] font-semibold tracking-[0.22em] uppercase ${
            light ? 'text-gold-light' : 'text-royal'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-4xl font-semibold leading-tight md:text-5xl ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            light ? 'text-white/65' : 'text-ink-muted'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
