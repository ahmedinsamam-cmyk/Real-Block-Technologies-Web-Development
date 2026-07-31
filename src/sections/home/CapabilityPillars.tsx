import { motion } from 'framer-motion'
import { Brain, Blocks, Coins } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'

const pillars = [
  {
    icon: Coins,
    title: 'Real World Assets',
    text: 'Digitize physical assets with structured tokenization frameworks that support ownership, access, and lifecycle management.',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    text: 'Deploy automation, agents, and analytics that elevate decision quality across finance, operations, and customer workflows.',
  },
  {
    icon: Blocks,
    title: 'Blockchain Infrastructure',
    text: 'Design secure, interoperable blockchain architectures aligned with enterprise controls and long-term scalability.',
  },
]

export function CapabilityPillars() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Focus"
          title="Where emerging technology meets enterprise reality"
          description="We specialize at the intersection of AI, blockchain, and real-world assets—helping leaders turn innovation into durable operating advantage."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                className="relative overflow-hidden rounded-xl border border-border bg-surface p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-royal/5" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{pillar.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
