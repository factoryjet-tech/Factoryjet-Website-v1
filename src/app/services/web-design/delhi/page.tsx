import type { Metadata } from 'next'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import DelhiUpdatedPage from '@/pages/DelhiUpdated/App'

export const metadata: Metadata = {
  title: 'Web Design Company in Delhi | Professional Website Design Services | FactoryJet',
  description: 'Award-winning Web Design Company in Delhi. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs. Serving Connaught Place, Gurgaon, Noida, South Delhi & Dwarka. Free consultation available!',
  keywords: [
    'Web Design Company in Delhi',
    'Website Design Services Delhi',
    'UI/UX Design Delhi',
    'Custom Web Design Delhi',
    'Professional Web Designer Delhi',
    'Web Design Agency Delhi',
    'Best web designers Delhi',
    'Responsive web design Delhi',
    'Mobile web design Delhi',
    'Website redesign services Delhi',
    'Web Design Gurgaon',
    'Web Design Noida'
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Delhi | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Delhi. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs.',
    url: 'https://factoryjet.com/services/web-design/delhi',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Company in Delhi',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Delhi | FactoryJet',
    description: 'Award-winning Web Design Company in Delhi. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/web-design/delhi',
    languages: webDesignCityAlternatesIN['delhi'],
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
  return <DelhiUpdatedPage />
}
