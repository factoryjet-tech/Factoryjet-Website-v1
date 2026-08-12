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
  title: 'Nonprofit Website Design: Built for Donors, Grants and Boards | FactoryJet',
  description:
    'Nonprofit website design for US charities and NGOs. Donation flows that finish on a phone, recurring giving, transparency pages grant officers actually read, WCAG 2.1 AA accessibility, volunteer signup, and a site one non-technical person can run.',
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
      'They landed from a search or a friend sharing a link, and they are deciding in under a minute whether you are real. Nielsen Norman Group tested 23 nonprofit sites and found only 43 percent answered what the organisation actually does on the homepage. Four percent explained how donations get used. That is the gap you are losing them in.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '02',
    title: 'The grant officer doing diligence',
    body:
      'They are not browsing. They are checking whether your programmes match what your application claimed, whether your board is real, whether your financials are published, and whether last year produced anything you can describe. If those pages do not exist, they do not phone you. They just move down the list.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '03',
    title: 'Your own board and staff',
    body:
      'Board members send your site to people they want to impress, and they notice when their own biography is three years out of date. Programme staff need to publish an update without filing a ticket. A nonprofit site that only the web volunteer can edit is a site that quietly stops being true.',
    tint: LAV_SOFT,
    accent: LAV,
  },
  {
    tag: '04',
    title: 'The person you actually serve',
    body:
      'Somebody looking for the food pantry hours, the helpline number, the eligibility rules or the intake form. They are often on an older phone, on a weak connection, sometimes using a screen reader. This audience gets designed for last and needs the site most, which is backwards and fixable.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '05',
    title: 'The volunteer with a free Saturday',
    body:
      'Nielsen Norman Group found volunteering was the single best-performing task in their nonprofit research, rated 6.7 out of 7, because most sites put a plain link on the homepage and described the actual duties and hours. It is the easiest win on this list and it is still missing from a lot of sites.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '06',
    title: 'A model summarising you to someone else',
    body:
      'Google renders an AI Overview on this topic, and the sources it pulls are frequently not the pages ranking first. If your mission, your programmes and your numbers only exist inside a PDF or an image, no engine can quote you. Plain text on a real page is now a fundraising asset.',
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
      'M+R found mobile devices carried 52 percent of nonprofit website traffic in 2025 but produced only 28 percent of online revenue. Of visitors who reached a primary donation page, 11 percent of desktop users completed a gift against 8 percent on mobile. For small nonprofits on mobile it was 4 percent. Most of that gap is form design, not donor intent.',
  },
  {
    n: '02',
    title: 'The handoff to a payment page that looks nothing like you',
    body:
      'Nielsen Norman Group specifically flagged third-party payment services as the one big usability problem in an otherwise fine donation workflow. A donor clicks Give, lands on a page with a different logo and a different font, and pauses. If your processor allows a hosted page you can brand, brand it. If it does not, that is a reason to change processor.',
  },
  {
    n: '03',
    title: 'Fields that exist for your database, not the donor',
    body:
      'Title, middle initial, full postal address, how did you hear about us, employer, phone. Every one was added by somebody with a good reason and none of them are needed to take a card and email a receipt. Ask for the address only when you are actually mailing something, and ask for the rest after the gift is done.',
  },
  {
    n: '04',
    title: 'No wallet buttons',
    body:
      'M+R reports that 79 percent of nonprofits offered PayPal on donation pages, 58 percent offered Google Pay, 57 percent offered Apple Pay and 44 percent offered Venmo. A wallet button skips the entire card form on a phone, which is exactly where the drop-off is. If you are in the minority without them, that is the cheapest fix on this page.',
  },
  {
    n: '05',
    title: 'An amount ladder somebody guessed at',
    body:
      'The suggested amounts on most donation forms were set once, by whoever built the form, and never revisited. They should be based on your actual gift distribution, they should differ between a cold visitor and a returning supporter, and each one should say what it does rather than sitting there as a bare number.',
  },
  {
    n: '06',
    title: 'Monthly giving hidden behind a tab',
    body:
      'M+R found monthly giving accounted for 27 percent of all online revenue in 2025. If the recurring option is a small toggle nobody notices, you are asking your best long-term supporters to opt in by accident. Make it a visible, explained choice with its own reason to exist.',
  },
  {
    n: '07',
    title: 'Nowhere for a sustainer to update a dead card',
    body:
      'Cards expire and get reissued after fraud. M+R found 10 percent of sustainers stop giving within two months of setting up a monthly gift, and about 71 percent are still giving after a full year. A self-service page where somebody can update their card without emailing your one staff member protects revenue you already earned.',
  },
  {
    n: '08',
    title: 'A December that the site was never tested for',
    body:
      'M+R found nonprofits received 37 percent of all 2025 online revenue in December, and 4 percent of the annual total on the last day of the year alone. That is your entire year running through one form in one month. Nothing should ship to production after the first week of November.',
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
      'Not your tagline. The plain sentence a stranger would use to describe you to somebody else. Nielsen Norman Group found that when donors chose between two similar charities, what the organisation stands for was roughly 3.6 times more important than the runner-up factor. Get that sentence right and it goes in the first screen, in text, not inside an image.',
  },
  {
    n: '02',
    title: 'A donation flow rebuilt around the phone',
    body:
      'Wallet buttons first, then a short card form. Recurring presented as a real choice. Amounts drawn from your own giving data. A receipt that arrives immediately and reads like a person wrote it. We test the whole thing on an older Android handset on a throttled connection, because that is a truer picture of your donors than a designer’s laptop.',
  },
  {
    n: '03',
    title: 'A sustainer programme the site actually supports',
    body:
      'A monthly giving page that explains what regular support makes possible, a self-service portal for updating a card or changing an amount, and a cancellation path that is honest rather than hidden. Hiding the cancel link buys you a few weeks of revenue and costs you the relationship.',
  },
  {
    n: '04',
    title: 'The transparency pages grant officers look for',
    body:
      'Your Form 990 or annual report where somebody can find it, a real board list with real names, a financial summary in plain language, your legal name and EIN, and a physical address. These pages get very little traffic and they decide whether serious money takes you seriously.',
  },
  {
    n: '05',
    title: 'Impact reporting that is not a vanity number',
    body:
      'Meals served is an activity, not an outcome. We build an impact page around what changed and how you know, with the method stated and the uncertainty admitted. It is harder to write and it is the only version a programme officer believes. We will not invent a figure for you, ever.',
  },
  {
    n: '06',
    title: 'WCAG 2.1 Level AA built in, not bolted on',
    body:
      'Keyboard operation, visible focus, real contrast, labelled form fields, alt text, captions, and headings in order. If you deliver services under contract for a state or local government, the Department of Justice web rule makes this a legal question and not a preference. Retrofitting accessibility after launch always costs more than building it in.',
  },
  {
    n: '07',
    title: 'A volunteer path with a human at the end of it',
    body:
      'A homepage link, honest descriptions of duties and hours, a short form, and a named person with a phone number. Nielsen Norman Group found people often want to speak to somebody before volunteering, so a form with no human attached quietly filters out your most committed people.',
  },
  {
    n: '08',
    title: 'A service-user path that assumes nothing',
    body:
      'Hours, eligibility, what to bring, what it costs you nothing to ask, and where the door is. Written at a reading level anybody can use, translated where your community needs it, and reachable in two taps from the homepage. This is the part of the site that is genuinely somebody’s day.',
  },
  {
    n: '09',
    title: 'Editing that survives your staff turnover',
    body:
      'A programme manager who is not a web person has to be able to add an event, update hours and publish a story without asking anyone. We build a small set of clear blocks rather than a page builder with ninety options, because a nonprofit site fails from neglect far more often than from bad design.',
  },
  {
    n: '10',
    title: 'An exit you own from day one',
    body:
      'Your domain in your registrar account, your content exportable, your donor data in a system you control, your code in a repository with your name on it. If we disappeared tomorrow another developer could pick it up. Read that again if you are currently on a platform where none of it is true.',
  },
  {
    n: '11',
    title: 'Speed budget on the pages that carry the year',
    body:
      'Google treats an Interaction to Next Paint of 200 milliseconds or less as good responsiveness. The donation page is the one page where a slow script costs real money, and it is usually the page carrying the most third-party tags. We hold the budget where it is actually being spent.',
  },
  {
    n: '12',
    title: 'Written so an answer engine can quote you',
    body:
      'Google renders an AI Overview on nonprofit web design queries today. Being summarised well means putting your mission, your programmes, your service details and your numbers in plain text on real pages, not locked in a PDF or baked into a graphic. Same work that helps a screen reader helps a model.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Comparison table: firms actually ranking for this query
───────────────────────────────────────────────────────────────────────────── */

type CompRow = { label: string; fj: string; elev: string; wired: string; dtd: string };

const COMPARISON_ROWS: ReadonlyArray<CompRow> = [
  {
    label: 'Position on this query',
    fj: 'Not on page one. We are the challenger here',
    elev: 'Ranks first with a nonprofit website design page',
    wired: 'Ranks tenth with its own product page',
    dtd: 'Ranks third with a roundup of design companies',
  },
  {
    label: 'What they actually sell',
    fj: 'A custom build you own outright',
    elev: 'Custom nonprofit websites plus ongoing marketing',
    wired: 'A nonprofit website product with set designs',
    dtd: 'Matching gift software. The article is content marketing',
  },
  {
    label: 'Nonprofit-only focus',
    fj: 'No. Nonprofits are one of several sectors we build for',
    elev: 'Yes, stated plainly on their own site',
    wired: 'Yes, built only for nonprofits',
    dtd: 'Yes, their whole product serves nonprofits',
  },
  {
    label: 'Published pricing guidance',
    fj: 'Scoped on a call, fixed proposal before work starts',
    elev: 'Contact-led. Takes RFPs through their site',
    wired: 'Publishes a public pricing page',
    dtd: 'Quote-based, listed as get pricing on their site',
  },
  {
    label: 'Portability if you leave',
    fj: 'Your domain, your content, your data, your code',
    elev: 'Custom builds, so ask them directly about handover',
    wired: 'A hosted product, so leaving means rebuilding',
    dtd: 'Not applicable, they are not building your site',
  },
  {
    label: 'Named nonprofit specialisms',
    fj: 'Donation flow, accessibility, search and AI visibility',
    elev: 'Google Ad Grant management, branding, SEO, maintenance',
    wired: 'Donation, volunteer, event and library systems built in',
    dtd: 'Matching gifts, volunteer grants, payroll giving',
  },
  {
    label: 'Who does the thinking',
    fj: 'The founder scopes it and stays on the account',
    elev: 'Agency team with named staff and stated values',
    wired: 'Product team with a done-for-you setup process',
    dtd: 'A content team writing about other agencies',
  },
  {
    label: 'Pick them when',
    fj: 'You need a site you own that also has to be found',
    elev: 'You want a nonprofit-only agency with Ad Grant depth',
    wired: 'You are tiny, have no developer and want it handled',
    dtd: 'You are still building a shortlist to contact',
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
      'Their own site describes them as a website design agency specialising in nonprofits, covering web development, user experience, branding, marketing, Google Ad Grant management, search, social and maintenance. They also publish free resources for the sector including a tech grants list and a nonprofit discounts programme. If you want a shop that works on nothing but nonprofits, they are the obvious call and we will say so.',
  },
  {
    domain: 'wiredimpact.com',
    note: 'A product, not an agency, and open about it',
    detail:
      'They sell a nonprofit website product with named designs and built-in donation, volunteer, event and form systems, plus a done-for-you setup and a public pricing page. Their own line is that without ease of use nothing else matters, which is a defensible position for an organisation with two staff and no developer. The trade is that you are renting the platform rather than owning the site.',
  },
  {
    domain: 'doublethedonation.com',
    note: 'A roundup published by a software company',
    detail:
      'Ranks third with a list of twenty-plus nonprofit website design companies. Worth knowing that Double the Donation sells matching gift and volunteer grant software to nonprofits, so the article is content marketing rather than an independent review. It is still a useful place to build a shortlist, as long as you read it knowing who wrote it.',
  },
  {
    domain: 'newmediacampaigns.com',
    note: 'Ranks seventh, and we could not read them',
    detail:
      'Holds a top-ten position with a page titled Nonprofit Web Design. Their site returned an empty response to us behind what looks like bot protection, so we could not read their positioning to describe it fairly, and we are not going to guess. Their ranking on the exact term is real and you should include them in your shortlist.',
  },
  {
    domain: 'highmountaincreative.com',
    note: 'Cited by the AI Overview, not ranking first',
    detail:
      'Ranks fifth with an article about nonprofit websites that spark curiosity, and is one of the sources Google’s AI Overview draws on for this query. A useful demonstration that the pages an engine quotes and the pages that rank highest are often not the same pages, which is why we treat those as two separate jobs.',
  },
  {
    domain: 'weareloop.com',
    note: 'Second on this result, and the brand-led answer',
    detail:
      'Loop describes itself as a social impact design agency partnering with purpose-driven organisations, and sells nonprofit branding, nonprofit website design and nonprofit annual reports as three named services. Their published work includes Oxfam Canada, UNHCR and the Haisla Nation. If your problem is that nobody understands who you are, rather than that your donation form leaks, they are a better first call than we are.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ data: 32 items across 5 categories, grounded in live US PAA
   plus the related searches on the same result.
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Nonprofit website basics' },
  { key: 'donations', label: 'Donations, volunteers and trust' },
  { key: 'platforms', label: 'Platforms, builders and free options' },
  { key: 'rules', label: 'Nonprofit rules people ask about' },
  { key: 'working', label: 'Scope and working together' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── Nonprofit website basics ───────────────────────────────────────── */
  {
    category: 'basics',
    question: 'What is nonprofit website design?',
    answer:
      'Nonprofit website design is the design of a website for a charity, foundation or NGO, where the site has to raise money, recruit volunteers, satisfy funders and serve the people the organisation exists for, all at once. It is a harder brief than a normal business site because four different audiences read the same pages and there is usually nobody in-house to maintain it.',
  },
  {
    category: 'basics',
    question: 'What should be included on a non-profit website?',
    answer:
      'At minimum: what you do in one plain sentence, who you help and how, a donation page that works on a phone, a volunteer page with real duties and a named contact, your programmes, your board and staff, your financials or annual report, contact details with a physical address, and an accessibility statement. Anything past that is optional. Those are not.',
  },
  {
    category: 'basics',
    question: 'What do non-profit websites usually have?',
    answer:
      'Usually a homepage with a photo and a Donate button, an About page, a programmes page, a news blog that stopped updating a while ago, and a donation form from whichever processor was cheapest. That set is the baseline, not the target. The things that separate good nonprofit sites from average ones are transparency pages, a working sustainer flow and accessibility.',
  },
  {
    category: 'basics',
    question: 'What are common nonprofit mistakes?',
    answer:
      'Leading with your own history instead of what you do. Hiding how donations are spent. A donation form nobody has tried on a phone. Impact numbers with no method behind them. A staff page three years stale. Publishing the annual report as a scanned PDF. And launching a new site in December, when most online giving actually happens.',
  },
  {
    category: 'basics',
    question: 'What are the five golden rules of a website?',
    answer:
      'There is no official list, so treat any confident version carefully. The five that hold up for nonprofits: say what you do immediately, make giving and volunteering obvious, prove your claims with real documents, load fast on an old phone, and stay usable for people using a keyboard or a screen reader. Everything else is preference.',
  },
  {
    category: 'basics',
    question: 'What are the best nonprofit websites in 2026?',
    answer:
      'No authoritative ranking exists, and most lists claiming one are published by companies selling to nonprofits. Galleries from Awwwards, Dribbble and agency roundups are fine for visual ideas. Judge a site properly by trying to donate on it with your phone, finding its financials, and tabbing through the donation form with a keyboard.',
  },
  {
    category: 'basics',
    question: 'What are the best NGO websites in the world?',
    answer:
      'The large international NGOs tend to have the strongest sites simply because they can afford dedicated teams, so copying their structure rarely helps a small organisation. What is worth copying is specific: their donation forms are short, their impact pages state a method, and their programme pages are written for someone who has never heard of the issue.',
  },
  {
    category: 'basics',
    question: 'Where can I find good nonprofit website examples?',
    answer:
      'Start with the design galleries on Awwwards and Dribbble for visual direction, and the agency roundups for a shortlist of firms. Then look at organisations in your own cause area and roughly your own size, because a national brand with a full-time digital team is not a realistic model for a team of four.',
  },
  {
    category: 'basics',
    question: 'What is the difference between nonprofit website design and nonprofit website development?',
    answer:
      'Design is the decisions and the visual work: what pages exist, what order they go in, what the donation flow asks for, how it looks. Development is building it so it works, loads fast, stays accessible and connects to your donor system. Most nonprofits need both, and most problems we get called about are design decisions rather than code.',
  },

  /* ── Donations, volunteers and trust ────────────────────────────────── */
  {
    category: 'donations',
    question: 'How do we stop losing people on the donation form?',
    answer:
      'Put wallet buttons like Apple Pay and Google Pay above the card form, cut every field you do not need to charge a card and email a receipt, brand the payment step so it does not look like a different company, and test the whole thing on an old phone. M+R found only 8 percent of mobile visitors who reach a donation page complete a gift.',
  },
  {
    category: 'donations',
    question: 'Should we push monthly giving or one-time gifts?',
    answer:
      'Both, but present monthly as a real choice rather than a checkbox. M+R reports monthly giving made up 27 percent of all online revenue in 2025, and that about 71 percent of sustainers are still giving a year after they sign up. The catch is the first two months, when roughly 10 percent lapse, usually over payment problems you can design around.',
  },
  {
    category: 'donations',
    question: 'How do we show donors and grant officers we can be trusted?',
    answer:
      'Publish the boring documents. Your Form 990 or annual report as readable text, a real board list, a plain-language financial summary, your legal name and EIN, and a physical address. Nielsen Norman Group found only 4 percent of nonprofit homepages explained how donations get used, so simply answering that puts you ahead of most of the sector.',
  },
  {
    category: 'donations',
    question: 'Does our nonprofit website have to be accessible?',
    answer:
      'Often yes, and increasingly as a legal matter rather than a nice idea. The Department of Justice rule sets WCAG 2.1 Level AA as the standard for state and local government web content, and it explicitly covers nonprofits that run services on behalf of a government entity. Separately, if the people you serve include disabled people, an inaccessible site fails your own mission.',
  },
  {
    category: 'donations',
    question: 'How do we get more volunteer signups from the website?',
    answer:
      'Put the link on the homepage, describe the actual duties and hours before the form, keep the form short, and give a named person with a phone number. Nielsen Norman Group rated the volunteering task 6.7 out of 7 in their nonprofit research, the best score in the study, largely because sites that do these four things make it genuinely easy.',
  },
  {
    category: 'donations',
    question: 'What should an impact page actually say?',
    answer:
      'What changed, how you know, and what you are still unsure about. Counting meals served or people reached describes your activity, not your effect. State the method, name the time period, and say plainly where the data came from. A funder reading a page with an honest limitation on it trusts the rest of the page more, not less.',
  },
  {
    category: 'donations',
    question: 'When is the worst time to launch a nonprofit website?',
    answer:
      'December. M+R found nonprofits received 37 percent of all their 2025 online revenue in December, with 4 percent of the annual total arriving on the last day of the year. Launching, migrating or changing a donation processor during that window risks your largest month for the sake of a deadline nobody outside the organisation cares about.',
  },

  /* ── Platforms, builders and free options ───────────────────────────── */
  {
    category: 'platforms',
    question: 'What is the best website builder for a nonprofit?',
    answer:
      'It depends on who maintains it. If nobody on staff is technical and you need it handled, a nonprofit-specific hosted product is a reasonable trade. If you need to own the site, connect it to your donor system and be found in search, WordPress or a modern static build gives you far more room. Neither is universally right.',
  },
  {
    category: 'platforms',
    question: 'What is the best website for non-profit organizations?',
    answer:
      'There is no single best platform, and any answer naming one winner is usually selling it. The right question is what happens in three years: can you export your content, does your donor data live somewhere you control, can a new developer pick it up, and can a non-technical staff member publish an update without asking for help.',
  },
  {
    category: 'platforms',
    question: 'Is Wix free for nonprofits?',
    answer:
      'Wix has a free tier available to anyone, nonprofit or not, which shows Wix branding and uses a Wix subdomain. Removing both requires a paid plan. Wix has offered nonprofit discounts through partner programmes at various points, so check directly with Wix and with TechSoup rather than relying on a third-party page, including this one.',
  },
  {
    category: 'platforms',
    question: 'What is the downside to Wix?',
    answer:
      'Portability is the main one. Your pages are not straightforwardly exportable to another platform, so leaving means rebuilding. Beyond that, fine control over performance and accessibility is limited, and deeper integrations with donor management systems can be awkward. For a small organisation with simple needs those trades can still be worth making.',
  },
  {
    category: 'platforms',
    question: 'What is the best free website for nonprofit organizations?',
    answer:
      'Free tiers from the mainstream builders will get a basic site online, and TechSoup brokers discounted or donated software for verified nonprofits, which is usually a better route than a free tier. Be clear about what free costs you: platform branding, a weaker address, limited accessibility control, and content you may not be able to take with you.',
  },
  {
    category: 'platforms',
    question: 'Can a nonprofit get a free website?',
    answer:
      'Yes, through free builder tiers, donated software programmes, or a volunteer developer. All three work and all three have the same risk, which is what happens when the volunteer moves on or the programme changes. If you go this route, insist on owning the domain and having an export of the content from day one.',
  },
  {
    category: 'platforms',
    question: 'Should we use a nonprofit website template?',
    answer:
      'A template is a sensible starting point if your constraint is budget and time, and a poor one if your constraint is being memorable. The practical test: can you get your donation flow, your accessibility requirements and your donor system integration into the template without fighting it. If yes, use it and spend the saved effort on content.',
  },

  /* ── Nonprofit rules people ask about ───────────────────────────────── */
  {
    category: 'rules',
    question: 'What is the 33% rule for nonprofits?',
    answer:
      'It refers to the public support tests the IRS uses to decide whether an organisation counts as a public charity rather than a private foundation, which involve roughly one-third thresholds for where support comes from. We build websites, not tax filings, so confirm the current test with the IRS or your CPA before you rely on any summary, ours included.',
  },
  {
    category: 'rules',
    question: 'What is the 80/20 rule for nonprofits?',
    answer:
      'It is not a legal rule. It is the Pareto observation that a small share of donors usually provides most of the money, applied to fundraising. It is a useful prompt to look at your own gift distribution before setting the suggested amounts on your donation form, which most organisations set once and never revisit.',
  },
  {
    category: 'rules',
    question: 'What is the rule of 3 in nonprofit organizations?',
    answer:
      'There is no official rule of three, and different people use the phrase for board composition, strategic priorities or messaging. Treat any confident single definition with suspicion. If somebody quotes it at you as a requirement, ask which statute or regulation they mean, because there generally is not one.',
  },
  {
    category: 'rules',
    question: 'What is a 501c3 not allowed to do?',
    answer:
      'The IRS states that a 501(c)(3) may not participate in any campaign activity for or against political candidates, may not make attempts to influence legislation a substantial part of its activities, and may not let its earnings benefit any private shareholder or individual. For your website that means no candidate endorsements anywhere, including a staff member’s post on your blog.',
  },
  {
    category: 'rules',
    question: 'Can I pay myself if I run a nonprofit?',
    answer:
      'Yes. Reasonable compensation for work actually done is normal and expected. What the IRS prohibits is private inurement, meaning the organisation’s earnings benefiting an insider, and it can impose an excise tax on excess benefit transactions. Publishing your compensation policy and your Form 990 on the site is the simplest way to stay above suspicion.',
  },
  {
    category: 'rules',
    question: 'Can you call yourself a nonprofit without a 501c3?',
    answer:
      'Generally yes, because nonprofit status comes from how you incorporate at state level while 501(c)(3) is a separate federal tax exemption. What you cannot do is tell donors their gifts are tax-deductible before you have that exemption. If your site currently says deductible and your exemption is still pending, fix that wording today.',
  },

  /* ── Scope and working together ─────────────────────────────────────── */
  {
    category: 'working',
    question: 'How do I create a website for my non-profit?',
    answer:
      'Write the one sentence that says what you do. Decide who the site is for, in order. Pick a platform based on who will maintain it, not on features. Build the donation and volunteer paths first and everything else second. Get the transparency documents online. Then test it on a cheap phone with a keyboard and a screen reader before you launch.',
  },
  {
    category: 'working',
    question: 'What is a fair price for a nonprofit website?',
    answer:
      'A fair price is one where the scope is written down before anyone starts, you own the result, and the person quoting has asked about your donor system and your accessibility obligations. What actually moves cost: how many templates, whether we write the content, how many integrations touch the donation flow, and whether accessibility conformance has to be documented.',
  },
  {
    category: 'working',
    question: 'Is a cheap fixed-price website a good deal for a nonprofit?',
    answer:
      'Sometimes, and the number itself tells you almost nothing. What matters is what the price includes. A cheap build with no content help, no accessibility work, no donation flow testing and no handover documentation is not cheap, it is deferred. Ask what happens in year two and who owns what before you compare any two quotes.',
  },
  {
    category: 'working',
    question: 'How long does a nonprofit website take to build?',
    answer:
      'The build is rarely the slow part. Content, photo permissions, board approval and getting the annual report into readable text are what set the calendar. A focused site with content ready moves quickly. A site that needs new programme copy written from interviews and sign-off from a board that meets quarterly takes considerably longer.',
  },
  {
    category: 'working',
    question: 'How do we run the site with no developer on staff?',
    answer:
      'We build a small set of clear editing blocks rather than an unlimited page builder, write plain instructions for the four or five things you will actually do, and record short screen captures for each. Then we stay reachable. Nonprofit sites usually decay from neglect rather than from breaking, and neglect is a design problem.',
  },
  {
    category: 'working',
    question: 'Do you work with churches, foundations and associations too?',
    answer:
      'Yes. The mechanics are close enough: recurring giving, a membership or congregation to serve, a board that reads the site, and usually nobody technical on staff. The differences are in what has to be published and how the giving is structured, and we scope those before quoting rather than assuming a charity template fits.',
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

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factoryjet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://factoryjet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Nonprofit Website Design', item: PAGE_URL },
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
                Donors, grant officers, your board and the people you serve all read the same website. We
                design it for all four, then fix the donation flow that is quietly losing the ones who
                already decided to give.{' '}
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
                      w: 'But mobile produced just 28 percent of online revenue',
                    },
                    {
                      k: 'Mobile donation pages that convert',
                      v: '8%',
                      w: 'Against 11 percent on desktop, and 4 percent for small nonprofits',
                    },
                    {
                      k: 'Online revenue arriving in December',
                      v: '37%',
                      w: 'With 4 percent of the year landing on December 31 alone',
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
                  All three figures from the M+R Benchmarks 2026 study, which reports on 180 participating
                  US nonprofits. Sourced and linked further down this page.
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
                It is a harder brief than a normal business site, because four different audiences read the
                same pages and there is usually nobody technical on staff to maintain it afterwards.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                That last part is what most agencies underprice. A commercial site has a marketing team behind
                it. A nonprofit site has a programme manager doing it on a Friday afternoon between two other
                jobs. So the design decisions that matter are not the ones you see in a portfolio. They are
                whether the donation form finishes on a five-year-old phone, whether a grant officer can find
                your financials without emailing you, and whether the site is still accurate in eighteen months.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                We build nonprofit sites you own outright: your domain, your content, your donor data, your
                code. That sounds obvious until you try to leave a platform that was never designed to let you.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. CAPABILITY ROW (proof without invented numbers) ──────── */}
        <section className="bg-white py-10 md:py-12">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { b: 'Donation flow first', s: 'The giving path gets designed and tested before the homepage does' },
                { b: 'WCAG 2.1 AA built in', s: 'Accessibility is part of the build, not a remediation project later' },
                { b: 'You own the exit', s: 'Domain, content, donor data and code all stay yours from day one' },
                { b: 'No invented impact', s: 'We will not write a number into your site that you cannot evidence' },
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
              A commercial site usually serves one buyer. Yours serves a stranger with a card, a funder doing
              diligence, your own board, the person you exist to help, a volunteer, and increasingly a model
              summarising you to somebody else. Design for one of them and you lose the other five.
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
              decision that talked them out of it, and every figure comes from published sector research
              rather than from us.
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
                path, look for your financials the way a grant officer would, and send you the list. No charge
                and no obligation to hire us.
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
                Level AA as the technical standard for state and local government web content and mobile apps.
                It goes further than most nonprofits realise. Where a government contracts another
                organisation to deliver public services on its behalf, that government has to make sure the
                contractor follows Title II too, and the example the rule gives is a nonprofit running a
                treatment programme for a state agency.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  {
                    t: 'If you deliver a service under a government contract',
                    s: 'The obligation reaches you through that contract. Ask your programme officer, not your web volunteer',
                  },
                  {
                    t: 'Compliance dates are already published',
                    s: 'April 26 2027 for entities covering fifty thousand people or more, and April 26 2028 for smaller and special district governments',
                  },
                  {
                    t: 'Level AA is a specific, testable bar',
                    s: 'Keyboard operation, visible focus, contrast, labelled fields, alt text, captions and headings in order',
                  },
                  {
                    t: 'The people you serve are the point',
                    s: 'If disabled people are part of who you exist for, an unusable site is a programme failure before it is a legal one',
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
                We are not your lawyers and this page is not legal advice. What we can tell you is that
                building to Level AA during the build is far cheaper than remediating a live site, and that an
                accessibility overlay widget is not conformance.
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
              Roughly in the order they happen. If a proposal covers items one and two and never reaches four,
              six or ten, you are buying a repaint of the problem you already have.
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
              work covers the build itself. They are the same people, which is why item eleven survives launch.
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
              A company that outgrows its platform reallocates budget and moves. A nonprofit that outgrows its
              platform is stuck, because the money was granted for programmes and there is no line item called
              migration. That asymmetry is why we are stubborn about ownership.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">What you should own outright</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'The domain, registered in an account your organisation controls',
                    'Every page of content, exportable as text you can actually reuse',
                    'Your donor records, in a system you can query and take with you',
                    'The code, in a repository with your organisation named on it',
                    'Your analytics history, so a new agency inherits the evidence',
                    'The relationship with your payment processor, in your legal name',
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
                    'If we leave next year, what exactly do we walk away with',
                    'Who is the registrant on the domain right now, in writing',
                    'Can we export donor records ourselves, without asking you',
                    'Does the donation form belong to us or to your platform',
                    'What happens to the site if the person who built it leaves',
                    'Will you document the handover, or is that a separate quote',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  Ask us the same six. A vendor who gets defensive about handover is telling you what the next
                  five years look like. If a hosted nonprofit product is genuinely the right answer for your
                  size, we will say so and point you at one.
                </p>
              </div>
            </div>
          </div>
        </section>

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
              We pulled the live US result for nonprofit website design in August 2026. These three hold
              positions we do not. Worth knowing before you read it: over half the top twelve results are
              inspiration galleries and best-of lists rather than agencies, including Dribbble, Awwwards,
              Numiko and Mailchimp, which tells you most people searching this term are still browsing rather
              than hiring. Everything below comes from their own websites or from their position on that
              result.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[900px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of FactoryJet, Elevation Web, Wired Impact and Double the Donation across search
                  position, what they sell, nonprofit focus, published pricing guidance, portability, named
                  specialisms, staffing and best fit.
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
              Scroll the table sideways on smaller screens. Positions are a snapshot and they move. We have
              deliberately not filled in details we could not read on a vendor&rsquo;s own site.
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
              A mismatched project costs a nonprofit a year of fundraising it cannot get back. Read both
              columns before you book anything.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">A strong fit</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'Online giving matters to you and the current form has never been properly tested',
                    'You are on a platform you cannot leave and it has started to hurt',
                    'A funder or a government contract has raised accessibility and nobody knows the answer',
                    'Grant officers keep asking for documents that should already be on the site',
                    'Nobody on staff is technical and the site has quietly gone out of date',
                    'You want to be found in search and inside AI answers, not just look good',
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
                    'You need a simple site online this month and nobody will maintain it. A hosted nonprofit product is better',
                    'You want the design refreshed but the donation flow left exactly as it is',
                    'Nobody internally can give us an hour with a donor, a volunteer or a programme lead',
                    'You want impact numbers written that your programme team cannot evidence',
                    'It is October and you want to migrate before your December appeal',
                    'The project is one board member’s taste and there is no agreed goal',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  If the structure is sound and you only need it rebuilt on a better footing, start with{' '}
                  <Link href="/services/website-redesign" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    website redesign
                  </Link>
                  . If you are a very small team, our{' '}
                  <Link href="/services/small-business-website-design" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    small business website design
                  </Link>{' '}
                  is scoped closer to that budget shape.
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
              Nonprofit marketing is full of statistics that trace back to nothing. Every figure above comes
              from one of these four sources and we opened all four before publishing. Check them yourself
              before you hire anyone, including us.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  src: 'M+R Benchmarks 2026',
                  title: 'The mobile gap, the December spike, sustainer retention',
                  body:
                    'The 2026 study, drawn from 180 participating nonprofits, reports that mobile carried 52 percent of traffic but 28 percent of online revenue, that 11 percent of desktop and 8 percent of mobile donation page visitors completed a gift, that monthly giving was 27 percent of online revenue, and that 37 percent of annual online revenue arrived in December.',
                  href: 'https://mrbenchmarks.com/website-performance/',
                },
                {
                  src: 'M+R Benchmarks 2026',
                  title: 'Retention, monthly giving and the first two months',
                  body:
                    'The fundraising chapter reports that monthly giving accounted for 27 percent of all online revenue, that 10 percent of sustainers stop giving within two months of setting up a monthly gift, that 71 percent are still active after a full year, and that new donor retention was 24 percent against 66 percent for prior donors.',
                  href: 'https://mrbenchmarks.com/fundraising/',
                },
                {
                  src: 'Nielsen Norman Group',
                  title: 'What donors look for, and what kills a donation',
                  body:
                    'NN/g usability testing of nonprofit sites found that only 43 percent answered what the organisation does on the homepage and 4 percent explained how donations are used, that mission was roughly 3.6 times more important than the runner-up factor when choosing between charities, and that on 17 percent of sites users could not find where to donate.',
                  href: 'https://www.nngroup.com/articles/donation-usability/',
                },
                {
                  src: 'Nielsen Norman Group',
                  title: 'Volunteering, third-party payment pages, content first',
                  body:
                    'Across two studies covering 60 nonprofit and association websites, NN/g found the donation process took 7 percent longer than an equivalent ecommerce checkout, that third-party payment services were the one significant workflow problem, and that the volunteering task scored 6.7 out of 7, the best result in the research.',
                  href: 'https://www.nngroup.com/articles/non-profit-websites-donations/',
                },
                {
                  src: 'ADA.gov',
                  title: 'WCAG 2.1 Level AA, and how it reaches nonprofits',
                  body:
                    'The Department of Justice rule on web and mobile app accessibility sets WCAG 2.1 Level AA as the technical standard for state and local government web content, and states that governments contracting with other entities to provide public services, giving nonprofits running programmes on behalf of a state agency as the example, must ensure those contractors follow Title II.',
                  href: 'https://www.ada.gov/resources/2024-03-08-web-rule/',
                },
                {
                  src: 'Internal Revenue Service',
                  title: 'What a 501(c)(3) may and may not do',
                  body:
                    'The IRS states that a 501(c)(3) organisation must be organised and operated exclusively for exempt purposes, that none of its earnings may benefit any private shareholder or individual, that it may not make influencing legislation a substantial part of its activities, and that it may not participate in any campaign activity for or against political candidates.',
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
              Two notes on honesty. The Nielsen Norman Group nonprofit studies were published in 2009 and
              2011, and we quote them because they remain the most detailed public usability research on
              donation behaviour, not because they are recent. The responsiveness target in item eleven comes
              from Google&rsquo;s own documentation, which treats an Interaction to Next Paint of{' '}
              <a
                href="https://web.dev/articles/inp"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
                style={{ color: ORANGE_DARK }}
              >
                200 milliseconds or less as good responsiveness
              </a>
              . Nothing on this page is legal or tax advice, and the IRS material is summarised, not quoted in
              full. Search volumes and competitor positions come from DataForSEO, United States, August 2026.
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
                Some very good agencies work on nothing but nonprofits and we have named one of them above.
                What we bring instead is a commerce and search background applied to giving: the donation form
                gets treated like a checkout, because that is what it is, and the site gets built to be found
                rather than just admired.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { t: 'Founder-led scoping', s: 'Bhavesh Barot scopes the work and stays on the account through launch' },
                  { t: 'Checkout discipline on the donation form', s: 'The same field-by-field work we do on ecommerce, applied to giving' },
                  { t: 'Design, build and search in one team', s: 'The structure decisions and the visibility decisions are made by the same people' },
                  { t: 'No invented proof, ever', s: 'No fabricated impact numbers, no borrowed testimonials, no guaranteed results' },
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
                  desc: 'Scoped for very small teams with no marketing hire, which is the closest fit for a two-person nonprofit.',
                },
                {
                  label: 'Website redesign',
                  href: '/services/website-redesign',
                  desc: 'When the structure is sound and the problem is presentation, staging and keeping your search rankings intact.',
                },
                {
                  label: 'WordPress development',
                  href: '/services/wordpress-development',
                  desc: 'The platform most nonprofits are already on, built properly so a non-technical person can run it.',
                },
                {
                  label: 'SEO services',
                  href: '/services/seo',
                  desc: 'The organic programme that gets your programme and service pages found by the people looking for help.',
                },
                {
                  label: 'AI SEO',
                  href: '/services/ai-seo',
                  desc: 'Getting named inside ChatGPT, Perplexity and Google AI Overviews, which already answer questions about your cause.',
                },
                {
                  label: 'Web design',
                  href: '/services/web-design',
                  desc: 'Our general US web design service, if what you need is a straightforward site rather than a giving platform.',
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
          lead="Thirty-five answers covering what belongs on a nonprofit website, how to stop losing donors on the form, which platform suits which size of organisation, the nonprofit rules people keep asking about, and what drives the scope of a build. If yours is not here, send a short brief and we usually reply within one business day."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 16. FINAL CTA (the one dark section) ───────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="BEFORE YOUR NEXT APPEAL"
          headline="Find out what your donation page is costing you"
          sub="Book a call with the founder. We will make a real gift on a phone, count every field you are asking for, tab through the form the way a screen reader user would, look for your financials the way a grant officer would, and tell you plainly whether this is a form fix, a redesign, or a platform you need to leave."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See website redesign', href: '/services/website-redesign' }}
          objectionHandler="Founder-led. No guaranteed results, no invented impact numbers, and you own the site, the content, the donor data and the domain."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
