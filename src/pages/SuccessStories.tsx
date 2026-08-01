import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTASection } from '@/components/CTASection'
import { successStories } from '@/data/successStories'

export function SuccessStoriesPage() {
  return (
    <PageTransition>
      <SEO
        title="Success Stories"
        description="Illustrative enterprise engagements across real estate tokenization, banking AI, manufacturing traceability, and healthcare operations from Real Block Technologies."
        path="/success-stories"
      />
      <PageHero
        eyebrow="Success Stories"
        title="Engagement patterns that show how we work"
        description="These narratives are clearly labeled illustrative engagements—designed to show approach, outcomes, and industry fit while client confidentiality is preserved."
      />

      <section className="border-b border-border bg-white py-8">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm leading-relaxed text-ink-muted">
            <span className="font-semibold text-navy">Important:</span> Stories marked “Illustrative
            engagement” describe representative scenarios based on our service model. They are not
            claims about a named client relationship unless otherwise stated.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Challenge, approach, and outcomes by industry"
            description="Explore how Real Block structures AI, FinTech, blockchain, and RWA programs for enterprise sponsors."
          />
          <div className="space-y-6">
            {successStories.map((story, index) => (
              <motion.article
                key={story.slug}
                className="border border-border bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="border-b border-border bg-navy px-6 py-5 md:flex md:items-center md:justify-between md:px-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-semibold tracking-wider text-gold uppercase">
                        {story.industry}
                      </p>
                      {story.illustrative && (
                        <span className="border border-gold/40 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-gold uppercase">
                          {story.label}
                        </span>
                      )}
                    </div>
                    <h2 className="mt-2 font-display text-xl font-medium text-white md:text-2xl">
                      {story.title}
                    </h2>
                    <p className="mt-1 text-sm text-white/60">{story.clientType}</p>
                  </div>
                  <Link
                    to={`/success-stories/${story.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold md:mt-0"
                  >
                    View story
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
                  <div>
                    <h3 className="text-xs font-semibold tracking-wider text-royal uppercase">
                      Challenge
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{story.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-wider text-royal uppercase">
                      Approach
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{story.approach}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-wider text-royal uppercase">
                      Outcomes
                    </h3>
                    <ul className="mt-2 space-y-1.5">
                      {story.outcomes.map((o) => (
                        <li key={o} className="text-sm text-ink-muted">
                          • {o}
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

      <CTASection
        title="Want to explore a similar initiative?"
        description="Book a strategy session to map your priorities to a practical engagement path."
        primaryLabel="Book a Strategy Session"
        primaryTo="/strategy-session"
      />
    </PageTransition>
  )
}
