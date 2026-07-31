import { useRoutes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage } from '@/pages/Home'
import { AboutPage } from '@/pages/About'
import { ServicesPage } from '@/pages/Services'
import { ServiceDetailPage } from '@/pages/ServiceDetail'
import { RealEstateTokenizationPage } from '@/pages/RealEstateTokenization'
import { AISolutionsPage } from '@/pages/AISolutions'
import { IndustriesPage } from '@/pages/Industries'
import { IndustryDetailPage } from '@/pages/IndustryDetail'
import { CaseStudiesPage } from '@/pages/CaseStudies'
import { InsightsPage } from '@/pages/Insights'
import { CareersPage } from '@/pages/Careers'
import { ContactPage } from '@/pages/Contact'
import { PrivacyPage } from '@/pages/Privacy'
import { TermsPage } from '@/pages/Terms'
import { RWAGuidePage } from '@/pages/RWAGuide'
import { ResourcesPage } from '@/pages/Resources'
import { HelpCenterPage } from '@/pages/HelpCenter'

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
        { path: 'services/:slug', element: <ServiceDetailPage /> },
        { path: 'industries', element: <IndustriesPage /> },
        { path: 'industries/:slug', element: <IndustryDetailPage /> },
        { path: 'case-studies', element: <CaseStudiesPage /> },
        { path: 'insights', element: <InsightsPage /> },
        { path: 'careers', element: <CareersPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: 'resources', element: <ResourcesPage /> },
        { path: 'resources/rwa-tokenization-guide', element: <RWAGuidePage /> },
        { path: 'help', element: <HelpCenterPage /> },
        { path: 'privacy', element: <PrivacyPage /> },
        { path: 'terms', element: <TermsPage /> },
        { path: '*', element: <HomePage /> },
      ],
    },
  ])

  return element
}
