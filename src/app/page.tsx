import type { Metadata } from 'next';
import { homeAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ExitIntentLeadForm from '@/components/ExitIntentLeadForm';
import HomeSections from '@/components/v2/HomeSections';
import { HOME_FAQS } from '@/components/v2/HomeFaqs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

/* ─────────────────────────────────────────────────────────────────────────────
   Homepage, rebuilt 2026-09-23 in the AI Agent Development page's design system.

   Entity (title/meta/Service schema): "Ecommerce Development Company" for DTC and
   B2B brands, with AI development, AI search & SEO, and website design as linked
   secondary lines (each owned by its own service page, see
   pipeline/research/HOMEPAGE-REDESIGN-KEYWORDS-2026-09-23.md).

   Sections live in src/components/v2/HomeSections.tsx; the FAQ array in
   HomeFaqs.ts feeds both the visible accordion and the FAQPage schema below.
───────────────────────────────────────────────────────────────────────────── */

const TITLE = 'Ecommerce Development Company for DTC & B2B Brands | FactoryJet';
const DESCRIPTION =
  'Ecommerce development company for DTC & B2B brands: stores, B2B portals, and the AI agents that keep them running. Plus AI SEO and web design. Get an audit.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://factoryjet.com',
    images: [{ url: 'https://factoryjet.com/images/home/home-unified-commerce-model.webp', width: 1400, height: 933, alt: 'One commerce hub connected to a storefront, a cart, warehouse shelving, and wholesale pallets' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://factoryjet.com/images/home/home-unified-commerce-model.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com',
    languages: homeAlternates,
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
  '@id': 'https://factoryjet.com#webpage',
  url: 'https://factoryjet.com',
  name: TITLE,
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.fact p', '.ans'] },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  description:
    'FactoryJet is an ecommerce development company for DTC and B2B brands and an AI development company. It designs, builds, implements, and supports stores, B2B portals, and AI agents on Shopify, Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, and Commerceflo, plus AI search optimization and website design.',
  sameAs: [
    'https://www.linkedin.com/company/factoryjet',
    'https://www.crunchbase.com/organization/factoryjet',
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Ecommerce development',
  name: 'Ecommerce development and AI commerce agents',
  description:
    'Ecommerce development for DTC and B2B brands: stores and B2B portals on Shopify, Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, and Commerceflo, integrated with ERP, POS, 3PL, and marketplaces, plus AI agents that list, reprice, and keep inventory in sync.',
  provider: { '@id': 'https://factoryjet.com/#organization' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'DTC and B2B brands' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'FactoryJet services',
    itemListElement: [
      { name: 'Ecommerce development', url: 'https://factoryjet.com/services/ecommerce-development' },
      { name: 'AI agent development', url: 'https://factoryjet.com/services/ai-agent-development' },
      { name: 'AI SEO services', url: 'https://factoryjet.com/services/ai-seo' },
      { name: 'Website design and development', url: 'https://factoryjet.com/services/web-design' },
    ].map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: s.url } })),
  },
};

export default function USHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://factoryjet.com' }]} />

      <SiteHeader cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }} />

      <HomeSections />

      <ExitIntentLeadForm
        region="us"
        source="exit_intent_us_home"
        heading="Get a free commerce audit"
        subheading="We will map your channels, catalog, and B2B into one system. Just your name and email."
        promo="Free commerce audit, no cost, no obligation"
      />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
