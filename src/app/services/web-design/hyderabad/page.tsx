import type { Metadata } from 'next'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import HyderabadPage from '@/pages/Hyderabad'

export const metadata: Metadata = {
  title: 'Web Design Company in Hyderabad | Professional Website Design Services | FactoryJet',
  description: 'Award-winning Web Design Company in Hyderabad. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs. Serving HITEC City, Gachibowli, Madhapur, Kondapur & Jubilee Hills. Free consultation available!',
  keywords: [
    'Web Design Company in Hyderabad',
    'Website Design Services Hyderabad',
    'UI/UX Design Hyderabad',
    'Custom Web Design Hyderabad',
    'Professional Web Designer Hyderabad',
    'Web Design Agency Hyderabad',
    'Best web designers Hyderabad',
    'Responsive web design Hyderabad',
    'Mobile web design Hyderabad',
    'Website redesign services Hyderabad'
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Hyderabad | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Hyderabad. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs.',
    url: 'https://factoryjet.com/services/web-design/hyderabad',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Company in Hyderabad',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Hyderabad | FactoryJet',
    description: 'Award-winning Web Design Company in Hyderabad. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/web-design/hyderabad',
    languages: webDesignCityAlternatesIN['hyderabad'],
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
  return <HyderabadPage />
}
