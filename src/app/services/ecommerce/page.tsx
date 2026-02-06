import type { Metadata } from 'next'
import { ecommerceAlternates } from '@/data/hreflangMap'
import EcommPage from '@/pages/Ecomm'

export const metadata: Metadata = {
  title: 'E-Commerce Development Services | Custom Online Store Solutions | FactoryJet',
  description: 'Build high-converting e-commerce stores with FactoryJet. Expert Shopify, WooCommerce & custom e-commerce development. AI-powered, mobile-first, SEO-optimized stores that sell while you sleep. 150+ successful projects delivered.',
  keywords: [
    'e-commerce development',
    'online store development',
    'ecommerce website design',
    'shopify development',
    'woocommerce development',
    'custom ecommerce solutions',
    'online shopping platform',
    'ecommerce store builder',
    'b2b ecommerce platform',
    'b2c ecommerce development',
    'd2c ecommerce solutions',
    'multi-vendor marketplace',
    'ecommerce app development',
    'mobile commerce solutions',
    'payment gateway integration',
    'inventory management system',
    'ecommerce seo optimization',
    'conversion rate optimization',
    'cart abandonment solutions',
    'ecommerce analytics'
  ],
  authors: [{ name: 'FactoryJet' }],
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
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Development Services | Build Stores That Sell',
    description: 'Professional e-commerce development with AI, glassmorphism design, and conversion psychology. Shopify, WooCommerce, custom solutions. Fast delivery, affordable pricing.',
    url: 'https://factoryjet.com/services/ecommerce',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet E-Commerce Development Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development Services | Build Stores That Sell',
    description: 'Build high-performance e-commerce stores. Shopify, WooCommerce & custom solutions. AI-powered, conversion-focused, SEO-optimized.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ecommerce',
    languages: ecommerceAlternates,
  },
}

export default function Page() {
  return <EcommPage />
}
