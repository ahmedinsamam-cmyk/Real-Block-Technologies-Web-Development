import { Suspense, lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage } from '@/pages/Home'

const AboutPage = lazy(() =>
  import('@/pages/About').then((m) => ({ default: m.AboutPage })),
)
const ServicesPage = lazy(() =>
  import('@/pages/Services').then((m) => ({ default: m.ServicesPage })),
)
const ServiceDetailPage = lazy(() =>
  import('@/pages/ServiceDetail').then((m) => ({ default: m.ServiceDetailPage })),
)
const RealEstateTokenizationPage = lazy(() =>
  import('@/pages/RealEstateTokenization').then((m) => ({
    default: m.RealEstateTokenizationPage,
  })),
)
const AISolutionsPage = lazy(() =>
  import('@/pages/AISolutions').then((m) => ({ default: m.AISolutionsPage })),
)
const IndustriesPage = lazy(() =>
  import('@/pages/Industries').then((m) => ({ default: m.IndustriesPage })),
)
const IndustryDetailPage = lazy(() =>
  import('@/pages/IndustryDetail').then((m) => ({ default: m.IndustryDetailPage })),
)
const CaseStudiesPage = lazy(() =>
  import('@/pages/CaseStudies').then((m) => ({ default: m.CaseStudiesPage })),
)
const SuccessStoriesPage = lazy(() =>
  import('@/pages/SuccessStories').then((m) => ({ default: m.SuccessStoriesPage })),
)
const SuccessStoryDetailPage = lazy(() =>
  import('@/pages/SuccessStoryDetail').then((m) => ({ default: m.SuccessStoryDetailPage })),
)
const InsightsPage = lazy(() =>
  import('@/pages/Insights').then((m) => ({ default: m.InsightsPage })),
)
const InsightDetailPage = lazy(() =>
  import('@/pages/InsightDetail').then((m) => ({ default: m.InsightDetailPage })),
)
const CareersPage = lazy(() =>
  import('@/pages/Careers').then((m) => ({ default: m.CareersPage })),
)
const ContactPage = lazy(() =>
  import('@/pages/Contact').then((m) => ({ default: m.ContactPage })),
)
const PrivacyPage = lazy(() =>
  import('@/pages/Privacy').then((m) => ({ default: m.PrivacyPage })),
)
const TermsPage = lazy(() =>
  import('@/pages/Terms').then((m) => ({ default: m.TermsPage })),
)
const RWAGuidePage = lazy(() =>
  import('@/pages/RWAGuide').then((m) => ({ default: m.RWAGuidePage })),
)
const ResourcesPage = lazy(() =>
  import('@/pages/Resources').then((m) => ({ default: m.ResourcesPage })),
)
const HelpCenterPage = lazy(() =>
  import('@/pages/HelpCenter').then((m) => ({ default: m.HelpCenterPage })),
)
const StrategySessionPage = lazy(() =>
  import('@/pages/StrategySession').then((m) => ({ default: m.StrategySessionPage })),
)
const ClientPortalPage = lazy(() =>
  import('@/pages/ClientPortal').then((m) => ({ default: m.ClientPortalPage })),
)
const SearchPage = lazy(() =>
  import('@/pages/Search').then((m) => ({ default: m.SearchPage })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/NotFound').then((m) => ({ default: m.NotFoundPage })),
)

function RouteFallback() {
  return (
    <div className="flex min-h-[20vh] items-center justify-center" role="status" aria-live="polite">
      <div className="h-6 w-6 animate-pulse border border-navy/20 border-t-navy" aria-hidden />
      <span className="sr-only">Loading</span>
    </div>
  )
}

export default function App() {
  const element = useRoutes([
    {
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'services', element: <ServicesPage /> },
        { path: 'services/real-estate-tokenization', element: <RealEstateTokenizationPage /> },
        { path: 'services/ai-solutions', element: <AISolutionsPage /> },
        { path: 'services/treasury-fintech', element: <Navigate to="/services/fintech" replace /> },
        { path: 'services/:slug', element: <ServiceDetailPage /> },
        { path: 'industries', element: <IndustriesPage /> },
        { path: 'industries/financial-services', element: <Navigate to="/industries/banking" replace /> },
        { path: 'industries/:slug', element: <IndustryDetailPage /> },
        { path: 'case-studies', element: <CaseStudiesPage /> },
        { path: 'success-stories', element: <SuccessStoriesPage /> },
        { path: 'success-stories/:slug', element: <SuccessStoryDetailPage /> },
        { path: 'insights', element: <InsightsPage /> },
        { path: 'insights/:slug', element: <InsightDetailPage /> },
        { path: 'careers', element: <CareersPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: 'strategy-session', element: <StrategySessionPage /> },
        { path: 'portal', element: <ClientPortalPage /> },
        { path: 'search', element: <SearchPage /> },
        { path: 'resources', element: <ResourcesPage /> },
        { path: 'resources/rwa-tokenization-guide', element: <RWAGuidePage /> },
        { path: 'help', element: <HelpCenterPage /> },
        { path: 'privacy', element: <PrivacyPage /> },
        { path: 'terms', element: <TermsPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ])

  return <Suspense fallback={<RouteFallback />}>{element}</Suspense>
}
