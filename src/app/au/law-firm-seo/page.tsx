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

const CANONICAL = 'https://factoryjet.com/au/law-firm-seo';
const UPDATED = '2026-09-26';
const TITLE = 'Law Firm SEO Australia | Lawyer SEO & Websites | FactoryJet';
const H1 = 'Law Firm SEO and Lawyer Websites for Australian Legal Practices';
const DESCRIPTION =
  'Law firm SEO and lawyer websites for Australian practices: practice-area pages, local search, confidential intake, and copy checked against ASCR rule 36.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Law Firm SEO', url: CANONICAL },
];

/* ─── External sources, all fetch-verified 2026-09-26 ───────────────── */
// Queensland Law Society, "What are the rules about solicitors' advertising generally?":
// rule 36.1 of the Australian Solicitors Conduct Rules 2023 (Qld): advertising must not be
// "false", "misleading or deceptive or likely to mislead or deceive", "offensive" or
// "prohibited by law"; rule 36.2: no "false, misleading or deceptive impression of specialist
// expertise" and no "accredited specialist" wording unless accredited. Also cites the ACL
// (Competition and Consumer Act 2010 (Cth) sch 2) ss 18, 29, 34.
const SRC_QLS_ADV =
  'https://www.qls.com.au/practising-law-in-qld/ethics/australian-solicitors-conduct-rules/rules-resources/what-are-the-rules-about-solicitors-advertising-generally';
// Law Society of NSW, "Advertising legal services": rule 36 summary; the Legal Profession
// Uniform Law 2014 does not include the personal injury advertising prohibition in the repealed
// Legal Profession Regulation 2005; the Workers Compensation Regulation 2016 removed the work
// injury advertising restrictions of the repealed 2010 Regulation.
const SRC_LSNSW_ADV =
  'https://www.lawsociety.com.au/practising-law-in-NSW/ethics-and-compliance/regulatory-compliance/advertising-legal-services';
// Law Society Journal (NSW), 23 Sep 2023: "A breach of ASCR 36 is capable of constituting
// unsatisfactory professional conduct or professional misconduct, and may give rise to a
// complaint being made to the Office of the NSW Legal Services Commissioner."
const SRC_LSJ_36 =
  'https://lsj.com.au/articles/solicitor-and-law-practice-marketing-how-do-i-meet-my-regulatory-obligations/';
// Personal Injuries Proceedings Act 2002 (Qld), current as at 1 July 2024, ss 65 and 66
// (PDF fetched and read): s 66(1) advertising personal injury services only by a statement
// of name, contact details and area of practice or speciality, by an allowable publication
// method; example of a contravention: advertising "on a 'no win, no fee' or other speculative
// basis"; maximum penalty 300 penalty units; s 66(2)(b) own-website exception limited to
// statements about the operation of the law of negligence and a person's legal rights, and
// the conditions under which the practice will act; s 66(3) may also be charged with
// misconduct. s 65: broadcast by radio or television is not an allowable method; internet
// publication is allowable only as an independent e-version of a print publication or an
// independent directory or database.
const SRC_PIPA = 'https://www.legislation.qld.gov.au/view/html/inforce/current/act-2002-024';
// QLS, personal injury advertising: not allowed on "radio, television, cinema, or recorded
// telephone messages"; own website may state "the operation of personal injury law and a
// person's legal rights under that law" and "the conditions under which you are prepared to
// act - this can include details of no win no fee arrangements".
const SRC_QLS_PI =
  'https://www.qls.com.au/practising-law-in-qld/ethics/australian-solicitors-conduct-rules/rules-resources/what-are-the-rules-about-advertising-for-personal-injury-work';
// Proctor (QLS), February 2026: QCAT ([2025] QCAT 525) found a principal's "No Win, No Fee"
// injury advertising on a hospital billboard, the firm website and social media over five
// years was professional misconduct; $30,000 fine and public reprimand.
const SRC_QCAT =
  'https://www.qlsproctor.com.au/2026/02/prevalent-advertising-practice-deemed-professional-misconduct-by-qcat/';
// Law Society of NSW, Legal Practice Board of WA and Victorian Legal Services Board and
// Commissioner, "Statement on the use of artificial intelligence in Australian legal practice",
// 6 Dec 2024: "Lawyers cannot safely enter confidential, sensitive or privileged client
// information into public AI chatbots/copilots (like ChatGPT)"; review commercial AI tool
// terms "to ensure the information will be kept secure".
const SRC_AI_STATEMENT =
  'https://lsbc.vic.gov.au/news-updates/news/statement-use-artificial-intelligence-australian-legal-practice';
// VLSB+C, confidentiality and its exceptions: rule 9.1 of the Legal Profession Uniform Law
// Australian Solicitors' Conduct Rules 2015.
const SRC_CONF =
  'https://lsbc.vic.gov.au/lawyers/practising-law/professional-obligations/confidentiality-and-its-exceptions';
// OAIC small business: exemption for annual turnover of $3 million or less, with listed
// categories covered regardless of turnover.
const SRC_OAIC_SMALL = 'https://www.oaic.gov.au/privacy/privacy-for-organisations/small-business';
// OAIC APP quick reference, APP 1: "having a clearly expressed and up to date APP privacy policy".
const SRC_APP_QR =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-quick-reference';

/* ─── FAQ source of truth (drives UI + FAQPage schema). Questions in quotes are the
       exact People Also Ask wording from Australian Google results, September 2026
       (pipeline/research/data/au-competitors-2026-09-26/paa_law_extra_2026-09-26.json). ── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Law firm SEO basics' },
  { key: 'cost',   label: 'Cost, time & results' },
  { key: 'rules',  label: 'Advertising rules' },
  { key: 'web',    label: 'Law firm websites' },
  { key: 'ai',     label: 'AI, intake & confidentiality' },
  { key: 'choose', label: 'Choosing an agency' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What does SEO stand for in law?',
    answer: 'SEO stands for search engine optimisation. It is not a legal term. It means the work that helps a law firm’s website show up when people search Google, Bing or AI assistants for a lawyer, such as “family lawyer Parramatta” or “how do I contest a will in Victoria”. For a law firm it covers practice-area pages, local search, the technical health of the site and the reputation signals Google looks for.' },
  { category: 'basics', question: 'What is law firm SEO?',
    answer: 'Law firm SEO is search engine optimisation built around how people look for legal help. It means one clear page for each practice area and location you serve, answers to the questions clients ask before they call, a fast and accessible website, an accurate Google Business Profile for each office, and reviews and links that show you are a real, trusted practice. In Australia it also means every word must fit the solicitors’ advertising rules.' },
  { category: 'basics', question: 'Is SEO still worth it in 2026?',
    answer: 'For law firms, yes. People still search before they call a lawyer, and most legal problems start with a question typed into Google or an AI assistant. What changed is where the answer shows up. Google now shows AI Overviews on many legal searches, and those summaries cite websites. Firms with clear, specific practice-area pages get cited and clicked. Thin pages that repeat “we are experienced and affordable” get skipped.' },
  { category: 'basics', question: 'Is doing local SEO worth it?',
    answer: 'For most Australian law firms it is the highest-return part of SEO. Clients usually want a lawyer near them, especially for family law, conveyancing, wills and criminal matters. Local SEO means an accurate Google Business Profile for each real office, consistent firm details across directories, reviews, and a page for each suburb or region you genuinely serve. It needs a real office address. A firm is unlikely to appear in the map results for a town where it has no office.',
    links: [{ href: '/au/local-seo', label: 'Local SEO in Australia' }] },
  { category: 'basics', question: 'What is the 80/20 rule for SEO?',
    answer: 'It is a rule of thumb, not a rule from Google: about 20 per cent of your pages and effort usually bring about 80 per cent of the results. For a law firm, that 20 per cent is almost always the handful of practice-area pages that match what paying clients search for, plus the Google Business Profile. Fix and deepen those first, before writing blog posts about general legal news.' },

  // ── Cost & time ──
  { category: 'cost', question: 'What is the typical cost of SEO for a law firm?',
    answer: 'It depends on how competitive your practice areas and locations are, how many offices and practice areas you need to rank for, the state of your current website, and how much new content is needed. A sole practitioner in a regional town needs far less than a personal injury firm competing in Sydney. We do not publish a rate card. Our SEO cost guide for Australia lists sourced market ranges, and we quote a fixed scope after one call.',
    links: [{ href: '/blog/seo-cost-australia-2026', label: 'SEO cost guide for Australia' }] },
  { category: 'cost', question: 'How long does SEO usually take?',
    answer: 'Expect early movement in two to three months and meaningful enquiry growth in six to twelve months for most law firms. Local results for one office and one practice area can move faster. Competitive city searches such as personal injury or family law in Sydney or Melbourne take longer, because established firms have years of content and links. Anyone who promises page one in weeks is guessing.' },
  { category: 'cost', question: 'How much does it cost to have a website in Australia?',
    answer: 'A law firm website costs more than a basic small business site because it needs more pages (one per practice area and location), careful copy, secure enquiry forms and often a connection to practice management software. The price is set by the number of page designs, the writing, the integrations and any content you are moving from an old site. Our website cost guide lists sourced Australian ranges and how GST applies.',
    links: [{ href: '/blog/website-cost-australia-2026', label: 'Website cost guide for Australia' }] },
  { category: 'cost', question: 'Do Google Ads work for lawyers?',
    answer: 'They can bring enquiries the same week, which SEO cannot, but clicks for many legal searches are expensive and the enquiries stop the day you stop paying. Many firms run ads on their most valuable practice area while SEO builds. Ads are advertising, so rule 36 applies to them. In Queensland, paid ads for personal injury work are not one of the publication methods the Personal Injuries Proceedings Act allows.' },

  // ── Rules ──
  { category: 'rules', question: 'Are lawyers allowed to advertise in Australia?',
    answer: 'Yes. Solicitors may advertise, market and promote their practice, including through their website and SEO, as long as it is not false, misleading or deceptive, offensive, or prohibited by law. That is rule 36.1 of the Australian Solicitors’ Conduct Rules, which applies under the Uniform Law in NSW, Victoria and WA, and in Queensland’s own version of the rules. Check your own state’s rules if you practise elsewhere. The Australian Consumer Law applies on top. Personal injury advertising in Queensland has extra limits under its own Act.' },
  { category: 'rules', question: 'What are the legal requirements for advertising in Australia?',
    answer: 'For every business, the Australian Consumer Law bans misleading or deceptive conduct and false or misleading representations about services. The Queensland Law Society points solicitors to sections 18, 29 and 34 of the ACL. Solicitors also have rule 36 of their conduct rules, and a breach can lead to a disciplinary complaint. Specific industries add their own rules on top, such as personal injury advertising in Queensland.' },
  { category: 'rules', question: 'Can I call myself a specialist on my law firm website?',
    answer: 'Only with care. Rule 36.2 says a solicitor must not give a false, misleading or deceptive impression of specialist expertise, and must not use the words “accredited specialist” or a derivative, including post-nominals, unless accredited by the relevant professional association. We write practice-area pages that describe what the firm does and who it acts for, and only use accredited specialist wording for solicitors who hold that accreditation.' },
  { category: 'rules', question: 'Can personal injury lawyers advertise “no win, no fee” in Queensland?',
    answer: 'Not in general advertising. Section 66 of the Personal Injuries Proceedings Act 2002 (Qld) limits personal injury advertising to name, contact details and area of practice, published by allowed methods, and gives “no win, no fee” advertising as an example of a breach. On the firm’s own website, the Act allows statements about the law and your legal rights, and the conditions under which the firm acts, which QLS says can include no win no fee arrangements.' },
  { category: 'rules', question: 'Can a law firm website show client reviews and testimonials?',
    answer: 'Reviews shown on your website are advertising, so rule 36 and the Australian Consumer Law apply: they must be genuine, and a selection must not give a misleading picture of outcomes. For personal injury work in Queensland, the Act limits what your own website may say to statements about the law and your conditions of acting, which leaves little room for testimonials. Check with your law society’s ethics team for your practice area and state.' },

  // ── Websites ──
  { category: 'web', question: 'How to build a website for a law firm?',
    answer: 'Start with your practice areas and the clients you want, not the design. Plan one page per practice area and per office, write plain-English answers to the questions those clients ask, add real solicitor profiles, and make contacting you easy on a phone. Then build it fast and accessible, with a secure enquiry form that asks only what you need for a conflict check, and connect it to your practice management software.' },
  { category: 'web', question: 'What is the best website builder for law firms?',
    answer: 'For a sole practitioner who wants a simple site, Squarespace or Wix can work. Most growing firms are better on WordPress or a custom-built site, because they need many practice-area and location pages, fast load times, detailed schema markup, secure forms and integrations with practice management software. Whatever you choose, make sure you own the domain and the content, and can move them later.' },
  { category: 'web', question: 'Which law firm has the best website?',
    answer: 'There is no single winner, but the best law firm websites share the same traits. Visitors can tell in seconds what the firm does, for whom and where. Each practice area has its own page that answers real questions. Solicitor profiles are specific. The site loads fast on a phone, the enquiry form is short, and nothing on it overstates results. Large firms have bigger budgets, but a small firm can match every one of those traits.' },
  { category: 'web', question: 'What is legally required on a website?',
    answer: 'It depends on the business. If your firm is covered by the Privacy Act 1988, APP 1 requires a clearly expressed and up-to-date privacy policy. The OAIC says businesses with annual turnover of $3 million or less are generally exempt, with listed exceptions. Everything on the site must also comply with the Australian Consumer Law and, for a law practice, rule 36. We add a privacy policy page to every law firm site and suggest firms treat it as standard.' },
  { category: 'web', question: 'Should a law firm website be accessible?',
    answer: 'Yes. People looking for legal help include people with disability, older clients and people reading on a phone in a stressful moment. We build to WCAG 2.2 level AA: readable text and contrast, forms that work with a keyboard and screen reader, clear headings and captions. It is also good for search, because the same structure helps Google and AI assistants understand each page.' },

  // ── AI & intake ──
  { category: 'ai', question: 'What is an intake in a law firm?',
    answer: 'Intake is how a new enquiry becomes a client: the first contact, the questions you ask, the conflict check, the decision to act, and the costs disclosure and engagement. On a website, intake starts with the enquiry form or chat. A good one asks just enough to route the enquiry and run a conflict check, avoids collecting detailed confidential facts through an open form, and lands the enquiry straight in your practice management system.' },
  { category: 'ai', question: 'What can AI do for law firms?',
    answer: 'On the business side, AI can answer common questions about how the firm works, sort new enquiries by practice area and urgency, draft follow-up emails for staff to approve, and summarise long enquiries. It should not give legal advice to the public, and client information must stay out of public AI tools. Lawyers remain responsible for any AI-assisted legal work, and Australian regulators expect them to check it.' },
  { category: 'ai', question: 'Is there a ChatGPT for lawyers?',
    answer: 'Several legal AI products are built on the same kind of language model as ChatGPT, and practice management vendors are adding AI features too. The key difference from the public ChatGPT app is the data terms. The joint statement from the NSW, Victorian and WA regulators says lawyers cannot safely enter confidential, sensitive or privileged client information into public AI chatbots, and should review commercial AI tools’ terms to ensure information is kept secure.' },
  { category: 'ai', question: 'Can an AI chatbot take enquiries on a law firm website?',
    answer: 'Yes, if it is built for intake and not advice. We set it to say clearly that it is an AI assistant, to explain how the firm works, to collect only the details needed to route the enquiry and run a conflict check, and to tell people not to share confidential facts until a solicitor contacts them. It never says whether someone has a case. Enquiries go to your team with a short summary.',
    links: [{ href: '/au/ai-receptionist', label: 'AI receptionist for phone enquiries' }] },
  { category: 'ai', question: 'Can ChatGPT do SEO?',
    answer: 'It can help with parts of it, such as outlining a page or suggesting questions to answer. It cannot check what your firm actually does, know the rules for your practice area and state, see your Search Console data, fix a slow site or earn reviews and links. AI-written legal pages that are generic or inaccurate also carry risk under rule 36. Use it for drafts, and keep a solicitor responsible for the final words.' },

  // ── Choosing ──
  { category: 'choose', question: 'Which SEO agency is best for law firms?',
    answer: 'The best one for you knows your practice areas, shows you real work, explains the advertising rules without being asked, and reports on enquiries rather than just rankings. Several Australian agencies focus on law firms and are named on this page. Ask any agency, including us, to show live pages they wrote for a firm like yours, and how they check copy against rule 36 before it goes live.' },
  { category: 'choose', question: 'Is it worth having a Google Business Profile?',
    answer: 'For a law firm with a real office that clients can visit, yes. It is free, it is what appears in the map results for searches like “conveyancer near me”, and it collects reviews. Each office gets its own profile with the exact address, hours and practice areas. Using a virtual office or a mail address risks the profile being suspended, so we only set up profiles for real locations.' },
  { category: 'choose', question: 'Do you work with law firms outside Sydney and Melbourne?',
    answer: 'Yes. We work with Australian firms remotely, by video call and email, on Australian business hours. FactoryJet does not have an office in Australia, and we say so up front. That makes no difference to the SEO or the website, which are built around your offices, your practice areas and the courts and communities you serve, whether that is the Sydney CBD, Toowoomba or Bunbury.' },
  { category: 'choose', question: 'Who writes and approves the legal content?',
    answer: 'We write practice-area pages and answers from interviews with your solicitors, in plain English at a reading level most clients can follow. A solicitor at your firm reviews and signs off every page before it goes live, because you are responsible for your advertising and for the accuracy of anything that reads like legal information. We keep a record of who approved what and when.' },
];

/* ─── Named options in the Australian market (open self-disclosure, ItemList).
       Each note is based on the company’s own website, fetched 2026-09-26. ── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. Law firm SEO and lawyer websites built together: practice-area pages, local search, secure intake connected to practice management software, and copy written for your solicitors to approve against rule 36. We work remotely and have no Australian office.' },
  { name: 'StudioHawk', note: 'An SEO agency with offices in Prahran, Melbourne and South Eveleigh, Sydney. Its SEO for lawyers page covers technical SEO, local SEO, content, AI search and link building for law firms.' },
  { name: 'Paperstack', note: 'An Australian search agency headquartered in Surfers Paradise, with a Melbourne studio. Its law firm SEO page covers practice-area pages, credentialed author markup, local SEO and state advertising compliance review.' },
  { name: 'Lift Legal', note: 'A marketing agency for law firms with a Mosman, NSW contact address. It lists website design and development, SEO, Google Ads, content, email newsletters and social media for law firms.' },
  { name: 'Intesols', note: 'A digital agency in Moorabbin, Victoria, with a legal business websites service covering website design and development, SEO and digital marketing for law firms.' },
  { name: 'Studio Slate', note: 'A Sydney web design and digital marketing studio in Homebush West that lists law firm websites among the industries it builds for, alongside SEO and advertising.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only. ───────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Law Firm SEO and Lawyer Websites Australia',
      serviceType: 'Law firm SEO, lawyer website design, local search and legal intake integration',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      audience: { '@type': 'BusinessAudience', audienceType: 'Australian law firms and legal practices' },
      url: CANONICAL,
      description:
        'SEO and website design for Australian law firms: practice-area and location pages, Google Business Profile and local search, AI search visibility, fast accessible websites, secure enquiry forms connected to practice management software, and copy written for solicitor sign-off against rule 36 of the Australian Solicitors’ Conduct Rules.',
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
      name: 'Law firm SEO and website providers in Australia',
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
      'SEO and websites for Australian law firms: practice-area pages that rank, local search for each office, confidential intake, and copy written for solicitor sign-off against the advertising rules.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'FactoryJet: law firm SEO and lawyer websites for Australian legal practices' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* What we do for a law firm (capability grid). */
const JOBS: { t: string; d: string }[] = [
  { t: 'Practice-area pages', d: 'One page for each practice area you want clients for, such as family law, wills and estates, conveyancing or employment. Each answers the questions clients ask before they call, in plain English, reviewed by your solicitors.' },
  { t: 'Local search for each office', d: 'A Google Business Profile for every real office, consistent firm details across legal directories, location pages for the suburbs and regions you serve, and a steady flow of genuine reviews.' },
  { t: 'Law firm website design', d: 'A fast, accessible site that says what you do, for whom and where within seconds. Solicitor profiles, clear contact paths on a phone, and a structure Google and AI assistants can read.' },
  { t: 'Secure intake', d: 'Short enquiry forms and optional AI chat that collect only what you need for a conflict check, warn people not to share confidential facts, and send the enquiry into your practice management software.' },
  { t: 'AI search visibility', d: 'Pages written so Google AI Overviews, ChatGPT and Perplexity can quote them: direct answers, named practice areas, real solicitor credentials and accurate structured data.' },
  { t: 'Reporting on enquiries', d: 'Monthly reports on calls, forms and chats by practice area and office, not just rankings. You see which pages bring clients and where the next piece of work should go.' },
];
const JOB_ICONS = [
  'M6 3h9l3 3v15H6V3Zm3 7h6m-6 4h6m-6 4h4',
  'M12 21s-6-5.5-6-11a6 6 0 1 1 12 0c0 5.5-6 11-6 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  'M3 5h18v12H3V5Zm0 4h18M8 21h8m-4-4v4',
  'M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4',
  'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4M8 11h6M11 8v6',
  'M4 20V10m6 10V4m6 16v-8m4 8H2',
] as const;
const JOB_SUBJECTS = [
  'AI-generated model: a row of white page cards, each labelled with a simple legal icon (family, house, will scroll), one lifted in orange',
  'AI-generated model: a white map of an Australian town with three orange office pins and small review stars beside them',
  'AI-generated model: a white laptop showing a clean law firm homepage layout with an orange contact button, no readable text',
  'AI-generated model: a short white enquiry form with a small padlock, feeding a line into a closed white filing cabinet',
  'AI-generated model: an orange answer card being lifted out of a white page and placed into a speech bubble',
  'AI-generated model: a white bar chart with three bars split by practice area, the tallest in orange',
] as const;

/* Fit check. Rendered as <details>, no client component. */
const FIT_CHECK: { q: string; a: string; verdict: string }[] = [
  { q: 'We are a small family law or wills practice and most clients find us through word of mouth.', verdict: 'Local SEO first', a: 'Start with your Google Business Profile, reviews and one strong page for each practice area and the suburbs you serve. That is a modest, focused scope. You may not need a new website at all if the current one is fast and accurate.' },
  { q: 'We do personal injury work in Queensland.', verdict: 'SEO within PIPA limits', a: 'Your own website is one of the few places you can say more than your name, contact details and practice area, and even there the Act limits it to statements about the law, people’s rights and your conditions of acting. SEO on those pages matters more for you than for most firms, because many other channels are closed.' },
  { q: 'We have several offices and practice areas, and our site treats them as one page.', verdict: 'Rebuild the structure', a: 'This is the most common reason firms do not rank. Each office needs its own location page and Google Business Profile, and each practice area its own page, linked together sensibly. We usually restructure the site first, then add content.' },
  { q: 'Our website looks fine but brings in almost no enquiries.', verdict: 'Audit before you rebuild', a: 'Check whether people find it (Search Console), and whether they act when they do (form and call tracking). Often the fix is content and intake, not design. We will tell you if a rebuild is not needed.' },
  { q: 'We want AI to answer enquiries after hours.', verdict: 'Intake, not advice', a: 'An AI assistant can explain how the firm works, collect conflict-check details and book a call, labelled clearly as AI. It must never tell someone whether they have a case. For phone enquiries, an AI receptionist does the same job on calls.' },
];

/* How we work. */
const BUILD_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Map practice areas and offices', d: 'We list the matters you want more of, the offices and regions you serve, and the clients you do not want. This decides which pages exist and in what order we build them.' },
  { n: '02', t: 'Check the search demand', d: 'We look at what Australians actually search for each practice area and place, who ranks now, and which questions Google and AI assistants answer. Weak spots where a smaller firm can win come first.' },
  { n: '03', t: 'Audit the current site', d: 'Speed, mobile layout, accessibility, indexing, duplicate pages, broken links, structured data and the enquiry path. We also flag any copy that could raise a rule 36 question.' },
  { n: '04', t: 'Interview your solicitors', d: 'Short calls with the solicitor who runs each practice area. The best law firm pages come from real answers to real client questions, not generic text.' },
  { n: '05', t: 'Write, then solicitor sign-off', d: 'We write each page in plain English. A solicitor at your firm reviews and approves it before it goes live, and we keep a record of each approval.' },
  { n: '06', t: 'Build or fix the site', d: 'New site or repairs to the existing one: page structure, speed, accessibility, schema markup, secure forms and the connection to your practice management software.' },
  { n: '07', t: 'Local search and reputation', d: 'Google Business Profile for each real office, consistent firm details across directories, and a simple, compliant way to ask satisfied clients for a review.' },
  { n: '08', t: 'Report and improve', d: 'Monthly reporting on enquiries by practice area and office, then the next round of pages, answers and fixes based on what is working.' },
];

/* Practice-area table. */
const PRACTICE_AREAS: { area: string; search: string; page: string; care: string }[] = [
  { area: 'Family law', search: 'Divorce, parenting arrangements, property settlement, “family lawyer near me”', page: 'How the process works, what to bring to a first meeting, how costs are explained', care: 'Clients are often distressed; keep intake short and private' },
  { area: 'Personal injury', search: 'Car accident, workplace injury, public liability, time limits', page: 'How the law works and your conditions of acting', care: 'Queensland: PIPA s 66 limits what the website may say' },
  { area: 'Conveyancing and property', search: 'Conveyancer near me, buying or selling a home, off-the-plan', page: 'Steps and timing, what is included, state-specific process', care: 'Very local; Google Business Profile carries a lot of weight' },
  { area: 'Wills and estates', search: 'Make a will, power of attorney, contest a will, probate', page: 'Plain answers on each document and when to update it', care: 'Older clients; accessibility and readable text matter' },
  { area: 'Criminal defence', search: 'Drink driving, charged with assault, court date, bail', page: 'What happens next, urgent contact options, courts you appear in', care: 'Urgent enquiries; make contact possible in one tap' },
  { area: 'Employment law', search: 'Unfair dismissal, workplace investigation, employment contracts', page: 'Separate pages for employees and employers', care: 'Short time limits; state them accurately with a source' },
  { area: 'Commercial and business', search: 'Business lawyer, contracts, buying a business, disputes', page: 'Industries served and typical matters, solicitor profiles', care: 'B2B buyers compare firms on profiles and experience' },
  { area: 'Immigration', search: 'Partner visa, skilled visa, visa refusal', page: 'Visa-by-visa pages kept current as rules change', care: 'Content dates matter; review pages after each change' },
];

/* Practice management integrations (checked against each vendor’s own documentation, 2026-09-26). */
const INTEGRATIONS: { sys: string; route: string; does: string }[] = [
  { sys: 'Actionstep', route: 'Published REST API (access by application)', does: 'New enquiry creates a contact and a prospective matter, with source page and practice area' },
  { sys: 'Smokeball', route: 'Published API with a developer console', does: 'Web enquiries land as contacts and leads for your team to review and open matters' },
  { sys: 'Clio', route: 'Published APIs for Clio Manage and Clio Grow', does: 'Enquiries flow into Clio Grow intake, with the practice area and office tagged' },
  { sys: 'LEAP', route: 'LEAP’s listed integrations and partner apps', does: 'We connect through a supported integration where one fits, and tell you before the build if it does not' },
  { sys: 'Email and calendar', route: 'Microsoft 365 or Google Workspace', does: 'Routes enquiries to the right solicitor and offers booking for a first call' },
];

const CHECKLIST: { t: string; d: string }[] = [
  { t: 'Nothing false or misleading.', d: 'No “best lawyers in Sydney” or implied outcomes you cannot back up.' },
  { t: 'Specialist wording only if accredited.', d: 'Rule 36.2 covers “accredited specialist” and post-nominals.' },
  { t: 'Past results in context.', d: 'If you mention outcomes, say that every matter is different.' },
  { t: 'Reviews are genuine.', d: 'No paid, invented or cherry-picked reviews that mislead.' },
  { t: 'Personal injury in Queensland.', d: 'Check every page, ad and social post against PIPA s 66.' },
  { t: 'Confidential facts stay out of forms.', d: 'Ask for conflict-check details only until a solicitor calls.' },
  { t: 'A solicitor signs off.', d: 'Every page is approved by your firm before it goes live.' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/local-seo', t: 'Local SEO', d: 'Google Business Profile, reviews and location pages for any Australian business with real premises.' },
  { href: '/au/seo', t: 'SEO Australia', d: 'Our full SEO service for Australian businesses, from technical fixes to content.' },
  { href: '/au/ai-seo', t: 'AI SEO', d: 'Getting cited in Google AI Overviews, ChatGPT and Perplexity.' },
  { href: '/au/ai-receptionist', t: 'AI receptionist', d: 'Answers the firm’s phone after hours, takes intake details and books first calls.' },
  { href: '/au/accountant-website-design', t: 'Accountant website design', d: 'The same approach, website and search, for Australian accounting practices.' },
  { href: '/au/website-maintenance', t: 'Website maintenance', d: 'Updates, backups, security and small changes for a site you already have.' },
];

const PAGE_KEY = 'law-firm-seo';
const H1_SPLIT = H1.indexOf(' for ');
const H1_LEAD = H1.slice(0, H1_SPLIT);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 1);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export default function LawFirmSeoAUPage() {
  return (
    <>
      <script id="ld-au-law-firm-seo" type="application/ld+json"
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

        {/* ═══ HERO ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Law Firm SEO Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                FactoryJet helps Australian law firms get found by the clients they want. We build practice-area
                pages that rank, set up local search for each office, make your website fast and accessible, and
                connect a secure enquiry form to your practice management software. Every page is written in plain
                English for a solicitor at your firm to approve against the advertising rules.
              </p>
              <HeroInlineForm region="au" source="au_law_firm_seo_hero" submitLabel="Plan my law firm SEO" />
            </div>

            <form
              className="specpanel"
              aria-label="What law firm SEO covers"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="The three parts of law firm SEO: practice-area pages that rank, intake that keeps confidences, copy checked against rule 36"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT EVERY LAW FIRM ENGAGEMENT COVERS</span>
                <span className="sys"><span>SEO</span><span>WEBSITE</span><span>INTAKE</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what it covers">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="law-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[0]} /></svg></span>
                  <span className="idx">one page per practice area and office</span>
                  <span className="title">Practice-area pages that rank</span>
                  <span className="tag">Search</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="law-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[3]} /></svg></span>
                  <span className="idx">conflict-check details only</span>
                  <span className="title">Intake that keeps confidences</span>
                  <span className="tag">Secure</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="law-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d="M9 12l2 2 4-4M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" /></svg></span>
                  <span className="idx">approved by your solicitors</span>
                  <span className="title">Copy checked against rule 36</span>
                  <span className="tag">Sign-off</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · Nothing goes live until a solicitor at your firm approves it.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
              { v: 'Rule 36', t: 'solicitors’ advertising must not be false, misleading, deceptive or offensive', s: 'QLS, advertising rules', u: SRC_QLS_ADV },
              { v: '300', t: 'penalty units maximum for advertising personal injury services outside Queensland’s rules', s: 'PIPA 2002 (Qld) s 66', u: SRC_PIPA },
              { v: 'Not public AI', t: 'confidential client information cannot safely go into public AI chatbots', s: 'NSW, Vic and WA regulators, 2024', u: SRC_AI_STATEMENT },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...(r.u.startsWith('http') ? extLink : {})}>{r.s}</a></div>
                <div className="v">
                  <strong className={/^\d/.test(r.v) ? 'ledger-number' : 'ledger-word'}>{r.v}</strong>
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

        {/* ═══ ANSWER-FIRST (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What is law firm SEO, and what makes it different in Australia?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">Law firm SEO, also called lawyer SEO, is the work that makes a law firm’s website show
                    up when people search Google or ask an AI assistant for legal help.</span> For an Australian firm it
                    means one clear page per practice area and office, a Google Business Profile for each real location,
                    a fast and accessible website, genuine reviews, and copy that meets the solicitors’ advertising
                    rules in your state.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms we use a lot</div>
                    <p>
                      A <b>practice-area page</b> is a page about one type of matter, such as family law or
                      conveyancing, written for the people who need it. A <b>Google Business Profile</b> is the free
                      listing that shows your office in Google Maps results. <b>Intake</b> is how a new enquiry
                      becomes a client, from the first form or call to the conflict check and engagement.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Three things make law different from other SEO work. You compete with legal directories and large
                    national firms for the same searches. Every page is advertising under rule 36 of the conduct rules,
                    and in Queensland personal injury advertising has its own Act. And enquiries carry confidential
                    information, so the website and any AI on it must be built to keep it safe. Most law firm SEO pages
                    skip the last two. This page covers all three.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§04</div>
                  <p>
                    We do SEO and websites together because for law firms they fail together. A firm can rank for
                    “family lawyer Newcastle” and still lose the client if the page is vague, slow on a phone, or the
                    enquiry form asks for their whole story. We look at the full path, from the search to the
                    solicitor’s first call.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A solicitor in a small Australian suburban law office reviewing her firm's family law page on a laptop that faces her, bookshelves and a window behind" />
            </div>
          </div>
        </section>

        {/* ═══ QUICK GUIDE: WHICH PAGE FOR WHICH NEED ═══ */}
        <section className="section platforms" id="scope">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Is this the right page?</div>
                <h2>Law firm SEO and websites, or something narrower?</h2>
              </div>
              <p>
                This page is for law firms that want more of the right enquiries from search: practice-area pages,
                local search, a better website and intake that feeds your systems. If you only need one piece of
                that, the pages below go deeper on it.
              </p>
            </div>
            <div className="eyebrow plat-label">Quick guide</div>
            <div className="platlist" role="list">
              <div className="plat plat-own" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>SEO, website and intake for a law firm</h3></div><p className="plat-build">practice areas, offices, rules</p><p className="plat-fit">This page</p></div>
              <div className="plat" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Map results and reviews only</h3></div><p className="plat-build">Google Business Profile, citations</p><p className="plat-build"><a href="/au/local-seo">Local SEO</a></p></div>
              <div className="plat" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Being quoted by AI assistants</h3></div><p className="plat-build">ChatGPT, Perplexity, AI Overviews</p><p className="plat-build"><a href="/au/ai-seo">AI SEO</a></p></div>
              <div className="plat" role="listitem"><span className="capid">04</span><div className="plat-name"><h3>Answering the phone after hours</h3></div><p className="plat-build">intake calls, first-call bookings</p><p className="plat-build"><a href="/au/ai-receptionist">AI receptionist</a></p></div>
            </div>
          </div>
        </section>

        {/* ═══ CAPABILITIES ═══ */}
        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What we do for law firms</div>
              <h2>Six parts of lawyer SEO, built to work together</h2>
              <p className="lead">
                Most firms that come to us have one or two of these in place and the rest missing. The gap is usually
                practice-area pages and intake, not rankings on the home page.
              </p>
            </div>
            <div className="capgrid">
              {JOBS.map((j, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={j.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={JOB_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={JOB_SUBJECTS[i]} />
                    <h3>{j.t}</h3>
                    <p>{j.d}</p>
                  </div>
                );
              })}
            </div>
            <div className="agentdir-group chg-group">
              <div className="agentdir-label"><span className="capid">GRP‑01</span><h3>What we handle</h3></div>
              <ul className="chg-list">
                <li><span><b>Keyword and competitor research.</b> What Australians search for each practice area and place, and who ranks now.</span></li>
                <li><span><b>Writing.</b> Practice-area, location and solicitor profile pages drafted from interviews with your team.</span></li>
                <li><span><b>Technical work.</b> Speed, mobile layout, accessibility, indexing, redirects and structured data.</span></li>
                <li><span><b>Local search.</b> Google Business Profile setup and upkeep for each office, and consistent directory listings.</span></li>
                <li><span><b>Intake.</b> Forms, optional AI chat and the connection to your practice management software.</span></li>
                <li><span><b>Reporting.</b> Enquiries by practice area and office, every month, in plain English.</span></li>
              </ul>
            </div>
            <div className="agentdir-group chg-group">
              <div className="agentdir-label"><span className="capid">GRP‑02</span><h3>What stays with your firm</h3></div>
              <ul className="chg-list">
                <li><span><b>Legal accuracy.</b> A solicitor reviews and approves every page before it goes live.</span></li>
                <li><span><b>Compliance sign-off.</b> You are responsible for your advertising; we flag risks, you decide.</span></li>
                <li><span><b>Client conversations.</b> No page, form or chatbot tells anyone whether they have a case.</span></li>
                <li><span><b>Reviews.</b> You ask clients; we make it easy. We never write or buy reviews.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ FIT CHECK ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Where should your firm start?</div>
              <h2>A 30-second check for Australian law firms</h2>
              <p>Tap the line that sounds most like your practice. The answer is honest, even when it is a smaller job than you expected.</p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A man at his kitchen table in the evening searching for a family lawyer on his phone, which faces him, documents beside him"
                caption="Most people look for a lawyer in the evening, on a phone, after something has gone wrong. The page they land on has a few seconds to show it can help." />
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

        {/* ═══ ADVERTISING RULES ═══ */}
        <section className="section facts" id="rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The rules, in plain English</div>
              <h2>Law firm advertising rules in Australia, and how they shape your website and SEO</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>Rule 36 applies to every page.</b> Under rule 36.1 of the Australian Solicitors’ Conduct Rules, a
                  solicitor or principal must make sure any advertising, marketing or promotion is not false, not
                  misleading or deceptive or likely to mislead or deceive, not offensive, and not prohibited by law.
                  Your website, your Google Business Profile, your ads and your social posts are all advertising. The
                  Law Society Journal notes a breach can amount to unsatisfactory professional conduct or professional
                  misconduct and can lead to a complaint to the Office of the NSW Legal Services Commissioner.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Specialist wording.</b> Rule 36.2 says a solicitor must not give a false, misleading or deceptive
                  impression of specialist expertise, and must not use “accredited specialist” or a derivative,
                  including post-nominals, unless accredited by the relevant professional association. In SEO this
                  matters because “specialist” is a popular search word. We target the search without making the claim,
                  for example “family law solicitors in Parramatta” instead of “family law specialists”.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>The Australian Consumer Law applies too.</b> The Queensland Law Society points solicitors to
                  sections 18, 29 and 34 of the ACL, which ban misleading or deceptive conduct and false or misleading
                  representations about services. So “best lawyers in Brisbane”, unexplained success rates or review
                  widgets that only show five-star comments are risks, not just style choices.
                </p></div>
                <div className="fact"><div className="sec">§04</div><p>
                  <b>Personal injury in Queensland.</b> Section 66 of the Personal Injuries Proceedings Act 2002 (Qld)
                  says personal injury services may only be advertised with a statement of the practitioner’s or
                  firm’s name, contact details and area of practice, published by an allowed method, and gives “no win,
                  no fee” advertising as an example of a breach. The maximum penalty is 300 penalty units, and a
                  practitioner can also be charged with misconduct. Radio and television are not allowed methods. On the
                  firm’s own website, the Act allows statements about the law of negligence and a person’s rights, and
                  the conditions under which the firm will act. In February 2026, QLS’s Proctor reported a QCAT
                  decision finding professional misconduct and a $30,000 fine over “No Win, No Fee” injury advertising
                  that included a hospital billboard, the firm’s website and social media.
                </p></div>
                <div className="fact"><div className="sec">§05</div><p>
                  <b>Personal injury in New South Wales.</b> The Law Society of NSW notes that the Legal Profession
                  Uniform Law does not include the personal injury advertising ban that sat in the repealed Legal
                  Profession Regulation 2005, and that the Workers Compensation Regulation 2016 removed the earlier work
                  injury advertising restrictions. Rule 36 still applies to everything a NSW personal injury firm
                  publishes.
                </p></div>
                <div className="fact"><div className="sec">§06</div><div>
                  <p>
                    <b>Confidentiality and AI.</b> Rule 9.1 of the conduct rules stops solicitors disclosing client
                    confidential information outside the permitted circle. The joint statement from the Law Society of
                    NSW, the Legal Practice Board of WA and the Victorian Legal Services Board and Commissioner says
                    lawyers cannot safely enter confidential, sensitive or privileged client information into public AI
                    chatbots such as ChatGPT, and should check commercial AI tools’ terms. That is why our forms and
                    chat assistants collect conflict-check details only, and why we never route enquiry text through a
                    public AI tool.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_QLS_ADV} {...extLink}>Queensland Law Society, rules about solicitors’ advertising</a>;{' '}
                    <a href={SRC_LSNSW_ADV} {...extLink}>Law Society of NSW, advertising legal services</a>;{' '}
                    <a href={SRC_LSJ_36} {...extLink}>Law Society Journal, marketing and your regulatory obligations (2023)</a>;{' '}
                    <a href={SRC_PIPA} {...extLink}>Personal Injuries Proceedings Act 2002 (Qld), ss 65 and 66</a>;{' '}
                    <a href={SRC_QLS_PI} {...extLink}>QLS, advertising for personal injury work</a>;{' '}
                    <a href={SRC_QCAT} {...extLink}>Proctor, QCAT decision on injury advertising (February 2026)</a>;{' '}
                    <a href={SRC_AI_STATEMENT} {...extLink}>Statement on the use of AI in Australian legal practice (December 2024)</a>;{' '}
                    <a href={SRC_CONF} {...extLink}>VLSB+C, confidentiality and its exceptions</a>.
                    Rules differ by state and change over time. This is general information, not legal advice; check
                    with your law society’s ethics team.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">7 checks before any law firm page goes live</div>
                <ol className="au-numlist">
                  {CHECKLIST.map((s) => (
                    <li key={s.t}><span><b>{s.t}</b> {s.d}</span></li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="platlist span-all" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>What we do</h3></div><p className="plat-build">Write copy that makes no unsupported claims, flag any wording that could raise a rule 36 or ACL question, keep “specialist” for accredited solicitors, and apply PIPA s 66 limits to Queensland personal injury pages and ads.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>What you keep</h3></div><p className="plat-build">Responsibility for your advertising and for legal accuracy. A solicitor at your firm approves every page, and we keep a record of who approved what and when.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>What we do not do</h3></div><p className="plat-build">We are not lawyers and do not give ethics or compliance sign-off. For a firm-specific question, ask your law society’s ethics team or your own professional adviser.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ PRACTICE-AREA TABLE ═══ */}
        <section className="section" id="practice-areas">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Practice by practice</div>
              <h2>SEO for law firms, practice area by practice area</h2>
              <p className="lead">
                Each practice area has different searchers, different urgency and different rules. A family law page
                and a criminal defence page should not be built the same way. This is how we plan them.
              </p>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>Practice area</th>
                    <th>What people search for</th>
                    <th className="fj">What the page must answer</th>
                    <th>Take care with</th>
                  </tr>
                </thead>
                <tbody>
                  {PRACTICE_AREAS.map((r) => (
                    <tr key={r.area}>
                      <th scope="row">{r.area}</th>
                      <td>{r.search}</td>
                      <td className="fj">{r.page}</td>
                      <td>{r.care}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Location pages follow the same idea: one page for each office and for regions you genuinely serve, with
              the local courts, registries and communities you work with. We do not create pages for towns where you
              have no presence and no clients.
            </p>
          </div>
        </section>

        {/* ═══ COMPARISON ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>Law firm SEO agency vs general SEO agency vs directory listings vs doing it yourself</h2>
                <p className="lead">
                  Each route suits someone. This compares them on what changes for your firm day to day, not on price.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">FactoryJet (SEO + website + intake)</th>
                    <th>General SEO agency</th>
                    <th>Legal directory listing</th>
                    <th>Do it yourself</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Practice-area pages on your own site</th><td className="fj">Planned and written with your solicitors</td><td>Often generic</td><td>No, their site</td><td>If you find the time</td></tr>
                  <tr><th scope="row">Advertising rules applied to copy</th><td className="fj">Checked before sign-off</td><td>Varies</td><td>Their templates</td><td>Up to you</td></tr>
                  <tr><th scope="row">Website speed and accessibility</th><td className="fj">Built in or fixed</td><td>Sometimes</td><td>Not applicable</td><td>Depends on the builder</td></tr>
                  <tr><th scope="row">Intake connected to practice management</th><td className="fj">Actionstep, Smokeball, Clio or LEAP routes</td><td>Rarely</td><td>Email leads</td><td>Manual</td></tr>
                  <tr><th scope="row">Confidentiality in forms and AI</th><td className="fj">Designed in</td><td>Varies</td><td>Their form</td><td>Up to you</td></tr>
                  <tr><th scope="row">Who owns the result</th><td className="fj">You own the site and content</td><td>Usually you</td><td>The directory</td><td>You do</td></tr>
                  <tr><th scope="row">Reporting</th><td className="fj">Enquiries by practice area and office</td><td>Rankings and traffic</td><td>Profile views</td><td>Search Console</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Directory listings still help: they are citations for local SEO and a source of enquiries. We keep your
              firm’s details consistent on them. They work best alongside your own site, not instead of it. For market
              price ranges, see our <a href="/blog/seo-cost-australia-2026">SEO cost guide for Australia</a> and{' '}
              <a href="/blog/website-cost-australia-2026">website cost guide for Australia</a>.
            </p>
          </div>
        </section>

        {/* ═══ PHOTOBREAK ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a white miniature Australian main street with small office buildings, one with an orange doorway and a path leading from a phone-shaped search bar to its door" />

        {/* ═══ PROCESS ═══ */}
        <section className="section process" id="how-we-work">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How we work</div>
                <h2>How we run law firm SEO, in eight steps</h2>
                <p className="lead">
                  Steps four and five are where law firm SEO is won: real answers from your solicitors, and their
                  sign-off before anything is published. Open any step to see what happens in it.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A FactoryJet strategist on a video call with two Australian solicitors in a meeting room, the laptop screen facing the solicitors, notes on the table"
                caption="Each practice-area page starts with a short interview with the solicitor who runs that practice." />
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
            headline={'Ranking for your firm name but not for the matters you want?'}
            sub={'Tell us your practice areas and offices. On a short call with the founder, we will show you which searches your firm could win, what your site is missing, and whether you need a rebuild or just better pages.'}
            label={'Plan my law firm SEO'}
          />
        </div>

        {/* ═══ WEBSITE DESIGN → definition ═══ */}
        <section className="definition" id="law-firm-website-design">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="mockup" ratio="3:2" className="definition-image"
              subject="Mockup: a law firm website on a laptop and a phone side by side, practice-area menu and a short enquiry form visible, placeholder text only, no real firm name" />
            <p className="figcap">
              A law firm website should tell a visitor in seconds what you do, for whom and where, and make it easy to
              reach a solicitor from a phone.
            </p>
          </div>
          <div className="definition-copy">
            <div className="eyebrow">Law firm website design</div>
            <h2>What a law firm website needs in Australia</h2>
            <p>
              A law firm website has two readers: the person with a legal problem, and the search engines and AI
              assistants deciding whether to show your page to them. Both want the same things. A clear statement of
              what the firm does and where. One page per practice area, with direct answers to common questions. Real
              solicitor profiles with admission details and experience. And a contact path that works in one tap on a
              phone.
            </p>
            <p>
              Under the hood, we build for speed and accessibility (WCAG 2.2 level AA), add structured data that
              describes the firm, each office and each solicitor accurately, and set up a privacy policy page. If your
              firm is covered by the Privacy Act, APP 1 requires a clearly expressed and up-to-date privacy policy; the
              OAIC explains the <a href={SRC_OAIC_SMALL} {...extLink}>small business exemption</a> and the{' '}
              <a href={SRC_APP_QR} {...extLink}>APPs in brief</a>.
            </p>
            <p>
              Enquiry forms are short on purpose: name, contact details, practice area, the other party’s name for a
              conflict check, and a note asking people not to share confidential details until a solicitor calls them.
              Websites up to five pages can be delivered in seven days, but most law firm sites are larger because of
              practice-area and location pages, so we give you a timeline with the scope. For a site you already have,
              our <a href="/au/website-maintenance">website maintenance</a> service keeps it updated and secure.
            </p>
          </div>
        </section>

        {/* ═══ INTEGRATIONS TABLE ═══ */}
        <section className="section integrations" id="integrations">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Intake that lands in your systems</div>
              <h2>Connecting enquiries to Actionstep, Smokeball, Clio and LEAP</h2>
              <p className="lead">
                An enquiry that sits in a shared inbox until Monday is a client lost to the firm that called back on
                Saturday. We connect your website forms and any AI chat to the practice management software you already
                use, so every enquiry is logged, assigned and followed up.
              </p>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>System</th>
                    <th>How we connect</th>
                    <th className="fj">What happens to a new enquiry</th>
                  </tr>
                </thead>
                <tbody>
                  {INTEGRATIONS.map((r) => (
                    <tr key={r.sys}>
                      <th scope="row">{r.sys}</th>
                      <td>{r.route}</td>
                      <td className="fj">{r.does}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Connection routes are based on each vendor’s own developer or integration documentation, September 2026.
              Access terms vary by vendor and plan; we confirm what your subscription allows before the build starts.
              After-hours phone enquiries can be handled by an <a href="/au/ai-receptionist">AI receptionist</a> that
              follows the same intake rules.
            </p>
          </div>
        </section>

        {/* ═══ AI SEARCH → facts ═══ */}
        <section className="section facts" id="ai-search">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Lawyer SEO in the age of AI answers</div>
              <h2>How law firms get cited in Google AI Overviews and ChatGPT</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  When we checked Australian Google results in September 2026, the searches “lawyer seo”, “law firm seo”
                  and “law firm website design” all showed an AI Overview, as did most legal questions we tested. People with legal questions now often
                  read a summary before they see a list of firms. The summary cites pages, and a cited page gets the
                  click.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  AI answers favour pages that answer one question directly, name the practice area and place, show
                  who wrote or approved the page, and are kept current. That is also what clients want, and it is
                  what rule 36 pushes you towards: specific, accurate, no puffery. Good law firm content and good AI
                  search content are the same thing.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <div className="factlabel">What we add to each practice-area page</div>
                  <ul className="trigrows">
                    <li><span className="m">Answer-first opening</span><span className="n">two sentences a summary can quote</span><span className="t">Every page</span></li>
                    <li><span className="m">Real client questions</span><span className="n">from interviews and search data</span><span className="t">FAQ block</span></li>
                    <li><span className="m">Solicitor credit</span><span className="n">who approved it, with profile link</span><span className="t">Trust</span></li>
                    <li><span className="m">Structured data</span><span className="n">firm, office, solicitor, FAQ</span><span className="t">Machine-readable</span></li>
                    <li><span className="m">Review date</span><span className="n">updated when the law changes</span><span className="t">Freshness</span></li>
                  </ul>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="illustration" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="AI-generated model: a white practice-area page with its first two lines highlighted in orange, an arrow carrying them into an AI answer card"
                caption="A clear first answer on each page is what AI summaries quote. Our AI SEO page explains the method in more depth." />
            </div>
            <p className="tablenote">
              More on this in our <a href="/au/ai-seo">AI SEO service for Australian businesses</a>.
            </p>
          </div>
        </section>

        {/* ═══ ENGAGEMENT + DEMAND ═══ */}
        <section className="section platforms" id="engagement">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Scope, not packages</div>
                <h2>Three ways law firms work with us</h2>
              </div>
              <p>
                Every engagement is quoted for your practice areas, offices and the state of your current site, with
                the website build and ongoing SEO shown separately. These are the usual shapes.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Audit and fix.</h3></div><p className="plat-build">A full audit of your site, rankings, Google Business Profiles and intake, then the priority fixes. Good for firms whose site is sound but underperforming.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>New website with SEO built in.</h3></div><p className="plat-build">A new law firm website structured around practice areas and offices, with content, local search setup and intake connected to your practice management software.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Ongoing law firm SEO.</h3></div><p className="plat-build">Monthly practice-area content, local search, technical upkeep and reporting on enquiries, with solicitor sign-off built into the schedule.</p></div>
            </div>
            <div className="au-split">
              <div>
                <p>
                  What moves the scope: how many practice areas and offices you want to rank for, how competitive they
                  are in your cities, whether the site needs rebuilding, how much writing is needed, and which practice
                  management system you use. For typical Australian market ranges, see our{' '}
                  <a href="/blog/seo-cost-australia-2026">SEO cost guide</a> and{' '}
                  <a href="/blog/website-cost-australia-2026">website cost guide</a>.
                </p>
                <ModalCTAButton label="Plan my law firm SEO" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="demand">
                <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                <ul>
                  {[
                    { kw: 'lawyer seo', v: '590', w: '100%', kd: 'The head term' },
                    { kw: 'law firm seo', v: '480', w: '81%', kd: 'Same volume as “seo for law firms”' },
                    { kw: 'law firm website design', v: '390', w: '66%', kd: 'Website buyers' },
                    { kw: 'law firm marketing', v: '320', w: '54%', kd: 'Broader, includes ads' },
                    { kw: 'ai for law firms', v: '90', w: '15%', kd: 'Emerging' },
                    { kw: 'legal marketing agency', v: '20', w: '3%', kd: 'Agency shortlisting' },
                  ].map((r) => (
                    <li key={r.kw} className="demand-row">
                      <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<small> searches</small></span></div>
                      <div className="demand-bar"><i style={{ width: r.w }} /></div>
                      <div className="demand-kd">{r.kd}</div>
                    </li>
                  ))}
                </ul>
                <p className="demand-src">Source: DataForSEO, Google Ads search volume, Australia, September 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROVIDERS ═══ */}
        <section className="section platforms" id="providers">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">The honest landscape</div>
                <h2>Law firm SEO and website providers Australian firms compare</h2>
              </div>
              <p>
                We are one option, not the only one. These Australian agencies show up in Australian searches for
                lawyer SEO, law firm SEO and law firm website design. Each note is based on what the company says on
                its own website.
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
              Options named from live Australian Google results for lawyer SEO, law firm SEO and law firm website design,
              September 2026. Notes and addresses reflect each company’s own website on 26 September 2026. Listing is not
              endorsement.
            </p>
            <div className="au-panel au-panel-wide">
              <div className="eyebrow">Questions to ask any law firm SEO agency, including us</div>
              <ol className="au-numlist">
                <li><span><b>Can I see live pages you wrote for a law firm?</b> Read them as a client would, and as a regulator would.</span></li>
                <li><span><b>How do you check copy against rule 36?</b> A good agency raises it before you do.</span></li>
                <li><span><b>What do you report on?</b> Enquiries by practice area beat rankings and traffic.</span></li>
                <li><span><b>How do you get reviews and links?</b> Paid reviews and link schemes are a risk to your firm.</span></li>
                <li><span><b>Where do enquiry details go?</b> Names of every tool that sees them, and where it stores data.</span></li>
                <li><span><b>What do we keep if we leave?</b> The site, the content, the Google Business Profiles and the data.</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ SIBLINGS ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Related services</div>
              <h2>More of what we build for Australian practices</h2>
              <p>
                Law firms often come to us for SEO and stay for the website, the intake or AI on the phone. These pages
                go deeper on each.
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
          heading="Law firm SEO questions Australian lawyers actually ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>More of the right enquiries, from pages your solicitors are proud to sign</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                practice areas, your offices and what your website is missing. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Plan my law firm SEO" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/local-seo">Only need local SEO? See local SEO</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
