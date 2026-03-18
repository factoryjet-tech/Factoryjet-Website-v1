import type { Metadata } from 'next'
import AIServicePage from '@/lib/legacy-pages/UsAIServicePage/App'
import { aiMarketingAgentData } from '@/lib/legacy-pages/UsAIServicePage/data/ai-marketing-agent'

export const metadata: Metadata = {
  title: 'AI Marketing Agent Development India | Smart Marketing Automation | FactoryJet',
  description:
    'AI marketing agents for Indian businesses. Automate content creation, campaign optimization, and multi-channel marketing with intelligent AI automation.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Marketing Agent Development India | Smart Marketing Automation',
    description:
      'AI marketing agents that automate content creation and campaign optimization.',
    url: 'https://factoryjet.com/services/ai-marketing-agent',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Marketing Agent Development',
      },
    ],
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-marketing-agent',
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
  return <AIServicePage data={aiMarketingAgentData} region="in" />
}
