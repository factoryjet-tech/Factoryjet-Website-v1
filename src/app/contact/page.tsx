import type { Metadata } from 'next'
import { contactAlternates } from '@/data/hreflangMap'
import ContactPage from '@/pages/Contact'

export const metadata: Metadata = {
  title: 'Contact Us - Get a Free Quote | Web & E-Commerce Development | FactoryJet',
  description: 'Get in touch with FactoryJet for web development, e-commerce solutions, and digital services. Call +91 96999 77699 or email connect@factoryjet.com. Free consultation and quotes available.',
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
    title: 'Contact FactoryJet - Get Your Free Quote Today',
    description: 'Ready to transform your digital presence? Contact our expert team for web development and e-commerce solutions. Call +91 96999 77699 for a free consultation.',
    url: 'https://factoryjet.com/contact',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact FactoryJet - Web & E-Commerce Development Experts',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact FactoryJet - Get Your Free Quote Today',
    description: 'Ready to transform your digital presence? Contact our expert team today.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/contact',
    languages: contactAlternates,
  },
}

export default function Page() {
  return <ContactPage />
}
