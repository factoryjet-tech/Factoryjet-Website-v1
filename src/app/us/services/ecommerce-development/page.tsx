import type { Metadata } from 'next'
import { ecommerceAlternates } from '@/data/hreflangMap'
import UsEcommercePage from '@/pages/UsEcommercePage/App'

export const metadata: Metadata = {
  title: 'E-Commerce Development USA | Shopify & WooCommerce | FactoryJet',
  description: 'Expert e-commerce development services for US businesses. Shopify, WooCommerce, and custom online stores. High-converting, mobile-optimized, and SEO-ready. Affordable pricing with quick delivery. Get a free consultation!',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Development USA | Shopify & WooCommerce',
    description: 'Expert e-commerce development services for US businesses. Shopify, WooCommerce, and custom online stores.',
    url: 'https://factoryjet.com/us/services/ecommerce-development',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - E-Commerce Development USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development USA | FactoryJet',
    description: 'Expert e-commerce development services for US businesses.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development',
    languages: ecommerceAlternates,
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
  return <UsEcommercePage />
}
