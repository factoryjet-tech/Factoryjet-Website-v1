import type { Metadata } from 'next'
import AIServicePage from '@/lib/legacy-pages/UsAIServicePage/App'
import { aiMarketingAgentData } from '@/lib/legacy-pages/UsAIServicePage/data/ai-marketing-agent'

export const metadata: Metadata = {
  title: 'AI Marketing Agent Development USA | Automated Campaign Management | FactoryJet',
  description:
    'Custom AI marketing agent development for US businesses. AI that generates content, manages campaigns, optimizes ad spend, and nurtures leads across every channel. 2-4x marketing efficiency.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Marketing Agent Development USA | Automated Campaign Management',
    description:
      'AI marketing agents that create content, optimize ads, and scale campaigns across every channel.',
    url: 'https://factoryjet.com/us/services/ai-marketing-agent',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Marketing Agent Development',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Agent Development USA | FactoryJet',
    description:
      'AI marketing agents that create content, optimize ads, and scale campaigns across every channel.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ai-marketing-agent',
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
  return <AIServicePage data={aiMarketingAgentData} />
}
