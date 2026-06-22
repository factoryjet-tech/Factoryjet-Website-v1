import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import SiouxFallsPage from '@/lib/legacy-pages/CityLandingUS/SiouxFallsPage'

export const metadata: Metadata = {
  title: 'E-Commerce Development Sioux Falls | Shopify Agency - FactoryJet',
  description: 'Custom Shopify & e-commerce development for Sioux Falls businesses. No state income tax = higher margins. Enterprise-grade stores from $2,999. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Development Sioux Falls | Shopify Agency - FactoryJet',
    description: 'Custom Shopify & e-commerce development for Sioux Falls businesses. No state income tax = higher margins.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/sioux-falls',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - E-Commerce Development Sioux Falls',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development Sioux Falls | FactoryJet',
    description: 'Custom Shopify & e-commerce development for Sioux Falls businesses. No state income tax = higher margins.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/sioux-falls',
    languages: ecommerceCityAlternatesUS['sioux-falls'],
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
  return <SiouxFallsPage />
}
