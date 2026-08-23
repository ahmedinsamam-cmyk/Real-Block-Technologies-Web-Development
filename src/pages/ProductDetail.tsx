import { Navigate, useParams } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { LegalNotice } from '@/components/LegalNotice'
import { Button } from '@/components/Button'
import { CTASection } from '@/components/CTASection'
import { getRcpBySlug } from '@/data/resourceCapital'

const CASHFLOWS = [
  { label: 'Illustrative production', value: '120 kt copper / year' },
  { label: 'Illustrative commodity price', value: 'USD 9,000 / t' },
  { label: 'Illustrative gross revenue', value: 'USD 1.08 bn' },
  { label: 'Illustrative royalty rate', value: '2.0% NSR' },
  { label: 'Illustrative royalty cash flow', value: 'USD 21.6 m / year' },
  { label: 'Operating assumption', value: 'Steady-state producing mine' },
]

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = slug ? getRcpBySlug(slug) : undefined
  if (!product) return <Navigate to="/products" replace />

  const isRoyalty = product.slug === 'rcp-01'

  return (
    <PageTransition>
      <SEO title={`${product.code} ${product.name}`} description={product.description} path={product.href} />
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <div className="absolute inset-0 hero-photo" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-copper-light">{product.code}</p>
          <span className="mt-4 inline-block border border-white/30 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.16em] text-white uppercase">
            Illustrative prototype
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-medium text-white md:text-6xl">{product.name}</h1>
          <p className="mt-6 max-w-2xl text-white/70">
            {isRoyalty
              ? 'Demonstrating how a copper royalty could potentially be transformed into a structured Resource Capital Product.'
              : product.description}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
          <LegalNotice text={product.legalConcept} />
          <p className="text-lg leading-relaxed text-ink-muted">{product.description}</p>
          <dl className="grid gap-4 sm:grid-cols-2">
            {[
              ['Product type', product.productType],
              ['Underlying', product.underlying],
              ['Economic right', product.economicRight],
              ['Status', product.status],
            ].map(([k, v]) => (
              <div key={k} className="border border-border p-4">
                <dt className="text-xs tracking-wider text-ink-muted uppercase">{k}</dt>
                <dd className="mt-1 font-semibold text-navy">{v}</dd>
              </div>
            ))}
          </dl>
          <div>
            <h2 className="font-display text-2xl text-navy">Potential applications</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {product.applications.map((item) => (
                <li key={item} className="border border-border px-4 py-3 text-sm text-navy">{item}</li>
              ))}
            </ul>
          </div>
          {product.minerals && (
            <div>
              <h2 className="font-display text-2xl text-navy">Target minerals</h2>
              <p className="mt-3 text-sm text-ink-muted">{product.minerals.join(', ')}</p>
            </div>
          )}
          {product.infrastructure && (
            <div>
              <h2 className="font-display text-2xl text-navy">Potential infrastructure</h2>
              <p className="mt-3 text-sm text-ink-muted">{product.infrastructure.join(', ')}</p>
            </div>
          )}

          {isRoyalty && (
            <>
              <div>
                <h2 className="font-display text-3xl text-navy">Asset overview</h2>
                <p className="mt-3 text-ink-muted">
                  Illustrative fictional asset: Copper Project Alpha, a producing open-pit copper operation used only to demonstrate royalty analysis. Figures below are hypothetical.
                </p>
              </div>
              <div>
                <h2 className="font-display text-3xl text-navy">Economic right</h2>
                <p className="mt-3 text-ink-muted">
                  An illustrative net smelter return royalty over a defined share of payable copper production. Not a live royalty interest and not available for purchase.
                </p>
              </div>
              <div>
                <h2 className="font-display text-3xl text-navy">Cash flow model</h2>
                <p className="mt-2 text-xs font-semibold tracking-wider text-copper uppercase">Illustrative example only</p>
                <div className="mt-4 overflow-x-auto border border-border">
                  <table className="w-full text-sm">
                    <tbody>
                      {CASHFLOWS.map((row) => (
                        <tr key={row.label} className="border-b border-border">
                          <th className="px-4 py-3 text-left font-medium text-ink-muted">{row.label}</th>
                          <td className="px-4 py-3 text-right font-semibold text-navy">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-ink-muted">Scenario analysis would vary price, volume, payability and downtime. No expected return is shown because this is not an investment product.</p>
              </div>
              <div>
                <h2 className="font-display text-3xl text-navy">Product structure</h2>
                <ol className="mt-6 grid gap-3 sm:grid-cols-5">
                  {['RESOURCE', 'ROYALTY', 'STRUCTURE', 'RCP-01', 'DIGITAL RECORD'].map((step) => (
                    <li key={step} className="border border-border bg-stone px-3 py-4 text-center text-sm font-semibold text-navy">{step}</li>
                  ))}
                </ol>
              </div>
            </>
          )}

          <div className="flex flex-wrap gap-3">
            <Button to="/contact" variant="primary" size="lg">Discuss This Structure</Button>
            <Button to="/submit-asset" variant="ghost" size="lg">Submit Your Asset</Button>
          </div>
        </div>
      </section>
      <CTASection />
    </PageTransition>
  )
}
