import type { Metadata } from 'next'
import NewYorkFAQPage from '@/lib/legacy-pages/NewYorkFAQ/App'
import { faqData } from '@/lib/legacy-pages/NewYorkFAQ/data/faqData'

export const metadata: Metadata = {
  title: 'Web Design FAQ New York City | Common Questions | FactoryJet NYC',
  description: 'Frequently asked questions about web design and development services in New York City. Get answers about pricing, timelines, process, and more from FactoryJet NYC.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design FAQ New York City | FactoryJet',
    description: 'Get answers to common questions about web design services in NYC.',
    url: 'https://factoryjet.com/us/services/web-design/new-york/faq',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - Web Design FAQ NYC',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design FAQ NYC | FactoryJet',
    description: 'Get answers to common questions about web design services in NYC.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/web-design/new-york/faq',
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: Array.isArray(faq.answer) ? faq.answer.join(' ') : faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <NewYorkFAQPage />
    </>
  )
}