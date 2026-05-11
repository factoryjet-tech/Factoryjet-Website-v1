import type { Metadata } from 'next'
import AIServicePage from '@/lib/legacy-pages/UsAIServicePage/App'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { aiCustomerSupportData } from '@/lib/legacy-pages/UsAIServicePage/data/ai-customer-support'

export const metadata: Metadata = {
  title: 'AI Customer Support Agent | 24/7 Automated Support | FactoryJet',
  description:
    'AI customer support agents for businesses. Provide 24/7 intelligent support, resolve tickets faster, and improve customer satisfaction with AI automation.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Customer Support Agent | 24/7 Automated Support',
    description:
      'AI customer support agents that provide 24/7 intelligent support and resolve tickets faster.',
    url: 'https://factoryjet.com/services/ai-agent-development/ai-customer-support',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Customer Support Agent',
      },
    ],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/ai-agent-development/ai-customer-support',
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
      <AIServicePage data={aiCustomerSupportData} region="in" />
      <SiteFooter />
    </>
  )
}
