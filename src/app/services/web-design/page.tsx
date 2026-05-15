import type { Metadata } from 'next'
import { webDesignAlternates } from '@/data/hreflangMap'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import WebDesignPage from '@/pages/WebDesign'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'

export const metadata: Metadata = {
  title: 'Web Design Company in India | Conversion-Focused Website Development | FactoryJet',
  description: 'FactoryJet is a web design company in India that builds high-performance, conversion-focused websites on WordPress, Webflow, Framer, and custom stacks. Mobile-first, SEO-optimized, Core Web Vitals compliant. Services across Mumbai, Pune, Bangalore, Delhi, and more.',
  authors: [{ name: 'FactoryJet' }],
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
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in India | Conversion-Focused Websites | FactoryJet',
    description: 'FactoryJet designs high-performance websites engineered to turn visitors into customers. WordPress, Webflow, Framer, and custom development across India.',
    url: 'https://factoryjet.com/services/web-design',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in India | Conversion-Focused Websites | FactoryJet',
    description: 'FactoryJet designs high-performance websites engineered to turn visitors into customers. WordPress, Webflow, Framer, and custom development across India.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/web-design',
    languages: webDesignAlternates,
  },
}

export default function Page() {
  return (
    <>
      <SiteHeader locale="in" />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com' },
        { name: 'Services', url: 'https://factoryjet.com/services' },
        { name: 'Web Design', url: 'https://factoryjet.com/services/web-design' },
      ]} />
      <WebDesignPage />
      <SiteFooter locale="in" />
    </>
  )
}
