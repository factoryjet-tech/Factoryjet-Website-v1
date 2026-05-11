import type { Metadata } from 'next'
import Script from 'next/script'
import { webDesignCityAlternatesUS } from '@/data/hreflangMap'
import NewYorkLandingPage from '@/lib/legacy-pages/NewYorkLandingPage/App'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'


export const metadata: Metadata = {
  title: 'Professional Web Design Company in New York City | FactoryJet NYC',
  description: 'FactoryJet is the leading AI-native web development company in New York City. Enterprise-quality websites delivered in 7 days at 60-70% lower cost. Custom web design, SEO optimization, and e-commerce solutions for NYC businesses.',
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
    languages: webDesignCityAlternatesUS['new-york'],
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
    "url": "https://factoryjet.com/us/services/web-design/new-york",
    "telephone": "+1-332-867-0003",
    "email": "connect@factoryjet.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "228 Park Ave S",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10003",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "Place",
      "name": "New York"
    },
    "priceRange": "$2,000 - $25,000+"
  }

  return (
    <>
      <SiteHeader />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com/us' },
        { name: 'Services', url: 'https://factoryjet.com/us/services' },
        { name: 'Web Design', url: 'https://factoryjet.com/us/services/web-design' },
        { name: 'New York', url: 'https://factoryjet.com/us/services/web-design/new-york' },
      ]} />
      <Script
        id="json-ld-new-york"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewYorkLandingPage />
      <SiteFooter />
    </>
  )
}
