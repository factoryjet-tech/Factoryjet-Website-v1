import type { Metadata } from 'next'
import Script from 'next/script'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import SiouxFallsPage from '@/lib/legacy-pages/CityLandingUS/SiouxFallsPage'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'E-Commerce Development Sioux Falls | Shopify Agency - FactoryJet',
  description: 'Custom Shopify & e-commerce development for Sioux Falls businesses. No state income tax = higher margins. Enterprise-grade stores from $2,999. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Development Sioux Falls | Shopify Agency - FactoryJet',
    description: 'Custom Shopify & e-commerce development for Sioux Falls businesses. No state income tax = higher margins.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/sioux-falls',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - E-Commerce Development Sioux Falls',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development Sioux Falls | FactoryJet',
    description: 'Custom Shopify & e-commerce development for Sioux Falls businesses. No state income tax = higher margins.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/sioux-falls',
    languages: ecommerceCityAlternatesUS['sioux-falls'],
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'FactoryJet - E-Commerce Development Sioux Falls',
    description: 'Custom Shopify & e-commerce development for Sioux Falls businesses. No state income tax = higher margins. Enterprise-grade stores from $2,999.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/sioux-falls',
    logo: 'https://factoryjet.com/logo.png',
    image: 'https://factoryjet.com/logo.png',
    telephone: '+1-919-699-977-699',
    email: 'connect@factoryjet.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sioux Falls',
      addressRegion: 'SD',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.5446,
      longitude: -96.7311,
    },
    areaServed: [
      { '@type': 'City', name: 'Sioux Falls' },
      { '@type': 'State', name: 'South Dakota' },
    ],
    serviceType: [
      'E-Commerce Development',
      'Shopify Development',
      'WooCommerce Development',
      'AI Agent Development',
    ],
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-18:00',
    sameAs: [
      'https://www.linkedin.com/company/factoryjet',
      'https://twitter.com/factoryjet',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
    },
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com/us' },
        { name: 'Services', url: 'https://factoryjet.com/us/services' },
        { name: 'E-Commerce Development', url: 'https://factoryjet.com/us/services/ecommerce-development' },
        { name: 'Sioux Falls', url: 'https://factoryjet.com/us/services/ecommerce-development/sioux-falls' },
      ]} />
      <Script
        id="json-ld-ecomm-sioux-falls"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiouxFallsPage />
    </>
  )
}
