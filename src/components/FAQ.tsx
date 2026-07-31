import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/data/content'
import { SectionHeading } from '@/components/SectionHeading'

interface FaqItem {
  question: string
  answer: string
}

export function FAQ({
  items = faqs,
  eyebrow = 'Enterprise FAQ',
  title = 'Frequently asked questions',
  description = 'Clear answers for executives evaluating AI, blockchain, and real-world asset initiatives.',
}: {
  items?: FaqItem[]
  eyebrow?: string
  title?: string
  description?: string
}) {
  const [openId, setOpenId] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section className="bg-surface py-20 md:py-24" aria-label={title}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openId === index
            const panelId = `${baseId}-panel-${index}`
            const buttonId = `${baseId}-button-${index}`
            return (
              <div key={item.question} className="overflow-hidden border border-border bg-white">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-navy/25"
                    onClick={() => setOpenId(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="font-display text-base font-medium text-navy md:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-royal transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
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
