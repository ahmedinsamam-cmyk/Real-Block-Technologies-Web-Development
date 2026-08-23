import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { ProductCard } from '@/components/ProductCard'
import { LegalNotice } from '@/components/LegalNotice'
import { CTASection } from '@/components/CTASection'
import { RCPS } from '@/data/resourceCapital'

export function ProductsPage() {
  return (
    <PageTransition>
      <SEO
        title="Resource Capital Products"
        description="Illustrative Resource Capital Product architectures for royalties, future production, critical mineral projects, inventory and resource infrastructure."
        path="/products"
      />
      <PageHero
        eyebrow="Products"
        title="Resource Capital Products"
        description="An RCP is an illustrative financial-product architecture built around the economic rights, cash flows or financing potential associated with a real-world resource. Architectures and prototypes unless explicitly stated otherwise."
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <LegalNotice />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {RCPS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageTransition>
  )
}
