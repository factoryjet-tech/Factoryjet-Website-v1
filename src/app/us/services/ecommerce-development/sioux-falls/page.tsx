import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import SiouxFallsPage from '@/lib/legacy-pages/CityLandingUS/SiouxFallsPage'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'


export const metadata: Metadata = {
  title: 'Shopify Developer Sioux Falls SD | E-Commerce from $2,999 | FactoryJet',
  description: 'Top-rated Shopify developer in Sioux Falls, South Dakota: stores live in 7 days from $2,999. Zero state income tax = higher margins. Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Sioux Falls SD | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify developer in Sioux Falls SD: stores live in 7 days from $2,999. Zero state income tax = higher e-commerce margins. Free audit.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/sioux-falls',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Developer Sioux Falls SD',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Sioux Falls SD | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify developer in Sioux Falls SD: stores live in 7 days from $2,999. Zero state income tax. Free audit.',
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
  return (
    <>
      <SiteHeader />
      <SiouxFallsPage />
      <SiteFooter />
    </>
  );
}
