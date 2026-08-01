import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { deliveryProcess } from '@/data/process'
import { SectionHeading } from '@/components/SectionHeading'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function ProcessTimeline() {
  const [active, setActive] = useState(0)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const current = deliveryProcess[active]

  return (
    <section className="bg-navy py-20 md:py-28" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Our process"
          title="From discovery to continuous optimization"
          description="A transparent delivery timeline designed for enterprise sponsors who need predictability, control, and measurable progress."
        />

        <h2 id="process-heading" className="sr-only">
          Delivery process timeline
        </h2>

        {/* Desktop interactive timeline */}
        {isDesktop ? (
          <div className="mt-4">
            <ol className="relative grid grid-cols-7 gap-3" aria-label="Process steps">
              <div
                className="absolute top-5 right-0 left-0 h-px bg-white/15"
                aria-hidden
              />
              {deliveryProcess.map((step, index) => {
                const isActive = active === index
                return (
                  <li key={step.id} className="relative">
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      className="group flex w-full flex-col items-start text-left focus-visible:outline-none"
                      aria-current={isActive ? 'step' : undefined}
                    >
                      <span
                        className={`relative z-10 flex h-10 w-10 items-center justify-center border text-sm font-semibold transition-colors ${
                          isActive
                            ? 'border-gold bg-gold text-navy'
                            : 'border-white/25 bg-navy text-white/70 group-hover:border-gold-light/60 group-hover:text-white'
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span
                        className={`mt-4 font-display text-base font-medium transition-colors ${
                          isActive ? 'text-white' : 'text-white/55 group-hover:text-white/80'
                        }`}
                      >
                        {step.title}
                      </span>
                      <span className="mt-1 text-xs text-white/35">{step.duration}</span>
                    </button>
                  </li>
                )
              })}
            </ol>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className="mt-12 border border-white/10 bg-white/[0.03] p-8 md:p-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="eyebrow text-gold-light">
                  Step {active + 1} of {deliveryProcess.length}
                </p>
                <h3 className="mt-3 font-display text-3xl font-medium text-white">{current.title}</h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/65">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* Mobile vertical timeline */
          <ol className="relative mt-4 space-y-0 border-l border-white/15 pl-6">
            {deliveryProcess.map((step, index) => (
              <li key={step.id} className="relative pb-10 last:pb-0">
                <span
                  className="absolute top-0 -left-[1.9rem] flex h-8 w-8 items-center justify-center border border-gold/50 bg-navy text-xs font-semibold text-gold-light"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <p className="text-xs tracking-wide text-white/40 uppercase">{step.duration}</p>
                <h3 className="mt-1 font-display text-xl font-medium text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  )
}
