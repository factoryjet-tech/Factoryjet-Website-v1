import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   SEO / Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'WordPress Development India | From ₹29,999 | FactoryJet',
  description:
    'Professional WordPress development in India from ₹29,999. Custom themes, WooCommerce, speed optimization & SEO. 7-day delivery. 500+ websites built.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'WordPress Development India | Custom WordPress Sites From ₹29,999 | FactoryJet',
    description:
      'Custom WordPress development for Indian SMBs. WooCommerce with Razorpay + GST. Speed optimization. SEO-ready. 7-day delivery. From ₹29,999.',
    url: 'https://factoryjet.com/wordpress-development',
    images: [
      {
        url: 'https://factoryjet.com/images/services/card-wordpress.webp',
        width: 1200,
        height: 630,
        alt: 'FactoryJet WordPress Development Services India',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress Development India | Custom WordPress Sites | FactoryJet',
    description:
      'Custom WordPress development for Indian SMBs. WooCommerce + Razorpay + GST built in. 7-day delivery. From ₹29,999.',
    images: ['https://factoryjet.com/images/services/card-wordpress.webp'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/wordpress-development',
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
   JSON-LD Schema
───────────────────────────────────────────────────────────────────────────── */

const WP_faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does WordPress development cost in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "FactoryJet's WordPress development starts at ₹29,999 for a custom theme on an existing WordPress install. A complete business site — custom theme, 5–8 pages, contact forms, SEO setup, speed optimization, and launch — runs ₹80,000. WooCommerce stores with Razorpay, GST invoicing, and Shiprocket integration start at ₹1,50,000. All prices are 60–70% lower than comparable Indian digital agencies.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a WordPress website in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A custom WordPress theme applied to an existing site takes 5–7 days. A complete business site build from scratch — design, development, pages, SEO, and launch — takes 7–14 days. WooCommerce stores with Razorpay, GST invoicing, and Shiprocket integration take 14–21 days. FactoryJet delivers the fastest professional WordPress builds in India for standard projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I choose WordPress over Next.js or Shopify?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Choose WordPress when: you need a CMS your team can update without a developer, you want a blog or content-heavy site, you need a WooCommerce store with full flexibility, or your budget is ₹30,000–₹1,50,000. Choose Next.js when: you need sub-1-second performance, custom web application features, or a headless CMS setup. Choose Shopify when: you are building a pure D2C e-commerce brand and want managed infrastructure. We help you choose the right platform during discovery — we won't recommend WordPress just because it's popular.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you integrate Razorpay and GST in a WooCommerce store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — every WooCommerce store we build includes Razorpay integration covering UPI, cards, net banking, EMI, Paytm, PhonePe, and BNPL. GST-compliant invoices are auto-generated at order placement with GSTIN capture for B2B buyers and HSN code mapping. Shiprocket is integrated for access to 15+ Indian courier partners with real-time rate calculation at checkout. COD (Cash on Delivery) is configured with optional prepaid discount incentives.",
      },
    },
    {
      '@type': 'Question',
      name: 'My WordPress site is slow — can you fix it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. WordPress speed optimization is one of our most common engagements in India. Most Indian WordPress sites load in 6–12 seconds because of cheap shared hosting, 40–80 unoptimized plugins, uncompressed images, and no caching. FactoryJet's WordPress speed optimization service: migrates you to Cloudflare or AWS LightSail, implements Redis object caching, converts images to WebP, dequeues unused scripts and styles, and delivers a Lighthouse 90+ score. Average improvement: 4–6× faster load time.",
      },
    },
  ],
};

const WP_serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'WordPress Development Services India',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    telephone: '+919699977699',
    email: 'connect@factoryjet.com',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  serviceType: [
    'WordPress Development',
    'WooCommerce Development',
    'WordPress Speed Optimization',
    'WordPress Theme Development',
    'WordPress Plugin Development',
  ],
  description:
    'Custom WordPress and WooCommerce development for Indian SMBs. Razorpay, UPI, GST invoicing, Shiprocket integrated. 7-day delivery. From ₹29,999.',
  offers: [
    {
      '@type': 'Offer',
      name: 'WordPress Starter Site',
      price: '29999',
      priceCurrency: 'INR',
      description:
        'Custom WordPress theme with up to 5 pages, contact form, basic SEO, and launch.',
    },
    {
      '@type': 'Offer',
      name: 'WordPress Growth Site',
      price: '80000',
      priceCurrency: 'INR',
      description:
        'Complete WordPress business site — custom theme, 8 pages, speed optimization, technical SEO, GA4, and launch.',
    },
    {
      '@type': 'Offer',
      name: 'WooCommerce Store',
      price: '150000',
      priceCurrency: 'INR',
      description:
        'Full WooCommerce store with Razorpay, UPI, GST invoicing, Shiprocket, and custom theme.',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Section data
───────────────────────────────────────────────────────────────────────────── */

const WP_SERVICES = [
  {
    name: 'Custom WordPress Theme Development',
    description:
      'A WordPress theme built from scratch in Figma and coded as a clean, block-editor-compatible theme — no page builder bloat, no Elementor dependency, no 200KB CSS framework just to style a paragraph. Mobile-first, Lighthouse 90+ on delivery, fully editable from the WordPress admin.',
    example: 'Custom themes load 4–6× faster than Elementor-built pages with the same visual design.',
    linkLabel: 'See theme examples',
    linkHref: '/portfolio',
  },
  {
    name: 'WooCommerce Store Development',
    description:
      'Complete WooCommerce store from scratch — custom theme, product catalogue, Razorpay + UPI payment integration, GST-compliant invoicing, Shiprocket logistics, WhatsApp order notifications, and a live launch. India-optimized checkout flow designed to reduce cart abandonment on mobile.',
    example: 'WooCommerce with Razorpay handles UPI, cards, net banking, EMI, and BNPL in one integration.',
    linkLabel: 'Get a WooCommerce Quote',
    linkHref: '/contact',
  },
  {
    name: 'WordPress Speed Optimization',
    description:
      'Most Indian WordPress sites load in 6–12 seconds on mobile. We fix the root causes: server migration to Cloudflare or AWS, Redis object caching, WebP image conversion, plugin audit and dequeue of unused scripts, and critical CSS inlining. Lighthouse 90+ guaranteed on delivery.',
    example: 'Average 4–6× improvement in load time. Typically from 8s → 1.8s on Indian 4G.',
    linkLabel: 'Book a Speed Audit',
    linkHref: '/contact',
  },
  {
    name: 'WordPress Plugin Development',
    description:
      'Custom WordPress plugin development for functionality that off-the-shelf plugins cannot deliver: custom post types, advanced ACF field structures, REST API integrations with Indian SaaS tools (Razorpay, Zoho, Tally, Shiprocket), and custom Gutenberg blocks for your editorial team.',
    example: 'No plugin bloat — we build lean, single-purpose plugins that do not affect page speed.',
    linkLabel: 'Discuss Your Requirements',
    linkHref: '/contact',
  },
  {
    name: 'WordPress Migration & Redesign',
    description:
      'Migration from any platform to WordPress (Wix, Squarespace, Joomla, Drupal, HTML sites, or legacy PHP) with full content migration, URL preservation with 301 redirects, and zero downtime on launch day. Also handle WordPress-to-WordPress redesigns preserving all existing content.',
    example: 'Every changed URL gets a 301 redirect. Google rankings protected from day one.',
    linkLabel: 'Plan Your Migration',
    linkHref: '/contact',
  },
  {
    name: 'WordPress Maintenance & Support',
    description:
      'Monthly WordPress maintenance for Indian businesses: core, theme, and plugin updates, daily automated backups to S3, uptime monitoring, security scanning (Wordfence), malware removal, and a dedicated engineer who knows your site. From ₹4,999/month.',
    example: 'Unmanaged WordPress sites in India are hacked within 12 months. Maintenance prevents it.',
    linkLabel: 'Get Maintenance Plan',
    linkHref: '/contact',
  },
];

const WP_JOURNEY_STAGES: ServiceJourneyStage[] = [
  {
    number: '01',
    title: 'Discovery & Platform Decision',
    description:
      'A 30-minute audit of your business, goals, and existing digital presence. We confirm whether WordPress is the right platform for your needs — or whether Next.js or Shopify would serve you better. No upsell agenda. Platform recommendation is honest and based on your requirements, not our margin.',
  },
  {
    number: '02',
    title: 'Design & Theme Development',
    description:
      'Full Figma mockups for homepage, inner pages, and mobile. You approve every screen before we write a line of PHP. Custom WordPress theme — no Elementor, no WPBakery, no premium theme with 40 files renamed. Clean, purpose-built code that your team can maintain.',
  },
  {
    number: '03',
    title: 'Development & Plugin Integration',
    description:
      'Theme development with daily commits to your GitHub repo. Staging URL available within 48 hours. WooCommerce configured with Razorpay + UPI, Shiprocket rate calculator, GST invoice setup, WhatsApp notifications, and only the plugins your site actually needs — nothing extra.',
  },
  {
    number: '04',
    title: 'SEO, Speed & Security Hardening',
    description:
      'Full technical SEO: schema markup, XML sitemap, Open Graph, canonical URLs, title and meta templates for all page types. Speed optimization: WebP images, Redis caching, Cloudflare setup, Core Web Vitals green. Security: Wordfence, login hardening, two-factor admin access.',
  },
  {
    number: '05',
    title: 'Launch & Training',
    description:
      'DNS transfer, Google Analytics 4 and Search Console setup, sitemap submission, and a recorded screen-share walkthrough so your team can update the site without needing a developer. Full code and admin credentials delivered to your GitHub. 14-day support window included.',
  },
];

const WP_STATS = [
  {
    value: '43%',
    label: 'of all websites on the internet run on WordPress — the most used CMS in the world by far',
    microcopy: 'W3Techs CMS market share data, 2025',
    categoryLabel: 'MARKET SHARE',
  },
  {
    value: '500+',
    label: 'websites built and launched for businesses across India, US, UK, and UAE since 1999',
    microcopy: 'across SMBs, D2C brands, clinics, NGOs, and enterprise teams',
    categoryLabel: 'SITES LAUNCHED',
  },
  {
    value: '7 Days',
    label: 'delivery guarantee for standard WordPress business sites — theme, pages, SEO, and launch',
    microcopy: 'the fastest professional WordPress build timeline in India',
    categoryLabel: 'DELIVERY',
  },
];

const WP_MARKET_STATS = [
  {
    value: '43%',
    label: 'of all websites globally run on WordPress — more than the next 10 CMS platforms combined',
    sourceUrl: 'https://w3techs.com/technologies/overview/content_management',
    sourceLabel: 'W3Techs CMS Report 2025',
  },
  {
    value: '5.6M+',
    label: 'WordPress websites in India — the largest WordPress market in Asia-Pacific',
    sourceUrl: 'https://trends.builtwith.com/cms/WordPress',
    sourceLabel: 'BuiltWith Technology Trends',
  },
  {
    value: '₹29,999',
    label: 'starting price for a custom WordPress site from FactoryJet — at a fixed, published price',
    sourceUrl: 'https://factoryjet.com/wordpress-development',
    sourceLabel: 'FactoryJet Pricing',
  },
];

const WP_COMPARISON_COLUMNS = [
  { label: 'FactoryJet', isFactoryJet: true },
  { label: 'Indian WP Agency' },
  { label: 'Freelancer' },
  { label: 'DIY (Elementor)' },
] as const;

const WP_COMPARISON_ROWS = [
  {
    feature: 'Starting price',
    values: [
      '₹29,999',
      '₹80,000–₹4,00,000',
      '₹20,000–₹80,000',
      '₹0 + ₹5,000–₹15,000/yr hosting',
    ],
  },
  {
    feature: 'Delivery timeline',
    values: ['7 days', '6–16 weeks', '4–10 weeks (unreliable)', '2–8 weeks (you do the work)'],
  },
  {
    feature: 'Custom Figma design (not a template)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="yes" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'No Elementor / page builder bloat',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="no" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Razorpay + UPI + GST (WooCommerce)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Lighthouse 90+ on delivery',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Technical SEO built in',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Speed optimization (Cloudflare, Redis, WebP)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="no" />,
      <CompareIcon key="diy" kind="no" />,
    ],
  },
  {
    feature: 'Full code ownership (your GitHub)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="partial" />,
      <CompareIcon key="fr" kind="yes" />,
      <CompareIcon key="diy" kind="yes" />,
    ],
  },
  {
    feature: 'Fixed-price contract (no hourly billing)',
    values: [
      <CompareIcon key="fj" kind="yes" />,
      <CompareIcon key="ia" kind="no" />,
      <CompareIcon key="fr" kind="partial" />,
      <CompareIcon key="diy" kind="yes" />,
    ],
  },
];

const WP_PRICING_TIERS = [
  {
    name: 'Starter Site',
    priceRange: 'From ₹29,999',
    description:
      'A custom WordPress theme with up to 5 pages — ideal for new businesses, service providers, and consultants who need a professional web presence without the agency price tag.',
    features: [
      'Custom Figma design — homepage + up to 4 inner pages',
      'WordPress theme built to match Figma exactly',
      'Block-editor compatible — no Elementor dependency',
      'Contact form with email + WhatsApp routing',
      'Mobile-first, Lighthouse 85+ performance',
      'On-page SEO: title tags, meta, schema markup',
      'Google Analytics 4 + Search Console setup',
      'Code delivered to your GitHub on launch',
      '5–7 day delivery from design sign-off',
    ],
    cta: { label: 'Book a Discovery Call', modal: true as const, region: 'in' as const },
  },
  {
    name: 'Growth Site',
    priceRange: 'From ₹80,000',
    description:
      'A complete WordPress business site — custom theme, up to 8 pages, speed optimization, technical SEO, blog setup, and everything needed to rank and convert in India.',
    features: [
      'Everything in Starter, plus:',
      'Up to 8 pages including blog archive and post template',
      'Advanced custom fields (ACF) for structured content',
      'Speed optimization: Redis, WebP, Cloudflare, Core Web Vitals green',
      'Technical SEO: XML sitemap, Open Graph, BreadcrumbList schema',
      'Security hardening: Wordfence, login protection, 2FA admin',
      'Google Analytics 4 with event tracking + Meta Pixel',
      '2 rounds of design revisions before build starts',
      '7–10 day delivery from design sign-off',
    ],
    cta: { label: 'Get a Custom Quote', modal: true as const, region: 'in' as const },
    popular: true,
  },
  {
    name: 'WooCommerce Store',
    priceRange: 'From ₹1,50,000',
    description:
      'A full WooCommerce store built for the Indian market — Razorpay + UPI, GST invoicing, Shiprocket logistics, custom theme, and a checkout flow designed to reduce cart abandonment on mobile.',
    features: [
      'Everything in Growth Site, plus:',
      'WooCommerce setup with full product catalogue import',
      'Razorpay: UPI, cards, net banking, EMI, Paytm, PhonePe, BNPL',
      'GST-compliant auto-invoicing with GSTIN capture at checkout',
      'Shiprocket integration with real-time shipping rate calculator',
      'COD setup with optional prepaid discount incentive',
      'WhatsApp order notifications and abandoned cart recovery',
      'Shiprocket + Delhivery automated AWB and tracking',
      '14–21 day delivery from design sign-off',
    ],
    cta: { label: 'Schedule a Discovery Call', modal: true as const, region: 'in' as const },
  },
] as const;

const WP_FAQ_CATEGORIES = [
  { key: 'pricing',    label: 'Pricing & Timeline' },
  { key: 'platform',   label: 'WordPress vs. Alternatives' },
  { key: 'technical',  label: 'Technical & Hosting' },
  { key: 'woocommerce', label: 'WooCommerce & India Commerce' },
  { key: 'support',    label: 'Support & Maintenance' },
];

const WP_FAQ_ITEMS = [

  /* ── Pricing & Timeline ── */
  {
    category: 'pricing',
    question: 'How much does WordPress development cost in India in 2025?',
    answer:
      "FactoryJet's WordPress development starts at ₹29,999 for a custom theme on an existing install. A complete business site with 5–8 pages, custom design, SEO, speed optimization, and launch runs ₹80,000. WooCommerce stores with Razorpay, GST invoicing, and Shiprocket start at ₹1,50,000. Every tier is published upfront with fixed scope — no discovery fees, no 'it depends' quotes. Because you work directly with a specialised team rather than a full-service agency with account managers and overhead, you get production-grade work, faster, with full code ownership.",
  },
  {
    category: 'pricing',
    question: 'How does the 7-day WordPress delivery guarantee work?',
    answer:
      "The 7-day guarantee applies to standard WordPress business sites: 5–8 pages, custom theme, contact forms, basic SEO, GA4, and launch. The clock starts from design sign-off — not from first call. Day 1–2: Figma design delivered and approved. Day 3–5: WordPress theme built and staging URL live. Day 6: content loaded, SEO configured, speed tested. Day 7: DNS transfer and launch. WooCommerce stores (14–21 days) and large multi-page sites are scoped separately with their own timelines.",
  },
  {
    category: 'pricing',
    question: "What's included in FactoryJet's WordPress pricing — any hidden costs?",
    answer:
      'No hidden costs. Every quote is fixed-price and itemised. What is NOT included in our development fee and billed separately: WordPress hosting (we recommend Cloudflare Pages + AWS LightSail from ~₹700–₹2,000/month, or WP Engine India from ~₹1,500/month), premium plugins if required (most builds use only free or custom-built plugins), domain renewal (typically ₹800–₹1,200/year), and ongoing maintenance if you want it (from ₹4,999/month). We tell you the full cost of ownership before you sign off.',
  },
  {
    category: 'pricing',
    question: 'Why is FactoryJet cheaper than other WordPress agencies in India?',
    answer:
      "We are a specialised engineering team, not a full-service digital agency. No account management layers, no generalist designers who also do social media, no large office in an expensive city, and no inflated project manager markups. The same Figma-to-code process, the same Lighthouse audit before handover, the same technical SEO setup — at a fixed, published price. We have been building websites since 1999. That experience is priced into the quality, not the overhead.",
  },

  /* ── WordPress vs. Alternatives ── */
  {
    category: 'platform',
    question: 'When should I choose WordPress over Next.js for my Indian business?',
    answer:
      "Choose WordPress when: you need your team to update content without a developer (WordPress admin is learnable in one session), you want a CMS-driven blog or content hub for SEO, your budget is under ₹1,50,000, or you want WooCommerce for flexible e-commerce. Choose Next.js when: you need sub-500ms performance, you are building a web application with custom logic, you need a JAMstack architecture for global CDN delivery, or your business requires features impossible in WordPress without heavy plugin overhead. We assess this during discovery and give you an honest recommendation.",
  },
  {
    category: 'platform',
    question: 'WooCommerce vs. Shopify for Indian businesses — which is better?',
    answer:
      "WooCommerce: No platform subscription fee, full code ownership, unlimited customization, and works on any Indian hosting. Best for: businesses that want zero monthly SaaS cost, need deep WooCommerce customization (wholesale portals, custom checkout flows), or already have a WordPress site. Shopify: Managed infrastructure, faster to launch for pure D2C, better for brands processing ₹5 crore+/month who want zero server management. Costlier monthly (₹2,500–₹25,000/month subscription). Both support Razorpay, UPI, GST, and Shiprocket natively. We build both — we will recommend the one that actually fits your business.",
  },
  {
    category: 'platform',
    question: 'Is WordPress still relevant in 2025 — or should I choose something modern?',
    answer:
      "WordPress powers 43% of all websites globally as of 2025 — more than the next 10 CMS platforms combined. It is not going anywhere. The misconception is that WordPress equals slow, bloated sites. That is Elementor and shared GoDaddy hosting. A properly built WordPress site — custom theme, no page builder, Redis caching on Cloudflare — delivers Lighthouse 90+ and Core Web Vitals green. The block editor is excellent. WooCommerce is the most flexible e-commerce platform in the world. WordPress is absolutely the right choice for most Indian SMBs.",
  },
  {
    category: 'platform',
    question: 'Can WordPress handle a large news site or high-traffic blog in India?',
    answer:
      "Yes — WordPress was built for content publishing and news sites. It powers some of the world's largest media properties. For high-traffic Indian news and media sites, we configure: Cloudflare with aggressive page caching, Redis object caching on AWS, lazy-loading for media-heavy posts, WP-CLI for bulk content operations, and custom archive/category templates optimised for mobile news consumption. Editorial workflows (custom post types, contributor roles, editorial calendar) are configured as standard for news builds.",
  },

  /* ── Technical & Hosting ── */
  {
    category: 'technical',
    question: 'What WordPress hosting do you recommend for Indian businesses?',
    answer:
      "Our recommendations for Indian WordPress sites: (1) Cloudflare Pages + AWS LightSail (₹700–₹2,000/month) — best performance-to-cost ratio, Indian CDN edge nodes, Cloudflare caching and DDoS protection. (2) WP Engine India (₹1,500–₹4,000/month) — fully managed WordPress hosting, automated updates, daily backups, and built-in Redis. (3) Kinsta India (₹2,000–₹5,000/month) — premium managed hosting on Google Cloud. We do NOT recommend GoDaddy shared hosting or Hostgator for production WordPress sites — they are the primary reason Indian WordPress sites load in 8+ seconds.",
  },
  {
    category: 'technical',
    question: 'How do you optimize a WordPress site for speed in India?',
    answer:
      "Our WordPress speed optimization process: (1) Server migration from shared hosting to Cloudflare + AWS LightSail or WP Engine India. (2) Redis object caching to reduce database queries. (3) Full-page caching via WP Rocket or custom Nginx config. (4) Image conversion to WebP with lazy loading below the fold. (5) Plugin audit — we remove everything unused and replace bloated plugins with lighter alternatives or custom code. (6) Critical CSS inlining to eliminate render-blocking resources. (7) Cloudflare CDN for static assets. Average result: 8-second GoDaddy site → 1.8-second Lighthouse 90+ site.",
  },
  {
    category: 'technical',
    question: 'How do you handle WordPress security for Indian businesses?',
    answer:
      "Indian WordPress sites are high-value targets for automated bots — unmanaged sites are typically compromised within 12 months. Our security setup: Wordfence Security with real-time malware scanning and firewall rules, WP admin URL randomized (not /wp-admin), login attempt limiting and two-factor authentication for admin users, disabling of XML-RPC, file editing disabled from the WordPress admin, daily automated backups to S3 with 30-day retention, and regular core and plugin updates as part of our maintenance plans.",
  },
  {
    category: 'technical',
    question: 'Will my WordPress site rank on Google India?',
    answer:
      "Yes — every WordPress site we build includes full technical SEO: Yoast or Rank Math configured with XML sitemap, schema markup for your business type (Organization, LocalBusiness, Article, Product), canonical URLs, and Open Graph tags. Title and meta templates are set for all page types. We submit to Google Search Console on launch day and verify crawl status within 48 hours. Core Web Vitals are green before launch — Google confirmed CWV as a ranking signal for Indian mobile search. Blog and landing page keyword strategy available as an add-on.",
  },

  /* ── WooCommerce & India Commerce ── */
  {
    category: 'woocommerce',
    question: 'How do you integrate Razorpay in WooCommerce for Indian stores?',
    answer:
      "We integrate Razorpay via the official Razorpay WooCommerce plugin and configure: UPI as the default payment option (highest conversion for Indian consumers), standard checkout with cards, net banking, EMI (6–24 months), Paytm, PhonePe, Mobikwik, Google Pay, LazyPay, and Simpl. Razorpay webhook configuration for order status sync, failed payment retry flows, and refund processing. We also configure Razorpay Thirdwatch for fraud detection on COD orders. Everything is tested end-to-end on staging before DNS switch.",
  },
  {
    category: 'woocommerce',
    question: 'Can you set up GST-compliant invoicing in WooCommerce?',
    answer:
      "Yes — GST compliance is standard in every WooCommerce store we build. We configure: GSTIN capture at checkout for B2B buyers, HSN code mapping at the product level, automatic GST invoice generation at order placement (using WooCommerce PDF Invoices or a custom plugin), GST-inclusive and GST-exclusive price display based on buyer type, and GSTR-1 compatible export for your CA. For D2C brands, we integrate with Zoho Books or Tally via API for automated accounting sync.",
  },
  {
    category: 'woocommerce',
    question: 'Can you integrate Shiprocket with WooCommerce for Indian logistics?',
    answer:
      "Yes — Shiprocket integration is standard in our Indian WooCommerce builds. We configure: real-time shipping rate calculation at checkout from 15+ courier partners (Delhivery, Bluedart, XpressBees, Ekart, Shadowfax), automated AWB generation on order placement, tracking updates pushed to customers via WhatsApp and SMS, automated NDR (non-delivery report) workflows, and a returns portal. For high-volume stores, we integrate Delhivery or Bluedart directly via API for custom SLAs and branded tracking pages.",
  },
  {
    category: 'woocommerce',
    question: 'Can you set up COD (Cash on Delivery) in WooCommerce with fraud prevention?',
    answer:
      "Yes — COD setup is standard for Indian WooCommerce stores where COD typically accounts for 30–50% of orders. We configure: COD as a payment option with optional extra fee or PIN code filtering (disable COD in non-serviceable pin codes), prepaid discount incentive to shift COD buyers to digital payment, Razorpay Thirdwatch or ShipRocket's built-in COD verification call for high-risk orders, and WhatsApp order confirmation for COD orders to reduce RTO (Return to Origin). RTO reduction from WhatsApp confirmation: typically 15–20% improvement.",
  },
  {
    category: 'woocommerce',
    question: 'Can WooCommerce handle WooCommerce-to-Shopify migration or vice versa?',
    answer:
      "Yes — we handle migrations in both directions. WooCommerce-to-Shopify: products, customers, order history, and reviews migrated with full URL redirect mapping. Shopify-to-WooCommerce: useful for brands that want to eliminate the Shopify subscription fee and gain more customization control. In both cases, we map every changed URL to a 301 redirect before DNS switch, test the full checkout flow on staging, and migrate all payment and logistics integrations. Zero downtime on launch day.",
  },

  /* ── Support & Maintenance ── */
  {
    category: 'support',
    question: 'What does WordPress maintenance cost in India?',
    answer:
      "FactoryJet's WordPress maintenance starts at ₹4,999/month and includes: core, theme, and plugin updates (applied to staging first, then production), daily automated backups to S3 with 30-day retention, uptime monitoring with 5-minute check intervals, monthly security scan via Wordfence, and up to 1 hour of minor content or layout changes. The ₹9,999/month plan adds up to 3 hours of development work, priority same-day response for critical issues, quarterly performance review with Lighthouse report, and a dedicated engineer who knows your codebase.",
  },
  {
    category: 'support',
    question: 'Do I own my WordPress theme code after the project?',
    answer:
      "Yes — 100% ownership. The full WordPress theme code is delivered to your GitHub on launch day. You own every PHP file, every CSS file, every ACF field configuration, and all plugin customizations. You can hire any WordPress developer in India or globally to maintain or extend it — no FactoryJet dependency baked in. We document the theme structure, custom post types, and any non-obvious configuration during the handover walkthrough. You will not need archaeology to understand what we built.",
  },
  {
    category: 'support',
    question: 'What happens if my WordPress site gets hacked?',
    answer:
      "For sites on our maintenance plan: we respond within 4 hours, restore from the most recent clean backup, audit and remove the malware, patch the vulnerability that was exploited, and harden the security configuration. For sites not on a maintenance plan, we offer emergency malware removal at ₹9,999 flat — with a post-cleanup report detailing what was compromised and how. We recommend moving to a maintenance plan immediately after any compromise, as rehacked sites are common without systematic hardening.",
  },
  {
    category: 'support',
    question: 'Can you manage plugin updates without breaking my WordPress site?',
    answer:
      "Yes — plugin update management is one of the highest-risk activities on a WordPress site. Our process: we run all updates on a staging clone first, test critical user flows (contact forms, checkout, login, any custom functionality) before applying to production, and roll back immediately if anything breaks. For sites with custom plugin integrations or heavily modified themes, we do a compatibility review before major WordPress core updates. This process prevents the 'I updated plugins and now my site is broken' emergency — which we fix at cost for maintenance clients.",
  },
  {
    category: 'support',
    question: 'Can your team train my staff to manage WordPress content?',
    answer:
      "Yes — training is included in every project. We deliver a recorded screen-share walkthrough (30–45 minutes) covering: adding and editing pages in the block editor, publishing blog posts with images and SEO metadata, updating contact information and business hours, managing WooCommerce products and orders (for e-commerce builds), and handling common questions. The recording is yours to keep and share with future staff. For larger teams, we offer 1:1 training sessions at ₹2,500/hour.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

const WP_speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/wordpress-development#webpage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2:first-of-type'],
  },
  url: 'https://factoryjet.com/wordpress-development',
};

export default function WordPressDevelopmentPage() {
  return (
    <>
      <Script
        id="in-wp-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WP_faqSchema) }}
      />
      <Script
        id="in-wp-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WP_serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WP_speakableSchema) }}
      />

      <SiteHeader locale="in" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://factoryjet.com' },
          { name: 'WordPress Development', url: 'https://factoryjet.com/wordpress-development' },
        ]}
      />

      <main className="bg-fj-cream">

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <Hero
          eyebrow="WORDPRESS DEVELOPMENT · INDIA"
          headline="WordPress Built Right — Fast, Secure, and Ranked"
          lead="43% of the internet runs on WordPress. Most Indian WordPress sites load in 8 seconds, run on GoDaddy shared hosting, and were built by someone who discovered Elementor last month. FactoryJet builds clean, fast, custom WordPress sites — from ₹29,999. In 7 days."
          primaryCta={{ label: 'Book a Free Site Audit', modal: true, region: 'in' }}
          secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
          trustItems={[
            '500+ websites built',
            'From ₹29,999',
            '7-day delivery guarantee',
          ]}
          rightSlot={
            <div className="rounded-2xl border border-fj-neutral-200 bg-white p-8 shadow-sm">
              <p
                className="font-fj-mono font-medium uppercase text-[#F05A28]"
                style={{ fontSize: '11px', letterSpacing: '0.14em' }}
              >
                TYPICAL INDIAN WP SITE vs. FACTORYJET BUILD
              </p>
              <p className="mt-4 font-fj-display text-[2rem] font-medium leading-[1.1] tracking-[-0.025em] text-fj-ink">
                Same platform. Completely different result.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { label: 'Typical Indian WP site (GoDaddy + Elementor)', value: '8.4s load' },
                  { label: 'FactoryJet build (Cloudflare + custom theme)', value: '1.6s load' },
                  { label: 'Lighthouse score — typical Indian WP site', value: '38 / 100' },
                  { label: 'Lighthouse score — FactoryJet build', value: '94 / 100' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-fj-neutral-100 pb-3"
                  >
                    <p className="font-fj-body text-[0.875rem] text-fj-neutral-500">{row.label}</p>
                    <p
                      className="fj-display font-semibold text-fj-ink"
                      style={{ fontSize: '1rem', letterSpacing: '-0.02em' }}
                    >
                      {row.value}
                    </p>
                  </div>
                ))}
                <div className="rounded-xl bg-[rgba(240,90,40,0.08)] px-4 py-3">
                  <p className="font-fj-body text-[0.875rem] font-semibold text-[#F05A28]">
                    A 1.6-second site ranks better, converts better, and does not embarrass you in client meetings.
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* ── 2. LOGO BAR ──────────────────────────────────────────────────── */}
        <LogoBar tagline="Trusted by 500+ businesses across India, US, UK, and UAE" />

        {/* ── 3. TRUST BLOCK ───────────────────────────────────────────────── */}
        <BigThreeTrustBlock
          eyebrow="BY THE NUMBERS"
          headline="500+ websites built. 25 years of web development expertise."
        />

        {/* ── 4. WORDPRESS EXPLAINED ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="WORDPRESS FOR INDIAN BUSINESSES"
          headline="WordPress Is the Right Choice for Most Indian SMBs — If Built Correctly"
          lead="WordPress powers 43% of the internet for a reason. It is the most flexible CMS ever built. The problem is not WordPress — it is the way most Indian agencies build on it: premium themes, Elementor, 60 plugins, and GoDaddy shared hosting."
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden>
                {[
                  'WordPress',
                  'WooCommerce',
                  'Razorpay',
                  'Gutenberg',
                  'Cloudflare',
                  'Redis',
                  'ACF Pro',
                  'Yoast SEO',
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]"
                    style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <p>
                WordPress is the right foundation for most Indian SMBs: it is affordable, the admin is
                learnable in one session, and it has the largest plugin ecosystem in the world. The mistake
                is confusing &quot;WordPress&quot; with &quot;Elementor on GoDaddy shared hosting.&quot;
                A properly built WordPress site — custom PHP theme, no page builders, Redis object caching
                on Cloudflare — delivers Lighthouse 90+ and loads in under 2 seconds on Indian 4G.
              </p>

              {/* Key WordPress metrics for India */}
              <div className="grid grid-cols-3 gap-3" aria-hidden>
                {[
                  { value: '43%', label: 'of all websites globally run on WordPress' },
                  { value: '5.6M+', label: 'WordPress sites in India — largest in APAC' },
                  { value: '7 Days', label: 'standard WordPress build delivery' },
                ].map((b) => (
                  <div
                    key={b.value}
                    className="rounded-xl border border-fj-neutral-200 bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <p
                      className="fj-display font-bold text-[#F05A28]"
                      style={{ fontSize: '1.375rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                    >
                      {b.value}
                    </p>
                    <p
                      className="mt-1.5 font-fj-mono font-medium uppercase text-fj-neutral-400"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.07em' }}
                    >
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-l-2 border-[#F05A28] pl-5 py-1" aria-hidden>
                <p
                  className="font-fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.1875rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  We are honest about platform choice. If your requirements call for Next.js or Shopify,
                  we will tell you that — even if it means a bigger build cost.
                </p>
              </div>

              <p>
                FactoryJet has built WordPress sites for Indian businesses since 1999. We know the
                difference between a WordPress site that embarrasses you in a client meeting and one that
                wins business. We build the latter — with or without WooCommerce, at a price that makes
                the investment rational.
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
                  Platform Decision Guide — India
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { platform: 'WordPress', best: 'Content sites, SMB web presence, WooCommerce', price: 'From ₹29,999' },
                  { platform: 'WooCommerce', best: 'Flexible India e-commerce, zero SaaS fee', price: 'From ₹1,50,000' },
                  { platform: 'Next.js', best: 'Performance apps, headless CMS, web apps', price: 'From ₹80,000' },
                  { platform: 'Shopify', best: 'Pure D2C, managed infra, ₹5 cr+ GMV', price: 'From ₹50,000' },
                ].map((item) => (
                  <div key={item.platform} className="py-3.5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                        {item.platform}
                      </p>
                      <p
                        className="fj-display flex-shrink-0 font-bold text-[#F05A28]"
                        style={{ fontSize: '0.9375rem', letterSpacing: '-0.02em' }}
                      >
                        {item.price}
                      </p>
                    </div>
                    <p
                      className="mt-0.5 font-fj-mono text-[0.6875rem] text-fj-neutral-400"
                      style={{ letterSpacing: '0.04em' }}
                    >
                      {item.best}
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
                  We recommend the right platform. Not the most expensive one.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 5. THE PROBLEM (DARK) ─────────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="THE PROBLEM"
          headline="Your WordPress site is live. It loads in 8 seconds, scores 38 on Lighthouse, and loses 70% of visitors before they see your offer."
          lead="This is not a WordPress problem. It is a build quality problem. Most Indian WordPress sites are assembled from premium themes, Elementor page builders, 40–80 plugins, and GoDaddy shared hosting. That combination produces sites that are slow, insecure, and invisible to Google. FactoryJet builds WordPress sites the way they should be built."
          pillars={[
            {
              icon: '🐌',
              title: 'Elementor + shared hosting = 8 seconds on Indian 4G.',
              body: 'Elementor loads 200KB of CSS and 100KB of JavaScript before rendering a single pixel. GoDaddy shared hosting serves pages from a server that might be in the US or Singapore. The result on Indian 4G: 8–12 second load times, a Lighthouse score in the 30s, and Core Web Vitals that are red across the board. FactoryJet builds custom PHP themes — no Elementor, no WPBakery, no visual page builders. Lightweight code on Cloudflare with Redis caching: Lighthouse 90+ standard.',
            },
            {
              icon: '🔓',
              title: '60,000 WordPress plugins. Most of them are security liabilities.',
              body: 'The average Indian WordPress site runs 40–80 plugins. Each plugin is a potential attack surface. Unmanaged WordPress sites are typically compromised within 12 months — by automated bots scanning for known plugin vulnerabilities, brute-force login attacks, and SQL injection via unmaintained plugins. FactoryJet builds with the minimum required plugins (typically 8–12), implements Wordfence with custom firewall rules, randomises the wp-admin URL, and sets up daily backups to S3. Security is not an afterthought.',
            },
            {
              icon: '📉',
              title: 'A slow WordPress site is invisible to Google India.',
              body: "Google confirmed Core Web Vitals as a ranking signal in 2021 — and has been strengthening it since. A site that loads in 8 seconds on Indian 4G and fails LCP and CLS is being actively penalised in search rankings. FactoryJet's technical SEO setup includes Yoast or Rank Math configuration, schema markup for your business type, XML sitemap submission, and Core Web Vitals optimisation to green before launch. Your site ranks before the competition that is still fighting with their GoDaddy dashboard.",
            },
          ]}
        />

        {/* ── 6. OUR PROCESS ───────────────────────────────────────────────── */}
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Discovery to Live WordPress Site in 5 Stages"
          lead="Platform confirmed before design. Mobile approval before code. SEO and speed before launch."
          stages={WP_JOURNEY_STAGES}
          closingNote="5 STAGES · 7 TO 21 DAYS · LIGHTHOUSE 90+ STANDARD · ZERO DOWNTIME LAUNCH DAY"
        />

        {/* ── 7. TECH STACK ────────────────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="OUR WORDPRESS TECH STACK"
          headline="WordPress Built for Indian Businesses — Not Elementor Installed on GoDaddy"
          lead="Every tool we use is chosen for performance on Indian mobile networks, compatibility with Indian payment methods, and long-term maintainability by your own team."
          reverseOnDesktop
          body={
            <>
              <div className="flex flex-wrap gap-2" aria-hidden="true">
                {['WordPress', 'WooCommerce', 'ACF Pro', 'Razorpay API', 'Shiprocket API', 'Cloudflare', 'Redis', 'AWS LightSail'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-semibold uppercase text-[#F05A28]"
                      style={{ fontSize: '10px', letterSpacing: '0.10em' }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <p>
                <strong className="font-semibold text-fj-ink">Custom PHP theme + Gutenberg</strong> — Every
                site starts as a Figma design. The theme is built in PHP from scratch — no Elementor,
                no premium theme, no 200-file parent/child theme stack. Gutenberg block editor is
                configured so your team can update content without touching code.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">WooCommerce + Razorpay</strong> — For
                e-commerce builds, WooCommerce is configured with Razorpay covering UPI, cards, net
                banking, EMI, and digital wallets. GST invoicing and Shiprocket are configured as standard.
                COD with Thirdwatch fraud detection for high-risk orders.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Cloudflare + Redis caching</strong> — We
                move sites from shared hosting to Cloudflare Pages + AWS LightSail or WP Engine India.
                Redis object caching reduces database queries by 80–90%. Full-page caching via WP
                Rocket or custom Nginx config. Result: 8-second sites become 1.6-second sites.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">ACF Pro + custom post types</strong> —
                Advanced Custom Fields for structured data (team members, services, case studies, FAQs)
                with clean, queryable database storage. Custom post types designed so your editors can
                update structured content from a simple admin interface.
              </p>
              <p>
                <strong className="font-semibold text-fj-ink">Yoast SEO + schema markup</strong> — Full
                technical SEO configuration: XML sitemap, Open Graph, Twitter Card, canonical URLs,
                BreadcrumbList, Organization, LocalBusiness, Article, Product, or FAQ schema based on
                your site type. Every schema validated in Google Rich Results Test before launch.
              </p>
            </>
          }
          rightSlot={
            <div
              className="w-full overflow-hidden rounded-2xl bg-white shadow-sm"
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'rgb(229, 231, 235)',
                borderTopWidth: '2px',
                borderTopColor: '#F05A28',
              }}
            >
              <div className="border-b border-fj-neutral-100 px-8 py-5">
                <p
                  className="font-fj-mono font-medium uppercase text-fj-neutral-400"
                  style={{ fontSize: '11px', letterSpacing: '0.14em' }}
                >
                  WordPress Tech Stack — India
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-8">
                {[
                  { category: 'Theme', tools: 'Custom PHP, Gutenberg blocks (no Elementor)' },
                  { category: 'Design', tools: 'Figma → PHP, pixel-perfect to mockup' },
                  { category: 'E-commerce', tools: 'WooCommerce, custom checkout templates' },
                  { category: 'Payments', tools: 'Razorpay, PayU, UPI, EMI, COD' },
                  { category: 'Logistics', tools: 'Shiprocket, Delhivery, Bluedart' },
                  { category: 'Hosting', tools: 'Cloudflare + AWS, WP Engine India' },
                  { category: 'SEO', tools: 'Yoast / Rank Math, schema, XML sitemap' },
                  { category: 'Security', tools: 'Wordfence, S3 backups, 2FA admin' },
                ].map((item) => (
                  <div
                    key={item.category}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(240,90,40,0.50)]"
                        aria-hidden="true"
                      />
                      <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                        {item.category}
                      </p>
                    </div>
                    <p className="text-right font-fj-body text-[0.875rem] text-fj-neutral-600">
                      {item.tools}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-8 py-5">
                <div className="mb-2 h-[3px] w-8 rounded-full bg-[#F05A28]" aria-hidden="true" />
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.0625rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}
                >
                  Built clean. Runs fast. Your team can update it.
                </p>
              </div>
            </div>
          }
        />

        {/* ── 8. STATS BAND ────────────────────────────────────────────────── */}
        <section
          className="py-12 md:py-16"
          style={{
            backgroundColor: '#FAFAF7',
            borderTop: '1.5px solid rgba(240,90,40,0.18)',
            borderBottom: '1.5px solid rgba(240,90,40,0.18)',
          }}
        >
          <div className="mx-auto max-w-[1120px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:items-center lg:gap-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {WP_STATS.map((stat) => (
                  <div key={stat.value}>
                    {stat.categoryLabel && (
                      <div
                        className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-fj-mono font-bold uppercase"
                        style={{
                          fontSize: '9px',
                          letterSpacing: '0.13em',
                          color: '#F05A28',
                          background: 'rgba(240,90,40,0.06)',
                          border: '1px solid rgba(240,90,40,0.22)',
                        }}
                      >
                        <span
                          className="inline-block h-1 w-1 rounded-full"
                          style={{ backgroundColor: '#F05A28' }}
                          aria-hidden="true"
                        />
                        {stat.categoryLabel}
                      </div>
                    )}
                    <p
                      className="fj-display font-bold"
                      style={{
                        fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        color: '#F05A28',
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="mt-3 font-fj-body font-semibold text-fj-ink"
                      style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}
                    >
                      {stat.label}
                    </p>
                    {stat.microcopy && (
                      <p
                        className="mt-1.5 font-fj-body text-fj-neutral-400"
                        style={{ fontSize: '0.8125rem', lineHeight: 1.55 }}
                      >
                        {stat.microcopy}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ aspectRatio: '5 / 3' }}
              >
                <Image
                  src="/images/services/card-web-design.webp"
                  alt="FactoryJet team building a custom WordPress site for an Indian SMB"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. INDIA WORDPRESS MARKET ────────────────────────────────────── */}
        <CityContextSection
          eyebrow="WORDPRESS IN INDIA"
          headline="5.6 Million WordPress Sites in India. Most of Them Are Slow, Insecure, and Invisible on Google."
          leadParagraphs={[
            "WordPress is by far the most popular CMS in India — powering over 5.6 million websites across SMBs, news and media, education, healthcare, real estate, NGOs, and professional services. It is the default choice for Indian business owners who need a web presence without a large development budget. The problem is not the platform — it is the ecosystem of cheap themes, bloated page builders, and shared hosting that most Indian WordPress sites are built on.",
            "FactoryJet has been building WordPress sites for Indian businesses since 1999. We have built for startups in Bangalore, clinics in Chennai, NGOs in Delhi, real estate portals in Mumbai, and news sites in Hyderabad. We understand what an Indian SMB at ₹50 lakh to ₹5 crore revenue actually needs from a website: it needs to load fast on a ₹12,000 Redmi phone on Jio 4G, rank for the right keywords on Google India, and be updatable by a non-technical team without breaking.",
            "The WooCommerce opportunity in India is significant. India's D2C e-commerce market crossed ₹35,000 crore in 2024 and is growing at 38% annually. Many of these brands start on Shopify — and eventually migrate to WooCommerce when the Shopify subscription fee ($299–$2,500/month) stops making sense at their scale. WooCommerce with Razorpay is the lowest total-cost-of-ownership e-commerce stack in India for brands at ₹50 lakh to ₹5 crore annual GMV.",
          ]}
          bodySlot={
            <>
              <div className="border-l-2 border-[#F05A28] py-1 pl-5" aria-hidden="true">
                <p
                  className="fj-display font-semibold text-fj-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.35, letterSpacing: '-0.02em' }}
                >
                  A properly built WordPress site is not a cost. It is the lowest-cost way to get
                  a fast, ranked, maintainable web presence for an Indian SMB.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { label: 'Mumbai', slug: 'mumbai' },
                  { label: 'Delhi', slug: 'delhi' },
                  { label: 'Bangalore', slug: 'bangalore' },
                  { label: 'Hyderabad', slug: 'hyderabad' },
                  { label: 'Chennai', slug: 'chennai' },
                  { label: 'Pune', slug: 'pune' },
                  { label: 'Ahmedabad', slug: 'ahmedabad' },
                  { label: 'Surat', slug: 'surat' },
                  { label: 'Jaipur', slug: 'jaipur' },
                  { label: 'Kolkata', slug: 'kolkata' },
                  { label: 'Lucknow', slug: 'lucknow' },
                  { label: 'Kochi', slug: 'kochi' },
                ].map(({ label, slug }) => (
                  <a
                    key={slug}
                    href={`/wordpress-development/${slug}`}
                    className="inline-flex items-center rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-3 py-1 font-fj-mono font-medium text-[#F05A28] hover:bg-[rgba(240,90,40,0.15)] transition-colors"
                    style={{ fontSize: '10px', letterSpacing: '0.08em' }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </>
          }
          stats={WP_MARKET_STATS}
        />

        {/* ── 10. COMPARISON TABLE ──────────────────────────────────────────── */}
        <ComparisonTable
          eyebrow="HOW WE COMPARE"
          headline="FactoryJet vs. Indian WP Agency vs. Freelancer vs. DIY Elementor"
          lead="Not all WordPress development in India delivers the same output. Here is the honest comparison."
          pullQuote={{
            stat: '₹29,999',
            caption:
              'starting price — same Figma-first design, clean PHP theme, Lighthouse audit, and technical SEO as a ₹2,00,000 Indian agency project.',
          }}
          columns={WP_COMPARISON_COLUMNS}
          rows={WP_COMPARISON_ROWS}
          footer="Prices reflect typical Indian market ranges as of 2025. FactoryJet fixed-price contracts available for all tiers."
        />

        {/* ── 11. WHAT WE BUILD ─────────────────────────────────────────────── */}
        <IndustriesGrid variant="cards"
          eyebrow="WHAT WE BUILD"
          headline="Six WordPress Services for Indian Businesses"
          lead="From a custom theme to a WooCommerce store with Razorpay and GST — we scope the right engagement for your business, budget, and timeline."
          sectors={WP_SERVICES}
        />

        {/* ── 12. INDUSTRIES WE SERVE ───────────────────────────────────────── */}
        <ServiceExplanation
          eyebrow="INDUSTRIES WE BUILD FOR"
          headline="WordPress for Every Indian Industry That Needs a Web Presence"
          lead="WordPress is the right platform across industries — from a 5-page clinic website to a 50,000-product WooCommerce store. We have built in all of them."
          body={
            <>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-hidden>
                {[
                  { icon: '🚀', label: 'Startups & SaaS', note: 'Marketing sites, product landing pages' },
                  { icon: '📰', label: 'News & Media', note: 'High-traffic news, blogs, content hubs' },
                  { icon: '🎓', label: 'Education & EdTech', note: 'Course sites, school portals, LMS' },
                  { icon: '🏥', label: 'Healthcare & Clinics', note: 'Doctor websites, hospital portals, appointment booking' },
                  { icon: '🏢', label: 'Real Estate', note: 'Property listings, agent sites, project launches' },
                  { icon: '🍽️', label: 'Restaurants & Food', note: 'Menu sites, online ordering, delivery integration' },
                  { icon: '❤️', label: 'NGOs & Non-Profits', note: 'Cause pages, donation portals, volunteer management' },
                  { icon: '💼', label: 'Professional Services', note: 'Law firms, CA firms, consultants, agencies' },
                ].map((sector) => (
                  <div
                    key={sector.label}
                    className="rounded-xl border border-fj-neutral-200 bg-white p-4 shadow-sm"
                  >
                    <div className="text-2xl" aria-hidden>{sector.icon}</div>
                    <p className="mt-2 font-fj-body text-[0.875rem] font-semibold text-fj-ink">
                      {sector.label}
                    </p>
                    <p className="mt-0.5 font-fj-mono text-[0.6875rem] text-fj-neutral-400" style={{ letterSpacing: '0.04em' }}>
                      {sector.note}
                    </p>
                  </div>
                ))}
              </div>
              <p>
                Healthcare sites need LocalBusiness + Physician schema and HIPAA-safe contact forms.
                Real estate portals need property CPT with map search and IDX feeds. News sites need
                Article schema, AMP, and editorial workflow CPTs. We build for the specifics of each
                industry — not a generic WordPress template with the logo swapped.
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
                  Recent WordPress Projects
                </p>
              </div>
              <div className="divide-y divide-fj-neutral-100 px-7">
                {[
                  { client: 'Belle Maison', type: 'WooCommerce Store', industry: 'Home Décor', result: 'Razorpay + Shiprocket, 2.1s load' },
                  { client: 'Bombay Petals', type: 'B2B WordPress Site', industry: 'Artificial Plants / Decor', result: 'Custom WP theme, WhatsApp inquiry flow' },
                  { client: 'Formative Concepts', type: 'Portfolio + Blog', industry: 'MEP / BIM Consulting', result: 'Service CPTs, case study templates, Lighthouse 91' },
                ].map((item) => (
                  <div key={item.client} className="py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-fj-body text-[0.875rem] font-semibold text-fj-ink">{item.client}</p>
                        <p className="mt-0.5 font-fj-mono text-[0.6875rem] text-fj-neutral-400" style={{ letterSpacing: '0.04em' }}>
                          {item.industry}
                        </p>
                      </div>
                      <span
                        className="flex-shrink-0 rounded-full border border-[rgba(240,90,40,0.25)] bg-[rgba(240,90,40,0.08)] px-2.5 py-0.5 font-fj-mono font-medium text-[#F05A28]"
                        style={{ fontSize: '9px', letterSpacing: '0.08em' }}
                      >
                        {item.type}
                      </span>
                    </div>
                    <p className="mt-1.5 font-fj-body text-[0.8125rem] text-fj-neutral-500">{item.result}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-fj-neutral-100 bg-fj-neutral-50 px-7 py-5">
                <a
                  href="/portfolio"
                  className="font-fj-body text-[0.875rem] font-semibold text-[#F05A28] hover:underline"
                >
                  View full portfolio →
                </a>
              </div>
            </div>
          }
        />

        {/* ── 13. PRICING ──────────────────────────────────────────────────── */}
        <div id="pricing">
          <PricingTiers
            eyebrow="PRICING"
            headline="Transparent, Fixed-Price WordPress Development"
            lead="No hourly billing. No scope creep. Every tier has a fixed price, fixed scope, and a delivery timeline we stand behind."
            tiers={WP_PRICING_TIERS}
            footnote="All prices in INR. WordPress hosting (₹700–₹4,000/month) billed separately — we recommend and configure the right hosting for your site. Domain renewal (~₹1,000/year) billed by your registrar. You own all code and admin credentials on launch day."
          />
        </div>

        {/* ── 14. TESTIMONIALS (DARK) ──────────────────────────────────────── */}
        <TestimonialsSection
          eyebrow="CLIENT RESULTS"
          headline="What Indian business owners say after we build their WordPress site"
        />

        {/* ── 15. FAQ ──────────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          headline="Everything to Know Before You Build on WordPress"
          lead="The questions we answer on every Indian WordPress discovery call — answered here, without the runaround."
          categories={WP_FAQ_CATEGORIES}
          items={WP_FAQ_ITEMS}
        />

        {/* ── 16. WHY FACTORYJET (DARK) ─────────────────────────────────────── */}
        <StrategicDarkSection
          eyebrow="WHY FACTORYJET"
          headline="500+ sites built. 25 years of WordPress. We know what actually ranks and converts in India."
          lead="FactoryJet has been building WordPress sites for Indian businesses since 1999 — long before Elementor existed, long before GoDaddy became the default Indian hosting choice. We know the difference between a WordPress site built to look impressive in a proposal and one built to rank, load fast, and convert visitors into leads."
          pillars={[
            {
              icon: '🇮🇳',
              title: 'Built for India — Razorpay, GST, Shiprocket, Indian 4G performance.',
              body: 'Most WordPress agencies in India build from global templates and call it custom. FactoryJet builds India-first: Razorpay UPI as the default WooCommerce payment method, GST invoicing at order placement, Shiprocket logistics integration, Cloudflare CDN with Indian edge nodes, WebP images for 4G load times, and contact forms with WhatsApp routing for the Indian preference for messaging over email. Every site is built for how Indian users actually browse.',
            },
            {
              icon: '⚡',
              title: 'No Elementor. No bloat. Lighthouse 90+ is the minimum, not the goal.',
              body: 'We do not use Elementor, WPBakery, or any visual page builder. Custom PHP themes, Gutenberg block editor, and Redis caching on Cloudflare. The result is a site that loads in 1.5–2 seconds on Indian 4G (vs. 8–12 seconds with Elementor on GoDaddy), passes Core Web Vitals, and scores 90+ on Lighthouse. We deliver Lighthouse reports with every build — not as a marketing claim, but as a project deliverable.',
            },
            {
              icon: '🔒',
              title: 'Your WordPress code. Your GitHub. Your credentials. On launch day.',
              body: 'Every line of PHP, every custom post type configuration, every ACF field group — delivered to your GitHub on launch day. You own it completely. Any WordPress developer in India can maintain and extend it — you are not locked into FactoryJet. We document the theme architecture, plugin configuration, and non-obvious implementation decisions during the handover walkthrough. Your site will not become a black box the moment we hand it over.',
            },
          ]}
        />

        {/* ── 17. FINAL CTA ─────────────────────────────────────────────────── */}
        <div id="final-cta">
          <FinalCTA
            variant="dark"
            eyebrow="READY TO BUILD"
            headline="Book a WordPress Audit — We'll Tell You Exactly What to Fix"
            sub="In 30 minutes, we will audit your current website or business requirements, identify what is costing you speed and rankings, recommend the right WordPress architecture and hosting stack, and give you a fixed price. No pitch. No pressure. An honest assessment from engineers who have built 500+ sites."
            primaryCta={{ label: 'Book Your Free WordPress Audit', modal: true, region: 'in' }}
            secondaryCta={{ label: 'See Our Portfolio', href: '/portfolio' }}
            objectionHandler="Fixed price. 7-day delivery. Full code ownership. No Elementor. No bloat."
          />
        </div>

      </main>

      <SiteFooter locale="in" />
    </>
  );
}
