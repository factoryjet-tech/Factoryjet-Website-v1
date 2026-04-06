import type { Metadata } from 'next'
import Script from 'next/script'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import ChattanoogaPage from '@/lib/legacy-pages/CityLandingUS/ChattanoogaPage'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Shopify Development Chattanooga | E-Commerce & AI Agency - FactoryJet',
  description: 'Gig City deserves gig-speed e-commerce. Custom Shopify & AI-powered stores for Chattanooga businesses. 10 Gbps infrastructure meets conversion-optimized design.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Shopify Development Chattanooga | E-Commerce & AI Agency - FactoryJet',
    description: 'Custom Shopify & AI-powered stores for Chattanooga businesses. Gig-speed e-commerce for Gig City.',
    url: 'https://factoryjet.com/us/services/ecommerce-development/chattanooga',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - E-Commerce Development Chattanooga',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Development Chattanooga | FactoryJet',
    description: 'Custom Shopify & AI-powered stores for Chattanooga businesses. Gig-speed e-commerce for Gig City.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ecommerce-development/chattanooga',
    languages: ecommerceCityAlternatesUS['chattanooga'],
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
    "url": "https://factoryjet.com/us/services/ecommerce-development/chattanooga",
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
      "name": "Chattanooga"
    },
    "priceRange": "$2,000 - $25,000+"
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com/us' },
        { name: 'Services', url: 'https://factoryjet.com/us/services' },
        { name: 'E-Commerce Development', url: 'https://factoryjet.com/us/services/ecommerce-development' },
        { name: 'Chattanooga', url: 'https://factoryjet.com/us/services/ecommerce-development/chattanooga' },
      ]} />
      <Script
        id="json-ld-ecomm-chattanooga"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChattanoogaPage />
    </>
  )
}
