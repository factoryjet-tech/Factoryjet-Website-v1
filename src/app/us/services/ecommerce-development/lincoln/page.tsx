import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import LincolnPage from '@/lib/legacy-pages/CityLandingUS/LincolnPage'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'


export const metadata: Metadata = {
  title: 'Shopify Agency Lincoln NE | E-Commerce Development from $2,999 | FactoryJet',
  description: 'Top-rated Shopify agency in Lincoln, Nebraska: stores live in 7 days from $2,999. Silicon Prairie e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Agency Lincoln NE | E-Commerce Development from $2,999 | FactoryJet',
    description: 'Top-rated Shopify agency in Lincoln, Nebraska: stores live in 7 days from $2,999. Silicon Prairie specialists — Shopify, WooCommerce & AI. Free audit.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/lincoln',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Agency Lincoln NE',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Agency Lincoln NE | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify agency in Lincoln NE: stores live in 7 days from $2,999. Silicon Prairie e-commerce specialists. Free audit.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/lincoln',
    languages: ecommerceCityAlternatesUS['lincoln'],
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
      <LincolnPage />
      <SiteFooter />
    </>
  );
}
