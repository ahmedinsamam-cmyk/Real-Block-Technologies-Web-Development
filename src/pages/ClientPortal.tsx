import { Link } from 'react-router-dom'
import { Lock, ArrowRight, LayoutDashboard, FileText, MessageSquare } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageTransition } from '@/components/PageTransition'
import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/Button'

const upcoming = [
  {
    icon: LayoutDashboard,
    title: 'Engagement dashboard',
    description: 'Status, milestones, and shared artifacts for active programs.',
  },
  {
    icon: FileText,
    title: 'Document workspace',
    description: 'Secure access to statements of work, deliverables, and reports.',
  },
  {
    icon: MessageSquare,
    title: 'Advisor messaging',
    description: 'Direct channel to your Real Block delivery and advisory team.',
  },
]

export function ClientPortalPage() {
  return (
    <PageTransition>
      <SEO
        title="Client Portal"
        description="Client portal placeholder for Real Block Technologies engagement dashboards, documents, and advisor collaboration."
        path="/portal"
        noIndex
      />
      <PageHero
        eyebrow="Client Portal"
        title="Your future engagement workspace"
        description="A secure client portal is on our product roadmap. This page reserves the experience for authenticated access to programs, documents, and collaboration."
      />

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="border border-border bg-white p-8 text-center md:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center bg-navy text-white">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-3xl font-medium text-navy">Coming soon</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
              Sign-in, SSO, and project workspaces will live here. Until launch, active clients
              continue collaborating through our engagement channels and shared repositories.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/contact" variant="primary">
                Contact your advisor
              </Button>
              <Button to="/strategy-session" variant="outline">
                Book a strategy session
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {upcoming.map(({ icon: Icon, title, description }) => (
              <div key={title} className="border border-border bg-white p-5">
                <Icon className="h-5 w-5 text-royal" />
                <h3 className="mt-3 font-display text-lg font-medium text-navy">{title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{description}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-ink-muted">
            Looking for public resources instead?{' '}
            <Link to="/resources" className="font-semibold text-navy hover:text-royal">
              Browse the resource library
              <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
            </Link>
          </p>
        </div>
      </section>
    </PageTransition>
  )
}
