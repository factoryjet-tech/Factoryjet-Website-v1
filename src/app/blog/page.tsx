import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import BlogPage from '@/pages/Blog'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

// Blog listing page structured data
const blogListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'FactoryJet Blog',
  description: 'Expert insights on web development, e-commerce, and digital marketing for growing businesses.',
  url: 'https://factoryjet.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'FactoryJet',
    logo: {
      '@type': 'ImageObject',
      url: 'https://factoryjet.com/FinalLogo.svg',
    },
  },
}

export const metadata: Metadata = {
  title: 'Web Development & E-Commerce Blog | FactoryJet',
  description: 'Expert insights on web development, e-commerce, digital marketing & tech trends. Actionable tips, tutorials & best practices from FactoryJet.',
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
    title: 'FactoryJet Blog - Web Development & E-Commerce Insights',
    description: 'Expert insights on web development, e-commerce, and digital marketing. Learn from industry experts and grow your online business.',
    url: 'https://factoryjet.com/blog',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Blog - Web Development & E-Commerce Insights',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FactoryJet Blog - Web Development & E-Commerce Insights',
    description: 'Expert insights on web development, e-commerce, and digital marketing.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/blog',
  },
}

export default function Page() {
  return (
    <>
      <SiteHeader locale="us" />
      {/* Breadcrumb Structured Data */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com' },
        { name: 'Blog', url: 'https://factoryjet.com/blog' },
      ]} />

      {/* Blog Listing Structured Data */}
      <script
        id="blog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />

      <BlogPage />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  )
}
