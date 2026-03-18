import type { Metadata } from 'next'
import AIServicePage from '@/lib/legacy-pages/UsAIServicePage/App'
import { aiWorkflowAutomationData } from '@/lib/legacy-pages/UsAIServicePage/data/ai-workflow-automation'

export const metadata: Metadata = {
  title: 'AI Workflow Automation India | End-to-End Business Automation | FactoryJet',
  description:
    'AI workflow automation for Indian businesses. Automate repetitive processes, streamline operations, and boost productivity with intelligent workflow agents.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Workflow Automation India | End-to-End Business Automation',
    description:
      'AI workflow automation that streamlines operations and boosts productivity.',
    url: 'https://factoryjet.com/services/ai-workflow-automation',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Workflow Automation',
      },
    ],
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-workflow-automation',
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
  return <AIServicePage data={aiWorkflowAutomationData} region="in" />
}
