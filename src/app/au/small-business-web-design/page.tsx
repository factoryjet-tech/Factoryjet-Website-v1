import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import VisualSlot from '../components/VisualSlot';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';

const CANONICAL = 'https://factoryjet.com/au/small-business-web-design';
const UPDATED = '2026-09-26';
const TITLE = 'Small Business Web Design Australia | Packages | FactoryJet';
const H1 = 'Small Business Web Design in Australia: Sites That Bring Enquiries';
const DESCRIPTION =
  'Small business web design for Australian owners: clear scope tiers, 7-day delivery for sites up to 5 pages, SEO basics built in, and a site you own.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. Never
   hand-copy a second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Small Business Web Design', url: CANONICAL },
];

/* ─── External sources, all fetch-verified 2026-09-26 ───────────────── */
// auDA, com.au domain names: "com.au domain names are for businesses with a
// connection to Australia"; "They can be held by commercial entities registered
// to trade in Australia or that hold an Australian trade mark"; registrants
// provide "your ABN, ACN or Australian trademark details"; the name must relate
// to the business name, an acronym, a trade mark, or "A service or product you offer".
const SRC_AUDA_COMAU = 'https://www.auda.org.au/au-domain-names/the-different-au-domain-names/com-au-domain-names/';
// OAIC, small business: "A small business is one with an annual turnover of
// $3 million or less"; some are covered regardless, including health service
// providers and businesses that trade in personal information.
const SRC_OAIC_SMALL = 'https://www.oaic.gov.au/privacy/privacy-for-organisations/small-business';
// OAIC, APP quick reference: APP 1 "open and transparent" management of
// personal information; APP 5 when an entity must tell individuals about collection.
const SRC_APP_QR =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-quick-reference';
// ACCC, online reviews: "It's against the law for a business to create fake or
// misleading reviews or to arrange for others to do so"; may mislead if they
// "suppress or edit negative reviews"; incentives must apply regardless of
// sentiment and be "clearly disclosed".
const SRC_ACCC_REVIEWS = 'https://www.accc.gov.au/business/advertising-and-promotions/online-reviews-for-product-and-services';
// W3C WAI, Australia policy entry: the Disability Discrimination Act 1992 is a
// non-discrimination law covering government, public and private sectors; the
// Australian Human Rights Commission publishes "Guidelines on equal access to
// digital goods and services".
const SRC_W3C_AU = 'https://www.w3.org/WAI/policies/australia';
// W3C WAI, WCAG 2 overview: WCAG 2.2 published 5 October 2023; "content that
// conforms to WCAG 2.2 also conforms to WCAG 2.1 and WCAG 2.0".
const SRC_WCAG = 'https://www.w3.org/WAI/standards-guidelines/wcag/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'choosing', label: 'Choosing a web designer' },
  { key: 'cost',     label: 'Cost, packages & fees' },
  { key: 'build',    label: 'The build' },
  { key: 'rules',    label: 'Rules for Australian websites' },
  { key: 'after',    label: 'Ownership & after launch' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Choosing ──
  { category: 'choosing', question: 'Which web designer is best for small businesses?',
    answer: 'The best one is the one that fits your size and your goal, not the biggest name. Look for four things: a portfolio of small business sites you can click through, the scope written down before you pay, your domain and site registered in your name, and a named person who answers after launch. Ask each option the same questions and compare the written answers.',
    links: [{ href: '/blog/best-web-design-companies-small-business-australia', label: 'Compare Australian web design companies' }] },
  { category: 'choosing', question: 'How do I design a website for my small business?',
    answer: 'Start with the one thing you want visitors to do, such as call, book or request a quote. List the pages that help them do it, usually home, services, about, reviews and contact. Write short, plain answers to the questions customers ask most. Then either build it yourself on a website builder or brief a designer with that page list, your logo, photos and two sites you like.' },
  { category: 'choosing', question: 'What should every website include?',
    answer: 'A clear headline that says what you do and where, your main services, proof such as reviews and real photos, an easy way to contact you on a phone, your business details and ABN where relevant, a privacy policy if you collect personal information, and fast load times. Behind the scenes it needs page titles, analytics that count enquiries, and a secure connection (the padlock in the browser).' },
  { category: 'choosing', question: 'What are the five golden rules of a website?',
    answer: 'There is no official list, but most designers agree on these five. Make the purpose obvious in five seconds. Make it easy to use on a phone. Keep it fast. Write for customers, in plain words, with the most important information first. And give every page one clear next step, such as call, book or get a quote.' },
  { category: 'choosing', question: 'Is web design still worth it in 2026?',
    answer: 'Yes, for most small businesses. People still check a business’s website before they call, and AI assistants such as ChatGPT and Google’s AI Overviews read websites to decide which businesses to mention. A social page or directory listing helps, but you do not control it. A simple, fast site you own is the one place your full offer, reviews and contact details live together.' },
  { category: 'choosing', question: 'Can ChatGPT build me a website?',
    answer: 'ChatGPT can draft text, suggest a page structure and write code for a simple page, and website builders now include AI that produces a first draft in minutes. What it cannot do on its own is know your customers, check your claims are true, register your domain, set up hosting, test on real phones or keep the site secure. AI is a good starting tool; a working business website still needs someone to finish and own it.' },

  // ── Cost ──
  { category: 'cost', question: 'What is the average cost of a website design for a small business?',
    answer: 'It depends on the scope far more than on the designer. The biggest drivers are custom design or a template, the number of unique pages, who writes the words, features such as booking or payments, and moving content from an old site. Our website cost guide for Australia lists typical market ranges from several published sources, with dates and GST notes. We quote a fixed price after a short call.',
    links: [{ href: '/blog/website-cost-australia-2026', label: 'Website cost in Australia (2026)' }] },
  { category: 'cost', question: 'What should a small business website design package include?',
    answer: 'At minimum: design for phones and desktops, a set number of pages, the words on those pages or help writing them, contact or quote forms that email you, basic SEO setup, analytics, a secure connection and a handover session. Check what is not included just as carefully: copywriting, photos, extra revisions, email accounts, hosting after year one and changes after launch are the usual extras.' },
  { category: 'cost', question: 'Is affordable website design for small business worth it?',
    answer: 'Sometimes. A low-cost template site is fine to test an idea or to get a basic online presence quickly. It becomes expensive when the domain is not in your name, the site is slow, nobody answers after launch, or you have to rebuild within a year. Judge an affordable quote by what you own at the end and what happens in month two, not only the launch price.' },
  { category: 'cost', question: 'Is there a monthly fee to have a website?',
    answer: 'Usually, yes. Every website has running costs: the domain name renewal, hosting, and often a business email service. Website builders bundle hosting into a monthly subscription. A custom site pays hosting separately. Many businesses also pay for a care plan that covers updates, backups, security and small changes. Ask for all running costs in writing before you sign.',
    links: [{ href: '/au/website-maintenance', label: 'Website maintenance in Australia' }] },

  // ── Build ──
  { category: 'build', question: 'How long does it take to build a small business website?',
    answer: 'With FactoryJet, sites of up to five pages have 7-day delivery once we have your content, photos and logo. Larger sites with service pages for each suburb or trade, a blog, online booking or payments take a few weeks. The slowest part is usually gathering words and photos, so we send a checklist on day one.' },
  { category: 'build', question: 'Do I need an ABN to start a website?',
    answer: 'You do not need an ABN to build a website, but you do to register most com.au domain names. auDA, which runs the .au domain, says com.au names are for businesses with a connection to Australia, and registrants provide an ABN, ACN or Australian trade mark. The name must also relate to your business name, an acronym, your trade mark, or a product or service you offer.' },
  { category: 'build', question: 'Which website platform is best for small business?',
    answer: 'It depends on who will update the site and what it must do. Website builders such as Squarespace or Wix suit owners who want to edit everything themselves. WordPress suits businesses that publish often or want many plugins. A custom-coded site suits businesses that care most about speed and control. Online stores need an ecommerce platform such as Shopify. We recommend one in writing before we quote.' },
  { category: 'build', question: 'Do you write the content for my website?',
    answer: 'Yes, if you want us to. Most owners know their business well but find it hard to write about it. We interview you for about 30 minutes, then write plain, short copy that answers what customers ask, and you approve every word. You supply the facts: services, service areas, licences, opening hours and real photos. We never invent reviews, awards or numbers.' },
  { category: 'build', question: 'Will my new website show up on Google?',
    answer: 'It will be set up so Google can find and understand it: page titles, descriptions, headings, schema markup, a sitemap and a Google Search Console connection. Ranking for competitive searches takes longer and depends on your content, reviews, Google Business Profile and links from other sites. If you need that growth work, it is a separate SEO service.',
    links: [{ href: '/au/small-business-seo', label: 'Small business SEO in Australia' }, { href: '/au/local-seo', label: 'Local SEO' }] },
  { category: 'build', question: 'Can you redesign my existing small business website?',
    answer: 'Yes. A redesign starts with what already works: pages that rank, pages that bring enquiries and links other sites point to. We keep those addresses or redirect them properly, so you do not lose search traffic at launch. We review the words and structure before we design anything.' },

  // ── Rules ──
  { category: 'rules', question: 'Does my small business website need a privacy policy?',
    answer: 'If your business is covered by the Privacy Act, you must manage personal information openly and tell people about what you collect, which in practice means a privacy policy and a notice on forms. The OAIC says businesses with annual turnover of $3 million or less are generally exempt, but some are covered regardless of size, including health service providers. We add one either way, because contact forms collect personal information.' },
  { category: 'rules', question: 'Does my website need to meet accessibility standards?',
    answer: 'Australia’s Disability Discrimination Act 1992 applies to the private sector as well as government, and the Australian Human Rights Commission publishes guidance on equal access to digital services. The international standard is WCAG. We build to WCAG 2.2, which the W3C says also meets 2.1 and 2.0. Accessible sites are also easier for everyone to use on a phone.' },
  { category: 'rules', question: 'Can I put customer reviews and testimonials on my website?',
    answer: 'Yes, if they are real. The ACCC says it is against the law for a business to create fake or misleading reviews or arrange for others to do so, and that removing or editing genuine negative reviews can mislead. If you offer an incentive for reviews, it must apply whatever the review says and be clearly disclosed. We only publish reviews you can trace to a real customer.' },
  { category: 'rules', question: 'What are common website red flags when hiring a web designer?',
    answer: 'The domain or hosting registered in the designer’s name, not yours. No written scope. A price that leaves out the words, photos or revisions. A site built on a closed system you cannot move. No portfolio of live sites you can visit. Promises of page-one rankings by a date. And no clear answer to who fixes things after launch.' },

  // ── After ──
  { category: 'after', question: 'Who owns the website and domain once it is built?',
    answer: 'You do. We register or transfer the domain in your business name, set up hosting and analytics in accounts you control, and hand over the logins, code and design files at launch. If you later move to another provider or bring the site in-house, you take everything with you. That is the first thing to confirm with any web designer.' },
  { category: 'after', question: 'What happens after my small business website launches?',
    answer: 'You get a short handover session so you can update text and photos yourself, and we check the site after launch for broken links, forms and speed. After that you choose: look after it yourself, move to a monthly care plan for updates, backups and small changes, or add SEO work to grow enquiries. Nothing is locked in.' },
];

/* ─── Named options in the Australian market (ItemList).
       Each note is based on the company’s own website, fetched 2026-09-26. ── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. We design and build small business websites with 7-day delivery for sites up to five pages, SEO basics built in, and the domain, site and accounts in your name. No Australian office: we work remotely in Australian hours, founder involved on every project.' },
  { name: 'Magicdust', note: 'A small business web design company that says it has built over 10,000 small business websites since 2006, with offices listed in Mona Vale (Sydney), Brisbane City and Melbourne.' },
  { name: 'Blackbox Design', note: 'A design agency with offices listed in West Perth and Chadstone, Melbourne, that builds small to medium business websites on WordPress, Shopify and BigCommerce.' },
  { name: 'Christom Web Design', note: 'A WordPress web design studio in Collingwood, Melbourne, with a base in Noosa, that publishes named website packages for business websites and ecommerce stores.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only. ───────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Small Business Web Design Australia',
      serviceType: 'Small business website design, build, copywriting help, SEO foundations and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Website design and build for Australian small businesses, from a one-page site to a multi-page site with booking or payments. Sites up to five pages have 7-day delivery. Every site is mobile-first, fast, built with SEO foundations and WCAG 2.2 in mind, and owned by the client.',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    },
    {
      '@type': ['WebPage', 'Article'],
      '@id': CANONICAL,
      url: CANONICAL,
      name: TITLE,
      headline: H1,
      description: DESCRIPTION,
      inLanguage: 'en-AU',
      datePublished: '2026-09-26',
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      author: {
        '@type': 'Person',
        name: 'Bhavesh Barot',
        jobTitle: 'Founder & CEO',
        url: 'https://factoryjet.com/about',
        sameAs: [
          'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
          'https://github.com/factoryjet-tech',
        ],
      },
      publisher: { '@id': 'https://factoryjet.com/#organization' },
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'ItemList',
      '@id': `${CANONICAL}#providers`,
      name: 'Small business web design options in Australia',
      itemListElement: PROVIDERS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
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
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL, languages: { 'en-AU': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Websites for Australian small businesses: clear scope tiers, 7-day delivery for sites up to 5 pages, copy help, SEO basics and a site you own. Built by senior engineers, supported after launch.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'FactoryJet small business web design for Australian businesses' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* What every small business website includes. */
const INCLUDES: { t: string; d: string }[] = [
  { t: 'Custom design for your business', d: 'Designed around your services and your customers, in your colours and with your photos. No recycled template your competitor also uses.' },
  { t: 'Words that answer customer questions', d: 'We interview you and write short, plain copy for every page: what you do, where, for whom, and what happens when someone gets in touch. You approve every word.' },
  { t: 'Built for phones first, and fast', d: 'Most local customers find you on a phone. Every page is designed for small screens first and built for speed, with green Core Web Vitals (Google’s speed and stability scores) as the target.' },
  { t: 'SEO and AI search basics', d: 'Page titles, descriptions, clean headings, schema markup that tells Google and AI assistants what your business does, a sitemap, and a Google Search Console connection.' },
  { t: 'Enquiries that reach you', d: 'Call buttons, quote or booking forms that land in your inbox or CRM, spam protection, and analytics that count enquiries, not only visits. You see which pages bring work.' },
  { t: 'Handover you can use', d: 'A short session on updating text and photos, written notes, and every login in your name: domain, hosting, analytics and the site itself.' },
];

/* Icons and visual-slot subjects for the six include cards (same order as INCLUDES). */
const INCLUDE_ICONS = [
  'M4 4h16v12H4V4Zm4 16h8m-4-4v4',
  'M4 20h4L19 9l-4-4L4 16v4Zm9-13 4 4',
  'M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 15h2',
  'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4',
  'M4 6h16v12H4V6Zm0 0 8 7 8-7',
  'M8 11V7a4 4 0 1 1 8 0v4M6 11h12v9H6v-9Zm6 4v2',
] as const;
const INCLUDE_SUBJECTS = [
  'AI-generated model: a white website layout on a desktop screen with orange accent blocks, sketched wireframe beside it',
  'AI-generated model: a white page card with short text lines and an orange pencil hovering over one line',
  'AI-generated model: a white phone showing a simple business homepage with an orange call button',
  'AI-generated model: a white search results card with one orange result lifted slightly above the others',
  'AI-generated model: an orange enquiry envelope travelling from a small phone into a white inbox tray',
  'AI-generated model: a white key ring with three orange keys labelled only by shape, resting on a closed laptop',
] as const;

/* Scope tiers (packages without prices). */
const TIERS: { row: string; one: string; five: string; grow: string; book: string }[] = [
  { row: 'Pages', one: 'One long page', five: 'Up to 5 pages', grow: '6 to 20 pages', book: 'Any size' },
  { row: 'Typical build time', one: 'Days, once content is in', five: '7-day delivery once content is in', grow: 'A few weeks', book: 'A few weeks, plus testing' },
  { row: 'Suits', one: 'Sole traders, new businesses, a single offer', five: 'Most local service businesses', grow: 'Several services or suburbs, a blog', book: 'Clinics, studios, hire, classes, small shops' },
  { row: 'Copywriting help', one: 'Yes', five: 'Yes', grow: 'Yes, page by page', book: 'Yes' },
  { row: 'Forms and enquiry tracking', one: 'Contact form', five: 'Quote or contact forms', grow: 'Forms per service', book: 'Booking, payments or orders' },
  { row: 'SEO foundations', one: 'Basic', five: 'Full basics', grow: 'Full basics plus service and area pages', book: 'Full basics' },
  { row: 'Integrations', one: 'None needed', five: 'Email, maps, reviews', grow: 'CRM, email marketing', book: 'Booking tool, Stripe, Xero or MYOB' },
];

/* "Which route fits you" self-check. Rendered as <details>, no client component. */
const FIT_CHECK: { q: string; a: string; verdict: string }[] = [
  { q: 'I am just starting out, money is tight, and I mostly need people to be able to find my name and number.', verdict: 'Website builder, for now', a: 'Use a website builder with your own domain name and a simple one-page site. It is quick and cheap to run. Come back to a designer when enquiries grow. We will say the same if you call us.' },
  { q: 'I have a few regular services, customers call or request quotes, and my current site is old, slow or embarrassing.', verdict: 'Small business site, up to 5 pages', a: 'This is the most common fit for us. A focused site of up to five pages, written around the questions customers ask, with a clear call or quote button on every page. Sites of this size have 7-day delivery once your content is in.' },
  { q: 'I serve several suburbs or offer many different services, and I want to show up for each of them.', verdict: 'Growth site with service pages', a: 'You need a page for each main service, and sometimes each area, each with real detail rather than copied text.' },
  { q: 'Customers need to book appointments, pay online or order products.', verdict: 'Site with booking or payments', a: 'Pick the booking or payment tool first, then design around it. Products with stock and shipping need an ecommerce platform, not a shop bolted on.' },
  { q: 'I want someone local I can meet in person over coffee.', verdict: 'A local studio may suit you better', a: 'We work remotely in Australian hours. If a face-to-face relationship matters to you, a studio in your city is a good choice. Our comparison guide lists Australian options.' },
];

/* How the 7-day build runs, from the owner’s side (sites up to 5 pages). */
const BUILD_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Brief call', d: 'A 30-minute call to agree your goal, the page list and the one action you want visitors to take. You send your logo, photos, licence details if relevant, and two sites you like.' },
  { n: '02', t: 'Homepage design', d: 'Your homepage design arrives for approval. This is the main decision point: once the look and structure are right, every other page follows it.' },
  { n: '03', t: 'Words for every page', d: 'We turn your call notes into plain, short copy for each page and send it for you to check. You correct facts; we fix wording.' },
  { n: '04', t: 'Full design and build', d: 'Every page is designed and built, including the parts people skip: contact page, privacy notice, footer details and the thank-you page after a form.' },
  { n: '05', t: 'SEO and tracking', d: 'Page titles and descriptions, schema markup, sitemap, Search Console, analytics with enquiry tracking, and links to your Google Business Profile.' },
  { n: '06', t: 'Your review round', d: 'You click through the whole site on your own phone and send one list of changes. We fix them, then test speed, forms and accessibility.' },
  { n: '07', t: 'Launch and handover', d: 'The site goes live on your domain. A short handover session shows you how to update text and photos, and every login is in your name.' },
];

const LAUNCH_CHECKLIST: { t: string; d: string }[] = [
  { t: 'Say what you do and where, above the fold.', d: 'A visitor should know in five seconds if you can help them.' },
  { t: 'One clear next step on every page.', d: 'Call, book or get a quote. Not five competing buttons.' },
  { t: 'Real proof.', d: 'Genuine reviews, real photos of your work, licences and memberships you actually hold.' },
  { t: 'Your details, consistent everywhere.', d: 'Business name, service area and contact details match your Google Business Profile.' },
  { t: 'A privacy policy and form notice.', d: 'Say what you collect through forms and why.' },
  { t: 'Fast on a phone.', d: 'Test it on mobile data, not only office wifi.' },
  { t: 'Accessible basics.', d: 'Readable contrast, image descriptions, labelled form fields, usable by keyboard.' },
  { t: 'Everything in your name.', d: 'Domain, hosting, analytics and the site itself.' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/websites-for-tradies', t: 'Websites for tradies', d: 'For plumbers, electricians, builders and other trades: licence details, job photos and enquiries sent into your job software.' },
  { href: '/au/dental-website-design', t: 'Dental website design', d: 'Practice websites with online booking and AHPRA-aware copy for Australian dental clinics.' },
  { href: '/au/small-business-seo', t: 'Small business SEO', d: 'Once the site is live, SEO work to grow enquiries from Google and AI search.' },
  { href: '/au/local-seo', t: 'Local SEO', d: 'Google Business Profile, reviews and local pages, so nearby customers find you first.' },
  { href: '/au/website-maintenance', t: 'Website maintenance', d: 'Updates, backups, security and small changes each month, so the site keeps working.' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we build for Australian businesses: websites, ecommerce, AI agents and AI search.' },
];

const DEMAND: { kw: string; v: string; w: string; kd: string }[] = [
  { kw: 'small business web design', v: '720', w: '100%', kd: 'Same demand as "small business website design"' },
  { kw: 'small business website design packages', v: '320', w: '44%', kd: 'Comparing what is included' },
  { kw: 'affordable website design for small business', v: '140', w: '19%', kd: 'Budget-first buyers' },
  { kw: 'small business web design australia', v: '70', w: '10%', kd: 'Wants an Australian provider' },
  { kw: 'small business web development', v: '70', w: '10%', kd: 'Build and features' },
  { kw: 'business websites australia', v: '40', w: '6%', kd: 'Broad research' },
];

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'small-business-web-design';
const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export default function SmallBusinessWebDesignAUPage() {
  return (
    <>
      <script id="ld-au-small-business-web-design" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="aiAgentPage auPage">
      <nav className="crumbs" aria-label="Breadcrumb">
        <div className="wrap">
          {crumbs.map((item, index) => (
            <Fragment key={item.url}>
              {index > 0 && ' / '}
              {index === crumbs.length - 1 ? <b aria-current="page">{item.name}</b> : <a href={item.url}>{item.name}</a>}
            </Fragment>
          ))}
        </div>
      </nav>
      <main id="au-content">

        {/* ═══ HERO (copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Small business web design Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                A website for your small business that is quick to launch, easy to use on a phone and clear about
                what you do. We design it, write the words with you, build in the SEO basics and hand you every
                login. Sites up to five pages have 7-day delivery once your content is in. Tell us about your
                business and we will reply with a scope and a fixed quote.
              </p>
              <HeroInlineForm region="au" source="au_small_business_web_design_hero" submitLabel="Get my website quote" />
            </div>

            <form
              className="specpanel"
              aria-label="What every small business website includes"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="What every small business website includes: fast delivery for small sites, mobile-first design, SEO basics, and every login in the owner's name"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · EVERY SMALL BUSINESS SITE</span>
                <span className="sys"><span>DESIGN</span><span>COPY</span><span>SEO</span></span>
              </div>
              <div className="workflow-controls">
                <label className="workflow-toggle" title="Pause or resume the animation">
                  <input type="checkbox" className="workflow-pause" aria-label="Pause animation" />
                  <svg className="pause-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="M5 3v10M11 3v10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                  <svg className="play-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>
                </label>
                <button type="reset" className="workflow-replay" aria-label="Replay animation" title="Replay animation">
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6a5 5 0 1 1 0 4M3 2v4h4" /></svg>
                </button>
              </div>
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what is included">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="sbwd-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={INCLUDE_ICONS[0]} /></svg></span>
                  <span className="idx">sites up to five pages</span>
                  <span className="title">Designed, written and built</span>
                  <span className="tag">7 days</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="sbwd-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={INCLUDE_ICONS[2]} /></svg></span>
                  <span className="idx">phones first, built for speed</span>
                  <span className="title">Mobile-first and fast</span>
                  <span className="tag">Core Web Vitals</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="sbwd-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={INCLUDE_ICONS[3]} /></svg></span>
                  <span className="idx">titles, schema, sitemap, analytics</span>
                  <span className="title">SEO basics built in</span>
                  <span className="tag">Included</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="sbwd-step" value="4" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={INCLUDE_ICONS[5]} /></svg></span>
                  <span className="idx">domain, hosting, site, analytics</span>
                  <span className="title">Every login in your name</span>
                  <span className="tag">Yours</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · Your domain is registered in your business name, never ours.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
              { v: '7 days', t: 'delivery for small business sites of up to five pages, once your content is in', s: 'Website sizes', u: '#packages' },
              { v: '97%', t: 'of FactoryJet projects delivered on time', s: 'How the build runs', u: '#how-we-build' },
              { v: 'ABN', t: 'or ACN or Australian trade mark needed to register a com.au domain', s: 'auDA, com.au names', u: SRC_AUDA_COMAU },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...(r.u.startsWith('http') ? extLink : {})}>{r.s}</a></div>
                <div className="v">
                  <strong className={/\d/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />26 September 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST (GEO) → facts ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What does small business web design include, and what should you expect to get?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">Small business web design is a website planned, written and built for one job: turning
                    visitors into calls, bookings or quote requests.</span> For most Australian small businesses that means
                    one to five clear pages, designed for phones first, with your services, service area, real reviews
                    and an obvious way to get in touch, plus the SEO basics so Google and AI assistants understand it.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms you will see in every quote</div>
                    <p>
                      A <b>domain</b> is your web address, such as yourbusiness.com.au. <b>Hosting</b> is the
                      computer that stores your site and shows it to visitors, usually paid monthly or yearly. A{' '}
                      <b>CMS</b> (content management system) is the editor you log in to when you want to change text
                      or photos yourself. Ask who owns each of the three before you sign anything.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Most small business owners do not need a big website. They need one that loads fast on a phone,
                    says what they do in plain words, proves they are real, and makes it easy to get in touch. Extra
                    pages and animations push quotes up but rarely bring more enquiries.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="Over the shoulder of the owner of a small Australian café or florist at her counter, reviewing her new website homepage on a laptop that faces her, customers blurred in the background; no readable text or logos" />
            </div>
          </div>
        </section>

        {/* ═══ WHICH PAGE IS FOR YOU → ruled rows ═══ */}
        <section className="section platforms" id="scope">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">You want to hire, not research</div>
                <h2>This page is for owners ready to get a small business website built</h2>
              </div>
              <p>
                If you are still comparing providers, our guide to the{' '}
                <a href="/blog/best-web-design-companies-small-business-australia">best web design companies for small business in Australia</a>{' '}
                lists the options honestly, including us. Everything else on this page is about getting your site
                scoped, built and launched.
              </p>
            </div>
            <div className="eyebrow plat-label">Quick guide</div>
            <div className="platlist" role="list">
              <div className="plat" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Comparing web design companies</h3></div><p className="plat-build">shortlisting, pricing research</p><p className="plat-build"><a href="/blog/best-web-design-companies-small-business-australia">Comparison guide</a></p></div>
              <div className="plat plat-own" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Getting a small business website built</h3></div><p className="plat-build">local services, sole traders, small teams</p><p className="plat-fit">This page</p></div>
              <div className="plat" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Trade businesses</h3></div><p className="plat-build">plumbers, electricians, builders</p><p className="plat-build"><a href="/au/websites-for-tradies">Tradie websites</a></p></div>
              <div className="plat" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>Selling products online</h3></div><p className="plat-build">stock, shipping, payments</p><p className="plat-build"><a href="/au/shopify-development">Shopify stores</a></p></div>
              <div className="plat" role="listitem"><span className="capid">05</span><div className="plat-name"><h3>Everything we build in Australia</h3></div><p className="plat-build">ecommerce, AI agents, SEO</p><p className="plat-build"><a href="/au">FactoryJet Australia</a></p></div>
            </div>
          </div>
        </section>

        {/* ═══ WHAT’S INCLUDED → capgrid + grouped lists ═══ */}
        <section className="section capabilities" id="included">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What every small business website includes</div>
              <h2>Six things included in every site we build</h2>
              <p className="lead">
                Two quotes for “a five page website” can describe very different jobs. These six are included in
                every small business site we build, whatever the size, so you can compare our quote like for like
                with anyone else’s.
              </p>
            </div>
            <div className="capgrid">
              {INCLUDES.map((j, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={j.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={INCLUDE_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={INCLUDE_SUBJECTS[i]} />
                    <h3>{j.t}</h3>
                    <p>{j.d}</p>
                  </div>
                );
              })}
            </div>
            <div className="agentdir-group chg-group">
              <div className="agentdir-label"><span className="capid">GRP‑01</span><h3>Quoted separately, only if you need it</h3></div>
              <ul className="chg-list">
                <li><span><b>Online booking or payments.</b> Connecting a booking tool, Stripe or a payment gateway, and testing it end to end.</span></li>
                <li><span><b>Moving an old site.</b> Copying content across and redirecting old addresses so you keep search traffic.</span></li>
                <li><span><b>Photography.</b> We can use your photos or arrange images; real photos of your work almost always beat stock.</span></li>
                <li><span><b>Logo and brand.</b> A simple logo refresh if you do not have one you are happy with.</span></li>
                <li><span><b>Extra service or suburb pages.</b> Each with real, specific detail, not copied text with the town name swapped.</span></li>
                <li><span><b>Ongoing SEO.</b> Growth work after launch, separate from the SEO basics every site gets.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ SCOPE TIERS (packages without prices) → comparison table ═══ */}
        <section className="section comparison" id="packages">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Small business website packages</div>
              <div>
                <h2>Four sizes of small business website, and which one fits you</h2>
                <p className="lead">
                  Affordable web design for small business starts with choosing the right size. Most “small
                  business website design packages” fall into four sizes. We scope every site to one of
                  these, then quote a fixed price for it after a short call. The table compares what changes from one
                  size to the next; prices depend on your scope, so they are in the cost guide, not here.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What changes</th>
                    <th>One-page site</th>
                    <th className="fj">Small business site</th>
                    <th>Growth site</th>
                    <th>Site with booking or payments</th>
                  </tr>
                </thead>
                <tbody>
                  {TIERS.map((r) => (
                    <tr key={r.row}>
                      <th scope="row">{r.row}</th>
                      <td>{r.one}</td>
                      <td className="fj">{r.five}</td>
                      <td>{r.grow}</td>
                      <td>{r.book}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Want numbers? Our <a href="/blog/website-cost-australia-2026">website cost guide for Australia (2026)</a>{' '}
              lists typical market ranges from several published Australian sources, with dates and GST notes, plus
              a worksheet to estimate your own site. Selling products? See the{' '}
              <a href="/blog/shopify-cost-australia-2026">Shopify cost guide</a> instead.
            </p>
          </div>
        </section>

        {/* ═══ FIT CHECK (<details>) → vlog ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which route fits you?</div>
              <h2>A 30-second check: website builder, small site, growth site, or someone local</h2>
              <p>Tap the line that sounds most like your business. The answer is honest, even when it is not us.</p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A customer at a bus stop in an Australian suburb checking a local business website on her phone before calling, the phone screen facing her; no readable text"
                caption="Most customers check your website on a phone before they call. If it is slow or unclear, they call the next business instead." />
            </div>
            <div className="ventries">
              {FIT_CHECK.map((f) => (
                <details key={f.q} className="ventry">
                  <summary><h3>{f.q}</h3><span className="chev" aria-hidden="true">+</span></summary>
                  <span className="vtag">{f.verdict}</span>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (placeholder) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a row of five small white shopfront models along a street, each with a phone-sized website card in the window, one card lit in orange" />

        {/* ═══ HOW WE BUILD IT → process timeline ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How we build it</div>
                <h2>How a small business website gets built in 7 days</h2>
                <p className="lead">
                  For sites of up to five pages. The seven days are working days once we have your content, and if
                  you go quiet mid-project the clock simply pauses. Open any step to see what happens and what we
                  need from you.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="An Australian small business owner at her kitchen table on a video call with a web designer, a printed homepage design and a phone beside her laptop, the laptop screen facing her; no readable text"
                caption="Day one is a 30-minute call. By day two you are approving a real homepage design, not a mood board." />
            </div>
            <div className="timeline timeline-4">
              {BUILD_STEPS.map((s) => (
                <details key={s.n} className="tnode">
                  <summary>
                    <div className="idx">{s.n}</div>
                    <h3>{s.t}<span className="chev" aria-hidden="true">+</span></h3>
                  </summary>
                  <p>{s.d}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="au-midcta">
          <MidPageCTA
            headline={'Ready for a website that brings in work?'}
            sub={'Tell us what your business does and what your current site gets wrong. On a short call with the founder, we will agree the page list, the right size of site and a fixed quote. No obligation.'}
            label={'Get my website quote'}
          />
        </div>

        {/* ═══ AI AND WEBSITES → definition module ═══ */}
        <section className="definition" id="ai-and-websites">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="illustration" ratio="3:2" className="definition-image"
              subject="AI-generated model: a white website page model with an orange AI assistant chat card beside it, a small human figure checking and correcting a line on the page" />
            <p className="figcap">
              AI can write a first draft of a website in minutes. Checking it, owning it and making it bring enquiries
              is still the job.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Web design and AI in 2026</div>
            <h2>Is web design still worth it when ChatGPT and website builders can make a site?</h2>
            <p>
              For a small business, yes, and AI is part of the reason. Website builders now produce a draft site from
              a few prompts, and ChatGPT can write pages and code. That makes a basic site cheaper than ever. It also
              means thousands of near-identical sites with the same vague wording, which neither customers nor
              search engines remember.
            </p>
            <p>
              AI assistants also read websites. When someone asks ChatGPT, Perplexity or Google’s AI Overviews for a
              plumber, physio or accountant nearby, the answer is built from pages that state plainly what a business
              does, where, and for whom, backed by reviews and consistent details. A clear small business website is
              how you become one of the businesses those answers can name. Our{' '}
              <a href="/au/ai-seo">AI SEO for Australian businesses</a> page explains how that works.
            </p>
          </div>
        </section>

        {/* ═══ AUSTRALIAN RULES → facts + checklist panel + ruled rows ═══ */}
        <section className="section facts" id="rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The rules, in plain English</div>
              <h2>Domain names, privacy, reviews and accessibility: rules for a small business website in Australia</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>Your com.au domain needs your business details.</b> auDA, which runs the .au domain, says com.au
                  names are for businesses with a connection to Australia. When you register one you provide an ABN,
                  ACN or Australian trade mark, and the name must relate to your business name, an acronym of it, your
                  trade mark, or a product or service you offer. Register it in your business’s name, not your web
                  designer’s.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Privacy, if you are covered.</b> The Privacy Act and its Australian Privacy Principles require
                  covered businesses to manage personal information openly (APP 1) and tell people when and why it is
                  collected (APP 5). The OAIC says businesses with annual turnover of $3 million or less are generally
                  exempt, but some are covered regardless of size, including health service providers and businesses
                  that trade in personal information. A contact form collects names, emails and phone numbers, so we
                  add a privacy policy and a short form notice to every site.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Reviews must be real.</b> The ACCC says it is against the law for a business to create fake or
                  misleading reviews or arrange for others to do so. Removing or editing genuine negative reviews can
                  also mislead, and any incentive for a review must apply whatever the review says and be clearly
                  disclosed. We only publish reviews you can trace to a real customer.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <p>
                    <b>Accessibility is part of the job.</b> The Disability Discrimination Act 1992 covers the private
                    sector as well as government, and the Australian Human Rights Commission publishes guidelines on
                    equal access to digital goods and services. The working standard is WCAG. We build to WCAG 2.2,
                    which the W3C says also meets WCAG 2.1 and 2.0.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_AUDA_COMAU} {...extLink}>auDA, com.au domain names</a>;{' '}
                    <a href={SRC_OAIC_SMALL} {...extLink}>OAIC, small business</a>;{' '}
                    <a href={SRC_APP_QR} {...extLink}>OAIC, APP quick reference</a>;{' '}
                    <a href={SRC_ACCC_REVIEWS} {...extLink}>ACCC, online reviews</a>;{' '}
                    <a href={SRC_W3C_AU} {...extLink}>W3C WAI, Australia accessibility policy</a>;{' '}
                    <a href={SRC_WCAG} {...extLink}>W3C WAI, WCAG 2 overview</a>.
                    This is general information, not legal advice.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">8 things every small business website needs before launch</div>
                <ol className="au-numlist">
                  {LAUNCH_CHECKLIST.map((s) => (
                    <li key={s.t}><span><b>{s.t}</b> {s.d}</span></li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ AFTER LAUNCH + DEMAND → ruled rows + split ═══ */}
        <section className="section platforms" id="after-launch">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">After launch</div>
                <h2>Three ways to look after your small business website</h2>
              </div>
              <p>
                A website is not finished on launch day. Choose the level of help that suits you, month to
                month, with nothing locked in.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Run it yourself.</h3></div><p className="plat-build">You get the handover session, written notes and every login. Update text and photos when you like, and call us for bigger changes.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Care plan.</h3></div><p className="plat-build">Updates, backups, security checks, uptime monitoring and a set amount of small changes each month. See <a href="/au/website-maintenance">website maintenance</a>.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Grow enquiries.</h3></div><p className="plat-build">SEO, Google Business Profile work and new service pages to bring more of the right visitors. See <a href="/au/small-business-seo">small business SEO</a>.</p></div>
            </div>
            <div className="au-split">
              <div>
                <p>
                  What moves the price of a small business website: how many unique page designs it needs, who
                  writes the words, features such as booking or payments, content moved from an old site, and the
                  support you want afterwards. For typical Australian market ranges, see our{' '}
                  <a href="/blog/website-cost-australia-2026">website cost guide</a>. We have a 97% on-time delivery
                  record, and every quote is a fixed price, agreed before work starts.
                </p>
                <ModalCTAButton label="Get my website quote" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="demand">
                <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                <ul>
                  {DEMAND.map((r) => (
                    <li key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </li>
                  ))}
                </ul>
                <p className="demand-src">Source: DataForSEO, Australia, September 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROVIDER LIST (self-disclosure, ItemList from PROVIDERS) → ruled rows ═══ */}
        <section className="section platforms" id="providers">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>Small business web designers Australians compare</h2>
              </div>
              <p>
                We are one option, not the only one. These are Australian small business web designers that appear
                in Australian search results for small business web design. Each note is based on what the company
                says on its own website. For a longer list, read our{' '}
                <a href="/blog/best-web-design-companies-small-business-australia">comparison guide</a>.
              </p>
            </div>
            <div className="platlist" role="list">
              {PROVIDERS.map((p, i) => (
                <div key={p.name} className={p.name === 'FactoryJet' ? 'plat plat-2col plat-own' : 'plat plat-2col'} role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{p.name}</h3>{p.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div>
                  <p className="plat-build">{p.note}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Options named from live Australian Google results for small business web design queries, September 2026. Notes reflect each company’s own website on 26 September 2026. Listing is not endorsement.
            </p>
            <div className="au-panel au-panel-wide">
              <div className="eyebrow">Questions to ask any web designer, including us</div>
              <ol className="au-numlist">
                <li><span><b>Whose name is the domain registered in?</b> It should be your business, with you holding the login.</span></li>
                <li><span><b>What exactly is included?</b> Pages, words, photos, revisions, forms, SEO setup, hosting. Get it in writing.</span></li>
                <li><span><b>Can I see three live small business sites you built?</b> Open them on your phone and check how fast they load.</span></li>
                <li><span><b>What are the running costs after launch?</b> Domain, hosting, email, licences and support, per month or year.</span></li>
                <li><span><b>Can I move the site if I leave?</b> Ask what you take with you: files, content, logins.</span></li>
                <li><span><b>Who do I contact when something breaks?</b> A named person, and how quickly they reply.</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Beyond the website</div>
              <h2>Websites for your industry, and what comes after launch</h2>
              <p>
                A small business site is often the first thing we build for a business. These pages cover specific
                industries and the work that helps a site bring more enquiries over time, from the same team.
              </p>
            </div>
            <ul className="agentdir-grid">
              {SIBLINGS.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>
                    <span className="agentdir-t">{s.t}</span>
                    <span className="agentdir-l">{s.d}</span>
                    <span className="agentdir-go" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ FAQ (same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="Small business web design questions Australian owners ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>A small business website that is clear, fast and yours</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                business, the pages you need and the right size of site, then sends a fixed quote. No spam, no
                obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Get my website quote" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/blog/website-cost-australia-2026">Read the website cost guide</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
