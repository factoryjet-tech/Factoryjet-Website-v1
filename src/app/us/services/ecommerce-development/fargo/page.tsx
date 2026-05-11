import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import FargoPage from '@/lib/legacy-pages/CityLandingUS/FargoPage'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'


export const metadata: Metadata = {
  title: 'E-Commerce Development Fargo | Shopify & AI Agency - FactoryJet',
  description: 'Custom Shopify & e-commerce stores for Fargo businesses. From Microsoft\'s backyard to Main Street — AI-powered development. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Development Fargo | Shopify & AI Agency - FactoryJet',
    description: 'Custom Shopify & e-commerce stores for Fargo businesses. AI-powered development for the Silicon Prairie.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/fargo',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - E-Commerce Development Fargo',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development Fargo | FactoryJet',
    description: 'Custom Shopify & e-commerce stores for Fargo businesses. AI-powered development for the Silicon Prairie.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/fargo',
    languages: ecommerceCityAlternatesUS['fargo'],
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
      <FargoPage />
      <SiteFooter />
    </>
  );
}
