import type { Metadata } from 'next'
import AIServicePage from '@/lib/legacy-pages/UsAIServicePage/App'
import { aiWorkflowAutomationData } from '@/lib/legacy-pages/UsAIServicePage/data/ai-workflow-automation'

export const metadata: Metadata = {
  title: 'AI Workflow Automation Agent | Business Process Automation | FactoryJet',
  description:
    'Custom AI workflow automation agents that handle employee onboarding, document processing, invoice reconciliation, compliance auditing, and more. 40–60% efficiency gains. 35% cost reduction.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Workflow Automation Agent | Business Process Automation',
    description:
      'Custom AI workflow automation agents for onboarding, document processing, invoicing, compliance, and more. 40–60% efficiency gains.',
    url: 'https://factoryjet.com/us/services/ai-workflow-automation',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Workflow Automation Agent',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation Agent | FactoryJet',
    description:
      'Custom AI workflow automation agents for onboarding, document processing, invoicing, compliance, and more. 40–60% efficiency gains.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ai-workflow-automation',
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
  return <AIServicePage data={aiWorkflowAutomationData} />
}
