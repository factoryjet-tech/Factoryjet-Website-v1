import type { Metadata } from 'next'
import { aboutAlternates } from '@/data/hreflangMap'
import USAboutPage from '@/lib/legacy-pages/US-AboutPage/App'

export const metadata: Metadata = {
  title: 'About FactoryJet | AI-Native Web Agency USA',
  description: 'Learn about FactoryJet — the AI-native web design agency for US businesses. Enterprise-grade websites delivered 60% faster and 40% more affordably. Meet our team, process, and mission.',
  keywords: [
    'About FactoryJet',
    'AI Native Web Agency USA',
    'Web Design Agency About',
    'FactoryJet Team',
    'Web Development Company USA',
    'Webflow Agency USA',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'About FactoryJet | AI-Native Web Agency USA',
    description: 'Learn about FactoryJet — the AI-native web design agency delivering enterprise websites 60% faster for US businesses.',
    url: 'https://factoryjet.com/us/about',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - About Us',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About FactoryJet | AI-Native Web Agency USA',
    description: 'Learn about FactoryJet — the AI-native web design agency for US businesses.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/about',
    languages: aboutAlternates,
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
  return <USAboutPage />
}
