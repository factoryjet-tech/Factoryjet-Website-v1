import type { Metadata } from 'next';
import Script from 'next/script';
import { faqAlternates } from '@/data/hreflangMap';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FaqContent from './FaqContent';

export const metadata: Metadata = {
  title: 'FAQ | Web Development Questions | FactoryJet USA',
  description:
    'Find answers to frequently asked questions about web development, e-commerce, SEO, pricing, and our AI-native approach. Get expert help from FactoryJet USA.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'FAQ | Web Development Questions | FactoryJet USA',
    description:
      'Find answers to frequently asked questions about web development, e-commerce, SEO, and pricing.',
    url: 'https://factoryjet.com/us/faq',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet FAQ - Web Development Questions',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Web Development Questions | FactoryJet USA',
    description:
      'Find answers about web development, e-commerce, SEO, and pricing from FactoryJet.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/faq',
    languages: faqAlternates,
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
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our fixed-price packages range from $1,999 (Launch) to $7,999 (Scale), saving you 55-75% compared to US agencies. Launch Package: $1,999 for 5-7 pages, 10-14 business days. Growth Package: $3,999 for 12 pages, 14-21 business days. Scale Package: $7,999 for 25+ pages, 21-35 business days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose FactoryJet over other agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We combine AI efficiency with human expertise to deliver 75-85% faster delivery and 55-75% lower costs. Our AI-Native approach includes SEO optimization for Google PLUS AI platforms like ChatGPT, Perplexity, and Gemini.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Launch Package: 10-14 Business Days. Growth Package: 14-21 Business Days. Scale Package: 21-35 Business Days. Our AI-Native workflow is 75-85% faster than traditional agencies (8-16 weeks).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is GEO/AEO/AIO SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "GEO (Generative Engine Optimization) gets you cited in AI summaries like Perplexity and Google AI Overview. AEO (Answer Engine Optimization) wins featured snippets. AIO (AI Optimization) ensures you're recommended by ChatGPT, Claude, and Gemini.",
      },
    },
  ],
};

const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-332-867-0003',
    contactType: 'customer service',
    email: 'connect@factoryjet.com',
    areaServed: 'US',
    availableLanguage: 'English',
  },
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://factoryjet.com/us/faq' },
  ],
};

export default function USFaqPage() {
  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Script
        id="organization-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Script
        id="breadcrumb-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/us/services/web-design' },
          { label: 'Shopify', href: '/us/services/shopify-development' },
          { label: 'AI Agents', href: '/us/services/ai-agents' },
          { label: 'Pricing', href: '/us/pricing' },
          { label: 'Portfolio', href: '/us/portfolio' },
          { label: 'FAQ', href: '/us/faq' },
        ]}
        cta={{ label: 'Free Strategy Call', href: '/contact' }}
      />

      <main className="bg-fj-cream">
        <FaqContent />
      </main>

      <SiteFooter />
    </>
  );
}
