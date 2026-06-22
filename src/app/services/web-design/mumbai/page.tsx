import type { Metadata } from 'next'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import MumbaiNewPage from '@/pages/MumbaiNew'

export const metadata: Metadata = {
  title: 'Best Website Design Company in Mumbai | Expert Designers',
  description: 'Professional website design company in Mumbai offering SEO-friendly, fast-loading websites. Serving Andheri, BKC & Navi Mumbai. Free consultation.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Mumbai | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Mumbai. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs.',
    url: 'https://factoryjet.com/services/web-design/mumbai',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Company in Mumbai',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Mumbai | FactoryJet',
    description: 'Award-winning Web Design Company in Mumbai. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/web-design/mumbai',
    languages: webDesignCityAlternatesIN['mumbai'],
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
        { name: 'Mumbai', url: 'https://factoryjet.com/services/web-design/mumbai' },
      ]} />
      <MumbaiNewPage />
    </>
  )
}
