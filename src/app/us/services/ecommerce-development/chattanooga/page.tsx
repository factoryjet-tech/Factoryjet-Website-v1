import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import ChattanoogaPage from '@/lib/legacy-pages/CityLandingUS/ChattanoogaPage'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'


export const metadata: Metadata = {
  title: 'Shopify Development Chattanooga | E-Commerce & AI Agency - FactoryJet',
  description: 'Gig City deserves gig-speed e-commerce. Custom Shopify & AI-powered stores for Chattanooga businesses. 10 Gbps infrastructure meets conversion-optimized design.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Development Chattanooga | E-Commerce & AI Agency - FactoryJet',
    description: 'Custom Shopify & AI-powered stores for Chattanooga businesses. Gig-speed e-commerce for Gig City.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/chattanooga',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - E-Commerce Development Chattanooga',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Development Chattanooga | FactoryJet',
    description: 'Custom Shopify & AI-powered stores for Chattanooga businesses. Gig-speed e-commerce for Gig City.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/chattanooga',
    languages: ecommerceCityAlternatesUS['chattanooga'],
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
      <ChattanoogaPage />
      <SiteFooter />
    </>
  );
}
