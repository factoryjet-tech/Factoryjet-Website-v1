import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { seoAuditServicesAlternatesUS } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

import HeroInlineForm from '@/components/HeroInlineForm';
import AuditFx from './AuditFx';
import './seo-audit.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/services/seo-audit, built 2026-06-03. US SEO program.

   Design: "reference-grade" system cloned from /us/services/ecommerce-seo (scoped
   under .aseo). Aurora hero with a CSS SEO-health report card (score gauge +
   pass/warn/fail rows, replaces the SERP), 3D crystal-glass "three layers" cards
   (the audit pillars), services bento (what we audit), glass deliverable strip
   (what's in your report), comparison scorecard, scan→prioritize→roadmap process
   funnel, founder team, FAQ, CTA. Brand palette + brand next/font.

   Perf (100/100): CSS-only hero (no image) → text LCP; motion = CSS + AuditFx
   (IntersectionObserver reveals + pointer-region glass cards), NO GSAP/Framer.
   Team image lazy + reserved. Scoped CSS (.aseo) in the external cached bundle.

   Honesty: no pricing; CTAs → free SEO audit modal + Calendly; verified claims
   only (4.9/5, 500+, 7-day/Lighthouse 95+); report card + fix list labeled
   illustrative; no em-dashes. Anti-cannibalization: owns "seo audit services /
   site audit / technical seo agency / audit report"; general SEO stays on the hub.
   Schema: Service + Organization + FAQPage(21) + BreadcrumbList.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const REVIEWED_DATE = 'June 3, 2026';

type FaqGroup = { id: string; label: string; items: { q: string; a: string }[] };

const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    id: 'faq-pricing',
    label: 'Pricing & contracts',
    items: [
      {
        q: 'How much do SEO audit services cost in the US?',
        a: `Our initial SEO site audit is free. It is a real review of your site with a prioritized roadmap, and it is yours to keep. If you want us to implement the fixes, ongoing technical SEO and SEO work is fixed-price and scoped to your goals on a short call, then runs month-to-month. The main driver is the size of your site and how much needs fixing, and we quote it up front so you know the full cost before work starts.`,
      },
      {
        q: 'Is the free SEO audit actually free?',
        a: `Yes. The free SEO audit is a genuine review of your live site, not a teaser. You get a health score, the issues holding you back, and a 90-day roadmap on a call with the founder, whether or not you ever hire us.`,
      },
      {
        q: 'Do you lock me into a long contract if I want the fixes done?',
        a: `No. Every FactoryJet engagement is month-to-month. If we are not earning our keep, you can leave with one billing period of notice. The work should retain you, not the paperwork.`,
      },
      {
        q: 'How is this different from a free SEO checker tool?',
        a: `A free SEO checker spits out a list of errors with no priority and no context. Our SEO audit services put a human, the founder, on your site, so you get the issues ranked by impact, an explanation of why each one matters, and a plan, not 200 warnings you cannot act on.`,
      },
    ],
  },
  {
    id: 'faq-included',
    label: "What's in the audit",
    items: [
      {
        q: 'What does your SEO audit cover?',
        a: `A complete SEO site audit covers four layers: technical health and crawlability, Core Web Vitals and speed, on-page and content, and backlinks and authority. We score each, find what is holding you back, and rank the fixes by impact.`,
      },
      {
        q: 'What is in the SEO audit report?',
        a: `A health score, findings across technical, speed, on-page, and backlinks, and a prioritized 90-day fix list ranked by impact and effort, plus a 20-minute walkthrough call. The SEO audit report is written in plain English, not a wall of automated warnings.`,
      },
      {
        q: 'Do you do a technical SEO audit specifically?',
        a: `Yes. As a technical SEO agency we go deep on crawlability, indexing, redirects, canonicals, sitemaps, schema, and Core Web Vitals. If your traffic problem is technical, this is where we find it.`,
      },
      {
        q: 'Do you check Core Web Vitals and site speed?',
        a: `Always. Page experience is part of every audit. We diagnose LCP, CLS, and INP on mobile and show you exactly what is slowing the site down and what to fix first.`,
      },
      {
        q: 'Do you audit content and on-page SEO too?',
        a: `Yes. We review titles, meta, headings, keyword targeting, internal links, and content gaps against the competitors outranking you, so the audit covers what you say as well as how the site is built.`,
      },
    ],
  },
  {
    id: 'faq-results',
    label: 'Results & fixing',
    items: [
      {
        q: 'How long does an SEO audit take?',
        a: `Most audits are delivered within a few business days, depending on the size of the site. You get the report plus a walkthrough call with the founder so you know exactly what to do next.`,
      },
      {
        q: 'Can you fix the issues you find, or just report them?',
        a: `Both. An audit is only useful if someone can act on it. As a technical SEO agency that builds 100/100 Lighthouse sites, we can implement the fixes ourselves, hand the roadmap to your developer, or work alongside your team.`,
      },
      {
        q: 'How soon will I see results after the fixes?',
        a: `Technical and on-page fixes often show a first measurable lift in 30 to 90 days, with momentum compounding as content and authority build. Anyone promising overnight rankings is selling something that will not last.`,
      },
      {
        q: 'Do you guarantee rankings after the audit?',
        a: `No honest SEO company can guarantee a specific position, because Google controls it. What we guarantee is an accurate audit, full transparency, and a roadmap built to compound.`,
      },
    ],
  },
  {
    id: 'faq-technical',
    label: 'Technical SEO',
    items: [
      {
        q: 'Are you a technical SEO agency or an SEO audit consultant?',
        a: `Both. You get a senior technical SEO consultant, the founder, reading your site directly, with a team of technical SEO experts who can build and fix behind the work. You are not handed to a junior or a bot.`,
      },
      {
        q: 'Do you audit JavaScript, headless, and custom sites?',
        a: `Yes. We audit rendering, hydration, and crawlability on React, Next.js, headless, and custom stacks, which is where a lot of modern sites quietly lose rankings.`,
      },
      {
        q: 'Do you check schema and structured data?',
        a: `Yes. We review your structured data and recommend the schema that helps you win rich results and stay eligible for AI answers, which pull from the same structured data.`,
      },
      {
        q: 'Can you audit a site before a redesign or migration?',
        a: `Yes, and it is one of the smartest times to do it. A pre-migration audit maps what is already ranking so you preserve URLs, redirects, and schema instead of losing traffic in the move.`,
      },
    ],
  },
  {
    id: 'faq-fit',
    label: 'Who it is for',
    items: [
      {
        q: 'Who should get an SEO audit?',
        a: `Any business whose organic traffic has dropped, stalled, or never got going, or anyone about to invest in SEO and wanting to know where they really stand first. It is the honest starting point for every engagement.`,
      },
      {
        q: 'Do you audit ecommerce and local sites too?',
        a: `Yes. We audit ecommerce stores, local and multi-location businesses, B2B and SaaS sites, and content sites. The four-layer method is the same; the priorities shift by business type.`,
      },
      {
        q: 'Which industries do you work with?',
        a: `We work with small and mid-sized US businesses across home services, professional services, healthcare, ecommerce and retail, and B2B and SaaS.`,
      },
      {
        q: 'Who will I actually be working with?',
        a: `The founder, Bhavesh. The person reading your site and presenting the roadmap is the same person accountable for the results, not a junior who rotates off the account next quarter.`,
      },
    ],
  },
];

const FAQ_FLAT = FAQ_GROUPS.flatMap((g) => g.items);

export const metadata: Metadata = {
  title: 'SEO Audit Services in the US: Free Site Audit & Technical SEO | FactoryJet',
  description:
    'FactoryJet provides expert SEO audit services and technical SEO for US businesses. A free SEO site audit that scores your site, finds what is broken, and hands you a prioritized fix list. Founder-led, read by a human, not a checker tool.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SEO Audit Services in the US: Free Site Audit & Technical SEO | FactoryJet',
    description:
      'A US technical SEO agency offering a free, expert SEO audit. Technical, on-page, Core Web Vitals, and backlink review with a prioritized 90-day roadmap. Founder-led, month-to-month if you want the fixes.',
    url: 'https://factoryjet.com/services/seo-audit',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet SEO audit services and technical SEO for US businesses' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Audit Services in the US: Free Site Audit & Technical SEO | FactoryJet',
    description:
      'Expert SEO audit services and technical SEO. A free site audit with a prioritized roadmap, read by a human. Founder-led.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/seo-audit',
    languages: seoAuditServicesAlternatesUS,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// Freshness signal. Benchmark: 56% of AI-Overview-cited pages carry it.
// Keep honest: bump when the page's content actually changes.
const PAGE_MODIFIED = '2026-08-04';
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://factoryjet.com/services/seo-audit#webpage',
  url: 'https://factoryjet.com/services/seo-audit',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', url: 'https://factoryjet.com', name: 'FactoryJet' },
  publisher: { '@id': 'https://factoryjet.com/#organization' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Audit Services',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'SEO Audit / SEO Site Audit / Technical SEO / Technical SEO Audit / Core Web Vitals Audit / On-Page SEO Audit / Backlink Audit',
  description:
    'US-focused SEO audit services and technical SEO. A free SEO site audit reviewing technical health, Core Web Vitals, on-page content, and backlinks, delivered as a prioritized audit report with a 90-day roadmap. Read by a human, founder-led, month-to-month if you want the fixes implemented.',
  url: 'https://factoryjet.com/services/seo-audit',
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
  mainEntity: FAQ_FLAT.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'United States', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 4, name: 'SEO Audit', item: 'https://factoryjet.com/services/seo-audit' },
  ],
};

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

const SCORE_ROWS = ['Who reads your site', 'Prioritized by impact', 'Core Web Vitals', 'Plain-English roadmap', 'Can fix it for you', 'What you keep'];
const SCORE_FJ = ['The founder, Bhavesh', 'Yes, ranked', 'Diagnosed & fixed', '90-day plan', 'Yes, in-house', 'The full report'];
const SCORE_AG = [['A junior analyst', 'p'], ['Sometimes', 'p'], ['Yes', 'c'], ['Dense PDF', 'p'], ['Costly retainer', 'p'], ['A long deck', 'p']] as const;
const SCORE_DIY = [['A bot', 'x'], ['Flat error list', 'x'], ['Score only', 'p'], ['None', 'x'], ['No', 'x'], ['A CSV of errors', 'p']] as const;

export default function SeoAuditServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script id="aseo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="aseo-organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script id="aseo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="aseo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteHeader />

      <main className="aseo">
        {/* 1. HERO */}
        <section className="hero">
          <div className="aurora" aria-hidden="true"><i className="a1" /><i className="a2" /><i className="a3" /></div>
          <div className="wrap hero-grid">
            <div>
              <span className="loc rise d1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.5-4.5" strokeLinecap="round" /></svg>
                SEO audit &amp; technical SEO &middot; United States
              </span>
              <h1 className="rise d2">The SEO audit that shows you <span className="it">exactly what is broken</span></h1>
              <p className="lead rise d3">
                A free, expert SEO site audit that finds why you are not ranking, scores your site, and hands you a
                prioritized fix list. Not an automated checker spitting out 200 meaningless errors. A real technical SEO
                agency reading your site the way Google does. <b>Then we can fix it.</b>
              </p>
              <HeroInlineForm region="us" source="services_seo_audit_hero" submitLabel="Get my free SEO audit" />
              <div className="cta-row rise d4">
                <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-link">
                  Talk to the founder
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
              <div className="hstat rise d5">
                <div className="s"><span className="n"><span className="star">&#9733;</span> 4.9</span><span className="l">Google review rating</span></div>
                <span className="sep" />
                <div className="s"><span className="n">500+</span><span className="l">sites audited &amp; built</span></div>
                <span className="sep" />
                <div className="s"><span className="n">Real human</span><span className="l">not a checker tool</span></div>
              </div>
            </div>

            <div className="hero-vis rise d3" aria-hidden="true">
              <div className="report">
                <div className="rep-head"><span className="t">SEO Audit Report &middot; yoursite.com</span><span className="dts"><i /><i /><i /></span></div>
                <div className="rep-body">
                  <div className="gauge"><span className="gv"><span className="gn">62</span><span className="gl">/ 100</span></span></div>
                  <div className="checks">
                    <div className="crow"><span className="cio cbad">!</span><span className="lab">Technical &amp; crawlability</span><span className="sc">3 critical</span></div>
                    <div className="crow"><span className="cio cwarn">~</span><span className="lab">Core Web Vitals</span><span className="sc">needs work</span></div>
                    <div className="crow"><span className="cio cwarn">~</span><span className="lab">On-page &amp; content</span><span className="sc">6 fixes</span></div>
                    <div className="crow"><span className="cio cok">&#10003;</span><span className="lab">Mobile usability</span><span className="sc">passing</span></div>
                    <div className="crow"><span className="cio cbad">!</span><span className="lab">Backlinks &amp; authority</span><span className="sc">low</span></div>
                  </div>
                </div>
                <div className="scanline" />
              </div>
              <div className="fchip f1 float"><div className="k">Health score</div><div className="v">62</div></div>
              <div className="fchip f2 float" style={{ animationDelay: '1s' }}><span className="dot" /><span className="t">Read by a human</span></div>
            </div>
          </div>
        </section>

        {/* 2. PROOF */}
        <div className="proof">
          <div className="wrap">
            <span className="tag">Short answer</span>
            <p data-reveal>
              FactoryJet provides expert SEO audit services and technical SEO for US businesses. Our free SEO site audit
              reviews your technical health, on-page content, Core Web Vitals, and backlinks, then delivers a
              plain-English SEO audit report with a prioritized 90-day roadmap. Read by a human, not generated by a
              checker. Founder-led, month-to-month if you want us to fix it.
            </p>
          </div>
        </div>

        {/* 3. LOGOS */}
        <div className="logobar">
          <div className="wrap">
            <div className="lbl">Trusted by founders across India and the UK</div>
            <div className="logos" data-reveal>
              {['Belle Maison', 'Formative', 'Impulse', 'GPSUK', 'Sow Easy', 'Shevvaa'].map((n) => (
                <span key={n} style={{ whiteSpace: 'nowrap' }}>{n}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 4. THREE LAYERS, glass cards */}
        <section className="glass-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 760 }}>
            <h2 data-reveal>A real SEO audit has <span className="it">three layers</span></h2>
            <p className="dek" data-reveal style={{ margin: '0 auto' }}>
              A free checker only sees the surface. We score your site across the three layers that actually decide
              rankings, and rank every fix by impact.
            </p>
          </div>
          <div className="wrap">
            <div className="glass-row" data-reveal>
              <div className="glass-tilt">
                <article className="gcard gc1">
                  <div className="gc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l9 5-9 5-9-5z" strokeLinejoin="round" /><path d="M3 12l9 5 9-5M3 16l9 5 9-5" strokeLinejoin="round" /></svg></div>
                  <div className="gc-ln">Layer 01</div>
                  <h3>Technical foundation</h3>
                  <p>The most critical layer. Crawlability, indexing, redirects, canonicals, schema, and Core Web Vitals, so Google can read and trust the whole site.</p>
                  <span className="gc-tag">Most critical</span>
                </article>
                <article className="gcard gc2">
                  <div className="gc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 9h8M8 13h5" strokeLinecap="round" /></svg></div>
                  <div className="gc-ln">Layer 02</div>
                  <h3>On-page &amp; content</h3>
                  <p>Titles, meta, headings, keyword targeting, internal links, and content gaps against the competitors outranking you. Where most rankings are won or lost.</p>
                  <span className="gc-tag">Where rankings live</span>
                </article>
                <article className="gcard gc3">
                  <div className="gc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 15l6-6M8 13l-2 2a3 3 0 004 4l2-2M16 11l2-2a3 3 0 00-4-4l-2 2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  <div className="gc-ln">Layer 03</div>
                  <h3>Authority &amp; backlinks</h3>
                  <p>Your link profile, toxic links, and the authority gap versus competitors. The trust layer that decides how high the rest can climb.</p>
                  <span className="gc-tag">Earns the trust</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SERVICES BENTO, what we audit */}
        <section className="svc-sec">
          <div className="wrap">
            <div className="eyebrow" data-reveal>The SEO audit checklist</div>
            <h2 data-reveal style={{ marginTop: 14 }}>Everything we <span className="it">check on your site</span></h2>
            <p className="dek" data-reveal>
              A complete SEO site audit, scored across four areas. We find what is holding you back and rank the fixes by
              impact, not by what is easy.
            </p>
            <div className="bento2" data-reveal>
              <div className="tile feat">
                <span className="badge">Where we go deepest</span>
                <div className="ic ic-o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l9 5-9 5-9-5z" strokeLinejoin="round" /><path d="M3 12l9 5 9-5" strokeLinejoin="round" /></svg></div>
                <div className="kk">Technical SEO audit</div>
                <h3>Technical &amp; crawlability</h3>
                <p>Crawl and indexing, redirects and errors, canonicals, sitemaps and robots, and schema. As a technical SEO agency, this is where we find the problems a checker tool misses.</p>
              </div>
              <div className="tile">
                <div className="ic ic-g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h7l-1 8 10-12h-7z" strokeLinejoin="round" /></svg></div>
                <div className="kk">Speed</div>
                <h3>Core Web Vitals</h3>
                <p>LCP, CLS, and INP on mobile, plus render-blocking and what is actually slowing the site down.</p>
              </div>
              <div className="tile">
                <div className="ic ic-l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 9h8M8 13h5" strokeLinecap="round" /></svg></div>
                <div className="kk">On-page</div>
                <h3>Content &amp; on-page</h3>
                <p>Titles, meta, keyword targeting, internal links, and content gaps versus the competition.</p>
              </div>
              <div className="tile wide">
                <div className="ic ic-o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 15l6-6M8 13l-2 2a3 3 0 004 4l2-2M16 11l2-2a3 3 0 00-4-4l-2 2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                <div className="kk">Off-page</div>
                <h3>Backlinks &amp; authority</h3>
                <p>Link profile health, toxic links, and the authority gap versus competitors, so you know how much trust you need to build to climb.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. REPORT DELIVERABLES (glass) */}
        <section className="plat">
          <div className="wrap">
            <h2 data-reveal>A report you can <span className="it">actually act on</span></h2>
            <p className="dek" data-reveal>
              Not a 90-page PDF of automated warnings. Your SEO audit report ranks every issue by impact and effort,
              with a 90-day roadmap and a walkthrough call. Yours to keep, whether or not you hire us.
            </p>
            <div className="plat-grid" data-reveal>
              <div className="platcard lead"><span className="tagx">The deliverable</span><div className="pn">Prioritized fix list</div><p>Every issue ranked by impact and effort, so you fix what moves rankings first instead of busywork.</p></div>
              <div className="platcard"><div className="pn">Health score</div><p>A clear score across all four layers, so you can see where you stand at a glance.</p></div>
              <div className="platcard"><div className="pn">Technical findings</div><p>The crawl, speed, and indexing issues, explained in plain English with the why.</p></div>
              <div className="platcard"><div className="pn">90-day roadmap</div><p>A sequenced plan plus a 20-minute walkthrough call with the founder.</p></div>
            </div>
          </div>
        </section>

        {/* 7. SCORECARD */}
        <section>
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 720 }}>
            <h2 data-reveal>A human audit vs <span className="it">a free checker tool</span></h2>
            <p className="dek" data-reveal style={{ margin: '0 auto' }}>
              Free SEO checkers spit out errors with no priority and no context. Here is what an expert SEO audit gives
              you instead.
            </p>
          </div>
          <div className="wrap">
            <div className="score" data-reveal>
              <div className="score-grid">
                <div className="col lab hidem">
                  <div className="ch">What you get</div>
                  {SCORE_ROWS.map((r) => <div key={r} className="row">{r}</div>)}
                </div>
                <div className="col win">
                  <div className="ch">FactoryJet audit</div>
                  {SCORE_FJ.map((v) => <div key={v} className="row"><Check /> {v}</div>)}
                </div>
                <div className="col">
                  <div className="ch">Free checker tool</div>
                  {SCORE_DIY.map(([v, i]) => <div key={v} className="row">{i === 'x' ? <Cross /> : <Partial />} {v}</div>)}
                </div>
                <div className="col">
                  <div className="ch">Big agency audit</div>
                  {SCORE_AG.map(([v, i]) => <div key={v} className="row">{i === 'c' ? <Check /> : <Partial />} {v}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. PROCESS FUNNEL */}
        <section className="rev">
          <span className="orb" aria-hidden="true" />
          <div className="wrap rev-grid">
            <div>
              <div className="eyebrow" data-reveal>How the audit works</div>
              <h2 data-reveal style={{ marginTop: 14 }}>From <span className="it">scan to roadmap</span> in days</h2>
              <p className="lead" data-reveal>
                A clear process, run by a person who knows what the data means. You are never left with a pile of errors
                and no idea what to do first.
              </p>
              <div className="cta-row" data-reveal><ModalCTAButton label="Get your free SEO audit" region="us" btnVariant="primary-dark" /></div>
            </div>
            <div className="funnel" data-reveal>
              <div className="fstage s1"><div><div className="fl">Scan &amp; score</div><div className="fs">We crawl your site and pull Search Console and Vitals data</div></div><div className="fv">Step 1</div></div>
              <div className="fstage s2"><div><div className="fl">Prioritize by impact</div><div className="fs">Every issue ranked by impact and effort</div></div><div className="fv">Step 2</div></div>
              <div className="fstage s3"><div><div className="fl">Roadmap &amp; walkthrough</div><div className="fs">The report plus a call on exactly what to do next</div></div><div className="fv">Step 3</div></div>
              <div className="rev-fine">Illustrative report summary. Your real audit scores your live site across 100+ checks; findings vary by site.</div>
            </div>
          </div>
        </section>

        {/* 9. TEAM */}
        <section className="team">
          <div className="wrap team-grid">
            <div className="team-vis" data-reveal>
              <div className="photo">
                <Image src="/images/us/services/seo/team-cutout.webp" alt="The FactoryJet technical SEO and audit team" fill loading="lazy" sizes="(max-width: 880px) 90vw, 460px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="ec e1">A senior team</div>
              <div className="ec e2"><span className="star">&#9733;</span> 4.9/5 &middot; average Google review rating</div>
            </div>
            <div>
              <h2 data-reveal>A real SEO audit consultant, <span className="it">not a PDF generator</span></h2>
              <p className="lead" data-reveal>
                I run every audit myself, so the person reading your site is the person accountable for the roadmap.
                Returns on your time, not just your spend.
              </p>
              <ul className="feat-list" data-reveal>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M5 20c0-3.5 3-5 7-5s7 1.5 7 5" /></svg></span><div>Founder-led audits<small>Not handed to a junior or a bot</small></div></li>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg></span><div>Technical SEO experts<small>We build 100/100 Lighthouse sites</small></div></li>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg></span><div>500+ sites audited &amp; built<small>4.9 / 5 average Google review rating</small></div></li>
              </ul>
              <div className="byline">Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder</div>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="faqsec" id="faq">
          <div className="wrap">
            <div className="eyebrow" data-reveal>SEO audit FAQ</div>
            <h2 data-reveal style={{ marginTop: 14 }}>Questions, <span className="it">answered like a real call</span></h2>
            <div className="faq-wrap">
              <aside className="faq-nav">
                {FAQ_GROUPS.map((g) => <a key={g.id} href={`#${g.id}`}>{g.label}</a>)}
              </aside>
              <div className="faq-list">
                {FAQ_GROUPS.map((g, gi) => (
                  <div className="faq-grp" id={g.id} key={g.id} data-reveal>
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
            <div className="cta-card" data-reveal>
              <span className="orb o1" aria-hidden="true" /><span className="orb o2" aria-hidden="true" />
              <div>
                <div className="eyebrow" style={{ color: '#FF9C72' }}>Free SEO audit</div>
                <h2 style={{ marginTop: 14 }}>Find out <span className="it">why you are not ranking</span></h2>
                <p className="lead">
                  Book a free SEO audit and a 20-minute call with the founder. We will score your site, show you the
                  critical issues, and hand you the roadmap. No junior reps, no automated spam.
                </p>
                <ul className="cta-trust">
                  <li><Check fill="#F05A28" /> A real human audit, not a checker</li>
                  <li><Check fill="#F05A28" /> Technical, on-page, speed &amp; links</li>
                  <li><Check fill="#F05A28" /> Prioritized 90-day roadmap, yours to keep</li>
                </ul>
              </div>
              <div className="formcard">
                <div className="ft">Get your free SEO audit</div>
                <div className="fsub">A 20-minute call with the founder. We reply within one business day.</div>
                <ModalCTAButton label="Get your free SEO audit" region="us" btnVariant="primary-light" className="w-full" />
                <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border px-7 py-3.5 font-fj-body text-base font-semibold text-fj-ink transition-colors hover:bg-fj-neutral-50" style={{ borderColor: 'rgba(26,23,18,0.18)' }}>
                  Talk to the founder <span aria-hidden="true">&rarr;</span>
                </Link>
                <div className="fine">Founder-led. Month-to-month. The report is yours to keep.</div>
              </div>
            </div>
          </div>
        </section>

        <AuditFx />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
