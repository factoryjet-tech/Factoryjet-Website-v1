import type { Metadata } from 'next'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import DelhiUpdatedPage from '@/pages/DelhiUpdated/App'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'

export const metadata: Metadata = {
  title: 'Web Design Company in Delhi – Trusted & Result-Driven Experts',
  description: 'Leading web design company in Delhi delivering high-performance websites for corporates and startups. Serving Connaught Place, Gurgaon & Noida.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Delhi | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Delhi. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs.',
    url: 'https://factoryjet.com/services/web-design/delhi',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Company in Delhi',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Delhi | FactoryJet',
    description: 'Award-winning Web Design Company in Delhi. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/web-design/delhi',
    languages: webDesignCityAlternatesIN['delhi'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com' },
        { name: 'Services', url: 'https://factoryjet.com/services' },
        { name: 'Web Design', url: 'https://factoryjet.com/services/web-design' },
        { name: 'Delhi', url: 'https://factoryjet.com/services/web-design/delhi' },
      ]} />
      <DelhiUpdatedPage />
      <SiteFooter />
    </>
  )
}
