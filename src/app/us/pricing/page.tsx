import type { Metadata } from 'next'
import Script from 'next/script'
import { pricingAlternates } from '@/data/hreflangMap'
import UsPricingPage from '@/pages/Us-PricingPage'

export const metadata: Metadata = {
  title: 'Web Development Pricing USA | Transparent Packages | FactoryJet',
  description: 'Transparent, value-driven pricing for web development, e-commerce, SEO, and maintenance services. Enterprise-grade technology at SMB-friendly prices. No hidden fees. Get a free consultation!',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Development Pricing USA | Transparent Packages | FactoryJet',
    description: 'Enterprise-grade web development at SMB-friendly prices. Transparent pricing with no hidden fees.',
    url: 'https://factoryjet.com/us/pricing',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Development Pricing USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Pricing USA | FactoryJet',
    description: 'Transparent, value-driven pricing for web development services.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/pricing',
    languages: pricingAlternates,
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

// Structured data for pricing page
const pricingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Web Development Pricing - FactoryJet USA',
  description: 'Transparent pricing for web development, e-commerce, SEO, and maintenance services.',
  url: 'https://factoryjet.com/us/pricing',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Product',
          name: 'Launch - Website Design Package',
          description: 'Professional website in 2 weeks with 5-7 pages, mobile-responsive, SEO setup',
          offers: {
            '@type': 'Offer',
            price: '1999',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          name: 'Growth - Website Design Package',
          description: 'Comprehensive business website with 12 pages, advanced SEO, CRM integration',
          offers: {
            '@type': 'Offer',
            price: '3999',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Product',
          name: 'Scale - Enterprise Website Package',
          description: 'Enterprise-grade platform with 25+ pages, member portal, multi-language support',
          offers: {
            '@type': 'Offer',
            price: '7999',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        },
      },
    ],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  sameAs: [
    'https://linkedin.com/company/factoryjet',
    'https://twitter.com/factoryjet',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    availableLanguage: ['English'],
  },
}

const breadcrumbJsonLd = {
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
      name: 'USA',
      item: 'https://factoryjet.com/us',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Pricing',
      item: 'https://factoryjet.com/us/pricing',
    },
  ],
}

export default function Page() {
  return (
    <>
      <Script
        id="pricing-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <UsPricingPage />
    </>
  )
}
