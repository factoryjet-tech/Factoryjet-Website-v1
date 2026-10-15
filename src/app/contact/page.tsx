import type { Metadata } from 'next'
import { contactAlternates } from '@/data/hreflangMap'
import ContactView from './ContactView'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

export const metadata: Metadata = {
  title: 'Contact FactoryJet | Ecommerce Development and AI Agents',
  description:
    'Contact FactoryJet about an online store, an AI agent, a website or AI search. Send the form or book a free 30-minute call. Bhavesh replies within 24 hours.',
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
    title: 'Contact FactoryJet | Ecommerce Development and AI Agents',
    description:
      'Tell FactoryJet about your online store, AI agent, website or AI search project. Bhavesh Barot, the founder, replies within 24 hours.',
    url: 'https://factoryjet.com/contact',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Contact FactoryJet for ecommerce development and AI agents',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact FactoryJet | Ecommerce Development and AI Agents',
    description:
      'Tell FactoryJet about your online store, AI agent, website or AI search project. Bhavesh replies within 24 hours.',
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
      <SiteHeader locale="us" />
      <main>
        <ContactView />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  )
}
