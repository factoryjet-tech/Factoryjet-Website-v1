import type { Metadata } from 'next'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import PuneNewPage from '@/pages/PuneNew'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'

export const metadata: Metadata = {
  title: 'Trusted Website Design Company in Pune | Custom Web Design Services',
  description: 'Looking for a website design company in Pune? We build fast, conversion-driven websites for businesses in Hinjewadi, Kharadi & Wakad. Free consultation.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Pune | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Pune. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs.',
    url: 'https://factoryjet.com/services/web-design/pune',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Company in Pune',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Pune | FactoryJet',
    description: 'Award-winning Web Design Company in Pune. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/web-design/pune',
    languages: webDesignCityAlternatesIN['pune'],
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
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com' },
        { name: 'Services', url: 'https://factoryjet.com/services' },
        { name: 'Web Design', url: 'https://factoryjet.com/services/web-design' },
        { name: 'Pune', url: 'https://factoryjet.com/services/web-design/pune' },
      ]} />
      <PuneNewPage />
      <SiteFooter />
    </>
  )
}
