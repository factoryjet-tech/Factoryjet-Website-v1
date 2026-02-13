import type { Metadata } from 'next'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import AhmedabadPage from '@/pages/Ahmedabad'

export const metadata: Metadata = {
  title: 'Web Design Company in Ahmedabad | Elite Website Solutions',
  description: 'Trusted web design company in Ahmedabad creating scalable, revenue-focused websites for businesses in SG Highway, Vastrapur & Bodakdev.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Ahmedabad | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Ahmedabad. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs.',
    url: 'https://factoryjet.com/services/web-design/ahmedabad',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Company in Ahmedabad',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Ahmedabad | FactoryJet',
    description: 'Award-winning Web Design Company in Ahmedabad. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/web-design/ahmedabad',
    languages: webDesignCityAlternatesIN['ahmedabad'],
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
  return <AhmedabadPage />
}
