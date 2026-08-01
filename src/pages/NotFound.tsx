import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { Button } from '@/components/Button'

export function NotFoundPage() {
  return (
    <PageTransition>
      <SEO
        title="Page not found"
        description="The page you requested could not be found on Real Block Technologies."
        path="/404"
        noIndex
      />
      <section className="flex min-h-[70vh] items-center bg-surface px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-royal">404</p>
          <h1 className="mt-4 font-display text-4xl font-medium text-navy md:text-5xl">
            This page is not available
          </h1>
          <p className="mt-5 text-base text-ink-muted md:text-lg">
            The link may be outdated or the page may have moved. Continue to our homepage or explore
            enterprise solutions.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/" variant="primary" size="lg">
              Back to home
            </Button>
            <Button to="/services" variant="ghost" size="lg">
              View services
            </Button>
            <Link
              to="/contact"
              className="inline-flex items-center px-4 text-sm font-semibold text-navy underline-offset-4 hover:underline"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
