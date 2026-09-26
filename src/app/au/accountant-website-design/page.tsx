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

const CANONICAL = 'https://factoryjet.com/au/accountant-website-design';
const UPDATED = '2026-09-26';
const TITLE = 'Accountant Website Design & SEO Australia | FactoryJet';
/* Visible hero heading and schema headline are the same text. */
const H1 = 'Accountant Website Design and SEO for Australian Accounting Firms';
const DESCRIPTION =
  'Accountant website design and SEO for Australian accounting and bookkeeping firms. TPB-aware copy, client portal links, AI document intake. Founder-led.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. Never
   hand-copy a second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Accountant Website Design', url: CANONICAL },
];

/* ─── External sources, all fetch-verified at the source on 2026-09-26 ─── */
// TPB, Civil penalty provisions (last modified 7 January 2025). Unregistered and
// "you advertise that you will provide a tax or BAS agent service": $16,500 (50
// penalty units) for an individual, $82,500 (250 penalty units) for a body
// corporate; same row covers "you represent that you are a registered tax or BAS
// agent". Charging a fee while unregistered: $82,500 / $412,500. Penalty unit $330.
const SRC_TPB_PENALTIES = 'https://www.tpb.gov.au/civil-penalty-provisions';
// TPB, Keeping your clients informed (last modified 30 April 2026). Section 45 of
// the Code Determination 2024: advise all current and prospective clients of the
// TPB register (and how to search it; TPB recommends a direct link to your
// registration), how to complain to the TPB, rights/responsibilities/obligations,
// prescribed events in the last 5 years, prescribed matters (conditions). Must be
// in writing, "prominent, clear and unambiguous". One example: "publishing the
// information on a publicly accessible website that you use to promote the tax
// agent services or BAS services you offer", plus engagement letters, plus the TPB
// factsheet. Applies from 1 July 2025 (100 or fewer employees) / 1 January 2025.
const SRC_TPB_S45 = 'https://www.tpb.gov.au/keeping-your-clients-informed';
// TPB, Registered tax practitioner symbol guidelines. Registered tax and BAS agents
// who agree to the terms of use; "must use the symbol in conjunction with their
// registration number"; stacked minimum 22mm / 136 pixels for electronic media;
// "must never be placed over photographic, patterned or complicated backgrounds";
// incorrect use includes altering colour, effects such as drop shadows or glows,
// re-positioning the registration number, and co-branding with the TPB or other logos.
const SRC_TPB_SYMBOL = 'https://www.tpb.gov.au/registered-tax-practitioner-symbol-guidelines';
// TPB, Public Register: "Generally, only registered tax and BAS agents can charge or
// receive a fee or other reward for providing tax agent, BAS or tax (financial)
// advice services." Register also shows Code breaches and sanctions on the record.
const SRC_TPB_REGISTER = 'https://www.tpb.gov.au/public-register';
// OAIC, Tax file numbers: the Privacy (Tax File Number) Rule 2015 "regulates the
// collection, storage, use, disclosure, security and disposal of individuals' TFN
// information"; it is legally binding and a breach is an interference with privacy.
const SRC_OAIC_TFN = 'https://www.oaic.gov.au/privacy/privacy-legislation/the-privacy-act/tax-file-numbers';
// OAIC, privacy and commercially available AI products: recommends organisations
// "do not enter personal information, and particularly sensitive information, into
// publicly available generative AI tools".
const SRC_OAIC_AI =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products';
// CPA Australia, Growing and marketing your business: "If you're a member with a
// public practice certificate, you may be able to brand your practice with our
// public practice logo" (details are member-only).
const SRC_CPA_BRAND = 'https://www.cpaaustralia.com.au/public-practice/new-and-existing/marketing-growing-your-business';
// Xero, JAX: Xero's own AI companion inside Xero (answers questions about your
// financial data, helps create invoices and quotes).
const SRC_XERO_JAX = 'https://www.xero.com/au/ai-in-accounting/jax/';
// Xero and MYOB developer documentation (public APIs).
const SRC_XERO_API = 'https://developer.xero.com/documentation/';
const SRC_MYOB_API = 'https://developer.myob.com/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'design', label: 'Accounting firm websites' },
  { key: 'seo',    label: 'SEO and getting clients' },
  { key: 'rules',  label: 'TPB rules and privacy' },
  { key: 'ai',     label: 'AI for accountants' },
  { key: 'working', label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Design ──
  { category: 'design', question: 'What are the best websites for accountants?',
    answer: 'The best accounting firm websites are plain, fast and specific. They say who the firm helps, give each service its own page, show partners by name with their registrations, make booking a first meeting easy, and link clients to their portal. Clear answers and checkable trust signals matter far more than clever design.' },
  { category: 'design', question: 'What should an accounting firm website include?',
    answer: 'Who you help and where, one page per main service, team profiles with qualifications and registration numbers, the client information section 45 of the TPB Code Determination requires, a simple enquiry or booking form, a client portal link, a privacy policy, and your office location and hours.' },
  { category: 'design', question: 'Do accountants need a website?',
    answer: 'Yes. Most people who get a referral still look you up before they call, and a missing or dated site loses them. The TPB also names a public website as one example of how a registered tax practitioner can give prospective clients the section 45 information. It is not the only way, but it is the easiest to keep current.' },
  { category: 'design', question: 'How much does an accountant website cost in Australia?',
    answer: 'It depends on the number of pages, new copy and photos, booking and portal connections, and any migration from an old site. We quote a fixed price for your scope after a short call and do not publish a rate card. Our website cost guide for Australia (2026) lists typical market ranges with sources.' },
  { category: 'design', question: 'How long does it take to build an accounting firm website?',
    answer: 'A site of up to five pages can be delivered in 7 days once your details and photos are ready. Most firm sites are larger, with pages per service, client type and office, and take a few weeks including partner review. Across our projects, 97% are delivered on time, and you get a written timeline first.' },
  { category: 'design', question: 'What are the best websites for bookkeeping?',
    answer: 'A bookkeeping website should be simpler still: what you do (bookkeeping, payroll, BAS), the software you work in, who you work with, your BAS agent registration if you have one, and how to start. Bookkeepers win work on trust and software skill, so show both. The TPB rules on advertising BAS services apply too.' },

  // ── SEO ──
  { category: 'seo', question: 'Is SEO still worth it in 2026?',
    answer: 'For accounting firms, yes. People still search for an accountant nearby, for SMSF or tax help, and for accountants who know their industry. Google now shows AI Overviews on many of these searches, and they pull from pages that answer clearly. That favours precise, checkable firms.' },
  { category: 'seo', question: 'How much does SEO typically cost in Australia?',
    answer: 'SEO is usually a monthly retainer or a fixed project, and the right budget depends on how competitive your city and services are. We do not publish prices on service pages. Our SEO cost guide for Australia (2026) lists typical market ranges with sources, and we quote your scope after a short call.' },
  { category: 'seo', question: 'How do I market my accounting firm?',
    answer: 'Ask happy clients for Google reviews and referrals. Keep your Google Business Profile complete. Build a page for each service and client type you want more of. Answer the questions clients ask you every week. Then add paid search only for high-value services where the numbers work.' },
  { category: 'seo', question: 'Can I do local SEO myself?',
    answer: 'The basics, yes. Complete your Google Business Profile, ask clients for reviews, keep your name, address and details identical everywhere, and give each office a page. Harder to do alone: technical fixes, content for each service and location, and measuring which work turns into enquiries.' },
  { category: 'seo', question: 'What is SEO in accounting?',
    answer: 'SEO, or search engine optimisation, is the work that helps your firm show up when people search Google or ask AI assistants for an accountant, tax agent or bookkeeper. It covers your Google Business Profile, service and location pages, fast and accessible pages, reviews, and clear answers to client questions.' },
  { category: 'seo', question: 'How long does SEO take for an accounting firm?',
    answer: 'Technical fixes and a better Google Business Profile can lift local visibility within weeks. New service and location pages usually take a few months to settle, longer in the capital cities. Treat it as a year-long plan and judge it on enquiries and booked meetings, not rankings alone.' },

  // ── Rules ──
  { category: 'rules', question: 'Does an accountant need to be registered?',
    answer: 'To charge a fee for tax agent or BAS services, generally yes. The TPB says only registered tax and BAS agents can generally charge for tax agent, BAS or tax (financial) advice services, and unregistered people who advertise those services face civil penalties. Other work, such as management accounts, does not need TPB registration.' },
  { category: 'rules', question: 'Is a tax agent different from an accountant?',
    answer: 'Yes. Accountant is a broad job title. A registered tax agent is registered with the Tax Practitioners Board to provide tax agent services for a fee. Many accountants are both, and many also belong to CPA Australia, CA ANZ or IPA. Your website should say plainly which registrations each person holds.' },
  { category: 'rules', question: 'What must a tax agent’s website tell prospective clients?',
    answer: 'Section 45 of the Code Determination requires registered practitioners to tell clients about the TPB register and how to search it, how to complain to the TPB, general rights and obligations, certain events in the last five years, and any conditions on registration. Publishing it on your website is one example the TPB gives.' },
  { category: 'rules', question: 'Can we put the TPB registered symbol on our website?',
    answer: 'Yes, if you are a registered tax or BAS agent and accept the TPB’s terms of use. It must show your registration number, be at least 136 pixels wide on screen in the stacked version, sit on a plain background, and never be recoloured, restyled or grouped with other logos.' },
  { category: 'rules', question: 'Can I put CPA in my email signature?',
    answer: 'Only if you are entitled to the designation, and in the form your professional body allows. CPA Australia and CA ANZ set their own rules, and CPA Australia says its public practice logo is for members with a public practice certificate. On your website we use designations only as you confirm you hold them.' },
  { category: 'rules', question: 'Can clients send tax file numbers through our website?',
    answer: 'Not through a normal contact form. The Privacy (Tax File Number) Rule 2015 regulates how TFN information is collected, stored, used, disclosed and destroyed, and a breach is an interference with privacy. Our forms ask people not to include TFNs, and send documents to your secure portal instead.' },

  // ── AI ──
  { category: 'ai', question: 'Is there an AI for accountants?',
    answer: 'Several. Accounting platforms ship their own AI, such as Xero’s JAX, and practice software is adding AI for document sorting and drafting. Firms also use custom AI agents for work across systems: filing client documents to the right job, chasing missing paperwork and processing supplier invoices.' },
  { category: 'ai', question: 'Can I use AI with Xero?',
    answer: 'Yes. Xero’s own AI companion, JAX, answers questions about your financial data and helps create invoices and quotes. Xero also publishes an API, so custom AI tools can read and write Xero data within the permissions you grant, for example reading supplier bills into Xero for approval.' },
  { category: 'ai', question: 'Can I use ChatGPT for accounting?',
    answer: 'For drafting and explaining concepts, yes. For client work, be careful: the OAIC recommends organisations do not enter personal information into publicly available generative AI tools. Client names, TFNs, bank details and financial records belong only in AI services on business terms you have checked.' },
  { category: 'ai', question: 'Is AI going to replace accountants?',
    answer: 'We do not think so, and it is not what we build. AI handles repetitive work: sorting documents, chasing paperwork, coding routine transactions for review. Advice, judgement, client relationships and signing off returns stay with qualified people, who get more time for them.' },
  { category: 'ai', question: 'What is the best client portal for accounting firms?',
    answer: 'Usually the one built into the practice software you already run, because it links documents to jobs without extra work. Switching portals disrupts clients, so we rarely suggest it. We link your website to the portal you use and can add AI that tells clients what is still missing.' },

  // ── Working with us ──
  { category: 'working', question: 'Do we own the website and content you build?',
    answer: 'Yes. The design, copy, code, images and accounts are yours. You hold the domain, hosting and analytics accounts, and if you move to another company you take everything with you.' },
  { category: 'working', question: 'Do you have an office in Australia?',
    answer: 'No. We work with Australian firms remotely and do not have an Australian office. Workshops, reviews and training happen over video calls in Australian business hours. If you want an agency that visits your office in person, a local studio is the better choice.' },
];

/* ─── Named options in the Australian market (open self-disclosure, ItemList).
       Each note is based on the company's own website, fetched 2026-09-26; each
       lists an Australian address on its own site. ── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. Custom websites, SEO and AI document intake for accounting and bookkeeping firms, with TPB-aware copy. Founder-led. We work remotely and have no Australian office.' },
  { name: 'Accountant Website', note: 'Surry Hills, NSW. Websites built for accountants and accounting firms, plus branding, digital marketing, SEO, maintenance plans and managed cyber security.' },
  { name: 'Practice + Pixels', note: 'Fortitude Valley, QLD. Websites, branding and digital marketing for accounting firms, lawyers and financial advisers, with integrations such as Xero listed on its site.' },
  { name: 'Five by Five', note: 'Burleigh Heads, QLD. Accounting website design covering strategy, brand, content, build, SEO and hosting, plus SEO and PPC for accountants.' },
  { name: 'Kia Ora Digital', note: 'Melbourne, VIC. SEO for accounting firms, including audits, service and location pages, local citations and optimisation for AI search.' },
  { name: 'BAMBRICK', note: 'Brisbane head office, with Sydney and Melbourne addresses. SEO for accountants and bookkeepers covering keyword research, content, local SEO and link building.' },
  { name: 'Search Marketing Group', note: 'South Melbourne, VIC and Surry Hills, NSW. SEO, Google Ads and web design, with published guidance on SEO for accountants in Australia.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only. ───────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Accountant Website Design and SEO Australia',
      serviceType: 'Website design, SEO and AI document intake for accounting and bookkeeping firms',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Website design, SEO and AI tools for Australian accounting and bookkeeping firms: a page per service and client type, TPB section 45 information and the registered tax practitioner symbol placed to the TPB rules, booking and client portal links, TFN-safe enquiry forms, and AI document intake connected to Xero or MYOB. Supported after launch and owned by the client.',
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
      image: 'https://factoryjet.com/og-default.png',
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
      name: 'Accountant website design and SEO providers in Australia',
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
      'Websites, SEO and AI tools for Australian accounting and bookkeeping firms: clear service pages, TPB-aware trust signals, booking and client portal links, and AI document intake. Built, supported and owned by you.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'FactoryJet: accountant website design and SEO for Australian accounting firms' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* What the website does for the firm (capability grid). */
const CAPS: { t: string; d: string }[] = [
  { t: 'A page for every service', d: 'Tax returns, BAS and bookkeeping, payroll, SMSF, advisory. Each gets its own page answering the questions clients ask before they book.' },
  { t: 'Pages for the clients you want', d: 'Trades, medical and dental practices, property investors, farmers, startups. A page that speaks to one type of client, with their questions and examples, usually does better than “we help all businesses”.' },
  { t: 'Trust signals done properly', d: 'Partner profiles with qualifications and registration numbers, a link to your entry on the TPB register, the section 45 client information, the registered symbol placed to TPB rules, and real Google reviews.' },
  { t: 'Booking that fits a practice', d: 'Book a first meeting or tax appointment online, with the right questions asked up front. Enquiries route to the right person, not a shared inbox.' },
  { t: 'Portal links and safe intake', d: 'A clear client login to the portal you already use, and enquiry forms that ask people not to send TFNs or bank details, so sensitive documents go through the secure path from the start.' },
  { t: 'Built to be found and cited', d: 'Fast, accessible pages, schema markup, a matching Google Business Profile, and plain answers Google and AI assistants can quote.' },
];
const CAP_ICONS = [
  'M6 3h9l4 4v14H6V3Zm9 0v4h4M9 12h7M9 16h7',
  'M9 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 13c0-3 2-5 5-5s5 2 5 5m2-12a3 3 0 0 1 0 6m2 6c0-2-1-4-3-5',
  'M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Zm-3 9 2 2 4-4',
  'M4 6h16v14H4V6Zm0 4h16M8 3v4m8-4v4m-8 7h3',
  'M5 11h14v10H5V11Zm3 0V7a4 4 0 0 1 8 0v4m-4 4v2',
  'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4',
] as const;
const CAP_SUBJECTS = [
  'AI-generated model: a white site map of small page cards, each labelled only by a simple icon, fanning out from one orange home card',
  'AI-generated model: three white page cards, each topped with a small figure representing a tradie, a doctor and a farmer, one card lifted in orange',
  'AI-generated model: a white profile card with an orange tick badge and a small blank registration plate below it, no readable text',
  'AI-generated model: a white calendar card with one orange time slot and a small envelope sliding into a labelled tray',
  'AI-generated model: a white document folder passing through an orange padlocked door into a vault-like box',
  'AI-generated model: a white search bar with three answer cards stacked beneath it, the top card highlighted orange',
] as const;

/* Fit check. Rendered as <details>, no client component. */
const FIT_CHECK: { q: string; a: string; verdict: string }[] = [
  { q: 'I am a sole practitioner and mostly work from referrals.', verdict: 'Keep it small', a: 'A tidy five-page site, a complete Google Business Profile and your section 45 information may be all you need. We can deliver up to five pages in 7 days, or you can use a builder yourself.' },
  { q: 'We are a firm of 5 to 30 people and want more of one kind of client.', verdict: 'Custom build plus SEO', a: 'Pages per service and client type, proper trust signals and local SEO pay off here. Many competing firms have generic sites, so specifics stand out.' },
  { q: 'Our site is fine, but nobody finds it.', verdict: 'SEO first', a: 'Keep the site and fix the search side: technical issues, service and location pages, Google Business Profile and reviews. Redesign only if the site itself slows enquiries.' },
  { q: 'We lose hours every tax season chasing documents.', verdict: 'AI intake', a: 'That is a workflow problem more than a website one. An AI agent can check portal uploads, tell clients what is missing and file documents to the right job, with staff reviewing anything unclear.' },
  { q: 'We want a done-for-you template and do not mind looking like other firms.', verdict: 'Template provider', a: 'The quickest route, and several Australian providers do it well. Check who owns the site if you leave, and whether you can add pages for your own services.' },
];

/* What goes on the site because of the TPB rules. */
const TPB_CHECKLIST: { t: string; d: string }[] = [
  { t: 'Register link.', d: 'Tell visitors the TPB keeps a public register, how to search it, and link to your own entry.' },
  { t: 'Complaints path.', d: 'Say complaints can be made in writing to the TPB and link to its complaint form.' },
  { t: 'Rights and obligations.', d: 'General information on your obligations as a registered practitioner and your clients’ obligations to you.' },
  { t: 'Events and conditions.', d: 'Any prescribed events in the last five years, and any conditions on your registration.' },
  { t: 'Symbol to the rules.', d: 'Registration number attached, 136 pixels or wider, plain background, unaltered.' },
  { t: 'Titles that match the register.', d: 'Only call someone a tax agent or BAS agent if the register says so.' },
  { t: 'No TFNs in web forms.', d: 'Point sensitive documents to the secure portal.' },
];

/* How we build it. */
const BUILD_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Pick the clients you want', d: 'With your partners we decide which services and client types you want more of. That decides the pages, not a template.' },
  { n: '02', t: 'Check registrations and titles', d: 'We check each person’s registrations against the TPB register and agree exactly how each is described.' },
  { n: '03', t: 'Plan pages and search terms', d: 'We map services, client types and locations to real Australian searches, with one page owning each topic.' },
  { n: '04', t: 'Write the copy with you', d: 'Plain English, specific to your firm, reviewed by partners. Section 45 information gets its own page, linked from every footer.' },
  { n: '05', t: 'Design and build', d: 'A fast site built to WCAG 2.2 AA, with booking, portal login, enquiry routing and schema markup you can edit yourself.' },
  { n: '06', t: 'Move the old site safely', d: 'Every old page that earns traffic is redirected to its new home, with titles and structured data carried across.' },
  { n: '07', t: 'Launch and connect search', d: 'Google Business Profile matched to the site, sitemap submitted, and enquiry tracking set up.' },
  { n: '08', t: 'Support and grow', d: 'Updates, new pages as services change, monthly enquiry reports if you take SEO, and AI intake when you are ready.' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/accounts-payable-automation', t: 'Accounts payable automation', d: 'AI that reads supplier invoices into Xero or MYOB for approval, with exceptions sent to a person.' },
  { href: '/au/local-seo', t: 'Local SEO', d: 'Google Business Profile, reviews and location pages so nearby clients find your office first.' },
  { href: '/au/small-business-web-design', t: 'Small business web design', d: 'Websites for the small businesses you advise, built by the same team.' },
  { href: '/au/law-firm-seo', t: 'Law firm SEO and websites', d: 'The same approach for another regulated profession.' },
  { href: '/au/ai-development', t: 'AI development and integration', d: 'Custom AI connected to Xero, MYOB, your practice software or portal.' },
  { href: '/au/website-maintenance', t: 'Website maintenance', d: 'Updates, security and backups after launch.' },
];

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'accountant-website-design';
const H1_SPLIT = H1.lastIndexOf(' for ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 4);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 5);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export default function AccountantWebsiteDesignAUPage() {
  return (
    <>
      <script id="ld-au-accountant-website-design" type="application/ld+json"
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
              <div className="eyebrow">Websites, SEO and AI for accountants and bookkeepers</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead" data-speakable="true">
                FactoryJet builds websites and runs SEO for Australian accounting and bookkeeping firms. You get a page
                for every service and client type you want more of, trust signals placed to the Tax Practitioners
                Board rules, online booking, a clear client portal link, and AI that helps with document intake. We
                build it, support it after launch, and you own it.
              </p>
              <HeroInlineForm region="au" source="au_accountant_website_design_hero" submitLabel="Plan my firm’s website" />
            </div>

            <form
              className="specpanel"
              aria-label="What an accounting firm website does for the practice"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="The three jobs of an accounting firm website: win the search, earn trust with checkable registrations, and move clients into booking and the secure portal"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT THE SITE DOES FOR YOUR PRACTICE</span>
                <span className="sys"><span>WEBSITE</span><span>SEO</span><span>AI INTAKE</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what the site does">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="acct-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={CAP_ICONS[5]} /></svg></span>
                  <span className="idx">service, client type and suburb searches</span>
                  <span className="title">Gets found on Google and in AI answers</span>
                  <span className="tag">SEO</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="acct-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={CAP_ICONS[2]} /></svg></span>
                  <span className="idx">registrations, register link, section 45</span>
                  <span className="title">Earns trust a buyer can check</span>
                  <span className="tag">TPB-aware</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="acct-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={CAP_ICONS[4]} /></svg></span>
                  <span className="idx">booking, portal login, AI document checks</span>
                  <span className="title">Moves clients to the secure path</span>
                  <span className="tag">Portal</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · No tax file numbers in web forms. Sensitive documents go through your portal.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
              { v: '$82,500', t: 'maximum civil penalty for a company that advertises tax or BAS agent services while unregistered', s: 'TPB, civil penalty provisions', u: SRC_TPB_PENALTIES },
              { v: 'Section 45', t: 'client information a registered practitioner must give; a public website is one way', s: 'TPB, keeping clients informed', u: SRC_TPB_S45 },
              { v: '136 px', t: 'minimum on-screen width of the registered tax practitioner symbol, always with your number', s: 'TPB, symbol guidelines', u: SRC_TPB_SYMBOL },
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

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What is accountant website design, and what makes it different?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">Accountant website design is building a website for an accounting, tax or
                    bookkeeping firm that wins clients a careful buyer would trust.</span> It differs from a general
                    business site in three ways: people check who you are before they call, tax agents and BAS agents
                    have advertising rules set by the Tax Practitioners Board, and clients need a safe way to send
                    sensitive documents.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Four terms we use a lot</div>
                    <p>
                      The <b>TPB</b> (Tax Practitioners Board) registers and regulates tax agents and BAS agents. A{' '}
                      <b>BAS agent</b> is registered to help businesses with GST, BAS and payroll reporting. A{' '}
                      <b>client portal</b> is the secure login where clients upload documents and sign returns. <b>SEO</b>,
                      or search engine optimisation, is the work that helps your firm show up when people search Google or
                      ask an AI assistant for an accountant.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Most pages that rank for accountant website design in Australia are template services or design
                    galleries. Few explain what the TPB expects on a practice website, how to handle tax file numbers,
                    or how SEO and AI now work for a small firm. This page covers all three.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A partner at a small suburban Australian accounting firm reviewing her firm's new website on a desktop monitor that faces her, a client folder on the desk, no readable text or logos" />
            </div>
          </div>
        </section>

        {/* ═══ SCOPE: this page vs related pages → ruled rows ═══ */}
        <section className="section platforms" id="scope">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Which page you need</div>
                <h2>Websites for accounting firms here. Automation for the back office next door.</h2>
              </div>
              <p>
                This page is about the firm’s own website and how clients find it. If you want AI to process supplier
                invoices for your firm or your clients, read our{' '}
                <a href="/au/accounts-payable-automation">accounts payable automation</a> page. If you only need
                better visibility in Google Maps, start with <a href="/au/local-seo">local SEO</a>.
              </p>
            </div>
            <div className="eyebrow plat-label">Quick guide</div>
            <div className="platlist" role="list">
              <div className="plat plat-own" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Website, SEO and client intake</h3></div><p className="plat-build">accounting, tax and bookkeeping firms</p><p className="plat-fit">This page</p></div>
              <div className="plat" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Supplier invoices into Xero or MYOB</h3></div><p className="plat-build">finance teams and the clients you advise</p><p className="plat-build"><a href="/au/accounts-payable-automation">AP automation</a></p></div>
              <div className="plat" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Google Maps and nearby searches only</h3></div><p className="plat-build">any local business</p><p className="plat-build"><a href="/au/local-seo">Local SEO</a></p></div>
              <div className="plat" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>A website for a client’s business</h3></div><p className="plat-build">the small businesses you refer</p><p className="plat-build"><a href="/au/small-business-web-design">Small business web design</a></p></div>
            </div>
          </div>
        </section>

        {/* ═══ WHAT THE SITE DOES → capgrid + grouped lists ═══ */}
        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What we build for accounting firms</div>
              <h2>Six things an accounting firm website has to get right</h2>
              <p className="lead">
                Clients choosing an accountant compare a few firms, check who they would be dealing with, and book with
                the one that answered their question most clearly.
              </p>
            </div>
            <div className="capgrid">
              {CAPS.map((c, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={c.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={CAP_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={CAP_SUBJECTS[i]} />
                    <h3>{c.t}</h3>
                    <p>{c.d}</p>
                  </div>
                );
              })}
            </div>
            <div className="agentdir-group chg-group">
              <div className="agentdir-label"><span className="capid">GRP‑01</span><h3>Put on every accounting site</h3></div>
              <ul className="chg-list">
                <li><span><b>Who you help, in the first line.</b> “Accountants for Geelong trades and small businesses” beats “Your trusted financial partner”.</span></li>
                <li><span><b>Named people.</b> Partners and senior staff with photos, qualifications and what they specialise in.</span></li>
                <li><span><b>How to start.</b> What happens at the first meeting, what to bring, and how you charge, in words.</span></li>
                <li><span><b>Section 45 information.</b> A clear page, linked from every footer.</span></li>
                <li><span><b>Office details.</b> Address, hours and parking or transport, matched exactly to your Google Business Profile.</span></li>
              </ul>
            </div>
            <div className="agentdir-group chg-group">
              <div className="agentdir-label"><span className="capid">GRP‑02</span><h3>Leave off</h3></div>
              <ul className="chg-list">
                <li><span><b>Refund promises.</b> “Biggest refund, promised” invites exactly the scrutiny you do not want.</span></li>
                <li><span><b>Titles people do not hold.</b> Only registered agents are described as tax agents or BAS agents, and only members use body designations.</span></li>
                <li><span><b>Forms asking for TFNs.</b> Identity numbers belong in the portal, not in an email inbox.</span></li>
                <li><span><b>A wall of services.</b> Twenty services in one list tells a visitor nothing. Give the important ones a page.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ TPB RULES → facts + checklist panel + ruled rows ═══ */}
        <section className="section facts" id="tpb-rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The rules, in plain English</div>
              <h2>What the Tax Practitioners Board rules mean for your website</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>Only advertise what you are registered for.</b> The TPB says that, generally, only registered tax
                  and BAS agents can charge a fee for tax agent, BAS or tax (financial) advice services. Under the Tax
                  Agent Services Act 2009, an unregistered person who advertises that they will provide a tax or BAS
                  agent service, or who says they are registered, can face a civil penalty of up to $16,500 for an
                  individual or $82,500 for a company. For a website, that means every service page, job title and
                  profile has to match the TPB register.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Tell prospective clients the section 45 information.</b> Under section 45 of the Tax Agent Services
                  (Code of Professional Conduct) Determination 2024, registered tax practitioners must tell current and
                  prospective clients about the TPB register and how to search it, how to complain to the TPB, general
                  rights and obligations, certain events in the last five years, and any conditions on their
                  registration, in writing and prominently. The TPB gives publishing it on the public website you use to
                  promote your services as one example. It applied from 1 July 2025 for practices with 100 or fewer
                  employees.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Use the registered symbol properly.</b> Registered tax and BAS agents who accept the TPB’s terms of
                  use can show the registered tax practitioner symbol. It must carry your registration number, be at
                  least 136 pixels wide on screen in the stacked version, sit on a plain background (never a photo),
                  and must not be recoloured, given effects such as shadows or glows, or grouped with other logos. The
                  TPB recommends placing it to the right of your practice logo.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <p>
                    <b>Handle tax file numbers with care.</b> The Privacy (Tax File Number) Rule 2015 regulates how
                    individuals’ TFN information is collected, stored, used, disclosed and destroyed, and a breach is an
                    interference with privacy under the Privacy Act. A contact form that emails a TFN to a shared inbox is
                    the wrong path. Professional bodies have their own rules too: CPA Australia, for example, says its
                    public practice logo is for members with a public practice certificate.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_TPB_PENALTIES} {...extLink}>TPB, civil penalty provisions</a>;{' '}
                    <a href={SRC_TPB_S45} {...extLink}>TPB, keeping your clients informed (section 45)</a>;{' '}
                    <a href={SRC_TPB_SYMBOL} {...extLink}>TPB, registered tax practitioner symbol guidelines</a>;{' '}
                    <a href={SRC_TPB_REGISTER} {...extLink}>TPB, public register</a>;{' '}
                    <a href={SRC_OAIC_TFN} {...extLink}>OAIC, tax file numbers</a>;{' '}
                    <a href={SRC_CPA_BRAND} {...extLink}>CPA Australia, growing and marketing your business</a>.
                    Checked 26 September 2026. This is general information, not legal or professional advice.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">7 things we check on every accounting site</div>
                <ol className="au-numlist">
                  {TPB_CHECKLIST.map((s) => (
                    <li key={s.t}><span><b>{s.t}</b> {s.d}</span></li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="platlist span-all" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>What we do</h3></div><p className="plat-build">Check titles against the TPB register, build and link the section 45 page, place the symbol to TPB guidelines, and keep TFNs out of email.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>What you keep</h3></div><p className="plat-build">You stay responsible for your registration and what your site says. We make updates easy when a partner joins or leaves.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>What we do not do</h3></div><p className="plat-build">We do not give compliance sign-off. Confirm the detail with your professional body or adviser.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ SEO FOR ACCOUNTANTS → second facts module ═══ */}
        <section className="section facts" id="seo">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">SEO for accountants</div>
              <h2>How SEO for accountants works in 2026</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Accounting searches split into three kinds. <b>Nearby searches</b>, such as “accountant near me” or an
                  accountant in your suburb, are won mostly through your Google Business Profile, reviews and a page for
                  each office. <b>Service searches</b>, such as SMSF accountant or bookkeeping services, are won by a
                  strong page for that service. <b>Question searches</b>, such as whether you need a tax agent, are won
                  by clear, direct answers.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  Google now shows an AI Overview above many of these results, and more people ask ChatGPT or
                  Perplexity which accountant to use. Those tools quote pages that answer plainly and agree with what
                  other sites say about you, which rewards precise, checkable, consistent firms.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  We pick the services and client types you want more of, build one page to own each, fix the
                  technical basics, keep your listings consistent, and report monthly on enquiries, not just rankings.
                  Where Maps results matter most, our <a href="/au/local-seo">local SEO</a> work carries the load.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <div className="factlabel">What we typically build pages for</div>
                  <ul className="trigrows">
                    <li><span className="m">Tax returns and tax planning</span><span className="n">individuals, sole traders, investors</span><span className="t">Service</span></li>
                    <li><span className="m">BAS, bookkeeping and payroll</span><span className="n">small businesses and trades</span><span className="t">Service</span></li>
                    <li><span className="m">SMSF accounting</span><span className="n">trustees and advisers</span><span className="t">Service</span></li>
                    <li><span className="m">Accountants for an industry</span><span className="n">medical, construction, hospitality, rural</span><span className="t">Client type</span></li>
                    <li><span className="m">Accountant in a suburb or town</span><span className="n">one page per real office</span><span className="t">Local</span></li>
                    <li><span className="m">Questions clients ask</span><span className="n">answered on the page that owns the topic</span><span className="t">Answer</span></li>
                  </ul>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A small business owner in a ute cab searching on her phone for a local accountant, the phone screen facing her, no readable text or logos"
                caption="Most first searches for an accountant happen on a phone, often between jobs. The page that answers fastest usually gets the call." />
            </div>
          </div>
        </section>

        {/* ═══ FIT CHECK (<details>) → vlog ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which option fits you?</div>
              <h2>A 30-second check: builder, template service, custom site, SEO or AI intake</h2>
              <p>Tap the line that sounds most like your practice. The answer is honest, even when it is not us.</p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="Two accountants at a meeting table in an Australian suburban office, one pointing at a printed page layout, a laptop open and facing them, no readable text"
                caption="The right answer depends on the size of the firm and where the time is going now." />
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

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>DIY builder vs accountant template service vs a custom accounting firm website</h2>
                <p className="lead">
                  Each is the right answer for someone. This compares them on what changes for your practice, not on
                  price.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Custom site (FactoryJet)</th>
                    <th>Accountant template service</th>
                    <th>DIY website builder</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Pages per service and client type</th><td className="fj">Planned around who you want</td><td>Usually a set list</td><td>Whatever you write</td></tr>
                  <tr><th scope="row">Copy written for your firm</th><td className="fj">Yes, with partner review</td><td>Often shared template text</td><td>You write it</td></tr>
                  <tr><th scope="row">TPB section 45 page and symbol</th><td className="fj">Built and checked</td><td>Varies by provider</td><td>Up to you</td></tr>
                  <tr><th scope="row">Booking and portal links</th><td className="fj">Connected to your tools</td><td>Common options</td><td>Plugins you set up</td></tr>
                  <tr><th scope="row">SEO beyond the basics</th><td className="fj">Planned, measured on enquiries</td><td>Add-on packages</td><td>Basic settings</td></tr>
                  <tr><th scope="row">AI document intake</th><td className="fj">Available, same team</td><td>Rarely</td><td>No</td></tr>
                  <tr><th scope="row">Who owns the site and content</th><td className="fj">You do</td><td>Check the contract</td><td>You, on their platform</td></tr>
                  <tr><th scope="row">Time from you</th><td className="fj">Workshops and reviews</td><td>Low</td><td>High</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Good template providers exist and some include more, so ask each one the questions further down this
              page. Every site we build meets WCAG 2.2 AA and lets your team edit copy without a developer. For
              typical market ranges, see our <a href="/blog/website-cost-australia-2026">website cost guide for
              Australia (2026)</a>.
            </p>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (placeholder for the visual pass) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a row of white document folders on a rail moving into an orange secure box, with one folder handed to a small human figure at a desk" />

        {/* ═══ HOW WE BUILD IT → process timeline ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How we build it</div>
                <h2>How we build your accounting firm website, in eight steps</h2>
                <p className="lead">
                  Most of the value is in steps one to four. Open any step to see what happens in it.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A FactoryJet strategist on a video call with two partners of an Australian accounting firm, the laptop screen facing the strategist, sticky notes of service names on a wall behind the partners with no readable text"
                caption="Step one is a conversation with the partners about which clients the firm wants more of. Everything else follows from it." />
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
            headline={'Is your firm’s website bringing in the clients you want?'}
            sub={'Send us your current site and the kind of clients you want more of. On a short call with the founder, we will tell you what to fix first: the site, the search side, or the admin that is eating tax season.'}
            label={'Plan my firm’s website'}
          />
        </div>

        {/* ═══ AI FOR ACCOUNTANTS → definition module ═══ */}
        <section className="definition" id="ai-for-accountants">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="mockup" ratio="3:2" className="definition-image"
              subject="Mockup of a client portal upload screen on a laptop, with a short AI checklist beside it showing two documents received and one still missing, generic icons only, no brand names or readable personal data" />
            <p className="figcap">
              AI document intake checks what a client has uploaded against what the job needs, and asks for the rest
              before a person opens the file.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">AI for accountants</div>
            <h2>AI for accountants: document intake, client portals and Xero</h2>
            <p>
              Is there an AI for accountants? Yes, and you probably already have some. Xero’s own AI companion,{' '}
              <a href={SRC_XERO_JAX} {...extLink}>JAX</a>, answers questions about financial data and helps with
              invoices and quotes, and practice software is adding AI for sorting documents. The useful gap is the work
              that crosses systems: between your website, your portal, your practice software and{' '}
              <a href={SRC_XERO_API} {...extLink}>Xero</a> or <a href={SRC_MYOB_API} {...extLink}>MYOB</a>, which
              both publish APIs.
            </p>
            <p>
              <b>Document intake.</b> An AI agent reads what clients upload to your portal, recognises each document
              (a PAYG summary, a bank statement, a rental schedule), files it to the right job, and sends the client a
              plain list of what is still missing. Staff review anything unclear. That is where tax season hours go.
            </p>
            <p>
              <b>Enquiry triage.</b> Website enquiries are read, sorted by service and urgency, and routed to the right
              partner with a short summary, and the client gets a useful reply straight away.{' '}
              <b>Supplier invoices.</b> For your firm or the businesses you advise, our{' '}
              <a href="/au/accounts-payable-automation">accounts payable automation</a> work reads bills into Xero or
              MYOB for approval, with exceptions sent to a person.
            </p>
            <p>
              Two rules apply to all of it. The OAIC recommends organisations do not put personal information into{' '}
              <a href={SRC_OAIC_AI} {...extLink}>publicly available generative AI tools</a>, so we use business AI
              services with data terms you can check. And the AI prepares, sorts and asks; qualified people advise and
              sign off. For wider AI work, see <a href="/au/ai-development">AI development and integration</a>.
            </p>
          </div>
        </section>

        {/* ═══ ENGAGEMENT SHAPES + DEMAND → ruled rows + split ═══ */}
        <section className="section platforms" id="engagement">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Scope, not packages</div>
                <h2>Three ways to work with us</h2>
              </div>
              <p>
                Every project is quoted for your scope, with a fixed price for the build and any ongoing work shown
                separately. These are the shapes it usually takes.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Website build.</h3></div><p className="plat-build">A new or rebuilt site with service and client-type pages, team and registrations, section 45 page, booking and portal links. Sites of up to five pages can be delivered in 7 days.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>SEO for your practice.</h3></div><p className="plat-build">Technical fixes, new pages for the services you want more of, Google Business Profile and reviews, with monthly reporting on enquiries.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>AI intake and automation.</h3></div><p className="plat-build">Document checks in your portal, enquiry triage, or supplier invoice processing, added to the site or run on their own.</p></div>
            </div>
            <div className="au-split">
              <div>
                <p>
                  What moves the scope: services and offices, new copy and photos, tools we connect, migration, and
                  ongoing SEO or support. For
                  typical Australian market ranges, see our <a href="/blog/website-cost-australia-2026">website cost
                  guide</a>, <a href="/blog/seo-cost-australia-2026">SEO cost guide</a> and{' '}
                  <a href="/blog/ai-cost-australia-2026">AI cost guide</a>. Across our projects, 97% are delivered on
                  time.
                </p>
                <ModalCTAButton label="Plan my firm’s website" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="demand">
                <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                <ul>
                  {[
                    { kw: 'ai for accountants', v: '880', w: '100%', kd: 'Mostly firms exploring AI tools' },
                    { kw: 'accountant website design', v: '140', w: '16%', kd: 'Same as accounting website design' },
                    { kw: 'seo for accountants', v: '140', w: '16%', kd: 'Firms that want more clients' },
                    { kw: 'website for accountants', v: '110', w: '13%', kd: 'Comparing options' },
                    { kw: 'xero integration', v: '90', w: '10%', kd: 'Connecting systems to Xero' },
                    { kw: 'bookkeeper website design', v: '10', w: '2%', kd: 'Bookkeepers, a small niche' },
                  ].map((r) => (
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

        {/* ═══ PROVIDER LIST (self-disclosure, ItemList from PROVIDERS) ═══ */}
        <section className="section platforms" id="providers">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>Accountant website design and SEO providers in Australia</h2>
              </div>
              <p>
                We are one option, not the only one. These are Australian companies that show up when firms search for
                accountant website design or SEO for accountants. Each note is based on what the company says on its
                own website.
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
              Companies named from live Australian search results for accountant website design and SEO for accountants, September 2026. Notes reflect each company’s own website on 26 September 2026. Listing is not endorsement.
            </p>
            <div className="au-panel au-panel-wide">
              <div className="eyebrow">Questions to ask any provider, including us</div>
              <ol className="au-numlist">
                <li><span><b>Who owns the site, copy and domain if we leave?</b> Get it in writing.</span></li>
                <li><span><b>Is the copy written for us, or shared with other firms?</b> Shared text helps nobody rank.</span></li>
                <li><span><b>How will you handle our section 45 information and the TPB symbol?</b> The answer should be specific.</span></li>
                <li><span><b>Where do TFNs and documents go?</b> The right answer is the portal, not the inbox.</span></li>
                <li><span><b>How will you measure SEO?</b> Enquiries and booked meetings, not only rankings.</span></li>
                <li><span><b>Who do we call after launch?</b> A named person, not a ticket queue.</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Beyond the website</div>
              <h2>The rest of what we build for Australian firms</h2>
              <p>
                A practice website is often the first project. These are the natural next steps, built by the same team.
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
          heading="Accountant website and SEO questions Australian firms actually ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>A website your next client can check, trust and book from</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                firm, the clients you want more of, and whether you need a new site, better SEO or help with tax season
                admin. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Plan my firm’s website" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/accounts-payable-automation">See accounts payable automation</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
