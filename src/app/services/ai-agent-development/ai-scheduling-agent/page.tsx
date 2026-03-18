import type { Metadata } from 'next'
import AIServicePage from '@/lib/legacy-pages/UsAIServicePage/App'
import { aiSchedulingAgentData } from '@/lib/legacy-pages/UsAIServicePage/data/ai-scheduling-agent'

export const metadata: Metadata = {
  title: 'AI Scheduling Agent Development | Automated Booking & Scheduling | FactoryJet',
  description:
    'AI scheduling agents for businesses. Automate appointment booking, calendar management, and scheduling workflows with intelligent AI automation.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Scheduling Agent Development | Automated Booking & Scheduling',
    description:
      'AI scheduling agents that automate appointment booking and calendar management.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Scheduling Agent Development',
      },
    ],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-scheduling-agent',
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
  return <AIServicePage data={aiSchedulingAgentData} region="in" />
}
