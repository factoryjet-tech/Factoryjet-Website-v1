import type { Metadata } from 'next';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

/* /uk/crm-ai-agents, built 2026-10-29.

   Truth rules for anyone editing this file.
   1. Every law, platform and price fact was read on the regulator's, vendor's
      or agency's own page on 29 October 2026 and links to it through the SRC
      map below. Re-read the page before changing a figure.
   2. No FactoryJet price and no running-cost figure for the agents we build.
      The only money figures are a named vendor's list prices (Salesforce
      Agentforce UK), a named firm's market range (LeverX) and the ICO's
      statutory maximum fine.
   3. Client proof: GPSUK (Commerceflo) and Sow Easy (WooCommerce + Odoo, build
      still in progress per src/data/case-studies/index.ts). One labelled block.
   4. Structure mirrors /uk/ecommerce-consultant (imports, components, CSS,
      schema). Copy is written fresh for this page; no sentence is copied from
      /services/crm-ai-agents.
   5. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions. */

const CANONICAL = 'https://factoryjet.com/uk/crm-ai-agents';
const UPDATED = '2026-10-29';
const READ_ON = '29 October 2026';
const TITLE = 'AI Agents for HubSpot and Salesforce UK | CRM AI Agents | FactoryJet';
const H1 = 'CRM AI Agents for UK Sales Teams on HubSpot and Salesforce, Built Around UK GDPR and PECR';
const DESCRIPTION =
  'Custom AI agents for UK sales teams on HubSpot or Salesforce: lead scoring, deal updates, call logging and follow-up drafts, with PECR outreach rules checked against ICO guidance.';

/* Design tokens, copied by value from ../ai-agents/ai-agents.css. */
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

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'CRM AI Agents', url: CANONICAL },
];

/* ─── External sources, each read on 2026-10-29 ─────────────────────────── */
const SRC = {
  // ICO PECR guide: "You can email or text any corporate body." "Sole traders and
  // some partnerships are treated as individuals." Must not conceal identity;
  // must give a valid address to opt out. Soft opt-in covers existing customers
  // only, never bought-in lists. Page says it is under review after the DUAA.
  pecrEmail: {
    url: 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/',
    label: 'ICO, guide to PECR: electronic mail marketing',
  },
  // ICO: DUAA received Royal Assent on 19 June 2025; fines up to £17.5 million or
  // 4% of global turnover under PECR; lifts restrictions on some automated
  // decision making; charities' soft opt-in.
  duaaNews: {
    url: 'https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2025/06/uk-organisations-stand-to-benefit-from-new-data-protection-laws/',
    label: 'ICO, UK organisations stand to benefit from new data protection laws',
  },
  // ICO: DUAA "clarifies that direct marketing can be a legitimate interest";
  // widens lawful bases for significant automated decisions with safeguards;
  // "all data protection provisions ... are now in force" (19 June 2026 update).
  duaaGuide: {
    url: 'https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-what-does-it-mean-for-organisations/',
    label: 'ICO, the Data (Use and Access) Act 2025: what does it mean for organisations',
  },
  // European Commission: transparency rules come into effect in August 2026;
  // chatbot users "should be made aware that they are interacting with a machine".
  aiActEc: {
    url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
    label: 'European Commission, AI Act regulatory framework',
  },
  // AI Act Article 2(1)(c): providers and deployers in a third country are in
  // scope "where the output produced by the AI system is used in the Union".
  aiActArt2: {
    url: 'https://artificialintelligenceact.eu/article/2/',
    label: 'EU AI Act, Article 2 (scope)',
  },
  // HubSpot: EU data hosted on AWS in "European Union (Germany)"; region set by
  // sign-up IP; paid Starter, Professional and Enterprise accounts can move.
  hubspotHosting: {
    url: 'https://knowledge.hubspot.com/account-security/hubspot-cloud-infrastructure-and-data-hosting-frequently-asked-questions',
    label: 'HubSpot Knowledge Base, cloud infrastructure and data hosting FAQ',
  },
  // HubSpot private apps: super admin only; scopes chosen per app by checkbox;
  // unique access token that can be rotated.
  hubspotPrivateApps: {
    url: 'https://developers.hubspot.com/docs/apps/legacy-apps/private-apps/overview',
    label: 'HubSpot Developers, private apps overview',
  },
  // HubSpot Breeze agents page names Customer agent, Prospecting agent, Data
  // agent and Breeze Assistant; custom agents built in agent builder use credits.
  hubspotBreeze: {
    url: 'https://www.hubspot.com/products/artificial-intelligence/breeze-ai-agents',
    label: 'HubSpot, Breeze AI agents',
  },
  // Salesforce UK Agentforce pricing: £1.60 per conversation; Flex Credits £400
  // per 100k credits; page does not say whether VAT is included.
  agentforceUk: {
    url: 'https://www.salesforce.com/uk/agentforce/pricing/',
    label: 'Salesforce UK, Agentforce pricing',
  },
  // LeverX, published 4 Oct 2026: indicative UK benchmarks, "rather than fixed
  // LeverX pricing": £10K-£30K single-workflow agent (5-9 weeks), £30K-£80K
  // multi-step with integrations (10-18 weeks), £80K-£200K+ enterprise. VAT not stated.
  leverx: {
    url: 'https://leverx.com/en-gb/blog/ai-agent-development-cost-uk',
    label: 'LeverX, AI agent development cost UK (4 October 2026)',
  },
} as const;
type SrcKey = keyof typeof SRC;

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',  label: 'CRM agents explained' },
  { key: 'jobs',    label: 'What the agent does' },
  { key: 'rules',   label: 'UK GDPR, PECR and the EU AI Act' },
  { key: 'project', label: 'Cost, timing and ownership' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // ── CRM agents explained ──
  { category: 'basics', question: 'What is a CRM AI agent?',
    answer: 'It is a piece of software that works inside your CRM the way a careful sales administrator would. It reads a new lead, an email reply or a call note, decides what should change on the record, and either makes that change or asks a person to approve it. The AI model reads and writes the text. Your written rules decide what it may touch.' },
  { category: 'basics', question: 'Should we use HubSpot Breeze or Salesforce Agentforce instead of a custom agent?',
    answer: 'Use the vendor agents when the job starts and ends inside one CRM and their settings match your process. HubSpot lists a Customer agent, a Prospecting agent and a Data agent. Salesforce prices Agentforce in the UK per conversation or by Flex Credits. A custom agent earns its place when the job crosses into Xero, Sage, NetSuite or a helpdesk, or when you want your own approval rules and code.' },
  { category: 'basics', question: 'How is a CRM agent different from an AI SDR?',
    answer: 'An AI SDR, short for sales development representative, writes to people who are not yet in conversation with you and tries to book meetings. A CRM agent looks after records you already hold: scoring, logging, updating stages and drafting replies. In the UK the SDR job carries more PECR risk, because it sends the first message. Many teams start with the CRM agent for that reason.' },
  { category: 'basics', question: 'Which CRMs do you build agents for?',
    answer: 'Mostly HubSpot and Salesforce. When the brief calls for it, we also connect agents to Microsoft Dynamics 365 Sales, Zoho CRM or Pipedrive through their APIs. If your marketing runs in HubSpot and your sales team works in Salesforce, one agent can read one and update the other with a shared record ID.' },
  { category: 'basics', question: 'Do we need HubSpot Professional or Enterprise?',
    answer: 'Not for a custom agent in most cases. It reaches HubSpot through a private app or a public app with chosen permissions, and the edition you pay for decides which objects and properties exist to work with. Edition matters more for HubSpot’s own Breeze features and for moving data regions: HubSpot says paid Starter, Professional and Enterprise accounts can change data centre.' },

  // ── What the agent does ──
  { category: 'jobs', question: 'Can an AI agent qualify leads in HubSpot or Salesforce?',
    answer: 'Yes, and it is the most common first job. When a form fill or chat creates a contact, the agent reads the answers and the company website, scores the lead against rules your sales director writes in plain English, sets the owner and status, and leaves a two-line note explaining the score. It also marks whether the address looks like a corporate or an individual subscriber for PECR.' },
  { category: 'jobs', question: 'Will the agent change deal stages without asking?',
    answer: 'Only where you say so in writing. Most UK teams start with suggestions: the agent reads a reply or call note, proposes the next stage with the evidence attached, and the deal owner clicks to accept. After a few weeks of reviewed suggestions you can let early, low-value moves happen alone. Moves to Closed Won, and anything above a deal value you set, stay with a person.' },
  { category: 'jobs', question: 'Can it log Teams calls, Outlook emails and meetings to the right record?',
    answer: 'Yes. The agent takes the email thread, the call transcript or the meeting notes, matches them to the contact, company and deal, and logs an activity with a short summary and next steps. Where two records look equally likely, it does not pick one. The item goes to a review queue, which keeps the CRM honest and avoids notes landing on the wrong customer.' },
  { category: 'jobs', question: 'Can the agent read Xero or Sage before a sales call?',
    answer: 'Yes, read-only by default. Before a renewal call it can pull open invoices and days overdue from Xero, Sage Intacct, NetSuite or Business Central and put a short account summary on the deal. A rep then knows the customer owes money before offering a discount. Writing back to finance systems needs its own sign-off from your finance lead.' },
  { category: 'jobs', question: 'Does the agent send emails to prospects or customers on its own?',
    answer: 'Not by default. It drafts follow-ups on the record and a rep edits and sends them, so a person stays responsible for every first message. If you later switch on automatic sends for a narrow case, such as a meeting confirmation to an existing customer, every send is logged with the rule that allowed it and carries your company name and an unsubscribe route.' },
  { category: 'jobs', question: 'How does contact enrichment work without breaking UK GDPR?',
    answer: 'The agent fills empty fields such as job title, company size and website from sources you approve in writing: the contact’s own emails, the company’s website, or a data provider you already license. Each value records where it came from and when. It does not overwrite fields a rep typed. Your privacy notice should say where enriched data comes from, and we flag that during scoping.' },

  // ── UK GDPR, PECR and the EU AI Act ──
  { category: 'rules', question: 'Is B2B cold email legal in the UK?',
    answer: 'Under PECR, the ICO’s guide says you can email or text any corporate body, so consent is not needed for a limited company address. You must not hide who you are, and you must give a valid address to opt out. UK GDPR still applies when the address names a person, such as jane.smith@company.co.uk, so you need a lawful basis and a privacy notice.' },
  { category: 'rules', question: 'Can we email sole traders and partnerships the same way?',
    answer: 'No. The ICO says sole traders and some partnerships are treated as individuals under PECR. You can only send them marketing emails if they have specifically consented, or if they bought a similar product from you and were given a clear chance to opt out. Our agents tag each contact by subscriber type so these records never reach a cold sequence.' },
  { category: 'rules', question: 'What changed for sales outreach under the Data (Use and Access) Act 2025?',
    answer: 'Three things matter for sales teams. The ICO says the Act clarifies that direct marketing can be a legitimate interest. It widens the lawful bases for significant automated decisions, with safeguards. And the ICO can now fine up to £17.5 million or 4% of global turnover under PECR. The ICO says all data protection provisions are in force, and that its PECR guidance is under review.' },
  { category: 'rules', question: 'Does the soft opt-in cover leads from a bought list?',
    answer: 'No. The ICO says the soft opt-in only applies where you previously sold a similar product or service to that person, and offered a clear opt-out when you collected their details and in every message after. It does not cover prospective customers or bought-in lists. An agent can check purchase history before any record joins a sequence that relies on it.' },
  { category: 'rules', question: 'Where is our HubSpot data stored?',
    answer: 'HubSpot’s help centre says EU accounts are hosted on AWS in Germany, and that the region is set by the sign-up IP address. It does not list a UK region. Paid Starter, Professional and Enterprise accounts can move to another data centre. For the agent, we can run the AI model in your own cloud account in a region you choose.' },
  { category: 'rules', question: 'Does the EU AI Act apply to a UK company?',
    answer: 'It can. Article 2 brings providers and deployers outside the EU into scope where the output of the AI system is used in the Union. If your agent chats with EU prospects or customers, plan for the transparency rules, which the European Commission says take effect in August 2026: people should know they are dealing with a machine. Internal CRM housekeeping carries far less exposure.' },
  { category: 'rules', question: 'Is lead scoring by AI an automated decision under UK GDPR?',
    answer: 'Usually not a significant one, because a score decides which rep calls first, not whether a person gets a job, a loan or a service. It becomes sensitive when a score blocks someone from an offer or a price. We keep a person on those decisions, log the reason the agent gave, and let you show anyone who asks how the score was reached. That is our reading; your DPO makes the call.' },

  // ── Cost, timing and ownership ──
  { category: 'project', question: 'How much does a CRM AI agent cost in the UK?',
    answer: 'Market figures, not ours: LeverX’s UK guide of 4 October 2026 puts a single-workflow agent at £10,000 to £30,000 and a multi-step agent with integrations at £30,000 to £80,000, as indicative benchmarks. It does not say whether VAT is included. FactoryJet quotes a fixed price per phase in writing after a short scoping call, and states whether VAT applies to your invoice.' },
  { category: 'project', question: 'How long does a HubSpot or Salesforce agent take to build?',
    answer: 'One focused job, such as lead scoring in HubSpot, usually goes live one to three weeks after the scope is signed. Two CRMs, several jobs or a finance system in the loop take longer, and the written scope carries dated milestones. Every week you see the agent working in your own sandbox or test account, not in a slide deck.' },
  { category: 'project', question: 'Can we see the agent work before we sign anything?',
    answer: 'Yes. We run it on a sample of your own records, with names removed if your data protection officer prefers. You see each decision, the reason it gave, the fields it would change and the places it would stop and ask a person. That demo is the point where most buyers decide, so we do it before the contract, not after.' },
  { category: 'project', question: 'What should our brief or RFP include?',
    answer: 'Your CRM and edition, the first job you want done, roughly how many leads or deals move each week, the other systems involved, such as Xero, Sage or NetSuite, and who signs off the agent’s actions. Add your DPO or privacy lead’s name if you have one. If procurement has already written an RFP, send it unchanged and we answer it point by point.' },
  { category: 'project', question: 'Who owns the agent once it is built?',
    answer: 'You do, from day one. The code sits in a repository in your name, the HubSpot app or Salesforce connected app is registered in your account, and the prompts and approval rules are written in plain English. The AI model and hosting can run in your own accounts at cost, with no markup. If you later bring the work in-house, nothing is held back.' },
];

/* ─── JSON-LD. The Organization is defined once, sitewide. ─────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'CRM AI Agents for HubSpot and Salesforce, United Kingdom',
      serviceType: 'CRM AI agent development, HubSpot AI agents, Salesforce AI agents, sales process automation',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Custom AI agents for UK sales teams on HubSpot or Salesforce that score leads, propose deal stage changes, log calls and emails, enrich records and draft follow-ups, with approval rules per action and outreach checked against UK GDPR and PECR.',
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
      about: { '@id': `${CANONICAL}#service` },
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
      'HubSpot and Salesforce agents for UK sales teams: scoring, logging, deal updates and drafts, with PECR subscriber checks and approval rules you write. Demo on your own records before you sign.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/us/services/hero-ai-integration.webp', width: 1200, height: 800, alt: 'FactoryJet AI agents for HubSpot and Salesforce' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 11, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const inlineLink = { textDecoration: 'underline', color: T.ink, fontWeight: 600 } as const;

/* Small source line. Every id comes from the SRC map above. */
function Sources({ ids }: { ids: SrcKey[] }) {
  return (
    <p style={srcNote}>
      Sources, read on {READ_ON}:{' '}
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

export default function CrmAiAgentsUKPage() {
  return (
    <>
      <script id="ld-uk-crm-ai-agents" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main>

        <Breadcrumbs items={crumbs} />

        {/* ═══ 1. HERO ═══ */}
        <section className="sec-lg dot-grid" style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />UK CRM AI Agents</span>
                  <span className="chip">HubSpot</span>
                  <span className="chip">Salesforce</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Your sales team works in HubSpot or Salesforce. Your invoices live in Xero, Sage or NetSuite. Leads
                  sit unscored over the weekend, call notes from Teams never reach the deal, and nobody is sure which
                  contacts are sole traders that PECR protects. FactoryJet builds AI agents that do that CRM work for
                  your team, under approval rules you write, and you own the code.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses since 2014</span></div>
                  <div className="upd">Last updated<br />29 October 2026</div>
                </div>

                <div className="mt-6" style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_crm_ai_agents_hero" service="CRM AI Agents" submitLabel="See a demo on my data" />
                </div>
              </div>

              <div className="card card-top-orange">
                <span className="eyebrow">What the agent does in your CRM</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Scores every new lead</div><div className="scorecard-note">with a written reason on the record</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Alone</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Tags PECR subscriber type</div><div className="scorecard-note">corporate body, sole trader or partnership</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Alone</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Proposes deal stage moves</div><div className="scorecard-note">the owner accepts in one click</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Approved</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Drafts the follow-up email</div><div className="scorecard-note">a rep edits and sends it</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>Approved</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Merges or deletes records</div><div className="scorecard-note">duplicates go to a review list</div></div>
                  <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>Never</div>
                </div>
                <p style={{ fontSize: 13, marginTop: 12 }}>
                  Working software on your own data before you sign. Founder replies within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 2. ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">What does a CRM AI agent do for a UK sales team?</span>
              <p>
                A CRM AI agent reads what arrives in HubSpot or Salesforce (form fills, email replies, call notes),
                decides what each record needs, and either updates it or asks a named person to approve the change. In
                the UK it should also know who it may email: PECR lets you email a limited company address without
                consent, but treats sole traders and some partnerships as individuals.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Three terms on this page</span>
              <p>
                <b>PECR</b> is the Privacy and Electronic Communications Regulations, the UK rules on marketing by
                email, text and phone. <b>UK GDPR</b> is the main UK law on personal data, and it still applies when a
                business email names a person. A <b>corporate subscriber</b> is a company, LLP or public body, as
                opposed to a sole trader or partnership.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ 3. FACTS BAND (verified only) ═══ */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '£17.5m', t: 'or 4% of global turnover: the ICO’s maximum PECR fine after the Data (Use and Access) Act', s: 'ICO, June 2025', u: SRC.duaaNews.url },
                { v: 'Individuals', t: 'is how PECR treats sole traders and some partnerships, so consent rules apply to them', s: 'ICO guide to PECR', u: SRC.pecrEmail.url },
                { v: 'Aug 2026', t: 'EU AI Act transparency rules take effect: people must know they are talking to a machine', s: 'European Commission', u: SRC.aiActEc.url },
                { v: 'Germany', t: 'is where HubSpot hosts EU-region accounts, on AWS. No UK region is listed', s: 'HubSpot Knowledge Base', u: SRC.hubspotHosting.url },
              ].map((r) => (
                <li key={r.v}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} target="_blank" rel="noopener noreferrer nofollow" style={{ fontFamily: T.fm, fontSize: 10, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══ 4. SIX JOBS ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">The work an agent takes on</span>
              <h2>Six CRM jobs UK sales teams ask us to build first</h2>
              <p className="lead mt-4">
                Each job can be built alone and priced as its own phase. Most UK buyers start with the first one,
                because unscored leads are the cheapest problem to see and the quickest to fix.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card">
                <h3>Score and route new leads</h3>
                <p className="mt-4">A web form, LinkedIn lead form or chat creates a contact. The agent reads the answers and the company’s site, scores against your ideal-customer rules, sets owner and lead status, and writes why. Works on HubSpot contacts and Salesforce leads.</p>
              </li>
              <li className="svc-card">
                <h3>Tag PECR subscriber type</h3>
                <p className="mt-4">Limited company, LLP, sole trader or partnership. The agent sets a field from the domain, the company name and your records, so a sequence tool can exclude individual subscribers who never consented. Unclear cases go to a person.</p>
              </li>
              <li className="svc-card">
                <h3>Propose deal stage changes</h3>
                <p className="mt-4">A buyer replies “send the contract over” and the agent suggests moving the deal to Negotiation, with the quote attached. The owner accepts or rejects. Closed Won is never set by the agent.</p>
              </li>
              <li className="svc-card">
                <h3>Log calls, emails and meetings</h3>
                <p className="mt-4">Outlook threads, Teams or Zoom transcripts and meeting notes become activities on the right contact, company and deal, with next steps. If two records match equally, nothing is guessed.</p>
              </li>
              <li className="svc-card">
                <h3>Draft the next email</h3>
                <p className="mt-4">After a call or a silent fortnight, the agent writes a follow-up from the deal history in your house style. The rep edits and sends it. Your company name and opt-out wording are in every draft.</p>
              </li>
              <li className="svc-card">
                <h3>Bring finance into the deal</h3>
                <p className="mt-4">Open invoices from Xero, Sage Intacct, NetSuite or Dynamics 365 Business Central, and payment status from Stripe or GoCardless, summarised on the deal before a renewal call. Read-only unless finance signs off.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ 5. UK OUTREACH RULES ═══ */}
        <section className="sec-lg" id="pecr">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">UK GDPR and PECR, checked on {READ_ON}</span>
                <h2>Who your agent may email, and what the 2025 Act changed</h2>
                <div className="stack mt-6">
                  <p>
                    <b>Companies versus people.</b> The ICO’s PECR guide says you can email or text any corporate body.
                    It also says sole traders and some partnerships are treated as individuals, so you need their
                    specific consent, or the existing-customer rule, before sending them marketing. A CRM full of
                    one-person consultancies and family partnerships is the usual place UK outbound goes wrong.
                  </p>
                  <p>
                    <b>Every message.</b> You must not hide your identity, and you must give a valid address so people
                    can opt out. The ICO recommends keeping a do-not-email list of businesses that object. Our agents
                    write opt-outs back to the CRM the same day, so HubSpot or Salesforce stays the single suppression
                    list.
                  </p>
                  <p>
                    <b>The soft opt-in is narrow.</b> It covers people you previously sold a similar product
                    to, who were offered an opt-out at the start and in every message. The ICO says it does
                    not cover prospects or bought-in lists.
                  </p>
                  <p>
                    <b>The Data (Use and Access) Act 2025.</b> It received Royal Assent on 19 June 2025. The ICO says it
                    clarifies that direct marketing can be a legitimate interest, widens the lawful bases for
                    significant automated decisions with safeguards, and lets the ICO fine up to £17.5 million or 4%
                    of global turnover under PECR. The ICO’s guide notes that all data protection provisions are now in
                    force and that its PECR guidance is under review, so we re-read it at the start of every project.
                  </p>
                  <p>
                    <b>Named people at companies.</b> PECR may allow the email, but UK GDPR still governs
                    jane.smith@company.co.uk. You need a lawful basis, usually legitimate interests, and a privacy
                    notice that covers enrichment. We are not lawyers: we build the controls and your DPO or solicitor
                    signs off the policy.
                  </p>
                </div>
                <Sources ids={['pecrEmail', 'duaaNews', 'duaaGuide']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">How the agent treats each contact</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Limited company or LLP address</div><div className="scorecard-note">corporate subscriber under PECR</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>May email</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Sole trader, no consent</div><div className="scorecard-note">treated as an individual</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Excluded</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Past buyer of a similar product</div><div className="scorecard-note">soft opt-in, if offered an opt-out</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>May email</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Bought-in list, individual</div><div className="scorecard-note">soft opt-in does not apply</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Excluded</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Anyone who opted out</div><div className="scorecard-note">written back to the CRM</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Suppressed</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Unclear subscriber type</div><div className="scorecard-note">a person decides</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Review</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 6. APPROVAL RULES ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Approval rules</span>
              <h2>What the agent may change alone, and what waits for a person</h2>
              <p className="lead mt-4">
                You sign these rules off before launch. They are written per action and per field, and they live in
                a plain-English file in your repository, so your sales director can read them without a developer.
              </p>
            </div>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th className="fj">Default rule at launch</th>
                    <th>Can loosen later?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Fill an empty field</td><td className="fj"><span className="yes">Runs alone, source logged</span></td><td><span className="yes">Already loose</span></td></tr>
                  <tr><td className="feat">Score a lead and set owner</td><td className="fj"><span className="yes">Runs alone, reason written</span></td><td><span className="yes">Already loose</span></td></tr>
                  <tr><td className="feat">Move an early deal stage</td><td className="fj"><span className="partial">Suggested, owner approves</span></td><td><span className="yes">Yes, after reviewed weeks</span></td></tr>
                  <tr><td className="feat">Change a field a rep typed</td><td className="fj"><span className="no">Never</span></td><td><span className="partial">Per field, in writing</span></td></tr>
                  <tr><td className="feat">Send an email</td><td className="fj"><span className="no">Drafts only</span></td><td><span className="partial">Narrow cases, existing customers</span></td></tr>
                  <tr><td className="feat">Write to Xero, Sage or NetSuite</td><td className="fj"><span className="no">Read-only</span></td><td><span className="partial">With finance sign-off</span></td></tr>
                  <tr><td className="feat">Merge or delete records</td><td className="fj"><span className="no">Not allowed</span></td><td><span className="no">No</span></td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              In HubSpot the agent connects through an app whose scopes a super admin ticks one by one, with its own
              access token that can be rotated if it leaks. In Salesforce it gets a dedicated user with only the
              permissions the job needs. Either way, the agent cannot see objects outside its job.
            </p>
            <Sources ids={['hubspotPrivateApps']} />
          </div>
        </section>

        {/* ═══ 7. NUMBERED PROJECT STEPS ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">How a project runs</span>
              <h2>Six steps from your brief to a live HubSpot or Salesforce agent</h2>
              <p className="lead mt-4">
                Every step ends with something you can check. You can stop after step three and keep what you have
                seen.
              </p>
            </div>
            <ol className="stack mt-10" style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Send the brief or the RFP', d: 'Your CRM and edition, the first job, weekly lead or deal volume, other systems in the loop and who approves the agent. A procurement RFP is welcome as it stands.' },
                { n: '02', t: 'Data protection check', d: 'We map which personal data the job touches, the lawful basis your team relies on, where the AI model will run and how PECR subscriber type is decided. Your DPO gets a one-page summary.' },
                { n: '03', t: 'Demo on your records', d: 'Before any contract, the agent runs on a sample of your real records, names removed if you prefer, and shows each decision with its reason and the fields it would change.' },
                { n: '04', t: 'Fixed scope and price for the phase', d: 'Jobs, approval rules, milestones and one fixed price in writing, with VAT stated. Each phase is signed on its own.' },
                { n: '05', t: 'Build in a sandbox', d: 'A HubSpot test account or Salesforce sandbox first, never live data first, with a demo in your own CRM every week.' },
                { n: '06', t: 'Launch on suggestions, then loosen', d: 'The agent suggests before it acts. We review accepted, edited and wrong suggestions with your sales ops lead, and widen the rules only where the numbers support it.' },
              ].map((s) => (
                <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.orange, minWidth: 34 }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                    <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <MidPageCTA
          headline={'Send the brief. See the agent on your own HubSpot or Salesforce records.'}
          sub={'Tell us your CRM, the first job and who signs off. The founder replies within 24 hours, and the demo runs on a sample of your records before you sign anything.'}
          label={'See a demo on my data'}
        />

        {/* ═══ 8. COMPARISON ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <span className="eyebrow">Side by side</span>
            <h2 style={{ maxWidth: 760 }}>Custom agent, HubSpot Breeze or Salesforce Agentforce, or a Zapier flow</h2>
            <p className="lead mt-4" style={{ maxWidth: 760 }}>
              All three are sensible in the right place. The question is whether the job stays inside one CRM or
              crosses into the systems your finance and service teams run.
            </p>
            <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>Question</th>
                    <th className="fj">Custom agent (FactoryJet)</th>
                    <th>Breeze or Agentforce</th>
                    <th>Zapier or Make flow</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Reads emails and call notes</td><td className="fj"><span className="yes">Yes</span></td><td><span className="yes">Yes</span></td><td><span className="partial">With an AI step</span></td></tr>
                  <tr><td className="feat">HubSpot and Salesforce in one flow</td><td className="fj"><span className="yes">Yes, shared record ID</span></td><td><span className="no">One vendor each</span></td><td><span className="yes">Yes</span></td></tr>
                  <tr><td className="feat">Reads Xero, Sage or NetSuite first</td><td className="fj"><span className="yes">Yes</span></td><td><span className="partial">Via connectors</span></td><td><span className="partial">Simple lookups</span></td></tr>
                  <tr><td className="feat">PECR subscriber rules per contact</td><td className="fj"><span className="yes">Built to your policy</span></td><td><span className="partial">Your configuration</span></td><td><span className="partial">Your configuration</span></td></tr>
                  <tr><td className="feat">You own the code</td><td className="fj"><span className="yes">Yes</span></td><td><span className="no">Vendor feature</span></td><td><span className="partial">Flows, not code</span></td></tr>
                  <tr><td className="feat">How it is paid for</td><td className="fj"><span className="yes">Fixed price per phase</span></td><td><span className="partial">Credits or per conversation</span></td><td><span className="partial">Plan tier by task volume</span></td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6" style={{ maxWidth: 820 }}>
              HubSpot’s Breeze page names a Customer agent, a Prospecting agent and a Data agent, and says custom
              agents built in its agent builder consume credits. Salesforce’s UK page lists Agentforce at £1.60 per
              conversation, or Flex Credits at £400 per 100,000 credits; it does not say whether VAT is included and
              notes that prices can change. If your process fits those products, use them. We are glad to say so on
              the first call.
            </p>
            <Sources ids={['hubspotBreeze', 'agentforceUk']} />
          </div>
        </section>

        {/* ═══ 9. UK SYSTEMS + PROOF ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">The rest of your stack</span>
                <h2>The UK systems a CRM agent usually has to read</h2>
                <div className="stack mt-6">
                  <p>
                    A sales record is only half the story. The other half sits in <b>Xero</b>, <b>Sage 50</b>,
                    <b> Sage 200</b> or <b>Sage Intacct</b>, <b>QuickBooks</b>, <b>NetSuite</b> or <b>Dynamics 365
                    Business Central</b>, and for product businesses in <b>Odoo</b>, <b>Brightpearl</b>, <b>Linnworks</b>{' '}
                    or <b>Mintsoft</b>. An agent that can see an overdue invoice, a stock shortage or a failed
                    <b> GoCardless</b> mandate before a rep picks up the phone saves an awkward call.
                  </p>
                  <p>
                    For wholesalers and brands, trade orders often start on the web store and end in the CRM. If your
                    sales team handles trade accounts, our <a href="/uk/b2b-ecommerce" style={inlineLink}>UK B2B
                    ecommerce</a> work and the CRM agent can share one customer ID, so a rep sees what a stockist
                    ordered last month without opening another system.
                  </p>
                  <p>
                    Before anything is built, we agree which system owns each field. HubSpot can own the marketing
                    source, Salesforce the opportunity value, Xero the credit position. The agent never lets two
                    systems overwrite each other.
                  </p>
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">UK work we can point to</span>
                <div className="stack mt-4">
                  <p style={{ fontSize: 14 }}>
                    <b>GPSUK</b> is a UK supplier of branded promotional products. We built its trade storefront on
                    Commerceflo, where business buyers log in, see their own account prices and move from quote to
                    order. <a href="/case-studies/gpsuk-promotional-products" style={inlineLink}>Read the GPSUK case study</a>.
                  </p>
                  <p style={{ fontSize: 14 }}>
                    <b>Sow Easy</b> is a UK wholesale client. We are building its WordPress WooCommerce trade store with
                    Odoo as the master for stock, pricing and SKUs. The Odoo link is being tested on staging and launch
                    is still ahead. <a href="/case-studies/sow-easy-distributor-portal" style={inlineLink}>Read the Sow Easy case study</a>.
                  </p>
                  <p style={{ fontSize: 13, color: T.n400 }}>
                    Neither project is a CRM agent. Both are the same kind of work: deciding which system owns each
                    record and keeping the link honest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 10. EU AI ACT + DATA LOCATION ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Selling into Europe</span>
              <h2>The EU AI Act, HubSpot data regions and where the model runs</h2>
              <div className="stack mt-6">
                <p>
                  <b>EU AI Act.</b> Brexit did not take UK sellers out of it. Article 2 covers providers and deployers
                  outside the EU where the output of an AI system is used in the Union. The European Commission says
                  the Act’s transparency rules come into effect in August 2026, and that people using chatbots should
                  be made aware they are interacting with a machine. A CRM agent that only tidies records carries
                  little exposure. One that chats with prospects in Dublin or Rotterdam should say it is automated.
                </p>
                <p>
                  <b>HubSpot hosting.</b> HubSpot’s help centre says accounts in its EU region are hosted on AWS in
                  Germany, that the region is chosen from the IP address at sign-up, and that paid accounts can move
                  data centre. It lists no UK region. Check which region your portal is in before your DPO writes the
                  data map.
                </p>
                <p>
                  <b>The AI model.</b> It can run in your own Anthropic, OpenAI, Azure or Google Cloud account, in a
                  region you pick, billed to you at cost with no markup. Records then pass through a contract your
                  company signed, not ours.
                </p>
              </div>
              <Sources ids={['aiActArt2', 'aiActEc', 'hubspotHosting']} />
            </div>
          </div>
        </section>

        {/* ═══ 11. HOUSE TERMS + COST ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Terms</span>
                <h2>How we price and run a CRM agent project</h2>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>Demo before you sign.</b> You see working software on your own records before any contract.</li>
                  <li><b>Fixed price per phase.</b> Each phase is scoped, priced and signed on its own, with VAT shown on the quote, so you can stop after the first job.</li>
                  <li><b>You own the code.</b> The repository, the CRM app registration and the written rules are yours from day one.</li>
                  <li><b>Your accounts, at cost.</b> The AI model and hosting can run in your own accounts, with no markup from us.</li>
                  <li><b>Defects fixed inside the build price</b> for a cover period agreed before work starts.</li>
                  <li><b>Support only if you choose it.</b> Each change is quoted and approved first. No monthly minimum.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet quotes the build, and any support you choose, as fixed prices in writing after a short
                  scoping call. If you want us to, we keep managing the servers, AI, APIs and maintenance so your team
                  does not have to.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">UK market ranges for a build</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Single-workflow agent</div><div className="scorecard-note">5 to 9 weeks</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£10K to £30K</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Multi-step agent with integrations</div><div className="scorecard-note">10 to 18 weeks</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£30K to £80K</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Enterprise multi-agent system</div><div className="scorecard-note">5 to 9 months</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>£80K to £200K+</div></div>
                <p style={srcNote}>
                  Indicative UK benchmarks from <a href={SRC.leverx.url} target="_blank" rel="noopener noreferrer" style={srcLink}>LeverX, 4 October 2026</a>,
                  which says they are not its own fixed prices. The guide does not say whether VAT is included. These
                  are not FactoryJet prices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 12. WHO WE WORK WITH ═══ */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 740 }}>
              <span className="eyebrow">Who this is for</span>
              <h2>Established UK companies with a sales team and a CRM that has drifted</h2>
              <p className="lead mt-4">
                FactoryJet was founded in 2014 and has worked with more than 500 businesses. Bhavesh Barot, the
                founder, is involved in every engagement. These are the UK teams that send us CRM briefs.
              </p>
            </div>
            <ul className="col-3 mt-12">
              <li className="svc-card"><h3>B2B services firms</h3><p className="mt-4">Consultancies, agencies and IT providers with ten or more reps in HubSpot, where inbound leads wait too long for a first reply.</p></li>
              <li className="svc-card"><h3>Manufacturers and distributors</h3><p className="mt-4">Salesforce or Dynamics for accounts, Sage or NetSuite for orders, and reps who need the credit position before a quote.</p></li>
              <li className="svc-card"><h3>Wholesalers and trade brands</h3><p className="mt-4">Stockists ordering online and by phone, with a CRM that never sees the web orders. Often joined to our <a href="/uk/b2b-ecommerce">B2B ecommerce</a> work.</p></li>
              <li className="svc-card"><h3>Software and SaaS sellers</h3><p className="mt-4">Marketing in HubSpot, sales in Salesforce, and two records for every lead that nobody trusts.</p></li>
              <li className="svc-card"><h3>Firms selling into the EU</h3><p className="mt-4">UK companies with prospects in Ireland, the Netherlands or Germany, who need the EU AI Act and HubSpot data region on the same page as PECR.</p></li>
              <li className="svc-card"><h3>Teams after a messy migration</h3><p className="mt-4">A move from Pipedrive or Zoho left duplicates, blank fields and lost owners. The agent cleans forward, and duplicates go to a person.</p></li>
            </ul>
          </div>
        </section>

        {/* ═══ 13. RELATED UK PAGES ═══ */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">Related work</span>
              <h2>Other UK AI services, and the US version of this page</h2>
              <div className="stack mt-6">
                <p>
                  A CRM agent is one kind of <a href="/uk/ai-agents" style={inlineLink}>AI agent for UK businesses</a>.
                  If you are still deciding where AI fits, start with <a href="/uk/ai-consulting" style={inlineLink}>AI
                  consulting</a>. If the agent will answer customers, see <a href="/uk/ai-customer-service" style={inlineLink}>AI
                  customer service</a> or <a href="/uk/whatsapp-ai-agents" style={inlineLink}>WhatsApp AI agents</a>.
                  For bespoke builds beyond the CRM, see <a href="/uk/ai-development" style={inlineLink}>AI development</a>.
                  Selling in the US? The <a href="/services/crm-ai-agents" style={inlineLink}>US CRM AI agents page</a> covers the same service for US teams.
                </p>
              </div>
              <div className="flex-wrap mt-6">
                <a className="city-pill" href="/uk/ai-agents">AI agents UK</a>
                <a className="city-pill" href="/uk/ai-consulting">AI consulting UK</a>
                <a className="city-pill" href="/uk/ai-customer-service">AI customer service UK</a>
                <a className="city-pill" href="/uk/whatsapp-ai-agents">WhatsApp AI agents UK</a>
                <a className="city-pill" href="/uk/ai-development">AI development UK</a>
                <a className="city-pill" href="/contact">Contact us</a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ 14. FAQ ═══ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>HubSpot and Salesforce agent questions from UK sales and compliance leads</h2>
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
            <Sources ids={['pecrEmail', 'duaaGuide', 'aiActArt2', 'hubspotHosting', 'agentforceUk', 'leverx']} />
          </div>
        </section>

        {/* ═══ 15. FINAL CTA (the only dark section) ═══ */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Ready when you are</span>
            <h2>See a CRM agent work on your own records</h2>
            <p className="mt-4">
              Send your name, work email and the CRM you use. The founder replies within 24 hours to book a short
              call, and the demo runs on a sample of your HubSpot or Salesforce data before you sign.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
              <a className="btn btn-outline" href="/uk/ai-agents" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.25)' }}>See UK AI agents</a>
            </div>
          </div>
        </section>

      </main>
        <Footer />
      </div>
    </>
  );
}
