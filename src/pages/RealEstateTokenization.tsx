import { motion } from 'framer-motion'
import { Building2, Palette, Landmark, Home, BadgeCheck, CheckCircle2 } from 'lucide-react'
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
  {
    icon: Building2,
    title: 'Qualify the asset',
    text: 'Confirm fit for real estate, artworks, antiques, rent share, or membership—never financial assets.',
  },
  {
    icon: Home,
    title: 'Design TaaS model',
    text: 'Define digital representation, access rules, and distribution workflows.',
  },
  {
    icon: BadgeCheck,
    title: 'Tokenize & control',
    text: 'Issue governed on-chain representations with operational controls.',
  },
  {
    icon: Landmark,
    title: 'Distribute value',
    text: 'Enable rent-share distribution or membership access services.',
  },
  {
    icon: Palette,
    title: 'Operate & report',
    text: 'Run ongoing reporting, servicing, and lifecycle events.',
  },
]

const benefits = detail.benefits

const useCases = [
  'Real estate digitization programs',
  'Artwork and antique tokenization',
  'Rent-share distribution models',
  'Membership and access services',
]

export function RealEstateTokenizationPage() {
  return (
    <PageTransition>
      <SEO
        title="RWA Tokenization (TaaS)"
        description="Tokenization-as-a-Service for real estate, artworks, antiques, rent-share distribution, and membership services—not financial assets."
        path="/services/real-estate-tokenization"
        jsonLd={faqSchema(detail.faqs)}
      />
      <PageHero
        eyebrow="Tokenization-as-a-Service"
        title="RWA tokenization for physical assets—not financial instruments"
        description="We provide TaaS for real estate, artworks, antiques, rent-share distribution, and membership services. We do not tokenize financial assets."
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
            <h2 className="mt-4 font-display text-3xl font-medium text-navy">Tokenization-as-a-Service</h2>
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
                eyebrow="What is TaaS?"
                title="Tokenization services for real-world physical assets"
                description="Tokenization-as-a-Service lets you digitize qualifying physical and experiential assets without building a full stack in-house—designed for practical enterprise delivery."
              />
            </div>
            <div className="border border-border bg-surface p-8">
              <h3 className="font-display text-lg font-bold text-navy">What we tokenize</h3>
              <ul className="mt-5 space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-5 text-sm font-semibold text-navy">
                Out of scope: financial assets, securities, and capital-markets instruments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TaaS process"
            title="From physical asset to operated digital service"
            description="A clear workflow for real estate, collectibles, rent share, and membership programs."
          />
          <div className="grid gap-4 md:grid-cols-5">
            {workflow.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  className="relative border border-border bg-white p-5 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center bg-navy text-gold">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="text-[0.65rem] font-semibold tracking-wider text-royal uppercase">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 font-display text-sm font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">{step.text}</p>
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
              eyebrow="Use cases"
              title="Where our TaaS model creates leverage"
              description="We help sponsors evaluate fit and operating models before committing to technology decisions."
            />
            <ul className="mt-2 space-y-3">
              {useCases.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border border-border bg-surface px-4 py-3 text-sm font-medium text-navy"
                >
                  <span className="h-2 w-2 bg-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border bg-navy p-8 text-white md:p-10">
            <h3 className="font-display text-2xl font-bold">Scoped enterprise delivery</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              TaaS and advisory engagements are proposal-based—with clear milestones, documentation,
              and operating design your team can run after go-live.
            </p>
            <Button to="/contact#consultation" variant="gold" className="mt-8">
              Discuss a tokenization initiative
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-medium text-navy">Related resources</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {detail.relatedResources.map((resource) => (
              <li key={resource.href}>
                <Link
                  to={resource.href}
                  className="inline-flex border border-border bg-white px-4 py-2.5 text-sm font-semibold text-navy transition hover:border-navy"
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
        title="Ready to evaluate TaaS for your assets?"
        description="Schedule a consultation to explore real estate, artworks, antiques, rent share, or membership tokenization."
        primaryTo="/contact#consultation"
        secondaryLabel="View AI Solutions"
        secondaryTo="/services/ai-solutions"
      />
    </PageTransition>
  )
}
