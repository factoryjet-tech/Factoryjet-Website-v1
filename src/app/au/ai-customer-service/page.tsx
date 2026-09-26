import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../au-service.css';

const CANONICAL = 'https://factoryjet.com/au/ai-customer-service';
const UPDATED = '2026-09-26';
const TITLE = 'AI Customer Service Australia | Chat & Email | FactoryJet';
const H1 = 'AI Customer Service for Australian Support Teams: Faster Answers, After-Hours Cover, People on the Hard Cases';
const DESCRIPTION =
  'AI customer service for Australian support teams. Agents answer chat and email, draft replies, triage Zendesk or Gorgias tickets and hand hard cases to people.';

/* Design tokens, copied by value from ../au-service.css so inline styles stay
   on-system without CSS custom property references in this file. */
const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#F05A28',
  green: '#047857',
  small: '#B23E13',
  fm: "'Geist Mono',monospace",
  fd: "'Plus Jakarta Sans',sans-serif",
};

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. Never
   hand-copy a second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'AI Customer Service', url: CANONICAL },
];

/* ─── External sources, all fetch-verified 2026-09-26 ───────────────── */
// OAIC, guidance on privacy and the use of commercially available AI products
// (published 21 Oct 2024, updated 17 Jan 2025): "ensure that any public facing
// AI tools (such as chatbots) are clearly identified as such to users";
// "update their privacy policies and notifications with clear and transparent
// information about their use of AI"; "organisations do not enter personal
// information, and particularly sensitive information, into publicly available
// generative AI tools"; a human should verify accuracy and can overturn decisions.
const SRC_OAIC_AI =
  'https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/guidance-on-privacy-and-the-use-of-commercially-available-ai-products';
// OAIC, APP guidelines chapter 8: "Before an APP entity discloses personal
// information to an overseas recipient, the entity must take such steps as are
// reasonable in the circumstances to ensure that the overseas recipient does not
// breach the APPs." s 16C: the entity stays accountable for the recipient.
const SRC_APP8 =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information';
// OAIC, APP quick reference (APP 5 notification, APP 10 quality, APP 11 security).
const SRC_APP_QR =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-quick-reference';
// OAIC, consultation on automated decision making transparency: "From 10
// December 2026, APP entities that use personal information in ADM with the
// potential to affect rights or interests will be required to provide
// information in their privacy policies about the kinds of personal information
// used and the kinds of decisions made using ADM."
const SRC_OAIC_ADM =
  'https://www.oaic.gov.au/engage-with-us/consultations/consultation-on-guidance-for-transparency-in-automated-decision-making';
// OAIC, small business: turnover threshold exemption; health service providers
// and some other categories covered regardless of size.
const SRC_OAIC_SMALL = 'https://www.oaic.gov.au/privacy/privacy-for-organisations/small-business';
// Treasury, Review of AI and the Australian Consumer Law, final report, October
// 2025 (pp. 10 to 11): the ACL misleading conduct prohibitions "apply regardless
// of the technology"; misleading conduct "can be contravened without fault";
// "the onus is on businesses to ensure the technologies they use are
// fit-for-purpose"; in the chatbot example the business using it "would be
// liable for the misleading conduct".
const SRC_TREASURY_ACL = 'https://treasury.gov.au/sites/default/files/2025-10/p2025-702329-fr.pdf';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',   label: 'AI customer service basics' },
  { key: 'choosing', label: 'Chatbots, ChatGPT & choosing' },
  { key: 'build',    label: 'Setup, integrations & cost' },
  { key: 'rules',    label: 'Privacy, disclosure & handover' },
  { key: 'people',   label: 'Your team & ownership' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What is AI customer service?',
    answer: 'AI customer service means using AI to help answer customer questions and move support work along. In practice that is an AI agent that replies to chat and email, drafts answers for your staff to check, sorts and tags incoming tickets, and passes anything tricky to a person. It works from your own help articles, policies and order data, not from whatever the AI happens to know.' },
  { category: 'basics', question: 'How can AI be used for customer service?',
    answer: 'Four ways cover most of it. It answers routine questions on chat and email, such as order status, delivery times, returns and account changes. It drafts replies that your team approves or edits. It triages, meaning it reads each ticket, tags it, sets urgency and routes it to the right person. And it hands over, passing a case to a human with a summary so the customer never repeats themselves.' },
  { category: 'basics', question: 'Are there AI customer service agents?',
    answer: 'Yes. An AI customer service agent is software that holds a written conversation with a customer and can take actions, like looking up an order, starting a return or updating an address, within rules you set. Helpdesks such as Zendesk, Freshdesk, Gorgias, HubSpot and Intercom now offer their own. We build custom ones when your rules, systems or data need more than the built-in version gives you.' },
  { category: 'basics', question: 'Is AI customer service good?',
    answer: 'It is good at fast, consistent answers to questions that have a clear right answer, and at covering nights, weekends and public holidays. It is poor at judgement calls, upset customers and anything unusual. Customers get frustrated when it blocks them from a person or makes things up. Built with approved answers, a clear handover and a visible way to reach your team, it is well received.' },
  { category: 'basics', question: 'How are AI chatbots used in customer service?',
    answer: 'Most Australian businesses start with a chatbot on the website or in the online store that answers questions from their help centre, checks order status and collects details before a person steps in. Newer AI agents also work inside email and the helpdesk itself, reading tickets and preparing replies. The chatbot is the front door; the useful work happens in the systems behind it.' },
  { category: 'basics', question: 'Which companies are using AI chatbots for customer service?',
    answer: 'Many, from large banks, telcos and airlines to small online stores. Helpdesk vendors publish long lists of customers using their AI agents. What matters more for you is which of your questions suit AI. Online retailers, subscription businesses, software companies, property managers and service businesses with high volumes of repeat questions tend to get the most from it.' },
  { category: 'basics', question: 'Can AI do customer service calls?',
    answer: 'Yes, with voice AI. That is a different build from chat and email, with its own rules for recordings, accents and live call transfer. For phone calls to a small business front desk, see our AI receptionist page. For support teams, we can add a voice channel to the same AI agent later, so phone, chat and email share one set of approved answers and one handover process.' },

  // ── Choosing ──
  { category: 'choosing', question: 'Can I use ChatGPT for customer service?',
    answer: 'You can use the same kind of language model, but not by pasting customer messages into the public ChatGPT app. The OAIC recommends businesses do not enter personal information, and especially sensitive information, into publicly available generative AI tools. A proper setup uses business accounts with suitable data terms, connects the model to your approved content, and keeps customer data inside systems you control.' },
  { category: 'choosing', question: 'Can I add ChatGPT to my website?',
    answer: 'Yes. A chat widget on your site can use a model from OpenAI, Anthropic, Google or others through their business APIs. The model is the easy part. The work is limiting it to your approved answers, connecting it to order and account data, stopping it from promising things you do not offer, labelling it clearly as AI, and giving customers a quick path to a person.' },
  { category: 'choosing', question: 'Which is better, ChatGPT or a chatbot?',
    answer: 'They do different jobs. ChatGPT is a general assistant that knows a little about everything. A customer service chatbot should know a lot about one thing: your business. Older chatbots followed fixed scripts and broke on anything unexpected. Modern AI chatbots use a language model like the one behind ChatGPT, but are fenced in by your content, your rules and your systems. That combination is what you want.' },
  { category: 'choosing', question: 'Which AI chatbot is best for business?',
    answer: 'The one already built into your helpdesk is often the best place to start, because it knows your tickets and help centre. Gorgias suits many Shopify stores, Zendesk and Freshdesk suit larger support teams, and HubSpot suits businesses whose customer records live there. A custom build is best when you need several systems joined up, strict rules, or control over where data goes.' },
  { category: 'choosing', question: 'What is the best AI chatbot for a website?',
    answer: 'For a small site with simple questions, a chatbot builder app you connect to your help pages is usually enough and quick to try. For an online store, pick one that can read live order data. For a business with accounts, bookings or regulated information, you want a chatbot that checks who the customer is before sharing anything, and that hands over cleanly. Test any option with your twenty hardest real questions.' },
  { category: 'choosing', question: 'How do I set up an AI chatbot for my business?',
    answer: 'Start with your last few hundred tickets or chats and sort them by type. Pick the three to five types that are frequent and have a clear right answer. Write or tidy the approved answers. Choose the tool, connect it to your helpdesk and order or booking system, set the handover rules, test it hard with real questions, then launch on one channel and widen it as the results hold up.' },
  { category: 'choosing', question: 'Should we use our helpdesk’s built-in AI or get one built?',
    answer: 'Use the built-in AI when your questions are standard and the answers live in your help centre. Get one built when answers depend on systems the helpdesk cannot see, such as an ERP, a booking platform or a custom portal, when you need rules the settings cannot express, or when you want to choose the model and where data is stored. Many teams run both: built-in for simple cases, custom for the rest.' },

  // ── Build ──
  { category: 'build', question: 'How to create an AI agent for customer service?',
    answer: 'Five steps. Map your ticket types and pick the first few to automate. Gather the approved answers and policies it may use. Connect the systems it needs to read or update, such as orders, returns and customer records. Write the handover and never-do rules. Then test it against real past tickets, measure how often it gets the answer right, and fix gaps before any customer sees it.' },
  { category: 'build', question: 'Can it connect to Zendesk, Freshdesk, Gorgias, HubSpot or Shopify?',
    answer: 'Yes. All five have documented APIs, which are the published ways other software can read and write their data. We use them to read tickets and conversations, post draft or final replies, add tags and internal notes, assign tickets to people, and read order, customer and return details from Shopify or your store platform. If a system has no usable API, we tell you before the build starts.' },
  { category: 'build', question: 'How much does AI customer service cost in Australia?',
    answer: 'It depends on scope, not a rate card. The main drivers are how many ticket types it handles, how many systems it connects to, how many channels (chat, email, social, voice), your monthly conversation volume, which sets the usage you pay AI providers directly, and the support you want after launch. Our AI cost guide lists typical Australian market ranges with sources. We quote a fixed price for the build after a free first call.' },
  { category: 'build', question: 'How much does it cost to hire an AI call centre agent?',
    answer: 'An AI call centre agent is usually priced as setup work plus usage, and sometimes a monthly platform fee, rather than a wage. Platform vendors charge per conversation, per resolution or per seat, and a custom build adds a one-off design and integration cost. Compare total cost against the volume it genuinely resolves, not the demo. Our AI cost guide for Australia shows current market ranges with sources.' },
  { category: 'build', question: 'How long does it take to set up AI customer service?',
    answer: 'A focused first version, covering your most common ticket types on one channel and connected to your helpdesk and store or booking system, usually takes a few weeks from the first workshop to live customers. More channels, languages or systems take longer. We run it in draft mode first, where it prepares replies for staff to approve, so you see real quality before it answers anyone on its own.' },
  { category: 'build', question: 'Can it answer in languages other than English?',
    answer: 'Yes. Current language models read and write most major languages, including Mandarin, Arabic, Vietnamese and Cantonese. The catch is your approved answers: they are written in English, so we test translated answers carefully and flag any topic, such as returns rules or health information, where a person should review the reply. Handover still goes to your team with an English summary.' },

  // ── Rules ──
  { category: 'rules', question: 'Does the Privacy Act apply to customer chats handled by AI?',
    answer: 'If your business is covered by the Privacy Act 1988, yes. Chats and emails contain personal information, and the Australian Privacy Principles apply however it is collected. The OAIC says many small businesses under a turnover threshold are exempt, but some are covered regardless of size, including health service providers. We build to the APPs either way, because customers expect it and it keeps your options open.' },
  { category: 'rules', question: 'Do we have to tell customers they are talking to AI?',
    answer: 'You should, and we build it in. The OAIC says public facing AI tools such as chatbots should be clearly identified as AI, and businesses should update their privacy policies and notices to explain how they use it. So the chat window labels the assistant as AI, the first message says so, and your privacy policy describes what the AI does with customer information.' },
  { category: 'rules', question: 'How does the AI hand a conversation over to a person?',
    answer: 'We agree the triggers first: the customer asks for a person, a complaint or refund dispute, an upset tone, a high-value order, a safety or legal issue, or a question with no approved answer. When one fires, the AI tells the customer a person will take over, creates or updates the ticket with a short summary and the right tags, and assigns it to the right queue. Your staff pick it up with the whole history on screen.' },
  { category: 'rules', question: 'What happens if the AI gives a customer a wrong answer?',
    answer: 'Your business is responsible for it. Treasury’s 2025 review of AI and the Australian Consumer Law notes misleading conduct can be contravened without fault, and the onus is on businesses to make sure the technology they use is fit for purpose. So we limit the AI to approved answers, keep refund and warranty wording exact, log every reply, and review mistakes weekly so they get fixed at the source.' },
  { category: 'rules', question: 'Where is the conversation data stored?',
    answer: 'In your helpdesk, plus whichever AI provider processes each message. We choose providers with you, favour business terms that stop your data being used to train their models, and use Australian hosting where it is offered and it matters to you. If data goes overseas, APP 8 means you must take reasonable steps to protect it and you stay accountable, so we document every provider for your privacy policy.' },
  { category: 'rules', question: 'What should customers not share with an AI chatbot?',
    answer: 'Full card numbers, passwords, one-time codes and government ID numbers should never go into a chat, with AI or without. We set the chatbot to ask for the minimum it needs, mask card and ID patterns if a customer types them anyway, and move identity checks to a secure step. For health or financial topics, it collects the basics and hands the rest to a person.' },

  // ── People ──
  { category: 'people', question: 'Is AI replacing customer service?',
    answer: 'Not in the way we build it. AI takes the repeat questions and the first draft of routine replies, so your team spends its time on complaints, complex cases and customers who need a person. The businesses that get this right use AI to answer faster and cover outside business hours, and keep people on the conversations that decide whether a customer stays. Your team sets the rules the AI follows.' },
  { category: 'people', question: 'Will our support team need training?',
    answer: 'A little. Staff learn to review and approve AI drafts, spot and report wrong answers, update the approved content, and pick up handovers. We run that training as part of the launch and write a short playbook. The aim is that the AI takes the repetitive part of the job, and the summary on each handover saves staff reading long threads.' },
  { category: 'people', question: 'Do we own the AI agent you build?',
    answer: 'Yes. The prompts, approved answers, workflows, integration code and documentation are yours. You hold the accounts with the helpdesk and AI providers and pay them directly, with no markup through us. If you later bring support in-house or move to another company, the agent keeps running and you take everything with you. We design it, build it, support it and hand you the keys.' },
];

/* ─── Named options in the Australian market (open self-disclosure, ItemList).
       Each note is based on the company’s own website, fetched 2026-09-26. ── */
const PROVIDERS: { name: string; note: string }[] = [
  { name: 'FactoryJet', note: 'That is us. We design, build, integrate and support custom AI customer service agents around your ticket types, helpdesk, store or booking system and handover rules. Founder involved on every project, and you own what we build.' },
  { name: 'Zendesk AI agents', note: 'Built into Zendesk. It says its AI agents work across social, web, mobile, voice and email, resolve multi-step requests, and route issues to the right team with full context.' },
  { name: 'Fin by Intercom', note: 'An AI customer agent from Intercom. It says it is natively integrated with Intercom and works with other helpdesks including Salesforce, HubSpot and Freshdesk.' },
  { name: 'Gorgias AI Agent', note: 'Built for ecommerce support. It lists Shopify, BigCommerce, Magento and WooCommerce among supported store platforms, with integrations such as Loop Returns and Recharge.' },
  { name: 'Freshdesk (Freddy AI)', note: 'Freshworks’ helpdesk AI. It says its AI agents understand customer intent and take action to resolve, while its Copilot recommends next steps for human agents.' },
  { name: 'HubSpot customer agent', note: 'Part of HubSpot. It says the agent handles enquiries across chat, email, voice and more, takes action in the CRM, and hands off to your team with full context.' },
  { name: 'Lorikeet', note: 'An AI customer support platform with an Australian Business Number, aimed at fintech and healthtech teams. It says it resolves cases end to end across phone, SMS, chat, email and WhatsApp and integrates with Zendesk and Salesforce.' },
  { name: 'Aivy', note: 'An AI automation agency in Kensington, Victoria, that designs, trains and launches custom chatbots for Australian businesses across web, WhatsApp, Messenger and voice.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only. ───────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'AI Customer Service Australia',
      serviceType: 'AI customer service agent and AI chatbot design, build, helpdesk integration and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Custom AI customer service agents for Australian support teams. They answer chat and email, draft replies for staff, triage tickets in Zendesk, Freshdesk, Gorgias or HubSpot, read order data from Shopify and other platforms, and hand hard cases to people with a summary. Built with Privacy Act transparency, supported after launch and owned by the client.',
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
      name: 'AI customer service options for Australian businesses',
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
      'AI customer service agents for Australian support teams: chat and email answers, draft replies, ticket triage and clean handover to people. Built around your helpdesk, supported after launch, owned by you.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/images/au/ai-customer-service/ai-customer-service-og.webp', width: 1200, height: 630, alt: 'AI customer service Australia: a support lead at a Melbourne online store reviewing AI chat replies on her monitor' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* The four jobs the AI does. */
const JOBS: { t: string; d: string }[] = [
  { t: 'Answers', d: 'Replies on web chat, in-app chat and email to questions with a clear right answer: order status, delivery times, returns steps, account changes, opening hours, product details. It uses only your approved content and live data it is allowed to read.' },
  { t: 'Drafts', d: 'Writes a suggested reply inside your helpdesk for a person to approve, edit or bin. This is where most teams start, because staff stay in control while replies get faster and more consistent.' },
  { t: 'Triages', d: 'Reads every new ticket, works out what it is about and how urgent it is, adds tags, spots duplicates and angry customers, and routes it to the right queue or person before anyone opens it.' },
  { t: 'Hands over', d: 'Passes the conversation to a person when a rule says so, with a short summary, the order or account details and what has been tried, so the customer never has to explain it twice.' },
];

/* "Which option fits you" self-check. Rendered as <details>, no client component. */
const FIT_CHECK: { q: string; a: string; verdict: string }[] = [
  { q: 'We get a few dozen questions a week, mostly the same five, and our help pages answer them.', verdict: 'Chatbot builder app', a: 'A chatbot builder app connected to your help pages is probably enough. Try one, read the transcripts for a fortnight, and fix your help content where it struggles. You do not need a custom build yet, and we will say so if you call us.' },
  { q: 'We already use Zendesk, Freshdesk, Gorgias, HubSpot or Intercom.', verdict: 'Try the built-in AI first', a: 'Switch on your helpdesk’s own AI agent and test it on real tickets. If it only half fits, because answers depend on another system or on rules its settings cannot express, a custom agent working alongside it usually closes the gap.' },
  { q: 'Answers depend on our ERP, booking platform, customer portal or warehouse system.', verdict: 'Custom build', a: 'Built-in AI can only see what your helpdesk sees. When the answer lives in another system, the agent needs integrations built for that system, with your rules on what it may read and change.' },
  { q: 'We are in health, finance, insurance or another regulated field.', verdict: 'Custom build, privacy first', a: 'You need control over which AI providers see customer data, where it is stored, what the AI must never say, and a record of every reply. A build lets you decide and document all of that.' },
  { q: 'Most of our tickets are complaints, disputes or one-off cases.', verdict: 'Keep people in front', a: 'AI should draft and triage here, not answer on its own. Use it to summarise long threads and prepare replies for your team, and keep the customer talking to a person.' },
];

/* How we build it. */
const BUILD_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Sort your tickets', d: 'We pull a sample of recent tickets and chats and sort them into types with your team lead: where is my order, returns, product questions, account changes, complaints, and the odd ones. Volume and difficulty for each type decide what the AI does first.' },
  { n: '02', t: 'Agree the rules', d: 'For each ticket type we agree what the AI may do on its own, what it may only draft, what it must never do, and when it hands over. We also write the AI disclosure line and the customer-facing wording for handover.' },
  { n: '03', t: 'Fix the source content', d: 'The AI is only as good as the answers it draws on. We tidy your help articles, returns policy and macros with you, remove contradictions, and write approved answers for the gaps. Refund and warranty wording is matched to your actual policy.' },
  { n: '04', t: 'Connect your systems', d: 'We build the integrations to your helpdesk, store or booking platform, CRM and team chat, with the minimum access each step needs. The AI can read an order status without being able to issue a refund, unless you decide otherwise.' },
  { n: '05', t: 'Test on real past tickets', d: 'We replay hundreds of your past tickets through the agent and score each answer against what your best staff member would have said. Wrong or risky answers go back to steps 2 and 3 before any customer sees it.' },
  { n: '06', t: 'Launch in draft mode', d: 'The agent writes replies inside your helpdesk for staff to approve. Your team sees exactly how it performs on live tickets, and approval rates tell us which ticket types are ready to answer on their own.' },
  { n: '07', t: 'Go live in stages', d: 'Ticket types that pass move to live answers, usually starting with chat after hours. Everything else stays in draft or with people. Nothing changes overnight unless you decide it.' },
  { n: '08', t: 'Review and support', d: 'After launch we review transcripts, handovers and customer ratings with you, fix answers at the source, add new ticket types, and keep it working as your policies, systems and the AI models change.' },
];

/* Helpdesk and platform integration notes. */
const INTEGRATIONS: { sys: string; reads: string; does: string }[] = [
  { sys: 'Zendesk', reads: 'Tickets, help centre articles, macros, customer and organisation records', does: 'Drafts replies or internal notes, tags and prioritises, assigns to groups, answers on messaging and email' },
  { sys: 'Freshdesk', reads: 'Tickets, solution articles, canned responses, contacts', does: 'Drafts replies, sets priority and type, routes to groups, adds private notes with summaries' },
  { sys: 'Gorgias', reads: 'Tickets across chat, email and social, macros, linked Shopify customer and order data', does: 'Answers where-is-my-order and returns questions, drafts replies, tags, routes to the right view' },
  { sys: 'HubSpot', reads: 'Tickets, conversations inbox, knowledge base, contacts, deals', does: 'Drafts replies, updates ticket properties, logs activity on the contact, hands off with context' },
  { sys: 'Shopify', reads: 'Orders, fulfilments and tracking, customers, products, returns', does: 'Answers order and delivery questions, starts returns within your rules, flags high-value orders for a person' },
  { sys: 'Intercom', reads: 'Conversations, help centre, user attributes', does: 'Works alongside Fin or on its own for cases that need your other systems' },
];

const SEVEN_THINGS: { t: string; d: string }[] = [
  { t: 'Label it as AI.', d: 'The chat window and first message say it is an AI assistant, as the OAIC expects.' },
  { t: 'Give it approved answers only.', d: 'No free-styling on refunds, warranties, prices, delivery promises or anything legal.' },
  { t: 'Make the human exit obvious.', d: 'Typing “person” or “agent” works first time, every time.' },
  { t: 'Start in draft mode.', d: 'Let staff approve replies before the AI answers anyone alone.' },
  { t: 'Check identity before sharing.', d: 'Order and account details only after the customer is verified.' },
  { t: 'Know where the data goes.', d: 'Name every AI provider, where it hosts data, and whether it trains on your chats.' },
  { t: 'Review transcripts every week.', d: 'Fix wrong answers at the source content, not with one-off patches.' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/ai-receptionist', t: 'AI receptionist', d: 'For phone calls to a small business front desk: answers 24/7, books jobs and appointments, and hands urgent calls to your team.' },
  { href: '/au/ai-agents', t: 'AI agent development', d: 'AI agents for back-office work: following up quotes, chasing invoices, processing orders and updating systems.' },
  { href: '/au/ai-development', t: 'AI development and integration', d: 'AI built into your CRM, ERP, portal or website, for work that goes beyond support.' },
  { href: '/au/shopify-development', t: 'Shopify development', d: 'Shopify and Shopify Plus stores built and supported by the same team, with support tooling wired in from day one.' },
  { href: '/au/ai-consulting', t: 'AI consulting', d: 'Not sure support is the right place to start? A short assessment of where AI will actually pay off.' },
  { href: '/au', t: 'FactoryJet Australia', d: 'Everything we build for Australian businesses: ecommerce, websites, AI agents and AI search.' },
];

export default function AiCustomerServiceAUPage() {
  return (
    <>
      <script id="ld-au-ai-customer-service" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader locale="au" logoHref="/au" />
      <div className="au-svc">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative', paddingTop: 36 }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />AI Customer Service Australia</span>
                  <span className="chip">Chat, Email & Helpdesk</span>
                  <span className="chip">Built, Supported, Yours</span>
                </div>
                <h1 style={{ fontSize: 'clamp(2rem, 3.6vw, 2.85rem)' }}>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet builds AI customer service agents for Australian support teams. Yours answers chat and
                  email from your approved content, drafts replies for staff to check, triages tickets in Zendesk,
                  Freshdesk, Gorgias or HubSpot, reads order data from Shopify, and hands complaints and complex cases
                  to a person with a summary. We build it around your helpdesk, support it after launch, and you own it.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />26 September 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="au" source="au_ai_customer_service_hero" submitLabel="Plan my AI customer service" />
                </div>
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-customer-service/ai-customer-service-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="Over the shoulder of a support lead at a Melbourne online homewares store reviewing AI chat replies on her monitor, with the warehouse shelves beyond the office window" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What it does on every ticket</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Answers routine questions</div><div className="scorecard-note">chat and email, day and night</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>24/7</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Drafts and triages the rest</div><div className="scorecard-note">inside your existing helpdesk</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Draft</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Hands over the hard cases</div><div className="scorecard-note">complaints, disputes, upset customers</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>To a person</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What is AI customer service, and how do Australian businesses use it?</span>
              <p>
                AI customer service uses AI agents to answer customer chats and emails, draft replies for staff, sort
                and route tickets, and hand complex or sensitive cases to a person. Australian businesses use it for
                faster answers and cover outside business hours, with their own team handling complaints, disputes and
                anything that needs judgement.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use a lot</span>
              <p>
                An <b>AI agent</b> is AI that holds a conversation and can take actions, such as looking up an order,
                within rules you set. <b>Triage</b> means reading each ticket, working out what it is and how urgent,
                and sending it to the right place. A <b>helpdesk</b> is the software your team answers customers in,
                such as Zendesk, Freshdesk, Gorgias or HubSpot.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Almost every result you find for AI customer service is a software vendor selling its own AI agent. Those
                products are good, and one of them may be all you need. What they rarely tell you is how to decide,
                what to set up before customers see it, or what Australian privacy and consumer law expect of you. This
                page covers all three, and explains what we build when the built-in option is not enough.
            </p>
          </div>
        </section>

        {/* ═══ 3. NOT THE RECEPTIONIST (distinct scope, cross-link) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="col-6040">
              <div className="card card-top-orange">
                <span className="eyebrow">This page vs our AI receptionist page</span>
                <h2 style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)', marginTop: 10 }}>AI customer service is for support teams. An AI receptionist is for the phone.</h2>
                <p className="mt-4">
                  This page is about written support at scale: chat, email, social messages and the tickets behind
                  them, inside a helpdesk, often for an online store, software business or service company with a
                  support team. If what you need is someone to answer your business phone, book jobs and take messages
                  while you are on the tools or with a patient, read our{' '}
                  <a href="/au/ai-receptionist">AI receptionist for Australian businesses</a> page instead.
                </p>
              </div>
              <div className="card">
                <span className="eyebrow">Quick guide</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Missed calls, bookings, front desk</div><div className="scorecard-note">tradies, clinics, law firms</div></div><div className="scorecard-val" style={{ fontSize: 14 }}><a href="/au/ai-receptionist">Receptionist</a></div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Chat, email and helpdesk tickets</div><div className="scorecard-note">online stores, SaaS, service teams</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>This page</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Back-office work across systems</div><div className="scorecard-note">quotes, invoices, orders</div></div><div className="scorecard-val" style={{ fontSize: 14 }}><a href="/au/ai-agents">AI agents</a></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 4. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
                { v: 'Say so', t: 'public facing AI tools such as chatbots should be clearly identified as AI', s: 'OAIC, AI products guidance', u: SRC_OAIC_AI },
                { v: 'Still yours', t: 'accountability for customer data you send to an overseas AI provider', s: 'OAIC, APP 8 guidelines', u: SRC_APP8 },
                { v: 'No fault', t: 'needed for misleading conduct, so a wrong AI answer is still the business’s answer', s: 'Treasury, AI and the ACL, 2025', u: SRC_TREASURY_ACL },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...(r.u.startsWith('http') ? extLink : {})} style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 5. FOUR JOBS + WHAT STAYS WITH PEOPLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">What an AI customer service agent actually does</span>
              <h2>Four jobs: answer, draft, triage and hand over</h2>
              <p className="lead mt-4">
                A common mistake is switching on the first job for every ticket on day one. The teams that do well
                treat these as four separate jobs, switch them on in order, and decide for each
                ticket type which jobs the AI is trusted with.
              </p>
            </div>
            <ul className="col-2 mt-10" style={{ gap: 16 }}>
              {JOBS.map((j, i) => (
                <li key={j.t} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 30 }}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{j.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{j.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="col-6040 mt-12">
              <div className="card card-top-orange">
                <span className="eyebrow">Good fit for AI</span>
                <ul className="scope-list mt-4">
                  <li><b>Where is my order.</b> Tracking, delivery windows and delays, read live from your store and courier data.</li>
                  <li><b>Returns and exchanges.</b> Explaining your policy and starting a return within rules you set.</li>
                  <li><b>Product and service questions.</b> Sizes, compatibility, stock, what is included, answered from approved content.</li>
                  <li><b>Account admin.</b> Address changes, subscription pauses, password reset links, after the customer is verified.</li>
                  <li><b>Ticket triage.</b> Tagging, urgency, language, sentiment and routing for every ticket, including the ones people answer.</li>
                  <li><b>Summaries.</b> A three-line summary on long threads so staff can pick them up fast.</li>
                </ul>
              </div>
              <div className="card">
                <span className="eyebrow">Keep with a person</span>
                <ul className="scope-list mt-4">
                  <li><b>Complaints.</b> People want to be heard by a person, and they should be.</li>
                  <li><b>Refund disputes and consumer guarantee claims.</b> The AI can collect the details; a person decides.</li>
                  <li><b>Anything clinical, legal or financial advice.</b> Out of scope, always.</li>
                  <li><b>Safety issues and vulnerable customers.</b> Spot the signs, hand over at once.</li>
                  <li><b>Your biggest accounts.</b> Key customers can go straight to a named person.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. FIT CHECK (interactive, <details>) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Which option fits you?</span>
                <h2>A 30-second check: chatbot app, your helpdesk’s AI, or a custom AI agent</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Tap the line that sounds most like your support team. The answer is honest, even when it is not us.
                </p>
                <div className="card mt-6" style={{ padding: '4px 20px' }}>
                  {FIT_CHECK.map((f) => (
                    <details key={f.q}>
                      <summary style={{ gap: 16, textAlign: 'left' }}>{f.q}</summary>
                      <div style={{ paddingBottom: 18 }}>
                        <span style={{ fontFamily: T.fm, fontSize: 10, background: T.small, color: '#fff', borderRadius: 999, padding: '3px 9px', letterSpacing: '.06em' }}>{f.verdict}</span>
                        <p style={{ marginTop: 10 }}>{f.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-customer-service/ai-customer-service-evening.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a customer on her sofa in a Sydney apartment at dusk, chatting with an online store’s AI assistant on her phone, a parcel on the coffee table" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Customers ask questions when it suits them, often in the evening. An AI agent answers the routine
                    ones straight away and leaves the rest ready for your team in the morning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 7. INTEGRATIONS TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">Works inside the tools you already use</span>
            <h2 style={{ maxWidth: 820 }}>Zendesk, Freshdesk, Gorgias, HubSpot, Shopify and Intercom: what the AI reads and what it does</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Your team keeps working in the same helpdesk. The AI agent sits inside it, through each product’s
              published API, with only the access each step needs. Here is what that typically covers.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table" style={{ minWidth: 760 }}>
                <thead>
                  <tr>
                    <th>System</th>
                    <th>What the AI reads</th>
                    <th className="fj">What the AI can do (your rules)</th>
                  </tr>
                </thead>
                <tbody>
                  {INTEGRATIONS.map((r) => (
                    <tr key={r.sys}>
                      <td className="feat">{r.sys}</td>
                      <td>{r.reads}</td>
                      <td className="fj">{r.does}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              Also common: WooCommerce, BigCommerce, Maropost (formerly Neto), Salesforce, Xero and MYOB for invoice questions,
              Slack or Microsoft Teams for alerts, and Australia Post or courier tracking. If a system has no usable API,
              we tell you before the build starts.
            </p>
          </div>
        </section>

        {/* ═══ 8. HANDOVER ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Handover, designed in</span>
                <h2>How the AI hands a conversation to a person</h2>
                <div className="stack mt-6">
                  <p>
                    The best AI customer service is judged by how well it knows when to stop. Before we build, we write
                    the handover rules with you: which topics, words, customers and order values go to a person, which
                    team or person gets them at different times, and what the customer is told while they wait.
                  </p>
                  <p>
                    When a rule fires, the AI tells the customer a person will take over and roughly when, based on your
                    real hours. It then creates or updates the ticket with a short summary, the order or account details
                    and what it has already tried, tags it and assigns it to the right queue. Nobody has to scroll back
                    through twenty messages, and the customer never repeats themselves.
                  </p>
                  <p>
                    A customer can always ask for a person, and it works first time. We never build an agent that traps
                    someone in a loop. The OAIC’s AI guidance also expects a person to be able to check and overturn
                    what an AI system decides.
                  </p>
                </div>
              </div>
              <div className="stack">
                <figure className="card" style={{ padding: 8, margin: 0 }}>
                  <img src="/images/au/ai-customer-service/ai-customer-service-handover.webp" width={1200} height={800} loading="lazy" decoding="async" alt="Over the shoulder of a Sydney support specialist on a headset picking up a handed-over chat, with the AI’s summary card flagged at the top of his screen" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                  <figcaption style={{ padding: '12px 10px 6px', fontSize: 14 }}>
                    The conversation arrives with a summary already on screen, so your team starts with the answer, not the questions.
                  </figcaption>
                </figure>
                <div className="card card-top-orange">
                  <span className="eyebrow">Typical handover triggers</span>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Customer asks for a person</div><div className="scorecard-note">any wording, any channel</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Hand over</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Complaint or refund dispute</div><div className="scorecard-note">including consumer guarantee claims</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Hand over</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Upset or repeated contact</div><div className="scorecard-note">tone, or third message on one issue</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Priority</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">No approved answer</div><div className="scorecard-note">it never guesses</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Draft only</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Outside hours</div><div className="scorecard-note">honest wait time, ticket ready for morning</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Queue</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 820 }}>Chatbot builder app vs your helpdesk’s built-in AI vs a custom AI customer service agent</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              Three common routes, plus a team with no AI at all. Each is the right answer for someone. This compares
              them on what changes day to day, not on price.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="cmp-table" style={{ minWidth: 820 }}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Custom AI agent (FactoryJet)</th>
                    <th>Helpdesk built-in AI</th>
                    <th>Chatbot builder app</th>
                    <th>Team only, no AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Coverage hours</td><td className="fj"><span className="yes">24/7 for approved ticket types</span></td><td><span className="yes">24/7</span></td><td><span className="yes">24/7</span></td><td><span className="partial">Business hours</span></td></tr>
                  <tr><td className="feat">Reads systems beyond the helpdesk</td><td className="fj"><span className="yes">Any system with an API</span></td><td><span className="partial">Supported apps only</span></td><td><span className="partial">Few, often none</span></td><td><span className="yes">Staff look it up</span></td></tr>
                  <tr><td className="feat">Follows your business rules</td><td className="fj"><span className="yes">Designed around them</span></td><td><span className="partial">Within product settings</span></td><td><span className="partial">Basic</span></td><td><span className="yes">With training</span></td></tr>
                  <tr><td className="feat">Draft mode for staff approval</td><td className="fj"><span className="yes">Yes, per ticket type</span></td><td><span className="yes">Usually</span></td><td><span className="no">Rarely</span></td><td>Not applicable</td></tr>
                  <tr><td className="feat">Handover with summary</td><td className="fj"><span className="yes">Your rules, your queues</span></td><td><span className="yes">Yes</span></td><td><span className="partial">Basic</span></td><td>Not applicable</td></tr>
                  <tr><td className="feat">Choice of AI model and data location</td><td className="fj"><span className="yes">You choose</span></td><td><span className="partial">Set by the vendor</span></td><td><span className="no">Set by the app</span></td><td><span className="yes">Your own systems</span></td></tr>
                  <tr><td className="feat">Who owns the setup</td><td className="fj"><span className="yes">You do</span></td><td><span className="partial">Your config, their product</span></td><td><span className="no">The app provider</span></td><td><span className="yes">You do</span></td></tr>
                  <tr><td className="feat">Setup effort for you</td><td className="fj"><span className="partial">Workshops, then we build</span></td><td><span className="yes">Low to medium</span></td><td><span className="yes">Low</span></td><td><span className="partial">Hiring and training</span></td></tr>
                  <tr><td className="feat">Support after launch</td><td className="fj"><span className="yes">Same team, ongoing</span></td><td><span className="partial">Vendor help desk</span></td><td><span className="partial">Help docs</span></td><td>Your own management</td></tr>
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              Want the numbers? Our <a href="/blog/ai-cost-australia-2026" style={srcLink}>AI cost guide for Australia (2026)</a> lists
              typical market ranges for chatbots, AI agents and platform fees, with sources. For the technical side, read{' '}
              <a href="/blog/ai-chatbots-vs-ai-agents-business" style={srcLink}>AI chatbots vs AI agents for business</a>.
            </p>
          </div>
        </section>

        {/* ═══ 10. HOW WE BUILD IT (step-by-step, <details>) ═══ */}
        <section className="sec-lg" id="how-we-build">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How we build it</span>
                <h2>How we build your AI customer service agent, in eight steps</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  The difference between an AI agent that impresses in a demo and one your customers can rely on is
                  mostly steps three and five. Open any step to see what happens in it.
                </p>
                <div className="card mt-6" style={{ padding: '4px 20px' }}>
                  {BUILD_STEPS.map((s) => (
                    <details key={s.n}>
                      <summary style={{ gap: 16, textAlign: 'left' }}>
                        <span><span style={{ fontFamily: T.fm, color: T.small, marginRight: 12 }}>{s.n}</span>{s.t}</span>
                      </summary>
                      <p style={{ paddingBottom: 18 }}>{s.d}</p>
                    </details>
                  ))}
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-customer-service/ai-customer-service-workshop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A FactoryJet engineer and the customer service manager of an Adelaide online retailer sorting cards into four piles at a meeting table, mapping ticket types" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Step one is sorting real tickets into types with the person who runs your support. That ticket map,
                    with a rule for each type, is what you sign off before we build.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Your support inbox growing faster than your team?'}
          sub={'Tell us which helpdesk you use and what customers ask most. On a short call with the founder, we will tell you which tickets AI should take first, whether your helpdesk’s own AI is enough, and what a custom agent would add.'}
          label={'Plan my AI customer service'}
        />

        {/* ═══ 11. ECOMMERCE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">For online stores</span>
                <h2>AI customer service for Shopify and ecommerce stores in Australia</h2>
                <div className="stack mt-6">
                  <p>
                    For an online store, a large share of tickets are the same few questions: where is my order, how do
                    I return this, will it fit, when is it back in stock. They have clear answers sitting in Shopify, your
                    courier’s tracking and your returns policy. That makes ecommerce one of the best fits for an AI
                    chatbot for customer service, and it is where many of our clients start.
                  </p>
                  <p>
                    Two things need extra care in Australia. First, <b>refunds and returns</b>. The Australian Consumer
                    Law gives customers guarantees that a store policy cannot remove, so the AI must never tell a
                    customer they have no right to a remedy. We keep returns answers word for word from an approved
                    policy, and send any faulty-product or refund dispute to a person. Second, <b>delivery promises</b>.
                    The AI quotes the courier’s actual tracking, not a guess.
                  </p>
                  <p>
                    Gorgias is built for this and suits many Shopify stores on its own. We build custom agents when the
                    answer lives somewhere the helpdesk cannot see, such as a 3PL warehouse system, a B2B trade portal or
                    an ERP. If your store itself needs work, our <a href="/au/shopify-development">Shopify development
                    team in Australia</a> and <a href="/au/ecommerce-development">ecommerce development</a> pages cover it.
                  </p>
                </div>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/au/ai-customer-service/ai-customer-service-warehouse.webp" width={1200} height={800} loading="lazy" decoding="async" alt="The owner of a small Brisbane online store taping an order box at her packing bench while a chat notification glows on her phone beside it" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    In a small store the person packing orders is often the person answering chats. AI takes the order
                    status questions so the packing gets done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. PRIVACY ACT + ACL ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">The rules, in plain English</span>
              <h2>The Privacy Act, AI disclosure and the Australian Consumer Law for AI customer service</h2>
            </div>
            <div className="col-6040 mt-8">
              <div className="stack">
                <p>
                  Every chat and email your AI agent handles contains personal information: names, addresses, order
                  history, and sometimes health, money or family details. The Privacy Act 1988 and its Australian
                  Privacy Principles (the APPs) set the rules for how covered businesses collect, use, store and send
                  that information.
                </p>
                <p>
                  <b>Tell customers it is AI.</b> The Office of the Australian Information Commissioner (OAIC) says public
                  facing AI tools such as chatbots should be clearly identified as AI, and that businesses should update
                  their privacy policies and notices with clear information about how they use AI. It also recommends
                  not entering personal information into publicly available generative AI tools.
                </p>
                <p>
                  <b>Know where the data goes.</b> Most AI models run on servers overseas. Under APP 8, before personal
                  information goes to an overseas recipient, you must take reasonable steps to make sure it will not
                  breach the APPs, and you stay accountable for what that recipient does. So we name every provider,
                  check its data terms, and use Australian hosting where it is offered and it matters to you.
                </p>
                <p>
                  <b>Automated decisions.</b> From 10 December 2026, the OAIC says businesses that use personal
                  information in automated decisions that could affect someone’s rights or interests must explain the
                  kinds of information used and decisions made in their privacy policy. If your AI agent approves or
                  refuses refunds, account changes or claims on its own, that is likely to apply. Keeping a person on
                  those decisions keeps things simple.
                </p>
                <p>
                  <b>Wrong answers are still your answers.</b> Treasury’s 2025 review of AI and the Australian Consumer
                  Law found the misleading conduct rules apply regardless of the technology, can be breached without
                  fault, and put the onus on businesses to make sure the technology they use is fit for purpose. That is
                  why we restrict the AI to approved answers and log everything it says.
                </p>
                <p style={srcNote}>
                  Sources: <a href={SRC_OAIC_AI} {...extLink} style={srcLink}>OAIC, privacy and commercially available AI products</a>;{' '}
                  <a href={SRC_APP8} {...extLink} style={srcLink}>OAIC, APP 8 cross-border disclosure</a>;{' '}
                  <a href={SRC_APP_QR} {...extLink} style={srcLink}>OAIC, APP quick reference</a>;{' '}
                  <a href={SRC_OAIC_ADM} {...extLink} style={srcLink}>OAIC, automated decision making transparency</a>;{' '}
                  <a href={SRC_OAIC_SMALL} {...extLink} style={srcLink}>OAIC, small business</a>;{' '}
                  <a href={SRC_TREASURY_ACL} {...extLink} style={srcLink}>Treasury, Review of AI and the Australian Consumer Law (October 2025)</a>.
                  This is general information, not legal advice.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">7 things to get right before AI answers your customers</span>
                <ol className="scope-list num-list mt-4">
                  {SEVEN_THINGS.map((s) => (
                    <li key={s.t}><b>{s.t}</b> {s.d}</li>
                  ))}
                </ol>
              </div>
            </div>
            <ul className="col-3 mt-10">
              <li className="card"><h3>What we do</h3><p className="mt-4">Write the AI disclosure into the chat and first message, restrict answers to approved content, choose providers with suitable hosting and no-training terms, set retention periods, and document the data flow for your privacy policy.</p></li>
              <li className="card"><h3>What you keep</h3><p className="mt-4">You stay responsible for the personal information you collect and for what your AI tells customers. We make that easier with access controls, a log of every AI reply, and plain-English notes on where data goes.</p></li>
              <li className="card"><h3>What we do not do</h3><p className="mt-4">We are not lawyers and do not give legal sign-off. For health, financial and insurance businesses, confirm the detail with your privacy adviser or compliance team.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 13. ENGAGEMENT SHAPES + DEMAND ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>Three ways to work with us on AI customer service</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Every project is quoted for your scope, with a fixed price for the build and ongoing support shown
                  separately. These are the shapes it usually takes.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Draft and triage first.</b> The agent drafts replies and sorts tickets inside your helpdesk, with staff approving everything. Low risk, fast to prove.</li>
                  <li><b>Live answers on chosen ticket types.</b> Chat and email answers for the ticket types that passed testing, with integrations to your store, booking or account systems and full handover rules.</li>
                  <li><b>Build plus support.</b> Either of the above with ongoing transcript reviews, new ticket types, content updates and keeping pace with changes to the AI models and your helpdesk.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  What moves the scope: the number of ticket types, how many systems it connects to, the channels and
                  languages, your conversation volume (which sets the AI usage you pay providers directly), and the
                  support you want. For typical Australian market ranges, see our{' '}
                  <a href="/blog/ai-cost-australia-2026">AI cost guide</a>. For a list of other firms, see{' '}
                  <a href="/blog/best-ai-agencies-australia-2026">the best AI agencies in Australia</a>.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Plan my AI customer service" region="au" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 10, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>Australia · Monthly Search Demand</span>
                  <span style={{ background: T.small, color: '#fff', fontFamily: T.fm, fontSize: 10, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {[
                      { kw: 'ai customer service', v: '210', w: '100%', kd: 'The head term' },
                      { kw: 'ai chatbot service', v: '90', w: '43%', kd: 'Buying a chatbot as a service' },
                      { kw: 'ai chatbot for website', v: '90', w: '43%', kd: 'Website chat' },
                      { kw: 'ai chatbot for business', v: '70', w: '33%', kd: 'Comparing options' },
                      { kw: 'ai customer service agent', v: '50', w: '24%', kd: 'Agents, not scripts' },
                      { kw: 'ai chatbot for customer service', v: '50', w: '24%', kd: 'Support chat' },
                      { kw: 'customer service ai agent', v: '30', w: '14%', kd: 'Same intent, other wording' },
                      { kw: 'ai chatbot for ecommerce', v: '20', w: '10%', kd: 'Online stores' },
                    ].map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 9, color: T.n400 }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 10, color: T.n400, marginTop: 10 }}>Source: DataForSEO, Australia, September 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. PROVIDER LIST (self-disclosure, ItemList) ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The honest landscape</span>
              <h2>AI customer service options Australian businesses compare</h2>
              <p className="lead mt-4">
                We are one option, not the only one. These are the helpdesk AI agents and Australian specialists that
                show up when people search for AI customer service in Australia or ask AI assistants for one. Each note
                is based on what the company says on its own website.
              </p>
            </div>
            <ul className="col-2 mt-10" style={{ gap: 16 }}>
              {PROVIDERS.map((p, i) => (
                <li key={p.name} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 30 }}>{i + 1}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{p.name}{p.name === 'FactoryJet' && <span style={{ fontFamily: T.fm, fontSize: 10, background: T.small, color: '#fff', borderRadius: 999, padding: '2px 8px', marginLeft: 8, verticalAlign: 'middle' }}>That is us</span>}</h3>
                    <p style={{ marginTop: 6 }}>{p.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p style={srcNote}>
              Options named from live Australian search results and AI assistant answers for AI customer service and AI chatbot queries, September 2026. Notes reflect each company’s own website on 26 September 2026. Listing is not endorsement.
            </p>
            <div className="card mt-8" style={{ maxWidth: 900 }}>
              <span className="eyebrow">Questions to ask any provider, including us</span>
              <ol className="scope-list num-list mt-4">
                <li><b>Can I test it on my own past tickets?</b> A demo on the vendor’s content tells you little. Ask for results on yours.</li>
                <li><b>What does it do when it does not know?</b> The right answer is hand over or draft, never guess.</li>
                <li><b>How do customers reach a person?</b> Test it: type “agent” and see what happens.</li>
                <li><b>Which AI providers see our data, where, and do they train on it?</b> Get names and locations in writing.</li>
                <li><b>How is it priced as volume grows?</b> Per seat, per conversation and per resolution scale very differently.</li>
                <li><b>What do we keep if we leave?</b> Prompts, approved answers, workflows and conversation history.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ 15. SIBLING SERVICES (hover cards) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Beyond the support inbox</span>
              <h2>The rest of what we build for Australian businesses</h2>
              <p className="lead mt-4">
                AI customer service is often the first AI system a business trusts with customers. These are the
                natural next steps, built by the same team. For the engineering detail, read our{' '}
                <a href="/blog/ai-customer-support-agent-architecture-guide">AI customer support agent architecture guide</a>.
              </p>
            </div>
            <ul className="col-3 mt-10">
              {SIBLINGS.map((s) => (
                <li key={s.href} className="svc-card" style={{ padding: 0 }}>
                  <a href={s.href} style={{ display: 'block', padding: 24, height: '100%' }}>
                    <h3>{s.t} <span style={{ color: T.small }} aria-hidden="true">→</span></h3>
                    <p className="mt-4">{s.d}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 16. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <style>{'.au-svc .faq-item summary::after{content:none;display:none}'}</style>
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">FAQ</span>
              <h2>AI customer service questions Australian businesses actually ask</h2>
            </div>
            <div className="faq-grid">
              <aside className="faq-sidebar">
                <span className="faq-sidebar-topics">Topics</span>
                <nav className="faq-sidebar-nav">
                  {FAQ_CATEGORIES.map((c) => (
                    <a key={c.key} href={`#faq-${c.key}`}>
                      {c.label}
                      <span className="faq-nav-count">{FAQ_ITEMS.filter((f) => f.category === c.key).length}</span>
                    </a>
                  ))}
                </nav>
                <div className="faq-sidebar-cta">
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="au" modalVariant="default" btnVariant="secondary-light" />
                  <p>Replies within 24 hours.</p>
                </div>
              </aside>

              <div>
                {FAQ_CATEGORIES.map((c) => (
                  <div key={c.key} id={`faq-${c.key}`} style={{ marginBottom: 40 }}>
                    <div className="faq-cat-header">
                      <span className="faq-cat-bar" />
                      <p className="faq-cat-label">{c.label}</p>
                    </div>
                    <ul className="faq-list">{FAQ_ITEMS.filter((f) => f.category === c.key).map((f) => (
                      <li key={f.question}><details className="faq-item">
                        <summary>
                          <span className="q-text">{f.question}</span>
                          <span className="chevron">
                            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="faq-ans"><p>{f.answer}</p></div>
                      </details></li>
                    ))}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 17. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>Faster answers for customers, fewer repeat tickets for your team</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within 24 hours to book a short call about your
              helpdesk, the questions customers ask most, and whether your helpdesk’s own AI or a custom AI customer
              service agent is the right fit. No spam, no obligation.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Plan my AI customer service" region="au" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/au/ai-receptionist" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Need phone answering? See AI receptionist</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} variant="dark" tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
