import type { Metadata } from 'next'
import AIServicePage from '@/lib/legacy-pages/UsAIServicePage/App'
import { aiVoiceAgentData } from '@/lib/legacy-pages/UsAIServicePage/data/ai-voice-agent'

export const metadata: Metadata = {
  title: 'AI Voice Agent for Business | Never Miss a Call Again | FactoryJet',
  description:
    'Custom AI voice agents that answer every call, book appointments, qualify leads, and handle complex conversations 24/7. Natural-sounding, multilingual, HIPAA-compliant options. Starting from $3,499.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Voice Agent | Never Miss a Call Again',
    description:
      'Custom AI voice agents that answer every call, book appointments, qualify leads, and handle complex conversations 24/7.',
    url: 'https://factoryjet.com/us/services/ai-voice-agent',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Voice Agent',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Voice Agent | FactoryJet',
    description:
      'Custom AI voice agents that answer every call, book appointments, and qualify leads 24/7. Starting from $3,499.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ai-voice-agent',
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
  return <AIServicePage data={aiVoiceAgentData} />
}
