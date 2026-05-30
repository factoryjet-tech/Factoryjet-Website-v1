import type { Metadata } from 'next';
import Script from 'next/script';
import { faqAlternates } from '@/data/hreflangMap';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import FaqContent from './FaqContent';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

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
        text: 'Our fixed-price packages range from $1,999 (Launch) to $7,999 (Scale), saving you 55-75% compared to traditional agencies. Launch Package: $1,999 for 5-7 pages, 10-14 business days. Growth Package: $3,999 for 12 pages, 14-21 business days. Scale Package: $7,999 for 25+ pages, 21-35 business days.',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '150',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1',
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

const howToData = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your website in 7 days',
  description: 'Our proven 7-day process for delivering professional, SEO-optimized websites for US businesses.',
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery Call',
      text: 'We learn your business, goals, and target audience. We define the sitemap, content strategy, and technical requirements.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: 'We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 — Design',
      text: 'We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 — Development & SEO',
      text: 'We build your site in Next.js or WordPress, optimize Core Web Vitals, add structured data, and connect all integrations.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 — Launch',
      text: 'Your website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support.',
    },
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
      <Script
        id="howto-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
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
        cta={{ label: 'Get a Quote', href: '/contact' }}
      />

      <main className="bg-fj-cream">
        <FaqContent />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
