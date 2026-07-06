import type { Metadata } from 'next'
import RefundPolicy from '@/components/RefundPolicy'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

export const metadata: Metadata = {
  title: 'Refund Policy | FactoryJet',
  description: 'Read FactoryJet\'s Refund Policy. Understand our refund and cancellation terms for web development and e-commerce services.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Refund Policy | FactoryJet',
    description: 'Read FactoryJet\'s Refund Policy. Understand our refund and cancellation terms.',
    url: 'https://factoryjet.com/refund-policy',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Refund Policy',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy | FactoryJet',
    description: 'Read FactoryJet\'s Refund Policy for our web development services.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/refund-policy',
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
  return (
    <>
      <SiteHeader locale="in" />
      <h1 className="sr-only">Refund Policy</h1>
      <RefundPolicy />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  )
}
