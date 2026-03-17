import type { Metadata } from 'next'
import Script from 'next/script'
import { webDesignCityAlternatesUS } from '@/data/hreflangMap'
import FargoPage from '@/lib/legacy-pages/CityLandingUS/FargoPage'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'E-Commerce Development Fargo | Shopify & AI Agency - FactoryJet',
  description: 'Custom Shopify & e-commerce stores for Fargo businesses. From Microsoft\'s backyard to Main Street — AI-powered development. Free audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Development Fargo | Shopify & AI Agency - FactoryJet',
    description: 'Custom Shopify & e-commerce stores for Fargo businesses. From Microsoft\'s backyard to Main Street — AI-powered development.',
    url: 'https://factoryjet.com/us/services/web-design/fargo',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - E-Commerce Development Fargo',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development Fargo | FactoryJet',
    description: 'Custom Shopify & e-commerce stores for Fargo businesses. From Microsoft\'s backyard to Main Street — AI-powered development.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/web-design/fargo',
    languages: webDesignCityAlternatesUS['fargo'],
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
    name: 'FactoryJet - E-Commerce Development Fargo',
    description: 'From Microsoft\'s backyard to Main Street — custom Shopify stores, WooCommerce sites, and AI-powered solutions that put Fargo\'s 24,229 small businesses on the digital map.',
    url: 'https://factoryjet.com/us/services/web-design/fargo',
    logo: 'https://factoryjet.com/logo.png',
    image: 'https://factoryjet.com/logo.png',
    telephone: '+1-919-699-977-699',
    email: 'connect@factoryjet.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fargo',
      addressRegion: 'ND',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.8772,
      longitude: -96.7898,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Fargo',
      },
      {
        '@type': 'State',
        name: 'North Dakota',
      },
    ],
    serviceType: [
      'E-Commerce Development',
      'Shopify Development',
      'WooCommerce Development',
      'AI Agent Development',
      'Web Design',
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
        { name: 'Web Design', url: 'https://factoryjet.com/us/services/web-design' },
        { name: 'Fargo', url: 'https://factoryjet.com/us/services/web-design/fargo' },
      ]} />
      <Script
        id="json-ld-fargo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FargoPage />
    </>
  )
}
