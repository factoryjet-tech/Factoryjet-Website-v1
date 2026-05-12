import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import ChattanoogaPage from '@/lib/legacy-pages/CityLandingUS/ChattanoogaPage'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'


export const metadata: Metadata = {
  title: 'Shopify Developer Chattanooga TN | 7-Day Launch from $2,999 | FactoryJet',
  description: 'Best Shopify developer in Chattanooga: stores live in 7 days from $2,999. Gig City e-commerce specialists — Shopify, WooCommerce & AI. 500+ projects, 4.9★ rating. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Chattanooga TN | 7-Day Launch from $2,999 | FactoryJet',
    description: 'Best Shopify developer in Chattanooga: stores live in 7 days from $2,999. Gig City e-commerce specialists — Shopify, WooCommerce & AI. Free audit.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/chattanooga',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Developer Chattanooga TN',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Chattanooga TN | 7-Day Launch from $2,999 | FactoryJet',
    description: 'Best Shopify developer in Chattanooga: stores live in 7 days from $2,999. Gig City e-commerce specialists. Free audit.',
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
