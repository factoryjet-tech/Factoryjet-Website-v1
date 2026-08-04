import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { smallBusinessSeoServicesAlternatesUS } from '@/data/hreflangMap';
import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';

import HeroInlineForm from '@/components/HeroInlineForm';
import './small-business-seo.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /us/services/small-business-seo, built 2026-06-03. US SEO program.

   Design: "Navigator (light)" system cloned from /us/services/local-seo (scoped
   under .sbseo). Light hero with a growth/leads card visual (replaces the map),
   get-found / get-clicked / get-customer pillar triad, "what's included" services
   bento, dark comparison scorecard, owner-persona cards, a leads-growth
   mini-dashboard, founder team block, FAQ, CTA. Brand palette + brand next/font.

   Perf (100/100): no hero image (CSS card = text LCP), fixed-height hero visual
   (zero CLS), team image lazy + reserved, zero page JS. display:'optional' fonts.

   Honesty: no pricing section; CTAs → free SEO audit modal + Calendly; verified
   claims only (4.9/5, 500+, month-to-month, 7-day/Lighthouse 100); growth card
   labeled illustrative; no em-dashes. Anti-cannibalization: owns "small business
   SEO services / company / agency / affordable SEO"; local/near-me intent stays
   on /us/services/local-seo (linked, not duplicated).
   Schema: Service + Organization + FAQPage(22) + BreadcrumbList.
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
        q: 'How much do small business SEO services cost in the US?',
        a: `FactoryJet pricing is fixed and scoped to your goals. The main drivers are your market and how fast you want to move. We scope every plan to the work that actually brings customers, then quote it up front on a short call so you know the full cost before work starts. The simplest way to get a real figure is to start with a free SEO audit.`,
      },
      {
        q: 'Is affordable SEO for small business actually worth it?',
        a: `Yes, when the budget goes to the right moves. Affordable SEO does not mean cutting corners. It means spending on the handful of fixes that bring calls and leads, and skipping the busywork bigger agencies bill for. For most owners, one new customer a month covers the engagement, and SEO compounds, so the cost per lead keeps falling.`,
      },
      {
        q: 'Do you lock me into a long contract?',
        a: `No. Every FactoryJet engagement is month-to-month. If we are not earning our keep, you can leave with one billing period of notice. The work should retain you, not the paperwork.`,
      },
      {
        q: 'Do you offer SEO packages for small business?',
        a: `We build one focused plan instead of rigid tiers full of filler line items. Whether you think of it as small business SEO services, an SEO package, or just "get me more customers," we scope it to your budget and goals, lead with the highest-impact work, and adjust as results come in.`,
      },
      {
        q: 'What do I get from the free SEO audit?',
        a: `A full review of your website, your Google presence, the keywords you should rank for, and the competitors beating you, plus a prioritized 90-day roadmap. It is a complete picture of why you are not getting traffic and what to fix first, and you keep it whether or not you continue.`,
      },
    ],
  },
  {
    id: 'faq-choosing',
    label: 'Choosing a company',
    items: [
      {
        q: 'What makes the best SEO services for small business?',
        a: `Focus and honesty. The best small business SEO companies do a few things well, report in calls and leads instead of vanity rankings, and work month-to-month so they have to keep earning it. Be wary of anyone selling padded packages or promising the top of Google in a week.`,
      },
      {
        q: 'How do I choose a small business SEO company?',
        a: `Ask three questions: who actually does the work, what they report on, and whether you are locked in. With FactoryJet the answers are the founder, your calls and leads, and month-to-month. Any small business SEO consultant worth hiring should answer those plainly.`,
      },
      {
        q: 'Are you an SEO agency or a consultant?',
        a: `Both, in the way that matters to a small business. You get a senior SEO consultant, the founder, running your strategy directly, with the full capability of an agency behind the work. You are not handed to a junior who rotates off your account next quarter.`,
      },
      {
        q: 'Do you only work with small businesses?',
        a: `Small and growing businesses are our focus, which is why the plans, pricing, and reporting are built for owners, not enterprise committees. If you run a single location or a small team, you are exactly who this is for.`,
      },
    ],
  },
  {
    id: 'faq-included',
    label: "What's included",
    items: [
      {
        q: 'What do small business SEO services with FactoryJet include?',
        a: `We fix your website and on-page SEO, tune your Google Business Profile so you show up locally, publish content around what your customers search, and report it in calls and leads. One focused plan, no filler tasks padded onto an invoice.`,
      },
      {
        q: 'Do you fix my website or just do SEO?',
        a: `We optimize what you have first, making it fast, crawlable, and built around buyer searches. If your site is too slow or cannot be ranked, we can rebuild it in about seven days at a 100/100 Lighthouse score, but that is a recommendation, never a forced upsell.`,
      },
      {
        q: 'Do you handle local and "near me" searches?',
        a: `Yes, as part of the plan. If your growth depends mostly on the Google map pack and "near me" searches, our dedicated local SEO services go deeper on your Google Business Profile, reviews, and citations. We will point you to the right focus on your free audit.`,
      },
      {
        q: 'Do you do content and keywords too?',
        a: `Yes. We research the keywords your customers actually type, then publish pages and posts that answer them. Content is what turns SEO into steady, compounding traffic instead of a one-time fix.`,
      },
    ],
  },
  {
    id: 'faq-results',
    label: 'Results & timeline',
    items: [
      {
        q: 'How long does small business SEO take to work?',
        a: `You will usually see a first measurable lift in 30 to 90 days from technical and on-page fixes, with momentum compounding by month four to six as content and authority build. Anyone promising the top of Google in a week is selling something that will not last.`,
      },
      {
        q: 'Do you guarantee first-page rankings?',
        a: `No honest SEO company can guarantee a specific position, because Google controls it. What we guarantee is the work, full transparency, and a strategy built to compound. Because it is month-to-month, the results have to keep you, not a contract.`,
      },
      {
        q: 'How do you report results?',
        a: `You get a monthly report in plain language tied to calls, form fills, and sales, not a wall of keyword positions nobody acts on. You will always know what we did and what it brought in.`,
      },
      {
        q: 'What if I do not see results?',
        a: `We review progress every month and adjust the plan. Because the engagement is month-to-month, you are never trapped paying for work that is not moving the numbers.`,
      },
    ],
  },
  {
    id: 'faq-industries',
    label: 'Industries & fit',
    items: [
      {
        q: 'Which small businesses do you work with?',
        a: `We get results for local and home services like HVAC, contractors, salons, and clinics, for shops and restaurants, and for B2B and professional services like accountants, agencies, and consultants across the US.`,
      },
      {
        q: 'Is SEO worth it for a very small or new business?',
        a: `Often it is the best money a small business spends, because organic traffic does not stop when you stop paying like ads do. We start with the affordable, high-impact fixes so a new business sees movement without a big budget.`,
      },
      {
        q: 'Can you help if I have tried SEO before and it did not work?',
        a: `Yes, and it is common. Usually the budget went to busywork or vague reporting. The free audit shows exactly what was missed, and the month-to-month model means you only keep paying if it works this time.`,
      },
      {
        q: 'Who will I actually be working with?',
        a: `The founder, Bhavesh. The person who scopes your small business SEO is the same person accountable for the calls and leads it earns, not a junior who rotates off the account next quarter.`,
      },
    ],
  },
];

const FAQ_FLAT = FAQ_GROUPS.flatMap((g) => g.items);

export const metadata: Metadata = {
  title: 'Small Business SEO Services in the US: More Customers from Google | FactoryJet',
  description:
    'FactoryJet is a US small business SEO company. Affordable SEO services for small businesses that bring calls and customers from Google, not confusing reports. Founder-led, month-to-month, reported in leads.',
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Small Business SEO Services in the US: More Customers from Google | FactoryJet',
    description:
      'A US small business SEO agency offering affordable SEO services for small businesses. Website, local, and content SEO scoped to your budget. Founder-led, month-to-month, reported in calls and leads.',
    url: 'https://factoryjet.com/services/small-business-seo',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet small business SEO services for US businesses' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business SEO Services in the US: More Customers from Google | FactoryJet',
    description:
      'Affordable small business SEO services that bring calls and customers from Google. Founder-led, month-to-month, reported in leads.',
    images: ['https://factoryjet.com/og-default.png'],
  },
  alternates: {
    canonical: 'https://factoryjet.com/services/small-business-seo',
    languages: smallBusinessSeoServicesAlternatesUS,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Small Business SEO Services',
  provider: { '@type': 'Organization', '@id': 'https://factoryjet.com/#organization', name: 'FactoryJet', url: 'https://factoryjet.com' },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'Small Business SEO / Affordable SEO Services / Local SEO for Small Business / On-Page SEO / Content SEO / SEO Consulting',
  description:
    'US-focused small business SEO services that bring calls and customers from Google. Website and on-page SEO, Google Business Profile, and content, scoped to a small business budget. Founder-led, month-to-month, reported in calls and leads.',
  url: 'https://factoryjet.com/services/small-business-seo',
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
    { '@type': 'ListItem', position: 4, name: 'Small Business SEO', item: 'https://factoryjet.com/services/small-business-seo' },
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

const PERSONAS = [
  { mk: 'mk-o', kk: 'Local & service', h: 'Home & local services', p: 'HVAC, contractors, salons, and clinics. We win the searches nearby customers run and turn them into booked jobs.' },
  { mk: 'mk-g', kk: 'Storefront', h: 'Shops & restaurants', p: 'Get found by nearby customers and pull foot traffic from Google and Maps with the right local signals.' },
  { mk: 'mk-l', kk: 'Professional', h: 'B2B & professional services', p: 'Accountants, agencies, and consultants. Rank for the high-intent searches that fill your pipeline.' },
  { mk: 'mk-o', kk: 'Online', h: 'Small online stores', p: 'Product and category pages that rank, so a small catalog competes with the big names on the searches that convert.' },
  { mk: 'mk-g', kk: 'Multi-location', h: 'Growing small chains', p: 'Two to ten locations, each optimized to compete in its own market without competing with each other.' },
  { mk: 'mk-l', kk: 'Solo & startup', h: 'New & solo businesses', p: 'Just getting started. We lead with affordable, high-impact fixes so you see movement without a big budget.' },
];

const SCORE_ROWS = ['Who runs your SEO', 'Monthly cost', 'Small-business focus', 'What we report', 'Website fixes included', 'Contract terms'];
const SCORE_FJ = ['The founder, Bhavesh', 'Scoped to your budget', 'Built for SMBs', 'Calls & leads', 'Yes, built in', 'Month-to-month'];
const SCORE_AG = [['A rotating junior', 'p'], ['High retainer', 'x'], ['Enterprise-first', 'p'], ['Rankings & traffic', 'p'], ['Add-on cost', 'p'], ['6 to 12 month lock-in', 'x']] as const;
const SCORE_DIY = [['Solo, stretched thin', 'p'], ['Low', 'c'], ['Hit or miss', 'p'], ['Little or none', 'x'], ['Not covered', 'x'], ['Flexible', 'c']] as const;

export default function SmallBusinessSeoServicePage() {
  return (
    <>
      <script id="sbseo-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="sbseo-organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script id="sbseo-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="sbseo-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteHeader />

      <main className="sbseo">
        {/* 1. HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="loc rise d1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Small business SEO services &middot; United States
              </span>
              <h1 className="rise d2">
                Small business SEO that brings you <span className="it">more customers</span>
              </h1>
              <p className="lead rise d3">
                Affordable SEO for small business owners who want calls and customers from Google, not a confusing
                report. We do the handful of things that actually move rankings, then show you the leads it brought in.
                Founder-led, month-to-month, no jargon. <b>That is the whole job.</b>
              </p>
              <HeroInlineForm region="us" source="services_small_business_seo_hero" submitLabel="Get my free SEO audit" />
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
                <div className="s"><span className="n">Month-to-month</span><span className="l">no lock-in</span></div>
              </div>
            </div>

            <div className="hero-vis rise d3" aria-hidden="true">
              <div className="gcard">
                <div className="gtop">
                  <div className="gbiz"><span className="gav">B</span><span><span className="gnm">Your Business</span><br /><span className="gsub">Found on Google &middot; this quarter</span></span></div>
                  <span className="gpill">&#9650; Growing</span>
                </div>
                <div className="gchart">
                  {[34, 44, 40, 58, 66, 82, 100].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
                </div>
                <div className="gcap"><span>Jan</span><span>Apr</span><span>Jul</span></div>
                <div className="gmetric">
                  <div className="gm"><div className="k">Calls from Google</div><div className="v">38 <small>&#9650; 2.4&times;</small></div></div>
                  <div className="gm"><div className="k">New leads / mo</div><div className="v">27 <small>&#9650;</small></div></div>
                </div>
                <div className="gfine">Illustrative growth. Results vary by business and market.</div>
              </div>
              <div className="fchip f1 float"><div className="k">New leads</div><div className="v">38</div></div>
              <div className="fchip f2 float" style={{ animationDelay: '1s' }}><span className="dot" /><span className="t">Found on Google</span></div>
            </div>
          </div>
        </section>

        {/* 2. PROOF */}
        <div className="proof">
          <div className="wrap">
            <span className="tag">Short answer</span>
            <p>
              FactoryJet is a US small business SEO company that gets you found on Google and turns those searches into
              customers. Our small business SEO services cover your website, your local listings, and content, kept
              affordable by doing the work that moves rankings first. Founder-led, month-to-month, reported in calls and
              leads.
            </p>
          </div>
        </div>

        {/* 3. LOGOS */}
        <div className="logobar">
          <div className="wrap">
            <div className="lbl">Trusted by US small business owners</div>
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
            <h2>From invisible on Google to <span className="it">booked solid</span></h2>
            <p className="dek" style={{ margin: '0 auto' }}>
              Small business SEO is really three jobs. We do all three and report the only one that pays your bills:
              customers.
            </p>
          </div>
          <div className="wrap">
            <div className="triad">
              <div className="pillar">
                <div className="node"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.5-4.5" strokeLinecap="round" /></svg></div>
                <h3>Get found</h3>
                <p className="sub">We fix your site and Google listing so you show up when nearby customers search what you sell, including &ldquo;near me.&rdquo;</p>
                <span className="wd">Website + local setup</span>
              </div>
              <div className="pillar">
                <div className="node"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3l2.4 5 5.5.7-4 3.9 1 5.4-4.9-2.7L7.6 21l1-5.4-4-3.9 5.5-.7z" strokeLinejoin="round" /></svg></div>
                <h3>Get the click</h3>
                <p className="sub">Titles, reviews, and pages that make people pick you over the other results, not just see you.</p>
                <span className="wd">Titles + reviews + pages</span>
              </div>
              <div className="pillar">
                <div className="node"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                <h3>Get the customer</h3>
                <p className="sub">Clear calls-to-action and fast pages turn that click into a call, a form, or a sale you can count.</p>
                <span className="wd">Conversion + speed</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SERVICES BENTO */}
        <section className="svc-sec">
          <div className="wrap">
            <div className="eyebrow">What&rsquo;s included</div>
            <h2 style={{ marginTop: 14 }}>Everything in your <span className="it">small business SEO</span> plan</h2>
            <p className="dek">
              No confusing SEO packages with filler line items. One focused plan around what grows a small business,
              scoped to your budget.
            </p>
            <div className="bento2">
              <div className="tile feat">
                <span className="badge">Where we start</span>
                <div className="ic ic-o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.5-4.5" strokeLinecap="round" /></svg></div>
                <div className="kk">Foundation</div>
                <h3>Website &amp; on-page SEO</h3>
                <p>We make your site fast, crawlable, and built around the searches your customers actually type, so Google can rank you and visitors convert. This is the foundation every small business SEO plan is built on.</p>
                <div className="impact">Impact on leads <span className="bar"><i style={{ width: '94%' }} /></span> High</div>
              </div>
              <div className="tile">
                <div className="ic ic-g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-6-5.7-6-10a6 6 0 0112 0c0 4.3-6 10-6 10z" /><circle cx="12" cy="11" r="2" /></svg></div>
                <div className="kk">Get found nearby</div>
                <h3>Google listing &amp; local</h3>
                <p>Your Google Business Profile tuned so you appear in local and &ldquo;near me&rdquo; searches.</p>
              </div>
              <div className="tile">
                <div className="ic ic-l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-3" strokeLinecap="round" /></svg></div>
                <div className="kk">Compounding growth</div>
                <h3>Content &amp; keywords</h3>
                <p>Pages and posts that answer buyer questions and pull in steady, free traffic month after month.</p>
              </div>
              <div className="tile wide">
                <div className="ic ic-o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                <div className="kk">Plain-English proof</div>
                <h3>Reporting in leads, not rankings</h3>
                <p>A monthly report tied to calls, form fills, and sales, so you always know what your SEO marketing is actually earning. No vanity rankings nobody acts on.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SCORECARD */}
        <section>
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 720 }}>
            <h2>Founder-led vs a big agency vs <span className="it">the cheap freelancer</span></h2>
            <p className="dek" style={{ margin: '0 auto' }}>
              How an honest small business SEO agency compares to the alternatives most owners weigh.
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
                  <div className="ch">Big agency</div>
                  {SCORE_AG.map(([v, i]) => <div key={v} className="row">{i === 'x' ? <Cross /> : <Partial />} {v}</div>)}
                </div>
                <div className="col">
                  <div className="ch">Cheap freelancer</div>
                  {SCORE_DIY.map(([v, i]) => <div key={v} className="row">{i === 'x' ? <Cross /> : i === 'c' ? <Check /> : <Partial />} {v}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PERSONAS */}
        <section className="ind">
          <div className="wrap">
            <h2>Built for owners <span className="it">like you</span></h2>
            <p className="dek">
              Small business SEO services tuned to how your specific customers search and buy.
            </p>
            <div className="ind-grid">
              {PERSONAS.map((p) => (
                <div key={p.h} className="indcard">
                  <span className={`marker ${p.mk}`}><i /></span>
                  <div className="kk">{p.kk}</div>
                  <h3>{p.h}</h3>
                  <p>{p.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. GROWTH / ROI DASHBOARD */}
        <section className="rep">
          <span className="orb" />
          <div className="wrap rep-grid">
            <div>
              <div className="eyebrow eyebrow-warm">Affordable, not cheap</div>
              <h2 style={{ marginTop: 14 }}>The best SEO for small business <span className="it">pays for itself</span></h2>
              <p className="lead">
                Affordable SEO does not mean cutting corners. It means spending your budget on the few moves that bring
                customers, and skipping the busywork agencies bill for. For most owners, one new customer a month covers
                the whole engagement, and it compounds from there.
              </p>
              <div className="cta-row">
                <ModalCTAButton label="See what fits your budget" region="us" btnVariant="primary-dark" />
              </div>
            </div>
            <div className="repcard">
              <div className="rep-top">
                <div className="rc"><div className="k">Calls from Google</div><div className="v">38</div><span className="up">&#9650; 2.4&times; in 6 months</span></div>
                <div className="rc"><div className="k">Contract</div><div className="v" style={{ fontSize: 20 }}>Month<br />to month</div></div>
              </div>
              <div className="revbars">
                <div className="k">New leads per month</div>
                <div className="bars">
                  {[30, 38, 36, 52, 64, 80, 100].map((h, idx) => (
                    <i key={idx} className={idx >= 5 ? 'hi' : undefined} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="rep-fine">Illustrative example of a healthy small business growth curve. Results vary by business, market, and budget.</div>
            </div>
          </div>
        </section>

        {/* 9. TEAM */}
        <section className="team">
          <div className="wrap team-grid">
            <div className="team-vis">
              <div className="photo">
                <Image src="/images/us/services/seo/team-cutout.webp" alt="The FactoryJet small business SEO team" fill loading="lazy" sizes="(max-width: 880px) 90vw, 460px" style={{ objectFit: 'cover' }} />
              </div>
              <div className="ec e1">A senior team</div>
              <div className="ec e2"><span className="star">&#9733;</span> 4.9/5 &middot; average rating</div>
            </div>
            <div>
              <h2>A small business SEO consultant, <span className="it">not a call center</span></h2>
              <p className="lead">
                I run your strategy myself, so the person who scopes your SEO is the person accountable for the calls and
                leads it earns. Returns on your time, not just your spend.
              </p>
              <ul className="feat-list">
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M5 20c0-3.5 3-5 7-5s7 1.5 7 5" /></svg></span><div>Founder-led strategy<small>Not handed to a junior team</small></div></li>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18M7 14l4-4 3 3 5-6" /></svg></span><div>Affordable and results-first<small>Budget spent on what brings customers</small></div></li>
                <li><span className="fi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg></span><div>500+ businesses served<small>4.9 / 5 average client rating</small></div></li>
              </ul>
              <div className="byline">Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder</div>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="faqsec" id="faq">
          <div className="wrap">
            <div className="eyebrow">Small business SEO FAQ</div>
            <h2 style={{ marginTop: 14 }}>Questions, <span className="it">answered straight</span></h2>
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
                <div className="eyebrow eyebrow-warm2">Free SEO audit</div>
                <h2 style={{ marginTop: 14 }}>See how to get <span className="it">more customers from Google</span></h2>
                <p className="lead">
                  Book a free SEO audit and a 20-minute call with the founder. We will show you what is holding your
                  rankings back and what to fix first. No junior reps, no pressure.
                </p>
                <ul className="cta-trust">
                  <li><Check fill="#F05A28" /> A real audit, not a sales pitch</li>
                  <li><Check fill="#F05A28" /> Scoped to your budget</li>
                  <li><Check fill="#F05A28" /> 4.9 / 5 average client rating</li>
                </ul>
              </div>
              <div className="formcard">
                <div className="ft">Get your free SEO audit</div>
                <div className="fsub">A 20-minute call with the founder. We reply within one business day.</div>
                <ModalCTAButton label="Get a free SEO audit" region="us" btnVariant="primary-light" className="w-full" />
                <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border px-7 py-3.5 font-fj-body text-base font-semibold text-fj-ink transition-colors hover:bg-fj-neutral-50" style={{ borderColor: 'rgba(26,23,18,0.18)' }}>
                  Talk to the founder <span aria-hidden="true">&rarr;</span>
                </Link>
                <div className="fine">Founder-led. Month-to-month. Reported in leads, not rankings.</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
