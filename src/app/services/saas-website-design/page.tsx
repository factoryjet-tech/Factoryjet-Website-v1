import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/saas-website-design: US SaaS marketing-site design page.

   Intent owned by THIS page:
     saas website design (390 a month, KD 15) · saas website design agency ·
     saas website design examples · saas website design ideas ·
     saas website design templates · saas landing page design ·
     what makes a good saas landing page · how to design a saas website.

   Does NOT own: building the software itself (/services/web-application-development),
   generic marketing sites (/services/web-design), rebuilds of an existing site
   (/services/website-redesign), or search work (/services/seo, /services/ai-seo).
   Each is linked rather than duplicated.

   Build rules honoured: no em dashes, no currency figures anywhere, plain <img>
   only, FinalCTA (never GetFreeQuoteCTA), exactly one dark section (the closing
   FinalCTA), no shared files touched, canonical declared inline rather than via
   hreflangMap. Cost questions are answered with scope drivers, never a number.

   Schema: WebPage + speakable, Service, ItemList (build checklist), ItemList
   (the live SERP set), FAQPage derived from FAQ_ITEMS, BreadcrumbList.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/services/saas-website-design';
const REVIEWED_DATE = 'August 12, 2026';

const ORANGE = '#F05A28';
const ORANGE_DARK = '#B23E13';
const CREAM = '#FAFAF7';
const PEACH = '#FAEDE5';
const GREEN = '#0E5C46';
const GREEN_BRIGHT = '#0C7150';
const GREEN_SOFT = '#DCEFE6';
const LAV = '#5046C8';
const LAV_SOFT = '#ECEAFB';

/* ─────────────────────────────────────────────────────────────────────────────
   Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'SaaS Website Design: Marketing Sites That Sell Software | FactoryJet',
  description:
    'SaaS website design for a product nobody can pick up and hold. Free-trial and demo funnels built as two motions, a pricing page that sorts buyers, docs and changelog treated as search assets, and integration and security pages that clear procurement.',
  keywords: [
    'saas website design',
    'saas web design',
    'saas website design agency',
    'saas website design company',
    'saas website design examples',
    'saas website design ideas',
    'saas website design templates',
    'saas website design services',
    'saas landing page design',
    'saas marketing website',
    'saas website redesign',
    'b2b saas website design',
    'saas homepage design',
    'saas pricing page design',
    'how to design a saas website',
    'what makes a good saas landing page',
    'saas website examples',
    'software company website design',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'SaaS Website Design: Marketing Sites That Sell Software | FactoryJet',
    description:
      'The marketing site that sells your software, not the software itself. Trial and demo funnels, a pricing page that sorts buyers, docs and changelog as search assets, and procurement-ready security pages.',
    url: PAGE_URL,
    images: [
      {
        url: 'https://factoryjet.com/images/us/saas-website-design/hero.webp',
        width: 1440,
        height: 864,
        alt: 'Two colleagues reviewing a web page layout on a large wall display in a bright studio',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Website Design: Marketing Sites That Sell Software | FactoryJet',
    description:
      'Most SaaS sites read identically because they all shop the same inspiration galleries. Here is what a SaaS marketing site actually has to do instead.',
    images: ['https://factoryjet.com/images/us/saas-website-design/hero.webp'],
  },
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Four jobs a SaaS marketing site has that other marketing sites do not.
   Pricing structure and the docs/changelog pair are covered in full by their
   own sections below, so they are not repeated as cards here.
───────────────────────────────────────────────────────────────────────────── */

type Difference = { tag: string; title: string; body: string; tint: string; accent: string };

const DIFFERENCES: ReadonlyArray<Difference> = [
  {
    tag: '01',
    title: 'The product is invisible',
    body:
      'A furniture company photographs the chair. You are selling something that exists only as pixels behind a login, so there is nothing to photograph. Most SaaS sites give up here and describe the software in adjectives. The fix is not a prettier screenshot. It is showing the software finishing one specific job the reader recognises as their own Tuesday.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '02',
    title: 'Two funnels, running at once',
    body:
      'Start free trial and Book a demo are not two buttons, they are two businesses. A trial says the product has to teach itself in ten minutes with nobody in the room. A demo says a human explains it and the site only has to earn the meeting. Both in one hero, at equal weight, usually gets less of both.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '03',
    title: 'Activation is part of the site',
    body:
      'For a self-serve product the marketing site does not end at the signup form. The form, the first empty screen and the first five minutes are all still selling. If the site promises a workflow and the empty product asks for a data import first, you have built a trial that churns on day one.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '04',
    title: 'You are selling to people you never meet',
    body:
      'The champion who loves your product still has to get past a security reviewer, a procurement officer and someone in finance who has never heard of you. They do not book demos. They read your integrations page, your security page and your terms at eleven at night. If those pages are missing, the deal stalls silently.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Build checklist (also powers the ItemList schema)
───────────────────────────────────────────────────────────────────────────── */

type Deliverable = { n: string; title: string; body: string };

const DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    n: '01',
    title: 'Name the job before you design the hero',
    body:
      'Not the category, the job. Scheduling software for clinics is a category. Stop the front desk rebooking no-shows by hand is a job. Only one of those survives contact with a real buyer.',
  },
  {
    n: '02',
    title: 'Pick the primary motion, then build the second on purpose',
    body:
      'Decide whether the site mainly feeds a trial or a sales team. The other path still exists, it just gets its own page rather than an equal button in the hero.',
  },
  {
    n: '03',
    title: 'Show the product doing the work, not floating at an angle',
    body:
      'A tilted screenshot with a blur behind it tells the reader nothing. An annotated sequence of the real screens, in the order a user hits them, tells them whether this fits. Tours beat video, video beats a static image.',
  },
  {
    n: '04',
    title: 'Design the pricing page around the unit you charge on',
    body:
      'Seats, usage, records, sites, whatever it is. That unit is the story of how your product creates value, so it belongs at the top of the table in plain words, before any tier names appear.',
  },
  {
    n: '05',
    title: 'Design the signup form and the empty first screen together',
    body:
      'The form is normally handed to the app team and quietly grows fields, and every field between the button and the product is a place people leave. The first screen a new account then sees should repeat the hero promise and give one obvious next action.',
  },
  {
    n: '06',
    title: 'Put docs on your own domain and date the changelog',
    body:
      'Docs answer the exact long-tail questions buyers type, so host them where they can be indexed, linked from the marketing site and read without an account. A changelog that stopped six months ago is worse than none, and a current one is a real freshness signal.',
  },
  {
    n: '07',
    title: 'Build one page per integration that actually matters',
    body:
      'People search for your product next to the tool they already use. Integration pages catch that search and answer the first objection a sales call gets. Do the ten real ones properly rather than generating three hundred thin ones.',
  },
  {
    n: '08',
    title: 'Give security and compliance a page a stranger can read',
    body:
      'Where data lives, who the sub-processors are, what certifications you hold or are working toward, and how to report a vulnerability. Written to be forwarded to a reviewer you will never speak to, because that is what happens to it.',
  },
  {
    n: '09',
    title: 'Hold the performance thresholds Google publishes',
    body:
      'Google names good as a Largest Contentful Paint inside 2.5 seconds, an Interaction to Next Paint of 200 milliseconds or less, and a Cumulative Layout Shift of 0.1 or less. A SaaS marketing site loaded with animation libraries fails all three by default.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Comparison table: self-serve vs sales-led vs hybrid
───────────────────────────────────────────────────────────────────────────── */

type CompRow = { label: string; selfserve: string; salesled: string; hybrid: string };

const COMPARISON_ROWS: ReadonlyArray<CompRow> = [
  {
    label: 'Who the homepage talks to',
    selfserve: 'The person who will use it today',
    salesled: 'The person who has to justify it upward',
    hybrid: 'Both, on separate paths from the hero',
  },
  {
    label: 'Primary call to action',
    selfserve: 'Start free, no card',
    salesled: 'Book a demo, qualified form',
    hybrid: 'Trial first, demo offered on the way out',
  },
  {
    label: 'What the pricing page does',
    selfserve: 'Sorts people into a plan by themselves',
    salesled: 'Sets an anchor and starts the conversation',
    hybrid: 'Self-serve tiers plus one Talk to us column',
  },
  {
    label: 'Where the site hands off',
    selfserve: 'To the empty first screen of the product',
    salesled: 'To a calendar and a human',
    hybrid: 'To whichever one the visitor picked',
  },
  {
    label: 'What docs are for',
    selfserve: 'Onboarding and search traffic',
    salesled: 'Proof of depth during evaluation',
    hybrid: 'Both, and they carry most organic traffic',
  },
  {
    label: 'What kills it',
    selfserve: 'A signup form that grew extra fields',
    salesled: 'A site that will not say what it does',
    hybrid: 'Two funnels fighting in the same hero',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Who actually ranks for this query today (also powers the second ItemList)
───────────────────────────────────────────────────────────────────────────── */

type Rival = { domain: string; note: string; detail: string };

const RIVALS: ReadonlyArray<Rival> = [
  {
    domain: 'saaspo.com',
    note: 'Position one, and it is a gallery',
    detail:
      'A curated archive of SaaS site screenshots, searchable by section. The best place to see what the category currently looks like, and the engine that makes it look like one thing.',
  },
  {
    domain: 'saaslandingpage.com',
    note: 'The landing page specialist archive',
    detail:
      'Same idea, narrowed to landing pages and organised by industry. Fifty hero layouts side by side before a design sprint. It will not tell you which one suits your motion.',
  },
  {
    domain: 'webflow.com',
    note: 'A platform ranking with a roundup',
    detail:
      'A long examples post that ranks well and quietly sells the builder underneath it. A reminder that most of what ranks for this term is content marketing by tool vendors, not design teams.',
  },
  {
    domain: 'dribbble.com',
    note: 'Concept work, not shipped work',
    detail:
      'Beautiful, and largely unbuilt. Dribbble rewards the frame, not the funnel, so trending layouts often fall apart the moment a real pricing table and a real nav have to fit.',
  },
  {
    domain: 'framer.com',
    note: 'Templates you can ship this week',
    detail:
      'If you are pre-revenue and need something live, a good template on a fast builder beats a slow custom build. We say that on a first call, not after you have paid us.',
  },
  {
    domain: 'parallelhq.com',
    note: 'The agency roundup that ranks',
    detail:
      'A best SaaS website design agencies list, worth reading precisely because we are not on it. Roundups shape who gets shortlisted, and being absent is a real gap on our side, not a conspiracy.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data: 21 items across 5 categories, grounded in live US People-Also-Ask
   and related-search data for this query. Answers run 45 to 55 words and lead
   with the answer. The visible lead copy below states the same count.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'SaaS site basics' },
  { key: 'landing', label: 'Landing pages & templates' },
  { key: 'design', label: 'Design decisions' },
  { key: 'build', label: 'Building & scope' },
  { key: 'category', label: 'SaaS as a category' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── SaaS site basics ───────────────────────────────────────────────── */
  {
    category: 'basics',
    question: 'How is a SaaS website different from a normal business website?',
    answer:
      'A normal business site describes a service and asks for an enquiry. A SaaS site has to demonstrate a product nobody can touch, hand people into a trial, survive a procurement review it never sees, and carry a documentation library that often outranks the homepage.',
  },
  {
    category: 'basics',
    question: 'How to build a SaaS website?',
    answer:
      'Write the job your software does in one sentence a customer would recognise. Decide whether the site feeds a trial or a sales team. Design the pricing page around the unit you charge on. Then build what unblocks the rest of the buying committee: integrations, security, docs and a dated changelog.',
  },
  {
    category: 'basics',
    question: 'Do I need a website if I have a landing page?',
    answer:
      'For a paid campaign or a waitlist, one landing page is fine and often better. For a real product you need a site, because a landing page cannot hold documentation, integrations, a security page, a changelog or the long-tail content that brings organic traffic. Grow it into a site once you have paying customers.',
  },
  {
    category: 'basics',
    question: 'Do you build the software as well, or only the marketing site?',
    answer:
      'Both, but as separate engagements with separate teams. This page covers the marketing site that sells the product. If you need the product itself built, an MVP, a portal or a dashboard, that is our web application development service, and it is a different scope, timeline and skill set.',
  },
  {
    category: 'basics',
    question: 'How long does a SaaS website design project take?',
    answer:
      'A focused marketing site with a homepage, a small set of feature pages, pricing and the trust pages usually runs in weeks rather than months. What stretches it is not design, it is decisions: who the site is for, which motion it serves, and what the plan structure is.',
  },

  /* ── Landing pages & templates ──────────────────────────────────────── */
  {
    category: 'landing',
    question: 'What is a SaaS landing page?',
    answer:
      'A single page built for one audience and one action, usually starting a trial or booking a demo. No navigation competing with the call to action, one clear promise at the top, evidence in the middle, and the same action repeated on the way down. It does not have to serve everyone.',
  },
  {
    category: 'landing',
    question: 'What makes a good SaaS landing page?',
    answer:
      'A first screen that names the job rather than the category. Proof a real person already got that outcome. A view of the actual product doing the work. One action, repeated. Most weak SaaS landing pages are not badly designed, they are trying to say four things at once.',
  },
  {
    category: 'landing',
    question: 'Should I use a SaaS website template?',
    answer:
      'If you are pre-revenue and still learning who the buyer is, yes. A good template on a fast builder gets you live in days, and you will rewrite the copy three times anyway. Move to a custom build when the template blocks a real pricing structure, docs or integration pages.',
  },
  {
    category: 'landing',
    question: 'Are free SaaS website templates worth it?',
    answer:
      'Worth it for validation, rarely worth it after that. Free templates tend to carry heavy page weight, generic layouts that fifty other startups also picked, and licence terms worth reading properly. Use one to test whether anyone wants the product, and replace it once someone does.',
  },

  /* ── Design decisions ───────────────────────────────────────────────── */
  {
    category: 'design',
    question: 'Why do all SaaS websites look the same?',
    answer:
      'Because the reference set is a closed loop. Ten of the twelve US results for this term are inspiration galleries, template libraries or example roundups. Designers shop them, ship the forty-first version of what they saw, and submit it back. The way out is designing from the buyer and the sales motion.',
  },
  {
    category: 'design',
    question: 'How should a SaaS pricing page be structured?',
    answer:
      'State the unit you charge on first, in plain words. Show three or four columns with one anchored as the recommended plan. Keep each card short enough to scan and put the full comparison table below it. Finish with the objections your sales team hears most.',
  },
  {
    category: 'design',
    question: 'Should I put pricing on my website at all?',
    answer:
      'Almost always yes, at least in structure. Hiding it filters out serious buyers who will pick a competitor who told them. If your deals are genuinely custom, publish the model rather than the number: what you charge on, what changes it, and which plan suits which size of team.',
  },
  {
    category: 'design',
    question: 'How many pages does a SaaS marketing site need?',
    answer:
      'Fewer than most teams build. A homepage, one page per major job the product does, pricing, about, contact, and the trust set: integrations, security, docs and changelog. Feature pages multiply later based on what people actually search for, not on your internal feature list.',
  },
  {
    category: 'design',
    question: 'How do I show a product that lives behind a login?',
    answer:
      'In descending order of effectiveness: an interactive tour of the real interface, a short silent loop of the actual workflow, an annotated sequence of screens in the order a user meets them, and last a static screenshot. An angled screenshot with nothing labelled shows software exists, not what it does.',
  },

  /* ── Building & scope ───────────────────────────────────────────────── */
  {
    category: 'build',
    question: 'How much does a SaaS website cost?',
    answer:
      'We will not put a figure on a page, because a number written without seeing your situation is aimed at an average rather than at you. What moves scope: how many product jobs need their own page, whether you sell self-serve or through a sales team, and whether docs have to be migrated.',
  },
  {
    category: 'build',
    question: 'How do I choose a SaaS website design agency?',
    answer:
      'Ask three questions. Can they explain your product back to you after one call. Have they shipped a pricing page and a signup flow, not just a homepage. And who personally does the work after the pitch. The visual portfolio is the easiest part to fake and the least predictive.',
  },
  {
    category: 'build',
    question: 'Should the marketing site and the product share a codebase?',
    answer:
      'Usually not. Marketing needs to ship changes daily without a deploy review, and the product needs stability. Keep them separate, share a design token set and a component library so they look like one company, and put real effort into making the seam invisible at the signup handoff.',
  },

  /* ── SaaS as a category ─────────────────────────────────────────────── */
  {
    category: 'category',
    question: 'Is ChatGPT a SaaS?',
    answer:
      'Yes, in the ordinary sense. It is software you access over the internet on a subscription, with no installation and no infrastructure to manage, which is the definition of software as a service. The underlying model is often sold separately as an API, which sits closer to platform territory.',
  },
  {
    category: 'category',
    question: 'Is Netflix a SaaS or PaaS?',
    answer:
      'Neither, strictly. Netflix is a subscription streaming service: what you are buying is content, not software functionality. It runs on cloud infrastructure and feels like SaaS because of the billing model, but SaaS normally means software that does a job for you. Arguments about it come down to delivery model versus what is actually sold.',
  },
  {
    category: 'category',
    question: 'Is SaaS being replaced by AI?',
    answer:
      'It is being reshaped, not replaced. What is under pressure is thin software whose only value was a tidy interface over a simple database, because that is now cheap to rebuild. What holds up owns real workflow depth, proprietary data, integrations and compliance obligations. Generic capability claims have stopped persuading.',
  },
  {
    category: 'category',
    question: 'What SaaS is in high demand?',
    answer:
      'The consistent pattern is vertical depth over horizontal breadth: software built for one industry, doing something regulated, operational or expensive to get wrong. Categories with steady pull include compliance and security tooling, revenue and billing operations, healthcare workflow, and anything that removes a compliance burden a business cannot ignore.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD
───────────────────────────────────────────────────────────────────────────── */

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  dateModified: '2026-08-12',
  name: 'SaaS Website Design: Marketing Sites That Sell Software',
  description:
    'SaaS website design for US software companies: explaining an invisible product, running trial and demo funnels as two separate motions, structuring a pricing page that sorts buyers, and building the docs, integration and security pages that clear procurement.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'SaaS website design' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://factoryjet.com/images/us/saas-website-design/hero.webp',
    width: 1440,
    height: 864,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#what-is-saas-website-design'],
  },
  lastReviewed: '2026-08-12',
  reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SaaS Website Design',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'SaaS Website Design / SaaS Landing Page Design / SaaS Marketing Site Design / B2B SaaS Web Design / SaaS Pricing Page Design / SaaS Website Redesign',
  audience: {
    '@type': 'BusinessAudience',
    name: 'US SaaS and software companies, seed stage through growth stage',
  },
  description:
    'Marketing website design for software companies: product demonstration for a product that cannot be photographed, separate free-trial and demo funnels, pricing page structure, activation and onboarding continuity, documentation and changelog as search and trust assets, and integration and security pages built for procurement review.',
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SaaS website design build checklist',
    itemListElement: DELIVERABLES.map((d) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: d.title, description: d.body },
    })),
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Nine things a SaaS marketing site has to get right',
  description:
    'The build checklist we work through on a SaaS marketing site, in roughly the order the decisions have to be made.',
  numberOfItems: DELIVERABLES.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DELIVERABLES.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: d.title,
    description: d.body,
  })),
};

const rivalListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sites ranking in the United States for saas website design',
  description:
    'The galleries, template libraries, roundups and agencies that appear on the live United States search results for saas website design, with what each is genuinely good for.',
  numberOfItems: RIVALS.length,
  itemListElement: RIVALS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.domain,
    description: r.detail,
  })),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'SaaS Website Design', item: PAGE_URL },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Inline SVG helpers
───────────────────────────────────────────────────────────────────────────── */

function CheckCircle({ fill = GREEN_BRIGHT, size = 20 }: { fill?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill={fill} />
      <path d="M6 10.5l2.5 2.5L14 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function CrossCircle({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 flex-shrink-0">
      <circle cx="10" cy="10" r="9" fill="#D5453F" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function SaasWebsiteDesignPage() {
  return (
    <>
      <script
        id="saas-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="saas-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="saas-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        id="saas-serp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rivalListSchema) }}
      />
      <script
        id="saas-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="saas-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div>
              <p className="fj-eyebrow">SaaS website design &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.6rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                SaaS website design for a product{' '}
                <span style={{ color: ORANGE }}>nobody can hold</span>
              </h1>
              <p
                className="mt-6 max-w-[545px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                Every SaaS site starts with the same problem: the thing you sell is invisible. Most teams
                solve it with adjectives and a tilted screenshot, then wonder why trial signups stall. We
                design the site around the job the software does, the two funnels it feeds, and the page
                where the buyer decides.{' '}
                <b className="font-bold text-fj-ink">The marketing site, not the product.</b>
              </p>
              <HeroInlineForm
                region="us"
                source="services_saas_website_design_hero"
                submitLabel="Get a SaaS site review"
              />
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-fj-body text-base font-semibold text-fj-ink transition-all hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ outlineColor: ORANGE }}
                >
                  Talk to the founder
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href="/services/web-application-development"
                  className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4"
                  style={{ color: ORANGE_DARK }}
                >
                  Need the product built instead?
                </Link>
              </div>
            </div>

            {/* Right: hero image + the live SERP observation this page is built on */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div
                className="overflow-hidden rounded-3xl border"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 24px 60px rgba(20,18,12,0.12)' }}
              >
                <img
                  src="/images/us/saas-website-design/hero.webp"
                  alt="Two colleagues in a bright studio reviewing a web page layout shown on a large wall display, with the same layout mirrored on a laptop"
                  width={1440}
                  height={864}
                  fetchPriority="high"
                  decoding="async"
                  className="block h-auto w-full object-cover"
                />
              </div>

              <div
                className="relative z-10 mx-4 -mt-10 rounded-2xl border bg-white p-5 sm:mx-6 sm:p-6"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 18px 44px rgba(20,18,12,0.10)' }}
              >
                <span className="font-fj-mono text-[10px] uppercase tracking-[0.12em] text-fj-neutral-500">
                  What ranks for this search today
                </span>
                <ul className="mt-3 space-y-2.5">
                  {[
                    { k: 'Inspiration galleries', v: 'positions 1 and 5' },
                    { k: 'Design community feeds', v: 'positions 2 and 9' },
                    { k: 'Example roundup posts', v: 'positions 4, 6 and 12' },
                    { k: 'Template libraries', v: 'positions 7 and 8' },
                  ].map((row) => (
                    <li
                      key={row.k}
                      className="flex items-baseline justify-between gap-3 border-t pt-2.5 first:border-t-0 first:pt-0"
                      style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                    >
                      <span className="font-fj-body text-[0.875rem] font-bold text-fj-ink">{row.k}</span>
                      <span className="text-right font-fj-mono text-[0.6875rem] text-fj-neutral-600">
                        {row.v}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-fj-body text-[0.75rem] text-fj-neutral-600">
                  Ten of the top twelve US results for this query are places to look at other people&rsquo;s
                  SaaS sites, which is a large part of why they all look the same. US SERP pulled August
                  2026, search volume 390 a month, keyword difficulty 15 out of 100.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. ANSWER-FIRST BLUF ────────────────────────────────────── */}
        <section id="answer-first" className="pb-14 md:pb-16">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div
              className="rounded-2xl bg-white p-7 md:p-9"
              style={{ borderLeft: `5px solid ${ORANGE}`, boxShadow: '0 12px 34px rgba(20,18,12,0.06)' }}
            >
              <p className="font-fj-mono text-[11px] uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                Short answer
              </p>
              <h2
                id="what-is-saas-website-design"
                className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink"
                style={{ letterSpacing: '-0.02em' }}
              >
                What is SaaS website design?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">
                  SaaS website design is the design of the marketing site that sells a software subscription,
                </b>{' '}
                not the design of the software itself. It has to explain a product the buyer cannot touch, run
                a free-trial funnel and a demo funnel at the same time, and make the pricing page answer one
                question: which plan am I?
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                Almost every other decision follows from that. Which motion you serve decides the homepage.
                The unit you charge on decides the pricing page. Whether a stranger in a security review
                finds what they need decides whether your best deals close.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                One thing this page is not. If you need the software built, the portal, the dashboard, the
                MVP, that lives on our{' '}
                <Link
                  href="/services/web-application-development"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: ORANGE_DARK }}
                >
                  web application development
                </Link>{' '}
                page. Building the product and building the marketing site that sells it are two teams and
                two sets of decisions. Confusing them is how software companies end up with a good product
                and a website that cannot explain it.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. WHY THEY ALL LOOK THE SAME (the point of view) ────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              An unpopular opinion, with evidence
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Every SaaS website looks the same because the{' '}
              <span style={{ color: ORANGE }}>reference set is a closed loop</span>
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We pulled the live US results for saas website design in August 2026. Ten of the top twelve
              are inspiration galleries, template libraries or best-of roundups. Not a criticism of those
              sites, a description of how the sameness gets manufactured.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  n: 'One',
                  t: 'The loop',
                  b: 'A designer opens a gallery, sees forty variations of one layout, ships the forty-first, and submits it back. The average becomes the standard, and the standard gets reinforced every quarter.',
                },
                {
                  n: 'Two',
                  t: 'Category language, not job language',
                  b: 'The platform for modern teams describes six thousand companies. When you cannot say what your software does in a customer’s own words, an abstract hero is all that is left to write.',
                },
              ].map((c) => (
                <div key={c.n} className="rounded-2xl border p-7" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    {c.n}
                  </span>
                  <h3 className="fj-display mb-2 mt-2 text-[1.125rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {c.t}
                  </h3>
                  <p className="font-fj-body text-[0.9062rem] font-medium leading-[1.6] text-fj-neutral-700">{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. FOUR JOBS A SAAS SITE HAS ────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Four jobs no other marketing site has
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              What a SaaS marketing site has to do that a{' '}
              <span style={{ color: ORANGE }}>normal website never does</span>
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              If an agency shows you the same process deck they use for a law firm and a furniture brand,
              this is the list they have not thought about. Each one changes what gets built and in what
              order.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {DIFFERENCES.map((d) => (
                <div key={d.tag} className="rounded-2xl p-7" style={{ background: d.tint }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: d.accent }}>
                    {d.tag}
                  </span>
                  <h3 className="fj-display mb-2 mt-2 text-[1.125rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {d.title}
                  </h3>
                  <p className="font-fj-body text-[0.9062rem] font-medium leading-[1.6] text-fj-neutral-700">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. TWO FUNNELS (image + comparison table) ────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative mx-auto w-full max-w-[520px]">
              <img
                src="/images/us/saas-website-design/signup-flow.webp"
                alt="Two colleagues mapping a software sign-up journey with paper cards and arrows pinned to a studio wall"
                width={1200}
                height={896}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl border object-cover"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 18px 44px rgba(20,18,12,0.09)' }}
              />
            </div>

            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
                Self-serve or sales-led
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                Free trial and demo are{' '}
                <span style={{ color: ORANGE }}>two different businesses</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                A trial means the product has to teach itself with nobody in the room, so the site stays
                short and the signup form has to be nearly frictionless. A demo means a person does the
                explaining, so the site only has to earn a meeting and can afford long pages that answer
                objections in writing. Opposite design briefs.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  {
                    t: 'The second path gets a page, not a button',
                    s: 'Two equal calls to action in one hero usually reduce both, because the visitor has to choose before they understand',
                  },
                  {
                    t: 'The handoff is part of the design',
                    s: 'For a trial, the first empty screen is still the funnel. For a demo, the calendar and the confirmation email are',
                  },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3.5 rounded-2xl px-5 py-4" style={{ background: CREAM }}>
                    <CheckCircle size={20} />
                    <div className="font-fj-body text-[0.9688rem] font-bold text-fj-ink">
                      {item.t}
                      <small className="mt-0.5 block font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600">
                        {item.s}
                      </small>
                    </div>
                  </li>
                ))}
              </ul>
              {/* Kept short on purpose: the table below carries the full comparison. */}
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-[1180px] px-6 md:px-8">
            <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[820px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of self-serve, sales-led and hybrid SaaS websites across audience, call to
                  action, pricing page role, handoff, documentation and the most common failure.
                </caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Design decision
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em]" style={{ color: ORANGE_DARK }}>
                      Self-serve
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Sales-led
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Hybrid
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 === 1 ? CREAM : '#FFFFFF' }}>
                      <th
                        scope="row"
                        className="border-t p-4 font-fj-body text-[0.875rem] font-bold text-fj-ink"
                        style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                      >
                        {row.label}
                      </th>
                      <td
                        className="border-t p-4 font-fj-body text-[0.875rem] font-medium text-fj-ink"
                        style={{ borderColor: 'rgba(15,15,18,0.08)', background: i % 2 === 1 ? '#F3F8F5' : GREEN_SOFT }}
                      >
                        {row.selfserve}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.salesled}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.hybrid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Scroll sideways on small screens. Most SaaS companies drift into the third column by accident
              rather than choosing it, which is how you end up with a homepage that argues with itself.
            </p>
          </div>
        </section>

        {/* ─── 6. THE PRICING PAGE ─────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The page that decides the deal
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[800px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              A pricing page is not a price list. It is a{' '}
              <span style={{ color: ORANGE }}>sorting question</span>
            </h2>
            <p className="mt-4 max-w-[760px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Visitors arrive asking how much and leave having answered something else: which one of these
              is me. The structure below makes that take fifteen seconds instead of a support ticket. We
              describe structure, never numbers, because your numbers are yours.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  t: 'Lead with the unit, not the tiers',
                  b: 'Say what you charge on before you show a single column: per seat, per active user, per record, per site, per run. That one line is how your product creates value, and getting it wrong is the most expensive mistake here.',
                },
                {
                  t: 'Three or four columns, one anchored',
                  b: 'Fewer than three gives nobody a reference point. More than four turns a decision into homework. One column carries the visual weight and a recommended label, because most people want to be told where they belong.',
                },
                {
                  t: 'Short cards on top, full table below',
                  b: 'The cards sort people. The table underneath confirms a choice already made. If your cards need twelve bullets each, the tiers are not really different.',
                },
                {
                  t: 'The Talk to us column is a qualifier',
                  b: 'An enterprise column with no number is not evasion when it does a job: above a certain size the shape of the deal changes. It becomes evasion when it is the only column on the page.',
                },
                {
                  t: 'End with the objections sales actually hears',
                  b: 'What happens when we exceed the limit. Can we change plan mid-term. What if we add people in month three. These belong under the table, because they stall the decision.',
                },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border bg-white p-6" style={{ borderColor: 'rgba(15,15,18,0.09)' }}>
                  <h3 className="fj-display text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {c.t}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. BUILD CHECKLIST (listicle, powers ItemList) ───────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The build checklist
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[800px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Nine things a SaaS marketing site has to{' '}
              <span style={{ color: ORANGE }}>get right</span>
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              In roughly the order the decisions have to be made. Only three of the nine are visual. If a
              proposal is mostly moodboards and page templates, the expensive decisions are being skipped
              and you will make them yourself later, under deadline.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {DELIVERABLES.map((d) => (
                <li
                  key={d.n}
                  className="flex flex-col rounded-2xl border p-6"
                  style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}
                >
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    {d.n}
                  </span>
                  <h3 className="fj-display mt-2 text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {d.title}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-600">{d.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

    

        <MidPageCTA
          headline={'Visitors not reaching signup?'}
          sub={'Send us your marketing site and your trial flow. We will show you where people drop and what usually fixes it.'}
          label={'Get a free SaaS site review'}
        />

        {/* ─── 8. MID-PAGE CTA (not optional) ──────────────────────────── */}
        <section className="py-12 md:py-14" style={{ background: PEACH }}>
          <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-6 px-6 md:px-8 lg:flex-row lg:items-center">
            <div className="max-w-[640px]">
              <h2 className="fj-display text-[1.5rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.02em' }}>
                Want the honest read on your current SaaS site?
              </h2>
              <p className="mt-2.5 font-fj-body text-[0.9688rem] leading-[1.6] text-fj-neutral-700">
                Send us the URL. We will tell you which motion it is currently serving, whether the pricing
                page sorts anyone, and the two things we would change first. No deck, no discovery phase
                before you get an answer.
              </p>
            </div>
            <ModalCTAButton label="Get a SaaS site review" region="us" modalVariant="default" btnVariant="primary-light" />
          </div>
        </section>

        {/* ─── 9. DOCS, CHANGELOG, INTEGRATIONS, SECURITY ──────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The pages nobody demos
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Docs, changelog, integrations and security are the{' '}
              <span style={{ color: ORANGE }}>rest of the sale</span>
            </h2>
            <p className="mt-4 max-w-[760px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Your champion is not the only person deciding. A security reviewer, someone in procurement and
              an engineer read these four surfaces without contacting you. On most SaaS sites they are
              afterthoughts, which is why deals stall for reasons nobody reports back.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-2xl border bg-white p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.09)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">Documentation is a search asset</h3>
                <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
                  Docs answer the precise long-tail questions buyers type, and they are usually the biggest
                  library of useful writing a software company owns. Three things ruin them: a subdomain
                  nobody links to, a login in front of them, and rendering entirely in the browser. Google
                  says it processes JavaScript in three separate phases, queues pages for rendering, and a
                  page can sit in that queue longer than a few seconds.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    'Docs live on your own domain, linked from main navigation',
                    'Readable without a login, and server-rendered so crawlers see the content',
                    'One canonical version, not five orphaned version trees',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border bg-white p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.09)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">Trust pages that unblock procurement</h3>
                <p className="mt-3 font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
                  These get read at eleven at night by someone you will never speak to, and forwarded as
                  links. Write them for that person, not for your homepage visitor.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    'A dated changelog. One that stopped six months ago is worse than none',
                    'One page per integration that matters, catching people searching for your product beside a tool they already run',
                    'A security page stating where data lives, who the sub-processors are, and how to report a vulnerability',
                    'SoftwareApplication structured data, a Google-supported type most SaaS marketing sites never ship',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} fill={LAV} /> {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10. WHO ELSE RANKS HERE (named, fair, real SERP) ─────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Who else you are looking at
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[800px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              The sites that currently own this search, and{' '}
              <span style={{ color: ORANGE }}>what each is good for</span>
            </h2>
            <p className="mt-4 max-w-[760px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Pulled from the live US results in August 2026. Several are genuinely useful and you should
              open them. We are one option among many.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {RIVALS.map((r) => (
                <div key={r.domain} className="flex flex-col rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold text-fj-ink">{r.domain}</span>
                  <h3 className="fj-display mt-1.5 text-[1.05rem] font-bold" style={{ letterSpacing: '-0.015em', color: ORANGE_DARK }}>
                    {r.note}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{r.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">What we do differently</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'We start from your sales motion and your pricing unit, not from a gallery screenshot',
                    'We build web applications too, so the signup handoff and the empty first screen are designed by people who have shipped both sides',
                    'Docs, changelog, integrations and security pages are in default scope, not a phase two nobody funds',
                    'We will tell you to ship a template first if you are pre-revenue, even though that is not what we are selling',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">Where we honestly stand</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'We are not on the agency roundups that rank for this term. That shapes shortlists and it is a real gap on our side',
                    'If you want a portfolio of forty SaaS logos, specialist SaaS-only studios have more of them than we do',
                    'We are a challenger on domain authority. We compete on the thinking and the build, not on being the biggest name in the results',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 11. FIT CHECK ───────────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Honest fit check
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[740px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              When a custom SaaS site is the{' '}
              <span style={{ color: ORANGE }}>wrong thing to buy</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A strong fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'You have paying customers and the site is now the bottleneck rather than the product',
                    'Your pricing changed, or is about to, and the current page cannot express the new model',
                    'Deals stall in security review and nobody on your side knows which page is missing',
                    'You are moving from sales-led to self-serve, or the reverse, and the site still serves the old motion',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A poor fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'You are pre-revenue and still testing who the buyer is. Ship a template, learn, come back',
                    'The product itself is not built yet. Start with the product, not the site that sells it',
                    'The plan is to rebuild the marketing site inside the product codebase, so marketing needs a deploy to fix a headline',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  If the site is structurally fine and just dated, a{' '}
                  <Link href="/services/website-redesign" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    website redesign
                  </Link>{' '}
                  is the cheaper answer. If the problem is that nobody finds you at all, start with{' '}
                  <Link href="/services/seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    SEO
                  </Link>{' '}
                  instead of a rebuild.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 12. CITATIONS ───────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Check us against the source
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[760px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Where the technical claims on this page{' '}
              <span style={{ color: ORANGE }}>come from</span>
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              You should not take an agency&rsquo;s word for how search engines treat a JavaScript-heavy
              website. Three primary sources back the technical claims above.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  src: 'Google, web.dev',
                  title: 'The Core Web Vitals thresholds',
                  body:
                    'Google publishes the targets directly: Largest Contentful Paint within 2.5 seconds of the page starting to load, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less, measured at the 75th percentile of page loads.',
                  href: 'https://web.dev/articles/vitals',
                },
                {
                  src: 'Google Search Central',
                  title: 'How JavaScript pages get indexed',
                  body:
                    'Google states that it processes JavaScript web apps in three main phases, crawling, rendering and indexing, and that Googlebot queues pages for rendering. A page may stay on that queue for a few seconds but can take longer. This is why client-rendered docs are a risk.',
                  href: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics',
                },
                {
                  src: 'Google Search Central',
                  title: 'SoftwareApplication structured data',
                  body:
                    'Google documents a dedicated software app structured data type, with its own required and recommended properties, that describes an application to search. Most SaaS sites we audit ship generic Organization markup and never use it.',
                  href: 'https://developers.google.com/search/docs/appearance/structured-data/software-app',
                },
              ].map((c) => (
                <div key={c.href} className="flex flex-col rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
                  <span className="font-fj-mono text-[10px] uppercase tracking-[0.1em] text-fj-neutral-600">{c.src}</span>
                  <h3 className="fj-display mt-2 text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {c.title}
                  </h3>
                  <p className="mt-2.5 flex-1 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{c.body}</p>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-fj-body text-[0.8125rem] font-bold underline underline-offset-4"
                    style={{ color: ORANGE_DARK }}
                  >
                    Read the source <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-[840px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Search volume, keyword difficulty and ranking positions quoted here come from DataForSEO,
              United States, August 2026. Results move, so treat the breakdown as a snapshot.
            </p>
          </div>
        </section>

        {/* ─── 13. WHO YOU WORK WITH (E-E-A-T) ─────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: LAV_SOFT }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-[460px]">
              <img
                src="/images/us/saas-website-design/page-plan.webp"
                alt="Three colleagues reviewing printed page-structure sheets pinned to a studio wall in daylight"
                width={1200}
                height={896}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl object-cover"
                style={{ boxShadow: '0 18px 40px rgba(40,30,90,0.18)' }}
              />
            </div>

            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: LAV }}>
                Who you actually work with
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                We build the product side too, so the{' '}
                <span style={{ color: ORANGE_DARK }}>seam disappears</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Most SaaS sites break at the join. The homepage promises one thing, the signup form asks for
                something else, and the first screen inside the product looks like a different company. We
                work on both sides of that line, so the funnel survives the handoff.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { t: 'Founder-led', s: 'The person who scopes the work is the person who does the thinking' },
                  { t: 'Marketing site and web app in one team', s: 'Signup, empty state and onboarding designed with the people who build them' },
                  { t: 'No invented numbers, ever', s: 'No fabricated case studies, no borrowed testimonials, no promised lifts' },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3.5 rounded-2xl bg-white px-5 py-4">
                    <CheckCircle size={20} fill={LAV} />
                    <div className="font-fj-body text-[0.9688rem] font-bold text-fj-ink">
                      {item.t}
                      <small className="mt-0.5 block font-fj-body text-[0.8125rem] font-medium text-fj-neutral-600">
                        {item.s}
                      </small>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-fj-mono text-[0.78rem] text-fj-neutral-600">
                Reviewed &amp; updated {REVIEWED_DATE} &middot; Bhavesh Barot, Founder, FactoryJet
              </p>
              <div className="mt-6">
                <ModalCTAButton label="Talk to the Founder" region="us" modalVariant="default" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 14. RELATED SERVICES (internal links) ───────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Where to go next
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[700px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Related <span style={{ color: ORANGE }}>services</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  label: 'Web application development',
                  href: '/services/web-application-development',
                  desc: 'The product itself: MVPs, portals, dashboards and the software behind the login. The other half of this page.',
                },
                {
                  label: 'Web design',
                  href: '/services/web-design',
                  desc: 'Marketing site design for companies that are not selling a software subscription.',
                },
                {
                  label: 'Website redesign',
                  href: '/services/website-redesign',
                  desc: 'When the structure is sound and the site is dated, out of step with the product, or slow.',
                },
                {
                  label: 'SEO services',
                  href: '/services/seo',
                  desc: 'The organic programme, including turning documentation into a traffic engine.',
                },
                {
                  label: 'AI SEO',
                  href: '/services/ai-seo',
                  desc: 'Getting your product named inside ChatGPT, Perplexity and Google AI Overviews.',
                },
                {
                  label: 'Small business website design',
                  href: '/services/small-business-website-design',
                  desc: 'For early-stage teams that need something live before a full custom build makes sense.',
                },
              ].map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="flex min-h-[168px] flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
                  style={{ border: '1px solid rgba(15,15,18,0.10)', background: CREAM }}
                >
                  <h3 className="fj-display text-[1.15rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {svc.label}
                  </h3>
                  <p className="mt-2 flex-1 font-fj-body text-[0.9062rem] leading-[1.55] text-fj-neutral-600">
                    {svc.desc}
                  </p>
                  <span className="mt-5 font-fj-body text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    Explore &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 15. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="SaaS website design FAQ"
          headline="The questions SaaS founders actually search"
          lead="Twenty-one answers on landing pages and templates, the design decisions that matter, what drives scope, and the category questions people ask alongside this one. If yours is not here, send a short brief."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 16. FINAL CTA (the one dark section) ────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="BEFORE THE NEXT REBUILD"
          headline="Find out what your SaaS site is actually failing at"
          sub="Book a call with the founder. We look at which motion your site serves, whether the pricing page sorts anyone, how your docs and trust pages are set up, and what your Core Web Vitals say. Then we tell you whether a rebuild is right or whether two focused fixes would do it."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See web app development', href: '/services/web-application-development' }}
          objectionHandler="Founder-led. No invented case studies, no promised conversion lifts, and you own the site, the content and the roadmap."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
