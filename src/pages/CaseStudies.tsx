import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTASection } from '@/components/CTASection'
import { Button } from '@/components/Button'
import { LeadCaptureModal } from '@/components/LeadCaptureModal'
import { caseStudies, type CaseStudy } from '@/data/content'
import { trackCtaClick } from '@/utils/analytics'

export function CaseStudiesPage() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null)

  return (
    <PageTransition>
      <SEO
        title="Case Studies"
        description="Download enterprise case studies on AI automation, real estate tokenization, and digital transformation from Real Block Technologies."
        path="/case-studies"
      />
      <PageHero
        eyebrow="Case Study Library"
        title="Outcomes from enterprise technology engagements"
        description="Explore challenge, solution, technology, and business impact—then download the full PDF after a short lead capture form. For labeled illustrative narratives, see Success Stories."
      />
      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Downloadable Resources"
            title="Challenge. Solution. Technology. Business Impact."
            description="Each study summarizes the engagement. Request the full PDF to receive a deeper walkthrough for your leadership team."
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
                <div className="border-b border-border bg-navy px-6 py-5 md:flex md:items-center md:justify-between md:px-8">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-gold uppercase">
                      {study.industry}
                    </p>
                    <h2 className="mt-1 font-display text-xl font-bold text-white md:text-2xl">
                      {study.title}
                    </h2>
                  </div>
                  {study.pdfPath && (
                    <Button
                      variant="gold"
                      size="sm"
                      className="mt-4 md:mt-0"
                      onClick={() => {
                        trackCtaClick(`download_case_study_${study.id}`)
                        setActiveStudy(study)
                      }}
                    >
                      <Download className="h-4 w-4" />
                      Download Full Case Study PDF
                    </Button>
                  )}
                </div>
                <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8 lg:grid-cols-3">
                  <div>
                    <h3 className="font-display text-sm font-bold text-royal uppercase">Challenge</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-royal uppercase">Solution</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-royal uppercase">Technology Used</h3>
                    <ul className="mt-2 space-y-1.5">
                      {study.technology.map((tech) => (
                        <li key={tech} className="text-sm text-ink-muted">
                          • {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-t border-border bg-surface px-6 py-5 md:px-8">
                  <h3 className="font-display text-sm font-bold text-navy uppercase">Business Impact</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{study.businessImpact}</p>
                  {study.results.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {study.results.map((result) => (
                        <li
                          key={result}
                          className="rounded-md border border-border bg-white px-3 py-1.5 text-xs font-semibold text-navy"
                        >
                          {result}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Want to discuss a similar initiative?" primaryLabel="Book a Free Consultation" />

      {activeStudy?.pdfPath && (
        <LeadCaptureModal
          open={Boolean(activeStudy)}
          onClose={() => setActiveStudy(null)}
          title="Download Full Case Study PDF"
          description={`Get the complete ${activeStudy.title} brief for your leadership team.`}
          resourcePath={activeStudy.pdfPath}
          resourceId={activeStudy.id}
          resourceTitle={activeStudy.title}
          source="case_study_download"
          fields={['name', 'company', 'email', 'jobTitle']}
        />
      )}
    </PageTransition>
  )
}
