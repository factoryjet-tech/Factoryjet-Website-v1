import type { Metadata } from 'next'
import NewYorkServiceAndPricingPage from '@/lib/legacy-pages/NewYorkServiceAndPricingPage/App'

export const metadata: Metadata = {
  title: 'Web Design Services & Pricing in New York City | FactoryJet NYC',
  description: 'Comprehensive web design and development services in New York City. View our transparent pricing, service packages, and custom solutions for NYC businesses. Get your quote today!',
  keywords: [
    'Web Design Services New York',
    'Web Development Pricing NYC',
    'New York Web Design Packages',
    'NYC Website Development Cost',
    'Professional Web Services Manhattan',
    'Custom Web Design Pricing NYC'
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Services & Pricing in New York City | FactoryJet',
    description: 'Comprehensive web design services and transparent pricing for NYC businesses.',
    url: 'https://factoryjet.com/us/services/web-design/new-york/services',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Services NYC',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Services & Pricing NYC | FactoryJet',
    description: 'Comprehensive web design services and transparent pricing for NYC businesses.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/web-design/new-york/services',
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
  return <NewYorkServiceAndPricingPage />
}