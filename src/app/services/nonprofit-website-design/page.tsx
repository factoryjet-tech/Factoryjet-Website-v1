import type { Metadata } from 'next';
import Link from 'next/link';

import { US_FOOTER_COLUMNS } from '@/data/usFooterColumns';

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import FinalCTA from '@/components/v2/FinalCTA';
import FAQ, { type FAQItem, type FAQCategory } from '@/components/v2/FAQ';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/v2/Breadcrumbs';
import HeroInlineForm from '@/components/HeroInlineForm';
import MidPageCTA from '@/components/v2/MidPageCTA';

/* ─────────────────────────────────────────────────────────────────────────────
   /services/nonprofit-website-design: US nonprofit website design service page.

   Target: "nonprofit website design" (1,000 a month, KD 40). A deliberate
   head-on fight against elevationweb.org, weareloop.com, doublethedonation.com
   and wiredimpact.com. Google DOES render an AI Overview on this query, so the
   page is written for extraction: self-contained factual sentences, direct
   answers that stand alone when quoted, numbers attributed to a named source.

   Intent split (anti-cannibalisation, read before editing):
     - THIS page owns nonprofit and charity websites. Donation flows, recurring
       giving, donor trust and transparency, impact reporting, WCAG 2.1 AA as a
       real obligation, volunteer signup, grant officers and board members as
       readers, tiny budgets, no in-house developer, platform lock-in.
     - /services/small-business-website-design owns small commercial sites.
     - /services/web-design owns generic US web design.
     - /services/website-redesign owns rebuild-an-existing-site intent.
     - /services/wordpress-development owns the WordPress build itself.

   Build rules honoured: no em dashes, no currency figures anywhere (which
   matters doubly on a donation page, so every M+R figure quoted here is a
   percentage and never an amount), plain <img> only, FinalCTA (never
   GetFreeQuoteCTA, never wrapped in its own #final-cta div), no
   TestimonialsSection (its US_STATS hardcodes a currency value), exactly ONE
   dark section (the closing FinalCTA), inline canonical (no hreflangMap
   import), no shared files touched. Cost-shaped PAA questions are answered
   with scope drivers, never with a number.

   Schema: WebPage + speakable, Service, ItemList (build deliverables), ItemList
   (agency set), FAQPage derived from FAQ_ITEMS, BreadcrumbList. Every const
   below reaches a <script type="application/ld+json"> tag in the render.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/services/nonprofit-website-design';
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
  title: 'Nonprofit Website Design for Donors & Grants | FactoryJet',
  description:
    'Nonprofit website design for US charities and NGOs. Mobile donation flows, recurring giving, WCAG 2.1 AA accessibility, and easy volunteer signups.',
  keywords: [
    'nonprofit website design',
    'non profit website design',
    'nonprofit web design',
    'nonprofit website design company',
    'nonprofit website design agency',
    'nonprofit website development',
    'charity website design',
    'ngo website design',
    'website design for nonprofits',
    'nonprofit website design examples',
    'nonprofit website design ideas',
    'nonprofit website design templates',
    'best nonprofit website design',
    'best nonprofit websites',
    'what should be included on a nonprofit website',
    'nonprofit donation page design',
    'nonprofit website accessibility',
    'nonprofit website redesign',
    '501c3 website design',
    'church and foundation website design',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Nonprofit Website Design: Built for Donors, Grants and Boards | FactoryJet',
    description:
      'Three audiences read the same nonprofit site: donors, grant officers and your own board. We design for all three, then make the donation flow finish on a phone.',
    url: PAGE_URL,
    images: [
      {
        url: 'https://factoryjet.com/images/us/nonprofit-website-design/hero.webp',
        width: 1440,
        height: 864,
        alt: 'Volunteers sorting donated clothing and food around a bright wooden table while two of them review a website on a laptop',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nonprofit Website Design: Built for Donors, Grants and Boards | FactoryJet',
    description:
      'Over half of nonprofit web traffic is on a phone and barely a quarter of the money is. That gap is a design problem, and it is fixable.',
    images: ['https://factoryjet.com/images/us/nonprofit-website-design/hero.webp'],
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'x-default': PAGE_URL,
    },
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
   Three readers (donors, grant officers, board) support tiles
───────────────────────────────────────────────────────────────────────────── */

type Reader = { tag: string; title: string; body: string; tint: string; accent: string };

const READERS: ReadonlyArray<Reader> = [
  {
    tag: '01',
    title: 'The donor who has never heard of you',
    body:
      'Deciding in under a minute whether you are real. Nielsen Norman Group tested 23 nonprofit sites: 43 percent answered what the organisation does, 4 percent explained how donations get used.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '02',
    title: 'The grant officer doing diligence',
    body:
      'Not browsing. Checking your programmes against your application, your board, your published financials. If those pages are missing, they move down the list.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '03',
    title: 'Your own board and staff',
    body:
      'Board members send your site to people they want to impress, and notice a stale biography. A site only the web volunteer can edit stops being true.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '04',
    title: 'The person you actually serve',
    body:
      'Somebody looking for pantry hours, the helpline number or the intake form. Often an old phone, sometimes a screen reader. Designed for last, needs it most.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '05',
    title: 'The volunteer with a free Saturday',
    body:
      'Nielsen Norman Group rated volunteering the best-performing task in their nonprofit research, 6.7 out of 7, because sites put a plain link on the homepage and described real duties.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '06',
    title: 'A model summarising you to someone else',
    body:
      'Google renders an AI Overview here, and the sources it pulls are often not the pages ranking first. Text locked in a PDF cannot be quoted.',
    tint: LAV_SOFT,
    accent: LAV,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Where donation flows lose people
───────────────────────────────────────────────────────────────────────────── */

type Leak = { n: string; title: string; body: string };

const LEAKS: ReadonlyArray<Leak> = [
  {
    n: '01',
    title: 'The phone gap',
    body:
      'M+R found mobile carried 52 percent of nonprofit website traffic in 2025 but produced only 28 percent of online revenue. On the donation page, 11 percent of desktop visitors completed a gift against 8 percent on mobile, 4 percent for small nonprofits.',
  },
  {
    n: '02',
    title: 'The handoff to a payment page that looks nothing like you',
    body:
      'Nielsen Norman Group flagged third-party payment services as the one big usability problem in an otherwise fine donation workflow. A donor clicks Give, lands on a page with a different logo, and pauses. Brand the hosted page, or change processor.',
  },
  {
    n: '03',
    title: 'Fields that exist for your database, not the donor',
    body:
      'Title, middle initial, full postal address, how did you hear about us, employer, phone. None are needed to take a card and email a receipt. Ask for an address only when you are mailing something.',
  },
  {
    n: '04',
    title: 'No wallet buttons',
    body:
      'M+R reports 79 percent of nonprofits offered PayPal on donation pages, 58 percent Google Pay, 57 percent Apple Pay and 44 percent Venmo. A wallet button skips the card form on a phone, exactly where the drop-off is.',
  },
  {
    n: '05',
    title: 'An amount ladder somebody guessed at',
    body:
      'The suggested amounts on most donation forms were set once and never revisited. They should follow your actual gift distribution, differ for a cold visitor and a returning supporter, and say what each one does.',
  },
  {
    n: '06',
    title: 'Monthly giving hidden behind a tab',
    body:
      'M+R found monthly giving accounted for 27 percent of all online revenue in 2025. If the recurring option is a toggle nobody notices, your best long-term supporters opt in by accident.',
  },
  {
    n: '07',
    title: 'Nowhere for a sustainer to update a dead card',
    body:
      'Cards expire and get reissued after fraud. M+R found 10 percent of sustainers stop within two months, and about 71 percent are still giving after a year. A self-service card update page protects revenue you earned.',
  },
  {
    n: '08',
    title: 'A December that the site was never tested for',
    body:
      'M+R found nonprofits received 37 percent of all 2025 online revenue in December, and 4 percent of the annual total on the last day alone. Nothing should ship after the first week of November.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Build listicle (also powers the ItemList schema)
───────────────────────────────────────────────────────────────────────────── */

type Deliverable = { n: string; title: string; body: string };

const DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    n: '01',
    title: 'One sentence that says what you do',
    body:
      'Not your tagline. Nielsen Norman Group found what an organisation stands for mattered roughly 3.6 times more than the next factor when donors chose between charities. Put it in the first screen.',
  },
  {
    n: '02',
    title: 'A donation flow rebuilt around mobile giving',
    body:
      'Digital wallet buttons first (Apple Pay, Google Pay, Venmo), then an optimized card form. We integrate seamless checkout experiences using Stripe, Fundraise Up, or Givebutter to maximize mobile gift completion rates.',
  },
  {
    n: '03',
    title: 'A sustainer programme the site actually supports',
    body:
      'A dedicated recurring giving page, self-service donor portal for card updates, and automated gift receipts syncing directly with Blackbaud, Bloomerang, DonorPerfect, Classy, or Neon CRM.',
  },
  {
    n: '04',
    title: 'The transparency pages grant officers look for',
    body:
      'Public access to your Form 990 returns, 501(c)(3) determination letters, audited financial statements, board rosters, and verified profile seals from Candid GuideStar and Charity Navigator.',
  },
  {
    n: '05',
    title: 'Impact reporting that is not a vanity number',
    body:
      'Meals served is an activity, not an outcome. We build interactive impact reports highlighting verified community outcomes, client testimonials, and measurable year-over-year progress.',
  },
  {
    n: '06',
    title: 'WCAG 2.1 Level AA accessibility built in',
    body:
      'Keyboard navigation, high-contrast typography, clear form labels, screen-reader semantics, and closed captioning, complying fully with Department of Justice Title II digital accessibility guidelines.',
  },
  {
    n: '07',
    title: 'A volunteer recruitment and engagement pipeline',
    body:
      'Transparent duty descriptions, shift calendars, and qualification criteria with volunteer signup forms routing directly into Salesforce Nonprofit Cloud or HubSpot CRM workflows.',
  },
  {
    n: '08',
    title: 'A service-user path that assumes nothing',
    body:
      'Clear hours of operation, intake eligibility criteria, multi-language translation, and accessible directions located two taps from the homepage for community members seeking assistance.',
  },
  {
    n: '09',
    title: 'Editing that survives your staff turnover',
    body:
      'A programme manager who is not a web person has to add an event and publish a story alone. So: clear blocks, not a builder with ninety options.',
  },
  {
    n: '10',
    title: 'Donor data ownership and CRM integration',
    body:
      'Your domain in your registrar account, automated email workflows in Mailchimp, supporter records synced to Kindful or your ledger, and clean code in a GitHub repository you own.',
  },
  {
    n: '11',
    title: 'Speed budget on the pages that carry the year',
    body:
      'Google treats an Interaction to Next Paint of 200 milliseconds or less as good responsiveness. The donation page is where a slow script costs money.',
  },
  {
    n: '12',
    title: 'Written so an answer engine can quote you',
    body:
      'Google renders an AI Overview on these queries. Being summarised means mission, programmes and numbers in plain text, not locked in a PDF.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Comparison table: firms actually ranking for this query
───────────────────────────────────────────────────────────────────────────── */

type CompRow = { label: string; fj: string; elev: string; wired: string; dtd: string };

const COMPARISON_ROWS: ReadonlyArray<CompRow> = [
  {
    label: 'Position on this query',
    fj: 'Not on page one. We are the challenger',
    elev: 'Ranks first on this exact term',
    wired: 'Ranks tenth with its product page',
    dtd: 'Ranks third with a roundup',
  },
  {
    label: 'What they actually sell',
    fj: 'A custom build you own',
    elev: 'Custom nonprofit sites plus marketing',
    wired: 'A nonprofit website product with set designs',
    dtd: 'Matching gift software. The article is marketing',
  },
  {
    label: 'Published pricing guidance',
    fj: 'Scoped on a call, fixed proposal first',
    elev: 'Contact-led. Takes RFPs',
    wired: 'Publishes a public pricing page',
    dtd: 'Quote-based',
  },
  {
    label: 'Portability if you leave',
    fj: 'Domain, content, data and code',
    elev: 'Custom builds. Ask about handover',
    wired: 'Hosted, so leaving means rebuilding',
    dtd: 'Not applicable',
  },
  {
    label: 'Named nonprofit specialisms',
    fj: 'Donation flow, accessibility, search, AI visibility',
    elev: 'Ad Grants, branding, SEO, maintenance',
    wired: 'Donation, volunteer and event systems',
    dtd: 'Matching gifts, volunteer grants, payroll giving',
  },
  {
    label: 'Pick them when',
    fj: 'You need a site you own and can be found',
    elev: 'You want a nonprofit-only agency',
    wired: 'You are tiny and want it handled',
    dtd: 'You are still building a shortlist',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   The firms on this SERP (also powers the second ItemList)
───────────────────────────────────────────────────────────────────────────── */

type Rival = { domain: string; note: string; detail: string };

const RIVALS: ReadonlyArray<Rival> = [
  {
    domain: 'elevationweb.org',
    note: 'Top of this result, and a genuine nonprofit specialist',
    detail:
      'A website design agency specialising in nonprofits by their own description, with Google Ad Grant management alongside the build.',
  },
  {
    domain: 'wiredimpact.com',
    note: 'A product, not an agency, and open about it',
    detail:
      'A nonprofit website product with built-in donation and volunteer systems and a public pricing page. The trade is renting rather than owning.',
  },
  {
    domain: 'doublethedonation.com',
    note: 'A roundup published by a software company',
    detail:
      'A list of twenty-plus design companies, published by a company selling matching gift software. Content marketing, but useful for a shortlist.',
  },
  {
    domain: 'newmediacampaigns.com',
    note: 'Ranks seventh, and we could not read them',
    detail:
      'Top ten with a page titled Nonprofit Web Design. Their site returned an empty response behind bot protection, so we will not guess at their positioning.',
  },
  {
    domain: 'highmountaincreative.com',
    note: 'Cited by the AI Overview, not ranking first',
    detail:
      'Ranks fifth and is one of the sources Google’s AI Overview draws on here. Proof that the pages an engine quotes and the pages that rank are often not the same.',
  },
  {
    domain: 'weareloop.com',
    note: 'Second on this result, and the brand-led answer',
    detail:
      'A social impact design agency selling nonprofit branding, website design and annual reports. Published work includes Oxfam Canada, UNHCR and the Haisla Nation.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data: 22 items across 5 categories, grounded in live US PAA plus the
   related searches on the same result. Trimmed from 35 on 2026-08-12: the
   dropped questions were near-duplicates of each other or restated a point the
   donation-flow listicle, the build listicle or the answer-first block already
   owns. Answers are held to roughly 40 to 55 words so each one stands alone
   when an answer engine quotes it. If you add items, update the FAQ lead copy
   below, which states the count in words.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Nonprofit website basics' },
  { key: 'donations', label: 'Donations, volunteers and trust' },
  { key: 'platforms', label: 'Platforms, builders and free options' },
  { key: 'rules', label: 'Nonprofit rules people ask about' },
  { key: 'working', label: 'Scope and working together' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── Nonprofit website basics ─────────────────────────────────── */
  {
    category: 'basics',
    question: 'What should be included on a non-profit website?',
    answer:
      'What you do in one plain sentence, who you help, a donation page that works on a phone, a volunteer page with real duties and a named contact, your programmes, your board, your financials, a physical address, and an accessibility statement.',
  },
  {
    category: 'basics',
    question: 'What are the best nonprofit websites in 2026?',
    answer:
      'No authoritative ranking exists, and most lists claiming one are published by companies selling to nonprofits. Awwwards and Dribbble are fine for visual ideas. Judge a site by donating on your phone, finding its financials, and tabbing the form with a keyboard.',
  },
  {
    category: 'basics',
    question: 'What is the difference between nonprofit website design and nonprofit website development?',
    answer:
      'Design is the decisions: what pages exist, what order they go in, what the donation flow asks for, how it looks. Development is building it so it works, loads fast, stays accessible and connects to your donor system.',
  },

  /* ── Donations, volunteers and trust ──────────────────────────── */
  {
    category: 'donations',
    question: 'How do we stop losing people on the donation form?',
    answer:
      'Put wallet buttons like Apple Pay and Google Pay above the card form, cut every field you do not need to charge a card, and test on an old phone. M+R found only 8 percent of mobile visitors reaching a donation page complete a gift.',
  },
  {
    category: 'donations',
    question: 'Should we push monthly giving or one-time gifts?',
    answer:
      'Present monthly as a real choice, not a checkbox. M+R reports monthly giving made up 27 percent of all online revenue in 2025, and about 71 percent of sustainers still give a year later. Roughly 10 percent lapse in the first two months.',
  },
  {
    category: 'donations',
    question: 'How do we show donors and grant officers we can be trusted?',
    answer:
      'Publish the boring documents: your Form 990 or annual report as readable text, a real board list, a financial summary, your legal name and EIN, an address. Nielsen Norman Group found only 4 percent of nonprofit homepages explained how donations get used.',
  },
  {
    category: 'donations',
    question: 'Does our nonprofit website have to be accessible?',
    answer:
      'Often yes, as a legal matter. The Department of Justice rule sets WCAG 2.1 Level AA as the standard for state and local government web content, and it covers nonprofits running services for a government entity. An inaccessible site also fails the people you serve.',
  },
  {
    category: 'donations',
    question: 'How do we get more volunteer signups from the website?',
    answer:
      'Put the link on the homepage, describe the real duties and hours before the form, keep the form short, and give a named person with a phone number. Nielsen Norman Group rated volunteering 6.7 out of 7, the best score in their nonprofit research.',
  },
  {
    category: 'donations',
    question: 'What should an impact page actually say?',
    answer:
      'What changed, how you know, and what you are still unsure about. Meals served describes activity, not effect. State the method, name the time period, and say where the data came from. A funder trusts a page that admits a limitation.',
  },

  /* ── Platforms, builders and free options ─────────────────────── */
  {
    category: 'platforms',
    question: 'What is the best website builder for a nonprofit?',
    answer:
      'It depends on who maintains it. If nobody on staff is technical, a nonprofit-specific hosted product is a reasonable trade. If you need to own the site and be found in search, WordPress or a static build gives more room.',
  },
  {
    category: 'platforms',
    question: 'Is Wix free for nonprofits?',
    answer:
      'Wix has a free tier open to anyone, nonprofit or not, which shows Wix branding and uses a Wix subdomain. Removing both requires a paid plan. Wix has offered nonprofit discounts through partner programmes, so check with Wix and TechSoup directly.',
  },
  {
    category: 'platforms',
    question: 'What is the downside to Wix?',
    answer:
      'Portability. Your pages are not straightforwardly exportable to another platform, so leaving means rebuilding. Fine control over performance and accessibility is limited, and deeper integrations with donor management systems can be awkward. For a small organisation those trades can still be worth making.',
  },
  {
    category: 'platforms',
    question: 'Can a nonprofit get a free website?',
    answer:
      'Yes, through free builder tiers, donated software brokered by TechSoup, or a volunteer developer. All three carry the same risk: what happens when the volunteer moves on. Insist on owning the domain and holding a content export from day one.',
  },
  {
    category: 'platforms',
    question: 'Should we use a nonprofit website template?',
    answer:
      'A template is sensible if your constraint is budget and time, and poor if your constraint is being memorable. The test: can you get your donation flow, accessibility requirements and donor system integration into it without fighting it.',
  },

  /* ── Nonprofit rules people ask about ─────────────────────────── */
  {
    category: 'rules',
    question: 'What is the 33% rule for nonprofits?',
    answer:
      'It refers to the public support tests the IRS uses to decide whether an organisation counts as a public charity rather than a private foundation, involving roughly one-third thresholds for where support comes from. Confirm the current test with the IRS or your CPA.',
  },
  {
    category: 'rules',
    question: 'What is a 501c3 not allowed to do?',
    answer:
      'The IRS states that a 501(c)(3) may not participate in any campaign activity for or against political candidates, may not make influencing legislation a substantial part of its activities, and may not let its earnings benefit any private individual.',
  },
  {
    category: 'rules',
    question: 'Can I pay myself if I run a nonprofit?',
    answer:
      'Yes. Reasonable compensation for work actually done is normal. What the IRS prohibits is private inurement, meaning the organisation’s earnings benefiting an insider, and it can impose an excise tax on excess benefit transactions. Publishing your Form 990 helps.',
  },
  {
    category: 'rules',
    question: 'Can you call yourself a nonprofit without a 501c3?',
    answer:
      'Generally yes, because nonprofit status comes from how you incorporate at state level while 501(c)(3) is a separate federal tax exemption. What you cannot do is tell donors their gifts are tax-deductible before you have that exemption. Fix that wording today.',
  },

  /* ── Scope and working together ──────────────────────────────── */
  {
    category: 'working',
    question: 'How do I create a website for my non-profit?',
    answer:
      'Write the one sentence that says what you do. Decide who it is for, in order. Pick a platform based on who maintains it. Build the donation and volunteer paths first. Get the transparency documents online. Then test on a cheap phone.',
  },
  {
    category: 'working',
    question: 'What is a fair price for a nonprofit website?',
    answer:
      'One where the scope is written down before anyone starts, you own the result, and whoever is quoting has asked about your donor system and your accessibility obligations. What moves cost: templates, content, and integrations touching the donation flow.',
  },
  {
    category: 'working',
    question: 'How long does a nonprofit website take to build?',
    answer:
      'The build is rarely the slow part. Content, photo permissions, board approval and the annual report set the calendar. A focused site with content ready moves quickly. One needing new programme copy and sign-off from a quarterly board takes longer.',
  },
  {
    category: 'working',
    question: 'Do you work with churches, foundations and associations too?',
    answer:
      'Yes. The mechanics are close enough: recurring giving, a membership or congregation to serve, a board that reads the site, and usually nobody technical on staff. The differences are in what has to be published and how giving is structured.',
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
  name: 'Nonprofit Website Design: Built for Donors, Grants and Boards',
  description:
    'Nonprofit website design for US charities, foundations and NGOs, covering donation flow, recurring giving, transparency and impact reporting, WCAG 2.1 Level AA accessibility, volunteer signup and site ownership.',
  inLanguage: 'en-US',
  dateModified: PAGE_MODIFIED,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'Nonprofit website design' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://factoryjet.com/images/us/nonprofit-website-design/hero.webp',
    width: 1440,
    height: 864,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#what-is-nonprofit-website-design'],
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
  name: 'Nonprofit Website Design',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType:
    'Nonprofit Website Design / Nonprofit Web Design / Charity Website Design / NGO Website Design / Nonprofit Website Development',
  audience: {
    '@type': 'Audience',
    name: 'US nonprofits, charities, foundations, NGOs, churches and membership associations',
  },
  description:
    'Design and build of nonprofit websites for US charities and NGOs, covering donation flow design, recurring giving and sustainer retention, donor trust and transparency pages, impact reporting, WCAG 2.1 Level AA accessibility, volunteer recruitment, editable content for non-technical staff, site and data ownership, page speed and visibility inside AI answer engines.',
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Nonprofit website design build',
    itemListElement: DELIVERABLES.map((d) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: d.title, description: d.body },
    })),
  },
};

const ITEMLIST_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Twelve things we build into a nonprofit website',
  description:
    'The twelve pieces of work that make up a serious nonprofit website design project, in roughly the order they happen.',
  numberOfItems: DELIVERABLES.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: DELIVERABLES.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: d.title,
    description: d.body,
  })),
};

const LEAKS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Eight places nonprofit donation flows lose people',
  description:
    'The eight failure points we find most often when auditing a nonprofit donation page, with the published benchmark data behind each one.',
  numberOfItems: LEAKS.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: LEAKS.map((l, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: l.title,
    description: l.body,
  })),
};

const RIVALS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Sites ranking for nonprofit website design in the United States',
  description:
    'Agencies, products and publications appearing on the United States search results for nonprofit website design, with what each is genuinely strong at.',
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

/** Single source of truth for the breadcrumb trail. Feeds BOTH the visible
 *  <Breadcrumbs> component and the BreadcrumbList JSON-LD below, so the two
 *  can never drift into showing a different path than the schema claims. */
const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Home', url: 'https://factoryjet.com' },
  { name: 'Services', url: 'https://factoryjet.com/services' },
  { name: 'Nonprofit Website Design', url: PAGE_URL },
];

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
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

export default function NonprofitWebsiteDesignPage() {
  return (
    <>
      <script
        id="npwd-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }}
      />
      <script
        id="npwd-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="npwd-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEMLIST_SCHEMA) }}
      />
      <script
        id="npwd-leaks-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LEAKS_SCHEMA) }}
      />
      <script
        id="npwd-rivals-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(RIVALS_SCHEMA) }}
      />
      <script
        id="npwd-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        id="npwd-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        <Breadcrumbs items={BREADCRUMB_ITEMS} />
        {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div>
              <p className="fj-eyebrow">Nonprofit website design &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.6rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                Most of your traffic is on a phone.{' '}
                <span style={{ color: ORANGE }}>Most of your giving is not</span>
              </h1>
              <p
                className="mt-6 max-w-[545px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                Donors, grant officers, your board and the people you serve read the same website. We design
                for all four, then fix the donation flow that is losing them.{' '}
                <b className="font-bold text-fj-ink">You own everything at the end.</b>
              </p>
              <HeroInlineForm
                region="us"
                source="services_nonprofit_website_design_hero"
                submitLabel="Get a nonprofit site review"
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
                  href="#donation-flow"
                  className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4"
                  style={{ color: ORANGE_DARK }}
                >
                  Where donation forms lose people
                </Link>
              </div>
            </div>

            {/* Right: hero image + the benchmark card */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div
                className="overflow-hidden rounded-3xl border"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 24px 60px rgba(20,18,12,0.12)' }}
              >
                <img
                  src="/images/us/nonprofit-website-design/hero.webp"
                  alt="Volunteers sorting donated clothing and canned food around a bright wooden table while two of them review a website on a laptop"
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
                  US nonprofit benchmarks, 2025 giving year
                </span>
                <ul className="mt-3 space-y-2.5">
                  {[
                    {
                      k: 'Traffic arriving on a mobile device',
                      v: '52%',
                      w: 'Mobile produced just 28 percent of online revenue',
                    },
                    {
                      k: 'Mobile donation pages that convert',
                      v: '8%',
                      w: 'Against 11 percent on desktop',
                    },
                    {
                      k: 'Online revenue arriving in December',
                      v: '37%',
                      w: 'With 4 percent landing on December 31 alone',
                    },
                  ].map((row) => (
                    <li
                      key={row.k}
                      className="border-t pt-2.5 first:border-t-0 first:pt-0"
                      style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-fj-body text-[0.875rem] font-bold text-fj-ink">{row.k}</span>
                        <span className="text-right font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                          {row.v}
                        </span>
                      </div>
                      <small className="mt-0.5 block font-fj-body text-[0.75rem] text-fj-neutral-600">{row.w}</small>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-fj-body text-[0.75rem] text-fj-neutral-600">
                  M+R Benchmarks 2026, 180 US nonprofits. Linked below.
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
                id="what-is-nonprofit-website-design"
                className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink"
                style={{ letterSpacing: '-0.02em' }}
              >
                What is nonprofit website design?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">
                  Nonprofit website design is the design of a website for a charity, foundation or NGO, where
                  the same pages have to raise money, recruit volunteers, satisfy funders and serve the people
                  the organisation exists for.
                </b>{' '}
                It is a harder brief than a business site: four audiences read the same pages, and usually
                nobody technical is on staff to maintain it.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                The decisions that matter are not the ones in a portfolio: whether the donation form finishes
                on a five-year-old phone, whether a grant officer can find your financials without emailing
                you, and whether the site is still accurate in eighteen months.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. CAPABILITY ROW (proof without invented numbers) ──────── */}
        <section className="bg-white py-10 md:py-12">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { b: 'Donation flow first', s: 'Designed and tested before the homepage' },
                { b: 'WCAG 2.1 AA built in', s: 'Part of the build, not a later remediation' },
                { b: 'You own the exit', s: 'Domain, content, donor data and code stay yours from day one' },
                { b: 'No invented impact', s: 'We will not write a number you cannot evidence' },
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

        {/* ─── 4. SIX READERS ──────────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Who is actually reading
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[800px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              One website, <span style={{ color: ORANGE }}>six very different readers</span>
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              A commercial site serves one buyer. Yours serves a stranger with a card, a funder, your board,
              the person you help, a volunteer, and a model summarising you.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {READERS.map((r) => (
                <div key={r.tag} className="rounded-2xl p-7" style={{ background: r.tint }}>
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: r.accent }}>
                    {r.tag}
                  </span>
                  <h3 className="fj-display mb-2 mt-2 text-[1.125rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {r.title}
                  </h3>
                  <p className="font-fj-body text-[0.9062rem] font-medium leading-[1.6] text-fj-neutral-700">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. DONATION FLOW LEAKS (listicle) ───────────────────────── */}
        <section id="donation-flow" className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The money leak
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Eight places a donation flow{' '}
              <span style={{ color: ORANGE }}>loses people who already said yes</span>
            </h2>
            <p className="mt-4 max-w-[760px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              These are people who clicked Donate. They had already decided. Everything below is a design
              decision that talked them out of it.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {LEAKS.map((l) => (
                <li
                  key={l.n}
                  className="flex flex-col rounded-2xl border p-6 md:p-7"
                  style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}
                >
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    {l.n}
                  </span>
                  <h3 className="fj-display mt-2 text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {l.title}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-600">{l.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── 6. MID-PAGE CTA ─────────────────────────────────────────── */}
        <section className="py-12 md:py-14" style={{ background: PEACH }}>
          <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[640px]">
              <h2 className="fj-display text-[1.5rem] font-bold text-fj-ink md:text-[1.75rem]" style={{ letterSpacing: '-0.02em' }}>
                Want us to try donating on your site and tell you what happened?
              </h2>
              <p className="mt-3 font-fj-body text-[1rem] leading-[1.6] text-fj-neutral-700">
                Send us the URL. We will make a real gift on a phone, count the fields, check the keyboard
                path, and send you the list. No charge.
              </p>
            </div>
            <div className="flex-shrink-0">
              <ModalCTAButton label="Get a nonprofit site review" region="us" btnVariant="primary-light" />
            </div>
          </div>
        </section>

        {/* ─── 7. ACCESSIBILITY ────────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: GREEN_SOFT }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative mx-auto w-full max-w-[520px]">
              <img
                src="/images/us/nonprofit-website-design/team-desk.webp"
                alt="Two colleagues at a desk, one reading with a refreshable braille display while the other points at a page on a laptop screen"
                width={1264}
                height={944}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl border object-cover"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 18px 44px rgba(20,18,12,0.09)' }}
              />
            </div>

            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: GREEN }}>
                Not a nice to have
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                Accessibility is often a{' '}
                <span style={{ color: ORANGE_DARK }}>legal obligation, not a preference</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                The Department of Justice web rule sets Web Content Accessibility Guidelines version 2.1,
                Level AA as the technical standard for state and local government web content. Where a
                government contracts another organisation to deliver public services, that contractor must
                follow Title II too. The rule's own example is a nonprofit running a treatment programme for
                a state agency.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  {
                    t: 'If you deliver a service under a government contract',
                    s: 'The obligation reaches you through that contract',
                  },
                  {
                    t: 'Compliance dates are already published',
                    s: 'April 26 2027 for entities covering fifty thousand people or more, April 26 2028 for smaller ones',
                  },
                  {
                    t: 'Level AA is a specific, testable bar',
                    s: 'Keyboard operation, visible focus, contrast, labelled fields, alt text, captions, heading order',
                  },
                  {
                    t: 'The people you serve are the point',
                    s: 'If disabled people are part of who you exist for, an unusable site is a programme failure first',
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
                We are not your lawyers. Building to Level AA is far cheaper than remediating a live site,
                and an accessibility overlay widget is not conformance.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 8. THE BUILD LISTICLE ───────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The build
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[800px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Twelve things we build into{' '}
              <span style={{ color: ORANGE }}>a nonprofit website</span>
            </h2>
            <p className="mt-4 max-w-[720px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Roughly in the order they happen. A proposal that never reaches four, six or ten is a repaint.
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

            <p className="mt-8 max-w-[840px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Item twelve is run by our{' '}
              <Link href="/services/ai-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                AI SEO practice
              </Link>{' '}
              and the search side by our{' '}
              <Link href="/services/seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                SEO team
              </Link>
              . If you are staying on WordPress, our{' '}
              <Link href="/services/wordpress-development" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                WordPress development
              </Link>{' '}
              work covers the build itself.
            </p>
          </div>
        </section>

        {/* ─── 9. LOCK-IN ─────────────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The trap nobody warns you about
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Platform lock-in costs a nonprofit{' '}
              <span style={{ color: ORANGE }}>more than it costs a business</span>
            </h2>
            <p className="mt-4 max-w-[780px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              A company that outgrows its platform moves. A nonprofit is stuck: the money was granted for
              programmes and there is no line item called migration.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">What you should own outright</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'The domain, in an account your organisation controls',
                    'Content exportable as reusable text',
                    'Donor records you can take with you',
                    'The code, in a repository you own',
                    'The processor relationship, in your legal name',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)', background: '#FFFFFF' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">Questions worth asking any vendor</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'If we leave next year, what do we walk away with',
                    'Who is the domain registrant right now, in writing',
                    'Can we export donor records without asking you',
                    'Does the donation form belong to us or you',
                    'What happens if the person who built it leaves',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  Ask us the same. A vendor who gets defensive about handover is telling you what the next five
                  years look like.
                </p>
              </div>
            </div>
          </div>
        </section>

    

        <MidPageCTA
          headline={'Donations stalling at the second step?'}
          sub={'Send us your giving flow. We will walk it as a donor would and tell you exactly where people are dropping out.'}
          label={'Get a free donation flow review'}
        />

        {/* ─── 10. COMPARISON TABLE (named rivals from the live SERP) ──── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Who else you are looking at
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Us next to the firms{' '}
              <span style={{ color: ORANGE }}>ranking above us</span>
            </h2>
            <p className="mt-4 max-w-[760px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We pulled the live US result in August 2026. These three hold positions we do not. Over half the
              top twelve results are galleries rather than agencies.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[900px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of FactoryJet, Elevation Web, Wired Impact and Double the Donation across search
                  position, what they sell, pricing guidance, portability, specialisms and best fit.
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
                      Elevation Web
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Wired Impact
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Double the Donation
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
                        {row.elev}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.wired}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.dtd}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Positions are a snapshot and they move.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </section>

        {/* ─── 11. FIT CHECK ──────────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
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
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              A mismatched project costs a nonprofit a year of fundraising it cannot get back.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A strong fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'Online giving matters and the form has never been tested',
                    'You are on a platform you cannot leave',
                    'A funder or government contract has raised accessibility',
                    'Grant officers keep asking for documents that should be published',
                    'Nobody on staff is technical and the site has gone stale',
                    'You want to be found in search and inside AI answers',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-ink">
                      <CheckCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-7 md:p-8" style={{ borderColor: 'rgba(15,15,18,0.12)', background: '#FFFFFF' }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A poor fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'You need a site online this month and nobody will maintain it',
                    'Nobody can give us an hour with a donor or programme lead',
                    'You want impact numbers your programme team cannot evidence',
                    'It is October and you want to migrate before December',
                    'The project is one board member’s taste with no agreed goal',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  If the structure is sound, start with{' '}
                  <Link href="/services/website-redesign" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    website redesign
                  </Link>
                  . For a very small team, our{' '}
                  <Link href="/services/small-business-website-design" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    small business website design
                  </Link>{' '}
                  is scoped closer to that shape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 12. CITATIONS ──────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Check us against the source
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Where every number on this page{' '}
              <span style={{ color: ORANGE }}>comes from</span>
            </h2>
            <p className="mt-4 max-w-[740px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Every figure above comes from one of these four sources, opened before publishing.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  src: 'M+R Benchmarks 2026',
                  title: 'The mobile gap and the December spike',
                  body:
                    'The 2026 study of 180 participating nonprofits. Source for the 52 percent mobile traffic against 28 percent of revenue split, the 8 and 11 percent donation page completion rates, and December carrying 37 percent of annual revenue.',
                  href: 'https://mrbenchmarks.com/website-performance/',
                },
                {
                  src: 'M+R Benchmarks 2026',
                  title: 'Monthly giving and sustainer retention',
                  body:
                    'The fundraising chapter. Source for monthly giving at 27 percent of online revenue, 10 percent of sustainers lapsing within two months, and 71 percent still giving after a full year.',
                  href: 'https://mrbenchmarks.com/fundraising/',
                },
                {
                  src: 'Nielsen Norman Group',
                  title: 'What donors look for on a homepage',
                  body:
                    'Source for 43 percent of nonprofit homepages answering what the organisation does, 4 percent explaining how donations are used, and mission mattering roughly 3.6 times more than the next factor.',
                  href: 'https://www.nngroup.com/articles/donation-usability/',
                },
                {
                  src: 'Nielsen Norman Group',
                  title: 'Volunteering and third-party payment pages',
                  body:
                    'Two studies covering 60 nonprofit and association websites. Source for the third-party payment page problem and the 6.7 out of 7 volunteering score.',
                  href: 'https://www.nngroup.com/articles/non-profit-websites-donations/',
                },
                {
                  src: 'ADA.gov',
                  title: 'WCAG 2.1 Level AA and how it reaches nonprofits',
                  body:
                    'Source for WCAG 2.1 Level AA as the Title II technical standard for state and local government web content, and for the rule reaching nonprofits that deliver public services under a government contract.',
                  href: 'https://www.ada.gov/resources/2024-03-08-web-rule/',
                },
                {
                  src: 'Internal Revenue Service',
                  title: 'What a 501(c)(3) may and may not do',
                  body:
                    'Source for what a 501(c)(3) may not do: political campaign activity, substantial lobbying, and earnings benefiting any private shareholder or individual.',
                  href: 'https://www.irs.gov/charities-non-profits/charitable-organizations/exemption-requirements-501c3-organizations',
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

            <p className="mt-8 max-w-[880px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              The Nielsen Norman Group nonprofit studies were published in 2009 and 2011. We quote them
              because they remain the most detailed public usability research on donation behaviour, not
              because they are recent. Item eleven uses Google&rsquo;s own target, an Interaction to Next
              Paint of{' '}
              <a
                href="https://web.dev/articles/inp"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
                style={{ color: ORANGE_DARK }}
              >
                200 milliseconds or less as good responsiveness
              </a>
              . Nothing here is legal or tax advice. Competitor positions come from DataForSEO, August 2026.
            </p>
          </div>
        </section>

        {/* ─── 13. WHO YOU WORK WITH (E-E-A-T) ────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: LAV_SOFT }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-[480px]">
              <img
                src="/images/us/nonprofit-website-design/volunteers.webp"
                alt="Three volunteers potting seedlings together at a workbench in a bright community greenhouse"
                width={1264}
                height={944}
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
                We are not a nonprofit-only shop,{' '}
                <span style={{ color: ORANGE_DARK }}>and that is worth saying out loud</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                Some very good agencies work on nothing but nonprofits and we named one above. We bring a
                commerce background: the donation form gets treated like a checkout.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { t: 'Founder-led scoping', s: 'Bhavesh Barot scopes it and stays on the account' },
                  { t: 'Checkout discipline on the donation form', s: 'The field-by-field work we do on ecommerce' },
                  { t: 'Design, build and search in one team', s: 'Structure and visibility decided by one team' },
                  { t: 'No invented proof, ever', s: 'No fabricated impact numbers, no borrowed testimonials' },
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

        {/* ─── 14. RELATED SERVICES ───────────────────────────────────── */}
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
                  label: 'Small business website design',
                  href: '/services/small-business-website-design',
                  desc: 'For very small teams, the closest fit for a two-person nonprofit.',
                },
                {
                  label: 'Website redesign',
                  href: '/services/website-redesign',
                  desc: 'When the structure is sound and the problem is presentation.',
                },
                {
                  label: 'WordPress development',
                  href: '/services/wordpress-development',
                  desc: 'The platform most nonprofits are on, built so anyone can run it.',
                },
                {
                  label: 'SEO services',
                  href: '/services/seo',
                  desc: 'Gets your programme pages found by people looking for help.',
                },
                {
                  label: 'AI SEO',
                  href: '/services/ai-seo',
                  desc: 'Getting named inside ChatGPT, Perplexity and Google AI Overviews.',
                },
                {
                  label: 'Web design',
                  href: '/services/web-design',
                  desc: 'For a straightforward site rather than a giving platform.',
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

        {/* ─── 15. FAQ ────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="Nonprofit website design FAQ"
          headline="The questions nonprofits actually search"
          lead="Twenty-two answers on what belongs on a nonprofit website, how to stop losing donors on the form, which platform suits which size of organisation, and what drives the scope of a build."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 16. FINAL CTA (the one dark section) ───────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="BEFORE YOUR NEXT APPEAL"
          headline="Find out what your donation page is costing you"
          sub="Book a call with the founder. We will make a real gift on a phone, count every field you ask for, tab through the form the way a screen reader user would, and tell you whether this is a form fix or a redesign."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See website redesign', href: '/services/website-redesign' }}
          objectionHandler="Founder-led. No guaranteed results, no invented impact numbers, and you own the site, the content, the donor data and the domain."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
