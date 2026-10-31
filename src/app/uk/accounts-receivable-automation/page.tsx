import type { Metadata } from 'next';
import styles from './visual-qa.module.css';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import { twinAlternates } from '@/data/hreflangMap';
import '../ai-agents/ai-agents.css';

/* /uk/accounts-receivable-automation, built 2026-10-29.

   Why this page exists: the UK twin of /services/accounts-receivable-automation,
   written for UK credit control. Before building, src/app/uk/** and the blog
   posts were searched on 2026-10-29 for "accounts receivable", "credit
   control", "debt chasing", "invoice chasing" and "late payment". No UK page
   owns the topic. /uk/accounts-payable-automation covers the payer side of the
   same law (paying suppliers on time); this page covers the creditor side.

   UK search demand, DataForSEO Google Ads volumes, location 2826, pulled
   2026-10-29: "late payment interest calculator" 590, "late payment of
   commercial debts act" 260, "outsourced credit control" 140, "statutory
   interest late payment" 110, "accounts receivable software" 90, "credit
   control process" 50, "accounts receivable automation" 30 (CPC £68),
   "credit control software" 30 (CPC £256). FAQ wording draws on the UK
   People Also Ask boxes for those terms, pulled the same day.

   Truth rules for anyone editing this file.
   1. Every third-party fact (law, VAT rule, Bank Rate, product feature, list
      price) was read on the regulator's or maker's own page on 2026-10-29 and
      links to it through the SRC map below. Re-read before changing a figure.
   2. No FactoryJet price. The only money figures are GOV.UK sums, the Bank
      Rate, list prices of named products (Chaser, GoCardless, Xero), and one
      worked interest example labelled as our arithmetic.
   3. Nothing here says what an agent costs to run or maintain. Upkeep is
      described only as build and support quoted as fixed prices in writing.
   4. Client proof: GPSUK (Commerceflo trade storefront) and Sow Easy
      (WooCommerce plus Odoo, Odoo link still in build) per
      src/data/case-studies/index.ts. Neither is presented as AR work or given
      a result.
   5. No labour-replacement framing. The agent drafts, matches and flags. The
      client's people keep credit decisions, disputes, holds and write-offs.
   6. Legal and tax lines are planning notes, not advice, and say so.
   7. The FAQ schema is generated from FAQ_ITEMS, the same array the visible
      FAQ renders. Never add a second list of questions. */

const CANONICAL = 'https://factoryjet.com/uk/accounts-receivable-automation';
const UPDATED = '2026-10-31';
const READ_ON = '29 October 2026';
const TITLE = 'Accounts Receivable Automation UK: Credit Control Agent';
const H1 = 'Accounts Receivable Automation UK: Credit Control That Chases on Time and Matches Every Remittance';
const DESCRIPTION =
  'Accounts receivable automation for UK credit control on Xero, Sage, QuickBooks, Business Central or Odoo: reminders, remittance matching, statutory interest.';

/* Design values, copied from ../ai-agents/ai-agents.css so inline styles stay
   on-system without CSS custom property references in this file. */
const T = {
  ink: '#0F0F12',
  n200: '#E5E5E0',
  n400: '#6E6E68',
  orange: '#FF5C00',
  small: '#B23E13',
  fm: "'Geist Mono',monospace",
  fd: "'Plus Jakarta Sans',sans-serif",
};

/* ONE array drives the visible trail AND the BreadcrumbList JSON-LD, so the
   schema can never describe a trail a human cannot see. */
const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Accounts Receivable Automation', url: CANONICAL },
];

/* Sources. One map, used by every inline source note AND by the visible
   Sources list near the foot of the page. Each page was opened on 2026-10-29
   and the supporting words read before the claim was written. */
const SRC = {
  govLate: { label: 'GOV.UK: Late commercial payments, when a payment becomes late', url: 'https://www.gov.uk/late-commercial-payments-interest-debt-recovery' },
  govInterest: { label: 'GOV.UK: Charging interest on a commercial debt', url: 'https://www.gov.uk/late-commercial-payments-interest-debt-recovery/charging-interest-commercial-debt' },
  govCosts: { label: 'GOV.UK: Claiming debt recovery costs', url: 'https://www.gov.uk/late-commercial-payments-interest-debt-recovery/claim-debt-recovery-costs' },
  boeRate: { label: 'Bank of England: Bank Rate', url: 'https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate' },
  govBadDebt: { label: 'GOV.UK: Relief from VAT on bad debts (VAT Notice 700/18)', url: 'https://www.gov.uk/guidance/relief-from-vat-on-bad-debts-notice-70018' },
  govMtd: { label: 'GOV.UK: VAT Notice 700/22, Making Tax Digital for VAT', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat' },
  govPayCheck: { label: 'GOV.UK: Check when businesses pay invoices', url: 'https://www.gov.uk/check-when-businesses-pay-invoices' },
  govPayReporting: { label: 'GOV.UK: Business payment practices and performance, reporting requirements', url: 'https://www.gov.uk/government/publications/business-payment-practices-and-performance-reporting-requirements' },
  xeroInvoices: { label: 'Xero UK: Send invoices', url: 'https://www.xero.com/uk/accounting-software/send-invoices/' },
  xeroPricing: { label: 'Xero UK: pricing plans', url: 'https://www.xero.com/uk/pricing-plans/' },
  qboReminders: { label: 'QuickBooks UK Help: Send invoice reminders automatically or manually', url: 'https://quickbooks.intuit.com/learn-support/en-uk/help-article/invoicing/send-invoice-reminders-automatically-manually/L84cQjpxo_GB_en_GB' },
  sage200: { label: 'Sage 200 Help: Credit control', url: 'https://desktophelp.sage.co.uk/sage200/sage200standard/content/concepts/credit-control-overview.htm' },
  bcReminders: { label: 'Microsoft Learn: Business Central reminder terms and levels', url: 'https://learn.microsoft.com/en-us/dynamics365/business-central/finance-setup-reminders' },
  bcReconcile: { label: 'Microsoft Learn: Business Central, reconcile bank accounts and apply payments', url: 'https://learn.microsoft.com/en-us/dynamics365/business-central/receivables-apply-payments-auto-reconcile-bank-accounts' },
  odooFollowUp: { label: 'Odoo 18 documentation: Payment follow-up', url: 'https://www.odoo.com/documentation/18.0/applications/finance/accounting/payments/follow_up.html' },
  chaser: { label: 'Chaser: features and integrations', url: 'https://www.chaserhq.com/' },
  chaserPricing: { label: 'Chaser: pricing', url: 'https://www.chaserhq.com/chaser-pricing' },
  gocardlessPricing: { label: 'GoCardless: pricing', url: 'https://gocardless.com/pricing/' },
  satago: { label: 'Satago: credit control, risk insights and invoice finance', url: 'https://www.satago.com/' },
  kolleno: { label: 'Kolleno: order-to-cash platform', url: 'https://www.kolleno.com/' },
} as const;

type SrcKey = keyof typeof SRC;
const SOURCE_KEYS = Object.keys(SRC) as SrcKey[];

/* FAQ source of truth (drives the visible FAQ and the FAQ schema). */
const FAQ_CATEGORIES = [
  { key: 'basics', label: 'Credit control basics' },
  { key: 'law', label: 'Late payment law, VAT and HMRC' },
  { key: 'systems', label: 'Xero, Sage, QuickBooks and ERPs' },
  { key: 'agent', label: 'What the agent does' },
  { key: 'working', label: 'Working with us' },
] as const;

const FAQ_ITEMS: { category: string; question: string; answer: string }[] = [
  // Credit control basics
  {
    category: 'basics',
    question: 'What is accounts receivable automation?',
    answer:
      'It is software doing the repeat steps between an invoice going out and the cash landing against it. Reminders go before and after the due date, each payment is matched to the invoices it pays, and overdue accounts reach the right person with their history attached. In the UK it should also know the Late Payment Act: when a debt becomes late, the statutory interest it carries and the fixed sum you can add.',
  },
  {
    category: 'basics',
    question: 'What is the difference between AR and AP in accounting?',
    answer:
      'Accounts receivable is money customers owe you for invoices you have sent. Accounts payable is money you owe suppliers for invoices you have received. The same law sits under both: GOV.UK sets a 30-day default before a business payment is late. On this page we cover the receivable side. Our UK accounts payable automation page covers supplier invoices.',
  },
  {
    category: 'basics',
    question: 'What are the 5 Cs of accounts receivable management?',
    answer:
      'They are a checklist credit teams use before giving a customer terms: character (their record of paying), capacity (cash to pay you), capital (what the business is worth), collateral (security you could fall back on) and conditions (the trade and the economy around them). For large UK customers there is a public check on character: GOV.UK publishes how long each large business takes to pay its suppliers. An agent can pull that figure when the account is opened.',
  },
  {
    category: 'basics',
    question: 'Is credit control the same as debt collection?',
    answer:
      'No. Credit control is your own team managing customers on terms: setting limits, invoicing correctly, reminding before and after the due date and putting accounts on hold. Debt collection starts when that has failed, usually through an agency or solicitor. An agent we build works inside credit control. It drafts, matches and flags, and your people decide when an account goes to collection.',
  },
  {
    category: 'basics',
    question: 'What does a good credit control process look like?',
    answer:
      'Six stages, each with an owner: agree terms and a credit limit, send a correct invoice the day goods leave, remind before the due date, chase in rising steps after it, apply holds or statutory interest when the rules say so, and pass a dead account to collection or write it off. Sage 200 builds the middle stages in as debtor letters of increasing severity tied to due date periods.',
  },
  // Late payment law, VAT and HMRC
  {
    category: 'law',
    question: 'How much interest can you charge on a late payment in the UK?',
    answer:
      'Between businesses, GOV.UK says statutory interest is 8% plus the Bank of England base rate. The reference rate is the Bank Rate on 30 June or 31 December before the half-year the debt fell late in. Bank Rate was 3.75% on 30 June 2026, which makes 11.75% a year. GOV.UK’s own method divides the yearly figure by 365 for a daily amount, then multiplies by the days late. A contract can set its own late payment terms, so ask your solicitor which rate applies to your debt.',
  },
  {
    category: 'law',
    question: 'How do I calculate late payment interest in the UK?',
    answer:
      'Use GOV.UK’s method, the same one a late payment interest calculator runs. Multiply the debt by the statutory rate (8% plus the Bank Rate on the reference date) for a year’s interest. Divide by 365 for a daily figure, then multiply by the days late. A £12,000 invoice 45 days late at 11.75% gives £1,410 a year, £3.86 a day and £173.70 in all, before the £100 fixed sum.',
  },
  {
    category: 'law',
    question: 'What is the Late Payment of Commercial Debts Act?',
    answer:
      'It is the 1998 Act that lets you, as the supplier, add charges to an invoice another business pays late, even if your contract says nothing about it. You can add statutory interest for each day late. You can add one fixed sum per payment: £40 under £1,000, £70 from £1,000 to £9,999.99, and £100 from £10,000. Reasonable recovery costs can go on top. An agent can work the figures out. Deciding to claim stays with you.',
  },
  {
    category: 'law',
    question: 'How long should you allow a business customer to pay an invoice?',
    answer:
      'Set the term on the invoice and in your contract before you supply. Between businesses you can agree up to 60 days, and longer only if it is fair to both sides. Leave the date out and the customer has 30 days from receiving the invoice or the goods, whichever is later, before you can add interest. Public authorities should pay you within 30 days. Your agent reads each customer’s terms from the ledger rather than assuming one rule.',
  },
  {
    category: 'law',
    question: 'What should I do if a business customer is not paying an invoice?',
    answer:
      'Check the invoice first: right customer, right purchase order number, goods delivered. Then send a dated reminder, a second one that mentions statutory interest, and a final notice with the interest and fixed sum added. Put the account on hold if your terms allow it. If nothing moves, a solicitor or collection agency takes over. Keep every message, because that history is what a court or agency will ask for.',
  },
  {
    category: 'law',
    question: 'Can we get the VAT back on an invoice that is never paid?',
    answer:
      'Often, through bad debt relief. HMRC’s VAT Notice 700/18 says you must have paid the VAT to HMRC, written the debt off into a separate bad debt account, and waited at least 6 months from the later of the due date and the supply date. Claims must be made within 4 years and 6 months. On the Cash Accounting Scheme the relief is unnecessary. An agent can list invoices crossing the 6-month line for your accountant.',
  },
  {
    category: 'law',
    question: 'Can we check how fast a large customer pays before giving them credit?',
    answer:
      'Yes, for large companies. GOV.UK runs a public search of payment practices reports, showing the average time a large business takes to pay suppliers and the share of payments it makes late. Large means at least two of £54 million turnover, £27 million balance sheet or 250 employees, and reports come at least every six months. We can have the agent pull that figure when a new trade account is opened.',
  },
  // Xero, Sage, QuickBooks and ERPs
  {
    category: 'systems',
    question: 'Does Xero send automatic invoice reminders?',
    answer:
      'Yes. Xero’s UK page says you can set automatic reminders before or after the due date, and that Xero checks your bank feeds so it chases only unpaid invoices. It also adds a pay now button through Stripe for cards or GoCardless for Direct Debit. Its page does not describe reading customer replies, spotting disputes or working out statutory interest. That is where a built agent sits beside it.',
  },
  {
    category: 'systems',
    question: 'Can QuickBooks Online UK send automatic payment reminders?',
    answer:
      'Yes. QuickBooks’ UK help article covers turning on automatic invoice reminders under the Sales settings, with a first reminder and further ones as needed. It says you can schedule them up to 90 days before or after the due date. QuickBooks Online Advanced users can build reminders as workflows instead. Replies, part payments and remittances that cover several invoices still need someone, or an agent, to deal with them.',
  },
  {
    category: 'systems',
    question: 'Does Sage handle credit control?',
    answer:
      'Sage 200 does, in its own way. Sage’s help pages describe debtor letters of increasing severity attached to due date periods, chosen from the oldest overdue item, plus sanctions such as cutting a credit limit or putting an account on hold so no more invoices can be raised. For Sage 50, Satago lists a Sage 50 Accounts connection for automated chasing. An agent can read and write either ledger by API.',
  },
  {
    category: 'systems',
    question: 'Can Business Central add interest and fees to reminders?',
    answer:
      'Yes. Microsoft’s Business Central documentation describes reminder terms with any number of levels, each with rules for when it is issued, what fees to charge and whether to calculate interest. A finance charge memo calculates interest without sending a reminder. Its Payment Reconciliation Journal applies bank payments to open invoices by matching payment text, with rules you set. An agent handles the payments those rules cannot place.',
  },
  {
    category: 'systems',
    question: 'Does Odoo do payment follow-ups?',
    answer:
      'Yes. Odoo 18’s documentation describes follow-up levels set by days from the due date, with negative days for a reminder before it. Each level can send an email, a letter or an SMS, attach the overdue invoices and run automatically. Odoo’s own advice is to reconcile all bank transactions before starting follow-ups, so nobody is chased for an invoice already paid. That reconciliation step is where remittance matching earns its place.',
  },
  {
    category: 'systems',
    question: 'What does credit control software cost in the UK?',
    answer:
      'As listed on 29 October 2026, Chaser’s UK plans run from £199 a month (Compact, up to £4 million annual revenue) to £899 (Complete, up to £100 million), with Care plans adding an AR specialist from £899 to £2,099 a month. The page does not say whether VAT is included. A built agent is quoted differently: FactoryJet gives a fixed price in writing after a short scoping call.',
  },
  {
    category: 'systems',
    question: 'What is the best credit control software for a UK business?',
    answer:
      'It depends on your ledger and your mess. As their own sites read on 31 October 2026: Chaser chases by email, SMS and phone and connects to Xero, Sage, QuickBooks and more. Satago adds credit scores and invoice finance on Sage, Xero and QuickBooks. Kolleno adds AI cash application and dispute tracking on NetSuite, Dynamics, Xero and Sage. A built agent fits rules none of them cover.',
  },
  {
    category: 'systems',
    question: 'Should we outsource credit control or automate it?',
    answer:
      'Outsourced credit control means an outside team chases your customers, usually in your name, by phone and email. It suits a business with nobody in-house to chase. Automation suits a team that has a credit controller but loses the week to reminders and remittances. Chaser’s Care plans mix the two, adding an AR specialist to the software. Your people still own disputes either way.',
  },
  // What the agent does
  {
    category: 'agent',
    question: 'What does an AI agent add to credit control?',
    answer:
      'It reads, which reminder tools do not. It reads the customer’s reply and tags it: promise to pay, dispute, wrong PO number, or a request for a copy invoice with proof of delivery. It reads remittance advice and splits one bank receipt across the invoices it pays. It drafts the next message in your tone and works out statutory interest. Your credit controller approves anything that leaves the building.',
  },
  {
    category: 'agent',
    question: 'How does remittance matching work?',
    answer:
      'A customer pays £18,460 in one transfer and emails a remittance listing six invoices, one short-paid for a damaged pallet. The agent reads the remittance, finds the six open invoices in the ledger, applies the payment, leaves the short line open and raises a query for the damaged pallet. Where the reference is missing, it proposes a match from amounts and dates for a person to confirm.',
  },
  {
    category: 'agent',
    question: 'Will the agent phone customers or threaten legal action?',
    answer:
      'Not unless you write that rule, and we advise against it. The agent sends the messages your team has approved, at the steps they agreed, from your own mailbox. Holds, interest claims, payment plans, write-offs and anything that mentions court stay with named people. Each one arrives as a short note with the account history, so the decision takes minutes and is logged.',
  },
  // Working with us
  {
    category: 'working',
    question: 'Can we see it working before we sign?',
    answer:
      'Yes. Before a contract, we show working software on your own data. For credit control that means a copy of your aged debtors, a month of bank receipts and a handful of real remittances run through the agent in a test ledger, so you can read every reminder it drafts and every match it proposes before anything touches a live customer.',
  },
  {
    category: 'working',
    question: 'Who owns the agent, and who looks after it?',
    answer:
      'You own the code and the repository from day one. AI and hosting can run in your own accounts, at cost with no markup. Defects are fixed inside the build price for a cover period agreed before work starts. Support is optional: each change is quoted and approved, with no monthly minimum. FactoryJet quotes the build, and any support you choose, as fixed prices in writing.',
  },
];

/* The credit control cycle. Agent column and team column are the split we
   propose on day one; yours is agreed in writing. */
const CYCLE: { stage: string; agent: string; team: string }[] = [
  { stage: 'Before the due date', agent: 'Sends a friendly copy of the invoice 7 days out to accounts on 30-day terms, with the pay now link.', team: 'Sets which customers get a pre-due reminder and which do not.' },
  { stage: 'Due date passes', agent: 'Checks the bank feed and ledger first, then sends reminder 1 with the open items listed.', team: 'Approves the wording once. Changes it whenever they like.' },
  { stage: 'Customer replies', agent: 'Reads the reply and tags it: promise to pay, dispute, missing PO, copy invoice or proof of delivery.', team: 'Owns every dispute and every promise that slips.' },
  { stage: 'Remittance arrives', agent: 'Splits one receipt across the invoices it pays and posts the allocation for review.', team: 'Confirms matches the agent marks as unsure.' },
  { stage: '30 days overdue', agent: 'Drafts reminder 2 with statutory interest at the right half-year rate and the fixed sum, worked out to the day.', team: 'Decides whether to claim interest for this customer.' },
  { stage: 'Account at risk', agent: 'Flags accounts over limit or crossing your hold rule, with history attached.', team: 'Puts the account on hold, agrees a plan or refers it on.' },
  { stage: '6 months unpaid', agent: 'Lists invoices crossing the VAT bad debt relief line for the next return.', team: 'Your accountant decides on write-off and the claim.' },
];

/* Native ledger tools vs what a built agent adds. Each native cell restates
   the maker's own page, read on 2026-10-29. */
const LEDGERS: { name: string; native: string; adds: string; sources: SrcKey[] }[] = [
  {
    name: 'Xero',
    native: 'Automatic reminders before or after the due date, checked against bank feeds. Pay now by card through Stripe or Direct Debit through GoCardless. Auto-reconcile listed on Grow (£39), Comprehensive (£55) and Ultimate (£70) a month before VAT, and as a £3.50 add-on on Ignite.',
    adds: 'Reading replies and remittances, splitting part payments, statutory interest drafts, hold flags.',
    sources: ['xeroInvoices', 'xeroPricing'],
  },
  {
    name: 'QuickBooks Online UK',
    native: 'Automatic invoice reminders from the Sales settings, scheduled up to 90 days before or after the due date. Workflows for reminders on Advanced.',
    adds: 'Reply tagging, remittance matching across invoices, interest and fixed sum per invoice.',
    sources: ['qboReminders'],
  },
  {
    name: 'Sage 200',
    native: 'Debtor letters of increasing severity by due date period, chosen from the oldest overdue item. Sanctions: reduced credit limit or terms, account on hold. Write-offs with or without reclaiming VAT.',
    adds: 'Email chasing between letters, reply reading, remittance allocation, a daily list for the credit controller.',
    sources: ['sage200'],
  },
  {
    name: 'Dynamics 365 Business Central',
    native: 'Reminder terms with any number of levels, each with fees and an interest setting. Finance charge memos. A Payment Reconciliation Journal that applies payments by matching payment text, with rules you set.',
    adds: 'The payments those rules cannot place, remittances sent as PDFs or emails, dispute tagging.',
    sources: ['bcReminders', 'bcReconcile'],
  },
  {
    name: 'Odoo',
    native: 'Follow-up levels set by days from the due date, sending email, letter or SMS, automatically if you choose. Odoo advises reconciling bank transactions before follow-ups run.',
    adds: 'Reconciliation of the awkward receipts first, then replies read and tagged after each follow-up.',
    sources: ['odooFollowUp'],
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
      name: 'Accounts Receivable Automation UK',
      serviceType: 'Accounts receivable and credit control automation: payment reminders, remittance matching, statutory late payment interest, dispute and hold flags, support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'FactoryJet designs, builds and supports a credit control agent for UK businesses on Xero, Sage, QuickBooks, Dynamics 365 Business Central, NetSuite or Odoo. It sends approved reminders before and after the due date, reads customer replies and remittance advice, matches payments to invoices, works out statutory interest under the Late Payment of Commercial Debts Act, and flags holds and disputes to the client’s own credit team.',
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
  alternates: { canonical: CANONICAL, languages: twinAlternates['accounts-receivable-automation'] },
  openGraph: {
    title: TITLE,
    description:
      'Credit control for UK businesses: reminders on your terms, remittances matched to invoices, statutory interest worked out to the day. Built on Xero, Sage, QuickBooks, Business Central or Odoo.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://factoryjet.com/og-default.png', width: 1200, height: 630, alt: 'FactoryJet' }],
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

export default function AccountsReceivableAutomationUKPage() {
  return (
    <>
      <script id="ld-uk-accounts-receivable-automation" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="uk-aiagents">
      <main className={styles.page}>

        <Breadcrumbs items={crumbs} />

        {/* 1. HERO */}
        <section className={`sec-lg dot-grid ${styles.hero}`} style={{ position: 'relative' }}>
          <div className="wrap">
            <div className="col-6040">
              <div className={styles.heroCopy}>
                <div className="flex-wrap mb-6">
                  <span className="chip"><span className="dot dot-orange" />Accounts Receivable Automation UK</span>
                  <span className="chip">Credit Control Agent</span>
                  <span className="chip">Late Payment Act Ready</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  Your trade customers are on 30 or 60-day terms, and remittances arrive as PDFs that cover six
                  invoices and short-pay one. FactoryJet builds a credit
                  control agent on the ledger you already run (Xero, Sage 50 or 200, QuickBooks, Business Central,
                  NetSuite or Odoo) that chases on your terms, matches each payment and leaves every decision with your
                  team.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b><a href="/about" style={{ textDecoration: 'underline' }}>Bhavesh Barot</a></b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />{READ_ON}</div>
                </div>

                <div className={styles.heroForm} style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_accounts_receivable_automation_hero" service="Accounts Receivable Automation" submitLabel="See a demo on my data" trustText="Bhavesh replies within 24 hours. No spam, no obligation." />
                </div>
              </div>

              <div className="card card-top-orange">
                <span className="eyebrow">Late payment interest calculator: one £12,000 trade invoice, 45 days late</span>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Statutory interest rate</div><div className="scorecard-note">8% plus Bank Rate of 3.75%</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>11.75%</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Interest a day</div><div className="scorecard-note">£1,410 a year divided by 365</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>£3.86</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Interest for 45 days</div><div className="scorecard-note">45 × £3.86</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>£173.70</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">Fixed recovery sum</div><div className="scorecard-note">debts of £10,000 or more</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>£100.00</div>
                </div>
                <div className="scorecard-row">
                  <div><div className="scorecard-metric">On the final reminder</div><div className="scorecard-note">drafted by the agent, sent by your team</div></div>
                  <div className="scorecard-val" style={{ fontSize: 15 }}>£273.70</div>
                </div>
                <p style={{ fontSize: 12.5, marginTop: 8 }}>
                  Our arithmetic, for illustration, using GOV.UK’s method and the 3.75% Bank Rate in force on 30 June 2026.
                  Your contract terms and your solicitor decide what you claim.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST DEFINITION */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 680 }} data-speakable="true">
              <span className="lab">What does accounts receivable automation do for a UK business?</span>
              <p>
                It sends approved payment reminders before and after each due date, matches incoming payments and
                remittances to the invoices they pay, and works out statutory interest and the fixed recovery sum
                under the Late Payment of Commercial Debts Act. Your ledger already does part of this. A built agent
                adds the reading: customer replies, PDF remittances and part payments.
              </p>
            </div>
            <Sources ids={['govLate', 'govInterest', 'govCosts']} />
            <div className="def mt-6" style={{ maxWidth: 680 }}>
              <span className="lab">Five terms we use a lot</span>
              <p>
                <b>Credit control</b> is the UK name for managing customers who buy on terms, from the credit limit to
                the last reminder. An <b>aged debtors report</b> lists who owes you money, grouped by how many days each invoice is
                overdue. A <b>remittance advice</b> is the email or PDF a customer sends with a BACS payment (a UK
                bank-to-bank transfer) listing the invoices it settles. <b>Statutory interest</b> is the interest the law lets one business charge another for paying
                late, whether or not the contract mentions it. <b>DSO</b> (days sales outstanding) is the average number of
                days it takes customers to pay you after the invoice goes out.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              Sending reminders is the solved part of invoice chasing. Xero, QuickBooks, Sage 200, Business Central
              and Odoo all send them, and most accounts receivable software starts there. The time goes on what comes back: a reply saying the PO number was wrong, a remittance listing
              invoices from three months, a payment £312 short with no explanation. Those are what we scope first.
            </p>
          </div>
        </section>

        {/* 3. FACTS BAND (each one sourced) */}
        <section className="stats-band">
          <div className="wrap">
            <ul className="col-4" style={{ gap: 20 }}>
              {[
                { v: '£100', t: 'is the fixed sum you can add to a late invoice of £10,000 or more, on top of interest', s: 'GOV.UK, debt recovery costs', u: SRC.govCosts.url },
                { v: '8% + base', t: 'is the statutory interest GOV.UK sets for late payment between businesses', s: 'GOV.UK, charging interest', u: SRC.govInterest.url },
                { v: '11.75%', t: 'a year is the statutory rate on debts falling late in the second half of 2026: 8% plus the 3.75% Bank Rate of 30 June', s: 'Bank of England, Bank Rate', u: SRC.boeRate.url },
                { v: '6 months', t: 'unpaid is the wait HMRC sets before you can claim VAT bad debt relief', s: 'HMRC, VAT Notice 700/18', u: SRC.govBadDebt.url },
              ].map((r) => (
                <li key={r.t}>
                  <div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div>
                  <p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p>
                  <a href={r.u} target="_blank" rel="noopener noreferrer" className={styles.citation} style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, textDecoration: 'underline' }}>{r.s}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. THE CYCLE */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Who does what</span>
              <h2>The credit control cycle, stage by stage: what the agent does and what your team keeps</h2>
              <p className="lead mt-4">
                An agent that decides who to put on hold is a liability. One that drafts, reads and matches, then hands
                each decision to a named person with the account history attached, is a tool your credit controller
                will use. The split below is the one we propose on day one.
              </p>
            </div>
            <p className="md:hidden mt-8" style={srcNote}>Swipe sideways to see every column.</p>
            <div className={`card mt-10 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Credit control cycle" style={{ padding: 0, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}><table className="cmp-table" style={{ minWidth: 760 }} data-columns={3}>
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th className="fj">What the agent does</th>
                    <th>What your team keeps</th>
                  </tr>
                </thead>
                <tbody>
                  {CYCLE.map((c) => (
                    <tr key={c.stage}>
                      <td className="feat">{c.stage}</td>
                      <td className="fj">{c.agent}</td>
                      <td>{c.team}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              Timings are examples. Yours come from your own payment terms, read from the ledger customer by customer.
            </p>
          </div>
        </section>

        {/* 5. LATE PAYMENT ACT */}
        <section className="sec-lg" id="late-payment-interest">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Late Payment of Commercial Debts Act</span>
                <h2>Late payment interest calculator rules: what the law allows and how the agent works it out</h2>
                <div className="stack mt-6">
                  <p>
                    <b>When a payment is late.</b> GOV.UK says that with no agreed date, a business payment is late 30
                    days after the customer receives the invoice or you deliver, whichever is later. An agreed date must
                    usually fall within 60 days between businesses, and can go longer only if that is fair to both.
                    Public authorities should pay within 30 days.
                  </p>
                  <p>
                    <b>Interest.</b> Between businesses the statutory rate is 8% plus the Bank of England base rate.
                    GOV.UK’s worked example takes the yearly interest, divides it by 365 for a daily figure and
                    multiplies by the days late. The reference rate is the Bank Rate on 30 June or 31 December before the
                    half-year the debt fell late in. Bank Rate was 3.75% on 30 June 2026. A change at a later decision
                    only affects debts that fall late from the next 1 January or 1 July.
                  </p>
                  <p>
                    <b>Fixed sums.</b> On top of interest you can claim a fixed sum per payment: £40 on a debt up to
                    £999.99, £70 from £1,000 to £9,999.99 and £100 from £10,000. GOV.UK says one fixed sum per
                    payment, plus reasonable costs for each attempt to recover the debt.
                  </p>
                  <p>
                    The agent does the arithmetic on every overdue invoice, every day, so the figure is ready when your
                    team chooses to use it. Whether to claim interest from a customer you want to keep is a commercial
                    call, and the agent leaves it with you.
                  </p>
                </div>
                <Sources ids={['govLate', 'govInterest', 'govCosts', 'boeRate']} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Fixed recovery sums, per late payment</span>
                <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Fixed recovery sums"><table className={styles.comparisonTable} data-comparison-layout><tbody><tr className="scorecard-row"><th><div><div className="scorecard-metric">Debt up to £999.99</div><div className="scorecard-note">one sum per payment</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>£40</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">£1,000 to £9,999.99</div><div className="scorecard-note">one sum per payment</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>£70</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">£10,000 or more</div><div className="scorecard-note">one sum per payment</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>£100</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Reasonable recovery costs</div><div className="scorecard-note">for each attempt to recover</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>On top</div></td></tr></tbody></table></div>
                <p style={{ fontSize: 12.5, marginTop: 8 }}>
                  Planning notes, not legal advice. Your contract may set its own late payment terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. REMITTANCE MATCHING */}
        <section className="sec-lg dot-grid" id="remittance-matching">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Cash allocation</span>
              <h2>Remittance matching: one bank receipt, six invoices and a short payment</h2>
              <div className="stack mt-6">
                <p>
                  A builders’ merchant pays £18,460 on a Friday by bank transfer. The reference on the bank line is the
                  merchant’s own payment run number, which means nothing to your ledger. On Monday a PDF remittance
                  arrives listing six of your invoices, with one paid £312 short and a note about a damaged pallet.
                </p>
                <p>
                  Your ledger’s bank rules can match a payment to one invoice with the same amount and reference.
                  Business Central’s Payment Reconciliation Journal matches payment text to open entries with rules
                  you set, and Odoo tells you to reconcile before running follow-ups. Neither reads a PDF in an inbox.
                </p>
                <p>
                  The agent reads the remittance, finds the six invoices, applies the payment across them, leaves the
                  £312 open and raises a query on the damaged pallet with the courier’s proof of delivery attached.
                  Your credit controller sees one line to confirm. Until they do, the customer is not chased for the
                  five invoices that are paid.
                </p>
                <p>
                  The same reading covers Direct Debit runs from GoCardless, card payouts from Stripe, BACS from
                  trade accounts and marketplace settlements from Amazon.co.uk or eBay UK, each with its own clearing
                  rule agreed with your accountant. For how store payouts land in Xero, see our{' '}
                  <a href="/uk/shopify-xero-integration" style={inlineLink}>Shopify Xero integration page</a>.
                </p>
              </div>
              <Sources ids={['bcReconcile', 'odooFollowUp', 'xeroInvoices']} />
            </div>
          </div>
        </section>

        {/* 7. LEDGERS */}
        <section className="sec-lg" id="ledgers">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Your ledger first</span>
              <h2>Xero, QuickBooks, Sage 200, Business Central and Odoo: what each already does, and what the agent adds</h2>
              <p className="lead mt-4">
                Switch on what your ledger already offers before paying for anything. Each line restates the maker’s
                own page as read on {READ_ON}. The agent can also connect to Sage 50, Sage Intacct and NetSuite through their APIs, and to an
                order system with an API where the invoice starts life.
              </p>
            </div>
            <ul className="col-2 mt-10">
              {LEDGERS.map((l) => (
                <li key={l.name} className="plat-card">
                  <div className="plat-top">
                    <h3 className="plat-name">{l.name}</h3>
                    <span className="plat-pill">Native tools</span>
                  </div>
                  <p style={{ fontSize: 14, marginTop: 8 }}>{l.native}</p>
                  <p className="plat-best"><b>The agent adds:</b> {l.adds}</p>
                  <Sources ids={l.sources} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8. RENT OR BUILD */}
        <section className="sec-lg dot-grid" id="rent-or-build">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Rent, outsource or build</span>
                <h2>A credit control product, outsourced credit control, or an agent built on your ledger</h2>
                <div className="stack mt-6">
                  <p>
                    <b>Renting.</b> Chaser is a UK credit control product. Its site lists email, SMS and automated phone
                    reminders, a customer payment portal, and integrations with Xero, QuickBooks Online, Sage 50 UK,
                    Sage 200, Sage Intacct, Microsoft Dynamics 365 Business Central, NetSuite, Odoo, SAP, AccountsIQ
                    and Stripe. Its UK plans were listed at £199 a month (Compact, up to £4 million
                    annual revenue), £599 (Core, up to £10 million) and £899 (Complete, up to £100 million), with
                    cheaper rates billed yearly. The page does not say whether VAT is included. Satago, a London
                    firm, offers automated chasing emails, customer credit scores and invoice finance, connecting to
                    Sage, Xero and QuickBooks. Kolleno lists AI payment matching, dispute tracking and DSO reporting,
                    connecting to NetSuite, QuickBooks, MS Dynamics, Xero and Sage.
                  </p>
                  <p>
                    <b>Outsourcing.</b> Outsourced credit control puts an outside team on the phone and email to your
                    customers, usually in your name. It suits a business with nobody in-house to chase. Chaser’s Care
                    plans add an AR specialist to its software, which sits between renting and outsourcing.
                  </p>
                  <p>
                    <b>Building.</b> A built agent suits a business whose rules no product setting covers: credit
                    limits shared across a group, remittances from large retailers in their own formats, Direct Debit
                    and BACS on the same account, or approval steps of your own on any ERP. You own it, and it
                    follows your terms rather than a vendor’s template.
                  </p>
                  <p>
                    We will tell you on the first call if a product does the job. FactoryJet quotes the build, and any
                    support you choose, as fixed prices in writing after a short scoping call.
                  </p>
                </div>
                <Sources ids={['chaser', 'chaserPricing', 'satago', 'kolleno', 'gocardlessPricing']} on={`${READ_ON} (Satago and Kolleno on 31 October 2026)`} />
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">A rule of thumb</span>
                <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Rent, outsource or build"><table className={styles.comparisonTable} data-comparison-layout><tbody><tr className="scorecard-row"><th><div><div className="scorecard-metric">Most payments carry an invoice reference</div><div className="scorecard-note">use the reminders you already pay for</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Native</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Xero, QuickBooks or Sage, standard terms</div><div className="scorecard-note">a product with a portal fits</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Rent</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Nobody in-house to chase</div><div className="scorecard-note">calls matter more than emails</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Outsource</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">PDF remittances from big retailers</div><div className="scorecard-note">reading and splitting across invoices</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Build</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Several companies, one credit limit</div><div className="scorecard-note">group exposure across ledgers</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Build</div></td></tr><tr className="scorecard-row"><th><div><div className="scorecard-metric">Your own approval steps on any ERP</div><div className="scorecard-note">holds, write-offs and sign-off your way</div></div></th><td><div className="scorecard-val" style={{ fontSize: 14 }}>Build</div></td></tr></tbody></table></div>
                <p style={{ fontSize: 12.5, marginTop: 8 }}>
                  GoCardless lists UK Direct Debit from 1% plus 20p, capped at £4, on Standard, excluding VAT. Every
                  route collects through providers like it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          headline={'Send one aged debtors report and three remittances. We show you the agent on them.'}
          sub={'Tell us your ledger, your standard terms and how many trade customers you invoice. On a short call we say whether your ledger’s own reminders, a credit control product, an outsourced team or a built agent is the right job. If it is a build, you see it working on your data before you sign.'}
          label={'See a demo on my data'}
        />

        {/* 9. VAT, MTD AND PAYMENT PRACTICES */}
        <section className="sec-lg" id="vat-and-hmrc">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">VAT and HMRC</span>
              <h2>Bad debt relief, Making Tax Digital and checking a customer before you give credit</h2>
            </div>
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="VAT and HMRC rules for credit control"><table className={styles.comparisonTable} data-comparison-layout><tbody>
              <tr><th><b>Bad debt relief.</b></th><td><p>
                HMRC’s VAT Notice 700/18 lets you reclaim the VAT on a debt that is never paid, on conditions: you have
                already paid that VAT to HMRC, you have written the debt off into a separate bad debt account, and it has
                stayed unpaid for 6 months from the later of the due date and the supply date. You must claim within 4
                years and 6 months. On the Cash Accounting Scheme (where you pay VAT only when your customer pays you) the
                relief is unnecessary. The agent lists every invoice crossing the 6-month line before each VAT return, for
                your accountant to decide on.
              </p></td></tr>
              <tr><th><b>Making Tax Digital.</b></th><td><p>
                HMRC’s VAT Notice 700/22 accepts API transfer, automated data transfer and CSV import and export as
                digital links between software, and says copy and paste is not one. Interest invoices, credit notes and
                payment allocations the agent drafts go into your ledger by API, so no figure is retyped.
              </p></td></tr>
              <tr><th><b>Before you give credit.</b></th><td><p>
                GOV.UK runs a public search of payment practices reports from large businesses: the average time they
                take to pay suppliers and the share of payments they make late. Large means at least two of £54 million
                turnover, £27 million on the balance sheet or 250 employees, and they report at least every six months.
                When a large customer opens a trade account, the agent can pull that report for whoever sets the limit.
              </p></td></tr>
            </tbody></table></div>
            <Sources ids={['govBadDebt', 'govMtd', 'govPayCheck', 'govPayReporting']} />
          </div>
        </section>

        {/* 10. PROOF */}
        <section className="sec-lg dot-grid" id="proof">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">UK trade work</span>
              <h2>UK trade stores we have built or are building</h2>
              <p className="lead mt-4">
                Credit control starts where the trade order is placed. Two UK clients, described as their case studies
                describe them, with no results claimed.
              </p>
            </div>
            <ul className="col-2 mt-10">
              <li className="card">
                <h3>GPSUK</h3>
                <p className="mt-4">
                  A UK promotional products supplier. We built its trade storefront on Commerceflo, where business
                  buyers log in, see their own account prices and move from quote to order without retyping. Live,
                  with SEO and AI search work continuing.
                </p>
                <p className="mt-4"><a href="/case-studies/gpsuk-promotional-products" style={inlineLink}>Read the GPSUK case study</a></p>
              </li>
              <li className="card">
                <h3>Sow Easy</h3>
                <p className="mt-4">
                  A UK wholesale distributor that runs stock, pricing and product data in Odoo. We are building its
                  WordPress WooCommerce trade store with Odoo as the source of stock, prices and SKUs. The Odoo link is
                  still in build and being tested on staging.
                </p>
                <p className="mt-4"><a href="/case-studies/sow-easy-distributor-portal" style={inlineLink}>Read the Sow Easy case study</a></p>
              </li>
            </ul>
          </div>
        </section>

        {/* 11. TERMS */}
        <section className="sec-lg" id="terms">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Terms</span>
                <h2>How we work on a credit control build</h2>
                <ul className="scope-list yes-list mt-6" style={{ maxWidth: 600 }}>
                  <li><b>Demo before you sign.</b> Working software on your own data before any contract.</li>
                  <li><b>You own it.</b> The code and the repository are yours from day one.</li>
                  <li><b>Your accounts, at cost.</b> AI and hosting can run in your own accounts, with no markup.</li>
                  <li><b>Defects fixed inside the build price</b> for a cover period agreed before work starts.</li>
                  <li><b>Support is optional.</b> Each change is quoted and approved, with no monthly minimum.</li>
                  <li><b>Fixed price per phase.</b> Each phase is scoped, priced and signed on its own.</li>
                </ul>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What stays with your people</span>
                <p className="mt-4" style={{ fontSize: 14 }}>
                  Credit limits, holds, payment plans, interest claims, write-offs and anything that mentions a
                  solicitor. The agent prepares each one with the account history. A named person decides, and the
                  decision is logged against the customer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. HOW WE BUILD IT (NUMBERED LIST) */}
        <section className="sec-lg dot-grid" id="how-we-build">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">How we work</span>
              <h2>How we build a credit control agent, in seven steps</h2>
              <p className="lead mt-4">
                Your credit controller is in the room for steps two, five and seven. Your accountant signs off step three.
              </p>
            </div>
            <figure className={styles.processFigure} data-process-flow aria-label="How we build a credit control agent, in seven steps"><ol className={`stack mt-10 ${styles.processFlow}`} style={{ maxWidth: 900 }}>
              {[
                { n: '01', t: 'Read your aged debtors and a month of receipts', d: 'We take one aged debtors report, a month of bank receipts and a sample of real remittances, and list every kind of payment and reply inside them. That list is the brief.' },
                { n: '02', t: 'Write the chasing rules with your credit controller', d: 'Which customers get a pre-due reminder, how many steps follow, the wording at each one, and the point where a person takes over. Signed before anything is built.' },
                { n: '03', t: 'Agree the posting rules with your accountant', d: 'How part payments, short payments, interest invoices and bad debts post, to which accounts. One page, signed.' },
                { n: '04', t: 'Connect the ledger and the inbox', d: 'Read and write access to Xero, Sage, QuickBooks, Business Central, NetSuite or Odoo by API, and to the mailbox where remittances and replies arrive.' },
                { n: '05', t: 'Show it on your own data', d: 'Before a contract, the agent runs on a copy of your ledger. You read every reminder it drafts and every match it proposes.' },
                { n: '06', t: 'Test the awkward cases', d: 'A remittance covering six invoices, a short payment, a disputed delivery, a customer on 60-day terms, a Direct Debit failure and a group account over its limit.' },
                { n: '07', t: 'Go live in stages, then stay on', d: 'Drafts for approval first, then approved steps sent automatically. After launch, support is there if you choose it, and you own the code.' },
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
          </div>
        </section>

        {/* 13. BRIEF / RFP + WHO IT IS FOR */}
        <section className="sec-lg" id="send-a-brief">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Send a brief</span>
                <h2>Have a written brief or RFP for credit control? Send it to us</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Wholesalers, distributors, manufacturers and B2B brands selling on account usually arrive with a list
                  of systems and a problem customer or two. Send both. After you submit the form, the second step lets
                  you attach a brief or RFP as a PDF or Word file up to 5 MB.
                </p>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  For the trade store that raises the invoices, see{' '}
                  <a href="/uk/b2b-ecommerce" style={inlineLink}>B2B ecommerce in the UK</a> and{' '}
                  <a href="/uk/woocommerce" style={inlineLink}>WooCommerce development</a>. For supplier bills on the
                  same ledger, see <a href="/uk/accounts-payable-automation" style={inlineLink}>accounts payable automation</a>.
                  For other finance agents, see <a href="/uk/ai-agents" style={inlineLink}>AI agents for UK businesses</a>,{' '}
                  <a href="/uk/erp-ai-agents" style={inlineLink}>ERP AI agents</a> and{' '}
                  <a href="/uk/odoo-ai-agents" style={inlineLink}>Odoo AI agents</a>.
                  US readers can see our{' '}
                  <a href="/services/accounts-receivable-automation" style={inlineLink}>accounts receivable automation page for the US</a>.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="See a demo on my data" region="uk" modalVariant="default" btnVariant="primary-light" />
                </div>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">What to bring to the scoping call</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Your ledger and plan</div><div className="scorecard-note">and any order system feeding it</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>1</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">One aged debtors report</div><div className="scorecard-note">names can be removed</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>2</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Three real remittances</div><div className="scorecard-note">including a messy one</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>3</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Your standard payment terms</div><div className="scorecard-note">and the customers on special ones</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>4</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Your credit controller</div><div className="scorecard-note">they are welcome on the call</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>5</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 14. SOURCES */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Method</span>
              <h2>Sources, read on {READ_ON}</h2>
              <p className="lead mt-4">
                Every law, rate, VAT rule, product feature and list price on this page was read on the pages below on
                that day, except Satago and Kolleno, read on 31 October 2026. Bank Rate and list prices move, and the rules are HMRC’s and Parliament’s to change, so open
                the linked page before you act on a figure. Legal and tax lines are planning notes, not advice.
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

        {/* 15. FAQ */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>Credit control and accounts receivable questions from UK finance teams</h2>
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
                  <p>Bhavesh replies within 24 hours.</p>
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

        {/* 16. FINAL CTA (the only dark section) */}
        <section className="dark-sec">
          <div className="wrap" style={{ textAlign: 'center', maxWidth: 640 }}>
            <span className="eyebrow">Next step</span>
            <h2>Get paid on the terms you agreed</h2>
            <p className="mt-4">
              Send your name and work email. Bhavesh replies within 24 hours to set up a short call about your
              ledger and the remittances that eat your week. You leave knowing whether your ledger’s own reminders, a
              product, an outsourced team or a built agent is the right job.
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
