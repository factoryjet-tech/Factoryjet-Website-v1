import type { Metadata } from 'next';
import styles from './visual-qa.module.css';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/whatsapp-ai-agents';
const UPDATED = '2026-10-11';
const TITLE = 'WhatsApp Chatbot & AI Agents for UK Businesses | FactoryJet';
const H1 = 'WhatsApp AI Agents for UK Businesses: A Chatbot That Answers Customers and Books Work in Your Own Systems';
const DESCRIPTION =
  'Custom WhatsApp chatbots and AI agents for UK businesses. What Meta requires on opt-in, templates and the 24-hour window, what PECR covers, and how we build.';

/* Colours and fonts, copied by value from ../ai-agents/ai-agents.css so inline
   styles stay on-system without CSS custom property references in this file. */
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

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. Never hand-copy a
   second list here. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'WhatsApp AI Agents', url: CANONICAL },
];

/* ─── External sources. Every one was fetched on 2026-10-11 and the claim it
       supports was read in the fetched body. Quotes are logged in
       sources.json (hand-back folder for key uk-whatsapp). ──────────────── */
// WhatsApp Business Messaging Policy. "Last updated: September 23, 2026".
const SRC_META_POLICY = 'https://whatsappbusiness.com/policy/';
// Meta Terms for WhatsApp Business Platform. "Last Modified: September 23, 2026". Section 4.7 AI Providers.
const SRC_META_TERMS = 'https://www.facebook.com/legal/Meta-Terms-for-WhatsApp-Business-Platform';
// WhatsApp for Business FAQ: app vs Platform, routes onto the Platform.
const SRC_META_QA = 'https://whatsappbusiness.com/resources/faq/';
// WhatsApp Business app features: greeting, away messages, quick replies, labels, catalogue.
const SRC_META_APP_FEATURES = 'https://whatsappbusiness.com/products/business-app-features/';
// Meta Business Agent product page and WhatsApp Help Center article.
const SRC_META_AGENT = 'https://whatsappbusiness.com/products/business-app-ai-agent/';
const SRC_META_AGENT_HELP = 'https://faq.whatsapp.com/291930066973116';
// Developer pages (developers.facebook.com/documentation/business-messaging/whatsapp/...).
const SRC_META_PLATFORM = 'https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform';
const SRC_META_OPTIN = 'https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in';
const SRC_META_SERVICE = 'https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages';
const SRC_META_TEMPLATES = 'https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview/';
const SRC_META_CATEGORIES = 'https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization/';
const SRC_META_LIMITS = 'https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits/';
const SRC_META_NUMBERS = 'https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers/';
const SRC_META_APP_ONBOARD = 'https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/';
const SRC_META_ENFORCE = 'https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement/';
const SRC_META_ROUTING = 'https://developers.facebook.com/documentation/business-messaging/whatsapp/conversation-routing/overview/';
// Pricing explainer ("Updated: Sep 30, 2026") and the interactive rate card. No rate is printed on this page.
const SRC_META_PRICING = 'https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing';
const SRC_META_RATES = 'https://whatsappbusiness.com/products/platform-pricing/';
// ICO, Guide to PECR, electronic mail marketing.
const SRC_ICO_PECR =
  'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/';
// ICO, detailed guidance on direct marketing using electronic mail ("Latest updates - 28 April 2026").
const SRC_ICO_KEY =
  'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/key-concepts-for-direct-marketing-using-electronic-mail/';
const SRC_ICO_COMPLY =
  'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/how-do-we-comply-with-the-pecr-electronic-mail-marketing-rules/';
const SRC_ICO_ELSE =
  'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/what-else-do-we-need-to-consider/';
// ICO, right to be informed: "If you apply Artificial Intelligence (AI) to personal data: Be upfront about it".
const SRC_ICO_INFORMED =
  'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-be-informed/';
// A1 Automation London, UK chatbot pricing guide, modified 2026-07-14. Setup column only is used.
const SRC_A1 = 'https://aiautomationagencylondon.co.uk/blog/ai-chatbot-cost-in-uk/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'WhatsApp chatbot basics' },
  { key: 'meta',   label: 'Meta’s rules' },
  { key: 'setup',  label: 'Numbers, setup & systems' },
  { key: 'cost',   label: 'Cost & ownership' },
  { key: 'uk',     label: 'PECR, UK GDPR & safety' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── WhatsApp chatbot basics ──
  {
    category: 'basics',
    question: 'What is a WhatsApp chatbot?',
    answer: 'A WhatsApp chatbot is software that answers messages sent to a business WhatsApp number. A basic one follows a menu of fixed replies. An AI agent reads free text, answers from information the business has approved, and can do a job in another system, such as booking a visit or finding an order. Business chatbots run on Meta’s WhatsApp Business Platform, which sets rules on opt-in, templates and a 24-hour reply window.',
  },
  {
    category: 'basics',
    question: 'Is AI available on WhatsApp Business?',
    answer: 'Yes, in two forms. Meta Business Agent is Meta’s own AI agent, set up from the Tools tab of the WhatsApp Business app. Meta’s help page says it is available in limited countries to select businesses, so it may not appear on your account yet. The other form is a custom AI agent built on the WhatsApp Business Platform, which connects to your own diary, order or job system.',
  },
  {
    category: 'basics',
    question: 'Are bots allowed on WhatsApp?',
    answer: 'Yes, for businesses that follow Meta’s rules. The WhatsApp Business Messaging Policy, last updated 23 September 2026, says you may use automation when responding inside the 24-hour window, as long as customers have a prompt, clear and direct route to a person. Meta’s Platform terms bar AI providers from offering a general-purpose assistant as the main service. Meta’s developer pages also say that using unauthorised third-party tools is prohibited.',
  },
  {
    category: 'basics',
    question: 'What is the difference between a WhatsApp chatbot and a WhatsApp AI agent?',
    answer: 'A chatbot answers. An agent answers and acts. A menu chatbot sends the reply that matches the button a customer tapped. An AI agent understands a typed question, checks your diary, order system or CRM through a live connection, makes the booking or finds the order, and hands the chat to a person when your rules say so. On WhatsApp both run on the same Platform under the same Meta rules.',
  },
  {
    category: 'basics',
    question: 'Can ChatGPT be connected to WhatsApp for my business?',
    answer: 'A business can use an AI model, including the models behind ChatGPT, to answer its own customers on WhatsApp. Meta’s pricing page describes service messages as ones that can be powered by a third-party AI solution or by people. Section 4.7 of Meta’s Platform terms bars something different, which is an AI provider offering a general-purpose assistant on WhatsApp as the main service. Our reading is that the agent has to be about your business, such as your orders and your bookings.',
  },
  {
    category: 'basics',
    question: 'Which WhatsApp chatbot is best for a UK business?',
    answer: 'It depends on what the chat has to do. For a few chats a day, the free WhatsApp Business app with a greeting, an away message and quick replies is enough. For common questions answered from your website and catalogue, Meta Business Agent may do, where Meta has made it available. For standard flows, a chatbot tool subscription works. When the chat has to read and write to your own diary, order or job system, a custom agent is the fit.',
  },

  // ── Meta’s rules ──
  {
    category: 'meta',
    question: 'What is the 24 hour rule on WhatsApp?',
    answer: 'When a customer messages or calls your business number, Meta starts a 24-hour timer called a customer service window. Inside it you can reply with free-form messages, and each new customer message resets the timer to 24 hours. Once it closes, the only messages you can send are templates Meta has approved. The rule applies to the WhatsApp Business Platform. Meta’s developer pages say messages sent from the WhatsApp Business app are not subject to the window.',
  },
  {
    category: 'meta',
    question: 'What is a WhatsApp message template?',
    answer: 'A template is a message you write in advance and submit to Meta, with gaps for details such as a name or a time. Meta files each one as marketing, utility or authentication, and says templates generally require approval before you can send them. Templates are the only messages a business can send outside the 24-hour window, so appointment reminders, delivery updates and offers each need one.',
  },
  {
    category: 'meta',
    question: 'Do customers have to opt in before we message them on WhatsApp?',
    answer: 'Yes. Meta’s policy says you may only contact people on WhatsApp if they gave you their number and you have received their opt-in. The opt-in must make clear that the person is agreeing to messages from your business, by name. Meta accepts a website form, SMS, a phone menu or a signed paper form. It also says the method must comply with the law that applies to you, which in the UK means checking PECR for marketing messages.',
  },
  {
    category: 'meta',
    question: 'How do I send 10,000 messages on WhatsApp?',
    answer: 'Through the WhatsApp Business Platform, with approved templates, to people who have opted in. Meta caps how many different people you can message outside the service window in a moving 24 hours. A new business portfolio starts at 250. Verifying your business is one route to 2,000, and Meta then raises the limit automatically to 10,000, 100,000 and unlimited when its quality criteria are met. If the messages are marketing, PECR’s rules on marketing to individuals apply as well.',
  },
  {
    category: 'meta',
    question: 'Can we do WhatsApp automation for reminders and order updates?',
    answer: 'Yes. Reminders, booking confirmations and delivery updates are what Meta calls utility templates, which are messages triggered by something the customer did, with no promotional content. Your booking or order system triggers the send, the customer’s details fill the gaps, and replies come back to the agent. Meta’s guidelines say a template that mixes an update with a promotion is filed as marketing, so keep offers in separate templates.',
  },
  {
    category: 'meta',
    question: 'Does a WhatsApp chatbot need a handover to a person?',
    answer: 'Meta’s policy requires it. A business may use automation inside the 24-hour window but must also offer prompt, clear and direct escalation paths. The policy lists a transfer to a human agent in the chat, a phone number, an email address, web support, a visit to a shop or branch, or a support form. We build the handover as a transfer in the same chat, with the conversation so far passed to a named person on your team.',
  },
  {
    category: 'meta',
    question: 'Can WhatsApp block or ban a business account?',
    answer: 'Yes. Meta’s enforcement page says an account that breaks its policies first gets a warning. Repeated breaches bring a 1 or 3 day block on sending templates, then 5, 7 or 30 day blocks on sending any message, then an account lock that only an appeal can lift, and in the end permanent removal from the Platform. Meta also says it may limit a business that receives excessive negative feedback from users.',
  },

  // ── Numbers, setup & systems ──
  {
    category: 'setup',
    question: 'How do I create a custom WhatsApp chatbot?',
    answer: 'Meta gives two routes onto the Platform. A business with developers can sign up directly, call the Cloud API and set up webhooks, which are the messages Meta sends your server when a customer writes. Or it can work through one of Meta’s Business Solution Providers. Either way you need a Meta business portfolio, a WhatsApp account, a registered phone number and a display name. The AI agent, its approved answers and its connections to your systems are built on top of that.',
  },
  {
    category: 'setup',
    question: 'How do I activate a WhatsApp chatbot on my number?',
    answer: 'For Meta’s own agent, Meta’s steps are to open the Tools tab of the WhatsApp Business app, choose Meta Business Agent and follow the prompts, if your account has it. For a custom agent, the number is registered on the WhatsApp Business Platform, the agent is connected to Meta’s Cloud API, and incoming messages start reaching it. We switch a custom agent on for replies first and add outbound templates afterwards.',
  },
  {
    category: 'setup',
    question: 'Can we keep our existing WhatsApp Business number?',
    answer: 'Usually, yes. Meta’s developer pages say a number already in use with WhatsApp cannot be registered on the Platform unless it is deleted from the app first. There is a second route for WhatsApp Business app users, which is a signup flow run by a Meta Solution Partner or Tech Provider that connects the same number to the Cloud API while you keep the app. Meta says chats stay in sync between the two, and that broadcast lists and disappearing messages are switched off.',
  },
  {
    category: 'setup',
    question: 'Which systems can a WhatsApp agent connect to?',
    answer: 'Most systems that offer an API, the documented door other software uses to read and write data. FactoryJet builds WhatsApp, HubSpot and Xero integrations, and has worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs. For a trade or a clinic the first connection is usually the diary or job management system, so the agent can check a slot and write the booking itself. For an online shop it is the order data in Shopify or WooCommerce.',
  },
  {
    category: 'setup',
    question: 'How long does it take to build a WhatsApp AI agent?',
    answer: 'Our UK AI development page gives 6 to 14 weeks for a focused first project, from kick-off to live use, and a clear, narrow job shortens it. One WhatsApp number, one connected system and replies only is a narrow job. Two things sit on Meta’s side of the schedule, which are registering the number and display name and getting templates approved, so we start both early.',
  },
  {
    category: 'setup',
    question: 'Can the chatbot send buttons, pictures and booking forms?',
    answer: 'Yes. Inside the service window Meta’s Cloud API supports text, images, documents, audio, up to three reply buttons, list menus, a button that asks the customer to share a location, and WhatsApp Flows, which are short forms inside the chat for jobs such as booking an appointment. A heating engineer’s customer can send a photo and a location, and a patient can pick a slot from a list, without leaving WhatsApp.',
  },

  // ── Cost & ownership ──
  {
    category: 'cost',
    question: 'How much does a WhatsApp chatbot cost?',
    answer: 'The WhatsApp Business app, with its greeting, away message and quick replies, is free to download and use. A custom AI chatbot connected to your systems is a build. A1 Automation London’s UK pricing guide, last updated 14 July 2026, puts typical UK setup for a custom AI chatbot at £8,000 to £60,000 or more. That range covers AI chatbots in general. Meta’s message charges are separate and are on its rate card. FactoryJet quotes a fixed price in writing after a short scoping call.',
  },
  {
    category: 'cost',
    question: 'Is WhatsApp Business chat free?',
    answer: 'The WhatsApp Business app is free to download and, in Meta’s words, free to use. The WhatsApp Business Platform is different. Meta charges the business for each message it delivers, at a rate set by the message category and the recipient’s country, and publishes the rates. Meta changed how it charges for replies inside the service window on 1 October 2026, so check the date of any guide you read against Meta’s pricing page.',
  },
  {
    category: 'cost',
    question: 'How do I get a free WhatsApp bot?',
    answer: 'The free route is the WhatsApp Business app. Its greeting message welcomes new customers, its away message replies outside your hours, and quick replies store answers you send often. That is automation without AI and without the Platform. Any chatbot on the Platform, whatever the tool itself charges, sends messages that Meta bills under its published rate card. A bot that reads your diary or order system is a build.',
  },
  {
    category: 'cost',
    question: 'Who looks after the WhatsApp agent after launch?',
    answer: 'We do, with you. FactoryJet quotes the build and the ongoing support as fixed prices in writing after a short scoping call, and keeps managing the servers, AI, APIs and maintenance so your team does not have to. Support covers reviewing transcripts with you, updating approved answers, submitting new templates, and adjusting the agent when Meta changes its rules, as it did in January and October 2026.',
  },
  {
    category: 'cost',
    question: 'Do we own the WhatsApp chatbot you build?',
    answer: 'Yes. The agent, its prompts, its approved answers, the integrations and the documentation are yours. The WhatsApp account, the number, the display name and the templates sit in your own Meta business portfolio. If you later move support in-house or to another firm, everything is already in your name.',
  },
  {
    category: 'cost',
    question: 'Can we see it working before we sign a contract?',
    answer: 'Yes. Before you sign, we show you working software built on your own data. For a WhatsApp agent that is a demo answering from your sample FAQs, price list and booking rules, so you can check its replies against what your team would say. You see how it handles your real questions before any contract.',
  },

  // ── PECR, UK GDPR & safety ──
  {
    category: 'uk',
    question: 'Do marketing messages on WhatsApp fall under PECR?',
    answer: 'On the ICO’s wording, yes. PECR’s rules cover electronic mail, and the ICO’s guidance lists in-app messages and direct messaging on social media alongside email and texts. The rule is that you must not send unsolicited marketing to individuals unless they have specifically consented or the soft opt-in for existing customers applies. The ICO’s page does not name WhatsApp, so confirm how it applies to your messages with your data protection adviser.',
  },
  {
    category: 'uk',
    question: 'Is an appointment reminder or delivery update on WhatsApp marketing?',
    answer: 'Not if it only gives information. The ICO says messages sent purely for administrative or customer service purposes do not count as direct marketing, provided they do not promote anything. A reminder of tomorrow’s appointment or a dispatch notice fits that. Add a discount or a product suggestion and the ICO says the message becomes direct marketing. Meta draws the same line, and files a template that mixes an update with a promotion as marketing.',
  },
  {
    category: 'uk',
    question: 'Do we have to tell customers they are chatting with an AI?',
    answer: 'The ICO’s guidance on the right to be informed says that if you apply AI to personal data you should be upfront about it and explain your purposes, and that privacy information must be given at the time you collect someone’s data. A chat that opens by saying the customer is talking to an automated assistant, with a link to your privacy notice, follows that guidance. We write that opening line into the agent.',
  },
  {
    category: 'uk',
    question: 'Can a clinic or dental practice use a WhatsApp chatbot?',
    answer: 'For the admin side, yes. That means booking, moving and cancelling appointments, directions and what to bring. Meta’s policy says not to use WhatsApp to send or request health-related information where regulations prohibit sending it to systems without heightened protections, and it restricts medical and healthcare products as a category. So the agent keeps away from symptoms and clinical questions and hands those to your staff. Confirm the detail for your practice with your data protection adviser.',
  },
  {
    category: 'uk',
    question: 'Can our WhatsApp chats be used to train AI?',
    answer: 'It depends on the product. Meta’s help page for Meta Business Agent says chats where it is connected are collected by Meta to improve AI at Meta. For a custom agent, section 4.7 of Meta’s Platform terms says that where an AI provider acts as your Solution Provider, Platform data must not be used to create, develop, train or improve AI models, apart from fine-tuning a model for your exclusive use. We build so that customer data stays in your own accounts.',
  },
];

/* ─── JSON-LD. The Organization is referenced by @id only and is defined
       once, sitewide. Never redefine it here. ──────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'WhatsApp AI Agents UK',
      serviceType: 'WhatsApp chatbot and WhatsApp AI agent design, build, integration and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Custom WhatsApp chatbots and AI agents for UK businesses, built on Meta’s WhatsApp Business Platform. The agent answers customers on the business WhatsApp number, books visits and looks up orders in the business’s own systems, sends approved reminder and update templates, and hands the chat to a person. Designed around Meta’s opt-in, template and 24-hour window rules, supported after launch, and owned by the client.',
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
      'WhatsApp AI agents for UK trades, clinics, estate agents and online shops, built on the WhatsApp Business Platform around Meta’s rules as read on 11 October 2026.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/whatsapp-ai-agents/whatsapp-ai-agents-og.webp', width: 1200, height: 630, alt: 'A heating engineer in a navy work jacket reads his phone beside an open white van on a street of red-brick terraced houses' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;

export default function WhatsAppAiAgentsUKPage() {
  return (
    <>
      <script id="ld-uk-whatsapp-ai-agents" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />UK WhatsApp AI Agents</span>
                  <span className="chip">Meta’s Rules Read 11 Oct 2026</span>
                  <span className="chip">You Own What We Build</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet designs, builds and supports custom WhatsApp chatbots and AI agents for UK businesses.
                  The agent answers customers on your WhatsApp number, books visits into your diary, looks up orders
                  in your shop system and passes the chat to your team when a person should take it. We design it
                  around the rules Meta sets for business messaging, and you own what we build.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />11 October 2026</div>
                </div>

                <div className={styles.heroForm} style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_whatsapp_ai_agents_hero" submitLabel="Plan my WhatsApp agent" />
                </div>
                
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/whatsapp-ai-agents/whatsapp-ai-agents-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="A heating engineer in a navy work jacket reads his phone beside an open white van with copper pipes inside, on a street of red-brick terraced houses" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What the agent does in one chat</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Replies on your WhatsApp number</div><div className="scorecard-note">from answers you have approved</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Any hour</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Books the visit or finds the order</div><div className="scorecard-note">in your diary, job or shop system</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Live data</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Passes the chat to a named person</div><div className="scorecard-note">with the conversation so far attached</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Handover</div>
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
              <span className="lab">What is a WhatsApp AI agent, and can a UK business run one?</span>
              <p>
                A WhatsApp AI agent is a chatbot on your business WhatsApp number. It reads each message, answers
                from information you approve, and does jobs in your systems, such as booking a visit or finding an
                order. UK businesses run one on Meta’s WhatsApp Business Platform, which requires opt-in, approved
                templates for messages you start, and replies inside a 24-hour window.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Four terms this page uses</span>
              <p>
                The <b>WhatsApp Business app</b> is Meta’s free phone app for small businesses. The{' '}
                <b>WhatsApp Business Platform</b> is Meta’s API, a way for software to send and receive WhatsApp
                messages. A <b>template</b> is a message Meta approves before you can send it. The{' '}
                <b>customer service window</b> is the 24 hours after a customer’s last message.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              We pulled Google’s UK results for six WhatsApp chatbot searches on 11 October 2026. Of the 49 pages
              listed, 20 had titles that were lists of tools or build-it-yourself guides. This page starts from the
              rule book. We read Meta’s policy, terms and developer pages and the ICO’s marketing guidance on the same
              day, and each rule below links to the page it came from. Two of them changed this year. Meta’s terms on
              AI providers took effect on 15 January 2026, and Meta changed how it charges for replies on 1 October
              2026.
            </p>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout data-sourced-facts><tbody>{[
                { v: '24 hours', t: 'is how long Meta’s customer service window stays open after a customer messages you. Each new message resets it', s: 'Meta, service messages', u: SRC_META_SERVICE },
                { v: 'Opt-in', t: 'is required before a business messages people on WhatsApp, and it must name the business', s: 'Meta, get opt-in for WhatsApp', u: SRC_META_OPTIN },
                { v: '250', t: 'different people is where a new business portfolio starts for messages outside that window, in a moving 24 hours', s: 'Meta, messaging limits', u: SRC_META_LIMITS },
                { v: 'PECR', t: 'covers in-app messages and private messages on social media, in the ICO’s list of what counts as electronic mail', s: 'ICO, key concepts', u: SRC_ICO_KEY },
              ].map((r) => (
                <tr key={r.t}><th scope="row"><div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div></th><td><p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p></td><td><a href={r.u} {...(r.u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer nofollow' } : {})} className={styles.citation} style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, textDecoration: 'underline' }}>{r.s}</a></td></tr>
              ))}</tbody></table></div>
          </div>
        </section>

        {/* ═══ 4. THREE META PRODUCTS + COMPARISON TABLE ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Start here</span>
              <h2>The WhatsApp Business app, Meta Business Agent and the Business Platform are three different things</h2>
              <p className="lead mt-4">
                Searches for a WhatsApp chatbot mix up three Meta products. Which one you need decides the rules
                that apply and what the chatbot can do.
              </p>
            </div>
            <ul className="col-3 mt-10">
              <li className="card">
                <h3>WhatsApp Business app</h3>
                <p className="mt-4">
                  Meta describes it as a free-to-download app for small businesses to talk to customers from a single
                  device, with limited customisation and integration with other tools. Its built-in automation is a
                  greeting message, an away message and quick replies. To connect a number to your diary or order
                  system you need the Platform.
                </p>
              </li>
              <li className="card">
                <h3>Meta Business Agent</h3>
                <p className="mt-4">
                  Meta’s own AI agent. In the app, Meta says it learns from your Facebook Page, past chats and website
                  and replies for you. On the Platform, Meta’s developer pages describe custom connectors to your
                  external APIs. Meta’s help page says it is available in limited countries to select businesses, and
                  that Meta collects chats where it is connected to improve AI at Meta.
                </p>
              </li>
              <li className="card card-top-orange">
                <h3>WhatsApp Business Platform</h3>
                <p className="mt-4">
                  Meta’s API. Meta pitches it at medium and large businesses that message customers at scale, and a
                  small firm can use it too when a developer or provider sets it up. Software sends and receives
                  messages through the Cloud API. A custom AI agent lives here, and the rules on opt-in, templates and
                  the 24-hour window apply here.
                </p>
              </li>
            </ul>
            <p style={srcNote}>
              Sources, read 11 October 2026: <a href={SRC_META_QA} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Meta, WhatsApp for Business FAQ</a>;{' '}
              <a href={SRC_META_APP_FEATURES} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Meta, Business app features</a>;{' '}
              <a href={SRC_META_AGENT} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Meta Business Agent on WhatsApp</a>;{' '}
              <a href={SRC_META_AGENT_HELP} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>WhatsApp Help Center, about Meta Business Agent</a>;{' '}
              <a href={SRC_META_PLATFORM} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Meta, about the WhatsApp Business Platform</a>.
            </p>

            <h3 className="mt-12" style={{ maxWidth: 820 }}>Four ways to answer customers on WhatsApp, side by side</h3>
            <div className={`card mt-6 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 820 }} data-columns={5}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Custom AI agent on the Platform (FactoryJet)</th>
                    <th>Chatbot tool on the Platform</th>
                    <th>Meta Business Agent</th>
                    <th>Business app on its own</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Who answers the customer</td><td className="fj"><span className="yes">An agent built for your business, with your team taking over by rule</span></td><td><span className="partial">The tool’s bot, set up by you</span></td><td><span className="partial">Meta’s AI, taught from your content</span></td><td><span className="yes">You and your staff</span></td></tr>
                  <tr><td className="feat">Reads and writes to your systems</td><td className="fj"><span className="yes">Yes, built for your diary, job, order and CRM systems</span></td><td><span className="partial">Where the tool has a connector</span></td><td><span className="partial">Custom connectors on the Platform, per Meta</span></td><td><span className="no">Limited integration, per Meta</span></td></tr>
                  <tr><td className="feat">Control over what it says</td><td className="fj"><span className="yes">Answers you approve, tested on your real questions</span></td><td><span className="partial">The tool’s settings</span></td><td><span className="partial">Instructions and knowledge you add</span></td><td><span className="yes">Full. You type it</span></td></tr>
                  <tr><td className="feat">Handover to a person</td><td className="fj"><span className="yes">Rules you set, with the chat so far passed on</span></td><td><span className="partial">As the tool allows</span></td><td><span className="partial">You step in, or flag topics to hand off</span></td><td><span className="yes">It is a person already</span></td></tr>
                  <tr><td className="feat">Chats used to improve AI</td><td className="fj"><span className="yes">Customer data stays in your own accounts</span></td><td><span className="partial">Ask the provider</span></td><td><span className="partial">Collected by Meta to improve AI at Meta, per its help page</span></td><td>No AI involved</td></tr>
                  <tr><td className="feat">Who owns what is built</td><td className="fj"><span className="yes">You do</span></td><td><span className="partial">You rent the tool</span></td><td><span className="partial">Meta’s product, your settings</span></td><td>Nothing to build</td></tr>
                  <tr><td className="feat">Effort to set up</td><td className="fj"><span className="partial">A scoping call, then we build</span></td><td><span className="yes">You configure it</span></td><td><span className="yes">Minutes, on Meta’s own page</span></td><td><span className="yes">Download and register</span></td></tr>
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              Meta Business Agent cells come from Meta’s product page, developer pages and help page, read 11 October 2026. The chatbot tool column describes the category, and each tool differs.
            </p>

            <div className="col-6040 mt-12">
              <div>
                <h3>Which one fits which business</h3>
                <div className="stack mt-6">
                  <p>
                    The free app is the right choice for a sole trader who answers a few chats a day. Meta Business
                    Agent can cover common questions from your website and catalogue, where Meta has opened it to your
                    account. A chatbot tool suits a team with standard flows and someone to configure it.
                  </p>
                  <p>
                    A custom agent is the fit when the chat depends on your own data and rules. Examples are
                    offering a slot from the engineers’ diary by postcode, finding an order across your shop and
                    courier, applying your cancellation policy, or sending urgent messages to whoever is on call.
                    For AI that works across more of the business than one channel, see our{' '}
                    <a href="/uk/ai-agents">UK AI agent development service</a>.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Pick by the job</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">A few chats a day, answered by you</div><div className="scorecard-note">greeting, away message, quick replies</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>App</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Common questions from your website</div><div className="scorecard-note">if Meta has opened it to your account</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Meta’s agent</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Standard flows and a shared inbox</div><div className="scorecard-note">someone on your team configures it</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Tool</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Bookings or orders from your systems</div><div className="scorecard-note">the chat reads and writes your data</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Custom</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Rules only your business knows</div><div className="scorecard-note">postcodes, emergencies, who is on call</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Custom</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 5. META’S RULES (NUMBERED LIST) ═══ */}
        <section className="sec-lg" id="meta-rules">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">What Meta requires</span>
                <h2>Seven Meta rules every WhatsApp chatbot has to work inside</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  These come from Meta’s WhatsApp Business Messaging Policy, its Platform terms and its developer
                  pages. We read each one on 11 October 2026, and the card beside this text shows the date printed on
                  each page.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Pages we read, and the date on each</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">WhatsApp Business Messaging Policy</div><div className="scorecard-note">last updated</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>23 Sep 2026</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Meta Terms for WhatsApp Business Platform</div><div className="scorecard-note">last modified</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>23 Sep 2026</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Pricing on the WhatsApp Business Platform</div><div className="scorecard-note">updated</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>30 Sep 2026</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Get opt-in for WhatsApp</div><div className="scorecard-note">updated</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>16 Jun 2026</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">ICO, direct marketing using electronic mail</div><div className="scorecard-note">latest update</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>28 Apr 2026</div></div>
              </div>
            </div>
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout><tbody>{[
                { n: '01', t: 'Opt-in comes first', d: 'Meta’s policy says you may only contact people on WhatsApp if they gave you their number and you have their opt-in. The opt-in must say the person is agreeing to hear from you and must name your business. Meta lists a website form, SMS, a phone menu and a signed paper form as accepted methods, and adds that you must also follow the law that applies to you. In the UK that brings in PECR, covered further down.', s: 'Meta, get opt-in for WhatsApp', u: SRC_META_OPTIN },
                { n: '02', t: 'Templates start conversations', d: 'Outside the service window you can only send a template, which is a message written in advance and submitted to Meta. Each one is filed as marketing, utility or authentication. Meta’s policy keeps the right to review, approve, pause and reject any template at any time, so reminders and order updates have to be written and approved before launch.', s: 'Meta, template fundamentals', u: SRC_META_TEMPLATES },
                { n: '03', t: 'The 24-hour window sets when the agent can talk freely', d: 'When a customer messages or calls you, a 24-hour timer starts, and each new customer message resets it. Inside the window the agent can reply in free text, with reply buttons, list menus, pictures, documents and a request for the customer’s location. Once it closes, only approved templates go out.', s: 'Meta, service messages', u: SRC_META_SERVICE },
                { n: '04', t: 'There must be a route to a person', d: 'Meta allows automation inside the window on one condition, which is “prompt, clear, and direct escalation paths”. The policy lists a transfer to a human agent in the chat, a phone number, an email address, web support, a visit to a shop or branch, or a support form. A chatbot with no way through to a person does not meet the policy.', s: 'WhatsApp Business Messaging Policy, section 2', u: SRC_META_POLICY },
                { n: '05', t: 'Some details stay out of the chat', d: 'The policy says not to share or ask for full payment card numbers, financial account numbers or personal ID numbers. It bars sending or requesting health information where regulations prohibit passing it to systems without heightened protections. It also restricts whole product categories, with limited exceptions by country, including alcohol, tobacco and medical and healthcare products. Read the list against what you sell.', s: 'WhatsApp Business Messaging Policy, sections 3 and 4', u: SRC_META_POLICY },
                { n: '06', t: 'The AI has to serve your business', d: 'Section 4.7 of Meta’s Platform terms bars AI providers from using the Platform to offer AI where the AI is the primary thing on offer, such as a general-purpose assistant, outside the countries where Meta is legally required to allow it. Meta’s pricing page describes replies that can be powered by a third-party AI solution, so an agent answering your own customers is a different case. The same section says that where an AI provider acts as your Solution Provider, Platform data must not be used to create, develop, train or improve AI models, apart from fine-tuning a model for your exclusive use.', s: 'Meta Terms for WhatsApp Business Platform, section 4.7', u: SRC_META_TERMS },
                { n: '07', t: 'Volume is earned', d: 'A new business portfolio can message 250 different people outside the service window in a moving 24 hours. Verifying your business is one of the routes to 2,000, and Meta then raises the limit automatically to 10,000, 100,000 and unlimited when its quality criteria are met. Repeated policy breaches bring a warning first, then sending blocks of 1 to 30 days, then an account lock.', s: 'Meta, messaging limits', u: SRC_META_LIMITS },
              ].map((s) => (
                <tr key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}><th><span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }}>{s.n}</span><h3 style={{ fontSize: 18 }}>{s.t}</h3></th><td><p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p><a href={s.u} target="_blank" rel="noopener noreferrer nofollow" className={styles.citation} style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, textDecoration: 'underline' }}>{s.s}</a></td></tr>
              ))}</tbody></table></div>
            <p style={srcNote}>
              Also read for this list: <a href={SRC_META_CATEGORIES} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Meta, template categorisation</a>;{' '}
              <a href={SRC_META_ENFORCE} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Meta, policy and spam enforcement</a>;{' '}
              <a href={SRC_META_PRICING} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Meta, pricing on the WhatsApp Business Platform</a>.
            </p>
          </div>
        </section>

        {/* ═══ 6. WORKED EXAMPLE (SECOND TABLE) ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">The rules in one conversation</span>
                <h2>One viewing request, message by message, and the rule that applies to each</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  We wrote this example for the page to show the rules working together. It is an estate agent, and it
                  is not a client project. The same pattern fits a heating firm booking a call-out or a clinic booking
                  an appointment.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/whatsapp-ai-agents/whatsapp-ai-agents-house-viewing.webp" width={1200} height={800} loading="lazy" decoding="async" alt="An estate agent in a charcoal coat and orange scarf holds house keys and a phone at the green front door of a brick terraced house as a couple walk up the path" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    The viewing was booked in the chat. The reminder the evening before needed an approved template,
                    because the customer’s last message was more than 24 hours old.
                  </p>
                </div>
              </div>
            </div>
            <div className={`card mt-10 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 820 }} data-columns={4}>
                <thead>
                  <tr>
                    <th>Message</th>
                    <th>Sent by</th>
                    <th>Meta’s rule</th>
                    <th>The PECR question</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">“Is the two-bed on Mill Road still available? Could I see it on Saturday?”</td><td>Customer</td><td>Opens the 24-hour customer service window</td><td>None. It is the customer’s own message</td></tr>
                  <tr><td className="feat">The agent checks the property system and offers 10:30 or 2:00</td><td>Agent</td><td>Free-form reply inside the window. No template needed</td><td>A reply to what they asked. The ICO calls a message someone specifically asks for solicited</td></tr>
                  <tr><td className="feat">The customer picks 10:30. The agent books the diary and confirms the address</td><td>Agent</td><td>Free-form reply. The customer’s answer reset the window</td><td>Administrative information only, which the ICO calls a service message</td></tr>
                  <tr><td className="feat">Friday, 5pm: “Your viewing is tomorrow at 10:30”</td><td>Agent</td><td>Window closed, so an approved utility template and the customer’s opt-in are needed</td><td>Still a service message, so long as nothing promotional is added</td></tr>
                  <tr><td className="feat">“Running ten minutes late, sorry”</td><td>Customer</td><td>Window opens again. The agent passes the chat to the negotiator, the route to a person the policy asks for</td><td>None</td></tr>
                  <tr><td className="feat">The week after: “Three new two-beds near Mill Road”</td><td>Business</td><td>Marketing template. Meta files alerts like this as marketing even when the customer asked for them</td><td>Direct marketing if sent unasked. Check consent or the soft opt-in, and put an opt-out in the message</td></tr>
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              Meta’s rules: <a href={SRC_META_SERVICE} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>service messages</a> and{' '}
              <a href={SRC_META_CATEGORIES} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>template categorisation</a>. The PECR column is our reading of the{' '}
              <a href={SRC_ICO_KEY} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ICO’s key concepts page</a>, read 11 October 2026. It is not legal advice.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline={'See an agent answer your own customers’ questions before you sign anything'}
          sub={'Tell us what customers ask on WhatsApp and which systems hold the answers. On a short call with the founder we will say which route fits your business, whether that is the free app, Meta’s own agent, a chatbot tool or a custom build.'}
          label={'Plan my WhatsApp agent'}
        />

        {/* ═══ 7. BY UK BUSINESS TYPE ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Who we build for</span>
                <h2>What a WhatsApp agent does for trades, clinics, estate agents and online shops</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  The build is the same underneath. What changes is the system it connects to and the point where a
                  person takes over.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/whatsapp-ai-agents/whatsapp-ai-agents-clinic-front-desk.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A receptionist in a teal tunic hands a blank appointment card across a wooden clinic counter to a man in a mustard jumper who holds a phone at his side" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    In a clinic the agent books, moves and cancels appointments. Anything about symptoms goes to the
                    people at the desk.
                  </p>
                </div>
              </div>
            </div>
            <ul className="col-2 mt-12">
              <li className="svc-card"><h3>Trades and home services</h3><p className="mt-4">A customer sends a photo of a leaking valve and a postcode. The agent asks the questions your office would ask, checks the engineers’ diary, offers a slot and books it in your job system. Anything you have marked as an emergency goes straight to the on-call person. The next morning an approved reminder template goes out.</p></li>
              <li className="svc-card"><h3>Clinics and practices</h3><p className="mt-4">Booking, moving and cancelling appointments, directions, parking and what to bring. The agent stays on the admin side. Meta’s policy limits health information on WhatsApp where regulations call for heightened protections, so clinical questions are handed to your staff and the chat says so.</p></li>
              <li className="svc-card"><h3>Estate and letting agents</h3><p className="mt-4">Viewing requests against the negotiators’ diaries, valuation bookings, and tenant repair reports with photos, logged in your property software. New-listing alerts are marketing templates under Meta’s categories, so they need opt-in on Meta’s side and a PECR check on yours.</p></li>
              <li className="svc-card"><h3>Online shops</h3><p className="mt-4">“Where is my order?” answered from your Shopify or WooCommerce order data, and returns started in the chat. Dispatch and delivery updates go out as utility templates. Add a discount code to one and Meta files it as marketing, which is also where the ICO draws the line.</p></li>
            </ul>
            <p className="mt-8" style={{ maxWidth: 760 }}>
              WhatsApp is one channel. For the phone line, see our{' '}
              <a href="/uk/ai-receptionist">AI receptionist for UK businesses</a>. For support across chat, email and
              phone, see <a href="/uk/ai-customer-service">AI customer service for UK businesses</a>.
            </p>
          </div>
        </section>

        {/* ═══ 8. PECR ═══ */}
        <section className="sec-lg dot-grid" id="pecr">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">UK marketing law</span>
                <h2>Marketing messages on WhatsApp and PECR: what a UK business has to check</h2>
                <div className="stack mt-6">
                  <p>
                    Meta’s opt-in is a platform rule. UK law is a separate test, and passing one does not pass the
                    other. Meta’s opt-in page leaves the law to you. It says the business is responsible for getting
                    opt-in in a way that complies with the laws that apply to its messages. On 11 October 2026 we
                    opened three UK pages that ranked on Google for “whatsapp chatbot for business uk”, and none of
                    them mentions PECR.
                  </p>
                  <p>
                    The law in question is PECR, the Privacy and Electronic Communications Regulations 2003. Its rules
                    on electronic mail cover more than email. The ICO’s guidance lists texts, in-app messages and
                    direct messaging on social media as electronic mail, because each is a private message stored for
                    one recipient to collect. A WhatsApp message from a business to a customer fits that description.
                    The ICO’s page does not name WhatsApp, so confirm the reading with your data protection adviser.
                  </p>
                  <p>
                    The core rule, in the ICO’s words, is that you must not send electronic mail marketing to
                    individuals unless they have specifically consented, or they are an existing customer who bought
                    or negotiated to buy a similar product or service from you and had a simple way to opt out, both
                    when you collected their details and in every message since. That second route is the soft opt-in.
                    Sole traders and some partnerships are treated as individuals.
                  </p>
                  <p>
                    Many WhatsApp messages are not marketing at all. The ICO says messages sent purely for
                    administrative or customer service purposes do not count as direct marketing if they only provide
                    administrative information and do not promote anything. A booking confirmation or a delivery
                    update sits there. Add an offer and, in the ICO’s words, “the message becomes direct marketing”.
                    Meta’s template rules land in the same place, and an order update with a promotion is filed as
                    marketing.
                  </p>
                  <p>
                    PECR sits beside UK GDPR. Where you use personal information to send marketing, the ICO says you
                    must also comply with the UK GDPR and the Data Protection Act 2018, and tell people when you
                    collect their details that you intend to message them. Its guidance on the right to be informed
                    adds that if you apply AI to personal data you should be upfront about it, so the chat should
                    say at the start that the customer is talking to an automated assistant.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources, read 11 October 2026: <a href={SRC_ICO_PECR} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ICO, electronic mail marketing</a>;{' '}
                  <a href={SRC_ICO_KEY} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ICO, key concepts</a>;{' '}
                  <a href={SRC_ICO_COMPLY} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ICO, how to comply with the electronic mail rules</a>;{' '}
                  <a href={SRC_ICO_ELSE} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ICO, PECR and data protection</a>;{' '}
                  <a href={SRC_ICO_INFORMED} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>ICO, right to be informed</a>;{' '}
                  <a href={SRC_META_OPTIN} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Meta, get opt-in for WhatsApp</a>.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/whatsapp-ai-agents/whatsapp-ai-agents-parcel-packing.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A man with a white beard and a dark green apron presses orange tape across a plain cardboard box on a packing bench, with a phone and a roll of tape beside it" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    A dispatch update is a service message. Put a discount code in it and both Meta and the ICO treat
                    it as marketing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6040 mt-12">
              <div className="card card-top-orange">
                <span className="eyebrow">Six checks before a marketing template goes out</span>
                <ul className="scope-list num-list mt-4">
                  <li><b>Consent or soft opt-in.</b> Which one covers this person, and can you show when and how it was given?</li>
                  <li><b>A named sender.</b> The ICO says consent on a bought-in list must have named your organisation.</li>
                  <li><b>An opt-out in every message.</b> The ICO’s example for a text is a STOP reply. Agree the WhatsApp wording with your adviser.</li>
                  <li><b>A do-not-contact list.</b> Keep one, and screen every send against it.</li>
                  <li><b>Identity.</b> Do not disguise who the message is from, and give a valid contact address for opting out.</li>
                  <li><b>Meta’s side.</b> The template is approved in the marketing category, and the person opted in to hear from your business.</li>
                </ul>
              </div>
              <div className="card">
                <h3>What we build in</h3>
                <p className="mt-4">
                  This section is our plain-English reading of the ICO’s pages, and it is not legal advice. Your data
                  protection adviser signs off the wording. What we build in is the record-keeping those checks rely
                  on: an opt-in record for every contact, an opt-out the agent acts on at once, a do-not-contact list
                  checked before every send, and separate templates for service messages and marketing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 9. HOW WE BUILD IT ═══ */}
        <section className="sec-lg" id="how-we-build">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">How we work</span>
              <h2>How FactoryJet builds a WhatsApp agent, in seven steps</h2>
              <p className="lead mt-4">
                Before any contract, we show you a working agent answering from your own FAQs and rules. After that
                the work runs in this order.
              </p>
            </div>
            <figure className={styles.processFigure} data-process-flow aria-label="How FactoryJet builds a WhatsApp agent, in seven steps"><ol className={`stack mt-10 ${styles.processFlow}`} style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Sort your real chats', d: 'We read a sample of the messages, calls and emails you get now and sort them by type, such as bookings, order questions, quotes, complaints and emergencies. That tells us what the agent has to do well and what it should hand over.' },
                { n: '02', t: 'Set up the Meta side in your name', d: 'Your business portfolio, WhatsApp account, number and display name sit in your own Meta account. We check whether your current number can move to the Platform, and whether you want to keep using the WhatsApp Business app beside it.' },
                { n: '03', t: 'Write the opt-in and the templates', d: 'We draft the opt-in wording for your website, forms and front desk, and write each template in the right Meta category, so reminders are filed as utility and offers as marketing. You approve every word before it goes to Meta.' },
                { n: '04', t: 'Connect your systems', d: 'The agent gets live connections to the systems the chats depend on, such as your diary or job management tool, your Shopify or WooCommerce orders, HubSpot, Xero or your ERP. It reads and writes through each system’s API with only the access the job needs.' },
                { n: '05', t: 'Agree the answers and the handover', d: 'The agent answers from text you have approved. For anything else it says so and passes the chat to a named person, with the conversation attached. We write the handover rules with you, covering which words, which customers and which hours go to whom.' },
                { n: '06', t: 'Test on a test number', d: 'Meta creates a test number when a Platform account is set up. We run the agent there against your real questions, awkward ones included, and your team tries to break it before a customer sees it.' },
                { n: '07', t: 'Go live in stages, then support it', d: 'Replies to incoming chats go live first. Outbound templates follow once the opt-in list is in order. After launch we review transcripts with you and keep the agent working as Meta’s rules, your systems and the AI models change.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }} className={styles.stageMarker}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol></figure>
            <p style={srcNote}>
              On keeping your number and the app: <a href={SRC_META_NUMBERS} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Meta, business phone numbers</a> and{' '}
              <a href={SRC_META_APP_ONBOARD} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Meta, onboarding WhatsApp Business app users</a>. On running more than one responder on a number:{' '}
              <a href={SRC_META_ROUTING} target="_blank" rel="noopener noreferrer nofollow" style={srcLink}>Meta, conversation routing</a>.
            </p>
          </div>
        </section>

        {/* ═══ 10. COST ═══ */}
        <section className="sec-lg dot-grid" id="cost">
          <div className="wrap">
            <div style={{ maxWidth: 800 }}>
              <span className="eyebrow">Cost</span>
              <h2>What a WhatsApp chatbot costs in the UK, and what Meta charges</h2>
              <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout ><tbody><tr><th scope="row"><b>The app.</b></th><td><p>The WhatsApp Business app is free to download and, in Meta’s words, free to use.
                </p></td></tr><tr><th scope="row"><b>The build.</b></th><td><p>A custom AI chatbot connected to your own systems is a build.{' '}<a href={SRC_A1} target="_blank" rel="noopener noreferrer nofollow">A1 Automation London’s UK pricing guide</a>, last updated on 14 July 2026,
                  puts typical UK setup for a custom AI chatbot at £8,000 to £60,000 or more, and calls its figures
                  planning ranges. That range is for AI chatbots in general and is not specific to WhatsApp. FactoryJet
                  quotes the build as a fixed price in writing after a short scoping call.
                </p></td></tr><tr><th scope="row"><b>Meta’s charges.</b></th><td><p>On the Platform, Meta charges the business for each message it delivers. The
                  rate depends on the message category and the country of the person receiving it, and Meta publishes{' '}<a href={SRC_META_RATES} target="_blank" rel="noopener noreferrer nofollow">its rate card for every market</a>, with pounds among the
                  currencies. We do not reprint the rates here because Meta changes them on a published calendar. The
                  latest change took effect on 1 October 2026, when Meta began charging again for replies inside the
                  service window, after a free allowance for each business phone number. If a guide tells you those
                  replies are always free, check its date against{' '}<a href={SRC_META_PRICING} target="_blank" rel="noopener noreferrer nofollow">Meta’s pricing page</a>. Meta also needs a payment method on the
                  account, and says it stops delivering replies once the free allowance is used if there is none.
                </p></td></tr><tr><th scope="row"><b>Support.</b></th><td><p>FactoryJet quotes ongoing support as a fixed price in writing too, and keeps managing
                  the servers, AI, APIs and maintenance so your team does not have to.
                </p></td></tr></tbody></table></div>
            </div>
          </div>
        </section>

        {/* ═══ 11. ENGAGEMENT SHAPES + DEMAND ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope, not packages</span>
                <h2>Three ways to start a WhatsApp project with us</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Every project is scoped on a short call and quoted as a fixed price in writing. These are the shapes
                  it usually takes.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Inbound agent first.</b> One WhatsApp number, your most common questions and one connected system, usually the diary or the order system. Replies only, so no templates are needed on day one.</li>
                  <li><b>Inbound plus updates.</b> The same agent, with approved utility templates for confirmations, reminders and delivery updates, and an opt-in flow to match.</li>
                  <li><b>One agent across channels.</b> WhatsApp beside your phone line and web chat, sharing the same approved answers, bookings and handover rules.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  The scope moves with the number of systems the agent connects to, the number of templates, how many
                  teams take handovers, and whether marketing messages are part of it. If the job is wider than a
                  chat channel, our <a href="/uk/ai-development">UK AI development team</a> scopes it the same way.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Plan my WhatsApp agent" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.n200}`, padding: '14px 18px' }}>
                  <span style={{ fontFamily: T.fm, fontSize: 12, letterSpacing: '.13em', textTransform: 'uppercase', color: T.n400 }}>UK · Monthly Search Demand</span>
                  <span style={{ background: T.small, color: '#fff', fontFamily: T.fm, fontSize: 12, borderRadius: 999, padding: '3px 9px' }}>DataForSEO</span>
                </div>
                <div style={{ padding: '4px 18px 14px' }}>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {[
                      { kw: 'whatsapp business api', v: '1,000', w: '100%', kd: 'What many people call the Platform' },
                      { kw: 'whatsapp bot', v: '390', w: '39%', kd: 'The short form' },
                      { kw: 'whatsapp chatbot', v: '320', w: '32%', kd: 'The head term for this page' },
                      { kw: 'whatsapp ai chatbot', v: '210', w: '21%', kd: 'AI replies, not menus' },
                      { kw: 'whatsapp automation', v: '140', w: '14%', kd: 'Reminders and updates' },
                    ].map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 12, color: T.n400 }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 10 }}>Source: DataForSEO, United Kingdom, October 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. FAQ (canonical Linear Minimal) ═══ */}
        <section className="sec-lg dot-grid" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>WhatsApp chatbot questions UK businesses ask</h2>
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
                  <ModalCTAButton label="Still have a question? Ask the founder →" region="uk" modalVariant="default" btnVariant="secondary-light" />
                  <p>Replies within one business day.</p>
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
            <h2>Bring us the chats your team answers every day</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within one business day to arrange a short call about the
              messages you get on WhatsApp, the systems they depend on, and which route fits. Before any contract, we
              show you a working agent on your own data.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Plan my WhatsApp agent" region="uk" modalVariant="default" btnVariant="primary-light" />
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
