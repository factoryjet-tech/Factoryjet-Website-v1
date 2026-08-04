/**
 * Server-side JSON-LD schema data for US e-commerce city landing pages.
 *
 * WHY THIS FILE EXISTS:
 *   The CityLandingPage.jsx SchemaBlock renders JSON-LD client-side ("use client").
 *   AI crawlers (GPTBot, ClaudeBot, PerplexityBot) and Google's mobile-first indexer
 *   need schema in the *initial HTML response* — not post-JS hydration.
 *   This file is imported by each city's page.tsx (a React Server Component) so the
 *   full @graph schema (WebPage + WebSite + Organization + Service + FAQPage +
 *   BreadcrumbList) is emitted as static HTML on every request.
 *
 * FAQ SOURCE OF TRUTH:
 *   The FAQPage @graph entry is built from the `faqs` array each page.tsx passes into
 *   getEcommerceCitySchema() — the exact same array rendered by <FAQ items={...} />.
 *   There is no separate FAQ copy maintained in this file, so the schema cannot drift
 *   from what's visible on the page.
 */

// ─── Shared service catalog (mirrors SERVICES in CityLandingPage.jsx) ──────────

const SERVICES_CATALOG = [
  {
    '@type': 'Offer' as const,
    name: 'Shopify Store Development',
    description:
      'Custom themes, product pages, checkout optimization, and app integrations. Fully managed from zero to revenue-generating launch.',
  },
  {
    '@type': 'Offer' as const,
    name: 'WooCommerce E-Commerce',
    description:
      'WordPress-powered stores with full customization. Ideal for content-heavy brands that need SEO authority and e-commerce combined.',
  },
  {
    '@type': 'Offer' as const,
    name: 'Custom Headless E-Commerce',
    description:
      'Built on Next.js or headless architecture with Shopify/Medusa backend. Maximum performance, flexibility, and Lighthouse 95+ scores.',
  },
  {
    '@type': 'Offer' as const,
    name: 'B2B / Wholesale Portal',
    description:
      'Dealer portals, bulk ordering, tiered pricing, and purchase order workflows. Built for manufacturers, distributors, and wholesalers.',
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────

import type { FAQItem } from '@/components/v2/FAQ';

type CitySchemaInput = {
  city: string;
  state: string;
  stateFullName: string;
  slug: string;
  metaTitle: string;
  metaDesc: string;
  heroSub: string;
};

// ─── Schema builder ───────────────────────────────────────────────────────────

function buildSchema(c: CitySchemaInput, faqs: readonly FAQItem[]): string {
  const url = `https://factoryjet.com/${c.slug}/ecommerce-development/`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: c.metaTitle,
        description: c.metaDesc,
        isPartOf: { '@id': 'https://factoryjet.com/#website' },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        about: { '@id': `${url}#service` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://factoryjet.com/#website',
        url: 'https://factoryjet.com/',
        name: 'FactoryJet Technologies',
        publisher: { '@id': 'https://factoryjet.com/#organization' },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Organization',
        '@id': 'https://factoryjet.com/#organization',
        name: 'FactoryJet Technologies',
        url: 'https://factoryjet.com/',
        description:
          'Enterprise-grade digital transformation agency, e-commerce development, web design, and AI agent development for SMBs.',
        sameAs: ['https://www.linkedin.com/company/factoryjet'],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          availableLanguage: 'English',
        },
        
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `E-Commerce Development in ${c.city}, ${c.state}`,
        description: c.heroSub,
        provider: { '@id': 'https://factoryjet.com/#organization' },
        areaServed: {
          '@type': 'City',
          name: c.city,
          containedInPlace: {
            '@type': 'State',
            name: c.stateFullName,
            sameAs: `https://en.wikipedia.org/wiki/${c.stateFullName.replace(/ /g, '_')}`,
          },
        },
        serviceType: [
          'E-Commerce Development',
          'Shopify Development',
          'WooCommerce Development',
          'AI Agent Development',
          'Custom Web Development',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'E-Commerce Services',
          itemListElement: SERVICES_CATALOG,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'E-Commerce Development',
            item: 'https://factoryjet.com/services/ecommerce-development/',
          },
          { '@type': 'ListItem', position: 3, name: `${c.city}, ${c.state}`, item: url },
        ],
      },
      {
        '@type': 'HowTo',
        name: `How FactoryJet builds your ${c.city} e-commerce store in 7 days`,
        description: `Our 7-day process for launching a professional, conversion-optimized e-commerce store for ${c.city} businesses.`,
        totalTime: 'P7D',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Day 1 | Discovery & Platform Selection',
            text: `We learn your products, brand, and goals. We recommend Shopify, WooCommerce, or custom, whichever fits your ${c.city} business best.`,
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Days 2–3 | Store Design & Branding',
            text: 'We design your storefront with mobile-first layouts, brand colors, and conversion-focused product pages that turn visitors into buyers.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Days 4–5 | Product Setup & Development',
            text: 'We build and configure your product catalog, payment gateways, shipping zones, and all custom functionality your store needs.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Day 6 | Testing, SEO & Performance',
            text: 'We run full QA across devices, optimize page speed, add schema markup, and configure analytics so you launch ready to rank and sell.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Day 7 | Launch & Handoff',
            text: `Your ${c.city} e-commerce store goes live. We provide full training, documentation, and 30-day post-launch support.`,
          },
        ],
      },
    ],
  };
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}

// ─── City data ────────────────────────────────────────────────────────────────

const CITIES: Record<string, CitySchemaInput> = {

  // ── Austin, TX ──────────────────────────────────────────────────────────────
  // Content version: v2 · Updated 2026-05-19 · Sync with page.tsx + MDX
  austin: {
    city: 'Austin', state: 'TX', stateFullName: 'Texas', slug: 'austin',
    metaTitle: 'Ecommerce Development Austin TX | 7-Day Delivery, Fixed-Price | FactoryJet',
    metaDesc: 'Austin\'s most affordable ecommerce development agency. Shopify, WooCommerce & custom online stores built in 7 days, at a fixed, transparent price. 500+ stores delivered. Free audit.',
    heroSub: 'FactoryJet builds Shopify, WooCommerce, and custom ecommerce stores for Austin small businesses, delivered in 7 days, at a fixed, transparent price. 500+ stores launched, 4.9★ rating.',
  },

  // ── Miami, FL ───────────────────────────────────────────────────────────────
  miami: {
    city: 'Miami', state: 'FL', stateFullName: 'Florida', slug: 'miami',
    metaTitle: 'Shopify Developer Miami FL | 7-Day Delivery, Fixed-Price | FactoryJet',
    metaDesc: 'Top-rated Shopify developer in Miami, Florida: stores live in 7 days, at a fixed price. Latin America e-commerce gateway: Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    heroSub: 'The only Miami e-commerce agency that launches in 7 days at a fixed, transparent price. Shopify, WooCommerce & AI-powered stores for South Florida\'s luxury brands, Latin-American entrepreneurs, DTC founders, and 26M annual tourists. 500+ projects, 4.9★ rating.',
  },

  // ── Denver, CO ──────────────────────────────────────────────────────────────
  denver: {
    city: 'Denver', state: 'CO', stateFullName: 'Colorado', slug: 'denver',
    metaTitle: 'Shopify Developer Denver CO | 7-Day Delivery, Fixed-Price | FactoryJet',
    metaDesc: 'Top-rated Shopify developer in Denver, Colorado: stores live in 7 days, at a fixed price. Mile High e-commerce specialists: Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    heroSub: 'The only Denver e-commerce agency that launches in 7 days at a fixed, transparent price. Shopify, WooCommerce & AI-powered stores for Colorado\'s outdoor brands, craft breweries, cannabis-adjacent businesses, and tech-first DTC founders. 500+ projects, 4.9★ rating.',
  },

  // ── Nashville, TN ────────────────────────────────────────────────────────────
  nashville: {
    city: 'Nashville', state: 'TN', stateFullName: 'Tennessee', slug: 'nashville',
    metaTitle: 'Shopify Developer Nashville TN | 7-Day Delivery, Fixed-Price | FactoryJet',
    metaDesc: 'Top-rated Shopify developer in Nashville, Tennessee: stores live in 7 days, at a fixed price. Music City e-commerce specialists: Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    heroSub: 'The only Nashville e-commerce agency that launches in 7 days at a fixed, transparent price. Shopify, WooCommerce & AI-powered stores for Music City\'s artists, healthcare brands, restaurants, tourism businesses, and Tennessee entrepreneurs. 500+ projects, 4.9★ rating.',
  },

  // ── Portland, OR ─────────────────────────────────────────────────────────────
  portland: {
    city: 'Portland', state: 'OR', stateFullName: 'Oregon', slug: 'portland',
    metaTitle: 'Shopify Developer Portland OR | 7-Day Delivery, Fixed-Price | FactoryJet',
    metaDesc: 'Top-rated Shopify developer in Portland, Oregon: stores live in 7 days, at a fixed price. Oregon has NO sales tax, maximize your margins. Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    heroSub: 'The only Portland e-commerce agency that launches in 7 days at a fixed, transparent price. Oregon has zero sales tax: the ultimate margin advantage for DTC brands. Shopify, WooCommerce & AI-powered stores for Portland\'s outdoor brands, independent makers, food businesses, and \'Keep Portland Weird\' entrepreneurs. 500+ projects, 4.9★ rating.',
  },

  // ── Charlotte, NC ────────────────────────────────────────────────────────────
  charlotte: {
    city: 'Charlotte', state: 'NC', stateFullName: 'North Carolina', slug: 'charlotte',
    metaTitle: 'Shopify Developer Charlotte NC | 7-Day Delivery, Fixed-Price | FactoryJet',
    metaDesc: 'Top-rated Shopify developer in Charlotte, North Carolina: stores live in 7 days, at a fixed price. Banking capital e-commerce specialists: Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    heroSub: 'The only Charlotte e-commerce agency that launches in 7 days at a fixed, transparent price. Shopify, WooCommerce & AI-powered stores for Queen City\'s DTC brands, NASCAR ecosystem, financial services adjacent brands, and fast-growing Charlotte tech scene. 500+ projects, 4.9★ rating.',
  },

  // ── Raleigh, NC ──────────────────────────────────────────────────────────────
  raleigh: {
    city: 'Raleigh', state: 'NC', stateFullName: 'North Carolina', slug: 'raleigh',
    metaTitle: 'Shopify Developer Raleigh NC | 7-Day Delivery, Fixed-Price | FactoryJet',
    metaDesc: 'Top-rated Shopify developer in Raleigh, North Carolina: stores live in 7 days, at a fixed price. Research Triangle e-commerce specialists: Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    heroSub: 'The only Raleigh e-commerce agency that launches in 7 days at a fixed, transparent price. Shopify, WooCommerce & AI-powered stores for the Research Triangle\'s tech brands, life sciences companies, NC State entrepreneurs, and Durham-Chapel Hill DTC founders. 500+ projects, 4.9★ rating.',
  },

  // ── Tampa, FL ────────────────────────────────────────────────────────────────
  tampa: {
    city: 'Tampa', state: 'FL', stateFullName: 'Florida', slug: 'tampa',
    metaTitle: 'Shopify Developer Tampa FL | 7-Day Delivery, Fixed-Price | FactoryJet',
    metaDesc: 'Top-rated Shopify developer in Tampa, Florida: stores live in 7 days, at a fixed price. Gulf Coast e-commerce specialists: Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    heroSub: 'The only Tampa e-commerce agency that launches in 7 days at a fixed, transparent price. Shopify, WooCommerce & AI-powered stores for Tampa Bay\'s DTC brands, healthcare companies, defense/aerospace businesses, and Florida\'s thriving Gulf Coast consumer market. 500+ projects, 4.9★ rating.',
  },

  // ── Chattanooga, TN ──────────────────────────────────────────────────────────
  chattanooga: {
    city: 'Chattanooga', state: 'TN', stateFullName: 'Tennessee', slug: 'chattanooga',
    metaTitle: 'Shopify Developer Chattanooga TN | 7-Day Delivery, Fixed-Price | FactoryJet',
    metaDesc: 'Top-rated Shopify developer in Chattanooga, Tennessee: stores live in 7 days, at a fixed price. Gig City 10 Gbps fiber + no state income tax. Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    heroSub: 'Chattanooga\'s Gig City fiber network and zero state income tax make it one of the best US cities to launch an e-commerce business. FactoryJet builds custom Shopify stores for Gig City brands, launched in 7 days, at a fixed, transparent price. 500+ stores, 4.9★ rating.',
  },

  // ── Fargo, ND ────────────────────────────────────────────────────────────────
  fargo: {
    city: 'Fargo', state: 'ND', stateFullName: 'North Dakota', slug: 'fargo',
    metaTitle: 'Shopify Developer Fargo ND | 7-Day Delivery, Fixed-Price | FactoryJet',
    metaDesc: 'Best Shopify developer in Fargo, North Dakota: stores live in 7 days, at a fixed price. Silicon Prairie e-commerce specialists: Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    heroSub: 'Fargo\'s Silicon Prairie is home to Microsoft TechSpark, the Emerging Prairie ecosystem, and some of the fastest-growing businesses in the upper Midwest. FactoryJet builds custom Shopify stores for Fargo-Moorhead businesses, launched in 7 days, at a fraction of what Onsharp or AdShark charge. 500+ stores, 4.9★ rating.',
  },

  // ── Boise, ID ────────────────────────────────────────────────────────────────
  boise: {
    city: 'Boise', state: 'ID', stateFullName: 'Idaho', slug: 'boise',
    metaTitle: 'Shopify Developer Boise ID | 7-Day Delivery, Fixed-Price | FactoryJet',
    metaDesc: 'Best Shopify developer in Boise, Idaho: e-commerce websites live in 7 days, at a fixed price. Treasure Valley specialists: Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    heroSub: 'Boise is one of the fastest-growing cities in America, and the businesses winning online here aren\'t waiting months for a local agency. FactoryJet builds custom Shopify stores for Treasure Valley businesses, launched in 7 days, at a fixed, transparent price. 500+ stores, 4.9★ rating.',
  },

  // ── Lincoln, NE ──────────────────────────────────────────────────────────────
  lincoln: {
    city: 'Lincoln', state: 'NE', stateFullName: 'Nebraska', slug: 'lincoln',
    metaTitle: 'Shopify Agency Lincoln NE | 7-Day Delivery, Fixed-Price | FactoryJet',
    metaDesc: 'Top-rated Shopify agency in Lincoln, Nebraska: stores live in 7 days, at a fixed price. Silicon Prairie e-commerce specialists: Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    heroSub: 'Lincoln is the Silicon Prairie\'s university town, ag-tech hub, and fastest-growing mid-market city. FactoryJet builds custom Shopify stores for Nebraska businesses, launched in 7 days, at a fixed, transparent price. 500+ stores, 4.9★ rating.',
  },

  // ── Sioux Falls, SD ──────────────────────────────────────────────────────────
  'sioux-falls': {
    city: 'Sioux Falls', state: 'SD', stateFullName: 'South Dakota', slug: 'sioux-falls',
    metaTitle: 'Shopify Developer Sioux Falls SD | 7-Day Delivery, Fixed-Price | FactoryJet',
    metaDesc: 'Top-rated Shopify developer in Sioux Falls, South Dakota: stores live in 7 days, at a fixed price. Zero state income tax = higher margins. Shopify, WooCommerce & AI. 500+ projects, 4.9★. Free audit.',
    heroSub: 'South Dakota has zero state income tax: the best business climate in the Midwest. FactoryJet builds custom Shopify stores for Sioux Falls businesses, launched in 7 days, at a fraction of what Lawrence & Schiller or Click Rain charge. 500+ stores, 4.9★ rating.',
  },

};

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Returns the serialized JSON-LD @graph schema string for a given city slug.
 * `faqs` must be the same array passed to that page's <FAQ items={...} /> so the
 * FAQPage schema can never drift from what's visible on the page.
 * Safe to call from a React Server Component / page.tsx.
 * Returns an empty string if the slug is not found.
 */
export function getEcommerceCitySchema(slug: string, faqs: readonly FAQItem[]): string {
  const city = CITIES[slug];
  if (!city) return '';
  return buildSchema(city, faqs);
}
