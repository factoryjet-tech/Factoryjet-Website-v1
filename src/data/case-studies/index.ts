/**
 * Case studies data layer — FactoryJet `/case-studies/` route.
 *
 * Greenfield scaffolding per Report 19 (audit-current-state/19_case_study_scoping_2026-05-27.md)
 * and Report 26 (audit-current-state/26_case_study_mockup_and_repositioning_2026-05-28.md).
 *
 * URL pattern: `/case-studies/{slug}/` (geo-agnostic, high commercial-intent search term).
 * Distinct from the legacy `/case/` route which is driven by `src/lib/legacy-pages/Case/data.constants.ts`
 * and is being sunset via 301 redirects per Report 26 Option B.
 *
 * The 10-section visual template at `/case-studies/[slug]/page.tsx` consumes
 * this shape. Every section gracefully degrades when its data field is
 * empty/undefined — case studies can ship progressively as client interviews
 * are completed (e.g. testimonial may land after launch).
 *
 * Launch queue (per Report 19): Belle Maison -> Bombay Petals -> Formative Concepts.
 * Each entry needs client-secured publish permission, real metrics, and a
 * non-fabricated testimonial quote.
 */

import { shopholisticoCaseStudy } from './shopholistico'
import { washingtonLawGroupCaseStudy } from './washington-law-group'
import { rdbTravelsCaseStudy } from './rdb-travels'

export type CaseStudyMetric = {
  /** Short label e.g. "Conversion rate". */
  label: string
  /** Display value e.g. "+47%" or "200+ SKUs". Percentages preferred per Report 19 Decision 4. */
  value: string
  /** Optional 1-line supporting note rendered beneath the value. */
  note?: string
}

/** A small KPI shown in the hero stat row (3 max). */
export type CaseStudyHeroStat = {
  value: string
  label: string
}

/** A single tile in the "At a glance" 3x2 KPI grid. */
export type CaseStudyGlanceTile = {
  /** Short uppercase eyebrow e.g. "INDUSTRY", "TIMELINE". */
  label: string
  /** Display value rendered in display weight. */
  value: string
  /** Optional fine-print note (e.g. INR equivalent under USD value). */
  note?: string
}

/** A screenshot slot rendered in the Solution section. */
export type CaseStudyScreenshot = {
  src: string
  alt: string
  /** Optional one-line caption rendered below the image. */
  caption?: string
  /** Visual treatment hint — desktop or mobile mockup. Defaults to desktop. */
  device?: 'desktop' | 'mobile'
}

export type CaseStudyTestimonial = {
  /** Verbatim client quote. NEVER fabricate per memory rules. */
  quote: string
  /** Client name as they want it published. */
  author: string
  /** Client title + company. */
  title: string
  /** Optional headshot URL (recommend /public/images/case-studies/{slug}-author.jpg). */
  photoUrl?: string
  /** Optional client logo URL rendered next to the testimonial. */
  companyLogoUrl?: string
}

export type CaseStudyFaq = {
  q: string
  a: string
}

export type CaseStudy = {
  /** true = page stays reachable by link but is noindexed and left out of the sitemap. */
  noindex?: boolean
  /** URL slug, kebab-case. Becomes `/case-studies/{slug}/`. */
  slug: string
  /** Client name as published e.g. "Belle Maison". */
  client: string
  /** 1-line positioning under the headline. */
  tagline: string
  /** Industry vertical e.g. "DTC Ecommerce". */
  industry: string
  /** Services delivered e.g. ["Shopify Development", "AI Recommendations"]. */
  services: string[]
  /** H1 / OG title e.g. "How Belle Maison launched a 200-SKU Shopify store in 7 days". */
  headline: string
  /** 2-3 sentence excerpt for index card + meta description fallback. */
  summary: string
  /** Optional eyebrow category label shown in hero (defaults to `industry`). */
  category?: string
  /** Optional client website. */
  clientUrl?: string
  /** Optional client logo URL rendered in hero right slot + index card. */
  clientLogoUrl?: string
  /** Optional location label (e.g. "Mumbai, India" or "California, USA"). */
  location?: string
  /** Hero stat row — exactly 3 maxi-stats horizontal. */
  heroStats?: CaseStudyHeroStat[]
  /** "At a glance" 3x2 KPI tiles (6 recommended). */
  glanceTiles?: CaseStudyGlanceTile[]
  /** 3-6 headline metric pairs for legacy callers / index card. */
  keyMetrics: CaseStudyMetric[]
  /** Results section — huge headline metric stat (single biggest win). */
  headlineMetric?: CaseStudyMetric
  /** Results section — 5-6 supporting metric cards in 3x2 grid. */
  resultsMetrics?: CaseStudyMetric[]
  /**
   * ~200-300 word "Challenge" section body.
   * The four body fields (challenge, approach, solution, results) are plain
   * text. `\n` starts a new paragraph, and a link is written as
   * `[anchor text](https://absolute-url)`. See ./inline-links.ts.
   */
  challenge: string
  /** Optional pull quote rendered inside the Challenge section. */
  challengePullQuote?: string
  /** ~200-300 word "Approach" section body. */
  approach: string
  /** Tech stack pills rendered alongside the Approach prose. */
  techStack?: string[]
  /** ~200-300 word "Solution" section body. */
  solution: string
  /** 3-5 screenshot slots in the Solution section. */
  screenshots?: CaseStudyScreenshot[]
  /** ~200-300 word "Results" section body (optional — most data is in metrics). */
  results: string
  /** Optional client testimonial. Omit entirely if no verbatim quote is available. */
  testimonial?: CaseStudyTestimonial
  /** Hero image path — recommend /images/case-studies/{slug}-hero.webp. */
  imageUrl: string
  /** OG share image 1200x630 — recommend /images/case-studies/{slug}-og.png. */
  ogImageUrl: string
  /** ISO 8601 publish date. */
  publishedDate: string
  /** Last substantive update, separate from original publication. */
  modifiedDate?: string
  /** 8+ FAQs about this kind of project (raised from 4-6 by the 22 Oct 2026 weak-pages audit). */
  faqs: CaseStudyFaq[]
  /** Slugs of 2 related case studies rendered in Section 9. */
  relatedSlugs?: string[]
  /** Optional 1-line "What we'd build for you" used inside the CTA banner. */
  ctaTeaser?: string
  /** <title>, 60 characters or fewer, rendered verbatim. Falls back to `headline`. */
  seoTitle?: string
  /** Meta description, 160 characters or fewer. Falls back to `summary`. */
  metaDescription?: string
  /**
   * Answer-first block rendered under the hero: who the client is, the problem,
   * what we built, and where the project stands today. One or two sentences each.
   */
  snapshot?: CaseStudySnapshot
  /** Service pages that match this project. Internal paths, each a single hop (no redirect). */
  serviceLinks?: CaseStudyServiceLink[]
}

export type CaseStudySnapshot = {
  who: string
  problem: string
  built: string
  status: string
}

export type CaseStudyServiceLink = {
  label: string
  href: string
}

/**
 * Six real client case studies migrated from `/case/` on 2026-05-28
 * per Report 26 (Option B + per-case repositioning approved by Bhavesh).
 *
 * Repositioning principle: keep the truth (these are real Indian client wins),
 * but lead with USD-primary currency, universalize prose ("multi-million-dollar"
 * not "multi-crore"), and drop "India" specifiers from keyword examples where
 * they do not change the meaning. Slugs are preserved 1:1 so the 301 redirects
 * in `public/_redirects` map cleanly from /case/{slug} → /case-studies/{slug}.
 *
 * Order preserved from the legacy data file:
 *   Belle Maison -> Impulse Branding -> Formative Concepts ->
 *   GroFresh Agro -> Flying Pixel -> Rukman Transport.
 */
export const CASE_STUDIES: CaseStudy[] = [
  // ─── Recent work, added 2026-09-29 (client naming approved by Bhavesh) ──
  shopholisticoCaseStudy,
  washingtonLawGroupCaseStudy,
  rdbTravelsCaseStudy,
  // ─── 1. Belle Maison: DTC + B2B commerce on Commerceflo ─────────────────
  // REWRITTEN 2026-08-04. The previous version was fabricated end to end: it
  // described a "DTC luxury home brand" on Shopify Plus with $180K revenue in
  // 120 days, 800 SKUs, a 3.8% conversion rate and a Klaviyo/Redis stack. Belle
  // Maison is a Mumbai wholesale distributor of artificial plants and lighting,
  // and the current confirmed scope is DTC + B2B on Commerceflo. No metric below
  // is asserted unless it can be checked. Do not add numbers without a source.
  {
    slug: 'belle-maison-ecommerce-success',
    seoTitle: 'Belle Maison: Retail and Trade Store on Commerceflo',
    metaDescription:
      'How FactoryJet built Belle Maison’s retail and trade storefront on Commerceflo, with per-account trade pricing, quote-to-order and a structured catalog.',
    snapshot: {
      who: 'Belle Maison, a Mumbai wholesale distributor of artificial plants, flowers, home decor and LED lighting that sells to retail shoppers and to trade buyers.',
      problem: 'Retail shoppers and trade accounts buy in different ways. Trade orders started as messages and were priced by hand, one at a time.',
      built: 'A Commerceflo storefront with a retail checkout, per-account trade pricing at login, and quotes that turn into orders without being retyped.',
      status: 'Live on Commerceflo. The bellemaison.in domain is being moved onto the new store.',
    },
    serviceLinks: [
      { label: 'B2B ecommerce development', href: '/b2b-ecommerce' },
      { label: 'Commerceflo by FactoryJet', href: '/commerceflo' },
      { label: 'Ecommerce development services', href: '/services/ecommerce-development' },
    ],
    client: 'Belle Maison',
    tagline: 'A Commerceflo by FactoryJet storefront for retail shoppers and trade buyers.',
    industry: 'DTC + B2B Commerce',
    services: [
      'DTC Storefront',
      'Commerceflo B2B Storefront',
      'Quote-to-Cash Workflow',
      'Trade Pricing Tiers',
      'Account-Based Ordering',
      'Catalog Structuring',
    ],
    headline: 'One Storefront for Belle Maison’s Retail and Trade Buyers',
    summary:
      'Belle Maison’s DTC + B2B storefront runs on Commerceflo by FactoryJet and was built by our team. Retail shoppers can explore its plants and decor catalog, while trade accounts use account-based pricing and quote-to-order workflows.',
    category: 'E-Comm',
    heroStats: [
      { value: 'DTC + B2B', label: 'Retail and trade buyers' },
      { value: 'Commerceflo', label: 'Platform built on' },
      { value: 'Mumbai', label: 'Wholesale distributor' },
    ],
    glanceTiles: [
      { label: 'INDUSTRY', value: 'DTC + B2B Commerce' },
      { label: 'SERVICES', value: 'B2B Storefront + Quote-to-Cash' },
      { label: 'PLATFORM', value: 'Commerceflo' },
      { label: 'CATALOG', value: 'Plants, Decor, LED Lighting' },
      { label: 'BUYERS', value: 'Retail + Trade' },
      { label: 'MARKET', value: 'India' },
    ],
    keyMetrics: [
      { label: 'Order Channel', value: 'Self-serve portal', note: 'Replaced WhatsApp and phone ordering' },
      { label: 'Pricing', value: 'Per-account tiers', note: 'Contracted rates shown on login' },
      { label: 'Quoting', value: 'Quote-to-order', note: 'No manual re-entry between quote and order' },
      { label: 'Platform', value: 'Commerceflo' },
    ],
    headlineMetric: {
      label: 'What Changed',
      value: 'Quote-to-cash, self-serve',
      note: 'Trade buyers price and order themselves instead of messaging for a quote',
    },
    resultsMetrics: [
      { label: 'Buyer Experience', value: 'Logged-in trade pricing' },
      { label: 'Quoting', value: 'Quote-to-order workflow' },
      { label: 'Catalog', value: 'Structured for trade search' },
      { label: 'Ordering', value: 'Account-based' },
      { label: 'Platform', value: 'Commerceflo' },
      { label: 'Manual Re-entry', value: 'Removed' },
    ],
    challenge:
      'Belle Maison serves retail shoppers and trade buyers with different buying needs. A retail customer needs clear product information and a straightforward path to purchase. Trade accounts need their agreed pricing, repeat ordering, and a quote process. The storefront needs to support both journeys without making either buyer work through an unsuitable checkout.',
    challengePullQuote:
      'Every order started as a message and got priced by hand. That does not scale past the people answering the phone.',
    approach:
      'We started from how the business actually sells rather than from a storefront template. That meant mapping the account tiers, the products that repeat, and the path a quote takes before it becomes an order. Commerceflo was the right base because quote-to-cash and account-based pricing are native to it rather than bolted on, which keeps trade logic out of custom code. We structured the catalog so trade buyers can find items the way they ask for them, and set pricing to resolve per account at login.',
    techStack: ['Commerceflo by FactoryJet', 'Next.js', 'Account-based pricing engine', 'Quote-to-order workflow'],
    solution:
      'The storefront shows a logged-in buyer their own contracted pricing, not a public list price. Buyers build a basket, raise a quote, and that quote carries through to an order without being retyped. Repeat ordering is account-based, so a returning buyer works from what they actually bought before. The catalog is structured around the categories trade buyers search, including artificial plants, flowers, flower runners, home decor and LED lighting.',
    results:
      'The build serves retail shoppers and trade accounts on Commerceflo. Its trade workflow connects account pricing, quotes, and orders. This case describes the implementation; it does not attribute a revenue or conversion uplift to the project.',

    imageUrl: '/images/case-studies/belle-maison-ecommerce-success-hero.jpg',
    ogImageUrl: '/images/case-studies/belle-maison-ecommerce-success-og.png',
    publishedDate: '2026-05-28',
    ctaTeaser: 'Selling to retail shoppers and trade accounts? We can scope both buying journeys on one commerce system.',
    relatedSlugs: ['gpsuk-promotional-products', 'sow-easy-distributor-portal'],
    faqs: [
      {
        q: 'What is quote-to-cash, in plain terms?',
        a: 'It is the whole path from a buyer asking what something costs to you getting paid. In wholesale that path usually breaks in the middle, because the quote lives in a message or a spreadsheet and someone has to retype it as an order. Quote-to-cash keeps it as one continuous record.',
      },
      {
        q: 'Why not just use a normal ecommerce store?',
        a: 'A normal store shows one price to everyone and expects instant checkout. Trade buying does not work that way: pricing is per account, quantities are large, and an order often needs a quote and an approval first. Forcing that onto a retail storefront usually means bolting on apps that each hold a piece of the truth.',
      },
      {
        q: 'Why Commerceflo rather than Shopify or WooCommerce?',
        a: 'Account-based pricing and quote-to-order are native to Commerceflo, FactoryJet’s own platform, rather than added by apps. For a distributor whose pricing differs per buyer, keeping that logic in the platform rather than in custom code is what makes it maintainable.',
      },
      {
        q: 'Does this work for a catalog that changes often?',
        a: 'Yes. The catalog is structured around trade categories rather than one-off product pages, so adding or retiring lines does not mean rebuilding navigation. That matters for seasonal ranges, which is common in decor and lighting.',
      },
      {
        q: 'Can buyers still order the way they always have?',
        a: 'Yes, and that matters more than it sounds. Trade buyers who prefer to message still can. The portal removes the requirement that every order goes through a person, rather than removing the option.',
      },
      {
        q: 'Can retail shoppers and trade buyers use the same store?',
        a: 'Yes. There is one catalog and two journeys. A retail shopper sees public prices and checks out as normal. A trade buyer logs in and sees their own account prices and the option to raise a quote. Products are kept up to date in one place for both.',
      },
      {
        q: 'Can two trade accounts see different prices for the same product?',
        a: 'Yes. Pricing is worked out per account at login, so each buyer sees the rate agreed with them. No account can see another account’s price, and the price on a quote carries through to the order.',
      },
      {
        q: 'Is Commerceflo only for businesses in India?',
        a: 'No. GPSUK, a UK promotional products supplier, also runs its trade storefront on Commerceflo. Account pricing and quote-to-order work the same way in any market.',
      },
      {
        q: 'Can an existing domain move onto a new Commerceflo store?',
        a: 'Yes. The store is built and tested on Commerceflo first, then the business’s own domain is pointed at it and old page addresses are redirected to the matching new pages. Belle Maison’s bellemaison.in domain is being moved onto its Commerceflo store.',
      },
    ],
    clientUrl: 'https://app.commerceflo.ai/store/belle-maison',
    location: 'Mumbai, India',
    modifiedDate: '2026-10-22',
  },

  // ─── 2. Impulse Branding: website, SEO and AI search engagement ──────────
  // Revised 2026-10-22. impulsebranding.in fetched that day: HTTP 200, a
  // Next.js build served through Cloudflare, title "Signage & Fit-Out, Mumbai",
  // with services, sectors, case studies and insights sections in its sitemap.
  // The old "₹3 Cr" / "$360K pipeline" figures were removed earlier as
  // unsourced; the share card still printed "$360K" until this revision.
  {
    slug: 'impulse-branding-migration',
    client: 'Impulse Branding Solutions',
    tagline: 'A website, SEO and AI search engagement for a commercial signage and fit-out company.',
    industry: 'Commercial Signage & Fit-Out',
    services: [
      'Website Development',
      'SEO',
      'AI Search',
    ],
    headline: 'A Website and Search Presence for Impulse Branding Solutions',
    seoTitle: 'Impulse Branding: Website, SEO and AI Search',
    metaDescription:
      'How FactoryJet built the Impulse Branding Solutions website on Next.js and runs its SEO and AI search: services, sectors and project pages buyers can check.',
    summary:
      'Impulse Branding Solutions makes commercial signage and handles fit-out work for brands across India. FactoryJet built its website on Next.js and runs its ongoing SEO and AI search work, so buyers can find a service, see similar projects and send an inquiry.',
    snapshot: {
      who: 'Impulse Branding Solutions, a Mumbai company that manufactures commercial signage in-house and runs civil and MEP fit-out work for retail, aviation, healthcare, office and hospitality brands.',
      problem: 'A buyer comparing signage and fit-out vendors wants to see the exact service, the sector it was done for, and real projects before they call. The site had to show all three and lead to an inquiry.',
      built: 'A Next.js website with a page per service, a page per sector, project case studies and an insights section, plus ongoing SEO and AI search work on top of it.',
      status: 'Live on impulsebranding.in. SEO and AI search work continues. Impulse Branding Solutions has reviewed FactoryJet publicly.',
    },
    category: 'Corporate',
    heroStats: [
      { value: 'Website', label: 'Built by FactoryJet on Next.js' },
      { value: 'SEO', label: 'Ongoing engagement' },
      { value: 'AI Search', label: 'Ongoing engagement' },
    ],
    glanceTiles: [
      { label: 'CLIENT', value: 'Impulse Branding Solutions' },
      { label: 'INDUSTRY', value: 'Signage & Fit-Out' },
      { label: 'SERVICES', value: 'Website + SEO + AI Search' },
      { label: 'PLATFORM', value: 'Next.js on Cloudflare' },
      { label: 'STATUS', value: 'Live, Search Work Ongoing' },
      { label: 'SITE', value: 'impulsebranding.in' },
    ],
    keyMetrics: [],

    challenge:
      'Impulse Branding Solutions does two kinds of work that buyers usually hire separately: it makes signage in its own facility, and it runs the civil and MEP work for a fit-out. That is a strong offer, but it is hard to explain on one home page. A retail chain looking for store signage, an airport looking for wayfinding, and a hospital planning an interior refit all ask different questions.\nThey also check proof before they call. A buyer wants to see a project in their own sector, not a general gallery. And more of them now start by asking an AI assistant who does this kind of work, which only helps a company whose site explains itself in plain text.',

    approach:
      'We built the site around the questions a buyer asks, in the order they ask them. First, what exactly do you make or do, so each service has its own page. Second, have you done it for a business like mine, so each sector has its own page. Third, show me, so projects sit in their own case-study pages that the service and sector pages link to.\nSearch is ongoing work, not a launch task. We cover both traditional SEO and AI search, since being named in an AI answer and ranking in Google rest on the same base: real text, clear structure and pages that answer one question well.',
    techStack: ['Next.js', 'React', 'Cloudflare', 'Schema.org JSON-LD'],

    solution:
      'The live site has a page for each service, a page for each sector it serves, such as aviation and airports, retail and showrooms, healthcare and hospitals, corporate offices, education and hospitality, a set of project case studies, and an insights section for articles. Every page is plain server-rendered text, so search engines and AI tools can read it without running code, and each one ends with a route to an inquiry.\nOn top of the build, FactoryJet runs continuing SEO and AI search work: new pages where buyers are searching, internal links between services, sectors and projects, and fixes as the site grows.',
    results:
      'Impulse Branding Solutions has a live website that covers its services, its sectors and its projects, with SEO and AI search work continuing on it. This case describes the work delivered. Traffic and inquiry figures will be added here once they are measured and the client agrees to share them.',
    imageUrl: '/images/case-studies/impulse-branding-migration-hero.jpg',
    ogImageUrl: '/images/case-studies/impulse-branding-migration-og.png',
    publishedDate: '2026-05-28',
    ctaTeaser: 'We can connect your service pages, sector pages, projects and inquiry journey as one website and search engagement.',
    relatedSlugs: ['yadav-entrance-automation-website-seo', 'formative-concepts-bim'],
    serviceLinks: [
      { label: 'B2B website design', href: '/services/b2b-website-design' },
      { label: 'AI SEO services', href: '/services/ai-seo' },
      { label: 'Technical SEO', href: '/services/technical-seo' },
    ],
    faqs: [
      { q: 'What work does FactoryJet do for Impulse Branding Solutions?', a: 'FactoryJet built the Impulse Branding Solutions website and runs its ongoing SEO and AI search work. The build covers service pages, sector pages, project case studies and an insights section. The search work adds and improves pages over time, based on what buyers are searching for.' },
      { q: 'Why build a separate page for each service and each sector?', a: 'Because buyers search for one thing at a time. A retail chain looks for store signage, an airport looks for wayfinding, and a hospital looks for a fit-out partner. One page per service and one per sector gives each of them a direct answer, and gives Google and AI assistants a clear page to show for that question.' },
      { q: 'Why did you use Next.js for this site?', a: 'Next.js lets us send every page as ready-made HTML, which loads fast and is easy for search engines and AI crawlers to read. It also lets the site grow to many service, sector and project pages without slowing down or turning into a page builder that only one person can edit.' },
      { q: 'How should a B2B company show its projects on its website?', a: 'As separate case-study pages, each tied to the services and sectors it proves. A single gallery of photos does not tell a buyer what was done, for whom, or why it matters. A project page with the client type, the scope and the result, linked from the matching service page, does.' },
      { q: 'What is AI search work, in plain terms?', a: 'It is making sure that when someone asks ChatGPT, Gemini or Google’s AI answers who does your kind of work, your company can be named. It rests on the same base as normal SEO: pages that answer one question clearly, in real text, with the facts a buyer needs.' },
      { q: 'Can one website sell both manufacturing and site work?', a: 'Yes, if the structure is right. Impulse Branding Solutions makes signage and also runs civil and MEP fit-out work. The site explains each service on its own page and then shows how they combine, so a buyer who only needs one part is not lost, and a buyer who wants one partner for both sees that option.' },
      { q: 'How long does SEO take to show results for a B2B services site?', a: 'Searches for the company name usually improve first, within weeks of launch. Service and sector searches take longer, often several months, and depend on how many competitors already rank. Anyone who promises a fixed date for page-one rankings is guessing.' },
      { q: 'Does this case study report traffic or revenue figures?', a: 'Not yet. It describes the website and the search work FactoryJet delivers. Measured traffic and inquiry figures will be added once the client agrees to share them.' },
    ],
    clientUrl: 'https://impulsebranding.in/',
    location: 'Mumbai, India',
    modifiedDate: '2026-10-22',
  },

  // ─── 3. Formative Concepts: BIM and drafting website for overseas buyers ──
  // Revised 2026-10-22. The old version claimed "$108K revenue in 4 months",
  // "5,000+ monthly visitors", "30+ international leads" and "$0 paid spend",
  // and a Gatsby + Contentful + Netlify stack. None of those figures has a
  // source beyond the legacy /case/ data file, which also held the fabricated
  // Belle Maison and Impulse figures. DataForSEO domain_rank_overview on
  // 22 Oct 2026 estimated single-digit monthly organic visits for the domain,
  // which contradicts "5,000+". The live site (formativeconcepts.com, fetched
  // 22 Oct 2026) runs on WordPress with Breakdance, not Gatsby. Do not restore
  // any figure without a measured source from the client.
  {
    slug: 'formative-concepts-bim',
    client: 'Formative Concepts',
    tagline: 'An architectural, MEP drafting and BIM firm that needed a website overseas buyers could find and trust.',
    industry: 'MEP & BIM Consulting',
    services: [
      'WordPress Website Build',
      'Service and Country Pages',
      'Consultative SEO',
      'AI Search Content Structure',
    ],
    headline: 'A Website That Explains BIM and MEP Drafting to Overseas Buyers',
    seoTitle: 'Formative Concepts: BIM and MEP Drafting Website',
    metaDescription:
      'How FactoryJet built the Formative Concepts website on WordPress: a page per drafting and BIM service, pages for each country it serves, and SEO for buyers.',
    summary:
      'Formative Concepts provides architectural drafting, MEP design and BIM services to architects, contractors and developers in other countries. FactoryJet built its website on WordPress with a page for each service and each country it sells into, written for the technical searches those buyers make.',
    snapshot: {
      who: 'Formative Concepts, an architectural drafting, MEP design and BIM outsourcing firm whose buyers are architects, contractors and developers in other countries.',
      problem: 'The firm relied on referrals and had almost no web presence, so overseas buyers searching for drafting or BIM help never found it.',
      built: 'A WordPress site with a page for each drafting and BIM service, a page for each country it serves, a projects page and insight articles, structured for technical search queries.',
      status: 'Live on formativeconcepts.com. FactoryJet built and manages the site.',
    },
    category: 'Corporate',
    heroStats: [
      { value: '20+', label: 'Pages at launch' },
      { value: 'WordPress', label: 'Platform built on' },
      { value: 'Worldwide', label: 'Buyers the site is written for' },
    ],
    glanceTiles: [
      { label: 'INDUSTRY', value: 'MEP & BIM Consulting' },
      { label: 'SERVICES', value: 'Website + Consultative SEO' },
      { label: 'PLATFORM', value: 'WordPress + Breakdance' },
      { label: 'SCALE', value: '20+ Pages' },
      { label: 'AUDIENCE', value: 'International B2B' },
      { label: 'SITE', value: 'formativeconcepts.com' },
    ],
    keyMetrics: [
      { label: 'Pages Live', value: '20+' },
      { label: 'Service Pages', value: 'One per drafting discipline' },
      { label: 'Country Pages', value: 'One per market served' },
      { label: 'Platform', value: 'WordPress' },
    ],
    headlineMetric: {
      label: 'What Changed',
      value: 'A site for overseas buyers',
      note: 'Each service and each target country has its own page, written for the searches those buyers make',
    },
    resultsMetrics: [
      { label: 'Website', value: 'Live' },
      { label: 'Service Pages', value: 'Per discipline' },
      { label: 'Country Pages', value: 'Per market' },
      { label: 'Projects', value: 'Shown on site' },
      { label: 'Insights', value: 'Articles published' },
      { label: 'Platform', value: 'WordPress' },
    ],
    challenge:
      'Formative Concepts had almost no digital footprint. Work came through word of mouth, which limits a drafting and BIM firm to the people who already know it. Its best buyers are architects, contractors and developers in other countries, and they search for a specific task, such as MEP coordination, clash detection or as-built drawings, rather than for a firm’s name. They also want to see evidence of capability before they make contact. A thin site, or no site, drops the firm from that shortlist before anyone calls.',
    approach:
      'We treated the site as the firm’s first meeting with an overseas buyer. The content follows "consultative SEO": answer the specific technical question a decision-maker types, rather than chase broad, high-volume terms. That meant one page per service, so each discipline is explained on its own, and one page per country the firm sells into, so a buyer in that market lands on a page written for them. Every page is written so a search engine or AI assistant can lift a clear, direct answer from it. WordPress with the Breakdance builder lets the firm’s own team keep pages and projects current without a developer.',
    techStack: ['WordPress', 'Breakdance', 'Rank Math SEO', 'Google Site Kit', 'Schema.org JSON-LD'],
    solution:
      'The site covers every service the firm offers, each on its own page: architectural drafting, MEP drafting and design, mechanical (HVAC), electrical, plumbing and fire protection drafting, MEP coordination and clash detection, BIM modeling, 4D and 5D BIM, as-built drawings and models, shop drawings, permit drawings, and 3D modeling and rendering. Alongside those sit country pages for the markets it serves, including the USA, Canada, Australia, New Zealand, Singapore, Saudi Arabia and Kuwait, plus a projects page, an about page and insight articles. Each page leads to a call request.',
    results:
      'Formative Concepts has a live website that explains each of its services and speaks to buyers in each market it serves. FactoryJet built the site and manages it. This case describes the delivered work; traffic and lead figures will be added once they are measured on the current site.',
    imageUrl: '/images/case-studies/formative-concepts-bim-hero.jpg',
    ogImageUrl: '/images/case-studies/formative-concepts-bim-og.png',
    publishedDate: '2026-05-28',
    modifiedDate: '2026-10-22',
    clientUrl: 'https://formativeconcepts.com/',
    ctaTeaser: 'Selling a technical service to buyers abroad? We build the pages they search for and the proof they check.',
    relatedSlugs: ['impulse-branding-migration', 'yadav-entrance-automation-website-seo'],
    serviceLinks: [
      { label: 'WordPress development', href: '/wordpress-development' },
      { label: 'B2B website design', href: '/services/b2b-website-design' },
      { label: 'AI SEO services', href: '/services/ai-seo' },
    ],
    faqs: [
      {
        q: 'What is consultative SEO and how is it different from standard SEO?',
        a: 'Standard SEO chases the highest-volume keyword. Consultative SEO targets the specific technical question a decision-maker types when they have a real problem, such as "MEP coordination for a hospital project". Fewer people search those terms, but the people who do are much closer to hiring someone.',
      },
      {
        q: 'Why does a drafting firm need a page for every service?',
        a: 'Because buyers search for the task, not the firm. An architect who needs clash detection searches for clash detection. If that service is one line on a general page, the firm will not show up. A page per service explains the scope, the files delivered and the software used, which is what that buyer wants to know.',
      },
      {
        q: 'Why build country pages for an outsourcing firm?',
        a: 'A contractor in Australia and a developer in Saudi Arabia work to different standards and ask different questions. A page for each market lets the firm speak to that buyer directly, and gives search engines a clear page to show to people in that country.',
      },
      {
        q: 'Why WordPress for this site?',
        a: 'WordPress with the Breakdance builder lets the firm’s own team add projects and update pages without a developer. For a services firm that adds work samples often, that matters more than the small speed gain of a fully custom build.',
      },
      {
        q: 'How does a site get cited by AI answer engines?',
        a: 'There is no special trick. AI assistants quote pages that answer a question clearly in real text, name the service and the facts plainly, and are easy to crawl. Every page on this site opens with a direct explanation of the service before going into detail.',
      },
      {
        q: 'What should a BIM or drafting firm show on its website to win overseas work?',
        a: 'The exact services, the software and file formats it works in, the standards it can meet, and real projects. Overseas buyers cannot visit the office, so the website has to answer the questions they would ask in a first meeting.',
      },
      {
        q: 'Can the firm update the site itself?',
        a: 'Yes. The site runs on WordPress, so the team can edit pages, add projects and publish articles from the admin screen. FactoryJet manages the site and handles the technical side.',
      },
      {
        q: 'Does this case study report traffic or lead figures?',
        a: 'Not at the moment. It describes the website FactoryJet built and manages. Measured traffic and lead figures will be added when they are available for the current site.',
      },
    ],
  },

  // ─── 4. GroFresh Agro: ERPNext for a food processing manufacturer ─────────
  // Revised 2026-10-22. The old version claimed "+70% operational efficiency",
  // "-90% paperwork", "finance close in days", "near-zero inventory leakage",
  // a "12–20 week" timeline and a "multi-million-dollar" scale (the legacy
  // source said "multi-crore", which is not the same thing). No source exists
  // for any of these beyond the deleted legacy /case/ data file, which also
  // held fabricated figures for two other clients. GroFresh Agrofood is listed
  // in FactoryJet's GoodFirms portfolio. Do not restore a figure without a
  // measured source from the client.
  {
    slug: 'grofresh-manufacturing-erp',
    client: 'GroFresh Agro',
    tagline: 'A food processing manufacturer moving from Tally and spreadsheets to one ERP.',
    industry: 'Food Processing Manufacturing',
    services: [
      'ERPNext Implementation',
      'Supply Chain Digitization',
      'Production Dashboards',
      'Cloud Deployment',
    ],
    headline: 'Replacing Tally and Spreadsheets With ERPNext at GroFresh Agro',
    seoTitle: 'GroFresh Agro: ERPNext for Food Processing',
    metaDescription:
      'How FactoryJet replaced Tally and spreadsheets at GroFresh Agro with ERPNext: sourcing to dispatch in one system, batch tracking and live yield dashboards.',
    summary:
      'GroFresh Agro ran its food processing operation on Tally and separate spreadsheets, so stock, production and finance never matched. FactoryJet implemented ERPNext set up for food processing, covering raw material sourcing through to dispatch, with live dashboards for production yield and wastage.',
    snapshot: {
      who: 'GroFresh Agro, a food processing manufacturer.',
      problem: 'Operations ran on Tally and disconnected spreadsheets, which split the data, let stock go missing between systems, and delayed financial reporting.',
      built: 'An ERPNext system set up for food processing, from raw material sourcing to dispatch, with batch tracking, expiry and lot traceability, and live dashboards for yield and wastage.',
      status: 'Delivered. Procurement, inventory, production and finance run in one system.',
    },
    category: 'Manufacturing',
    heroStats: [
      { value: 'ERPNext', label: 'One system for the operation' },
      { value: 'Live', label: 'Yield and wastage dashboards' },
      { value: 'End to end', label: 'Sourcing through dispatch' },
    ],
    glanceTiles: [
      { label: 'INDUSTRY', value: 'Food Processing' },
      { label: 'SERVICES', value: 'ERPNext Implementation' },
      { label: 'REPLACED', value: 'Tally + Spreadsheets' },
      { label: 'WORKFLOW', value: 'Sourcing → Dispatch' },
      { label: 'TRACEABILITY', value: 'Batch, Lot and Expiry' },
      { label: 'TECH', value: 'ERPNext, Python, Docker, AWS' },
    ],
    keyMetrics: [
      { label: 'System', value: 'ERPNext' },
      { label: 'Replaced', value: 'Tally + spreadsheets' },
      { label: 'Dashboards', value: 'Live yield and wastage' },
      { label: 'Workflow Coverage', value: 'Sourcing → Dispatch' },
    ],
    headlineMetric: {
      label: 'What Changed',
      value: 'One system, sourcing to dispatch',
      note: 'Stock, production and finance now read from the same records instead of separate spreadsheets',
    },
    resultsMetrics: [
      { label: 'Procurement', value: 'In ERPNext' },
      { label: 'Inventory', value: 'In ERPNext' },
      { label: 'Production', value: 'Batch + yield tracking' },
      { label: 'Traceability', value: 'Lot and expiry' },
      { label: 'Dashboards', value: 'Live' },
      { label: 'Finance', value: 'Same records as operations' },
    ],
    challenge:
      'GroFresh was running a food processing operation on Tally and a set of separate spreadsheets. Each team kept its own numbers. Stock leaked between systems because nothing tied raw material received to what was used on the floor. Plant managers made decisions on old reports, and finance reconciled production yields by hand at month-end. The business needed one system for its supply chain and production lines, without forcing every team to change how it worked on the same day.',
    approach:
      'We chose ERPNext because it gives a manufacturer a full, modular ERP without the licence cost of the large enterprise suites. We mapped each GroFresh workflow as it ran before configuring anything, so the system matched how the plant works. Then we went live one area at a time: procurement and inventory first, where the stock gaps were, then production planning, then finance. The plant kept running while each part switched over.',
    techStack: ['ERPNext', 'Python', 'Docker', 'AWS'],
    solution:
      'The ERP now covers the operation from raw material sourcing to final dispatch. Batch tracking, yield reporting, expiry management and lot traceability sit in the same system as purchasing and stock, so a batch can be traced back to the raw material it came from. Live dashboards show the leadership team production yield and wastage as they happen, instead of in a month-end report. The system runs in Docker containers on AWS.',
    results:
      'GroFresh runs procurement, inventory, production and finance in one ERPNext system instead of Tally and spreadsheets. Yield and wastage are visible on live dashboards, and every batch can be traced to its raw material. This case describes the system delivered; it does not publish efficiency figures.',
    imageUrl: '/images/case-studies/grofresh-manufacturing-erp-hero.jpg',
    ogImageUrl: '/images/case-studies/grofresh-manufacturing-erp-og.png',
    publishedDate: '2026-05-28',
    modifiedDate: '2026-10-22',
    ctaTeaser: 'Manufacturer still running on Tally and spreadsheets? We set up ERP systems around how your plant actually works.',
    relatedSlugs: ['sow-easy-distributor-portal', 'belle-maison-ecommerce-success'],
    serviceLinks: [
      { label: 'AI agents for ERP systems', href: '/services/erp-ai-agents' },
      { label: 'AI agents for manufacturing', href: '/services/manufacturing-ai-agents' },
      { label: 'Custom web application development', href: '/services/web-application-development' },
    ],
    faqs: [
      {
        q: 'Why ERPNext rather than SAP or Oracle for a mid-sized manufacturer?',
        a: 'ERPNext is open source, has no per-user licence fee, and covers the core of manufacturing: purchasing, stock, production, quality and accounts. For a mid-sized plant it does most of what the large suites do at a much lower total cost, and it can be changed to fit the plant rather than the other way round.',
      },
      {
        q: 'How do you move a business off Tally without stopping operations?',
        a: 'One area at a time. We start where the data problems cost the most, usually purchasing and stock, run it live, and only then move the next area. Opening balances and item masters are cleaned before import, so the new system does not inherit the old errors.',
      },
      {
        q: 'What does food processing need that a generic ERP setup does not?',
        a: 'Batch tracking, expiry dates, lot traceability and yield reporting. A generic setup tracks how much stock you have. A food processing setup also tracks which batch it came from, when it expires, and how much finished product each batch of raw material produced.',
      },
      {
        q: 'What is lot traceability and why does it matter?',
        a: 'It means you can follow any finished product back to the raw material lots it was made from, and forward to the customers who received it. If a supplier reports a problem with one lot, you can find every affected batch in minutes instead of searching through paper records.',
      },
      {
        q: 'Can ERPNext show production numbers in real time?',
        a: 'Yes. When production entries are recorded in the system as work happens, dashboards update straight away. At GroFresh, leadership sees yield and wastage on live dashboards instead of waiting for a month-end report.',
      },
      {
        q: 'Where does an ERPNext system run?',
        a: 'Anywhere that can run Docker. The GroFresh system runs in Docker containers on AWS. A business can also host it on its own server or use a managed hosting provider, and the bills can sit in the business’s own account.',
      },
      {
        q: 'Does FactoryJet work with ERPs other than ERPNext?',
        a: 'Yes. FactoryJet has worked on Odoo, NetSuite, SAP Business One and custom ERPs, as well as ERPNext. The choice depends on the business, its budget and the systems it already runs.',
      },
      {
        q: 'Can AI agents be added on top of an ERP like this?',
        a: 'Yes, once the data lives in one system. Common examples are reading supplier quotes and purchase orders into the ERP, drafting sales orders from emails, and flagging stock that is close to expiry. The ERP stays the system of record and the agent does the repetitive reading and typing.',
      },
    ],
  },

  // ─── 5. Flying Pixel: geospatial and drone survey website ────────────────
  // Rewritten 2026-10-22. The old version described a "creative agency" on Wix
  // Studio with Velo and Zapier, and claimed "500+ organic leads", "+300%
  // traffic", "95% client retention", "$0 paid spend", "+47% dwell time" and
  // "-31% bounce rate". The live site (flyingpixel.in, fetched 22 Oct 2026) is
  // a geospatial and drone survey business on a Next.js static build served by
  // Cloudflare, which FactoryJet built (project folder
  // ~/FactoryJet/client-projects/flying-pixel, handover dated 2026-08-12). The
  // old story and its figures do not describe this site and had no source.
  // Client naming approved by Bhavesh on 2026-09-29.
  {
    slug: 'flying-pixel-agency',
    client: 'Flying Pixel',
    tagline: 'A drone survey and geospatial company that needed a website its engineering buyers would take seriously.',
    industry: 'Geospatial & Drone Survey',
    services: [
      'Website Design and Build',
      'Enterprise Survey Site',
      'Weddings & Events Section',
      'SEO and AI Search Foundations',
    ],
    headline: 'A Geospatial and Drone Survey Website for Flying Pixel',
    seoTitle: 'Flying Pixel: Drone Survey and Geospatial Website',
    metaDescription:
      'How FactoryJet built Flying Pixel a Next.js website for drone survey, LiDAR and photogrammetry buyers, plus a separate section for weddings and events.',
    summary:
      'Flying Pixel runs drone surveys, LiDAR and photogrammetry for infrastructure, energy and construction projects, and also films weddings and events from the air. FactoryJet built its website on Next.js with a survey site for engineering buyers and a separate weddings and events section, so each audience lands on pages written for it.',
    snapshot: {
      who: 'Flying Pixel, a drone company that delivers survey data (point clouds, terrain models and contours) for infrastructure, energy and construction projects, and also shoots weddings and events.',
      problem: 'Two very different audiences, project engineers and wedding clients, were being served by one mixed site, which made the survey business look less serious to the buyers who matter most.',
      built: 'A Next.js website with a survey and geospatial site (solutions, sectors, work, about, contact) and a separate weddings and events section with its own service pages.',
      status: 'Live on flyingpixel.in.',
    },
    category: 'Corporate',
    heroStats: [
      { value: 'Next.js', label: 'Fast static build' },
      { value: 'Two audiences', label: 'Survey buyers and event clients' },
      { value: 'Live', label: 'flyingpixel.in' },
    ],
    glanceTiles: [
      { label: 'INDUSTRY', value: 'Geospatial & Drone Survey' },
      { label: 'SERVICES', value: 'Website Design + Build' },
      { label: 'PLATFORM', value: 'Next.js on Cloudflare' },
      { label: 'AUDIENCES', value: 'Engineers + Event Clients' },
      { label: 'STATUS', value: 'Live' },
      { label: 'SITE', value: 'flyingpixel.in' },
    ],
    keyMetrics: [
      { label: 'Survey Site', value: 'Solutions, sectors, work' },
      { label: 'Events Section', value: 'Own service pages' },
      { label: 'Platform', value: 'Next.js' },
      { label: 'Site', value: 'flyingpixel.in' },
    ],
    headlineMetric: {
      label: 'What Changed',
      value: 'One site per audience',
      note: 'Engineering buyers and wedding clients each land on pages written for them',
    },
    resultsMetrics: [
      { label: 'Website', value: 'Live' },
      { label: 'Survey Pages', value: 'Solutions + sectors' },
      { label: 'Project Work', value: 'Shown on site' },
      { label: 'Events Section', value: 'Separate pages' },
      { label: 'Platform', value: 'Next.js, static' },
      { label: 'Hosting', value: 'Cloudflare' },
    ],
    challenge:
      'Flying Pixel sells to two groups that have almost nothing in common. One is project teams on highways, airports, ports, solar parks and construction sites, who need survey-grade data delivered in the formats their engineers use. The other is couples and families booking aerial photography and films for weddings and events. Putting both on one set of pages confuses each of them. An engineer who lands on wedding photos doubts the survey work, and a couple who lands on LiDAR deliverables leaves. The business needed a site that gave the survey work the weight it deserves without losing the events side.',
    approach:
      'We split the business into two parts of the website, each with its own pages and its own tone. The survey site speaks to engineers and project managers: what is captured, how it is processed, and what files arrive at the end. The weddings and events section speaks to families and planners. We wrote every claim against facts the client could back up, and marked anything unconfirmed rather than guessing. The site is a Next.js static build, so every page is ready-made HTML that loads fast and can be read by search engines and AI tools.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Static export', 'Cloudflare Pages', 'Schema.org JSON-LD'],
    solution:
      'The survey site has a home page, a solutions page covering drone survey, LiDAR, photogrammetry and the data deliverables, a sectors page for the industries served, a work page showing projects, an about page and a contact page that leads to a survey request. The weddings and events section has its own hub and service pages for wedding photography, pre-wedding shoots, ceremony coverage, aerial videography, drone shows, birthday events, corporate events, and maternity and newborn shoots.',
    results:
      'Flying Pixel has a live website on flyingpixel.in that serves its survey buyers and its events clients on separate pages. This case describes the site FactoryJet built. Lead and traffic figures will be added once they are measured on the new site.',
    imageUrl: '/images/case-studies/flying-pixel-agency-hero.jpg',
    ogImageUrl: '/images/case-studies/flying-pixel-agency-og.png',
    publishedDate: '2026-05-28',
    modifiedDate: '2026-10-22',
    clientUrl: 'https://flyingpixel.in/',
    ctaTeaser: 'Selling to two very different buyers? We build a site that gives each one pages written for them.',
    relatedSlugs: ['yadav-entrance-automation-website-seo', 'formative-concepts-bim'],
    serviceLinks: [
      { label: 'B2B website design', href: '/services/b2b-website-design' },
      { label: 'Web design services', href: '/services/web-design' },
      { label: 'Technical SEO', href: '/services/technical-seo' },
    ],
    faqs: [
      {
        q: 'Should a business with two very different audiences have one website or two?',
        a: 'It needs clearly separate sections at the least, and sometimes separate domains. Flying Pixel’s survey buyers and wedding clients want different things, so each gets its own pages, its own language and its own route to an inquiry. Mixing them on the same pages weakens both.',
      },
      {
        q: 'What do engineering buyers look for on a drone survey website?',
        a: 'What is captured, how accurate it is, how it is processed, and which files they receive, such as point clouds, terrain models and contours in their own formats. They also want to see similar projects. A survey site that leads with pretty aerial photos and hides the deliverables loses them.',
      },
      {
        q: 'Why Next.js for this site?',
        a: 'A Next.js static build turns every page into ready-made HTML. Pages load fast on mobile connections, cost little to host, and can be read by search engines and AI crawlers without running any code. That suits a business whose buyers often check the site from a project site on a phone.',
      },
      {
        q: 'How do you show survey work without breaching client confidentiality?',
        a: 'By describing the type of project, the sector and the deliverables, and showing images only where the client allows it. Many infrastructure projects cannot be named, but a buyer can still see what was captured and what was delivered.',
      },
      {
        q: 'Can one website rank for both survey and wedding searches?',
        a: 'Yes, when each topic has its own pages. Search engines rank pages, not whole sites. A page about LiDAR survey and a page about aerial wedding videography can each rank for their own searches, as long as each is written for that one topic.',
      },
      {
        q: 'What should a drone survey company put on its contact page?',
        a: 'A short request form that asks for the site location, the type of survey, the area and the deliverables needed. Those four answers let the team reply with a useful next step instead of a generic follow-up email.',
      },
      {
        q: 'How do you avoid unsupported claims on a services website?',
        a: 'We write every claim against facts the client can back up, and mark anything unconfirmed instead of filling the gap with a guess. Accuracy figures, project names and client logos only go on the site once the client confirms them.',
      },
      {
        q: 'Does this case study report lead or traffic figures?',
        a: 'Not yet. It describes the website FactoryJet built for Flying Pixel. Measured figures will be added once the new site has been live long enough to report them.',
      },
    ],
  },

  // ─── 6. Rukman Transport: brand, local SEO and website for B2B logistics ──
  // Revised 2026-10-22. The old version claimed "+300% organic traffic",
  // "+150% GMB calls", "Top 3 local search visibility" and "multiple B2B
  // contracts secured". No source exists for these beyond the deleted legacy
  // /case/ data file. Rukman Transport is listed in FactoryJet's GoodFirms
  // portfolio. On 22 Oct 2026 rukmantransport.com returned a Wix "connect your
  // domain" error page, so no client URL is published and the site is not
  // described as live. The WordPress stack comes from the legacy data and
  // could not be checked. Do not restore a figure without a measured source.
  {
    slug: 'rukman-transport-logistics',
    // 22 Oct 2026, Bhavesh: noindex while the client site is down.
    noindex: true,
    client: 'Rukman Transport',
    tagline: 'A B2B transport operator whose online presence needed to match the size of its fleet.',
    industry: 'B2B Logistics',
    services: [
      'Local SEO',
      'Google Business Profile Optimization',
      'WordPress Website Build',
      'Schema Markup',
      'Brand Refresh',
    ],
    headline: 'Local SEO and a Credible Website for Rukman Transport',
    seoTitle: 'Rukman Transport: Local SEO for B2B Logistics',
    metaDescription:
      'How FactoryJet rebuilt Rukman Transport’s brand assets, website and Google Business Profile so procurement teams could see its fleet and safety record.',
    summary:
      'Rukman Transport is a B2B transport operator that was losing bids because its thin online presence did not show its fleet or safety record. FactoryJet refreshed its brand assets, built a WordPress website with fleet and safety pages, and optimized its Google Business Profile and local search pages for industrial transport searches.',
    snapshot: {
      who: 'Rukman Transport, a B2B transport and logistics operator serving industrial customers.',
      problem: 'Procurement teams shortlisting transport partners found a thin website with no fleet photos or safety credentials, and dropped the firm before sales heard about the bid.',
      built: 'A brand refresh, a WordPress website with fleet, safety and service-area pages, structured data for the business, and a fully completed Google Business Profile.',
      status: 'Delivered.',
    },
    category: 'Logistics',
    heroStats: [
      { value: 'Local SEO', label: 'Service-area pages and profile' },
      { value: 'Google', label: 'Business Profile completed' },
      { value: 'Brand', label: 'Fleet and safety assets rebuilt' },
    ],
    glanceTiles: [
      { label: 'INDUSTRY', value: 'B2B Logistics' },
      { label: 'SERVICES', value: 'Local SEO + GBP + Website' },
      { label: 'PLATFORM', value: 'WordPress + Yoast SEO' },
      { label: 'BUYERS', value: 'Industrial Procurement' },
      { label: 'SCOPE', value: 'Brand + Site + Profile' },
      { label: 'TECH', value: 'WordPress, Yoast, Schema' },
    ],
    keyMetrics: [
      { label: 'Website', value: 'Fleet + safety pages' },
      { label: 'Google Profile', value: 'Fully completed' },
      { label: 'Local Pages', value: 'Per service area' },
      { label: 'Structured Data', value: 'Business + services' },
    ],
    headlineMetric: {
      label: 'What Changed',
      value: 'A firm that looks its size',
      note: 'Fleet, safety record and service areas visible to procurement teams before the first call',
    },
    resultsMetrics: [
      { label: 'Brand Assets', value: 'Refreshed' },
      { label: 'Fleet Pages', value: 'Built' },
      { label: 'Safety Record', value: 'Shown on site' },
      { label: 'Google Profile', value: 'Completed' },
      { label: 'Service Areas', value: 'Own pages' },
      { label: 'Schema', value: 'Business + services' },
    ],
    challenge:
      'In logistics, trust decides who gets onto a bid list. Rukman Transport had a minimal online presence that did not reflect its fleet or its reliability, and it was losing local B2B contracts to competitors who simply looked more established online. A procurement team shortlisting transport partners would search, find a thin site with no fleet photos, no safety credentials and no sign of operating scale, and quietly drop the firm before the sales team ever heard about the bid.',
    approach:
      'We treated it as a credibility problem first and a search problem second. First came the brand assets: fleet photography, safety credentials and examples of contract work, so that a procurement team landing on the site saw a firm of the size Rukman really is. Then local search on top: a fully completed Google Business Profile, pages for each service area, and structured data describing the business, its services and where it operates.',
    techStack: ['WordPress', 'Yoast SEO', 'Google Business Profile', 'Google Maps API', 'Schema.org JSON-LD'],
    solution:
      'We refreshed the brand and built a WordPress website that puts the fleet and the safety record up front, with a page for each service line and each service area. Yoast SEO keeps titles, descriptions and structured data consistent as pages are added. We completed the Google Business Profile in full, with every relevant category, service, photo and common question, so the firm can appear in local results for searches such as "industrial transport" near its operating base.',
    results:
      'Rukman Transport received a refreshed brand, a website that shows its fleet and safety record, service-area pages, and a fully completed Google Business Profile. This case describes the work delivered; it does not publish traffic or call figures.',
    imageUrl: '/images/case-studies/rukman-transport-logistics-hero.jpg',
    ogImageUrl: '/images/case-studies/rukman-transport-logistics-og.png',
    publishedDate: '2026-05-28',
    modifiedDate: '2026-10-22',
    ctaTeaser: 'Logistics operator losing bids to bigger-looking competitors? We rebuild brand, website and local search together.',
    relatedSlugs: ['rdb-travels-cab-booking-website', 'grofresh-manufacturing-erp'],
    serviceLinks: [
      { label: 'Local SEO services', href: '/services/local-seo' },
      { label: 'B2B website design', href: '/services/b2b-website-design' },
      { label: 'WordPress development', href: '/wordpress-development' },
    ],
    faqs: [
      {
        q: 'How does a Google Business Profile help a B2B logistics company?',
        a: 'Procurement teams often search for "industrial transport" or "B2B logistics" plus a city and pick from the map results. A complete profile, with every category, service, photo and common question filled in and reviews answered, is what gets a firm into those results and onto the call list.',
      },
      {
        q: 'What should a transport company show on its website to win B2B contracts?',
        a: 'The fleet, with real photos and vehicle types, the safety record and certifications, the areas served, and examples of contract work. A procurement team is judging whether the firm can handle the volume and the risk, so the site has to show that before anyone calls.',
      },
      {
        q: 'Why WordPress with Yoast for a logistics site?',
        a: 'WordPress is easy for a non-technical team to keep fleet photos and service-area pages current. Yoast keeps titles, descriptions and structured data consistent on every new page, so the site stays tidy for search engines as it grows.',
      },
      {
        q: 'What schema markup helps a logistics business?',
        a: 'LocalBusiness or Organization markup for the company, Service markup for each service line, and FAQPage markup for common questions. Together they tell search engines what the firm does, where it operates and how to reach it.',
      },
      {
        q: 'Why fix the brand before doing SEO?',
        a: 'Because ranking only helps if the visitor trusts what they find. A firm that ranks well but shows a thin site with no fleet or safety information still gets dropped from the shortlist. Brand assets and proof come first, and search brings people to them.',
      },
      {
        q: 'Do service-area pages still work for local SEO?',
        a: 'They do when each page is written for that area: the routes covered, the depots or bases nearby, and the types of loads handled there. Copying one page and swapping the city name does not work and can hurt the whole site.',
      },
      {
        q: 'How long does local SEO take for a transport company?',
        a: 'A completed Google Business Profile can start appearing in map results within weeks. Ranking website pages for competitive service searches usually takes several months and depends on how strong local competitors already are.',
      },
      {
        q: 'Does this case study report traffic or call figures?',
        a: 'No. It describes the brand, website and local search work FactoryJet delivered for Rukman Transport.',
      },
    ],
  },

  // ─── 7. Sow Easy: current WooCommerce and Odoo build, in progress ─────────
  // Added 2026-08-04 from Bhavesh's brief. No metrics are asserted: the build
  // is described, not scored. Do not add numbers without a measured source.
  // The public site is still in development, so no live URL is published here.
  {
    slug: 'sow-easy-distributor-portal',
    seoTitle: 'Sow Easy: WooCommerce Trade Store Connected to Odoo',
    metaDescription:
      'How FactoryJet is building Sow Easy’s WooCommerce trade store with Odoo as the source of stock, pricing and SKUs, tested on staging before launch.',
    snapshot: {
      who: 'Sow Easy, a B2B distributor that sells to trade buyers and runs its stock, pricing and product data in Odoo.',
      problem: 'Trade buyers need accurate stock, account pricing and ordering online, and the team cannot keep a second, conflicting copy of that data in the website.',
      built: 'A WooCommerce trade store that reads stock, pricing and SKUs from Odoo, with trade ordering and product pages, plus SEO and AI search work alongside the build.',
      status: 'Build in progress. The store and the Odoo link are being tested on staging, and launch is still ahead.',
    },
    serviceLinks: [
      { label: 'WooCommerce development', href: '/services/woocommerce-development' },
      { label: 'Ecommerce ERP integration', href: '/services/ecommerce-erp-integration' },
      { label: 'Odoo AI agents', href: '/services/odoo-ai-agents' },
    ],
    client: 'Sow Easy',
    tagline: 'A B2B commerce build in progress, connecting WooCommerce ordering with Odoo.',
    industry: 'B2B Distribution',
    services: [
      'WooCommerce Website Development',
      'Odoo Integration',
      'Trade Ordering',
      'SEO',
      'AI Search',
    ],
    headline: 'Building a WooCommerce Trade Store Connected to Odoo',
    summary:
      'FactoryJet is building Sow Easy’s B2B ecommerce website on WooCommerce, with Odoo integration for stock, pricing, and product identifiers. Website development, SEO, and AI search work are ongoing.',
    category: 'E-Comm',
    heroStats: [
      { value: 'In progress', label: 'Website build' },
      { value: 'WooCommerce', label: 'Storefront' },
      { value: 'Odoo', label: 'Stock and pricing source' },
    ],
    glanceTiles: [
      { label: 'STATUS', value: 'Build in progress' },
      { label: 'PLATFORM', value: 'WooCommerce' },
      { label: 'ERP', value: 'Odoo' },
      { label: 'SERVICES', value: 'Website + SEO + AI Search' },
    ],
    keyMetrics: [],

    challenge:
      'Trade buyers need product information, account pricing, and ordering tools that reflect the systems used by the supplier. The store also needs to support the team managing products and orders without creating conflicting copies of stock and price data.',

    approach:
      'The current project uses WooCommerce for the storefront and Odoo as the source of stock, pricing, and SKU data. Development and validation take place on staging before launch. The work includes product presentation, trade ordering, and the integration between the store and ERP.',
    techStack: [
      'WordPress',
      'WooCommerce',
      'Odoo',
    ],
    solution:
      'FactoryJet is implementing the website and its commerce workflows while testing product data and ordering behavior against Odoo staging. SEO and AI search work run alongside the build. The public case study describes the current engagement, rather than treating staging functionality as a completed launch.',
    results:
      'The website build is in progress. Launch results, traffic changes, and sales outcomes are not reported for this unfinished build.',
    imageUrl: '/images/case-studies/sow-easy-distributor-portal-hero.jpg',
    ogImageUrl: '/images/case-studies/sow-easy-distributor-portal-og.png',
    publishedDate: '2026-08-04',
    ctaTeaser: 'If your trade store needs to work with an existing ERP, we can scope the storefront and integration together.',
    relatedSlugs: ['gpsuk-promotional-products', 'belle-maison-ecommerce-success'],
    faqs: [
      { q: 'Is the Sow Easy website build complete?', a: 'The build is in progress. FactoryJet is developing and testing the WooCommerce website and Odoo integration on staging, alongside ongoing SEO and AI search work.' },
      { q: 'Which system owns stock and pricing?', a: 'Odoo is the source of stock, pricing, and SKU data in the current project. WooCommerce uses that data in the storefront rather than becoming a separate source of truth.' },
      { q: 'Does this case study report sales results?', a: 'No. It describes an active implementation. It does not present staging activity as customer sales or claim a completed launch.' },
      {
        q: 'Why connect WooCommerce to Odoo instead of managing stock in WooCommerce?',
        a: 'Because two places that both hold stock and prices will drift apart. If Odoo already runs purchasing, stock and accounts, it should stay the single source. The store reads from it, so a price or stock change made in Odoo shows up on the website without anyone retyping it.',
      },
      {
        q: 'Why test the integration on staging first?',
        a: 'An ERP link touches real stock and real prices. Testing against Odoo’s staging system lets us check product data, prices and orders end to end without affecting live stock or sending real orders into the business.',
      },
      {
        q: 'What does a B2B WooCommerce store need that a retail store does not?',
        a: 'Trade pricing per account, larger order quantities, reorder from past orders, and often quotes before orders. Retail WooCommerce shows one price to everyone and expects a quick card checkout, which does not match how trade buyers purchase.',
      },
      {
        q: 'Does FactoryJet work with other ERPs besides Odoo?',
        a: 'Yes. FactoryJet has worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs. The approach is the same: decide which system owns each piece of data, and make every other system read from it.',
      },
      {
        q: 'When will results be published for Sow Easy?',
        a: 'After launch, once the store has been live long enough to measure. Until then this page describes the work in progress and does not report sales or traffic.',
      },
    ],
    modifiedDate: '2026-10-22',
  },

  // ─── 8. GPSUK — promotional products, B2B storefront on Commerceflo ──────
  {
    slug: 'gpsuk-promotional-products',
    seoTitle: 'GPSUK: B2B Promotional Products Store on Commerceflo',
    metaDescription:
      'How FactoryJet built GPSUK’s trade storefront on Commerceflo so UK business buyers can reorder promotional products at their own account prices.',
    snapshot: {
      who: 'GPSUK, a UK supplier of branded promotional products such as pens, drinkware, bags and tech accessories, selling to business customers.',
      problem: 'Promotional products is a reorder business, and repeat orders were rebuilt by email against prices that lived in someone’s inbox.',
      built: 'A Commerceflo trade storefront where business buyers log in, see their own account pricing, and move from quote to order without retyping, plus ongoing SEO and AI search work.',
      status: 'Live on Commerceflo. SEO and AI search work continues.',
    },
    serviceLinks: [
      { label: 'B2B ecommerce development', href: '/b2b-ecommerce' },
      { label: 'Commerceflo by FactoryJet', href: '/commerceflo' },
      { label: 'AI SEO services', href: '/services/ai-seo' },
    ],
    client: 'GPSUK',
    tagline: 'A UK promotional products supplier selling to trade buyers who order the same things repeatedly.',
    industry: 'Promotional Products',
    services: [
      'Commerceflo B2B Storefront',
      'Trade Account Ordering',
      'Catalogue Structuring',
      'Quote-to-Order Workflow',
      'SEO',
      'AI Search',
    ],
    headline: 'Putting a UK Promotional Products Catalogue in Front of Trade Buyers',
    summary:
      'GPSUK supplies promotional products to business customers in the UK, a category where buyers reorder branded stock and often need a quote before an order. FactoryJet built their B2B storefront on Commerceflo so trade accounts can browse the catalogue, get their own pricing, and move from quote to order without it being rebuilt by hand each time.',
    category: 'E-Comm',
    heroStats: [
      { value: 'B2B', label: 'Trade account storefront' },
      { value: 'Commerceflo by FactoryJet', label: 'Platform built on' },
      { value: 'UK', label: 'Market served' },
    ],
    glanceTiles: [
      { label: 'INDUSTRY', value: 'Promotional Products' },
      { label: 'SERVICES', value: 'B2B Storefront + Quoting' },
      { label: 'PLATFORM', value: 'Commerceflo' },
      { label: 'BUYERS', value: 'Trade Accounts' },
      { label: 'MARKET', value: 'United Kingdom' },
      { label: 'ORDERING', value: 'Quote-to-Order' },
    ],
    keyMetrics: [
      { label: 'Buyer Type', value: 'Trade accounts' },
      { label: 'Pricing', value: 'Account-based' },
      { label: 'Quoting', value: 'Quote-to-order' },
      { label: 'Platform', value: 'Commerceflo' },
    ],
    headlineMetric: {
      label: 'What Changed',
      value: 'Self-serve trade ordering',
      note: 'Buyers work from a live catalogue with their own pricing instead of a emailed quote',
    },
    resultsMetrics: [
      { label: 'Storefront', value: 'B2B, account-based' },
      { label: 'Catalogue', value: 'Structured for reorder' },
      { label: 'Quoting', value: 'Quote-to-order' },
      { label: 'Market', value: 'UK trade buyers' },
      { label: 'Platform', value: 'Commerceflo' },
      { label: 'Manual Re-entry', value: 'Removed' },
    ],
    challenge:
      'Promotional products is a reorder business. A customer brands stock once and then comes back for more of the same, often against pricing agreed earlier. Handling that over email means the catalogue lives in one place, the agreed price lives in someone\'s inbox, and every repeat order is reconstructed from scratch. It is slow for the buyer and it hides demand from the supplier.',
    approach:
      'We built the storefront around the reorder, not the first order. That means a trade account can find what they bought before, see the price that applies to them, and raise a quote or an order without a conversation. Commerceflo handles account-based pricing and quote-to-order natively, so the trade rules stay in the platform rather than being reimplemented.',
    techStack: ['Commerceflo by FactoryJet', 'Next.js', 'Account-based pricing engine', 'Quote-to-order workflow'],
    solution:
      'GPSUK trade customers log in to a catalogue priced for their account. Where an order needs quoting first, the quote carries through to the order rather than being retyped. The catalogue is structured so buyers can find products the way they describe them, which matters in a category with a very wide range and a lot of near-identical items.',
    results:
      'GPSUK has a Commerceflo trade storefront with account-based pricing and quote-to-order workflows. FactoryJet also provides ongoing SEO and AI search work. This case describes the delivered commerce functionality without attributing a measured revenue or traffic uplift.',
    imageUrl: '/images/case-studies/gpsuk-promotional-products-hero.jpg',
    ogImageUrl: '/images/case-studies/gpsuk-promotional-products-og.png',
    publishedDate: '2026-08-04',
    ctaTeaser: 'If your buyers reorder against agreed pricing, a trade storefront removes the email round trip.',
    relatedSlugs: ['belle-maison-ecommerce-success', 'sow-easy-distributor-portal'],
    faqs: [
      {
        q: 'Why do promotional products suppliers need B2B commerce specifically?',
        a: 'Because the buyer is a business reordering branded stock against agreed pricing, not a shopper making a one-off purchase. A retail checkout shows one price to everyone and assumes the order is new, which is the opposite of how this category actually buys.',
      },
      {
        q: 'What does quote-to-order remove?',
        a: 'The retyping. In most suppliers a quote is written in email or a spreadsheet, then re-entered as an order once approved. That step is where errors and delays come from. Quote-to-order keeps it as one record from start to finish.',
      },
      {
        q: 'Does a trade storefront replace the sales team?',
        a: 'No, it takes the repetitive work off them. Straightforward reorders go through the portal, which leaves the team on the quotes and relationships that actually need a person.',
      },
      {
        q: 'How do you handle a very large catalogue of similar items?',
        a: 'Structure. If products are only findable by exact code, buyers give up and email instead. We organise the catalogue around how buyers describe what they want, so search and browsing both land on the right item.',
      },
      {
        q: 'Can trade buyers reorder what they bought before?',
        a: 'Yes. A logged-in trade account can see what it ordered before at the price that applies to it, and place the same order again or raise a quote for changes. That is the main job of a promotional products store, since most orders repeat.',
      },
      {
        q: 'How does SEO work for a B2B store that needs a login?',
        a: 'The catalog, category pages and product information can be public so search engines and AI assistants can read them, while account prices stay behind the login. Buyers find the products in search, then log in to see their own terms.',
      },
      {
        q: 'Is Commerceflo suitable for UK businesses?',
        a: 'Yes. GPSUK sells to UK business buyers on Commerceflo. Account pricing, quote-to-order and catalog structure work the same in any market.',
      },
      {
        q: 'What if a buyer still wants to email an order?',
        a: 'They still can. The storefront takes the routine reorders off the sales team, and anything unusual or custom can still go through a person.',
      },
    ],
    modifiedDate: '2026-10-22',
    clientUrl: 'https://app.commerceflo.ai/store/gpsuk',
    location: 'United Kingdom',
  },

  // ─── 9. Yadav Entrance Automation — site build plus SEO and AI SEO ───────
  // The three product links in `solution` were added 2026-10-12. Each target was
  // fetched that day: HTTP 200, no redirect, canonical tag equal to the URL. Keep
  // them exactly as written (apex host, no www, no trailing slash, no .html) so
  // each stays a single hop. What the sentence says about those pages (a
  // specifications section and a frequently asked questions section on each) was
  // read from the pages' own headings on the same day.
  {
    slug: 'yadav-entrance-automation-website-seo',
    seoTitle: 'Yadav Entrance Automation: Website, SEO and AI SEO',
    metaDescription:
      'How FactoryJet built Yadav Entrance Automation’s website from scratch and runs its SEO and AI SEO, with product pages buyers and AI assistants can read.',
    snapshot: {
      who: 'Yadav Entrance Automation, an industrial entrance automation manufacturer that makes, installs and services high speed doors, rolling shutters, dock levellers and other automatic entrance systems.',
      problem: 'A specialist trade business with no real website is invisible to buyers who search for the product, not the company name, and to AI assistants answering those searches.',
      built: 'A hand-built website with a page per product, specifications and FAQs on each, real text that search engines and AI tools can read, and ongoing SEO and AI SEO work.',
      status: 'Live on yadaventranceautomation.com. SEO and AI SEO work continues.',
    },
    serviceLinks: [
      { label: 'Manufacturing website design', href: '/services/manufacturing-website-design' },
      { label: 'AI SEO services', href: '/services/ai-seo' },
      { label: 'Technical SEO', href: '/services/technical-seo' },
    ],
    client: 'Yadav Entrance Automation',
    tagline: 'An entrance automation specialist that needed a real website before it could be found at all.',
    industry: 'Entrance Automation',
    services: [
      'Website Build From Scratch',
      'Technical SEO',
      'AI SEO',
      'Content Structure',
    ],
    headline: 'Building an Entrance Automation Specialist a Site Search Engines and AI Can Read',
    summary:
      'Yadav Entrance Automation installs and services automatic entrance systems. FactoryJet built their website from scratch and runs their SEO and AI SEO, so the business is findable both in traditional search results and in AI answers when someone asks who does this work.',
    category: 'Corporate',
    heroStats: [
      { value: 'Built', label: 'Website from scratch' },
      { value: 'SEO', label: 'Ongoing search work' },
      { value: 'AI SEO', label: 'Findable in AI answers' },
    ],
    glanceTiles: [
      { label: 'INDUSTRY', value: 'Entrance Automation' },
      { label: 'SERVICES', value: 'Website + SEO + AI SEO' },
      { label: 'SCOPE', value: 'Built From Scratch' },
      { label: 'SEARCH', value: 'Organic + AI Answers' },
      { label: 'STATUS', value: 'Live, SEO Ongoing' },
      { label: 'SITE', value: 'yadaventranceautomation.com' },
    ],
    keyMetrics: [
      { label: 'Website', value: 'Built from scratch' },
      { label: 'Search Work', value: 'SEO and AI SEO, ongoing' },
      { label: 'Site', value: 'yadaventranceautomation.com' },
      { label: 'Engagement', value: 'Continuing' },
    ],
    headlineMetric: {
      label: 'Scope',
      value: 'Site build plus ongoing search',
      note: 'Built the website, then kept working on how the business is found',
    },
    resultsMetrics: [
      { label: 'Website', value: 'Live' },
      { label: 'Technical SEO', value: 'In place' },
      { label: 'AI SEO', value: 'Ongoing' },
      { label: 'Content Structure', value: 'Built for extraction' },
      { label: 'Engagement', value: 'Ongoing' },
      { label: 'Site', value: 'yadaventranceautomation.com' },
    ],
    challenge:
      'A specialist trade business with no real web presence is invisible to anyone who does not already know its name. Buyers looking for entrance automation search for the problem, not the company, and increasingly they ask an AI assistant rather than scrolling results. Without a site that either can read properly, the business only gets found by referral.',
    approach:
      'We built the site from scratch rather than dressing up a template, so the structure matches how the work is actually bought: what the systems are, what gets installed and serviced, and who it is for. Then we treated search as ongoing work rather than a launch task, covering both traditional SEO and AI SEO, because being quoted in an AI answer and ranking in results draw on the same foundations.',
    techStack: ['Hand-built HTML and CSS', 'Cloudflare Pages', 'Cloudflare Pages Functions', 'Schema.org JSON-LD', 'llms.txt'],
    solution:
      'The site is structured so each section answers one question a buyer would actually ask, with content in real text that both search engines and AI assistants can extract. On top of that we run continuing SEO and AI SEO work rather than treating the launch as the finish line.\nThe product pages are built the same way. The pages for [high speed doors](https://yadaventranceautomation.com/high-speed-doors), the [motorized rolling shutter](https://yadaventranceautomation.com/motorized-rolling-shutter) and [dock levellers](https://yadaventranceautomation.com/dock-levelers) each set out the specifications and a list of frequently asked questions for that product.',
    results:
      'Yadav Entrance Automation has a website built for how the business is bought, and search work continuing on it. We are not publishing ranking or traffic figures here. The engagement is ongoing and we would rather report measured numbers later than estimated ones now.',
    imageUrl: '/images/case-studies/yadav-entrance-automation-website-seo-hero.jpg',
    ogImageUrl: '/images/case-studies/yadav-entrance-automation-website-seo-og.png',
    publishedDate: '2026-08-04',
    ctaTeaser: 'If your buyers search for the problem rather than your name, the site has to answer the problem.',
    relatedSlugs: ['impulse-branding-migration', 'flying-pixel-agency'],
    faqs: [
      {
        q: 'What is AI SEO, in plain terms?',
        a: 'It is making sure that when someone asks ChatGPT, Gemini or Google\'s AI answers about your kind of work, your business is one of the ones named. It relies on the same fundamentals as normal SEO: real text, clear structure, and content that answers the question directly.',
      },
      {
        q: 'Is AI SEO separate work from normal SEO?',
        a: 'Mostly not, and anyone selling it as a separate trick is overselling. Google states there is no special markup or file that gets you into AI answers. What helps is being crawlable, being clearly structured, and answering the question directly.',
      },
      {
        q: 'Why build from scratch instead of using a template?',
        a: 'A template decides your structure before anyone has thought about how your work is bought. For a specialist trade that usually means the pages a buyer needs are missing and the pages nobody wants are prominent.',
      },
      {
        q: 'How long before search work shows results?',
        a: 'Branded searches for the company name tend to come first, usually within weeks of launch. Competitive service terms take longer, typically months, and depend on how contested the category is. Anyone promising a fixed timeline is guessing.',
      },
      {
        q: 'What should a product page for industrial doors include?',
        a: 'What the product is for, the sizes and specifications, the materials and motor options, where it is typically installed, and the questions buyers ask before ordering. Each of the Yadav product pages sets out the specifications and a list of frequently asked questions for that product.',
      },
      {
        q: 'Why is the site hand-built instead of on a page builder?',
        a: 'A hand-built site ships only the code each page needs, so it loads fast and is easy for search engines and AI crawlers to read. It also lets every page follow the structure that suits that product, rather than a theme’s defaults.',
      },
      {
        q: 'What is llms.txt and does this site have one?',
        a: 'llms.txt is a plain text summary at the root of a website that tells AI assistants what the business does and which pages matter. The Yadav site publishes one, alongside its sitemap and structured data.',
      },
      {
        q: 'Can a manufacturer rank in Google without a blog?',
        a: 'Yes, if the product and service pages answer buyer questions well. Many industrial searches are for a product type, so a strong page per product often does more than general blog posts. A blog helps later with related questions.',
      },
    ],
    modifiedDate: '2026-10-22',
    clientUrl: 'https://yadaventranceautomation.com/',
    location: 'India',
  },

]

/**
 * Resolve a case study by its URL slug. Returns `undefined` when no match,
 * matching the convention used by `getAuthorByName` and the blog POSTS lookup.
 */
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug)
}

/** Engagement facts confirmed by Bhavesh on 2026-09-12.
 * Development URLs remain private; an in-progress build is never labeled live.
 * No outcome metric is inferred from an engagement's status.
 */
export const CLIENT_ENGAGEMENTS = [
  { client: 'Yadav Entrance Automation', status: 'Website built', scope: 'Website, ongoing SEO and AI search', url: 'https://yadaventranceautomation.com/', caseSlug: 'yadav-entrance-automation-website-seo' },
  { client: 'Belle Maison', status: 'Storefront built', scope: 'DTC + B2B commerce', url: 'https://app.commerceflo.ai/store/belle-maison', caseSlug: 'belle-maison-ecommerce-success' },
  { client: 'Impulse Branding Solutions', status: 'Website built', scope: 'Website, ongoing SEO and AI search', url: 'https://impulsebranding.in/', caseSlug: 'impulse-branding-migration' },
  { client: 'Sow Easy', status: 'Build in progress', scope: 'Website development, ongoing SEO and AI search', caseSlug: 'sow-easy-distributor-portal' },
  { client: 'GPSUK', status: 'Website built', scope: 'B2B commerce, ongoing SEO and AI search', url: 'https://app.commerceflo.ai/store/gpsuk', caseSlug: 'gpsuk-promotional-products' },
  { client: 'Holistico', status: 'Build in progress', scope: 'Website development, ongoing SEO and AI search' },
  { client: 'DTF Virginia', status: 'Build in progress', scope: 'Website development, ongoing SEO and AI search', url: 'https://dtfvirginia.com/' },
  { client: 'Commerceflo by FactoryJet', status: 'Website built', scope: 'Website, ongoing SEO and AI search', url: 'https://commerceflo.ai/' },
  { client: 'Alertmi Technologies', status: 'Website built', scope: 'Website, ongoing SEO and AI search', url: 'https://alertmi.com/' },
  { client: 'Akanksha Barot', status: 'Website built', scope: 'Personal-profile website, ongoing SEO and AI search', url: 'https://akankshabarot.com/' },
] satisfies Array<{ client: string; status: string; scope: string; url?: string; caseSlug?: string }>;
