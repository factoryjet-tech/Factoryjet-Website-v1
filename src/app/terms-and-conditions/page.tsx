import type { Metadata } from 'next';
import TermsAndConditions from '@/components/TermsAndConditions';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

export const metadata: Metadata = {
  title: 'Terms and Conditions | FactoryJet Private Limited',
  description:
    'Read the official Terms and Conditions of FactoryJet Private Limited. Understand our service framework, user responsibilities, payments, and IP guidelines.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Terms and Conditions | FactoryJet Private Limited',
    description:
      'Official Terms and Conditions for FactoryJet web development, SaaS, AMC, and AI agent services under Indian Corporate Law.',
    url: 'https://factoryjet.com/terms-and-conditions',
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
    title: 'Terms and Conditions | FactoryJet Private Limited',
    description:
      'Official Terms and Conditions for FactoryJet services under Indian Corporate Law.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/terms-and-conditions',
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

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms and Conditions | FactoryJet Private Limited',
  description:
    'Official Terms and Conditions for FactoryJet web development, SaaS, AMC, and AI agent services under Indian Corporate Law.',
  url: 'https://factoryjet.com/terms-and-conditions',
  isPartOf: {
    '@type': 'WebSite',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'FactoryJet Private Limited',
    url: 'https://factoryjet.com',
    logo: 'https://factoryjet.com/FinalLogo.svg',
  },
};

const jsonLdBreadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://factoryjet.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Terms and Conditions',
      item: 'https://factoryjet.com/terms-and-conditions',
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <SiteHeader locale="us" />
      <main>
        <TermsAndConditions />
      </main>
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
