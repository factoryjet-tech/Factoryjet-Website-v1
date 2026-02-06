import type { Metadata } from 'next'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import ChennaiPage from '@/pages/chennai'

export const metadata: Metadata = {
  title: 'Web Design Company in Chennai | Professional Website Design Services | FactoryJet',
  description: 'Award-winning Web Design Company in Chennai. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs. Serving OMR, Anna Nagar, T Nagar, Adyar & Velachery. Free consultation available!',
  keywords: [
    'Web Design Company in Chennai',
    'Website Design Services Chennai',
    'UI/UX Design Chennai',
    'Custom Web Design Chennai',
    'Professional Web Designer Chennai',
    'Web Design Agency Chennai',
    'Best web designers Chennai',
    'Responsive web design Chennai',
    'Mobile web design Chennai',
    'Website redesign services Chennai'
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Chennai | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Chennai. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs.',
    url: 'https://factoryjet.com/services/web-design/chennai',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Company in Chennai',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Chennai | FactoryJet',
    description: 'Award-winning Web Design Company in Chennai. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/web-design/chennai',
    languages: webDesignCityAlternatesIN['chennai'],
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
  return <ChennaiPage />
}
