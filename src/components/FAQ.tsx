import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { HOME_FAQS } from '@/data/site'
import { SectionHeading } from '@/components/SectionHeading'

export function FAQ({
  items = HOME_FAQS,
}: {
  items?: ReadonlyArray<{ question: string; answer: string }>
}) {
  const [openId, setOpenId] = useState<number | null>(0)

  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Clear answers for mining issuers"
          description="Tokenised Royalty is the product. Tokenisation as a Service is how we deliver it."
        />
        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openId === index
            return (
              <div key={item.question} className="overflow-hidden rounded-lg border border-border bg-white">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenId(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-navy">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-cyan-dark transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-ink-muted">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
