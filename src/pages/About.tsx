import { motion } from 'framer-motion'
import { Lightbulb, Shield, Award, HeartHandshake } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTASection } from '@/components/CTASection'
import { PlatformExpertise } from '@/components/PlatformExpertise'
import { LinkedInIcon } from '@/components/icons/SocialIcons'
import { LEADERSHIP } from '@/utils/constants'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'We pursue practical innovation—technology choices that solve real enterprise problems and create durable advantage.',
  },
  {
    icon: Shield,
    title: 'Trust',
    text: 'We operate with transparency, security awareness, and clear communication at every stage of engagement.',
  },
  {
    icon: Award,
    title: 'Excellence',
    text: 'We hold ourselves to high standards of craftsmanship, delivery discipline, and professional rigor.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Success',
    text: 'We measure success by client outcomes—adoption, efficiency, risk reduction, and strategic clarity.',
  },
]

export function AboutPage() {
  return (
    <PageTransition>
      <SEO
        title="About Us"
        description="Learn about Real Block Technologies—our mission, leadership, and approach to AI, FinTech, enterprise platforms, and RWA Tokenization-as-a-Service."
        path="/about"
      />
      <PageHero
        eyebrow="About Us"
        title="A consulting partner for practical enterprise digital programs"
        description="Real Block Technologies helps enterprises modernize operations with AI, FinTech, platform professional services, and RWA Tokenization-as-a-Service."
      />

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-royal uppercase">Our Story</p>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              Built for enterprises that need scoped, outcome-led delivery
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              Organizations face a dual mandate: modernize operations while preparing for markets shaped
              by AI, blockchain, and digitally represented assets. Real Block Technologies was founded
              to bridge that gap—with professional services that deliver clear outcomes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              We partner with leadership teams across platforms, automation, FinTech, and
              Tokenization-as-a-Service for qualifying physical assets—with clear deliverables and
              practical adoption.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-6 sm:col-span-2">
              <h3 className="font-display text-lg font-bold text-navy">Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                To help enterprises unlock value from real-world assets and digital operations through
                trusted AI, FinTech, platform consulting, and tokenization services.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6 sm:col-span-2">
              <h3 className="font-display text-lg font-bold text-navy">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                A world where physical assets, financial systems, and business processes are intelligently
                connected—secure, transparent, and optimized for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PlatformExpertise />

      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Values"
            title="Principles that guide every engagement"
            description="Our values shape how we advise, design, and deliver for enterprise clients."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="rounded-xl border border-border bg-white p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Leadership team"
            description="Meet the founder leading Real Block Technologies."
            align="left"
          />
          <div className="mt-2 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((leader, index) => (
              <motion.article
                key={leader.name}
                className="overflow-hidden border border-border bg-surface"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <img
                  src={leader.photo}
                  alt={`${leader.name}, ${leader.role}`}
                  className="aspect-square w-full object-cover object-top"
                  width={512}
                  height={512}
                  loading="lazy"
                />
                <div className="p-6 md:p-7">
                  <h3 className="font-display text-2xl font-medium text-navy">{leader.name}</h3>
                  <p className="mt-1 text-sm font-semibold tracking-wide text-royal uppercase">
                    {leader.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">{leader.bio}</p>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-royal"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    LinkedIn profile
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to scope a practical enterprise engagement?"
        description="Book a discovery consultation. We will map clear deliverables and the right engagement path for your team."
        primaryTo="/contact#consultation"
      />
    </PageTransition>
  )
}
