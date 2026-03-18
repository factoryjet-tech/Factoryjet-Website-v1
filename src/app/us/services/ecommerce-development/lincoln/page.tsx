import type { Metadata } from 'next'
import Script from 'next/script'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import LincolnPage from '@/lib/legacy-pages/CityLandingUS/LincolnPage'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'E-Commerce Development Lincoln NE | Shopify & AI Agency - FactoryJet',
  description: 'Professional e-commerce development for Lincoln, Nebraska businesses. From UNL startups to Main Street retailers — Shopify stores that convert. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Development Lincoln NE | Shopify & AI Agency - FactoryJet',
    description: 'Professional e-commerce development for Lincoln, Nebraska businesses. Shopify stores that convert.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/lincoln',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - E-Commerce Development Lincoln',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development Lincoln NE | FactoryJet',
    description: 'Professional e-commerce development for Lincoln, Nebraska businesses. Shopify stores that convert.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/lincoln',
    languages: ecommerceCityAlternatesUS['lincoln'],
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
    name: 'FactoryJet - E-Commerce Development Lincoln',
    description: 'Professional e-commerce development for Lincoln, Nebraska businesses. From UNL startups to Main Street retailers — Shopify stores that convert.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/lincoln',
    logo: 'https://factoryjet.com/logo.png',
    image: 'https://factoryjet.com/logo.png',
    telephone: '+1-919-699-977-699',
    email: 'connect@factoryjet.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lincoln',
      addressRegion: 'NE',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.8136,
      longitude: -96.7026,
    },
    areaServed: [
      { '@type': 'City', name: 'Lincoln' },
      { '@type': 'State', name: 'Nebraska' },
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
        { name: 'Lincoln', url: 'https://factoryjet.com/us/services/ecommerce-development/lincoln' },
      ]} />
      <Script
        id="json-ld-ecomm-lincoln"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LincolnPage />
    </>
  )
}
