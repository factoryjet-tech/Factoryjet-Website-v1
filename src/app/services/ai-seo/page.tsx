import type { Metadata } from 'next';

import { aiSeoAlternates } from '@/data/hreflangMap';
import { ORG_ID, FOUNDER_ID } from '@/data/organization';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import AiSeoHubSections, { breadcrumbs, CAPABILITIES, COMPETITORS } from '@/components/v2/AiSeoHubSections';
import { AI_SEO_FAQS } from '@/components/v2/AiSeoHubFaqs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/ai-seo: AI Search & SEO hub for the US (the only US SEO hub).
   India has its own hub at /ai-seo; keep India copy off this page (2026-09-26).

   Rebuilt 2026-09-23 from the approved mockup in the AI Agent Development page's
   design system (same port pattern as the homepage, commit 7a8e582). Keyword map
   and SERP research: DataForSEO, 23 Sep 2026.

   /services/seo 301s here since 2026-09-23 (commit 6d2f91b, public/_redirects).
   The classic SEO services directory, the industry SEO pages, the US city SEO
   pages and the classic SEO FAQ category carry that page's job forward.

   Sections: src/components/v2/AiSeoHubSections.tsx (static server component).
   FAQ: src/components/v2/AiSeoHubFaqs.ts feeds BOTH the visible accordion and the
   FAQPage JSON-LD below. Service offers come from CAPABILITIES and the ItemList
   from COMPETITORS, the same arrays the page renders. Every schema const declared
   here is rendered into a script tag; do not add one without wiring it up.
   Hreflang: aiSeoAlternates (src/data/hreflangMap.ts).
   Organization: the full ORGANIZATION_SCHEMA is emitted once by src/app/layout.tsx;
   this page only references it by ORG_ID (the old per-page Organization stub was a
   second, thinner node with the same @id and was removed 2026-09-28).

   2026-09-28 traffic check (GA4 08/31-09/27, GSC 08/29-09/26): the "23 sessions at
   5s" were almost all (direct) visits from Albania, Singapore, China, UAE, Brazil and
   others at 0s, i.e. bots, not a broken page. Google sends this URL almost no
   impressions. The "ai seo services" position swing (17 to 44) belonged to
   /blog/best-ai-seo-agencies-india on India SERPs, not to this page.
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/ai-seo';
const TITLE = 'AI SEO Services & AI SEO Agency in the USA | FactoryJet';
const DESCRIPTION =
  'AI SEO agency and SEO company for US businesses. Get cited by ChatGPT, Perplexity, Gemini and Google AI Overviews and rank on Google. Free AI check.';
const OG_IMAGE = 'https://factoryjet.com/images/ai-seo-hub/ai-seo-definition-answer-path.webp';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 800, alt: 'A web page feeding through a lens to several AI engines and one orange answer bubble' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: PAGE_URL,
    languages: aiSeoAlternates,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/** Honest last-substantive-edit date. Bump only when the page content changes. */
const PAGE_MODIFIED = '2026-10-10';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: TITLE,
  description: DESCRIPTION,
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en',
  author: {
    '@id': FOUNDER_ID,
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: { '@id': ORG_ID },
  about: { '@id': ORG_ID },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]', '.ans'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI SEO Services and SEO',
  serviceType: 'AI SEO services, generative engine optimization, answer engine optimization, search engine optimization',
  alternateName: ['AI SEO agency', 'AI SEO company', 'AI search optimization', 'SEO agency', 'SEO company'],
  description:
    'AI SEO and classic SEO on one month-to-month retainer: getting a business cited by ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews while its Google rankings climb, with citations per engine and rankings in every monthly report.',
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'United States' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI SEO services',
    itemListElement: CAPABILITIES.map((cap) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: cap.title,
        description: cap.body,
        ...(cap.href ? { url: `https://factoryjet.com${cap.href}` } : {}),
      },
    })),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: AI_SEO_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const competitorListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Agencies on Google page one for AI SEO searches in the US, 23 September 2026',
  itemListOrder: 'https://schema.org/ItemListUnordered',
  numberOfItems: COMPETITORS.length,
  itemListElement: COMPETITORS.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: { '@type': 'Organization', name: c.name, url: `https://${c.domain}`, description: c.offers },
  })),
};

export default function AiSeoServicePage() {
  return (
    <>
      <script id="ai-seo-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="ai-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="ai-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="ai-seo-competitor-list-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(competitorListSchema) }} />
      <BreadcrumbSchema items={breadcrumbs} />

      <SiteHeader />
      <AiSeoHubSections />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
