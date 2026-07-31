import { motion } from 'framer-motion'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTASection } from '@/components/CTASection'
import { caseStudies } from '@/data/content'

export function CaseStudiesPage() {
  return (
    <PageTransition>
      <SEO
        title="Case Studies"
        description="Explore illustrative case studies showing how Real Block Technologies helps enterprises modernize finance, digitize assets, and scale AI."
        path="/case-studies"
      />
      <PageHero
        eyebrow="Case Studies"
        title="Outcomes from enterprise technology engagements"
        description="Illustrative examples of how structured advisory and implementation create measurable progress across AI, blockchain, and digital operations."
      />
      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selected Work"
            title="Challenge. Solution. Technology. Results."
            description="These placeholders represent the style of engagements we deliver. Replace with client-approved stories as they become available."
          />
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                className="overflow-hidden rounded-2xl border border-border bg-white"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="border-b border-border bg-navy px-6 py-5 md:px-8">
                  <p className="text-xs font-semibold tracking-wider text-gold uppercase">{study.industry}</p>
                  <h2 className="mt-1 font-display text-xl font-bold text-white md:text-2xl">{study.title}</h2>
                </div>
                <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8 lg:grid-cols-4">
                  <div>
                    <h3 className="font-display text-sm font-bold text-royal uppercase">Challenge</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-royal uppercase">Solution</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-royal uppercase">Technology</h3>
                    <ul className="mt-2 space-y-1.5">
                      {study.technology.map((tech) => (
                        <li key={tech} className="text-sm text-ink-muted">
                          • {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-royal uppercase">Results</h3>
                    <ul className="mt-2 space-y-1.5">
                      {study.results.map((result) => (
                        <li key={result} className="text-sm font-medium text-navy">
                          • {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Want to discuss a similar initiative?" />
    </PageTransition>
  )
}
