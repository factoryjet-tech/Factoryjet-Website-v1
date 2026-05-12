import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import BoisePage from '@/lib/legacy-pages/CityLandingUS/BoisePage'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'


export const metadata: Metadata = {
  title: 'Shopify Developer Boise ID | E-Commerce Website from $2,999 | FactoryJet',
  description: 'Best Shopify developer in Boise, Idaho: e-commerce websites live in 7 days from $2,999. Treasure Valley specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Boise ID | E-Commerce Website from $2,999 | FactoryJet',
    description: 'Best Shopify developer in Boise, Idaho: e-commerce websites live in 7 days from $2,999. Treasure Valley specialists — Shopify, WooCommerce & AI. Free audit.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/boise',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Developer Boise ID',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Boise ID | E-Commerce from $2,999 | FactoryJet',
    description: 'Best Shopify developer in Boise Idaho: stores live in 7 days from $2,999. Treasure Valley e-commerce specialists. Free audit.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/boise',
    languages: ecommerceCityAlternatesUS['boise'],
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
      <BoisePage />
      <SiteFooter />
    </>
  );
}
