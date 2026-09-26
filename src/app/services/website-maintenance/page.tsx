import type { Metadata } from 'next';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { ORG_REF } from '@/data/organization';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import WebsiteMaintenanceSections, { wmBreadcrumbs, CAPABILITIES, PROVIDERS } from '@/components/v2/WebsiteMaintenanceSections';
import { WM_FAQS } from '@/components/v2/WebsiteMaintenanceFaqs';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { websiteMaintenanceAlternates } from '@/data/hreflangMap';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/website-maintenance: general website maintenance hub for the US.

   Built 2026-09-26 (US Tier 1 batch) on the current US design system, mirroring
   /services/ai-seo. Brief: pipeline/research/briefs/US-TIER1-BUILD-BRIEF-2026-09-26.md.
   Integration notes (sitemap, llms.txt, menus, inbound links, hreflang):
   pipeline/research/briefs/us-tier1-integration/website-maintenance.md.

   Links down to /services/shopify-maintenance-services (Shopify store retainers)
   and /services/ai-agent-monitoring (AI agents). No FactoryJet prices, hours or
   response times: support plan numbers are unconfirmed.

   Sections: src/components/v2/WebsiteMaintenanceSections.tsx (static server component).
   FAQ: src/components/v2/WebsiteMaintenanceFaqs.ts feeds BOTH the visible accordion and
   the FAQPage JSON-LD below. Service offers come from CAPABILITIES and the ItemList from
   PROVIDERS, the same arrays the page renders. Every schema const declared here is
   rendered into a script tag; do not add one without wiring it up.
   Hreflang: websiteMaintenanceAlternates in src/data/hreflangMap.ts, reciprocal with
   /au/website-maintenance (en-US, en-AU; x-default = this page).
───────────────────────────────────────────────────────────────────────────── */

const PAGE_URL = 'https://factoryjet.com/services/website-maintenance';
const TITLE = 'Website Maintenance Services for US Businesses | FactoryJet';
const H1 = 'Website Maintenance Services That Keep Your Site Safe, Fast and Found';
const DESCRIPTION =
  'Website maintenance services for WordPress, Shopify and custom sites: tested updates, backups, security, speed and ADA checks, and fixes. Free site check.';
const OG_IMAGE = 'https://factoryjet.com/og-default.png';

/** Honest last-substantive-edit date. Bump only when the page content changes. */
const PAGE_MODIFIED = '2026-09-26';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'FactoryJet website maintenance services' }],
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
    languages: websiteMaintenanceAlternates,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: TITLE,
  headline: H1,
  description: DESCRIPTION,
  datePublished: '2026-09-26',
  dateModified: PAGE_MODIFIED,
  inLanguage: 'en-US',
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
  about: { '@id': 'https://factoryjet.com/#organization' },
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]', '.ans'] },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'Website Maintenance Services',
  serviceType: 'Website maintenance, website support, WordPress maintenance, website care plans',
  alternateName: ['Website maintenance company', 'Website support services', 'WordPress maintenance services', 'Website care plans', 'Website management services'],
  description:
    'Website maintenance for US businesses on WordPress, WooCommerce, Shopify, Webflow, Magento and custom code: updates tested on a staging copy, off-site backups with restore tests, uptime and security monitoring, hack cleanup, speed and accessibility checks, content changes and takeover of sites other agencies built. Accounts stay in the client’s name.',
  url: PAGE_URL,
  provider: ORG_REF,
  areaServed: { '@type': 'Country', name: 'United States' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website maintenance services',
    itemListElement: CAPABILITIES.map((cap) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: cap.title, description: cap.body },
    })),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  mainEntity: WM_FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const providerListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'US website maintenance companies on Google page one, 26 September 2026',
  itemListOrder: 'https://schema.org/ItemListUnordered',
  numberOfItems: PROVIDERS.length,
  itemListElement: PROVIDERS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: { '@type': 'Organization', name: p.name, url: `https://${p.domain}`, description: p.model },
  })),
};

export default function WebsiteMaintenancePage() {
  return (
    <>
      <script id="website-maintenance-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script id="website-maintenance-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="website-maintenance-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="website-maintenance-provider-list-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(providerListSchema) }} />
      <BreadcrumbSchema items={wmBreadcrumbs} />

      <SiteHeader />
      <WebsiteMaintenanceSections />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
