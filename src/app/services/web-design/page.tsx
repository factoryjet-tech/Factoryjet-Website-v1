import type { Metadata } from 'next';
import { webDesignAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import WebDesignHubSections, { webDesignBreadcrumbs } from '@/components/v2/WebDesignHubSections';
import { WEB_DESIGN_FAQS } from '@/components/v2/WebDesignHubFaqs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

/* ─────────────────────────────────────────────────────────────────────────────
   Website Design hub, rebuilt 2026-09-23 in the AI Agent Development page's
   design system. Serves the US and India with market-neutral copy (hreflang
   en-IN still points at /web-design). No prices on this page.

   Sections live in src/components/v2/WebDesignHubSections.tsx; the FAQ array in
   WebDesignHubFaqs.ts feeds both the visible accordion and the FAQPage schema.
───────────────────────────────────────────────────────────────────────────── */

const URL = 'https://factoryjet.com/services/web-design';
const TITLE = 'Web Design Company | Website Design & Development | FactoryJet';
const DESCRIPTION =
  'FactoryJet is a web design company that designs, builds, and redesigns fast websites on WordPress, Webflow, Framer, and Next.js that Google and AI can read.';
const SOCIAL_IMAGE = 'https://factoryjet.com/images/web-design-hub/web-design-definition-model.webp';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: SOCIAL_IMAGE, width: 1400, height: 933, alt: 'A white web page connected to a magnifying glass, a speech bubble, and a stack of index cards' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
  alternates: {
    canonical: URL,
    languages: webDesignAlternates,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

// Freshness signal. Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-09-23';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${URL}#webpage`,
  url: URL,
  name: TITLE,
  description: DESCRIPTION,
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.fact p', '.ans'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Design and Development Services',
  serviceType: 'Web design and development',
  description:
    'Custom website design, website development, and website redesign on WordPress, Webflow, Framer, Next.js, and headless builds for B2B and service businesses. Sites are built for mobile speed and structured so Google and AI assistants can read them, then supported after launch. The client owns the code and every account.',
  url: URL,
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'India' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: WEB_DESIGN_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function WebDesignPage() {
  return (
    <>
      <script id="web-design-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="web-design-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="web-design-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbSchema items={webDesignBreadcrumbs} />

      <SiteHeader locale="us" cta={{ label: 'Book an Audit', modal: true, region: 'us' }} />

      <WebDesignHubSections />

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
