import type { Metadata } from 'next'
import Script from 'next/script'
import NewYorkLandingPage from '@/lib/legacy-pages/NewYorkLandingPage/App'

export const metadata: Metadata = {
  title: 'Professional Web Design Company in New York City | FactoryJet NYC',
  description: 'FactoryJet is the leading AI-native web development company in New York City. Enterprise-quality websites delivered in 7 days at 60-70% lower cost. Custom web design, SEO optimization, and e-commerce solutions for NYC businesses.',
  keywords: [
    'Web Design Company New York',
    'Web Development NYC',
    'New York City Web Designer',
    'Professional Website Development NYC',
    'Custom Web Design Manhattan',
    'E-commerce Development New York',
    'SEO Services NYC',
    'AI Web Development New York',
    'Small Business Website NYC',
    'Web Design Agency New York City'
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Professional Web Design Company in New York City | FactoryJet',
    description: 'AI-native web development company in NYC. Enterprise-quality websites delivered in 7 days at 60-70% lower cost.',
    url: 'https://factoryjet.com/us/services/web-design/new-york',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Professional Web Design Company NYC',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Design Company NYC | FactoryJet',
    description: 'Enterprise-quality websites delivered in 7 days at 60-70% lower cost. AI-native web development for NYC businesses.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/web-design/new-york',
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
    name: 'FactoryJet - Web Design Company NYC',
    description: 'AI-native web development company delivering enterprise-quality websites for New York City businesses in 7 days at 60-70% lower cost.',
    url: 'https://factoryjet.com/us/services/web-design/new-york',
    logo: 'https://factoryjet.com/logo.png',
    image: 'https://factoryjet.com/logo.png',
    telephone: '+1-919-699-977-699',
    email: 'connect@factoryjet.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.0060,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'New York City',
      },
      {
        '@type': 'State',
        name: 'New York',
      },
    ],
    serviceType: [
      'Web Design',
      'Web Development',
      'E-commerce Development',
      'SEO Services',
      'Custom Website Development',
      'AI-Optimized Websites',
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
      <Script
        id="json-ld-new-york"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewYorkLandingPage />
    </>
  )
}
