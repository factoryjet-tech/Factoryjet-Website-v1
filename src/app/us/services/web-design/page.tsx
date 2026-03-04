import type { Metadata } from 'next'
import { webDesignAlternates } from '@/data/hreflangMap'
import UsWebServicePage from '@/pages/UsWebServicePage/App'

export const metadata: Metadata = {
  title: 'Web Design Services USA | Professional Website Development | FactoryJet',
  description: 'Professional web design services for US businesses. Custom, responsive websites with modern UI/UX. SEO-optimized, fast-loading designs. Affordable pricing with quick turnaround. Get a free consultation!',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Services USA | Professional Website Development',
    description: 'Professional web design services for US businesses. Custom, responsive websites with modern UI/UX.',
    url: 'https://factoryjet.com/us/services/web-design',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design Services USA',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Services USA | FactoryJet',
    description: 'Professional web design services for US businesses. Custom, responsive websites.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/web-design',
    languages: webDesignAlternates,
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
  return <UsWebServicePage />
}
