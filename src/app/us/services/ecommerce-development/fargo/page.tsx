import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import FargoPage from '@/lib/legacy-pages/CityLandingUS/FargoPage'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'


export const metadata: Metadata = {
  title: 'Shopify Developer Fargo ND | E-Commerce Development from $2,999 | FactoryJet',
  description: 'Best Shopify developer in Fargo, North Dakota: stores live in 7 days from $2,999. Silicon Prairie e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Fargo ND | E-Commerce Development from $2,999 | FactoryJet',
    description: 'Best Shopify developer in Fargo, North Dakota: stores live in 7 days from $2,999. Silicon Prairie e-commerce specialists — Shopify, WooCommerce & AI. Free audit.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/fargo',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Developer Fargo ND',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Fargo ND | E-Commerce from $2,999 | FactoryJet',
    description: 'Best Shopify developer in Fargo ND: stores live in 7 days from $2,999. Silicon Prairie e-commerce specialists. Free audit.',
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
