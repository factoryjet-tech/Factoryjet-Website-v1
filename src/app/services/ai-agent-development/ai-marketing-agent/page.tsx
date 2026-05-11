import type { Metadata } from 'next'
import AIServicePage from '@/lib/legacy-pages/UsAIServicePage/App'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { aiMarketingAgentData } from '@/lib/legacy-pages/UsAIServicePage/data/ai-marketing-agent'

export const metadata: Metadata = {
  title: 'AI Marketing Agent Development | Smart Marketing Automation | FactoryJet',
  description:
    'AI marketing agents for businesses. Automate content creation, campaign optimization, and multi-channel marketing with intelligent AI automation.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Marketing Agent Development | Smart Marketing Automation',
    description:
      'AI marketing agents that automate content creation and campaign optimization.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Marketing Agent Development',
      },
    ],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-marketing-agent',
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
      <AIServicePage data={aiMarketingAgentData} region="in" />
      <SiteFooter />
    </>
  )
}
