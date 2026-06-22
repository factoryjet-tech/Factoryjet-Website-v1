import type { Metadata } from 'next'
import { homeAlternates } from '@/data/hreflangMap'
import UsHomePage from '@/pages/UsHomePage/App'

export const metadata: Metadata = {
  title: 'Leading B2B Web Design Agency in USA | FactoryJet',
  description: 'FactoryJet is a B2B web design agency USA businesses trust for high-converting websites delivered in 7 days. Fixed pricing, full code ownership, and zero vendor lock-in.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Leading B2B Web Design Agency in USA | FactoryJet',
    description: 'FactoryJet is a B2B web design agency USA businesses trust for high-converting websites delivered in 7 days. Fixed pricing, full code ownership, and zero vendor lock-in.',
    url: 'https://factoryjet.com/us',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Company USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leading B2B Web Design Agency in USA | FactoryJet',
    description: 'FactoryJet is a B2B web design agency USA businesses trust for high-converting websites delivered in 7 days. Fixed pricing, full code ownership, and zero vendor lock-in.',
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
