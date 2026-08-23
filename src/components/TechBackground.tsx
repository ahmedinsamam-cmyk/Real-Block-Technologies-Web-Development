import { motion } from 'framer-motion'

/** Atmospheric institutional backdrop — dusk cityscape, no blue glow */
export function TechBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 hero-photo" />
      <div className="absolute inset-0 grid-tech opacity-25" />
      <motion.div
        className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-royal/15 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
