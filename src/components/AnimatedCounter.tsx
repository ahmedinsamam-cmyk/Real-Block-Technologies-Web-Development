import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  label: string
  duration?: number
  light?: boolean
}

export function AnimatedCounter({
  value,
  suffix = '',
  label,
  duration = 1.6,
  light = false,
}: AnimatedCounterProps) {
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
    <div ref={ref} className={light ? 'text-center sm:text-left' : 'text-center'}>
      <div
        className={`font-display text-5xl font-medium md:text-6xl ${light ? 'text-white' : 'text-navy'}`}
        aria-hidden
      >
        {display}
        <span className={light ? 'text-gold-light' : 'text-royal'}>{suffix}</span>
      </div>
      <span className="sr-only">
        {value}
        {suffix} {label}
      </span>
      <p className={`mt-3 text-sm md:text-base ${light ? 'text-white/55' : 'text-ink-muted'}`}>
        {label}
      </p>
    </div>
  )
}
