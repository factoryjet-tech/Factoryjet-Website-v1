import type { Metadata } from 'next'
import AIAgentDevPage from '@/lib/legacy-pages/AIAgentDev'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'AI Agent Development Services | Custom AI Agents Deployed in Weeks — FactoryJet',
  description: 'FactoryJet builds custom AI agents for customer support, sales, voice, and workflow automation. Enterprise-grade quality at startup-friendly pricing. Book a free strategy call.',
  keywords: [
    'AI agent development services',
    'AI agent development company',
    'custom AI agent development',
    'agentic AI development',
    'AI agent consulting',
    'multi-agent orchestration',
    'AI agent for business',
    'LangChain AI agent development',
    'voice AI agent development',
    'AI customer support agent',
  ],
  openGraph: {
    title: 'AI Agent Development Services — From Concept to Production in Weeks',
    description: 'FactoryJet builds custom AI agents for customer support, sales, voice, and workflow automation. Enterprise-grade quality at startup-friendly pricing.',
    type: 'website',
    url: 'https://www.factoryjet.com/services/ai-agent-development',
    siteName: 'FactoryJet',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Agent Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Development Services — From Concept to Production in Weeks',
    description: 'Custom AI agents for customer support, sales, voice, and workflow automation. Enterprise-grade quality, deployed in weeks.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://www.factoryjet.com/services/ai-agent-development',
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
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com' },
        { name: 'Services', url: 'https://factoryjet.com/services' },
        { name: 'AI Agent Development', url: 'https://factoryjet.com/services/ai-agent-development' },
      ]} />
      <AIAgentDevPage />
    </>
  )
}
