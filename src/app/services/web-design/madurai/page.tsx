import type { Metadata } from 'next'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import MaduraiNewPage from '@/pages/MaduraiNew'

export const metadata: Metadata = {
  title: 'Web Design Company in Madurai | Professional Website Design Services | FactoryJet',
  description: 'Award-winning Web Design Company in Madurai. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs. Serving Anna Nagar, KK Nagar, Goripalayam, Thirunagar & Mattuthavani. Free consultation available!',
  keywords: [
    'Web Design Company in Madurai',
    'Website Design Services Madurai',
    'UI/UX Design Madurai',
    'Custom Web Design Madurai',
    'Professional Web Designer Madurai',
    'Web Design Agency Madurai',
    'Best web designers Madurai',
    'Responsive web design Madurai',
    'Mobile web design Madurai',
    'Website redesign services Madurai'
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Madurai | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Madurai. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs.',
    url: 'https://factoryjet.com/services/web-design/madurai',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Company in Madurai',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Madurai | FactoryJet',
    description: 'Award-winning Web Design Company in Madurai. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/web-design/madurai',
    languages: webDesignCityAlternatesIN['madurai'],
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
  return <MaduraiNewPage />
}
