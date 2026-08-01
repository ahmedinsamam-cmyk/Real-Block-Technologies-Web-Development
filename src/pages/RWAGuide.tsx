import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, CheckCircle2, Download } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/Button'
import { LeadCaptureModal } from '@/components/LeadCaptureModal'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { trackCtaClick } from '@/utils/analytics'

const chapters = [
  {
    number: '01',
    title: 'Understanding Real World Assets',
    text: 'Define RWAs, asset classes, and the economic characteristics that make digitization valuable.',
  },
  {
    number: '02',
    title: 'Why Asset Tokenization Matters',
    text: 'Explore liquidity, fractional ownership, transparency, and capital formation advantages.',
  },
  {
    number: '03',
    title: 'Tokenization Architecture',
    text: 'Map digital representation models, rights structures, and lifecycle controls.',
  },
  {
    number: '04',
    title: 'Blockchain Infrastructure',
    text: 'Evaluate protocol choices, security, interoperability, and enterprise integration patterns.',
  },
  {
    number: '05',
    title: 'Enterprise Use Cases',
    text: 'Review practical applications across real estate, finance, and specialty assets.',
  },
  {
    number: '06',
    title: 'Implementation Roadmap',
    text: 'Sequence readiness assessment, pilots, governance, and production rollout.',
  },
  {
    number: '07',
    title: 'Future Opportunities',
    text: 'Anticipate market evolution, investor expectations, and strategic optionality.',
  },
]

const GUIDE_PDF = '/resources/Enterprise_Guide_to_RWA_Tokenization.pdf'

export function RWAGuidePage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <PageTransition>
      <SEO
        title="Enterprise Guide to RWA Tokenization"
        description="Download The Enterprise Guide to Real World Asset Tokenization—architecture, use cases, and an implementation roadmap for leadership teams."
        path="/resources/rwa-tokenization-guide"
      />
      <PageHero
        eyebrow="Premium Resource"
        title="The Enterprise Guide to Real World Asset Tokenization"
        description="A practical leadership briefing covering architecture, infrastructure, use cases, and a clear implementation roadmap."
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-royal uppercase">What's Inside</p>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">Seven chapters for enterprise decision-makers</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
              Designed for executives, CFOs, real estate sponsors, and technology leaders evaluating whether
              tokenization belongs on the strategic agenda—and how to approach it responsibly.
            </p>
            <div className="mt-8 space-y-4">
              {chapters.map((chapter, index) => (
                <motion.article
                  key={chapter.number}
                  className="flex gap-4 rounded-xl border border-border bg-surface p-5"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                >
                  <span className="font-display text-xl font-extrabold text-gold">{chapter.number}</span>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy">
                      Chapter {chapter.number.replace(/^0/, '')}: {chapter.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted">{chapter.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-navy p-7 text-white shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-gold">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold">Download Free RWA Guide</h3>
              <p className="mt-3 text-sm text-white/70">
                Capture your details to receive the full PDF. Submissions are stored for CRM follow-up and
                sales enablement.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-white/80">
                {[
                  'Executive-ready framing',
                  'Architecture overview',
                  'Implementation roadmap',
                  'Enterprise use cases',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant="gold"
                size="lg"
                className="mt-7 w-full"
                onClick={() => {
                  trackCtaClick('download_rwa_guide')
                  setModalOpen(true)
                }}
              >
                <Download className="h-4 w-4" />
                Download Free RWA Guide
              </Button>
            </div>
            <div className="mt-6">
              <NewsletterSignup />
            </div>
          </aside>
        </div>
      </section>

      <LeadCaptureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Download Free RWA Guide"
        description="Enter your business details to download The Enterprise Guide to Real World Asset Tokenization."
        resourcePath={GUIDE_PDF}
        resourceId="rwa-tokenization-guide"
        resourceTitle="The Enterprise Guide to Real World Asset Tokenization"
        source="rwa_guide_download"
        fields={['name', 'email', 'company', 'industry']}
      />
    </PageTransition>
  )
}
