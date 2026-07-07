import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import './web-design.css';

const CANONICAL = 'https://factoryjet.com/uk/web-design';
const UPDATED = '2026-07-01';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'getting-started', label: 'Getting started' },
  { key: 'platforms',       label: 'Platforms & tech' },
  { key: 'design',          label: 'Design & conversion' },
  { key: 'seo',             label: 'SEO & AI search' },
  { key: 'working',         label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  { category: 'getting-started', question: 'How much does web design cost in the UK?',
    answer: 'It depends on scope: the number of pages, ecommerce website design versus a marketing site, and any integrations. We do not sell fixed packages, because a five-page brochure site and a 200-product store are different jobs. You get a fixed quote after a short call, plus affordable website design options for startups on a tight budget. There are no surprise invoices later.' },
  { category: 'getting-started', question: 'How long does it take to design and build a website?',
    answer: 'A standard custom web design project runs about four weeks from brief to launch. We also offer express delivery of up to a five-page site in seven days. Larger ecommerce and web-app builds are scoped individually, so the timeline is honest rather than optimistic.' },
  { category: 'getting-started', question: 'Do I own the website and the code when it is finished?',
    answer: 'Yes, one hundred percent. We push the full codebase to your GitHub at launch. There is no lock-in and no rented platform you have to keep paying us to access. If you ever move to another team, everything goes with you.' },
  { category: 'getting-started', question: 'Can you redesign my existing site without losing my Google rankings?',
    answer: 'Yes. A careful website redesign keeps your URLs, redirects, and content structure intact so your rankings carry across. We audit your current SEO and map every important page before we change anything, then monitor rankings after launch.' },

  { category: 'platforms', question: 'Which platform should I use: WordPress, Next.js, Webflow, Framer, or Shopify?',
    answer: 'Next.js for speed and custom marketing sites, WordPress for content-heavy sites your team edits daily, Webflow for design-led sites with a visual CMS, Framer for a fast startup launch, and Shopify for ecommerce. We recommend the platform that fits your goals, not the one that is easiest for us to build on.' },
  { category: 'platforms', question: 'Do you build on Next.js, or only WordPress?',
    answer: 'Both, plus Webflow, Framer, Shopify, and fully custom builds. Next.js is our default when speed and Core Web Vitals matter most, because it produces the fastest mobile load times of any option we offer.' },
  { category: 'platforms', question: 'Can I edit the website myself after launch?',
    answer: 'Yes. Every build ships with a content management system so your team can update text, images, and pages without a developer. We include a short handover walkthrough and written notes so nobody is left guessing.' },
  { category: 'platforms', question: 'Is Webflow or Framer a good choice for a small business website?',
    answer: 'Often, yes. Webflow suits sites that change frequently and need a visual editor. Framer suits fast launches and animation-rich landing page work. If a lighter platform saves you money without hurting the result, we will tell you.' },

  { category: 'design', question: 'What makes a website actually convert visitors into customers?',
    answer: 'Clear hierarchy, fast mobile load, trust signals placed where doubt appears, and one obvious next step per page. We design around the decision your customer is trying to make, then prove what works with analytics after launch rather than guessing.' },
  { category: 'design', question: 'Will my website be mobile-first and fast?',
    answer: 'Yes. We build mobile-first and audit Lighthouse and Core Web Vitals before every handover. Typical mobile load on delivery is under 1.5 seconds, which is well inside the range Google rewards.' },
  { category: 'design', question: 'Do you write the copy, or do I need to provide it?',
    answer: 'We can do both. Most clients give us the raw facts and let us shape the copy for conversion and SEO. If you have a copywriter or an in-house voice, we build to their words instead.' },
  { category: 'design', question: 'Can you match my existing brand and logo?',
    answer: 'Yes. If you have brand guidelines we follow them exactly. If you do not, we set a simple, consistent design system as part of the build so the site looks deliberate rather than assembled.' },

  { category: 'seo', question: 'Will my new website design be good for SEO?',
    answer: 'Yes. On-page SEO, structured data, clean URLs, and Core Web Vitals are included in every build. You launch ready to rank, rather than paying for an SEO fix-up six months later to undo a slow template.' },
  { category: 'seo', question: 'Can a new website help me show up in ChatGPT and Google AI answers?',
    answer: 'Yes. We structure pages so AI engines can quote them: the answer stated up top, question-style headings, FAQ schema, and cited facts. That structure is what gets a site referenced in AI answers from ChatGPT, Gemini, and Perplexity, alongside a normal Google listing.' },
  { category: 'seo', question: 'Do you set up analytics and conversion tracking?',
    answer: 'Yes. We wire up Google Analytics and conversion tracking so you can see what the site is doing from day one. You will know which pages bring enquiries, not just how many people visited.' },
  { category: 'seo', question: 'What is Core Web Vitals and does it matter for my site?',
    answer: 'Core Web Vitals are Google measures of loading speed, visual stability, and responsiveness (LCP, CLS, and INP). They affect both your rankings and how many mobile visitors stay long enough to buy. Every site we ship passes them in the green.' },

  { category: 'working', question: 'Are you a UK agency, and do you work with businesses outside London?',
    answer: 'We are a UK-wide web design company serving London, Bristol, Birmingham, Leeds, Manchester, and beyond. Projects run remotely with regular video reviews, so your location is never a limit on the quality of the work.' },
  { category: 'working', question: 'Who actually does the work on my project?',
    answer: 'Senior engineers and designers, not juniors handed the project after the sales call. The founder stays involved on every build, so the person who scopes your work is close to the person who delivers it.' },
  { category: 'working', question: 'What happens if I need changes after the site goes live?',
    answer: 'We stay on for support after launch. Small changes are quick, and because you own the code, you are never locked in if you decide to take the site elsewhere. Support terms are agreed up front so there are no surprises.' },
  { category: 'working', question: 'How do we get started, and what do you need from you?',
    answer: 'Send your name and email through the form on this page. The founder replies within 24 hours to book a short call, where we scope the project and give you a fixed quote. To begin, that is all we need.' },
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
      name: 'Web Design Services UK',
      serviceType: 'Web design',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
        { '@type': 'ListItem', position: 2, name: 'UK', item: 'https://factoryjet.com/uk' },
        { '@type': 'ListItem', position: 3, name: 'Web Design', item: CANONICAL },
      ],
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Web Design UK | Conversion-Focused Website Design | FactoryJet',
      headline: 'Web Design in the UK That Turns Visitors Into Buyers',
      inLanguage: 'en-GB',
      datePublished: '2026-07-01',
      dateModified: UPDATED,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        url: 'https://www.linkedin.com/in/bhaveshbarot/',
        jobTitle: 'Founder, FactoryJet',
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
  title: 'Web Design UK | Conversion-Focused Website Design | FactoryJet',
  description:
    'FactoryJet is a UK web design agency. Fast, conversion-focused website design on Next.js, WordPress, Webflow, Framer, and Shopify. Fixed scope, you own the code. Get a free quote.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Web Design UK | Conversion-Focused Website Design | FactoryJet',
    description:
      'A UK web design company building fast, conversion-first websites for brands and ecommerce businesses. Next.js, WordPress, Webflow, Framer, Shopify. Free quote.',
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
                <h1>Web Design in the UK That Turns Visitors Into <span className="grad-text">Buyers</span></h1>
                <p className="lead mt-6" style={{ maxWidth: 540 }}>
                  FactoryJet is a web design agency for UK brands and ecommerce businesses. We design fast,
                  conversion-focused website design on the right platform for your goals, launch it in weeks,
                  and hand you the code on day one.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 540 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ sites delivered</span></div>
                  <div className="upd">Last updated<br />1 July 2026</div>
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
              <span className="lab">What is web design?</span>
              <p>
                Web design is the work of planning, designing, and building a website&apos;s layout, content, and user
                experience so visitors can find what they need and take action. In 2026, good website design pairs
                visual design with fast, mobile-first engineering and on-page SEO, so the site looks right, loads
                quickly, and gets found in both Google and AI answers like ChatGPT and Gemini.
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
                    Speed is not a nice-to-have. Around 53 percent of mobile visitors leave a page that takes longer
                    than three seconds to load, so a slow site loses customers before they ever see your offer. We
                    build mobile-first and treat load time as a design constraint, not an afterthought.
                  </p>
                  <p>
                    Whether you are a small business web design client on a first site or an established brand planning
                    a website redesign, the standard is the same: custom design, fast code, on-page SEO, and full
                    ownership at the end.
                  </p>
                </div>
                <div className="col-2 mt-8">
                  <div className="card">
                    <div className="stat-num">2.3&times;</div>
                    <p className="mb-2" style={{ color: 'var(--ink)', fontWeight: 600, marginTop: 8 }}>Mobile add-to-cart lift</p>
                    <p style={{ fontSize: 13 }}>vs. a generic theme, averaged across our ecommerce builds.</p>
                  </div>
                  <div className="card">
                    <div className="stat-num">&lt;1.5s</div>
                    <p className="mb-2" style={{ color: 'var(--ink)', fontWeight: 600, marginTop: 8 }}>Typical mobile load</p>
                    <p style={{ fontSize: 13 }}>on delivery, measured in Lighthouse before handover.</p>
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <div style={{ background: 'var(--dark)', color: '#fff', borderRadius: 12, padding: '16px 18px', fontFamily: 'var(--fd)', fontWeight: 700 }}>
                  Every build includes
                </div>
                {[
                  'Custom website design, no recycled templates',
                  'Mobile-first, 90+ Lighthouse score',
                  'On-page SEO and schema baked in',
                  'A CMS so you can edit it yourself',
                  'Full code ownership on your GitHub',
                ].map((item) => (
                  <div key={item} className="scorecard-row" style={{ padding: '13px 12px' }}>
                    <span style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, color: 'var(--ink)' }}>
                      <span style={{ color: 'var(--orange)', fontWeight: 700 }}>✓</span>{item}
                    </span>
                  </div>
                ))}
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
            <div className="col-2 mt-12" style={{ gap: 24 }}>
              <div className="card">
                <h3>Conversion-first structure</h3>
                <p className="mt-4">Layout, hierarchy, and calls to action arranged around the one decision your visitor is trying to make. Clear next step on every page, trust signals placed where doubt appears, and no dead ends.</p>
              </div>
              <div className="card">
                <h3>Responsive, mobile-first design</h3>
                <p className="mt-4">Most UK web traffic is on a phone, so we design for the small screen first. Responsive web design means the site reflows cleanly from mobile to desktop, with tap targets, type, and images sized for real thumbs.</p>
              </div>
              <div className="card">
                <h3>Speed and Core Web Vitals</h3>
                <p className="mt-4">Loading speed is a ranking factor and a conversion factor. We build for green Core Web Vitals (LCP, CLS, and INP) and audit them in Lighthouse before handover, so the site is fast on a mid-range phone, not just on office wifi.</p>
              </div>
              <div className="card">
                <h3>On-page SEO and schema</h3>
                <p className="mt-4">Title tags, meta descriptions, heading structure, clean URLs, internal links, and structured data are built in from the start. Professional web design and SEO are the same job, not two invoices.</p>
              </div>
              <div className="card">
                <h3>Accessibility</h3>
                <p className="mt-4">We build to WCAG guidance: proper contrast, keyboard navigation, alt text, and semantic markup. An accessible site reaches more customers and reads more clearly to search engines and AI crawlers.</p>
              </div>
              <div className="card">
                <h3>A content management system</h3>
                <p className="mt-4">You should be able to change your own text, images, and pages without a developer on call. Every build ships with a CMS matched to your platform and a short handover so your team is confident from day one.</p>
              </div>
              <div className="card">
                <h3>Analytics and conversion tracking</h3>
                <p className="mt-4">A website you cannot measure is a guess. We wire up Google Analytics and conversion tracking so you can see which pages bring enquiries and where visitors drop off.</p>
              </div>
              <div className="card">
                <h3>Ownership and maintainability</h3>
                <p className="mt-4">Clean, documented code pushed to your GitHub, built so any competent developer can pick it up later. You are never locked into one agency to keep your own website running.</p>
              </div>
            </div>
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
            <div className="col-3 mt-12">
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">WordPress</span><span className="plat-pill">CMS</span></div>
                <p>The most-used content management system in the world. Strong for content-heavy sites and teams who want to edit everything themselves.</p>
                <p className="plat-best"><b>Best for:</b> blogs, content sites, wordpress web design with in-house editors.</p>
              </div>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">Next.js</span><span className="plat-pill">CUSTOM</span></div>
                <p>Our default for speed. React-based, headless-ready, and built for the best Core Web Vitals scores on mobile.</p>
                <p className="plat-best"><b>Best for:</b> fast marketing sites, web development company projects, web apps.</p>
              </div>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">Webflow</span><span className="plat-pill">VISUAL CMS</span></div>
                <p>Design-led sites with a visual CMS your marketing team can update without a developer.</p>
                <p className="plat-best"><b>Best for:</b> brand and marketing sites that change often.</p>
              </div>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">Framer</span><span className="plat-pill">FAST LAUNCH</span></div>
                <p>Quick to launch and animation-friendly. Ideal for startups that need a strong site live in days.</p>
                <p className="plat-best"><b>Best for:</b> landing page design, startup and campaign sites.</p>
              </div>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">Shopify</span><span className="plat-pill">E-COMMERCE</span></div>
                <p>The commerce platform we build most, for DTC and B2B storefronts on one system.</p>
                <p className="plat-best"><b>Best for:</b> ecommerce website design, shopify web design.</p>
              </div>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">Custom</span><span className="plat-pill">BESPOKE</span></div>
                <p>When your requirements do not fit a template: portals, dashboards, integrations, and unusual flows.</p>
                <p className="plat-best"><b>Best for:</b> web apps and bespoke tools.</p>
              </div>
            </div>
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

        {/* ═══ 7. PROCESS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">How it works</span>
              <h2>From brief to live in four stages</h2>
            </div>
            <div className="process-grid mt-12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              <div className="card"><span className="stage-num">01</span><h3>Discovery</h3><p className="mt-4">We map your customers, goals, and the pages that must earn their trust before anyone opens a design tool.</p></div>
              <div className="card"><span className="stage-num">02</span><h3>Design</h3><p className="mt-4">Custom, conversion-first web design, reviewed with you before a single line of code is written.</p></div>
              <div className="card"><span className="stage-num">03</span><h3>Build</h3><p className="mt-4">Engineered on your chosen platform: fast, responsive, SEO-ready, and accessible.</p></div>
              <div className="card"><span className="stage-num">04</span><h3>Launch</h3><p className="mt-4">We ship, hand over the code to your GitHub, and stay on for support afterwards.</p></div>
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
            <div className="svc-grid mt-12">
              <div className="svc-card"><h3>Small Business Web Design</h3><p className="mt-4">Affordable, conversion-focused sites for UK SMBs and startups that need to look credible and load fast.</p></div>
              <div className="svc-card"><h3>Ecommerce Website Design</h3><p className="mt-4">Ecommerce web design and Shopify stores built to convert, from product pages to checkout.</p></div>
              <div className="svc-card"><h3>Landing Page Design</h3><p className="mt-4">Campaign and paid-traffic pages engineered for a single, measurable conversion.</p></div>
              <div className="svc-card"><h3>Web App Development</h3><p className="mt-4">Dashboards, portals, and custom tools built by a web development company that ships production code.</p></div>
              <div className="svc-card"><h3>Website Redesign</h3><p className="mt-4">Modernise a dated or slow site without losing the rankings you have already earned.</p></div>
              <div className="svc-card"><h3>WordPress Web Design</h3><p className="mt-4">Editable business website design your team can update in-house, with no developer on standby.</p></div>
            </div>
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
            <div className="col-3 mt-12">
              <div className="svc-card">
                <h3>Ecommerce and DTC brands</h3>
                <p className="mt-4">Brands selling direct who need ecommerce website design that converts on mobile, from the product page to the checkout, with room to grow into B2B and marketplaces later.</p>
              </div>
              <div className="svc-card">
                <h3>Small businesses and startups</h3>
                <p className="mt-4">Founders who need small business web design that looks credible, loads fast, and ranks locally, without paying for scope they will not use. Affordable website design routes are available.</p>
              </div>
              <div className="svc-card">
                <h3>Professional services and B2B</h3>
                <p className="mt-4">Firms that win work through trust: clear business website design, case studies, and a fast site that reassures a buyer before they ever pick up the phone.</p>
              </div>
            </div>
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
                    The terms &quot;web design&quot; and &quot;website design&quot; each draw around 14,800 UK searches a month, and
                    &quot;web designers near me&quot; another 6,600. These are buyers looking for a website design company right
                    now, not people browsing for ideas. Most of them land on slow, templated sites that were never
                    built to convert. We build the fast, conversion-first alternative.
                  </p>
                  <p>
                    Demand is strong across the country, so we serve web design london clients alongside Bristol,
                    Birmingham, Leeds, and Manchester. The work is handled remotely with regular video reviews, which
                    means a business anywhere in the UK gets the same senior team.
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
                  <span style={{ background: 'var(--orange)', color: '#fff', fontFamily: 'var(--fm)', fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
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
                    We do not publish a fixed price, because a fixed price for &quot;a website&quot; is either padded to cover the
                    worst case or too thin to deliver the real one. Instead you get a fixed quote after a short call,
                    once we know the scope. We also offer affordable website design routes for startups, and we agree
                    the scope up front so there are no change-order surprises halfway through.
                  </p>
                </div>
                <div className="mt-8">
                  <ModalCTAButton label="Get a fixed quote for your project" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves the price</span>
                <div className="scorecard-row"><div className="scorecard-metric">Pages and templates</div><div className="scorecard-val" style={{ fontSize: 14 }}>Scope</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Marketing site vs. ecommerce</div><div className="scorecard-val" style={{ fontSize: 14 }}>Type</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Integrations (CRM, payments, stock)</div><div className="scorecard-val" style={{ fontSize: 14 }}>Systems</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Custom design and copywriting</div><div className="scorecard-val" style={{ fontSize: 14 }}>Craft</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Fixed quote before you commit</div><div className="scorecard-val" style={{ color: 'var(--green)', fontSize: 14 }}>Always</div></div>
              </div>
            </div>
          </div>
        </section>

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
                    {FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                      <details key={f.question} className="faq-item">
                        <summary>
                          <span className="q-text">{f.question}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.answer}</p></div>
                      </details>
                    ))}
                  </div>
                ))}
              </div>
            </div>
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

        <Footer />
      </div>
    </>
  );
}
