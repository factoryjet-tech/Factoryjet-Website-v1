import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../../sections/Footer';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import AuthorCard from '@/components/v2/AuthorCard';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import MidPageCTA from '@/components/v2/MidPageCTA';
import CityLinksUK from '@/components/v2/CityLinksUK';
import './london-web-design.css';

const CANONICAL = 'https://factoryjet.com/uk/london/web-design';
const UPDATED = '2026-08-25';
const UPDATED_LABEL = '25 August 2026';

/* Local style tokens. Mirrors the custom properties in london-web-design.css so
   inline styles never reference a CSS variable name from TSX. */
const T = {
  fd: "'Plus Jakarta Sans', sans-serif",
  fm: "'Geist Mono', monospace",
  ink: '#0F0F12',
  dark: '#0F0F12',
  orange: '#FF5C00',
  green: '#047857',
  n200: '#E5E5E0',
  n400: '#6E6E68',
} as const;

/* ─── Breadcrumb source of truth (drives visible trail + BreadcrumbList) ──── */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'London', url: 'https://factoryjet.com/uk/london' },
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

/* ─── Cited sources. Every URL fetch-verified on 25 August 2026 (HTTP 200). ── */
const SOURCES = [
  {
    id: 'bpe',
    title: 'Business population estimates for the UK and regions 2025: statistical release',
    publisher: 'Department for Business and Trade',
    url: 'https://www.gov.uk/government/statistics/business-population-estimates-2025/business-population-estimates-for-the-uk-and-regions-2025-statistical-release',
    used: 'London had 1.042 million private sector businesses at the start of 2025, the most of any UK region, and 1,436 businesses per 10,000 adults, the highest business density in the UK.',
  },
  {
    id: 'cwv',
    title: 'Understanding Core Web Vitals and Google search results',
    publisher: 'Google Search Central',
    url: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
    used: 'The pass marks we build to: Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, Cumulative Layout Shift under 0.1.',
  },
  {
    id: 'wcag',
    title: 'Web Content Accessibility Guidelines (WCAG) 2.2',
    publisher: 'World Wide Web Consortium (W3C)',
    url: 'https://www.w3.org/TR/WCAG22/',
    used: 'Normal text needs a contrast ratio of at least 4.5 to 1, large text at least 3 to 1, and tap targets at least 24 by 24 CSS pixels under success criterion 2.5.8.',
  },
  {
    id: 'psbar',
    title: 'Accessibility requirements for public sector bodies',
    publisher: 'GOV.UK (Government Digital Service)',
    url: 'https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps',
    used: 'UK public sector websites must meet WCAG 2.2 level AA and publish an accessibility statement. The rules have applied since 23 September 2018.',
  },
] as const;

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'getting-started', label: 'Getting started' },
  { key: 'platforms',       label: 'Platforms & tech' },
  { key: 'london',          label: 'London & working with us' },
  { key: 'design',          label: 'Design & conversion' },
  { key: 'seo',             label: 'SEO & AI search' },
  { key: 'aftercare',       label: 'Hosting, law & aftercare' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  { category: 'getting-started', question: 'How much does web design cost in London?',
    answer: 'It depends on scope: the number of pages, ecommerce website design versus a marketing site, and any integrations you need. We do not charge central London day rates and we do not sell fixed packages, because a five-page brochure site and a 200-product store are different jobs. You get a fixed quote after a short call, plus affordable website design London options for startups on a tight budget. There are no surprise invoices later.' },
  { category: 'getting-started', question: 'How long does a London web design project take?',
    answer: 'A standard custom web design London project runs about four weeks from brief to launch. We also offer express delivery of up to a five-page site in seven days. Larger ecommerce and web-app builds are scoped individually, so the timeline stays honest rather than optimistic.' },
  { category: 'getting-started', question: 'Do I own the website and the code when it is finished?',
    answer: 'Yes, one hundred percent. We push the full codebase to your GitHub at launch. There is no lock-in and no rented platform you have to keep paying us to access. If you ever move to another London web designer or team, everything goes with you.' },
  { category: 'getting-started', question: 'Can you redesign my existing London site without losing my Google rankings?',
    answer: 'Yes. A careful website redesign keeps your URLs, redirects, and content structure intact so your rankings carry across. We audit your current SEO and map every important page before we change anything, then watch rankings for London searches after launch to confirm nothing slipped.' },

  { category: 'platforms', question: 'Which platform is best: WordPress, Next.js, Webflow, Framer, or Shopify?',
    answer: 'Next.js for speed and custom marketing sites, WordPress for content-heavy sites your team edits daily, Webflow for design-led sites with a visual CMS, Framer for a fast startup launch, and Shopify for ecommerce. We recommend the platform that fits your goals, not the one that is easiest for us to build on.' },
  { category: 'platforms', question: 'Do you build on Next.js, or only WordPress?',
    answer: 'Both, plus Webflow, Framer, Shopify, and fully custom builds. Next.js is our default for web development London projects when speed and Core Web Vitals matter most, because it produces the fastest mobile load times of any option we offer, which counts for a lot on a Tube-signal connection.' },
  { category: 'platforms', question: 'Can I edit the website myself after launch?',
    answer: 'Yes. Every build ships with a content management system so your team can update text, images, and pages without a developer. We include a short handover walkthrough and written notes so nobody on your side is left guessing. Structural changes, such as a whole new template or a new type of page, are the part that still needs us, and we are happy to quote those one at a time.' },
  { category: 'platforms', question: 'Do you build ecommerce and Shopify sites for London brands?',
    answer: 'Yes. Ecommerce web design London and Shopify web design London are among our most common builds, for DTC and B2B brands alike. We design product pages and checkout flows that convert on mobile, then wire up the payments, stock, and analytics behind them.' },

  { category: 'london', question: 'Are you a London web design agency, and do you meet in person?',
    answer: 'We are a UK web design agency that serves London clients across every borough, from Shoreditch to Canary Wharf. Projects run remotely with regular video reviews, which keeps your costs down without slowing the work. Most London clients tell us the remote process is faster than trailing across town for meetings.' },
  { category: 'london', question: 'Which London areas do you work with?',
    answer: 'All of them: the City of London, Shoreditch, Soho, Camden, Islington, Hackney, Westminster, Mayfair, Canary Wharf, and Greater London out to Croydon and Richmond. A remote-first process means your location within the capital never limits the quality of the work.' },
  { category: 'london', question: 'Who actually does the work on my project?',
    answer: 'Senior engineers and designers, not juniors handed the project after the sales call. The founder stays involved on every build, so the person who scopes your work is close to the person who delivers it. That is rare in the London agency market, where the pitch team and the delivery team are often strangers.' },
  { category: 'london', question: 'How do we get started, and what do you need from me?',
    answer: 'Send your name and email through the form on this page. The founder replies within 24 hours to book a short call, where we scope the project and give you a fixed quote. To begin, that is all we need from you.' },

  { category: 'design', question: 'What makes a London website actually convert visitors into customers?',
    answer: 'Clear hierarchy, fast mobile load, trust signals placed where doubt appears, and one obvious next step per page. We design around the decision your customer is trying to make, which matters more in London because the alternative is one search away. We then prove what works with analytics after launch rather than guessing.' },
  { category: 'design', question: 'Will my website be mobile-first and fast on a phone?',
    answer: 'Yes. We build mobile-first and audit Lighthouse and Core Web Vitals before every handover. A large share of London browsing happens on the move, on the Tube or the bus, often on patchy signal, so we treat a mid-range phone as the real test, not office wifi. Typical mobile load on delivery is under 1.5 seconds.' },
  { category: 'design', question: 'Do you write the copy, or do I need to provide it?',
    answer: 'We can do both. Most clients give us the raw facts and let us shape the copy for conversion and SEO. If you have a copywriter or an in-house voice, we build to their words instead. Either way, the writing is made to be read quickly by a time-poor London buyer.' },
  { category: 'design', question: 'Can you match my existing brand and make the site look distinctive?',
    answer: 'Yes. If you have brand guidelines we follow them exactly. If you do not, we set a simple, consistent design system as part of the build. In a city as crowded as London, looking like everyone else gets you ignored, so we design sites that are recognisably yours rather than a template with a new logo.' },

  { category: 'seo', question: 'Will my new site be good for SEO and rank in London?',
    answer: 'Yes. On-page SEO, structured data, clean web addresses, and Core Web Vitals are included in every build. You launch ready to rank for London searches, rather than paying for an SEO fix-up six months later to undo a slow template. What a build cannot do on its own is earn you links and reviews, which is what decides the most competitive London terms, so treat the launch as the starting line.' },
  { category: 'seo', question: 'Can a new website help me show up in ChatGPT and Google AI answers?',
    answer: 'Yes. We structure pages so AI engines can quote them: the answer stated up top, question-style headings, FAQ schema, and cited facts. That structure is what gets a site referenced in AI answers from ChatGPT, Gemini, and Perplexity, alongside a normal Google listing.' },
  { category: 'seo', question: 'Do you set up analytics and conversion tracking?',
    answer: 'Yes. We wire up Google Analytics and conversion tracking so you can see what the site is doing from day one. You will know which pages bring enquiries from London customers, not just how many people visited. We test it with a real submission before handover, because tracking that was never checked is the most common reason a site looks like it is failing when it is not.' },
  { category: 'seo', question: 'What are Core Web Vitals and do they matter for my London site?',
    answer: 'Core Web Vitals are three Google measures of how a page feels to use. Google Search Central sets the pass marks: Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. They affect both your rankings and how many mobile visitors stay long enough to buy. Every site we ship passes all three before handover.' },
  { category: 'seo', question: 'Will you fix the SEO on my old pages, or only the new ones?',
    answer: 'Both, when your old pages are worth keeping. Before a redesign we list every URL that currently earns traffic or links, then decide page by page whether to keep it, rewrite it, or redirect it. Pages that get folded into a better one are pointed at their replacement with a single permanent redirect, so nothing lands on a dead end and no ranking equity is thrown away.' },

  { category: 'aftercare', question: 'Who hosts the website, and can I use my own hosting?',
    answer: 'You can use your own hosting, or we can set hosting up for you in your name so the account belongs to you. We normally recommend a content delivery network so pages are served from a location near the visitor, which is what keeps load times low for a London audience. Either way the account is yours, and you can move it whenever you want.' },
  { category: 'aftercare', question: 'Do I need to buy a new domain name, or can I keep mine?',
    answer: 'Keep yours. Changing domain name throws away years of Google history and any links pointing at you, so we only suggest it when there is a real business reason such as a rebrand. We handle the technical settings that point your existing domain at the new site, and we schedule the switch so there is no visible gap for your customers.' },
  { category: 'aftercare', question: 'What happens after launch if something breaks?',
    answer: 'You tell us and we fix it. Every build comes with a support window after go-live for anything that is not working as agreed, at no extra charge. After that you can either handle changes yourself in the content management system, call us in for one-off pieces of work, or put us on a monthly retainer. There is no compulsory support contract.' },
  { category: 'aftercare', question: 'Do I need a cookie banner, and will you set one up?',
    answer: 'You need one if your site sets any cookie that is not strictly necessary, which includes most analytics and advertising tools. UK rules require you to ask permission before those cookies are set, not after. We install a consent banner that actually blocks the tags until someone agrees, rather than a decorative one that lets everything fire anyway.' },
  { category: 'aftercare', question: 'Does my website have to be accessible by law?',
    answer: 'If you are a UK public sector body, yes. GOV.UK guidance says public sector websites must meet WCAG 2.2 level AA and publish an accessibility statement, and those rules have applied since 23 September 2018. Private businesses are not covered by that specific regulation, but the Equality Act 2010 still requires reasonable adjustments, so building to the same standard is the safer route.' },
  { category: 'aftercare', question: 'Can you move my site off Wix, Squarespace, or GoDaddy?',
    answer: 'Yes, and it is one of the most common jobs we do for London businesses. We export your content, rebuild the pages properly, map every old address to its new one, and move the domain last so nothing goes dark. The usual reasons people move are page speed, being unable to change things they need to change, and not owning the site they pay for.' },
  { category: 'aftercare', question: 'Can you build the site in more than one language?',
    answer: 'Yes. Multi-language work suits London businesses selling into Europe or the Gulf. Each language gets its own address rather than a translate button, and we add the tags that tell search engines which version to show which country. Translation quality is the part to plan for: machine translation is fine for a first pass but a human should check anything that sells.' },
  { category: 'aftercare', question: 'Do you do branding and logo design as well?',
    answer: 'We do the design system: colours, type, spacing, buttons, and how it all fits together. Full brand identity work, including logo creation from scratch, is not our core job. If you need one we will say so early and either work to a brand designer you choose or point you at someone. We would rather be honest than sell you work we are not best at.' },
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
      name: 'Web Design London',
      serviceType: 'Web design',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'City', name: 'London' },
      url: CANONICAL,
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${CANONICAL}#business`,
      name: 'FactoryJet Web Design London',
      url: CANONICAL,
      areaServed: { '@type': 'City', name: 'London' },
      provider: { '@id': 'https://factoryjet.com/#organization' },
    },
    breadcrumbSchema,
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: 'Web Design London | Website Design Agency | FactoryJet',
      headline: 'Web Design in London That Turns Visitors Into Buyers',
      inLanguage: 'en-GB',
      datePublished: '2026-07-01',
      dateModified: UPDATED,
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder, FactoryJet',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      citation: SOURCES.map((s) => ({
        '@type': 'CreativeWork',
        name: s.title,
        url: s.url,
        publisher: { '@type': 'Organization', name: s.publisher },
      })),
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
  title: 'Web Design London | Website Design Agency | FactoryJet',
  description:
    'A web design agency in London. Fast, conversion-focused sites and ecommerce on Next.js, WordPress, Webflow and Shopify. You own the code.',
  alternates: {
    canonical: CANONICAL,
    languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL },
  },
  openGraph: {
    title: 'Web Design London | Website Design Agency | FactoryJet',
    description:
      'A web design company in London building fast, conversion-first websites and ecommerce stores for brands and startups. Next.js, WordPress, Webflow, Framer, Shopify. Fixed quote.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/london/web-design-og.webp', width: 1200, height: 630, alt: 'Web Design London by FactoryJet' }],
  },
  robots: { index: true, follow: true },
};

export default function LondonWebDesignPage() {
  return (
    <>
      <script id="ld-london-web-design" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-londonwd">
        <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />London Web Design Agency</span>
                  <span className="chip">Next.js &middot; Webflow &middot; Shopify</span>
                  <span className="chip">Fixed Scope</span>
                </div>
                <h1>Web Design in London That Turns Visitors Into <span className="grad-text">Buyers</span></h1>
                <p className="lead mt-6" style={{ maxWidth: 540 }}>
                  FactoryJet is a web design agency in London for brands, startups, and ecommerce businesses. We
                  design fast, conversion-focused website design on the right platform for your goals, launch it in
                  weeks, and hand you the code on day one.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 540 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ sites delivered</span></div>
                  <div className="upd">Last updated<br />{UPDATED_LABEL}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 540 }}>
                  <HeroInlineForm region="uk" source="uk_london_web_design_hero" submitLabel="Get my free quote" />
                </div>
              </div>

              {/* Proof scorecard */}
              <div className="card card-top-orange">
                <span className="eyebrow">Why London brands pick FactoryJet</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Lighthouse Score</div><div className="scorecard-note">audited before every handover</div></div>
                  <div className="scorecard-val">95+</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Core Web Vitals</div><div className="scorecard-note">LCP, CLS, INP on delivery</div></div>
                  <div className="scorecard-val" style={{ color: T.green }}>Green</div>
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
                  <div className="scorecard-val" style={{ color: T.green }}>100%</div>
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
                experience so visitors can find what they need and take action. Good website design in London pairs
                visual design with fast, mobile-first engineering and on-page SEO, so the site looks right, loads
                quickly, and gets found in both Google and AI answers like ChatGPT and Gemini.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 900 }}>
              The distinction that matters in London is between a website that was decorated and one that was
              engineered. A decorated site starts from a template and a mood board. An engineered site starts from the
              customer&apos;s decision and the numbers behind it: how fast the page loads on a phone, how clearly it
              answers the question, and how obvious the next step is. Every web design project we take on for a London
              business is engineered first, then made to look the part, in that order.
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

        {/* ═══ 3B. SCOPE: WHAT IS AND IS NOT INCLUDED ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The deliverables</span>
              <h2>Exactly what a London web design project hands over</h2>
              <p className="lead mt-4">
                Most web design quotes describe a feeling, not a list. Here is the actual list. Everything on the
                left is in every build. Everything on the right is genuinely useful work that we either do not do,
                or scope separately so you are not paying for it by accident.
              </p>
            </div>

            <div className="col-6040 mt-12">
              <div className="card">
                <h3>In every build, no exceptions</h3>
                <ul className="chk-list mt-4">
                  <li>A custom page design for each unique template, drawn for your content rather than picked from a theme library</li>
                  <li>A design system you can reuse: colour set, type scale, spacing rules, and button and form styles</li>
                  <li>Responsive layouts checked at phone, tablet, laptop, and large desktop widths</li>
                  <li>A content management system so your team can change words, images, and pages without us</li>
                  <li>Page titles, meta descriptions, heading structure, and clean web addresses on every page</li>
                  <li>Structured data (the machine-readable summary search engines and AI assistants read)</li>
                  <li>An XML sitemap and a robots file that lets the AI answer engines read your pages</li>
                  <li>Redirects mapped from every old address to its new one, one hop, never a chain</li>
                  <li>Google Analytics plus goal tracking on every form and phone tap</li>
                  <li>Image compression, modern image formats, and correct width and height on every image</li>
                  <li>The full source code pushed to a repository you own, with a written handover walkthrough</li>
                </ul>
              </div>

              <div className="card">
                <h3>Not included, and why</h3>
                <ul className="no-list mt-4">
                  <li><b>Logo and full brand identity.</b> We build the design system, not the brand mark. We will work to your brand designer.</li>
                  <li><b>Ongoing SEO campaigns.</b> The build launches SEO-ready. Ranking work over months is a separate engagement.</li>
                  <li><b>Paid ads management.</b> We wire the tracking so your ads team can measure. We do not run the accounts.</li>
                  <li><b>Product photography and video.</b> We specify what is needed and place it. Shooting it is yours or a specialist&apos;s.</li>
                  <li><b>Long-form content production at volume.</b> We write the pages in scope, not a rolling blog programme.</li>
                  <li><b>Third-party licence fees.</b> Fonts, stock imagery, and paid apps are billed to you directly at cost.</li>
                  <li><b>Legal copy.</b> Your terms, privacy notice, and any regulated wording should be checked by your own adviser.</li>
                </ul>
              </div>
            </div>

            <div className="card mt-8">
              <h3>What we need from you to start</h3>
              <p className="mt-4">
                Six things. If you only have three of them, we still start, and we help you fill the gaps as we go.
              </p>
              <ul className="chk-list mt-4 col-2" style={{ gap: '0 32px' }}>
                <li>Access to your current site and its hosting, if one exists</li>
                <li>Your logo files and brand guidelines, if you have them</li>
                <li>A rough page list, or the questions your customers keep asking</li>
                <li>One named decision maker who can sign off a design</li>
                <li>Access to your Google Analytics and Search Console accounts</li>
                <li>Any hard deadline: a trade show, a funding round, a season</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ 4. WHY LONDON IS DIFFERENT (unique local content) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Why London is different</span>
              <h2>Web design in London is not a bigger version of everywhere else</h2>
              <p className="lead mt-4">
                London is the most competitive web market in the UK, and that changes what a site has to do to win.
                Six realities shape every London build we take on, and each one pushes the work away from off-the-peg
                templates.
              </p>
            </div>
            <div className="col-2 mt-12" style={{ gap: 24 }}>
              <div className="card">
                <h3>You are competing with the whole country</h3>
                <p className="mt-4">
                  London had 1.042 million private sector businesses at the start of 2025, more than any other UK
                  region, and 1,436 businesses for every 10,000 adults, the highest density in the country
                  (<a href={SOURCES[0].url} target="_blank" rel="noopener noreferrer" className="cite">Department for Business and Trade, Business Population Estimates 2025</a>).
                  Your site is not up against the shop next door, it is up against well-funded brands and national
                  agencies. Generic template design disappears in that crowd, so distinctive, conversion-first work
                  is the entry ticket, not a luxury.
                </p>
              </div>
              <div className="card">
                <h3>London buyers judge in seconds</h3>
                <p className="mt-4">Whether the customer is a consumer or a procurement lead, expectations are high and patience is short. A dated or slow site reads as a warning sign in a city where the alternative is one search away. We build the first screen to answer the question and prove trust before anyone scrolls.</p>
              </div>
              <div className="card">
                <h3>Most of London browses on the move</h3>
                <p className="mt-4">A large share of London traffic happens on the Tube, the bus, or between meetings, often on patchy signal. A site that is slow on a mid-range phone loses London customers before it even loads. We treat the throttled-mobile connection as the real test, not the office wifi that flatters most builds.</p>
              </div>
              <div className="card">
                <h3>Your audience is global</h3>
                <p className="mt-4">London businesses sell to customers, partners, and investors abroad. The site has to make sense to someone who has never heard of your high street or your postcode, so plain clarity beats local shorthand. We write and structure pages that read cleanly to a buyer in New York or Berlin as easily as one in Shoreditch.</p>
              </div>
              <div className="card">
                <h3>Central London day rates are the UK&apos;s highest</h3>
                <p className="mt-4">We are a senior, remote team working to a fixed quote. Your budget goes into the build, not into the overhead of a Zone 1 office and a full account-management layer. That is how we deliver central-London quality without central-London rates, and why our comparison table lists a firm &quot;no&quot; against day-rate billing.</p>
              </div>
              <div className="card">
                <h3>The market rewards distinctive work</h3>
                <p className="mt-4">In a city this crowded, looking like everyone else is a strategy for being ignored. We design sites that are recognisably yours, built around your actual offer rather than a stock layout, then prove they convert with analytics after launch instead of asking you to take it on faith.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. WHAT GOOD WEB DESIGN INCLUDES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 720 }}>
              <span className="eyebrow">The standard</span>
              <h2>What good web design includes in 2026</h2>
              <p className="lead mt-4">
                A modern London website is judged on more than how it looks. These are the parts that decide whether a
                site ranks, loads, and turns visitors into customers. Every FactoryJet build covers all eight, so
                professional web design and the technical groundwork arrive as one job rather than two invoices.
              </p>
              <ol className="num-list mt-6">
                <li>Conversion-first structure</li>
                <li>Responsive, mobile-first design</li>
                <li>Speed and Core Web Vitals</li>
                <li>On-page SEO and schema</li>
                <li>Accessibility</li>
                <li>A content management system</li>
                <li>Analytics and conversion tracking</li>
                <li>Ownership and maintainability</li>
              </ol>
            </div>
            <div className="col-2 mt-12" style={{ gap: 24 }}>
              <div className="card">
                <h3>Conversion-first structure</h3>
                <p className="mt-4">Layout, hierarchy, and calls to action arranged around the one decision your visitor is trying to make. A clear next step on every page, trust signals placed where doubt appears, and no dead ends where a warm London lead can quietly leave.</p>
              </div>
              <div className="card">
                <h3>Responsive, mobile-first design</h3>
                <p className="mt-4">Most London web traffic is on a phone, so we design for the small screen first. Responsive web design means the site reflows cleanly from mobile to desktop, with tap targets, type, and images sized for real thumbs on a moving train.</p>
              </div>
              <div className="card">
                <h3>Speed and Core Web Vitals</h3>
                <p className="mt-4">Loading speed is a ranking factor and a conversion factor. We build for green Core Web Vitals (LCP, CLS, and INP) and audit them in Lighthouse before handover, so the site is fast on a mid-range phone with London signal, not just on office broadband.</p>
              </div>
              <div className="card">
                <h3>On-page SEO and schema</h3>
                <p className="mt-4">Title tags, meta descriptions, heading structure, clean URLs, internal links, and structured data are built in from the start. Professional web design and SEO are the same job here, so you launch ready to rank for London searches rather than fixing a slow template later.</p>
              </div>
              <div className="card">
                <h3>Accessibility</h3>
                <p className="mt-4">We build to WCAG guidance: proper contrast, keyboard navigation, alt text, and semantic markup. An accessible site reaches more customers, matters for public-sector and charity work around Westminster, and reads more clearly to search engines and AI crawlers.</p>
              </div>
              <div className="card">
                <h3>A content management system</h3>
                <p className="mt-4">You should be able to change your own text, images, and pages without a developer on call. Every build ships with a CMS matched to your platform and a short handover, so your team is confident from day one instead of dependent on us for every edit.</p>
              </div>
              <div className="card">
                <h3>Analytics and conversion tracking</h3>
                <p className="mt-4">A website you cannot measure is a guess. We wire up Google Analytics and conversion tracking so you can see which pages bring enquiries from London customers and where visitors drop off, then improve from evidence.</p>
              </div>
              <div className="card">
                <h3>Ownership and maintainability</h3>
                <p className="mt-4">Clean, documented code pushed to your GitHub, built so any competent developer can pick it up later. You are never locked into one London agency to keep your own website running, which protects you if your needs or team change.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5B. PRE-LAUNCH CHECKLIST (citable technical detail) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 800 }}>
              <span className="eyebrow">Before we hand it over</span>
              <h2>The checklist every London build has to pass</h2>
              <p className="lead mt-4">
                Nothing goes live until it clears this list. The numbers are not ours: they are the published pass
                marks from Google and the W3C, the body that writes the web accessibility standard. We run the list
                on a throttled mobile connection, because that is closer to a Northern line platform than office
                broadband is.
              </p>
            </div>

            <div className="col-2 mt-12" style={{ gap: 24 }}>
              <div className="card">
                <h3>Speed and Core Web Vitals</h3>
                <p className="mt-4">
                  Google Search Central publishes three pass marks, and we test against all three
                  (<a href={SOURCES[1].url} target="_blank" rel="noopener noreferrer" className="cite">Google Search Central, Core Web Vitals</a>):
                </p>
                <ul className="chk-list mt-4">
                  <li>Largest Contentful Paint under 2.5 seconds. This is how long the biggest thing on screen takes to appear</li>
                  <li>Interaction to Next Paint under 200 milliseconds. This is how fast the page reacts when someone taps</li>
                  <li>Cumulative Layout Shift under 0.1. This is how much the page jumps about while it loads</li>
                  <li>Every image compressed, served in a modern format, and given a fixed width and height so nothing jumps</li>
                  <li>Fonts loaded so text is readable straight away instead of flashing in late</li>
                  <li>No third-party script allowed to block the first screen from rendering</li>
                </ul>
              </div>

              <div className="card">
                <h3>Accessibility</h3>
                <p className="mt-4">
                  We build to WCAG 2.2, the W3C standard
                  (<a href={SOURCES[2].url} target="_blank" rel="noopener noreferrer" className="cite">W3C, WCAG 2.2</a>).
                  UK public sector bodies are legally required to meet level AA and publish an accessibility statement
                  (<a href={SOURCES[3].url} target="_blank" rel="noopener noreferrer" className="cite">GOV.UK guidance</a>),
                  which matters for the Westminster and charity work we do:
                </p>
                <ul className="chk-list mt-4">
                  <li>Normal text at a contrast ratio of at least 4.5 to 1 against its background</li>
                  <li>Large text at a contrast ratio of at least 3 to 1</li>
                  <li>Tap targets at least 24 by 24 CSS pixels, so thumbs hit the right thing</li>
                  <li>Every function reachable by keyboard alone, with a focus outline you can actually see</li>
                  <li>Alt text on every image that carries meaning, and none on images that are pure decoration</li>
                  <li>Headings in real order, so a screen reader can skim the page the way a sighted reader does</li>
                </ul>
              </div>

              <div className="card">
                <h3>Search and AI readability</h3>
                <ul className="chk-list mt-4">
                  <li>One page title and one meta description per page, written for a human, not stuffed with keywords</li>
                  <li>Exactly one main heading per page, then a clean descent through the sub-headings</li>
                  <li>Structured data that matches what is actually visible on the page, never a second hidden version</li>
                  <li>A canonical address on every page so near-duplicate versions do not compete with each other</li>
                  <li>Old addresses mapped to new ones with a single permanent redirect, never a chain of hops</li>
                  <li>A robots file that names the AI retrieval crawlers and lets them in</li>
                  <li>Answer-first opening paragraphs, so a quoting engine can lift a clean sentence</li>
                </ul>
              </div>

              <div className="card">
                <h3>Handover and safety</h3>
                <ul className="chk-list mt-4">
                  <li>Full source code in a repository owned by your account, not ours</li>
                  <li>Content management logins issued to named people on your side</li>
                  <li>Analytics and goal tracking firing, checked with a real test submission</li>
                  <li>Forms tested end to end, including where the enquiry actually lands</li>
                  <li>A cookie consent banner that blocks non-essential tags until someone agrees</li>
                  <li>An automated backup, and a written note on how to restore from it</li>
                  <li>A recorded walkthrough so a new starter can pick it up in a year</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. LONDON, AREA BY AREA (flagship unique local content) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">London, area by area</span>
              <h2>Different parts of London need different websites</h2>
              <p className="lead mt-4">
                The right site for a Shoreditch startup is the wrong site for a City law firm. Here is how we think
                about the areas we design for, and what each one actually needs from its website design.
              </p>
            </div>

            <figure className="fig mt-8">
              <img
                src="/images/uk/london/web-design-og.webp"
                alt="A tablet showing a website design on a long table in a converted East London brick warehouse office"
                width={1200}
                height={630}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                The same site has to work on a warehouse desk in Hackney and on a phone at Bank station. We test
                both before anything ships.
              </figcaption>
            </figure>
            <div className="col-2 mt-12" style={{ gap: 24 }}>
              <div className="card">
                <h3>Shoreditch &amp; Old Street</h3>
                <p className="mt-4">London&apos;s tech cluster, nicknamed Silicon Roundabout, is home to startups, fintech, and SaaS companies. They need fast, investor-ready sites built on Next.js, with a clear product story and metrics that hold up to a due-diligence read.</p>
              </div>
              <div className="card">
                <h3>City of London (EC postcodes)</h3>
                <p className="mt-4">Finance, law, and insurance firms sell trust before anything else, so the work is conservative and trust-first. We build credible, compliance-aware business website design where accuracy and reassurance matter more than novelty for its own sake.</p>
              </div>
              <div className="card">
                <h3>Canary Wharf</h3>
                <p className="mt-4">Banking and corporate clients need enterprise-grade sites with accessibility built in from the start. There are usually multiple stakeholders to satisfy, and content has to survive legal and brand review before it ships.</p>
              </div>
              <div className="card">
                <h3>Soho &amp; Fitzrovia</h3>
                <p className="mt-4">Media, advertising, film, and creative studios expect visually ambitious, portfolio-led web design. The site has to impress a room full of art directors and still load fast, so craft and performance both have to be right.</p>
              </div>
              <div className="card">
                <h3>Camden &amp; Hackney</h3>
                <p className="mt-4">Independent retail, hospitality, and DTC brands live and die by identity, so we build brand-led ecommerce website design that converts on mobile. The site has to carry a strong, distinctive look while still selling cleanly at the checkout.</p>
              </div>
              <div className="card">
                <h3>Mayfair &amp; Knightsbridge</h3>
                <p className="mt-4">Luxury, art, and prime property call for premium, minimal, high-craft sites where restraint is the point. Every detail signals quality, so the design does more with less and never feels busy or cheap.</p>
              </div>
              <div className="card">
                <h3>Westminster &amp; Victoria</h3>
                <p className="mt-4">Government, charities, associations, and membership bodies serve a wide public audience, so accessible, content-heavy sites are the norm. We meet WCAG standards and structure large amounts of information so any visitor can find what they came for.</p>
              </div>
              <div className="card">
                <h3>Greater London</h3>
                <p className="mt-4">From Croydon to Richmond, local service businesses need small business web design London that is found by their own neighbourhood first, then the wider city. We build affordable, fast sites tuned for local search and phone enquiries.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. WHAT YOU GET ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What you get</span>
                <h2>A London web design company that builds to sell</h2>
                <div className="stack mt-6">
                  <p>
                    London is one of the most competitive markets in the world, so a template site does not cut it
                    here. Our web design services start somewhere else: with how your customers actually decide to
                    buy. We map that decision, then build responsive web design around it. The result is professional
                    web design that a time-poor London visitor can read in three seconds and act on, from a team that
                    has shipped more than 500 sites.
                  </p>
                  <p>
                    Speed is not a nice-to-have in a city where so much browsing happens on a phone between meetings.
                    Google&apos;s own pass mark is that the biggest thing on screen should appear within 2.5 seconds,
                    and that the page should react to a tap within 200 milliseconds. Miss those and you are losing
                    people before they ever see your offer. We build mobile-first and treat load time as a design
                    constraint, not an afterthought.
                  </p>
                  <p>
                    Whether you are a small business web design London client on a first site or an established brand
                    planning a website redesign, the standard is the same: custom design, fast code, on-page SEO, and
                    full ownership at the end.
                  </p>
                </div>
                <div className="col-2 mt-8">
                  <div className="card">
                    <div className="stat-num">2.3&times;</div>
                    <p className="mb-2" style={{ color: T.ink, fontWeight: 600, marginTop: 8 }}>Mobile add-to-cart lift</p>
                    <p style={{ fontSize: 13 }}>vs. a generic theme, averaged across our ecommerce builds.</p>
                  </div>
                  <div className="card">
                    <div className="stat-num">&lt;1.5s</div>
                    <p className="mb-2" style={{ color: T.ink, fontWeight: 600, marginTop: 8 }}>Typical mobile load</p>
                    <p style={{ fontSize: 13 }}>on delivery, measured in Lighthouse before handover.</p>
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <div style={{ background: T.dark, color: '#fff', borderRadius: 12, padding: '16px 18px', fontFamily: T.fd, fontWeight: 700 }}>
                  Every build includes
                </div>
                <ul className="tick-list">
                  {[
                    'Custom website design, no recycled templates',
                    'Mobile-first, 90+ Lighthouse score',
                    'On-page SEO and schema baked in',
                    'A CMS so you can edit it yourself',
                    'Full code ownership on your GitHub',
                  ].map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7B. MID-PAGE CTA ═══ */}
        <MidPageCTA
          headline="Have your London site checked against this list"
          sub="Send us the address and we will run your current site through the same pre-launch checklist above, then send back what passes, what fails, and which failures are actually costing you enquiries."
          label="Get a free site review"
          note="Bhavesh reads every one. You get a written reply within one business day."
        />

        {/* ═══ 8. PLATFORMS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
              <span className="eyebrow">Platforms we design on</span>
              <h2>We pick the platform to fit your goals, not the other way round</h2>
              <p className="lead mt-4">
                WordPress, Next.js, Webflow, Framer, Shopify, or a fully custom build. Here is when each one is the
                right call for your London project.
              </p>
            </div>
            <div className="col-3 mt-12">
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">WordPress</span><span className="plat-pill">CMS</span></div>
                <p>The most-used content management system in the world. Strong for content-heavy sites and teams who want to edit everything themselves.</p>
                <p className="plat-best"><b>Best for:</b> blogs, content sites, wordpress web design London with in-house editors.</p>
              </div>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">Next.js</span><span className="plat-pill">CUSTOM</span></div>
                <p>Our default for speed. React-based, headless-ready, and built for the best Core Web Vitals scores on mobile.</p>
                <p className="plat-best"><b>Best for:</b> fast marketing sites, web development London projects, web apps.</p>
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
                <p className="plat-best"><b>Best for:</b> ecommerce website design London, shopify web design London.</p>
              </div>
              <div className="plat-card">
                <div className="plat-top"><span className="plat-name">Custom</span><span className="plat-pill">BESPOKE</span></div>
                <p>When your requirements do not fit a template: portals, dashboards, integrations, and unusual flows.</p>
                <p className="plat-best"><b>Best for:</b> web apps and bespoke tools.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 8B. HOW TO CHOOSE BETWEEN THEM ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="card" style={{ maxWidth: 900 }}>
              <h3>How to pick, in one pass</h3>
              <p className="mt-4">
                Read down until a line describes you. That is usually the right platform, and we will tell you on
                the call if it is not.
              </p>
              <ul className="arrow-list mt-4">
                <li><b>You sell products online.</b> Shopify, unless you have unusual stock, pricing, or trade account rules, in which case a custom build</li>
                <li><b>You publish something new most weeks.</b> WordPress, because your editors already know it and the cost of training is nil</li>
                <li><b>Your marketing team changes the site constantly and has no developer.</b> Webflow</li>
                <li><b>You need to be live in days for a launch or a raise.</b> Framer</li>
                <li><b>Speed on mobile is the thing that decides whether you win.</b> Next.js</li>
                <li><b>People log in and do work inside your product.</b> A custom build, because no page builder survives real application logic</li>
              </ul>
              <p className="mt-6" style={{ fontSize: 14 }}>
                Two honest warnings. First, moving between these later is real work, so pick for where you will be
                in three years, not where you are this month. Second, the platform matters far less than whether the
                pages are fast and say the right thing. A well-built WordPress site beats a badly built Next.js one
                every time.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 9. COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">How we compare</span>
            <h2 style={{ maxWidth: 640 }}>FactoryJet vs. a template builder vs. a typical London agency</h2>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>DIY / template builder</th>
                    <th>Typical London agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Custom, conversion-first design</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Template only</span></td><td><span className="partial">Sometimes</span></td></tr>
                  <tr><td className="feat">Mobile Lighthouse 90+ on delivery</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Rarely</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">You own 100% of the code</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Rented platform</span></td><td><span className="partial">Often locked</span></td></tr>
                  <tr><td className="feat">On-page SEO and schema included</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Add-on</span></td><td><span className="partial">Extra cost</span></td></tr>
                  <tr><td className="feat">Delivery time</td><td className="fj"><span className="yes">4 weeks, 7-day express</span></td><td>Weeks of your own time</td><td>8 to 12 weeks typical</td></tr>
                  <tr><td className="feat">Central London day rates</td><td className="fj"><span className="yes">No, fixed quote</span></td><td>N/A</td><td><span className="partial">Often high overhead</span></td></tr>
                  <tr><td className="feat">Who does the work</td><td className="fj"><span className="yes">Senior engineers</span></td><td>You</td><td><span className="partial">Often juniors</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 10. PROCESS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">How it works</span>
              <h2>From brief to live in four stages</h2>
            </div>
            <div className="process-grid mt-12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
              <div className="card">
                <span className="stage-num">01</span><h3>Discovery</h3>
                <p className="mt-4">Roughly week one. We map your London customers, goals, and the pages that must earn their trust before anyone opens a design tool.</p>
                <ul className="chk-list mt-4">
                  <li>A kick-off call, then a written brief you sign off</li>
                  <li>A crawl of your current site, if there is one</li>
                  <li>A look at the five competitors you actually lose to</li>
                  <li>An agreed page list and a single success measure</li>
                </ul>
              </div>
              <div className="card">
                <span className="stage-num">02</span><h3>Design</h3>
                <p className="mt-4">Roughly week two. Custom, conversion-first web design, reviewed with you before a single line of code is written.</p>
                <ul className="chk-list mt-4">
                  <li>The home page and one inner page drawn first, for direction</li>
                  <li>Mobile drawn alongside desktop, never bolted on afterwards</li>
                  <li>Two rounds of changes built into the schedule</li>
                  <li>Colour and type contrast checked at the design stage</li>
                </ul>
              </div>
              <div className="card">
                <span className="stage-num">03</span><h3>Build</h3>
                <p className="mt-4">Roughly weeks three and four. Engineered on your chosen platform: fast, responsive, SEO-ready, and accessible on a London phone.</p>
                <ul className="chk-list mt-4">
                  <li>A staging address you can watch as it comes together</li>
                  <li>Content loaded and the CMS wired to it</li>
                  <li>Speed and accessibility tested as we go, not at the end</li>
                  <li>Forms, tracking, and integrations connected and tested</li>
                </ul>
              </div>
              <div className="card">
                <span className="stage-num">04</span><h3>Launch</h3>
                <p className="mt-4">End of week four. We ship, hand over the code to your GitHub, and stay on for support afterwards.</p>
                <ul className="chk-list mt-4">
                  <li>Redirects checked one by one before the switch</li>
                  <li>Sitemap submitted and the new pages requested for indexing</li>
                  <li>Code, logins, and a recorded walkthrough handed over</li>
                  <li>A support window after go-live at no extra charge</li>
                </ul>
              </div>
            </div>

            <p className="lead mt-8" style={{ maxWidth: 820 }}>
              Four weeks is the standard shape for a marketing site. An express build of up to five pages can be
              done in seven days. Ecommerce and web applications are scoped on their own, because pretending a
              200-product store fits a four-week template is how projects go wrong. The single biggest cause of
              delay is not engineering, it is waiting for content and sign-off, which is why we ask for a named
              decision maker up front.
            </p>
          </div>
        </section>

        {/* ═══ 11. LONDON MARKET + DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <span className="eyebrow">The London web design market</span>
            <h2 style={{ maxWidth: 760 }}>Thousands of London businesses search for web design every month</h2>
            <div className="col-6040 mt-8">
              <div>
                <div className="stack">
                  <p>
                    The terms &quot;web design london&quot; and &quot;website design london&quot; each draw around 4,400 UK searches a
                    month, and &quot;web design agency london&quot; another 2,400. These are London buyers looking for a
                    website design company right now, not people browsing for ideas. Whether they type &quot;web design
                    company london&quot;, &quot;website design company london&quot;, or just &quot;web designer london&quot;, most of them
                    land on slow, templated sites that were never built to convert. We build the fast, conversion-first
                    alternative.
                  </p>
                  <p>
                    Demand is spread right across the capital, so we serve web design agencies london clients from
                    Shoreditch and the City through to Canary Wharf, Soho, Camden, and the outer boroughs. People
                    search in every phrasing, from &quot;website design agency london&quot; to &quot;freelance web designer london&quot;,
                    and land on the same slow templates. The work is handled remotely with regular video reviews, which
                    means a business anywhere in London gets the same senior team without paying for a Zone 1 office.
                  </p>
                  <p>
                    Search behaviour is also shifting. A growing share of London buyers now ask an AI assistant like
                    ChatGPT, Gemini, or Perplexity before they ever open Google, and those tools quote the sites that
                    answer clearly and load fast. We build every page to be readable by both, so your website design
                    earns visibility across search engines and AI answers rather than betting on one channel.
                  </p>
                </div>
                <div className="flex-wrap mt-6">
                  <span className="city-pill">Shoreditch</span>
                  <span className="city-pill">City of London</span>
                  <span className="city-pill">Canary Wharf</span>
                  <span className="city-pill">Soho</span>
                  <span className="city-pill">Camden</span>
                  <span className="city-pill">Islington</span>
                  <span className="city-pill">Hackney</span>
                  <span className="city-pill">Westminster</span>
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid `, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>London &middot; Monthly Search Demand</span>
                  <span style={{ background: T.orange, color: '#fff', fontFamily: T.fm, fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  {[
                    { kw: 'web design london', v: '4,400', w: '100%', kd: 'KD 48 · Winnable with speed' },
                    { kw: 'website design london', v: '4,400', w: '100%', kd: 'KD 77 · Competitive' },
                    { kw: 'web development in london', v: '4,400', w: '100%', kd: 'KD 28 · Quick win' },
                    { kw: 'web design agency london', v: '2,400', w: '54%', kd: 'KD 68 · Core commercial term' },
                    { kw: 'london web designer', v: '880', w: '20%', kd: 'KD 48 · Freelance-intent' },
                  ].map((r) => (
                    <div key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: T.n400 }}> searches</span></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </div>
                  ))}
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Source: DataForSEO, London / United Kingdom, July 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. WHAT DRIVES WEB DESIGN COST ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Web design cost</span>
                <h2>What drives the cost of web design in London</h2>
                <div className="stack mt-6">
                  <p>
                    The cost of web design in London is driven by scope, not by an agency&apos;s postcode. Four things
                    move the price: the number of pages and templates, whether it is a marketing site or ecommerce
                    website design, the integrations you need, and how much custom design and copywriting is involved.
                  </p>
                  <p>
                    A five-page site for a small business is a different job from a 200-product store with payments,
                    stock, and a customer login. Integrations add work too: connecting a CRM, a booking system, or an
                    inventory feed takes engineering time that a template cannot cover. Custom design and written copy
                    move the number as well, because bespoke work is not a theme you switch on.
                  </p>
                  <p>
                    We do not publish a fixed price, because a fixed price for &quot;a website&quot; is either padded to cover
                    the worst case or too thin to deliver the real one. Instead you get a fixed quote after a short
                    call, once we know the scope. We do not charge central London day rates, we offer affordable web
                    design London routes for startups, and we agree the scope up front so there are no change-order
                    surprises halfway through. If you have been comparing a cheap website design London quote against a
                    full custom build, we will be straight about which one fits your goal.
                  </p>
                </div>
                <h3 className="mt-8">The things that actually move the number</h3>
                <ul className="arrow-list mt-4">
                  <li><b>Unique page templates, not page count.</b> Fifty products on one template is cheaper than five pages that all look different</li>
                  <li><b>Taking payments.</b> A checkout brings stock, tax, delivery rules, and refunds with it</li>
                  <li><b>Systems that have to talk to each other.</b> A CRM, a booking tool, or a stock feed each add engineering time</li>
                  <li><b>Who writes the words.</b> Handing us finished copy is the single easiest way to keep scope tight</li>
                  <li><b>Who supplies the pictures.</b> Sourcing, licensing, and editing imagery is real work if it falls to us</li>
                  <li><b>Accounts and logins.</b> Anything a customer signs into moves the job from a website to an application</li>
                  <li><b>More than one language.</b> Each language multiplies pages, testing, and review</li>
                  <li><b>How fast you need it.</b> Compressing four weeks into one means more people on it at once</li>
                </ul>
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
                <div className="scorecard-row"><div className="scorecard-metric">No central London day rates</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Fixed</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Fixed quote before you commit</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Always</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12B. WHO THIS SUITS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Fit</span>
              <h2>Who this is for, and who it is not</h2>
              <p className="lead mt-4">
                We would rather turn work down early than take it and disappoint someone. Read both lists before
                you get in touch.
              </p>
            </div>
            <div className="col-6040 mt-12">
              <div className="card">
                <h3>A good fit</h3>
                <ul className="chk-list mt-4">
                  <li>London businesses whose current site is slow, dated, or was never built to bring in enquiries</li>
                  <li>Startups and scale-ups who need a site an investor or a buyer will take seriously</li>
                  <li>DTC and B2B brands selling online who are losing people on mobile at the checkout</li>
                  <li>Firms in the City, Canary Wharf, or Westminster where trust, accuracy, and accessibility are non-negotiable</li>
                  <li>Anyone stuck on a rented platform who wants to own their own website outright</li>
                  <li>Teams with someone who can make a decision and stick to it</li>
                </ul>
              </div>
              <div className="card">
                <h3>Probably not a fit</h3>
                <ul className="no-list mt-4">
                  <li>You want the cheapest possible site. A template builder will genuinely serve you better</li>
                  <li>You want an agency to sit in your office in Zone 1 every week. We work remotely by design</li>
                  <li>You want a full brand identity built from nothing. That is a brand designer&apos;s job, not ours</li>
                  <li>You need ongoing monthly SEO more than you need a new site. Fix the ranking work first</li>
                  <li>Nobody on your side can free up a few hours a week for reviews and content</li>
                  <li>You want us to guarantee a search position. Nobody honest can promise that</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12C. WHO WROTE THIS ═══ */}
        <section className="sec">
          <div className="wrap">
            <AuthorCard variant="light" />
          </div>
        </section>

        {/* ═══ 13. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg dot-grid" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>London web design questions we get asked</h2>
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

        {/* ═══ 13B. SOURCES ═══ */}
        <section className="sec" id="sources">
          <div className="wrap">
            <div className="card" style={{ maxWidth: 900 }}>
              <span className="eyebrow">Sources</span>
              <h3>Where the numbers on this page come from</h3>
              <p className="mt-4">
                Every figure quoted above is from a named public source, linked below. We checked each link on
                {' '}{UPDATED_LABEL}.
              </p>
              <ol className="src-list mt-6">
                {SOURCES.map((s) => (
                  <li key={s.id}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="cite">{s.title}</a>
                    <span className="src-pub">{s.publisher}</span>
                    <span className="src-used">{s.used}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6" style={{ fontSize: 13 }}>
                Search demand figures shown earlier are from DataForSEO for London and the United Kingdom, and are
                estimates rather than counts. Delivery timings and Lighthouse scores describe our own completed
                projects.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 13C. OTHER UK CITIES AND SERVICES ═══ */}
        <CityLinksUK currentCity="london" currentService="web-design" />

        {/* ═══ 14. FINAL CTA ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Let us build a London website that sells</h2>
            <p className="mt-4">
              Tell us what you are working on. You will hear back from the founder within 24 hours with honest,
              specific next steps. No spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Get my free quote" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/web-design" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See our UK web design service</a>
            </div>
          </div>
        </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
