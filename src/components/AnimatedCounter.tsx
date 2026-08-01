import { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  label: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = '', label, duration = 1.6 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start: number | null = null
    let frame = 0

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isInView, value, duration])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <div className="font-display text-5xl font-semibold text-navy md:text-6xl">
        {display}
        <span className="text-royal">{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-ink-muted md:text-base">{label}</p>
    </motion.div>
  )
}
