import type { Metadata } from 'next'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import PuneNewPage from '@/pages/PuneNew'

export const metadata: Metadata = {
  title: 'Web Design Company in Pune | Professional Website Design Services | FactoryJet',
  description: 'Award-winning Web Design Company in Pune. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs. Serving Hinjewadi, Kharadi, Wakad, Baner & Viman Nagar. Free consultation available!',
  keywords: [
    'Web Design Company in Pune',
    'Website Design Services Pune',
    'UI/UX Design Pune',
    'Custom Web Design Pune',
    'Professional Web Designer Pune',
    'Web Design Agency Pune',
    'Best web designers Pune',
    'Responsive web design Pune',
    'Mobile web design Pune',
    'Website redesign services Pune'
  ],
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
  return <PuneNewPage />
}
