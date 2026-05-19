import type { Metadata } from 'next'
import { pricingAlternates } from '@/data/hreflangMap'
import PricingPage from '@/pages/Pricing'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'

export const metadata: Metadata = {
  title: 'Web & Ecommerce Pricing | Packages from $1,500 | FactoryJet',
  description: 'FactoryJet pricing for web development & e-commerce. Transparent packages from ₹15,000. Custom quotes available for enterprise projects.',
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
    title: 'FactoryJet Pricing - Transparent Web Development Packages',
    description: 'Affordable web development and e-commerce packages with transparent pricing. Choose the perfect plan for your business needs.',
    url: 'https://factoryjet.com/pricing',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Pricing Plans - Transparent & Affordable',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FactoryJet Pricing - Transparent Web Development Packages',
    description: 'Affordable web development packages starting from ₹15,000.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/pricing',
    languages: pricingAlternates,
  },
}

export default function Page() {
  return (
    <>
      <SiteHeader locale="in" />
      <PricingPage />
      <SiteFooter locale="in" />
    </>
  )
}
