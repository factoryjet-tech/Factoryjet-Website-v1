import type { Metadata } from 'next'
import Script from 'next/script'
import { homeAlternates } from '@/data/hreflangMap'
import UaePage from '@/pages/UaePage'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'

// LocalBusiness structured data for SEO
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FactoryJet",
  "url": "https://factoryjet.com/uae",
  "telephone": "+91 96999 77699",
  "email": "connect@factoryjet.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ITPL Main Rd, Tigalarpalya, Brookefield",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560037",
    "addressCountry": "IN"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Dubai"
  }
}

// Organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://factoryjet.com/#organization",
  "name": "FactoryJet Technologies",
  "url": "https://factoryjet.com",
  "logo": "https://factoryjet.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/factoryjet",
    "https://www.crunchbase.com/organization/factoryjet",
  ],
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
}

export const metadata: Metadata = {
  title: 'Web Design Agency Dubai | UAE Website Development | FactoryJet',
  description: 'FactoryJet is Dubai\'s #1 AI-native web design agency. Premium website development, e-commerce solutions & digital transformation for UAE businesses. 25+ years expertise, 500+ projects, 98% satisfaction rate. Get a free consultation!',
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
        url: 'https://factoryjet.com/og-default.png',
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
    images: ['https://factoryjet.com/og-default.png'],
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

      <SiteHeader locale="uae" />
      <UaePage />
      <SiteFooter locale="uae" />
    </>
  )
}
