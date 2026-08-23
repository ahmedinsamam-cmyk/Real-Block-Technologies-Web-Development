import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ResourceCapitalProduct } from '@/data/resourceCapital'

export function ProductCard({ product }: { product: ResourceCapitalProduct }) {
  return (
    <article className="flex h-full flex-col border border-border bg-white p-6 md:p-7">
      <div className="flex items-center justify-between gap-3">
        <p className="eyebrow text-copper">{product.code}</p>
        <span className="border border-copper/30 bg-stone px-2 py-1 text-[0.65rem] font-semibold tracking-[0.12em] text-copper uppercase">
          {product.status}
        </span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-medium text-navy">{product.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{product.description}</p>
      <dl className="mt-5 grid gap-2 text-sm">
        <div className="flex justify-between gap-4 border-t border-border pt-2">
          <dt className="text-ink-muted">Product Type</dt>
          <dd className="font-medium text-navy">{product.productType}</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-border pt-2">
          <dt className="text-ink-muted">Underlying</dt>
          <dd className="text-right font-medium text-navy">{product.underlying}</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-border pt-2">
          <dt className="text-ink-muted">Economic Right</dt>
          <dd className="text-right font-medium text-navy">{product.economicRight}</dd>
        </div>
      </dl>
      <Link
        to={product.href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-copper"
      >
        Explore {product.code}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  )
}
