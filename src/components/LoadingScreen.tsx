import { motion } from 'framer-motion'

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="flex w-12 flex-col gap-1.5"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="h-1 w-full bg-white" />
          <span className="h-1 w-3/4 bg-white" />
          <span className="h-1 w-full bg-white" />
          <span className="h-1 w-1/2 bg-white/50" />
        </motion.div>
        <p className="font-body text-[0.7rem] font-semibold tracking-[0.28em] text-white/70 uppercase">
          Real Block Technologies
        </p>
      </div>
    </div>
  )
}
