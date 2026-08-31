import type { Metadata } from 'next';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

export const metadata: Metadata = {
  title: 'Privacy Policy | FactoryJet Private Limited',
  description:
    'Read the official Privacy Policy of FactoryJet Private Limited. Learn how we collect, process, and safeguard client data under Indian DPDP Act 2023 and IT Act 2000.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Privacy Policy | FactoryJet Private Limited',
    description:
      'Official Privacy Policy for FactoryJet web development, SaaS, AMC, and AI agent services under Indian data protection laws.',
    url: 'https://factoryjet.com/privacy',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Privacy Policy',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | FactoryJet Private Limited',
    description:
      'Official Privacy Policy for FactoryJet services under Indian data protection laws.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/privacy-policy',
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
        <PrivacyPolicy />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
