import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import HeroInlineForm from '@/components/HeroInlineForm';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/b2b-website-design: US B2B website design service page.

   Intent split (anti-cannibalisation, read this before editing):
     - THIS page owns the B2B MARKETING SITE. Positioning, buying committees,
       procurement and security review, gated vs ungated content, case studies,
       lead capture, sales enablement. Target: "b2b website design" (480/mo,
       KD 1) plus b2b web design / b2b website design agency / b2b web design
       company / best b2b websites / b2b website examples / what makes a good
       b2b website / b2b website vs b2c website / how to design a b2b website.
     - /b2b-ecommerce owns B2B COMMERCE. Trade portals, gated catalogues,
       tiered and contract pricing, net terms, quoting, EDI, punchout, ERP.
       Target there: "ecommerce platform for b2b" (1,900/mo, KD 18) and family.
       Linked from the hero card, the split section and the FAQ. Never merged.
     - /services/web-design owns generic US small business web design.
     - /services/website-redesign owns rebuild-an-existing-site intent.

   Build rules honoured: no em dashes, no currency figures anywhere, plain <img>
   only, FinalCTA (never GetFreeQuoteCTA, never wrapped in its own #final-cta
   div), no TestimonialsSection (its US_STATS hardcodes a currency value), one
   dark section (the closing FinalCTA), inline canonical (no hreflangMap
   import), no shared files touched. Cost-shaped PAA questions are answered with
   scope drivers, never with a number.

   Schema: WebPage + speakable, Service, ItemList (build deliverables), ItemList
   (agency set), FAQPage derived from FAQ_ITEMS, BreadcrumbList. Every const
   below reaches a <script type="application/ld+json"> tag in the render.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/services/b2b-website-design';
const REVIEWED_DATE = 'August 12, 2026';
const PAGE_MODIFIED = '2026-08-12';

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
  title: 'B2B Website Design: Sites Built for Buying Committees | FactoryJet',
  description:
    'B2B website design for US companies that sell to other companies. Built for buying committees, procurement and security review, long sales cycles, and a sales team that needs pages it can send. Founder-led, no invented case study numbers.',
  keywords: [
    'b2b website design',
    'b2b web design',
    'b2b website design agency',
    'b2b web design agency',
    'b2b website design company',
    'b2b web design company',
    'b2b website design services',
    'b2b website development',
    'b2b marketing website',
    'b2b website design examples',
    'best b2b websites',
    'b2b website examples',
    'what makes a good b2b website',
    'b2b website vs b2c website',
    'how to design a b2b website',
    'b2b website redesign',
    'website design for b2b companies',
    'b2b saas website design',
    'b2b manufacturing website design',
    'b2b lead generation website',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'B2B Website Design: Sites Built for Buying Committees | FactoryJet',
    description:
      'B2B website design for US companies selling to other companies. Buying committees, procurement review, gated versus ungated content, case studies that carry the sale, and pages your reps can send.',
    url: PAGE_URL,
    images: [
      {
        url: 'https://factoryjet.com/images/us/b2b-website-design/hero.webp',
        width: 1264,
        height: 848,
        alt: 'Three colleagues reviewing a website page layout on a large wall display in a bright office',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B Website Design: Sites Built for Buying Committees | FactoryJet',
    description:
      'Nobody buys on a B2B website. Its job is to get you shortlisted, survive procurement, and give your sales team something to send. We design for that.',
    images: ['https://factoryjet.com/images/us/b2b-website-design/hero.webp'],
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
   Why a B2B site is a different job (answer-first support tiles)
───────────────────────────────────────────────────────────────────────────── */

type Difference = { tag: string; title: string; body: string; tint: string; accent: string };

const DIFFERENCES: ReadonlyArray<Difference> = [
  {
    tag: '01',
    title: 'Nobody buys on the page',
    body:
      'There is no add-to-cart moment for a machine tool, a compliance platform or a two-year service contract. Nielsen Norman Group makes the point plainly: a B2B site is not the thing that closes the order, so its first job is to survive the screening phase and land on the shortlist. Design the site to be shortlisted, not to convert on the spot, and the whole page order changes.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '02',
    title: 'You are designing for a committee',
    body:
      'A consumer decides alone. A business decision runs through a champion who wants it, a manager who signs, an engineer who has to make it work, and a finance person who compares you to doing nothing. Nielsen Norman Group calls the split choosers and users, and they need different pages. One clever homepage cannot serve four people with four different fears.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '03',
    title: 'Procurement and security read your site too',
    body:
      'Late in a deal, people you have never met open your website looking for a security page, a data processing addendum, a sub-processor list and proof of accessibility conformance. If you sell to US federal agencies, Section508.gov tells vendors to publish an Accessibility Conformance Report and make it easy to find on your own site. Most B2B sites have none of this, and the deal stalls in legal.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '04',
    title: 'Most of your visitors are not buying today',
    body:
      'The person reading you now may sign in eighteen months, or never, or may just be the intern doing the first sweep. A site built only around a demo form treats every one of them as a failure. A site built to teach, to be remembered and to be findable again later treats them as the pipeline they actually are.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '05',
    title: 'Case studies do the selling, not the headline',
    body:
      'Ask any B2B buyer what they read before a call and you get the same answer: the work you did for someone who looked like them. Yet case studies are usually the thinnest, worst-structured pages on a B2B site, buried two levels deep and written as praise instead of evidence. On the sites we build they are a first-class template with their own navigation.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '06',
    title: 'Your own sales team is a user',
    body:
      'Reps send links. Every day, to people who are about to decide. If the only sendable thing on your site is the homepage, your reps are writing their own decks instead, and your positioning quietly forks into a dozen versions. A B2B site should ship pages built to be forwarded and read by someone your rep will never speak to.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Build listicle (also powers the ItemList schema)
───────────────────────────────────────────────────────────────────────────── */

type Deliverable = { n: string; title: string; body: string };

const DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    n: '01',
    title: 'Positioning before pixels',
    body:
      'We start by writing the sentence a buyer would use to describe you to a colleague who was not in the room. If that sentence is generic, no layout saves it. This is the part most web design projects skip, and it is the reason so many B2B sites look fine and say nothing.',
  },
  {
    n: '02',
    title: 'A page per problem, not a page per feature',
    body:
      'Buyers search their problem, not your product taxonomy. So the site tree follows the problems you solve and the situations you solve them in, with the feature detail sitting underneath for the engineer who needs it. This one decision usually doubles the number of queries a B2B site can legitimately rank for.',
  },
  {
    n: '03',
    title: 'Case studies structured as evidence',
    body:
      'Same skeleton every time: the situation, the constraint that made it hard, what we actually changed, and what happened after. Named where the client allows it, anonymised by sector where they do not. We never write a number into a case study that the client has not confirmed, and we will tell you when your proof is too thin to publish yet.',
  },
  {
    n: '04',
    title: 'A kit your champion can forward',
    body:
      'Somebody inside the account has to argue for you in a meeting you are not invited to. Nielsen Norman Group calls this an advocacy kit. In practice it is a one-page summary, a page that answers the objection their boss will raise, and a link that does not require a form. Build it and your champion stops improvising.',
  },
  {
    n: '05',
    title: 'The procurement pages almost nobody builds',
    body:
      'A security overview in plain words. Where data lives and who touches it. A sub-processor list. An accessibility statement and conformance report. Insurance and legal entity details. These pages get almost no traffic and they unblock deals that would otherwise sit in review for a month.',
  },
  {
    n: '06',
    title: 'Gating decided asset by asset',
    body:
      'Nielsen Norman Group is direct about this: search engines usually cannot see content behind a gate, and case studies, FAQs and product specifications do not belong behind one. Gate the deep template or the benchmark study, where someone late in the cycle will trade an email for it. Leave the rest open so it can be found and quoted.',
  },
  {
    n: '07',
    title: 'One short form on the page that matters',
    body:
      'Two fields on the money page beats eleven fields everywhere. Long qualification forms feel efficient to marketing and read as an obstacle course to a director who has four other tabs open. Qualify in the follow-up, or with one well-chosen question, not with a wall of dropdowns.',
  },
  {
    n: '08',
    title: 'Show the shape of your pricing',
    body:
      'Nielsen Norman Group found the same thing across B2B tests: buyers need realistic scenarios even when pricing is genuinely complex. You do not have to publish a rate card. You do have to say what drives the number, what a small engagement looks like next to a large one, and how you charge. Silence reads as expensive and evasive.',
  },
  {
    n: '09',
    title: 'Integration and compatibility, spelled out',
    body:
      'The technical evaluator on the committee has one question: will this fit what we already run. Nielsen Norman Group lists integration, compatibility and regulatory detail as a core B2B content requirement. Naming the systems you connect to, and the ones you do not, is the fastest way to stop wasting everyone’s time.',
  },
  {
    n: '10',
    title: 'A speed budget on the templates reps send',
    body:
      'Google treats an Interaction to Next Paint of 200 milliseconds or less as good responsiveness. That target is easy on a static page and easy to lose on the case study template with an embedded video and three tracking scripts, which happens to be the page your reps send most. We hold the budget where it is actually being spent.',
  },
  {
    n: '11',
    title: 'Written to be quoted, not just ranked',
    body:
      'Google shows an AI Overview on this query today. Being summarised well means answering the question in the first screen, in plain sentences, with the specifics an engine can lift without hedging. We write the informational pages to be quoted and the commercial pages to be clicked, and we measure them separately.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Comparison table: agencies actually ranking for this query
───────────────────────────────────────────────────────────────────────────── */

type CompRow = { label: string; fj: string; windmill: string; nmc: string; bop: string };

const COMPARISON_ROWS: ReadonlyArray<CompRow> = [
  {
    label: 'Position on this query',
    fj: 'Not on page one. We are the challenger here',
    windmill: 'Ranks first with a B2B design examples page',
    nmc: 'Ranks second with a B2B web design page',
    bop: 'Ranks fifth with a B2B design agency page',
  },
  {
    label: 'Where they are strongest',
    fj: 'B2B sites that also have to sell or integrate',
    windmill: 'Industrial, manufacturing and technical firms',
    nmc: 'Custom design and development craft',
    bop: 'B2B branding plus content and search together',
  },
  {
    label: 'Stated focus',
    fj: 'Commerce, AI search and B2B marketing sites',
    windmill: 'Marketing for technical industries, by their own line',
    nmc: 'General web design and development studio',
    bop: 'Technology, fintech, biotech, industrial, energy',
  },
  {
    label: 'Published pricing guidance',
    fj: 'Scoped on a call, fixed proposal before work starts',
    windmill: 'Publishes a pricing page on its own site',
    nmc: 'Contact-led, no public guidance found',
    bop: 'Contact-led, no public guidance found',
  },
  {
    label: 'Trade portal or ordering',
    fj: 'Yes, on our commerce side, linked not merged',
    windmill: 'Lists ecommerce among its services',
    nmc: 'Case by case, not a stated specialism',
    bop: 'Marketing sites rather than ordering systems',
  },
  {
    label: 'Who does the thinking',
    fj: 'The founder scopes it and stays on the account',
    windmill: 'Established team with a defined process',
    nmc: 'Studio team model',
    bop: 'Agency team with named leadership',
  },
  {
    label: 'Authority profile',
    fj: 'Around fifty referring domains. Small and honest about it',
    windmill: 'Long-running domain, top of this result',
    nmc: 'Long-running domain, second on this result',
    bop: 'Long-running domain with a large blog library',
  },
  {
    label: 'Pick them when',
    fj: 'The site has to serve buyers, procurement and search',
    windmill: 'You are a manufacturer and want that fluency',
    nmc: 'Design and build craft is your first criterion',
    bop: 'You want branding and content in one place',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   The agency set on this SERP (also powers the second ItemList)
───────────────────────────────────────────────────────────────────────────── */

type Rival = { domain: string; note: string; detail: string };

const RIVALS: ReadonlyArray<Rival> = [
  {
    domain: 'windmillstrategy.com',
    note: 'Top of this result, and a genuine specialist',
    detail:
      'Ranks first for b2b website design with a page of design examples. Their own site describes them as an industrial manufacturing marketing agency doing modern marketing for technical industries, working in industrial and automation, engineering and technology, and life sciences. If you make something physical and complicated, that fluency is worth a lot and we will say so.',
  },
  {
    domain: 'newmediacampaigns.com',
    note: 'Second, on a straight service page',
    detail:
      'Holds second place with a page titled simply B2B Web Design. Their site sits behind bot protection so we could not read their positioning to describe it fairly, and we are not going to guess. What we can say is that they hold a top position on the exact term this page targets, which is a real signal.',
  },
  {
    domain: 'bopdesign.com',
    note: 'Branding, content and search in one shop',
    detail:
      'Ranks fifth with a B2B website design agency page. Their site lists website design, WordPress build, SEO, generative engine optimisation, content marketing and branding as one bundle, across technology, fintech, biotech, software, industrial, engineering, consulting and energy. If you want brand and content under the same roof as the build, they are a real answer.',
  },
  {
    domain: 'webflow.com',
    note: 'Not an agency, a platform',
    detail:
      'Ranks eighth with a gallery of B2B site examples. Worth knowing because a lot of the inspiration you are about to look at is published by the tool it was built in. Great for seeing what is possible, less useful for deciding what your buying committee needs to read.',
  },
  {
    domain: 'superside.com',
    note: 'A roundup, not a competitor page',
    detail:
      'Ranks seventh with a listicle of B2B web design agencies. Our own research this month found that being named in these roundups did not predict whether AI engines cited a company, so treat them as a starting list rather than a verdict.',
  },
  {
    domain: 'hingemarketing.com',
    note: 'The strategy angle',
    detail:
      'Ranks sixth with an article on expertise-driven B2B website strategy rather than a service page. Useful reading if you are still deciding what the site is for, which is honestly the right thing to settle before you brief anyone, including us.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data: 28 items across 5 categories, all grounded in live US PAA
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'B2B website basics' },
  { key: 'vs', label: 'B2B vs B2C' },
  { key: 'rules', label: 'Rules and frameworks' },
  { key: 'tools', label: 'Platforms, AI and tools' },
  { key: 'working', label: 'Scope and working together' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── B2B website basics ─────────────────────────────────────────────── */
  {
    category: 'basics',
    question: 'What is B2B website design?',
    answer:
      'B2B website design is the design of a marketing site for a company that sells to other companies. Nobody completes the purchase on it. Its job is to get a whole buying committee to shortlist you, survive procurement and legal review, and give your sales team pages worth sending. That is a different brief from a consumer site, and it changes almost every layout decision.',
  },
  {
    category: 'basics',
    question: 'What is the best website for a B2B company?',
    answer:
      'The one that answers the four people in the room. The champion needs a story they can repeat, the technical evaluator needs integration and compatibility detail, the finance signer needs to understand how you charge, and procurement needs security and accessibility pages. A site that only impresses the first of those four is the most common B2B failure we see.',
  },
  {
    category: 'basics',
    question: 'How do you create a B2B website?',
    answer:
      'Write the positioning first. Then map the buying committee and give each role a page. Structure the tree around problems rather than features, build case studies as evidence, add the security and accessibility pages procurement will ask for, decide gating asset by asset, and keep one short form on the page that matters. Design and build come after those decisions, not before.',
  },
  {
    category: 'basics',
    question: 'What makes a good B2B website?',
    answer:
      'Clarity about what you do in the first screen, proof that you have done it for someone like the reader, enough technical detail for the evaluator, honesty about how you charge, and pages a rep can send without a covering explanation. Everything else is decoration. If a stranger cannot describe your business after thirty seconds, the design has failed.',
  },
  {
    category: 'basics',
    question: 'What are the 5 elements to a good website design?',
    answer:
      'There is no official list, so treat any confident version with suspicion. The five that actually matter for B2B: a clear value proposition, navigation that matches how buyers think rather than how you are organised, proof in the form of real case studies, page speed on real devices, and one obvious next step. Aesthetics support those five, they do not replace them.',
  },
  {
    category: 'basics',
    question: "What are the 7 C's of a website?",
    answer:
      'The seven Cs come from an e-commerce design framework: context, content, community, customisation, communication, connection and commerce. It is a useful audit checklist because it forces you past visuals into whether the site actually connects to anything. For most B2B sites, content, context and connection carry almost all the weight, and community rarely applies at all.',
  },
  {
    category: 'basics',
    question: 'What are the five golden rules of a website?',
    answer:
      'Different sources list different rules, which tells you something. The version worth keeping: say what you do immediately, make the next step obvious, prove your claims, load fast on the device people actually use, and stay usable for everyone including people using a keyboard or a screen reader. Anything that survives contact with a real buyer belongs on the list.',
  },
  {
    category: 'basics',
    question: 'Can a beginner create a website?',
    answer:
      'Yes, and for a first company site a beginner using a builder is often the right call. Where it breaks is not the building, it is the deciding: what the site is for, what order the pages go in, what proof to show, what to gate. Those are the parts that fail quietly, and they are the parts an agency is actually being paid for.',
  },
  {
    category: 'basics',
    question: 'Is web design still in demand?',
    answer:
      'The commodity end is under pressure. Templates and AI tools do a passable brochure site now, and that work is getting cheaper every year. The complicated end is not under pressure at all. Positioning, buying committee architecture, integrations, accessibility conformance and search visibility are still human work, and the gap between the two ends is widening.',
  },
  {
    category: 'basics',
    question: 'What are the top 10 B2B websites in the USA?',
    answer:
      'No authoritative ranking exists, and any list claiming one is somebody marketing themselves. The question usually means one of two things: the largest B2B trading platforms, or the best-designed B2B sites. For design, the roundups from Webflow, Superside and Axon Garside are reasonable starting points. Read them as inspiration, not as a scoreboard.',
  },

  /* ── B2B vs B2C ─────────────────────────────────────────────────────── */
  {
    category: 'vs',
    question: 'What is the difference between a B2B website and a B2C website?',
    answer:
      'A B2C site is built to close a purchase from one person in one session. A B2B site is built to inform several people over several months and then hand the sale to a human. So B2B leans on evidence, technical depth and sendable pages, while B2C leans on desire, urgency and checkout. Copying B2C tactics onto a B2B site is the classic mistake.',
  },
  {
    category: 'vs',
    question: 'Is B2B better than B2C?',
    answer:
      'Neither is better, they are different jobs with different maths. B2B has fewer customers, larger contracts, longer cycles and much more relationship risk. B2C has volume, faster feedback and thinner margins per sale. What matters for your website is that the two need almost opposite designs, so pick the one you actually run and stop borrowing patterns from the other.',
  },
  {
    category: 'vs',
    question: 'What is a B2B and B2C example?',
    answer:
      'A company selling factory automation controllers to manufacturers is B2B. A company selling running shoes on its own site is B2C. Most large companies are both at once, which is why the labels cause so much confusion. The useful question is not what the company is, it is who reads this particular page and what they are allowed to decide.',
  },
  {
    category: 'vs',
    question: 'Is Amazon a B2B or B2C company?',
    answer:
      'Both, through separate businesses. Amazon.com is consumer retail. Amazon Business is a purchasing platform aimed at companies, schools and public bodies. Amazon Web Services sells cloud infrastructure almost entirely to organisations. The same brand runs a consumer storefront and a large B2B operation side by side, which is exactly why one site design cannot serve both.',
  },
  {
    category: 'vs',
    question: 'Is Google a B2B or B2C company?',
    answer:
      'Consumer-facing, B2B-funded. Search, Gmail, Maps and Android are used by billions of people who pay nothing. The customers who actually pay are advertisers and cloud buyers, and those are businesses. It is the clearest example of why you should ask who pays rather than who uses when you are deciding what your own website has to argue.',
  },
  {
    category: 'vs',
    question: 'Is Walmart a B2B or B2C company?',
    answer:
      'Mainly B2C retail, with real B2B lines attached. Sam’s Club serves small businesses buying in bulk, Walmart Marketplace sells to third-party sellers, and Walmart Connect sells advertising to brands. So a shopper and a supplier meet completely different Walmart, and the company builds separate digital experiences for each rather than one universal site.',
  },
  {
    category: 'vs',
    question: 'Is Apple a B2B or B2C company?',
    answer:
      'Predominantly B2C, with a serious enterprise and education channel underneath it. Apple sells hardware and services direct to consumers, and also to companies and schools through business and education programmes, volume purchasing and resellers. The consumer brand is what you see. The business channel is a quieter, differently designed set of pages entirely.',
  },
  {
    category: 'vs',
    question: 'Is Coca-Cola a B2B or B2C company?',
    answer:
      'Its marketing is B2C and its actual sales are largely B2B. Coca-Cola advertises to drinkers but sells through bottlers, retailers, restaurants and vending operators. Those business customers are the ones placing orders. It is a good reminder that a company can speak to consumers everywhere and still need a serious trade-facing side to its digital estate.',
  },
  {
    category: 'vs',
    question: 'Is Nestle a B2B or B2C company?',
    answer:
      'Both, and openly so. Nestlé sells consumer brands through retailers, and it also runs a dedicated foodservice arm selling to restaurants, hotels, offices and caterers. That B2B side needs product specifications, ordering, and account-level information that would clutter a consumer brand site, which is why large groups split the two rather than merging them.',
  },
  {
    category: 'vs',
    question: 'Is Canva a B2B brand?',
    answer:
      'Both, in the pattern people call product-led growth. Individuals use the free and paid personal plans, which is consumer behaviour. Teams and enterprise plans are sold to organisations with admin controls, brand governance and central billing, which is B2B. The individual user gets in first and the company purchase follows, so the website has to serve both audiences at once.',
  },

  /* ── Rules and frameworks ───────────────────────────────────────────── */
  {
    category: 'rules',
    question: 'What is the rule of 7 in B2B?',
    answer:
      'The rule of seven is the old marketing claim that a buyer needs roughly seven exposures to your brand before they act. It comes from mid-century advertising folklore, not from a controlled study, so do not treat the number as a law. The idea underneath it is sound: one visit rarely decides a B2B purchase, so build a site people can come back to.',
  },
  {
    category: 'rules',
    question: "What are the 7 P's of B2B marketing?",
    answer:
      'Product, price, place, promotion, people, process and physical evidence. The last three were added to the original four to cover services, where the experience of buying is part of what you are buying. For a B2B website the three additions are the interesting ones, because your site is a large part of your process and most of your physical evidence.',
  },
  {
    category: 'rules',
    question: "What are the four C's of B2B marketing?",
    answer:
      'Customer, cost, convenience and communication. It is a deliberate re-framing of the four Ps from the buyer’s side rather than the seller’s. Applied to a website it is a decent test: does the site talk about the customer’s situation, explain total cost honestly, make the next step convenient, and communicate rather than broadcast.',
  },
  {
    category: 'rules',
    question: 'What are the four pillars of B2B marketing?',
    answer:
      'There is no canonical list, so pick a version and be consistent. The one we find useful in practice: positioning, demand creation, demand capture, and measurement. Websites usually live in the third pillar and get judged only on captured leads, which is why so many B2B sites are optimised for the small group already searching and useless to everybody else.',
  },
  {
    category: 'rules',
    question: 'What is the 70-20-10 rule in sales and marketing?',
    answer:
      'It is an allocation heuristic, used several different ways. In marketing it usually means putting most of the effort into what reliably works, some into promising newer channels, and a small slice into experiments that will mostly fail. Treat it as a way to protect a budget for learning, not as a measured law with one correct definition.',
  },

  /* ── Platforms, AI and tools ────────────────────────────────────────── */
  {
    category: 'tools',
    question: 'Which B2B platform is best?',
    answer:
      'It depends on whether you mean a marketing site or a trade ordering system. For a B2B marketing site the platform matters far less than the structure, and a well-built site on almost any modern stack will outperform a badly structured one on an expensive stack. For ordering, catalogues and account pricing, see our B2B ecommerce page, which covers that comparison properly.',
  },
  {
    category: 'tools',
    question: "What is the world's largest B2B platform?",
    answer:
      'Alibaba.com is generally described as the largest B2B trading marketplace by number of buyers and suppliers. It is worth separating that from your own site, though. A marketplace rents you access to demand and takes a cut. Your own website is the asset you keep. Most serious B2B companies end up doing both for different reasons.',
  },
  {
    category: 'tools',
    question: 'Can ChatGPT design a website?',
    answer:
      'It can produce layouts, copy and working code very quickly, and for a simple site that is genuinely useful. What it cannot do is the part that decides whether a B2B site works: knowing your buying committee, knowing which proof you are allowed to publish, and making the judgement calls about what to leave out. It writes the page. It does not decide the page.',
  },
  {
    category: 'tools',
    question: 'Which AI is best for designing a website?',
    answer:
      'None of them is best across the board, and any answer naming a single winner is out of date within months. The honest split today: general assistants are strongest at copy and code, dedicated generation tools are strongest at first-draft layouts, and design systems still come from people. Use them to remove the tedious middle, not to replace the deciding.',
  },
  {
    category: 'tools',
    question: "Why don't some professional designers use Canva?",
    answer:
      'Plenty do, for quick internal work, and that is a perfectly good use of it. The reasons professionals reach for other tools on client work are practical: template-led output tends to converge on the same look, typographic and colour control is limited compared to professional software, print colour handling is restricted, and stock elements come with licence conditions you have to read.',
  },
  {
    category: 'tools',
    question: 'Can I legally sell things I make in Canva?',
    answer:
      'It depends on the licence, and you should read Canva’s own content terms rather than take anyone’s summary. The shape people usually get wrong: you can generally use licensed elements inside your own finished design, but you cannot resell the stock elements themselves largely unchanged, and building a logo on stock elements is risky because you cannot claim exclusive rights to something thousands of others also licensed.',
  },

  /* ── Scope and working together ─────────────────────────────────────── */
  {
    category: 'working',
    question: 'How much does a B2B website cost?',
    answer:
      'We will not put a figure on a page, because a number written without seeing your situation is aimed at an average rather than at you. What actually moves scope: how many templates you need, whether positioning and messaging are in or out, how many integrations touch the site, whether we write the content or you do, whether accessibility conformance is required, and how many languages you need.',
  },
  {
    category: 'working',
    question: 'How long does a B2B website build take?',
    answer:
      'Most of the calendar goes on decisions and content, not on build. A focused site with clear positioning and content ready can move quickly. A site that needs new positioning, new case studies written from interviews, and sign-off from several stakeholders takes considerably longer, and the stakeholder count is usually the honest predictor. We phase it so something useful ships early.',
  },
  {
    category: 'working',
    question: 'Should we redesign our B2B site or start again?',
    answer:
      'Redesign when the structure is sound and the problem is presentation. Start again when the site is organised around your internal departments rather than your buyers, when the platform blocks basic things, or when nobody can explain what the site is for. We will tell you which one you are looking at before you commit, because guessing wrong wastes a year.',
  },
  {
    category: 'working',
    question: 'Do you also build the trade portal and ordering side?',
    answer:
      'Yes, but on a different page and usually as a separate phase. Catalogues, account pricing, net terms, quoting, punchout and ERP integration are a systems project, not a design project, and mixing them into a marketing site brief is how both end up mediocre. Our B2B ecommerce page covers that work, and the two link to each other rather than compete.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD
───────────────────────────────────────────────────────────────────────────── */

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'B2B Website Design: Sites Built for Buying Committees',
  description:
    'B2B website design for US companies that sell to other companies, built around buying committees, procurement and security review, gated versus ungated content, case studies and sales enablement.',
  inLanguage: 'en-US',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'B2B website design' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://factoryjet.com/images/us/b2b-website-design/hero.webp',
    width: 1264,
    height: 848,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#what-is-b2b-website-design'],
  },
  lastReviewed: PAGE_MODIFIED,
  author: {
    '@type': 'Person',
    name: 'Bhavesh Barot',
    url: 'https://www.linkedin.com/in/bhavesh-ai-gtm-expert/',
    jobTitle: 'Founder, FactoryJet',
  },
  reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder, FactoryJet' },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'B2B Website Design',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'B2B Website Design / B2B Web Design / B2B Website Development / B2B Marketing Website / B2B Website Redesign',
  audience: {
    '@type': 'BusinessAudience',
    name: 'US companies selling to other businesses, including manufacturers, software firms, distributors and professional services',
  },
  description:
    'Design and build of B2B marketing websites for US companies, covering positioning, buying committee architecture, case study templates, procurement and accessibility pages, gating strategy, lead capture, sales enablement, page speed and visibility inside AI answer engines.',
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'B2B website design build',
    itemListElement: DELIVERABLES.map((d) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: d.title, description: d.body },
    })),
  },
};

const ITEMLIST_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Eleven things we build into a B2B website',
  description:
    'The eleven pieces of work that make up a serious B2B website design project, in roughly the order they happen.',
  numberOfItems: DELIVERABLES.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DELIVERABLES.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: d.title,
    description: d.body,
  })),
};

const RIVALS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sites ranking for b2b website design in the United States',
  description:
    'Agencies, platforms and publications appearing on the United States search results for b2b website design, with what each is genuinely strong at.',
  numberOfItems: RIVALS.length,
  itemListElement: RIVALS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.domain,
    description: r.detail,
  })),
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'B2B Website Design', item: PAGE_URL },
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

export default function B2BWebsiteDesignPage() {
  return (
    <>
      <script
        id="b2bwd-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }}
      />
      <script
        id="b2bwd-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="b2bwd-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEMLIST_SCHEMA) }}
      />
      <script
        id="b2bwd-rivals-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(RIVALS_SCHEMA) }}
      />
      <script
        id="b2bwd-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        id="b2bwd-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div>
              <p className="fj-eyebrow">B2B website design &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.6rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                Nobody buys on a B2B website. Design it for{' '}
                <span style={{ color: ORANGE }}>the committee that does</span>
              </h1>
              <p
                className="mt-6 max-w-[545px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                Four people read your site before anyone talks to you: the champion, the engineer, the
                signer and whoever runs procurement. Most B2B sites are built for the first one and lose the
                other three quietly.{' '}
                <b className="font-bold text-fj-ink">We build for all four.</b>
              </p>
              <HeroInlineForm
                region="us"
                source="services_b2b_website_design_hero"
                submitLabel="Get a B2B website review"
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
                  href="/b2b-ecommerce"
                  className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4"
                  style={{ color: ORANGE_DARK }}
                >
                  Need a trade ordering portal instead?
                </Link>
              </div>
            </div>

            {/* Right: hero image + the two-searches card that does the split work */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div
                className="overflow-hidden rounded-3xl border"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 24px 60px rgba(20,18,12,0.12)' }}
              >
                <img
                  src="/images/us/b2b-website-design/hero.webp"
                  alt="Three colleagues in a bright office reviewing a plain website page layout shown on a large wall display"
                  width={1264}
                  height={848}
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
                  Two different searches, two different pages
                </span>
                <ul className="mt-3 space-y-2.5">
                  {[
                    {
                      k: 'b2b website design',
                      v: '480 a month',
                      d: 'difficulty 1',
                      w: 'This page. The marketing site.',
                    },
                    {
                      k: 'ecommerce platform for b2b',
                      v: '1,900 a month',
                      d: 'difficulty 18',
                      w: 'Our B2B ecommerce page. The ordering system.',
                    },
                  ].map((row) => (
                    <li
                      key={row.k}
                      className="border-t pt-2.5 first:border-t-0 first:pt-0"
                      style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-fj-body text-[0.875rem] font-bold text-fj-ink">{row.k}</span>
                        <span className="text-right font-fj-mono text-[0.6875rem] text-fj-neutral-600">
                          {row.v}
                          <small className="ml-2" style={{ color: ORANGE_DARK }}>
                            {row.d}
                          </small>
                        </span>
                      </div>
                      <small className="mt-0.5 block font-fj-body text-[0.75rem] text-fj-neutral-600">{row.w}</small>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-fj-body text-[0.75rem] text-fj-neutral-600">
                  US volumes and difficulty from DataForSEO, August 2026. Difficulty runs 0 to 100. Two
                  separate jobs, so we keep them on two separate pages instead of one page that half answers
                  both.
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
                id="what-is-b2b-website-design"
                className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink"
                style={{ letterSpacing: '-0.02em' }}
              >
                What is B2B website design?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">
                  B2B website design is the design of a marketing site for a company that sells to other
                  companies.
                </b>{' '}
                Nobody completes the purchase on it. Its job is to get a whole buying committee to shortlist
                you, survive procurement and legal review, and give your sales team pages worth sending.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                That last sentence is the entire difference. A consumer site is measured on whether one person
                completes one action in one session. A B2B site is measured on whether four or five people,
                over several months, arrive at enough agreement to book a call. So the things that win are
                different: evidence beats persuasion, technical depth beats polish, and a page that answers the
                one objection the finance signer will raise is worth more than a redesigned hero.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                This page is about the marketing site. If what you actually need is a place where trade
                accounts log in, see their own pricing and place orders, that is a systems build and it lives
                on our{' '}
                <Link href="/b2b-ecommerce" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                  B2B ecommerce page
                </Link>
                . Plenty of companies need both. They are still two projects.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. CAPABILITY ROW (proof without invented numbers) ──────── */}
        <section className="bg-white py-10 md:py-12">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { b: 'Committee-first', s: 'A page for the champion, the engineer, the signer and procurement' },
                { b: 'Founder-led', s: 'The person who scopes the work is the person who does it' },
                { b: 'Build and search together', s: 'Design, development and organic visibility in one team' },
                { b: 'No invented proof', s: 'No borrowed testimonials, no case study numbers a client has not confirmed' },
              ].map((s) => (
                <div key={s.b} className="rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}>
                  <p className="fj-display text-[1.05rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {s.b}
                  </p>
                  <p className="mt-2 font-fj-body text-[0.875rem] leading-[1.55] text-fj-neutral-600">{s.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 4. THE SPLIT (anti-cannibalisation, buyer-facing) ───────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Pick the right project
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              A B2B marketing site and a B2B ordering system are{' '}
              <span style={{ color: ORANGE }}>not the same build</span>
            </h2>
            <p className="mt-4 max-w-[660px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              People type both into the same search box and agencies happily sell both from the same page.
              They are different disciplines with different risks. Here is the split, stated plainly, so you
              can rule one out in about thirty seconds.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <span
                  className="inline-block rounded-full px-3 py-1 font-fj-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white"
                  style={{ background: GREEN }}
                >
                  This page
                </span>
                <h3 className="fj-display mt-4 text-[1.4rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.02em' }}>
                  B2B website design
                </h3>
                <p className="mt-3 font-fj-body text-[0.9688rem] leading-[1.65] text-fj-neutral-700">
                  The site that gets you considered. Positioning, the pages each member of the buying committee
                  needs, proof, and a short path to a conversation with a human.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    'The sale ends in a call, a quote or a pilot, not a checkout',
                    'Your sales cycle is measured in months and involves several people',
                    'Procurement, security or legal review is part of every deal',
                    'You need case studies and technical detail more than you need a cart',
                    'Your reps need pages they can send without explaining them first',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9062rem] font-medium text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)', background: '#FFFFFF' }}>
                <span
                  className="inline-block rounded-full px-3 py-1 font-fj-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white"
                  style={{ background: ORANGE_DARK }}
                >
                  Different page
                </span>
                <h3 className="fj-display mt-4 text-[1.4rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.02em' }}>
                  B2B ecommerce and trade portals
                </h3>
                <p className="mt-3 font-fj-body text-[0.9688rem] leading-[1.65] text-fj-neutral-700">
                  The system your existing accounts log into. Catalogues, account pricing, terms, reordering
                  and the integrations behind all of it.
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    'Trade accounts log in and place their own orders',
                    'Pricing differs per account, per tier or per contract',
                    'You need net terms, purchase orders and approval workflows',
                    'Orders arrive by portal, by EDI and through procurement punchout',
                    'It has to stay in sync with your ERP rather than a spreadsheet',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9062rem] font-medium text-fj-ink">
                      <CheckCircle size={18} fill={ORANGE_DARK} /> {line}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/b2b-ecommerce"
                  className="mt-6 inline-flex items-center gap-2 font-fj-body text-[0.9375rem] font-bold"
                  style={{ color: ORANGE_DARK }}
                >
                  See B2B ecommerce <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. WHY B2B IS A DIFFERENT JOB ───────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Six things a consumer-trained designer gets wrong
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[800px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              A B2B site is not a prettier version of{' '}
              <span style={{ color: ORANGE }}>a consumer site</span>
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Nearly every convention people bring from consumer work is either useless or actively harmful
              here. These six change what gets built, and in what order.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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

        {/* ─── 6. THE BUYING COMMITTEE (image + roles) ─────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative mx-auto w-full max-w-[520px]">
              <img
                src="/images/us/b2b-website-design/buying-committee.webp"
                alt="A group of colleagues around a conference table reviewing printed documents together"
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
                Who is actually reading
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                One site, <span style={{ color: ORANGE }}>four different readers</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Nielsen Norman Group describes B2B decisions as long processes involving multiple people
                across a company hierarchy and several job roles, and splits the audience into choosers and
                users. Give each of them somewhere to land, or your champion ends up answering their
                questions for you from memory.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  {
                    t: 'The champion',
                    s: 'Wants a story they can repeat in a meeting you are not in. Needs a summary page and a sendable link',
                  },
                  {
                    t: 'The technical evaluator',
                    s: 'Wants integrations, compatibility, limits and what happens when it breaks. Will not accept marketing language',
                  },
                  {
                    t: 'The signer',
                    s: 'Wants to understand how you charge and what happens if this goes wrong. Compares you to doing nothing at all',
                  },
                  {
                    t: 'Procurement, security and legal',
                    s: 'Arrive late, read pages you forgot to build, and hold the deal until they find them',
                  },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3.5 rounded-2xl bg-white px-5 py-4">
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
              <p className="mt-5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                Most B2B sites we audit have excellent material for the first reader and nothing at all for
                the fourth. That is not a design problem, it is a scoping problem, and it is why deals sit in
                review.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 7. LISTICLE: what we build ──────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The build
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[800px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Eleven things we build into{' '}
              <span style={{ color: ORANGE }}>a B2B website</span>
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              In roughly the order they happen. If a B2B web design proposal starts at item two and never
              reaches items three, five or eight, you are buying a repaint.
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

            <p className="mt-8 max-w-[820px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Item eleven is run by our{' '}
              <Link href="/services/ai-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                AI SEO practice
              </Link>{' '}
              and the search side by our{' '}
              <Link href="/services/seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                SEO team
              </Link>
              . They sit in the same building as the people writing the templates, which is why the speed
              budget in item ten survives contact with the launch.
            </p>
          </div>
        </section>

        {/* ─── 8. MID-PAGE CTA ─────────────────────────────────────────── */}
        <section className="py-12 md:py-14" style={{ background: PEACH }}>
          <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[640px]">
              <h2 className="fj-display text-[1.5rem] font-bold text-fj-ink md:text-[1.75rem]" style={{ letterSpacing: '-0.02em' }}>
                Want to know which of the four readers your site is losing?
              </h2>
              <p className="mt-3 font-fj-body text-[1rem] leading-[1.6] text-fj-neutral-700">
                Send us the URL. We will read it the way a buying committee reads it, tell you which role has
                nowhere to land, and show you the pages procurement will ask for and cannot find.
              </p>
            </div>
            <div className="flex-shrink-0">
              <ModalCTAButton label="Get a B2B website review" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

        {/* ─── 9. COMPARISON TABLE (named rivals from the live SERP) ───── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Who else you are looking at
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[800px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Us next to the three agencies{' '}
              <span style={{ color: ORANGE }}>ranking above us</span>
            </h2>
            <p className="mt-4 max-w-[740px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We pulled the live US result for b2b website design in August 2026. These three hold the top
              service page positions and we do not. Everything below comes from their own sites or their
              position on that result. You should know this before you talk to us, not after.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[900px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of FactoryJet, Windmill Strategy, New Media Campaigns and Bop Design across
                  search position, strengths, stated focus, published pricing guidance, ordering capability,
                  account staffing, authority profile and best fit.
                </caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      What you are comparing
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em]" style={{ color: ORANGE_DARK }}>
                      FactoryJet
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Windmill Strategy
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      New Media Campaigns
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Bop Design
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
                        {row.fj}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.windmill}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.nmc}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.bop}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Scroll the table sideways on smaller screens. Positions are a snapshot and they move. We could
              not read the New Media Campaigns positioning because their site returns a bot challenge, so we
              have left that column deliberately thin rather than guessing.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {RIVALS.map((r) => (
                <div key={r.domain} className="flex flex-col rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.09)', background: '#FFFFFF' }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold text-fj-ink">{r.domain}</span>
                  <h3 className="fj-display mt-1.5 text-[1.05rem] font-bold" style={{ letterSpacing: '-0.015em', color: ORANGE_DARK }}>
                    {r.note}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 10. FIT CHECK ───────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Honest fit check
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[760px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              When we are <span style={{ color: ORANGE }}>the wrong shop</span>
            </h2>
            <p className="mt-4 max-w-[680px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              A mismatched B2B project burns a year of your pipeline and our reputation. Read both columns
              before you book anything.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A strong fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'Your sale involves several people and takes months, not minutes',
                    'Your current site was organised around your departments rather than your buyers',
                    'Deals keep stalling in security or legal review and nobody has built those pages',
                    'You have real client work you are allowed to publish and it is buried or unwritten',
                    'Your reps send the homepage because nothing else is sendable',
                    'You also sell online and want the marketing site and the portal designed to work together',
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
                    'You want a five page brochure site quickly and cheaply. A template will serve you better',
                    'You want the design changed but the positioning left exactly as it is',
                    'Nobody internally can give us thirty minutes with a customer or a salesperson',
                    'You need an ordering portal first. Start on our B2B ecommerce page instead',
                    'You want us to write case study results that no client will confirm',
                    'The whole project is one person’s taste and there is no agreed goal',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  If the site is basically sound and you only need it rebuilt on a better footing, start with{' '}
                  <Link href="/services/website-redesign" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    website redesign
                  </Link>
                  . If you are a smaller team without a marketing hire, our{' '}
                  <Link href="/services/small-business-website-design" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    small business website design
                  </Link>{' '}
                  is scoped for that instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 11. CITATIONS ───────────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Check us against the source
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Where the claims on this page{' '}
              <span style={{ color: ORANGE }}>come from</span>
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              You should not take a web agency&rsquo;s word for how B2B buyers behave. Four primary sources
              back the specific claims above. We opened every one of them before publishing. Open them
              yourself before you hire anyone, including us.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  src: 'Nielsen Norman Group',
                  title: 'B2B and B2C sites need different things',
                  body:
                    'NN/g research across B2B verticals identifies five UX differences: content has to support long purchase decisions involving multiple people across a hierarchy, integration and compatibility detail has to be clear, content must serve both choosers and users, complex pricing still needs realistic scenarios, and the site has to speak to different business sizes without alienating any of them.',
                  href: 'https://www.nngroup.com/articles/b2b-vs-b2c/',
                },
                {
                  src: 'Nielsen Norman Group',
                  title: 'The site is not what closes the order',
                  body:
                    'NN/g states that B2B sites are typically not seen as closing the order, and that they still contribute to sales if they recognise the multi-step nature of business buying. The three goals it names are surviving the initial screening to reach the shortlist, giving an internal advocate a kit they can use, and building a reputation for service.',
                  href: 'https://www.nngroup.com/articles/b2b-convincing-decision-makers/',
                },
                {
                  src: 'Nielsen Norman Group',
                  title: 'Gating decided per asset, not as a policy',
                  body:
                    'NN/g points out that search engines usually cannot see content behind a gate, and that case studies, FAQs and product specifications do not usually belong behind one. It also finds that people early in the buying cycle have lower commitment and a higher tendency to abandon forms, which is exactly when most B2B sites put a form in the way.',
                  href: 'https://www.nngroup.com/articles/content-behind-forms/',
                },
                {
                  src: 'Section508.gov',
                  title: 'Accessibility conformance is a procurement document',
                  body:
                    'The US government guidance explains that an Accessibility Conformance Report shows how a product meets the Revised 508 Standards, that it helps federal buyers assess products during market research and proposals, and it recommends vendors produce one for anything marketed to federal agencies and make it easy to find on their own website.',
                  href: 'https://www.section508.gov/sell/acr/',
                },
              ].map((c) => (
                <div key={c.href} className="flex flex-col rounded-2xl border p-6" style={{ borderColor: 'rgba(15,15,18,0.09)', background: '#FFFFFF' }}>
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

            <p className="mt-8 max-w-[860px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              The responsiveness target in item ten comes from Google&rsquo;s own Core Web Vitals
              documentation, which treats an Interaction to Next Paint of{' '}
              <a
                href="https://web.dev/articles/inp"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
                style={{ color: ORANGE_DARK }}
              >
                200 milliseconds or less as good responsiveness
              </a>
              . Search volumes and difficulty come from DataForSEO, United States, August 2026. Competitor
              positions are from the same live result on the same date.
            </p>
          </div>
        </section>

        {/* ─── 12. WHO YOU WORK WITH (E-E-A-T) ─────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: LAV_SOFT }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-[480px]">
              <img
                src="/images/us/b2b-website-design/sales-enablement.webp"
                alt="A woman showing a page on a tablet to a seated colleague who is taking notes in a bright office"
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
                The site has to survive{' '}
                <span style={{ color: ORANGE_DARK }}>a room you are not in</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Everything on this page comes from the same observation: the decisive conversation about your
                company happens without you, using whatever your website gave your champion to work with.
                Build for that meeting and the rest of the site tends to sort itself out.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { t: 'Founder-led scoping', s: 'Bhavesh Barot scopes the work and stays on the account' },
                  { t: 'Design, build and search in one team', s: 'The structure decisions and the ranking decisions are made by the same people' },
                  { t: 'B2B on both sides', s: 'We run the marketing site work and the trade portal work, and we keep them separate on purpose' },
                  { t: 'No invented numbers, ever', s: 'No fabricated case studies, no borrowed testimonials, no guaranteed results' },
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
                <ModalCTAButton label="Talk to the Founder" region="us" btnVariant="primary-light" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 13. RELATED SERVICES ────────────────────────────────────── */}
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
                  label: 'B2B ecommerce',
                  href: '/b2b-ecommerce',
                  desc: 'Trade portals, gated catalogues, account pricing, terms, quoting and ERP integration. The ordering side of B2B.',
                },
                {
                  label: 'Web design',
                  href: '/services/web-design',
                  desc: 'Our general US web design service, for companies whose sale does not run through a buying committee.',
                },
                {
                  label: 'Website redesign',
                  href: '/services/website-redesign',
                  desc: 'When the structure is sound and the problem is presentation, staging and search continuity.',
                },
                {
                  label: 'SEO services',
                  href: '/services/seo',
                  desc: 'The organic programme that gets the B2B pages found in the first place, run end to end.',
                },
                {
                  label: 'AI SEO',
                  href: '/services/ai-seo',
                  desc: 'Getting named inside ChatGPT, Perplexity and Google AI Overviews, which already answer this query.',
                },
                {
                  label: 'Web application development',
                  href: '/services/web-application-development',
                  desc: 'When the thing behind the marketing site is a product, a portal or a customer tool rather than pages.',
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

        {/* ─── 14. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="B2B website design FAQ"
          headline="The questions people actually search"
          lead="Thirty-four answers covering what B2B website design is, how a B2B site differs from a consumer one, the frameworks people keep asking about, where AI tools genuinely help, and what drives the scope of a build. If yours is not here, send a short brief and we usually reply within one business day."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 15. FINAL CTA (the one dark section) ────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="BEFORE THE NEXT QUARTER"
          headline="Find out which reader your B2B site is losing"
          sub="Book a call with the founder. We will read your site the way a buying committee reads it, name the role that has nowhere to land, list the procurement pages that are missing, and tell you plainly whether this is a redesign, a rebuild, or a positioning problem you should fix before anyone touches a layout."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See B2B ecommerce', href: '/b2b-ecommerce' }}
          objectionHandler="Founder-led. No guaranteed results, no invented case studies, and you own the site, the content and the roadmap."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
