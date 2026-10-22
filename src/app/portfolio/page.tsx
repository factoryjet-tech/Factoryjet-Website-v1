import type { Metadata } from 'next';
import SiteHeader from '@/components/v2/SiteHeader';
import Link from 'next/link';
import SiteFooter from '@/components/v2/SiteFooter';
import FAQ from '@/components/v2/FAQ';
import PortfolioGrid from './PortfolioGrid';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { portfolioAlternatesUS } from '@/data/hreflangMap';

export const metadata: Metadata = {
  title: 'Portfolio: Stores, Sites and AI Agents We Built | FactoryJet',
  description:
    'Shopify, WooCommerce, Commerceflo and Wix Studio builds plus AI agents for Shopholistico, Washington Law Group, Impulse Branding and more. 12 case studies.',
  authors: [{ name: 'FactoryJet' }],
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
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'FactoryJet Portfolio: Stores, Sites and AI Agents We Built',
    description: 'Shopify, WooCommerce, Commerceflo and Wix Studio builds plus AI agents, with 12 case studies.',
    url: 'https://factoryjet.com/portfolio',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Portfolio',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FactoryJet Portfolio: Stores, Sites and AI Agents We Built',
    description: 'Shopify, WooCommerce, Commerceflo and Wix Studio builds plus AI agents, with 12 case studies.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/portfolio',
    languages: portfolioAlternatesUS,
  },
};

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-10-22';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/portfolio#webpage',
  url: 'https://factoryjet.com/portfolio',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://factoryjet.com/portfolio' },
  ],
};

const ORG_SCHEMA = { '@context': 'https://schema.org', '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' };

/* 2026-10-22: the HowTo schema that sat here described a 7-day process and a
   "30-day post-launch support" promise that never rendered on this page. Schema
   for content a visitor cannot see is the drift the rubric fails, and fixed
   warranty day counts are retired from house terms, so it was removed. */

// One line per public case study. Scope only, never results: the per-project
// numbers live on each case study page with their own context.
const CASE_STUDIES = [
  { slug: 'shopholistico-shopify-store', client: 'Shopholistico', line: 'Custom Shopify theme, tiered subscriptions, a bundle and ad landing pages for a US whole-food supplement brand.' },
  { slug: 'washington-law-group-accident-detection-agent', client: 'Washington Law Group', line: 'AI agent that reads crash news across all 50 states and emails the firm the serious commercial-vehicle accidents.' },
  { slug: 'belle-maison-ecommerce-success', client: 'Belle Maison', line: 'DTC and trade storefront on Commerceflo, with account-based pricing and quote-to-order for trade buyers.' },
  { slug: 'gpsuk-promotional-products', client: 'GPSUK', line: 'B2B storefront on Commerceflo for a UK promotional products supplier whose trade buyers reorder and request quotes.' },
  { slug: 'sow-easy-distributor-portal', client: 'Sow Easy', line: 'B2B ecommerce on WooCommerce connected to Odoo for stock, pricing and product identifiers. Build in progress.' },
  { slug: 'impulse-branding-migration', client: 'Impulse Branding Solutions', line: 'Website build with ongoing SEO and AI search work for a branding and architecture business.' },
  { slug: 'yadav-entrance-automation-website-seo', client: 'Yadav Entrance Automation', line: 'Website built from scratch for an entrance automation installer, with SEO and AI SEO.' },
  { slug: 'rdb-travels-cab-booking-website', client: 'RDB Travels', line: 'Cab and group-travel website whose quote form turns a trip request into a ready-to-send WhatsApp message.' },
  { slug: 'flying-pixel-agency', client: 'Flying Pixel', line: 'Next.js website for a drone survey company, with SEO built in.' },
  { slug: 'formative-concepts-bim', client: 'Formative Concepts', line: '20+ page WordPress site for an MEP and BIM consultancy.' },
  { slug: 'grofresh-manufacturing-erp', client: 'GroFresh Agro', line: 'Custom ERPNext implementation replacing Tally and spreadsheets for a food processing manufacturer.' },
  { slug: 'rukman-transport-logistics', client: 'Rukman Transport', line: 'WordPress site and local SEO for a B2B logistics operator.' },
];

const PORTFOLIO_FAQS = [
  { question: 'Which clients can FactoryJet name?', answer: 'Shopholistico, Washington Law Group, Belle Maison, Impulse Branding Solutions, Yadav Entrance Automation, RDB Travels, Flying Pixel and the other companies with a case study on this page. Each case study states the scope we delivered. Clients without a published case study are not named.' },
  { question: 'Which platforms do you build on?', answer: 'Shopify and Shopify Plus, WooCommerce, BigCommerce, Adobe Commerce (Magento), Commerceflo by FactoryJet, WordPress, Wix Studio and headless builds. On the operations side we have worked with Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs.' },
  { question: 'Do you build AI agents as well as websites and stores?', answer: 'Yes. Washington Law Group runs an AI agent we built that checks crash news in all 50 states every day and emails the firm the serious commercial-vehicle accidents. We also build agents for quoting, order entry, inventory and customer support.' },
  { question: 'Can we see a demo before we sign?', answer: 'Yes. We show working software on your own data before a contract, for example a draft theme in your own store or an agent run against your own rules. You judge the work before you commit to the build.' },
  { question: 'How long does a project like these take?', answer: 'Websites of up to 5 pages ship in 7 days. A custom-theme store on a hosted platform usually takes 3 to 5 weeks, an advanced store with subscriptions, B2B or a migration 5 to 8 weeks, and a headless or custom build 8 to 14 weeks.' },
  { question: 'Do you work with B2B and wholesale businesses?', answer: 'Yes. Belle Maison and GPSUK run trade storefronts with account-based pricing and quote-to-order, and Sow Easy connects WooCommerce ordering with Odoo. B2B work usually adds tiered pricing, net terms, reordering and an ERP connection.' },
  { question: 'Do we own what you build?', answer: 'Yes. You own the code and its repository from day one, plus the design files, content and accounts. Hosting and AI usage can run in your own accounts at cost, with no markup.' },
  { question: 'How much does a project like these cost?', answer: 'WebFX puts a small business website at $1,000 to $48,000, and BigCommerce puts a store with custom design and integrations at $5,000 to $25,000. FactoryJet quotes a fixed price in writing after a short scoping call; our pricing page lists more market ranges with sources.' },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PORTFOLIO_FAQS.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
};

const ITEM_LIST_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'FactoryJet case studies',
  itemListElement: CASE_STUDIES.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.client,
    url: `https://factoryjet.com/case-studies/${c.slug}`,
  })),
};

const LINK = 'font-semibold text-[#B23E13] underline underline-offset-2 hover:text-[#9A3510]';

export default function USPortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
      />
      <script id="portfolio-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script id="portfolio-itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }} />

      <SiteHeader
        navLinks={[
          { label: 'Services', href: '/services/web-design' },
          { label: 'Shopify', href: '/services/shopify-development' },
          { label: 'AI Agents', href: '/services/ai-agent-development' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'FAQ', href: '/faq' },
        ]}
        cta={{ label: 'Get a Quote', href: '/contact' }}
      />

      <main className="bg-fj-cream min-h-screen">
        <PortfolioGrid
          intro={
            <>
              FactoryJet has served 500+ businesses since 2014. Recent work: a custom Shopify theme for Shopholistico,
              an AI agent for Washington Law Group, websites with ongoing SEO for Impulse Branding Solutions and Yadav
              Entrance Automation, a booking site for RDB Travels and a Next.js site for Flying Pixel, a drone survey company. Platforms
              include Shopify, WooCommerce, Commerceflo, WordPress and ERPNext.
              <span className="mt-2 block text-sm">
                Updated <time dateTime={PAGE_MODIFIED}>22 October 2026</time>
              </span>
            </>
          }
        >
          <section className="pb-14 md:pb-20" aria-labelledby="case-studies-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#B23E13] font-fj-body mb-4">Case studies</p>
                <h2 id="case-studies-heading" className="font-fj-display text-3xl md:text-4xl font-bold text-fj-ink tracking-tight">
                  {CASE_STUDIES.length} projects, one line each
                </h2>
                <p className="mt-4 text-base text-fj-neutral-600 font-fj-body leading-relaxed">
                  Each line says what we built. Results, timelines and the stack sit on the case study itself.
                </p>
              </div>
              <ul className="mt-8 divide-y divide-fj-neutral-200 border-y border-fj-neutral-200 font-fj-body">
                {CASE_STUDIES.map((c) => (
                  <li key={c.slug} className="py-4 md:grid md:grid-cols-12 md:gap-6">
                    <Link href={`/case-studies/${c.slug}`} className={`md:col-span-4 ${LINK}`}>
                      {c.client}
                    </Link>
                    <p className="mt-1 md:mt-0 md:col-span-8 text-[15px] leading-relaxed text-fj-neutral-600">{c.line}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-fj-neutral-600 font-fj-body">
                Planning something similar? Compare{' '}
                <Link href="/comparisons/shopify-plus-vs-bigcommerce" className={LINK}>Shopify Plus vs BigCommerce</Link>,{' '}
                <Link href="/comparisons/shopify-vs-woocommerce" className={LINK}>Shopify vs WooCommerce</Link> and{' '}
                <Link href="/comparisons/headless-commerce-vs-monolithic" className={LINK}>headless vs monolithic</Link>, read the{' '}
                <Link href="/replatforming" className={LINK}>replatforming guides</Link>, or price marketplace selling with the{' '}
                <Link href="/marketplace-fee-calculator" className={LINK}>marketplace fee calculator</Link>. Costs are on the{' '}
                <Link href="/pricing" className={LINK}>pricing page</Link>, and common questions on the{' '}
                <Link href="/faq" className={LINK}>FAQ</Link>.
              </p>
            </div>
          </section>

          <FAQ
            eyebrow="PORTFOLIO FAQ"
            headline="Questions about our work"
            items={PORTFOLIO_FAQS}
          />
        </PortfolioGrid>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
