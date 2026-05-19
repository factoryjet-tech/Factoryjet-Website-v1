import type { Metadata } from 'next'
import { homeAlternates } from '@/data/hreflangMap'
import HomePageV2 from '@/components/homepage/HomePageV2'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'

export const metadata: Metadata = {
  title: 'Website Design & Ecommerce Agency | FactoryJet',
  description: 'FactoryJet builds websites, Shopify stores & AI agents for businesses in India, the US & UK. 7-day delivery on starter sites. 500+ businesses served. Free quote.',
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
    title: 'Website Design & Ecommerce Agency | FactoryJet',
    description: 'High-performance websites, Shopify stores, and AI SEO campaigns. 7-day delivery. 500+ businesses in India, the US, and the UK.',
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
  return (
    <>
      <SiteHeader locale="in" />
      <main>
        <HomePageV2 />
      </main>
      <SiteFooter locale="in" />
    </>
  )
}
