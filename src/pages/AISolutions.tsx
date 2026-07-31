import { motion } from 'framer-motion'
import {
  Compass,
  Workflow,
  Bot,
  BarChart3,
  LineChart,
  FileSearch,
  ArrowRight,
} from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTASection } from '@/components/CTASection'

const aiCapabilities = [
  {
    icon: Compass,
    title: 'AI Strategy Consulting',
    text: 'Define priority use cases, governance, and an enterprise AI roadmap aligned to business outcomes.',
  },
  {
    icon: Workflow,
    title: 'AI Automation',
    text: 'Automate high-volume processes across operations, finance, and service functions with measurable ROI.',
  },
  {
    icon: Bot,
    title: 'AI Agents',
    text: 'Design supervised agents that execute multi-step workflows while integrating with enterprise systems.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    text: 'Turn fragmented data into decision-ready dashboards and operating insights for leadership teams.',
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    text: 'Anticipate risk, demand, and performance shifts with models connected to real operating processes.',
  },
  {
    icon: FileSearch,
    title: 'Document Intelligence',
    text: 'Extract, classify, and action information from contracts, invoices, and unstructured enterprise documents.',
  },
]

const roadmap = [
  { phase: '01', title: 'Discover', text: 'Assess readiness, data landscape, and highest-value opportunities.' },
  { phase: '02', title: 'Design', text: 'Architect solutions, controls, and success metrics for priority use cases.' },
  { phase: '03', title: 'Pilot', text: 'Validate outcomes with controlled deployments and operational feedback.' },
  { phase: '04', title: 'Scale', text: 'Industrialize successful patterns across teams, systems, and regions.' },
  { phase: '05', title: 'Optimize', text: 'Continuously improve models, workflows, and governance as value compounds.' },
]

export function AISolutionsPage() {
  return (
    <PageTransition>
      <SEO
        title="AI Solutions"
        description="AI strategy, automation, agents, business intelligence, predictive analytics, and document intelligence for enterprise transformation."
        path="/services/ai-solutions"
      />
      <PageHero
        eyebrow="AI Solutions"
        title="Enterprise AI that moves from ambition to operating impact"
        description="We help organizations design and deploy AI capabilities that improve decision quality, automate work, and create durable competitive advantage."
      />

      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="A full spectrum of AI business solutions"
            description="From strategy to production systems, we support the capabilities enterprises need to scale AI responsibly."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {aiCapabilities.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.article
                  key={item.title}
                  className="rounded-xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="AI Transformation Roadmap"
            title="A structured path from opportunity to scale"
            description="Successful AI programs require more than models—they need sequencing, governance, and operating model change."
          />
          <div className="relative grid gap-4 md:grid-cols-5">
            {roadmap.map((step, index) => (
              <motion.div
                key={step.phase}
                className="rounded-xl border border-border bg-surface p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <div className="mb-3 flex items-center gap-2 text-gold">
                  <span className="font-display text-xl font-extrabold">{step.phase}</span>
                  {index < roadmap.length - 1 && (
                    <ArrowRight className="ml-auto hidden h-4 w-4 text-royal/40 md:block" />
                  )}
                </div>
                <h3 className="font-display font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start your AI transformation with a clear roadmap"
        description="Book a consultation to identify high-value use cases and a practical path from pilot to enterprise scale."
        secondaryLabel="Explore Tokenization"
        secondaryTo="/services/real-estate-tokenization"
      />
    </PageTransition>
  )
}
