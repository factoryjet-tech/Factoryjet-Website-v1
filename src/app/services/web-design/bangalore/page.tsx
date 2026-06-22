import type { Metadata } from 'next'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import BangaloreNewPage from '@/pages/BangaloreNew'

export const metadata: Metadata = {
  title: 'Leading Web Design Company in Bangalore | IT & Startup Experts',
  description: 'Professional web design company in Bangalore creating fast, SEO-friendly websites for startups & IT businesses. Serving Whitefield, Koramangala & Electronic City.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Bangalore | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Bangalore. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs.',
    url: 'https://factoryjet.com/services/web-design/bangalore',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Company in Bangalore',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Bangalore | FactoryJet',
    description: 'Award-winning Web Design Company in Bangalore. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/web-design/bangalore',
    languages: webDesignCityAlternatesIN['bangalore'],
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
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com' },
        { name: 'Services', url: 'https://factoryjet.com/services' },
        { name: 'Web Design', url: 'https://factoryjet.com/services/web-design' },
        { name: 'Bangalore', url: 'https://factoryjet.com/services/web-design/bangalore' },
      ]} />
      <BangaloreNewPage />
    </>
  )
}
