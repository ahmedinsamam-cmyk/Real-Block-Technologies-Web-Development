import { motion } from 'framer-motion'
import { MapPin, Briefcase, Clock } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTASection } from '@/components/CTASection'
import { Button } from '@/components/Button'
import { jobs } from '@/data/content'
import { COMPANY } from '@/utils/constants'

const culture = [
  {
    title: 'Client impact first',
    text: 'We measure success by outcomes delivered for enterprise partners—not by activity for its own sake.',
  },
  {
    title: 'Continuous learning',
    text: 'Emerging technology moves quickly. We invest in curiosity, experimentation, and professional growth.',
  },
  {
    title: 'Collaborative excellence',
    text: 'Strategy, engineering, and delivery work as one team with shared ownership of quality.',
  },
]

export function CareersPage() {
  return (
    <PageTransition>
      <SEO
        title="Careers"
        description="Join Real Block Technologies. Explore open roles and a culture built around innovation, trust, and enterprise client success."
        path="/careers"
      />
      <PageHero
        eyebrow="Careers"
        title="Join a team shaping the future of digital assets"
        description="Help enterprises transform with AI, blockchain, and real-world asset technology. Build meaningful work with global impact."
      />

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Culture"
            title="How we work together"
            description="We are building a professional environment for consultants, architects, and builders who care about craft and client outcomes."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {culture.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-xl border border-border bg-surface p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <h3 className="font-display text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Open Positions"
            title="Current opportunities"
            description="Placeholder openings for launch. Update with live requisitions and application workflows as hiring needs evolve."
          />
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.article
                key={job.id}
                className="flex flex-col gap-4 rounded-xl border border-border bg-white p-6 md:flex-row md:items-center md:justify-between"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-navy">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-ink-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      {job.team}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => {
                    window.location.href = `mailto:${COMPANY.email}?subject=Application: ${job.title}`
                  }}
                >
                  Apply
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't see the right role?"
        description="We welcome introductions from exceptional talent. Share your background and interests with our team."
        primaryLabel="Contact Careers"
        primaryTo="/contact"
      />
    </PageTransition>
  )
}
