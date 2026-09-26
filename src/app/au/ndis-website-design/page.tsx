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
import './page.css';

const CANONICAL = 'https://factoryjet.com/au/ndis-website-design';
const UPDATED = '2026-09-26';
const TITLE = 'NDIS Website Design & Marketing Australia | FactoryJet';
/* Visible hero heading. H1 is the exact visible heading text (lead + emphasis) and the
   schema headline, so the two can never drift. */
const H1_LEAD = 'NDIS Website Design and Marketing for Providers';
const H1_EMPHASIS = 'Participants Can Trust';
const H1 = `${H1_LEAD} ${H1_EMPHASIS}`;
const DESCRIPTION =
  'NDIS website design and marketing for Australian providers. WCAG 2.2 AA accessible sites, Easy Read pages, honest copy that follows NDIS logo rules, and SEO.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'NDIS Website Design', url: CANONICAL },
];

/* ─── External sources, all fetch-verified 2026-09-26 ───────────────── */
// NDIA, NDIS logo guidelines: "The NDIS logo and acronym are registered trade marks in the
// NDIA's name." "No provider, person or business is permitted to use the NDIS logo without
// written consent from the NDIA." "Only registered NDIS providers are permitted to use the
// 'I/we heart NDIS' and 'I/we support NDIS' logos with the tagline, 'Registered Provider'."
// Unregistered providers "must not advertise or pass yourself off as a 'registered provider'
// or use other language (for example, 'official NDIS provider')". Misleading affiliation
// examples: NDIS acronym in business, trading or domain names; 'NDIS packages', 'NDIS bundles'.
// Refrain from 'NDIS approved' or '100% NDIS funded'. Misuse reported to the ACCC.
const SRC_NDIA_LOGO = 'https://www.ndis.gov.au/contact/feedback-and-enquiries/ndis-logo-guidelines';
// NDIS Commission, About registration: registered provider = applied, audited against the
// NDIS Practice Standards, suitability assessment of provider and key personnel, certificate
// issued; "generally registered for three years"; listed on the NDIS Provider Register.
// Must register for SDA, specialist behaviour support, NDIA-managed funding, plan management,
// SIL, NDIS digital platform services; unregistered providers only for self-managed or
// plan-managed participants.
const SRC_REG_ABOUT = 'https://www.ndiscommission.gov.au/provider-registration/about-registration';
// NDIS Commission, Find a registered provider: search by business name, legal name or ABN;
// shows registered, suspended or revoked.
const SRC_REGISTER = 'https://www.ndiscommission.gov.au/provider-registration/find-registered-provider';
// NDIS Commission, Mandatory registration: SIL and NDIS digital platform providers must
// register from 1 July 2026; support coordination reform paused; digital platform definition.
const SRC_MANDATORY = 'https://www.ndiscommission.gov.au/about-us/ndis-commission-reform-hub/mandatory-registration';
// NDIS Commission, NDIS Code of Conduct: applies to registered AND unregistered providers;
// respect privacy; integrity, honesty and transparency; fair pricing.
const SRC_COC = 'https://www.ndiscommission.gov.au/rules-and-standards/ndis-code-conduct';
// NDIS Commission, The NDIS Code of Conduct Guidance for NDIS Providers (April 2024), paras
// 32, 56, 58, 61-62, 111-112: informed consent before disclosure; truthful information about
// workforce qualifications; no false or unsubstantiated efficacy claims; clear advice about
// full costs; no inducements (incl. referral arrangements); no high-pressure sales; no
// promoting, advertising or publishing higher prices for participants.
const SRC_COC_GUIDE = 'https://www.ndiscommission.gov.au/sites/default/files/2024-10/Code-of-Conduct-Provider-Guidance.pdf';
// OAIC, Small business: regardless of turnover the Privacy Act covers "a health service provider".
const SRC_OAIC_SMALL = 'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business';
// OAIC, What is a health service provider: "a disability service provider (where they handle
// health information)" is covered "even if they're a small business".
const SRC_OAIC_HSP = 'https://www.oaic.gov.au/privacy/your-privacy-rights/health-information/what-is-a-health-service-provider';
// Australian Human Rights Commission, Standards and guidelines for digital accessibility (2025):
// "Organisations should conform with WCAG 2.2 at a minimum Level AA"; WCAG 2.2 released October
// 2023; WCAG under the DDA upheld in Maguire v SOCOG (No 2) [2000] HREOCA 31.
const SRC_AHRC = 'https://humanrights.gov.au/resource-hub/by-resource-type/guidelines-and-standards/guides-and-standards-disability-rights/chapter-3-standards-and-guidelines-digital-accessibility';
// W3C WAI, WCAG overview (the standard itself).
const SRC_WCAG = 'https://www.w3.org/WAI/standards-guidelines/wcag/';
// Australian Government Style Manual, Easy Read: year 4 to year 6 reading level; engage Easy
// Read experts; involve users; publish in HTML and as an accessible PDF with the source.
const SRC_EASY_READ = 'https://www.stylemanual.gov.au/content-types/easy-read';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'rules',     label: 'NDIS logo & registration' },
  { key: 'website',   label: 'Your NDIS website' },
  { key: 'access',    label: 'Accessibility & privacy' },
  { key: 'marketing', label: 'NDIS marketing & SEO' },
  { key: 'working',   label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Rules ──
  { category: 'rules', question: 'Which NDIS logo can I use?',
    answer: 'It depends on whether you are registered. The NDIA says only registered NDIS providers may use the ‘I/we heart NDIS’ and ‘I/we support NDIS’ logos with the ‘Registered Provider’ tagline, and it offers those tagline packs to download. The main NDIS logo is different: no provider, person or business may use it without written consent from the NDIA. If you are not registered, leave the logos off and describe your supports in plain words.' },
  { category: 'rules', question: 'Can unregistered providers use the NDIS logo?',
    answer: 'No. Nobody may use the NDIS logo without the NDIA’s written consent, and unregistered providers may not use the ‘I/we heart NDIS’ or ‘I/we support NDIS’ logos with the ‘Registered Provider’ tagline. The NDIA also says unregistered providers must not call themselves a ‘registered provider’ or use words such as ‘official NDIS provider’. You can still say, accurately, that you support participants who self-manage or plan-manage their funding.' },
  { category: 'rules', question: 'Is the NDIS logo trademarked?',
    answer: 'Yes. The NDIA says the NDIS logo and the NDIS acronym are registered trade marks in its name. It sends cease-and-desist letters for misuse and reports providers who falsely suggest a link with the NDIS to the ACCC. It also gives examples of misleading affiliation, including ‘NDIS’ in a business name, trading name or domain name, and product names such as ‘NDIS packages’ or ‘NDIS bundles’.' },
  { category: 'rules', question: 'What does being a registered NDIS provider mean?',
    answer: 'The NDIS Commission says a registered provider has applied for registration, been audited against the relevant NDIS Practice Standards and assessed as meeting them, passed a suitability assessment of the business and its key personnel, and been issued a certificate of registration. Registration generally lasts three years, and registered providers are published on the NDIS Provider Register.' },
  { category: 'rules', question: 'How to tell if a provider is NDIS registered?',
    answer: 'Search the NDIS Provider Register on the NDIS Commission website by business name, legal name or ABN. It shows providers that are registered and those whose registration has been suspended or revoked. On a provider website we build, the registration statement links to that register, so a participant, family member or support coordinator can check it in one click.' },
  { category: 'rules', question: 'Is NDIS getting rid of unregistered providers?',
    answer: 'Not across the board, as of September 2026. The NDIS Commission says unregistered providers can still support participants who self-manage or plan-manage their funding, except for supports that require registration. Registration became mandatory for supported independent living and NDIS digital platform providers from 1 July 2026, and reform for support coordination is paused. The rules are changing, so check the Commission’s page.' },

  // ── Website ──
  { category: 'website', question: 'What should an NDIS provider website include?',
    answer: 'A clear list of the supports you offer and who they suit, the areas you cover, your registration status stated accurately, how to make contact or a referral, and how to give feedback or make a complaint. Add real information about your team’s qualifications, a plain-language privacy notice, and an Easy Read summary if many of your participants use Easy Read. It should work with a keyboard, a screen reader and on a phone.' },
  { category: 'website', question: 'What is the average cost of a website design in Australia?',
    answer: 'It depends on the number of pages, features and how much content needs writing. Our Australian website cost guide lists typical market ranges with sources. For an NDIS provider, scope moves with the number of supports and service areas, Easy Read pages, a referral form connected to your systems, and accessibility testing. We do not publish a rate card; we quote a fixed price after a free first call.' },
  { category: 'website', question: 'How long does it take to build an NDIS provider website?',
    answer: 'A focused site of up to five pages comes with 7-day delivery once your content is ready. A larger site, with a page for each support, service area pages, Easy Read versions and a referral form that sends to your client management software, usually takes a few weeks. Content and sign-off are usually the slowest part.' },
  { category: 'website', question: 'Can I put my prices on my NDIS website?',
    answer: 'Yes, and clear pricing helps participants choose. Two rules matter. The NDIS Code of Conduct says providers must not charge, or promote, advertise or publish, a higher price for participants than for other people for substantially the same support without reasonable justification. And the Commission’s guidance asks providers to give clear advice about the full cost and what it covers. So one honest price list, with what is included.' },
  { category: 'website', question: 'Can I use participant stories, photos or testimonials on my website?',
    answer: 'Only with clear, informed consent from the person, in a format they understand, and with an easy way to withdraw it. The Code of Conduct requires providers to respect the privacy of people with disability, and the Commission’s guidance says people have the right not to have personal information disclosed without informed consent. Never ask in a way that feels like pressure, and keep stories accurate, without claims about results you cannot back up.' },

  // ── Access ──
  { category: 'access', question: 'Does my website need to be WCAG compliant?',
    answer: 'For an NDIS provider, yes in practice. Many of the people choosing your supports use screen readers, magnification, voice control or a keyboard instead of a mouse, or prefer simple language. The Australian Human Rights Commission says organisations should conform with WCAG 2.2 at a minimum of Level AA.' },
  { category: 'access', question: 'Is WCAG a legal requirement in Australia?',
    answer: 'The legal duty comes from the Disability Discrimination Act 1992, which requires providers of goods and services not to discriminate against people with disability. WCAG is the benchmark the Australian Human Rights Commission points to: its guidelines say organisations should meet WCAG 2.2 Level AA at a minimum, and the Commission upheld WCAG under the Act in Maguire v Sydney Organising Committee for the Olympic Games in 2000.' },
  { category: 'access', question: 'Can you get sued for not having accessibility on your website?',
    answer: 'The Disability Discrimination Act 1992 covers providers of goods and services, and the Australian Human Rights Commission upheld WCAG under the Act as early as 2000, in Maguire v Sydney Organising Committee for the Olympic Games. So an inaccessible site carries real legal risk. For an NDIS provider the everyday cost is plainer: a participant or family member who cannot use your site will simply choose someone else. This is general information, not legal advice.' },
  { category: 'access', question: 'What are common WCAG violations?',
    answer: 'The ones we find most on provider sites are low-contrast text, images with no text description, form fields with no label, buttons that only work with a mouse, pop-ups that trap keyboard users, link text like ‘click here’, headings used for styling instead of structure, text that breaks when zoomed, videos without captions, and PDFs that screen readers cannot read.' },
  { category: 'access', question: 'How do I make my website WCAG compliant?',
    answer: 'Start with an audit against WCAG 2.2 Level AA: an automated scan to catch the obvious issues, then a person testing with a keyboard only, a screen reader and 200 to 400 percent zoom, because scans miss a lot. Fix the templates first so every page improves at once, then content: alt text, headings, link text and captions. Then publish an accessibility statement.' },
  { category: 'access', question: 'What is Easy Read, and does my NDIS website need it?',
    answer: 'Easy Read combines short, simple sentences with images, so people with low literacy or intellectual disability can understand the information. The Australian Government Style Manual says it should read at a year 4 to year 6 level, be tested with the people who use it, and be published as a web page and an accessible PDF. Many providers add Easy Read versions of their services, fees, complaints and privacy pages.' },
  { category: 'access', question: 'What are the privacy requirements for NDIS providers?',
    answer: 'Two layers. The NDIS Code of Conduct, which applies to registered and unregistered providers, requires you to respect the privacy of people with disability. And the OAIC says a disability service provider that handles health information is a health service provider under the Privacy Act, covered even if it is a small business. On your website that means minimal referral forms, a clear privacy notice, secure storage and no health details sent by plain email.' },

  // ── Marketing ──
  { category: 'marketing', question: 'How do I advertise my NDIS business?',
    answer: 'Honestly and where people look: a clear website, a complete Google Business Profile, accurate details on the NDIS Provider Register if you are registered, relationships with support coordinators and local community groups, and useful content that answers participants’ questions. Stay inside the rules: no NDIS logo without consent, no ‘registered’ claim unless you are, no ‘NDIS approved’ or ‘100% NDIS funded’, and no inducements or high-pressure selling.' },
  { category: 'marketing', question: 'How to find NDIS clients as a sole trader?',
    answer: 'Participants choose their own supports, so the job is to be easy to find and easy to trust. Build a short website that says exactly what you do, where and when, and your qualifications and screening. Set up a Google Business Profile for your service area, ask happy clients for reviews without offering anything in return, and introduce yourself to support coordinators and plan managers in your area with a one-page summary.' },
  { category: 'marketing', question: 'What does an NDIS marketing agency do?',
    answer: 'It helps a provider get found and chosen: website design, SEO so your pages show up for local searches like ‘occupational therapy NDIS Parramatta’, Google Business Profile, content for support coordinators, and sometimes ads and social media. A good one knows the NDIS logo rules, the Code of Conduct limits on inducements and pricing, and accessibility.' },
  { category: 'marketing', question: 'Is SEO still worth it in 2026?',
    answer: 'For NDIS providers, yes, if it is done for people rather than for tricks. Families and support coordinators search for a support plus a suburb, and Google often shows an AI Overview that pulls from clear, specific pages. Clear pages for each support and area, with accurate details and plain answers, are what Google and AI assistants tend to cite.' },

  // ── Working ──
  { category: 'working', question: 'Do you have an office in Australia?',
    answer: 'No. We do not have an Australian office, and we say so. We work with Australian providers remotely, on calls and video in Australian business hours, and the founder is involved on every project. For local search, what matters is your own business address, service area and reviews, not where your web designer sits.' },
  { category: 'working', question: 'Do we own the NDIS website you build?',
    answer: 'Yes. The domain, hosting account, website, content, images and analytics are set up in your name, and you hold the logins. If you later move to another agency or bring it in-house, you take everything with you. Support after launch is there if you want it, never a condition.' },
];

/* ─── Named options in the Australian market (open self-disclosure, ItemList).
       Each note is based on the company’s own website, fetched 2026-09-26. ── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. We design, build and support accessible websites and SEO for NDIS providers, with copy checked against the NDIA logo guidelines and the Code of Conduct. No Australian office: we work remotely, founder involved on every project, and you own what we build.' },
  { name: 'ICON Agency', note: 'A digital agency listing offices in Cremorne VIC, Surry Hills NSW and Bowen Hills QLD. Its NDIS provider page offers website design and development, hosting, branding and communications, and says its sector knowledge comes from designing and developing the NDIS and NDIS Commission websites.' },
  { name: 'DSIGNS', note: 'A Parramatta NSW studio offering branding, web design and digital marketing for NDIS providers, from logo design to lead generation, with an NDIS portfolio on its site.' },
  { name: 'Website Adelaide', note: 'A South Australian web designer based in Maslin Beach SA that lists NDIS provider website design among the industries it builds for.' },
  { name: 'BuzzPilot', note: 'A Perth web and marketing studio with a Langford WA address that builds NDIS provider websites and lists NDIS provider projects in Perth and Victoria.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only. ───────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'NDIS Website Design and Marketing Australia',
      serviceType: 'NDIS provider website design, accessibility (WCAG 2.2 AA), Easy Read pages, NDIS SEO and marketing',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Website design, accessibility and marketing for Australian NDIS providers. Sites built to WCAG 2.2 AA with Easy Read pages, privacy-minded referral forms and copy checked against the NDIA logo guidelines and the NDIS Code of Conduct, plus NDIS SEO and Google Business Profile. Owned by the provider and supported after launch.',
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
      citation: [SRC_NDIA_LOGO, SRC_REG_ABOUT, SRC_COC_GUIDE, SRC_MANDATORY, SRC_OAIC_HSP, SRC_AHRC, SRC_EASY_READ],
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
      name: 'NDIS website design and marketing options in Australia',
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
      'Accessible NDIS provider websites and honest NDIS marketing: WCAG 2.2 AA, Easy Read pages, privacy-minded referral forms, copy that follows the NDIS logo rules, and local SEO. Owned by you.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'FactoryJet: NDIS website design and marketing for Australian providers' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* What we build (capability cards). */
const BUILDS: { t: string; d: string }[] = [
  { t: 'Support pages people can act on', d: 'One clear page for each support: what it is, who it suits, where and when you deliver it, and how to start. Plain language, with your registration status stated exactly as it is.' },
  { t: 'Accessible build, WCAG 2.2 AA', d: 'Strong contrast, pages that work at 400 percent zoom, full keyboard access, labelled forms, image descriptions, captions and no animation that cannot be paused. Tested by a person, not only a scanner.' },
  { t: 'Easy Read and plain-language pages', d: 'Easy Read versions of the pages people need most, such as supports, fees, complaints and privacy, as a web page and an accessible PDF, tested with the people who use them.' },
  { t: 'Referral and enquiry forms', d: 'Short forms for participants, families and support coordinators that ask only what you need, explain why, and send securely to your inbox or client system. Nothing pre-ticked.' },
  { t: 'NDIS SEO and local search', d: 'Pages built for how people search, a support plus a suburb or region, with a complete Google Business Profile, structured data and fast load times so Google and AI assistants can cite you.' },
  { t: 'Marketing that follows the rules', d: 'Content for support coordinators, plan managers and families, review requests with no incentives, and campaigns that never use the NDIS logo without consent or promise a support is ‘NDIS funded’.' },
];

/* Icons and visual-slot subjects for the capability cards (same order as BUILDS). */
const BUILD_ICONS = [
  'M4 4h16v16H4V4Zm4 5h8M8 13h8M8 17h5',
  'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v2m-4 2h8m-6 0 1 6m3-6-1 6',
  'M5 4h14v16H5V4Zm3 4h3v3H8V8Zm5 1h3M8 15h8',
  'M4 6h16v12H4V6Zm0 0 8 6 8-6',
  'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm5 12 4 4',
  'M4 12h4l3-7 2 14 3-7h4',
] as const;
const BUILD_SUBJECTS = [
  'AI-generated model: a white web page card with a large clear heading, three short text lines and one orange contact button',
  'AI-generated model: a white web page with an oversized orange focus ring around a button and a small keyboard beside it',
  'AI-generated model: a white Easy Read page with simple pictograms on the left and short text lines on the right',
  'AI-generated model: a short white form with three labelled fields and a small padlock, sending into a white folder',
  'AI-generated model: a white map tile with an orange location pin and a search bar above it',
  'AI-generated model: a white leaflet and a phone showing the same honest message, with no logos, side by side',
] as const;

/* "Which site do you need" self-check. Rendered as <details>, no client component. */
const FIT_CHECK: { q: string; a: string; verdict: string }[] = [
  { q: 'We are a new provider, not registered, and our first participants will self-manage or plan-manage their funding.', verdict: 'Focused starter site', a: 'Up to five clear pages with 7-day delivery once your content is in. We write the registration wording carefully: no logo, no ‘registered’ claim, and an accurate line on who you can support.' },
  { q: 'We are a registered provider and want more referrals from support coordinators and families.', verdict: 'Full provider site plus SEO', a: 'A page for each support and main service area, Easy Read summaries, a referral form built for support coordinators, the ‘Registered Provider’ tagline used as the NDIA allows, and local SEO.' },
  { q: 'We are an allied health practice with NDIS and private clients.', verdict: 'One practice site, one price list', a: 'You do not need a separate NDIS website. We add clear NDIS information to your practice site and publish one set of fees for everyone, as the Code of Conduct expects.' },
  { q: 'We want participants to find workers and pay for supports through our website or app.', verdict: 'Check registration first', a: 'A platform that connects participants with supports and processes payments from their plans can be an NDIS digital platform, which needs registration from 1 July 2026. Confirm your position with the NDIS Commission before we scope it.' },
  { q: 'We already have a website. It works, but we are not sure anyone with a disability can use it.', verdict: 'Accessibility audit and fixes', a: 'We test it against WCAG 2.2 AA, give you a plain-English list of issues in priority order, and fix them in your existing site where that makes sense.' },
];

/* How we build it. */
const BUILD_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Registration and claims check', d: 'We look up your NDIS Provider Register entry, if you have one, so every claim on the site matches what the Commission has on record.' },
  { n: '02', t: 'Supports, areas and people', d: 'We map your supports and service areas, and give participants, families and support coordinators each a clear path.' },
  { n: '03', t: 'Plain-language content', d: 'We write or edit your pages in plain language, define NDIS terms on first use, and plan the Easy Read pages. You approve every word.' },
  { n: '04', t: 'Accessible design', d: 'Generous text, strong contrast, obvious buttons and consistent navigation. Brand colours that fail contrast are adjusted, with your sign-off.' },
  { n: '05', t: 'Build and forms', d: 'The site, referral and enquiry forms, privacy notice and complaints page, with forms sent securely to your inbox or client system.' },
  { n: '06', t: 'Test with assistive technology', d: 'Keyboard-only and screen reader checks, 400 percent zoom, an automated scan, and a second read of every claim against the NDIA rules.' },
  { n: '07', t: 'Launch and local search', d: 'We go live, set up analytics that collect no health information, and complete your Google Business Profile and structured data.' },
  { n: '08', t: 'Support and updates', d: 'We keep supports, staff and areas current, keep the site patched and fast, and re-test accessibility after big changes.' },
];

/* Accessibility in practice (table). */
const ACCESS_ROWS: { need: string; site: string; check: string }[] = [
  { need: 'Low vision', site: 'Strong contrast, text that resizes to 400 percent without breaking or scrolling sideways', check: 'Contrast checker on every colour pair, zoom test on phone and desktop' },
  { need: 'Blind or screen reader user', site: 'Real headings, text descriptions for images, labelled buttons and form fields, sensible reading order', check: 'Screen reader walk-through of every template and form' },
  { need: 'Limited hand movement', site: 'Everything works with a keyboard or switch, visible focus, large click targets, no drag-only controls', check: 'Keyboard-only walk-through, target size check' },
  { need: 'Deaf or hard of hearing', site: 'Captions on video, transcripts, contact options that do not need a phone call', check: 'Caption review, contact page review' },
  { need: 'Intellectual disability or low literacy', site: 'Plain language, Easy Read pages, one idea per sentence, consistent layout', check: 'Reading level check, testing with people who use Easy Read' },
  { need: 'Anxiety, fatigue or brain injury', site: 'No time limits on forms, no auto-playing media, animation that can be paused, clear error messages', check: 'Form and motion review against WCAG 2.2' },
];

/* Before-launch checklist. */
const LAUNCH_CHECKS: { t: string; d: string }[] = [
  { t: 'Registration stated exactly.', d: '‘Registered’ only if you are, with a link to the NDIS Provider Register.' },
  { t: 'No NDIS logo without consent.', d: 'The ‘Registered Provider’ tagline logos only for registered providers.' },
  { t: 'No funding promises.', d: 'No ‘NDIS approved’ or ‘100% NDIS funded’. Funding depends on each plan.' },
  { t: 'One price for everyone.', d: 'No higher prices advertised for participants, and clear notes on what each price covers.' },
  { t: 'Claims you can back up.', d: 'Real qualifications and screening, no unsubstantiated claims about results.' },
  { t: 'Consent for every story.', d: 'Informed, written, and easy to withdraw, for photos, names and testimonials.' },
  { t: 'Accessible to WCAG 2.2 AA.', d: 'Tested by a person, not only a scanner.' },
  { t: 'Private by design.', d: 'Short forms, a clear privacy notice, no health details by plain email.' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/small-business-web-design', t: 'Small business web design', d: 'Websites for Australian small businesses, with 7-day delivery for sites up to five pages.' },
  { href: '/au/local-seo', t: 'Local SEO', d: 'Google Business Profile, service area pages and reviews, so people nearby find you.' },
  { href: '/au/website-maintenance', t: 'Website maintenance', d: 'Updates, security, backups and accessibility re-testing for the site you already have.' },
  { href: '/au/dental-website-design', t: 'Dental website design', d: 'Another health sector we build for, with Ahpra-aware copy and online booking.' },
  { href: '/au/ai-receptionist', t: 'AI receptionist', d: 'Answers calls and takes messages when your team is out with participants, and hands urgent calls to a person.' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we build for Australian organisations: websites, ecommerce, AI agents and AI search.' },
];

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'ndis-website-design';

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export default function NdisWebsiteDesignAUPage() {
  return (
    <>
      <script id="ld-au-ndis-website-design" type="application/ld+json"
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
              <div className="eyebrow">NDIS Website Design Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                Websites for Australian NDIS providers that participants, families and support coordinators can
                actually use: accessible to WCAG 2.2 AA, with Easy Read pages, short referral forms and copy checked
                against the NDIA logo rules and the NDIS Code of Conduct. Then NDIS SEO, so people can find you.
              </p>
              <HeroInlineForm region="au" source="au_ndis_website_design_hero" submitLabel="Plan my NDIS website" />
            </div>

            <form
              className="specpanel"
              aria-label="What every NDIS provider website we build gets right"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="The three things every NDIS provider site we build gets right: clear supports and areas, accessible to WCAG 2.2 AA, honest claims about registration and funding"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT EVERY PROVIDER SITE GETS RIGHT</span>
                <span className="sys"><span>WCAG 2.2 AA</span><span>EASY READ</span><span>SEO</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what every site includes">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="ndis-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={BUILD_ICONS[0]} /></svg></span>
                  <span className="idx">for participants, families, coordinators</span>
                  <span className="title">Clear supports and service areas</span>
                  <span className="tag">Plain language</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="ndis-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={BUILD_ICONS[1]} /></svg></span>
                  <span className="idx">keyboard, screen reader, zoom</span>
                  <span className="title">Accessible to WCAG 2.2 AA</span>
                  <span className="tag">Tested</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="ndis-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={BUILD_ICONS[5]} /></svg></span>
                  <span className="idx">logo, registration, funding, pricing</span>
                  <span className="title">Honest claims, checked</span>
                  <span className="tag">NDIA rules</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · ‘Registered’ appears on your site only if the NDIS Provider Register says so.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
              { v: 'Consent', t: 'in writing from the NDIA is needed before anyone uses the NDIS logo', s: 'NDIA, NDIS logo guidelines', u: SRC_NDIA_LOGO },
              { v: 'AA', t: 'the minimum WCAG 2.2 level organisations should meet', s: 'Australian Human Rights Commission', u: SRC_AHRC },
              { v: '3 years', t: 'how long NDIS provider registration generally lasts', s: 'NDIS Commission, registration', u: SRC_REG_ABOUT },
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
              <h2 data-speakable="true">What is NDIS website design, and what makes it different?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">NDIS website design is building a website for a disability support provider that
                    participants, families and support coordinators can use, understand and trust.</span> That means
                    accessible to WCAG 2.2 AA, written in plain language with Easy Read where it helps, honest about
                    registration and funding under the NDIA’s logo rules and the NDIS Code of Conduct, and private by design.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms we use a lot</div>
                    <p>
                      A <b>registered NDIS provider</b> has passed an audit and a suitability check by the NDIS Quality and
                      Safeguards Commission (the NDIS Commission) and is listed on the NDIS Provider Register. <b>WCAG</b> is
                      the Web Content Accessibility Guidelines, the international standard for accessible websites; Level AA
                      is the usual target. <b>Easy Read</b> is a format that pairs short, simple sentences with pictures.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    The people reading an NDIS provider’s website are choosing supports for their own life, or for someone
                    they care about. Many use a screen reader, magnification or a keyboard. A site that works for them and
                    tells the truth is the whole job. This page covers the rules too, with links to the source.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A support coordinator and a participant in a wheelchair at a kitchen table in a Brisbane home, both looking at a provider website on a tablet that faces them, natural light, no text or logos visible" />
            </div>
          </div>
        </section>

        {/* ═══ WHAT WE BUILD → capgrid ═══ */}
        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What we build</div>
              <h2>Six parts of an NDIS provider website that works</h2>
              <p className="lead">
                A good NDIS website is not a template with a disability photo on it. It is a set of plain answers to the
                questions people ask before they choose a provider, built so everyone can read them.
              </p>
            </div>
            <div className="capgrid">
              {BUILDS.map((j, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={j.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={BUILD_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={BUILD_SUBJECTS[i]} />
                    <h3>{j.t}</h3>
                    <p>{j.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ FIT CHECK (<details>) → vlog ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which site do you need?</div>
              <h2>A 30-second check for NDIS providers</h2>
              <p>Tap the line that sounds most like your organisation. The answer is honest, even when it is a smaller job.</p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="An allied health practice owner in a bright Adelaide clinic reception reviewing her website on a laptop that faces her, a client chatting with the receptionist in the background, no text or logos visible" />
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

        {/* ═══ THE RULES → facts + checklist panel ═══ */}
        <section className="section facts" id="rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The rules, in plain English</div>
              <h2>NDIS logo rules, ‘registered provider’ claims and advertising to participants</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>The NDIS logo.</b> The NDIA says the NDIS logo and the NDIS acronym are registered trade marks in its
                  name, and no provider, person or business may use the NDIS logo without its written consent. That covers
                  websites, ads, vehicles, emails and business cards. Only registered providers may use the ‘I/we heart NDIS’
                  and ‘I/we support NDIS’ logos with the ‘Registered Provider’ tagline.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>The word ‘registered’.</b> You may only advertise as a ‘registered provider’ if you are registered with
                  the NDIS Commission. The NDIA says unregistered providers must not use other wording, such as ‘official NDIS
                  provider’, that suggests they are. It also names ‘NDIS’ in a business, trading or domain name, and product
                  names such as ‘NDIS packages’, as examples of misleading affiliation, and reports suspected breaches to the ACCC.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Who must register.</b> The NDIS Commission says registration is required to provide specialist
                  disability accommodation, specialist behaviour support, plan management, supported independent living,
                  NDIS digital platform services, and supports for participants with NDIA-managed funding. Unregistered
                  providers can support participants who self-manage or plan-manage. The supported independent living and
                  digital platform requirements started on 1 July 2026, so check them before building a site that matches
                  participants with workers and takes payment from plans.
                </p></div>
                <div className="fact"><div className="sec">§04</div><p>
                  <b>How you advertise.</b> The NDIS Code of Conduct applies to registered and unregistered providers alike.
                  The Commission’s guidance asks providers to give truthful information about their workers’ qualifications,
                  make no claims about the effect of supports that cannot be independently substantiated, give clear advice
                  about full costs, and avoid sharp practices: inducements, high-pressure sales, and promoting, advertising or
                  publishing higher prices for participants without reasonable justification.
                </p></div>
                <div className="fact"><div className="sec">§05</div><div>
                  <p>
                    <b>Privacy.</b> The Code of Conduct requires providers to respect the privacy of people with disability.
                    The OAIC also says a disability service provider that handles health information is a health service
                    provider under the Privacy Act 1988, covered even if it is a small business. Your website’s forms,
                    analytics and hosting all sit inside that.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_NDIA_LOGO} {...extLink}>NDIA, NDIS logo guidelines</a>;{' '}
                    <a href={SRC_REG_ABOUT} {...extLink}>NDIS Commission, about registration</a>;{' '}
                    <a href={SRC_REGISTER} {...extLink}>NDIS Provider Register</a>;{' '}
                    <a href={SRC_MANDATORY} {...extLink}>NDIS Commission, mandatory registration</a>;{' '}
                    <a href={SRC_COC} {...extLink}>NDIS Commission, NDIS Code of Conduct</a>;{' '}
                    <a href={SRC_COC_GUIDE} {...extLink}>The NDIS Code of Conduct guidance for NDIS providers (April 2024)</a>;{' '}
                    <a href={SRC_OAIC_SMALL} {...extLink}>OAIC, small business</a>;{' '}
                    <a href={SRC_OAIC_HSP} {...extLink}>OAIC, what is a health service provider</a>.
                    All checked 26 September 2026. This is general information, not legal advice.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">8 checks before an NDIS website goes live</div>
                <ol className="au-numlist">
                  {LAUNCH_CHECKS.map((s) => (
                    <li key={s.t}><span><b>{s.t}</b> {s.d}</span></li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ACCESSIBILITY TABLE ═══ */}
        <section className="section integrations" id="accessibility">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Accessibility, done properly</div>
              <h2>WCAG 2.2 AA and Easy Read on an NDIS provider website: what it means in practice</h2>
              <p className="lead">
                The Australian Human Rights Commission says organisations should conform with WCAG 2.2 at a minimum of
                Level AA. On a provider site, this is what that looks like, and how we check it.
              </p>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>Who it helps</th>
                    <th>What it means on your site</th>
                    <th className="fj">How we check it</th>
                  </tr>
                </thead>
                <tbody>
                  {ACCESS_ROWS.map((r) => (
                    <tr key={r.need}>
                      <th scope="row">{r.need}</th>
                      <td>{r.site}</td>
                      <td className="fj">{r.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Easy Read follows the <a href={SRC_EASY_READ} {...extLink}>Australian Government Style Manual</a>: a year 4
              to year 6 reading level, tested with the people who use it, published as a web page and an accessible PDF.
              The standard itself is at <a href={SRC_WCAG} {...extLink}>W3C, WCAG overview</a>; the Commission’s view is in
              its <a href={SRC_AHRC} {...extLink}>standards and guidelines for digital accessibility</a>, which also notes
              WCAG was upheld under the Disability Discrimination Act in Maguire v SOCOG (2000).
            </p>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (placeholder for the visual pass) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a row of white web page cards, one with an oversized orange focus ring and an Easy Read pictogram, on a plain white surface" />

        {/* ═══ HOW WE BUILD IT → process timeline ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How we build it</div>
                <h2>How we build an NDIS provider website, in eight steps</h2>
                <p className="lead">
                  Steps one and six are what separate an NDIS website from any other small business site: every claim is
                  checked at the start and again before launch. Open any step to see what happens in it.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A FactoryJet designer on a video call with the owner of a Melbourne NDIS provider, the owner at her desk looking at a laptop that faces her, printed page plans on the desk, no text or logos readable" />
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
            headline={'Want a website participants can use and you can stand behind?'}
            sub={'Tell us the supports you offer, where, and whether you are registered. On a short call with the founder, we will tell you what your site needs, what to leave off it, and whether a starter site is enough.'}
            label={'Plan my NDIS website'}
          />
        </div>

        {/* ═══ NDIS MARKETING → definition module (image left, copy right) ═══ */}
        <section className="definition" id="ndis-marketing">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="A support coordinator in a Perth office comparing two provider websites on her monitor, which faces her, with a notepad beside the keyboard, no text or logos readable" />
          </div>
          <div className="definition-copy">
            <div className="eyebrow">NDIS marketing and SEO</div>
            <h2>NDIS marketing that treats participants as people choosing supports</h2>
            <p>
              Participants have choice and control over their supports. Good NDIS marketing respects that: it makes you
              easy to find, gives people what they need to decide, and gets out of the way. Families, carers and support
              coordinators search too, so write for them as well.
            </p>
            <p>
              What works: a page for each support and area answering real questions in plain words, a complete{' '}
              <b>Google Business Profile</b>, reviews never paid for with gifts, and a one-page summary for support
              coordinators. That is what <b>NDIS SEO</b> means to us; our <a href="/au/local-seo">local SEO</a> page covers
              the method. What does not work, and can breach the rules: the NDIS logo on ads, ‘NDIS approved’ offers,
              sign-up gifts and fake urgency. AI Overviews and AI assistants cite pages that are specific and accurate, so
              honest marketing and good SEO turn out to be the same thing.
            </p>
          </div>
        </section>

        {/* ═══ ENGAGEMENT SHAPES + DEMAND → ruled rows + split ═══ */}
        <section className="section platforms" id="engagement">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Scope, not a rate card</div>
                <h2>Three ways to work with us on your NDIS website</h2>
              </div>
              <p>
                Every project is quoted for your scope, with a fixed price for the build and any ongoing support shown
                separately. These are the shapes it usually takes.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Focused starter site.</h3></div><p className="plat-build">Up to five pages, with 7-day delivery once your content is in: home, supports, areas, about your team, and contact with a simple enquiry form. Accessible and claims-checked from day one.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Full provider website.</h3></div><p className="plat-build">A page for each support and main service area, Easy Read versions of key pages, a referral form for support coordinators connected to your systems, feedback and complaints page, and a full accessibility test.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Website plus marketing.</h3></div><p className="plat-build">Either of the above with ongoing NDIS SEO, Google Business Profile care, content for support coordinators and families, accessibility re-tests and a short monthly report on searches and enquiries.</p></div>
            </div>
            <div className="au-split">
              <div>
                <p>
                  What moves the scope: how many supports and service areas you cover, how much content we write, Easy
                  Read pages, integrations with your client management software, and the marketing support you want. For
                  typical Australian market ranges, see our{' '}
                  <a href="/blog/website-cost-australia-2026">website cost guide</a> and{' '}
                  <a href="/blog/seo-cost-australia-2026">SEO cost guide</a>.
                </p>
                <ModalCTAButton label="Plan my NDIS website" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="demand">
                <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                <ul>
                  {[
                    { kw: 'ndis website design', v: '480', w: '100%', kd: 'Same searches as ‘ndis web design’' },
                    { kw: 'wcag compliance', v: '320', w: '67%', kd: 'Accessibility, all sectors' },
                    { kw: 'website accessibility', v: '260', w: '54%', kd: 'Accessibility, all sectors' },
                    { kw: 'ndis marketing agency', v: '210', w: '44%', kd: 'Getting found by participants' },
                    { kw: 'ndis seo', v: '110', w: '23%', kd: 'Search for providers' },
                    { kw: 'accessibility audit', v: '70', w: '15%', kd: 'Checking an existing site' },
                    { kw: 'ndis provider website', v: '30', w: '6%', kd: 'New providers' },
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

        {/* ═══ PROVIDER LIST (self-disclosure, ItemList from PROVIDERS) → ruled rows ═══ */}
        <section className="section platforms" id="providers">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>NDIS website design and marketing options in Australia</h2>
              </div>
              <p>
                We are one option, not the only one. These Australian studios build websites for NDIS providers and show
                up when people search for NDIS website design. Each note is based on what the company says on its own
                website.
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
              Options named from live Australian search results and Google AI Overview sources for NDIS website design, September 2026. Notes reflect each company’s own website on 26 September 2026. Listing is not endorsement.
            </p>
            <div className="au-panel au-panel-wide">
              <div className="eyebrow">Questions to ask any web designer, including us</div>
              <ol className="au-numlist">
                <li><span><b>How do you test accessibility?</b> ‘We use an accessible theme’ is not an answer. Ask who tests, with what.</span></li>
                <li><span><b>What will you write about our registration?</b> Their answer should mention the Provider Register and the NDIA logo rules.</span></li>
                <li><span><b>Where does our referral form data go?</b> Get it in writing, including any third-party form tools.</span></li>
                <li><span><b>Who owns the domain, hosting and site?</b> It should be you, with your own logins.</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Beyond the website</div>
              <h2>The rest of what we build for Australian providers</h2>
              <p>
                A website is usually the first step. These are the natural next ones, built by the same team.
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
          heading="NDIS website design questions providers actually ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>A website participants can use, with claims you can stand behind</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                supports, your service areas, your registration status and what your website needs. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Plan my NDIS website" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/blog/website-cost-australia-2026">See the website cost guide</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
