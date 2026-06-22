import type { Metadata } from 'next'
import { aboutAlternates } from '@/data/hreflangMap'
import AboutPage from '@/pages/About'

export const metadata: Metadata = {
  title: 'About Us - Leading Web & E-Commerce Development Company | FactoryJet',
  description: 'Learn about FactoryJet - a trusted web and e-commerce development company with 150+ successful projects. Meet our expert team, discover our mission to empower businesses, and see why companies choose us for their digital transformation.',
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
  return <AboutPage />
}
