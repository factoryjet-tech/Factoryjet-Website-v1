import type { Metadata } from 'next'
import AIServicePage from '@/lib/legacy-pages/UsAIServicePage/App'
import { aiSchedulingAgentData } from '@/lib/legacy-pages/UsAIServicePage/data/ai-scheduling-agent'

export const metadata: Metadata = {
  title: 'AI Scheduling Agent | Automated Appointment Booking | FactoryJet',
  description:
    'Custom AI scheduling agents that handle appointment booking, rescheduling, reminders, and waitlist management through natural conversation. Reduce no-shows by up to 75%. Deploys in 3–4 weeks.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'AI Scheduling Agent | Automated Appointment Booking',
    description:
      'Custom AI scheduling agents that handle appointment booking, rescheduling, reminders, and waitlist management. Reduce no-shows by up to 75%.',
    url: 'https://factoryjet.com/us/services/ai-scheduling-agent',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet - AI Scheduling Agent',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Scheduling Agent | FactoryJet',
    description:
      'Custom AI scheduling agents that handle appointment booking, rescheduling, reminders, and waitlist management. Reduce no-shows by up to 75%.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/ai-scheduling-agent',
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
  return <AIServicePage data={aiSchedulingAgentData} />
}
