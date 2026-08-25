import type { Metadata } from 'next';
import { webDesignAlternates } from '@/data/hreflangMap';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import AuthorCard from '@/components/v2/AuthorCard';
import WebDesignArchitectureBlueprint from '@/components/v2/WebDesignArchitectureBlueprint';
import WebDesignValueCalculator from '@/components/v2/WebDesignValueCalculator';
import RegionalBenchmarkCard from '@/components/v2/RegionalBenchmarkCard';
import CityLinksUK from '@/components/v2/CityLinksUK';
import './web-design.css';

const CANONICAL = 'https://factoryjet.com/uk/web-design';
const UPDATED = '2026-08-25';

/* ─── Breadcrumb source of truth (drives the visible trail AND the JSON-LD) ───
   One array only. Never hand-copy a second BreadcrumbList literal: a trail the
   crawler reads and a trail the visitor sees must be the same thing. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Web Design', url: CANONICAL },
];

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  '@id': `${CANONICAL}#breadcrumb`,
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
};

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'getting-started', label: 'Getting started' },
  { key: 'platforms',       label: 'Platforms & tech' },
  { key: 'design',          label: 'Design & conversion' },
  { key: 'seo',             label: 'SEO & AI search' },
  { key: 'scope',           label: 'Scope & budget' },
  { key: 'working',         label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  { category: 'getting-started', question: 'What does web design in the UK actually cover?',
    answer: 'Web design UK covers everything between a blank page and a live site: planning what each page needs to say, designing how it looks, building it so it loads fast on a phone, and setting up the on-page SEO so Google and AI assistants can read it. At FactoryJet that is one job handled by one team, not a designer, a developer and an SEO agency invoicing you separately and blaming each other when something breaks.' },
  { category: 'getting-started', question: 'How long does it take to design and build a website?',
    answer: 'A standard custom web design project runs about four weeks from brief to launch. We also offer express delivery of up to a five-page site in seven days. Larger ecommerce stores and web apps are scoped individually, because a 200-product catalogue with payments and stock control is a different job from a brochure site. You get the real timeline before you commit, not an optimistic one you discover halfway through.' },
  { category: 'getting-started', question: 'Do I own the website and the code when it is finished?',
    answer: 'Yes, one hundred percent. We push the full codebase to your GitHub account at launch, along with the design files and the documentation the build needs. There is no rented platform you have to keep paying us to access and no licence that quietly expires. If you ever move to another team, everything goes with you and any competent developer can pick it up without a handover call.' },
  { category: 'getting-started', question: 'Can you redesign my existing site without losing my Google rankings?',
    answer: 'Yes. A careful website redesign keeps your URLs, redirects and content structure intact so your rankings carry across. Before we change anything we crawl your current site, record every page that earns traffic, and map old addresses to new ones. After launch we watch rankings and Search Console for four weeks and fix anything that moves the wrong way. Most redesigns that lose traffic lost it because nobody did that mapping.' },
  { category: 'getting-started', question: 'What do you need from me to start?',
    answer: 'Your name, your email, and one sentence about what the site has to do. Send that through the form on this page and the founder replies within one business day to book a short call. On the call we scope the project: pages, platform, integrations and timeline. You do not need a brief document, a wireframe, or finished copy before you talk to us. Most clients arrive with none of those.' },

  { category: 'platforms', question: 'Which platform should I use: WordPress, Next.js, Webflow, Framer or Shopify?',
    answer: 'Next.js for speed and custom marketing sites, WordPress for content-heavy sites your team edits daily, Webflow for design-led sites that need a visual editor, Framer for a fast launch, and Shopify for ecommerce. The right answer depends on who updates the site, how often, and whether you sell online. We recommend the platform that fits your goals, not the one that is easiest for us to build on.' },
  { category: 'platforms', question: 'Do you build on Next.js, or only WordPress?',
    answer: 'Both, plus Webflow, Framer, Shopify and fully custom builds. Next.js is our default when speed matters most, because it renders pages ahead of time and produces the fastest mobile load of anything we offer. WordPress is the better answer when a non-technical team publishes several times a week and wants a familiar editor. We tell you which one your project needs and, more importantly, why.' },
  { category: 'platforms', question: 'Can I edit the website myself after launch?',
    answer: 'Yes. Every build ships with a content management system, which is the admin area where you change text, images and pages without touching code. We match the system to your platform, run a short handover walkthrough, and leave written notes so your team is confident from day one. If you later want a new page type added, that is a small piece of work rather than a rebuild.' },
  { category: 'platforms', question: 'Is Webflow or Framer a good choice for a small business website?',
    answer: 'Often, yes. Webflow suits sites that change frequently and need a visual editor your marketing team can use without a developer. Framer suits fast launches and animation-rich landing page work. Both take less engineering time than a fully custom site, so if a lighter platform gets you the same result we will say so rather than sell you work you do not need. The trade-off is less control over performance at the edges.' },
  { category: 'platforms', question: 'Where will my website be hosted, and who looks after it?',
    answer: 'We deploy to hosting matched to the platform: a global content delivery network for Next.js and Framer builds, managed hosting for WordPress, and Shopify infrastructure for stores. The accounts are set up in your name with your billing details, never ours. We can look after updates and monitoring on a monthly retainer, or hand the keys over completely at launch. Either way you are never locked out of your own site.' },

  { category: 'design', question: 'What makes a website actually convert visitors into customers?',
    answer: 'Clear hierarchy, fast mobile load, trust signals placed exactly where doubt appears, and one obvious next step on every page. We design around the decision your customer is trying to make, then check what works with analytics after launch rather than guessing. Most sites that fail to convert are not ugly. They are slow, or they bury the answer the visitor came for three scrolls below where people stop reading.' },
  { category: 'design', question: 'Will my website be mobile-first and fast?',
    answer: 'Yes. We design for the small screen first and audit Lighthouse and Core Web Vitals before every handover. Google publishes a target of 2.5 seconds or less for Largest Contentful Paint, which is the moment the main content appears, measured across the slowest quarter of real visits. We build to clear that on a mid-range phone on mobile data, not just on office wifi with a clean cache.' },
  { category: 'design', question: 'Do you write the copy, or do I need to provide it?',
    answer: 'We can do both. Most clients give us the raw facts, the objections they hear on sales calls, and how they decide what to charge, then let us shape the words for conversion and search. If you have a copywriter or a settled in-house voice, we build to their words instead. What we will not do is fill a layout with placeholder text and call the site finished.' },
  { category: 'design', question: 'Can you match my existing brand and logo?',
    answer: 'Yes. If you have brand guidelines we follow them exactly, down to type scale, colour values and spacing rules. If you do not have any, we set a simple, consistent design system as part of the build: two typefaces, a small colour set, one button style, and rules for how they combine. That is what makes a site look deliberate rather than assembled from whatever was to hand.' },
  { category: 'design', question: 'Will the site be accessible to people with disabilities?',
    answer: 'Yes. We build to the Web Content Accessibility Guidelines, the international standard published by the W3C, which sets testable success criteria for things like colour contrast, keyboard navigation, alt text on images, and semantic markup. Accessible sites reach more customers, are easier for search engines and AI crawlers to read, and reduce legal risk for any organisation with a duty to provide equal access.' },

  { category: 'seo', question: 'Will my new website design be good for SEO?',
    answer: 'Yes. On-page SEO, structured data, clean URLs, internal linking and Core Web Vitals are included in every build rather than sold as an add-on. Google says its ranking systems reward good page experience across many aspects at once rather than one single signal, so we cover the whole set. You launch ready to rank, instead of paying someone six months later to undo a slow template.' },
  { category: 'seo', question: 'Can a new website help me show up in ChatGPT and Google AI answers?',
    answer: 'Yes. We structure pages so AI assistants can quote them: the answer stated near the top, question-style headings, FAQ markup, named facts with sources, and clean HTML a crawler can read without running JavaScript first. That structure is what gets a site referenced in answers from ChatGPT, Gemini and Perplexity, alongside a normal Google listing. It costs nothing extra because it is the same work good SEO already needs.' },
  { category: 'seo', question: 'Do you set up analytics and conversion tracking?',
    answer: 'Yes. We wire up Google Analytics and conversion tracking so you can see what the site is doing from day one, including which pages bring enquiries, which forms get abandoned, and where mobile visitors drop off. We also connect Google Search Console so you can watch which search terms start showing your pages. A website you cannot measure is a guess dressed up as a decision.' },
  { category: 'seo', question: 'What are Core Web Vitals and do they matter for my site?',
    answer: 'Core Web Vitals are three Google measurements taken from real visits: Largest Contentful Paint for loading, Cumulative Layout Shift for whether the page jumps about, and Interaction to Next Paint for how quickly it responds to a tap. Google treats page experience as part of how it ranks pages, and slow, jumpy pages lose mobile visitors before they read the offer. Every site we ship passes all three before handover.' },
  { category: 'seo', question: 'Do I need a separate SEO agency after the site launches?',
    answer: 'Not for the on-page work, because that is built in. You may want ongoing help with content, digital PR and earning mentions from other websites, which is what actually moves competitive terms over time. We can do that on a monthly retainer, or hand you a written plan and let your own team run it. Either way the site launches technically sound, so nothing has to be undone first.' },

  { category: 'scope', question: 'What drives the cost of a web design project in the UK?',
    answer: 'Four things move it: the number of pages and unique templates, whether it is a marketing site or an ecommerce store, the systems you need connected such as a CRM or a booking tool, and how much custom design and written copy is involved. A five-page brochure site and a 200-product store are different jobs. We scope yours on a short call and agree it in writing before any work starts.' },
  { category: 'scope', question: 'Do you publish fixed packages?',
    answer: 'No, and that is deliberate. A single published figure is either padded to cover the worst case or too thin to deliver the real one, which is exactly how change orders appear halfway through a build. We scope your project first, then agree the shape of the engagement: fixed-price milestones for a defined build, a one-off audit if you want a second opinion, or a monthly retainer for ongoing work.' },
  { category: 'scope', question: 'Can you work with a small budget?',
    answer: 'Often, yes. The lever is scope, not quality. A tighter build might mean fewer unique page templates, a lighter platform such as Framer or Webflow instead of a custom Next.js front end, and copy you supply rather than copy we write. We will tell you honestly when a budget cannot reach the outcome you want, rather than taking the work and handing you something that disappoints you.' },
  { category: 'scope', question: 'What is not included in a standard build?',
    answer: 'Paid advertising management, ongoing content writing, professional photography and video production, and third-party licence fees such as premium plugins or stock imagery all sit outside a standard build. So does ongoing link building. We flag anything your project needs from that list during scoping, with an honest view on whether you need it now or later, so nothing turns up as a surprise line on an invoice.' },

  { category: 'working', question: 'Are you a UK agency, and do you work with businesses outside London?',
    answer: 'We work with businesses across the United Kingdom: London, Manchester, Birmingham, Leeds, Bristol, Glasgow, Edinburgh and everywhere in between. Projects run remotely with regular video reviews and a shared board you can check at any time, so your postcode never limits the quality of the work or the seniority of the people doing it. We also build for UK companies selling into the United States and the Gulf.' },
  { category: 'working', question: 'Who actually does the work on my project?',
    answer: 'Senior engineers and designers, not juniors handed the project after the sales call. The founder, Bhavesh Barot, stays involved on every build, so the person who scopes your work is close to the person who delivers it. You get direct access to the people writing the code rather than an account manager relaying messages. That is also why we cap how many projects run at the same time.' },
  { category: 'working', question: 'What happens if I need changes after the site goes live?',
    answer: 'We stay on for support after launch. Small changes are quick, and because you own the code and the hosting accounts, you are never locked in if you decide to take the site elsewhere. Support terms are agreed up front, whether that is a monthly retainer, a block of hours, or occasional work as you need it. Nothing is billed without you agreeing to it first.' },
  { category: 'working', question: 'How do we get started?',
    answer: 'Send your name and email through the form on this page and say in one line what the site has to do. The founder replies within one business day to book a short call, usually about thirty minutes. On that call we scope the project and send you the next steps in writing. There is no obligation and no automated sales sequence waiting for you afterwards.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factoryjet.com/#organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
      logo: 'https://factoryjet.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/factoryjet',
        'https://www.crunchbase.com/organization/factoryjet',
      ],
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Web Design UK',
      alternateName: ['Web design agency UK', 'Website design UK'],
      serviceType: 'Web design',
      description:
        'Conversion-first web design for UK businesses on Next.js, WordPress, Webflow, Framer and Shopify. Scoped up front, built for green Core Web Vitals, code handed over at launch.',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Chief Technical Architect',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '64',
        bestRating: '5',
        worstRating: '1',
      },
    },
    breadcrumbSchema,
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Web Design UK | Conversion-First Design Agency | FactoryJet',
      headline: 'Web Design UK That Turns Visitors Into Buyers',
      description:
        'What web design UK covers, what a good build includes, how to choose a web design agency UK businesses can hold to a number, and 28 answered questions.',
      inLanguage: 'en-GB',
      datePublished: '2026-07-01',
      dateModified: UPDATED,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Chief Technical Architect',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: 'Web Design UK | Conversion-First Design Agency | FactoryJet',
  description:
    'A web design agency UK brands hire for fast, conversion-first sites on Next.js, WordPress, Webflow and Shopify. Scoped up front, you own the code.',
  // Emits the same cluster the India and US web-design pages emit, so the
  // en-GB reciprocal actually resolves. Previously canonical-only.
  alternates: { canonical: CANONICAL, languages: webDesignAlternates },
  openGraph: {
    title: 'Web Design UK | Conversion-First Design Agency | FactoryJet',
    description:
      'A web design agency UK brands hire to build fast, conversion-first websites. Next.js, WordPress, Webflow, Framer, Shopify. Scoped up front, you own the code.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/web-design-og.webp', width: 1200, height: 630, alt: 'Web Design Services UK by FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

export default function WebDesignUKPage() {
  return (
    <>
      <script id="ld-uk-web-design" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-webdesign">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK Web Design Agency</span>
                  <span className="chip">Next.js · Webflow · Shopify</span>
                  <span className="chip">Fixed Scope</span>
                </div>
                <h1>Web Design UK That Turns Visitors Into Buyers</h1>
                <p className="lead mt-6" style={{ maxWidth: 540 }}>
                  FactoryJet is a web design agency UK brands and ecommerce businesses hire when the last site
                  looked fine and sold nothing. We scope the work up front, build fast website design on the
                  right platform for your goals, launch in weeks, and hand you the code on day one.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 540 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ sites delivered</span></div>
                  <div className="upd">Last updated<br />25 August 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 540 }}>
                  <HeroInlineForm region="uk" source="uk_web_design_hero" submitLabel="Get my free quote" />
                </div>
              </div>

              {/* Proof scorecard */}
              <div className="card card-top-orange">
                <span className="eyebrow">Why brands pick FactoryJet</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Lighthouse Score</div><div className="scorecard-note">audited before every handover</div></div>
                  <div className="scorecard-val">95+</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Core Web Vitals</div><div className="scorecard-note">LCP, CLS, INP on delivery</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)' }}>Green</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Delivery</div><div className="scorecard-note">standard build, express available</div></div>
                  <div className="scorecard-val">4 wks</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Sites Delivered</div><div className="scorecard-note">UK and global,</div></div>
                  <div className="scorecard-val">500+</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Code Ownership</div><div className="scorecard-note">pushed to your GitHub at launch</div></div>
                  <div className="scorecard-val" style={{ color: 'var(--green)' }}>100%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 920 }}>
              <span className="lab">What is web design UK?</span>
              <p>
                Web design UK is the work of planning, designing and building a website for a British audience so
                visitors can find what they need and act on it. In 2026 it is one job, not three: visual design, fast
                mobile-first engineering and on-page SEO shipped together. A web design agency UK businesses can hold
                to a number will scope the work before it starts, build for green Core Web Vitals, write the SEO into
                the pages rather than bolting it on later, and hand over the code so you own what you paid for.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 900 }}>
              The distinction that matters in 2026 is between a website that was decorated and one that was
              engineered. A decorated site starts from a template and a mood board. An engineered site starts from the
              customer&apos;s decision and the numbers behind it: how fast the page loads, how clearly it answers the
              question, and how obvious the next step is. Every web design project we take on is engineered, then made
              to look the part, in that order.
            </p>
          </div>
        </section>

        {/* ═══ 3. TRUST BAND ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <div className="col-4" style={{ gap: 20 }}>
              <div className="trust-pill"><span className="dot dot-orange" />500+ sites delivered</div>
              <div className="trust-pill"><span className="dot dot-orange" />Fixed scope, no surprises</div>
              <div className="trust-pill"><span className="dot dot-orange" />Senior engineers, not juniors</div>
              <div className="trust-pill"><span className="dot dot-orange" />You own the code</div>
            </div>
          </div>
        </section>

        {/* ═══ 4. WHAT YOU GET ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What you get</span>
                <h2>A web design company that builds to sell, not just to look good</h2>
                <div className="stack mt-6">
                  <p>
                    Most web design companies hand you a template on a slow platform and call it a website. Our web
                    design services start somewhere else: with how your customers actually decide to buy. We map that
                    decision, then build responsive web design around it. The result is professional web design that a
                    visitor can read in three seconds and act on, from a team that has shipped more than 500 sites.
                  </p>
                  <p>
                    Speed is not a nice-to-have, and it is not a matter of opinion either. Google publishes a hard
                    target for Largest Contentful Paint, the moment the main content of a page appears:{' '}
                    <a
                      className="exlink"
                      href="https://web.dev/articles/lcp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      2.5 seconds or less, measured across the slowest quarter of real visits
                    </a>
                    . That is the bar we build to, on a mid-range phone on mobile data rather than on office wifi.
                    Load time is a design constraint here, not something we look at the week before launch.
                  </p>
                  <p>
                    It is worth being clear about how Google actually treats this. Google says its core ranking
                    systems{' '}
                    <a
                      className="exlink"
                      href="https://developers.google.com/search/docs/appearance/page-experience"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      reward good page experience across many aspects rather than one single signal
                    </a>
                    , and the self-check it publishes asks whether your pages have good Core Web Vitals, are served
                    securely, display well on mobile, and avoid interruptions that get in the way of the content. No
                    agency can buy you a position. What you are paying for is the work that clears every one of those.
                  </p>
                  <p>
                    Whether you are a small business web design client on a first site or an established brand planning
                    a website redesign, the standard is the same: custom design, fast code, on-page SEO, and full
                    ownership at the end.
                  </p>
                </div>
                <ul className="col-2 mt-8">
                  <li className="card">
                    <div className="stat-num">2.3&times;</div>
                    <p className="mb-2" style={{ color: 'var(--ink)', fontWeight: 600, marginTop: 8 }}>Mobile add-to-cart lift</p>
                    <p style={{ fontSize: 13 }}>vs. a generic theme, averaged across our ecommerce builds.</p>
                  </li>
                  <li className="card">
                    <div className="stat-num">&lt;1.5s</div>
                    <p className="mb-2" style={{ color: 'var(--ink)', fontWeight: 600, marginTop: 8 }}>Typical mobile load</p>
                    <p style={{ fontSize: 13 }}>on delivery, measured in Lighthouse before handover.</p>
                  </li>
                </ul>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <div style={{ background: 'var(--dark)', color: '#fff', borderRadius: 12, padding: '16px 18px', fontFamily: 'var(--fd)', fontWeight: 700 }}>
                  Every build includes
                </div>
                <ul className="plain-list">
                  {[
                    'Custom website design, no recycled templates',
                    'Mobile-first build, 90+ Lighthouse score',
                    'On-page SEO and structured data written in',
                    'A content management system you can use yourself',
                    'Analytics and conversion tracking wired up',
                    'Accessibility checked against WCAG criteria',
                    'Redirect mapping if we are replacing an old site',
                    'Full code ownership on your GitHub at launch',
                  ].map((item) => (
                    <li key={item} className="scorecard-row" style={{ padding: '13px 12px' }}>
                      <span style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, color: 'var(--ink)' }}>
                        <span style={{ color: '#B23E13', fontWeight: 700 }}>✓</span>{item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4b. WHAT GOOD WEB DESIGN INCLUDES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">The standard</span>
              <h2>What good web design includes in 2026</h2>
              <p className="lead mt-4">
                A modern website is judged on more than how it looks. These are the parts that decide whether a site
                ranks, loads, and turns visitors into customers. Every FactoryJet build covers all eight.
              </p>
            </div>
            <ul className="col-2 mt-12" style={{ gap: 24 }}>
              <li className="card">
                <h3>Conversion-first structure</h3>
                <p className="mt-4">Layout, hierarchy, and calls to action arranged around the one decision your visitor is trying to make. Clear next step on every page, trust signals placed where doubt appears, and no dead ends. It is the same discipline a dedicated ux agency brings to a build, applied from the first wireframe instead of bolted on after launch.</p>
              </li>
              <li className="card">
                <h3>Responsive, mobile-first design</h3>
                <p className="mt-4">Most UK web traffic is on a phone, so we design for the small screen first. Responsive web design means the site reflows cleanly from mobile to desktop, with tap targets, type, and images sized for real thumbs. It is the first thing to check when you compare a responsive web design agency against a template seller: whether the layout genuinely adapts, or just shrinks.</p>
              </li>
              <li className="card">
                <h3>Speed and Core Web Vitals</h3>
                <p className="mt-4">Loading speed is a ranking factor and a conversion factor. We build for green Core Web Vitals (LCP, CLS, and INP) and audit them in Lighthouse before handover, so the site is fast on a mid-range phone, not just on office wifi.</p>
              </li>
              <li className="card">
                <h3>On-page SEO and schema</h3>
                <p className="mt-4">Title tags, meta descriptions, heading structure, clean URLs, internal links, and structured data are built in from the start. Professional web design and SEO are the same job, not two invoices.</p>
              </li>
              <li className="card">
                <h3>Accessibility</h3>
                <p className="mt-4">
                  We build to the Web Content Accessibility Guidelines, the international standard published by the
                  W3C, which sets{' '}
                  <a
                    className="exlink"
                    href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    testable success criteria for each guideline
                  </a>
                  : colour contrast, keyboard navigation, alt text on images, and semantic markup. An accessible site
                  reaches more customers and reads more clearly to search engines and AI crawlers.
                </p>
              </li>
              <li className="card">
                <h3>A content management system</h3>
                <p className="mt-4">You should be able to change your own text, images, and pages without a developer on call. Every build ships with a CMS matched to your platform and a short handover so your team is confident from day one.</p>
              </li>
              <li className="card">
                <h3>Analytics and conversion tracking</h3>
                <p className="mt-4">A website you cannot measure is a guess. We wire up Google Analytics and conversion tracking so you can see which pages bring enquiries and where visitors drop off.</p>
              </li>
              <li className="card">
                <h3>Ownership and maintainability</h3>
                <p className="mt-4">Clean, documented code pushed to your GitHub, built so any competent developer can pick it up later. You are never locked into one agency to keep your own website running.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 5. PLATFORMS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
              <span className="eyebrow">Platforms we design on</span>
              <h2>We pick the platform to fit your goals, not the other way round</h2>
              <p className="lead mt-4">
                WordPress, Next.js, Webflow, Framer, Shopify, or a fully custom build. Here is when each one is the
                right call for your project.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="plat-card">
                <div className="plat-top"><span className="plat-name">WordPress</span><span className="plat-pill">CMS</span></div>
                <p>The most-used content management system in the world. Strong for content-heavy sites and teams who want to edit everything themselves.</p>
                <p className="plat-best"><b>Best for:</b> blogs, content sites, wordpress web design with in-house editors.</p>
                <p className="plat-best"><b>Watch out for:</b> plugin bloat, which is what makes most WordPress sites slow.</p>
              </li>
              <li className="plat-card">
                <div className="plat-top"><span className="plat-name">Next.js</span><span className="plat-pill">CUSTOM</span></div>
                <p>Our default for speed. React-based, headless-ready, and built for the best Core Web Vitals scores on mobile.</p>
                <p className="plat-best"><b>Best for:</b> fast marketing sites, web development company projects, web apps.</p>
                <p className="plat-best"><b>Watch out for:</b> it needs a developer for structural changes, not just content edits.</p>
              </li>
              <li className="plat-card">
                <div className="plat-top"><span className="plat-name">Webflow</span><span className="plat-pill">VISUAL CMS</span></div>
                <p>Design-led sites with a visual CMS your marketing team can update without a developer.</p>
                <p className="plat-best"><b>Best for:</b> brand and marketing sites that change often.</p>
                <p className="plat-best"><b>Watch out for:</b> ongoing platform fees, and less control at the performance edges.</p>
              </li>
              <li className="plat-card">
                <div className="plat-top"><span className="plat-name">Framer</span><span className="plat-pill">FAST LAUNCH</span></div>
                <p>Quick to launch and animation-friendly. Ideal for startups that need a strong site live in days.</p>
                <p className="plat-best"><b>Best for:</b> landing page design, startup and campaign sites.</p>
                <p className="plat-best"><b>Watch out for:</b> heavy animation is the fastest way to lose a good mobile score.</p>
              </li>
              <li className="plat-card">
                <div className="plat-top"><span className="plat-name">Shopify</span><span className="plat-pill">E-COMMERCE</span></div>
                <p>The commerce platform we build most, for DTC and B2B storefronts on one system.</p>
                <p className="plat-best"><b>Best for:</b> ecommerce website design, shopify web design.</p>
                <p className="plat-best"><b>Watch out for:</b> stacked apps, each one adding scripts to every page load.</p>
              </li>
              <li className="plat-card">
                <div className="plat-top"><span className="plat-name">Custom</span><span className="plat-pill">BESPOKE</span></div>
                <p>When your requirements do not fit a template: portals, dashboards, integrations, and unusual flows.</p>
                <p className="plat-best"><b>Best for:</b> web apps and bespoke tools.</p>
                <p className="plat-best"><b>Watch out for:</b> it is the longest build, so only choose it when nothing else fits.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 6. COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">How we compare</span>
            <h2 style={{ maxWidth: 640 }}>FactoryJet vs. a template builder vs. a typical agency</h2>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>DIY / template builder</th>
                    <th>Typical agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Custom, conversion-first design</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Template only</span></td><td><span className="partial">Sometimes</span></td></tr>
                  <tr><td className="feat">Mobile Lighthouse 90+ on delivery</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Rarely</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">You own 100% of the code</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Rented platform</span></td><td><span className="partial">Often locked</span></td></tr>
                  <tr><td className="feat">On-page SEO and schema included</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Add-on</span></td><td><span className="partial">Extra cost</span></td></tr>
                  <tr><td className="feat">Delivery time</td><td className="fj"><span className="yes">4 weeks, 7-day express</span></td><td>Weeks of your own time</td><td>8 to 12 weeks typical</td></tr>
                  <tr><td className="feat">Who does the work</td><td className="fj"><span className="yes">Senior engineers</span></td><td>You</td><td><span className="partial">Often juniors</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

    

        {/* ═══ 6b. HOW TO CHOOSE A WEB DESIGN AGENCY UK ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Choosing an agency</span>
              <h2>How to choose a web design agency in the UK</h2>
              <p className="lead mt-4">
                Most of the difference between a good build and an expensive disappointment shows up in the first
                conversation, before anyone has drawn anything. Ask these ten questions of every agency on your
                shortlist, including us. The answers, and how quickly they come, tell you most of what you need.
              </p>
            </div>
            <div className="col-6040 mt-12">
              <div>
                <h3 className="mb-6">Ten questions worth asking</h3>
                <ol className="num-list">
                  <li>
                    <b>Who actually writes the code, and can I speak to them before I sign?</b> If the people on the
                    sales call are not the people on the build, ask who is.
                  </li>
                  <li>
                    <b>What do I own at the end, and where does it live?</b> The answer should be all of it, in your
                    accounts, in your name.
                  </li>
                  <li>
                    <b>What is in scope, and what gets billed as extra?</b> Get this in writing before work starts,
                    not after the first change request.
                  </li>
                  <li>
                    <b>What Lighthouse and Core Web Vitals numbers will the finished site hit on a phone?</b> A team
                    that builds fast sites will give you a number, not an adjective.
                  </li>
                  <li>
                    <b>Which platform are you recommending, and what is the honest downside of it?</b> Every platform
                    has one. An agency that cannot name it is selling, not advising.
                  </li>
                  <li>
                    <b>If this is a redesign, how are you mapping my existing URLs?</b> No answer here is the single
                    most common reason a redesign loses traffic.
                  </li>
                  <li>
                    <b>Who can edit the site after launch, and what still needs a developer?</b> You want to know this
                    before you are locked into paying for a text change.
                  </li>
                  <li>
                    <b>Is on-page SEO included, or is it a separate invoice?</b> It is the same work as building the
                    page properly, so it should not be a second line item.
                  </li>
                  <li>
                    <b>What accessibility standard are you building to?</b> The answer should name WCAG and a
                    conformance level, not just say the site will be accessible.
                  </li>
                  <li>
                    <b>What happens in the first month after launch if something breaks?</b> Ask who fixes it, how
                    fast, and whether it costs you anything.
                  </li>
                </ol>
              </div>

              <div className="card card-top-orange">
                <span className="eyebrow">Six things that should worry you</span>
                <ul className="warn-list mt-6">
                  <li>A quoted figure arriving before anyone asked what the site has to do.</li>
                  <li>A portfolio where every site is the same layout with a different logo dropped in.</li>
                  <li>No straight answer on hosting, domains, or who owns the code.</li>
                  <li>Performance scores only ever shown on desktop, never on a phone.</li>
                  <li>SEO described as something to think about after launch.</li>
                  <li>A contract that makes leaving expensive rather than simply possible.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Want to see what your site could do?'}
          sub={'Send us the URL. We will come back with the three things costing you the most enquiries, and what it would take to fix them.'}
          label={'Get a free UK site review'}
        />

        {/* ═══ 7. PROCESS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">How it works</span>
              <h2>From brief to live in four stages</h2>
              <p className="lead mt-4">
                Each stage ends with something you can look at and sign off, not a status update. Here is what
                actually lands in your inbox at each point.
              </p>
            </div>
            <ol className="process-grid process-grid-4 mt-12">
              <li className="card">
                <span className="stage-num">01</span><h3>Discovery</h3>
                <p className="mt-4">We map your customers, goals, and the pages that must earn their trust before anyone opens a design tool.</p>
                <ul className="tick-list mt-4">
                  <li>A written scope: pages, templates, integrations</li>
                  <li>Platform recommendation with the reasoning</li>
                  <li>A sitemap you approve before design starts</li>
                  <li>Audit of the current site, if there is one</li>
                </ul>
              </li>
              <li className="card">
                <span className="stage-num">02</span><h3>Design</h3>
                <p className="mt-4">Custom, conversion-first web design, reviewed with you before a single line of code is written.</p>
                <ul className="tick-list mt-4">
                  <li>Desktop and mobile designs for every template</li>
                  <li>A design system: type, colour, buttons, spacing</li>
                  <li>Draft copy for each page, or your copy placed</li>
                  <li>Two rounds of revisions built into the schedule</li>
                </ul>
              </li>
              <li className="card">
                <span className="stage-num">03</span><h3>Build</h3>
                <p className="mt-4">Engineered on your chosen platform: fast, responsive, SEO-ready, and accessible.</p>
                <ul className="tick-list mt-4">
                  <li>A staging site you can click through as it grows</li>
                  <li>Content management system set up and populated</li>
                  <li>On-page SEO, structured data, internal links</li>
                  <li>Cross-browser and real-device testing</li>
                </ul>
              </li>
              <li className="card">
                <span className="stage-num">04</span><h3>Launch</h3>
                <p className="mt-4">We ship, hand over the code to your GitHub, and stay on for support afterwards.</p>
                <ul className="tick-list mt-4">
                  <li>Redirects live, analytics and Search Console on</li>
                  <li>Code and design files pushed to your accounts</li>
                  <li>Handover walkthrough plus written notes</li>
                  <li>Four weeks of post-launch monitoring</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>

        {/* ═══ 7b. PRE-LAUNCH CHECKLIST + SCOPE BOUNDARIES ═══ */}
        <section className="sec-lg" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Before anything goes live</span>
              <h2>The checklist every UK build has to pass</h2>
              <p className="lead mt-4">
                No site leaves us until all fourteen of these are ticked and evidenced. If you are comparing agencies,
                ask them for their version of this list. A team that does not have one is testing by feel.
              </p>
            </div>
            <div className="col-6040 mt-12">
              <div>
                <h3 className="mb-6">Fourteen checks, every time</h3>
                <ul className="tick-list-lg">
                  <li><b>Core Web Vitals in the green</b> on a mid-range Android phone, not just desktop.</li>
                  <li><b>Lighthouse 90 or better</b> for performance, accessibility, best practices and SEO.</li>
                  <li><b>Every page has one H1</b> and a heading structure that descends in order.</li>
                  <li><b>Title tags and meta descriptions</b> written for every page, none duplicated.</li>
                  <li><b>Structured data validates</b> and describes only what is actually on the page.</li>
                  <li><b>Colour contrast passes</b> WCAG at the level agreed in scope.</li>
                  <li><b>The whole site is keyboard navigable</b> with a visible focus indicator.</li>
                  <li><b>Every image has alt text</b> that says something useful, or is marked decorative.</li>
                  <li><b>Forms tested end to end</b>, including the email that lands in your inbox.</li>
                  <li><b>Redirects mapped and tested</b> from every old address that earned traffic.</li>
                  <li><b>404 page works</b> and gives people somewhere sensible to go next.</li>
                  <li><b>Analytics and Search Console connected</b> and firing before launch day.</li>
                  <li><b>Sitemap and robots file correct</b>, with AI and search crawlers allowed in.</li>
                  <li><b>Code and accounts handed over</b>, in your name, with written notes.</li>
                </ul>
              </div>

              <div className="card">
                <span className="eyebrow">Outside a standard build</span>
                <p className="mt-4">
                  Being straight about the edges of scope is cheaper for everyone than discovering them in month two.
                  These sit outside a standard build. We will tell you during scoping if your project needs any of
                  them, and whether you need it now or later.
                </p>
                <ul className="warn-list mt-6">
                  <li>Paid advertising strategy and campaign management</li>
                  <li>Ongoing content writing after the launch pages</li>
                  <li>Professional photography and video production</li>
                  <li>Third-party licences such as premium plugins or stock imagery</li>
                  <li>Ongoing digital PR and earning links from other websites</li>
                  <li>Custom illustration and full brand identity work</li>
                </ul>
                <p className="mt-6" style={{ fontSize: 13 }}>
                  Engagements take one of three shapes: fixed-price milestones for a defined build, a one-off audit if
                  you want a second opinion on what you already have, or a monthly retainer for ongoing work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 8. SERVICES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">What we design</span>
              <h2>Six kinds of web design for UK businesses</h2>
            </div>
            <ul className="svc-grid mt-12">
              <li className="svc-card"><h3>Small Business Web Design</h3><p className="mt-4">Conversion-focused web design for a small business that needs to look credible and load fast. This is website design for small companies and startups, scoped to fit rather than padded with extras you will not use.</p></li>
              <li className="svc-card"><h3>Ecommerce Website Design</h3><p className="mt-4">Ecommerce web design and Shopify stores built to convert, from the product page through to the checkout, with mobile treated as the main screen rather than an afterthought.</p></li>
              <li className="svc-card"><h3>Landing Page Design</h3><p className="mt-4">Campaign and paid-traffic pages engineered for a single, measurable conversion, so you can tell which advert earned the enquiry rather than guessing.</p></li>
              <li className="svc-card"><h3>Web App Development</h3><p className="mt-4">Dashboards, portals, booking systems and custom internal tools, built by a web development company that ships production code rather than prototypes.</p></li>
              <li className="svc-card"><h3>Website Redesign</h3><p className="mt-4">Modernise a dated or slow site without losing the rankings you have already earned, with every old address mapped to a new one before anything goes live.</p></li>
              <li className="svc-card"><h3>WordPress Web Design</h3><p className="mt-4">Editable business website design your team can update in-house, with no developer on standby and no plugin stack quietly slowing the site down.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 8b. WHO WE DESIGN FOR ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">Who we design for</span>
              <h2>UK businesses that need a website to earn its keep</h2>
              <p className="lead mt-4">
                We work best with owners and teams who treat their website as a channel that has to bring enquiries or
                sales, not a digital business card. Three groups make up most of our work.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card">
                <h3>Ecommerce and DTC brands</h3>
                <p className="mt-4">Brands selling direct who need ecommerce website design that converts on mobile, from the product page to the checkout, with room to grow into B2B and marketplaces later.</p>
              </li>
              <li className="svc-card">
                <h3>Small businesses and startups</h3>
                <p className="mt-4">Founders who need small business web design that looks credible, loads fast, and ranks locally, without paying for scope they will not use. This is website design small business owners can rely on, with routes that fit a startup on a tight budget.</p>
              </li>
              <li className="svc-card">
                <h3>Professional services and B2B</h3>
                <p className="mt-4">Firms that win work through trust: clear business website design, case studies, and a fast site that reassures a buyer before they ever pick up the phone. This is what a b2b web design agency is for, since a longer sales cycle needs a site built to be read closely, not skimmed.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 9. UK MARKET + DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">The UK web design market</span>
            <h2 style={{ maxWidth: 760 }}>Every month, tens of thousands of UK businesses search for web design</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    The Office for National Statistics recorded{' '}
                    <a
                      className="exlink"
                      href="https://www.ons.gov.uk/businessindustryandtrade/business/activitysizeandlocation/bulletins/ukbusinessactivitysizeandlocation/2025"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      2.735 million VAT or PAYE registered businesses in the UK as of March 2025
                    </a>
                    . Almost every one of them has a website, and a large share of those sites were built once, years
                    ago, on a theme nobody has looked at since. That is the market a UK web design agency is actually
                    competing in: not against nothing, but against a lot of sites that stopped being fit for purpose.
                  </p>
                  <p>
                    The terms &quot;web design&quot; and &quot;website design&quot; each draw around 14,800 UK searches a month, and
                    &quot;web designers near me&quot; another 6,600. These are buyers looking for a website design company right
                    now, not people browsing for ideas. Most of them land on slow, templated sites that were never
                    built to convert. We build the fast, conversion-first alternative.
                  </p>
                  <p>
                    Demand is strong across the country, so we serve web design london clients alongside Bristol,
                    Birmingham, Leeds, and Manchester, including founders searching for a ux agency london team that
                    treats conversion design as core scope rather than an add-on. The work is handled remotely with
                    regular video reviews, which means a business anywhere in the UK gets the same senior team.
                  </p>
                  <p>
                    Search behaviour is also shifting. A growing share of buyers now ask an AI assistant like ChatGPT,
                    Gemini, or Perplexity before they ever open Google, and those tools quote the sites that answer
                    clearly and load fast. We build every page to be readable by both, so your website design earns
                    visibility across search engines and AI answers rather than betting on one channel.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <a className="city-pill" href="/uk/london">web design London</a>
                  <a className="city-pill" href="/uk/bristol">web design Bristol</a>
                  <a className="city-pill" href="/uk/birmingham">web design Birmingham</a>
                  <a className="city-pill" href="/uk/leeds">web design Leeds</a>
                  <a className="city-pill" href="/uk/manchester">web design Manchester</a>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--n200)', padding: '14px 18px' }}>
                  <span style={{ fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: 'var(--n400)' }}>UK · Monthly Search Demand</span>
                  <span style={{ background: '#B23E13', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  {[
                    { kw: 'web design', v: '14,800', w: '100%', kd: 'KD 53 · Winnable with speed' },
                    { kw: 'website design', v: '14,800', w: '100%', kd: 'KD 98 · Long-term target' },
                    { kw: 'web designers near me', v: '6,600', w: '45%', kd: 'KD 19 · High-intent, winnable' },
                    { kw: 'web design agency', v: '4,400', w: '30%', kd: 'KD 51 · Core commercial term' },
                    { kw: 'ecommerce website design', v: '1,600', w: '12%', kd: 'KD 18 · Quick win' },
                  ].map((r) => (
                    <div key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: 'var(--n400)' }}> /mo</span></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </div>
                  ))}
                  <p style={{ textAlign: 'center', fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--n400)', marginTop: 10 }}>Source: DataForSEO, United Kingdom, July 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9b. WHAT DRIVES WEB DESIGN COST ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Web design cost</span>
                <h2>What drives the cost of web design in the UK</h2>
                <div className="stack mt-6">
                  <p>
                    The cost of web design in the UK is driven by scope, not by an agency&apos;s postcode. Four things move
                    the price: the number of pages and templates, whether it is a marketing site or ecommerce website
                    design, the integrations you need, and how much custom design and copywriting is involved.
                  </p>
                  <p>
                    A five-page site for a small business is a different job from a 200-product store with payments,
                    stock, and a customer login. Integrations add work too: connecting a CRM, a booking system, or an
                    inventory feed takes engineering time that a template cannot cover. Custom design and written copy
                    move the number as well, because bespoke work is not a theme you switch on.
                  </p>
                  <p>
                    We do not publish one flat number for &quot;a website,&quot; because a single figure is either padded to cover the
                    worst case or too thin to deliver the real one. Instead we scope your project on a short call,
                    once we know what you actually need. We also offer routes that fit a startup on a tight budget,
                    and we agree the scope up front so there are no change-order surprises halfway through.
                  </p>
                </div>
                <div className="mt-8">
                  <ModalCTAButton label="Talk to us about your project" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the price</span>
                <div className="scorecard-row"><div className="scorecard-metric">Pages and templates</div><div className="scorecard-val" style={{ fontSize: 14 }}>Scope</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Marketing site vs. ecommerce</div><div className="scorecard-val" style={{ fontSize: 14 }}>Type</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Integrations (CRM, payments, stock)</div><div className="scorecard-val" style={{ fontSize: 14 }}>Systems</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Custom design and copywriting</div><div className="scorecard-val" style={{ fontSize: 14 }}>Craft</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Clear scope before you commit</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Always</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9c. REGIONAL PERFORMANCE BENCHMARK & ARCHITECTURE BLUEPRINT ═══ */}
        <section className="sec-lg" style={{ backgroundColor: '#FFFFFF', padding: '48px 0 16px' }}>
          <div className="wrap">
            <RegionalBenchmarkCard city="United Kingdom" vertical="web-design" />
          </div>
        </section>

        <div id="web-architecture-blueprint">
          <WebDesignArchitectureBlueprint />
        </div>

        {/* ═══ INTERACTIVE SPEED & PIPELINE VALUE CALCULATOR ═══ */}
        <WebDesignValueCalculator city="UK" region="uk" />

        {/* ═══ 10. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg dot-grid" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Web design questions UK founders actually ask</h2>
            </div>
            <div className="faq-grid">
              <aside className="faq-sidebar">
                <span className="faq-sidebar-topics">Topics</span>
                <nav className="faq-sidebar-nav">
                  {FAQ_CATEGORIES.map((c) => (
                    <a key={c.key} href={`#faq-${c.key}`}>
                      {c.label}
                      <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                    </a>
                  ))}
                </nav>
                <div className="faq-sidebar-cta">
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="uk" modalVariant="default" btnVariant="secondary-light" />
                  <p>Replies within 24 hours.</p>
                </div>
              </aside>

              <div>
                {FAQ_CATEGORIES.map((c) => (
                  <div key={c.key} id={`faq-${c.key}`} style={{ marginBottom: 40 }}>
                    <div className="faq-cat-header">
                      <span className="faq-cat-bar" />
                      <p className="faq-cat-label">{c.label}</p>
                    </div>
                    <ul className="faq-list">{FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                      <li key={f.question}><details className="faq-item">
                        <summary>
                          <span className="q-text">{f.question}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.answer}</p></div>
                      </details></li>
                    ))}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ UK REGIONAL HORIZONTAL CROSS-LINKS ═══ */}
        <CityLinksUK currentService="web-design" />

        {/* ═══ VERIFIED AUTHOR ENTITY CARD ═══ */}
        <section className="sec-lg" style={{ backgroundColor: '#F6F6F9', padding: '48px 0', borderTop: '1px solid #E6E6EC' }}>
          <div className="wrap">
            <AuthorCard />
          </div>
        </section>

        {/* ═══ 11. FINAL CTA ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Let us build a website that sells</h2>
            <p className="mt-4">
              Tell us what you are working on. You will hear back from the founder within 24 hours with honest,
              specific next steps. No spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free quote" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/shopify-development" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See Shopify builds</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
