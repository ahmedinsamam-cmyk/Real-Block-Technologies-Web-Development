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
      className={`mb-12 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.18em] uppercase ${
            light ? 'text-gold' : 'text-royal'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-bold md:text-4xl lg:text-[2.75rem] ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? 'text-white/70' : 'text-ink-muted'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
