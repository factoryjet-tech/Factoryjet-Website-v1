import type { Metadata } from 'next'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import BangaloreNewPage from '@/pages/BangaloreNew'

export const metadata: Metadata = {
  title: 'Web Design Company in Bangalore | Professional Website Design Services | FactoryJet',
  description: 'Award-winning Web Design Company in Bangalore. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs. Serving Whitefield, Koramangala, Indiranagar, HSR Layout & Electronic City. Free consultation available!',
  keywords: [
    'Web Design Company in Bangalore',
    'Website Design Services Bangalore',
    'UI/UX Design Bangalore',
    'Custom Web Design Bangalore',
    'Professional Web Designer Bangalore',
    'Web Design Agency Bangalore',
    'Best web designers Bangalore',
    'Responsive web design Bangalore',
    'Mobile web design Bangalore',
    'Website redesign services Bangalore'
  ],
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
  return <BangaloreNewPage />
}
