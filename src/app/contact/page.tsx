import type { Metadata } from 'next'
import { contactAlternates } from '@/data/hreflangMap'
import ContactView from './ContactView'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

export const metadata: Metadata = {
  title: 'Contact FactoryJet | Get a Free Web Design Quote',
  description:
    'Talk to FactoryJet about a website, online store, or SEO. Book a free 30-minute call or send a quick message, and Bhavesh replies within 24 hours.',
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
    title: 'Contact FactoryJet | Get a Free Web Project Quote',
    description:
      'Ready to build? Tell us about your website, store, or SEO project and get a free consultation. We reply within 24 hours.',
    url: 'https://factoryjet.com/contact',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Contact FactoryJet for web and e-commerce development',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact FactoryJet | Get a Free Web Project Quote',
    description: 'Tell us about your website, store, or SEO project and get a free consultation.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/contact',
    languages: contactAlternates,
  },
}

export default function Page() {
  return (
    <>
      <SiteHeader locale="in" />
      <ContactView />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  )
}
