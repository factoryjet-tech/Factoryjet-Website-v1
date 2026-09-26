import type { Metadata } from 'next';
import { Fragment } from 'react';
import type { ReactNode } from 'react';
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

const CANONICAL = 'https://factoryjet.com/au/ai-receptionist';
const UPDATED = '2026-09-25';
const TITLE = 'AI Receptionist Australia | Custom, Supported | FactoryJet';
/* Shortened 2026-09-26 so the hero form sits in the first desktop screen. The rest of the old H1
   ("Hands Over When It Matters") moved into the hero lead. */
const H1 = 'AI Receptionist Australia: Answers Every Call, Books the Job';
const DESCRIPTION =
  'A custom AI receptionist for Australian businesses. Answers calls 24/7, books into ServiceM8, Cliniko or your calendar, and hands urgent calls to your team.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'AI Receptionist', url: CANONICAL },
];

/* ─── External sources, verified 2026-09-25 ─────────────────────────── */
// OAIC, guidance on privacy and the use of commercially available AI products
// (published 21 Oct 2024, updated 17 Jan 2025): "any public facing AI tools
// (such as chatbots) are clearly identified as such"; update privacy policies
// and notifications; APP 5 notification; human oversight. HTTP 200, fetch-verified.
const SRC_OAIC_AI =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products';
// OAIC, Guide to health privacy, chapter 2: Telecommunications (Interception)
// Act 1979 (Cth) and State and Territory listening devices laws; "If a call is
// to be recorded or monitored, you must inform the individual at the beginning
// of the conversation so that the individual has a chance to end the call or
// ask not to be recorded." HTTP 200, fetch-verified.
const SRC_OAIC_CALLS =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/health-service-providers/guide-to-health-privacy/chapter-2-collecting-health-information';
// OAIC, small business: turnover threshold; health service providers covered
// regardless of turnover. HTTP 200, fetch-verified.
const SRC_OAIC_SMALL = 'https://www.oaic.gov.au/privacy/privacy-for-organisations/small-business';
// ACMA, keep or transfer your phone number: "You can usually keep your phone
// number when you change from one telco to another"; current telco must port
// if asked; new telco does not have to accept; local ports generally 8 to 15
// days, multi-number ports up to 30 days. Verified from the search index copy
// of the page; direct fetch timed out from our network (geo-blocked). Orchestrator
// to re-check from an AU connection.
const SRC_ACMA = 'https://www.acma.gov.au/keep-or-port-your-phone-number';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',     label: 'AI receptionist basics' },
  { key: 'choosing',   label: 'Choosing the right option' },
  { key: 'setup',      label: 'Setup, phone lines & cost' },
  { key: 'rules',      label: 'Privacy, recording & handover' },
  { key: 'industries', label: 'Tradies, clinics, law & more' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── AI receptionist basics ──
  { category: 'basics', question: 'What is an AI receptionist?',
    answer: 'An AI receptionist is a voice agent that answers your business phone. It speaks with callers in natural language, works out what they need, answers routine questions, books or moves appointments, takes clear messages, and passes urgent or sensitive calls to a person on your team. It works around the clock, including nights, weekends and public holidays, and it follows rules you agree in advance.' },
  { category: 'basics', question: 'Can I use AI to answer my phone calls?',
    answer: 'Yes. You keep your existing business number and forward calls to the AI receptionist at the times you choose: after hours, when the line is busy, when nobody picks up, or all the time. Callers hear a friendly Australian voice that tells them it is an automated assistant, then it handles the call or puts them through to a person. Most businesses start with missed and after-hours calls, then widen it.' },
  { category: 'basics', question: 'How does an AI receptionist work?',
    answer: 'Three parts work together. Speech recognition turns what the caller says into text. A language model, the kind of AI behind tools like ChatGPT, decides what the caller wants and what to say next, using only your rules and your approved answers. A voice then speaks the reply. Behind that, integrations connect it to your calendar, job system or practice software, so it can check availability and write the booking itself.' },
  { category: 'basics', question: 'Are AI receptionists worth it?',
    answer: 'They are worth it when you miss calls, when the same questions come in all day, or when the phone keeps pulling skilled people off the work they are paid to do. They are not worth it if most of your calls are complex, emotional or one of a kind. A quick test: sort your last fifty calls by type. If most are bookings, simple questions or messages, it is a strong fit.' },
  { category: 'basics', question: 'Is AI replacing receptionists?',
    answer: 'Not in the way we build it. A good AI receptionist supports the front desk: it takes overflow when two lines ring at once, covers lunch breaks, nights and weekends, and handles the repeat questions, so the person at the desk can look after people in the room and the calls that need a human. Your team decides which calls the AI takes and which always come straight through.' },
  { category: 'basics', question: 'What is the difference between a virtual receptionist and an AI receptionist?',
    answer: 'In Australia, a virtual receptionist usually means a real person at an answering company who picks up your calls using your script, takes a message or transfers the call. An AI receptionist is software that answers instead. It is available at any hour, can take many calls at once, and can book straight into your systems. Some answering companies now offer both, with people stepping in when the AI cannot help.' },
  { category: 'basics', question: 'Are there AI customer service agents for phone calls?',
    answer: 'Yes. An AI customer service agent is a wider term for AI that answers customer questions and takes actions, by phone, chat, email or SMS. An AI receptionist is the phone version, focused on incoming calls. The same engineering sits underneath both. Many of our clients start with calls, then add web chat or SMS follow-up using the same answers and the same handover rules. For chat, email and helpdesk support, see our AI customer service page.',
    links: [{ href: '/au/ai-customer-service', label: 'AI customer service for Australian support teams' }] },
  { category: 'basics', question: 'What does a virtual receptionist do?',
    answer: 'A virtual receptionist answers your business calls from somewhere other than your office, using your business name and a script you agree. Typical jobs are greeting callers, taking detailed messages, transferring calls to the right person, booking appointments and answering simple questions such as hours and location. In Australia the term usually means a person at an answering company, though AI receptionists now do the same routine work at any hour.' },
  { category: 'basics', question: 'Is there an AI answering service available in Australia?',
    answer: 'Yes, several. Australian options range from self-serve AI receptionist apps such as Sophiie, Johnni and Nexwin, to managed services such as Valory, to answering companies such as OfficeHQ that offer AI answering with a person ready to step in. You can also have one built around your own systems, which is what we do. All of them work with call forwarding, so you keep your existing number.' },

  // ── Choosing the right option ──
  { category: 'choosing', question: 'Which AI receptionist is best in Australia?',
    answer: 'There is no single best one, because the right choice depends on your calls and your systems. Self-serve apps such as Sophiie, Johnni and Nexwin suit many tradies and service businesses. Answering companies such as OfficeHQ, Virtual Reception and Ruby Receptionist offer people, AI or both. A custom build like ours suits businesses that need the receptionist wired into their own systems and rules. We list the options further down this page.' },
  { category: 'choosing', question: 'What is the best AI receptionist for a small business?',
    answer: 'For a sole trader or a very small team whose calls are mostly "take a message and text me", a self-serve app is usually the best choice, and we will tell you so on the first call. Once you need bookings written into your own job or practice system, different handling for different call types, or clean handover to named staff, a custom AI receptionist for small business use starts to earn its place.' },
  { category: 'choosing', question: 'Is there a free AI receptionist?',
    answer: 'Some apps offer a free trial or a limited free plan, usually capped on minutes and limited to basic message-taking. That is a sensible way to hear how your callers react to an AI voice. For a line your customers rely on, free plans are rarely enough: they seldom connect to your job or practice system, and they give you little say over what the AI says or where the call data goes.' },
  { category: 'choosing', question: 'Should I use an AI phone answering service or get one built?',
    answer: 'Use an AI phone answering service when your needs are standard and its settings cover them. Get one built when calls depend on your systems or rules: checking an existing booking, quoting from your own price list, routing by suburb to the right technician, or following a strict escalation path. Plenty of businesses start with an app and move to a custom build once they outgrow it. Both are reasonable.' },
  { category: 'choosing', question: 'Is a virtual receptionist good for a small business?',
    answer: 'A human virtual receptionist is a good fit when callers expect a person, when calls are varied, or when warmth matters more than speed. It is less good when you need bookings written into your systems at any hour, or when call volume spikes. Many small businesses now mix the two: AI for routine and after-hours calls, and a person for everything that needs judgment.' },
  { category: 'choosing', question: 'Is an AI voice agent the same as an AI receptionist?',
    answer: 'An AI receptionist is one kind of AI voice agent. A voice agent is any AI that holds a spoken conversation and takes actions, such as confirming orders, following up quotes or qualifying leads. An AI receptionist is a voice agent focused on incoming calls to your front desk. We build both, which is why our receptionists connect so tightly to the rest of your systems.' },

  { category: 'choosing', question: 'Which virtual receptionist is the best in Australia?',
    answer: 'The best one is the one that suits how your calls actually go. Human answering services such as OfficeHQ, Virtual Reception and Ruby Receptionist suit businesses whose callers expect a person and whose calls vary. AI receptionist apps suit high volumes of routine calls at any hour. Before you choose, sort your last fifty calls by type, then trial two services on your after-hours and overflow calls.' },

  // ── Setup, phone lines & cost ──
  { category: 'setup', question: 'How much does an AI receptionist cost in Australia?',
    answer: 'It depends on scope, not a rate card. The main drivers are how many call types it handles, how many systems it connects to, how many locations and phone numbers are involved, how many calls it takes each month (which sets the usage you pay the voice and AI providers directly), and the level of support you want. We scope it on a free first call and quote a fixed price for the build, with support shown separately. For published Australian plan prices, see our AI receptionist cost comparison.',
    links: [{ href: '/blog/ai-cost-australia-2026#ai-receptionist-cost', label: 'AI receptionist cost comparison' }] },
  { category: 'setup', question: 'How much does a virtual receptionist cost?',
    answer: 'It depends on how the service charges and how many calls you get. Human answering services usually charge a monthly base plus a fee per call or per minute, so a busy line costs far more than a quiet one. AI services usually charge a monthly plan with included minutes and an overage rate. Hours covered, bookings and transfers add to it. Our AI cost guide lists published Australian prices for both.',
    links: [{ href: '/blog/ai-cost-australia-2026#virtual-receptionist', label: 'Virtual receptionist prices in Australia' }] },
  { category: 'setup', question: 'Can I keep my existing phone number?',
    answer: 'Yes. The simplest route is call forwarding, also called call diversion: your number stays with your current telco and you divert calls to the AI receptionist always, after hours, when busy, or when unanswered. If you are changing telco anyway, you can usually take the number with you. The ACMA says you can usually keep your number when you change telco, which is called porting.' },
  { category: 'setup', question: 'What is number porting and do I need it?',
    answer: 'Porting means moving your phone number from one telco to another so it keeps working. You only need it if you are changing phone provider. The ACMA says your current telco must port the number if asked, but the new telco does not have to accept the request, so check first. Most businesses adding an AI receptionist never port at all. They just set up call diversion.' },
  { category: 'setup', question: 'How long does it take to set up an AI receptionist?',
    answer: 'A focused first version, covering your most common call types and booking into one system, usually takes a few weeks from the first workshop to live calls. More call types, more systems or several sites take longer. We always test it on realistic calls before customers reach it, and we usually start with missed and after-hours calls so the risk stays low while you get comfortable.' },
  { category: 'setup', question: 'Which job, booking and practice systems can it connect to?',
    answer: 'Anything with a usable API, which is a documented way for one piece of software to talk to another. That covers Google and Outlook calendars, job management tools for trades such as ServiceM8 and Tradify, practice software such as Cliniko, CRMs such as HubSpot, and most online booking platforms. If your system has no API, we look at other routes and tell you honestly what will and will not work.' },
  { category: 'setup', question: 'Will it sound Australian and understand local accents?',
    answer: 'Yes. We choose a natural Australian English voice and test it with a range of accents, suburb names, street names and noisy mobile lines before launch. Modern speech recognition handles most Australian accents well, but it is not perfect. That is why we build in read-back steps for names, addresses and times, and a quick route to a person when the AI cannot understand the caller.' },
  { category: 'setup', question: 'Do we own the AI receptionist you build?',
    answer: 'Yes. The call flows, prompts, approved answers, integrations, code and documentation are yours. You hold the accounts with the voice and AI providers and pay them directly, with no markup through us. If you later want to bring support in-house or move to another company, you can, and the receptionist keeps running. We build it, support it, and hand you the keys.' },

  // ── Privacy, recording & handover ──
  { category: 'rules', question: 'Do I have to tell callers they are talking to AI?',
    answer: 'You should, and we build it into the greeting. The OAIC says public facing AI tools should be clearly identified as AI, and that businesses should update their privacy policies and notices with clear information about how they use AI. So the greeting says the caller is speaking with an automated assistant, and your privacy policy explains how phone calls are handled.' },
  { category: 'rules', question: 'Is it legal to record calls handled by an AI receptionist?',
    answer: 'It can be, if you do it properly. Recording is covered by the federal Telecommunications (Interception and Access) Act and by separate state and territory listening and surveillance device laws, which are not all the same. The OAIC’s health guidance says that if a call is recorded, you must tell the caller at the start of the conversation. We build that notice in. Check the detail for your state with your adviser.' },
  { category: 'rules', question: 'Does the Privacy Act apply to my small business?',
    answer: 'It might. The OAIC says many small businesses under a turnover threshold are exempt from the Privacy Act 1988, but some are covered regardless of size, including health service providers. So a small clinic, dental practice or allied health business is covered. Even if you are exempt, we build to the Australian Privacy Principles anyway, because your callers expect it and it keeps your options open.' },
  { category: 'rules', question: 'How does the AI hand a call over to a person?',
    answer: 'We agree the handover rules with you before we build. Typical triggers are a caller asking for a person, an emergency word, an upset caller, or a question with no approved answer. The AI tells the caller it is putting them through and transfers the call live, with a short summary sent to whoever answers. If nobody is free, it takes a detailed message and alerts the right person by SMS, email or team chat.' },
  { category: 'rules', question: 'What calls should an AI receptionist never handle?',
    answer: 'Clinical advice, legal advice, emergencies, safety concerns, complaints that need a real apology, and anything that changes someone’s money or rights. For those, the AI has one job: recognise the situation quickly and get the caller to a person. For a medical or dental practice, that means urgent symptoms go straight to staff, or the caller is given the emergency guidance your clinicians approve, such as calling 000.' },
  { category: 'rules', question: 'Where is our call data stored?',
    answer: 'That depends on the voice and AI providers we choose together, and we make it a deliberate decision, not a default. Where it matters, such as health or legal calls, we favour providers that can host data in Australia and whose business terms stop your call data being used to train their models. We document which providers see what, so your privacy policy can say so accurately.' },
  { category: 'rules', question: 'What happens if the AI gets something wrong?',
    answer: 'It will sometimes mishear or misunderstand, just as people do. We reduce the risk in three ways: reading key details back to the caller, limiting it to answers you have approved, and sending every booking and message to your team with a summary. After launch we review call transcripts with you, fix the patterns we find, and keep adjusting it as your business changes.' },

  { category: 'rules', question: 'Is using AI voice illegal?',
    answer: 'No. Using an AI voice to answer your business calls is legal in Australia, as long as you follow the rules that already apply to calls. Tell callers they are speaking with an automated assistant, as the OAIC recommends, give notice before recording, and handle personal information under the Privacy Act. Outbound sales calls are different: the Do Not Call Register rules apply. Copying a real person’s voice without consent is a separate legal risk.' },

  // ── Industries ──
  { category: 'industries', question: 'Is there an AI receptionist for tradies?',
    answer: 'Yes, and trades are one of the best fits. A plumber, sparky or builder on a roof cannot answer the phone, and a missed call is often a lost job. An AI receptionist for tradies answers while you work, takes the address and the problem, books a slot in ServiceM8 or Tradify, and sends genuine emergencies, like a burst pipe, straight to your mobile. If you also need a website that brings in those calls, see our websites for tradies.',
    links: [{ href: '/au/websites-for-tradies', label: 'Websites for tradies' }] },
  { category: 'industries', question: 'Is there an AI medical receptionist available in Australia?',
    answer: 'Yes. Several Australian providers offer AI receptionists for clinics, and we build custom ones on the admin side only: bookings, changes, directions, what to bring and routine practice questions, written into your practice software. It never gives clinical advice, and urgent symptoms follow a handover path your clinicians approve. Because health providers are covered by the Privacy Act, data handling gets extra care.' },
  { category: 'industries', question: 'Does an AI dental receptionist work for a practice?',
    answer: 'Yes, for the routine side of the front desk: new patient enquiries, check-up and hygiene bookings, cancellations, and questions about hours, parking and health fund claiming that you have approved answers for. Anything that sounds like pain, swelling or an emergency goes to the team at once. It works best when it can connect to your booking system or online booking page.' },
  { category: 'industries', question: 'Is there an AI receptionist service for lawyers?',
    answer: 'Yes. For law firms, an AI receptionist handles new enquiry intake by practice area, collects the details your team needs for a conflict check, books first consultations, and routes existing clients to the right lawyer. It never gives legal advice. Many firms use it after hours and for overflow, so every new enquiry is captured and a lawyer calls back with the details already in hand.' },
];

/* ─── Named Australian providers (open self-disclosure, ItemList). Each note
       is based on the company’s own homepage, fetched 2026-09-25. ───────── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. We design, build, integrate and support a custom AI receptionist around your call types, job or practice system, CRM and handover rules. Founder involved on every project, and you own what we build.' },
  { name: 'Sophiie', note: 'An AI receptionist and office manager built for tradies and service businesses. It says it answers calls, books jobs and follows up, and connects to tools such as ServiceM8, Xero and Google Calendar.' },
  { name: 'Johnni', note: 'An AI receptionist for Australian service businesses that says it answers calls 24/7, qualifies enquiries and books jobs into ServiceM8, Simpro, a CRM or a calendar.' },
  { name: 'Nexwin', note: 'An Australian-built AI phone receptionist with a natural Australian voice, aimed at tradies, clinics and service businesses, with a website chatbot and routing of configured urgent calls to a person.' },
  { name: 'AiDial', note: 'An Australian conversational AI platform offering onshore AI call handling, with integrations it lists including Cliniko, Halaxy, HubSpot and ServiceM8, and industry versions for legal, care and real estate.' },
  { name: 'Valory', note: 'A managed AI receptionist and phone answering service for Australian businesses that says it answers 24/7, captures leads, books appointments and escalates urgent enquiries.' },
  { name: 'OfficeHQ', note: 'A virtual reception company established in Sydney in 2003, offering human call answering, AI answering with receptionists on hand to step in, and scripted escalation services.' },
  { name: 'Virtual Reception', note: 'An Australian virtual receptionist and phone answering service with Australian-based receptionists and versions for legal, medical and property management businesses.' },
  { name: 'Ruby Receptionist (Australia)', note: 'An Australian virtual receptionist service offering 24/7 call answering by Australian-based receptionists, with legal, medical, property management and real estate options.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only and is defined
       once, sitewide. Never redefine it here. ──────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'AI Receptionist Australia',
      serviceType: 'AI receptionist, AI voice agent and AI phone answering design, build, integration and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'A custom AI receptionist for Australian businesses. It answers calls 24/7, answers routine questions, books into calendars, job systems such as ServiceM8 and Tradify, and practice software such as Cliniko, takes messages, and hands urgent or sensitive calls to a person. Built with Privacy Act transparency, supported after launch, and owned by the client.',
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
      datePublished: '2026-09-25',
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
      name: 'Australian AI receptionist and virtual receptionist providers',
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
      'AI receptionist for Australian businesses, built around your calls. 24/7 AI call answering, bookings into your own systems, clear handover to your team, Privacy Act transparency and support after launch.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/ai-receptionist/ai-receptionist-og.webp', width: 1200, height: 630, alt: 'AI receptionist Australia: a Sydney electrician busy at a switchboard while a call comes in on his phone' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* "Which option fits you" self-check. Rendered as <details> so it needs no
   client component. */
const FIT_CHECK: { q: string; a: string; verdict: string }[] = [
  { q: 'I work alone and mostly need someone to take a message and text me.', verdict: 'Self-serve app', a: 'A self-serve AI receptionist app is probably enough. Try a free trial, listen to a few calls, and see how your customers react. You do not need a custom build yet, and we will tell you that if you call us.' },
  { q: 'I want bookings to land in ServiceM8, Tradify, Cliniko or my practice software.', verdict: 'Check the app first, then build', a: 'First check whether an app supports your system properly, including your job types, staff and rules. If it only half fits, a custom build that writes bookings the way your team actually works is usually worth it.' },
  { q: 'Callers expect a real person, and my calls are varied and personal.', verdict: 'Human answering service', a: 'A human virtual receptionist service may suit you better, or a mix: AI for after-hours and overflow, people for the rest. There is no prize for using AI where a person does the job better.' },
  { q: 'We have several sites, teams or phone numbers with different rules.', verdict: 'Custom build', a: 'This is where apps struggle. Different hours, different handover people and different booking rules per site are exactly what a custom AI receptionist is designed around.' },
  { q: 'We handle health or legal information and care where the data goes.', verdict: 'Custom build, privacy first', a: 'You need control over which providers see call data, where it is stored and how long it is kept. A build lets you decide those things and document them for your privacy policy.' },
];

const BUILD_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Listen to your calls', d: 'We review a sample of real calls, or talk them through with whoever answers the phone today, and sort them into types: new jobs, bookings, changes, questions, complaints and emergencies. This tells us what the receptionist must do well and what it should leave alone.' },
  { n: '02', t: 'Agree the call rules', d: 'For each call type we agree what the AI does, what it must never do, and when it hands over. We also write the greeting, including the line telling callers they are speaking with an automated assistant and, if calls are recorded, the recording notice.' },
  { n: '03', t: 'Write the answers with you', d: 'The AI only gives answers you have approved: services, service areas, hours, policies, directions and what to bring. Nothing is left for the model to invent. Where it does not know, it says so and takes a message.' },
  { n: '04', t: 'Connect your systems', d: 'We build the integrations to your calendar, job system or practice software, CRM and team chat, so the receptionist can check real availability, write bookings and send summaries to the right person.' },
  { n: '05', t: 'Set up your phone line', d: 'We connect your existing number by call diversion, or help with porting if you are changing telco. You choose when calls reach the AI: always, after hours, when busy, or when nobody answers.' },
  { n: '06', t: 'Test it hard', d: 'We run a large set of test calls with different accents, suburb names, background noise, awkward requests and people changing their mind mid-sentence. Your team makes test calls too, and we fix what they find.' },
  { n: '07', t: 'Go live in stages', d: 'Most businesses start with missed and after-hours calls. Once you are happy with the transcripts, you widen it to more call types or all calls. Nothing changes overnight unless you decide it.' },
  { n: '08', t: 'Review and support', d: 'After launch we review transcripts and outcomes with you, tighten answers, add new call types and keep it working as your services, systems and the AI models themselves change.' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/ai-agents', t: 'AI agent development', d: 'The wider family your receptionist belongs to: AI agents that follow up quotes, chase invoices and handle admin across your systems.' },
  { href: '/au/ai-customer-service', t: 'AI customer service', d: 'For support teams: AI agents that answer chat and email, draft replies and triage tickets in your helpdesk.' },
  { href: '/au/ai-development', t: 'AI development and integration', d: 'AI built into your CRM, job system or website, for work that goes beyond the phone.' },
  { href: '/au/ai-consulting', t: 'AI consulting', d: 'Not sure the phone is where to start? A short assessment of where AI will actually pay off in your business.' },
  { href: '/au/ai-seo', t: 'AI SEO', d: 'Get found when Australians ask ChatGPT, Perplexity or Google AI for a business like yours.' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we build for Australian businesses: ecommerce, websites, AI agents and AI search.' },
];
/* Industries we build for (was a 3-col card grid; now the Family A capgrid). */
const INDUSTRIES: { t: string; d: ReactNode }[] = [
  { t: 'Tradies and home services', d: <>Plumbers, sparkies, HVAC techs, builders and cleaners. It answers while you are on the tools, takes the suburb and the problem, books a slot in ServiceM8 or Tradify, and sends real emergencies, like a burst pipe or no power, to your mobile. Need the website too? See <a href="/au/websites-for-tradies">websites for tradies</a>.</> },
  { t: 'Medical and allied health clinics', d: 'GPs, physios, chiros, psychologists and specialists, on the admin side only: bookings, changes, directions and what to bring, written into Cliniko or your practice software. No clinical advice, ever, and urgent symptoms follow a path your clinicians approve.' },
  { t: 'Dental practices', d: <>New patient enquiries, check-ups, hygiene bookings, cancellations and approved answers on health fund claiming. Pain, swelling and emergencies go to the team at once. It can work alongside online booking pages patients already use. Need the website side too? See <a href="/au/dental-website-design">dental website design and SEO</a>.</> },
  { t: 'Law firms', d: 'New enquiry intake by practice area, details for your conflict check, first consultation bookings, and routing existing clients to the right lawyer. A virtual receptionist for lawyers that never gives legal advice and captures every after-hours enquiry.' },
  { t: 'Real estate and property management', d: 'Inspection and appraisal bookings, listing questions, tenant maintenance requests and after-hours calls, logged into your property software, with urgent repairs routed to the right tradie or property manager.' },
  { t: 'Hospitality', d: 'Restaurants, cafés and venues. Table bookings and changes during service, opening hours, dietary and function enquiries, so staff are not pulled off the floor by the phone on a Friday night.' },
];

/* Icons and visual-slot subjects for the industry cards (same order as INDUSTRIES). */
const INDUSTRY_ICONS = [
  'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z',
  'M4 4h16v16H4V4Zm8 4v8m-4-4h8',
  'M7 3C4.5 3 3 5 3 7.5c0 3 1.5 4.5 2 7.5.4 2.5 1 6 2.5 6s1.5-4 2.5-6c.5-1 1.5-1 2 0 1 2 1 6 2.5 6s2.1-3.5 2.5-6c.5-3 2-4.5 2-7.5C21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3Z',
  'M12 3v18M5 21h14M6 7h12M6 7l-3 7a3 3 0 0 0 6 0L6 7Zm12 0-3 7a3 3 0 0 0 6 0l-3-7Z',
  'M3 11 12 4l9 7v9h-6v-6H9v6H3v-9Z',
  'M5 3v7a2 2 0 0 0 4 0V3M7 3v18M17 3c-2 1-3 3-3 6v4h3v8',
] as const;
const INDUSTRY_SUBJECTS = [
  'AI-generated model: a white tradie van beside an orange phone handset and a booking card dropping into a job board',
  'AI-generated model: a white clinic front desk with an orange appointment block sliding into a calendar grid',
  'AI-generated model: a white tooth-shaped model beside an orange booking card and a small desk phone',
  'AI-generated model: a white set of scales beside an orange enquiry card being routed to one of three folders',
  'AI-generated model: a white house model with an orange key tag and a maintenance request card',
  'AI-generated model: a white restaurant table model with an orange reservation card and a phone set aside',
] as const;

/* Hero spec panel icons (answer, book, hand over). */
const HERO_ICONS = [
  'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z',
  'M4 6h16v14H4V6Zm0 4h16M8 3v4m8-4v4',
  'M9 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 13c0-3 2-5 5-5s5 2 5 5m3-9h5m-2-2 2 2-2 2',
] as const;

/* Visual slot page key (route without /au/). */
const PAGE_KEY = 'ai-receptionist';

/* H1 split for the Family A hero emphasis. Same string as H1 (schema headline); only the
   benefit clause after the colon is wrapped in .hero-emphasis. */
const H1_SPLIT = H1.indexOf(': ');
const H1_LEAD = H1.slice(0, H1_SPLIT + 1);
const H1_EMPHASIS = H1.slice(H1_SPLIT + 2);

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export default function AiReceptionistAUPage() {
  return (
    <>
      <script id="ld-au-ai-receptionist" type="application/ld+json"
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

        {/* ═══ HERO (US web-design hub hero: copy + inline form left, spec panel right) ═══ */}
        <section className="hero" id="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">AI Receptionist Australia</div>
              <h1>{H1_LEAD} <span className="hero-emphasis">{H1_EMPHASIS}</span></h1>
              <p className="lead">
                FactoryJet builds custom AI receptionists for Australian businesses. Yours answers the phone day and
                night, works out what each caller needs, answers routine questions, books straight into your calendar,
                ServiceM8, Tradify or Cliniko, takes clear messages, and hands over when it matters: urgent calls go to
                the right person. We design it around your calls, support it after launch, and you own it.
              </p>
              <HeroInlineForm region="au" source="au_ai_receptionist_hero" submitLabel="Plan my AI receptionist" />
            </div>

            <form
              className="specpanel"
              aria-label="What an AI receptionist does on every call"
              data-visual-slot={`${PAGE_KEY}:hero`}
              data-visual-kind="diagram"
              data-visual-subject="The three things the receptionist does on every call: answer day and night, book into your real system, hand over to a person when it matters"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT IT DOES ON EVERY CALL</span>
                <span className="sys"><span>24/7</span><span>CALLS</span><span>YOURS</span></span>
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
              <div className="specpanel-body" role="radiogroup" aria-label="Explore what it does">
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="rec-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[0]} /></svg></span>
                  <span className="idx">nights, weekends, public holidays</span>
                  <span className="title">Answers, day and night</span>
                  <span className="tag">24/7</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="rec-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[1]} /></svg></span>
                  <span className="idx">calendar, job or practice software</span>
                  <span className="title">Books into your real system</span>
                  <span className="tag">Live</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="rec-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={HERO_ICONS[2]} /></svg></span>
                  <span className="idx">urgent, upset or sensitive callers</span>
                  <span className="title">Hands over when it matters</span>
                  <span className="tag">To a person</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · The caller can always ask for a person.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (was the facts band; verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
              { v: 'Say so', t: 'public facing AI tools should be clearly identified as AI to the people using them', s: 'OAIC, AI products guidance', u: SRC_OAIC_AI },
              { v: 'At the start', t: 'of a recorded call is when the caller must be told it is being recorded', s: 'OAIC, guide to health privacy', u: SRC_OAIC_CALLS },
              { v: 'Keep it', t: 'your existing number: divert calls, or usually take it with you if you change telco', s: 'ACMA, keep your number', u: SRC_ACMA },
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
          <div className="upd">Last updated<br />25 September 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) → Family A facts ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What is an AI receptionist, and is it right for an Australian business?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">An AI receptionist is a voice agent that answers your business phone 24/7.</span> It
                    understands what callers want, answers routine questions, books jobs or appointments into your own
                    system, takes messages, and passes urgent or sensitive calls to a person. It suits Australian
                    businesses that miss calls or answer the same questions all day.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Three terms we use a lot</div>
                    <p>
                      A <b>voice agent</b> is AI that holds a spoken conversation and can take actions, such as making a
                      booking. <b>Handover</b> (or escalation) means passing a call to a person when the AI should not deal
                      with it. An <b>integration</b> is a live connection between the receptionist and your software, so it
                      can read your calendar and write bookings itself.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    Most AI phone answering products in Australia are apps you sign up to and set up yourself. That works
                    well for simple message-taking, and for many sole traders it is all you need. It works less well when
                    calls depend on your own job system, your own rules and your own team. That second case is what we
                    build: an AI receptionist designed around the calls you actually get, connected to the systems you
                    actually use, and looked after once it is live.
                  </p>
                </div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts" kind="photo" ratio="3:2" className="factphoto"
                subject="A tradie busy with both hands at work while a call comes in on his phone">
                <img src="/images/au/ai-receptionist/ai-receptionist-hero.webp" width={1400} height={933} loading="lazy" decoding="async" alt="A Sydney electrician with both hands in a switchboard while a call comes in on the phone lying on his tool case, ready for an AI receptionist to answer" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ WHICH CALLS SUIT AI → full-width head + grouped lists ═══ */}
        <section className="section" id="which-calls">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Start with your calls, not the technology</div>
              <h2>Which calls an AI receptionist should take, and which should stay with a person</h2>
              <p className="lead">
                The biggest mistake with AI call answering is pointing it at every call on day one. The right split
                depends on your business, but the pattern is very consistent across the Australian businesses we
                speak to, from a two-van plumbing business in Brisbane to a multi-room physio clinic in Melbourne.
              </p>
            </div>
            <div className="agentdir-group chg-group">
              <div className="agentdir-label"><span className="capid">GRP‑01</span><h3>Good fit for the AI receptionist</h3></div>
              <ul className="chg-list">
                <li><span><b>New jobs and bookings.</b> Checking real availability and writing the job or appointment into your system, then confirming by SMS.</span></li>
                <li><span><b>Changes and cancellations.</b> Moving a booking within rules you set, such as notice periods or call-out windows.</span></li>
                <li><span><b>Routine questions.</b> Hours, parking, service areas, which services you offer, what to bring, and answers you have approved word for word.</span></li>
                <li><span><b>New enquiries.</b> Name, number, suburb, what they need and how urgent it is, passed to your team or CRM.</span></li>
                <li><span><b>Overflow and after hours.</b> Picking up when every line is busy, over lunch, at night, on weekends and on public holidays.</span></li>
                <li><span><b>Clear messages.</b> A written summary sent to the right person, not a voicemail nobody has time to play back.</span></li>
              </ul>
            </div>
            <div className="agentdir-group chg-group">
              <div className="agentdir-label"><span className="capid">GRP‑02</span><h3>Keep with a person</h3></div>
              <ul className="chg-list">
                <li><span><b>Anything clinical or legal.</b> Symptoms, treatment, diagnosis, or legal advice of any kind.</span></li>
                <li><span><b>Emergencies and safety.</b> The AI’s only job here is to spot the words and route the call at once.</span></li>
                <li><span><b>Complaints and upset callers.</b> People want to be heard by a person, and they should be.</span></li>
                <li><span><b>Money and decisions.</b> Refunds, disputes, credit and anything that changes someone’s rights.</span></li>
                <li><span><b>Your most important relationships.</b> Key clients, builders and suppliers can go straight to a named person.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ FIT CHECK (<details>) → vlog ═══ */}
        <section className="vlog" id="fit-check">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Which option fits you?</div>
              <h2>A 30-second check: app, answering service or custom AI receptionist</h2>
              <p>Tap the line that sounds most like your business. The answer is honest, even when it is not us.</p>
              <VisualSlot page={PAGE_KEY} slot="proof" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A clinic receptionist on a headset greeting a patient at the front desk, with a booking calendar on her monitor"
                caption="In a busy clinic the phone and the patient at the counter compete for the same person. An AI receptionist takes the routine calls, so the front desk can look after the people in the room.">
                <img src="/images/au/ai-receptionist/ai-receptionist-clinic.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A receptionist on a headset at a Melbourne physiotherapy clinic front desk greets a patient, with a colour-block booking calendar on her monitor" />
              </VisualSlot>
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

        {/* ═══ HANDOVER → facts ═══ */}
        <section className="section facts" id="handover">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Handover, designed in</div>
              <h2>How the AI hands a call over to a person</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  A good AI receptionist is judged less by how clever it sounds and more by how well it knows when to
                  stop. Before we build anything, we sit down with you and write the handover rules: which words,
                  situations and callers go straight to a person, who that person is at different times of day, and
                  what happens if nobody picks up.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  When a rule fires, the AI tells the caller it is putting them through and transfers the call live,
                  with a short summary sent to whoever answers, so the caller does not have to repeat themselves. If
                  nobody is free, it takes a detailed message, promises a call back within the time you set, and
                  alerts the right person by SMS, email or your team chat.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  The caller can always ask for a person. We never build a receptionist that traps someone in a loop.
                  That matters for your reputation, and the OAIC’s AI guidance also expects human oversight of what
                  an AI system does.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <div className="factlabel">Typical handover triggers</div>
                  <ul className="trigrows">
                    <li><span className="m">Caller asks for a person</span><span className="n">any wording, any time</span><span className="t">Transfer</span></li>
                    <li><span className="m">Emergency or safety words</span><span className="n">agreed list, tested before launch</span><span className="t">Immediate</span></li>
                    <li><span className="m">Upset or confused caller</span><span className="n">repeated misunderstanding counts</span><span className="t">Transfer</span></li>
                    <li><span className="m">Question with no approved answer</span><span className="n">it never guesses</span><span className="t">Message</span></li>
                    <li><span className="m">Nobody available</span><span className="n">summary plus SMS to the right person</span><span className="t">Call back</span></li>
                  </ul>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-2" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="An office coordinator on a headset taking a transferred call, with the AI call summary on her screen"
                caption="The call arrives with a summary already on screen, so the caller never has to start again.">
                <img src="/images/au/ai-receptionist/ai-receptionist-handover.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of an office coordinator at a Brisbane plumbing business taking a transferred call on her headset, with the AI’s call summary on her screen" />
              </VisualSlot>
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>Human receptionist vs virtual receptionist service vs AI app vs a custom AI receptionist</h2>
                <p className="lead">
                  Four common ways Australian businesses handle the phone. Each is the right answer for someone. This
                  compares them on what actually changes day to day, not on price.
                </p>
              </div>
            </div>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Custom AI receptionist (FactoryJet)</th>
                    <th>Off-the-shelf AI app</th>
                    <th>Virtual receptionist service</th>
                    <th>In-house receptionist</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Coverage hours</th><td className="fj">24/7, many calls at once</td><td>24/7</td><td>Depends on plan</td><td>Business hours, one call at a time</td></tr>
                  <tr><th scope="row">Books into your own system</th><td className="fj">Yes, built for your system</td><td>Only supported apps</td><td>Sometimes, by hand</td><td>Yes</td></tr>
                  <tr><th scope="row">Follows your call rules</th><td className="fj">Designed around them</td><td>Within app settings</td><td>From a script</td><td>Yes, with training</td></tr>
                  <tr><th scope="row">Handover to your team</th><td className="fj">Live transfer with summary</td><td>Basic transfer or message</td><td>Transfer or message</td><td>Walks over or transfers</td></tr>
                  <tr><th scope="row">Control over what it says</th><td className="fj">Full, reviewed with you</td><td>Limited to settings</td><td>Script you supply</td><td>Full</td></tr>
                  <tr><th scope="row">Choice of where call data goes</th><td className="fj">You choose the providers</td><td>Set by the app</td><td>Set by the service</td><td>Your own systems</td></tr>
                  <tr><th scope="row">Who owns the setup</th><td className="fj">You do</td><td>The app provider</td><td>The service provider</td><td>You do</td></tr>
                  <tr><th scope="row">Setup effort for you</th><td className="fj">Workshops, then we build</td><td>Low, do it yourself</td><td>Low</td><td>Hiring and training</td></tr>
                  <tr><th scope="row">Support after launch</th><td className="fj">Same team, ongoing</td><td>Help desk</td><td>Account manager</td><td>Your own management</td></tr>
                  <tr><th scope="row">Human warmth</th><td className="fj">Natural voice, hands to people</td><td>Natural voice</td><td>A real person</td><td>A real person who knows you</td></tr>
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Want to see how the running costs compare? Read our guide:{' '}
              <a href="/blog/ai-voice-agents-vs-human-answering-services-cost-comparison-2026">AI voice agents vs human answering services, a cost comparison</a>.
            </p>
          </div>
        </section>

        {/* ═══ PHOTOBREAK (US template visual, no AU image yet) ═══ */}
        <VisualSlot page={PAGE_KEY} slot="photobreak" kind="illustration" ratio="12:5" className="photobreak"
          subject="AI-generated model: a white desk phone on a long rail of call cards, one orange card lifted out and passed to a small human figure" />

        {/* ═══ HOW WE BUILD IT → process timeline (steps stay openable, as the copy says) ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="head-media">
              <div className="section-head">
                <div className="eyebrow">How we build it</div>
                <h2>How we build your AI receptionist, in eight steps</h2>
                <p className="lead">
                  Every AI receptionist we build follows the same path. It is the difference between an AI voice agent
                  that sounds good in a demo and one your customers can rely on at 7am on a Monday. Open any step to
                  see what happens in it.
                </p>
              </div>
              <VisualSlot page={PAGE_KEY} slot="process" kind="photo" ratio="3:2" captionClassName="figcap"
                subject="A FactoryJet engineer and a clinic practice manager listening to real incoming calls together while she takes notes"
                caption="Step one is listening. We go through a sample of your real calls with you, then map every type of call, what should happen, and where a person takes over. That call map is what you sign off.">
                <img src="/images/au/ai-receptionist/ai-receptionist-listening.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A FactoryJet engineer and an Adelaide vet clinic practice manager share earbuds to listen to real incoming calls while she takes notes" />
              </VisualSlot>
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
            headline={'Missing calls, or answering the same questions all day?'}
            sub={'Tell us about your calls and the system you book into. On a short call with the founder, we will tell you whether an AI receptionist would help, which calls it should take first, and whether a simple app would do the job.'}
            label={'Plan my AI receptionist'}
          />
        </div>

        {/* ═══ WHEN AN APP IS ENOUGH → facts + rule-of-thumb panel ═══ */}
        <section className="section facts" id="app-or-build">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The honest answer</div>
              <h2>When an off-the-shelf AI receptionist app is enough</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  If you are a sole trader or a very small team, and what you mostly need is something that answers,
                  takes the caller’s details and texts you, a self-serve AI phone answering service is often the right
                  call. It is quick to set up, you pay monthly, and you can cancel. There are good Australian ones,
                  several of them built for tradies. We would rather tell you that on a first call than sell you a
                  build you do not need.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  A custom AI receptionist earns its place when the calls depend on your systems and your rules. For
                  example: booking into practice software the apps do not support, applying your own cancellation
                  policy, routing callers by suburb to the right technician, checking an existing matter before a
                  transfer, or covering several sites with different hours and staff.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  It is also the better route when you want control. With an app, the provider decides what the AI
                  can do and where your data goes. With a build, you decide, and the setup is yours to keep. For the
                  wider picture of AI that acts across your business, see our{' '}
                  <a href="/au/ai-agents">AI agent development for Australian businesses</a>. If you are still working
                  out where AI fits at all, start with <a href="/au/ai-consulting">AI consulting in Australia</a>.
                </p></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">A simple rule of thumb</div>
                <ul className="trigrows">
                  <li><span className="m">Take a message and text me</span><span className="n">sole trader, simple calls</span><span className="t">App</span></li>
                  <li><span className="m">Book into Google or Outlook calendar</span><span className="n">if the app supports it</span><span className="t">App first</span></li>
                  <li><span className="m">Book into your job or practice system</span><span className="n">with your job types and rules</span><span className="t">Build</span></li>
                  <li><span className="m">Rules only your business knows</span><span className="n">routing, policies, exceptions</span><span className="t">Build</span></li>
                  <li><span className="m">Several sites or teams</span><span className="n">different hours and handovers</span><span className="t">Build</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PRIVACY ACT + RECORDING → facts + photo + ruled rows ═══ */}
        <section className="section facts" id="rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The Privacy Act, in plain English</div>
              <h2>Telling callers they are talking to AI, recording calls, and handling call data properly</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Every call your AI receptionist takes collects personal information: a name, a number, an address,
                  often a reason for calling that can be sensitive, such as a sore tooth or a family law matter. The
                  Privacy Act 1988 and its Australian Privacy Principles (the APPs) set the rules for how businesses
                  handle that information.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Telling callers it is AI.</b> The Office of the Australian Information Commissioner (OAIC)
                  published guidance on using commercially available AI products. It says public facing AI tools
                  should be clearly identified as AI, and that businesses should update their privacy policies and
                  notices with clear information about how they use AI. Under APP 5, you must also take reasonable
                  steps to let people know you are collecting their information and why. So our greeting says the
                  caller is speaking with an automated assistant.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Recording calls.</b> Call recording in Australia is covered by the federal Telecommunications
                  (Interception and Access) Act and by separate state and territory listening and surveillance device
                  laws, and those state laws are not all the same. The safe, simple practice is the one the OAIC’s
                  health privacy guide spells out: if a call is recorded or monitored, tell the caller at the start of
                  the conversation, so they can end the call or ask not to be recorded. We build that notice into the
                  greeting and set a clear retention period.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <p>
                    <b>Small business.</b> The OAIC says many small businesses under a turnover threshold are exempt from
                    the Privacy Act, but some are covered whatever their size, including health service providers. A
                    small physio, GP or dental practice is covered. We build to the APPs either way.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_OAIC_AI} {...extLink}>OAIC, privacy and commercially available AI products</a>;{' '}
                    <a href={SRC_OAIC_CALLS} {...extLink}>OAIC, guide to health privacy (collecting health information)</a>;{' '}
                    <a href={SRC_OAIC_SMALL} {...extLink}>OAIC, small business</a>. This is general information, not legal advice.
                  </p>
                </div></div>
              </div>
              <VisualSlot page={PAGE_KEY} slot="facts-3" kind="photo" ratio="3:2" className="factphoto" captionClassName="figcap"
                subject="A lawyer reviewing written call summaries on her laptop, with a desk phone beside her"
                caption="Every call the AI handles ends up as a short written summary in the right place. For a law firm, that means a new enquiry arrives with the details a lawyer needs before calling back.">
                <img src="/images/au/ai-receptionist/ai-receptionist-lawfirm.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over-the-shoulder view of a lawyer in a bright Perth office reviewing call summaries on her laptop, with a desk phone beside her" />
              </VisualSlot>
            </div>
            <div className="platlist span-all" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>What we do</h3></div><p className="plat-build">Write the AI disclosure and recording notice into the greeting, set retention periods, choose providers with suitable hosting and no-training terms, and document the data flow for your privacy policy.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>What you keep</h3></div><p className="plat-build">You stay responsible for the personal information you collect. We make that easier with access controls, a record of every call the AI handled, and plain-English notes on where data goes.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>What we do not do</h3></div><p className="plat-build">We are not lawyers and do not give legal sign-off. For health, legal and financial businesses, confirm the detail with your privacy adviser or professional body.</p></div>
            </div>
          </div>
        </section>

        {/* ═══ KEEP YOUR NUMBER → facts + "which one you need" panel ═══ */}
        <section className="section facts" id="phone-line">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Your phone line</div>
              <h2>Keeping your existing number: call diversion or porting</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  Your customers already know your number. It is on your ute, your website, your Google Business
                  Profile and years of old invoices. You do not have to change it to use an AI receptionist, whether
                  it is a mobile, a landline or a 1300 number.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>Call diversion</b> (call forwarding) is the usual route. Your number stays with your current
                  telco, and you divert calls to the AI receptionist. You can divert every call, only calls outside
                  business hours, or only calls that ring out or find the line busy. Most telcos and phone systems let
                  you set these up, and it is easy to switch off.
                </p></div>
                <div className="fact"><div className="sec">§03</div><div>
                  <p>
                    <b>Porting</b> means moving the number itself to a different telco. You only need it if you are
                    changing provider anyway, for example moving to a cloud phone system. The ACMA says you can usually
                    keep your number when you change telco, that your current telco must port it if asked, and that the
                    new telco does not have to accept the request, so check before you sign. Ports of a single local
                    number generally take 8 to 15 days.
                  </p>
                  <p className="au-note">
                    Source: <a href={SRC_ACMA} {...extLink}>ACMA, keep or transfer your phone number</a>.
                  </p>
                </div></div>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Which one you need</div>
                <ul className="trigrows">
                  <li><span className="m">Happy with your telco</span><span className="n">number stays where it is</span><span className="t">Divert</span></li>
                  <li><span className="m">Only after hours or missed calls</span><span className="n">conditional diversion</span><span className="t">Divert</span></li>
                  <li><span className="m">Moving to a new phone system</span><span className="n">the new telco requests the port</span><span className="t">Port</span></li>
                  <li><span className="m">Several numbers or sites</span><span className="n">each can route differently</span><span className="t">Either</span></li>
                  <li><span className="m">Change your number</span><span className="n">never required</span><span className="t">No need</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ INDUSTRIES → capgrid ═══ */}
        <section className="section capabilities" id="industries">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Who we build for</div>
              <h2>AI receptionists for tradies, clinics, dental practices, law firms, real estate and hospitality</h2>
              <p className="lead">
                The same core build, shaped very differently by the calls each industry gets and the rules it works
                under.
              </p>
            </div>
            <div className="capgrid">
              {INDUSTRIES.map((j, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={j.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={INDUSTRY_ICONS[i]} /></svg></div>
                    <VisualSlot page={PAGE_KEY} slot={`capability-${n}`} kind="diagram" ratio="11:4" className="cap-diagram" subject={INDUSTRY_SUBJECTS[i]} />
                    <h3>{j.t}</h3>
                    <p>{j.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ INDUSTRIES, CONTINUED → definition module (image left, copy right) ═══ */}
        <section className="definition" id="more-industries">
          <div>
            <VisualSlot page={PAGE_KEY} slot="definition" kind="photo" ratio="3:2" className="definition-image"
              subject="A dental receptionist greeting an arriving patient face to face while the desk phone stays quiet">
              <img src="/images/au/ai-receptionist/ai-receptionist-dental.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A dental receptionist at a bright Brisbane practice greets an arriving patient face to face while the desk phone stays quiet" />
            </VisualSlot>
          </div>
          <div className="definition-copy">
            <p>
              Not on the list? The same approach works for vets, salons, gyms, accountants, car dealers, NDIS
              providers and aged care admin. If your calls follow a pattern, an AI receptionist can usually take the
              routine ones. For a buyer’s view of the options in this space, read our guide to{' '}
              <a href="/blog/best-ai-receptionist-small-business">the best AI receptionist for small business</a>.
              If you are comparing{' '}
              <a href="/blog/best-ai-agencies-australia-2026">Australian agencies that build voice agents and chatbots</a>,
              see our guide to the best AI agencies in Australia.
            </p>
            <p>
              Health businesses get extra care. Because health service providers are covered by the Privacy Act
              whatever their size, we plan data location, recording notices and retention with you before any
              patient calls reach the system.
            </p>
          </div>
        </section>

        {/* ═══ ENGAGEMENT SHAPES + DEMAND → ruled rows + split ═══ */}
        <section className="section platforms" id="engagement">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Scope, not packages</div>
                <h2>Three ways to work with us on an AI receptionist</h2>
              </div>
              <p>
                Every project is quoted for your scope, with a fixed price for the build and ongoing support shown
                separately. These are the shapes it usually takes.
              </p>
            </div>
            <div className="platlist" role="list">
              <div className="plat plat-2col" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Focused first build.</h3></div><p className="plat-build">Your most common call types, one booking or job system, one number, missed and after-hours calls first. The fastest way to prove it on real callers.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Full front desk.</h3></div><p className="plat-build">All routine call types, several integrations (job or practice system, CRM, team chat), multiple numbers or sites, and detailed handover rules for each team.</p></div>
              <div className="plat plat-2col" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Build plus support.</h3></div><p className="plat-build">Either of the above with ongoing support: transcript reviews, new call types, answer updates, and keeping pace with changes to the AI models and providers.</p></div>
            </div>
            <div className="au-split">
              <div>
                <p>
                  What moves the scope: the number of call types, how many systems it connects to, how many sites and
                  numbers, your expected call volume (which sets the voice and AI usage you pay providers directly), and
                  the level of support you want. We explain every line of the quote on the call.
                </p>
                <ModalCTAButton label="Plan my AI receptionist" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="demand">
                <div className="demand-head"><span>Australia · Monthly Search Demand</span><b>DataForSEO</b></div>
                <ul>
                  {[
                    { kw: 'ai receptionist', v: '880', w: '100%', kd: 'The head term' },
                    { kw: 'virtual receptionist', v: '590', w: '67%', kd: 'Human and AI answering' },
                    { kw: 'ai receptionist australia', v: '390', w: '44%', kd: 'Buyer intent, Australia' },
                    { kw: 'virtual receptionist australia', v: '260', w: '30%', kd: 'Comparing services' },
                    { kw: 'ai voice agent', v: '210', w: '24%', kd: 'The technology behind it' },
                    { kw: 'ai phone answering', v: '140', w: '16%', kd: 'Missed-call problem' },
                    { kw: 'medical virtual receptionist', v: '140', w: '16%', kd: 'Clinics and practices' },
                    { kw: 'ai receptionist for small business', v: '70', w: '8%', kd: 'Small firms comparing options' },
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
                <h2>Australian AI receptionist and virtual receptionist providers worth knowing</h2>
              </div>
              <p>
                We are one option, not the only one. These Australian providers show up when people search for an AI
                receptionist in Australia or ask AI assistants for one. They range from self-serve apps to human
                answering companies to managed services. Each note is based on what the company says on its own
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
              Providers named from live Australian search results and AI assistant answers for AI receptionist queries, September 2026. Notes reflect each company’s own website on 25 September 2026. Listing is not endorsement.
            </p>
            <div className="au-panel au-panel-wide">
              <div className="eyebrow">Questions to ask any provider, including us</div>
              <ol className="au-numlist">
                <li><span><b>Can I ring it right now?</b> The best test of an AI receptionist is calling it with a hard question and a noisy background.</span></li>
                <li><span><b>Does it write into my system, or just send me a message?</b> Ask to see a booking land in your actual job or practice software.</span></li>
                <li><span><b>What exactly triggers a handover?</b> Get the list in writing, and test that asking for a person works first time.</span></li>
                <li><span><b>Where does call data go, and is it used for training?</b> Ask for the providers by name and where they host data.</span></li>
                <li><span><b>Who changes the answers when my business changes?</b> You, them, or nobody. Know before you sign.</span></li>
                <li><span><b>What do I own if I leave?</b> Call flows, prompts, recordings and transcripts. Ask how you get them back.</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Beyond the phone</div>
              <h2>The rest of what we build for Australian businesses</h2>
              <p>
                An AI receptionist is often the first AI system a business trusts. These are the natural next steps,
                built by the same team.
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

        {/* ═══ FAQ (Family A accordion; same FAQ_ITEMS array as the FAQPage JSON-LD) ═══ */}
        <AuFaq
          categories={FAQ_CATEGORIES}
          items={FAQ_ITEMS}
          heading="AI receptionist questions Australian business owners actually ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light, US finalcta) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Stop missing calls, without losing the personal touch</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about the calls
                you get, the system you book into, and whether a custom AI receptionist or a simple app is the right fit.
                No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="Plan my AI receptionist" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ai-agents">See AI agent development</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
