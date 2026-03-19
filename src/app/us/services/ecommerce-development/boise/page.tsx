import type { Metadata } from 'next'
import Script from 'next/script'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import BoisePage from '@/lib/legacy-pages/CityLandingUS/BoisePage'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'E-Commerce Development Boise | Shopify & AI Agency - FactoryJet',
  description: 'Custom Shopify, WooCommerce & AI-powered e-commerce development for Boise businesses. Enterprise-grade online stores at startup-friendly prices. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Development Boise | Shopify & AI Agency - FactoryJet',
    description: 'Custom Shopify, WooCommerce & AI-powered e-commerce development for Boise businesses. Enterprise-grade online stores at startup-friendly prices.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/boise',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - E-Commerce Development Boise',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development Boise | FactoryJet',
    description: 'Custom Shopify, WooCommerce & AI-powered e-commerce development for Boise businesses. Enterprise-grade online stores at startup-friendly prices.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/boise',
    languages: ecommerceCityAlternatesUS['boise'],
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
    name: 'FactoryJet - E-Commerce Development Boise',
    description: 'Custom Shopify stores, WooCommerce sites, and AI-powered solutions built for the Treasure Valley\'s booming market. Enterprise-grade development at prices that won\'t break the bank.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/boise',
    logo: 'https://factoryjet.com/logo.png',
    image: 'https://factoryjet.com/logo.png',
    telephone: '+91-96999-77699',
    email: 'connect@factoryjet.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Boise',
      addressRegion: 'ID',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6150,
      longitude: -116.2023,
    },
    areaServed: [
      { '@type': 'City', name: 'Boise' },
      { '@type': 'State', name: 'Idaho' },
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
        { name: 'Boise', url: 'https://factoryjet.com/us/services/ecommerce-development/boise' },
      ]} />
      <Script
        id="json-ld-ecomm-boise"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BoisePage />
    </>
  )
}
