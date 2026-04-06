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
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FactoryJet",
    "url": "https://factoryjet.com/us/services/ecommerce-development/boise",
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
      "name": "Boise"
    },
    "priceRange": "$2,000 - $25,000+"
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
