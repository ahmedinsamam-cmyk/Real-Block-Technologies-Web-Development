import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { FAQ } from '@/components/FAQ'
import { CTASection } from '@/components/CTASection'
import { Button } from '@/components/Button'
import { LegalNotice } from '@/components/LegalNotice'
import { Hero } from '@/sections/home/Hero'
import { COMPANY } from '@/utils/constants'
import { HOW_IT_WORKS, HOME_FAQS } from '@/data/site'
import { faqSchema } from '@/utils/schema'

export function HomePage() {
  return (
    <PageTransition>
      <SEO
        title="Real Block Technologies | Tokenised Royalty"
        description={COMPANY.proposition}
        path="/"
        jsonLd={faqSchema([...HOME_FAQS]) as Record<string, unknown>}
      />
      <Hero />

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-cyan-dark">What we do</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            One product. One service.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">{COMPANY.proposition}</p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link
              to="/product"
              className="group rounded-xl border border-border bg-white p-8 shadow-sm transition hover:border-cyan/50 hover:shadow-md"
            >
              <p className="eyebrow text-cyan-dark">Product</p>
              <h3 className="mt-3 text-2xl font-semibold text-navy">Tokenised Royalty</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                A structured digital investment product architecture for mining royalties and similar
                cash-flow rights — designed for issuers, not a public token sale.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                Explore the product
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
            <Link
              to="/service"
              className="group rounded-xl border border-border bg-white p-8 shadow-sm transition hover:border-cyan/50 hover:shadow-md"
            >
              <p className="eyebrow text-cyan-dark">Service</p>
              <h3 className="mt-3 text-2xl font-semibold text-navy">Tokenisation as a Service</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                End-to-end support to prepare, document and operate a compliant digital investment
                product — with regulated activities handled by authorized partners.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                Explore the service
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-cyan-dark">How it works</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-navy md:text-4xl">
            Economics first. Digital representation second.
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((item) => (
              <li key={item.step} className="rounded-xl border border-border bg-white p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-cyan-dark">{item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow text-cyan-dark">Built for issuers</p>
              <h2 className="mt-3 text-3xl font-semibold text-navy md:text-4xl">
                Mining companies, not a retail marketplace
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                Real Block works with resource owners who want to explore a compliant digital product
                around mineral resources, royalties and related real-world assets. We do not list tokens
                for purchase on this website, and we do not operate an exchange.
              </p>
              <div className="mt-8">
                <Button to="/about" variant="ghost">
                  About Real Block
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <LegalNotice />
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </PageTransition>
  )
}
