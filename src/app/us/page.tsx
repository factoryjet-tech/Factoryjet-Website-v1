import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { usHubAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ExitIntentLeadForm from '@/components/ExitIntentLeadForm';
import RelatedGuides from '@/components/v2/RelatedGuides';
import Hero from '@/components/v2/Hero';
import HeroOmnichannel from '@/components/v2/HeroOmnichannel';
import HeroInlineForm from '@/components/HeroInlineForm';
import TrustBarUS from '@/components/v2/TrustBarUS';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import FAQ from '@/components/v2/FAQ';
import FinalCTAUS from '@/components/v2/FinalCTAUS';
import { ProblemSection, SolutionSection, PillarsSection, ComparisonSection, ProofSection } from '@/components/v2/UsHomeSections';
import { AgentConsole, GrowthSurfaces, FinalCtaSection } from '@/components/v2/UsHomeInteractive';

/* ─────────────────────────────────────────────────────────────────────────────
   /us homepage — omnichannel / B2B e-commerce repositioning (2026-06-26)

   Entity (title/meta/Service schema): "Ecommerce Development Agency".
   Omnichannel commerce is the wrapper concept/story, not the SEO entity
   (keyword evidence: research/us-keyword-map-2026-06-26.md).

   Section order (ported from research/mockup-us-problem-v1.html):
     1.  SiteHeader (CTA: Talk to the Founder)
     2.  HeroOmnichannel — locked copy + channel->engine constellation
     3.  ProblemSection — the fragmented-commerce tax (3 sourced stat tiles)
     4.  SolutionSection — one catalog / inventory / order engine / AI workforce
     5.  PillarsSection — five ways we build and scale commerce (zig-zag)
     6.  AgentConsole — animated live AI agent console (client)
     7.  GrowthSurfaces — get found and chosen (SEO / AI visibility / marketplace)
     8.  ComparisonSection — a pile of tools vs a partner
     9.  ProofSection — Bombay Petals (B2B) + Belle Maison (DTC), qualitative
     10. FAQ — 20 commerce FAQs (reuses v2 FAQ.tsx + FAQPage schema)
     11. FinalCtaSection — Talk to the Founder + Get a commerce audit
     12. RelatedGuides · ExitIntentLeadForm · SiteFooter

   NOTE: this file still contains legacy section components + data (BentoServicesGrid,
   PainPatternSection, NumbersBlock, MethodologyBar, RealTestimonialsSection,
   LiveCounterStrip, HeroVisualSlot, SERVICE_TILES, PAIN_PATTERNS, REAL_TESTIMONIALS,
   JOURNEY_STAGES, HOW_TO_SCHEMA, REVIEW_SCHEMA) that are no longer rendered.
   They are dead code pending a cleanup pass; safe to delete as a block.
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'E-Commerce Development Agency for DTC & B2B Brands | FactoryJet',
  description:
    'FactoryJet is an e-commerce development agency for DTC and B2B brands. We design, build, and implement omnichannel commerce across your store, marketplaces, and B2B portals on Shopify, Magento, WooCommerce, or Commerceflo. Get a commerce audit.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'E-Commerce Development Agency for DTC & B2B Brands | FactoryJet',
    description:
      'An e-commerce development agency for DTC and B2B brands. We design, build, and implement omnichannel commerce across your store, marketplaces, and B2B portals on Shopify, Magento, WooCommerce, or Commerceflo. One catalog, one inventory, one order engine.',
    url: 'https://factoryjet.com/us',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet, e-commerce development agency for DTC and B2B brands' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Commerce Development Agency for DTC & B2B Brands | FactoryJet',
    description:
      'An e-commerce development agency for DTC and B2B. We build omnichannel commerce across your store, marketplaces, and B2B on Shopify, Magento, WooCommerce, or Commerceflo.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us',
    languages: usHubAlternates,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Data, journey stages, FAQ, schemas, services, pillars, testimonials
───────────────────────────────────────────────────────────────────────────── */

const JOURNEY_STAGES: ServiceJourneyStage[] = [
  { number: '01', title: 'Discovery & Strategy', description: 'We map your ideal customer profile, audit top competitors, and agree the sitemap and content plan. You leave this phase knowing exactly what the site will do and how we will measure it.' },
  { number: '02', title: 'Design & Prototyping', description: 'Figma wireframes turn into a complete mobile-first design system, reviewed against your brand and conversion goals. Two structured feedback rounds lock the visual direction before a line of code is written.' },
  { number: '03', title: 'Development', description: 'We build in Next.js with GSAP animations, headless CMS integration, contact forms, and any third-party APIs you need. Performance budgets are enforced from the first commit.' },
  { number: '04', title: 'Content & SEO', description: 'Copy, optimized WebP imagery, meta tags, JSON-LD schema, and internal links all land in this phase. We submit the sitemap to Google Search Console and verify rendering for AI crawlers.' },
  { number: '05', title: 'Launch & Handover', description: 'We deploy to Cloudflare, wire up GA4 and GTM, and walk you through the CMS in a recorded handover session. A 30-day support window covers any post-launch fixes or training questions.' },
];

const FAQ_CATEGORIES = [
  { key: 'what-we-do', label: 'What we do' },
  { key: 'platforms', label: 'Platforms & build' },
  { key: 'dtc-b2b', label: 'DTC & B2B' },
  { key: 'ai-agents', label: 'AI agents' },
  { key: 'working-together', label: 'Working together' },
];

const FAQ_ITEMS = [
  { category: 'what-we-do', question: 'What does an omnichannel commerce agency actually do?', answer: 'We design, build, and implement the systems that let you sell across your store, marketplaces, and B2B from one catalog, one inventory, and one order engine. In plain terms, we are the team you hire to build unified commerce, not a tool you subscribe to.' },
  { category: 'what-we-do', question: 'What is the difference between omnichannel and unified commerce?', answer: 'Omnichannel is about the customer experience across channels. Unified commerce is the architecture underneath it that keeps products, inventory, orders, and customers in sync in real time. We build that unified layer so your channels stop drifting apart.' },
  { category: 'what-we-do', question: 'Is FactoryJet a software product or an agency?', answer: 'An agency. We are a services partner that consults, designs, develops, and implements commerce for you. You own and operate what we build, and there is no FactoryJet subscription.' },
  { category: 'what-we-do', question: 'Can you fix our existing store, or only build from scratch?', answer: 'Both. Most of our work is improving or replatforming what you already run, then adding the unified layer. We audit what you have, fix what is broken, and build what is missing.' },
  { category: 'platforms', question: 'Which ecommerce platform is best for B2B and DTC?', answer: 'There is no single best one; it depends on your catalog size, B2B rules, and budget. We build on Shopify and Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, and Commerceflo, and recommend the fit rather than pushing one platform.' },
  { category: 'platforms', question: 'Shopify Plus vs Adobe Commerce vs BigCommerce, which should we choose?', answer: 'Shopify Plus for speed and a clean DTC-plus-B2B model on one store, Adobe Commerce for deep native B2B and very large catalogs, BigCommerce for strong mid-market B2B value. We match it to your SKUs, pricing rules, and integrations on a scoping call.' },
  { category: 'platforms', question: 'Can you migrate us off Magento (or another platform) without losing SEO?', answer: 'Yes. We handle replatforming and data migration, products, customers, orders, and B2B pricing, with 301 redirects and a cutover plan that protects your rankings and uptime.' },
  { category: 'platforms', question: 'Do you connect our store to our ERP, POS, and marketplaces?', answer: 'Yes. We integrate ERPs, POS, 3PLs, and marketplaces into one order and inventory layer so every system reads the same live data instead of its own copy.' },
  { category: 'dtc-b2b', question: 'How do we sell on Amazon, Walmart, and our own store at the same time?', answer: 'You put every channel on one catalog and one live inventory, so a sale anywhere updates everywhere. We build that connection plus the listing, pricing, and order flows each marketplace expects.' },
  { category: 'dtc-b2b', question: 'How do we stop overselling across channels?', answer: 'Overselling happens when each tool keeps its own stock count. We build a single live inventory that every channel reads from, so when the last unit sells on one channel it goes unavailable on the rest within moments.' },
  { category: 'dtc-b2b', question: 'Can DTC and B2B run on one site with different pricing?', answer: 'Yes. We build one storefront that serves retail shoppers and gives trade buyers their own login with tiered or contract pricing, net terms, and fast reordering, on one catalog and inventory.' },
  { category: 'dtc-b2b', question: 'What B2B ecommerce features can you build?', answer: 'Tiered and contract pricing, quote and approval workflows, account hierarchies, net terms, gated catalogs, and reordering, all integrated with your ERP.' },
  { category: 'ai-agents', question: 'Can AI manage my inventory and pricing across channels?', answer: 'Yes, and the technology is mature now. We build and implement agents that sync inventory, reprice to hold the Buy Box, and keep listings consistent across channels, all acting on your live data.' },
  { category: 'ai-agents', question: 'What can AI agents actually do for an ecommerce business?', answer: 'The repetitive channel work: listing new products in each marketplace\'s format, fixing suppressed listings, repricing, reconciling feeds, and answering order questions. They take the busywork off your team, not the strategy.' },
  { category: 'ai-agents', question: 'Is this just an AI chatbot?', answer: 'No. These are task agents that take action across your channels, listing, pricing, and inventory, not a question-and-answer widget on your site.' },
  { category: 'ai-agents', question: 'Do you run the AI agents, or do we?', answer: 'We build and implement them into your stack; they run inside your system and hand the exceptions to your team. You stay in control of the business.' },
  { category: 'working-together', question: 'What should we ask before hiring an ecommerce development agency?', answer: 'Ask about their B2B experience specifically, their discovery and scoping process, how they handle integrations, who owns the relationship after launch, and to see comparable builds. We are happy to answer all of those on a call.' },
  { category: 'working-together', question: 'How much does it cost to build an ecommerce site?', answer: 'It depends on scope, platform, catalog size, and integrations, so we scope it on a short call and send a fixed proposal before any work starts, rather than putting a number on a page.' },
  { category: 'working-together', question: 'How long does an ecommerce build or migration take?', answer: 'Most mid-market builds and migrations run from a few weeks to a few months, depending on custom integrations and catalog complexity. You get a phased timeline with milestones after scoping.' },
  { category: 'working-together', question: 'Do you work with US brands?', answer: 'Yes, most of the brands we work with are US-based, across DTC and B2B, and we bring a decade-plus of commerce builds to every engagement.' },
];

const SERVICE_TILES = [
  // v4: even 3-up grid, illustrated UI previews (no stock photos). Hrefs preserved
  // for internal linking / SEO. AI Agents renders as the dark card for rhythm.
  { href: '/us/services/ecommerce-development',       label: 'E-Commerce',  desc: 'Online stores built to sell. Belle Maison went live in 6 days.', pills: ['Shopify', 'Headless', 'Klaviyo'],            metric: 'Live in 6 days',        illo: 'ecommerce', isNew: false, dark: false, tag: 'REAL BUILD' },
  { href: '/us/services/web-design',                  label: 'Web Design',  desc: 'Fast, custom websites, live in 7 days.',                        pills: ['Next.js', 'WordPress', 'Custom'],            metric: '+38% conversion lift',  illo: 'web',       isNew: false, dark: false, tag: '' },
  { href: '/us/services/ai-seo',                      label: 'AI SEO',      desc: 'Get your brand quoted by AI search engines.',                   pills: ['ChatGPT', 'Perplexity', 'Claude', 'Gemini'], metric: 'Built for AI search',   illo: 'aiseo',     isNew: true,  dark: false, tag: '' },
  { href: '/us/services/ai-agents',                   label: 'AI Agents',   desc: 'Software that does your repetitive work for you.',              pills: ['Workflows', 'Chatbots', 'Automation'],       metric: 'Pays back in 90 days',  illo: 'agents',    isNew: false, dark: true,  tag: '' },
  { href: '/us/services/wordpress-development',        label: 'WordPress',   desc: 'A site your team can update, built to rank.',                   pills: ['CMS', 'Plugins', 'SEO'],                     metric: 'Ready to rank day one', illo: 'wordpress', isNew: false, dark: false, tag: '' },
  { href: '/us/services/web-application-development',  label: 'Web App Dev', desc: 'Custom web apps. You own all the code.',                        pills: ['React', 'Next.js', 'APIs'],                  metric: 'You own the code',      illo: 'webapp',    isNew: false, dark: false, tag: '' },
];

const PAIN_PATTERNS = [
  { number: '01', title: 'THE FRAGILE MVP',     headline: 'You paid for fast. You got cheap.',                        body: 'The prototype collapses the moment real customers hit production. Tickets pile up. Re-platform costs more than the original build cost.' },
  { number: '02', title: 'THE VENDOR TRAP',     headline: "You can't leave because they have the keys.",              body: 'Code lives on their GitHub. Dashboards run on their license. Switching costs grow every month you stay. Retainer turns into ransom.' },
  { number: '03', title: 'THE CHEAP-BUILD TAX', headline: 'The discount you negotiated is paid back in technical debt.', body: 'Every shortcut today becomes a slowdown tomorrow. Performance drops. Lighthouse falls below 80. Conversion follows.' },
];

const REAL_TESTIMONIALS = [
  {
    name: 'Ricky B.',
    company: 'Belle Maison',
    industry: 'D2C lifestyle · Shopify',
    headshot: '/images/testimonials/ricky-belle-maison-160.webp',
    portfolio: '/images/portfolio/belle-maison.webp',
    metric: 'Live in 6 days',
    quote: 'We were live in 6 days, I genuinely did not believe that was possible. The design is stunning, the WhatsApp integration brings in enquiries every day, and the Lighthouse score has not moved from 100.',
  },
  {
    name: 'Vishal K.',
    company: 'Impulse Branding',
    industry: 'Print branding solutions · Web',
    headshot: '/images/testimonials/vishal-impulse-branding-160.webp',
    portfolio: '/images/portfolio/impulse-branding.webp',
    metric: 'Brings in real inquiries',
    quote: 'In our business, clients size you up before they ever call. FactoryJet built us a website that finally looks as solid as the work we deliver, and we are getting real project inquiries through it.',
  },
  {
    name: 'Kiran Mahadik',
    company: 'Formative Concepts',
    industry: 'MEP / BIM consultancy · Web',
    headshot: '/images/testimonials/kiran-formative-concepts-160.webp',
    portfolio: '/images/portfolio/formative-concepts.webp',
    metric: 'Ranks on Google',
    quote: 'As an MEP and BIM consultancy, credibility is everything. FactoryJet gave us a site that looks like a Tier-1 firm, structured data, fast load, and project showcase pages that actually rank on Google.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  description:
    'FactoryJet is an e-commerce development agency that consults, designs, develops, and implements omnichannel commerce for DTC and B2B brands across Shopify, Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, and Commerceflo.',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '150', reviewCount: '150', bestRating: '5', worstRating: '1' },
  sameAs: [
    'https://www.linkedin.com/company/factoryjet',
    'https://www.crunchbase.com/organization/factoryjet',
  ],
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'E-commerce development',
  name: 'E-commerce development and omnichannel commerce implementation',
  description:
    'E-commerce development agency for DTC and B2B brands. We design, build, and implement omnichannel commerce across your own store, marketplaces, and B2B portals on Shopify, Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, headless, and Commerceflo, with one catalog, one inventory, and one order engine.',
  provider: { '@type': 'Organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: { '@type': 'BusinessAudience', name: 'DTC and B2B brands' },
};

const REVIEW_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '150', reviewCount: '150', bestRating: '5', worstRating: '1' },
  review: REAL_TESTIMONIALS.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewBody: t.quote,
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  })),
};

const HOW_TO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your website in 7 days',
  description: 'Our proven 7-day process for delivering professional, SEO-optimized websites for US businesses.',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Day 1: Discovery Call',          text: 'We learn your business, goals, and target audience. We define the sitemap, content strategy, and technical requirements.' },
    { '@type': 'HowToStep', position: 2, name: 'Day 2: Strategy & Structure',    text: 'We finalize your site architecture, wireframes, and content outline. You approve the plan before any design begins.' },
    { '@type': 'HowToStep', position: 3, name: 'Days 3–4: Design',               text: 'We design every page with your brand identity, mobile-first layouts, and conversion-focused UX. You review and approve all designs.' },
    { '@type': 'HowToStep', position: 4, name: 'Days 5–6: Development & SEO',    text: 'We build your site in Next.js or WordPress, optimize Core Web Vitals, add structured data, and connect all integrations.' },
    { '@type': 'HowToStep', position: 5, name: 'Day 7: Launch',                  text: 'Your website goes live. We handle DNS, SSL, final QA, and provide training plus 30-day post-launch support.' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Inline section components
───────────────────────────────────────────────────────────────────────────── */

/**
 * HeroVisualSlot, the right-slot composition for the Hero. A real client build
 * (Belle Maison, engineered by FactoryJet) shown in a clean device frame, with
 * two floating proof chips: the client's face + result, and the Clutch rating.
 * Replaces the prior AI-dashboard stock image (which also rendered blank on
 * prod). Navy carries the trust weight; orange owns the numbers.
 * Crop is the price-free band of the live store, no rupee tags, no .in domain.
 */
function HeroVisualSlot() {
  return (
    <div className="relative w-full">
      {/* Device frame, no address bar, keeps focus on the build itself */}
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ border: '9px solid #16181d', boxShadow: '0 24px 60px rgba(15,33,56,0.22), 0 0 0 1px rgba(15,33,56,0.06)' }}
      >
        <Image
          src="/images/portfolio/belle-maison-clean.webp"
          alt="Belle Maison, e-commerce store engineered by FactoryJet"
          width={800}
          height={333}
          priority
          className="block h-auto w-full"
        />
      </div>
      {/* Base bar, reads as a device, not a floating screenshot */}
      <div
        aria-hidden="true"
        style={{ height: '13px', width: '116%', marginLeft: '-8%', marginTop: '-1px', background: '#cdcbc4', borderRadius: '0 0 16px 16px' }}
      />

      {/* Floating proof chip, top left: real client face + result */}
      <div
        className="absolute hidden md:flex"
        style={{ top: '-18px', left: '-20px', transform: 'rotate(-3deg)', alignItems: 'center', gap: '11px', background: '#fff', borderRadius: '14px', padding: '10px 13px', boxShadow: '0 14px 32px rgba(15,33,56,0.16), 0 0 0 1px rgba(15,33,56,0.06)' }}
      >
        <Image
          src="/images/testimonials/ricky-belle-maison-160.webp"
          alt="Ricky B, Belle Maison"
          width={38}
          height={38}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
        <div>
          <div className="font-fj-display" style={{ fontWeight: 800, fontSize: '15px', lineHeight: 1.1, color: '#F05A28' }}>
            Live in 6 days
          </div>
          <div className="font-fj-body" style={{ fontSize: '11px', lineHeight: 1.3, color: 'rgba(15,33,56,0.62)', marginTop: '2px' }}>
            Ricky B · Belle Maison
          </div>
        </div>
      </div>

      {/* Floating proof chip, bottom right: Clutch rating (navy) */}
      <div
        className="absolute hidden md:block"
        style={{ bottom: '2px', right: '-14px', transform: 'rotate(3deg)', backgroundColor: '#103A5E', borderRadius: '14px', padding: '11px 14px', boxShadow: '0 14px 32px rgba(15,33,56,0.30)' }}
      >
        <div className="font-fj-display" style={{ fontWeight: 800, fontSize: '19px', lineHeight: 1.1, color: '#F05A28' }}>
          4.9<span style={{ fontSize: '13px' }}>★</span>
        </div>
        <div className="font-fj-body" style={{ fontSize: '11px', lineHeight: 1.3, color: 'rgba(250,250,247,0.80)', marginTop: '2px' }}>
          Clutch · 150+ verified reviews
        </div>
      </div>
    </div>
  );
}

/**
 * LiveCounterStrip, sits just below the Hero. Three maxi-typography stats
 * separated by hairline dividers, with orange top/bottom borders. Adds
 * tactile premium feel to the page introduction.
 */
function LiveCounterStrip() {
  return (
    <section
      className="py-6 md:py-8"
      style={{
        backgroundColor: '#FAFAF7',
        borderTop: '1.5px solid rgba(240,90,40,0.22)',
        borderBottom: '1.5px solid rgba(240,90,40,0.22)',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <div className="flex flex-wrap items-center justify-around gap-6 md:gap-4">
          <div className="text-center">
            <div className="font-fj-display font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', lineHeight: 1, color: '#F05A28', letterSpacing: '-0.03em' }}>
              523
            </div>
            <div className="mt-1 font-fj-mono font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(15,15,18,0.55)' }}>
              projects shipped
            </div>
          </div>
          <div className="hidden h-12 w-px md:block" style={{ backgroundColor: 'rgba(15,15,18,0.10)' }} aria-hidden="true" />
          <div className="text-center">
            <div className="font-fj-display font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', lineHeight: 1, color: '#F05A28', letterSpacing: '-0.03em' }}>
              4.9★
            </div>
            <div className="mt-1 font-fj-mono font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(15,15,18,0.55)' }}>
              across 150+ reviews
            </div>
          </div>
          <div className="hidden h-12 w-px md:block" style={{ backgroundColor: 'rgba(15,15,18,0.10)' }} aria-hidden="true" />
          <div className="text-center">
            <div className="font-fj-display font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', lineHeight: 1, color: '#F05A28', letterSpacing: '-0.03em' }}>
              25<span style={{ fontSize: '0.55em' }}>yr</span>
            </div>
            <div className="mt-1 font-fj-mono font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(15,15,18,0.55)' }}>
              engineering since 2001
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * BentoServicesGrid, replaces the ServicesGrid component with a custom
 * bento layout using the existing /images/services/card-*.webp files.
 * Web Design tile spans 2 columns × 2 rows; others are standard 1×1.
 * Each tile is a Link to the service page.
 */
function ServiceIllo({ kind }: { kind: string }) {
  const cls = 'block h-[166px] w-full';
  switch (kind) {
    case 'ecommerce':
      return (
        <svg viewBox="0 0 320 166" className={cls} role="img" aria-label="Online store preview">
          <rect x="26" y="24" width="268" height="118" rx="11" fill="#fff" stroke="#dde4ec" />
          <rect x="26" y="24" width="268" height="22" rx="11" fill="#eef2f7" />
          <rect x="42" y="32" width="40" height="6" rx="3" fill="#16335a" />
          <rect x="266" y="32" width="14" height="11" rx="2" fill="#fdeae1" stroke="#F05A28" />
          <path d="M269 32 v-1.6 a3.5 3.5 0 0 1 7 0 V32" fill="none" stroke="#F05A28" strokeWidth="1.2" />
          {[44, 125, 206].map((x) => (
            <g key={x}>
              <rect x={x} y="56" width="70" height="74" rx="8" fill="#f4f7fa" stroke="#e7edf3" />
              <rect x={x + 10} y="64" width="50" height="32" rx="5" fill="#e1e8f0" />
              <rect x={x + 10} y="103" width="26" height="6" rx="3" fill="#16335a" />
              <rect x={x + 10} y="115" width="50" height="9" rx="4" fill="#F05A28" />
            </g>
          ))}
        </svg>
      );
    case 'web':
      return (
        <svg viewBox="0 0 320 166" className={cls} role="img" aria-label="Website layout preview">
          <rect x="26" y="24" width="268" height="118" rx="11" fill="#fff" stroke="#dde4ec" />
          <rect x="26" y="24" width="268" height="22" rx="11" fill="#eef2f7" />
          <circle cx="40" cy="35" r="3" fill="#cfd8e3" /><circle cx="50" cy="35" r="3" fill="#cfd8e3" /><circle cx="60" cy="35" r="3" fill="#cfd8e3" />
          <rect x="44" y="62" width="92" height="9" rx="4" fill="#16335a" />
          <rect x="44" y="78" width="120" height="6" rx="3" fill="#c4cfdc" />
          <rect x="44" y="90" width="96" height="6" rx="3" fill="#c4cfdc" />
          <rect x="44" y="108" width="62" height="18" rx="9" fill="#F05A28" />
          <rect x="190" y="62" width="92" height="64" rx="8" fill="#e7edf4" />
          <circle cx="214" cy="92" r="11" fill="#cdd8e4" /><rect x="232" y="86" width="42" height="6" rx="3" fill="#cdd8e4" /><rect x="232" y="98" width="30" height="6" rx="3" fill="#dbe2ea" />
        </svg>
      );
    case 'aiseo':
      return (
        <svg viewBox="0 0 320 166" className={cls} role="img" aria-label="AI answer citing the brand">
          <rect x="34" y="28" width="252" height="110" rx="12" fill="#fff" stroke="#dde4ec" />
          <circle cx="54" cy="52" r="7" fill="#F05A28" /><path d="M51 52l2 2 4-4" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <rect x="68" y="48" width="120" height="8" rx="4" fill="#16335a" />
          <rect x="54" y="74" width="206" height="6" rx="3" fill="#cdd8e4" />
          <rect x="54" y="86" width="184" height="6" rx="3" fill="#cdd8e4" />
          <rect x="54" y="102" width="96" height="22" rx="11" fill="#fdeae1" stroke="rgba(240,90,40,0.45)" />
          <text x="66" y="117" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#b8431d">FactoryJet</text>
          <path d="M141 108l2.4 4.6 5 .8-3.7 3.6.9 5-4.6-2.4-4.6 2.4.9-5-3.7-3.6 5-.8z" fill="#F05A28" />
          <rect x="160" y="106" width="98" height="6" rx="3" fill="#dbe2ea" /><rect x="160" y="116" width="70" height="6" rx="3" fill="#e3e9ef" />
        </svg>
      );
    case 'agents':
      return (
        <svg viewBox="0 0 320 166" className={cls} role="img" aria-label="AI agent chat preview">
          <rect x="40" y="24" width="240" height="118" rx="12" fill="#11243f" stroke="rgba(255,255,255,0.12)" />
          <rect x="150" y="40" width="112" height="22" rx="11" fill="#1f3a5c" />
          <rect x="162" y="48" width="74" height="6" rx="3" fill="rgba(255,255,255,0.45)" />
          <rect x="58" y="72" width="132" height="26" rx="13" fill="#F05A28" />
          <rect x="70" y="82" width="86" height="6" rx="3" fill="rgba(255,255,255,0.85)" />
          <circle cx="78" cy="120" r="9" fill="#1f3a5c" /><circle cx="116" cy="120" r="9" fill="#1f3a5c" /><circle cx="154" cy="120" r="9" fill="#F05A28" />
          <line x1="87" y1="120" x2="107" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="1.6" /><line x1="125" y1="120" x2="145" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="1.6" />
        </svg>
      );
    case 'wordpress':
      return (
        <svg viewBox="0 0 320 166" className={cls} role="img" aria-label="CMS editor preview">
          <rect x="26" y="24" width="268" height="118" rx="11" fill="#fff" stroke="#dde4ec" />
          <rect x="26" y="24" width="66" height="118" rx="11" fill="#eef2f7" />
          <rect x="38" y="44" width="42" height="7" rx="3" fill="#16335a" />
          <rect x="38" y="60" width="34" height="6" rx="3" fill="#c9d3df" /><rect x="38" y="74" width="38" height="6" rx="3" fill="#dbe2ea" /><rect x="38" y="88" width="30" height="6" rx="3" fill="#dbe2ea" />
          <rect x="108" y="44" width="120" height="11" rx="5" fill="#16335a" />
          <rect x="108" y="64" width="168" height="6" rx="3" fill="#cdd8e4" /><rect x="108" y="76" width="150" height="6" rx="3" fill="#cdd8e4" />
          <rect x="108" y="92" width="168" height="34" rx="8" fill="#e7edf4" /><circle cx="128" cy="109" r="8" fill="#cdd8e4" /><rect x="144" y="103" width="60" height="5" rx="2" fill="#cdd8e4" /><rect x="144" y="113" width="44" height="5" rx="2" fill="#dbe2ea" />
        </svg>
      );
    case 'webapp':
    default:
      return (
        <svg viewBox="0 0 320 166" className={cls} role="img" aria-label="App dashboard preview">
          <rect x="26" y="24" width="268" height="118" rx="11" fill="#fff" stroke="#dde4ec" />
          <rect x="40" y="40" width="74" height="36" rx="7" fill="#eef2f7" /><rect x="52" y="50" width="34" height="9" rx="4" fill="#16335a" /><rect x="52" y="63" width="26" height="5" rx="2" fill="#c4cfdc" />
          <rect x="124" y="40" width="74" height="36" rx="7" fill="#eef2f7" /><rect x="136" y="50" width="30" height="9" rx="4" fill="#16335a" /><rect x="136" y="63" width="26" height="5" rx="2" fill="#c4cfdc" />
          <rect x="208" y="40" width="72" height="36" rx="7" fill="#fdf0ea" /><rect x="220" y="50" width="30" height="9" rx="4" fill="#b8431d" /><rect x="220" y="63" width="22" height="5" rx="2" fill="#f0c3ad" />
          <rect x="40" y="86" width="240" height="42" rx="7" fill="#f7f9fb" />
          <polyline points="52,118 92,102 132,110 172,90 212,98 272,80" fill="none" stroke="#F05A28" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="172" cy="90" r="3.2" fill="#F05A28" />
        </svg>
      );
  }
}

function BentoServicesGrid() {
  return (
    <section id="services" className="py-14 md:py-20" style={{ backgroundColor: '#FAFAF7', backgroundImage: 'radial-gradient(circle, rgba(15,33,56,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <p className="fj-eyebrow" style={{ color: '#103A5E' }}>WHAT WE BUILD</p>
        <h2 className="fj-display font-semibold text-fj-ink mt-3" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.6rem)', lineHeight: 1.06, letterSpacing: '-0.03em', maxWidth: '17ch' }}>
          One AI-native team for <span style={{ color: '#F05A28' }}>every layer</span> of your stack.
        </h2>
        <p className="mt-4 max-w-[600px] font-fj-body text-fj-neutral-600" style={{ fontSize: '1rem', lineHeight: 1.65 }}>
          Pick the layer you need, or talk to the founder about a full build. One senior engineer on every project. One fixed price per scope.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_TILES.map((tile) => (
            <Link
              key={tile.href}
              href={tile.href}
              className="group flex flex-col overflow-hidden rounded-2xl border transition-transform duration-200 hover:-translate-y-1"
              style={{
                borderColor: tile.dark ? 'rgba(255,255,255,0.10)' : 'rgba(15,33,56,0.10)',
                backgroundColor: tile.dark ? '#0B1F38' : '#FFFFFF',
                boxShadow: '0 1px 3px rgba(15,33,56,0.05)',
              }}
            >
              <div style={{ borderBottom: tile.dark ? '1px solid rgba(255,255,255,0.10)' : '1px solid rgba(15,33,56,0.10)', background: tile.dark ? 'linear-gradient(160deg,#10243f,#0b1d33)' : 'linear-gradient(160deg,#EEF3F8,#F4F2EC)' }}>
                <ServiceIllo kind={tile.illo} />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex items-center gap-2">
                  <h3 className="font-fj-body font-semibold" style={{ fontSize: '1.0625rem', letterSpacing: '-0.005em', color: tile.dark ? '#FFFFFF' : '#0F2138' }}>
                    {tile.label}
                  </h3>
                  {tile.isNew && (
                    <span className="font-fj-mono font-bold uppercase" style={{ fontSize: '9px', letterSpacing: '0.08em', backgroundColor: 'rgba(240,90,40,0.14)', color: '#b8431d', padding: '2px 7px', borderRadius: '999px' }}>NEW</span>
                  )}
                  {tile.tag ? (
                    <span className="font-fj-mono font-bold uppercase" style={{ fontSize: '9px', letterSpacing: '0.08em', backgroundColor: 'rgba(240,90,40,0.14)', color: '#b8431d', padding: '2px 7px', borderRadius: '999px' }}>{tile.tag}</span>
                  ) : null}
                </div>
                <p className="font-fj-body" style={{ fontSize: '0.8125rem', lineHeight: 1.5, color: tile.dark ? 'rgba(255,255,255,0.66)' : '#54657a' }}>
                  {tile.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tile.pills.map((p) => (
                    <span key={p} className="font-fj-mono" style={{ fontSize: '10px', color: tile.dark ? 'rgba(255,255,255,0.78)' : '#3a536e', background: tile.dark ? 'rgba(255,255,255,0.06)' : 'rgba(16,58,94,0.06)', border: tile.dark ? '1px solid rgba(255,255,255,0.14)' : '1px solid rgba(16,58,94,0.10)', padding: '3px 9px', borderRadius: '999px' }}>{p}</span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between gap-2 pt-3">
                  <span className="font-fj-mono font-semibold uppercase" style={{ fontSize: '10px', letterSpacing: '0.04em', color: tile.dark ? '#8fb3d6' : '#103A5E' }}>
                    {tile.metric}
                  </span>
                  <span className="font-fj-body font-semibold transition-transform group-hover:translate-x-1" style={{ fontSize: '13px', color: '#F05A28' }}>
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * PainPatternSection, dark crystal-card section borrowing the Spiral Scout
 * pattern of naming buyer pains explicitly. Three crystal cards on aurora-
 * backed dark background, replacing what would otherwise be a generic
 * "Why us" section with concrete fear-naming.
 */
function PainPatternSection() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20" style={{
      backgroundImage: [
        'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
        'linear-gradient(135deg, #060D1F 0%, #0F0F12 45%, #0D0818 100%)',
      ].join(', '),
      backgroundSize: '28px 28px, 100% 100%',
    }}>
      {/* Aurora orb top-right */}
      <div className="pointer-events-none absolute" style={{
        right: '-10%', top: '-10%', width: '720px', height: '720px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240,90,40,0.36) 0%, transparent 65%)', filter: 'blur(48px)',
      }} aria-hidden="true" />
      <div className="pointer-events-none absolute" style={{
        left: '-8%', bottom: '-15%', width: '520px', height: '520px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240,90,40,0.18) 0%, transparent 65%)', filter: 'blur(56px)',
      }} aria-hidden="true" />

      <div className="relative mx-auto max-w-[1120px] px-6 md:px-8">
        <p className="font-fj-mono font-bold uppercase" style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#F05A28' }}>
          THE PATTERNS WE SEE EVERY DAY
        </p>
        <h2 className="fj-display font-semibold mt-3" style={{
          color: '#FAFAF7',
          fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
          lineHeight: 1.08,
          letterSpacing: '-0.025em',
          maxWidth: '640px',
        }}>
          Three failure modes that cost US businesses real money.
        </h2>
        <p className="mt-5 max-w-[620px] font-fj-body" style={{ fontSize: '1.0625rem', lineHeight: 1.6, color: 'rgba(250,250,247,0.78)' }}>
          Most agencies will gloss over these. We name them because we built our model to solve them.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PAIN_PATTERNS.map((pain) => (
            <div
              key={pain.number}
              className="rounded-2xl border p-6 md:p-7 backdrop-blur-sm"
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderColor: 'rgba(255,255,255,0.10)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex items-center gap-3">
                <span className="font-fj-display font-bold" style={{ fontSize: '32px', lineHeight: 1, color: '#F05A28', letterSpacing: '-0.02em' }}>
                  {pain.number}
                </span>
                <span className="font-fj-mono font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(250,250,247,0.55)' }}>
                  {pain.title}
                </span>
              </div>
              <h3 className="mt-4 font-fj-body font-semibold" style={{ fontSize: '1.0625rem', lineHeight: 1.35, color: '#FAFAF7' }}>
                {pain.headline}
              </h3>
              <p className="mt-3 font-fj-body" style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'rgba(250,250,247,0.72)' }}>
                {pain.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * NumbersBlock, maxi-typography 3-stat row, replaces BigThreeTrustBlock.
 * Uses verifiable Framework B+ stats matching the AggregateRating already
 * in our JSON-LD schema.
 */
function NumbersBlock() {
  return (
    <section
      className="py-14 md:py-20"
      style={{
        backgroundColor: '#FAFAF7',
        borderTop: '1.5px solid rgba(240,90,40,0.22)',
        borderBottom: '1.5px solid rgba(240,90,40,0.22)',
      }}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <p className="fj-eyebrow">OUTCOMEBOARD™, BY THE NUMBERS</p>
        <h2 className="fj-display font-semibold text-fj-ink mt-3" style={{
          fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
          maxWidth: '640px',
        }}>
          Engineered outcomes, tracked monthly the way you would track them yourself.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {[
            { value: '500+', suffix: 'businesses served',     label: 'across web, e-commerce, and AI',         body: 'Engineering output measured in shipped projects, not slide decks. Every engagement ends with code we hand over and you keep running.' },
            { value: '7-day', suffix: 'delivery commitment',  label: 'on standard web + e-commerce scope',     body: 'Discovery on day one. Design through day three. Build and QA through day six. Live launch on day seven. Locked into every fixed-price engagement.' },
            { value: '4.9★', suffix: 'average client rating', label: 'across 150+ verified reviews',           body: 'AggregateRating published in our schema across every page. Independent client work, named references available on request from the founder.' },
          ].map((stat) => (
            <div key={stat.value}>
              <div className="flex items-baseline gap-3 flex-wrap">
                <p className="fj-display font-bold" style={{ color: '#F05A28', fontSize: 'clamp(3rem, 5.5vw, 4.5rem)', lineHeight: 1, letterSpacing: '-0.03em' }}>
                  {stat.value}
                </p>
                <p className="font-fj-body font-semibold" style={{ color: '#0F0F12', fontSize: '1.125rem', letterSpacing: '0.005em' }}>
                  {stat.suffix}
                </p>
              </div>
              <p className="mt-2 font-fj-mono font-bold uppercase" style={{ color: 'rgba(15,15,18,0.65)', fontSize: '10px', letterSpacing: '0.12em' }}>
                {stat.label}
              </p>
              <p className="mt-4 font-fj-body" style={{ color: 'rgba(15,15,18,0.72)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * MethodologyBar, dark section announcing the branded 4-phase methodology
 * with gradient text on each phase name. Visual signature moment.
 */
function MethodologyBar() {
  const phases = ['Discover', 'Architect', 'Ship', 'Own'];
  return (
    <section className="relative overflow-hidden py-14 md:py-20" style={{
      backgroundImage: [
        'radial-gradient(circle, rgba(255,255,255,0.052) 1px, transparent 1px)',
        'linear-gradient(135deg, #060D1F 0%, #0F0F12 45%, #0D0818 100%)',
      ].join(', '),
      backgroundSize: '28px 28px, 100% 100%',
    }}>
      <div className="pointer-events-none absolute" style={{
        left: '-10%', top: '20%', width: '480px', height: '480px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240,90,40,0.28) 0%, transparent 65%)', filter: 'blur(48px)',
      }} aria-hidden="true" />
      <div className="pointer-events-none absolute" style={{
        right: '-8%', bottom: '0%', width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240,90,40,0.16) 0%, transparent 65%)', filter: 'blur(56px)',
      }} aria-hidden="true" />

      <div className="relative mx-auto max-w-[1120px] px-6 md:px-8 text-center">
        <p className="font-fj-mono font-bold uppercase" style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#F05A28' }}>
          THE FACTORYJET METHOD
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {phases.map((phase, i) => (
            <div key={phase} className="flex items-center gap-3 md:gap-5">
              <span
                className="fj-display font-bold"
                style={{
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  lineHeight: 1.04,
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(135deg, #FF8C5A 0%, #F05A28 50%, #C94A1A 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                {phase}
              </span>
              {i < phases.length - 1 && (
                <span className="font-fj-display font-bold" style={{ color: 'rgba(250,250,247,0.40)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="mt-7 mx-auto max-w-[640px] font-fj-body" style={{
          fontSize: '1.0625rem',
          lineHeight: 1.6,
          color: 'rgba(250,250,247,0.78)',
        }}>
          Four phases. Each ends with a deliverable you own outright. No black-box weeks. No "we'll get back to you next sprint." The work compounds; you do not start over at every milestone.
        </p>
      </div>
    </section>
  );
}

/**
 * RealTestimonialsSection, REPLACES the previous CaseStudyPlaceholder block.
 * Three real client cards (Ricky B / Vishal K / Arif Saif Khan) with real
 * headshots + portfolio thumbnails + verbatim quotes from REVIEW_SCHEMA.
 * Light theme so it acts as the buffer between MethodologyBar (dark) and
 * the FAQ section (light).
 */
function RealTestimonialsSection() {
  return (
    <section className="relative py-14 md:py-20" style={{
      backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.028) 1px, transparent 1px)',
      backgroundSize: '28px 28px',
      backgroundColor: '#FAFAF7',
    }}>
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">
        <p className="fj-eyebrow">CLIENT STORIES</p>
        <h2 className="fj-display font-semibold text-fj-ink mt-3" style={{
          fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
          maxWidth: '640px',
        }}>
          Real engagements. Real names. Real outcomes.
        </h2>
        <p className="mt-4 max-w-[600px] font-fj-body text-fj-neutral-600" style={{ fontSize: '1rem', lineHeight: 1.65 }}>
          Three recent clients. Full named case studies for additional engagements (RDB Travels, Shevvaa, and more) land Q3 2026.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REAL_TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="overflow-hidden rounded-2xl border bg-white"
              style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 1px 3px rgba(15,15,18,0.04)' }}
            >
              {/* Portfolio thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image src={t.portfolio} alt={`${t.company} portfolio`} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
              </div>

              <div className="p-6">
                {/* Industry chip */}
                <p className="font-fj-mono font-bold uppercase" style={{ fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(15,15,18,0.55)' }}>
                  {t.industry}
                </p>

                {/* Headshot + name */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full" style={{ border: '2px solid #FAFAF7', boxShadow: '0 0 0 1px rgba(15,15,18,0.10)' }}>
                    <Image src={t.headshot} alt={t.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '0.9375rem' }}>
                      {t.name}
                    </p>
                    <p className="font-fj-body" style={{ fontSize: '0.8125rem', color: 'rgba(15,15,18,0.60)' }}>
                      {t.company}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mt-4 font-fj-body text-fj-ink" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Outcome metric chip */}
                <div className="mt-5">
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 font-fj-body font-semibold"
                    style={{ fontSize: '11px', backgroundColor: 'rgba(240,90,40,0.10)', color: '#C94A1A', border: '1px solid rgba(240,90,40,0.22)' }}
                  >
                    {t.metric}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */
export default function USHomePage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <Script id="speakable-schema-us-hub" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'E-Commerce Development Agency for DTC & B2B Brands | FactoryJet',
        'url': 'https://factoryjet.com/us/',
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['h1', '.faq-answer', '[data-speakable]'] },
      }) }} />

      <SiteHeader
        navLinks={[
          { label: 'E-Commerce',  href: '/us/services/ecommerce-development' },
          { label: 'Shopify',     href: '/us/services/shopify-development' },
          { label: 'Magento',     href: '/us/services/magento-development' },
          { label: 'Services',    href: '/us/services' },
          { label: 'Work',        href: '/case-studies' },
          { label: 'FAQ',         href: '/us/faq' },
        ]}
        cta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO, omnichannel/B2B commerce, ported from approved mockup ── */}
        <HeroOmnichannel />

        {/* ── 3. The fragmented-commerce tax ── */}
        <ProblemSection />

        {/* ── 4. The unified shape ── */}
        <SolutionSection />

        {/* ── 5. Five ways we build and scale commerce ── */}
        <PillarsSection />

        {/* ── 6. AI agent workforce, live console ── */}
        <AgentConsole />

        {/* ── 7. Commerce growth / visibility surfaces ── */}
        <GrowthSurfaces />

        {/* ── 8. A pile of tools vs a partner (comparison) ── */}
        <ComparisonSection />

        {/* ── 9. Proof, select client work ── */}
        <ProofSection />

        {/* ── 10. FAQ ── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Questions buyers ask before hiring an ecommerce development agency."
          lead="If your question is not below, send a short brief and answers usually come back inside 24 hours."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ── 11. Final CTA ── */}
        <FinalCtaSection />


      </main>

      <RelatedGuides
        links={[
          { href: '/us/services/ecommerce-development', label: 'E-commerce development services' },
          { href: '/us/services/shopify-development', label: 'Shopify development' },
          { href: '/us/services/ecommerce-seo', label: 'E-commerce SEO' },
        ]}
      />
      <ExitIntentLeadForm
        region="us"
        source="exit_intent_us_home"
        heading="Get a free commerce audit"
        subheading="We will map your channels, catalog, and B2B into one system — just name and email."
        promo="Free commerce audit, no cost, no obligation"
      />
      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
