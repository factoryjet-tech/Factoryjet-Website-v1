import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

/* /uk/ai-integration-services, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every law, tax rule, platform fact and market price was read on the
      publisher's own page on 2026-10-29 and links to it through the SRC map
      below. Re-read the page before changing a figure or a date.
   2. No FactoryJet price, and no figure for what an integration costs to run
      or maintain. The only money figures are a market range published by a
      named London firm, labelled as theirs.
   3. Client proof is limited to GPSUK (Commerceflo) and Sow Easy (WooCommerce
      plus Odoo, build in progress), as their case studies describe them. No
      metric is claimed for either.
   4. Structure mirrors /uk/shopify-xero-integration and /uk/ecommerce-consultant
      (imports, components, CSS classes, schema). The copy is written fresh.
   5. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions. */

const CANONICAL = 'https://factoryjet.com/uk/ai-integration-services';
const UPDATED = '2026-10-29';
const READ_ON = '29 October 2026';
const TITLE = 'AI Integration Services UK: Xero, Sage, ERP | FactoryJet';
const H1 = 'AI Integration Services for UK Firms: Connecting AI to the Xero, Sage, Business Central and Odoo Systems You Already Run';
const DESCRIPTION =
  'AI integration services for established UK firms. We connect AI to Xero, Sage, NetSuite, Business Central, Odoo and Linnworks, with UK GDPR and MTD in mind.';
const IMG = '/images/uk/ai-development';

/* Design tokens, copied by value from ../ai-agents/ai-agents.css so inline
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
   schema can never describe a trail a human cannot see. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'AI Integration Services', url: CANONICAL },
];

/* Sources. One map, used by every inline source note AND by the visible
   Sources list near the foot of the page. Each page was opened on 2026-10-29
   and the supporting words read before the claim was written. */
const SRC = {
  duaaCommence: { label: 'GOV.UK: Data (Use and Access) Act 2025, plans for commencement', url: 'https://www.gov.uk/guidance/data-use-and-access-act-2025-plans-for-commencement' },
  duaaFactsheet: { label: 'GOV.UK: Data (Use and Access) Act factsheet, UK GDPR and DPA', url: 'https://www.gov.uk/government/publications/data-use-and-access-act-2025-factsheets/data-use-and-access-act-factsheet-uk-gdpr-and-dpa' },
  icoAi: { label: 'ICO: Guidance on AI and data protection', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/' },
  euAiAct: { label: 'European Commission: AI Act, regulatory framework for AI', url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai' },
  euArticle2: { label: 'AI Act Service Desk: Article 2, scope', url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-2' },
  vatNotice: { label: 'GOV.UK: VAT Notice 700/22, Making Tax Digital for VAT', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  bcApi: { label: 'Microsoft Learn: API (v2.0) for Dynamics 365 Business Central', url: 'https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/' },
  odooApi: { label: 'Odoo 18.0 documentation: External API', url: 'https://www.odoo.com/documentation/18.0/developer/reference/external_api.html' },
  cloudswitched: { label: 'Cloudswitched: AI software development cost UK 2026', url: 'https://www.cloudswitched.com/blog/ai-software-development-cost-uk-2026' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* FAQ source of truth (drives the visible FAQ and the FAQ schema).
   Question wording draws on Google People Also Ask for "ai integration
   services" and "ai integration uk", pulled for the United Kingdom on
   2026-10-29 (DataForSEO), plus questions UK buyers put in written briefs. */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'What AI integration is' },
  { key: 'systems', label: 'Your systems' },
  { key: 'rules', label: 'UK GDPR, MTD and the EU AI Act' },
  { key: 'cost', label: 'Cost and timing' },
  { key: 'working', label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // What AI integration is
  {
    category: 'basics',
    question: 'What is AI integration?',
    answer:
      'AI integration means wiring an AI model into the software a business already runs, so it reads real records and writes its result back where staff work. A model that drafts a supplier query is a toy until it can see the purchase order in Sage or Business Central and save the draft against it. The connection, the permissions and the checks are the integration. The model is one part of it.',
  },
  {
    category: 'basics',
    question: 'What is AI service integration?',
    answer:
      'It is the delivery work around the model: choosing which system owns each record, building the API connections, setting what the AI may read and change, testing it on real cases and supporting it after launch. A firm that sells AI integration services does that work for you. FactoryJet designs, builds, implements and supports it, and you own the code and the accounts it runs in.',
  },
  {
    category: 'basics',
    question: 'How do you integrate AI into an existing business system?',
    answer:
      'In five moves. Pick one job with a clear measure, such as coding supplier invoices. Map the records that job touches and the system that owns each. Connect through the system’s own API with the narrowest permissions that work. Put a person’s approval in front of anything that posts money or messages a customer. Then test on a few hundred real past cases before it touches live data.',
  },
  {
    category: 'basics',
    question: 'Which AI is best for integration work?',
    answer:
      'No single model wins every task. We pick per job, usually from Anthropic’s Claude, OpenAI’s GPT models and Google’s Gemini, and test two of them on your own past cases before choosing. The model sits behind your own integration layer, so it can be swapped when a provider retires a version or a better one appears, without rebuilding the links into Xero or your ERP.',
  },
  {
    category: 'basics',
    question: 'What is the difference between AI integration and AI development?',
    answer:
      'AI development builds new software, such as an internal tool or a custom agent. AI integration connects AI to software you already own and keep, so staff see results inside Xero, Business Central, Linnworks or the helpdesk they already open each day. Most projects mix both. If you need a new application built, see our UK AI development page.',
  },
  // Your systems
  {
    category: 'systems',
    question: 'Can you connect AI to Xero, Sage and QuickBooks?',
    answer:
      'Yes. Typical jobs are reading supplier invoices and proposing the nominal code and VAT rate, matching remittances to open invoices, and drafting credit-control emails from aged debt. On Sage we first confirm which product you run, because Sage 50, Sage 200 and Sage Intacct connect in different ways. Nothing posts to the ledger until a named person approves it.',
  },
  {
    category: 'systems',
    question: 'Can AI work with Microsoft Dynamics 365 Business Central?',
    answer:
      'Yes. Microsoft’s documentation says its APIs are enabled by default on Business Central online and use standard REST calls, so any language that can call REST can connect. It also says the standard APIs cannot be extended with extra fields, so a custom field means a custom API page. We check your extensions on the scoping call for that reason. Read on 29 October 2026.',
  },
  {
    category: 'systems',
    question: 'Does Odoo allow AI to connect through its API?',
    answer:
      'On the right plan. Odoo’s own documentation says access to data through the external API is only available on Custom pricing plans, and not on One App Free or Standard. It supports API keys in place of a password, shown once and impossible to restore after deletion. Check your Odoo plan before scoping, because it decides whether a direct link is possible. Read on 29 October 2026.',
  },
  {
    category: 'systems',
    question: 'Can AI help with Amazon.co.uk, eBay and OnBuy orders in Linnworks?',
    answer:
      'Yes, at the exception stage. Linnworks, Brightpearl and Mintsoft already move routine orders. AI earns its place on the awkward ones: an address Royal Mail or Evri will reject, a buyer message asking to change a size, a listing on ManoMano or the B&Q marketplace whose stock disagrees with the warehouse. It reads the order, proposes the fix and a person accepts it.',
  },
  {
    category: 'systems',
    question: 'Can AI connect to NetSuite?',
    answer:
      'Yes. NetSuite projects usually centre on sales orders, item records and customer service history. A common first job is reading inbound purchase orders from trade customers, by email or PDF, and drafting the NetSuite sales order for a person to check. We agree with your NetSuite administrator which roles and records the integration may touch before anything is built.',
  },
  {
    category: 'systems',
    question: 'Can AI read payment data from Stripe, GoCardless, Klarna or Clearpay?',
    answer:
      'Yes, for reconciliation and follow-up rather than for taking payments. Examples: explaining why a GoCardless Direct Debit failed and drafting the customer note, or splitting a Klarna or Clearpay settlement into the orders inside it so the books match the bank line. The AI reads payout and transaction records. Card numbers and bank details stay with the payment provider.',
  },
  // Rules
  {
    category: 'rules',
    question: 'Does UK GDPR allow AI to make decisions about customers?',
    answer:
      'Within limits. GOV.UK says the Data (Use and Access) Act 2025 replaces Article 22 of the UK GDPR with Articles 22A to 22D once that section is commenced, allowing solely automated decisions in wider circumstances if safeguards are in place. Check the ICO’s current position before you rely on it. The safeguards include telling people about significant decisions, letting them challenge one and letting them get human intervention. We design approval steps in from the start. Your data protection lead signs off the use.',
  },
  {
    category: 'rules',
    question: 'When did the Data (Use and Access) Act 2025 come into force?',
    answer:
      'In stages. GOV.UK says the Act received Royal Assent on 19 June 2025, and that regulations brought most of its data protection and privacy provisions in Part 5 into force on 5 February 2026. The ICO says its guidance on AI and data protection is under review because of the Act. So check the current ICO wording before you finalise a data protection impact assessment. Read on 29 October 2026.',
  },
  {
    category: 'rules',
    question: 'Does an AI integration meet Making Tax Digital rules?',
    answer:
      'It can support them. HMRC’s VAT Notice 700/22 lists API transfer and automated data transfer as accepted digital links, and says copy and paste between programs is not one. An integration that moves figures into Xero, Sage or QuickBooks by API stays on the accepted side. Whether your whole VAT set-up complies is a question for your accountant, and we build to their posting rules.',
  },
  {
    category: 'rules',
    question: 'Does the EU AI Act apply to a UK company?',
    answer:
      'It can. Article 2 of the Act covers providers placing AI systems on the EU market whether they are based in the EU or in a third country, and providers and deployers outside the EU where the system’s output is used in the EU. A UK firm selling into Germany or Ireland with AI facing those customers should check its position. Take legal advice on your own case.',
  },
  {
    category: 'rules',
    question: 'What are the key EU AI Act dates for 2026 and 2027?',
    answer:
      'The European Commission’s page says the Act entered into force on 1 August 2024, prohibited practices and AI literacy rules applied from 2 February 2025, and general-purpose AI obligations from 2 August 2025. It became applicable on 2 August 2026 with exceptions. Rules for high-risk systems listed in Annex III were extended to 2 December 2027. Read on 29 October 2026.',
  },
  {
    category: 'rules',
    question: 'Where is our data held, and does it train the AI model?',
    answer:
      'You choose. The AI provider account and the hosting can sit in your own name, at cost with no markup through us, so the contract and data terms are between you and the provider. We set it up on the provider’s business or API terms, which you read and accept in your own name, and we record which personal data each step sends to the model. Fields the job does not need are left out.',
  },
  // Cost and timing
  {
    category: 'cost',
    question: 'How much does AI integration cost in the UK?',
    answer:
      'Market figures vary with the systems involved. Cloudswitched, a London IT firm, published these integration ranges in April 2026: £2,000 to £5,000 for one modern API, £8,000 to £25,000 across several SaaS platforms, £15,000 to £40,000 per legacy or on-premises system, and £25,000 to £80,000 for custom middleware. Its page does not say whether VAT is included. These are market figures. FactoryJet quotes a fixed price in writing after scoping.',
  },
  {
    category: 'cost',
    question: 'How long does an AI integration project take?',
    answer:
      'It depends on the number of systems and the state of their data. One job across one system, such as invoice coding into Xero, is the shortest kind of project. A job that spans an ERP, a warehouse system and two marketplaces takes longer, mostly in agreeing record owners and testing awkward cases. The timeline goes in writing with each phase’s quote, after we have seen your systems.',
  },
  // Working with us
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For an integration that usually means a sample of your real invoices, orders or tickets run through a test copy of the link, with the AI’s proposals shown next to what your team actually did. You judge it on your own cases.',
  },
  {
    category: 'working',
    question: 'We have a written brief or an RFP. Can we send it?',
    answer:
      'Please do. Name the systems involved, with versions and editions (Sage 200 or Intacct, Business Central online or on-premises), rough monthly volumes, who approves changes, and any procurement or security questionnaire. You can attach the brief to the form on this page. Bhavesh replies within one business day with questions or a call slot.',
  },
  {
    category: 'working',
    question: 'Who owns the integration, and who supports it after launch?',
    answer:
      'You own the code and the repository from day one. Defects are fixed inside the build price for a cover period agreed before work starts. After that, support is optional: each change is quoted and approved before we do it, with no monthly minimum. FactoryJet quotes the build, and any support you choose, as fixed prices in writing.',
  },
];

/* Systems map. Each row names a UK system family and the kind of AI job we
   scope against it. Platform facts in the last column are sourced. */
const SYSTEMS: { family: string; names: string; job: string; check: string }[] = [
  {
    family: 'Accounts',
    names: 'Xero, Sage 50, Sage 200, Sage Intacct, QuickBooks UK',
    job: 'Supplier invoice coding, remittance matching, credit-control drafts',
    check: 'Which Sage product you run, and the posting rules your accountant signs',
  },
  {
    family: 'ERP',
    names: 'NetSuite, Dynamics 365 Business Central, Odoo',
    job: 'Trade purchase orders read into draft sales orders, stock and price questions answered from live records',
    check: 'Business Central APIs are on by default online; Odoo’s external API needs a Custom plan',
  },
  {
    family: 'Orders and stock',
    names: 'Brightpearl, Linnworks, Mintsoft',
    job: 'Exception orders: bad addresses, changed sizes, stock that disagrees with the warehouse',
    check: 'Which system owns stock, and which one only reads it',
  },
  {
    family: 'Marketplaces',
    names: 'Amazon.co.uk, eBay UK, OnBuy, ManoMano, B&Q marketplace',
    job: 'Buyer messages triaged and drafted, listing errors flagged before they cost the account',
    check: 'Each marketplace’s own messaging and response-time rules',
  },
  {
    family: 'Payments',
    names: 'Stripe, GoCardless, Klarna, Clearpay',
    job: 'Failed payments explained, settlements split into the orders inside them',
    check: 'Read-only access to payouts; card and bank details never leave the provider',
  },
  {
    family: 'Couriers',
    names: 'Royal Mail, DPD, Evri',
    job: 'Tracking exceptions read and the customer update drafted',
    check: 'Which carrier events reach you, and where they land today',
  },
];

/* JSON-LD. The Organization is referenced by @id only and is defined once,
   sitewide. Never redefine it here. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'AI Integration Services UK',
      serviceType: 'AI integration with accounting, ERP, order management, marketplace, payment and courier systems',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'FactoryJet designs, builds, implements and supports AI integrations for established UK firms. AI models are connected to the systems the firm already runs, such as Xero, Sage, QuickBooks, NetSuite, Dynamics 365 Business Central, Odoo, Brightpearl and Linnworks, with record owners agreed in writing, approval steps in front of postings, and UK GDPR and Making Tax Digital requirements built into the design. The client owns the code.',
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
      datePublished: '2026-10-29',
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
  alternates: { canonical: CANONICAL, languages: { 'en-US': 'https://factoryjet.com/services/ai-integration-services', 'en-GB': CANONICAL, 'x-default': 'https://factoryjet.com/services/ai-integration-services' } },
  openGraph: {
    title: TITLE,
    description:
      'AI connected to the accounts, ERP, order and marketplace systems UK firms already run: Xero, Sage, Business Central, Odoo, Linnworks. Demo on your data before you sign.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: `${IMG}/ai-development-og.webp`, width: 1200, height: 630, alt: 'A FactoryJet developer and a business owner reviewing an internal AI tool on a large monitor' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const inlineLink = { textDecoration: 'underline', color: T.ink, fontWeight: 600 } as const;

/* Small source line. Every id comes from the SRC map above. */
function Sources({ ids, on = READ_ON }: { ids: SrcKey[]; on?: string }) {
  return (
    <p style={srcNote}>
      Sources, read on {on}:{' '}
      {ids.map((id, i) => (
        <span key={id}>
          {i > 0 ? '; ' : ''}
          <a href={SRC[id].url} target="_blank" rel="noopener noreferrer" style={srcLink}>{SRC[id].label}</a>
        </span>
      ))}
      .
    </p>
  );
}

export default function AiIntegrationServicesUKPage() {
  return (
    <>
      <script id="ld-uk-ai-integration-services" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* 1. HERO */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />AI Integration Services UK</span>
                  <span className="chip">Accounts, ERP, Orders</span>
                  <span className="chip">Demo on Your Data</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Your firm already runs on Xero or Sage, an ERP such as NetSuite, Business Central or Odoo, and an
                  order system such as Linnworks or Brightpearl. Staff still retype between them. We connect AI to
                  those systems so it reads the real record, proposes the next step and waits for a named person to
                  approve it. You see it working on your own data before you sign, and you own what we build.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />{READ_ON}</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_ai_integration_services_hero" service="AI Integration Services" submitLabel="See a demo on my data" />
                </div>
                <p style={{ fontSize: 13, marginTop: 10, maxWidth: 560 }}>
                  Working software on your own data before you sign. Founder replies within one business day.
                </p>
              </div>

              <div className="card card-top-orange">
                <span className="eyebrow">Where AI meets your systems</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Accounts</div><div className="scorecard-note">Xero, Sage 50, 200 and Intacct, QuickBooks UK</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Invoices</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">ERP</div><div className="scorecard-note">NetSuite, Business Central, Odoo</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Orders</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Orders and stock</div><div className="scorecard-note">Linnworks, Brightpearl, Mintsoft</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Exceptions</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Marketplaces and couriers</div><div className="scorecard-note">Amazon.co.uk, eBay UK, OnBuy, Royal Mail, DPD, Evri</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Messages</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Every posting or customer message</div><div className="scorecard-note">a named person approves it first</div></div>
                  <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Approved</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST DEFINITION */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What are AI integration services for a UK firm?</span>
              <p>
                AI integration services connect an AI model to the software a company already runs, such as Xero,
                Sage, Business Central, Odoo or Linnworks, so the AI reads live records and writes its proposal back
                into the same screen staff use. The work covers record ownership, API connections, permissions,
                approval steps, testing on real past cases and support after launch.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms we use a lot</span>
              <p>
                An <b>API</b> is the door a system offers other software, with rules about who may read or change
                what. A <b>record owner</b> is the one system where a figure is created and edited; every other system
                only reads it. An <b>approval step</b> is the point where a person accepts, edits or rejects what the
                AI proposed before it posts.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              The model is the easy part to buy. The hard part is that a purchase order in Business Central, a stock
              figure in Linnworks and a supplier bill in Xero all describe the same goods, and each system thinks it
              is right. We settle that first, in writing, and only then let AI near it.
            </p>
          </div>
        </section>

        {/* 3. FACTS BAND (each one sourced) */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '500+', t: 'businesses served by FactoryJet since it was founded in 2014', s: 'About FactoryJet', u: '/about' },
                { v: '19 June 2025', t: 'is when the Data (Use and Access) Act received Royal Assent, changing UK GDPR rules on automated decisions', s: 'GOV.UK, commencement plans', u: SRC.duaaCommence.url },
                { v: '2 Aug 2026', t: 'is when the European Commission says the EU AI Act became applicable, with some exceptions', s: 'European Commission, AI Act', u: SRC.euAiAct.url },
                { v: 'API', t: 'transfer is on HMRC’s list of accepted digital links for Making Tax Digital; copy and paste is not', s: 'GOV.UK, VAT Notice 700/22', u: SRC.vatNotice.url },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} {...(r.u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. SYSTEMS MAP */}
        <section className="sec-lg dot-grid" id="systems">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">The systems UK firms run</span>
                <h2>Which UK systems we connect AI to, and the first job we scope on each</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  A wholesaler on Sage 200 and Linnworks and a manufacturer on Business Central have different
                  problems. The table lists the system families we see in UK briefs, the AI job that usually comes
                  first, and the question we answer before quoting.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src={`${IMG}/ai-development-engineer.webp`} width={1200} height={800} loading="lazy" decoding="async" alt="A FactoryJet AI engineer at a desk with two monitors showing the connected building blocks of a custom AI system" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Each connection gets the narrowest permission that does the job. An AI that drafts credit-control
                    emails reads aged debt; it does not need to post journals.
                  </p>
                </div>
              </div>
            </div>
            <div className="card mt-10" tabIndex={0} role="region" aria-label="UK systems and first AI jobs" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 860 }} data-columns={4}>
                <thead>
                  <tr>
                    <th>System family</th>
                    <th>UK systems we see</th>
                    <th className="fj">First AI job we scope</th>
                    <th>What we check first</th>
                  </tr>
                </thead>
                <tbody>
                  {SYSTEMS.map((s) => (
                    <tr key={s.family}>
                      <td className="feat">{s.family}</td>
                      <td>{s.names}</td>
                      <td className="fj">{s.job}</td>
                      <td>{s.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Sources ids={['bcApi', 'odooApi']} />
          </div>
        </section>

        {/* 5. WORKED JOBS */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">What the work looks like</span>
              <h2>Four AI integrations UK firms ask us to scope</h2>
              <p className="lead mt-4">
                Each one starts from a job a person does today between two systems. The AI takes the reading and the
                drafting. The person keeps the decision.
              </p>
            </div>
            <ul className="col-2 mt-10">
              <li className="svc-card">
                <h3>Supplier bills into Xero or Sage</h3>
                <p className="mt-4">A PDF bill arrives by email. The AI reads supplier, lines and VAT, finds the matching purchase order, proposes the nominal code and tax rate, and parks a draft bill. Your bookkeeper approves or corrects it, and the correction is logged. See also <a href="/uk/accounts-payable-automation" style={inlineLink}>accounts payable automation</a>.</p>
              </li>
              <li className="svc-card">
                <h3>Trade orders into Business Central or NetSuite</h3>
                <p className="mt-4">Trade customers still email purchase orders as PDFs or spreadsheets. The AI reads the customer, part numbers and quantities, checks them against item records and the account’s price list, and drafts the sales order. Mismatches, such as a discontinued part, are flagged for the sales office instead of guessed.</p>
              </li>
              <li className="svc-card">
                <h3>Marketplace exceptions in Linnworks</h3>
                <p className="mt-4">Routine Amazon.co.uk, eBay UK and OnBuy orders already flow. The AI watches the ones that stall: an address a courier will reject, a buyer message asking to swap a colour, stock on a ManoMano listing that disagrees with the warehouse. It proposes the fix and a person accepts it.</p>
              </li>
              <li className="svc-card">
                <h3>Customer answers from live order data</h3>
                <p className="mt-4">When a customer asks where an order is, the AI reads the order in your ERP and the latest Royal Mail, DPD or Evri tracking event, then drafts a reply your service team sends. Answers come from your records, so nothing is invented. See our <a href="/uk/ai-customer-service" style={inlineLink}>AI customer service page</a> for the helpdesk side.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* 6. UK RULES */}
        <section className="sec-lg dot-grid" id="uk-rules">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">UK GDPR, MTD and the EU AI Act</span>
                <h2>The UK rules an AI integration has to respect</h2>
                <div className="stack mt-6">
                  <p>
                    <b>UK GDPR and the Data (Use and Access) Act 2025.</b> GOV.UK says the Act received Royal Assent on
                    19 June 2025 and that most of its Part 5 data protection changes came into force on 5 February
                    2026. Its factsheet says the Act replaces Article 22 of the UK GDPR with Articles 22A to 22D once commenced, allowing
                    solely automated decisions in wider circumstances where safeguards exist: telling people about
                    significant decisions, letting them challenge them, and letting them get human intervention.
                  </p>
                  <p>
                    The ICO says its guidance on AI and data protection is under review because of the Act. We design
                    for the safeguards anyway, because an approval step is cheaper to build on day one than to bolt on
                    after a complaint.
                  </p>
                  <p>
                    <b>Making Tax Digital.</b> HMRC’s VAT Notice 700/22 lists API transfer and automated data transfer
                    as accepted digital links, and says cut and paste is not one. An AI that reads a bill and posts the
                    draft into Xero, Sage or QuickBooks by API keeps the chain digital. Your accountant still owns the
                    posting rules.
                  </p>
                  <p>
                    <b>The EU AI Act, if you sell into the EU.</b> Article 2 covers providers placing AI systems on the
                    EU market wherever they are established, and providers and deployers in a third country where the
                    system’s output is used in the EU. The European Commission says the Act became applicable on 2
                    August 2026 with exceptions, and that Annex III high-risk rules were extended to 2 December 2027.
                  </p>
                </div>
                <Sources ids={['duaaCommence', 'duaaFactsheet', 'icoAi', 'vatNotice', 'euArticle2', 'euAiAct']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What each side owns</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Approval steps and audit log</div><div className="scorecard-note">who approved what, and when</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>We build</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Fields sent to the model</div><div className="scorecard-note">only what the job needs</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>We build</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Posting rules and VAT codes</div><div className="scorecard-note">signed before the build</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Accountant</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Lawful basis and DPIA</div><div className="scorecard-note">data protection impact assessment</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Your DPO</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">EU AI Act position</div><div className="scorecard-note">if EU customers see the output</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Your lawyer</div></div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Name the two systems your team retypes between. We show the AI doing it on your data.'}
          sub={'Tell us the systems, with editions (Sage 200 or Intacct, Business Central online or on-premises), and the job. On a short call we say whether AI fits, and we quote each phase as a fixed price in writing.'}
          label={'See a demo on my data'}
        />

        {/* 7. PROOF */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">UK work</span>
                <h2>UK trade businesses we build for</h2>
                <div className="stack mt-6">
                  <p>
                    <b>GPSUK</b> supplies branded promotional products to business buyers in the UK. We built its trade
                    storefront on Commerceflo, where buyers log in, see their own account prices and move from quote to
                    order without retyping. Read the <a href="/case-studies/gpsuk-promotional-products" style={inlineLink}>GPSUK case study</a>.
                  </p>
                  <p>
                    <b>Sow Easy</b> is a UK wholesale distributor that runs stock, pricing and product data in Odoo. We
                    are building its WordPress WooCommerce trade store to read stock, prices and SKUs from Odoo, so the
                    website never holds a second, conflicting copy. The Odoo link is in build and being tested on
                    staging. Read the <a href="/case-studies/sow-easy-distributor-portal" style={inlineLink}>Sow Easy case study</a>.
                  </p>
                  <p>
                    The Sow Easy build is system integration work: deciding which system owns each record and connecting
                    the rest to it. That groundwork is what an AI integration sits on.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Our terms</span>
                <ul className="scope-list yes-list mt-4">
                  <li><b>Demo before you sign.</b> Working software on your own data before any contract.</li>
                  <li><b>Fixed price per phase.</b> Each phase is scoped, priced and signed on its own.</li>
                  <li><b>You own it.</b> The code and the repository are yours from day one.</li>
                  <li><b>Your accounts, at cost.</b> AI and hosting can run in your own accounts, with no markup.</li>
                  <li><b>Defect cover.</b> Defects are fixed inside the build price for a cover period agreed before work starts.</li>
                  <li><b>Optional support.</b> Each change quoted and approved, with no monthly minimum.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8. HOW WE BUILD IT (NUMBERED LIST) */}
        <section className="sec-lg dot-grid" id="how-we-build">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">How we work</span>
              <h2>How we deliver an AI integration, in seven steps</h2>
              <p className="lead mt-4">
                Steps one to four happen before you commit to a build. Your finance lead and your systems owner join
                steps two and five.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Pick one job and its measure', d: 'One job a person does between two systems, such as coding supplier bills, with a measure everyone accepts: time per bill or bills waiting at month end.' },
                { n: '02', t: 'Name an owner for every record', d: 'Supplier, item, price, stock, order and payment each get one home. Where Sage and Linnworks both hold stock, the map says which wins. Both sides sign the one-page map.' },
                { n: '03', t: 'Check access on each system', d: 'Edition, plan and API access: Sage product, Business Central online or on-premises, Odoo plan, marketplace seller permissions. Anything that blocks a direct link surfaces here.' },
                { n: '04', t: 'Demo on your own data', d: 'A test copy of the link runs a sample of your real past cases. You see the AI’s proposal beside what your team did, and decide whether to go on.' },
                { n: '05', t: 'Build with approval steps in place', d: 'Narrow permissions, a person’s approval in front of every posting or customer message, an audit log, and only the fields the job needs sent to the model.' },
                { n: '06', t: 'Test the awkward cases', d: 'Credit notes, part deliveries, zero-rated lines, a discontinued part, a marketplace return and an order in euros go through before any live record is touched.' },
                { n: '07', t: 'Go live and stay on', d: 'We watch the first weeks of live proposals with your team. Defects are fixed inside the build price for the agreed cover period, and further support is optional.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 9. BRIEF / RFP */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Send a brief</span>
                <h2>Have a brief or an RFP? Send it, and we reply with questions</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Written briefs get faster, sharper answers. Attach yours to the form at the top of this page, or
                  send the five points on the right in a few lines. Procurement and security questionnaires are
                  welcome.
                </p>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short
                  scoping call. Each quote says plainly whether its figures include VAT. Market ranges for this
                  kind of work, published by another firm, are in the FAQ below.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Send my brief" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What to put in the brief</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">The systems, with editions</div><div className="scorecard-note">Sage 200 or Intacct, BC online or on-premises</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">The job and who does it today</div><div className="scorecard-note">and roughly how many a month</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Who approves postings</div><div className="scorecard-note">finance lead or accountant</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Where your customers are</div><div className="scorecard-note">UK only, or EU as well</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Your deadline</div><div className="scorecard-note">year end or a system change</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>5</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. RELATED */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Related work</span>
              <h2>Where AI integration sits among our UK services</h2>
              <p className="lead mt-4">
                Need new AI software rather than a connection? See <a href="/uk/ai-development" style={inlineLink}>AI development in the UK</a>.
                Want AI that takes actions across systems within rules you set? See <a href="/uk/ai-agents" style={inlineLink}>UK AI agents</a>.
                Not sure which job to start with? Our <a href="/uk/ai-consulting" style={inlineLink}>UK AI consultancy</a> runs
                the readiness review. Selling online to trade buyers? See <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce</a>,
                and for the books behind a Shopify store, <a href="/uk/shopify-xero-integration" style={inlineLink}>Shopify Xero integration</a>.
                US buyers can read our <a href="/services/ai-integration-services" style={inlineLink}>AI integration services</a> page.
              </p>
            </div>
          </div>
        </section>

        {/* 11. SOURCES */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Method</span>
              <h2>Sources, read on {READ_ON}</h2>
              <p className="lead mt-4">
                Every law, date, platform fact and market price on this page was read on the pages below on that
                day. Rules and plans change, so open the linked page before you act on one.
              </p>
            </div>
            <ul className="col-2 mt-8" style={{ gap: 10 }}>
              {SOURCE_KEYS.map((k) => (
                <li key={k} style={{ fontSize: 14 }}>
                  <a href={SRC[k].url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: T.ink }}>{SRC[k].label}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 12. FAQ */}
        <section className="sec-lg dot-grid" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>AI integration questions from UK finance, operations and IT leads</h2>
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
                  <ModalCTAButton label="Ask the founder a question" region="uk" modalVariant="default" btnVariant="secondary-light" />
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
            <Sources ids={['cloudswitched', 'duaaCommence', 'duaaFactsheet', 'icoAi', 'vatNotice', 'euArticle2', 'euAiAct', 'bcApi', 'odooApi']} />
          </div>
        </section>

        {/* 13. FINAL CTA (the only dark section) */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>Stop retyping between Sage, your ERP and your order system</h2>
            <p className="mt-4">
              Send your name and work email, or your brief. Bhavesh replies within one business day to set up a short
              call about your systems and the job you want AI to take on. You leave the call knowing whether it fits,
              and what the first phase would include.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
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
