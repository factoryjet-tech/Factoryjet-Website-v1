import type { Metadata } from 'next'
import Script from 'next/script'
import { homeAlternates } from '@/data/hreflangMap'
import UaePage from '@/pages/UaePage'

// Organization structured data for SEO
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FactoryJet Dubai',
  alternateName: 'FactoryJet UAE',
  url: 'https://factoryjet.com/uae',
  logo: 'https://factoryjet.com/FinalLogo.svg',
  description: 'Premium Web Design & Development Agency in Dubai, UAE. AI-powered web solutions for businesses in the Middle East.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  areaServed: [
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'City', name: 'Abu Dhabi' },
    { '@type': 'City', name: 'Sharjah' },
  ],
  sameAs: [
    'https://www.linkedin.com/company/factoryjet',
    'https://twitter.com/factoryjet',
  ],
}

// Local Business structured data for better local SEO
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebDesign',
  name: 'FactoryJet - Web Design Agency Dubai',
  image: 'https://factoryjet.com/logo.png',
  url: 'https://factoryjet.com/uae',
  telephone: '+971-50-000-0000',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2048,
    longitude: 55.2708,
  },
  priceRange: 'AED 5,000 - AED 100,000+',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
  },
}

// Breadcrumb structured data
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
      name: 'UAE',
      item: 'https://factoryjet.com/uae',
    },
  ],
}

// Service structured data
const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Design and Development',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet Dubai',
    url: 'https://factoryjet.com/uae',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  description: 'Professional web design and development services in Dubai, UAE. Custom websites, e-commerce solutions, and AI-powered web applications.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'AED',
    price: '5000',
    priceValidUntil: '2026-12-31',
  },
}

export const metadata: Metadata = {
  title: 'Web Design Agency Dubai | Website Development Company UAE | FactoryJet',
  description: 'FactoryJet is Dubai\'s #1 AI-native web design agency. Premium website development, e-commerce solutions & digital transformation for UAE businesses. 25+ years expertise, 500+ projects, 98% satisfaction rate. Get a free consultation!',
  keywords: [
    'web design dubai',
    'website development dubai',
    'web design agency uae',
    'website development company dubai',
    'ecommerce website dubai',
    'web development uae',
    'best web design company dubai',
    'affordable web design dubai',
    'professional website design uae',
    'custom web development dubai',
    'shopify development dubai',
    'wordpress development uae',
    'web design abu dhabi',
    'digital agency dubai',
    'AI web design dubai',
  ],
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
    title: 'Web Design Agency Dubai | Top Website Development Company UAE',
    description: 'Dubai\'s #1 AI-native web design agency. Premium websites, e-commerce solutions & digital transformation. 25+ years expertise, 500+ projects.',
    url: 'https://factoryjet.com/uae',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Agency Dubai',
      },
    ],
    locale: 'en_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Agency Dubai | FactoryJet',
    description: 'Dubai\'s #1 AI-native web design agency. Premium websites & e-commerce solutions.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/uae',
    languages: homeAlternates,
  },
}

export default function Page() {
  return (
    <>
      {/* Organization Structured Data */}
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Local Business Structured Data */}
      <Script
        id="local-business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Breadcrumb Structured Data */}
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Service Structured Data */}
      <Script
        id="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <UaePage />
    </>
  )
}
