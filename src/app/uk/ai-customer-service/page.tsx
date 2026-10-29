import type { Metadata } from 'next';
import styles from './visual-qa.module.css';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/ai-customer-service';
const UPDATED = '2026-10-11';
const TITLE = 'AI Customer Service UK | Custom Support Agents | FactoryJet';
const H1 = 'AI Customer Service UK: Agents That Answer, Act in Your Systems and Hand Over to Your Team';
const DESCRIPTION =
  'AI customer service for UK businesses. Custom agents answer chat, email and WhatsApp, act in your helpdesk and order systems, and hand hard cases to your team.';

/* Design values, copied from ../ai-agents/ai-agents.css so inline styles stay
   on-system without CSS custom property references in this file. */
const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#FF5C00',
  green: '#047857',
  small: '#B23E13',
  fm: "'Geist Mono',monospace",
  fd: "'Plus Jakarta Sans',sans-serif",
};

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. Never
   hand-copy a second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'AI Customer Service', url: CANONICAL },
];

/* ─── External sources. Every page below was opened on 2026-10-11 and the
       words quoted in each note were read in the fetched body that day. ── */
// CMA, "Complying with consumer law when using AI agents", published 9 March
// 2026: "you are responsible for what an AI agent does in the same way you are
// responsible for what an employee does. This is true even if someone else
// designed or provides the AI agent on your behalf"; "You could be fined up to
// 10% of your worldwide turnover"; "Make sure there is a human in the loop".
const SRC_CMA =
  'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents';
// ICO, right to be informed: "You must provide privacy information to
// individuals at the time you collect their personal data from them"; "If you
// apply Artificial Intelligence (AI) to personal data: Be upfront about it and
// explain your purposes for using AI."
const SRC_ICO_INFORMED =
  'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-be-informed/';
// ICO, how do we ensure transparency in AI: privacy information must be given
// "at the time you collect it, before you use it to train a model or apply
// that model on those individuals".
const SRC_ICO_AI =
  'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-do-we-ensure-transparency-in-ai/';
// ICO, when do we need to do a DPIA: "Innovative technology: processing
// involving the use of innovative technologies, or the novel application of
// existing technologies (including AI). A DPIA is required where this
// processing is combined with any of the criteria from the European guidelines."
const SRC_ICO_DPIA =
  'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/when-do-we-need-to-do-a-dpia/';
// ICO, a brief guide to international transfers (15 January 2026): "If you
// initiate a restricted transfer, you’re responsible for complying with the
// transfer rules."
const SRC_ICO_TRANSFERS =
  'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/a-brief-guide-to-international-transfers/';
// FCA, Consumer Duty: "The Duty sets high standards of consumer protection
// across financial services, and requires firms to put their customers' needs
// first."
const SRC_FCA = 'https://www.fca.org.uk/firms/consumer-duty';
// ONS, Artificial intelligence in UK businesses: 2023 to 2026, released 20 July
// 2026: use of AI in UK businesses with 10 or more employees "has increased
// from around 12% to around 35% since late 2023"; of those, "only 10% report
// using AI extensively".
const SRC_ONS =
  'https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/articles/artificialintelligenceinukbusinesses/2023to2026';
// Vendor pricing pages (list prices quoted in RENT_OPTIONS below).
const SRC_FIN = 'https://fin.ai/pricing';
const SRC_ZENDESK = 'https://www.zendesk.co.uk/pricing/';
const SRC_GORGIAS = 'https://www.gorgias.com/pricing';
const SRC_FRESHDESK = 'https://www.freshworks.com/freshdesk/pricing/';
// A1 Automation London, "How Much Does an AI Chatbot Cost in the UK?", modified
// 14 July 2026. Set-up column only: custom AI chatbot "£8,000–£60,000+",
// enterprise AI chatbot "£60,000–£250,000+".
const SRC_A1 = 'https://aiautomationagencylondon.co.uk/blog/ai-chatbot-cost-in-uk/';

/* ─── Off-the-shelf AI agents with a published list price. ONE array drives
       the visible table AND the ItemList JSON-LD. Each row was read on the
       vendor’s own pricing page on 2026-10-11. ─────────────────────────── */
const RENT_OPTIONS: { name: string; suits: string; price: string; currency: string; src: string; srcLabel: string }[] = [
  {
    name: 'Fin by Intercom',
    suits: 'Teams that want an AI agent on top of the helpdesk they already use, or on Intercom’s own helpdesk.',
    price: '$0.99 per outcome, with a minimum of 50 outcomes a month when Fin runs on another helpdesk. On Intercom’s helpdesk, from $0.99 per outcome plus $19 per helpdesk seat a month. A conversation passed to your team without an outcome is not charged.',
    currency: 'US dollars only, Intercom says',
    src: SRC_FIN,
    srcLabel: 'fin.ai/pricing',
  },
  {
    name: 'Zendesk AI agents',
    suits: 'Support teams already on Zendesk, or teams that want a helpdesk priced in pounds.',
    price: 'Support Team £15, Suite Team £45 and Suite Professional £89 per agent a month paid yearly. Each includes 5 or 10 automated resolutions per agent a month. More are listed at £1.30 each when committed in advance, or US$2.00 each on pay as you go.',
    currency: 'Pounds on the UK site, with pay-as-you-go resolutions in US dollars',
    src: SRC_ZENDESK,
    srcLabel: 'zendesk.co.uk/pricing',
  },
  {
    name: 'Gorgias AI Agent',
    suits: 'Online shops. Gorgias says its helpdesk is designed for ecommerce and Shopify, and that it is never priced per agent.',
    price: 'With AI Agent added, monthly plans run from $40 a month (50 tickets and 30 automated interactions) to $1,430 a month (5,000 tickets and 530 automated interactions). The page lists $0.85 to $1.00 per automated interaction, depending on the plan.',
    currency: 'US dollars on the page we read',
    src: SRC_GORGIAS,
    srcLabel: 'gorgias.com/pricing',
  },
  {
    name: 'Freshdesk Freddy AI Agent',
    suits: 'Teams on Freshdesk that want a block of AI sessions included in the plan.',
    price: 'Growth $19, Pro $55 and Enterprise $89 per agent a month billed annually. The first 500 Freddy AI Agent sessions are included, then $49 per 100 sessions.',
    currency: 'US dollars on the page we read',
    src: SRC_FRESHDESK,
    srcLabel: 'freshworks.com/freshdesk/pricing',
  },
];

/* ─── FAQ source of truth (drives UI + FAQPage schema). Questions marked
       "question box" were shown by Google UK beside the results for "ai
       customer service", "ai customer service chatbot" and "ai customer
       service agent" on 2026-10-11 (DataForSEO). ─────────────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',   label: 'AI customer service basics' },
  { key: 'choosing', label: 'Rent, build and choosing a tool' },
  { key: 'cost',     label: 'Cost and timing' },
  { key: 'rules',    label: 'UK law, data and handover' },
  { key: 'working',  label: 'Systems, channels and ownership' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What is AI customer service?',
    answer: 'AI customer service is software that answers customer questions on chat, email and messaging apps, and passes the harder ones to a person. The current kind is called an AI agent. It reads the message, looks up the answer in your help pages or your order system, replies in plain English and can take a simple action such as booking a return. Older chatbots followed a fixed script and stopped working when the question left it.' },
  // question box
  { category: 'basics', question: 'Does AI do customer service?',
    answer: 'Yes, for questions with one right answer. An AI agent can tell a customer where an order is, explain a returns policy, change a booking or send a copy invoice at any hour. It should stay out of complaints, disputes and anything that needs judgement, and pass those to your team with a summary. The Office for National Statistics reported in July 2026 that around 35% of UK businesses with 10 or more employees use at least one AI technology, up from around 12% in late 2023.' },
  // question box
  { category: 'basics', question: 'Are there AI customer service agents?',
    answer: 'Yes. Most helpdesks now sell one. Intercom sells Fin, Zendesk sells AI agents with its Support and Suite plans, Gorgias sells AI Agent for online shops and Freshdesk sells Freddy AI Agent. Each answers from your help centre and takes the actions that product supports. A custom AI agent is the other route. It is built for your business, so it can read systems the helpdesk cannot see, such as an ERP (the system that holds your stock, orders and accounts), and follow your own rules.' },
  // question box
  { category: 'basics', question: 'Is ChatGPT a chatbot or an AI agent?',
    answer: 'ChatGPT is a general assistant. It chats about anything and knows nothing about your orders, prices or policies. A customer service AI agent uses the same kind of language model underneath, but it is tied to your approved answers and connected to your systems, so it can look up a real order and act inside limits you set. The model is the engine. The approved answers, the connections and the limits are what make it safe to put in front of customers.' },
  // question box
  { category: 'basics', question: 'Can you talk to someone through AI?',
    answer: 'Yes, and a well-built AI chat makes that easy. The customer types a question, the AI answers if it has an approved answer, and the customer can ask for a person at any point. When that happens the conversation moves to your team with a short summary, so nobody has to explain the problem twice. If your team is closed, the AI says when a person will reply and leaves the case ready for the morning.' },
  // question box
  { category: 'basics', question: 'How to tell if a customer service agent is AI?',
    answer: 'A business should tell you. The Competition and Markets Authority’s guidance of 9 March 2026 says a business should consider labelling an AI agent so customers are not misled into thinking a real person is providing the service. The Information Commissioner’s Office says that if you apply AI to personal data you should be upfront about it. In practice the chat window carries an “AI assistant” label and the first message says so.' },
  // question box
  { category: 'basics', question: 'What are the advantages of AI chatbots?',
    answer: 'Four, when the set-up is right. Customers get an answer at any hour, including evenings, weekends and bank holidays. The answer is the same every time, because it comes from wording you approved. Your team spends less of the day on repeat questions and more on the cases that need a person. And every conversation is logged, so you can see what customers ask most. The limits matter as much. An AI chatbot should stay out of complaints, disputes and regulated advice.' },

  // ── Choosing ──
  // question box
  { category: 'choosing', question: 'What is the best AI tool for customer service?',
    answer: 'The one that fits where your answers live. If your team already works in Zendesk, Intercom, Gorgias or Freshdesk and your help centre answers most questions, that product’s own AI agent is the best first test. If the answer sits in another system, such as your ERP, your accounts package or a booking platform, a custom agent built around those systems fits better. Test any option on 20 of your hardest real questions before you decide.' },
  // buyer question from the 9 Oct 2026 UK run: "Which company has AI chatbot?"
  { category: 'choosing', question: 'Which company has an AI chatbot for customer service?',
    answer: 'Among helpdesk products with a public list price on 11 October 2026: Intercom (Fin, $0.99 per outcome), Zendesk (AI agents with plans from £15 to £89 per agent a month paid yearly), Gorgias (AI Agent, for online shops) and Freshdesk (Freddy AI Agent). Those are products you rent. Companies such as FactoryJet build a custom agent instead, which you own. The table on this page shows what each vendor lists and the currency its page showed.' },
  // question box
  { category: 'choosing', question: 'Can I use ChatGPT for customer service?',
    answer: 'The model behind ChatGPT can be used, through a business account, connected to your own approved answers. A personal chat app is the wrong place for customer messages, because they hold personal data that UK GDPR makes you responsible for. The ICO says you must tell people how their data is used at the time you collect it, and that sending personal information to a separate organisation outside the UK is covered by its transfer rules.' },
  // question box
  { category: 'choosing', question: 'Is there a free AI chatbot builder available?',
    answer: 'Free trials are more common than free products. Intercom lists a 14-day free trial of Fin with no credit card needed, and Gorgias and Freshdesk both show a free trial on their pricing pages. A trial shows you how the AI copes with your real questions. Before customers use it, you still need approved answers, an AI label, a route to a person and someone who reviews what it says.' },
  { category: 'choosing', question: 'Should we rent an AI agent or have one built?',
    answer: 'Rent when your questions are standard, your help centre already answers them and paying per seat or per resolved conversation suits you. Commission a build when the answer sits in software your helpdesk has no view of, when your rules are particular to your business, or when owning the agent and choosing where its data sits matters to you. The two can work side by side, with the helpdesk’s own AI on simple questions and a custom agent on the rest.' },
  // question box
  { category: 'choosing', question: 'How to create an AI customer service agent?',
    answer: 'Five steps. Sort a month of real conversations into types and count them. For each type, decide whether the agent answers alone, drafts for a person or hands over. Write the approved answers. Link it to the order and accounts data it has to look things up in. Then test it on past conversations before any customer sees it. The CMA’s March 2026 guidance tells businesses to use test results to improve an AI agent before it is deployed.' },

  // ── Cost ──
  // question box
  { category: 'cost', question: 'How much do AI agents cost?',
    answer: 'A rented customer service agent is priced by use. On 11 October 2026 Intercom listed Fin at $0.99 per outcome, Zendesk’s UK page listed committed automated resolutions at £1.30 each on top of plans from £15 to £89 per agent a month paid yearly, and Gorgias listed $0.85 to $1.00 per automated interaction. A custom agent is a one-off build. FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping call.' },
  { category: 'cost', question: 'How much does it cost to build a custom AI chatbot in the UK?',
    answer: 'A1 Automation London, in a guide updated on 14 July 2026, puts the set-up cost of a custom AI chatbot in the UK at £8,000 to £60,000 or more, and of an enterprise chatbot at £60,000 to £250,000 or more. The spread comes from what the chatbot must do and how many systems it must connect to. Those are market figures from one named source. FactoryJet quotes a fixed price in writing after a short scoping call.' },
  { category: 'cost', question: 'What do we pay after the agent is live?',
    answer: 'FactoryJet quotes the build, and any support you choose, as two fixed prices, in writing, after a short scoping call, so you know both figures before you sign. After launch FactoryJet can keep managing the servers, the AI, the APIs and the maintenance, so your team does not have to. An API is the documented way one piece of software talks to another.' },
  { category: 'cost', question: 'How long does it take to set up AI customer service?',
    answer: 'Switching on the AI inside a helpdesk you already use is quick. Intercom says Fin can be set up in under an hour. A custom agent takes longer because it is connected to your own systems and tested on your past conversations first. Expect a first version on one channel a few weeks after the scoping call. It starts in draft mode, where a person approves each reply before it is sent.' },

  // ── Rules ──
  { category: 'rules', question: 'Do we have to tell customers they are talking to AI?',
    answer: 'Plan to. The CMA says that if the fact a customer is dealing with AI and not a person might affect their decisions, you should tell them, and that you should not overstate what the AI can do. The ICO’s guidance on the right to be informed says to be upfront when you apply AI to personal data and to explain your purposes. A label on the chat window, a first message that says so and a line in your privacy notice are the usual way to do it.' },
  { category: 'rules', question: 'Who is responsible if the AI gives a customer the wrong answer?',
    answer: 'Your business is. The CMA’s guidance says you are responsible for what an AI agent does in the same way you are responsible for what an employee does, and that this is true even if someone else designed or provides the agent. It adds that a business breaking consumer protection law could be fined up to 10% of its worldwide turnover. That is why approved answers, testing and a named reviewer come before launch.' },
  { category: 'rules', question: 'Does UK GDPR apply to AI chats and emails?',
    answer: 'Yes. A chat or an email holds personal data, such as a name, an address and an order history, so UK GDPR applies however the reply is written. The ICO says you must give people privacy information at the time you collect their data, in clear and plain language, and its AI guidance says that information must be given before a model is applied to them. Both ICO pages carry a notice that they are under review after the Data (Use and Access) Act.' },
  { category: 'rules', question: 'Do we need a DPIA for an AI customer service agent?',
    answer: 'Often. DPIA stands for data protection impact assessment. It is a document that sets out how a project could harm people through their personal data and what you will do about it. The ICO lists artificial intelligence among its examples of innovative technology, and says a DPIA is required where innovative technology is combined with another factor on its list, such as sensitive data. Your data protection adviser decides. FactoryJet supplies the technical facts for it: what data the agent reads, which providers receive it and when it is deleted.' },
  { category: 'rules', question: 'Where is customer data stored, and can it stay in the UK?',
    answer: 'The conversation stays in your helpdesk and in the account you hold with the AI provider, both of which are your own accounts. FactoryJet can keep the agent’s data in UK or EU cloud regions when you ask for that. If personal data is sent to a separate organisation outside the UK, the ICO’s transfer rules apply and the business that starts the transfer is responsible for following them, so we write down every provider the agent uses for your privacy notice.' },
  { category: 'rules', question: 'How does the AI hand a conversation to a person?',
    answer: 'By rule. Before the build we agree which topics, words and customers go to a person: a complaint, a refund dispute, a customer who asks for a human, a question with no approved answer. When a rule fires, the agent tells the customer a person is taking over, writes a short summary into the ticket (the record of that conversation in your helpdesk) with the order or account details, and puts it in the right queue. Your team picks it up with the history on screen.' },
  { category: 'rules', question: 'Can an AI agent process refunds and returns?',
    answer: 'It can collect the details and prepare the decision. The CMA’s guidance uses refunds as an example. It says to design the agent around customers’ rights under the Consumer Rights Act 2015 and the Consumer Contracts Regulations 2013, plus your own terms, and to have someone with appropriate experience regularly review its exchanges. A common design is that the agent approves a return inside your written policy and a person approves anything outside it or above a value you set.' },
  { category: 'rules', question: 'We are regulated by the FCA. Can we use AI in customer service?',
    answer: 'That is for your compliance team to decide, and the Consumer Duty is the place to start. The FCA says the Duty sets high standards of consumer protection across financial services and requires firms to put their customers’ needs first. A cautious first step is draft mode, where the agent prepares each reply, a person approves it, and every action is written to an audit log your compliance team can read.' },

  // ── Working ──
  { category: 'working', question: 'Which systems can a custom AI customer service agent connect to?',
    answer: 'Any system with a usable API, which is the documented way one piece of software talks to another. Zendesk, Intercom, Gorgias, Freshdesk and HubSpot each publish one for tickets or conversations, as do Shopify, WooCommerce and Xero for orders and invoices. FactoryJet has worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs (the systems that hold stock, orders and accounts), and builds Xero, HubSpot and WhatsApp integrations.' },
  { category: 'working', question: 'Can it answer on WhatsApp and the phone as well as chat and email?',
    answer: 'Yes. Web chat and email are the usual first channels. WhatsApp can be added, and FactoryJet builds WhatsApp integrations. Phone calls are handled by an AI voice agent, which we build for call centres as well as small offices. Every channel can draw on the same approved answers and follow the same handover rules, so a customer gets the same answer whichever way they get in touch. Our AI receptionist page covers the phone side.' },
  { category: 'working', question: 'Can we see it working before we sign?',
    answer: 'Yes. We show working software on your own data before a contract. For a support agent that usually means a demo that answers a sample of your real past questions from your own help pages, so you can judge the answers and the handover for yourself. You then get the build and the ongoing support quoted as fixed prices in writing.' },
  { category: 'working', question: 'Who owns the AI agent you build?',
    answer: 'You do. The prompts, the approved answers, the integration code and the documentation belong to you. Your helpdesk login and your AI provider account are registered to your business. FactoryJet designs, builds and supports the agent, and can keep managing the servers, AI, APIs and maintenance after launch so your team does not have to.' },
];

/* Questions Google UK showed in its question boxes on 2026-10-11. Each one is
   answered in FAQ_ITEMS above; this list only links to that section. */
const QUESTION_BOXES = [
  'Does AI do customer service?',
  'Are there AI customer service agents?',
  'How to create an AI customer service agent?',
  'How to tell if a customer service agent is AI?',
  'What is the best AI tool for customer service?',
  'Can I use ChatGPT for customer service?',
  'How much do AI agents cost?',
  'Can you talk to someone through AI?',
];

/* Eight checks before launch, each tied to the CMA guidance of 9 March 2026. */
const CHECKS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Count your conversations by type', d: 'Export a month of conversations from your helpdesk and group them: order status, returns, product questions, account changes, complaints. Write the count beside each group. The largest groups with one right answer are where an agent starts.' },
  { n: '02', t: 'Put each type in a pile', d: 'The agent answers alone, the agent drafts for a person, or the conversation goes straight to a person. Write the decision down for each type. That one page is the agent’s job description, and it is what you sign off.' },
  { n: '03', t: 'Approve the wording for prices, products and rights', d: 'The CMA says an agent must respond accurately to queries about prices, products and rights. So refund, cancellation and delivery answers are written by you, word for word, and the agent may not improvise on them.' },
  { n: '04', t: 'Label it as AI', d: 'The CMA says to tell customers when dealing with AI and not a person might affect their decisions. The ICO says to be upfront when you apply AI to personal data. Put the label on the chat window and in the first message.' },
  { n: '05', t: 'Set a limit on every action', d: 'Reading an order is low risk. Issuing a refund is another matter. For each action, decide whether the agent may do it alone, may do it up to a value you set, or must ask a person. The CMA’s refund example points to the Consumer Rights Act 2015 for faulty goods.' },
  { n: '06', t: 'Test it on past conversations', d: 'Run several hundred real past questions through the agent before launch and compare each answer with what your best person wrote. The CMA tells businesses to use test results to improve an agent before it is deployed.' },
  { n: '07', t: 'Name the reviewer', d: 'The CMA says someone with appropriate experience should regularly review how the agent responds, along with complaints and feedback from customers. Give that job to a named person and a fixed slot in the week.' },
  { n: '08', t: 'Agree how fast a wrong answer is fixed', d: 'The CMA says to act quickly when an agent is not performing as expected, and that speed matters most when it talks to large numbers of people or to vulnerable customers. Decide who can pause the agent and who corrects the wording.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only and is defined
       once, sitewide. Never redefine it here. ──────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'AI Customer Service UK',
      serviceType: 'AI customer service agent and AI chatbot design, build, integration and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Custom AI customer service agents for UK businesses. They answer chat, email and WhatsApp from approved wording, read order, stock and invoice data from the client’s own systems, and hand complaints and judgement calls to a person with a summary. Designed, built and supported by FactoryJet and owned by the client.',
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
      inLanguage: 'en-GB',
      datePublished: '2026-10-11',
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
      '@id': `${CANONICAL}#rent-options`,
      name: 'Off-the-shelf AI customer service agents with a published list price, read 11 October 2026',
      itemListElement: RENT_OPTIONS.map((r, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: r.name,
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
  alternates: { canonical: CANONICAL, languages: { 'en-GB': CANONICAL, 'x-default': CANONICAL } },
  openGraph: {
    title: TITLE,
    description:
      'Rent the AI agent your helpdesk sells, or have one built around your own systems. List prices read on 11 October 2026, what the CMA and ICO expect, and how FactoryJet builds one you own.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/ai-customer-service/ai-customer-service-og.webp', width: 1200, height: 630, alt: 'A woman wearing a headset writes on a notepad at a desk in a bright office while two colleagues talk in the background' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;

export default function AiCustomerServiceUKPage() {
  return (
    <>
      <script id="ld-uk-ai-customer-service" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main className={styles.page}>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className={`sec-lg dot-grid ${styles.hero}`} style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div className={styles.heroCopy}>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK AI Customer Service</span>
                  <span className="chip">Chat, Email, WhatsApp, Voice</span>
                  <span className="chip">You Own the Agent</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet designs, builds and supports custom AI customer service agents for UK businesses. The
                  agent answers routine questions on chat, email and WhatsApp from wording you approve, looks up
                  orders, stock and invoices in your own systems, and passes complaints and judgement calls to your
                  team with a summary. You own what we build.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />11 October 2026</div>
                </div>

                <div className={styles.heroForm} style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_ai_customer_service_hero" submitLabel="Plan my AI customer service" />
                </div>
                
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/ai-customer-service/ai-customer-service-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="A woman wearing a headset smiles while writing on a notepad at a wooden desk in a bright brick-walled office, with two colleagues talking behind her" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What the agent does with each message</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Answers from wording you approved</div><div className="scorecard-note">chat, email and WhatsApp, at any hour</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Answer</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Looks things up in your systems</div><div className="scorecard-note">orders, stock, invoices, bookings</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Act</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Passes hard cases to your team</div><div className="scorecard-note">with a summary, inside your helpdesk</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Hand over</div>
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
              <span className="lab">What is AI customer service, and should a UK business rent it or have it built?</span>
              <p>
                AI customer service is software that answers customer questions on chat and email, takes simple
                actions such as checking an order, and passes harder cases to a person. If your help centre already
                answers most questions, your helpdesk’s own AI agent is the quickest test. A custom build fits when
                the answers sit in systems the helpdesk cannot read.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Four words used on this page</span>
              <p>
                An <b>AI agent</b> is software that reads a customer’s message, works out what is being asked and
                replies, and that can also do a job such as looking up an order, inside limits you set. A{' '}
                <b>helpdesk</b> is the shared inbox product your support team works in, for example Zendesk or
                Intercom. A <b>ticket</b> is the record of one customer conversation in that helpdesk. A{' '}
                <b>handover</b> is the moment the AI passes a conversation to a person.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The Office for National Statistics reported on 20 July 2026 that around 35% of UK businesses with 10 or
              more employees use at least one AI technology, up from around 12% in late 2023. Of those, 10% say they
              use it extensively. So most UK firms are at the start, and the first decision they face is whether to
              rent the AI agent their helpdesk vendor sells or have one built around their own systems. This page sets
              out both, with list prices we read on the vendors’ own pages on 11 October 2026 and what the UK
              regulators say you are responsible for.
            </p>
            <p style={srcNote}>
              Source: <a href={SRC_ONS} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ONS, Artificial intelligence in UK businesses: 2023 to 2026</a>.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (each figure read on its source page, 11 Oct 2026) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout data-sourced-facts><tbody>{[
                { v: '35%', t: 'of UK businesses with 10 or more employees report using at least one AI technology, up from about 12% in late 2023', s: 'ONS, 20 July 2026', u: SRC_ONS },
                { v: 'Same rules', t: 'apply whether a customer deals with a person or an AI agent, and the business answers for both', s: 'CMA guidance, 9 March 2026', u: SRC_CMA },
                { v: '$0.99', t: 'per outcome is the list price of Fin, the AI agent from Intercom, which says it bills in US dollars only', s: 'Fin pricing, read 11 Oct 2026', u: SRC_FIN },
                { v: '£1.30', t: 'per committed automated resolution is the price on Zendesk’s UK page, on top of a plan per agent', s: 'Zendesk UK pricing, read 11 Oct 2026', u: SRC_ZENDESK },
              ].map((r) => (
                <tr key={r.t}><th scope="row"><div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div></th><td><p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p></td><td><a href={r.u} {...(r.u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer nofollow' } : {})} className={styles.citation} style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, textDecoration: 'underline' }}>{r.s}</a></td></tr>
              ))}</tbody></table></div>
          </div>
        </section>

        {/* ═══ 4. THREE PILES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Start with your inbox</span>
              <h2>Sort your customer questions into three piles before you pick a tool</h2>
              <p className="lead mt-4">
                Pull last month’s conversations out of your helpdesk and sort them by type. Each type goes into one of
                three piles. The size of each pile tells you how much an AI agent can take on and which option on
                this page fits.
              </p>
            </div>
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout><tbody><tr className="card card-top-orange"><th><span className="eyebrow">Pile one: the agent answers alone</span></th><td><ul className="scope-list mt-4">
                  <li><b>Order and delivery status.</b> Read live from your shop and courier data, so the customer gets a real tracking update at any hour.</li>
                  <li><b>Opening times, delivery areas and bank holiday cut-offs.</b> Facts you approved once and want repeated the same way every time.</li>
                  <li><b>Stock, sizes and lead times.</b> Looked up in your product data or your ERP, the system that holds your stock, orders and accounts.</li>
                  <li><b>Copy invoices and statements.</b> Sent to a verified trade customer from your accounts package, such as Xero.</li>
                  <li><b>Booking changes.</b> Moved or cancelled inside the notice rules you set.</li>
                  <li><b>How-to questions.</b> Answered from the help pages you already have.</li>
                </ul></td></tr><tr className="card"><th><span className="eyebrow">Pile three: straight to a person</span></th><td><ul className="scope-list mt-4">
                  <li><b>Complaints.</b> The agent recognises the complaint and passes it on. A person replies.</li>
                  <li><b>Refund disputes and faulty goods.</b> The agent gathers the order, the photos and the dates. A person decides.</li>
                  <li><b>Safety, or a vulnerable customer.</b> Routed at once, at any hour, to whoever you name.</li>
                  <li><b>Regulated advice.</b> Financial, legal and medical questions are outside what the agent may answer.</li>
                  <li><b>Your largest accounts.</b> Named customers can go to a named person every time.</li>
                </ul></td></tr></tbody></table></div>
            <div className="def mt-8" style={{ maxWidth: 940 }}>
              <span className="lab">Pile two: the agent drafts, a person sends</span>
              <p>
                Everything in between goes here: a refund inside your policy, a late delivery that needs an apology,
                a trade quote, any reply that promises a price. The agent writes the reply inside your helpdesk and a
                member of your team checks it and sends it. It is the safest place to start, because nothing reaches
                a customer without a person seeing it first.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 5. RENT OR BUILD (list prices table + build range + comparison table) ═══ */}
        <section className="sec-lg" id="rent-or-build">
          <div className="wrap">
            <span className="eyebrow">Rent or build</span>
            <h2 style={{ maxWidth: 860 }}>What the off-the-shelf AI agents list, read on their own pricing pages on 11 October 2026</h2>
            <p className="lead mt-4" style={{ maxWidth: 780 }}>
              These four helpdesk vendors publish a price for their AI agent. We read each vendor’s pricing page on
              11 October 2026. FactoryJet wrote this page and sells the build option further down, so read the
              comparison with that in mind.
            </p>
            <div className={`card mt-8 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 820 }} data-columns={4}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Who it suits</th>
                    <th>List price on the vendor’s page</th>
                    <th>Currency shown</th>
                  </tr>
                </thead>
                <tbody>
                  {RENT_OPTIONS.map((r) => (
                    <tr key={r.name}>
                      <td className="feat">{r.name}</td>
                      <td>{r.suits}</td>
                      <td>{r.price} <a href={r.src} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>{r.srcLabel}</a></td>
                      <td>{r.currency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              List prices as shown on each vendor’s page on 11 October 2026. Vendors change them often, so open the
              page before you budget. Zendesk’s UK site lists pounds. Intercom says it bills in US dollars only. The
              Gorgias and Freshdesk pages we read listed US dollars.
            </p>

            <div className="col-6040 mt-12">
              <div>
                <h3>When renting is the right answer</h3>
                <p className="mt-4">
                  Rent when your team already works in one of these helpdesks, your help centre answers most
                  questions, and paying per seat or per resolved conversation suits you. Setting up is quick.
                  Intercom says Fin can be set up in under an hour. If that describes you, switch on the vendor’s AI
                  agent and test it on real questions first. If it only half fits, the gaps it leaves are the brief
                  for a build.
                </p>
                <h3 className="mt-8">When a build is the right answer</h3>
                <p className="mt-4">
                  Have one built when the answer to a customer’s question sits somewhere the helpdesk cannot read:
                  stock and lead times in an ERP, an invoice in Xero, a job in a booking system, a price list agreed
                  with one trade customer. A build also fits when your rules are your own, when you want one agent
                  across chat, email, WhatsApp and the phone, or when you want to own the agent and decide where its
                  data sits.
                </p>
                <p className="mt-4">
                  For a longer comparison of the same choice, read{' '}
                  <a href="/blog/intercom-fin-vs-zendesk-ai-vs-custom-ai-agent-2026">Intercom Fin vs Zendesk AI vs a custom AI agent</a>.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What a custom build costs in the UK</span>
                <p className="mt-4">
                  A1 Automation London, in a guide updated on 14 July 2026, puts the set-up cost of a custom AI
                  chatbot in the UK at £8,000 to £60,000 or more, and of an enterprise chatbot at £60,000 to £250,000
                  or more. Those are one named source’s planning ranges for the build.
                </p>
                <p className="mt-4">
                  FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short
                  scoping call.
                </p>
                <p style={srcNote}>
                  Source: <a href={SRC_A1} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>A1 Automation London, AI chatbot cost in the UK</a>. More UK figures:{' '}
                  <a href="/blog/ai-cost-uk-2026" style={srcLink}>AI cost in the UK (2026)</a>.
                </p>
              </div>
            </div>

            <h3 className="mt-12">Rent or build, point by point</h3>
            <div className={`card mt-6 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 760 }} data-columns={3}>
                <thead>
                  <tr>
                    <th>What changes</th>
                    <th>Rent: the helpdesk’s own AI agent</th>
                    <th className="fj">Build: a custom agent from FactoryJet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Where answers come from</td><td>Your help centre and the apps that helpdesk supports</td><td className="fj">Your help centre plus any system with an API, such as an ERP, Xero or a booking platform</td></tr>
                  <tr><td className="feat">What it can do</td><td>The actions the vendor has built</td><td className="fj">The actions you approve, in your own systems, each with a limit</td></tr>
                  <tr><td className="feat">Channels</td><td>The channels that helpdesk sells</td><td className="fj">Chat, email, WhatsApp and voice, built for the ones you use</td></tr>
                  <tr><td className="feat">How you pay</td><td>Per seat, per resolution or per outcome, at the list prices above</td><td className="fj">A fixed price for the build and a fixed price for support, quoted in writing</td></tr>
                  <tr><td className="feat">Who owns it</td><td>Your settings inside the vendor’s product</td><td className="fj">You own the prompts, answers, code and documentation</td></tr>
                  <tr><td className="feat">Where data sits</td><td>Where the vendor keeps it</td><td className="fj">Your own accounts, in UK or EU cloud regions when you ask</td></tr>
                  <tr><td className="feat">Time to a first answer</td><td>Short. Intercom says under an hour for Fin</td><td className="fj">A few weeks, after a demo on your own data</td></tr>
                  <tr><td className="feat">Best when</td><td>Questions are standard and you already pay for the helpdesk</td><td className="fj">Answers sit outside the helpdesk, or the rules are your own</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ 6. HANDOVER ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">The handover</span>
                <h2>What your team sees when the agent passes a conversation on</h2>
                <div className="stack mt-6">
                  <p>
                    A customer judges an AI agent at the moment it stops being able to help. If the history is lost
                    and the customer has to start again, the goodwill goes with it.
                  </p>
                  <p>
                    So the handover is written down before the build. For each question type we agree with you who
                    receives it, in which queue, during which hours, and what message the customer sees in the
                    meantime. When a rule fires, the agent says a person is taking over, writes a summary into the
                    ticket with the order number and the steps already taken, and assigns it.
                  </p>
                  <p>
                    Asking for a person works on the first request, in whatever words the customer uses.
                  </p>
                  <p>
                    The CMA’s guidance asks for the same thing from the business side: a human in the loop, actively
                    checking that the agent is making correct decisions.
                  </p>
                </div>
                <p style={srcNote}>
                  Source: <a href={SRC_CMA} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>CMA, Complying with consumer law when using AI agents</a>.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/ai-customer-service/ai-customer-service-handover.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A man standing at a desk hands an orange folder to a seated woman who has a headset resting around her neck" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">Rules that trigger a handover</span>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Customer wants a human</div><div className="scorecard-note">however they phrase it</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Hand over</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Complaint or refund dispute</div><div className="scorecard-note">the agent gathers the facts first</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Hand over</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Third message on one problem</div><div className="scorecard-note">a sign the answer is not landing</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Priority</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">No approved answer</div><div className="scorecard-note">the agent does not guess</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Draft</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Your team is closed</div><div className="scorecard-note">customer is told when to expect a reply</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Queue</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Find out whether to rent or build on one short call'}
          sub={'Send us a sample of the questions your customers ask and the name of your helpdesk. On a short call we will say which of the two fits, and if renting is enough we will tell you so.'}
          label={'Plan my AI customer service'}
        />

        {/* ═══ 7. EIGHT CHECKS (NUMBERED LIST) ═══ */}
        <section className="sec-lg" id="before-launch">
          <div className="wrap"><div className={`col-6040 ${styles.launchLayout}`}><div>
                <span className="eyebrow">Before it answers a customer</span>
                <h2>Eight things to settle before an AI agent answers a UK customer</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  The Competition and Markets Authority published guidance on 9 March 2026 on using AI agents with
                  customers. It comes down to four duties: tell people, train the agent, monitor it and fix problems
                  fast. These eight steps turn those duties into a job list. They apply whether you rent or build.
                </p>
                <p style={srcNote}>
                  Source: <a href={SRC_CMA} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>CMA, Complying with consumer law when using AI agents, 9 March 2026</a>.
                </p>
              </div><div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/ai-customer-service/ai-customer-service-sorting.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A man presses an orange sticky note onto a wall beside columns of yellow and green notes while a woman holding a stack of yellow notes watches" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Steps one and two are a sorting job. Three columns of notes on a wall do it as well as any
                    software, one column for each pile.
                  </p>
                </div>
              </div>
              <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout data-launch-checks><tbody>{CHECKS.map((s) => (
                <tr key={s.n}><th scope="row"><span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }}>{s.n}</span><h3 style={{ fontSize: 18 }}>{s.t}</h3></th><td><p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p></td></tr>
              ))}</tbody></table></div></div></div>
        </section>

        {/* ═══ 8. UK REGULATORS (what the buyer must check) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">What you are responsible for</span>
              <h2>What the CMA, the ICO and the FCA say about AI in customer service</h2>
              <p className="lead mt-4">
                UK regulators have published their own pages on AI that talks to customers. This is a guide to those
                pages, read on 11 October 2026, so you know what to check. It is a reading list, not legal advice, and
                your data protection adviser signs off your position.
              </p>
            </div>
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout><tbody><tr className="def"><th><span className="lab">CMA: consumer law</span></th><td><p>
                  You are responsible for what an AI agent does in the same way you are responsible for what an
                  employee does. The CMA says this holds even if someone else designed or provides the agent. A
                  business that breaks consumer protection law could be fined up to 10% of its worldwide turnover,
                  and possibly made to compensate the customers affected.{' '}
                  <a href={SRC_CMA} target="_blank" rel="noopener noreferrer nofollow">Read the CMA guidance</a>.
                </p></td></tr><tr className="def"><th><span className="lab">ICO: telling people</span></th><td><p>
                  People must be given privacy information at the time you collect their data, in clear and plain
                  language. If you apply AI to personal data, the ICO says to be upfront about it and explain your
                  purposes. Its AI guidance adds that the information must be given before the model is applied to
                  the person.{' '}
                  <a href={SRC_ICO_INFORMED} target="_blank" rel="noopener noreferrer nofollow">ICO, right to be informed</a>;{' '}
                  <a href={SRC_ICO_AI} target="_blank" rel="noopener noreferrer nofollow">ICO, transparency in AI</a>.
                </p></td></tr><tr className="def"><th><span className="lab">ICO: risk check and where data goes</span></th><td><p>
                  The ICO lists artificial intelligence among its examples of innovative technology. It says a DPIA,
                  a written check of the risk to people’s data, is required where that is combined with another
                  factor on its list, such as sensitive data. If personal information is sent to a separate
                  organisation outside the UK, the transfer rules apply and the business that starts the transfer is
                  responsible for following them.{' '}
                  <a href={SRC_ICO_DPIA} target="_blank" rel="noopener noreferrer nofollow">ICO, when do we need a DPIA</a>;{' '}
                  <a href={SRC_ICO_TRANSFERS} target="_blank" rel="noopener noreferrer nofollow">ICO, international transfers</a>.
                </p></td></tr><tr className="def"><th><span className="lab">FCA: regulated firms</span></th><td><p>
                  If the FCA regulates you, read the Consumer Duty with your compliance team before an agent answers
                  a customer. The FCA says the Duty sets high standards of consumer protection across financial
                  services and requires firms to put their customers’ needs first.{' '}
                  <a href={SRC_FCA} target="_blank" rel="noopener noreferrer nofollow">FCA, Consumer Duty</a>.
                </p></td></tr></tbody></table></div>
            <p className="mt-8" style={{ maxWidth: 780 }}>
              The ICO’s pages on the right to be informed, transparency in AI and DPIAs each carry a notice that
              they are under review after the Data (Use and Access) Act, so check the live page. On our side, we
              write the AI label into the chat and the first message, keep an audit log of every action the agent
              takes, put a person in front of any reply or action you choose, and give you the list of data the
              agent reads and where it goes.
            </p>
          </div>
        </section>

        {/* ═══ 9. SYSTEMS AND CHANNELS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Systems and channels</span>
                <h2>What a custom agent connects to: helpdesk, shop, accounts, ERP and WhatsApp</h2>
                <div className="stack mt-6">
                  <p>
                    A rented AI agent reads what its own helpdesk can see. A custom agent is built to read your other
                    systems as well, through each product’s API, the documented way one piece of software talks to
                    another. Each connection gets the least access the job needs, so the agent can read an order
                    without being able to refund it.
                  </p>
                </div>
                <ul className="scope-list mt-6" style={{ maxWidth: 600 }}>
                  <li><b>Helpdesks.</b> Zendesk, Intercom, Gorgias, Freshdesk and HubSpot each publish an API for tickets or conversations, so the agent drafts and replies inside the tool your team already uses.</li>
                  <li><b>Shops.</b> Order, delivery and returns data from Shopify and WooCommerce.</li>
                  <li><b>Accounts.</b> Xero, for copy invoices, statements and payment questions from verified customers.</li>
                  <li><b>ERP.</b> Odoo, NetSuite, SAP Business One, ERPNext or a custom system, for stock, lead times and order status. FactoryJet has worked on all of them.</li>
                  <li><b>Channels.</b> Web chat and email first. WhatsApp and an AI voice agent for phone calls can share the same approved answers.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 600 }}>
                  For phone calls, see our <a href="/uk/ai-receptionist">AI receptionist for UK businesses</a>. For
                  WhatsApp, see <a href="/uk/whatsapp-ai-agents">WhatsApp AI agents for UK businesses</a>. For
                  agents that do back-office work such as quotes, purchase orders and bookkeeping, see{' '}
                  <a href="/uk/ai-agents">UK AI agent development</a>. For agents that update deals and contacts in
                  your CRM, see <a href="/uk/crm-ai-agents">CRM AI agents for HubSpot and Salesforce</a>, and for order
                  work inside a Shopify store, see <a href="/uk/shopify-ai-agents">Shopify AI agents for UK stores</a>.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/ai-customer-service/ai-customer-service-customer.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A woman with short white hair sits at a kitchen table looking at her phone, with a cardboard parcel, a white cup and an orange teapot in front of her" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Customers write when it suits them. A question about a parcel sent at breakfast is answered at
                    breakfast, and anything that needs a person is waiting for your team when they start work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. SECTORS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">By kind of business</span>
              <h2>Where AI customer service fits in UK businesses</h2>
              <p className="lead mt-4">
                The piles look different in each trade. These are the question types that usually land in pile one,
                and the ones to keep with people.
              </p>
            </div>
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout><tbody><tr className="svc-card"><th><h3>Online retailers</h3></th><td><p className="mt-4">Order status with Royal Mail, Evri or DPD tracking, returns inside your policy, sizes and stock. Black Friday and the Boxing Day sales are when an answer at any hour matters most.</p></td></tr><tr className="svc-card"><th><h3>Trade and wholesale distributors</h3></th><td><p className="mt-4">Stock and lead times from the ERP, copy invoices and statements from Xero, order status for account customers. Price questions go to the rep who owns the account.</p></td></tr><tr className="svc-card"><th><h3>Software and subscriptions</h3></th><td><p className="mt-4">How-to questions from your help centre, plan and billing questions, and bug reports sorted and passed to the right engineer with the details already gathered.</p></td></tr><tr className="svc-card"><th><h3>Lettings and property managers</h3></th><td><p className="mt-4">Repair reports logged with the address, the fault and photos, viewing requests and rent statement copies. Anything about safety goes to a person at once.</p></td></tr><tr className="svc-card"><th><h3>Travel, leisure and bookings</h3></th><td><p className="mt-4">Booking changes and cancellations inside your terms, opening times and what to bring. Group enquiries are passed to your team with the dates and numbers.</p></td></tr><tr className="svc-card"><th><h3>Financial services</h3></th><td><p className="mt-4">Sorting and drafting first, with a person approving every reply and an audit log of each action, so your compliance team can see what was sent and why.</p></td></tr></tbody></table></div>
            <p className="mt-8" style={{ maxWidth: 760 }}>
              If you have not yet decided that customer service is the right first project for AI, start with our{' '}
              <a href="/uk/ai-consulting">AI consultancy for UK businesses</a>. To compare firms, read{' '}
              <a href="/blog/best-ai-automation-agencies-uk-2026">the best AI automation agencies in the UK (2026)</a>.
              For AI built into your CRM, ERP or shop, see{' '}
              <a href="/uk/ai-development">UK AI development</a>.
            </p>
          </div>
        </section>

        {/* ═══ 11. HOW FACTORYJET WORKS + QUESTION BOXES ═══ */}
        <section className="sec-lg" id="how-we-work">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Working with FactoryJet</span>
                <h2>How FactoryJet builds and supports an AI customer service agent</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  We design, build and support the agent, and you own it. A first project runs in four stages.
                </p>
                <figure className={styles.processFigure} data-process-flow aria-label="How FactoryJet builds and supports an AI customer service agent"><ul className={`scope-list num-list mt-6 ${styles.processFlow}`} style={{ maxWidth: 580 }}>
                  <li><b>Scoping call and demo.</b> You send a sample of real conversations. We show working software on your own data before a contract.</li>
                  <li><b>Draft mode.</b> Each reply is prepared by the agent in your helpdesk, and a person approves it before it goes.</li>
                  <li><b>Live on one channel.</b> The question types that passed in draft mode are answered by the agent alone, on one channel, with the handover rules switched on.</li>
                  <li><b>More channels and systems.</b> Email, WhatsApp, voice and further systems are added one at a time, each tested the same way.</li>
                </ul></figure>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  Every action the agent takes is written to an audit log your team can read. Customer data stays in
                  your own accounts, in UK or EU cloud regions when you ask for that. FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short scoping call, and can keep managing the
                  servers, AI, APIs and maintenance after launch so your team does not have to. We work remotely with
                  UK clients and hold calls in UK business hours.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Plan my AI customer service" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>

              <div className="card card-top-orange">
                <span className="eyebrow">Google UK question boxes, 11 October 2026</span>
                <p className="mt-4" style={{ fontSize: 14 }}>
                  Google UK showed these questions beside its results for “ai customer service”, “ai customer service
                  chatbot” and “ai customer service agent” on 11 October 2026. Each one is answered in the FAQ below.
                </p>
                <ul className="scope-list mt-4">
                  {QUESTION_BOXES.map((q) => (
                    <li key={q}><a href="#faq">{q}</a></li>
                  ))}
                </ul>
                <p style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 10 }}>Source: Google UK results pulled through DataForSEO, 11 October 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg dot-grid" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>AI customer service questions UK buyers ask</h2>
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
                  <ModalCTAButton label="Ask the founder a question →" region="uk" modalVariant="default" btnVariant="secondary-light" />
                  <p>Bhavesh replies within one business day.</p>
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

        {/* ═══ 13. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>Bring your helpdesk name and your ten most common questions</h2>
            <p className="mt-4">
              Leave your name and work email. Bhavesh replies within one business day to arrange a short call about
              the questions your customers ask and the systems the answers sit in. You leave the call knowing
              whether to rent or build.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Plan my AI customer service" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/contact" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>Contact us</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
