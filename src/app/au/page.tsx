import type { Metadata } from 'next';
import Link from 'next/link';

import { auHubAlternates } from '@/data/hreflangMap';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import SiteFooter from '@/components/v2/SiteFooter';
import AuHeader from './components/Header';
import AuModalButton from './components/AuModalButton';

import './au-home.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /au — Australia home page, "The Arch". Built 2026-06-11.
   Source of truth: research/mockup-au-home-v3.html (approved). All copy,
   22 FAQs, comparison table and city blurbs verbatim. Australian English.
   Bespoke AU header (UK pattern), SiteFooter with AU_FOOTER_COLUMNS.
   Styles scoped under .auh (./au-home.css, next/font vars, no webfonts,
   CSS-only motion). Hero TEXT is LCP; the arch photo is decorative (alt="").
   NO pricing anywhere (rule 2026-06-11); positioning = efficient/fast/quality,
   "traditional agency" comparisons only. 7-day claim scoped "up to 5 pages".
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL = 'https://factoryjet.com/au';
const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const WA_HREF =
  'https://wa.me/919699977699?text=Hi%20FactoryJet%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20Australian%20business.';

export const metadata: Metadata = {
  title: 'Web Design Agency Australia | Websites Live in 7 Days | FactoryJet',
  description:
    'FactoryJet is a web design agency for Australian businesses — website development, ecommerce web design, Shopify stores and SEO services. Built by senior engineers, live in 7 days. Sydney, Melbourne, Brisbane, Perth, Adelaide & Gold Coast.',
  alternates: {
    canonical: CANONICAL,
    languages: auHubAlternates,
  },
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Web Design Agency Australia | Websites Live in 7 Days | FactoryJet',
    description:
      'Web design, website development, ecommerce and SEO services for Australian businesses — built by senior engineers, live in 7 days. Sydney, Melbourne, Brisbane, Perth, Adelaide & Gold Coast.',
    url: CANONICAL,
    images: [{ url: 'https://factoryjet.com/logo.png', width: 1200, height: 630, alt: 'FactoryJet — Web Design Agency Australia' }],
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Agency Australia | Websites Live in 7 Days | FactoryJet',
    description:
      'Web design, ecommerce and SEO for Australian businesses — built by senior engineers, live in 7 days.',
    images: ['https://factoryjet.com/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Data — FAQs (verbatim from mockup v3), days, comparison, cities, cases
───────────────────────────────────────────────────────────────────────────── */

type FaqGroup = { label: string; items: { q: string; a: string }[] };

const FAQ_GROUPS: ReadonlyArray<FaqGroup> = [
  {
    label: 'Getting started',
    items: [
      { q: 'Can you really build a website in 7 days?', a: "Yes — for sites up to 5 pages, 7 days is our standard timeline, not a stretch goal. It works because senior engineers build from day one, scope is fixed before we start, and you approve the design on day 2. Larger sites and e-commerce builds get a fixed timeline up front." },
      { q: 'Do you work with businesses anywhere in Australia?', a: "Yes. We work with businesses in every state and territory, fully remote, with calls scheduled in your time zone (AEST/AEDT, ACST or AWST). Most of our Australian clients are in Sydney, Melbourne, Brisbane, Perth, Adelaide and the Gold Coast — and we're adding Canberra, Sunshine Coast and Hobart." },
      { q: 'What do you need from me to get started?', a: "One 30-minute call and whatever you already have — your logo, a few photos, links to sites you like. We handle the rest, including writing your copy. If you have nothing but a business name, that's genuinely fine; about a third of our clients start exactly there." },
      { q: 'I already have a website. Can you rebuild or fix it?', a: "Yes, and rebuilds are about half our work. We'll audit your current site first — speed, SEO, conversion blockers — and tell you honestly whether it needs a rebuild or just targeted fixes. Your existing content, rankings and Google Business Profile carry over; we set up redirects so you don't lose traffic." },
    ],
  },
  {
    label: 'Process & timeline',
    items: [
      { q: 'What does the 7-day process actually look like, day by day?', a: 'Day 1 is your brief and strategy call. Day 2 you get the homepage design concept to approve. Day 3 we design every page. Days 4–5 senior engineers build it and wire in content, SEO and analytics. Day 6 is your feedback round and performance tuning. Day 7 we launch on your domain and hand over with training.' },
      { q: 'Who actually builds my website?', a: 'Senior engineers and designers with 25+ years of combined product experience — the same team that has shipped 500+ business websites and stores. No work is passed to juniors or subcontractors, and you can talk to the founder directly at any point.' },
      { q: 'How many revisions do I get?', a: "The process has two formal approval points — design concept on day 2 and the full review on day 6 — and we keep iterating within those until you're happy. What we don't do is open-ended scope changes mid-build; new pages or features after kickoff get quoted separately so your timeline holds." },
      { q: "What if I'm slow to respond — does the 7 days still count?", a: "The 7 days are working days where we have what we need from you. If you go quiet for a week mid-project, the clock pauses and resumes when you're back. No penalties, no drama — we just pick up where we left off." },
    ],
  },
  {
    label: 'Services & platforms',
    items: [
      { q: 'Do you build on Shopify, WordPress or something custom?', a: "Both, depending on the job. Online stores are usually Shopify — our Shopify website developers build custom themes, not template re-skins. Business and marketing sites are custom-coded on Next.js, which is how we hit 100/100 performance scores. We'll recommend the platform that fits, and we'll tell you if the cheaper option is the right one." },
      { q: 'Can you handle ecommerce web design for an Australian store — GST, AUD, Afterpay?', a: "Yes. Ecommerce builds ship with AUD pricing, GST-ready checkout and invoicing, Australian shipping zones, and local payment options like Afterpay and Zip where your platform supports them. We've shipped stores in home décor, fashion, B2B wholesale and food." },
      { q: 'Do you do SEO, or just build the website?', a: "Both — and that's the point. Every site launches with technical SEO done: schema, metadata, sitemaps, Core Web Vitals. Beyond that we run ongoing SEO services across Australia — local SEO for your city, content, link building and Google Business Profile — as a month-to-month engagement, not a lock-in contract." },
      { q: "What's AI SEO, and do I actually need it?", a: "AI SEO (sometimes called GEO) is making sure your business shows up when people ask ChatGPT, Perplexity or Google's AI Overviews for recommendations — which is already how a growing share of Australians find services. We run AI SEO audits that show exactly where you appear today, then fix the gaps. If your customers research before buying, yes, you need it." },
      { q: 'Can you build a customer portal, booking system or web app?', a: 'Yes — web app development is a core service, not a side offer. Booking systems, quote calculators, customer portals, dashboards and internal tools. We scope tightly, build in weeks not months, and you own the code outright.' },
      { q: 'Do you also build AI agents or chatbots?', a: "Yes. We build AI agents trained on your business — they quote, qualify leads, answer product questions and book appointments around the clock. Unlike generic chatbot widgets, they're wired into your actual systems, so the answers are real, not canned." },
    ],
  },
  {
    label: 'Pricing & ownership',
    items: [
      { q: 'How much does a website cost in Australia?', a: "It depends on scope — pages, e-commerce, integrations. Tell us what you need and you'll get a fixed quote within one business day, before any commitment. No hourly billing, no surprise invoices. As a rule of thumb, we're priced for small business budgets, not enterprise retainers." },
      { q: 'Do I own my website, or am I renting it?', a: 'You own everything — domain, code, design and content — from the day it launches. No proprietary platform holding your site hostage, no exit fees. If you ever leave, you take the whole thing with you.' },
      { q: 'Are there lock-in contracts for support or SEO?', a: "No. Support and SEO are month-to-month, cancel anytime. We think retainers should be earned by results, not enforced by contracts — and most clients stay because the monthly reporting shows exactly what they're getting." },
      { q: "What's included after launch?", a: "Every launch includes handover training, analytics already wired in, and 30 days of fixes on us. After that you choose: run it yourself, or keep us on month-to-month for updates, SEO and improvements. Both are fine — it's your site either way." },
    ],
  },
  {
    label: 'SEO & results',
    items: [
      { q: 'How do I choose the best web design agency in Australia?', a: "Ask three questions any good agency should answer instantly: Who exactly will build my site — seniors or juniors? What's the fixed timeline and what happens if it slips? And can I see live sites with their performance scores? Top web design agencies will answer all three without flinching. If you get vague answers about \"our process,\" keep looking." },
      { q: 'Will my website actually rank on Google?', a: "A new website doesn't rank by magic — but it can be built so ranking is possible: clean structure, fast load, proper schema, city-relevant content. That's standard in every build. For competitive terms like \"web design Sydney\" or your industry's money keywords, ongoing local SEO does the heavy lifting, and we'll give you an honest read on the timeline before you spend a dollar." },
      { q: 'How fast will my website be? Does speed really matter?', a: "We target 100/100 Google Lighthouse scores and green Core Web Vitals on every build — and yes, it matters: Google uses speed in rankings, and slow checkouts are a leading cause of abandoned carts. Most agency sites in Australia score 40–70 on mobile. Test ours, or any of our clients', on pagespeed.web.dev." },
      { q: 'Can you measure whether the website actually brings in leads?', a: "Yes — every site launches with conversion tracking configured: form submissions, phone taps, WhatsApp clicks and booking events, all visible in a simple monthly report. You'll know exactly how many enquiries the site produced, not just how many people visited." },
    ],
  },
];

const DAYS = [
  { dn: 'Day 1', t: 'Brief & strategy', d: '30-min call, goals, sitemap and copy direction locked.' },
  { dn: 'Day 2', t: 'Design concept', d: 'Homepage design in your inbox for approval.' },
  { dn: 'Day 3', t: 'Full design', d: 'Every page designed in your brand.' },
  { dn: 'Day 4', t: 'Build', d: 'Senior engineers code it — no page builders.' },
  { dn: 'Day 5', t: 'Content & SEO', d: 'Copy, metadata, schema and analytics wired in.' },
  { dn: 'Day 6', t: 'Review & polish', d: 'Your feedback round, performance tuning.' },
  { dn: 'Day 7', t: 'Launch', d: 'Live on your domain, training handover included.' },
];

const CITIES = [
  { state: 'NSW', code: 'SYD', name: 'Sydney', blurb: "Web design Sydney & SEO for Australia's biggest market", href: '/au/sydney' },
  { state: 'VIC', code: 'MEL', name: 'Melbourne', blurb: 'Web design Melbourne for retail, hospitality & services', href: '/au/melbourne' },
  { state: 'QLD', code: 'BNE', name: 'Brisbane', blurb: 'Web design Brisbane & SEO for the growth corridor', href: '/au/brisbane' },
  { state: 'WA', code: 'PER', name: 'Perth', blurb: 'Web design Perth for trades, mining services & retail', href: '/au/perth' },
  { state: 'SA', code: 'ADL', name: 'Adelaide', blurb: 'Web design & website development Adelaide for growing SMBs', href: '/au/adelaide' },
  { state: 'QLD', code: 'OOL', name: 'Gold Coast', blurb: 'Web design Gold Coast for tourism, fitness & lifestyle brands', href: '/au/gold-coast' },
];

const CASES = [
  { tag: 'E-commerce · Home décor', name: 'Belle Maison', p: 'Custom storefront with curated collections and a checkout that converts.', stat: 'Conversion-focused rebuild', img: '/images/portfolio/belle-maison.webp' },
  { tag: 'B2B · Wholesale', name: 'Bombay Petals', p: 'B2B catalogue and quote flow for an artificial plants & décor wholesaler.', stat: 'Quote requests via site', img: '/images/portfolio/bombay-petals.webp' },
  { tag: 'Services · Engineering', name: 'Formative Concepts', p: 'Authority site for an MEP/BIM consultancy winning larger contracts.', stat: 'Enterprise enquiries', img: '/images/portfolio/formative-concepts.webp' },
];

const TAPE_ITEMS = [
  'Web design', 'Website development', 'Shopify stores', 'Ecommerce', 'SEO services', 'AI agents',
  'Live in 7 days', 'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast',
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD
───────────────────────────────────────────────────────────────────────────── */

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_GROUPS.flatMap((g) => g.items).map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FactoryJet',
  url: 'https://factoryjet.com',
  areaServed: { '@type': 'Country', name: 'Australia' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '150', reviewCount: '150', bestRating: '5', worstRating: '1' },
};

const HOW_TO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How FactoryJet builds your website in 7 days',
  description: 'Our fixed, transparent 7-day process for delivering professional, SEO-optimised websites (up to 5 pages) for Australian businesses.',
  totalTime: 'P7D',
  step: DAYS.map((d, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: `${d.dn} — ${d.t}`,
    text: d.d,
  })),
};

const SPEAKABLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Web Design Agency Australia | Websites Live in 7 Days | FactoryJet',
  url: 'https://factoryjet.com/au/',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.a', '[data-speakable]'] },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Inline SVG helpers — sprite sheet referenced via <use>, no emoji anywhere
───────────────────────────────────────────────────────────────────────────── */

function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <symbol id="i-bolt" viewBox="0 0 24 24"><path d="M13 2 3 14h7l-1 8 11-13h-7l0-7z" /></symbol>
      <symbol id="i-star" viewBox="0 0 24 24"><path d="M12 2l3 6.6 7 .9-5 5 1.2 7-6.2-3.4L5.8 21.5 7 14.5l-5-5 7-.9z" /></symbol>
      <symbol id="i-gauge" viewBox="0 0 24 24"><path d="M12 14l4-6" /><path d="M3.5 17a10 10 0 1 1 17 0" /></symbol>
      <symbol id="i-check" viewBox="0 0 24 24"><path d="M4 12.5 9.5 18 20 6.5" /></symbol>
      <symbol id="i-monitor" viewBox="0 0 24 24"><rect x="2.5" y="3.5" width="19" height="13" rx="2.5" /><path d="M8 21h8M12 17v4" /></symbol>
      <symbol id="i-cart" viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.6" /><circle cx="17.5" cy="20" r="1.6" /><path d="M2.5 3.5h3l2.5 12h10.5l3-9h-15" /></symbol>
      <symbol id="i-cog" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2" /><path d="M19 12a7 7 0 0 0-.15-1.4l2.1-1.6-2-3.5-2.5 1a7 7 0 0 0-2.4-1.4L13.6 2.5h-3.2l-.45 2.6a7 7 0 0 0-2.4 1.4l-2.5-1-2 3.5 2.1 1.6A7 7 0 0 0 5 12c0 .47.05.94.15 1.4l-2.1 1.6 2 3.5 2.5-1a7 7 0 0 0 2.4 1.4l.45 2.6h3.2l.45-2.6a7 7 0 0 0 2.4-1.4l2.5 1 2-3.5-2.1-1.6c.1-.46.15-.93.15-1.4z" /></symbol>
      <symbol id="i-chart" viewBox="0 0 24 24"><path d="M3.5 20.5h17M6.5 16.5v-5M11.5 16.5V7.5M16.5 16.5v-8M20 5l-5.5 4" /></symbol>
      <symbol id="i-bot" viewBox="0 0 24 24"><rect x="4.5" y="7.5" width="15" height="12" rx="3" /><path d="M12 4v3.5M9 13h.01M15 13h.01M9.5 16.5h5" /><circle cx="12" cy="3.5" r="1" /></symbol>
      <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></symbol>
      <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6" /></symbol>
      <symbol id="i-up" viewBox="0 0 24 24"><path d="M4 18 12 8l8 10" /></symbol>
      <symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 4v16M4 12h16" /></symbol>
      <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></symbol>
      <symbol id="i-mute" viewBox="0 0 24 24"><path d="M11 5 6.5 9H3v6h3.5L11 19V5z" /><path d="M16 9l5 6M21 9l-5 6" /></symbol>
      <symbol id="i-down" viewBox="0 0 24 24"><path d="M4 6l8 10L20 6" /></symbol>
      <symbol id="i-wa" viewBox="0 0 32 32"><path fill="currentColor" stroke="none" d="M16 3C9.4 3 4 8.3 4 14.9c0 2.1.6 4.1 1.6 5.9L4 29l8.4-1.6c1.7.9 3.6 1.4 5.6 1.4 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm6.1 16.9c-.3.8-1.5 1.5-2.4 1.7-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.6s.9-2.5 1.2-2.9c.3-.3.7-.4 1-.4h.7c.2 0 .5-.1.8.6l1.1 2.7c.1.2.2.5 0 .7l-.4.7-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.4 2.8 1.8 3.2 2 .4.2.6.2.9-.1l1.3-1.5c.3-.4.6-.3.9-.2l2.8 1.3c.3.2.5.3.6.4.1.4.1 1-.2 1.7z" /></symbol>
    </svg>
  );
}

function Ic({ id }: { id: string }) {
  return (
    <svg className="ic" aria-hidden="true">
      <use href={`#${id}`} />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function AUHomePage() {
  return (
    <>
      {/* Plain <script> (not next/script) so JSON-LD is embedded in the static
          export HTML — crawlers don't need JS execution to see the schemas. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SPEAKABLE_SCHEMA) }} />

      <div className="auh">
        <IconSprite />
        <AuHeader />

        <main>
          {/* ============ HERO : The Arch ============ */}
          <section className="hero">
            <div className="wrap hero-grid">
              <div>
                <span className="loc rise r1"><b aria-hidden="true" /> Serving Sydney → Gold Coast</span>
                <h1>
                  <span className="rise r2" style={{ display: 'block' }}>Your website,</span>
                  <span className="rise r3" style={{ display: 'block' }}>built properly.</span>
                  <span className="rise r4" style={{ display: 'block' }}>
                    Live in{' '}
                    <span className="ring">
                      7 days.
                      <svg viewBox="0 0 200 70" aria-hidden="true">
                        <path d="M15 38 C 30 8, 170 4, 188 30 C 196 52, 120 68, 50 62 C 25 59, 12 50, 15 40" />
                      </svg>
                    </span>
                  </span>
                </h1>
                <p className="lead rise r4">
                  {"FactoryJet is the web design agency Australian businesses call when they're done waiting — website development, e-commerce, Shopify stores and SEO, delivered by "}
                  <b>senior engineers, fixed scope, one founder you can actually call.</b>
                  {' No agency runaround, no six-week discovery phase.'}
                </p>
                <div className="cta-row rise r5">
                  <AuModalButton className="btn btn-orange" ctaId="au_hero_free_concept">
                    Get a free homepage concept <Ic id="i-arrow" />
                  </AuModalButton>
                  <a className="btn btn-ghost" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Talk to the Founder
                  </a>
                </div>
                <div className="hero-trust rise r5">
                  <span><Ic id="i-check" />500+ businesses shipped</span>
                  <span><Ic id="i-check" />25+ years engineering</span>
                  <span><Ic id="i-check" />Month-to-month, no lock-in</span>
                </div>
              </div>

              <div className="scene" aria-hidden="true">
                <div className="sun" />
                <div className="arch-echo" />
                <div className="arch">
                  {/* Decorative composite — hero TEXT stays LCP, so alt="" + eager (no lazy pop-in) */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <picture>
                    <source type="image/avif" srcSet="/images/au/au-hero-owner-720.avif" />
                    <img
                      src="/images/au/au-hero-owner-720.webp"
                      srcSet="/images/au/au-hero-owner-720.webp 720w, /images/au/au-hero-owner.webp 1024w"
                      sizes="(max-width: 640px) 264px, 360px"
                      alt="" width={720} height={1080} loading="eager" fetchPriority="high"
                    />
                  </picture>
                </div>
                <div className="ribbon">
                  <b className="on">SYD</b><b>MEL</b><b>BNE</b><b>PER</b><b>ADL</b><b>OOL</b>
                </div>
                <div className="chip pop chip-1"><span className="ico"><Ic id="i-bolt" /></span><div><span className="ck">7 days</span><span className="cl">brief to launch</span></div></div>
                <div className="chip pop chip-2"><span className="ico"><Ic id="i-star" /></span><div><span className="ck">4.9/5</span><span className="cl">150+ client reviews</span></div></div>
                <div className="chip pop chip-3"><span className="ico"><Ic id="i-gauge" /></span><div><span className="ck">100/100</span><span className="cl">Lighthouse performance</span></div></div>
                <div className="chip pop chip-4"><span className="ico"><Ic id="i-check" /></span><div><span className="ck">500+</span><span className="cl">sites &amp; stores shipped</span></div></div>
              </div>
            </div>
          </section>

          {/* angled marquee tape */}
          <div className="tape" aria-hidden="true">
            <div className="row">
              {[0, 1].map((dup) =>
                TAPE_ITEMS.map((item) => (
                  <span key={`${dup}-${item}`}>{item} <i>●</i></span>
                ))
              )}
            </div>
          </div>

          <div className="logos">
            <div className="wrap">
              <span className="ll">Trusted by growing businesses</span>
              <div className="lset"><b>Belle Maison</b><b>Bombay Petals</b><b>Formative Concepts</b><b>Impulse Branding</b><b>RDB Travel</b><b>Shevvaa</b></div>
            </div>
          </div>

          {/* ============ SERVICES BENTO ============ */}
          <section id="services">
            <div className="wrap">
              <span className="eyebrow">What we build</span>
              <h2>Everything your business needs <span className="it">online</span> — one team, one timeline.</h2>
              <p className="lead" style={{ maxWidth: 640 }}>
                {"Pick the service you need now. Add the rest when you're ready — the same engineers handle all of it, so nothing gets lost between vendors."}
              </p>
              <div className="bento">
                <div className="bcard b-lg room-peach">
                  <span className="bico" style={{ color: 'var(--orange-d)' }}><Ic id="i-monitor" /></span>
                  <h3>Web Design &amp; Website Development</h3>
                  <p>{"Custom web design services and website development, built on Next.js by a team that's shipped 500+ sites. Mobile-first, accessible, and fast enough to score 100/100 on Google's performance tests — because slow sites lose Australian customers to faster competitors."}</p>
                  <div className="mini">
                    <div><b>7 days</b><span>typical build, up to 5 pages</span></div>
                    <div><b>100/100</b><span>Lighthouse target</span></div>
                    <div><b>0</b><span>templates recycled</span></div>
                  </div>
                  <Link className="blink" href="/au/services/web-design">Web design in Australia <Ic id="i-arrow" /></Link>
                </div>
                <div className="bcard b-sm room-green">
                  <span className="bico" style={{ color: 'var(--green)' }}><Ic id="i-cart" /></span>
                  <h3>E-commerce Web Design &amp; Shopify Stores</h3>
                  <p>Ecommerce website development and Shopify builds by certified Shopify website developers — AUD payments, GST-ready checkout, Afterpay/Zip integration and shipping zones configured for Australian carriers from day one.</p>
                  <Link className="blink" href="/au/services/ecommerce">Ecommerce web design <Ic id="i-arrow" /></Link>
                </div>
                <div className="bcard b-3 room-lav">
                  <span className="bico" style={{ color: 'var(--lav)' }}><Ic id="i-cog" /></span>
                  <h3>Web App Development</h3>
                  <p>Customer portals, booking systems, dashboards and internal tools — scoped tightly, shipped in weeks.</p>
                  <Link className="blink" href="/au/services/website-development">Web apps <Ic id="i-arrow" /></Link>
                </div>
                <div className="bcard b-3">
                  <span className="bico" style={{ color: 'var(--orange-d)' }}><Ic id="i-chart" /></span>
                  <h3>SEO Services — Local SEO to AI SEO</h3>
                  <p>{"An SEO agency inside your web team: local SEO for your city, technical SEO, content, Google Business Profile — and AI SEO audits so you show up in ChatGPT and Google's AI results."}</p>
                  <Link className="blink" href="/au/services/seo">SEO services Australia <Ic id="i-arrow" /></Link>
                </div>
                <div className="bcard b-3">
                  <span className="bico" style={{ color: 'var(--green)' }}><Ic id="i-bot" /></span>
                  <h3>AI Agents &amp; Automation</h3>
                  <p>Chat agents that answer like your best staff member — quoting, booking and qualifying leads while you sleep.</p>
                  <Link className="blink" href="/au/services/ai">AI development <Ic id="i-arrow" /></Link>
                </div>
              </div>
            </div>
          </section>

          {/* ============ DARK: why teams switch ============ */}
          <section className="dark">
            <span className="shimmer" />
            <div className="wrap dgrid">
              <div>
                <span className="eyebrow" style={{ color: 'var(--orange)' }}>Why businesses switch to us</span>
                <h2>The traditional agency model wastes your <span style={{ fontStyle: 'italic', color: 'var(--orange)' }}>time</span>, not just your budget.</h2>
                <p className="lead">{"Most Australian SMBs we talk to aren't unhappy with their agency's work — they're unhappy with the waiting. Six-week timelines, account managers between you and the people building, and change requests that take a fortnight."}</p>
                <div className="pain">
                  <div className="p"><span className="pic"><Ic id="i-clock" /></span><div><b>&ldquo;Our site took 4 months to launch.&rdquo;</b><span>{"We ship up to 5 pages in 7 days, because senior engineers build from day one — there's no handoff chain."}</span></div></div>
                  <div className="p"><span className="pic"><Ic id="i-mute" /></span><div><b>&ldquo;I never talk to the people doing the work.&rdquo;</b><span>You talk directly to the founder and the engineers. No account-manager telephone game.</span></div></div>
                  <div className="p"><span className="pic"><Ic id="i-down" /></span><div><b>{"“It looks nice but doesn't bring in leads.”"}</b><span>Every page is built around one conversion action, with analytics wired in before launch — not bolted on after.</span></div></div>
                </div>
              </div>
              <div className="dash" aria-hidden="true">
                <div className="dh"><span>Launch dashboard</span><b>● LIVE</b></div>
                <div className="dstats">
                  <div className="dstat"><b>7 days</b><span>brief → live site</span></div>
                  <div className="dstat"><b>100/100</b><span>Lighthouse performance</span></div>
                  <div className="dstat"><b>500+</b><span>businesses shipped</span></div>
                  <div className="dstat"><b>4.9★</b><span>average client rating</span></div>
                </div>
                <div className="dbar">
                  <span className="dlabel">Time to launch</span>
                  <div className="row"><em>FactoryJet</em><span className="track"><i style={{ width: '12%' }} /></span><b>7 days</b></div>
                  <div className="row alt"><em>Trad. agency</em><span className="track"><i style={{ width: '86%' }} /></span><b>6–16 wks</b></div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ 7-DAY PROCESS ============ */}
          <section id="process">
            <div className="wrap">
              <span className="eyebrow">How the 7 days work</span>
              <h2>From brief to live — in one <span className="it">working week.</span></h2>
              <p className="lead" style={{ maxWidth: 620 }}>A fixed, transparent process. You know exactly what happens each day, and you see real progress — not status reports.</p>
              <div className="weekrail">
                <div className="week">
                  {DAYS.map((d, i) => (
                    <div className={i === 6 ? 'day d7' : 'day'} key={d.dn}>
                      <span className="dot" />
                      <span className="dn">{d.dn}</span>
                      <b>{d.t}</b>
                      <span>{d.d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ============ COMPARISON ============ */}
          <section style={{ background: 'var(--paper)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
            <div className="wrap">
              <span className="eyebrow">An honest comparison</span>
              <h2>{"Know what you're "}<span className="it">actually</span>{' choosing between.'}</h2>
              <p className="lead" style={{ maxWidth: 680 }}>{"Every list of the top web design agencies in Australia compares portfolios. Almost none compare the things that actually hurt: time, access and what happens after launch. Here's the honest version."}</p>
              <div className="cmp">
                <table>
                  <thead>
                    <tr><th aria-label="Criteria" /><th>DIY builder</th><th>Freelancer</th><th>Traditional agency</th><th className="fj">FactoryJet</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Time to launch</td><td>Weeks of your evenings</td><td>2–6 weeks</td><td>6–16 weeks</td><td className="fj ok">7 days</td></tr>
                    <tr><td>Who does the work</td><td>You</td><td>One generalist</td><td>Junior team, senior oversight</td><td className="fj ok">Senior engineers, every project</td></tr>
                    <tr><td>Design</td><td>Template</td><td>Varies</td><td>Custom</td><td className="fj ok">Custom, conversion-tested</td></tr>
                    <tr><td>Performance &amp; SEO</td><td className="no">Rarely optimised</td><td className="no">Depends on skillset</td><td>Often an add-on</td><td className="fj ok">100/100 target, SEO built in</td></tr>
                    <tr><td>Who you talk to</td><td>—</td><td>The freelancer</td><td className="no">Account manager</td><td className="fj ok">The founder &amp; the builders</td></tr>
                    <tr><td>After launch</td><td className="no">{"You're on your own"}</td><td className="no">Often unavailable</td><td>Retainer required</td><td className="fj ok">Month-to-month support, no lock-in</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ============ CITIES ============ */}
          <section id="cities">
            <div className="wrap">
              <span className="eyebrow">Where we work</span>
              <h2>Built for Australian businesses, <span className="it">city by city.</span></h2>
              <p className="lead" style={{ maxWidth: 600 }}>Web design, e-commerce and SEO services for businesses across Australia — fully remote, in your hours. Local market pages for our priority cities:</p>
              <div className="cities">
                {CITIES.map((c) => (
                  <Link className="city" href={c.href} key={c.code}>
                    <span className="crow">
                      <span className="pin"><Ic id="i-pin" />{c.state}</span>
                      <span className="code">{c.code}</span>
                    </span>
                    <b>{c.name}</b>
                    <span>{c.blurb}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ============ CASE STUDIES ============ */}
          <section id="work" style={{ background: 'var(--paper)', borderTop: '1px solid var(--line)' }}>
            <div className="wrap">
              <span className="eyebrow">Recent work</span>
              <h2>Real businesses. Real <span className="it">results.</span></h2>
              <div className="cases">
                {CASES.map((c) => (
                  <div className="case" key={c.name}>
                    <div className="cimg">
                      <picture>
                        <source type="image/avif" srcSet={c.img.replace('.webp', '.avif')} />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={c.img.replace('.webp', '-480.webp')}
                          srcSet={`${c.img.replace('.webp', '-480.webp')} 480w, ${c.img} 800w`}
                          sizes="(max-width: 880px) 92vw, 360px"
                          alt={`${c.name} — website by FactoryJet`} width={480} height={270} loading="lazy"
                        />
                      </picture>
                    </div>
                    <div className="cbody">
                      <span className="ctag">{c.tag}</span>
                      <b>{c.name}</b>
                      <p>{c.p}</p>
                      <span className="cstat"><Ic id="i-up" /> {c.stat}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cta-row">
                <Link className="btn btn-ghost" href="/case-studies">See all case studies <Ic id="i-arrow" /></Link>
              </div>
            </div>
          </section>

          {/* ============ FAQ ============ */}
          <section id="faq">
            <div className="wrap">
              <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
                <span className="eyebrow" style={{ justifyContent: 'center' }}>Questions, answered</span>
                <h2>Frequently asked <span className="it">questions</span></h2>
                <p className="lead">Straight answers, no sales script — 22 of the questions Australian business owners actually ask us.</p>
              </div>
              <div className="faqwrap">
                {FAQ_GROUPS.map((group, gi) => (
                  <div key={group.label}>
                    <div className="fcat">{group.label}</div>
                    {group.items.map((item, ii) => (
                      <details key={item.q} open={gi === 0 && ii === 0}>
                        <summary>
                          {item.q}
                          <span className="sx"><Ic id="i-plus" /></span>
                        </summary>
                        <div className="a">{item.a}</div>
                      </details>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ FOUNDER CTA ============ */}
          <section>
            <div className="wrap">
              <div className="founder">
                <div className="fava" aria-hidden="true"><span>B</span></div>
                <div>
                  <span className="eyebrow">Talk to the Founder</span>
                  <h2>Returns on your <span className="it">time.</span></h2>
                  <p>{"Book 30 minutes with Bhavesh — founder of FactoryJet. You'll leave with a clear scope, a fixed timeline and an honest answer on whether we're the right fit. No sales team, ever."}</p>
                </div>
                <div className="fbtns">
                  <a className="btn btn-orange" href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    Book a 30-min call <Ic id="i-arrow" />
                  </a>
                  <AuModalButton className="btn btn-ghost" ctaId="au_founder_free_quote">
                    Get a free quote instead
                  </AuModalButton>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* WhatsApp FAB */}
        <a className="wa-fab" href={WA_HREF} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path fill="#fff" d="M16 3C9.4 3 4 8.3 4 14.9c0 2.1.6 4.1 1.6 5.9L4 29l8.4-1.6c1.7.9 3.6 1.4 5.6 1.4 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm6.1 16.9c-.3.8-1.5 1.5-2.4 1.7-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.6s.9-2.5 1.2-2.9c.3-.3.7-.4 1-.4h.7c.2 0 .5-.1.8.6l1.1 2.7c.1.2.2.5 0 .7l-.4.7-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.4 2.8 1.8 3.2 2 .4.2.6.2.9-.1l1.3-1.5c.3-.4.6-.3.9-.2l2.8 1.3c.3.2.5.3.6.4.1.4.1 1-.2 1.7z" />
          </svg>
        </a>

        {/* sticky mobile conversion bar */}
        <nav className="mobbar" aria-label="Quick actions">
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer">
            <svg className="ic" style={{ color: '#25D366' }} aria-hidden="true"><use href="#i-wa" /></svg> WhatsApp
          </a>
          <AuModalButton className="primary" ctaId="au_mobile_bar_quote">
            <Ic id="i-arrow" /> Get a free quote
          </AuModalButton>
        </nav>
      </div>

      <SiteFooter
        linkColumns={AU_FOOTER_COLUMNS}
        variant="dark"
        tagline="Websites, e-commerce and web apps for Australian businesses — built properly by senior engineers, live in 7 days."
      />
    </>
  );
}
