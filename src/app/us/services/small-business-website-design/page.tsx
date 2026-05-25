import type { Metadata } from 'next';
import Script from 'next/script';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';
import { smallBusinessWebDesignAlternates } from '@/data/hreflangMap';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import BoringStatsRow from '@/components/v2/BoringStatsRow';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ----------------------------------------------------------------------------─
   SEO / Metadata
   Primary:   "small business website design services" (4,400/mo)
              "website builders for small business" (6,600/mo)
              "small business website design" (2,900/mo)
              "web design for small business" (2,900/mo)
              "website design for small business" (2,900/mo)
   Secondary: "small business website designer" · "affordable small business website"
              "professional website for small business" · "small business web designer"
--------------------------------------------------------------------------─-- */

export const metadata: Metadata = {
  title: 'Small Business Website Design | From $1,999, 7 Days | FactoryJet',
  description:
    'Professional website design for US small businesses. Custom design, mobile-first, Lighthouse 100, full SEO setup. From $1,999, delivered in 7 days.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Small Business Website Design — $1,999, 7-Day Delivery | FactoryJet',
    description:
      'Custom-designed websites for US small businesses. Not templates. Not cookie-cutter. Mobile-first, SEO-ready, and delivered in 7 days. Starting at $1,999.',
    url: 'https://factoryjet.com/us/services/small-business-website-design',
    images: [
      {
        url: 'https://factoryjet.com/images/us/hero-us.webp',
        width: 1200,
        height: 630,
        alt: 'Small Business Website Design Services — FactoryJet',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business Website Design — $1,999, 7-Day Delivery | FactoryJet',
    description:
      'Custom websites for US small businesses. Mobile-first, SEO-ready, full code ownership. From $1,999, delivered in 7 days.',
    images: ['https://factoryjet.com/images/us/hero-us.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/us/services/small-business-website-design',
    languages: smallBusinessWebDesignAlternates,
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

/* ----------------------------------------------------------------------------─
   JSON-LD Schemas — FAQPage · Service · BreadcrumbList
--------------------------------------------------------------------------─-- */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a small business website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A professionally designed small business website costs $1,999–$8,000 depending on complexity. FactoryJet builds custom small business websites starting at $1,999 for a 5-page site. That includes custom design, mobile-first development, on-page SEO, contact forms, Google Analytics setup, and 30 days of post-launch support. US agencies typically charge $8,000–$40,000 for equivalent work.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should a small business website include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A small business website should include a homepage that clearly explains what you do and who you serve, a services or products page, an about page that builds trust, a contact page with a form and location, and ideally a blog or resources section for SEO. Every page needs mobile optimization, fast load speeds, clear calls to action, and on-page SEO. These are non-negotiables for a site that actually brings in business.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a small business website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet delivers 5-page small business websites in 7 days — a hard delivery guarantee. Most US agencies take 6–16 weeks for the same scope. Our 7-day timeline is possible because of our senior-only team, proven build process, and streamlined client feedback workflow. The clock starts when you send us your content.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best website builder for small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The best website builder for small business depends on whether you want to build it yourself or have it built professionally. Squarespace and Wix are the most user-friendly DIY options. WordPress is the most flexible but has the steepest learning curve. If you want a professionally built site, the platform matters less than the team building it — FactoryJet builds on WordPress, Webflow, or Next.js depending on your needs.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my small business need a professional website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '75% of people judge a business\'s credibility based on its website design. A template-based or outdated site actively costs you customers — people leave in seconds if the site looks unprofessional or loads slowly. A professionally designed site improves trust, keeps visitors longer, converts more of them into leads, and ranks better in Google. For most small businesses, the website is the first impression and the primary sales tool.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does FactoryJet charge for small business web design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet builds small business websites starting at $1,999 for a 5-page site, delivered in 7 days. Larger sites (up to 15 pages) start at $3,499. E-commerce stores start at $2,999. Every project is fixed-price — no hourly billing, no scope creep. You know the final number before you commit. Compared to US agencies charging $8,000–$40,000 for the same work, FactoryJet delivers fixed-price builds with significant savings.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Small Business Website Design',
  description:
    'Custom website design and development for US small businesses. Mobile-first, SEO-optimized websites built on WordPress, Webflow, or Next.js — starting at $1,999, delivered in 7 days.',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    foundingDate: '1999',
    areaServed: 'US',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '150',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  },
  serviceType: 'Small Business Website Design',
  offers: {
    '@type': 'Offer',
    price: '1999',
    priceCurrency: 'USD',
    description: '5-page custom small business website, delivered in 7 days',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/us/services/web-design' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Small Business Website Design',
      item: 'https://factoryjet.com/us/services/small-business-website-design',
    },
  ],
};

/* ----------------------------------------------------------------------------─
   Section Data
--------------------------------------------------------------------------─-- */

const JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Free Strategy Call',
    description:
      'A 30-minute call to understand your business, your audience, and what you need the site to do. We scope the project, agree on the page structure, and give you a fixed price before you commit to anything. No obligation.',
  },
  {
    number: '02',
    title: 'Design & Content',
    description:
      'You send us your logo, photos, and copy (or we write it for you). We design every page — desktop and mobile — built around your brand. You review and approve the design before development starts.',
  },
  {
    number: '03',
    title: 'Build & QA',
    description:
      'We build your approved design on WordPress, Webflow, or Next.js. Cross-browser testing, mobile QA, Lighthouse audits, SEO configuration, contact form setup, and analytics integration — all handled before handover.',
  },
  {
    number: '04',
    title: 'Launch in 7 Days',
    description:
      'We deploy to your domain, configure SSL, submit your sitemap to Google Search Console, and hand over full admin access. For 5-page sites, most projects launch on or before day 7 from content receipt.',
  },
  {
    number: '05',
    title: '30-Day Support',
    description:
      'Every project includes 30 days of post-launch support — text changes, image swaps, layout tweaks, and bug fixes at no extra charge. You get a direct line to the team that built your site.',
  },
];

const STATS = [
  {
    value: '$1,999',
    label: 'starting price for a 5-page small business website',
    microcopy: 'fixed price, no hourly billing',
    categoryLabel: 'OUR STARTING PRICE',
  },
  {
    value: '7 days',
    label: 'delivery guarantee for 5-page websites',
    microcopy: 'vs. 6–16 weeks at most US agencies',
    categoryLabel: 'DELIVERY SPEED',
  },
  {
    value: '500+',
    label: 'US small businesses served since 1999',
    microcopy: '25+ years of professional web design',
    categoryLabel: 'TRACK RECORD',
  },
];

const COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'DIY Builder' },
  { label: 'Freelancer' },
  { label: 'US Agency' },
] as const;

const COMPARISON_ROWS = [
  {
    feature: 'Starting cost',
    values: ['From $1,999', '$0 + your time', '$1,000–$10,000', '$8,000–$40,000+'],
  },
  {
    feature: 'Delivery time',
    values: ['7 days', 'Your weekends', '4–8 weeks', '6–16 weeks'],
  },
  {
    feature: 'Custom design (not a template)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
    ],
  },
  {
    feature: 'Mobile-first & Lighthouse 100',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="partial" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="yes" />,
    ],
  },
  {
    feature: 'On-page SEO included',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="partial" />,
    ],
  },
  {
    feature: 'Fixed price — no hourly billing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="yes" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="us" kind="no" />,
    ],
  },
  {
    feature: '30-day post-launch support',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="no" />,
      <CompareIcon key="us" kind="partial" />,
    ],
  },
  {
    feature: 'You own the code — no lock-in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="yes" />,
      <CompareIcon key="us" kind="partial" />,
    ],
  },
  {
    feature: '500+ projects delivered',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="diy" kind="no" />,
      <CompareIcon key="fl" kind="partial" />,
      <CompareIcon key="us" kind="partial" />,
    ],
  },
];

const PRICING_TIERS = [
  {
    name: 'Starter',
    priceRange: 'From $1,999',
    description:
      'A professionally designed 5-page website for small businesses ready to stop looking like a startup and start winning customers. Delivered in 7 days, mobile-first, and built to convert.',
    features: [
      'Up to 5 custom-designed pages',
      'Mobile-first, Lighthouse 100 performance',
      'On-page SEO — meta tags, schema, sitemap',
      'Contact form + Google Maps integration',
      'SSL, domain connection, Google Analytics setup',
      'WordPress, Webflow, or Next.js — your choice',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Free Quote', modal: true, region: 'us' },
  },
  {
    name: 'Growth',
    priceRange: 'From $3,499',
    description:
      'A larger, more ambitious website for businesses that are serious about organic search and online lead generation. More pages, more functionality, deeper SEO — built for growth.',
    features: [
      'Up to 15 custom-designed pages',
      'Blog + CMS for ongoing content publishing',
      'Advanced SEO — local SEO, schema markup, page speed',
      'CRM, email marketing, and booking integrations',
      'Custom animations and interactive UI elements',
      'Team training to manage your own site',
      '30-day post-launch support',
    ],
    cta: { label: 'Get a Custom Quote', modal: true, region: 'us' },
    popular: true,
  },
  {
    name: 'E-Commerce',
    priceRange: 'From $2,999',
    description:
      'A Shopify or WooCommerce store built to sell — not just to exist online. Product pages designed for conversion, checkout flows that keep revenue, and an SEO foundation to bring in organic traffic.',
    features: [
      'Shopify or WooCommerce — your platform',
      'Up to 50 products configured and uploaded',
      'Custom theme design — not a pre-built template',
      'Payment gateway + shipping method setup',
      'Product page conversion optimization',
      'E-commerce SEO — collections, product schema',
      'Full store ownership — no agency dependency',
      '30-day post-launch support',
    ],
    cta: { label: 'Get an E-Commerce Quote', modal: true, region: 'us' },
  },
] as const;

/* ─-- FAQ Categories ----------------------------------------------------─-- */
const FAQ_CATEGORIES = [
  { key: 'planning',      label: 'Planning Your Site' },
  { key: 'design',        label: 'Design & Build' },
  { key: 'cost',          label: 'Cost & Pricing' },
  { key: 'seo',           label: 'SEO & Traffic' },
  { key: 'factoryjet',    label: 'Working with FactoryJet' },
];

const FAQ_ITEMS = [
  // -- Planning Your Site ------------------------------------------------─
  {
    question: 'What pages does a small business website need?',
    answer: `Most small business websites need 5–8 core pages: a homepage, a services or products page, an about page, a contact page, and ideally a blog or FAQ for SEO. If you serve multiple locations or industries, each may need its own dedicated landing page. The homepage does the heavy lifting — it needs to answer "what do you do, who is it for, and why should I trust you" within the first 5 seconds. Every other page exists to go deeper on one of those questions.`,
    category: 'planning',
  },
  {
    question: 'Should I use a website builder or hire a web designer?',
    answer: `Use a website builder if: you have 30–50 hours to invest in building and maintaining it, your business doesn't depend heavily on web traffic, and a template-based design is acceptable. Hire a web designer if: your website is your primary lead source, you want to rank in Google, you need custom functionality, or you don't have that time. The subscription savings from a DIY builder ($200–$800/year) rarely justify the time cost and quality trade-off for a business where the website matters.`,
    category: 'planning',
  },
  {
    question: 'How many pages does a small business website need?',
    answer: `A functional small business website needs at least 4–5 pages: home, services/products, about, and contact. For better SEO, add individual service pages (one per service you want to rank for), location pages if you serve multiple areas, and a blog for ongoing content. More pages aren't always better — every page needs a clear purpose. A focused 5-page site beats a bloated 20-page site with thin content every time.`,
    category: 'planning',
  },
  {
    question: 'What information do I need to provide to get my website built?',
    answer: `To build your website, you'll typically need to provide: your logo (or we can create one), photos of your business/team/products, your service descriptions and pricing (if you want it public), your contact information and location, any existing brand guidelines or color preferences, and examples of websites you like. If you don't have professional copywriting, FactoryJet can write your page content — we gather everything through a structured intake form at the start of the project.`,
    category: 'planning',
  },
  {
    question: 'What platform should a small business use for their website?',
    answer: `WordPress powers 43% of all websites for good reason — it's flexible, well-supported, and SEO-friendly. It's the right choice for most small businesses that want control and growth room. Webflow is excellent for design-forward businesses that want a premium look. Shopify is the standard for e-commerce. Wix and Squarespace are fine for true DIY — but have SEO ceilings and limited flexibility. FactoryJet builds on WordPress, Webflow, or Next.js depending on your goals, and helps you choose the right fit.`,
    category: 'planning',
  },

  // -- Design & Build ----------------------------------------------------─
  {
    question: 'What does "mobile-first" web design actually mean?',
    answer: `Mobile-first means the website is designed starting with the phone layout, then adapted up to tablet and desktop — not the other way around. It matters because 60%+ of web traffic is mobile, Google uses mobile-first indexing (meaning your mobile site determines your search ranking), and users are much less patient on mobile. A site designed desktop-first often gets "squished" onto phones as an afterthought and performs poorly on both the user experience and SEO fronts.`,
    category: 'design',
  },
  {
    question: 'What is Lighthouse 100 and why does it matter?',
    answer: `Lighthouse is Google's tool for measuring website quality across four categories: Performance, Accessibility, Best Practices, and SEO. A score of 100 in each means your site loads fast, works for users with disabilities, follows web standards, and is technically optimized for search. A slow site (Lighthouse Performance score below 70) ranks lower in Google and converts fewer visitors — Google's data shows that every 1-second delay in load time reduces conversions by 7%. FactoryJet hits 100 in all four categories on every site we build.`,
    category: 'design',
  },
  {
    question: 'How long does a small business website take to build?',
    answer: `FactoryJet delivers 5-page websites in 7 days — a hard delivery guarantee from when you send us your content. Larger sites (up to 15 pages) take 2–3 weeks. E-commerce stores take 2–4 weeks depending on product count. US agencies typically quote 6–16 weeks for the same scope. Our speed comes from a structured build process and a senior-only team that doesn't have project handoff delays or internal review bottlenecks.`,
    category: 'design',
  },
  {
    question: 'Will I be able to update my website myself?',
    answer: `Yes — every FactoryJet site is built so you can make basic updates yourself. WordPress sites include a user-friendly admin dashboard for editing text, swapping images, and adding blog posts. We also provide a training session so you know exactly how to use it. For bigger changes or development work, our 30-day post-launch support covers you, and we offer ongoing maintenance packages. You're never locked into needing us for basic site management.`,
    category: 'design',
  },
  {
    question: 'Do you design the site from scratch or use templates?',
    answer: `Every FactoryJet site is custom-designed from scratch for your business — no templates, no site builders with preset layouts. We design at the component level: your hero section, your service cards, your about section, your contact form — each designed to fit your brand, industry, and goals. This is why our sites look different from one another and why they perform better than template-based sites, which all share the same structural limitations.`,
    category: 'design',
  },

  // -- Cost & Pricing ----------------------------------------------------─
  {
    question: 'How much should a small business spend on a website?',
    answer: `A small business that relies on its website to generate leads should budget $1,500–$5,000 for a professionally built site. That range covers a quality freelance designer on the low end and a boutique agency like FactoryJet in the mid-range. US agencies start at $8,000–$15,000 for basic small business sites. Going below $1,500 usually means a template swap without real design thinking, no SEO setup, and no accountability — which is often worse than no website at all.`,
    category: 'cost',
  },
  {
    question: 'What is the cheapest way to get a professional small business website?',
    answer: `The cheapest professional option is FactoryJet — starting at $1,999 for a 5-page custom site with design, development, SEO setup, and 30-day support included. Below $1,999, you're typically looking at template-based services with no custom design thinking, offshore freelancers with inconsistent quality, or DIY builders that cost time instead of money. The $1,999 starting price is engineered for measurable outcomes for the same deliverable.`,
    category: 'cost',
  },
  {
    question: 'Are there any hidden costs or monthly fees after launch?',
    answer: `No hidden fees. FactoryJet charges a fixed project price — design, development, SEO setup, and 30-day support are all included. After launch, you'll pay only for hosting (typically $5–$50/month through a provider of your choice) and your domain (typically $12–$20/year). We don't lock you into a monthly retainer, a maintenance plan, or a proprietary hosting arrangement. You own everything and pay nothing to us after the project is complete.`,
    category: 'cost',
  },
  {
    question: 'Why are US web design agencies so expensive?',
    answer: `US agencies carry enormous overhead: office space in expensive cities, large teams of account managers, project managers, UX researchers, copywriters, and junior developers — all billing at US salaries. A $15,000 agency project typically involves 8–12 people each billing $150–$250/hour. FactoryJet is structured differently: a senior-only engineering team with US-hour project management, fixed-price and milestone-paid, no bloated account management, direct client access. You get predictable cost from quote to launch with full code ownership at handoff.`,
    category: 'cost',
  },
  {
    question: 'Do you offer payment plans for small business web design?',
    answer: `Yes. FactoryJet splits project fees into two payments: 50% upfront to begin the project, and 50% on launch day. This is standard across all project tiers. There are no interest charges, no complicated payment schedules. For larger projects ($5,000+), we can discuss milestone-based payment structures. Reach out during your strategy call and we'll find an arrangement that works.`,
    category: 'cost',
  },

  // -- SEO & Traffic ------------------------------------------------------
  {
    question: 'Does my small business website need SEO?',
    answer: `Yes — if you want people to find you through Google, your website needs SEO. Most small business owners discover that a beautifully designed site with no SEO gets zero organic traffic. Every FactoryJet website includes on-page SEO: optimized title tags and meta descriptions, schema markup for your business type, an XML sitemap, Google Search Console setup, and page speed optimization. This is the technical SEO foundation — ongoing content and link building are separate strategies we can advise on.`,
    category: 'seo',
  },
  {
    question: 'How long does it take for a new website to rank in Google?',
    answer: `A new website typically takes 3–6 months to see meaningful organic search rankings — and that's with a properly built site (fast, mobile-first, technically sound) and active content publishing. Google needs time to crawl and index your site, assess its relevance, and compare it against existing competition. Sites with strong technical SEO foundations rank faster. FactoryJet submits your sitemap to Google Search Console on launch day and configures all the technical signals that help Google understand your site quickly.`,
    category: 'seo',
  },
  {
    question: 'What is local SEO and does my small business need it?',
    answer: `Local SEO helps your business appear in Google searches with local intent — "web designer near me" or "plumber in Austin" — including the Google Maps pack above the regular results. If your business serves a specific geographic area, local SEO is one of your highest-ROI activities. FactoryJet includes local SEO basics in all projects: schema markup with your business address, optimized Google Business Profile guidance, and location-specific page content. We also build dedicated city landing pages for businesses targeting multiple markets.`,
    category: 'seo',
  },
  {
    question: 'Will my website rank better with a faster load time?',
    answer: `Yes — Google uses page speed as a ranking signal, and fast sites outrank slow ones all else being equal. But speed also matters more directly: every 1-second delay in page load time reduces conversions by 7% and increases bounce rate significantly. A slow site doesn't just rank lower — it loses the visitors it does get. FactoryJet builds all sites to Lighthouse 100 performance scores, which means optimal Core Web Vitals: fast loading, no layout shifts, and responsive interactivity.`,
    category: 'seo',
  },
  {
    question: 'Should I have a blog on my small business website?',
    answer: `A blog is one of the most effective long-term SEO tools for a small business — but only if you're going to publish consistently. A blog with 2–3 posts that's been abandoned since 2022 does more harm than good (signals a dormant business). If you can commit to publishing 1–2 posts per month on topics your customers are searching for, a blog compounds significantly over time. FactoryJet includes blog setup in the Growth package, with a CMS that makes publishing easy even for non-technical owners.`,
    category: 'seo',
  },

  // -- Working with FactoryJet --------------------------------------------─
  {
    question: 'What happens during the free strategy call?',
    answer: `The strategy call is a 30-minute video or phone call with a FactoryJet project lead. We cover: what your business does and who you serve, what you want the website to accomplish, what pages and features you need, your timeline and any constraints, and your design preferences. At the end of the call, we give you a fixed-price proposal. There's no obligation to move forward — the call is genuinely about figuring out if we're a good fit for your project.`,
    category: 'factoryjet',
  },
  {
    question: 'Do you work with businesses outside Austin, Miami, and Denver?',
    answer: `Absolutely — FactoryJet works with small businesses across all 50 US states. Our priority cities include Austin, Miami, Denver, Nashville, Portland, Charlotte, Raleigh, and Tampa, but our clients are spread across the country. The entire engagement is remote: strategy calls, design reviews, feedback, and launch — all handled digitally. Geography has never been a constraint for us.`,
    category: 'factoryjet',
  },
  {
    question: 'What if I need changes after the website launches?',
    answer: `Every FactoryJet project includes 30 days of post-launch support at no extra charge. During that window, we handle text changes, image swaps, layout tweaks, and bug fixes for free. After 30 days, we offer maintenance packages for ongoing updates — or we can do one-off changes billed at our standard rate. You also have full admin access to make basic changes yourself. You're never locked into depending on us for routine site management.`,
    category: 'factoryjet',
  },
  {
    question: 'How many revisions do I get during the design process?',
    answer: `We build two rounds of design revisions into every project — enough to get the design right without endless back-and-forth. The first round is a full design review where you can give holistic feedback. The second is a refinement round for specific adjustments. In practice, most projects reach approval in one or two rounds because we do thorough discovery upfront and rarely miss the mark significantly. If something isn't right after two rounds, we'll work through it — we want you to love the design.`,
    category: 'factoryjet',
  },
  {
    question: 'What makes FactoryJet different from other small business web designers?',
    answer: `Three things separate FactoryJet: speed (7-day delivery guarantee on 5-page sites), value (fixed-price, milestone-paid), and track record (500+ websites built since 1999). Most web designers are solo freelancers or small agencies juggling 10–15 clients — which means slow turnarounds, inconsistent quality, and limited accountability. FactoryJet is a structured engineering team that has refined a repeatable process over 25 years. Senior engineers on every project, fixed pricing, and a support window after launch.`,
    category: 'factoryjet',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your small business website in 7 days',
  description: 'Our proven 7-day process for delivering professional, SEO-optimized websites for US small businesses.',
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

/* ----------------------------------------------------------------------------─
   Page
--------------------------------------------------------------------------─-- */

export default function SmallBusinessWebDesignPage() {
  return (
    <>
      {/* JSON-LD */}
      <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="howto-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(howToSchema)}
      </Script>

      <SiteHeader
        navLinks={[
          { label: 'Web Design', href: '/us/services/web-design' },
          { label: 'E-Commerce', href: '/us/services/ecommerce-development' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'FAQ', href: '#faq' },
        ]}
        cta={{ label: 'Get a Free Quote', modal: true, region: 'us' }}
      />

      <main>
        {/* -- 1. HERO -------------------------------------------------------- */}
        <Hero
          eyebrow="SMALL BUSINESS WEBSITE DESIGN"
          headline="A website your customers trust. Built in 7 days. Starting at $1,999."
          lead="Custom-designed (not a template), mobile-first, Lighthouse 100 performance, full SEO setup — and delivered to your domain in 7 days. 500+ US small businesses served since 1999."
          primaryCta={{ label: 'Get a Free Quote', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See Our Work', href: '/us/portfolio' }}
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  What Every FactoryJet Site Includes
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { item: 'Custom design', detail: 'Built around your brand — not a template' },
                  { item: 'Mobile-first', detail: 'Designed for phones before desktops' },
                  { item: 'Lighthouse 100', detail: 'Performance, SEO, accessibility — all green' },
                  { item: 'On-page SEO', detail: 'Meta, schema, sitemap, alt text — all done' },
                  { item: 'Contact forms', detail: 'Configured and tested before launch' },
                  { item: 'Analytics + Search Console', detail: 'Connected on day one' },
                  { item: 'Full code ownership', detail: 'Your repo, your hosting, no lock-in' },
                  { item: '30-day support', detail: 'Changes and fixes after launch, included' },
                ].map(({ item, detail }) => (
                  <div key={item} className="flex items-center justify-between gap-4 px-7 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F05A28]" aria-hidden />
                      <div>
                        <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item}</p>
                        <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">{detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden />
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  From $1,999. Delivered in 7 days. No hourly billing.
                </p>
              </div>
            </div>
          }
        />

        {/* -- 2. LOGO BAR ---------------------------------------------------- */}
        <LogoBar tagline="500+ US small businesses trust FactoryJet — from Austin and Miami to Denver, Nashville, and Portland" />

        {/* -- 3. TRUST BLOCK ----------------------------------------------─-- */}
        <BigThreeTrustBlock
          eyebrow="WHY SMALL BUSINESSES CHOOSE FACTORYJET"
          headline="Custom-designed websites from $1,999. Delivered in 7 days. fixed-price, milestone-paid."
        />

        {/* -- 4. WHAT MAKES A GOOD SMALL BUSINESS WEBSITE ----------------─-- */}
        <ServiceExplanation
          eyebrow="WHAT ACTUALLY MATTERS"
          headline="Most Small Business Websites Fail at the Same Three Things"
          lead="A website isn't valuable because it exists. It's valuable because it makes people trust you, makes them take action, and shows up when they're searching. Most small business sites fail at all three — here's why."
          body={
            <>
              <p>
                The first problem is design. 75% of people judge a business's credibility by its website. A template-based site — where the layout looks like ten thousand other businesses — signals that you didn't invest in your presentation. That translates directly to bounce rates, lower trust, and fewer leads. Custom design isn't a luxury. It's the foundation of a site that converts.
              </p>

              <p>
                The second problem is speed. Google uses Core Web Vitals as a ranking signal. A slow site ranks lower, and a slow site also loses visitors — 53% of mobile users abandon a page that takes more than 3 seconds to load. Most DIY website builder sites and cheaply built WordPress sites fail these metrics. Every FactoryJet site hits Lighthouse 100 in Performance, Accessibility, Best Practices, and SEO — those aren't nice-to-haves, they're the baseline.
              </p>

              <div className="overflow-hidden rounded-xl border border-fj-neutral-200 bg-white shadow-sm">
                <div className="border-b border-fj-neutral-100 px-6 py-3">
                  <p
                    className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                    style={{ fontSize: '10px', letterSpacing: '0.12em' }}
                  >
                    Common Small Business Website Problems
                  </p>
                </div>
                <div className="divide-y divide-fj-neutral-100">
                  {[
                    { problem: 'Template design', impact: 'Low trust, high bounce rate', fix: 'Custom-designed for your brand' },
                    { problem: 'Slow load speed', impact: 'Lower ranking, lost visitors', fix: 'Lighthouse 100 on every page' },
                    { problem: 'No SEO setup', impact: 'Zero organic traffic', fix: 'Schema, meta, sitemap — all configured' },
                    { problem: 'Not mobile-first', impact: 'Poor UX for 60%+ of visitors', fix: 'Designed phone-first, every time' },
                    { problem: 'No clear CTA', impact: 'Visitors leave without acting', fix: 'Conversion-optimized page structure' },
                  ].map(({ problem, impact, fix }) => (
                    <div key={problem} className="grid grid-cols-3 gap-2 px-6 py-2.5">
                      <p className="font-fj-body text-[0.8125rem] font-medium text-fj-ink">{problem}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">{impact}</p>
                      <p className="font-fj-body text-[0.8125rem] font-semibold text-[#F05A28]">{fix}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                The third problem is SEO. A beautifully designed, fast-loading site that nobody can find in Google is a missed opportunity. On-page SEO — optimized title tags, meta descriptions, schema markup, XML sitemaps, and Google Search Console setup — needs to be built in from day one. FactoryJet includes all of this in every project, at every price tier.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  The Real Cost of a Bad Website
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { scenario: 'DIY builder — 40 hrs to build', cost: '40 hours of your time', subtext: 'Plus ongoing maintenance hours' },
                  { scenario: 'Slow load speed (3s+)', cost: '53% mobile abandonment', subtext: 'Google penalizes slow sites in rankings' },
                  { scenario: 'Template design', cost: 'High bounce rate', subtext: '75% judge credibility by design' },
                  { scenario: 'No on-page SEO', cost: 'Zero organic traffic', subtext: 'Invisible to search engines' },
                  { scenario: 'US agency build', cost: '$8,000–$40,000', subtext: '6–16 week wait before launch' },
                ].map(({ scenario, cost, subtext }) => (
                  <div key={scenario} className="py-3.5">
                    <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{scenario}</p>
                    <div className="mt-1">
                      <p className="font-fj-mono text-[0.75rem] font-medium text-fj-neutral-500">{cost}</p>
                      <p className="font-fj-mono text-[0.75rem] text-fj-neutral-400">{subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden />
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  A bad website costs more than it saves.
                </p>
              </div>
            </div>
          }
        />

        {/* -- 5. INDUSTRIES WE SERVE --------------------------------------─-- */}
        <IndustriesGrid
          eyebrow="INDUSTRIES WE SERVE"
          headline="We've Built Websites for 500+ US Small Businesses — Across Every Industry"
        />

        {/* -- 6. WHY US AGENCIES AREN'T THE ANSWER ------------------------─-- */}
        <StrategicDarkSection
          eyebrow="THE AGENCY PROBLEM"
          headline={`Three Reasons US Agencies Are Overkill for Most Small Businesses`}
          lead="US web design agencies do great work for enterprise clients with $30K+ budgets. For most small businesses, you're paying for overhead you don't need — and waiting longer than you have to."
          pillars={[
            {
              title: 'You pay for their cost structure, not their output',
              body: `A US agency charging $15,000 for a small business website employs account managers, project managers, junior developers billing at senior rates, and UX researchers — many of whom touch your project briefly. FactoryJet has no such structure. Senior engineers do the work directly. No billing multipliers, no handoff delays. The same engineering quality at a fixed, transparent price.`,
            },
            {
              title: '6–16 weeks to launch when you need 7 days',
              body: `A small business replacing an outdated website or launching a new one doesn't have 3–4 months to wait. Every month without a working site is a month of missed leads. US agencies have long timelines because they have long internal review cycles, multiple approval stages, and too many projects running simultaneously. FactoryJet's process is designed for speed: one senior team, one project at a time, 7-day delivery guarantee.`,
            },
            {
              title: `Templates dressed up as custom design`,
              body: `Many agencies — especially at the $5,000–$10,000 range — use premium WordPress themes or page builder templates with light customization and call it "custom design." You get a site that looks like dozens of others in your industry. FactoryJet designs every site from scratch at the component level: your hero section, your service cards, your testimonials layout — designed to fit your brand specifically, not assembled from a pre-built kit.`,
            },
          ]}
        />

        {/* -- 7. COMPARISON TABLE -------------------------------------------- */}
        <ComparisonTable
          eyebrow="HOW YOUR OPTIONS COMPARE"
          headline="FactoryJet vs. DIY Builder vs. Freelancer vs. US Agency"
          lead="Four ways to get a small business website. Here's what the decision actually looks like when you compare on the things that matter — cost, speed, quality, and ownership."
          pullQuote={{
            stat: '7 days',
            caption: 'delivery guarantee for 5-page small business websites. US agencies average 6–16 weeks for the same scope.',
          }}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
          footer="Prices reflect 2025 US market rates. DIY costs exclude time investment. Agency costs vary by market and firm size."
        />

        {/* -- 8. STATS ----------------------------------------------------─-- */}
        <div className="bg-fj-neutral-50">
          <BoringStatsRow stats={STATS} align="center" />
        </div>

        {/* -- 9. HOW WE'RE DIFFERENT --------------------------------------─-- */}
        <ServiceExplanation
          eyebrow="OUR APPROACH"
          headline="Senior Engineers. Fixed Price. 7-Day Delivery. Full Ownership."
          lead="Every web design agency promises quality. We're specific about what that means and how we deliver it — because the details are what separate a website that works from one that just exists."
          reverseOnDesktop
          body={
            <>
              <p>
                FactoryJet has been building websites since 1999. That's 25 years of small business web design — enough time to know what works, what doesn't, and how to price projects accurately enough to offer fixed prices with no scope creep games.
              </p>

              <p>
                Our lean team serves US clients directly with fixed-price, milestone-paid contracts. You get the same or better engineering — not from junior developers or outsourced QA, but from senior engineers on every project, every time. The quote you sign on the first call is what you pay. Full code ownership at handoff.
              </p>

              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  Not a template shop. Not a freelancer. A 25-year-old engineering team that delivers in 7 days.
                </p>
              </div>

              <p>
                Full code ownership on every project. Your files go into your GitHub repo or are delivered as a zip on launch day. Your hosting account. Your domain. If you ever stop working with us, your site keeps running — no dependencies, no hostage situations. That's how it should be.
              </p>
            </>
          }
          rightSlot={
            <div className="w-full overflow-hidden rounded-2xl border border-fj-neutral-200 bg-white shadow-sm">
              <div className="border-b border-fj-neutral-100 px-7 py-4">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  Why Small Businesses Choose FactoryJet
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  { reason: 'fixed-price', detail: 'Than comparable US agencies, same quality' },
                  { reason: '7-day delivery', detail: 'Hard guarantee for 5-page sites' },
                  { reason: 'Fixed pricing', detail: 'No hourly billing, no scope creep' },
                  { reason: 'Senior team only', detail: 'No juniors billing at senior rates' },
                  { reason: 'Custom design', detail: 'Not templates — built for your brand' },
                  { reason: '500+ delivered', detail: '25+ years, hundreds of small businesses' },
                  { reason: 'Full ownership', detail: 'Your code, your hosting, no lock-in' },
                  { reason: '30-day support', detail: 'Post-launch fixes included' },
                ].map(({ reason, detail }) => (
                  <div key={reason} className="flex items-center gap-4 px-7 py-3.5">
                    <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F05A28]" aria-hidden />
                    <div>
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{reason}</p>
                      <p className="font-fj-body text-[0.8125rem] text-fj-neutral-400">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* -- 10. HOW IT WORKS --------------------------------------------─-- */}
        <ServiceJourneyRow
          eyebrow="HOW IT WORKS"
          headline="From Strategy Call to Live Website in 5 Steps"
          lead={`No surprises, no delays, no "we'll show you when it's done." Every stage is transparent — you know exactly where your project is and what comes next.`}
          stages={JOURNEY_STAGES}
        />

        {/* -- 11. PRICING ---------------------------------------------------- */}
        <PricingTiers
          eyebrow="PRICING"
          headline="Fixed-Price Small Business Website Packages"
          lead="No hourly billing. No scope creep. The price you see is the price you pay. Choose the package that fits your goals and we'll tailor the scope to your business on your strategy call."
          tiers={PRICING_TIERS}
        />

        {/* -- 12. TESTIMONIALS --------------------------------------------─-- */}
        <TestimonialsSection
          region="us"
          eyebrow="WHAT CLIENTS SAY"
          headline="4.9/5 across 500+ projects. Real results from real businesses."
        />

        {/* -- 13. FAQ -------------------------------------------------------- */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything US Small Business Owners Ask About Web Design"
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* -- 14. FINAL CTA -------------------------------------------------- */}
        <FinalCTA
          variant="dark"
          eyebrow="GET STARTED"
          headline="Ready to get a website that actually works?"
          sub="Book a free 30-minute strategy call. We'll scope your project, answer every question, and give you a fixed-price proposal — no obligation, no sales pressure."
          primaryCta={{ label: 'Book Your Free Strategy Call', modal: true, region: 'us' }}
          secondaryCta={{ label: 'View Our Portfolio', href: '/us/portfolio' }}
          objectionHandler="No commitment required. Most clients get a proposal within 24 hours."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
