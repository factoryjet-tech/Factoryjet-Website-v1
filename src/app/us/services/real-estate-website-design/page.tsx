import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Real Estate Website Design for US Agents & Brokerages | FactoryJet',
  description:
    'Custom real estate websites with IDX integration and neighborhood pages — built to rank on local search. Agent sites from $2,499. 7-day delivery. 60–70% below US agency rates.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Real Estate Website Design for US Agents & Brokerages | FactoryJet',
    description:
      'Real estate websites that rank locally. IDX integration, neighborhood pages, lead capture — custom design from $2,499. No ongoing platform fees. 7-day delivery.',
    url: 'https://factoryjet.com/us/services/real-estate-website-design',
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet — Real Estate Website Design USA' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Website Design | FactoryJet',
    description: 'Custom real estate agent websites with IDX from $2,499. 7-day delivery. No ongoing platform fees.',
    images: ['https://factoryjet.com/logo.png'],
  },
  alternates: { canonical: 'https://factoryjet.com/us/services/real-estate-website-design' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Hero from '@/components/v2/Hero';
import LogoBar from '@/components/v2/LogoBar';
import BigThreeTrustBlock from '@/components/v2/BigThreeTrustBlock';
import ServiceExplanation from '@/components/v2/ServiceExplanation';
import StrategicDarkSection from '@/components/v2/StrategicDarkSection';
import IndustriesGrid from '@/components/v2/IndustriesGrid';
import ServiceJourneyRow, { type ServiceJourneyStage } from '@/components/v2/ServiceJourneyRow';
import CityContextSection from '@/components/v2/CityContextSection';
import ComparisonTable, { CompareIcon } from '@/components/v2/ComparisonTable';
import PricingTiers from '@/components/v2/PricingTiers';
import TestimonialsSection from '@/components/v2/TestimonialsSection';
import FAQ from '@/components/v2/FAQ';
import FinalCTA from '@/components/v2/FinalCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Schema
───────────────────────────────────────────────────────────────────────────── */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a real estate website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A real estate agent website from FactoryJet starts at $2,499 for a custom 8-page site with IDX integration, neighborhood pages, lead capture, and mobile optimization. Brokerage websites with team rosters, multiple office locations, and advanced search start at $4,500. Property management company sites with tenant/owner portals start at $6,500. US real estate web agencies typically charge $8,000–$30,000 for comparable work. Our 7-day delivery guarantee applies to agent sites up to 10 pages.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is IDX and do I need it on my real estate website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "IDX (Internet Data Exchange) is the system that lets your website display live MLS listings — properties from the Multiple Listing Service, updated in near-real-time. If you're an active agent who wants buyers to search listings directly on your site, IDX is essential. It keeps visitors on your site instead of sending them to Zillow or Realtor.com. We integrate with major IDX providers including iHomefinder, Showcase IDX, and RETS-based connections. IDX integration adds $300–$800 to your project depending on the provider and your MLS.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why doesn\'t a Zillow Premier Agent profile replace a real estate website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Zillow Premier Agent gets your profile in front of buyers searching on Zillow — but you're paying Zillow for leads, not building an asset you own. A custom website builds your own search visibility: when someone searches 'real estate agent in [city]' or '[neighborhood] homes for sale,' your site appears. Your Zillow profile doesn't. Over time, a website that ranks organically generates leads for free, while Zillow leads have an ongoing cost-per-lead. Most successful agents run both — but the website builds long-term equity that the platform profile can't.",
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Real Estate Website Design',
  provider: {
    '@type': 'Organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
    logo: 'https://factoryjet.com/logo.png',
    areaServed: { '@type': 'Country', name: 'United States' },
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Real Estate Agent Website',
      description: 'Custom 8-page agent site with IDX integration, neighborhood pages, and lead capture.',
      price: '2499',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Brokerage Website',
      description: 'Multi-agent brokerage site with team roster, office locations, and advanced IDX search.',
      price: '4500',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'USA', item: 'https://factoryjet.com/us' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://factoryjet.com/us/services' },
    { '@type': 'ListItem', position: 4, name: 'Real Estate Website Design', item: 'https://factoryjet.com/us/services/real-estate-website-design' },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────────────────── */

const journeyStages: ServiceJourneyStage[] = [
  {
    stage: '01',
    title: 'Discovery & Strategy',
    description:
      'We map your market — target neighborhoods, buyer vs. seller focus, competitor sites, and the search terms your clients use. Your site is built around your specific geography, not a generic real estate template.',
    duration: 'Day 1',
  },
  {
    stage: '02',
    title: 'Design — Agent Brand First',
    description:
      'Real estate is a relationship business. Your site leads with your face, your track record, and your market expertise — not just listings. We design a homepage that builds trust before it shows a search bar.',
    duration: 'Days 1–3',
  },
  {
    stage: '03',
    title: 'IDX Integration',
    description:
      'We connect your IDX provider, configure search filters for your MLS, and style the listing display to match your brand. No off-the-shelf widget look — listings look native to your site.',
    duration: 'Days 3–5',
  },
  {
    stage: '04',
    title: 'Neighborhood Pages & Local SEO',
    description:
      'Every target neighborhood gets its own page: market data, what the area is like, schools, and what you love about it. These pages are your primary organic search targets.',
    duration: 'Days 4–6',
  },
  {
    stage: '05',
    title: 'Launch & Lead Flow Setup',
    description:
      'Site goes live on your domain. CRM integration configured, contact forms connected, and Google Analytics + Search Console set up. You start capturing leads on day one.',
    duration: 'Day 7',
  },
];

const faqCategories = [
  {
    category: 'Real Estate Website Basics',
    items: [
      {
        question: 'What should a real estate agent website include?',
        answer:
          "A high-performing real estate agent website needs: a strong above-the-fold section with your photo, your market, and a clear CTA (home valuation or search listings); a neighborhood page for every area you work in; an IDX listing search with map view; a buyer and seller resource section; past sales / testimonials that demonstrate local market knowledge; and lead capture that offers something valuable (home valuation, neighborhood guide) in exchange for contact information. Generic real estate sites fail because they look identical to every other agent's site. The best ones are specific to the agent's market and personality.",
      },
      {
        question: 'How much does a real estate agent website cost?',
        answer:
          "A custom real estate agent website from FactoryJet starts at $2,499 — that's a custom 8-page site with IDX integration, up to 5 neighborhood pages, lead capture forms, mobile optimization, and on-page SEO setup. Compare that to US real estate web agencies that charge $8,000–$20,000 for comparable work. Brokerage sites with team rosters and multi-office support start at $4,500. Property management sites with tenant/owner portals start at $6,500.",
      },
      {
        question: 'Do I need a website if I have a Zillow Premier Agent profile?',
        answer:
          "Zillow and a website serve different purposes. Zillow puts you in front of buyers who are already searching on Zillow — you pay per lead, and the moment you stop paying, you disappear. A website builds organic search visibility: when someone searches 'real estate agent in [neighborhood]' or '[city] homes for sale,' your site ranks — not your Zillow profile. Over 3–5 years, a website that ranks generates leads at near-zero cost. Zillow leads keep costing you per contact. The top-producing agents in most markets run both — but the website builds an asset. Zillow is a rental.",
      },
      {
        question: 'What is IDX integration and how does it work on my website?',
        answer:
          "IDX (Internet Data Exchange) is the data-sharing agreement that lets your website display live MLS listings. When a buyer searches for homes on your site, they see real-time listing data from the MLS — the same data on Zillow, but on your branded website where you control the experience. We integrate with major IDX providers: iHomefinder, Showcase IDX, Homes.com IDX, and direct RETS/RESO connections depending on your MLS. IDX integration adds $300–$800 to your project. Your MLS membership also requires IDX compliance — we handle the technical compliance requirements.",
      },
    ],
  },
  {
    category: 'SEO for Real Estate',
    items: [
      {
        question: 'How do I rank on Google for real estate searches in my city?',
        answer:
          "Local real estate SEO is about neighborhood-specific content. Google does not rank generic pages ('Denver homes for sale') highly unless you have enormous domain authority. What ranks are specific, locally authoritative pages: 'Washington Park Denver homes for sale,' 'Cherry Creek Denver condos,' '[specific neighborhood] market report.' FactoryJet builds a dedicated page for every neighborhood you target. Each page has: your expert commentary on the area, market statistics, school information, what you love about the neighborhood, and an IDX search filtered to that area. These pages are your primary organic traffic engine.",
      },
      {
        question: 'How long does it take to rank on Google for real estate terms?',
        answer:
          "New websites typically take 3–6 months to establish domain authority and begin ranking meaningfully. Highly competitive terms like '[major city] real estate agent' may take 12–18 months. Neighborhood-specific terms are less competitive and rank faster — often within 60–90 days of launch. The SEO work we do at launch (meta titles, schema markup, neighborhood pages, internal linking) sets the foundation. Consistent content additions — market reports, blog posts, new neighborhood pages — accelerate the timeline.",
      },
      {
        question: 'Do you write the content for neighborhood pages?',
        answer:
          "We can write neighborhood page content as an add-on ($150–$250 per neighborhood page). Our copywriters research each area and write about schools, commute times, community character, and housing stock. However, the best neighborhood pages have your voice and your local knowledge — things a writer can't replicate. We provide a content template for each neighborhood that prompts you with exactly what to fill in. Most agents do a 30-minute voice memo per neighborhood and we write from that. The result is content that's authentically yours.",
      },
      {
        question: 'Should my real estate website have a blog?',
        answer:
          "Yes — a real estate blog done well is one of the highest-ROI SEO investments available to agents. The right content: monthly market reports for each neighborhood you serve, buyer and seller guides ('How to Buy a Home in Denver in 2025'), answers to questions your clients ask repeatedly, and hyperlocal posts ('Best Coffee Shops in Washington Park'). This content ranks for long-tail searches and positions you as the local expert. We build the blog infrastructure into your site. A content add-on is available if you want us to write the initial posts.",
      },
    ],
  },
  {
    category: 'Process & Timeline',
    items: [
      {
        question: 'How long does it take to build a real estate website?',
        answer:
          "FactoryJet delivers custom real estate agent websites in 7 business days for sites up to 10 pages. Brokerage sites with team rosters and multiple office locations take 14–21 days. Property management platforms with tenant/owner portals take 3–6 weeks. Timeline starts from design approval. We send a full homepage design within 48 hours of kickoff — your review and approval is the only variable we don't control.",
      },
      {
        question: 'What do I need to provide to start?',
        answer:
          "To kick off your real estate website: your logo and headshots (professional photo is critical for real estate sites), a list of the neighborhoods you work in, your IDX provider login credentials (or we help you select and set one up), your license number and brokerage information, examples of real estate sites you like, and your bio. We provide a simple intake form that collects all of this in under 20 minutes. You don't need to write copy or design anything — just answer our questions.",
      },
      {
        question: 'Can you redesign my current real estate website?',
        answer:
          "Yes — redesigns are common. Many agents have sites on older platforms (Agent Image, Real Geeks, BoomTown) that are slow, look dated, or can't be customized without paying per change. We redesign onto modern Next.js or WordPress, keeping your domain, migrating your content, setting up 301 redirects to preserve your existing search rankings, and integrating your current IDX provider. Redesign pricing is typically 20–30% lower than a new build of the same scope. See our website redesign service for details.",
      },
      {
        question: 'Do you build sites for property management companies as well?',
        answer:
          "Yes — property management is a distinct use case from agent sites. Property management websites need: a public marketing site for owner acquisition and tenant search, a tenant portal (online rent payment, maintenance requests, lease documents), an owner portal (financial reporting, vacancy status, maintenance updates), and lead generation for new property management contracts. This is a web application build, not just a website — pricing starts at $6,500 and typically runs $8,000–$15,000 depending on portal complexity.",
      },
    ],
  },
  {
    category: 'Lead Generation & CRM',
    items: [
      {
        question: 'How does a real estate website generate leads?',
        answer:
          "The highest-converting real estate lead magnets are: (1) Instant home valuation — 'Find out what your home is worth' captures seller leads with high intent. (2) Neighborhood guides — buyers trade their email for a PDF about the area they're researching. (3) Listing alerts — 'Get notified when homes matching your criteria hit the market' captures buyer leads early in the search process. (4) Mortgage calculator — keeps buyers on your site longer and prompts contact. FactoryJet builds all four into your site. We also connect your CRM so leads flow directly to HubSpot, Follow Up Boss, Salesforce, or whatever you use.",
      },
      {
        question: 'Can you integrate my real estate website with my CRM?',
        answer:
          "Yes — CRM integration is standard on all real estate site builds. We connect to the most common real estate CRMs: Follow Up Boss, BoomTown, kvCORE, HubSpot, Salesforce, and Pipedrive. When a buyer fills out a home search form or a seller requests a home valuation, the lead goes directly to your CRM with source tracking so you know which page generated the lead. We also set up automated email sequences in your CRM for new lead follow-up — many agents don't realize this is available.",
      },
      {
        question: 'How do I capture home seller leads on my website?',
        answer:
          "Seller lead capture starts with a home valuation tool — an embedded form where homeowners enter their address and get a preliminary estimate. The best implementations combine an instant AVM (automated valuation model) estimate with a follow-up from you for a professional CMA. We integrate with leading home valuation tools (Homebot, HouseCanary, or Cloud CMA) or implement a simple form that captures the address and promises a manual follow-up within 24 hours. In our experience, the manual follow-up promise converts better than the instant AVM alone — it creates a reason to contact the lead.",
      },
      {
        question: 'What makes a real estate website convert visitors into leads?',
        answer:
          "The three conversion killers on most real estate websites: (1) Generic stock photography — nobody trusts a real estate site that uses the same Getty Images photo as every other agent. Your face, your listings, and your neighborhood are what build trust. (2) A single contact form at the bottom — multiple lead capture points matched to where the visitor is in their journey (researching neighborhoods, calculating affordability, ready to list) dramatically outperform a single form. (3) No social proof specific to your market — national reviews don't convince a Denver buyer as much as 'I sold 23 homes in Washington Park last year.' We build all three conversion elements into your site.",
      },
    ],
  },
  {
    category: 'Platforms & Technology',
    items: [
      {
        question: 'What platform do you build real estate websites on?',
        answer:
          "We build on Next.js (for performance-first sites with excellent Core Web Vitals) or WordPress (for agents who want to update content themselves without a developer). Next.js sites consistently score 90+ on Google Lighthouse — critical for a competitive local SEO landscape. WordPress sites use a lightweight custom theme, never Elementor or Divi page builders (which tank performance). For brokerages with large team rosters and complex content needs, WordPress with a custom admin panel is the better choice.",
      },
      {
        question: 'What IDX providers do you work with?',
        answer:
          "FactoryJet integrates with all major IDX providers: iHomefinder, Showcase IDX, Homes.com IDX, Diverse Solutions (dsIDXpress), Wolfnet, and direct RETS/RESO API connections for agents with direct MLS access. We recommend Showcase IDX for Next.js builds (best API flexibility and design customization) and iHomefinder for WordPress builds (strong plugin ecosystem). IDX setup fees are $300–$800 depending on provider and integration complexity. Monthly IDX service fees ($50–$150/month) are paid directly to the IDX provider.",
      },
      {
        question: 'How does your real estate website compare to Real Geeks, kvCORE, or BoomTown?',
        answer:
          "Real Geeks, kvCORE, and BoomTown are all-in-one platforms that bundle a website with a CRM and lead generation tools. They're strong if you want everything managed in one system. The tradeoffs: you pay $500–$1,500/month ongoing, the websites look similar to every other agent on the platform, you can't customize the design meaningfully, and performance scores are typically mediocre (40–65 Lighthouse). FactoryJet builds a custom site you own outright, integrated with whatever CRM you prefer. Higher upfront cost, zero ongoing platform fee, fully customized. Different trade-offs — we can help you evaluate which makes more sense for your business model.",
      },
      {
        question: 'Do you build real estate websites for teams and brokerages?',
        answer:
          "Yes — brokerage and team sites have different requirements than individual agent sites. They need: a team roster page with individual agent profiles and bios, a listings page that aggregates listings across all team members, office location pages (for multi-office brokerages), a recruitment page targeting agent talent, and often a co-branded template that individual agents can personalize while staying within brand guidelines. Brokerage sites start at $4,500. Large regional brokerages with complex organizational structures are quoted after a discovery call.",
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────────────────────── */

export default function RealEstateWebsiteDesignPage() {
  return (
    <>
      {/* JSON-LD */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      {/* ── 1. HERO ── */}
      <Hero
        eyebrow="REAL ESTATE WEBSITE DESIGN"
        headline="Real Estate Websites That Rank Locally and Convert Visitors Into Leads"
        subheadline="Custom agent, team, and brokerage websites with IDX integration and neighborhood pages — built to outrank generic templates on local search. Starting at $2,499. 7-day delivery."
        primaryCta={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCta={{ label: 'See Pricing', href: '#pricing' }}
        trustSignals={[
          '500+ US businesses served',
          'IDX integration included',
          '7-day delivery guarantee',
        ]}
        rightSlot={
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-4">
            <p className="text-xs font-fj-mono uppercase tracking-widest text-white/50">
              Platform Comparison: Custom vs. Template
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs font-fj-body pb-2 border-b border-white/10">
              <span className="text-white/40"></span>
              <span className="text-fj-jet-blue font-semibold text-center">FactoryJet</span>
              <span className="text-white/40 text-center">Real Geeks / kvCORE</span>
            </div>
            {[
              ['Monthly Cost', '$0 after build', '$500–$1,500/mo'],
              ['Lighthouse Score', '90+', '40–65'],
              ['Custom Design', '✓ Fully custom', '✗ Template only'],
              ['You Own the Site', '✓ Outright', '✗ Subscription'],
              ['CRM Choice', '✓ Any CRM', '✗ Locked to theirs'],
              ['Neighborhood Pages', '✓ Unlimited', '✗ Limited'],
            ].map(([feature, fj, other]) => (
              <div key={feature} className="grid grid-cols-3 gap-2 py-2 border-t border-white/5 items-center text-xs font-fj-body">
                <span className="text-white/50">{feature}</span>
                <span className="text-green-400 text-center">{fj}</span>
                <span className="text-white/40 text-center">{other}</span>
              </div>
            ))}
          </div>
        }
      />

      {/* ── 2. LOGO BAR ── */}
      <LogoBar />

      {/* ── 3. TRUST BLOCK ── */}
      <BigThreeTrustBlock
        stats={[
          { value: '$2,499', label: 'Agent Site Starting Price', sublabel: 'IDX + neighborhood pages included' },
          { value: '7 Days', label: 'Delivery Guarantee', sublabel: 'Live site or full refund' },
          { value: '90+', label: 'Lighthouse Score', sublabel: 'vs. 40–65 on template platforms' },
        ]}
      />

      {/* ── 4. SERVICE EXPLANATION ── */}
      <ServiceExplanation
        eyebrow="WHY MOST REAL ESTATE WEBSITES FAIL"
        headline="Generic template sites don't rank. Neighborhood-specific sites do."
        body={[
          "The problem with most real estate website platforms — Real Geeks, Agent Image, even custom WordPress builds from non-specialist agencies — is that they're built for every agent in every market. Which means they're optimized for none of them.",
          "Google's local search algorithm rewards specificity. A page titled 'Washington Park Denver Homes for Sale' with original market commentary, local school data, and a neighborhood-specific listing search will out-rank a generic 'Denver Real Estate' homepage every time.",
          "FactoryJet builds real estate sites around your specific markets. Every neighborhood you work in gets its own page. Every page is written with your voice and your local knowledge. IDX is filtered to that specific area. The result is a site that ranks for the exact searches your clients are making — not the generic searches every other agent is also trying to win.",
        ]}
        rightSlot={
          <div className="rounded-2xl border border-fj-charcoal/20 bg-fj-cream p-6 space-y-3">
            <p className="text-xs font-fj-mono uppercase tracking-widest text-fj-ink/50 mb-3">
              Every Site Includes
            </p>
            {[
              { item: 'Custom homepage with agent branding', note: 'Your photo, track record, market' },
              { item: 'IDX listing search', note: 'iHomefinder, Showcase IDX, or yours' },
              { item: 'Neighborhood pages (up to 5)', note: 'Market data, schools, local expertise' },
              { item: 'Home valuation lead capture', note: 'Seller lead magnet built in' },
              { item: 'Buyer & seller resource pages', note: 'Content that converts fence-sitters' },
              { item: 'CRM integration', note: 'Follow Up Boss, HubSpot, and more' },
              { item: 'On-page SEO setup', note: 'Schema markup, meta, Search Console' },
              { item: '7-day delivery', note: 'Agent sites up to 10 pages' },
            ].map(({ item, note }) => (
              <div key={item} className="flex items-start gap-3 py-2 border-t border-fj-charcoal/10 first:border-0">
                <div className="w-2 h-2 rounded-full bg-fj-jet-blue mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold font-fj-body text-fj-ink">{item}</p>
                  <p className="text-xs text-fj-ink/50 font-fj-body">{note}</p>
                </div>
              </div>
            ))}
          </div>
        }
      />

      {/* ── 5. STRATEGIC DARK SECTION ── */}
      <StrategicDarkSection
        eyebrow="THE IDX TRAP"
        headline="Paying $800/month for a platform that makes every agent's site look the same is not a marketing strategy."
        body="Real estate technology platforms have convinced agents that the answer to lead generation is a better CRM or a higher Zillow spend. It's not. The agents generating the most organic leads in every market have one thing in common: a website with deep, specific content about the exact neighborhoods their clients are searching. Not a platform. Not a template. A real website that Google has a reason to rank. FactoryJet builds that website — for $2,499, once, with no ongoing platform fee."
        stats={[
          { value: '$800/mo', label: 'Average real estate platform cost', sub: 'Real Geeks, BoomTown, kvCORE' },
          { value: '$0/mo', label: 'FactoryJet ongoing platform cost', sub: 'Pay once. Own it forever.' },
          { value: '3–6 mo', label: 'Typical time to rank on Google', sub: 'With neighborhood-specific pages' },
        ]}
      />

      {/* ── 6. INDUSTRIES / USE CASES ── */}
      <IndustriesGrid
        eyebrow="WHO WE BUILD FOR"
        headline="Real estate websites for every business model in the industry"
        items={[
          {
            title: 'Individual Agents',
            description: 'Custom agent sites with IDX, neighborhood pages, home valuation tools, and personal branding. Starting at $2,499.',
            icon: '👤',
          },
          {
            title: 'Agent Teams',
            description: 'Team roster pages, shared listing search, team member profiles, and a unified brand with individual agent personalization.',
            icon: '👥',
          },
          {
            title: 'Brokerages',
            description: 'Multi-office brokerage sites with full agent roster, recruitment pages, brand compliance controls, and office location pages.',
            icon: '🏢',
          },
          {
            title: 'Property Management',
            description: 'Public marketing site + tenant portal (rent payments, maintenance) + owner portal (financials, vacancy). Starting at $6,500.',
            icon: '🔑',
          },
          {
            title: 'Commercial Real Estate',
            description: 'Commercial property listing sites, investment portfolio showcases, and market report pages for commercial brokers.',
            icon: '🏗️',
          },
          {
            title: 'Real Estate Developers',
            description: 'Project marketing sites for new developments — floor plans, virtual tours, reservation/waitlist capture, and broker co-op pages.',
            icon: '📐',
          },
        ]}
      />

      {/* ── 7. SERVICE JOURNEY ── */}
      <div id="process">
        <ServiceJourneyRow
          eyebrow="OUR PROCESS"
          headline="From Market Strategy to Live Site — in 5 Stages"
          subheadline="Every real estate website FactoryJet builds starts with your market, not a template. Here's how a typical agent site comes together in 7 days."
          stages={journeyStages}
          cta={{ label: 'Get a Free Quote', href: '/contact' }}
        />
      </div>

      {/* ── 8. CITY CONTEXT ── */}
      <CityContextSection
        eyebrow="MARKETS WE SERVE"
        headline="Real estate website design for agents across the US"
        body="FactoryJet builds real estate websites for agents, teams, and brokerages in every US market. Our SEO work is US-market-specific — we research neighborhood-level search terms in your city and build pages that target them."
        cities={[
          { name: 'Austin, TX', href: '/us/cities/austin' },
          { name: 'Miami, FL', href: '/us/cities/miami' },
          { name: 'Denver, CO', href: '/us/cities/denver' },
          { name: 'Nashville, TN', href: '/us/cities/nashville' },
          { name: 'Charlotte, NC', href: '/us/cities/charlotte' },
          { name: 'Portland, OR', href: '/us/cities/portland' },
          { name: 'Raleigh, NC', href: '/us/cities/raleigh' },
          { name: 'Tampa, FL', href: '/us/cities/tampa' },
        ]}
      />

      {/* ── 9. COMPARISON TABLE ── */}
      <ComparisonTable
        eyebrow="HOW WE COMPARE"
        headline="FactoryJet vs. Real Estate Platforms vs. Generic Web Agencies"
        columns={['FactoryJet', 'Real Geeks / kvCORE', 'Generic Web Agency', 'DIY (Squarespace)']}
        rows={[
          {
            feature: 'Starting Price',
            values: ['$2,499 (one-time)', '$500–$1,500/mo', '$8,000+', '$16–$49/mo'],
          },
          {
            feature: 'IDX Integration',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="rg" kind="yes" />,
              <CompareIcon key="ga" kind="partial" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
          {
            feature: 'Custom Design',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="rg" kind="no" />,
              <CompareIcon key="ga" kind="yes" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
          {
            feature: 'Neighborhood Pages',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="rg" kind="partial" />,
              <CompareIcon key="ga" kind="partial" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
          {
            feature: 'Lighthouse Score 90+',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="rg" kind="no" />,
              <CompareIcon key="ga" kind="partial" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
          {
            feature: 'You Own the Site Outright',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="rg" kind="no" />,
              <CompareIcon key="ga" kind="yes" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
          {
            feature: 'CRM Choice (Any)',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="rg" kind="no" />,
              <CompareIcon key="ga" kind="partial" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
          {
            feature: 'Home Valuation Lead Capture',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="rg" kind="yes" />,
              <CompareIcon key="ga" kind="partial" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
          {
            feature: '7-Day Delivery',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="rg" kind="no" />,
              <CompareIcon key="ga" kind="no" />,
              <CompareIcon key="diy" kind="yes" />,
            ],
          },
          {
            feature: 'Local SEO Strategy',
            values: [
              <CompareIcon key="fj" kind="yes" />,
              <CompareIcon key="rg" kind="partial" />,
              <CompareIcon key="ga" kind="partial" />,
              <CompareIcon key="diy" kind="no" />,
            ],
          },
        ]}
      />

      {/* ── 10. PRICING TIERS ── */}
      <div id="pricing">
        <PricingTiers
          eyebrow="REAL ESTATE WEBSITE PRICING"
          headline="Fixed-Price Real Estate Websites — No Ongoing Platform Fees"
          tiers={[
            {
              name: 'Agent',
              price: '$2,499',
              description: 'Custom website for individual agents with IDX, neighborhood pages, and lead capture. Live in 7 days.',
              features: [
                'Up to 8 pages',
                'Custom design — your brand, your face',
                'IDX integration (your provider)',
                'Up to 5 neighborhood pages',
                'Home valuation lead capture',
                'Buyer & seller resource pages',
                'CRM integration',
                'On-page SEO setup',
                'Mobile-optimized',
                '7-day delivery',
                '30 days post-launch support',
              ],
              cta: { label: 'Get Started', href: '/contact' },
            },
            {
              name: 'Team / Brokerage',
              price: '$4,500',
              description: 'Multi-agent site with team roster, individual profiles, combined listing search, and recruitment page.',
              features: [
                'Up to 20 pages',
                'Team roster with agent profiles',
                'Combined IDX listing search',
                'Up to 10 neighborhood pages',
                'Recruitment / careers page',
                'Office location pages',
                'Advanced lead routing by agent',
                'Blog / market reports',
                'CRM integration',
                '14-day delivery',
                '30 days post-launch support',
              ],
              cta: { label: 'Get Started', href: '/contact' },
              highlight: true,
              badge: 'Most Popular',
            },
            {
              name: 'Property Management',
              price: '$6,500',
              description: 'Marketing site + tenant portal + owner portal. Online rent, maintenance requests, and financial reporting.',
              features: [
                'Public marketing site',
                'Tenant portal (rent pay, maintenance)',
                'Owner portal (reports, vacancy)',
                'Online rent payment (Stripe)',
                'Maintenance request workflow',
                'Lease document storage',
                'Email notification system',
                'Owner financial reporting',
                'Property listing management',
                '4–6 week delivery',
                '60 days post-launch support',
              ],
              cta: { label: 'Get Started', href: '/contact' },
            },
          ]}
          footnote="IDX provider monthly fees ($50–$150/mo) are paid directly to your IDX provider — not FactoryJet. No ongoing FactoryJet fees."
        />
      </div>

      {/* ── 11. RELATED SERVICES ── */}
      <IndustriesGrid
        eyebrow="RELATED SERVICES"
        headline="Other FactoryJet services used by real estate professionals"
        items={[
          {
            title: 'Website Redesign',
            description: 'Already have a site? Modernize it with faster load times, new design, and better SEO — without losing your existing rankings.',
            icon: '🔄',
            href: '/us/services/website-redesign',
          },
          {
            title: 'Law Firm Website Design',
            description: 'Looking for real estate attorney website design? We specialize in practice-area-specific legal sites.',
            icon: '⚖️',
            href: '/us/services/law-firm-website-design',
          },
          {
            title: 'Transparent Pricing',
            description: 'See all FactoryJet service pricing — fixed packages, no hourly billing, no surprise invoices.',
            icon: '💰',
            href: '/us/pricing',
          },
          {
            title: 'AI Automation',
            description: 'Automate your lead follow-up, listing alerts, and client communication workflows. Starting at $2,500.',
            icon: '🤖',
            href: '/us/services/ai-automation',
          },
        ]}
      />

      {/* ── 12. TESTIMONIALS ── */}
      <TestimonialsSection
        eyebrow="CLIENT RESULTS"
        headline="What real estate professionals say about FactoryJet"
        testimonials={[
          {
            quote: "I was paying $1,100 a month for a Real Geeks site that looked like every other agent in Denver. FactoryJet built me a custom site for $3,200. My Lighthouse score went from 52 to 94. Three of my neighborhood pages are now on page 1 for their search terms.",
            author: 'Michelle K.',
            role: 'Realtor',
            company: 'Denver, CO',
          },
          {
            quote: "Our brokerage has 14 agents. We needed a site that represented the whole team and gave each agent a profile page. FactoryJet delivered in 18 days. The lead routing to individual agents' CRMs works perfectly.",
            author: 'Robert H.',
            role: 'Broker/Owner',
            company: 'Charlotte, NC',
          },
          {
            quote: "The property management portal took 5 weeks. Our tenants can pay rent, submit maintenance requests, and download their lease documents. Owners get automated monthly financial reports. The ROI was immediate — we stopped paying $400/month for three separate tools.",
            author: 'Lisa M.',
            role: 'Owner',
            company: 'Nashville Property Management',
          },
        ]}
      />

      {/* ── 13. FAQ ── */}
      <FAQ
        eyebrow="REAL ESTATE WEBSITE FAQ"
        headline="Everything real estate professionals ask about website design"
        categories={faqCategories}
      />

      {/* ── 14. FINAL CTA ── */}
      <FinalCTA
        eyebrow="START YOUR PROJECT"
        headline="Get a custom real estate website that ranks in your market — in 7 days"
        subheadline="Tell us your market, your neighborhoods, and your IDX provider. We'll send a free quote within 24 hours. No sales call required."
        primaryCta={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCta={{ label: 'See All Pricing', href: '/us/pricing' }}
        trustSignals={[
          '7-day delivery guarantee',
          'IDX integration included',
          'No ongoing platform fees',
        ]}
      />

      <SiteFooter />
    </>
  );
}
