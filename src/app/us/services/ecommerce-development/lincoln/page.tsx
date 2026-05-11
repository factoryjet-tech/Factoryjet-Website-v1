import type { Metadata } from 'next'
import { ecommerceCityAlternatesUS } from '@/data/hreflangMap'
import LincolnPage from '@/lib/legacy-pages/CityLandingUS/LincolnPage'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'


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
  return (
    <>
      <SiteHeader />
      <LincolnPage />
      <SiteFooter />
    </>
  );
}
