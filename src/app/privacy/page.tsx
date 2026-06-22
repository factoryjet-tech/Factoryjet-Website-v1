import type { Metadata } from 'next'
import PrivacyPolicy from '@/components/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy | FactoryJet',
  description: 'Read FactoryJet\'s Privacy Policy. Learn how we collect, use, and protect your personal information when you use our web development and e-commerce services.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Privacy Policy | FactoryJet',
    description: 'Read FactoryJet\'s Privacy Policy. Learn how we collect, use, and protect your personal information.',
    url: 'https://factoryjet.com/privacy',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Privacy Policy',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | FactoryJet',
    description: 'Read FactoryJet\'s Privacy Policy. Learn how we protect your personal information.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/privacy',
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
  return <PrivacyPolicy />
}
