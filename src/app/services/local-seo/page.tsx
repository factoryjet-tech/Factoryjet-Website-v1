import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { localSeoServicesAlternatesUS } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

import HeroInlineForm from '@/components/HeroInlineForm';
import './local-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/services/local-seo, "Navigator (light)", built 2026-06-02.

   Design: light map-canvas hero (pure CSS, NO image → text LCP), brand palette
   + brand next/font (Plus Jakarta / Inter / Geist Mono), distinctive layout
   (map hero, Proximity·Relevance·Prominence triad, services bento, dark
   scorecard, pin industry cards, reputation dashboard). Source of truth:
   research/mockup-us-services-local-seo-v4.html. Styles in ./local-seo.css
   (scoped under .lseo, ships in the external cached route CSS bundle).

   Perf (target 100/100): no hero image; team image lazy + reserved width/height
   (zero CLS); fixed-height hero/team wrappers (zero CLS); zero page-level JS
   (no scroll-spy); fonts display:'optional' globally. Do NOT add a render-
   blocking webfont or inlineCss. See reference_nextjs_performance_playbook.

   Honesty: no pricing section, CTAs → free-audit modal + Calendly, verified
   claims only (4.9/5, 500+, 7-day / Lighthouse 100), no fabricated metrics
   (the map + reputation cards are illustrative and labeled), no em-dashes.
   Schema: Service + Organization + FAQPage(25) + BreadcrumbList.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const REVIEWED_DATE = 'June 2, 2026';

/* ── FAQ data: 24 across 5 categories ─────────────────────────────────────── */
type FaqGroup = { id: string; label: string; items: { q: string; a: string }[] };

const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    id: 'faq-pricing',
    label: 'Pricing & contracts',
    items: [
      {
        q: 'How much do local SEO services cost in the US?',
        a: 'FactoryJet pricing is fixed and scoped to your goals. The main drivers are how competitive your market is and how many locations you have. We scope every engagement to the work that will actually move your map-pack rankings and calls, then quote it up front on a short call so you know the full cost before work starts. The simplest way to get a real figure is to start with a free local SEO audit.',
      },
      {
        q: 'Do you lock me into a long contract?',
        a: 'No. Every FactoryJet engagement is month-to-month. If we are not earning our keep, you can leave with one billing period of notice. The work should retain you, not the paperwork.',
      },
      {
        q: 'What do I get from the free local SEO audit?',
        a: 'A full review of your Google Business Profile, citations, reviews, and the competitors beating you in the map pack, plus a prioritized 90-day local roadmap. It is a complete picture of why you are not ranking and what to fix first, and you walk away with it whether or not you continue.',
      },
      {
        q: 'Do you offer local SEO services for small businesses?',
        a: 'Yes. Local SEO services for small businesses are a core part of what we do, and we keep them affordable by focusing on the handful of profile, review, and citation fixes that produce the most calls first, instead of a long invoice of busywork. Single-location owners are welcome.',
      },
      {
        q: 'How do I choose the best local SEO company?',
        a: 'The best local SEO companies do four things well: optimize your Google Business Profile, build genuine reviews, keep your citations consistent, and earn local links. Ask any local SEO consultant or expert to report results in calls and bookings, not rankings, and to work month-to-month so they have to keep earning it.',
      },
    ],
  },
  {
    id: 'faq-included',
    label: "What's included",
    items: [
      {
        q: 'What does local SEO with FactoryJet include each month?',
        a: 'We optimize and post to your Google Business Profile, build and respond to reviews, keep your citations consistent, and publish local content and links, then report the calls and bookings it produces. No filler tasks padded onto an invoice.',
      },
      {
        q: 'Do you manage my Google Business Profile directly?',
        a: 'Yes. We tune your categories, services, attributes, photos, posts, and Q and A, and keep the profile active. Your Google Business Profile is the single biggest lever for the map pack, so it gets the most attention.',
      },
      {
        q: 'Do you handle reviews?',
        a: 'Yes. We set up a system that brings in a steady flow of genuine, keyword-rich reviews and respond to them on-brand. Review quantity, recency, and sentiment are among the strongest local ranking signals there are.',
      },
      {
        q: 'What are citations, and do they matter?',
        a: 'Citations are mentions of your business name, address, and phone across directories and aggregators. We make sure they are consistent and free of duplicates, because inconsistent listings quietly hold back your map-pack rankings.',
      },
      {
        q: 'Will you build a website or fix my current one?',
        a: 'Usually we optimize what you have, adding location and service pages where they help. If your site is too slow or cannot be crawled, we can rebuild it in about seven days at a 100/100 Lighthouse score, but that is a recommendation, never a forced upsell.',
      },
    ],
  },
  {
    id: 'faq-results',
    label: 'Results & timeline',
    items: [
      {
        q: 'How long does local SEO take to work?',
        a: 'You will usually see a first measurable lift in the map pack within 30 to 90 days from profile and citation fixes, with momentum compounding by month four to six as reviews and authority build. Anyone promising the top of Maps in a week is selling something that will not last.',
      },
      {
        q: 'Do you guarantee the top of the map pack?',
        a: 'No honest local SEO company can guarantee a specific position, because Google controls it and proximity to the searcher is part of the math. What we guarantee is the work, full transparency, and a strategy designed to compound over time.',
      },
      {
        q: 'How do you report results?',
        a: 'You get a monthly report in plain language tied to calls, direction requests, and bookings, not a wall of keyword positions nobody acts on. You will always know what we did and what it produced.',
      },
      {
        q: 'What if I do not see results?',
        a: 'We review progress every month and adjust the plan. Because the engagement is month-to-month, you are never trapped paying for work that is not moving the numbers.',
      },
    ],
  },
  {
    id: 'faq-mappack',
    label: 'Map pack & reviews',
    items: [
      {
        q: 'What is the Google map pack and why does it matter?',
        a: 'The map pack is the block of three businesses Google shows on Maps and at the top of local searches. Those three capture the overwhelming majority of calls and direction requests, so being in it is the whole game for a local business.',
      },
      {
        q: 'What actually decides map-pack rankings?',
        a: 'Google weighs three things: proximity to the searcher, relevance to the query, and prominence from reviews and links. The biggest controllable levers are your primary category, your reviews, and consistent citations, which is exactly where we focus.',
      },
      {
        q: 'Can you help me rank in "near me" searches?',
        a: 'Yes. "Near me" is the dominant pattern in local search now. We optimize your profile, content, and citations so you surface for "SEO near me," "local SEO near me," and every other "near me" search across your whole service area, not just the block your office sits on.',
      },
      {
        q: 'How important are reviews for local ranking?',
        a: 'Very. Google looks at your overall star rating, the number of reviews, how recently you received them, and even the words customers use. A steady flow of fresh, genuine reviews is one of the strongest signals you can build.',
      },
      {
        q: 'Do you optimize for "near me" AI Overviews too?',
        a: 'Yes, lightly. When Google answers a local query with an AI Overview, it pulls from the same profile, review, and authority signals we already build for the map pack. Keeping those strong keeps you eligible to be the business it surfaces.',
      },
      {
        q: 'What is Google Maps SEO?',
        a: 'Google Maps SEO is the work of ranking your business inside Google Maps and the map pack. It is the same discipline as local SEO: your profile, reviews, citations, and local authority decide where you appear when someone nearby searches "near me."',
      },
    ],
  },
  {
    id: 'faq-multi',
    label: 'Multi-location & industries',
    items: [
      {
        q: 'Do you handle multi-location businesses?',
        a: 'Yes. We manage profiles, location pages, and citations across all your locations, keeping each one consistent and individually optimized so every branch competes in its own map pack.',
      },
      {
        q: 'Which industries do you work with?',
        a: 'We get results for home services like HVAC, roofing, and plumbing, dental and medical practices, law firms, restaurants and retail, real estate, and med-spa and wellness businesses across the US.',
      },
      {
        q: 'Do you work with service-area businesses that have no storefront?',
        a: 'Yes. Service-area businesses can rank in the map pack without a public address. We set up your profile correctly for the areas you serve and build the local signals that get you found across them.',
      },
      {
        q: 'Who will I actually be working with?',
        a: 'The founder, Bhavesh. The person who scopes your local SEO is the same person accountable for your results, not a junior who rotates off the account next quarter.',
      },
      {
        q: 'Who is the best local SEO company in USA?',
        a: 'For single- and multi-location SMBs, FactoryJet makes a strong case: founder-led engagements, transparent, fixed-price quotes, and Map Pack work done by the same engineers who fix your site\'s technical foundation. Published lists of the top 10 local SEO services in USA are a fine starting shortlist, but the best local SEO services in USA share three measurable traits: they manage your Google Business Profile weekly (not quarterly), they build local citations that AI engines also read, and they report calls and direction-requests, not just rankings.',
      },
    ],
  },
];

const FAQ_FLAT = FAQ_GROUPS.flatMap((g) => g.items);

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Best Local SEO Services in USA: Win the Google Map Pack | FactoryJet',
  description:
    'FactoryJet is a US-focused local SEO agency that gets you into the Google map pack and "near me" results through Google Business Profile, reviews, and local authority. Founder-led, month-to-month, reported in calls and bookings.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Best Local SEO Services in USA: Win the Google Map Pack | FactoryJet',
    description:
      'A US-focused local SEO company that optimizes your Google Business Profile, builds reviews and citations, and earns local authority so you rank in the map pack. Founder-led, month-to-month, reported in calls.',
    url: 'https://factoryjet.com/services/local-seo',
    images: [
      {
        url: 'https://factoryjet.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'FactoryJet local SEO services for US businesses: Google map pack and near-me rankings',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Local SEO Services in USA: Win the Google Map Pack | FactoryJet',
    description:
      'A US-focused local SEO agency that gets you into the Google map pack and near-me results. Founder-led, month-to-month, reported in calls and bookings.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/local-seo',
    languages: localSeoServicesAlternatesUS,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local SEO Services',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'Local SEO / Google Business Profile Optimization / Map Pack SEO / Local Citation Building / Review & Reputation Management',
  description:
    'US-focused local SEO services that get your business into the Google map pack and "near me" results. Google Business Profile optimization, review generation, citation and NAP consistency, and local content and links. Founder-led, month-to-month, reported in calls and bookings.',
  url: 'https://factoryjet.com/services/local-seo',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization', '@id': 'https://factoryjet.com/#organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  logo: 'https://factoryjet.com/logo.png',
  sameAs: ['https://www.linkedin.com/company/factoryjet', 'https://clutch.co/profile/factoryjet-private', 'https://www.goodfirms.co/company/factoryjet-private-limited', 'https://www.designrush.com/agency/profile/factoryjet', 'https://www.softwaresuggest.com/factoryjet', 'https://www.crunchbase.com/organization/factoryjet'],
  
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_FLAT.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'United States', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 4, name: 'Local SEO', item: 'https://factoryjet.com/services/local-seo' },
  ],
};

/* ── Inline SVG icon helpers ──────────────────────────────────────────────── */
const PinPath = () => (
  <path d="M12 2c-3.9 0-7 3-7 6.8 0 5 7 13.2 7 13.2s7-8.2 7-13.2C19 5 15.9 2 12 2z" />
);
function Check({ fill = '#0C7150' }: { fill?: string }) {
  return (
    <svg className="ic" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill={fill} />
      <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}
function Partial() {
  return (
    <svg className="ic" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="#E0982A" />
      <path d="M10 5.5v5M10 13.5v.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function Cross() {
  return (
    <svg className="ic" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="#D5453F" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 21s-6-5.7-6-10a6 6 0 0112 0c0 4.3-6 10-6 10z" strokeLinejoin="round" />
    <circle cx="12" cy="11" r="2" />
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 3l2.4 5 5.5.7-4 3.9 1 5.4-4.9-2.7L7.6 21l1-5.4-4-3.9 5.5-.7z" strokeLinejoin="round" />
  </svg>
);
const ListIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    <circle cx="7" cy="6" r="1.4" fill="currentColor" />
    <circle cx="7" cy="12" r="1.4" fill="currentColor" />
    <circle cx="7" cy="18" r="1.4" fill="currentColor" />
  </svg>
);
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M9 15l6-6M8 13l-2 2a3 3 0 004 4l2-2M16 11l2-2a3 3 0 00-4-4l-2 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const INDUSTRIES = [
  { mk: 'mk-o', kk: 'Service-area', h: 'Home services', p: 'HVAC, roofing, plumbing, and electrical. You live on "near me" and reviews, so we get your trucks into the 3-pack across every neighborhood you cover.' },
  { mk: 'mk-l', kk: 'Practices', h: 'Dental & medical', p: 'New-patient searches start on Maps. We tune your profile, reviews, and location pages so you show up the moment someone nearby needs care.' },
  { mk: 'mk-g', kk: 'Firms', h: 'Law firms', p: 'High-intent local searches and practice-area pages, backed by the reputation signals that win the click in a crowded market.' },
  { mk: 'mk-o', kk: 'Storefronts', h: 'Restaurants & retail', p: 'Hours, photos, menus, and a steady stream of fresh reviews. The signals that turn a Maps search into foot traffic.' },
  { mk: 'mk-l', kk: 'Hyperlocal', h: 'Real estate', p: 'Neighborhood-level content and agent-profile authority so you own the searches buyers and sellers actually run.' },
  { mk: 'mk-g', kk: 'Wellness', h: 'Med-spa & wellness', p: 'Treatment and "near me" searches plus before-and-after review proof, so bookings come to you instead of the chain down the road.' },
];

const SCORE_ROWS = ['Who runs your strategy', 'Google Business Profile', 'Reviews & reputation', 'Citations & NAP cleanup', 'Local content & links', 'Multi-location support', 'What we report', 'Contract terms'];
const SCORE_FJ = ['The founder, Bhavesh', 'Full optimization', 'Review engine + responses', 'Full audit + dedupe', 'Location pages + local PR', 'Built in', 'Calls & bookings', 'Month-to-month'];
const SCORE_AG = [['A rotating junior', 'p'], ['Basic setup', 'p'], ['Occasional asks', 'p'], ['Add-on service', 'p'], ['"Good enough"', 'p'], ['Limited', 'p'], ['Rankings & traffic', 'p'], ['6 to 12 month lock-in', 'x']] as const;
const SCORE_DIY = [['No strategist', 'x'], ['Manual setup', 'x'], ['Plugin reminders', 'p'], ['You do it', 'x'], ['Templated', 'x'], ['Not covered', 'x'], ['Data only', 'p'], ['Cancel anytime', 'c']] as const;

export default function LocalSeoServicePage() {
  return (
    <>
      <script id="local-seo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="local-seo-organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script id="local-seo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="local-seo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteHeader />

      <main className="lseo">
        {/* 1. LIGHT HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="loc rise d1">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><PinPath /><circle cx="12" cy="9" r="2.3" fill="#FBFAF6" /></svg>
                Local SEO services &middot; United States
              </span>
              <h1 className="rise d2">
                The local SEO agency that gets you into the <span className="it">map pack</span>
              </h1>
              <p className="lead rise d3">
                When someone nearby searches &ldquo;<b>[service] near me</b>,&rdquo; you are either in the top three on
                Google Maps or you are invisible. We get you into the 3-pack through your Google Business Profile,
                reviews, and local authority, then measure it in calls and bookings instead of ranking screenshots.{' '}
                <b>That is the whole job.</b>
              </p>
              <HeroInlineForm region="us" source="services_local_seo_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-link">
                  Talk to the founder
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
              <div className="hstat rise d5">
                <div className="s"><span className="n"><span className="star">&#9733;</span> 4.9</span><span className="l">client rating</span></div>
                <span className="sep" />
                <div className="s"><span className="n">500+</span><span className="l">businesses served</span></div>
                <span className="sep" />
                <div className="s"><span className="n">7-day</span><span className="l">builds, Lighthouse 100</span></div>
              </div>
            </div>

            <div className="hero-vis rise d3" aria-hidden="true">
              <div className="mapcard">
                <div className="lstreets" />
                <span className="park p1" /><span className="park p2" />
                <span className="road r1" /><span className="road r2" /><span className="road r3" />
                <span className="route" />
                <span className="rings" /><span className="pulsering" />
                <div className="pin c1 float"><div className="head"><i /></div></div>
                <div className="pin c2 float" style={{ animationDelay: '1.4s' }}><div className="head"><i /></div></div>
                <div className="pin you float" style={{ animationDelay: '.6s' }}><span className="lbl">YOU &middot; #1</span><div className="head"><i /></div></div>
                <div className="pack">
                  <div className="ph"><svg width="13" height="13" viewBox="0 0 24 24" fill="#F05A28"><PinPath /></svg> Google &middot; Maps</div>
                  <div className="q"><svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#9A938A" strokeWidth="2" /><path d="M16.5 16.5L21 21" stroke="#9A938A" strokeWidth="2" strokeLinecap="round" /></svg> plumber near me</div>
                  <div className="pr win"><div className="nm">Your Business <span className="tag">#1</span></div><div className="mt"><span className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 4.9 &middot; 212 reviews &middot; 0.4 mi</div></div>
                  <div className="pr comp"><div className="nm">A competitor</div><div className="mt">&#9733; 4.3 &middot; 54 reviews</div></div>
                  <div className="pr comp"><div className="nm">Another competitor</div><div className="mt">&#9733; 4.1 &middot; 38 reviews</div></div>
                </div>
              </div>
              <div className="fchip f1 float" style={{ animationDelay: '.3s' }}><div className="k">Client Rating</div><div className="v">4.9/5</div></div>
              <div className="fchip f2 float" style={{ animationDelay: '1s' }}><span className="dot" /><span className="t">Ranks in the map pack</span></div>
            </div>
          </div>
        </section>

        {/* 2. PROOF STRIP */}
        <div className="proof">
          <div className="wrap">
            <span className="tag">Short answer</span>
            <p>
              FactoryJet is a US-focused local SEO company whose local SEO experts get your business into the Google
              map pack and Google Maps for &ldquo;near me&rdquo; searches. We optimize your Google Business Profile,
              build reviews and citations, and earn local authority so you show up when nearby customers search.
              Founder-led, month-to-month, reported in calls and bookings.
            </p>
          </div>
        </div>

        {/* 3. LOGOS */}
        <div className="logobar">
          <div className="wrap">
            <div className="lbl">Trusted by US founders &amp; teams</div>
            <div className="logos">
              {['Belle Maison', 'Formative', 'Impulse', 'Shevvaa', 'RDB Travel'].map((n) => (
                <span key={n} style={{ whiteSpace: 'nowrap' }}>{n}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 4. PILLAR TRIAD */}
        <section>
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 700 }}>
            <h2>Three signals decide who Google <span className="it">puts on the map</span></h2>
            <p className="dek" style={{ margin: '0 auto' }}>
              Every map-pack ranking comes down to the same three things. We work all three, and lead with the two you
              can actually control.
            </p>
          </div>
          <div className="wrap">
            <div className="triad">
              <div className="pillar">
                <div className="node"><PinIcon /></div>
                <h3>Proximity</h3>
                <p className="sub">How close you are to the searcher. Partly fixed, but the right profile setup widens your service radius.</p>
                <span className="wd">Profile + service-area setup</span>
              </div>
              <div className="pillar">
                <div className="node"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" /></svg></div>
                <h3>Relevance</h3>
                <p className="sub">How well your profile and pages match the search. Your category, services, and content do the heavy lifting.</p>
                <span className="wd">Category + local content</span>
              </div>
              <div className="pillar">
                <div className="node"><StarIcon /></div>
                <h3>Prominence</h3>
                <p className="sub">How trusted and known you are. Reviews, citations, and local links are the signals Google leans on hardest.</p>
                <span className="wd">Reviews + citations + links</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SERVICES BENTO */}
        <section className="svc-sec">
          <div className="wrap">
            <div className="eyebrow">Our services</div>
            <h2 style={{ marginTop: 14 }}>Your <span className="it">local growth</span> engine</h2>
            <p className="dek">
              Expert local SEO services, built around the four things that move map-pack rankings: your profile, your
              reviews, your citations, and local authority.
            </p>
            <div className="bento2">
              <div className="tile feat">
                <span className="badge">The #1 lever</span>
                <div className="ic ic-o"><PinIcon /></div>
                <div className="kk">Category + profile tuning</div>
                <h3>Google Business Profile</h3>
                <p>Categories, services, posts, photos, and Q and A tuned for Google Maps SEO so you rank in the map pack. Your profile is the single biggest signal Google reads, so it gets the most attention.</p>
                <div className="impact">Map-pack impact <span className="bar"><i style={{ width: '96%' }} /></span> High</div>
              </div>
              <div className="tile">
                <div className="ic ic-g"><StarIcon /></div>
                <div className="kk">Review system + responses</div>
                <h3>Reviews &amp; reputation</h3>
                <p>Fresh, keyword-rich reviews and on-brand responses. The signal weighed most after your profile.</p>
              </div>
              <div className="tile">
                <div className="ic ic-l"><ListIcon /></div>
                <div className="kk">Directory cleanup + NAP</div>
                <h3>Citations &amp; consistency</h3>
                <p>Consistent name, address, and phone across every directory, with duplicates killed.</p>
              </div>
              <div className="tile wide">
                <div className="ic ic-o"><LinkIcon /></div>
                <div className="kk">Location pages + local PR</div>
                <h3>Local content &amp; links</h3>
                <p>Location and service pages that answer &ldquo;near me&rdquo; intent, plus local links and press that build real prominence across your whole service area.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SCORECARD */}
        <section>
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 720 }}>
            <h2>Why local businesses <span className="it">choose FactoryJet</span></h2>
            <p className="dek" style={{ margin: '0 auto' }}>
              Whether you run one location or twenty, here is how a founder-led local SEO agency stacks up against a
              typical agency or doing it yourself with tools.
            </p>
          </div>
          <div className="wrap">
            <div className="score">
              <div className="score-grid">
                <div className="col lab hidem">
                  <div className="ch">What you get</div>
                  {SCORE_ROWS.map((r) => <div key={r} className="row">{r}</div>)}
                </div>
                <div className="col win">
                  <div className="ch">FactoryJet</div>
                  {SCORE_FJ.map((v) => <div key={v} className="row"><Check /> {v}</div>)}
                </div>
                <div className="col">
                  <div className="ch">Typical agency</div>
                  {SCORE_AG.map(([v, i]) => <div key={v} className="row">{i === 'x' ? <Cross /> : <Partial />} {v}</div>)}
                </div>
                <div className="col">
                  <div className="ch">DIY / tools</div>
                  {SCORE_DIY.map(([v, i]) => <div key={v} className="row">{i === 'x' ? <Cross /> : i === 'c' ? <Check /> : <Partial />} {v}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. INDUSTRIES */}
        <section className="ind">
          <div className="wrap">
            <h2>Built for the way <span className="it">your customers</span> search</h2>
            <p className="dek">
              Every local market has its own search behavior. We tailor your profile, reviews, and content to how your
              buyers actually look for you.
            </p>
            <div className="ind-grid">
              {INDUSTRIES.map((ind) => (
                <div key={ind.h} className="indcard">
                  <span className={`marker ${ind.mk}`}><i /></span>
                  <div className="kk">{ind.kk}</div>
                  <h3>{ind.h}</h3>
                  <p>{ind.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. REPUTATION */}
        <section className="rep">
          <span className="orb" />
          <div className="wrap rep-grid">
            <div>
              <div className="eyebrow eyebrow-warm">Reviews &amp; reputation</div>
              <h2 style={{ marginTop: 14 }}>The engine that <span className="it">earns the top spot</span></h2>
              <p className="lead">
                After your profile, reviews are the strongest map-pack signal there is. We build a system that keeps
                fresh, genuine reviews coming and answers every one, so your rating, recency, and review keywords all
                work in your favor.
              </p>
              <div className="cta-row">
                <ModalCTAButton label="Get a free local SEO audit" region="us" btnVariant="primary-dark" />
              </div>
            </div>
            <div className="repcard">
              <div className="rep-top">
                <div className="rc"><div className="k">Average rating</div><div className="v"><span className="star">&#9733;</span> 4.9</div></div>
                <div className="rc"><div className="k">Response rate</div><div className="v">100%</div><span className="up">every review answered</span></div>
              </div>
              <div className="revbars">
                <div className="k">Fresh reviews per month</div>
                <div className="bars">
                  {[34, 46, 42, 58, 70, 88, 100].map((h, idx) => (
                    <i key={idx} className={idx >= 5 ? 'hi' : undefined} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="rep-fine">Illustrative example of a healthy local reputation profile. We build toward steady review velocity and full response coverage; results vary by business.</div>
            </div>
          </div>
        </section>

        {/* 9. TEAM */}
        <section className="team">
          <div className="wrap team-grid">
            <div className="team-vis">
              <div className="photo">
                <Image
                  src="/images/us/services/seo/team-cutout.webp"
                  alt="The FactoryJet local SEO team"
                  fill
                  loading="lazy"
                  sizes="(max-width: 880px) 90vw, 460px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="ec e1">A senior team</div>
              <div className="ec e2"><span className="star">&#9733;</span> 4.9/5 &middot; average rating</div>
            </div>
            <div>
              <h2>Real specialists, <span className="it">not a listings mill</span></h2>
              <p className="lead">
                I run your strategy myself, so the person who scopes your local SEO is the person accountable for the
                results. Returns on your time, not just your spend.
              </p>
              <ul className="feat-list">
                <li>
                  <span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M5 20c0-3.5 3-5 7-5s7 1.5 7 5" /></svg></span>
                  <div>Founder-led strategy<small>Not handed to a junior team</small></div>
                </li>
                <li>
                  <span className="fi"><PinIcon /></span>
                  <div>Local SEO experts, consultants &amp; specialists<small>500+ businesses served</small></div>
                </li>
                <li>
                  <span className="fi"><StarIcon /></span>
                  <div>Profile, reviews, and authority<small>The full map-pack engine, in one place</small></div>
                </li>
              </ul>
              <div className="byline">Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder</div>
            </div>
          </div>
        </section>

        {/* 10. FAQ (zero JS) */}
        <section className="faqsec" id="faq">
          <div className="wrap">
            <div className="eyebrow">Local SEO FAQ</div>
            <h2 style={{ marginTop: 14 }}>Questions, <span className="it">answered like a real call</span></h2>
            <div className="faq-wrap">
              <aside className="faq-nav">
                {FAQ_GROUPS.map((g) => <a key={g.id} href={`#${g.id}`}>{g.label}</a>)}
              </aside>
              <div className="faq-list">
                {FAQ_GROUPS.map((g, gi) => (
                  <div className="faq-grp" id={g.id} key={g.id}>
                    <div className="faq-cat">{g.label}</div>
                    {g.items.map((it, i) => (
                      <details key={it.q} open={gi === 0 && i === 0}>
                        <summary>{it.q}</summary>
                        <p>{it.a}</p>
                      </details>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 11. CTA */}
        <section className="cta">
          <div className="wrap">
            <div className="cta-card">
              <span className="orb o1" /><span className="orb o2" />
              <div>
                <div className="eyebrow eyebrow-warm2">Free local SEO audit</div>
                <h2 style={{ marginTop: 14 }}>Find out why you are <span className="it">not in the map pack</span></h2>
                <p className="lead">
                  Book a free local SEO audit and a 20-minute call with the founder. We will show you exactly why your
                  competitors are outranking you on Maps and what to fix first. No junior reps, no pressure.
                </p>
                <ul className="cta-trust">
                  <li><Check fill="#F05A28" /> A real audit, not a sales pitch</li>
                  <li><Check fill="#F05A28" /> Covers your profile, reviews, and citations</li>
                  <li><Check fill="#F05A28" /> 4.9 / 5 average client rating</li>
                </ul>
              </div>
              <div className="formcard">
                <div className="ft">Get your free local SEO audit</div>
                <div className="fsub">A 20-minute call with the founder. We reply within one business day.</div>
                <ModalCTAButton label="Get a free local SEO audit" region="us" btnVariant="primary-light" className="w-full" />
                <Link
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border px-7 py-3.5 font-fj-body text-base font-semibold text-fj-ink transition-colors hover:bg-fj-neutral-50"
                  style={{ borderColor: 'rgba(26,23,18,0.18)' }}
                >
                  Talk to the founder <span aria-hidden="true">&rarr;</span>
                </Link>
                <div className="fine">Founder-led. Month-to-month. Reported in calls, not rankings.</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
