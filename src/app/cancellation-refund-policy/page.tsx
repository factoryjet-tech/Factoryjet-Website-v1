import type { Metadata } from 'next';
import RefundPolicy from '@/components/RefundPolicy';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | FactoryJet Private Limited',
  description:
    'Official Cancellation and Refund Policy of FactoryJet Private Limited. Governed by Indian Corporate Law, detailing subscription cancellation, 30-day AMC terms, 90-day custom build notice, and refund guidelines.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Cancellation & Refund Policy | FactoryJet Private Limited',
    description:
      'Official Cancellation and Refund Policy for FactoryJet web development, SaaS, AMC, and AI agent services under Indian Corporate Law.',
    url: 'https://factoryjet.com/cancellation-refund-policy',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Cancellation and Refund Policy',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cancellation & Refund Policy | FactoryJet Private Limited',
    description:
      'Official Cancellation and Refund Policy for FactoryJet services under Indian Corporate Law.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/cancellation-and-refund-policy',
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
};

export default function Page() {
  return (
    <>
      <SiteHeader locale="us" />
      <main>
        <RefundPolicy />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
