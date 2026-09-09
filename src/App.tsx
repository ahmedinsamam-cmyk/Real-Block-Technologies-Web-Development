import { Navigate, useRoutes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage } from '@/pages/Home'
import { AboutPage } from '@/pages/About'
import { ProductPage } from '@/pages/Product'
import { ServicePage } from '@/pages/Service'
import { ContactPage } from '@/pages/Contact'
import { PrivacyPage } from '@/pages/Privacy'
import { TermsPage } from '@/pages/Terms'

export default function App() {
  const element = useRoutes([
    {
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'product', element: <ProductPage /> },
        { path: 'tokenised-royalty', element: <Navigate to="/product" replace /> },
        { path: 'tokenized-royalty', element: <Navigate to="/product" replace /> },
        { path: 'service', element: <ServicePage /> },
        { path: 'tokenisation-as-a-service', element: <Navigate to="/service" replace /> },
        { path: 'tokenization-as-a-service', element: <Navigate to="/service" replace /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: 'privacy', element: <PrivacyPage /> },
        { path: 'terms', element: <TermsPage /> },
        { path: 'products', element: <Navigate to="/product" replace /> },
        { path: 'products/:slug', element: <Navigate to="/product" replace /> },
        { path: 'services', element: <Navigate to="/service" replace /> },
        { path: 'services/:slug', element: <Navigate to="/service" replace /> },
        { path: 'resource-capital', element: <Navigate to="/" replace /> },
        { path: 'digital-asset-registry', element: <Navigate to="/service" replace /> },
        { path: 'digital-capital', element: <Navigate to="/service" replace /> },
        { path: 'mining-companies', element: <Navigate to="/" replace /> },
        { path: 'submit-asset', element: <Navigate to="/contact" replace /> },
        { path: 'insights', element: <Navigate to="/about" replace /> },
        { path: 'insights/:slug', element: <Navigate to="/about" replace /> },
        { path: 'industries', element: <Navigate to="/" replace /> },
        { path: 'industries/:slug', element: <Navigate to="/" replace /> },
        { path: 'case-studies', element: <Navigate to="/product" replace /> },
        { path: 'careers', element: <Navigate to="/about" replace /> },
        { path: 'resources', element: <Navigate to="/about" replace /> },
        { path: 'resources/:slug', element: <Navigate to="/about" replace /> },
        { path: 'help', element: <Navigate to="/contact" replace /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ])

  return element
}
