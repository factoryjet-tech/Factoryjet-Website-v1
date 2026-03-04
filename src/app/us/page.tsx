import type { Metadata } from 'next'
import { homeAlternates } from '@/data/hreflangMap'
import UsHomePage from '@/pages/UsHomePage/App'

export const metadata: Metadata = {
  title: 'Web Development Company USA | E-Commerce Solutions | FactoryJet',
  description: 'FactoryJet delivers world-class web development and e-commerce solutions for US businesses. Custom websites, Shopify stores, and digital solutions. Fast delivery, competitive pricing. Get a free consultation!',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Development Company USA | E-Commerce Solutions | FactoryJet',
    description: 'FactoryJet delivers world-class web development and e-commerce solutions for US businesses.',
    url: 'https://factoryjet.com/us',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Development Company USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Company USA | FactoryJet',
    description: 'World-class web development and e-commerce solutions for US businesses.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us',
    languages: homeAlternates,
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
  return <UsHomePage />
}
