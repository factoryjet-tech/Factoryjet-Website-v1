import type { Metadata } from 'next'
import CasePage from '@/pages/Case'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Case Studies — Real Client Results | FactoryJet',
  description: 'Browse FactoryJet case studies — web development & e-commerce projects with measurable results. See how we've helped 500+ businesses grow online.',
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
    title: 'FactoryJet Case Studies - Work That Drives Growth',
    description: 'Explore our portfolio of successful web development and e-commerce projects. Real results from global leaders in E-commerce, SaaS, and Enterprise.',
    url: 'https://factoryjet.com/case',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Case Studies Portfolio',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FactoryJet Case Studies - Work That Drives Growth',
    description: 'Explore successful web development and e-commerce projects with real business results.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/case',
  },
}

export default function Page() {
  return (
    <>
      <SiteHeader locale="in" />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com' },
        { name: 'Case Studies', url: 'https://factoryjet.com/case' },
      ]} />
      <CasePage />
      <SiteFooter locale="in" />
    </>
  )
}
