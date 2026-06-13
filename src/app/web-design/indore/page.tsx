import type { Metadata } from 'next';
import Script from 'next/script';
import { webDesignCityAlternatesIN } from '@/data/hreflangMap';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import CityContextSection from '@/components/v2/CityContextSection';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import PortfolioShowcase from '@/components/v2/PortfolioShowcase';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';
import HeroBrowserMockup from '@/components/v2/HeroBrowserMockup';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import GetFreeQuoteCTA from '@/components/v2/GetFreeQuoteCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Web Design Company in Indore | Website Development Indore | FactoryJet',
  description:
    'Best web design company in Indore. Professional websites from ₹29,999. 7-day delivery, 500+ businesses served. Serving Vijay Nagar, AB Road, Palasia, Scheme 54, Rau & all of Indore.',
  keywords: [
    'web design company in Indore',
    'website design Indore',
    'web development company Indore',
    'website design company Indore',
    'affordable web design Indore',
    'professional website design Indore',
    'web design Vijay Nagar Indore',
    'web design Scheme 78 Indore',
    'ecommerce website design Indore',
    'Shopify development Indore',
    'Next.js web development Indore',
    'web design agency Indore',
    'website banane wali company Indore',
    'best web design company Madhya Pradesh',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Company in Indore | | FactoryJet',
    description:
      'Professional web design company in Indore — Next.js, SEO, and GA4 included. 7-day delivery. Serving Vijay Nagar, AB Road, Palasia, Scheme 54, Scheme 78.',
    url: 'https://factoryjet.com/web-design/indore',
    images: [
      {
        url: 'https://factoryjet.com/images/services/web-design.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet Web Design Services in Indore',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Indore | FactoryJet',
    description:
      'Website design company in Indore. 7-day delivery. Next.js, SEO, GA4 included.',
    images: ['https://factoryjet.com/images/services/web-design.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/web-design/indore',
    languages: webDesignCityAlternatesIN['indore'],
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
   JSON-LD Schemas
───────────────────────────────────────────────────────────────────────────── */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet — Web Design Indore',
  description:
    'Web design company in Indore building fast, SEO-optimized websites for D2C brands, coaching institutes, manufacturers, and SMBs. 7-day delivery guarantee.',
  url: 'https://factoryjet.com/web-design/indore',
  telephone: '+919699977699',
  email: 'connect@factoryjet.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Indore' },
    { '@type': 'City', name: 'Pithampur' },
    { '@type': 'City', name: 'Mhow' },
    { '@type': 'AdministrativeArea', name: 'Madhya Pradesh' },
  ],
  serviceType: 'Web Design and Development',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design Services Indore',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter Website',
        description: '5-page business website, mobile-responsive, basic SEO, contact form.',
      },
      {
        '@type': 'Offer',
        name: 'Growth Website',
        description:
          '10–15 page website with blog CMS, lead capture, GA4, and advanced SEO.',
      },
      {
        '@type': 'Offer',
        name: 'Custom Website',
        description:
          'Custom Next.js build with e-commerce, booking systems, or AI integrations.',
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does web design cost in Indore in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's web design for Indore businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers up to 15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds with e-commerce, booking systems, or AI integrations start at ₹1,50,000. Local Indore agencies typically quote ₹40,000–₹2,00,000 for comparable scope — often without a published timeline or a codebase you own outright.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which is the best web design company in Indore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet is one of India's most experienced web design teams with 25+ years of expertise and 500+ businesses served. Unlike Indore-local agencies that may have 2–5 years of experience and 50–200 clients, FactoryJet brings a proven Next.js engineering process, a written 7-day delivery guarantee, and published fixed prices — no surprises after the brief. Lighthouse 100/100 performance is standard on every build.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a website made in 7 days in Indore?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and it is guaranteed in writing. FactoryJet delivers standard websites in 7 days from the moment your brand assets and content are ready. Most Indore agencies quote 4–12 weeks for the same scope. The 7-day clock starts at project kickoff. If we miss the agreed date, you do not pay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you visit our Indore office for meetings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work fully remotely, which is precisely how we keep your costs fixed and predictable. All meetings happen over Google Meet or Zoom in IST-friendly hours — typically 10 AM–7 PM. We support both Hindi and English communication throughout the project. Most clients find remote collaboration faster than waiting for in-person agency slots.',
      },
    },
    {
      '@type': 'Question',
      name: 'Indore mein website banane ka kharcha kitna hai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FactoryJet mein website ₹29,999 se shuru hoti hai — 5-page business site ke liye. Growth plan ₹80,000 mein 15 pages tak, blog CMS, aur GA4 analytics deta hai. Custom ecommerce ya web app ₹1,50,000 se shuru hota hai. Indore ke local agencies usually ₹40,000–₹2,00,000 charge karte hain same kaam ke liye — aur delivery 4–12 hafte mein hoti hai.',
      },
    },
    {
      '@type': 'Question',
      name: '7 din mein website ban sakti hai kya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Haan, bilkul. FactoryJet ki 7-day delivery guarantee written contract mein hoti hai. Jab aap brand assets aur content bhejte ho, usi din se 7-din ka clock shuru hota hai. Discovery, design, development, SEO, aur launch — sab kuch 7 din mein. Agar deadline miss ho toh payment nahi dena.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the best web design agency in Indore?',
      acceptedAnswer: { '@type': 'Answer', text: 'For small businesses, FactoryJet makes a strong case as the best web design company in Indore: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Indore you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Indore.' },
    },
    {
      '@type': 'Question',
      name: 'Should I hire web designer in Indore or use an agency?',
      acceptedAnswer: { '@type': 'Answer', text: 'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Indore directly, agree the scope and price in writing first.' },
    },
],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': 'https://factoryjet.com/web-design/indore#howto',
  name: 'How FactoryJet builds your Indore website in 7 days',
  description:
    'Our 7-day process for delivering a professional, high-performance website for Indore businesses.',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'INR',
    minValue: '29999',
  },
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Day 1 — Discovery Call',
      text: 'We learn your business, your Indore market segment, your goals, and what the website must do for your specific audience — whether that is coaching institute enrolments, D2C orders, or B2B enquiries.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Day 2 — Strategy & Structure',
      text: 'We map your site architecture, research your top Indore competitors, identify your priority keywords, and draft the first version of your page copy.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Days 3–4 — Design',
      text: 'Your bespoke Figma design is created at 375px mobile-first through to 1440px desktop. You receive a design preview link. Feedback incorporated within 24 hours.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Days 5–6 — Development & SEO',
      text: 'Your approved design is built in Next.js — fast, mobile-first, and SEO-optimised. Indore local schema markup added. Razorpay / UPI checkout integrated where required. Google Analytics and Search Console connected.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Day 7 — Launch',
      text: 'Final review, testing across 5 devices, and go-live on Cloudflare Pages. You receive the full codebase in your GitHub, Figma design files, and a recorded handover walkthrough.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/web-design/indore#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/web-design/indore',
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const INDORE_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      "We map your ideal customer profile against Indore's market — whether that's a coaching student in Vijay Nagar searching for NEET prep, a D2C buyer browsing your Shopify store, a wholesale fabric buyer from Scheme 54, or a Pithampur manufacturer being researched by an international procurement team. We audit your top three competitors and agree the sitemap and content plan. — Day 1",
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description:
      'Figma wireframes at 375px (mobile-first) through to 1440px desktop. Every tap target, form field, and section reviewed against your conversion goal — enquiry form fills, WhatsApp clicks, Razorpay checkout, or course enrolments. You approve the design before development starts. — Days 2–3',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Built in Next.js deployed to Cloudflare CDN — sub-1.5s load times on Indian 4G networks. Contact forms, WhatsApp automation, Razorpay / UPI checkout, booking flows, and any third-party APIs your business uses (Zoho, Tally, Shiprocket). Performance budgets enforced from the first commit. — Days 4–6',
  },
  {
    number: '04',
    title: 'Content & SEO',
    description:
      'Optimised copy, WebP imagery, meta tags, JSON-LD schema (LocalBusiness + FAQPage), and internal links. Sitemap submitted to Google Search Console. Indore-specific local SEO targeting built in — not sold as an add-on. — Day 6',
  },
  {
    number: '05',
    title: 'Launch & Handover',
    description:
      'DNS configured on Cloudflare Pages, GA4 and GTM set up, Search Console verified. Full codebase delivered to your GitHub. Recorded handover walkthrough in Hindi or English — your team is fully self-sufficient from day one. 30-day post-launch support window included. — Day 7+',
  },
];

const INDORE_FAQ_CATEGORIES = [
  { key: 'pricing',   label: 'Pricing & Timeline' },
  { key: 'included',  label: "What's Included" },
  { key: 'technical', label: 'Technical & SEO' },
  { key: 'local',     label: 'Indore Local' },
  { key: 'support',   label: 'Support & Ownership' },
];

const INDORE_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does web design cost in Indore in 2026?',
    answer:
      "FactoryJet's web design for Indore businesses starts at ₹29,999 for a 5-page Starter site. The Growth tier (₹80,000) covers up to 15 pages, a blog CMS, lead-capture forms, and GA4 analytics. Custom builds with e-commerce, booking systems, or AI integrations start at ₹1,50,000. Local Indore agencies typically quote ₹40,000–₹2,00,000 for comparable scope — often without a published timeline or a codebase you own outright.",
  },
  {
    category: 'pricing',
    question: 'Indore mein website banane ka kharcha kitna hai?',
    answer:
      'FactoryJet mein website ₹29,999 se shuru hoti hai — 5 pages ki basic business site ke liye. Growth plan ₹80,000 mein 15 pages tak, blog CMS, aur GA4 analytics deta hai. Custom ecommerce ya web app ₹1,50,000 se shuru hota hai. Indore ke local agencies ₹40,000–₹2,00,000 tak charge karte hain. Hamari prices fixed hain — koi hidden charges nahi.',
  },
  {
    category: 'pricing',
    question: '7 din mein website ban sakti hai kya?',
    answer:
      'Haan, bilkul. FactoryJet ki 7-day delivery guarantee written contract mein hoti hai. Jab aap brand assets aur content ready karte ho, usi din se countdown shuru hota hai. Discovery, design, development, SEO, aur launch — sab 7 din mein. Agar deadline miss ho toh payment nahi dena padta.',
  },
  {
    category: 'pricing',
    question: 'How long does it take to build a website in Indore?',
    answer:
      'A standard FactoryJet build delivers in 7 days from kickoff to launch. Discovery and strategy take Day 1, Figma design runs Days 2–3, development and SEO run Days 4–6, and launch happens on Day 7. The 7-day clock starts when your brand assets and content are in our shared workspace. Most Indore agencies quote 4–12 weeks for the same scope.',
  },
  {
    category: 'pricing',
    question: 'What makes FactoryJet better value than a Indore web agency?',
    answer:
      "We are a specialised web engineering team — not a full-service agency with account managers, strategy departments, and expensive office space in Vijay Nagar or AB Road. The same Figma-first design process, the same Next.js engineering, the same Lighthouse audit before launch — at 60–70% lower cost. We have been building websites since 1999. You pay for the build, not our overhead.",
  },

  /* ── What's Included ── */
  {
    category: 'included',
    question: "What's included in every FactoryJet web design project?",
    answer:
      'Every project includes strategy, Figma design, Next.js development, basic copywriting, technical SEO setup (schema, meta, sitemap), GA4 analytics, and a 30-day post-launch support window. You receive the full codebase in your GitHub on launch day, the Figma design files, and a recorded handover walkthrough in Hindi or English.',
  },
  {
    category: 'included',
    question: 'Do you integrate Razorpay and UPI payment gateways?',
    answer:
      'Yes — Razorpay, PayU, and UPI QR code integrations are standard for e-commerce and booking projects. Indore businesses selling D2C products or collecting course fees benefit from one-tap checkout flows with Razorpay\'s Indian-optimised payment stack. We wire up webhooks for order confirmation emails and Shiprocket / Delhivery dispatch notifications.',
  },
  {
    category: 'included',
    question: 'Do you build WhatsApp chatbots for Indore businesses?',
    answer:
      'Yes. WhatsApp Business API automation is one of our most requested add-ons — particularly for Indore coaching institutes handling admissions, D2C brands following up on cart abandonment, and real estate developers qualifying leads. A WhatsApp chatbot typically captures 3–5x more enquiries than a contact form alone because buyers message the way they already communicate. See our WhatsApp automation service.',
  },
  {
    category: 'included',
    question: 'Can I update my website myself after launch?',
    answer:
      'Yes. Growth and Custom tier projects include a headless CMS integration (Sanity or Contentful) so your team can add blog posts, update course listings, change service descriptions, and manage team pages without touching code. We configure the CMS and walk you through it in the handover session. Starter tier can be set up the same way on request.',
  },

  /* ── Technical & SEO ── */
  {
    category: 'technical',
    question: 'Will my website rank on Google for Indore searches?',
    answer:
      'Technical SEO is built into every project: JSON-LD LocalBusiness schema with Indore areaServed markup, optimised title and meta templates targeting "web design Indore" and related queries, Core Web Vitals green on mobile, XML sitemap submitted to Google Search Console, and WebP images with descriptive alt text. Branded searches typically rank in 1–2 weeks. Competitive service + location queries like "coaching institute Indore" or "ecommerce website Indore" take 3–6 months on a new domain — but the technical foundation is fully in place from day one.',
  },
  {
    category: 'technical',
    question: 'What tech stack do you use, and why does it matter for Indore businesses?',
    answer:
      "We build on Next.js deployed to Cloudflare's global CDN. Next.js generates static pages that load under 1.5 seconds on Indian 4G — significantly faster than WordPress, which renders server-side and fires 40–60 database queries per page load. For Indore businesses competing on Google's Core Web Vitals ranking signals, that performance gap over a WordPress competitor is real and measurable. No shared hosting server crashes, no plugin conflicts.",
  },
  {
    category: 'technical',
    question: 'How does the site perform on mobile for Indore users?',
    answer:
      'Mobile-first is the default. Every build targets Lighthouse 90+ and green Core Web Vitals on mobile before launch. We design at 375px before desktop, serve WebP images via Cloudflare CDN with lazy loading, and build thumb-friendly tap targets throughout. Given that 75%+ of Indian web traffic is mobile — often on 4G with variable speeds — mobile performance is non-negotiable and tested on real devices before delivery.',
  },
  {
    category: 'technical',
    question: 'Do you set up Google Analytics and Search Console?',
    answer:
      'Yes — GA4 and Google Tag Manager are wired up before launch on every project. Key conversion events (form submissions, WhatsApp clicks, phone clicks, Razorpay checkout initiations) are configured from day one so you are tracking revenue-relevant actions. Search Console is verified and your sitemap submitted. We walk you through both tools in the handover session.',
  },

  /* ── Indore Local ── */
  {
    category: 'local',
    question: 'Which is the best web design company in Indore?',
    answer:
      "FactoryJet brings 25+ years of web engineering experience and 500+ businesses served — far exceeding the typical Indore agency's 2–5 years and 50–200 client portfolio. We build in Next.js (not WordPress), publish fixed prices from ₹29,999 before the first call, and guarantee 7-day delivery in writing. Our clients across Madhya Pradesh consistently report Lighthouse 100/100 scores and first-page Google rankings within 3–6 months. We let the work and the numbers make the case.",
  },
  {
    category: 'local',
    question: 'Do you build websites for coaching institutes in Indore?',
    answer:
      "Yes — Indore is Madhya Pradesh's coaching capital, with hundreds of IIT-JEE, NEET, UPSC, and CA coaching centres competing for students online. We build coaching institute websites with batch schedule pages, faculty profiles, result showcases, student testimonial sections, and admission enquiry forms with WhatsApp follow-up automation. Local SEO targets queries like 'best IIT coaching in Indore' and 'NEET coaching Vijay Nagar'.",
  },
  {
    category: 'local',
    question: 'Can you build ecommerce websites for Indore D2C and textile businesses?',
    answer:
      "Absolutely. Indore's D2C ecosystem is growing fast — FMCG brands, snack exporters, artificial jewellery makers, and fabric wholesalers in Scheme 54 and AB Road are all building direct sales channels. We build ecommerce sites on Shopify or custom Next.js with Razorpay checkout, Shiprocket dispatch, and WhatsApp order notifications. See our ecommerce development Indore service for full details.",
  },
  {
    category: 'local',
    question: 'Do you know Indore well enough to write relevant local copy?',
    answer:
      "Yes. We research Indore's business geography as part of every project — from Vijay Nagar's retail and coaching corridors and Scheme 78's IT Park to Pithampur's auto-component manufacturers and the D2C brands growing out of AB Road and Palasia. Local specificity in copy and LocalBusiness schema (areaServed) improves relevance for neighbourhood-level searches, which is where Indore SMBs win most of their inbound leads.",
  },
  {
    category: 'local',
    question: 'Do you visit our Indore office for meetings?',
    answer:
      'We work fully remotely — which is exactly how we keep your costs fixed and predictable without cutting any corners on quality. All discovery calls and design reviews happen over Google Meet or Zoom, in IST-friendly hours (10 AM–7 PM). We support both Hindi and English throughout the project. Most clients find the remote model faster and more flexible than waiting for in-person agency availability.',
  },
  {
    category: 'local',
    question: 'How does FactoryJet compare to Indore web design agencies?',
    answer:
      "Indore agencies typically charge ₹40,000–₹2,00,000 for a comparable project and take 4–12 weeks to deliver — often without publishing rates upfront. FactoryJet publishes all three pricing tiers (from ₹29,999) before you call, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress. You get a faster site, a shorter timeline, and a codebase you own outright — at a fixed, published price.",
  },
  {
    category: 'local',
    question: 'Website ke liye konsa platform better hai — Shopify ya custom website?',
    answer:
      "Yeh aapke business type par depend karta hai. Agar aap products sell karte ho aur jaldi launch chahiye, toh Shopify best hai — Razorpay, WhatsApp, aur Shiprocket integration ke saath. Agar aap coaching institute, service business, ya complex web app banana chahte ho, toh custom Next.js better hoga — zyada flexibility, faster loading, aur aapka khud ka codebase. FactoryJet dono banata hai — call karke discuss kar sakte ho.",
  },

  /* ── Support & Ownership ── */
  {
    category: 'support',
    question: 'Do I own the website after it is built?',
    answer:
      'Yes — 100%. The full Next.js codebase is delivered to your GitHub repository on launch day. You own every file, every Figma design asset, and all API credentials. You can take it to any developer or hosting provider at any time. No FactoryJet retainer required to keep your site running. No proprietary platform lock-in of any kind.',
  },
  {
    category: 'support',
    question: 'What support do you provide after launch?',
    answer:
      'Every project includes a 30-day post-launch support window covering bug fixes, minor adjustments, and launch questions at no extra cost. Beyond that, FactoryJet offers monthly maintenance plans from ₹4,999/month: up to 3 hours of development changes, priority same-day bug response, and a dedicated engineer who already knows your codebase. Maintenance clients also receive quarterly performance audits and Core Web Vitals checks.',
  },
  {
    category: 'support',
    question: 'What happens if something breaks after launch?',
    answer:
      'Within the 30-day support window, any bugs are fixed at no cost and typically within 24 hours. After the support window, a maintenance retainer covers priority response. Because your site is on Cloudflare Pages (static files, global CDN), the most common causes of downtime — server crashes, plugin conflicts, database failures — simply do not apply. The biggest category of failure is already off the table.',
  },

  // Money-query coverage, added 2026-06-11
  {
    category: 'pricing',
    question: 'Who is the best web design agency in Indore?',
    answer:
      'For small businesses, FactoryJet makes a strong case as the best web design company in Indore: custom websites in 7 days, 100/100 Google speed scores, and a fixed written price. Any website design company in Indore you compare should pass three checks: live websites you can test, speed scores you can verify, and a price that does not grow mid-project. That is the honest way to pick the best website design company in Indore.',
  },
  {
    category: 'pricing',
    question: 'Should I hire web designer in Indore or use an agency?',
    answer:
      'A freelancer can be right for a tiny one-page job. For a business website, a small senior team is usually faster and safer: design, code, SEO, and support in one place, at a fixed price. If you do hire web designer in Indore directly, agree the scope and price in writing first.',
  },
];

const INDORE_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Indore Agency' },
  { label: 'Freelancer' },
  { label: 'Template (Wix/WordPress)' },
] as const;

const INDORE_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: ['Get a Quote', '₹40,000–₹2,00,000', '₹10,000–₹60,000', '₹0–₹10,000 (you build it)'],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '4–12 weeks', '3–10 weeks (unreliable)', '1–2 weeks (you build it)'],
  },
  {
    feature: 'Custom Figma design',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Next.js (not WordPress)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on mobile',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'GA4 + GTM wired up',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: 'Transparent, fixed pricing',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="tp" kind="yes" />,
    ],
  },
  {
    feature: 'Full codebase to your GitHub',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
  {
    feature: '7-day delivery guarantee',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="tp" kind="no" />,
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function IndoreWebDesignPage() {
  return (
    <>
      <Script
        id="indore-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="indore-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'Web Design', url: 'https://factoryjet.com/web-design' },
          { name: 'Indore', url: 'https://factoryjet.com/web-design/indore' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        {/*
          Design: Aurora orb background — orange glow on cream (#FAFAF7).
          Glassmorphism trust badges. Browser mockup right slot.
          H1 exact-match: "Web Design Company in Indore"
        */}
        <Hero
          eyebrow="WEB DESIGN · INDORE"
          headline="Web Design Company in Indore"
          lead="Indore is Madhya Pradesh's commercial capital — home to 65,000+ SMEs, 500+ startups, a booming D2C ecosystem, and IT parks at Scheme 78 and Bengali Square that are attracting serious tech investment. From coaching institutes in Vijay Nagar to FMCG exporters on AB Road to manufacturers in Pithampur, Indore's businesses are competing for customers online every day. FactoryJet builds high-performance websites from ₹29,999 — Figma-designed, Next.js-built, 7-day delivery guarantee, your codebase delivered in full."
          primaryCta={{ label: 'Get Free Indore Website Quote', modal: true, region: 'in' }}
          secondaryCta={{ label: 'View Pricing', href: '#pricing' }}
          trustItems={[
            '7-Day Delivery',
            '500+ Businesses Served',
          ]}
          rightSlot={<HeroBrowserMockup />}
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, including growing brands from Madhya Pradesh" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        {/*
          Stats bento: Dark charcoal grid, orange accent numbers.
          Maxi stats style — 2025 bento grid trend.
        */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 25 years of web engineering. One 7-day guarantee."
        />

        {/* ── 4. CITY CONTEXT ──────────────────────────────────────────────── */}
        {/*
          E-E-A-T local signal section. Indore market data, sourced stats.
          References: Swachh Survekshan, IT exports, startup ecosystem.
        */}
        <CityContextSection
          eyebrow="INDORE MARKET"
          headline="Why Your Indore Web Presence Is a Business Asset — Not a Line Item"
          leadParagraphs={[
            "Indore is not just Madhya Pradesh's largest city — it is Central India's fastest-growing commercial hub. With 65,000+ registered SMEs, an IT sector generating ₹4,038 crore in software exports in FY 2024–25, and a startup ecosystem anchored by IIM Indore and IIT Indore, the city punches well above its population weight. Scheme 78 IT Park and Bengali Square are drawing investment from mid-sized tech firms and startups that previously only considered Pune or Hyderabad. The city has won the Swachh Survekshan award for the cleanest city in India seven consecutive times — a detail that speaks to the organised, business-friendly civic environment that attracts serious entrepreneurs.",
            "Indore's business diversity creates a wide range of digital requirements: a Vijay Nagar coaching institute competes for NEET and IIT-JEE students on Google with the same urgency as a Bandra D2C brand competes for Shopify orders. An AB Road textile exporter needs a B2B website that projects quality and certifications to international buyers; a Palasia restaurant chain needs a mobile-first site that loads in under two seconds during peak dinner-time traffic. A Scheme 78 SaaS startup needs a conversion-optimised marketing site that matches the credibility of their Bengaluru or Delhi peers. FactoryJet builds for all of these profiles — because we start with the buyer in mind, not the template.",
            "The businesses winning in Indore's search results are not necessarily the largest — they are the ones with the fastest, best-structured web presence. A 1-second improvement in page load time increases conversions by 7%. A properly built FAQ section indexed by Google can double inbound enquiry volume. These are not abstract metrics — they are the difference between a website that earns its cost in 30 days and one that sits unused on a business card.",
          ]}
          stats={[
            {
              value: '65,000+',
              label: "Registered SMEs in Indore — Central India's densest business concentration",
              sourceUrl: 'https://msme.gov.in/',
              sourceLabel: 'MSME Ministry India',
            },
            {
              value: '₹4,038 Cr',
              label: "Indore's IT and software exports in FY 2024–25 — up 7% year-on-year",
              sourceUrl: 'https://nasscom.in/',
              sourceLabel: 'NASSCOM',
            },
            {
              value: '500+',
              label: 'Active startups in Indore — supported by IIM Indore, IIT Indore, and TiE Indore',
              sourceUrl: 'https://mp.tie.org/',
              sourceLabel: 'TiE Indore MP',
            },
          ]}
        />

        {/* ── 5. SERVICE EXPLANATION ───────────────────────────────────────── */}
        {/*
          Keyword-rich: "web design Indore", "website development Indore",
          "ecommerce website Indore", "Shopify Indore", "coaching website Indore"
        */}
        <ServiceExplanation
          eyebrow="WEB DESIGN · INDORE"
          headline="What 'Web Design' Actually Means for an Indore Business"
          lead="Indore's economy spans coaching institutes competing for student enrolments, D2C brands selling direct-to-consumer, B2B manufacturers selling to international buyers, and IT startups pitching to global clients. Each needs a very different web strategy. FactoryJet builds for all of them."
          body={
            <>
              <p>
                For Indore&apos;s coaching institutes, EdTech platforms, and professional education
                businesses — concentrated in Vijay Nagar, Navlakha, and South Tukoganj — a website
                needs to convert search intent into enquiry form fills and WhatsApp messages before
                a student walks through the door. That means fast mobile load times, batch schedule
                pages, faculty credentialing, result showcases, and automated follow-up flows that
                capture leads at 11 PM as effectively as at 11 AM.
              </p>
              <p>
                For Indore&apos;s D2C brands, FMCG exporters, textile wholesalers, and retail
                businesses — operating from AB Road, Scheme 54, and Palasia — the website is the
                primary sales channel. Sub-1.5-second load times on 4G, above-the-fold product
                display, Razorpay one-tap checkout, and Shiprocket dispatch notifications. Mobile-
                first, every time, because 75%+ of Indore&apos;s consumer web traffic arrives on mobile.
              </p>
              <p>
                For Indore&apos;s Pithampur manufacturers, IT companies in Scheme 78, and B2B service
                businesses — the website is the first due-diligence filter. International buyers and
                enterprise procurement teams research vendors for weeks before making contact. The
                site needs to project technical authority, display certifications, and provide a
                frictionless RFQ or demo-request flow. FactoryJet builds these with authority-first
                architecture, product catalog systems, and lead-capture designed for longer sales
                cycles. Every FactoryJet Indore project covers discovery, Figma prototyping, Next.js
                development, SEO, GA4, and a 30-day support window — with a codebase you own outright.
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
                  Three buyer types. One engineering standard.
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100">
                {[
                  {
                    type: 'Education / Coaching',
                    need: 'Enrolments + WhatsApp automation',
                    area: 'Vijay Nagar · Navlakha · South Tukoganj',
                    colour: '#F05A28',
                  },
                  {
                    type: 'D2C / Ecommerce',
                    need: 'Speed + mobile + Razorpay checkout',
                    area: 'AB Road · Scheme 54 · Palasia',
                    colour: '#0F0F12',
                  },
                  {
                    type: 'B2B / Manufacturing',
                    need: 'Authority + RFQ + export credentials',
                    area: 'Pithampur · Scheme 78 · Sanwer Road',
                    colour: '#F05A28',
                  },
                ].map((row) => (
                  <div key={row.type} className="px-7 py-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="h-2 w-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: row.colour }}
                        aria-hidden="true"
                      />
                      <p
                        className="font-fj-body font-semibold text-fj-ink"
                        style={{ fontSize: '0.9375rem' }}
                      >
                        {row.type}
                      </p>
                    </div>
                    <p
                      className="font-fj-body text-fj-neutral-500 mb-1"
                      style={{ fontSize: '0.875rem' }}
                    >
                      {row.need}
                    </p>
                    <p
                      className="font-fj-mono font-medium text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}
                    >
                      {row.area}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  Same engineering quality. Strategy tailored to your Indore buyer.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 6. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        {/*
          Comparison section. Honest, not trash-talking. Facts only.
          Charcoal background, orange checkmarks, contrast with Indore local agencies.
        */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="Why Indore Businesses Choose FactoryJet Over Local Agencies"
          lead="Indore web agencies typically charge ₹40,000–₹2,00,000 for a comparable project and take 4–12 weeks to deliver — without publishing their rates or timeline upfront. FactoryJet gives you a fixed-price quote before you commit, guarantees 7-day delivery in writing, and builds in Next.js rather than WordPress — faster load times, no monthly plugin overhead, a codebase you own outright. All at a fixed, published price for the same scope."
          pillars={[
            {
              icon: '⚡',
              title: '7-day delivery. In writing. Or you do not pay.',
              body: "Indore's market moves fast — whether you are launching a new coaching batch in June or opening a Shopify store before Diwali. Waiting 10 weeks for an agency to deliver a website you briefed in September is not a plan — it is lost revenue. FactoryJet delivers in 7 days, with the guarantee written into the project agreement. We have delivered on time on 97% of all projects since 2005.",
            },
            {
              icon: '🏗️',
              title: 'Next.js, not WordPress. The performance gap is real.',
              body: "WordPress loads server-side PHP and fires 40–60 database queries per page load. Next.js generates static files served from Cloudflare CDN nodes in Mumbai, Singapore, and 300+ other locations. The result: sub-1.5s load times on Indian 4G networks versus 4–6s for a typical WordPress site. For Indore businesses competing on Google's Core Web Vitals signals — whether you are a coaching institute or a D2C brand — that gap directly affects your search rankings.",
            },
            {
              icon: '📋',
              title: 'Fixed price. Published before the first call.',
              body: "We give you a fixed-price quote before you commit. No discovery fees, no 'it depends' quotes that take three weeks to arrive. Fixed price, fixed scope, agreed upfront. No surprise invoices after launch. No retainer required to keep your site running. No proprietary platform lock-in.",
            },
          ]}
        />

        {/* ── 7. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="How We Build Your Indore Website in 7 Days"
          lead="Buyer strategy agreed before design. Mobile approval before development. SEO and analytics wired before launch. Hindi and English support throughout."
          stages={INDORE_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 DAYS · NEXT.JS + CLOUDFLARE · GA4 STANDARD · ZERO DOWNTIME LAUNCH"
        />

        {/* ── 8. PORTFOLIO ─────────────────────────────────────────────────── */}
        {/*
          3 real FactoryJet clients — used on Mumbai page, contextualised for Indore.
          Plus anonymised Indore-specific case studies in the copy below.
        */}
        <PortfolioShowcase
          eyebrow="RECENT WORK"
          headline="What businesses look like after FactoryJet."
          cards={[
            {
              industry: 'Interior Décor · Web Design',
              title: 'Belle Maison — Mumbai',
              description:
                "Belle Maison is a premium interior décor brand. FactoryJet built their v2 website on Next.js with a Figma-designed product showcase, WhatsApp inquiry flow, and SEO targeting high-value design search queries. Lighthouse 95+ on mobile before launch. Similar work available for Indore home décor and lifestyle brands.",
              imageSrc: '/images/portfolio/belle-maison.webp',
              stat1: 'Lighthouse 95+',
              stat2: 'Next.js · WhatsApp',
            },
            {
              industry: 'B2B · Commerceflo',
              title: 'Bombay Petals — Mumbai',
              description:
                'Bombay Petals is a B2B artificial plants and décor supplier. FactoryJet built a dual-storefront solution — B2B wholesale portal with volume pricing and a D2C consumer store — with Razorpay + Shiprocket integrated. ₹1.5 Cr in sales within 12 months of launch. The same dual-channel architecture is available for Indore textile and FMCG businesses.',
              imageSrc: '/images/portfolio/bombay-petals.webp',
              stat1: '₹1.5 Cr in Y1',
              stat2: '7-day delivery',
            },
            {
              industry: 'MEP / BIM Consulting · SEO',
              title: 'Formative Concepts — Pune',
              description:
                'Formative Concepts is a B2B engineering consulting firm. FactoryJet rebuilt their website on Next.js with authority-first architecture — credentials display, project portfolio, and technical SEO targeting high-value engineering queries. The same B2B-authority approach applies to Indore manufacturers and IT services companies targeting international clients.',
              imageSrc: '/images/portfolio/formative-concepts.webp',
              stat1: 'B2B authority site',
              stat2: 'SEO + Next.js',
            },
          ]}
          ctaHref="/portfolio"
          ctaLabel="View full portfolio"
        />

        {/* ── 9. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Indore Agency vs. Freelancer vs. Template Builder"
          lead="Not all web design options in Indore deliver the same output. Here is the honest comparison — scope, price, timeline, and what you own after launch."
          pullQuote={{
            stat: '₹29,999',
            caption:
              'starting price — same Figma-first design, Next.js engineering, technical SEO, and Lighthouse audit as a ₹2,00,000 Indore agency project.',
          }}
          columns={INDORE_COMPARISON_COLUMNS}
          rows={INDORE_COMPARISON_ROWS}
          footer="Prices reflect typical Indore market ranges as of 2026. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 10. INDUSTRIES ───────────────────────────────────────────────── */}
        {/*
          E-E-A-T local signal — CRITICAL for ranking.
          Very specific to Indore industries. Never generic.
          References: Pithampur, Scheme 78, Vijay Nagar, AB Road, coaching capital.
        */}
        <IndustriesGrid variant="cards"
          eyebrow="INDORE × WEB DESIGN"
          headline="Web Design for Indore's Key Industries"
          lead="From Vijay Nagar coaching institutes to Pithampur manufacturers to Scheme 78 IT startups — Indore's economy spans industries with very different digital requirements. FactoryJet has built for each of them."
          sectors={[
            {
              name: 'D2C Brands & FMCG',
              description:
                "Indore is Central India's fastest-growing D2C hub — home to FMCG exporters, snack brands, artificial jewellery makers, spice exporters, and food processors that are building direct consumer channels. These businesses need Shopify or custom ecommerce sites with Razorpay one-tap checkout, Shiprocket dispatch automation, and WhatsApp order notifications. Mobile-first is non-negotiable: 75% of D2C traffic arrives on mobile 4G. We also work with Mumbai and Delhi buyers who source from Indore — your website is your pitch to them.",
              example:
                'FMCG exporters on AB Road, snack and spice brands building D2C channels, artificial jewellery wholesalers in Scheme 54, and food processing businesses on Sanwer Road.',
            },
            {
              name: 'Textile & Garments',
              description:
                "Indore has a long tradition in textile trading and garment manufacturing — with wholesale fabric markets in Scheme 54, boutiques across MG Road and Vijay Nagar, and fabric exporters supplying D2C fashion brands nationally. Ecommerce for fabric wholesalers requires B2B catalog architecture with bulk pricing, GST invoice generation, and a fast WhatsApp inquiry flow. Boutique D2C sites need fast product photography display, size guide pages, and Razorpay checkout. We build both.",
              example:
                'Wholesale fabric exporters in Scheme 54, boutiques in MG Road and Vijay Nagar, garment manufacturers supplying national D2C brands, and handloom and silk traders.',
            },
            {
              name: 'Manufacturing & Engineering',
              description:
                "Pithampur — Indore's industrial satellite 30 km away — is one of Central India's largest industrial hubs, housing auto-component manufacturers, pharmaceutical bulk-drug producers, chemical plants, and engineering goods exporters. These businesses need websites that project technical authority to international B2B procurement teams: ISO and IATF certifications display, manufacturing capacity specifications, product data sheets, and a frictionless RFQ system. Sanwer Road Industrial Area and AKVN Dewas also have a growing cluster of SME manufacturers needing digital upgrades.",
              example:
                'Auto-component manufacturers in Pithampur, engineering goods exporters on Sanwer Road, pharmaceutical bulk drug producers, and chemical manufacturers targeting international buyers.',
            },
            {
              name: 'EdTech & Coaching Institutes',
              description:
                "Indore is Madhya Pradesh's coaching capital — with hundreds of IIT-JEE, NEET, UPSC, CA, and MBA coaching centres concentrated in Vijay Nagar, Navlakha, and Bhawarkua. Digital enrolment has overtaken walk-ins as the primary lead source: parents and students search Google before they visit. Coaching institute websites need batch schedule pages, faculty profiles, past result showcases, and WhatsApp enquiry automation that captures leads at 11 PM as effectively as at 11 AM. Local SEO targets queries like 'best NEET coaching Vijay Nagar Indore'.",
              example:
                'IIT-JEE and NEET coaching centres in Vijay Nagar, UPSC and CA coaching institutes, MBA prep centres, school tuition franchises, and edtech startups building online course platforms.',
            },
            {
              name: 'Real Estate & Construction',
              description:
                "Indore's rapid urbanisation — driven by Scheme 54, Scheme 78, Super Corridor, and Nipania — is fuelling serious real estate and construction activity. Developers, brokers, and construction firms need websites with project gallery architecture, floor plan downloads, RERA registration display, and lead-capture forms that route enquiries to the right sales manager. Local SEO targeting Scheme 54 new projects or '2BHK flats in Bicholi Hapsi' is built into every real estate site we deliver.",
              example:
                'Residential developers in Scheme 54 and Nipania, commercial property brokers on AB Road, construction firms active in the Super Corridor, and interior design firms serving Indore\'s growing housing market.',
            },
            {
              name: 'Restaurants & Food Businesses',
              description:
                "Indore is famous across India for its street food culture — from Sarafa Bazaar to Chappan Dukan — and this has translated into a thriving restaurant, cloud kitchen, and packaged food business ecosystem. Restaurant websites need fast-loading menu pages, Zomato and Swiggy deep-link CTAs, and a Google Maps integration that shows up on 'restaurants near me' searches. Packaged food and snack brands need a Shopify store with pan-India Shiprocket delivery and WhatsApp broadcast capability.",
              example:
                'Restaurant chains serving Vijay Nagar and Palasia, cloud kitchens, packaged snack brands building D2C channels, sweet shops shipping nationally, and food franchise businesses.',
            },
            {
              name: 'IT Companies & Startups',
              description:
                "Scheme 78 IT Park and the Super Corridor are attracting a growing cluster of software companies, SaaS startups, and digital agencies — supported by IIM Indore, IIT Indore, and IIST alumni. For IT companies and startups, the website is a sales tool, a talent magnet, and a credibility signal for enterprise clients. We build SaaS marketing sites, enterprise IT services sites, and product landing pages with Lighthouse 100/100 performance — because Indore's IT founders know the difference between a fast site and a slow one.",
              example:
                'SaaS startups in Scheme 78, IT services companies targeting US and European clients, software product companies, and digital marketing agencies in the Bengali Square cluster.',
            },
            {
              name: 'Healthcare & Clinics',
              description:
                "Indore's healthcare sector is anchored by major hospital groups — Bombay Hospital, CHL Hospital, Choithram Hospital, and Medanta Indore — and supported by hundreds of specialist clinics, diagnostic centres, and wellness businesses. Clinic websites need appointment booking integrations, doctor profile pages with specialisations, Google Maps presence, and local SEO targeting 'dermatologist in Vijay Nagar' or 'orthopaedic surgeon Indore' searches. Healthcare is one of the highest-converting local SEO categories — the right site structure generates a measurable uptick in appointment bookings within 60 days.",
              example:
                'Specialist clinics in Vijay Nagar and Bhawarkua, diagnostic chains, dental practices, physiotherapy and wellness centres, and healthcare SaaS platforms built by Indore IT founders.',
            },
          ]}
        />

        {/* ── 11. AREAS WE SERVE ───────────────────────────────────────────── */}
        {/*
          Local SEO signal: explicit list of Indore localities.
          Rendered as part of CityContextSection or custom inline section.
          This text is also picked up by Google's LocalBusiness areaServed signals.
        */}
        <section className="py-14 md:py-20 bg-fj-cream">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p
              className="font-fj-mono font-medium uppercase text-fj-orange mb-4"
              style={{ fontSize: '11px', letterSpacing: '0.14em' }}
            >
              AREAS WE SERVE
            </p>
            <h2
              className="fj-display font-semibold text-fj-ink mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.02em' }}
            >
              Web Design Across All of Indore
            </h2>
            <p className="font-fj-body text-fj-neutral-500 mb-10 max-w-2xl" style={{ fontSize: '1rem' }}>
              We serve businesses across every locality in Indore — from the commercial corridors of
              Vijay Nagar and AB Road to the industrial clusters of Pithampur and Sanwer Road. Remote
              delivery means zero compromise on speed, quality, or price wherever you are based.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                'Vijay Nagar',
                'AB Road',
                'Palasia',
                'Scheme 54',
                'Scheme 78',
                'Rau',
                'Dewas Naka',
                'Bengali Square',
                'MG Road',
                'South Tukoganj',
                'Rajwada',
                'Bijalpur',
                'Bicholi Hapsi',
                'Bhawarkua',
                'Kanadia Road',
                'Nipania',
                'Super Corridor',
                'Sanwer Road Industrial Area',
                'Pithampur',
                'Mhow',
                'Navlakha',
                'Bhuri Tekri',
                'Lasudia',
                'Tilak Nagar',
                'Annapurna Road',
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-fj-neutral-200 bg-white px-4 py-1.5 font-fj-body text-fj-neutral-600"
                  style={{ fontSize: '0.875rem' }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 12. PLATFORM & TECHNOLOGY ────────────────────────────────────── */}
        {/*
          Platform-agnostic positioning. WordPress, Next.js, Shopify, Webflow,
          Custom dev, Wix/Squarespace migration coverage.
          Inserted before Pricing so visitors understand what they are paying for.
        */}
        <section className="py-14 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p
              className="font-fj-mono font-medium uppercase text-fj-orange mb-4"
              style={{ fontSize: '11px', letterSpacing: '0.14em' }}
            >
              PLATFORM & TECHNOLOGY
            </p>
            <h2
              className="fj-display font-semibold text-fj-ink mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em' }}
            >
              We Recommend the Right Platform for Your Business — Not the Easiest One for Us
            </h2>
            <p className="font-fj-body text-fj-neutral-500 mb-12 max-w-2xl" style={{ fontSize: '1rem' }}>
              Most Indore web agencies build everything on WordPress because it is the platform they know.
              FactoryJet is platform-agnostic — we evaluate your business goals, traffic expectations,
              and team capabilities before recommending a tech stack. Here is how we think about each option.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Next.js */}
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#0F0F12' }}
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold" style={{ fontSize: '0.75rem' }}>NX</span>
                  </div>
                  <div>
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '1rem' }}>Next.js</p>
                    <p
                      className="font-fj-mono font-medium text-fj-orange"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.08em' }}
                    >
                      OUR DEFAULT RECOMMENDATION
                    </p>
                  </div>
                </div>
                <p className="font-fj-body text-fj-neutral-500" style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>
                  High-performance React framework deployed to Cloudflare CDN. Static pages load under
                  1.5 seconds on Indian 4G — significantly faster than server-rendered alternatives.
                  Lighthouse 100/100 is achievable by default. No monthly plugin overhead. Full codebase
                  ownership. Our top pick for businesses where speed, SEO, and performance matter.
                </p>
                <p
                  className="font-fj-mono font-medium text-fj-neutral-400 mt-auto"
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}
                >
                  BEST FOR: IT startups · B2B manufacturers · Marketing sites · SaaS
                </p>
              </div>

              {/* WordPress */}
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#21759B' }}
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold" style={{ fontSize: '0.75rem' }}>WP</span>
                  </div>
                  <div>
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '1rem' }}>WordPress</p>
                    <p
                      className="font-fj-mono font-medium text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.08em' }}
                    >
                      CUSTOM THEMES · NOT TEMPLATES
                    </p>
                  </div>
                </div>
                <p className="font-fj-body text-fj-neutral-500" style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>
                  The most widely used CMS globally — and for good reason. WordPress is excellent for
                  content-heavy sites, blogs, and service businesses where your team wants to manage
                  pages without developer help. FactoryJet builds custom WordPress themes from scratch —
                  no pre-packaged templates, no Elementor drag-and-drop bloat that tanks your performance.
                  We tune WordPress installs to achieve Core Web Vitals green before handover.
                </p>
                <p
                  className="font-fj-mono font-medium text-fj-neutral-400 mt-auto"
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}
                >
                  BEST FOR: Content sites · Blogs · Service businesses · Editorial teams
                </p>
              </div>

              {/* Shopify */}
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#96BF48' }}
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold" style={{ fontSize: '0.75rem' }}>SH</span>
                  </div>
                  <div>
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '1rem' }}>Shopify</p>
                    <p
                      className="font-fj-mono font-medium text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.08em' }}
                    >
                      D2C & RETAIL ECOMMERCE
                    </p>
                  </div>
                </div>
                <p className="font-fj-body text-fj-neutral-500" style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>
                  For D2C and retail businesses that want to sell online quickly, Shopify is the
                  fastest path to a reliable store. Razorpay, PhonePe, UPI, and Shiprocket all
                  integrate natively. Inventory management, abandoned cart recovery, and discount
                  logic are built in. FactoryJet builds Shopify stores with custom Liquid themes —
                  not off-the-shelf templates — and wires up WhatsApp order notifications and
                  Shiprocket dispatch automation from day one.
                </p>
                <p
                  className="font-fj-mono font-medium text-fj-neutral-400 mt-auto"
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}
                >
                  BEST FOR: D2C brands · Retail stores · FMCG exporters · Jewellery
                </p>
              </div>

              {/* Webflow */}
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-cream p-7 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#4353FF' }}
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold" style={{ fontSize: '0.75rem' }}>WF</span>
                  </div>
                  <div>
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '1rem' }}>Webflow</p>
                    <p
                      className="font-fj-mono font-medium text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.08em' }}
                    >
                      VISUAL CMS WITH DESIGN CONTROL
                    </p>
                  </div>
                </div>
                <p className="font-fj-body text-fj-neutral-500" style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>
                  Webflow suits businesses that need a visually flexible CMS — where the marketing or
                  design team wants to control layout and content without writing code. It delivers
                  strong performance out of the box and a clean CMS editor. FactoryJet builds custom
                  Webflow projects when the use case calls for it — typically for design agencies,
                  creative studios, and marketing-led businesses that need frequent visual updates.
                </p>
                <p
                  className="font-fj-mono font-medium text-fj-neutral-400 mt-auto"
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}
                >
                  BEST FOR: Creative studios · Design agencies · Marketing-led businesses
                </p>
              </div>

              {/* Custom Development */}
              <div className="rounded-2xl border border-fj-orange/20 bg-fj-cream p-7 flex flex-col gap-4" style={{ borderColor: 'rgba(240, 90, 40, 0.2)' }}>
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F05A28' }}
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold" style={{ fontSize: '0.75rem' }}>{'{}'}</span>
                  </div>
                  <div>
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '1rem' }}>Custom Development</p>
                    <p
                      className="font-fj-mono font-medium text-fj-orange"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.08em' }}
                    >
                      WHEN NO PLATFORM FITS
                    </p>
                  </div>
                </div>
                <p className="font-fj-body text-fj-neutral-500" style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>
                  Some businesses have requirements that no off-the-shelf platform can handle cleanly —
                  complex booking engines, multi-tenant portals, B2B procurement systems, or custom
                  workflow automation. FactoryJet builds fully bespoke solutions in Next.js with
                  PostgreSQL, Firebase, or Supabase backends. Scope and architecture defined per
                  project brief after a technical discovery session.
                </p>
                <p
                  className="font-fj-mono font-medium text-fj-neutral-400 mt-auto"
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}
                >
                  BEST FOR: SaaS products · Booking portals · B2B platforms · Web apps
                </p>
              </div>

              {/* Wix / Squarespace migration */}
              <div className="rounded-2xl border border-fj-neutral-200 bg-fj-neutral-50 p-7 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#0F0F12', opacity: 0.6 }}
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold" style={{ fontSize: '0.75rem' }}>→</span>
                  </div>
                  <div>
                    <p className="font-fj-body font-semibold text-fj-ink" style={{ fontSize: '1rem' }}>Wix / Squarespace</p>
                    <p
                      className="font-fj-mono font-medium text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.08em' }}
                    >
                      WE MIGRATE YOU OFF THESE
                    </p>
                  </div>
                </div>
                <p className="font-fj-body text-fj-neutral-500" style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>
                  Wix and Squarespace are good starting points — but they have a ceiling. Performance
                  is constrained by the platform, SEO customisation is limited, and you can never
                  export your full site. Many Indore businesses outgrow them within 12–18 months.
                  FactoryJet migrates businesses off Wix and Squarespace to custom Next.js or
                  WordPress builds — with zero downtime, full SEO redirect mapping, and no loss of
                  Google rankings in the transition.
                </p>
                <p
                  className="font-fj-mono font-medium text-fj-neutral-400 mt-auto"
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}
                >
                  WE DO: Platform migrations · SEO redirect mapping · Zero-downtime cutover
                </p>
              </div>

            </div>

            <div className="mt-10 rounded-2xl border border-fj-neutral-200 bg-fj-cream px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="font-fj-body text-fj-neutral-600" style={{ fontSize: '0.9375rem' }}>
                Not sure which platform is right for your Indore business? We will tell you honestly
                on the discovery call — even if the answer is "stick with what you have."
              </p>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-fj-body font-semibold text-white flex-shrink-0"
                style={{ backgroundColor: '#F05A28', fontSize: '0.9375rem' }}
              >
                See Pricing
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <GetFreeQuoteCTA />
        {/* ── 13. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What India's founders say after we build their site"
        />

        {/* ── 14. FAQ ──────────────────────────────────────────────────────── */}
        {/*
          20 FAQs: Indore-specific, conversational, Hinglish where appropriate.
          FAQPage schema injected at top of page.
          Linear Minimal sidebar + native details/summary accordion (zero JS).
        */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Common Questions from Indore Businesses"
          lead="The questions we answer on every Indore discovery call — answered here, without the runaround. Hindi aur English dono mein."
          categories={INDORE_FAQ_CATEGORIES}
          items={INDORE_FAQ_ITEMS}
        />

        {/* ── 15. FINAL CTA (DARK) ─────────────────────────────────────────── */}
        {/*
          Full-width orange gradient section, white text, white CTA button.
          Headline: exact spec from brief.
        */}
        <FinalCTA
          variant="dark"
          eyebrow="READY TO START"
          headline="Ready to Get Indore's Fastest Website? Let's Build It in 7 Days."
          sub="Join 500+ businesses who chose FactoryJet for professional websites that actually perform. Indore's business community is growing fast — coaching institutes, D2C brands, IT startups, and manufacturers are all competing online. Every week without a high-performing website is ground you are giving to a competitor who showed up with a better one. Get your free quote today — no obligation, response within 4 hours."
          primaryCta={{ label: 'Get Free Indore Website Quote', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
          objectionHandler="Fixed price. 7-day delivery. Next.js. Your full codebase delivered on launch day."
        />

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
