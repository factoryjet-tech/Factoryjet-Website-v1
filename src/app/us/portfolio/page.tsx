import type { Metadata } from 'next';
import Script from 'next/script';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import PortfolioGrid from './PortfolioGrid';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

export const metadata: Metadata = {
  title: "Portfolio - Websites We've Built for Ambitious Brands | FactoryJet USA",
  description:
    "Explore FactoryJet's portfolio of stunning websites — from e-commerce stores to SaaS platforms. See the diverse range of projects we've delivered for businesses worldwide.",
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
    title: 'FactoryJet Portfolio - Websites Built for Ambitious Brands',
    description: 'Explore our portfolio of stunning websites crafted for businesses worldwide.',
    url: 'https://factoryjet.com/us/portfolio',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Portfolio',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FactoryJet Portfolio - Websites Built for Ambitious Brands',
    description: 'Explore our portfolio of stunning websites crafted for businesses worldwide.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/portfolio',
  },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://factoryjet.com/us/portfolio' },
  ],
};

export default function USPortfolioPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services/web-design' },
          { label: 'Shopify', href: '/us/services/shopify-development' },
          { label: 'AI Agents', href: '/us/services/ai-agents' },
          { label: 'Pricing', href: '/us/pricing' },
          { label: 'Portfolio', href: '/us/portfolio' },
          { label: 'FAQ', href: '/us/faq' },
        ]}
        cta={{ label: 'Free Strategy Call', href: '/contact' }}
      />

      <main className="bg-fj-cream min-h-screen">
        <PortfolioGrid />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
