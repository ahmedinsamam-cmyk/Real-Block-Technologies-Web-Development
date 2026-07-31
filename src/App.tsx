import { useRoutes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage } from '@/pages/Home'
import { AboutPage } from '@/pages/About'
import { ServicesPage } from '@/pages/Services'
import { RealEstateTokenizationPage } from '@/pages/RealEstateTokenization'
import { AISolutionsPage } from '@/pages/AISolutions'
import { IndustriesPage } from '@/pages/Industries'
import { CaseStudiesPage } from '@/pages/CaseStudies'
import { InsightsPage } from '@/pages/Insights'
import { CareersPage } from '@/pages/Careers'
import { ContactPage } from '@/pages/Contact'
import { PrivacyPage } from '@/pages/Privacy'
import { TermsPage } from '@/pages/Terms'

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
        { path: 'industries', element: <IndustriesPage /> },
        { path: 'case-studies', element: <CaseStudiesPage /> },
        { path: 'insights', element: <InsightsPage /> },
        { path: 'careers', element: <CareersPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: 'privacy', element: <PrivacyPage /> },
        { path: 'terms', element: <TermsPage /> },
        { path: '*', element: <HomePage /> },
      ],
    },
  ])

  return element
}
