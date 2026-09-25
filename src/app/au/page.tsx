import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { auHubAlternates } from '@/data/hreflangMap';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import './au-service.css';

/* ─────────────────────────────────────────────────────────────────────────────
   /au: FactoryJet Australia hub. Rebuilt 2026-09-25 (replaces the June 2026
   "Arch" web-design home, which ranked for nothing meaningful per GSC).

   Hub-of-hubs: the four service hubs of the main site (E-Commerce, AI Agent
   Development, Website Design & Development, AI Search & SEO), each a rich
   section linking to its AU detail pages. Web design has no AU detail page,
   so it is covered in depth here and links /services/web-design.

   Research: pipeline/research/data/market-au-2026-09-24/brief_au_hub_web_design.json
   + analysis.json (PAA bank, question terms). Template: src/app/uk/ai-consulting.
   Rules: no prices in any currency, no em dashes, Australian spelling,
   Organization referenced by @id only (never defined here).
───────────────────────────────────────────────────────────────────────────── */

const CANONICAL = 'https://factoryjet.com/au';
const UPDATED = '2026-09-25';
const TITLE = 'Ecommerce, AI Agents & Web Design Australia | FactoryJet';
const DESCRIPTION =
  'Web design Australia, ecommerce stores and AI agents from one senior team. Founded 2014, 500+ businesses served, 7-day websites. You own what we build.';
const H1 = 'Ecommerce, AI Agents and Web Design for Australian Businesses, Built by One Team';
const ORG_ID = 'https://factoryjet.com/#organization';

/* Design tokens, copied by value from ./au-service.css. */
const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#FF5C00',
  green: '#047857',
  small: '#B23E13',
  fm: "'Geist Mono',monospace",
  fd: "'Plus Jakarta Sans',sans-serif",
};

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: CANONICAL },
];

/* ─── External sources, each fetch-verified 2026-09-25 (HTTP 200, claim
       confirmed in the fetched body) ──────────────────────────────────── */
// OAIC APP quick reference: 13 APPs; APP 8 cross-border disclosure ("steps an
// APP entity must take to protect personal information before it is disclosed
// overseas"); APP 11 security of personal information. fetch-verified 2026-09-25
const SRC_APP =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-quick-reference';
// OAIC AI guidance: "as a matter of best practice, the OAIC recommends that
// organisations do not enter personal information, and particularly sensitive
// information, into publicly available generative AI tools". fetch-verified 2026-09-25
const SRC_OAIC_AI =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products';
// W3C WAI: content that conforms to WCAG 2.2 also conforms to WCAG 2.1 and
// 2.0 (backwards compatible). fetch-verified 2026-09-25
const SRC_WCAG = 'https://www.w3.org/WAI/standards-guidelines/wcag/';

/* ─── AU service pages: ONE array drives the hub cards, every hub section's
       link list AND the ItemList JSON-LD. ─────────────────────────────── */
type HubKey = 'ecommerce' | 'ai' | 'search';
const AU_PAGES: { hub: HubKey; href: string; name: string; anchor: string; what: string }[] = [
  { hub: 'ecommerce', href: '/au/ecommerce-development', name: 'Ecommerce Development Australia', anchor: 'Ecommerce development for Australian brands',
    what: 'A new or rebuilt online store, B2B ordering portal or replatform, set up for GST, AUD, Afterpay and Zip, Australian shipping, and Xero or MYOB.' },
  { hub: 'ecommerce', href: '/au/shopify-development', name: 'Shopify Development Australia', anchor: 'Shopify developers and Shopify experts in Australia',
    what: 'Custom Shopify and Shopify Plus stores, theme builds, app setup, migrations to Shopify, and ongoing store support from senior developers.' },
  { hub: 'ai', href: '/au/ai-agents', name: 'AI Agents and AI Automation Australia', anchor: 'AI automation agency and AI agent development',
    what: 'AI agents that answer enquiries, process orders, chase quotes and update your systems, designed around your rules and owned by you.' },
  { hub: 'ai', href: '/au/ai-development', name: 'AI Development Australia', anchor: 'Custom AI development and AI integration',
    what: 'AI built into the software you already run: CRM, ERP, helpdesk, ecommerce and internal tools, with testing, monitoring and handover.' },
  { hub: 'ai', href: '/au/ai-consulting', name: 'AI Consulting Australia', anchor: 'AI consulting and AI readiness assessments',
    what: 'A plain-English AI readiness assessment, the two or three use cases worth doing first, a build or buy decision, and a privacy check.' },
  { hub: 'ai', href: '/au/ai-receptionist', name: 'AI Receptionist Australia', anchor: 'AI receptionist and AI phone answering for small business',
    what: 'An AI receptionist that answers calls and messages, books appointments, qualifies leads and hands tricky calls to a person.' },
  { hub: 'search', href: '/au/seo', name: 'SEO Services Australia', anchor: 'SEO services for Australian businesses',
    what: 'Technical SEO, local SEO and Google Business Profile, content that answers buyer questions, and monthly reporting in plain English.' },
  { hub: 'search', href: '/au/ai-seo', name: 'AI SEO Australia', anchor: 'AI SEO and generative engine optimisation (GEO)',
    what: 'An AI visibility audit across ChatGPT, Perplexity, Gemini and Google AI Overviews, then the fixes that get your business named and cited.' },
];
const pagesFor = (h: HubKey) => AU_PAGES.filter((p) => p.hub === h);

/* City pages that exist today. Sydney, Perth and the Gold Coast are served
   remotely and deliberately have no page (see AU market research). */
const AU_CITIES = [
  { href: '/au/melbourne', name: 'Melbourne', note: 'Web design, ecommerce and SEO for Melbourne retail, hospitality and professional services.' },
  { href: '/au/brisbane', name: 'Brisbane', note: 'Websites, online stores and search for Brisbane and South East Queensland businesses.' },
  { href: '/au/adelaide', name: 'Adelaide', note: 'Website development and SEO for growing Adelaide and South Australian businesses.' },
  { href: '/au/canberra', name: 'Canberra', note: 'Websites and search for Canberra businesses, consultancies and service firms.' },
];

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'about', label: 'Working with FactoryJet' },
  { key: 'web', label: 'Web design & website cost' },
  { key: 'ecommerce', label: 'Ecommerce & Shopify' },
  { key: 'ai', label: 'AI agents & AI consulting' },
  { key: 'search', label: 'SEO & AI search' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Working with FactoryJet ──
  { category: 'about', question: 'Is FactoryJet an Australian company?',
    answer: 'FactoryJet is a services company founded in 2014, and we work with businesses in Australia, the US and the UK. For Australian clients everything runs remotely: calls are booked in your time zone, work is shared in writing, and the founder, Bhavesh Barot, stays involved from the first call to launch and beyond.' },
  { category: 'about', question: 'Do you work with businesses anywhere in Australia?',
    answer: 'Yes. We work with businesses in every state and territory, from Sydney, Melbourne and Brisbane to Perth, Adelaide, Hobart, Darwin and regional towns. Calls are scheduled in your hours, whether you run on AEST, ACST or AWST. None of our services needs anyone on-site, so a business in Toowoomba gets the same senior team as one in the Sydney CBD.' },
  { category: 'about', question: 'Who will I actually deal with?',
    answer: 'The founder, Bhavesh Barot, and the senior engineers who build your project. There is no account manager passing messages back and forth, and your work is not handed to a junior team after you sign. The people you meet on the first call are the people who design, build and support what you buy.' },
  { category: 'about', question: 'Do I own the website, store or AI agent you build?',
    answer: 'Yes. You own the code, the design, the content, the integrations, the prompts and the documentation from the day it launches. There is no proprietary platform holding your site hostage and no exit fee. If you ever move to another provider or bring the work in-house, you take everything with you and it keeps running.' },
  { category: 'about', question: 'What happens after launch?',
    answer: 'We stay. Every launch includes a handover session, analytics already wired in and a period of fixes. After that you choose: run it yourself, or keep us on month-to-month for updates, improvements, SEO and AI tuning. The enemy we are built against is the agency that disappears the week after go-live. We would rather earn the next job.' },
  { category: 'about', question: 'How do we get started?',
    answer: 'Send your name and work email through any form on this page. The founder replies within one business day to book a short call in your time zone. On that call we talk about what you sell, what is not working today, and which of our four services fits. You get a fixed quote for your scope before you commit to anything.' },

  // ── Web design & website cost ──
  { category: 'web', question: 'What does a web designer do?',
    answer: 'A web designer plans how a website looks and works: the page layout, the colours and type, how visitors move from page to page, and where they are asked to call, book or buy. A web developer then turns that design into working code. At FactoryJet the same senior team does both, so nothing gets lost between the design file and the live site.' },
  { category: 'web', question: 'Is web design still worth it in 2026?',
    answer: 'Yes, because your website is still where buyers check you out before they call. What has changed is where they arrive from: Google, Maps, and now AI assistants like ChatGPT that summarise your site. A clear, fast, well-structured site gets read correctly by all of them. A slow template site with thin pages gets skipped, however nice it looks.' },
  { category: 'web', question: 'Can ChatGPT design a website?',
    answer: 'ChatGPT and AI website builders can produce a rough page or a starting layout, and that is fine for a hobby site. What they do not do well is decide what your business should say, structure pages so Google and AI assistants understand them, connect booking, payments or your CRM, and keep it all working. We use AI tools inside our process, with senior people making the decisions.' },
  { category: 'web', question: 'Can you really build a website in 7 days?',
    answer: 'Yes, for websites of up to 5 pages, 7 days is our standard delivery timeline. It works because scope is fixed before we start, you approve the homepage design early, and senior engineers build from day one. The 7 days count working days where we have what we need from you. Larger sites, online stores and web apps get their own fixed timeline up front.' },
  { category: 'web', question: 'How much does a website cost in Australia?',
    answer: 'It depends on scope, not on a rate card. The biggest cost drivers are the number of unique page designs, who writes the copy, whether you need online payments or bookings, how many systems must connect, and how much content has to move from an old site. We give you a fixed quote for your scope after one short call, so there are no hourly bills.' },
  { category: 'web', question: 'What is the average cost of a 5 page website?',
    answer: 'A 5 page website is the most common small business build, but prices vary a lot because the scope behind those 5 pages varies. Custom design versus a template, copywriting, photography, a booking or quote form, and SEO setup all move the number. Compare quotes on what is included, not on page count. Our 7-day delivery covers sites of up to 5 pages with a fixed quote.' },
  { category: 'web', question: 'How much should I pay a web designer?',
    answer: 'Pay for outcomes you can check, not hours. Ask every web designer what is included: custom design or a template, copywriting, mobile testing, speed, SEO setup, analytics, and support after launch. A low quote that leaves out copy, SEO and support often costs more by the end of the first year. We quote a fixed price per stage, so you know the full figure before you start.' },
  { category: 'web', question: 'Is WordPress outdated in 2026?',
    answer: 'No. WordPress still runs a large share of the web and is a sound choice when your team wants to edit lots of content themselves. People move away from it when a site is overloaded with plugins, slow, or hard to keep secure. We build WordPress websites when they fit, and custom Next.js sites when speed and control matter more. We will tell you which one suits you.' },
  { category: 'web', question: 'What are the 7 Cs of a website?',
    answer: 'The 7 Cs is an older framework for judging a website: context (layout and design), content, community, customisation, communication, connection (links to other sites) and commerce. It is still a handy checklist. For a small business site we would add two more: clear calls to action, so visitors know what to do next, and speed, so they stay long enough to do it.' },
  { category: 'web', question: 'How do I choose a web design company in Australia?',
    answer: 'Ask three questions. Who exactly will build my site, and can I speak to them? What is the fixed timeline and scope, and what happens if it slips? Can I see live sites and test their speed on PageSpeed Insights? Good web design companies answer all three straight away. Also ask what happens after launch, because that is where most small businesses get let down.' },
  { category: 'web', question: 'I already have a website. Should I rebuild it or fix it?',
    answer: 'Often you only need fixes. We start with an audit of speed, structure, SEO and the things stopping visitors from enquiring, then tell you honestly whether targeted fixes or a rebuild is the better spend. If we rebuild, we keep your content and rankings with a proper redirect map, so your Google traffic and Google Business Profile carry over.' },

  // ── Ecommerce & Shopify ──
  { category: 'ecommerce', question: 'What are the top ecommerce platforms in Australia?',
    answer: 'For most Australian brands the shortlist is Shopify and Shopify Plus, WooCommerce, BigCommerce and Adobe Commerce (Magento). Shopify suits most direct-to-consumer brands, WooCommerce suits businesses already on WordPress, and Adobe Commerce suits large or complex catalogues. We build on all of them and also run our own platform, Commerceflo, so our advice is not tied to one vendor.' },
  { category: 'ecommerce', question: 'Is Shopify still worth it in 2026?',
    answer: 'For most Australian direct-to-consumer brands, yes. Shopify handles hosting, security and checkout well, supports AUD and GST settings, and works with Afterpay, Zip and Australian shipping apps. It is less of a fit when you have complex B2B pricing, very large catalogues or unusual product rules. Our Shopify development page for Australia explains when it fits and when it does not.' },
  { category: 'ecommerce', question: 'Can you set up GST, Afterpay, Zip and Australia Post on my store?',
    answer: 'Yes. Australian stores we build launch with AUD pricing, GST-inclusive prices and tax invoices that show your ABN, shipping zones and rates for Australia Post or your courier, and buy now, pay later options like Afterpay and Zip where your platform supports them. We also connect orders to Xero or MYOB so your bookkeeping is not a copy-and-paste job.' },
  { category: 'ecommerce', question: 'How much does it cost to hire a Shopify developer?',
    answer: 'It depends on the job. A theme tweak is small, a custom theme is larger, and a migration from another platform with product data, customer accounts and redirects is larger again. Apps, integrations with your ERP or 3PL, and B2B pricing rules add scope. We quote a fixed price per stage after a short call, so you are not paying an open-ended hourly rate.' },
  { category: 'ecommerce', question: 'Can I hire someone to manage my Shopify store?',
    answer: 'Yes. Many of our ecommerce clients keep us on month-to-month after launch for store support: new features, app changes, speed fixes, product and collection updates, and help during sales peaks like Black Friday and end of financial year. You get the same developers who built the store, so nobody has to learn your setup from scratch.' },
  { category: 'ecommerce', question: 'Do you build B2B and wholesale ordering portals?',
    answer: 'Yes. We built B2B wholesale ordering for Bombay Petals, a decor wholesaler, so trade buyers order and reorder online instead of over email. For Australian wholesalers that means trade pricing per customer, account terms, minimum order rules and GST-correct invoices. See our ecommerce development page for Australia for how we scope B2B ecommerce.' },

  // ── AI agents & AI consulting ──
  { category: 'ai', question: 'What does an AI automation agency do?',
    answer: 'An AI automation agency designs and builds systems that take repeat work off your team: answering common enquiries, reading emailed orders into your system, chasing quotes, updating records and routing requests. A good one starts by mapping how the work is done today, builds for your rules, tests on your real data, and supports the system after launch. FactoryJet does all of that, and you own the result.' },
  { category: 'ai', question: 'What is an AI agent, in plain English?',
    answer: 'An AI agent is software that can read a request, decide what to do within rules you set, and take action in your systems. For example, it can read a customer email, check stock and order status, draft or send a reply, and update your CRM. A chatbot only talks. An agent talks and does, with a person checking anything sensitive.' },
  { category: 'ai', question: 'What is the difference between generative AI and agentic AI?',
    answer: 'Generative AI creates content when asked: text, summaries, images or code. ChatGPT is the best-known example. Agentic AI goes further and takes actions across your systems, such as booking a job, updating a record or processing an order, inside rules you control. Many first projects use generative AI. Agents come once the process and data are well understood.' },
  { category: 'ai', question: 'How much does an AI agent cost to build?',
    answer: 'It depends on how many systems the agent must connect to, how clean your data is, how many rules and exceptions the work has, and how much human review you want built in. A single-task agent on one system is a small, fixed-scope build. An agent working across your CRM, ERP and inbox is larger. We quote per stage after a short call, and you pay AI model providers directly.' },
  { category: 'ai', question: 'Can AI answer our phones and customer service calls?',
    answer: 'Yes. An AI receptionist can answer calls and messages at any hour, take bookings, answer common questions about opening hours, policies and services, qualify new leads and pass urgent or complex calls to a person. It works best when it is connected to your calendar and CRM. Our AI receptionist page for Australia explains how we set one up and where the limits are.' },
  { category: 'ai', question: 'Is using AI safe under Australian privacy law?',
    answer: 'It can be, if it is designed for it. The Privacy Act 1988 and the Australian Privacy Principles apply to personal information your AI handles, including rules on sending it overseas and keeping it secure. The OAIC recommends, as best practice, not entering personal information into publicly available AI tools. We design agents with scoped access, business-grade AI terms and logs of what they did.' },
  { category: 'ai', question: 'Do we need an AI consultant before building anything?',
    answer: 'Not always. If you already know the job you want AI to do, we can go straight to a scoped build. If you are asking where AI fits at all, a short AI readiness assessment is the better first step: it finds the two or three use cases worth doing, checks your data and privacy duties, and tells you whether to buy a tool or build.' },

  // ── SEO & AI search ──
  { category: 'search', question: 'Is SEO replaced by AI?',
    answer: 'No, but it has changed. Google AI Overviews, ChatGPT and Perplexity still pull their answers from websites, so a site that is well structured, fast and genuinely useful gets cited more. What matters more now is answering buyer questions clearly, naming what you do in plain terms, and being mentioned on trusted sites. SEO and AI SEO are now one job done well.' },
  { category: 'search', question: 'What is AI SEO or GEO?',
    answer: 'AI SEO, also called generative engine optimisation or GEO, is the work of getting your business named and cited when people ask AI assistants for recommendations. It starts with an AI visibility audit that shows where you appear today in ChatGPT, Perplexity, Gemini and Google AI Overviews, then fixes the gaps in your pages, structured data and mentions on other sites.' },
  { category: 'search', question: 'How much should I expect to pay for SEO in Australia?',
    answer: 'It depends on how competitive your searches are, how many locations or products you need to rank for, the state of your site today, and how much new content is needed. Local SEO for one service area is a smaller engagement than national ecommerce SEO. We work month-to-month with a clear monthly scope, so you can see exactly what you are paying for.' },
  { category: 'search', question: 'Will my new website rank on Google?',
    answer: 'A new website does not rank by magic, but it can be built so ranking is possible: clean structure, fast pages, proper schema, and content that answers real questions. Every site we build ships with that foundation. For competitive searches, ongoing SEO does the heavy lifting, and we will give you an honest view of the timeline before you spend anything.' },
  { category: 'search', question: 'Do you do local SEO for Australian cities?',
    answer: 'Yes. Local SEO means showing up when people nearby search for what you do, including the Google Maps results. The biggest levers are your Google Business Profile, reviews, consistent business details across directories, and location pages with real substance. Because Maps results reward a local address, we focus your effort where your business is actually based and serves customers.' },
  { category: 'search', question: 'How do I know if my business shows up in ChatGPT?',
    answer: 'Ask it the questions your buyers ask, such as the best provider of your service in your city, and see who is named. That gives a rough picture. Our free AI visibility checker runs a structured version across several AI assistants and shows where you appear and where competitors are named instead. It is the starting point for any AI SEO work.' },
];

/* ─── JSON-LD (Organization is referenced by @id, never defined here) ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-AU',
      datePublished: '2026-06-11',
      dateModified: UPDATED,
      isPartOf: { '@id': 'https://factoryjet.com/#website' },
      publisher: { '@id': ORG_ID },
      about: { '@id': ORG_ID },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
      mainEntity: { '@id': `${CANONICAL}#services` },
      primaryImageOfPage: 'https://factoryjet.com/images/au/hub/au-hub-hero.webp',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]'] },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/about',
        sameAs: ['https://www.linkedin.com/in/bhavesh-ai-gtm-expert/', 'https://github.com/factoryjet-tech'],
      },
    },
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'FactoryJet Australia: ecommerce, AI agents, web design and AI search',
      serviceType: 'Ecommerce development, AI agent development, website design and development, SEO and AI SEO',
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#services`,
      name: 'FactoryJet Australia service pages',
      itemListElement: AU_PAGES.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: `https://factoryjet.com${p.href}`,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
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
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: auHubAlternates },
  openGraph: {
    title: TITLE,
    description:
      'Ecommerce development, AI agents, website design and AI search for Australian businesses. Senior engineers, founder-led, supported after launch, owned by you.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/hub/au-hub-og.webp', width: 1200, height: 630, alt: 'An Australian business owner and a FactoryJet consultant reviewing a new website layout in a bright Sydney office' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/au/hub/au-hub-og.webp'],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const imgStyle = { width: '100%', height: 'auto', borderRadius: 12, display: 'block' } as const;
const linkUnder = { textDecoration: 'underline', textUnderlineOffset: 3 } as const;

function HubLinks({ hub }: { hub: HubKey }) {
  return (
    <ul className="stack mt-6" style={{ listStyle: 'none' }}>
      {pagesFor(hub).map((p) => (
        <li key={p.href}>
          <a className="svc-card" href={p.href} style={{ display: 'block', padding: 20 }}>
            <span style={{ fontFamily: T.fd, fontWeight: 700, fontSize: 16, color: T.ink }}>{p.anchor} →</span>
            <p className="mt-2" style={{ fontSize: 14, marginTop: 6 }}><b style={{ color: T.small }}>What you get:</b> {p.what}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function AustraliaHubPage() {
  return (
    <>
      <script id="ld-au-hub" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />

      <div className="au-svc">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />FactoryJet Australia</span>
                  <span className="chip">Ecommerce</span>
                  <span className="chip">AI Agents</span>
                  <span className="chip">Web Design</span>
                  <span className="chip">AI Search &amp; SEO</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 580 }}>
                  FactoryJet builds online stores, AI agents, websites and AI search visibility for Australian
                  businesses. If you are looking for web design Australia buyers trust, an ecommerce developer who
                  understands GST and Afterpay, or an AI automation agency that builds instead of pitching, it is one
                  senior team, founder-led, and you own everything we build.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 580 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder &amp; CEO<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />25 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 580 }}>
                  <HeroInlineForm region="au" source="au_hub_hero" submitLabel="Talk to the Founder" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/hub/au-hub-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="An Australian business owner and a FactoryJet consultant reviewing a new website layout on a laptop in a bright Sydney office" style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What you get, whichever service</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Who builds it</div><div className="scorecard-note">senior engineers, founder involved</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>No juniors</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Websites up to 5 pages</div><div className="scorecard-note">fixed scope, fixed quote</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>7-day delivery</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Code, content, integrations</div><div className="scorecard-note">no platform lock-in</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>You own it</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">Who is FactoryJet, for an Australian business?</span>
              <p>
                FactoryJet is a services company, founded in 2014, that has served more than 500 businesses. For
                Australian businesses we design, build and support four things: ecommerce stores, AI agents, websites,
                and search visibility on Google and AI assistants. Founder Bhavesh Barot leads every project, websites
                of up to 5 pages are delivered in 7 days, and you own what we build.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use on this page</span>
              <p>
                An <b>AI agent</b> is software that reads a request and takes action in your systems within rules you
                set. <b>AI SEO</b> (also called GEO, generative engine optimisation) is getting your business named in
                ChatGPT, Perplexity and Google AI Overviews. <b>Replatforming</b> means moving your online store from
                one platform to another without losing products, customers or Google rankings.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Most Australian businesses we speak to do not need four suppliers. They need one team that can build the
              website or store, connect it to the tools they already run, add AI where it genuinely saves time, and make
              sure buyers can find it. That is what this page maps out, service by service, with a link to the detail
              page for each one.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20, listStyle: 'none' }}>
              {[
                { v: '2014', t: 'the year FactoryJet started building for businesses', s: 'Company record' },
                { v: '500+', t: 'businesses served across websites, stores and AI projects', s: 'Company record' },
                { v: '7 days', t: 'delivery for websites of up to 5 pages, with fixed scope', s: 'Standard timeline' },
                { v: '4', t: 'service hubs, one senior team, one point of contact', s: 'This page' },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <span style={{ fontFamily: T.fm, fontSize: 10, color: T.n400 }}>{r.s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. ALL AU SERVICES (hover cards = ItemList) ═══ */}
        <section className="sec-lg dot-grid" id="services">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Every FactoryJet Australia service</span>
              <h2>Four service hubs, eight detail pages, one team</h2>
              <p className="lead mt-4">
                Pick the page that matches the job in front of you. Each one explains what we build, how it works for
                Australian businesses, what drives the cost, and the questions buyers ask most. Web design is covered
                in full further down this page.
              </p>
            </div>
            <ul className="col-3 mt-12" style={{ listStyle: 'none' }}>
              {AU_PAGES.map((p) => (
                <li key={p.href}>
                  <a className="svc-card" href={p.href} style={{ display: 'block', height: '100%' }}>
                    <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: T.small }}>
                      {p.hub === 'ecommerce' ? 'E-Commerce' : p.hub === 'ai' ? 'AI Agent Development' : 'AI Search & SEO'}
                    </span>
                    <h3 className="mt-2" style={{ fontSize: 18, marginTop: 8 }}>{p.name}</h3>
                    <p className="mt-2" style={{ fontSize: 14, marginTop: 8 }}>{p.what}</p>
                    <span style={{ display: 'inline-block', marginTop: 12, fontSize: 13.5, fontWeight: 600, color: T.small }}>{p.anchor} →</span>
                  </a>
                </li>
              ))}
              <li>
                <a className="svc-card" href="#web-design" style={{ display: 'block', height: '100%' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: T.small }}>Website Design &amp; Development</span>
                  <h3 className="mt-2" style={{ fontSize: 18, marginTop: 8 }}>Web Design Australia</h3>
                  <p className="mt-2" style={{ fontSize: 14, marginTop: 8 }}>Custom websites for small and growing businesses, WordPress or custom-coded, 7-day delivery for up to 5 pages, SEO built in from day one.</p>
                  <span style={{ display: 'inline-block', marginTop: 12, fontSize: 13.5, fontWeight: 600, color: T.small }}>Web design and development on this page ↓</span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 5. HUB 1: E-COMMERCE ═══ */}
        <section className="sec-lg" id="ecommerce">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Hub 1 · E-Commerce</span>
                <h2>Ecommerce development and Shopify stores built for how Australians buy</h2>
                <div className="stack mt-6">
                  <p>
                    Ecommerce is where FactoryJet started and where we go deepest. We design and build online stores
                    and B2B ordering portals on Shopify, Shopify Plus, WooCommerce, BigCommerce and Adobe Commerce
                    (Magento), plus our own platform, Commerceflo. Because we build on all of them, we have no reason to
                    push one. We pick the platform that fits your catalogue, your team and your growth plans.
                  </p>
                  <p>
                    An Australian store has local details that generic templates skip. Prices shown in AUD and
                    GST-inclusive. Tax invoices that carry your ABN. Shipping zones and rates for Australia Post or your
                    courier. Buy now, pay later options like Afterpay and Zip. Returns and refund wording that fits the
                    Australian Consumer Law. Orders flowing into Xero or MYOB instead of being retyped. We set all of it
                    up before launch, not as change requests afterwards.
                  </p>
                  <p>
                    Proof matters more than promises, so here is ours. We built the storefront for Belle Maison, a home
                    decor brand selling to retail shoppers and trade buyers from one catalogue, on Commerceflo. We built
                    wholesale ordering for Bombay Petals so trade buyers place and repeat orders online instead of by
                    email. Both are the kind of build Australian brands and wholesalers ask us for.
                  </p>
                </div>
                <HubLinks hub="ecommerce" />
              </div>
              <div>
                <div className="card" style={{ padding: 8 }}>
                  <img src="/images/au/hub/au-hub-ecommerce.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An Australian online store owner packing a customer order in a bright Melbourne warehouse" style={imgStyle} />
                </div>
                <div className="card card-top-orange mt-6">
                  <span className="eyebrow">Set up before launch</span>
                  <ul className="scope-list yes-list">
                    <li><b>AUD and GST.</b> GST-inclusive pricing and tax invoices with your ABN.</li>
                    <li><b>Payments.</b> Cards, PayPal, Afterpay and Zip where your platform supports them.</li>
                    <li><b>Shipping.</b> Australia Post and courier zones, rates and tracking emails.</li>
                    <li><b>Accounting.</b> Orders and payouts into Xero or MYOB.</li>
                    <li><b>Marketplaces.</b> Stock kept in step with Amazon, eBay or your POS.</li>
                    <li><b>Migration.</b> Products, customers and a 301 redirect map so rankings survive.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. HUB 2: AI AGENT DEVELOPMENT ═══ */}
        <section className="sec-lg dot-grid" id="ai">
          <div className="wrap">
            <div className="col-4060">
              <div>
                <div className="card" style={{ padding: 8 }}>
                  <img src="/images/au/hub/au-hub-ai-agents.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A FactoryJet engineer showing a Brisbane business owner an AI agent conversation on his office monitor" style={imgStyle} />
                </div>
                <div className="card mt-6">
                  <span className="eyebrow">Which AI service fits you?</span>
                  <details className="faq-item">
                    <summary><span className="q-text">“We do not know where AI fits yet.”</span></summary>
                    <div className="faq-ans"><p>Start with <a href="/au/ai-consulting" style={linkUnder}>AI consulting and an AI readiness assessment</a>. You get the two or three use cases worth doing, and a build or buy decision.</p></div>
                  </details>
                  <details className="faq-item">
                    <summary><span className="q-text">“The same enquiries eat our team’s week.”</span></summary>
                    <div className="faq-ans"><p>That is an agent job. See <a href="/au/ai-agents" style={linkUnder}>AI agents and AI automation for Australian businesses</a>.</p></div>
                  </details>
                  <details className="faq-item">
                    <summary><span className="q-text">“We miss calls when we are on the tools.”</span></summary>
                    <div className="faq-ans"><p>An <a href="/au/ai-receptionist" style={linkUnder}>AI receptionist</a> answers, books and qualifies, and passes urgent calls to you.</p></div>
                  </details>
                  <details className="faq-item">
                    <summary><span className="q-text">“We want AI inside our CRM or ERP.”</span></summary>
                    <div className="faq-ans"><p>That is <a href="/au/ai-development" style={linkUnder}>custom AI development and integration</a> with the software you already run.</p></div>
                  </details>
                </div>
              </div>
              <div>
                <span className="eyebrow">Hub 2 · AI Agent Development</span>
                <h2>AI agents and AI automation that do real work in your business</h2>
                <div className="stack mt-6">
                  <p>
                    Most AI talk is about chatbots. The useful part for an Australian small or mid-sized business is
                    different: software that reads the emails, forms and calls coming in, checks your systems, and does
                    the next step. Quoting a job from your price list. Keying an emailed purchase order into your
                    system. Chasing an overdue quote. Booking a service call. We design these AI agents around your
                    rules, test them on your real data, and keep a person in the loop for anything sensitive.
                  </p>
                  <p>
                    We are a services company, not a software subscription. We design, build, implement and support the
                    agent, and you own it: the code, the prompts, the integrations and the documentation. You pay the AI
                    model provider directly, with no markup through us. If the honest answer is that an off-the-shelf
                    tool does the job, we will tell you, and help you set it up properly.
                  </p>
                  <p>
                    Privacy is designed in from the start. The Australian Privacy Principles cover how personal
                    information is collected, used, secured and sent overseas, and most AI models run on overseas
                    servers. We scope each agent’s access to the data it needs, use business-grade AI terms that keep
                    your data out of model training, and log what the agent did so you can check it.
                  </p>
                </div>
                <HubLinks hub="ai" />
                <p style={srcNote}>
                  Source: <a href={SRC_APP} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>OAIC, Australian Privacy Principles quick reference</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Not sure which service you need first?'}
          sub={'Tell us what you sell and what is slowing you down. On a short call in your time zone, the founder will tell you whether a new site, a better store, an AI agent or search work would move the needle most, and what it would take.'}
          label={'Talk to the Founder'}
        />

        {/* ═══ 7. HUB 3: WEB DESIGN (no AU detail page, so covered here in depth) ═══ */}
        <section className="sec-lg" id="web-design">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Hub 3 · Website Design &amp; Development</span>
                <h2>Web design Australia: websites built properly, live in 7 days</h2>
                <div className="stack mt-6">
                  <p>
                    Website design is the most searched service in this whole list, and the most crowded. Thousands of
                    web designers, studios and agencies compete for the same Australian small businesses. So here is
                    what is different about ours. Senior engineers design and build every site. Scope is fixed before
                    work starts. Websites of up to 5 pages are delivered in 7 days. And you can talk to the founder, not
                    an account manager.
                  </p>
                  <p>
                    Every site is built mobile-first, meaning it is designed for phones before desktops, because that is
                    how most local customers find you. Pages are built for speed, with green Core Web Vitals as the
                    target (Google’s measures of how fast and stable a page feels). Every site ships with the basics of
                    SEO in place: clean page structure, titles and descriptions, schema markup that tells Google and AI
                    assistants what your business does, a sitemap, and analytics that count enquiries, not just visits.
                  </p>
                  <p>
                    Accessibility is part of good website design, not an extra. We build to the Web Content
                    Accessibility Guidelines (WCAG), the international standard for making sites usable by people with
                    disabilities. The W3C notes that content meeting WCAG 2.2 also meets the earlier 2.1 and 2.0
                    versions, so building to the latest version covers the older ones too.
                  </p>
                </div>
                <p style={srcNote}>
                  Source: <a href={SRC_WCAG} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>W3C Web Accessibility Initiative, WCAG 2 overview</a>.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/hub/au-hub-web-design.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A web designer and her client reviewing a website page layout on a large monitor in a bright Melbourne design studio" style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">Every website ships with</span>
                  <div className="scorecard-row"><div className="scorecard-metric">Custom design, no recycled templates</div><div className="scorecard-val" style={{ fontSize: 14 }}>Yes</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">Copywriting help and page structure</div><div className="scorecard-val" style={{ fontSize: 14 }}>Yes</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">SEO foundations and schema</div><div className="scorecard-val" style={{ fontSize: 14 }}>Built in</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">Enquiry tracking in analytics</div><div className="scorecard-val" style={{ fontSize: 14 }}>Wired in</div></div>
                  <div className="scorecard-row"><div className="scorecard-metric">Support after launch</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Month-to-month</div></div>
                </div>
              </div>
            </div>

            {/* What we build (web) */}
            <div className="mt-12" style={{ maxWidth: 780 }}>
              <h3>What our web design and development team builds</h3>
              <p className="mt-4">
                One web development company for the whole range, from a first small business website to a web app your
                customers log in to. The same senior team handles all of it, so you never start again with a new supplier
                when the business grows.
              </p>
            </div>
            <ul className="col-3 mt-8" style={{ listStyle: 'none' }}>
              <li className="svc-card"><h3 style={{ fontSize: 18 }}>Small business websites</h3><p className="mt-4">Web design for small businesses: tradies, clinics, cafés, consultants and local services. Clear pages, fast load, and one obvious way to call, book or enquire.</p></li>
              <li className="svc-card"><h3 style={{ fontSize: 18 }}>WordPress websites</h3><p className="mt-4">A WordPress web designer and developer in one: lean builds with few plugins, a simple editor your team can use, and security updates handled. See our <a href="/services/wordpress-development" style={linkUnder}>WordPress development service</a>.</p></li>
              <li className="svc-card"><h3 style={{ fontSize: 18 }}>Custom-coded websites</h3><p className="mt-4">Built on Next.js when speed and control matter most: marketing sites, multi-location businesses and brands competing hard on Google.</p></li>
              <li className="svc-card"><h3 style={{ fontSize: 18 }}>Ecommerce web design</h3><p className="mt-4">Store design that sells: product pages, collections and checkout designed for mobile shoppers, then built on the platform that fits. See Hub 1 above.</p></li>
              <li className="svc-card"><h3 style={{ fontSize: 18 }}>Website redesigns</h3><p className="mt-4">A rebuild that keeps what already works: your content, your rankings and your Google Business Profile, with a full redirect map. See our <a href="/services/website-redesign" style={linkUnder}>website redesign service</a>.</p></li>
              <li className="svc-card"><h3 style={{ fontSize: 18 }}>Web apps and portals</h3><p className="mt-4">Booking systems, quote calculators, customer portals and dashboards, scoped tightly. See <a href="/services/web-application-development" style={linkUnder}>web application development</a>.</p></li>
            </ul>

            {/* 7-day process as expanders */}
            <div className="col-6040 mt-12">
              <div>
                <h3>How the 7-day website build works, day by day</h3>
                <p className="mt-4" style={{ maxWidth: 560 }}>
                  For websites of up to 5 pages. Click a day to see what happens. The 7 days are working days where we
                  have what we need from you, and if you go quiet mid-project, the clock simply pauses.
                </p>
                <div className="card mt-6" style={{ padding: '6px 22px' }}>
                  {[
                    { d: 'Day 1', t: 'Brief and strategy', b: 'A 30-minute call to lock your goals, the page list, what each page must say, and the one action you want visitors to take. Send your logo, photos and a few sites you like.' },
                    { d: 'Day 2', t: 'Homepage design concept', b: 'Your homepage design lands in your inbox. This is the main approval point: once the look is right, every other page follows it.' },
                    { d: 'Day 3', t: 'Full design', b: 'Every page is designed in your brand, including mobile layouts, forms and the details people skip, like the contact page and footer.' },
                    { d: 'Day 4', t: 'Build', b: 'Senior engineers code the site. No page builders stacked with plugins, so it stays fast and easy to maintain.' },
                    { d: 'Day 5', t: 'Content and SEO', b: 'Copy goes in, with page titles, descriptions, schema markup, a sitemap and analytics with enquiry tracking.' },
                    { d: 'Day 6', t: 'Review and polish', b: 'Your feedback round. We fix, test on real phones, check speed and accessibility, and tidy every detail.' },
                    { d: 'Day 7', t: 'Launch and handover', b: 'Live on your domain, with a short handover session so your team can update content and read the reports.' },
                  ].map((s) => (
                    <details className="faq-item" key={s.d}>
                      <summary><span className="q-text"><b style={{ fontFamily: T.fm, color: T.small, fontSize: 12, marginRight: 10 }}>{s.d}</b>{s.t}</span></summary>
                      <div className="faq-ans"><p>{s.b}</p></div>
                    </details>
                  ))}
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">WordPress or custom?</span>
                <p style={{ fontSize: 14 }}>
                  People ask whether WordPress is outdated. It is not, but it is not always the best fit. A simple rule:
                </p>
                <div className="scorecard-row"><div><div className="scorecard-metric">Lots of content your team edits daily</div><div className="scorecard-note">blogs, news, many staff editors</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>WordPress</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Speed and control come first</div><div className="scorecard-note">competitive local and national searches</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Custom</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Selling products online</div><div className="scorecard-note">stock, payments, shipping</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Ecommerce platform</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Old WordPress site, slow and fragile</div><div className="scorecard-note">plugin overload, security worries</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Audit first</div></div>
                <p className="mt-6" style={{ fontSize: 14 }}>
                  For depth on how we design and build websites, see our <a href="/services/web-design" style={linkUnder}>website design services hub</a>.
                  Comparing providers? Our guides to the <a href="/blog/best-web-design-companies-small-business-australia" style={linkUnder}>best web design companies for small business in Australia</a> and
                  the <a href="/blog/best-wordpress-development-companies-australia-2026" style={linkUnder}>best WordPress development companies in Australia</a> list the options honestly, including us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 8. WEBSITE COST (drivers, no numbers) ═══ */}
        <section className="sec-lg dot-grid" id="website-cost">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Website cost in Australia</span>
                <h2>How much does a website cost in Australia? What actually drives the price</h2>
                <p className="lead mt-4" style={{ maxWidth: 580 }}>
                  Search for website design cost and you will find ranges so wide they are useless. That is because two
                  quotes for “a 5 page website” can describe completely different jobs. Here is what moves the price, so
                  you can compare quotes like for like.
                </p>
                <ol className="scope-list num-list mt-6" style={{ maxWidth: 600 }}>
                  <li><b>Custom design or a template.</b> A template is quicker to set up. Custom design fits your brand and the way your customers decide, and it is what we build.</li>
                  <li><b>Number of unique page designs.</b> Ten pages that share two layouts cost less than five pages that each need their own design.</li>
                  <li><b>Who writes the words.</b> Copywriting is often left out of a low quote, then becomes your job or an extra invoice.</li>
                  <li><b>Features.</b> Booking, quote forms, online payments, memberships and customer logins each add build and testing time.</li>
                  <li><b>Integrations.</b> Connecting your CRM, calendar, Xero or MYOB, or an email tool, adds scope and makes the site far more useful.</li>
                  <li><b>Content migration.</b> Moving pages, blog posts and images from an old site, plus redirects to protect rankings, takes real work.</li>
                  <li><b>SEO setup.</b> Titles, schema, sitemaps, speed work and analytics should be included. Check that they are.</li>
                  <li><b>Support after launch.</b> Updates, backups, security and small changes. Ask what happens in month two, not only on launch day.</li>
                </ol>
                <p className="mt-6" style={{ maxWidth: 600 }}>
                  For online stores the drivers are similar, plus catalogue size, product options, shipping rules and
                  payment setup. For the ecommerce detail, see our <a href="/blog/ecommerce-website-cost-2026" style={linkUnder}>ecommerce website cost guide</a>.
                  Whatever you build, we quote a fixed price per stage after a short call. No hourly billing, no surprise invoices.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What moves your quote</span>
                <div className="scorecard-row"><div className="scorecard-metric">Unique page designs</div><div className="scorecard-val" style={{ fontSize: 14 }}>Design</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Copywriting and photos</div><div className="scorecard-val" style={{ fontSize: 14 }}>Content</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Booking, payments, logins</div><div className="scorecard-val" style={{ fontSize: 14 }}>Features</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">CRM, Xero, MYOB, calendar</div><div className="scorecard-val" style={{ fontSize: 14 }}>Integrations</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Old site content and redirects</div><div className="scorecard-val" style={{ fontSize: 14 }}>Migration</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">Updates, backups, changes</div><div className="scorecard-val" style={{ fontSize: 14 }}>Support</div></div>
                <div className="scorecard-row"><div className="scorecard-metric">First call with the founder</div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Free</div></div>
                <div className="mt-6">
                  <ModalCTAButton label="Get a fixed quote" region="au" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. HUB 4: AI SEARCH & SEO ═══ */}
        <section className="sec-lg" id="search">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Hub 4 · AI Search &amp; SEO</span>
                <h2>SEO and AI SEO so Australians find you on Google and in AI answers</h2>
                <div className="stack mt-6">
                  <p>
                    Buyers now search in two places. They still use Google, including the Maps results for local
                    services. And more of them ask ChatGPT, Perplexity, Gemini or Google’s AI Overviews to recommend a
                    provider. Those AI answers are built from websites and from what trusted sites say about you. If your
                    site is thin, slow or vague about what you do, you are left out of both.
                  </p>
                  <p>
                    Our SEO work covers the foundations: technical SEO (making sure Google can crawl and understand your
                    site), local SEO and your Google Business Profile, and content that answers the questions your buyers
                    actually ask. Our AI SEO work, also called generative engine optimisation, starts with an AI
                    visibility audit that shows where you are named today and where competitors are named instead, then
                    fixes the gaps.
                  </p>
                  <p>
                    One honest note on local search. Google’s Maps results favour businesses with a local address, so
                    we focus local SEO on the places your business is really based and serves. For everything else,
                    strong pages and AI visibility do the work. Want a quick read first? Run our{' '}
                    <a href="/ai-visibility-checker" style={linkUnder}>free AI visibility checker</a>.
                  </p>
                </div>
                <HubLinks hub="search" />
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/hub/au-hub-ai-search.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An Adelaide café owner checking how her business appears in local search results on her phone" style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">Where buyers look now</span>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Google search and Maps</div><div className="scorecard-note">technical and local SEO</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>SEO</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Google AI Overviews</div><div className="scorecard-note">answers built from web pages</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Both</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">ChatGPT, Perplexity, Gemini</div><div className="scorecard-note">named providers and citations</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>AI SEO</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. HOW WE WORK WITH AUSTRALIAN BUSINESSES ═══ */}
        <section className="sec-lg dot-grid" id="how-we-work">
          <div className="wrap">
            <div className="col-4060">
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/hub/au-hub-how-we-work.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An Australian tradesman beside his ute checking a project update on a tablet on a sunny suburban street" style={imgStyle} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Most of our Australian clients are busy running the business. So updates come in writing, decisions
                    are asked for clearly, and calls are short and booked when it suits you.
                  </p>
                </div>
              </div>
              <div>
                <span className="eyebrow">How we work with Australian businesses</span>
                <h2>Time zones, invoices and Australian privacy law, handled</h2>
                <ul className="int-group mt-6">
                  <li><b>Your time zone.</b> Calls are booked in your hours, whether you are on AEST, ACST or AWST. Work is shared in writing, so you always know what has moved and what is next.</li>
                  <li><b>Written, fixed-scope quotes.</b> A fixed price per stage, agreed before work starts. No hourly billing and no surprise change requests.</li>
                  <li><b>Clear invoices.</b> Itemised invoices per stage that your bookkeeper can match in Xero or MYOB. We confirm how GST applies to our invoices for your business before you sign.</li>
                  <li><b>GST on what we build.</b> Your store and your forms handle GST properly for your customers: GST-inclusive prices, tax invoices with your ABN, and reports your accountant can use.</li>
                  <li><b>Australian privacy law.</b> The Privacy Act 1988 and the 13 Australian Privacy Principles shape how we handle personal data, including APP 8 on sending it overseas and APP 11 on keeping it secure. We give our team only the access a job needs and remove it at handover.</li>
                  <li><b>AI and personal information.</b> The OAIC recommends, as best practice, that organisations do not enter personal information into publicly available generative AI tools. Our AI agents use business-grade AI services with scoped access instead.</li>
                  <li><b>Consumer law on your store.</b> Returns, refunds and product claims on the stores we build are worded with the Australian Consumer Law in mind. Final legal sign-off stays with your adviser.</li>
                </ul>
                <p style={srcNote}>
                  Sources: <a href={SRC_APP} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>OAIC, Australian Privacy Principles quick reference</a>;{' '}
                  <a href={SRC_OAIC_AI} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>OAIC, guidance on privacy and commercially available AI products</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 11. COMPARISON TABLE ═══ */}
        <section className="sec-lg" id="compare">
          <div className="wrap">
            <span className="eyebrow">An honest comparison</span>
            <h2 style={{ maxWidth: 760 }}>FactoryJet vs a local studio vs a large agency vs a freelancer</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Every one of these is the right choice for someone. Most lists of the best web design agencies in
              Australia compare portfolios. This table compares the things that hurt later: who does the work, how long
              it takes, and what happens after launch.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table" style={{ minWidth: 760 }}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet</th>
                    <th>Local web design studio</th>
                    <th>Large digital agency</th>
                    <th>Freelancer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Best fit</td><td className="fj"><span className="yes">SMBs and growing brands needing more than a website</span></td><td><span className="partial">Brochure sites for local businesses</span></td><td><span className="partial">Large brands with big budgets</span></td><td><span className="partial">Small, simple jobs</span></td></tr>
                  <tr><td className="feat">Who does the work</td><td className="fj"><span className="yes">Senior engineers, founder involved</span></td><td>A small team, often the owner</td><td><span className="partial">Mixed seniority behind account managers</span></td><td>One person</td></tr>
                  <tr><td className="feat">Website timeline</td><td className="fj"><span className="yes">7 days for up to 5 pages</span></td><td>Weeks, depending on the queue</td><td><span className="partial">Often months, with discovery phases</span></td><td>Varies with availability</td></tr>
                  <tr><td className="feat">Ecommerce and B2B depth</td><td className="fj"><span className="yes">Core strength, all major platforms</span></td><td><span className="partial">Usually one platform</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Varies</span></td></tr>
                  <tr><td className="feat">AI agents and integrations</td><td className="fj"><span className="yes">Designed, built and supported in-house</span></td><td><span className="no">Rarely</span></td><td><span className="partial">Often a separate team or partner</span></td><td><span className="no">Rarely</span></td></tr>
                  <tr><td className="feat">SEO and AI search</td><td className="fj"><span className="yes">Built in, plus ongoing SEO and AI SEO</span></td><td><span className="partial">Basic setup</span></td><td><span className="yes">Yes, separate retainer</span></td><td><span className="partial">Depends on the person</span></td></tr>
                  <tr><td className="feat">Face-to-face meetings</td><td className="fj"><span className="no">Remote only</span></td><td><span className="yes">Usually easy</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Sometimes</span></td></tr>
                  <tr><td className="feat">Who owns the work</td><td className="fj"><span className="yes">You, fully</span></td><td><span className="partial">Usually you, check hosting terms</span></td><td><span className="partial">Check the contract</span></td><td><span className="partial">Usually you</span></td></tr>
                  <tr><td className="feat">After launch</td><td className="fj"><span className="yes">Same team, month-to-month</span></td><td><span className="partial">Care plans vary</span></td><td><span className="partial">Retainer required</span></td><td><span className="no">Often unavailable</span></td></tr>
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              We have put our one real weakness in the table: we work remotely, so if in-person workshops matter most to you, a local studio may suit you better.
            </p>
          </div>
        </section>

        {/* ═══ 12. WHICH OPTION FITS YOU (checklist) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">A quick self-check</span>
              <h2>Which option fits your business?</h2>
              <p className="lead mt-4">Tick the lines that sound like you. The column with the most ticks is probably your answer.</p>
            </div>
            <div className="col-3 mt-10">
              {[
                { t: 'A freelancer or local studio fits if…', items: ['You need a simple brochure site and nothing else', 'You want to meet in person every week', 'Nobody else needs to connect to the site', 'You are happy to find other suppliers for SEO and AI later'] },
                { t: 'FactoryJet fits if…', items: ['You sell online, or plan to, and need it done properly', 'Your team loses hours to repeat enquiries or order entry', 'You want one senior team for site, store, AI and search', 'You want a fixed quote and to own everything we build'] },
                { t: 'A large agency fits if…', items: ['You are a national brand with a large marketing team', 'You need brand strategy, media buying and creative too', 'You have a long timeline and many stakeholders', 'You want a big team on a long retainer'] },
              ].map((col, ci) => (
                <div key={col.t} className={ci === 1 ? 'card card-top-orange' : 'card'}>
                  <h3 style={{ fontSize: 18 }}>{col.t}</h3>
                  <ul className="mt-4" style={{ listStyle: 'none' }}>
                    {col.items.map((it) => (
                      <li key={it} style={{ padding: '8px 0', borderBottom: `1px solid ${T.n200}` }}>
                        <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, cursor: 'pointer' }}>
                          <input type="checkbox" style={{ marginTop: 4, accentColor: T.small }} />
                          <span>{it}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ 13. LISTICLE: questions before you hire ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Before you sign anything</span>
              <h2>Eight questions to ask any web designer, ecommerce developer or AI agency in Australia</h2>
              <p className="lead mt-4">
                Use these with every provider on your shortlist, including us. A good one will answer them straight away.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900, listStyle: 'none' }}>
              {[
                { n: '01', t: 'Who exactly will build it?', d: 'Get names. Ask whether the person on the sales call will be anywhere near your project once you sign.' },
                { n: '02', t: 'What is the fixed scope and timeline?', d: 'A clear page list, feature list and date. Ask what happens, and who pays, if the date slips.' },
                { n: '03', t: 'Can I see live work and test its speed?', d: 'Run their client sites through PageSpeed Insights on a phone. Slow sites lose customers and rankings.' },
                { n: '04', t: 'Who owns the code, content and accounts?', d: 'You should own the domain, hosting account, code and content. Watch for sites locked to the provider’s own platform.' },
                { n: '05', t: 'Is copywriting and SEO setup included?', d: 'These are the most common items missing from a low quote. Get them in writing.' },
                { n: '06', t: 'How will you handle our customers’ personal data?', d: 'Especially for stores and AI. Ask about the Australian Privacy Principles, overseas storage and who has access.' },
                { n: '07', t: 'How will we measure success?', d: 'Enquiries, orders, bookings or hours saved. Not visits, and not a feeling. Agree the number before you start.' },
                { n: '08', t: 'What happens in month two?', d: 'Updates, fixes, security and changes. Ask who does it, how fast, and whether there is a lock-in contract.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══ 14. CITIES ═══ */}
        <section className="sec-lg dot-grid" id="cities">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Where we work</span>
                <h2>Serving businesses across Australia, with local pages for four cities</h2>
                <div className="stack mt-6">
                  <p>
                    We work with Australian businesses in every state and territory, fully remote and in your hours. For
                    four cities we have local pages covering web design, website development, ecommerce and SEO for that
                    market. Businesses in Sydney, Perth, the Gold Coast, Hobart and regional Australia get exactly the
                    same service and team; start with the service pages above.
                  </p>
                </div>
                <ul className="col-2 mt-6" style={{ listStyle: 'none' }}>
                  {AU_CITIES.map((c) => (
                    <li key={c.href}>
                      <a className="svc-card" href={c.href} style={{ display: 'block', padding: 20, height: '100%' }}>
                        <span style={{ fontFamily: T.fd, fontWeight: 700, fontSize: 16, color: T.ink }}>FactoryJet in {c.name} →</span>
                        <p style={{ fontSize: 14, marginTop: 6 }}>{c.note}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Australian time zones we work to</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">AEST / AEDT</div><div className="scorecard-note">NSW, VIC, QLD, ACT, TAS</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Covered</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">ACST / ACDT</div><div className="scorecard-note">SA, NT</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Covered</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">AWST</div><div className="scorecard-note">WA</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Covered</div></div>
                <div className="flex-wrap mt-6">
                  {AU_PAGES.map((p) => (
                    <a key={p.href} className="city-pill" href={p.href}>{p.name}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 15. FAQ ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Questions Australian business owners ask us</h2>
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
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="au" modalVariant="default" btnVariant="secondary-light" />
                  <p>Replies within one business day.</p>
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

        {/* ═══ 16. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 660 }}>
            <span className="eyebrow">Talk to the Founder</span>
            <h2>Tell us what you sell and where you want to grow</h2>
            <p className="mt-4">
              Send your name and work email. Bhavesh replies within one business day to book a short call in your time
              zone. You will leave with a clear scope, a fixed quote and an honest answer on whether we are the right
              fit. No sales team, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Talk to the Founder" region="au" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/au/ecommerce-development" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See ecommerce development</a>
            </div>
          </div>
        </section>

      </main>
      </div>

      <SiteFooter
        linkColumns={AU_FOOTER_COLUMNS}
        variant="dark"
        tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you."
      />
    </>
  );
}
