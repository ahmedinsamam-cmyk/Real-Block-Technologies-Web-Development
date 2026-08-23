import { Navigate, useRoutes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage } from '@/pages/Home'
import { AboutPage } from '@/pages/About'
import { ServicesPage } from '@/pages/Services'
import { ProductsPage } from '@/pages/Products'
import { ProductDetailPage } from '@/pages/ProductDetail'
import { ResourceCapitalPage } from '@/pages/ResourceCapital'
import { DigitalAssetRegistryPage } from '@/pages/DigitalAssetRegistry'
import { DigitalCapitalPage } from '@/pages/DigitalCapital'
import { MiningCompaniesPage } from '@/pages/MiningCompanies'
import { SubmitAssetPage } from '@/pages/SubmitAsset'
import { InsightsPage } from '@/pages/Insights'
import { InsightArticlePage } from '@/pages/InsightArticle'
import { ContactPage } from '@/pages/Contact'
import { PrivacyPage } from '@/pages/Privacy'
import { TermsPage } from '@/pages/Terms'

export default function App() {
  const element = useRoutes([
    {
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'resource-capital', element: <ResourceCapitalPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'products/:slug', element: <ProductDetailPage /> },
        { path: 'services', element: <ServicesPage /> },
        { path: 'digital-asset-registry', element: <DigitalAssetRegistryPage /> },
        { path: 'digital-capital', element: <DigitalCapitalPage /> },
        { path: 'mining-companies', element: <MiningCompaniesPage /> },
        { path: 'submit-asset', element: <SubmitAssetPage /> },
        { path: 'insights', element: <InsightsPage /> },
        { path: 'insights/:slug', element: <InsightArticlePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: 'privacy', element: <PrivacyPage /> },
        { path: 'terms', element: <TermsPage /> },
        { path: 'services/real-estate-tokenization', element: <Navigate to="/digital-capital" replace /> },
        { path: 'services/ai-solutions', element: <Navigate to="/digital-capital" replace /> },
        { path: 'services/:slug', element: <Navigate to="/services" replace /> },
        { path: 'industries', element: <Navigate to="/mining-companies" replace /> },
        { path: 'industries/:slug', element: <Navigate to="/mining-companies" replace /> },
        { path: 'case-studies', element: <Navigate to="/products" replace /> },
        { path: 'careers', element: <Navigate to="/about" replace /> },
        { path: 'resources', element: <Navigate to="/insights" replace /> },
        { path: 'resources/rwa-tokenization-guide', element: <Navigate to="/insights" replace /> },
        { path: 'help', element: <Navigate to="/contact" replace /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ])

  return element
}
