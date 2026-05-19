import type { Metadata } from 'next'
import PortfolioPage from '@/pages/Portfolio/App'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Our Portfolio — 500+ Websites Built | FactoryJet',
  description: 'Browse FactoryJet\'s portfolio — e-commerce stores to SaaS platforms. 500+ projects delivered for businesses in India, the US & UK.',
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
      <SiteHeader locale="in" />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com' },
        { name: 'Portfolio', url: 'https://factoryjet.com/portfolio' },
      ]} />
      <PortfolioPage />
      <SiteFooter locale="in" />
    </>
  )
}
