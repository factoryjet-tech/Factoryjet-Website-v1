import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import { getEcommerceCitySchema } from '@/data/ecommerceCitySchemas'
import MiamiPage from '@/lib/legacy-pages/CityLandingUS/MiamiPage'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'


export const metadata: Metadata = {
  title: 'Shopify Developer Miami FL | E-Commerce from $2,999 | FactoryJet',
  description: 'Top-rated Shopify developer in Miami, Florida: stores live in 7 days from $2,999. Latin America e-commerce gateway — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Developer Miami FL | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify developer in Miami, Florida: stores live in 7 days from $2,999. Latin America e-commerce gateway — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/miami',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Developer Miami',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Developer Miami FL | E-Commerce from $2,999 | FactoryJet',
    description: 'Top-rated Shopify developer in Miami, Florida: stores live in 7 days from $2,999. Latin America e-commerce gateway — Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/miami',
    languages: ecommerceCityAlternatesUS['miami'],
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

function SchemaScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: getEcommerceCitySchema('miami') }}
    />
  );
}

export default function Page() {
  return (
    <>
      <SchemaScript />
      <SiteHeader />
      <MiamiPage />
      <SiteFooter />
    </>
  );
}
