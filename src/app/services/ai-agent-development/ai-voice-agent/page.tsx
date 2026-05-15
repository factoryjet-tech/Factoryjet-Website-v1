import type { Metadata } from 'next'
import AIServicePage from '@/lib/legacy-pages/UsAIServicePage/App'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { aiVoiceAgentData } from '@/lib/legacy-pages/UsAIServicePage/data/ai-voice-agent'

export const metadata: Metadata = {
  title: 'AI Voice Agent Development | Voice-Powered AI Assistants | FactoryJet',
  description:
    'AI voice agents for businesses. Build intelligent voice assistants for customer calls, IVR systems, and voice-powered automation.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Voice Agent Development | Voice-Powered AI Assistants',
    description:
      'AI voice agents for intelligent customer calls and voice-powered automation.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Voice Agent Development',
      },
    ],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-voice-agent',
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
      <SiteHeader locale="in" />
      <AIServicePage data={aiVoiceAgentData} region="in" />
      <SiteFooter locale="in" />
    </>
  )
}
