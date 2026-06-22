import type { Metadata } from 'next'
import PortfolioPage from '@/pages/Portfolio/App'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Portfolio - Websites We\'ve Built for Ambitious Brands | FactoryJet',
  description: 'Explore FactoryJet\'s portfolio of stunning websites — from e-commerce stores to SaaS platforms. See the diverse range of projects we\'ve delivered for businesses worldwide.',
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
    title: 'FactoryJet Portfolio - Websites Built for Ambitious Brands',
    description: 'Explore our portfolio of stunning websites crafted for businesses worldwide.',
    url: 'https://factoryjet.com/portfolio',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Portfolio',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FactoryJet Portfolio - Websites Built for Ambitious Brands',
    description: 'Explore our portfolio of stunning websites crafted for businesses worldwide.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/portfolio',
  },
}

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com' },
        { name: 'Portfolio', url: 'https://factoryjet.com/portfolio' },
      ]} />
      <PortfolioPage />
    </>
  )
}
