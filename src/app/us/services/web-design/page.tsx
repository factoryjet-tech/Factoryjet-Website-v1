import type { Metadata } from 'next'
import { webDesignAlternates } from '@/data/hreflangMap'
import UsWebServicePage from '@/pages/UsWebServicePage/App'

export const metadata: Metadata = {
  title: 'Web Design Services USA | 7-Day Website Launch | FactoryJet',
  description: 'FactoryJet delivers web design services USA businesses trust — custom Next.js, WordPress & Shopify websites. Launch in 7 days. Starting at $1,999. Full GitHub ownership. Get a free technical audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Services USA | 7-Day Website Launch | FactoryJet',
    description: 'FactoryJet delivers web design services USA businesses trust — custom Next.js, WordPress & Shopify websites. Launch in 7 days. Starting at $1,999. Full GitHub ownership. Get a free technical audit.',
    url: 'https://factoryjet.com/us/services/web-design',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Services USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Services USA | 7-Day Website Launch | FactoryJet',
    description: 'FactoryJet delivers web design services USA businesses trust — custom Next.js, WordPress & Shopify websites. Launch in 7 days. Starting at $1,999. Full GitHub ownership. Get a free technical audit.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/web-design',
    languages: webDesignAlternates,
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
  return <UsWebServicePage />
}
