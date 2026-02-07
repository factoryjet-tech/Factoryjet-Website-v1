import type { Metadata } from 'next'
import { homeAlternates } from '@/data/hreflangMap'
import HomePage from '@/pages/Home'

export const metadata: Metadata = {
  title: 'FactoryJet - Professional Website Design & E-Commerce Development Company India',
  description: 'FactoryJet is India\'s leading web development company offering professional website design, e-commerce development, Shopify stores, and custom web solutions. 7-day delivery, 500+ businesses served, 25+ years expertise. Get a free consultation!',
  keywords: [
    'website design company india',
    'web development company',
    'e-commerce development india',
    'shopify development',
    'professional website design',
    'custom web development',
    'web design agency india',
    'ecommerce website development',
    'wordpress development',
    'react development company',
    'next.js development',
    'website design services',
    'affordable web design india',
    'best web development company',
    'digital agency india'
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
    title: 'FactoryJet - Professional Website Design & E-Commerce Development Company',
    description: 'India\'s leading web development company. Professional website design, e-commerce development, and custom web solutions. 7-day delivery guarantee!',
    url: 'https://factoryjet.com',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Professional Website Design & E-Commerce Development',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FactoryJet - Website Design & E-Commerce Development Company',
    description: 'Professional web development services for growing Indian businesses. 7-day delivery!',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com',
    languages: homeAlternates,
  },
}

export default function Page() {
  return <HomePage />
}
