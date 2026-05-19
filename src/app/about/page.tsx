import type { Metadata } from 'next'
import { aboutAlternates } from '@/data/hreflangMap'
import AboutPage from '@/pages/About'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'

export const metadata: Metadata = {
  title: 'About Us — Web & Ecommerce Agency | FactoryJet',
  description: 'Learn how FactoryJet delivers websites & Shopify stores for US, UK & Indian businesses in 7 days. 500+ projects, 25+ years expertise. Trusted by SMBs worldwide.',
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
    title: 'About FactoryJet - Your Trusted Digital Partner',
    description: 'Meet the team behind 150+ successful projects. Expert web & e-commerce development with a mission to empower businesses through innovative digital solutions.',
    url: 'https://factoryjet.com/about',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Team - Web & E-Commerce Development Experts',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About FactoryJet - Your Trusted Digital Partner',
    description: 'Meet the team behind 150+ successful projects. Expert web & e-commerce development company.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/about',
    languages: aboutAlternates,
  },
}

export default function Page() {
  return (
    <>
      <SiteHeader locale="in" />
      <AboutPage />
      <SiteFooter locale="in" />
    </>
  )
}
