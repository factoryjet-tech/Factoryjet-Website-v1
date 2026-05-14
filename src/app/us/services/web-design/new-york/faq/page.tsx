import type { Metadata } from 'next';
import Script from 'next/script';
import { newYorkSubPageAlternates } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design FAQ New York City — 25 Questions Answered | FactoryJet',
  description:
    'Everything NYC business owners ask before hiring a web design company — cost, timeline, platforms, local SEO, ADA compliance, and why FactoryJet delivers 60–70% less than a Manhattan agency. 25 questions answered.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design FAQ New York City — 25 Questions Answered | FactoryJet',
    description:
      'Cost, timeline, platform, SEO, and NYC-specific web design questions answered. Free strategy call for New York City businesses.',
    url: 'https://factoryjet.com/us/services/web-design/new-york/faq',
    images: [
      {
        url: 'https://factoryjet.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet — Web Design FAQ New York City',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design FAQ NYC — 25 Questions Answered | FactoryJet',
    description:
      'Cost, timeline, platform, SEO, and NYC-specific web design questions answered. Free strategy call.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/web-design/new-york/faq',
    languages: newYorkSubPageAlternates.faq,
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

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  { key: 'timeline',  label: 'Timeline & Delivery' },
  { key: 'pricing',   label: 'Pricing & Value' },
  { key: 'nyc',       label: 'NYC-Specific' },
  { key: 'technical', label: 'Technical & Platform' },
  { key: 'seo',       label: 'SEO & Visibility' },
];

const FAQ_ITEMS = [

  /* ── Timeline & Delivery ── */
  {
    category: 'timeline',
    question: 'How fast can FactoryJet build a website for my New York City business?',
    answer:
      'Standard business websites — up to 5 pages — launch in 7 business days. That covers a professional home page, services, about, contact, and one additional page. Larger projects scale: 10–20 page custom web design New York City projects typically run 2–3 weeks; e-commerce stores, 3–5 weeks; custom web application development, 6–12 weeks. Timeline is confirmed after a free 30-minute discovery call — we give you an accurate date, not a marketing promise.',
  },
  {
    category: 'timeline',
    question: 'What\'s included in the 7-day delivery guarantee?',
    answer:
      'The 7-day guarantee applies to projects with five or fewer pages, clear content provided upfront, and no custom development (API integrations, custom portals, or database-driven functionality). What you get: a fully designed, mobile-responsive, fast-loading website built on your chosen platform (WordPress, Webflow, or Next.js), deployed with SSL and basic on-page SEO. If we miss the guarantee window due to a delay on our end, we credit your next project.',
  },
  {
    category: 'timeline',
    question: 'How does your team deliver faster than a Manhattan web design agency?',
    answer:
      'Manhattan web design agencies carry overhead that creates latency: account management layers, internal review cycles, and billable-hour pressure. FactoryJet\'s specialized engineering team works directly from your brief — no intermediary. When you submit a project, an engineer reads it, not an account manager. Combine that with 25 years of repeatable workflows for professional website services New York clients and we consistently deliver in weeks, not months.',
  },
  {
    category: 'timeline',
    question: 'What if I don\'t like the design? How many revisions do I get?',
    answer:
      'Every project includes two full design revision rounds. Round 1 is the initial design based on your brief. Round 2 incorporates your specific feedback — layout changes, color adjustments, content restructuring, section additions or removals. 94% of our NYC clients approve after round 1 or 2 because we invest heavily in the discovery phase before designing a single pixel. If you truly hate the direction after round 2, we schedule a call with our senior designer and work through it — no extra charge, no awkwardness.',
  },
  {
    category: 'timeline',
    question: 'What does the process look like from first call to launch?',
    answer:
      'Five stages: Discovery (30-min call — we map your goals, competitors, platform, and content). Design (wireframes and visual mockup; you approve before development starts). Build (development with mid-project check-ins). QA (cross-device testing on 50+ device and browser combinations — critical for NYC\'s mobile-dominant traffic). Launch (deployment, DNS transfer, and 30-day post-launch support). Every stage ends with something you can see and approve.',
  },

  /* ── Pricing & Value ── */
  {
    category: 'pricing',
    question: 'How much does a website cost for a New York City business?',
    answer:
      'FactoryJet\'s website design packages New York start at $1,500 for a 5-page professional site and scale to $8,000–$15,000+ for custom e-commerce or web application builds. For context: web design cost New York City at a Manhattan agency typically runs $8,000–$40,000 for the same scope. The difference is our efficient delivery model — same quality output, 60–70% less overhead. Exact pricing is scoped on a free strategy call.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet 60–70% cheaper than a NYC web design agency?',
    answer:
      'A web design agency New York in Midtown carries Manhattan rent, US-market salaries, and multiple overhead layers — all of which land in your invoice. FactoryJet\'s engineering team is specialized with 25+ years serving US clients. No Midtown office, no account management markup, no bloated team structure. We pass the savings to you. The output is the same: production-grade code, mobile-first responsive design, conversion-focused layouts, and Lighthouse 100 performance.',
  },
  {
    category: 'pricing',
    question: 'Do I own the website after I pay, or do I license it?',
    answer:
      'Full ownership transfers to you at final payment. That includes all design files, source code, hosting account access, and content assets. You are not licensing a template — you own the custom code outright. If you want to take it to another developer, move hosting providers, or modify it yourself after launch, there are no restrictions and no exit fees. Some agencies retain IP or lock you into proprietary platforms — we don\'t.',
  },
  {
    category: 'pricing',
    question: 'What are the payment terms — do I pay the full cost upfront?',
    answer:
      '50% deposit to start, 50% at launch — standard for all projects under $10,000. For larger e-commerce or custom web development New York projects, we offer a three-milestone structure: 40% at kickoff, 40% at design approval and mid-build demo, and 20% at launch. You never pay the final balance until you\'ve approved the completed site. USD pricing, wire transfer or credit card accepted.',
  },
  {
    category: 'pricing',
    question: 'Are there ongoing costs after my website launches?',
    answer:
      'Two categories: hosting (typically $20–$60/month, paid directly to the provider and not marked up by us) and optional maintenance. Every project includes 30 days of post-launch support at no charge. After that, optional Annual Maintenance Contracts start at $299/month, covering security updates, backups, uptime monitoring, and 2 hours of monthly content changes. Many NYC clients self-manage after the included training session — the admin interface is built for non-technical operators.',
  },

  /* ── NYC-Specific ── */
  {
    category: 'nyc',
    question: 'You\'re specialized — how does that work for a New York business?',
    answer:
      'We\'ve worked with US businesses for 25 years, hundreds of them on the East Coast. All project communication happens during EST business hours (9am–6pm). Calls, Slack, project management — all in your timezone. Contracts are standard US agreements in USD. We\'ve built sites for NYC restaurants, law firms, real estate teams, finance companies, healthcare practices, and e-commerce brands — the workflow is exactly what you\'d expect from a professional web designer New York, except you save 60–70% on the invoice.',
  },
  {
    category: 'nyc',
    question: 'Do you understand NYC industries — finance, real estate, law, and hospitality?',
    answer:
      'Yes — NYC\'s industry mix requires specific knowledge. For web design for restaurants NYC, we understand reservation integrations (OpenTable, Resy) and how hospitality buyers browse. For real estate website design New York, we build IDX-connected listing pages and lead capture flows for buyer and renter inquiries. For law firm website design NYC, we implement attorney advertising compliance, proper disclaimers, and practice area taxonomy. For finance, we handle FINRA and SEC disclosure requirements and credibility-first design. Industry-specific briefings are part of our discovery session.',
  },
  {
    category: 'nyc',
    question: 'Can you build a site for a NYC restaurant, retail shop, or service business?',
    answer:
      'Yes — restaurants, retail, and service businesses are some of our most common NYC projects. For restaurants: online menu, reservation widget, event inquiry form, online ordering integration, and Google Business Profile optimization. For retail: Shopify or WooCommerce store with inventory management and payment gateway. For service businesses (law, healthcare, consulting, beauty): appointment booking, lead capture, service page SEO, and portfolio. Every build is mobile-first — over 80% of NYC search traffic is on mobile.',
  },
  {
    category: 'nyc',
    question: 'Do you understand NYC regulations — ADA, consumer protection, and HIPAA?',
    answer:
      'We implement standard compliance elements on every NYC build: WCAG 2.1 AA web accessibility (ADA alignment — alt text, keyboard navigation, color contrast, screen reader compatibility), NYC Consumer Protection Law disclosures for service businesses, privacy policy and cookie notice for applicable audiences, and HIPAA-aligned data handling for healthcare clients. We\'re not lawyers — we recommend a legal review of all compliance pages — but we\'ve applied these standards across 500+ projects.',
  },
  {
    category: 'nyc',
    question: 'Can you help me rank on Google for NYC-specific searches?',
    answer:
      'Local SEO is built into every project. We implement location-specific structured data (LocalBusiness schema), borough and neighborhood keyword targeting (Manhattan, Brooklyn, Queens, The Bronx, Staten Island), Google Business Profile setup guidance, NAP consistency, and fast Core Web Vitals — which Google weights heavily in local SEO New York City rankings. We also offer advanced local SEO as a monthly retainer ($800–$1,500/month) covering citation building, review generation, and competitive keyword tracking for NYC search terms.',
  },
  {
    category: 'nyc',
    question: 'Do you have references from other New York businesses?',
    answer:
      'Yes — we connect qualified prospects with past NYC clients on request (with their permission). We also have a portfolio of NYC-market websites across restaurants, professional services, e-commerce, and healthcare — viewable on a strategy call. Our Google Business Profile includes reviews from US clients including New York-area businesses. We\'ve served 500+ businesses across our 25-year history and we\'re proud to let clients speak for us.',
  },

  /* ── Technical & Platform ── */
  {
    category: 'technical',
    question: 'Which platforms do you build on — WordPress, Shopify, Next.js, or Webflow?',
    answer:
      'All four, plus others. Platform recommendation depends on your business type and requirements. WordPress development New York City is best for content-heavy businesses and blogs needing maximum flexibility. Shopify development NYC is our default for retail and e-commerce — fastest to launch, easiest to manage, and the best app ecosystem. Next.js (React) is for performance-critical businesses where Lighthouse 100 and sub-second load times are non-negotiable. Webflow is for design-forward businesses wanting a visual CMS. We recommend the right tool for your use case.',
  },
  {
    category: 'technical',
    question: 'Will my site work perfectly on mobile? NYC traffic is overwhelmingly mobile.',
    answer:
      'Mobile-first is our default design approach — not an afterthought. We design for the smallest screen first, then scale up. Every build is tested on 50+ real device and browser combinations. Specific NYC context: 80%+ of local search traffic in New York City arrives on mobile, and Google\'s mobile-first indexing means your mobile experience directly determines your Google ranking. We optimize specifically for the urban mobile user — thumb-zone tap targets, fast loading on LTE and 5G, and readable typography at 375px viewport width.',
  },
  {
    category: 'technical',
    question: 'Can you integrate with HubSpot, Shopify, Calendly, or my existing CRM?',
    answer:
      'Yes — integrations are a standard part of our builds. Common connections for NYC businesses include HubSpot and Salesforce (CRM and lead routing), Shopify and WooCommerce (e-commerce), Calendly and Acuity (appointment booking), Mailchimp, Klaviyo, and ActiveCampaign (email marketing), Google Analytics 4 and Tag Manager (conversion tracking), OpenTable and Resy (restaurant reservations), and Zapier for connecting 3,000+ apps. Most integrations are included in the base quote — complex custom API work is scoped separately.',
  },
  {
    category: 'technical',
    question: 'What if my site gets hacked or goes down after launch?',
    answer:
      'Every project includes SSL, secure server configuration, malware scanning setup, and firewall rules. For ongoing protection, our maintenance contracts include 24/7 uptime monitoring, automated backups (daily or weekly), security vulnerability scanning, and emergency response for incidents. Without a maintenance contract, you\'re responsible for ongoing security — but the baseline we deploy is solid. We\'ve had zero security breaches across 500+ client sites. Any issues within the 30-day post-launch window are fixed at no charge.',
  },
  {
    category: 'technical',
    question: 'Can I update the site myself after launch, without a developer?',
    answer:
      'Yes. Every project includes a recorded training session and written documentation for the CMS. WordPress\'s block editor, Shopify\'s admin, and Webflow\'s visual CMS are all built for non-technical users. Most NYC clients handle 80% of their own content updates — adding blog posts, updating team pages, changing service descriptions, swapping images — without touching code. If you need development work beyond the CMS (new page layouts, new integrations), hourly work is available or covered under a maintenance retainer.',
  },

  /* ── SEO & Visibility ── */
  {
    category: 'seo',
    question: 'What SEO is included in the website build?',
    answer:
      'Every FactoryJet build includes foundational technical SEO: clean semantic HTML structure, meta title and description optimization, XML sitemap, robots.txt, SSL (HTTPS), image compression and alt text, Core Web Vitals optimization (LCP, CLS, FID), and structured data (Organization, LocalBusiness, and FAQPage schema where applicable). For NYC specifically, we add borough-level keyword targeting, Google Business Profile setup guidance, and NAP consistency across the site. Ongoing SEO — link building, content strategy, monthly reporting — is a separate add-on service.',
  },
  {
    category: 'seo',
    question: 'How do I rank for searches like "web design NYC" or "[my service] New York"?',
    answer:
      'Ranking for competitive NYC keywords requires three things: a technically sound website (fast, mobile, structured data — covered in the build), consistent on-page optimization (location-specific service pages, borough targeting, FAQ content — we build these into every NYC project), and ongoing off-page authority (citations, reviews, link building — available as a monthly retainer). New websites typically take 3–6 months to rank for competitive local terms. Longer-tail queries — "[your service] in [specific NYC neighborhood]" — rank faster and often drive higher-intent traffic.',
  },
  {
    category: 'seo',
    question: 'Can you set up Google Business Profile and local NYC SEO?',
    answer:
      'Google Business Profile optimization is included in every NYC project — we set up or audit the profile, ensure your NAP (Name, Address, Phone) matches your website exactly, add services and attributes, and configure your service area for NYC boroughs and surrounding metros. Advanced local SEO New York City as an ongoing service ($800–$1,500/month) covers directory citations (Yelp, Yellow Pages, industry-specific directories), review generation campaigns, Google Business posting, and monthly rank tracking for your target neighborhood and service keywords.',
  },
  {
    category: 'seo',
    question: 'How long before my new website starts getting organic traffic?',
    answer:
      'Timeline depends on domain age, competition, and content investment. For a brand-new domain with a new NYC-focused website: expect Google indexing within 1–2 weeks of launch, early ranking movement on long-tail terms in 4–8 weeks, and meaningful organic traffic on competitive NYC searches in 3–6 months with consistent SEO effort. An existing domain with some authority moves faster. Responsive website design NYC built on fast infrastructure and strong Core Web Vitals accelerates indexing. We provide a post-launch SEO checklist so you know exactly what to do in months 1–3 to maximize the site\'s early momentum.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schema — FAQPage
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function NewYorkFAQPage() {
  return (
    <>
      <Script
        id="nyc-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WEB DESIGN FAQ · NEW YORK CITY"
          headline="New York Web Design — Every Question Answered"
          lead="Everything NYC business owners ask before hiring a web design company — costs, timelines, platforms, local SEO, and why FactoryJet delivers enterprise-quality websites at 60–70% less than a Manhattan agency."
          primaryCta={{ label: 'Book a Free Strategy Call', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Pricing', href: '/us/pricing' }}
          trustItems={[
            '500+ businesses served',
            '7-day delivery guarantee',
            '60–70% less than NYC agencies',
          ]}
        />

        {/* ── 2. FAQ ───────────────────────────────────────────────────────── */}
        <div id="faq">
          <FAQ
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            headline="25 Questions Every NYC Business Owner Asks About Web Design"
            lead="No jargon. No runaround. Real answers to what you actually want to know before you hire."
            categories={FAQ_CATEGORIES}
            items={FAQ_ITEMS}
          />
        </div>

        {/* ── 3. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO START YOUR NYC PROJECT"
            headline="Book a Free 30-Minute Strategy Call"
            sub="We'll review your business, assess your current web presence, and give you a fixed-price estimate for a website that performs in New York City's competitive market — before you commit to anything."
            primaryCta={{ label: 'Book Your Free Strategy Call', modal: true, region: 'us' }}
            secondaryCta={{ label: 'See All Web Design Services', href: '/us/services/web-design' }}
            objectionHandler="Free call, fixed price, no hidden fees. Full code ownership at launch."
          />
        </div>

      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
