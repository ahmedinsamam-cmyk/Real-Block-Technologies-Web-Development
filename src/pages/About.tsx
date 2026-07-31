import { motion } from 'framer-motion'
import { Lightbulb, Shield, Award, HeartHandshake } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTASection } from '@/components/CTASection'

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
        description="Learn about Real Block Technologies—our mission, vision, values, and approach to enterprise AI, blockchain, and RWA consulting."
        path="/about"
      />
      <PageHero
        eyebrow="About Us"
        title="A consulting partner for the next era of digital assets"
        description="Real Block Technologies helps enterprises transform physical assets, financial operations, and business processes using emerging technologies."
      />

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-royal uppercase">Our Story</p>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              Built for enterprises navigating complexity
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              Organizations today face a dual mandate: modernize legacy operations while preparing for
              markets shaped by AI, blockchain, and digitally represented assets. Real Block Technologies
              was founded to bridge that gap—combining deep technology expertise with an enterprise
              consulting mindset.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              We work alongside leadership teams to translate emerging capabilities into structured
              roadmaps, secure architectures, and implementations that deliver measurable business value.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-6 sm:col-span-2">
              <h3 className="font-display text-lg font-bold text-navy">Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                To help enterprises unlock value from real-world assets and digital operations through
                trusted AI, blockchain, and technology consulting.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6 sm:col-span-2">
              <h3 className="font-display text-lg font-bold text-navy">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                A world where physical assets, financial systems, and business processes are intelligently
                connected—secure, transparent, and optimized for global scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Values"
            title="Principles that guide every engagement"
            description="Our values shape how we advise, design, and deliver for enterprise clients worldwide."
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
                    <Icon className="h-5 w-5" />
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
            description="Leadership profiles and executive biographies will be published here as our team roster is finalized."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {['Executive Leadership', 'Technology Practice', 'Client Delivery'].map((role, index) => (
              <motion.div
                key={role}
                className="rounded-xl border border-dashed border-border bg-surface p-8 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-navy/5 font-display text-lg font-bold text-navy/40">
                  RBT
                </div>
                <h3 className="font-display font-bold text-navy">{role}</h3>
                <p className="mt-2 text-sm text-ink-muted">Profile coming soon</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  )
}
