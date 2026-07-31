import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center gradient-navy">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="relative flex h-16 w-16 items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full border border-gold/30" />
          <div className="absolute inset-1 rounded-full border-t-2 border-royal" />
          <div className="h-3 w-3 rounded-full bg-gold" />
        </motion.div>
        <motion.p
          className="font-display text-sm font-semibold tracking-[0.2em] text-white/80 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Real Block Technologies
        </motion.p>
      </div>
    </div>
  )
}
