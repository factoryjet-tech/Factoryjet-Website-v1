import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import AuFaq from '../components/AuFaq';
import { twinAlternates } from '@/data/hreflangMap';
import '@/components/v2/AiAgentDevelopmentSections.css';
import '../au-page.css';
import '../au-hub.css';

const CANONICAL = 'https://factoryjet.com/au/accounts-receivable-automation';
const PUBLISHED = '2026-10-29';
const UPDATED = '2026-10-31';
const TITLE = 'Accounts Receivable Automation Australia | Xero & MYOB';
/* Visible hero heading and schema headline are the same text. */
const HERO_H1_LEAD = 'Accounts Receivable Automation in Australia:';
const HERO_H1_EMPHASIS = 'Debtor Follow-Up Inside Xero and MYOB';
const H1 = `${HERO_H1_LEAD} ${HERO_H1_EMPHASIS}`;
const DESCRIPTION =
  'Accounts receivable automation for Australian firms on Xero or MYOB. An AI agent follows up debtors, matches payments and pauses on disputes. You own it.';

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'Australia', url: 'https://factoryjet.com/au' },
  { name: 'Accounts Receivable Automation', url: CANONICAL },
];

/* ─── External sources, all fetched and read 2026-10-29 ─────────────── */
// Xero AU, Send invoices (region shown as Australia, AUD): "Reminders are sent for you before and
// after the due date, so no follow-up slips through." Card payments "through Stripe", plus
// "GoCardless direct debit, PayTo, or Zip".
const SRC_XERO_INVOICING = 'https://www.xero.com/au/accounting-software/send-invoices/';
// Xero's own OpenAPI spec for the Accounting API (XeroAPI on GitHub). Operation summaries read:
// emailInvoice "Sends a copy of a specific invoice to related contact via email";
// getInvoiceReminders "Retrieves invoice reminder settings"; "Creates multiple payments for invoices
// or credit notes"; "Creates one or many batch payments for invoices"; getReportAgedReceivablesByContact;
// "Creates a history record for a specific invoice".
const SRC_XERO_API = 'https://github.com/XeroAPI/Xero-OpenAPI/blob/master/xero_accounting.yaml';
// MYOB Business API overview: connects to "AccountRight, new Essentials and MYOB Business files".
const SRC_MYOB_API = 'https://developer.myob.com/api/myob-business-api/api-overview/';
// MYOB Customer Payment: "Return, create and delete customer payments"; Invoices array with
// AmountApplied "Amount applied to invoice".
const SRC_MYOB_CUSTPAY = 'https://developer.myob.com/api/myob-business-api/v2/sale/customerpayment/';
// business.gov.au, eInvoicing: "the new way to digitally exchange invoices through your software";
// Peppol "a common standard in Australia"; delivered by ATO-approved service providers; benefits
// listed include "faster payments" and "more accurate invoices, resulting in less mistakes to chase
// up and correct".
const SRC_BGA_EINVOICING = 'https://business.gov.au/finance/payments-and-invoicing/e-invoicing';
// Payment Times Reporting Regulator, INFO10 Reforms: reporting entities now include "large businesses
// with annual consolidated revenue of $100 million or more"; amendments "commenced 7 September 2024";
// entities that "pay small business suppliers within 20 days" can be on the fast small business payers list.
const SRC_PTRS = 'https://paymenttimes.gov.au/guidance/regulatory-resources/information-sheet-10';
// OAIC, APP 1 guidelines para 1.35: "From 10 December 2026, APP 1.7 requires APP entities to include
// the information outlined in APP 1.8" where a computer program makes, or does a thing substantially
// and directly related to making, a decision that could significantly affect an individual.
// Footnote cites the Privacy and Other Legislation Amendment Act 2024 (Cth).
const SRC_OAIC_APP1 =
  'https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information';
// ASIC, Debt collection: joint ASIC and ACCC "Debt collection guideline for collectors and creditors"
// (RG 96), revised July 2014; ACCC is responsible for goods and services other than financial services.
const SRC_ASIC_RG96 = 'https://asic.gov.au/regulatory-resources/credit/debt-collection/';
// Build-only market ranges. Flowtivity (5 March 2026): customer service automation $10,000 to $25,000,
// multi-system workflow automation $20,000 to $50,000+. Web Video Digital (5 August 2026): "between
// AUD 15,000 and AUD 150,000". Neither states whether GST is included. Never add running, retainer or
// model-usage figures (Bhavesh, 11 Oct 2026).
const SRC_FLOWTIVITY = 'https://flowtivity.ai/blog/ai-agent-cost-pricing-guide-australia-2026/';
const SRC_WVD = 'https://webvideodigital.com.au/custom-ai-agent-cost-in-australia/';

/* ─── FAQ source of truth (drives UI + FAQPage schema) ─────────────── */
const FAQ_CATEGORIES = [
  { key: 'basics',   label: 'Debtors and AR basics' },
  { key: 'software', label: 'Xero, MYOB & software' },
  { key: 'ai',       label: 'AI and debtor follow-up' },
  { key: 'rules',    label: 'Australian rules' },
  { key: 'build',    label: 'Cost, setup & ownership' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string; links?: { href: string; label: string }[] }[] = [
  // ── Basics ──
  { category: 'basics', question: 'What is accounts receivable automation?',
    answer: 'It is software taking over the routine steps of getting paid: sending invoices, reminding customers before and after the due date, matching money in the bank to the invoices it settles, and reporting who is overdue. Your credit controller still decides who gets more credit, how a dispute is settled and what is written off. In Australia this work is usually called debtor management.' },
  { category: 'basics', question: 'What is debtor management?',
    answer: 'Debtor management is how a business makes sure customers who buy on credit pay on time. It covers setting payment terms, checking new accounts before giving credit, sending invoices and statements, following up overdue accounts, recording promises to pay, and deciding when to stop supply or refer a debt to a collector. Automation handles the follow-up and record keeping; people handle the judgement.' },
  { category: 'basics', question: 'Who is a debtor and who is a creditor?',
    answer: 'A debtor is someone who owes you money, such as a customer with an unpaid invoice. A creditor is someone you owe money to, such as a supplier. Your debtors sit in accounts receivable and your creditors sit in accounts payable. The same company can be both: a wholesaler is a creditor to the retailers it supplies and a debtor to its own manufacturers.' },
  { category: 'basics', question: 'What are debtor days (days sales outstanding), and how do you work them out?',
    answer: 'Debtor days is the average number of days customers take to pay you. Many finance teams call the same measure days sales outstanding, or DSO. A common way to work it out: divide your trade debtors at the end of a period by your credit sales for that period, then multiply by the number of days in it. If debtors equal a third of a 90-day quarter’s credit sales, that is about 30 days. Watch the trend, not one month.' },
  { category: 'basics', question: 'What are the 5 Cs of accounts receivable management?',
    answer: 'They are a checklist for deciding how much credit to give a customer: character (their record of paying), capacity (whether their cash flow can cover the bill), capital (what the business is worth), collateral (security you could fall back on) and conditions (the state of their industry and the economy). The agent can pull the payment history for the first one; people judge the rest.' },
  { category: 'basics', question: 'How do you politely chase an unpaid invoice?',
    answer: 'Be early and make paying easy. Send a friendly note a few days before the due date, then one on the day after, quoting the invoice number, amount and a pay link or bank details. Attach the invoice again. If there is no reply after a week or two, ring. Keep the tone the same as your sales team uses, because the customer relationship outlasts one late payment.' },

  // ── Software ──
  { category: 'software', question: 'Does Xero send automatic invoice reminders in Australia?',
    answer: 'Yes. Xero’s Australian invoicing page says reminders are sent before and after the due date, and customers can pay online by card through Stripe, or by GoCardless direct debit, PayTo or Zip. Those reminders follow a fixed schedule. They do not read the customer’s reply, notice a dispute, or change tone for a key account. That gap is where a custom agent earns its place.',
    links: [{ href: SRC_XERO_INVOICING, label: 'Xero AU: send invoices and reminders' }] },
  { category: 'software', question: 'Can an AI agent work with MYOB AccountRight or MYOB Business?',
    answer: 'Yes. MYOB says its Business API connects to AccountRight, new Essentials and MYOB Business files. Its customer payment endpoint can create payments and apply an amount to each sales invoice, which is what an agent needs to record what a customer paid. MYOB Acumatica is a separate product, so if you run it we confirm the connection route on the first call.',
    links: [{ href: SRC_MYOB_CUSTPAY, label: 'MYOB API: customer payments' }] },
  { category: 'software', question: 'What does the Xero API let an AR agent do?',
    answer: 'Xero’s published API specification lists the pieces an agent uses: emailing a copy of an invoice to the customer, reading your invoice reminder settings, recording payments against invoices or credit notes, creating batch payments, pulling the Aged Receivables by Contact report, and adding history notes to an invoice. So the agent can follow up, record and leave an audit trail without anyone retyping figures.',
    links: [{ href: SRC_XERO_API, label: 'Xero Accounting API specification' }] },
  { category: 'software', question: 'What is the best debtor management software for Xero?',
    answer: 'There is no single best one. Australian businesses on Xero often compare ezyCollect, CreditorWatch Collect and Paidnice, and practices look at FeeSynergy Collect. Each automates reminders with a dashboard, and some also log replies or draft next steps for approval. Pick a product if your process is standard. Consider a custom agent when you run several entities, sell through reps or an ERP, or need replies read and routed by your own rules.' },
  { category: 'software', question: 'Can it work with NetSuite, Odoo, QuickBooks or an inventory system?',
    answer: 'Usually, yes. If your ledger is NetSuite, Odoo or QuickBooks Online, or your orders sit in Cin7 or Unleashed, the agent reads open invoices and customer details from the ledger and, where useful, order and delivery records from the inventory system, so it can answer “what was this for?” emails. We check each system’s API access for your plan before we quote.' },

  // ── AI ──
  { category: 'ai', question: 'Can AI do debt collection for my business?',
    answer: 'AI can handle the early, routine part of collecting from business customers: reminders, resending invoices and statements, answering simple questions and logging promises to pay. It should not decide to stop supply, threaten action or refer anyone to a collection agency. We build agents that write email in your approved tone, stop chasing the moment a dispute appears, and pass those accounts to a named person.' },
  { category: 'ai', question: 'How does the agent handle a customer who disputes an invoice?',
    answer: 'It stops reminders on that invoice straight away, so a customer who has raised a problem is not chased again. It summarises the email, attaches the invoice and any order or delivery record it can find, and sends the case to the person who owns that account. Once the dispute is settled, that person marks it, and the agent picks up the follow-up again.' },
  { category: 'ai', question: 'Is an AI collections agent the same as a debt collection agency?',
    answer: 'No. An AI collections agent works inside your own business. It sends payment reminders from your accounts address, in your name, while the customer relationship is still yours. A debt collection agency is a separate company you refer a debt to once you have stopped chasing it yourself. The agent can hand over the full history of reminders and replies if you decide to refer an account.' },
  { category: 'ai', question: 'Will customers know they are dealing with an AI agent?',
    answer: 'That is your decision, and we recommend being open about it. By default the agent sends from your accounts address and signs off with your team’s name, using wording your credit controller approved. If you want to disclose it, add one line to the email footer, such as: “Replies to this address are sorted automatically, and a person on our accounts team reads anything unusual.”' },
  { category: 'ai', question: 'Can the agent match payments when the remittance does not quote an invoice number?',
    answer: 'Often. When a customer pays several invoices in one transfer and sends the remittance as a PDF or email, the agent reads it, finds the open invoices by number, amount and customer name, and proposes a match. Anything it is unsure about goes into a review queue for a person. Clear matches are recorded in Xero or MYOB with a note saying how they were matched.' },

  // ── Rules ──
  { category: 'rules', question: 'Are there rules about how Australian businesses chase debts?',
    answer: 'Yes. ASIC and the ACCC publish a joint debt collection guideline for collectors and creditors, which sets out how consumer protection law applies to collection conduct. The guideline is addressed to creditors as well as collectors, so it covers a business chasing its own invoices. Before launch, your credit controller signs off every reminder template, the send times and how often each customer group hears from you. Ask your lawyer how the guideline applies to your customers.',
    links: [{ href: SRC_ASIC_RG96, label: 'ASIC: debt collection guideline' }] },
  { category: 'rules', question: 'Does the Privacy Act affect an AI agent that follows up debtors?',
    answer: 'It can, when some of your debtors are sole traders or partners, because their details are personal information. The deadline to note is 10 December 2026. From then, the OAIC says an APP entity (a business covered by the Australian Privacy Principles) must explain in its privacy policy where a computer program helps make significant decisions about people. Ask your privacy adviser whether a credit hold suggestion counts. We give you a written description of what the agent decides.',
    links: [{ href: SRC_OAIC_APP1, label: 'OAIC: APP 1 guidelines' }] },
  { category: 'rules', question: 'Does Peppol eInvoicing help us get paid faster?',
    answer: 'It can help. Peppol is an international standard for sending invoices from one accounting system straight into another. business.gov.au lists faster payments among the benefits of eInvoicing. Start with your largest customers: ask whether they can receive Peppol eInvoices, and check that your Xero or MYOB file is set up to send them. The agent then follows up an eInvoice and an emailed invoice in the same way.',
    links: [{ href: SRC_BGA_EINVOICING, label: 'business.gov.au: eInvoicing' }] },
  { category: 'rules', question: 'Can you write off an invoice that will not be paid?',
    answer: 'Yes, as a bad debt, but it is an accounting and tax decision, so agree the steps with your accountant first. Usually the business shows it tried to collect, decides the debt will not be recovered, and records the write-off in Xero or MYOB. The agent can help by producing the full history of reminders, replies and promises for that customer, ready for your accountant to review.' },

  // ── Build ──
  { category: 'build', question: 'How much does accounts receivable automation cost in Australia?',
    answer: 'Accounts receivable software is sold as a subscription, and each vendor publishes its own price. A custom build is priced by scope. Two Australian market guides, linked below, put custom AI agents and multi-system automation between A$15,000 and A$150,000, without saying whether GST is included. Those are market ranges, not our prices. FactoryJet quotes a fixed price per phase in writing after scoping.',
    links: [{ href: SRC_FLOWTIVITY, label: 'Flowtivity: AI agent cost in Australia' }, { href: SRC_WVD, label: 'Web Video Digital: custom AI agent cost' }] },
  { category: 'build', question: 'How long does an accounts receivable automation project take?',
    answer: 'A first phase covering one entity, reminders and reply sorting in Xero or MYOB usually runs for a few weeks from the first workshop, including testing on your own past invoices. Payment matching from remittances, several entities, an ERP or inventory system, and credit hold suggestions add time. Each phase is scoped and signed on its own, so you decide whether to continue after seeing results.' },
  { category: 'build', question: 'Can we see it working before we sign anything?',
    answer: 'Yes. Before a contract, we run a first version on a sample of your own data: last quarter’s overdue invoices and the replies your team received. You see the reminders it would have drafted and how it would have sorted each reply, side by side with what actually happened. If Xero or MYOB’s built-in reminders would do the job, we tell you then.' },
  { category: 'build', question: 'Who owns the agent, and what happens after launch?',
    answer: 'You do. The code and repository are yours from day one, and the AI and hosting can run in your own accounts at cost with no markup. Defects are fixed inside the build price for a cover period agreed before work starts. Support after that is optional: each change is quoted and approved, and there is no monthly minimum.' },
  { category: 'build', question: 'What should we send you to get a quote?',
    answer: 'A short written brief is ideal, or an RFP (request for proposal) if you have one. Tell us your accounting system and version, how many entities, roughly how many invoices you send each month, your current reminder wording, how customers pay, and any other systems involved such as a CRM, ERP or inventory tool. A de-identified aged receivables report helps us size the job quickly.' },
];

/* ─── Named options in the Australian market (ItemList). Each note is based on the company’s own
       website, fetched 2026-10-29. ── */
const PROVIDERS: { name: string; note: string; url?: string }[] = [
  { name: 'FactoryJet', note: 'That is us. We design, build and support a custom AI agent that follows up debtors, sorts replies and matches payments inside your Xero or MYOB file, to your rules, and you own the code.' },
  { name: 'ezyCollect by Sidetrade', url: 'https://ezycollect.io/', note: 'Says it automates reminders, payments and credit decisions. Lists integrations with Xero, MYOB, NetSuite, Acumatica, QuickBooks, Pronto Xi and others, with CSV or custom connections for the rest.' },
  { name: 'CreditorWatch Collect', url: 'https://creditorwatchcollect.com.au/', note: 'Runs routine follow-ups by SMS, email and calls, flags overdue and higher-risk accounts, and adds Stripe payment links. Says it connects to Xero, MYOB or QuickBooks, and lists an Australian phone number. The old Debtor Daddy website, debtordaddy.com, now redirects here.' },
  { name: 'Paidnice', url: 'https://www.paidnice.com/', note: 'Describes itself as accounts receivable automation for Xero and QuickBooks: reminders around the due date, late fees your terms allow, and drafted next steps for a person to approve.' },
  { name: 'FeeSynergy Collect', url: 'https://feesynergy.com.au/', note: 'Debtor management and outsourced accounts receivable for accounting and legal practices, integrated with practice management systems. Lists a head office in Camberwell, Victoria.' },
];

/* ─── JSON-LD. The Organization is referenced by @id only. ───────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Accounts Receivable Automation Australia',
      serviceType: 'Accounts receivable automation: AI debtor follow-up agent design, Xero and MYOB integration, payment matching and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'Australia' },
      url: CANONICAL,
      description:
        'Custom AI agents for Australian accounts receivable. They read the aged receivables in Xero or MYOB, send reminders in the business’s approved tone, sort customer replies, pause follow-up on disputes, match remittances to invoices and report promises to pay. Credit decisions stay with people. Supported after launch and owned by the client.',
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
      datePublished: PUBLISHED,
      dateModified: UPDATED,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['[data-speakable="true"]'] },
      author: {
        '@type': 'Person',
        '@id': 'https://factoryjet.com/#bhavesh-barot',
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
      name: 'Accounts receivable automation options for Australian businesses',
      itemListElement: PROVIDERS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        ...(p.url ? { url: p.url } : {}),
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
  alternates: { canonical: CANONICAL, languages: twinAlternates['accounts-receivable-automation'] },
  openGraph: {
    title: TITLE,
    description:
      'An AI agent for Australian debtor follow-up: reminders in your tone, replies sorted, disputes paused and payments matched inside Xero or MYOB. Built, supported and owned by you.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_AU',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'FactoryJet: accounts receivable automation for Australian businesses on Xero and MYOB' }],
  },
  robots: { index: true, follow: true },
};

const extLink = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

/* The six jobs the AR agent does. */
const JOBS: { t: string; d: string }[] = [
  { t: 'Watches', d: 'Reads the aged receivables in Xero or MYOB every morning and knows which invoices fall due, which are late and which customers already promised a date.' },
  { t: 'Reminds', d: 'Sends automated payment reminders before and after the due date in wording your credit controller approved, with the invoice attached and a pay link where you offer one.' },
  { t: 'Sorts replies', d: 'Reads every reply to the accounts inbox and labels it: paid, promise to pay, copy requested, query, dispute or out of office.' },
  { t: 'Answers', d: 'Handles the routine asks, such as a copy of the invoice, a statement or your bank details from the record on file, and logs each one on the invoice history.' },
  { t: 'Matches', d: 'Reads remittances and bank lines, proposes which open invoices a payment settles, and records clear matches. Unclear ones wait for a person.' },
  { t: 'Escalates', d: 'Pauses follow-up on any dispute and sends the account, with its history, to the person who owns it. A weekly summary lists promises kept and broken.' },
];

/* Icons for the six job cards (same order as JOBS). */
const JOB_ICONS = [
  'M4 19V5m0 14h16M8 15v-4m4 4V8m4 7v-6',
  'M4 6h16v12H4V6Zm0 0 8 6 8-6',
  'M4 7h16M4 12h10M4 17h6m8-3 2 2 4-4',
  'M5 5h14v10H9l-4 4V5Z',
  'M4 7h6v10H4V7Zm10 0h6v10h-6V7Zm-4 5h4',
  'M12 3 2 20h20L12 3Zm0 6v5m0 3v.5',
] as const;

/* How we build it. */
const BUILD_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Read your brief', d: 'We read your brief or RFP (request for proposal), your aged receivables report and current reminder wording, and come back with questions within 24 hours.' },
  { n: '02', t: 'Demo on your data', d: 'Before you sign, we run a first version over last quarter’s overdue invoices and replies, so you can compare its drafts with what your team actually sent.' },
  { n: '03', t: 'Agree the rules', d: 'With your credit controller we write the reminder schedule, tone per customer group, dispute triggers, matching tolerances and who owns each account.' },
  { n: '04', t: 'Fix price per phase', d: 'Each phase is scoped, priced in writing and signed on its own. The first is usually one entity, reminders and reply sorting.' },
  { n: '05', t: 'Connect your systems', d: 'Xero or MYOB, the accounts inbox, and any ERP, CRM or inventory system, each with the least access the job needs and no access to move money.' },
  { n: '06', t: 'Run in review mode', d: 'Every reminder and match waits for approval at first. Correction rates show which customer groups are ready to run on the agreed rules.' },
  { n: '07', t: 'Widen in stages', d: 'Customer groups that pass move to automatic reminders. Key accounts, disputes and credit holds stay with named people.' },
  { n: '08', t: 'Support, if you want it', d: 'After launch you choose: run it yourselves, or ask us for changes as they come up. Our support terms are in the next section.' },
];

/* Integration notes. */
const INTEGRATIONS: { sys: string; reads: string; does: string }[] = [
  { sys: 'Xero', reads: 'Contacts, open invoices, reminder settings, the Aged Receivables by Contact report and payments', does: 'Emails invoice copies, records payments against invoices or credit notes, creates batch payments, and adds history notes to each invoice' },
  { sys: 'MYOB (AccountRight, Business, new Essentials)', reads: 'Customers, sales invoices and existing customer payments', does: 'Creates customer payments with the amount applied to each sales invoice, once a match is clear or approved' },
  { sys: 'Email (Microsoft 365 or Google Workspace)', reads: 'The accounts inbox, remittance PDFs and customer replies', does: 'Sends reminders from your address, sorts replies, and drafts answers to routine requests in your wording' },
  { sys: 'NetSuite, Odoo or QuickBooks Online', reads: 'Open invoices and customer records where the ledger lives outside Xero or MYOB', does: 'The same follow-up and matching jobs, through each system’s API, confirmed for your plan before we quote' },
  { sys: 'Cin7, Unleashed or another order system', reads: 'Orders and dispatch records behind each invoice', does: 'Answers “what was this for?” replies and attaches the order to disputes for the account owner' },
  { sys: 'Microsoft Teams or Slack', reads: 'Approvals and notes from your team', does: 'Posts review items, disputes and the weekly promise-to-pay summary to the right person' },
];

const SIBLINGS: { href: string; t: string; d: string }[] = [
  { href: '/au/accounts-payable-automation', t: 'Accounts payable automation', d: 'The other side of the ledger: supplier invoices read, checked and routed for approval in Xero or MYOB.' },
  { href: '/au/sales-order-automation-ai-agents', t: 'Sales order automation', d: 'Where the invoice starts: emailed purchase orders turned into draft sales orders in Xero, MYOB, Cin7 Core or Unleashed.' },
  { href: '/au/ai-agents', t: 'AI agent development', d: 'Agents for other back-office jobs, from quote follow-up to order processing, built into the tools you run.' },
  { href: '/au/ai-development', t: 'AI development and integration', d: 'Custom Xero, MYOB, CRM and ERP integrations with AI built in, for work beyond receivables.' },
  { href: '/au/ai-consulting', t: 'AI consulting', d: 'A short assessment of where AI will pay off across your finance and operations work.' },
  { href: '/au/ecommerce-development', t: 'Ecommerce development', d: 'B2B ordering and trade portals for Australian wholesalers, where many receivables start.' },
  { href: '/services/accounts-receivable-automation', t: 'AR automation in the US', d: 'Our US page, covering QuickBooks, NetSuite, Business Central and US collection rules.' },
  { href: '/uk/accounts-receivable-automation', t: 'AR automation in the UK', d: 'Our UK page, covering credit control and debtor follow-up for UK businesses.' },
];

const STEP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;
const CAP_ICON = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#C94A1A', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export default function AccountsReceivableAutomationAUPage() {
  return (
    <>
      <script id="ld-au-accounts-receivable-automation" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`.ara-swipe{display:none;margin:0 0 10px;font-size:13px;color:var(--muted)}@media (max-width:767px){.ara-swipe{display:block}}`}</style>

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
              <div className="eyebrow">AR Automation Australia</div>
              <h1>{HERO_H1_LEAD} <span className="hero-emphasis">{HERO_H1_EMPHASIS}</span></h1>
              <p className="lead">
                Your aged receivables in Xero or MYOB show the same 60 and 90-day names every month, and the person who
                chases them is also doing month-end. FactoryJet builds an AI agent that follows up debtors in your tone,
                sorts their replies, pauses on disputes and matches remittances, so your credit controller spends the day
                on the accounts that need a call. We build and support it, and you own it.
              </p>
              <HeroInlineForm region="au" source="au_accounts_receivable_automation_hero" submitLabel="See a demo on my data"
                trustText="Working software on your own data before you sign. Founder replies within 24 hours." />
            </div>

            <form
              className="specpanel"
              aria-label="What the accounts receivable agent does with every overdue invoice"
              data-visual-slot="accounts-receivable-automation:hero"
              data-visual-kind="diagram"
              data-visual-subject="The three stages every overdue invoice passes through: read from the aged receivables, followed up in the business's tone, then held for a person when the customer disputes it"
              data-visual-ratio="1:1"
              data-visual-status="filled"
            >
              <div className="specpanel-bar">
                <span className="statusdot"></span>
                <span>INCLUDED · WHAT HAPPENS TO EVERY OVERDUE INVOICE</span>
                <span className="sys"><span>XERO</span><span>MYOB</span><span>PEPPOL</span></span>
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
                  <input className="workflow-select" type="radio" name="ara-step" value="1" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[0]} /></svg></span>
                  <span className="idx">aged receivables in Xero or MYOB</span>
                  <span className="title">Reads who owes what</span>
                  <span className="tag">Every morning</span>
                </label>
                <label className="specrow run">
                  <input className="workflow-select" type="radio" name="ara-step" value="2" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[1]} /></svg></span>
                  <span className="idx">approved wording, invoice attached</span>
                  <span className="title">Follows up and sorts replies</span>
                  <span className="tag">Your tone</span>
                </label>
                <label className="specrow hold">
                  <input className="workflow-select" type="radio" name="ara-step" value="3" />
                  <span className="workflow-icon" aria-hidden="true"><svg {...STEP_ICON}><path d={JOB_ICONS[5]} /></svg></span>
                  <span className="idx">disputes, key accounts, credit holds</span>
                  <span className="title">Hands over to a person</span>
                  <span className="tag">Reminders paused</span>
                </label>
              </div>
              <div className="specpanel-foot">RULE · A customer who raises a dispute is never chased again until a person clears it.</div>
            </form>
          </div>
        </section>

        {/* ═══ LEDGER (verified only) ═══ */}
        <div className="ledger">
          <div className="wrap">
            {[
              { v: '500+', t: 'businesses served by FactoryJet since 2014, founder-led on every project', s: 'About FactoryJet', u: '/about' },
              { v: 'A$100m', t: 'annual consolidated revenue at which large businesses must report how fast they pay small suppliers', s: 'Payment Times Reporting Regulator', u: SRC_PTRS },
              { v: '20 days', t: 'large businesses that pay small suppliers within this can be listed as fast payers', s: 'Payment Times Reporting Regulator', u: SRC_PTRS },
              { v: '10 Dec 2026', t: 'APP entity privacy policies must start explaining decisions made with computer programs', s: 'OAIC, APP 1', u: SRC_OAIC_APP1 },
            ].map((r) => (
              <div className="ledgercell" key={r.t}>
                <div className="k"><a href={r.u} {...(r.u.startsWith('http') ? extLink : {})}>{r.s}</a></div>
                <div className="v">
                  <strong className={r.v.length > 8 ? 'ledger-number ledger-long' : 'ledger-number'}>{r.v}</strong>
                  {r.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap byline">
          <div className="av">BB</div>
          <div className="who"><b><a href="/about">Bhavesh Barot</a></b>, Founder<br /><span>500+ businesses served since 2014</span></div>
          <div className="upd">Last updated<br />31 October 2026</div>
        </div>

        {/* ═══ ANSWER-FIRST DEFINITION (GEO) ═══ */}
        <section className="section facts" id="facts">
          <div className="wrap">
            <div className="section-head">
              <h2 data-speakable="true">What is accounts receivable automation for an Australian business?</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact">
                  <div className="sec">§01</div>
                  <p data-speakable="true">
                    <span className="stat">Accounts receivable automation is software that follows up the customers who owe you
                    money, sorts what they reply, records what they pay and reports what is still overdue, inside Xero, MYOB
                    or your ERP.</span> Australian finance teams usually call this debtor management. The automated part is the
                    routine: reminders, copies, statements and matching. Credit limits, payment plans and stop-supply calls
                    stay with your people.
                  </p>
                </div>
                <div className="fact">
                  <div className="sec">§02</div>
                  <div>
                    <div className="factlabel">Six terms this page uses</div>
                    <p>
                      A <b>debtor</b> is a customer with an unpaid invoice. <b>Aged receivables</b> is the report that sorts
                      unpaid invoices by how late they are: current, 30, 60 and 90 days or more. A <b>remittance</b> is the
                      note a customer sends saying which invoices a payment covers. An <b>AI agent</b> is software that uses
                      an AI model to read messages and take actions, such as drafting a reminder, within rules you set.{' '}
                      <b>APP</b> stands for the Australian Privacy Principles in the Privacy Act. <b>Peppol</b> is the
                      international standard Australia uses for eInvoices sent between accounting systems.
                    </p>
                  </div>
                </div>
                <div className="fact">
                  <div className="sec">§03</div>
                  <p>
                    <b>Who this is for.</b> Established wholesalers, distributors, manufacturers and service firms that sell
                    on account to other businesses, with hundreds of open invoices at a time and more than one person touching
                    them. If you send a handful of invoices a month, the reminders already in Xero or MYOB will serve you
                    better than anything we would build.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ THREE ROUTES ═══ */}
        <section className="section platforms" id="scope">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Built-in reminders, AR software or a custom agent</div>
                <h2>Three ways Australian businesses automate debtor follow-up</h2>
              </div>
              <p>
                Accounts receivable software (often shortened to AR software) is the middle route. We build the third, and on the first call we will say so if one of the other
                two fits your volume and process better.
              </p>
            </div>
            <div className="eyebrow plat-label">Quick guide</div>
            <div className="platlist" role="list">
              <div className="plat" role="listitem"><span className="capid">01</span><div className="plat-name"><h3>Reminders built into Xero or MYOB</h3></div><p className="plat-build">one entity, standard terms, few disputes</p><p className="plat-build"><a href={SRC_XERO_INVOICING} {...extLink}>Xero AU</a></p></div>
              <div className="plat" role="listitem"><span className="capid">02</span><div className="plat-name"><h3>Dedicated AR software</h3></div><p className="plat-build">set schedules, dashboard, growing book</p><p className="plat-build"><a href="#providers">Options</a></p></div>
              <div className="plat plat-own" role="listitem"><span className="capid">03</span><div className="plat-name"><h3>Custom AI agent you own</h3></div><p className="plat-build">several entities, an ERP, replies read to your rules</p><p className="plat-fit">This page</p></div>
            </div>
          </div>
        </section>

        {/* ═══ SIX JOBS + WHAT STAYS WITH PEOPLE ═══ */}
        <section className="section capabilities" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">What the accounts receivable agent does</div>
              <h2>Six jobs: watch, remind, sort, answer, match and escalate</h2>
              <p className="lead">
                You choose which jobs the agent does for each customer group. We suggest starting with reminders and
                reply sorting, then add payment matching once a month of results has been checked.
              </p>
            </div>
            <div className="capgrid">
              {JOBS.map((j, i) => {
                const n = String(i + 1).padStart(2, '0');
                return (
                  <div key={j.t} className={`cap cap-${i + 1}`}>
                    <div className="caphead"><span className="capid">CAP‑{n}</span><svg {...CAP_ICON}><path d={JOB_ICONS[i]} /></svg></div>
                    <h3>{j.t}</h3>
                    <p>{j.d}</p>
                  </div>
                );
              })}
            </div>
            <div className="agentdir-group chg-group">
              <div className="agentdir-label"><span className="capid">GRP‑01</span><h3>What stays with your people</h3></div>
              <ul className="chg-list">
                <li><span><b>Credit limits and new accounts.</b> The agent shows payment history; people set the limit.</span></li>
                <li><span><b>Stop supply.</b> The agent can suggest a hold; a person decides and tells sales.</span></li>
                <li><span><b>Payment plans.</b> Agreed by phone, then logged so the agent follows the new dates.</span></li>
                <li><span><b>Disputes and credits.</b> Settled by the account owner, never by the agent.</span></li>
                <li><span><b>Collection agencies and write-offs.</b> Decided with your accountant.</span></li>
                <li><span><b>Moving money.</b> The agent records payments; it never has access to send any.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══ INTEGRATIONS TABLE ═══ */}
        <section className="section integrations" id="integrations">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Works inside the tools you already use</div>
              <h2>Xero and MYOB integration for receivables: what the agent reads and what it does</h2>
              <p className="lead">
                Reminders, history notes and payment records land in the same Xero or MYOB file your team already works in,
                through each product’s published API and with the least access each job needs.
              </p>
            </div>
            <p className="ara-swipe">Swipe sideways to see every column.</p>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Scrollable integrations table" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ minWidth: 740 }}>
                <thead>
                  <tr>
                    <th>System</th>
                    <th>What the agent reads</th>
                    <th className="fj">What the agent can do (your rules)</th>
                  </tr>
                </thead>
                <tbody>
                  {INTEGRATIONS.map((r) => (
                    <tr key={r.sys}>
                      <th scope="row">{r.sys}</th>
                      <td>{r.reads}</td>
                      <td className="fj">{r.does}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="tablenote">
              Xero and MYOB rows are based on{' '}
              <a href={SRC_XERO_API} {...extLink}>Xero’s Accounting API specification</a>, the{' '}
              <a href={SRC_MYOB_API} {...extLink}>MYOB Business API overview</a> and{' '}
              <a href={SRC_MYOB_CUSTPAY} {...extLink}>MYOB customer payments</a>, read 29 October 2026. Online payment
              options on Xero invoices (Stripe, GoCardless, PayTo and Zip) are listed on{' '}
              <a href={SRC_XERO_INVOICING} {...extLink}>Xero’s Australian invoicing page</a>.
            </p>
          </div>
        </section>

        {/* ═══ AUSTRALIAN RULES ═══ */}
        <section className="section facts" id="australian-rules">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">The Australian rules, in plain English</div>
              <h2>Payment times, eInvoicing, privacy and collection conduct: what debtor automation has to respect</h2>
            </div>
            <div className="factswrap">
              <div className="factlist">
                <div className="fact"><div className="sec">§01</div><p>
                  <b>Your largest customers report how fast they pay.</b> The Payment Times Reporting Scheme covers large
                  businesses with annual consolidated revenue of A$100 million or more. They report how fast they pay small
                  business suppliers. Those paying within 20 days can be listed as fast payers. The regulator’s information
                  sheet 10 (INFO10) says these reforms commenced on 7 September 2024. If you supply big retailers or builders, their payment times reports are worth reading
                  before you set reminder dates for them.
                </p></div>
                <div className="fact"><div className="sec">§02</div><p>
                  <b>eInvoices cut “we never received it”.</b> business.gov.au describes eInvoicing as exchanging invoices
                  directly between accounting software, on the Peppol standard, through service providers approved by the Australian Taxation Office (ATO), and
                  lists faster payments and fewer invoice mistakes to chase among its benefits. Customers who receive
                  eInvoices get yours in their software; everyone else gets email. The agent follows up both the same way.
                </p></div>
                <div className="fact"><div className="sec">§03</div><p>
                  <b>Sole traders, and the individual partners in a partnership, are people.</b> Their names, contact details and payment history can be personal
                  information. The change comes from the Privacy and Other Legislation Amendment Act 2024. From
                  10 December 2026, the OAIC says APP 1 requires an APP entity’s privacy policy to explain one thing more.
                  It must say where a computer program makes, or helps make, decisions that could significantly affect someone. If your agent suggests credit holds, we write up
                  how it works so your policy can say so.
                </p></div>
                <div className="fact"><div className="sec">§04</div><div>
                  <p>
                    <b>Collection conduct has a guideline.</b> ASIC and the ACCC publish a joint debt collection guideline for
                    collectors and creditors on how consumer protection law applies to collecting debts. It weighs most when
                    you also sell to individuals. Our agents send email only, and any reply that mentions hardship or a
                    complaint goes straight to a named person.
                  </p>
                  <p className="au-note">
                    Sources: <a href={SRC_PTRS} {...extLink}>Payment Times Reporting Regulator, INFO10</a>;{' '}
                    <a href={SRC_BGA_EINVOICING} {...extLink}>business.gov.au, eInvoicing</a>;{' '}
                    <a href={SRC_OAIC_APP1} {...extLink}>OAIC, APP 1 guidelines</a>;{' '}
                    <a href={SRC_ASIC_RG96} {...extLink}>ASIC, debt collection guideline</a>. All read 29 October 2026.
                    This is general information, not legal or tax advice.
                  </p>
                </div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOW WE BUILD IT → process timeline ═══ */}
        <section className="section process" id="how-we-build">
          <div className="wrap">
            <div className="section-head head-stack">
              <div className="eyebrow">How a project runs</div>
              <h2>How we build your accounts receivable agent, in eight steps</h2>
              <p className="lead">
                Step two is working software on your own invoices before any contract. Open a step
                to see what happens in it.
              </p>
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
            headline={'Send your aged receivables for a free first review'}
            sub={'Send your aged receivables (names removed is fine), your accounting system and how you chase today. The founder will tell you on a short call whether Xero or MYOB reminders are enough, or what a custom agent would add.'}
            label={'See a demo on my data'}
          />
        </div>

        {/* ═══ HOUSE TERMS + WORK WE HAVE DONE ═══ */}
        <section className="section au-top" id="terms">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">How we work</div>
              <h2>Our terms for accounts receivable projects</h2>
            </div>
            <div className="au-split">
              <div>
                <ol className="au-numlist">
                  <li><span><b>Demo before you sign.</b> Working software on a sample of your own invoices and replies before any contract.</span></li>
                  <li><span><b>Fixed price per phase.</b> Each phase is scoped, priced in writing and signed on its own.</span></li>
                  <li><span><b>You own it.</b> The code and repository are yours from day one.</span></li>
                  <li><span><b>Your accounts, at cost.</b> AI and hosting can run in your own accounts at cost, with no markup.</span></li>
                  <li><span><b>Defects covered.</b> Fixed inside the build price for a cover period agreed before work starts.</span></li>
                  <li><span><b>Support is optional.</b> Each change quoted and approved, with no monthly minimum.</span></li>
                </ol>
              </div>
              <div className="au-panel">
                <div className="eyebrow">Work we have done</div>
                <p>
                  Our integration work connects stores and ledgers through each product’s published API, the same way this
                  agent connects to Xero or MYOB. For Sow Easy, a UK distributor, we built a WooCommerce to Odoo integration
                  that has been tested against Odoo’s staging system, with launch still ahead. We show it for the platforms
                  involved, not as Australian client work.
                </p>
                <p>
                  See also our <a href="/au/accounts-payable-automation">accounts payable automation</a> page for
                  Australian businesses, which covers the supplier side of the same Xero or MYOB file. If your
                  invoices start as online store orders, our{' '}
                  <a href="/au/shopify-xero-integration">Shopify Xero integration</a> page covers getting those orders
                  and payments into Xero.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="section comparison" id="comparison">
          <div className="wrap">
            <div className="section-head head-split">
              <div className="eyebrow">Side by side</div>
              <div>
                <h2>Xero or MYOB reminders vs AR software vs a custom accounts receivable agent</h2>
                <p className="lead">
                  Three common routes, plus chasing by hand. This compares what changes day to day, not price.
                </p>
              </div>
            </div>
            <p className="ara-swipe">Swipe sideways to see every column.</p>
            <div className="tablewrap" tabIndex={0} role="region" aria-label="Scrollable comparison table" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ minWidth: 740 }}>
                <thead>
                  <tr>
                    <th>What you get</th>
                    <th className="fj">Custom AR agent (FactoryJet)</th>
                    <th>AR software</th>
                    <th>Built-in Xero or MYOB reminders</th>
                    <th>By hand</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th scope="row">Reminders around the due date</th><td className="fj">Yes, tone set per customer group</td><td>Yes, set schedules</td><td>Yes, fixed schedule</td><td>When someone has time</td></tr>
                  <tr><th scope="row">Reads and sorts customer replies</th><td className="fj">Every reply, labelled and routed</td><td>Varies by product</td><td>No</td><td>A person reads the inbox</td></tr>
                  <tr><th scope="row">Pauses on a dispute</th><td className="fj">Automatically, then hands over</td><td>Usually, if flagged</td><td>Manual</td><td>If someone remembers</td></tr>
                  <tr><th scope="row">Matches remittances to invoices</th><td className="fj">Proposes matches, people approve unclear ones</td><td>Some products</td><td>Bank feed match suggestions; remittances read by hand</td><td>By hand</td></tr>
                  <tr><th scope="row">Several entities or an ERP</th><td className="fj">Designed around your setup</td><td>Within listed integrations</td><td>One file at a time</td><td>Spreadsheets</td></tr>
                  <tr><th scope="row">Who owns the setup</th><td className="fj">You do</td><td>Your config, their product</td><td>Xero or MYOB</td><td>You do</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══ COST + BRIEF ASK ═══ */}
        <section className="section au-top" id="cost">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Scope, not packages</div>
              <h2>What accounts receivable automation costs in Australia, and what to send us for a quote</h2>
              <p className="lead">
                <a href={SRC_FLOWTIVITY} {...extLink}>Flowtivity’s March 2026 Australian guide</a> puts multi-system workflow
                automation at A$20,000 to A$50,000 or more, and{' '}
                <a href={SRC_WVD} {...extLink}>Web Video Digital’s August 2026 guide</a> puts custom AI agents at A$15,000 to
                A$150,000. Those are market ranges, not our prices, and neither guide says whether GST is included, so ask
                every provider, us included, to show it. FactoryJet quotes a fixed price per phase in writing after scoping.
              </p>
            </div>
            <div className="au-split">
              <div>
                <div className="eyebrow">Send us your brief or RFP</div>
                <ol className="au-numlist">
                  <li><span><b>Your systems.</b> Xero or MYOB product and plan, plus any ERP, CRM or inventory tool.</span></li>
                  <li><span><b>Your volume.</b> Entities, open invoices and invoices sent each month.</span></li>
                  <li><span><b>Your process today.</b> Reminder wording, who chases, and how customers pay.</span></li>
                  <li><span><b>Your aged receivables.</b> Names removed is fine. It sizes the job fastest.</span></li>
                </ol>
                <p>
                  You can attach a PDF or Word brief of up to 5 MB in the second step of the form.
                </p>
                <ModalCTAButton label="Send my brief" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              </div>
              <div className="au-panel">
                <div className="eyebrow">What moves the scope</div>
                <ul className="trigrows">
                  <li><span className="m">Number of entities and ledgers</span><span className="t">Reach</span></li>
                  <li><span className="m">Reply sorting and answers</span><span className="t">Handling</span></li>
                  <li><span className="m">Remittance matching</span><span className="t">Matching</span></li>
                  <li><span className="m">ERP, CRM or order system</span><span className="t">Systems</span></li>
                  <li><span className="m">Credit hold suggestions</span><span className="t">Privacy</span></li>
                  <li><span className="m">Support after launch</span><span className="t">Optional</span></li>
                  <li><span className="m">First call with the founder</span><span className="t">Free</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROVIDER LIST (self-disclosure, ItemList from PROVIDERS) ═══ */}
        <section className="section platforms" id="providers">
          <div className="wrap">
            <div className="section-head plat-head">
              <div>
                <div className="eyebrow">Who else to look at</div>
                <h2>Accounts receivable automation options Australian businesses compare</h2>
              </div>
              <p>
                We are one option. Besides the reminders built into Xero and MYOB, these tools appear in Australian search
                results for debtor management and AR automation. Each note restates the company’s own website.
              </p>
            </div>
            <div className="platlist" role="list">
              {PROVIDERS.map((p, i) => (
                <div key={p.name} className={p.name === 'FactoryJet' ? 'plat plat-2col plat-own' : 'plat plat-2col'} role="listitem">
                  <span className="capid">{String(i + 1).padStart(2, '0')}</span>
                  <div className="plat-name"><h3>{p.url ? <a href={p.url} {...extLink}>{p.name}</a> : p.name}</h3>{p.name === 'FactoryJet' && <span className="plat-flag">That is us</span>}</div>
                  <p className="plat-build">{p.note}</p>
                </div>
              ))}
            </div>
            <p className="sub-note">
              Options we found researching Australian debtor management tools on 29 October 2026. Notes reflect each company’s own website, linked from its name, and were checked again on 31 October 2026. Listing
              is not endorsement, and we have not tested these products.
            </p>
            <div className="au-panel au-panel-wide">
              <div className="eyebrow">Questions to ask any provider, including us</div>
              <ol className="au-numlist">
                <li><span><b>Can we see it on our own overdue invoices?</b> Sample data says little about your customers.</span></li>
                <li><span><b>What happens when a customer disputes?</b> Reminders on that invoice should stop the same day.</span></li>
                <li><span><b>Who sees our customer data, and where?</b> Get every provider and location in writing.</span></li>
                <li><span><b>What do we own if we leave?</b> Wording, rules, history and code should all come with you.</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ═══ SIBLING SERVICES → agentdir ═══ */}
        <section className="section agentdir" id="more-services">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Beyond receivables</div>
              <h2>Related work for Australian finance and operations teams</h2>
              <p>
                Receivables often sit next to the first finance job a business hands to an AI agent. These pages cover the
                neighbouring work, built by the same team.
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
          heading="Accounts receivable and debtor follow‑up questions Australian businesses ask"
          askLabel="Still have a question? Ask the founder →"
          askNote="Replies within 24 hours."
        />

        {/* ═══ FINAL CTA (light) ═══ */}
        <section className="finalcta" id="finalcta">
          <div className="wrap">
            <div>
              <div className="eyebrow">Ready when you are</div>
              <h2>Fewer 90-day debtors, and disputes in the right hands</h2>
              <p>
                Send your name and work email. The founder replies within 24 hours to book a short call about your
                receivables, your Xero or MYOB setup and a demo on your own data. No spam, no obligation.
              </p>
            </div>
            <div className="ctas">
              <ModalCTAButton label="See a demo on my data" region="au" modalVariant="default" btnVariant="secondary-light" className="btn btn-primary" />
              <a className="btn btn-ghost" href="/au/ai-agents">See all AI agent work</a>
            </div>
          </div>
        </section>

      </main>
      </div>
      <SiteFooter locale="au" linkColumns={AU_FOOTER_COLUMNS} tagline="Ecommerce, AI agents, websites and AI search for Australian businesses. Built by senior engineers, supported after launch, owned by you." />
    </>
  );
}
