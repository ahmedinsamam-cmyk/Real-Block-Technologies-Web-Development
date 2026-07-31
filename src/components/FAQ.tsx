import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/data/content'
import { SectionHeading } from '@/components/SectionHeading'

export function FAQ({ items = faqs }: { items?: typeof faqs }) {
  const [openId, setOpenId] = useState<number | null>(0)

  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Enterprise FAQ"
          title="Frequently asked questions"
          description="Clear answers for executives evaluating AI, blockchain, and real-world asset initiatives."
        />
        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openId === index
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-lg border border-border bg-white"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenId(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-navy">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-royal transition-transform duration-300 ${
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
