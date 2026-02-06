import type { Metadata } from 'next'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import MumbaiNewPage from '@/pages/MumbaiNew'

export const metadata: Metadata = {
  title: 'Web Design Company in Mumbai | Professional Website Design Services | FactoryJet',
  description: 'Award-winning Web Design Company in Mumbai. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs. Serving Andheri, BKC, Powai, Navi Mumbai & Thane. Free consultation available!',
  keywords: [
    'Web Design Company in Mumbai',
    'Website Design Services Mumbai',
    'UI/UX Design Mumbai',
    'Custom Web Design Mumbai',
    'Professional Web Designer Mumbai',
    'Web Design Agency Mumbai',
    'Best web designers Mumbai',
    'Responsive web design Mumbai',
    'Mobile web design Mumbai',
    'Website redesign services Mumbai'
  ],
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
  return <MumbaiNewPage />
}
