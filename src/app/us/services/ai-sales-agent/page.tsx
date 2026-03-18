import type { Metadata } from 'next'
import AIServicePage from '@/lib/legacy-pages/UsAIServicePage/App'
import { aiSalesAgentData } from '@/lib/legacy-pages/UsAIServicePage/data/ai-sales-agent'

export const metadata: Metadata = {
  title: 'AI Sales Agent Development USA | AI SDR That Books Meetings | FactoryJet',
  description:
    'Custom AI sales agent development for US B2B teams. AI SDR that responds to leads in under 60 seconds, qualifies prospects, and books meetings on autopilot. ROI in 60-90 days.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Sales Agent Development USA | AI SDR That Books Meetings',
    description:
      'AI sales agents that respond instantly, qualify leads, and book meetings on autopilot.',
    url: 'https://factoryjet.com/us/services/ai-sales-agent',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Sales Agent Development',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Sales Agent Development USA | FactoryJet',
    description:
      'AI sales agents that respond instantly, qualify leads, and book meetings on autopilot.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ai-sales-agent',
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
  return <AIServicePage data={aiSalesAgentData} />
}
