import type { Metadata } from 'next'
import AIServicePage from '@/lib/legacy-pages/UsAIServicePage/App'
import { aiCustomerSupportData } from '@/lib/legacy-pages/UsAIServicePage/data/ai-customer-support'

export const metadata: Metadata = {
  title: 'AI Customer Support Agent for SMBs | 24/7 Automated Support | FactoryJet',
  description:
    'Custom AI customer support agents that resolve up to 80% of tickets autonomously. Omnichannel deployment, CRM integration, and 24/7 availability. Starting from $2,999. Get a free assessment.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Customer Support Agent | 24/7 Automated Support',
    description:
      'Custom AI customer support agents that resolve up to 80% of tickets autonomously. Omnichannel deployment, CRM integration, and 24/7 availability.',
    url: 'https://factoryjet.com/us/services/ai-customer-support',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Customer Support Agent',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Customer Support Agent | FactoryJet',
    description:
      'Custom AI customer support agents that resolve up to 80% of tickets autonomously. 24/7 availability starting from $2,999.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ai-customer-support',
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
  return <AIServicePage data={aiCustomerSupportData} />
}
