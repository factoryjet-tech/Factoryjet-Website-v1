import type { Metadata } from 'next'
import AIServicePage from '@/lib/legacy-pages/UsAIServicePage/App'
import { aiChatbotData } from '@/lib/legacy-pages/UsAIServicePage/data/ai-chatbot'

export const metadata: Metadata = {
  title: 'AI Chatbot Development Services | Custom AI Chat Agent | FactoryJet',
  description:
    'Custom AI chatbot development for businesses. Intelligent conversational agents that capture leads, qualify visitors, and provide 24/7 support. Deploys in 2-3 weeks.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Chatbot Development Services | Custom AI Chat Agent',
    description:
      'Custom AI chatbots that capture leads, qualify visitors, and provide 24/7 support.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Chatbot Development',
      },
    ],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-chatbot',
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
  return <AIServicePage data={aiChatbotData} region="in" />
}
