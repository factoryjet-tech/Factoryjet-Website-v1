import type { Metadata } from 'next'
import Script from 'next/script'
import { webDesignCityAlternatesUS } from '@/data/hreflangMap'
import ChattanoogaPage from '@/lib/legacy-pages/CityLandingUS/ChattanoogaPage'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Shopify Development Chattanooga | E-Commerce & AI Agency - FactoryJet',
  description: 'Gig City deserves gig-speed e-commerce. Custom Shopify & AI-powered stores for Chattanooga businesses. 10 Gbps infrastructure meets conversion-optimized design.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Development Chattanooga | E-Commerce & AI Agency - FactoryJet',
    description: 'Gig City deserves gig-speed e-commerce. Custom Shopify & AI-powered stores for Chattanooga businesses.',
    url: 'https://factoryjet.com/us/services/web-design/chattanooga',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Shopify Development Chattanooga',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Development Chattanooga | FactoryJet',
    description: 'Gig City deserves gig-speed e-commerce. Custom Shopify & AI-powered stores for Chattanooga businesses.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/web-design/chattanooga',
    languages: webDesignCityAlternatesUS['chattanooga'],
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
    name: 'FactoryJet - Shopify Development Chattanooga',
    description: 'Custom online stores and AI solutions for the city with America\'s fastest internet. Shopify, WooCommerce, and headless builds — launched in weeks, built to convert Chattanooga\'s 10.7M annual visitors.',
    url: 'https://factoryjet.com/us/services/web-design/chattanooga',
    logo: 'https://factoryjet.com/logo.png',
    image: 'https://factoryjet.com/logo.png',
    telephone: '+1-919-699-977-699',
    email: 'connect@factoryjet.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chattanooga',
      addressRegion: 'TN',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.0456,
      longitude: -85.3097,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Chattanooga',
      },
      {
        '@type': 'State',
        name: 'Tennessee',
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
        { name: 'Chattanooga', url: 'https://factoryjet.com/us/services/web-design/chattanooga' },
      ]} />
      <Script
        id="json-ld-chattanooga"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChattanoogaPage />
    </>
  )
}
