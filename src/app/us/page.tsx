import type { Metadata } from 'next'
import { homeAlternates } from '@/data/hreflangMap'
import UsHomePage from '@/pages/UsHomePage/App'

export const metadata: Metadata = {
  title: 'Web Design Company USA | High-Converting B2B Websites | FactoryJet',
  description: 'FactoryJet is a B2B web design agency helping US companies build high-converting, performance-driven websites. Custom web design, e-commerce development, and website redesign. Launched in 2–4 weeks. Get a free strategy call!',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company USA | High-Converting B2B Websites | FactoryJet',
    description: 'FactoryJet is a B2B web design agency helping US companies build high-converting, performance-driven websites.',
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
    title: 'Web Design Company USA | FactoryJet',
    description: 'B2B web design agency helping US companies build high-converting websites.',
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
