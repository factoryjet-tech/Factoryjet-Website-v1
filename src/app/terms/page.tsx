import type { Metadata } from 'next'
import TermsAndConditions from '@/components/TermsAndConditions'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

export const metadata: Metadata = {
  title: 'Terms and Conditions | FactoryJet',
  description: 'Read FactoryJet\'s Terms and Conditions. Understand the rules and guidelines for using our web development and e-commerce services.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Terms and Conditions | FactoryJet',
    description: 'Read FactoryJet\'s Terms and Conditions. Understand the rules for using our services.',
    url: 'https://factoryjet.com/terms',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Terms and Conditions',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | FactoryJet',
    description: 'Read FactoryJet\'s Terms and Conditions for our web development services.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/terms',
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
      <SiteHeader locale="us" />
      <h1 className="sr-only">Terms and Conditions</h1>
      <TermsAndConditions />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  )
}
