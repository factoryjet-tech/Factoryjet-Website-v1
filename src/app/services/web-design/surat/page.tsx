import type { Metadata } from 'next'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import SuratPage from '@/pages/Surat'

export const metadata: Metadata = {
  title: 'Web Design Company in Surat | Professional Website Design Services | FactoryJet',
  description: 'Award-winning Web Design Company in Surat. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs. Serving Adajan, Vesu, Pal, Althan & City Light. Free consultation available!',
  keywords: [
    'Web Design Company in Surat',
    'Website Design Services Surat',
    'UI/UX Design Surat',
    'Custom Web Design Surat',
    'Professional Web Designer Surat',
    'Web Design Agency Surat',
    'Best web designers Surat',
    'Responsive web design Surat',
    'Mobile web design Surat',
    'Website redesign services Surat'
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Surat | Professional Website Design Services',
    description: 'Award-winning Web Design Company in Surat. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs.',
    url: 'https://factoryjet.com/services/web-design/surat',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Company in Surat',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Surat | FactoryJet',
    description: 'Award-winning Web Design Company in Surat. Beautiful, conversion-focused websites with modern UI/UX.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/web-design/surat',
    languages: webDesignCityAlternatesIN['surat'],
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
  return <SuratPage />
}
