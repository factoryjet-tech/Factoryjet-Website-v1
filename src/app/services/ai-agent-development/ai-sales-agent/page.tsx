import type { Metadata } from 'next'
import AIServicePage from '@/lib/legacy-pages/UsAIServicePage/App'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { aiSalesAgentData } from '@/lib/legacy-pages/UsAIServicePage/data/ai-sales-agent'

export const metadata: Metadata = {
  title: 'AI Sales Agent Development | Automated Sales Automation | FactoryJet',
  description:
    'AI-powered sales agents for businesses. Automate lead qualification, follow-ups, and pipeline management. Close more deals with intelligent sales automation.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Sales Agent Development | Automated Sales Automation',
    description:
      'AI-powered sales agents that automate lead qualification and close more deals.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Sales Agent Development',
      },
    ],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-sales-agent',
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
      <AIServicePage data={aiSalesAgentData} region="in" />
      <SiteFooter />
    </>
  )
}
