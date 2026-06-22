import type { Metadata } from 'next'
import SitemapPage from '@/pages/Sitemap'

export const metadata: Metadata = {
  title: 'Sitemap | FactoryJet',
  description: 'Navigate FactoryJet\'s website with ease. Find all our web development, e-commerce, and digital services across major Indian cities.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Sitemap | FactoryJet',
    description: 'Navigate FactoryJet\'s website with ease. Find all our services and pages.',
    url: 'https://factoryjet.com/sitemap',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Sitemap',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitemap | FactoryJet',
    description: 'Navigate FactoryJet\'s website with ease.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/sitemap',
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
  return <SitemapPage />
}
