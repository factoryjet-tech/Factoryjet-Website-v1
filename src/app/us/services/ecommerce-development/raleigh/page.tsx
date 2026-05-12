import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import RaleighPage from '@/lib/legacy-pages/CityLandingUS/RaleighPage'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'


export const metadata: Metadata = {
  title: 'Shopify Developer Raleigh NC | E-Commerce from $2,999 | FactoryJet',
  description: 'Top-rated Shopify developer in Raleigh, NC: stores live in 7 days from $2,999. Research Triangle e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Raleigh NC | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify developer in Raleigh, NC: stores live in 7 days from $2,999. Research Triangle e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/raleigh',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Developer Raleigh',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Raleigh NC | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify developer in Raleigh, NC: stores live in 7 days from $2,999. Research Triangle e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/raleigh',
    languages: ecommerceCityAlternatesUS['raleigh'],
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
      <RaleighPage />
      <SiteFooter />
    </>
  );
}
