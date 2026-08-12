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
   /services/manufacturing-website-design

   Intent owned by THIS page (read before editing):
     manufacturing website design (720/mo, KD 2) · manufacturing web design ·
     industrial website design · website for manufacturing company ·
     best website design for manufacturing company · manufacturing industry
     websites · industrial website examples · manufacturing website examples ·
     what should a manufacturing website include · manufacturing website
     design template.

   Scope split, deliberate and stated in the visible copy:
     THIS page owns the manufacturer's MARKETING AND SPECIFICATION site.
     Capability presentation, RFQ capture, spec sheets, CAD and drawing
     downloads, quality certifications, distributor and rep locators, and the
     long engineering sales cycle.

     /ecommerce-for-manufacturers owns manufacturers SELLING ONLINE: dealer and
     distributor portals, contract pricing, catalogue ordering, EDI, punchout
     and ERP integration. It is linked from the hero, the answer-first block,
     a dedicated split section, the FAQ and the related-services grid, and no
     dealer-portal intent is duplicated here.

   Build rules honoured: no em dashes, no currency figures anywhere, plain <img>
   only, FinalCTA (never GetFreeQuoteCTA), exactly one dark section (the closing
   FinalCTA), no shared files touched, no TestimonialsSection, no
   BigThreeTrustBlock. Cost questions answered with scope drivers, never a
   number. Heading accents use colour only, no italic (CLAUDE.md rule 3).

   Schema: WebPage + speakable, Service, ItemList (build checklist), ItemList
   (competitor set), FAQPage derived from FAQ_ITEMS, BreadcrumbList. Every const
   below reaches a <script type="application/ld+json"> tag in the render.
───────────────────────────────────────────────────────────────────────────── */

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';
const PAGE_URL = 'https://factoryjet.com/services/manufacturing-website-design';
const HERO_IMG = 'https://factoryjet.com/images/us/manufacturing-website-design/hero.webp';
const REVIEWED_DATE = 'August 12, 2026';
const MODIFIED_ISO = '2026-08-12';

const ORANGE = '#F05A28';
const ORANGE_DARK = '#B23E13';
const CREAM = '#FAFAF7';
const PEACH = '#FAEDE5';
const GREEN = '#0E5C46';
const GREEN_BRIGHT = '#0C7150';
const GREEN_SOFT = '#DCEFE6';
const STEEL = '#2C3E52';
const STEEL_SOFT = '#E4EAF0';

/* ─────────────────────────────────────────────────────────────────────────────
   Metadata
───────────────────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Manufacturing Website Design: Industrial Web Design That Wins RFQs | FactoryJet',
  description:
    'Manufacturing website design for US manufacturers, machine shops and industrial suppliers. Capability pages engineers can act on, RFQ forms that ask the right questions, spec sheets and CAD downloads, certifications, and distributor locators.',
  keywords: [
    'manufacturing website design',
    'manufacturing web design',
    'industrial website design',
    'industrial web design',
    'website for manufacturing company',
    'best website design for manufacturing company',
    'manufacturing website design company',
    'manufacturing website design agency',
    'manufacturing industry websites',
    'manufacturing website examples',
    'industrial website examples',
    'best manufacturing websites',
    'manufacturing website design template',
    'what should a manufacturing website include',
    'machine shop website design',
    'website design for machine shops',
    'contract manufacturer website',
    'rfq form design',
    'spec sheet web design',
    'cad download website',
    'distributor locator website',
    'industrial marketing website',
  ],
  openGraph: {
    type: 'website',
    siteName: 'FactoryJet',
    title: 'Manufacturing Website Design: Industrial Web Design That Wins RFQs | FactoryJet',
    description:
      'A manufacturing website has one job: let an engineer or buyer decide you can make the part, then make it easy to send you the print. We build that site.',
    url: PAGE_URL,
    images: [
      {
        url: HERO_IMG,
        width: 1264,
        height: 848,
        alt: 'A manufacturing engineer and a plant manager reviewing a machined component on a laptop in a machine shop',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing Website Design That Wins RFQs | FactoryJet',
    description:
      'Capability pages engineers can act on, RFQ forms that ask the right questions, spec sheets and CAD downloads, certifications and distributor locators.',
    images: [HERO_IMG],
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
   Who is actually reading a manufacturing website
───────────────────────────────────────────────────────────────────────────── */

type Reader = { tag: string; title: string; body: string; tint: string; accent: string };

const READERS: ReadonlyArray<Reader> = [
  {
    tag: '01',
    title: 'The design engineer',
    body:
      'They have a part in CAD and a deadline. They want to know your tolerance range, your materials, your machine envelope, and whether a model exists they can drop straight into an assembly. They will not call you to find out. If the page does not say it, you are off the list.',
    tint: STEEL_SOFT,
    accent: STEEL,
  },
  {
    tag: '02',
    title: 'The sourcing or purchasing buyer',
    body:
      'They are filling a supplier slot and reducing risk. They want your certifications with real certificate numbers, your location, your capacity, your lead times, and proof you have made something like this before. Vague copy reads to them as something to hide.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '03',
    title: 'The quality manager',
    body:
      'They decide whether you get into the approved supplier list at all. They look for the standard, the scope on the certificate, the registrar, and the expiry date. A row of certification logos with nothing behind them fails this reader in about four seconds.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
  {
    tag: '04',
    title: 'The distributor or rep',
    body:
      'They sell your product and need sell sheets, current spec data, images and stock guidance without emailing your marketing person. Half the traffic on a lot of manufacturer sites is your own channel trying to find a document.',
    tint: STEEL_SOFT,
    accent: STEEL,
  },
  {
    tag: '05',
    title: 'The end user hunting a part',
    body:
      'Someone has a machine with your name cast into it and needs the replacement. If your site cannot route them to the right distributor by zip code, they find the part somewhere else and you never learn the sale happened.',
    tint: PEACH,
    accent: ORANGE_DARK,
  },
  {
    tag: '06',
    title: 'The AI answer engine',
    body:
      'Sourcing questions now get typed into ChatGPT and Perplexity before anyone opens a search results page. A model can only name you if your capability facts sit in plain text. Numbers locked inside a PDF or a photo of a chart are invisible to it.',
    tint: GREEN_SOFT,
    accent: GREEN,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   The build checklist (also powers the ItemList schema)
───────────────────────────────────────────────────────────────────────────── */

type BuildItem = { n: string; title: string; body: string };

const BUILD_ITEMS: ReadonlyArray<BuildItem> = [
  {
    n: '01',
    title: 'A capability statement with actual numbers in it',
    body:
      'Not "precision machining to the highest standards". The processes you run, the axis count, the machine envelope, the bar capacity, the tolerance band you hold in normal production, the materials by grade, and the quantity range you are set up for. A buyer should be able to disqualify you in a minute. That is a feature, because the ones who do not disqualify you are real.',
  },
  {
    n: '02',
    title: 'One page per process, not one page called Capabilities',
    body:
      'Five axis machining, Swiss turning, wire EDM, injection moulding, sheet metal fabrication, welding, casting, stamping. Each is a separate thing people search for and a separate thing they buy. One combined page ranks for none of them and answers none of them properly. This is the single biggest search win available on most manufacturing sites.',
  },
  {
    n: '03',
    title: 'An equipment list that is text on a page',
    body:
      'Make, model, count, travel, and what each machine is for. Most manufacturers keep this in a scanned PDF that no search engine and no AI model can read. Put it in an HTML table and you become findable for every machine name a sourcing engineer types.',
  },
  {
    n: '04',
    title: 'An RFQ form built for a print, not a message box',
    body:
      'Quantity and whether it is a prototype or an annual release. Material and grade. Target date. Critical tolerances. Surface finish. Quality requirements. And a file upload that accepts STEP, IGES, DXF, DWG, PDF and native CAD without falling over on a large assembly. A name, email and 500 character box is not an RFQ form.',
  },
  {
    n: '05',
    title: 'Spec sheets as web pages, with the PDF alongside',
    body:
      'A PDF only datasheet is invisible to search and awkward on a phone. Publish the attribute table as real HTML, then offer the PDF for the buyer who has to attach it to a purchase order. You get found on the specification itself, which is how technical buyers actually search.',
  },
  {
    n: '06',
    title: 'CAD and drawing downloads in the formats people use',
    body:
      'Neutral formats first, STEP and IGES and Parasolid and DXF, then native files where it helps, plus Revit families if you sell building products. Once your model is in an engineer’s assembly you are designed in, and being designed in is worth far more than a form fill.',
  },
  {
    n: '07',
    title: 'Certifications with the certificate behind them',
    body:
      'Name the standard and the revision, the scope of registration, the registrar and the expiry. Link the certificate itself. ISO 9001, AS9100, IATF 16949, ISO 13485, Nadcap for special processes. A quality manager building a supplier file needs the document, not a logo.',
  },
  {
    n: '08',
    title: 'A distributor and rep locator that routes by territory',
    body:
      'Zip code or region in, the authorised partner and a real contact out. Not a PDF map. Not an alphabetical list of two hundred companies. And a rule for what happens when an end user in a rep’s territory asks you directly, because routing that enquiry properly is how you keep the channel.',
  },
  {
    n: '09',
    title: 'A plant page, with photographs of your plant',
    body:
      'Industrial buyers are assessing whether you are real. Pictures of your floor, your machines, your inspection room and your people do more for that than any adjective. Stock photos of a meeting room in an office nobody recognises do the opposite.',
  },
  {
    n: '10',
    title: 'A page that says what you do not do',
    body:
      'No production runs under a certain size. No castings. No class one medical. Buyers respect this and it saves both sides a week of email. It also quietly raises your win rate, because everything left in your inbox is a job you can actually take.',
  },
  {
    n: '11',
    title: 'Speed that survives a factory network',
    body:
      'Google asks for a largest contentful paint of 2.5 seconds or less for most visits. Manufacturing sites routinely miss it because the homepage loads an enormous unoptimised aerial photo of the plant. Your buyer may be on plant wifi or a phone in a supplier meeting. Fix the images first.',
  },
  {
    n: '12',
    title: 'Structured data so machines can quote you',
    body:
      'Organization, Product on spec pages, and real tables rather than pictures of tables. This is the difference between an AI engine being able to say your name in an answer about who machines Inconel, and it not knowing you exist. Text is the only format every reader shares.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   RFQ form fields: what a real one asks
───────────────────────────────────────────────────────────────────────────── */

type RfqField = { field: string; why: string };

const RFQ_FIELDS: ReadonlyArray<RfqField> = [
  { field: 'Part name or number', why: 'Lets you find it again and lets them reference a repeat job.' },
  { field: 'Quantity, and what kind', why: 'One off, prototype batch, or an annual volume with monthly releases. This changes everything downstream.' },
  { field: 'Material and grade', why: 'With a "not decided yet" option, because early enquiries genuinely have not chosen.' },
  { field: 'Drawing or model upload', why: 'STEP, IGES, DXF, DWG, PDF and native CAD, with a limit big enough for a real assembly.' },
  { field: 'Critical tolerances', why: 'The one or two features that decide whether the job is easy or expensive.' },
  { field: 'Surface finish and secondary operations', why: 'Anodising, passivation, heat treat, plating, powder coat. Often the reason a quote moves.' },
  { field: 'Quality requirements', why: 'First article inspection, PPAP, certificates of conformance, material certs. Say which you can meet.' },
  { field: 'Target date', why: 'Separates a live programme from a budget exercise faster than any other field.' },
  { field: 'Export control or NDA flag', why: 'A tick box asking whether the drawing is export controlled protects both sides before a file moves.' },
  { field: 'Who is asking', why: 'Engineer, buyer or quality. They need different answers back, so route the enquiry accordingly.' },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Real competitor set on this SERP (also powers the second ItemList)
───────────────────────────────────────────────────────────────────────────── */

type Rival = { domain: string; what: string; strong: string; fit: string };

const RIVALS: ReadonlyArray<Rival> = [
  {
    domain: 'orbitmedia.com',
    what: 'Full service web design and development agency with a manufacturing service page',
    strong: 'Ranks fourth for this query with a page titled Manufacturing Web Design, Industrial Website Design. A long established agency with a serious reputation for research and content practice.',
    fit: 'You want a broad, well known web agency and manufacturing is one of several sectors they serve well.',
  },
  {
    domain: 'mfgempire.com',
    what: 'Manufacturing only marketing agency',
    strong: 'Its own site describes manufacturing marketing services across search, website development, paid search and lead generation for machine shops and industrial companies, with a headline about driving RFQs.',
    fit: 'You want a vendor who works on nothing but manufacturers and you want search and paid handled together.',
  },
  {
    domain: 'blog.thomasnet.com',
    what: 'The industrial supplier platform, publishing design examples',
    strong: 'The ranking asset is a listicle of industrial website design examples on the Thomas platform. Their real advantage is the supplier directory that industrial buyers already use, which sits behind the content.',
    fit: 'You want directory presence and marketing services from the same place your buyers already search.',
  },
  {
    domain: 'windmillstrategy.com',
    what: 'Industrial and B2B technical marketing agency',
    strong: 'Describes itself as a full service marketing agency specialising in digital marketing, website design and development for B2B technical companies. Ranks sixth here with a manufacturing design examples page.',
    fit: 'You are a complex technical manufacturer and want an agency fluent in long engineering sales cycles.',
  },
  {
    domain: 'webfx.com and designrush.com',
    what: 'Large content and directory operations',
    strong: 'Both rank on this query with roundups rather than service pages. Enormous publishing scale, and in DesignRush’s case a directory of agencies rather than an agency itself.',
    fit: 'You are still shortlisting and want to see a wide field before you talk to anyone.',
  },
  {
    domain: 'factoryjet.com',
    what: 'That is us, and we are the challenger here',
    strong: 'We build the site and run the search programme in one team, so speed and structure fixes ship instead of queuing. Founder led, and we treat being cited by AI answer engines as a target rather than a side effect.',
    fit: 'You want the specification and RFQ side built properly, and you may also need the dealer ordering side later.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Scope split against /ecommerce-for-manufacturers
───────────────────────────────────────────────────────────────────────────── */

type SplitRow = { label: string; here: string; there: string };

const SPLIT_ROWS: ReadonlyArray<SplitRow> = [
  {
    label: 'Who it is built for',
    here: 'Engineers, buyers and quality managers deciding whether to shortlist you',
    there: 'Dealers, distributors and account customers placing repeat orders',
  },
  {
    label: 'The main action',
    here: 'Send an RFQ, download a spec sheet, download a model, find a rep',
    there: 'Log in, see contract pricing, check stock, reorder, request a quote',
  },
  {
    label: 'What the pages contain',
    here: 'Capabilities, processes, materials, equipment, certifications, plant',
    there: 'Catalogue, part search, price lists, order history, account hierarchy',
  },
  {
    label: 'Pricing on the page',
    here: 'None. Every job is quoted from a print',
    there: 'Per account, read live from the system that runs your plant',
  },
  {
    label: 'Systems behind it',
    here: 'Forms, file storage, a document library, search and analytics',
    there: 'ERP integration, EDI, punchout, inventory by location',
  },
  {
    label: 'Where it lives',
    here: 'This page. Manufacturing website design',
    there: 'Our ecommerce for manufacturers page',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ: 30 items, grounded in live US People Also Ask plus related searches
───────────────────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES: ReadonlyArray<FAQCategory> = [
  { key: 'basics', label: 'Manufacturing web design basics' },
  { key: 'include', label: 'What to include' },
  { key: 'specs', label: 'Specs, CAD & certifications' },
  { key: 'building', label: 'Building it: AI, templates, scope' },
  { key: 'finding', label: 'Finding manufacturers' },
  { key: 'working', label: 'Working with us' },
];

const FAQ_ITEMS: ReadonlyArray<FAQItem> = [
  /* ── Basics ─────────────────────────────────────────────────────────── */
  {
    category: 'basics',
    question: 'What is manufacturing website design?',
    answer:
      'Manufacturing website design is building a website for a company that makes things, aimed at the people who specify and buy those things. That means engineers, purchasing teams and quality managers. The job is different from a normal business website because the visitor is checking whether you can make a specific part to a specific tolerance, not browsing for ideas. The site has to present capability, capture a request for quote, and hand over technical documents without a phone call.',
  },
  {
    category: 'basics',
    question: 'What is industrial website design, and is it different?',
    answer:
      'They are the same discipline and the terms get used interchangeably. Industrial is the slightly wider word, covering distributors, service companies and equipment suppliers as well as manufacturers. The buyer behaviour is identical: technical, risk averse, working from a specification, and comparing several suppliers before anyone picks up a phone. Everything on this page applies to both.',
  },
  {
    category: 'basics',
    question: 'What is the manufacturer’s website?',
    answer:
      'It is the official site of the company that actually makes a product, as opposed to a reseller, distributor or marketplace listing. It is the authoritative source for specifications, manuals, warranty terms, replacement parts and approved dealers. If you are the manufacturer, that authority is the most valuable thing your site has, and giving it away by publishing thinner information than your resellers do is a common and expensive mistake.',
  },
  {
    category: 'basics',
    question: 'What is the best manufacturer website?',
    answer:
      'There is no single winner, and any list claiming one is ranking on visual design rather than on results. The best manufacturing sites share four traits: they state real capability numbers, they publish specifications as text rather than only as PDFs, they make a request for quote easy to send with a drawing attached, and they load quickly on a phone. Judge a site against those, not against how the homepage animation looks.',
  },
  {
    category: 'basics',
    question: 'Can you provide some examples of manufacturing websites?',
    answer:
      'Several published roundups do this well and rank for the query, including collections from Windmill Strategy, WebFX, Huemor and the Thomas blog. Look at them for layout ideas, then check something the roundups usually skip: open the capabilities page and see whether it names tolerances, machines and materials. That is the part that wins work, and it is the part most of the pretty examples are missing.',
  },
  {
    category: 'basics',
    question: 'What are the five types of websites?',
    answer:
      'The usual split is a brochure or business site, an ecommerce store, a portfolio, a blog or publication, and a web application. A manufacturer normally needs the first, sometimes with a document library bolted on. If you also sell to dealers, you need a second thing entirely, which is an ordering portal. Trying to run both from one brochure site is where most manufacturing websites come apart.',
  },
  {
    category: 'basics',
    question: 'What are the 7 C’s of a website?',
    answer:
      'This comes from a marketing textbook framework for the customer interface: context, content, community, customisation, communication, connection and commerce. It is a useful checklist but it was not written for industrial buyers. For a manufacturer, only three of the seven do heavy lifting. Content, meaning your real capability data. Communication, meaning the request for quote route. And connection, meaning how you link to distributors and documents.',
  },
  {
    category: 'basics',
    question: 'What are the five golden rules of a website?',
    answer:
      'There is no official list, so treat any version of this as opinion. Ours for manufacturers: say what you make in the first line, put numbers where you would normally put adjectives, make the request for quote reachable from every page, publish technical documents as text and not only as PDFs, and make it fast on a phone. A site doing all five beats a much prettier one doing none of them.',
  },
  {
    category: 'basics',
    question: 'What are the 5 elements to a good website design?',
    answer:
      'Clear purpose, obvious navigation, readable typography, fast loading, and a next step on every page. For a manufacturing site there is a sixth that matters more than any of them, which is proof. Photographs of your plant, certificate documents, machine lists and named contacts. Industrial buyers are assessing risk, and design without proof reads to them as marketing rather than as evidence.',
  },
  {
    category: 'basics',
    question: 'What are 5 important things in a website?',
    answer:
      'For a manufacturer: what you make, what you can hold to, how to send you a drawing, who to talk to, and evidence you are real. Everything else is arrangement. If a visitor cannot answer all five within a minute of landing, the site is failing regardless of how it looks or how recently it was rebuilt.',
  },

  /* ── What to include ────────────────────────────────────────────────── */
  {
    category: 'include',
    question: 'What should a manufacturing website include?',
    answer:
      'A capability page with real numbers, a separate page for each process you sell, an equipment list as text, a materials list by grade, a quality and certifications page with downloadable certificates, spec sheets published as web pages, CAD and drawing downloads, a request for quote form built for engineering data, a distributor or rep locator if you sell through a channel, a plant page with your own photographs, and a page saying what you do not do.',
  },
  {
    category: 'include',
    question: 'What are the 10 examples of websites a manufacturer needs?',
    answer:
      'Read as page types rather than sites: home, capabilities overview, one page per process, industries served, materials, equipment list, quality and certifications, technical downloads, distributor or rep locator, and a request for quote page. Add a plant or about page with real photographs and you have the whole architecture. Most manufacturing sites have four of these and wonder why enquiries are thin.',
  },
  {
    category: 'include',
    question: 'What makes the best website design for a manufacturing company?',
    answer:
      'The one that lets a stranger decide, without help, that you can make their part. That means capability stated in numbers, documents available without a gate, a request for quote form that accepts a drawing, and pages fast enough to open on plant wifi. Visual polish helps you look credible. Specificity is what actually gets you shortlisted.',
  },
  {
    category: 'include',
    question: 'Why do most manufacturing websites fail?',
    answer:
      'Because they were written for a general audience by someone who never sat with a sourcing engineer. The homepage talks about quality and partnership. The capabilities page has one paragraph. The equipment list is a scanned document. The contact form has a message box and no upload. Every one of those is a decision to describe the company instead of answering the buyer, and the buyer has three other tabs open.',
  },
  {
    category: 'include',
    question: 'How do I get more RFQs from my website?',
    answer:
      'Three changes do most of the work. Put the numbers a buyer needs on the capability pages so you stop being filtered out silently. Replace the generic contact form with a request for quote form that accepts a drawing and asks about quantity, material and date. Then add a request route to every technical page, because an engineer reading a spec sheet is closer to buying than one reading your homepage.',
  },
  {
    category: 'include',
    question: 'Should our website say what we do not do?',
    answer:
      'Yes, and it is one of the highest return pages you can add. Minimum run sizes, processes you do not offer, industries you stay out of. It costs you enquiries you were never going to win and saves your estimating team hours. Buyers read it as confidence rather than as a limitation, which is the opposite of what most owners expect.',
  },

  /* ── Specs, CAD & certifications ────────────────────────────────────── */
  {
    category: 'specs',
    question: 'Should spec sheets be PDFs or web pages?',
    answer:
      'Both, in that order. Publish the specification as a real web page with a proper attribute table, then offer the PDF alongside for the buyer who has to attach it to a purchase order. PDF only means search engines and AI models can barely read your data, and it means an engineer on a phone is pinching and zooming. The web version is what gets you found on the specification itself.',
  },
  {
    category: 'specs',
    question: 'Should we put CAD files behind a form?',
    answer:
      'Usually not. A gate gets you a contact record, but an ungated model gets you designed into an assembly, and once your part is in someone’s CAD model it is difficult and expensive for them to remove. That is a far stronger position than a lead. Capture the relationship at the request for quote instead, where the person is ready to talk anyway.',
  },
  {
    category: 'specs',
    question: 'Which CAD formats should we publish?',
    answer:
      'Neutral formats first, because they open everywhere: STEP, IGES, Parasolid and DXF for two dimensional profiles. Add native files where a large share of your customers use one system. If you sell building products, add Revit families, because specifiers work inside the model. Publishing one obscure format is the same as publishing nothing.',
  },
  {
    category: 'specs',
    question: 'How should we present our certifications?',
    answer:
      'Name the standard and revision, the scope of registration, the registrar, the certificate number and the expiry date, then link the certificate document itself. ISO 9001 for quality management, AS9100 for aerospace, IATF 16949 for automotive, ISO 13485 for medical devices, and Nadcap for special processes such as heat treatment and welding. A logo strip with no document behind it does nothing for the quality manager who has to approve you.',
  },
  {
    category: 'specs',
    question: 'We make ITAR controlled parts. Can we still have a public website?',
    answer:
      'Yes, and most defence suppliers do. The line is what you publish. Under the export regulations, technical data includes blueprints, drawings, photographs, plans and documentation needed to make a defence article, while basic marketing information about function or purpose and general system descriptions are excluded. So market your capability openly and keep the drawings behind a controlled route. Take the regulation, not a web agency, as your authority on the specifics.',
  },
  {
    category: 'specs',
    question: 'Can our website help with supplier approval?',
    answer:
      'It can shorten it considerably. Supplier approval is a document exercise: certificates, insurance, quality manual summary, capability list, capacity and financial stability. Putting a clean supplier information pack on your site, downloadable without a form, means the buyer can build their file without a round of emails. Suppliers who make that easy get approved faster, and speed is often the whole competition.',
  },

  /* ── Building it ────────────────────────────────────────────────────── */
  {
    category: 'building',
    question: 'How do I get a website for my company?',
    answer:
      'Three routes. A website builder you set up yourself, which is quick and limited. A freelancer, which suits a simple site. Or an agency, which is what you need once the site has to carry file uploads, a document library, a locator and a real search strategy. For a manufacturer, the deciding question is whether the site is a brochure or a working sales tool. The second one needs a team.',
  },
  {
    category: 'building',
    question: 'Are manufacturing website templates worth using?',
    answer:
      'They are fine for layout and useless for the parts that matter. A template gives you a homepage and a services grid. It does not give you a request for quote form that accepts a drawing, a spec sheet structure, a certificate library or a territory based locator. Start from a template if it saves you time on visual design, then budget properly for the functional pieces underneath.',
  },
  {
    category: 'building',
    question: 'Can I get a website for my business for free?',
    answer:
      'You can get one at no charge from a builder with a free tier, and for a very small shop that is a reasonable start. Manufacturers outgrow them fast, usually at the file upload limit, then at the document library, then at the point where you want spec data structured properly. Start there if you must, but plan for the move rather than discovering it during a busy quarter.',
  },
  {
    category: 'building',
    question: 'Can ChatGPT design a website?',
    answer:
      'It can produce a working layout and passable copy in minutes, and for a simple brochure site that is genuinely useful. What it cannot do is know your tolerances, your machine list, your certificate numbers or which of your processes actually sells. On a manufacturing site that information is the product. AI can build the shell around it quickly, but somebody who knows your shop still has to supply the substance.',
  },
  {
    category: 'building',
    question: 'Can ChatGPT create a website?',
    answer:
      'Yes, in the sense of generating pages, code and images that work. The gap shows up later. Forms that route to the right person, uploads that survive a large assembly file, document libraries, locators, analytics and search structure all need deliberate engineering. Generated sites tend to look complete and behave thin, which is a harder problem to spot than an ugly site.',
  },
  {
    category: 'building',
    question: 'Will AI replace web designers?',
    answer:
      'It has already replaced a chunk of routine production work, and that trend is not reversing. What has not been replaced is judgement: what a technical buyer needs to see, in what order, and what to cut. On industrial sites the hard part was never making it look good. It was knowing that the tolerance table matters more than the hero photograph.',
  },
  {
    category: 'building',
    question: 'Is web design still in demand in 2026?',
    answer:
      'Yes, though the work has shifted. Assembling pages is cheap now. What manufacturers pay for is a site that gets found, gets quoted by AI answer engines, converts a technical visitor and holds up under real use. Demand for people who only push pixels is falling. Demand for people who understand a specific industry and can build for it is not.',
  },
  {
    category: 'building',
    question: 'How much does a manufacturing website cost?',
    answer:
      'We do not publish a figure, because a number set without seeing your situation is aimed at an average rather than at you. What actually moves scope: how many processes need their own page, how many products need spec pages, whether you need CAD downloads, whether a distributor locator is in play, how much of your technical content exists in usable form, and whether you need search work alongside the build. Tell us those on a call and you get a real number.',
  },
  {
    category: 'building',
    question: 'How long does a manufacturing website take to build?',
    answer:
      'Usually a few weeks to a few months. The variable is almost never design. It is content: how many processes and products need pages, and whether your technical data exists somewhere usable or has to be pulled out of drawings, spreadsheets and one person’s head. We assess that during scoping, because it is the thing that moves timelines.',
  },

  /* ── Finding manufacturers ──────────────────────────────────────────── */
  {
    category: 'finding',
    question: 'What website can I use to find manufacturers?',
    answer:
      'Thomasnet is the best known industrial supplier directory in the United States. Xometry and MFG offer quoting marketplaces. GlobalSpec and IndustryNet cover technical and industrial suppliers, Kompass covers international, and Alibaba covers overseas sourcing. Federal buyers work from SAM.gov. If you are the manufacturer reading this in reverse, the takeaway is to be listed in the directories and to own your own site, because the directory is where you are compared and your site is where you are chosen.',
  },
  {
    category: 'finding',
    question: 'How to find a manufacturer’s website?',
    answer:
      'Search the exact brand name plus the product or part number rather than a general description, because resellers outrank manufacturers on generic terms constantly. Check the product itself, since most carry a name, a logo or a website printed on a label or cast into the part. Industrial directories also list official sites. If you are the manufacturer, this is the reason your own product pages must be more detailed than your resellers’ versions.',
  },
  {
    category: 'finding',
    question: 'How to find out who manufactures something?',
    answer:
      'Look at the part itself first, since manufacturers usually mark parts with a name, logo or code. Regulatory markings help too: a UL file number, an FCC identifier or a medical device listing can each be looked up in a public register. For an own brand product, the seller may be the brand while a contract manufacturer makes it, which is why the marking on the part often differs from the name on the box.',
  },
  {
    category: 'finding',
    question: 'How can I find where a product is manufactured?',
    answer:
      'Country of origin marking is the first place to look, since goods imported into the United States generally have to be marked with their country of origin. Then check the manufacturer’s own site, product manuals and certificates, which frequently name the plant. If you are the manufacturer, publishing where you make things is a genuine differentiator right now, particularly with domestic sourcing under so much attention.',
  },
  {
    category: 'finding',
    question: 'Can I buy directly from manufacturers?',
    answer:
      'Sometimes. Many manufacturers sell only through distributors and reps to protect the channel, some sell direct at list price so dealers are never undercut, and some run both. If you are the manufacturer weighing this up, the decision is a channel strategy question rather than a website question, and the site should implement whichever rule you choose rather than quietly forcing one.',
  },
  {
    category: 'finding',
    question: 'What company has the largest manufacturing site?',
    answer:
      'This question is about physical plants rather than websites. The one usually named is Boeing’s assembly plant at Everett in Washington, generally reported as the largest building in the world by volume, with Volkswagen’s Wolfsburg plant usually named as the largest car factory by area. Useful trivia, and a reminder that most searches containing the word site are not about websites at all.',
  },

  /* ── Working with us ────────────────────────────────────────────────── */
  {
    category: 'working',
    question: 'Do you also build the ordering side for dealers?',
    answer:
      'Yes, but not on this page. This page covers the marketing and specification site: capabilities, request for quote, technical documents and locators. Dealer portals with contract pricing, catalogue ordering, EDI, punchout and integration with the system that runs your plant are covered by our ecommerce for manufacturers service. Most manufacturers need the first, and some later add the second.',
  },
  {
    category: 'working',
    question: 'Will you get us found in AI search as well as Google?',
    answer:
      'That is a deliberate part of the build rather than a bonus. Sourcing questions increasingly get asked inside ChatGPT and Perplexity, and a model can only name you if your capability facts exist as plain text it can read. Publishing equipment lists, tolerances and specifications as structured text instead of PDFs and images is the single biggest thing that changes whether you get quoted.',
  },
  {
    category: 'working',
    question: 'Do we own what you build?',
    answer:
      'Yes. You own the code, the content, the domain and the accounts. There is no proprietary layer you lose access to if you stop working with us, and no rented platform holding your site hostage. If you want to take it in house or hand it to another team later, everything transfers.',
  },
  {
    category: 'working',
    question: 'Do you work with US manufacturers?',
    answer:
      'Yes. Machine shops, contract manufacturers, industrial equipment makers, component suppliers and building product manufacturers, mostly in the United States. The founder, Bhavesh Barot, scopes and runs the work personally, so the person you talk to on the first call is the person doing the thinking on your account.',
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
  name: 'Manufacturing Website Design: Industrial Web Design That Wins RFQs',
  description:
    'Manufacturing website design for US manufacturers and industrial suppliers: capability pages engineers can act on, RFQ forms built for drawings, spec sheets and CAD downloads, certifications and distributor locators.',
  inLanguage: 'en-US',
  dateModified: MODIFIED_ISO,
  isPartOf: { '@type': 'WebSite', '@id': 'https://factoryjet.com/#website', name: 'FactoryJet', url: 'https://factoryjet.com' },
  about: { '@type': 'Thing', name: 'Manufacturing website design' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: HERO_IMG,
    width: 1264,
    height: 848,
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#answer-first', '#what-is-manufacturing-website-design'],
  },
  lastReviewed: MODIFIED_ISO,
  reviewedBy: { '@type': 'Person', name: 'Bhavesh Barot', jobTitle: 'Founder, FactoryJet' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Manufacturing Website Design',
  serviceType:
    'Manufacturing website design / Industrial website design / Machine shop website design / RFQ website design / Technical document and CAD download libraries',
  provider: {
    '@type': 'Organization',
    '@id': 'https://factoryjet.com/#organization',
    name: 'FactoryJet',
    url: 'https://factoryjet.com',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'US manufacturers, machine shops, contract manufacturers and industrial suppliers',
  },
  description:
    'Website design and build for manufacturers and industrial suppliers: capability and process pages with real specification data, equipment lists as structured text, request for quote forms that accept engineering drawings and CAD files, spec sheets published as web pages, CAD and drawing download libraries, quality certification documentation, and distributor and rep locators with territory routing.',
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Manufacturing website build',
    itemListElement: BUILD_ITEMS.map((b) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: b.title, description: b.body },
    })),
  },
};

const buildListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Twelve things a manufacturing website needs that a normal business website does not',
  description:
    'The twelve elements that separate a manufacturing website which wins requests for quote from one that only describes the company.',
  numberOfItems: BUILD_ITEMS.length,
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: BUILD_ITEMS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.title,
    description: b.body,
  })),
};

const rivalListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Agencies and platforms ranking for manufacturing website design in the United States',
  description:
    'The vendors that currently appear on United States search results for manufacturing website design, with what each is strongest at.',
  numberOfItems: RIVALS.length,
  itemListElement: RIVALS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.domain,
    description: `${r.what}. ${r.strong}`,
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
    { '@type': 'ListItem', position: 3, name: 'Manufacturing Website Design', item: PAGE_URL },
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

export default function ManufacturingWebsiteDesignPage() {
  return (
    <>
      <script
        id="mwd-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        id="mwd-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="mwd-buildlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildListSchema) }}
      />
      <script
        id="mwd-rivals-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rivalListSchema) }}
      />
      <script
        id="mwd-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="mwd-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main style={{ backgroundColor: CREAM }}>
        {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div>
              <p className="fj-eyebrow">Manufacturing website design &middot; United States</p>
              <h1
                className="fj-display mt-5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.6rem)', lineHeight: 1.06, letterSpacing: '-0.03em' }}
              >
                Your buyer is an engineer{' '}
                <span style={{ color: ORANGE }}>comparing tolerances</span>
              </h1>
              <p
                className="mt-6 max-w-[545px] font-fj-body font-medium text-fj-neutral-600"
                style={{ fontSize: '1.125rem', lineHeight: 1.6 }}
              >
                Not a shopper. They arrive with a part, a material, a quantity and a date, and they are
                deciding whether to take you off the list. We build manufacturing websites that answer that
                question fast, then make it easy to send you the print.{' '}
                <b className="font-bold text-fj-ink">Capability, specs and RFQs. Not adjectives.</b>
              </p>
              <HeroInlineForm
                region="us"
                source="services_manufacturing_website_design_hero"
                submitLabel="Get a manufacturing site review"
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
                  href="/ecommerce-for-manufacturers"
                  className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4"
                  style={{ color: ORANGE_DARK }}
                >
                  Need a dealer ordering portal instead?
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div
                className="overflow-hidden rounded-3xl border"
                style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 24px 60px rgba(20,18,12,0.12)' }}
              >
                <img
                  src="/images/us/manufacturing-website-design/hero.webp"
                  alt="A manufacturing engineer in safety glasses and a plant manager reviewing a machined component on a laptop at a workbench in a machine shop"
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
                  What this page covers
                </span>
                <ul className="mt-3 space-y-2.5">
                  {[
                    { k: 'Capability pages', v: 'processes, tolerances, machines' },
                    { k: 'RFQ capture', v: 'drawings, models, quantities' },
                    { k: 'Spec sheets and CAD', v: 'as text, not only as PDFs' },
                    { k: 'Certifications', v: 'documents, not logo strips' },
                    { k: 'Distributor locator', v: 'routed by territory' },
                  ].map((row) => (
                    <li
                      key={row.k}
                      className="flex items-baseline justify-between gap-3 border-t pt-2.5 first:border-t-0 first:pt-0"
                      style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                    >
                      <span className="font-fj-body text-[0.875rem] font-bold text-fj-ink">{row.k}</span>
                      <span className="text-right font-fj-mono text-[0.6875rem] text-fj-neutral-600">{row.v}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-fj-body text-[0.75rem] text-fj-neutral-600">
                  Selling online to dealers is a separate build. That lives on our{' '}
                  <Link href="/ecommerce-for-manufacturers" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                    ecommerce for manufacturers
                  </Link>{' '}
                  page, and we keep the two apart on purpose.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. ANSWER-FIRST ─────────────────────────────────────────── */}
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
                id="what-is-manufacturing-website-design"
                className="fj-display mt-3 text-[1.35rem] font-bold text-fj-ink"
                style={{ letterSpacing: '-0.02em' }}
              >
                What is manufacturing website design?
              </h2>
              <p className="mt-3 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                <b className="text-fj-ink">
                  Manufacturing website design is building a site for the engineers, buyers and quality
                  managers who decide whether your shop can make their part.
                </b>{' '}
                It presents capability as real numbers, captures a request for quote with a drawing attached,
                hands over spec sheets and CAD files without a phone call, and proves your certifications with
                documents. It is a technical sales tool, not a brochure.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                Most manufacturing sites fail because they describe the company instead of answering the
                buyer. The homepage talks about quality and partnership. The capabilities page is one
                paragraph. The equipment list is a scanned document nobody can search. The contact form has a
                message box and no way to attach a drawing. Meanwhile the person reading it has three other
                suppliers open and forty minutes to build a shortlist.
              </p>
              <p className="mt-4 max-w-[900px] font-fj-body text-[1.0625rem] leading-[1.7] text-fj-neutral-600">
                One boundary, stated up front so nobody wastes a call. This page is about the marketing and
                specification site. If your dealers need to log in, see their contract pricing and place
                repeat orders, that is a different system and it lives on our{' '}
                <Link href="/ecommerce-for-manufacturers" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                  ecommerce for manufacturers
                </Link>{' '}
                page. Plenty of manufacturers eventually need both. Almost nobody needs them in the same build.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. WHO IS ACTUALLY READING IT ───────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Six readers, one page
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Nobody reading your site is <span style={{ color: ORANGE }}>a general visitor</span>
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Six distinct people land on a manufacturing website and they want six different things. Write
              for a vague audience and you satisfy none of them. This is the list most agencies never see,
              because they have never sat with a sourcing engineer while they shortlist suppliers.
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

        {/* ─── 4. CAPABILITY PAGES (image + substance) ─────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative mx-auto w-full max-w-[520px]">
              <img
                src="/images/us/manufacturing-website-design/shop-floor.webp"
                alt="A machinist in safety glasses loading a machined aluminium part into a CNC lathe in a bright factory bay"
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
                The page that decides everything
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                Put numbers where you would normally put{' '}
                <span style={{ color: ORANGE }}>adjectives</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                A capability page saying you deliver precision to the highest standards tells a sourcing
                engineer nothing. They are matching your shop against a drawing. Give them the facts they are
                matching against and you either win the shortlist slot or save everyone a week. Both outcomes
                beat being ignored.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  {
                    t: 'Processes, named the way people search them',
                    s: 'Five axis machining, Swiss turning, wire EDM, injection moulding, sheet metal fabrication, TIG welding, die casting, progressive stamping',
                  },
                  {
                    t: 'Envelope and capacity',
                    s: 'Machine travel, bar capacity, maximum part size, press tonnage, tank sizes. The physical limits that decide whether a job fits at all',
                  },
                  {
                    t: 'Tolerances you hold in production',
                    s: 'Not the best number you ever achieved. The band you run at normally, which is what a designer is actually planning against',
                  },
                  {
                    t: 'Materials by grade',
                    s: 'Aluminium 6061 and 7075, stainless 304, 316 and 17-4 PH, Inconel, titanium, PEEK, Delrin. Grades, not the word metals',
                  },
                  {
                    t: 'Quantities you are set up for',
                    s: 'Prototype, low volume, or production releases. Being clear here filters out the enquiries that waste your estimator',
                  },
                  {
                    t: 'Inspection and secondary operations',
                    s: 'Coordinate measuring machines, optical comparators, anodising, passivation, heat treat, plating, powder coat. In house or through partners',
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
                One more thing worth publishing: a downloadable capability statement, the one page summary
                with your core competencies, industry codes and registrations on it. Government and large
                prime buyers ask for it constantly, and having it ready is often the difference between being
                in the file and being forgotten.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 5. LISTICLE: TWELVE THINGS ──────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The build checklist
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[840px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Twelve things a manufacturing website needs that{' '}
              <span style={{ color: ORANGE }}>a normal business site does not</span>
            </h2>
            <p className="mt-4 max-w-[700px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Take this list to whoever is quoting your rebuild, including us. If a proposal covers the first
              two and skips the rest, you are buying a brochure with a factory photograph on it.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {BUILD_ITEMS.map((b) => (
                <li
                  key={b.n}
                  className="flex flex-col rounded-2xl border p-6"
                  style={{ borderColor: 'rgba(15,15,18,0.09)', background: CREAM }}
                >
                  <span className="font-fj-mono text-[0.8125rem] font-bold" style={{ color: ORANGE_DARK }}>
                    {b.n}
                  </span>
                  <h3 className="fj-display mt-2 text-[1.075rem] font-bold text-fj-ink" style={{ letterSpacing: '-0.015em' }}>
                    {b.title}
                  </h3>
                  <p className="mt-2.5 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-600">{b.body}</p>
                </li>
              ))}
            </ol>

            <p className="mt-8 max-w-[860px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Items eleven and twelve are where our{' '}
              <Link href="/services/web-design" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                web design
              </Link>{' '}
              and{' '}
              <Link href="/services/ai-seo" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                AI SEO
              </Link>{' '}
              work meet. Most industrial marketing agencies write a ticket asking a developer to make the site
              faster and then wait. We build the site, so the fix ships.
            </p>
          </div>
        </section>

        {/* ─── 6. RFQ FORMS ────────────────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              The form is the product
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              A contact form is not <span style={{ color: ORANGE }}>an RFQ form</span>
            </h2>
            <p className="mt-4 max-w-[760px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Everywhere else in marketing, the rule is fewer fields. Manufacturing is the exception. A buyer
              sending a drawing expects to be asked real questions, and a request that arrives without
              quantity, material or date costs your estimator two emails before they can even start. Ask
              properly and quote faster.
            </p>

            <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {RFQ_FIELDS.map((f) => (
                  <div
                    key={f.field}
                    className="rounded-2xl border bg-white p-5"
                    style={{ borderColor: 'rgba(15,15,18,0.09)' }}
                  >
                    <h3 className="font-fj-body text-[0.9375rem] font-bold text-fj-ink">{f.field}</h3>
                    <p className="mt-1.5 font-fj-body text-[0.8438rem] leading-[1.55] text-fj-neutral-700">{f.why}</p>
                  </div>
                ))}
              </div>

              <div>
                <img
                  src="/images/us/manufacturing-website-design/rfq-desk.webp"
                  alt="A procurement engineer at a desk comparing a printed technical drawing with a supplier product page on a laptop, with calipers and a machined bracket on the desk"
                  width={1200}
                  height={896}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full rounded-2xl border object-cover"
                  style={{ borderColor: 'rgba(15,15,18,0.10)', boxShadow: '0 18px 44px rgba(20,18,12,0.09)' }}
                />
                <div className="mt-6 rounded-2xl p-6" style={{ background: PEACH }}>
                  <h3 className="fj-display text-[1.125rem] font-bold text-fj-ink">Three ways RFQ forms break</h3>
                  <ul className="mt-4 space-y-3">
                    {[
                      'The upload limit is too small for a real assembly file, so the enquiry silently dies at the last step',
                      'Everything routes to one inbox, so an engineering question waits behind a supplier newsletter',
                      'Nobody promises a response time, so the buyer sends the same drawing to four other shops',
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9062rem] font-medium leading-[1.55] text-fj-neutral-700">
                        <CrossCircle size={18} /> {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7. MID-PAGE CTA ─────────────────────────────────────────── */}
        <section className="py-12 md:py-14" style={{ background: STEEL_SOFT }}>
          <div className="mx-auto flex max-w-[1180px] flex-col items-start gap-6 px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[680px]">
              <h2
                className="fj-display font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', lineHeight: 1.12, letterSpacing: '-0.02em' }}
              >
                Want to know why your site is not producing requests for quote?
              </h2>
              <p className="mt-3 font-fj-body text-[1rem] leading-[1.6] text-fj-neutral-700">
                Send us the address. We will look at your capability pages, your quote form, how your
                technical documents are published, and how you load on a phone, then tell you the three
                things to fix first. No obligation and no slide deck.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap items-center gap-4">
              <ModalCTAButton label="Get a site review" region="us" modalVariant="default" btnVariant="primary-light" />
              <Link
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="font-fj-body text-[0.9375rem] font-semibold underline underline-offset-4"
                style={{ color: ORANGE_DARK }}
              >
                Or book a call
              </Link>
            </div>
          </div>
        </section>

        {/* ─── 8. THE SPLIT (no cannibalisation, stated plainly) ───────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Two different builds
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              A marketing site and a dealer portal are{' '}
              <span style={{ color: ORANGE }}>not the same project</span>
            </h2>
            <p className="mt-4 max-w-[760px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Manufacturers ask for a new website and mean one of two very different things. Getting this
              wrong is expensive, so here is the split in plain terms. We build both, and we do not pretend
              one project covers the other.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[760px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of a manufacturer marketing and specification website against a dealer ordering
                  portal, across audience, main action, page content, pricing, systems and which FactoryJet
                  service covers it.
                </caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      What you are comparing
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em]" style={{ color: ORANGE_DARK }}>
                      Marketing and spec site
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Dealer ordering portal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SPLIT_ROWS.map((row, i) => (
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
                        {row.here}
                      </td>
                      <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                        {row.there}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 max-w-[860px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              If the second column is what you actually need, stop reading this page and go to{' '}
              <Link href="/ecommerce-for-manufacturers" className="font-semibold underline underline-offset-2" style={{ color: ORANGE_DARK }}>
                ecommerce for manufacturers
              </Link>
              , which covers dealer portals, contract pricing, bulk ordering, EDI and integration with the
              system that runs your plant. Many manufacturers build the marketing site first and add the
              portal a year later, and that order usually works better than doing both at once.
            </p>
          </div>
        </section>

        {/* ─── 9. COMPARISON: WHO ELSE DOES THIS ───────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: CREAM }}>
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Who else you are looking at
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[820px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              The honest field for <span style={{ color: ORANGE }}>manufacturing website design</span>
            </h2>
            <p className="mt-4 max-w-[780px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              We pulled the live United States results for this query in August 2026. Here is who shows up,
              what each is genuinely good at, and where we sit. Several of them are strong. You should know
              that before you talk to us rather than after.
            </p>

            <div className="mt-10 overflow-x-auto rounded-2xl border" style={{ borderColor: 'rgba(15,15,18,0.10)' }}>
              <table className="w-full min-w-[900px] border-collapse text-left">
                <caption className="sr-only">
                  Vendors ranking for manufacturing website design in the United States, what each one is,
                  what each is strongest at, and who each suits best.
                </caption>
                <thead>
                  <tr style={{ background: PEACH }}>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Who
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      What they are
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Strongest at
                    </th>
                    <th scope="col" className="p-4 font-fj-body text-[0.8125rem] font-bold uppercase tracking-[0.06em] text-fj-ink">
                      Best fit if
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {RIVALS.map((r, i) => {
                    const isUs = r.domain.startsWith('factoryjet');
                    return (
                      <tr key={r.domain} style={{ background: isUs ? GREEN_SOFT : i % 2 === 1 ? CREAM : '#FFFFFF' }}>
                        <th
                          scope="row"
                          className="border-t p-4 font-fj-mono text-[0.8125rem] font-bold text-fj-ink"
                          style={{ borderColor: 'rgba(15,15,18,0.08)' }}
                        >
                          {r.domain}
                        </th>
                        <td className="border-t p-4 font-fj-body text-[0.875rem] font-medium text-fj-ink" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                          {r.what}
                        </td>
                        <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                          {r.strong}
                        </td>
                        <td className="border-t p-4 font-fj-body text-[0.875rem] text-fj-neutral-700" style={{ borderColor: 'rgba(15,15,18,0.08)' }}>
                          {r.fit}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-fj-body text-[0.8125rem] text-fj-neutral-600">
              Scroll the table sideways on smaller screens. Positions and descriptions were taken from live
              United States results and the vendors&rsquo; own published pages on August 12, 2026. Rankings
              move, so treat this as a snapshot.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-2xl p-7 md:p-8" style={{ background: GREEN_SOFT }}>
                <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">Where we are genuinely strong</h3>
                <ul className="mt-5 space-y-3.5">
                  {[
                    'We build the site and run the search work in one team, so a speed or structure fix ships instead of sitting in someone else’s backlog',
                    'We build the dealer ordering side too, so the second phase does not mean finding a new vendor and re-explaining your business',
                    'Getting named inside AI answer engines is a target we design for, not a side effect we hope for',
                    'The founder scopes the work, does the analysis and stays on the calls',
                    'We will tell you when the problem is your capability content rather than your website, which is often the truthful answer',
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
                    'We are the challenger here. Several vendors on this list have far more referring domains and far longer manufacturing tenure than we do',
                    'We are not manufacturing only. If your single criterion is a vendor who works on nothing but machine shops, MFG Empire fits that description better than we do',
                    'We are not a directory. We cannot put you in front of buyers already browsing a supplier platform the way Thomas can',
                    'We publish no client counts, no invented case study numbers and no testimonials we cannot stand behind',
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                      <CrossCircle size={18} /> {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                  We would rather lose a project to a vendor who suits you better than win one by overstating
                  what we have done. Same reason we will tell you if your capability pages, not your design,
                  are the actual problem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 10. CITATIONS ───────────────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1180px] px-6 md:px-8">
            <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: ORANGE_DARK }}>
              Check us against the source
            </p>
            <h2
              className="fj-display mt-3.5 max-w-[780px] font-bold text-fj-ink"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
            >
              Where the claims on this page <span style={{ color: ORANGE }}>come from</span>
            </h2>
            <p className="mt-4 max-w-[740px] font-fj-body font-medium text-fj-neutral-600" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
              Three primary sources sit behind the specific claims above. We opened every one of them before
              publishing. Open them yourself before you hire anybody, including us.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  src: 'Nielsen Norman Group',
                  title: 'What a spec page must state',
                  body:
                    'Their guidelines for business to business product specification pages name five attribute groups to publish, including tolerances and durability, meaning the allowed deviation from listed specs. They warn that vague or incomplete spec pages push users into calling support or leaving entirely.',
                  href: 'https://www.nngroup.com/articles/b2b-specs/',
                },
                {
                  src: 'US Code of Federal Regulations',
                  title: 'What counts as export controlled data',
                  body:
                    'The arms export regulations define technical data to include blueprints, drawings, photographs, plans and documentation required to make a defence article, while explicitly excluding basic marketing information on function or purpose and general system descriptions. That line is why capability marketing and drawing downloads get handled differently.',
                  href: 'https://www.ecfr.gov/current/title-22/section-120.33',
                },
                {
                  src: 'Google, web.dev',
                  title: 'The speed threshold you are judged on',
                  body:
                    'Google states that sites should aim for a largest contentful paint of 2.5 seconds or less, measured at the 75th percentile of page loads and split by mobile and desktop. Heavy unoptimised plant photography is the usual reason manufacturing sites miss it.',
                  href: 'https://web.dev/articles/lcp',
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

            <p className="mt-8 max-w-[860px] font-fj-body text-[0.9375rem] leading-[1.65] text-fj-neutral-700">
              Search volume and keyword difficulty referenced in our planning for this page come from
              DataForSEO, United States, pulled August 2026. Export control rules change and are enforced
              against your specific situation, so treat the regulation itself and your export compliance
              adviser as the authority there, not a web agency.
            </p>
          </div>
        </section>

        {/* ─── 11. WHO YOU WORK WITH ───────────────────────────────────── */}
        <section className="py-14 md:py-20" style={{ background: STEEL_SOFT }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.06fr_0.94fr]">
            <div>
              <p className="font-fj-mono text-[12px] font-medium uppercase tracking-[0.13em]" style={{ color: STEEL }}>
                Who you actually work with
              </p>
              <h2
                className="fj-display mt-3.5 font-bold text-fj-ink"
                style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.75rem)', lineHeight: 1.07, letterSpacing: '-0.025em' }}
              >
                Same discipline as the shop floor: <span style={{ color: ORANGE_DARK }}>the details decide it</span>
              </h2>
              <p className="mt-4 font-fj-body font-medium text-fj-neutral-700" style={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
                A part fails at the feature nobody checked, not in the middle of a clean surface. Websites are
                the same. Manufacturing sites lose on the unglamorous joins: a quote form that cannot take a
                large file, a specification stuck inside a PDF, a certificate page with logos and no
                documents. We work the joins.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { t: 'Founder led', s: 'Bhavesh Barot scopes the work, does the analysis and stays on the calls' },
                  { t: 'Design, build and search in one team', s: 'Fixes ship rather than queueing behind another vendor' },
                  { t: 'Commerce experience behind it', s: 'We build dealer portals too, so phase two does not need a new supplier' },
                  { t: 'No invented numbers, ever', s: 'No fabricated case studies, no borrowed testimonials, no guaranteed rankings' },
                ].map((item) => (
                  <li key={item.t} className="flex items-start gap-3.5 rounded-2xl bg-white px-5 py-4">
                    <CheckCircle size={20} fill={STEEL} />
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

            <div className="rounded-2xl bg-white p-7 md:p-8">
              <h3 className="fj-display text-[1.25rem] font-bold text-fj-ink">When we are the wrong choice</h3>
              <ul className="mt-5 space-y-3.5">
                {[
                  'You want a one page site with a photograph and a phone number. A freelancer will do that faster and for less',
                  'You need the dealer ordering portal first and the marketing site is fine. Start on the commerce page instead',
                  'Nobody on your side can supply tolerances, machine lists or certificates. We cannot invent your capability data',
                  'You want a rebuild with no plan for who answers a request for quote when it arrives',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 font-fj-body text-[0.9375rem] font-medium leading-[1.55] text-fj-neutral-700">
                    <CrossCircle size={18} /> {line}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-fj-body text-[0.9062rem] leading-[1.6] text-fj-neutral-700">
                The third one is the common blocker and it is worth saying plainly. The hardest part of a
                manufacturing website is never the design. It is getting the technical facts out of drawings,
                spreadsheets and one experienced person&rsquo;s memory and onto a page.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 12. RELATED SERVICES ────────────────────────────────────── */}
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
                  label: 'Ecommerce for manufacturers',
                  href: '/ecommerce-for-manufacturers',
                  desc: 'The other half. Dealer and distributor portals, contract pricing, bulk ordering, EDI, punchout and ERP integration.',
                },
                {
                  label: 'Web design',
                  href: '/services/web-design',
                  desc: 'The general web design service. Same team, same speed standards, for companies outside manufacturing.',
                },
                {
                  label: 'AI SEO',
                  href: '/services/ai-seo',
                  desc: 'Getting named inside ChatGPT, Perplexity and Google AI Overviews when a sourcing engineer asks who can make a part.',
                },
                {
                  label: 'SEO services',
                  href: '/services/seo',
                  desc: 'Ongoing search work. Process pages, technical content and the authority that gets an industrial site ranking.',
                },
                {
                  label: 'SEO audit',
                  href: '/services/seo-audit',
                  desc: 'Find out what is broken before committing to a rebuild. A prioritised fix list your team can act on.',
                },
                {
                  label: 'B2B ecommerce',
                  href: '/b2b-ecommerce',
                  desc: 'The wider B2B commerce practice: trade accounts, wholesale ordering and buyer portals across industries.',
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

        {/* ─── 13. FAQ ─────────────────────────────────────────────────── */}
        <FAQ
          eyebrow="Manufacturing website design FAQ"
          headline="The questions manufacturers actually search"
          lead="Forty answers on what a manufacturing website should include, how to publish specs and CAD files, how to present certifications, what AI can and cannot build for you, and how buyers find manufacturers in the first place. If yours is not here, send a short brief and we usually reply within one business day."
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
        />

        {/* ─── 14. FINAL CTA (the one dark section) ────────────────────── */}
        <FinalCTA
          variant="dark"
          eyebrow="BEFORE THE NEXT QUOTING SEASON"
          headline="Find out why your website is not producing requests for quote"
          sub="Send us your address and we will review it the way a sourcing engineer would. Can we tell what you make, what you can hold to, and how to send you a drawing? We will come back with the three things to fix first, and tell you plainly if a rebuild is not what you need."
          primaryCta={{ label: 'Talk to the Founder', modal: true, region: 'us' }}
          secondaryCta={{ label: 'See ecommerce for manufacturers', href: '/ecommerce-for-manufacturers' }}
          objectionHandler="Founder-led. No invented case studies, no guaranteed rankings, and you own the site and the content."
        />
      </main>

      <SiteFooter linkColumns={US_FOOTER_COLUMNS} />
    </>
  );
}
