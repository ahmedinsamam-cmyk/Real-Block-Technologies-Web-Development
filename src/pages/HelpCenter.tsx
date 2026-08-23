import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, LifeBuoy, BookOpen, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { FAQ } from '@/components/FAQ'
import { Button } from '@/components/Button'
import { faqs } from '@/data/content'
import { faqSchema, injectJsonLd } from '@/utils/schema'
import { trackEvent } from '@/utils/analytics'

const articles = [
  {
    id: 'getting-started',
    title: 'Getting started with Real Block Technologies',
    category: 'Overview',
    summary: 'How enterprise teams engage us for advisory and implementation programs.',
    body: 'Share your objectives via Contact or book a discovery consultation. We scope outcomes, architecture options, and a practical delivery plan.',
  },
  {
    id: 'rwa-readiness',
    title: 'Is my organization ready for RWA tokenization?',
    category: 'RWA',
    summary: 'Readiness signals spanning asset quality, governance, and investor access design.',
    body: 'Readiness typically includes clear asset rights, compliance considerations, operating processes, and a technology architecture aligned to long-term management—not just a token issuance event.',
  },
  {
    id: 'ai-pilot',
    title: 'How to scope an enterprise AI pilot',
    category: 'AI',
    summary: 'Choose high-value workflows, define success metrics, and plan for scale.',
    body: 'Successful pilots start with a constrained workflow, measurable KPIs, data access, and clear human oversight. We help teams avoid demo-only experiments.',
  },
  {
    id: 'security',
    title: 'How we handle information you submit',
    category: 'Support',
    summary: 'Leads are processed for sales follow-up and protected with validation and spam controls.',
    body: 'Form submissions are validated, sanitized, rate-limited, and prepared for HubSpot CRM sync. Review our Privacy Policy for details. Future Zendesk integration can support ticket workflows.',
  },
]

export function HelpCenterPage() {
  const [query, setQuery] = useState('')

  useEffect(() => {
    injectJsonLd('faq-schema', faqSchema(faqs.slice(0, 6)))
    trackEvent({ event: 'help_center_view', label: 'help_center' })
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return articles
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <PageTransition>
      <SEO
        title="Help Center"
        description="FAQs and knowledge articles about AI consulting, RWA tokenization, blockchain advisory, and working with Real Block Technologies."
        path="/help"
      />
      <PageHero
        eyebrow="Help Center"
        title="Answers for enterprise buyers and partners"
        description="Browse FAQs and knowledge articles. Need a human conversation? Contact support or book a consultation."
      />

      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <label className="relative block">
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-ink-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search help articles..."
              className="w-full rounded-xl border border-border bg-surface py-3 pr-4 pl-10 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/20"
            />
          </label>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button to="/contact" variant="ghost" size="sm">
              <MessageSquare className="h-4 w-4" />
              Contact support
            </Button>
            <Button to="/contact#consultation" variant="primary" size="sm">
              <LifeBuoy className="h-4 w-4" />
              Book consultation
            </Button>
          </div>
          <p className="mt-3 text-xs text-ink-muted">Future integration: Zendesk help desk & ticketing.</p>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Knowledge Base"
            title="Helpful articles"
            description="CMS-ready articles that can later sync from Sanity or Zendesk Guide."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((article, index) => (
              <motion.article
                key={article.id}
                className="rounded-xl border border-border bg-white p-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="mb-3 flex items-center gap-2 text-royal">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-[0.7rem] font-semibold tracking-wider uppercase">{article.category}</span>
                </div>
                <h2 className="font-display text-lg font-bold text-navy">{article.title}</h2>
                <p className="mt-2 text-sm text-ink-muted">{article.summary}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink">{article.body}</p>
              </motion.article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-sm text-ink-muted">No articles matched your search.</p>
          )}
          <p className="mt-8 text-center text-sm text-ink-muted">
            Looking for downloadable assets? Visit the{' '}
            <Link to="/resources" className="font-semibold text-royal hover:text-royal-dark">
              Resource Library
            </Link>
            .
          </p>
        </div>
      </section>

      <FAQ />
    </PageTransition>
  )
}
