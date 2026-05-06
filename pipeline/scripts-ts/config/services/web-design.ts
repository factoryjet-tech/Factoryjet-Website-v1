/**
 * Hand-authored service seed for the Web Design service line.
 *
 * Bridges the gap until Step 6 (service enrichment) is built. Replaced by
 * Step 6 output once that module ships. Step 7 (page copy generation)
 * imports this directly for process steps, pricing tiers, and evergreen
 * FAQ templates.
 *
 * Data is FactoryJet's real offering: process derived from the 31-day
 * delivery model, pricing aligned with the live rate cards per locale,
 * FAQs curated from sales-call transcripts.
 */

import type { CountryCode } from '../../lib/locales/types.js';

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export interface PricingTier {
  name: string;
  priceLabel: string;
  description: string;
  includes: string[];
  bestFor: string;
  highlight?: boolean;
}

export interface FAQTemplate {
  /** May contain {city}, {region}, {currencySymbol}, {starterPrice},
   *  {growthPrice}, or {scalePrice} placeholders. */
  q: string;
  /** May contain {city}, {region}, {currencySymbol}, {starterPrice},
   *  {growthPrice}, or {scalePrice} placeholders. */
  a: string;
}

export interface ServiceSeed {
  slug: string;
  name: string;
  primaryKeyword: string;
  metaTitleTemplate: string;
  h1Template: string;
  process: ProcessStep[];
  pricing: Record<CountryCode, PricingTier[]>;
  priceRange: Record<CountryCode, string>;
  evergreenFAQs: FAQTemplate[];
}

export const WEB_DESIGN_SERVICE: ServiceSeed = {
  slug: 'web-design',
  name: 'Web Design',
  primaryKeyword: 'web design',
  metaTitleTemplate: 'Web Design {City} | FactoryJet',
  h1Template: 'Web Design in {City} That Converts Visitors Into Clients',
  process: [
    {
      step: 1,
      title: 'Discovery & Strategy',
      description:
        'We map your ideal customer profile, audit the top three competitors in your market, and agree the sitemap and content plan. You leave this phase knowing exactly what the site will do and how we will measure it.',
      duration: 'Days 1–3',
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description:
        'Figma wireframes turn into a complete mobile-first design system, reviewed against your brand and conversion goals. Two structured feedback rounds lock the visual direction before a line of code is written.',
      duration: 'Days 4–10',
    },
    {
      step: 3,
      title: 'Development',
      description:
        'We build the site in Next.js with GSAP animations, headless CMS integration, contact forms, and any third-party APIs you need. Performance budgets are enforced from the first commit, not retrofitted at launch.',
      duration: 'Days 11–25',
    },
    {
      step: 4,
      title: 'Content & SEO',
      description:
        'Copy, optimised WebP imagery, meta tags, JSON-LD schema, and internal links all land in this phase. We submit the sitemap to Google Search Console and verify rendering for AI crawlers (GPTBot, ClaudeBot, PerplexityBot).',
      duration: 'Days 26–30',
    },
    {
      step: 5,
      title: 'Launch & Handover',
      description:
        'We deploy to Cloudflare, wire up GA4 and GTM, and walk you through the CMS in a recorded handover session. A 30-day support window covers any post-launch fixes or training questions.',
      duration: 'Day 31+',
    },
  ],
  pricing: {
    gb: [
      {
        name: 'Starter',
        priceLabel: '£1,200–£2,500',
        description:
          'A 5-page brochure site that loads fast on mobile and ranks for your name and core service.',
        includes: [
          '5 pages, mobile-responsive',
          'Basic SEO & schema markup',
          'Contact form with email forwarding',
          '2 revision rounds',
          '30-day post-launch support',
        ],
        bestFor: 'Sole traders and local services who need a credible online presence quickly.',
      },
      {
        name: 'Growth',
        priceLabel: '£2,500–£5,000',
        description:
          'A 10–15 page site with a blog CMS, lead-capture flows, and analytics wired in from day one.',
        includes: [
          '10–15 pages with blog CMS',
          'Advanced SEO & GA4 tracking',
          'Lead capture & email automation',
          '3 revision rounds',
          '30-day support + training session',
        ],
        bestFor: 'SMBs scaling online who need the site to actively generate qualified inquiries.',
        highlight: true,
      },
      {
        name: 'Scale',
        priceLabel: '£5,000–£12,000',
        description:
          'Custom Next.js build with e-commerce, AI features, API integrations, and priority support.',
        includes: [
          'Custom Next.js architecture',
          'E-commerce or membership features',
          'AI integrations (chat, search, content)',
          'Third-party API connections',
          'Priority support & quarterly reviews',
        ],
        bestFor:
          'Established businesses with complex requirements and a real digital revenue line.',
      },
    ],
    us: [
      {
        name: 'Starter',
        priceLabel: '$1,500–$3,100',
        description:
          'A 5-page brochure site that loads fast on mobile and ranks for your name and core service.',
        includes: [
          '5 pages, mobile-responsive',
          'Basic SEO & schema markup',
          'Contact form with email forwarding',
          '2 revision rounds',
          '30-day post-launch support',
        ],
        bestFor: 'Sole traders and local services who need a credible online presence quickly.',
      },
      {
        name: 'Growth',
        priceLabel: '$3,100–$6,300',
        description:
          'A 10–15 page site with a blog CMS, lead-capture flows, and analytics wired in from day one.',
        includes: [
          '10–15 pages with blog CMS',
          'Advanced SEO & GA4 tracking',
          'Lead capture & email automation',
          '3 revision rounds',
          '30-day support + training session',
        ],
        bestFor: 'SMBs scaling online who need the site to actively generate qualified inquiries.',
        highlight: true,
      },
      {
        name: 'Scale',
        priceLabel: '$6,300–$15,000',
        description:
          'Custom Next.js build with e-commerce, AI features, API integrations, and priority support.',
        includes: [
          'Custom Next.js architecture',
          'E-commerce or membership features',
          'AI integrations (chat, search, content)',
          'Third-party API connections',
          'Priority support & quarterly reviews',
        ],
        bestFor:
          'Established businesses with complex requirements and a real digital revenue line.',
      },
    ],
    au: [
      {
        name: 'Starter',
        priceLabel: 'A$2,200–A$4,600',
        description:
          'A 5-page brochure site that loads fast on mobile and ranks for your name and core service.',
        includes: [
          '5 pages, mobile-responsive',
          'Basic SEO & schema markup',
          'Contact form with email forwarding',
          '2 revision rounds',
          '30-day post-launch support',
        ],
        bestFor: 'Sole traders and local services who need a credible online presence quickly.',
      },
      {
        name: 'Growth',
        priceLabel: 'A$4,600–A$9,300',
        description:
          'A 10–15 page site with a blog CMS, lead-capture flows, and analytics wired in from day one.',
        includes: [
          '10–15 pages with blog CMS',
          'Advanced SEO & GA4 tracking',
          'Lead capture & email automation',
          '3 revision rounds',
          '30-day support + training session',
        ],
        bestFor: 'SMBs scaling online who need the site to actively generate qualified inquiries.',
        highlight: true,
      },
      {
        name: 'Scale',
        priceLabel: 'A$9,300–A$22,200',
        description:
          'Custom Next.js build with e-commerce, AI features, API integrations, and priority support.',
        includes: [
          'Custom Next.js architecture',
          'E-commerce or membership features',
          'AI integrations (chat, search, content)',
          'Third-party API connections',
          'Priority support & quarterly reviews',
        ],
        bestFor:
          'Established businesses with complex requirements and a real digital revenue line.',
      },
    ],
    ae: [],
    in: [],
    br: [],
    mx: [],
  },
  priceRange: {
    gb: '£1,200–£12,000',
    us: '$1,500–$15,000',
    au: 'A$2,200–A$22,200',
    ae: '',
    in: '',
    br: '',
    mx: '',
  },
  evergreenFAQs: [
    {
      q: 'How much does a website cost for a small business in {city}?',
      a: 'Most {city} small businesses sit between {starterPrice} and {growthPrice} for a complete website. Sole traders and local services typically pick our Starter tier ({starterPrice}) for a clean five-page site. SMBs scaling online usually choose Growth ({growthPrice}) which includes a blog, lead capture, and analytics. Custom builds with e-commerce or AI features start at the Scale tier. Local agency rates in {city} for the same scope often run two to three times higher.',
    },
    {
      q: 'How long does it take to build a website?',
      a: 'A standard FactoryJet build runs 31 days from kickoff to launch. Discovery and design take the first two weeks, development runs three weeks, and content, SEO, and launch happen in the final week. Faster timelines are possible for simpler sites — a five-page Starter project can ship in two weeks. We do not start the clock until your brand assets and content are in our shared workspace.',
    },
    {
      q: "What's included in a web design project?",
      a: 'Every project includes strategy, design, development, content, SEO setup, and a 30-day support window. You get a Figma design system you keep, a Next.js codebase you own, JSON-LD schema for AI search visibility, GA4 wired up, and a recorded handover session. We do not charge separately for staging environments, basic copy edits, or routine bug fixes inside the support window.',
    },
    {
      q: 'Why Next.js instead of WordPress?',
      a: 'Next.js gives you sub-second load times, cleaner code that ranks better in Google and AI search, and security that does not require monthly plugin updates. WordPress is fine for blogs and single-author sites, but the maintenance overhead becomes a tax on growing businesses. Our {city} clients on Next.js typically save four to eight hours a month on site upkeep compared with the WordPress sites they replaced.',
    },
    {
      q: 'How long until my new site ranks on Google?',
      a: "Branded searches (your business name) usually rank within one to two weeks of launch. Service plus location queries like 'web design {city}' typically take three to six months for a new domain, and longer for {region}-wide competitive terms. The work that compresses this timeline — schema, internal linking, content depth, technical performance — is built into every FactoryJet project, not sold as an add-on after launch.",
    },
    {
      q: 'What happens after launch?',
      a: 'You own everything: the codebase, the Figma files, the CMS access. The 30-day support window covers post-launch fixes, training, and any small content changes. After that, you can self-manage via the CMS, hire us for a monthly retainer, or bring it to your in-house team. We do not lock you into proprietary tooling — every site we build is portable.',
    },
  ],
};
