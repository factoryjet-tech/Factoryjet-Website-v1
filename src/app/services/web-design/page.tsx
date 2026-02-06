import type { Metadata } from 'next'
import { webDesignAlternates } from '@/data/hreflangMap'
import WebDesignPage from '@/pages/WebDesign'

export const metadata: Metadata = {
  title: 'Professional Web Design Services | Custom Website Development | FactoryJet',
  description: 'Transform your business with stunning, high-performance websites. Expert web design & development services. Mobile-first, SEO-optimized, conversion-focused. Fast delivery from 7 days. 150+ successful projects.',
  keywords: [
    'web design services',
    'website development',
    'custom website design',
    'responsive web design',
    'mobile-first design',
    'ui ux design',
    'landing page design',
    'business website design',
    'corporate website development',
    'wordpress development',
    'react website development',
    'nextjs development',
    'frontend development',
    'web application development',
    'website redesign services',
    'seo web design',
    'conversion optimized design',
    'professional web design',
    'affordable web design',
    'fast website development'
  ],
  authors: [{ name: 'FactoryJet' }],
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
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Professional Web Design Services | Custom Websites That Convert',
    description: 'Expert web design & development services. Mobile-first, SEO-optimized, pixel-perfect websites. From concept to launch in record time. Fast delivery, transparent pricing.',
    url: 'https://factoryjet.com/services/web-design',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Design Services | Custom Websites That Convert',
    description: 'Transform your business with stunning websites. Mobile-first, SEO-optimized, conversion-focused design & development.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/web-design',
    languages: webDesignAlternates,
  },
}

export default function Page() {
  return <WebDesignPage />
}
