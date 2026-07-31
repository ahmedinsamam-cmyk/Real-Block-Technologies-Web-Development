import { motion } from 'framer-motion'
import { Building2, FileDigit, Coins, Users, Settings2, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTASection } from '@/components/CTASection'
import { FAQ } from '@/components/FAQ'
import { Button } from '@/components/Button'
import { serviceDetailsById } from '@/data/serviceDetails'
import { faqSchema } from '@/utils/schema'

const detail = serviceDetailsById.rwa

const workflow = [
  { icon: Building2, title: 'Physical Asset', text: 'Identify and prepare real-world assets for digitization.' },
  { icon: FileDigit, title: 'Digital Representation', text: 'Create structured digital records and ownership models.' },
  { icon: Coins, title: 'Blockchain Token', text: 'Issue compliant on-chain representations with controls.' },
  { icon: Users, title: 'Investor Access', text: 'Enable governed participation and capital pathways.' },
  { icon: Settings2, title: 'Asset Management', text: 'Operate ongoing reporting, servicing, and lifecycle events.' },
]

const benefits = [
  'Improved liquidity pathways for traditionally illiquid assets',
  'Greater transparency across ownership and transaction history',
  'Fractionalization models that expand investor access',
  'Operational efficiency through digital lifecycle management',
  'Stronger readiness for institutional digital asset markets',
]

const useCases = [
  'Commercial real estate portfolios',
  'Income-producing property platforms',
  'Infrastructure and specialty assets',
  'Institutional co-investment structures',
]

export function RealEstateTokenizationPage() {
  return (
    <PageTransition>
      <SEO
        title="Real Estate Tokenization"
        description="Learn how Real Block Technologies helps enterprises tokenize real-world assets—from digital representation to investor access and asset management."
        path="/services/real-estate-tokenization"
        jsonLd={faqSchema(detail.faqs)}
      />
      <PageHero
        eyebrow="RWA Tokenization"
        title="Real estate tokenization for enterprise-grade asset programs"
        description="Digitize and manage physical assets using blockchain infrastructure designed for compliance, investor access, and long-term operations."
      />

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="eyebrow text-royal">The problem</p>
            <h2 className="mt-4 font-display text-3xl font-medium text-navy">Where value is trapped</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">{detail.problem}</p>
          </div>
          <div>
            <p className="eyebrow text-royal">Our solution</p>
            <h2 className="mt-4 font-display text-3xl font-medium text-navy">How we engage</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">{detail.solution}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="What is asset tokenization?"
                title="Turning physical value into programmable digital infrastructure"
                description="Asset tokenization creates a digital representation of a real-world asset on blockchain, enabling structured ownership, transferability, and managed access while retaining the economic link to the underlying asset."
              />
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h3 className="font-display text-lg font-bold text-navy">Key benefits</h3>
              <ul className="mt-5 space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Business Process"
            title="From physical asset to managed digital market access"
            description="Our tokenization workflow connects legal, technical, and operational considerations into a coherent enterprise process."
          />
          <div className="grid gap-4 md:grid-cols-5">
            {workflow.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  className="relative rounded-xl border border-border bg-white p-5 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-[0.65rem] font-semibold tracking-wider text-royal uppercase">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 font-display text-sm font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">{step.text}</p>
                  {index < workflow.length - 1 && (
                    <div className="absolute top-1/2 -right-2 hidden h-px w-4 bg-gold/60 md:block" aria-hidden />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Use Cases"
              title="Where tokenization creates strategic leverage"
              description="We help organizations evaluate fit, readiness, and operating models before committing to technology decisions."
            />
            <ul className="mt-2 space-y-3">
              {useCases.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-navy"
                >
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-navy p-8 text-white md:p-10">
            <h3 className="font-display text-2xl font-bold">Investment opportunities</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Tokenization can open new pathways for capital formation, co-investment, and secondary
              liquidity—when structured with clear rights, governance, and investor experience design.
              We help sponsors and platforms assess opportunity design without overselling technology as a
              substitute for sound asset fundamentals.
            </p>
            <Button to="/contact" variant="gold" className="mt-8">
              Discuss a tokenization initiative
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-medium text-navy">Related resources</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {detail.relatedResources.map((resource) => (
              <li key={resource.href}>
                <Link
                  to={resource.href}
                  className="inline-flex border border-border px-4 py-2.5 text-sm font-semibold text-navy transition hover:border-navy hover:bg-surface"
                >
                  {resource.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ items={detail.faqs} />

      <CTASection
        title="Ready to evaluate asset tokenization for your portfolio?"
        description="Schedule a consultation to explore readiness, architecture options, and a practical implementation path."
        primaryTo="/contact#consultation"
        secondaryLabel="View AI Solutions"
        secondaryTo="/services/ai-solutions"
      />
    </PageTransition>
  )
}
