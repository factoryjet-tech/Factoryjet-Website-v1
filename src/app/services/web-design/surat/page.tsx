import type { Metadata } from 'next'
import { webDesignCityAlternatesIN } from '@/data/hreflangMap'
import SuratPage from '@/pages/Surat'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Web Design Company in Surat | Professional Website Design Services | FactoryJet',
  description: 'Award-winning Web Design Company in Surat. Beautiful, conversion-focused websites with modern UI/UX. Mobile-responsive, fast-loading designs. Serving Adajan, Vesu, Pal, Althan & City Light. Free consultation available!',
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
  return (
    <>
      <SiteHeader />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com' },
        { name: 'Services', url: 'https://factoryjet.com/services' },
        { name: 'Web Design', url: 'https://factoryjet.com/services/web-design' },
        { name: 'Surat', url: 'https://factoryjet.com/services/web-design/surat' },
      ]} />
      <SuratPage />
      <SiteFooter />
    </>
  )
}
