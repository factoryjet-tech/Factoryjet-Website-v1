import type { Metadata } from 'next'
import Script from 'next/script'
import { webDesignCityAlternatesUS } from '@/data/hreflangMap'
import ClevelandLandingPage from '@/pages/US-CleavlandLandingPage/App'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Professional Web Design Company in Cleveland, Ohio | FactoryJet',
  description: 'FactoryJet is the leading AI-native web development company in Cleveland, Ohio. Enterprise-quality websites delivered in 7 days at 60-70% lower cost. Custom web design, SEO optimization, and e-commerce solutions for Cleveland businesses.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Professional Web Design Company in Cleveland, Ohio | FactoryJet',
    description: 'AI-native web development company in Cleveland. Enterprise-quality websites delivered in 7 days at 60-70% lower cost.',
    url: 'https://factoryjet.com/us/services/web-design/cleveland',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Professional Web Design Company Cleveland',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Design Company Cleveland | FactoryJet',
    description: 'Enterprise-quality websites delivered in 7 days at 60-70% lower cost. AI-native web development for Cleveland businesses.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/web-design/cleveland',
    languages: webDesignCityAlternatesUS['cleveland'],
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
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet",
    "url": "https://factoryjet.com/us/services/web-design/cleveland",
    "telephone": "+1-216-600-1234",
    "email": "connect@factoryjet.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "200 Public Square",
      "addressLocality": "Cleveland",
      "addressRegion": "OH",
      "postalCode": "44114",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Cleveland"
    },
    "priceRange": "$2,000 - $25,000+"
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com/us' },
        { name: 'Services', url: 'https://factoryjet.com/us/services' },
        { name: 'Web Design', url: 'https://factoryjet.com/us/services/web-design' },
        { name: 'Cleveland', url: 'https://factoryjet.com/us/services/web-design/cleveland' },
      ]} />
      <Script
        id="json-ld-cleveland"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClevelandLandingPage />
    </>
  )
}
