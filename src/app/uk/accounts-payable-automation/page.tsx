import type { Metadata } from 'next';
import styles from './visual-qa.module.css';
import HeroInlineForm from '@/components/HeroInlineForm';
import Footer from '../sections/Footer';
import Breadcrumbs from '@/components/v2/Breadcrumbs';
import ModalCTAButton from '@/components/v2/ModalCTAButton';
import MidPageCTA from '@/components/v2/MidPageCTA';
import '../ai-agents/ai-agents.css';

const CANONICAL = 'https://factoryjet.com/uk/accounts-payable-automation';
const UPDATED = '2026-10-11';
const TITLE = 'Accounts Payable Automation UK | AI Invoice Agent | FactoryJet';
const H1 = 'Accounts Payable Automation UK: Supplier Invoices Read, Checked, Matched and Routed for Approval';
const DESCRIPTION =
  'Accounts payable automation for UK finance teams. An AI agent reads supplier invoices, checks VAT details, matches POs and posts draft bills to your ledger.';

/* Design colours and fonts, copied by value from ../ai-agents/ai-agents.css so inline
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
  { name: 'Accounts Payable Automation', url: CANONICAL },
];

/* External sources. Every one was opened on 11 October 2026 and the claim
   was read in the page body. The supporting words are logged in the hand-back
   ledger (sources.json) for this page. */
// HMRC, VAT guide (VAT Notice 700), last updated 25 June 2026. Section 16.3.1
// lists the details a full VAT invoice must show; 16.6.1 covers simplified
// invoices of 250 pounds or less; 19.5.3 says what to do without a VAT invoice.
const SRC_VAT_NOTICE_700 = 'https://www.gov.uk/guidance/vat-guide-notice-700';
// GOV.UK, Charge, reclaim and record VAT: keeping VAT records. Six years,
// invoices received as original or electronic copies, no reclaim on an invalid
// invoice, pro-forma, statement or delivery note, digital links.
const SRC_VAT_RECORDS = 'https://www.gov.uk/charge-reclaim-record-vat/keeping-vat-records';
// GOV.UK, Charge, reclaim and record VAT (first part): all VAT-registered
// businesses should now be signed up for Making Tax Digital for VAT.
const SRC_VAT_GUIDE = 'https://www.gov.uk/charge-reclaim-record-vat';
// HMRC, VAT Notice 700/22: Making Tax Digital for VAT. Sections 1.2, 3.1
// (example 2, scanned invoices), 3.2.1 (digital links), 3.3.3 (supplies received).
const SRC_MTD_NOTICE =
  'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat/vat-notice-70022-making-tax-digital-for-vat';
// GOV.UK, consultation outcome on electronic invoicing, last updated
// 26 November 2025: mandatory e-invoicing for all VAT invoices from 2029.
const SRC_EINVOICING =
  'https://www.gov.uk/government/consultations/promoting-electronic-invoicing-across-uk-businesses-and-the-public-sector';
// GOV.UK, the full consultation response (NHS Supply Chain and Peppol).
const SRC_EINVOICING_RESPONSE =
  'https://www.gov.uk/government/consultations/promoting-electronic-invoicing-across-uk-businesses-and-the-public-sector/outcome/promoting-electronic-invoicing-across-uk-businesses-and-the-public-sector-consultation-response';
// GOV.UK, Late commercial payments: when a payment becomes late, statutory
// interest, and the fixed sums for debt recovery.
const SRC_LATE_PAYMENT = 'https://www.gov.uk/late-commercial-payments-interest-debt-recovery';
const SRC_LATE_INTEREST =
  'https://www.gov.uk/late-commercial-payments-interest-debt-recovery/charging-interest-commercial-debt';
const SRC_LATE_COSTS =
  'https://www.gov.uk/late-commercial-payments-interest-debt-recovery/claim-debt-recovery-costs';
// GOV.UK, Business payment practices and performance: reporting requirements.
const SRC_PAYMENT_REPORTING =
  'https://www.gov.uk/government/publications/business-payment-practices-and-performance-reporting-requirements';
// GOV.UK, Check a UK VAT number, and the HMRC Developer Hub API of the same name.
const SRC_CHECK_VAT = 'https://www.gov.uk/check-uk-vat-number';
const SRC_CHECK_VAT_API =
  'https://developer.service.hmrc.gov.uk/api-documentation/docs/api/service/vat-registered-companies-api/2.0';
// GOV.UK, What you must do as a Construction Industry Scheme (CIS) contractor.
const SRC_CIS = 'https://www.gov.uk/what-you-must-do-as-a-cis-contractor';
// GOV.UK, VAT domestic reverse charge for building and construction services.
const SRC_REVERSE_CHARGE =
  'https://www.gov.uk/guidance/vat-domestic-reverse-charge-for-building-and-construction-services';
// Report Fraud (police.uk), Mandate fraud.
const SRC_MANDATE_FRAUD = 'https://www.reportfraud.police.uk/mandate-fraud/';
// ICO, What is personal data? (sole traders).
const SRC_ICO_PERSONAL_DATA =
  'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/personal-information-what-is-it/what-is-personal-data/what-is-personal-data/';
// Xero Developer: Accounting API Invoices, Purchase Orders, Custom Connections.
const SRC_XERO_INVOICES = 'https://developer.xero.com/documentation/api/accounting/invoices';
const SRC_XERO_PO = 'https://developer.xero.com/documentation/api/accounting/purchaseorders';
const SRC_XERO_CUSTOM = 'https://developer.xero.com/documentation/guides/oauth2/custom-connections';
// Xero UK: pricing plans, and the accountant guide to automated accounts payable.
const SRC_XERO_PRICING = 'https://www.xero.com/uk/pricing-plans/';
const SRC_XERO_AP_GUIDE = 'https://www.xero.com/uk/accountant-bookkeeper-guides/automated-accounts-payable/';
const SRC_XERO_APPS = 'https://apps.xero.com/uk/collection/accounts-payable-software';
// Hubdoc home page.
const SRC_HUBDOC = 'https://www.hubdoc.com/';
// Sage: UK accounts payable page, and the Sage Accounting API reference (3.1).
const SRC_SAGE_AP = 'https://www.sage.com/en-gb/accounting-software/accounts-payable/';
const SRC_SAGE_API = 'https://developer.sage.com/accounting/apis/sagebusinesscloudaccounting/3.1.0/accounting';
// Intuit Developer: QuickBooks Online Accounting API, Bill.
const SRC_QBO_BILL = 'https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/bill';
// Oracle NetSuite: REST API Browser, Record API 2025.2 (vendorBill).
const SRC_NETSUITE_REST =
  'https://system.netsuite.com/help/helpcenter/en_US/APIs/REST_API_Browser/record/v1/2025.2/index.html#tag-vendorBill';
// Vendor pricing pages.
const SRC_DEXT = 'https://dext.com/uk/business/pricing';
const SRC_AUTOENTRY = 'https://www.autoentry.com/pricing';
const SRC_APPROVALMAX = 'https://approvalmax.com/pricing/approvalmax-for-xero';
const SRC_APPROVALMAX_ALL = 'https://approvalmax.com/pricing';
const SRC_LIGHTYEAR = 'https://www.lightyear.cloud/en-gb/pricing/';
const SRC_ZAHARA = 'https://www.zaharasoftware.com/pricing';
const SRC_PLEO = 'https://www.pleo.io/en/pricing';
const SRC_MEDIUS = 'https://www.medius.com/pricing/';
const SRC_MEDIUS_AP = 'https://www.medius.com/solutions/medius-accounts-payable-automation/';
const SRC_BASWARE = 'https://www.basware.com/en/solutions/ap-automation';
// UK market ranges for a custom agent build.
const SRC_FULMINOUS = 'https://fulminous.co.uk/ai-agent-development-cost-uk';
const SRC_LEVERX = 'https://leverx.com/en-gb/blog/ai-agent-development-cost-uk';

/* FAQ source of truth (drives the visible FAQ AND the FAQPage schema). */
const FAQ_CATEGORIES = [
  { key: 'basics',   label: 'AP automation basics' },
  { key: 'ai',       label: 'AI and invoice reading' },
  { key: 'software', label: 'Software and ledgers' },
  { key: 'rules',    label: 'VAT, MTD and payment rules' },
  { key: 'build',    label: 'Cost, build and ownership' },
] as const;

const FAQ_ITEMS: {
  category: string;
  question: string;
  answer: string;
  sources?: { href: string; label: string }[];
}[] = [
  // Basics
  {
    category: 'basics',
    question: 'What is accounts payable automation?',
    answer: 'Accounts payable automation is software that does the repeat work between a supplier invoice arriving and a bill being ready to pay. It collects the invoice, reads the figures, checks them, matches them to a purchase order and sends the bill to the right approver. People still approve spend and release payments. In the UK the checks should include HMRC’s VAT invoice details, because an invalid invoice cannot be used to reclaim VAT.',
    sources: [{ href: SRC_VAT_RECORDS, label: 'GOV.UK, keeping VAT records' }],
  },
  {
    category: 'basics',
    question: 'How do I do accounts payable?',
    answer: 'Accounts payable follows the same seven steps in most businesses. Receive the supplier invoice. Check it is a valid VAT invoice and not a duplicate. Match it to the purchase order and the delivery. Code it to the right nominal and VAT codes. Get it approved by someone with authority for that amount. Enter it in the ledger as a bill. Pay it on or before the due date, then keep the invoice for at least six years.',
    sources: [{ href: SRC_VAT_RECORDS, label: 'GOV.UK, keeping VAT records' }],
  },
  {
    category: 'basics',
    question: 'Can accounts payable be automated?',
    answer: 'Most of it can. Collecting, reading, checking, coding, matching and routing are rule-based steps that software handles well. Approving spend, releasing payments and settling disputes with suppliers should stay with people. A sound set-up automates the paperwork and leaves those decisions where they are, with a record of who approved each bill and when.',
  },
  {
    category: 'basics',
    question: 'How can invoice processing be automated?',
    answer: 'Start with one place for invoices to arrive, usually a shared accounts inbox. Software then reads each invoice, checks the supplier, VAT number, totals and invoice number, and looks for a matching purchase order. Clean invoices go to an approver as a draft bill with the PDF attached. Anything unusual goes to a short review queue with the reason shown. Rented tools do this for common cases, and a custom agent does it for your own rules.',
  },
  {
    category: 'basics',
    question: 'What is three-way matching?',
    answer: 'Three-way matching compares three records before a bill is approved: the purchase order (what you agreed to buy and at what price), the goods received note (what arrived) and the supplier invoice (what you are being charged). If quantities and prices agree within a tolerance you set, the bill moves on. If they differ, a person sees the gap line by line. Two-way matching leaves out the goods received note.',
  },
  {
    category: 'basics',
    question: 'What is the best KPI for accounts payable?',
    answer: 'No single measure covers it, so most finance teams track a small set. Time per invoice shows how efficient the process is. The share of invoices paid on time shows how suppliers experience it. The exception rate, meaning the share of invoices a person had to fix, shows where the process breaks. Start with on-time payment, because a late business payment in the UK can attract statutory interest.',
    sources: [{ href: SRC_LATE_INTEREST, label: 'GOV.UK, interest on late commercial payments' }],
  },
  {
    category: 'basics',
    question: 'Should AP turnover be high or low?',
    answer: 'Neither is right for every business. AP turnover is your purchases from suppliers on credit divided by your average accounts payable for the period. A high figure means you pay suppliers quickly, which they welcome and which uses your cash sooner. A low figure means you hold cash longer, and it can also mean invoices are stuck or paid late. Compare the figure with your agreed payment terms before you judge it.',
  },

  // AI
  {
    category: 'ai',
    question: 'Can AI do accounts payable?',
    answer: 'AI can do the paperwork part. Current models read invoices in almost any layout, pull out the supplier, VAT number, line items and totals, and suggest codes from your past bills. AI should not decide what gets paid. In the agents FactoryJet builds, the AI prepares and checks, your written rules decide where each bill goes, and a person approves before anything is posted or paid.',
  },
  {
    category: 'ai',
    question: 'Which AI is used in accounting?',
    answer: 'Two kinds. The first reads documents: optical character recognition (OCR) turns a scan into text, and a language model works out which number is the VAT and which is the total. The second is the assistant built into a ledger. Xero’s site names JAX as its AI finance partner, and Sage’s UK site names Sage Copilot. A custom agent uses the first kind and connects it to your own rules and systems.',
    sources: [
      { href: SRC_XERO_AP_GUIDE, label: 'Xero UK, automated accounts payable' },
      { href: SRC_SAGE_AP, label: 'Sage UK, accounts payable software' },
    ],
  },
  {
    category: 'ai',
    question: 'Can ChatGPT create invoices?',
    answer: 'It can draft the wording and layout of an invoice, but it is not an invoicing system. HMRC says a VAT invoice needs a sequential number from a series, your VAT registration number, the tax point and the total VAT in sterling, among other details. A chat tool does not hold your number series, your customer records or your ledger. Raise invoices in your accounting software and use AI for the reading and checking on the payables side.',
    sources: [{ href: SRC_VAT_NOTICE_700, label: 'HMRC, VAT Notice 700, section 16.3.1' }],
  },
  {
    category: 'ai',
    question: 'How accurate is AI at reading invoices?',
    answer: 'It depends on your suppliers, so a single percentage would mislead. Clear PDFs read well. Phone photos, handwritten delivery notes and long multi-page invoices are harder. The useful test is your own paper: run a sample of past invoices through the agent, compare each field with what your team entered, and set the agent to flag any field it is unsure of. FactoryJet shows that test on your own invoices before a contract.',
  },

  // Software
  {
    category: 'software',
    question: 'What is the best software for accounts payable automation?',
    answer: 'It depends on your size and your ledger. A small business on Xero can start with Hubdoc, which Xero includes with its plans. Dext and AutoEntry add capture for other ledgers, at £15.45 to £24.17 a month on their entry plans. ApprovalMax, Lightyear and Zahara add approvals and purchase order matching, at £35.90 to £159 a month on theirs. Larger groups look at Medius or Basware, which quote on request. Prices were read on each vendor’s own page on 11 October 2026 and exclude VAT.',
    sources: [
      { href: SRC_XERO_PRICING, label: 'Xero UK pricing' },
      { href: SRC_DEXT, label: 'Dext' },
      { href: SRC_AUTOENTRY, label: 'AutoEntry' },
      { href: SRC_APPROVALMAX, label: 'ApprovalMax' },
      { href: SRC_LIGHTYEAR, label: 'Lightyear' },
      { href: SRC_ZAHARA, label: 'Zahara' },
    ],
  },
  {
    category: 'software',
    question: 'Does Xero have AP automation?',
    answer: 'Partly. Xero’s UK pricing page says Hubdoc comes with its plans, and Xero’s guide for accountants says Hubdoc captures supplier bills and receipts and publishes the data into Xero, with bank reconciliation and batch payment runs after that. The Xero App Store lists accounts payable apps for approvals and purchase order matching. What no built-in tool knows is your own checking and approval rules, which is where an approval app or a custom agent fits.',
    sources: [
      { href: SRC_XERO_AP_GUIDE, label: 'Xero UK, automated accounts payable' },
      { href: SRC_XERO_APPS, label: 'Xero App Store UK, accounts payable' },
    ],
  },
  {
    category: 'software',
    question: 'Does QuickBooks have AP automation?',
    answer: 'QuickBooks Online records supplier invoices as bills. Intuit’s developer reference describes the bill as its accounts payable transaction, and approved software can create, read and update one. That lets capture and approval tools post into it. ApprovalMax sells a QuickBooks Online plan beside its Xero and NetSuite ones, and Hubdoc creates transactions in QuickBooks Online with the source document attached. A custom agent uses the same published route.',
    sources: [
      { href: SRC_QBO_BILL, label: 'Intuit Developer, Bill' },
      { href: SRC_APPROVALMAX_ALL, label: 'ApprovalMax pricing' },
      { href: SRC_HUBDOC, label: 'Hubdoc' },
    ],
  },
  {
    category: 'software',
    question: 'What is Basware?',
    answer: 'Basware is an accounts payable automation and e-invoicing software company. Its own page describes AI-based capture, coding and matching of invoices against purchase orders and goods receipts, with the aim of processing an invoice without a person touching it. The page shows no list price. It says pricing scales with the functions you choose and your invoice volumes, and asks you to speak to its sales team.',
    sources: [{ href: SRC_BASWARE, label: 'Basware, AP automation' }],
  },
  {
    category: 'software',
    question: 'What is Medius software?',
    answer: 'Medius sells accounts payable software that links invoice capture, processing and payment. Its page describes capture for any invoice format and ready-made connectors to ERP systems, the large business systems that hold orders, stock and accounts. Medius offers two AP automation packages and asks buyers to contact it for a custom quote, so no public list price exists to compare.',
    sources: [
      { href: SRC_MEDIUS_AP, label: 'Medius, accounts payable automation' },
      { href: SRC_MEDIUS, label: 'Medius pricing' },
    ],
  },

  // Rules
  {
    category: 'rules',
    question: 'What must a VAT invoice show in the UK?',
    answer: 'HMRC’s VAT guide lists eleven details for a full VAT invoice: a sequential number, the tax point, the date of issue if different, the supplier’s name, address and VAT number, the customer’s name and address, a description, the quantity, VAT rate and net amount for each line, the total before VAT, any cash discount rate, the total VAT in sterling and the unit price. A simplified invoice is allowed for supplies of £250 or less.',
    sources: [{ href: SRC_VAT_NOTICE_700, label: 'HMRC, VAT Notice 700, sections 16.3.1 and 16.6.1' }],
  },
  {
    category: 'rules',
    question: 'Can we reclaim VAT without a valid VAT invoice?',
    answer: 'Not on the strength of the wrong document. GOV.UK says you cannot reclaim VAT using an invalid invoice, a pro-forma invoice, a statement or a delivery note, and that you cannot claim more VAT than a valid invoice shows. HMRC’s VAT guide says the first step is to go back to the supplier and ask for a VAT invoice that meets the rules. An AP agent should catch this on the day the invoice arrives, while it is easy to fix.',
    sources: [
      { href: SRC_VAT_RECORDS, label: 'GOV.UK, keeping VAT records' },
      { href: SRC_VAT_NOTICE_700, label: 'HMRC, VAT Notice 700, section 19.5.3' },
    ],
  },
  {
    category: 'rules',
    question: 'How long must we keep supplier invoices?',
    answer: 'GOV.UK says you must keep VAT records for at least 6 years, and that covers every invoice you receive, as an original or an electronic copy. HMRC’s Making Tax Digital notice gives an example: where software scans an invoice and the image holds all the detail needed for VAT, the business need not keep the paper original unless it is needed for another purpose. The agents we build attach the original file to each bill.',
    sources: [
      { href: SRC_VAT_RECORDS, label: 'GOV.UK, keeping VAT records' },
      { href: SRC_MTD_NOTICE, label: 'HMRC, VAT Notice 700/22' },
    ],
  },
  {
    category: 'rules',
    question: 'Does Making Tax Digital affect accounts payable?',
    answer: 'Yes. HMRC’s notice says Making Tax Digital for VAT requires VAT-registered businesses to keep records digitally and file returns using software. For each supply you receive, the digital record must hold the tax point, the value and the input tax you will claim. Once figures sit in the software that keeps your VAT account, HMRC wants any further move to be by digital link, and it does not count copy and paste as one. An API post into your ledger is a digital link.',
    sources: [{ href: SRC_MTD_NOTICE, label: 'HMRC, VAT Notice 700/22, sections 1.2, 3.2.1 and 3.3.3' }],
  },
  {
    category: 'rules',
    question: 'When is a supplier payment late in the UK?',
    answer: 'GOV.UK says that if no payment date was agreed, a business payment is late 30 days after the customer gets the invoice, or after the goods or service are delivered if that is later. An agreed date must usually fall within 60 days between businesses. A supplier can then charge statutory interest of 8% plus the Bank of England base rate, and a fixed sum of £40, £70 or £100 depending on the size of the debt.',
    sources: [
      { href: SRC_LATE_PAYMENT, label: 'GOV.UK, when a payment becomes late' },
      { href: SRC_LATE_COSTS, label: 'GOV.UK, debt recovery costs' },
    ],
  },
  {
    category: 'rules',
    question: 'Is e-invoicing becoming mandatory in the UK?',
    answer: 'Yes. A GOV.UK consultation outcome, last updated on 26 November 2025, says the UK will introduce mandatory e-invoicing for all VAT invoices from 2029 and will publish a roadmap at Budget 2026. An e-invoice travels as data from the supplier’s system into yours, so nothing has to be read or retyped. Until then most suppliers will keep sending PDFs. Set up accounts payable so both kinds pass through the same checks and approvals.',
    sources: [{ href: SRC_EINVOICING, label: 'GOV.UK, electronic invoicing consultation outcome' }],
  },

  // Build
  {
    category: 'build',
    question: 'How much does accounts payable automation cost in the UK?',
    answer: 'Renting starts low. On 11 October 2026, entry plans for capture tools listed at £15.45 to £24.17 a month and approval tools at £35.90 to £159 a month, before VAT. For a custom build, Fulminous publishes a UK market range of £30,000 to £90,000 before VAT for a back-office agent that covers invoice processing, and LeverX puts a single-workflow agent at £10,000 to £30,000. FactoryJet quotes a fixed price in writing after a short scoping call.',
    sources: [
      { href: SRC_FULMINOUS, label: 'Fulminous, AI agent development cost UK' },
      { href: SRC_LEVERX, label: 'LeverX, AI agent development cost UK' },
      { href: '/blog/ai-cost-uk-2026', label: 'FactoryJet, AI cost in the UK (2026)' },
    ],
  },
  {
    category: 'build',
    question: 'Who looks after the agent once it is live?',
    answer: 'FactoryJet does. We quote the build, and any support you choose, as fixed prices in writing after a short scoping call, and we can keep managing the servers, AI, APIs and maintenance so your finance team does not have to. Support also covers the changes every AP process sees: new suppliers, new approvers, a change of ledger plan or a new entity. You own the agent throughout.',
  },
  {
    category: 'build',
    question: 'How long does an AP automation build take?',
    answer: 'Published UK market timelines give a guide. LeverX puts a single-workflow agent at 5 to 9 weeks and a multi-step agent with integrations at 10 to 18 weeks. Fulminous gives 4 to 8 weeks for a simple agent. A first AP build that reads, checks and posts draft bills to one ledger sits at the short end, and purchase order matching across several entities takes longer. FactoryJet confirms the timeline in writing with the quote.',
    sources: [
      { href: SRC_LEVERX, label: 'LeverX, AI agent development cost UK' },
      { href: SRC_FULMINOUS, label: 'Fulminous, AI agent development cost UK' },
    ],
  },
  {
    category: 'build',
    question: 'Does the agent pay our suppliers?',
    answer: 'No. It stops at an approved bill in your ledger. Payment runs stay in your normal process, whether that is a batch payment from your ledger, a Bacs file or your bank portal, with your usual people authorising them. Keeping payment release with a person is one of the simplest controls against fraud and error, and it leaves your bank’s own approval rules in charge.',
  },
  {
    category: 'build',
    question: 'Who owns the AP agent and its code?',
    answer: 'You do. The rules, prompts, integration code and documentation are yours, and the agent connects to your ledger, inbox and approval channel through accounts in your name. For a single Xero organisation the connection can be a Xero Custom Connection, which Xero says you buy and authorise in your own Xero account. If you change accountant or bring the work in-house, you keep everything.',
    sources: [{ href: SRC_XERO_CUSTOM, label: 'Xero Developer, Custom Connections' }],
  },
  {
    category: 'build',
    question: 'Can we see it working before we sign?',
    answer: 'Yes. FactoryJet shows working software on your own data before a contract. For accounts payable that means a sample of your past supplier invoices read by the agent, with each field set beside what your team entered and the exceptions it would have raised. You see how it handles your own suppliers before you commit to a build.',
  },
  {
    category: 'build',
    question: 'Where does our invoice data go?',
    answer: 'The invoice files and bills stay in your own ledger and mailbox. We can run the build in UK or EU cloud regions, we keep an audit log of every action the agent takes, and we name each provider that touches an invoice. One point for you to check: the ICO says UK GDPR applies to personal data about people acting as sole traders, so invoices from sole traders are covered. Ask your data protection adviser how that affects your records.',
    sources: [{ href: SRC_ICO_PERSONAL_DATA, label: 'ICO, what is personal data?' }],
  },
];

/* Named AP products sold in the UK. ONE array drives the visible table AND the
   ItemList schema. Every price and feature was read on the vendor’s own page
   on 11 October 2026. Prices are list prices before VAT. */
const PRODUCTS: { name: string; url: string; does: string; price: string }[] = [
  {
    name: 'Xero with Hubdoc',
    url: SRC_XERO_PRICING,
    does: 'Hubdoc reads supplier names, amounts, invoice numbers and due dates from bills and creates the transaction in Xero with the source document attached.',
    price: 'Xero UK plans list at £18 a month (Ignite) to £70 a month (Ultimate) after the introductory offer. Hubdoc is included when connected to the subscription.',
  },
  {
    name: 'Dext',
    url: SRC_DEXT,
    does: 'Captures invoices and receipts and sends them to the ledger already coded. Line item extraction is an add-on.',
    price: '£24.17 a month billed annually (£290 a year) for 250 documents a month and 5 users. Line item extraction from £16.50 a month.',
  },
  {
    name: 'AutoEntry',
    url: SRC_AUTOENTRY,
    does: 'Captures supplier invoices, receipts and statements on a credit model: 1 credit per invoice, 2 with line items.',
    price: 'Six plans, from £15.45 a month for 50 credits to £518.25 a month for 2,500 credits.',
  },
  {
    name: 'ApprovalMax for Xero',
    url: SRC_APPROVALMAX,
    does: 'Approval workflows for bills and purchase orders, with capture included. Matching bills to purchase orders starts on the Advanced plan.',
    price: '£35.90 (Standard), £59.20 (Advanced) or £80.00 (Premium) per organisation a month, billed yearly, for up to 100 documents a month.',
  },
  {
    name: 'Lightyear',
    url: SRC_LIGHTYEAR,
    does: 'Purchase orders, line data extraction and approval workflows. The Standard plan adds goods received notes and 3-way purchase order matching.',
    price: '£130 for the Essentials plan of 125 credits a month and £179 for the Standard plan of 250. One exported invoice uses one credit.',
  },
  {
    name: 'Zahara',
    url: SRC_ZAHARA,
    does: 'Approval workflows, orders, AI-read invoices and budget control.',
    price: '£159, £289 or £499 a month when billed monthly. The £159 Teams plan covers up to 10 users, 120 orders and 250 AI-read invoices a month.',
  },
  {
    name: 'Pleo',
    url: SRC_PLEO,
    does: 'Company cards and spend management, with accounts payable listed in every plan from Start upwards.',
    price: '£8 per user a month (Start, billed monthly), £14 (Build) or £18 (Optimise) per user a month billed yearly with a 3 user minimum.',
  },
  {
    name: 'Medius',
    url: SRC_MEDIUS,
    does: 'Accounts payable software that links invoice capture, processing and payment, with ready-made ERP connectors.',
    price: 'By quote. Its pricing page shows two packages and asks you to contact Medius for a custom quote.',
  },
  {
    name: 'Basware',
    url: SRC_BASWARE,
    does: 'AP automation and e-invoicing with AI-based capture, coding and matching against purchase orders and goods receipts.',
    price: 'By quote. Its page says pricing scales with functions and volumes and asks you to speak to its sales team.',
  },
];

/* What the agent does with every supplier invoice (numbered list). */
const INVOICE_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Collect', d: 'It watches the shared accounts inbox and any supplier portals you name, and pulls out invoices and credit notes. Statements, remittances and marketing emails are set aside.' },
  { n: '02', t: 'Read', d: 'It reads the supplier name, VAT number, invoice number, tax point, line items, VAT rate, net, VAT and gross. A field it cannot read with confidence is flagged for a person and never guessed.' },
  { n: '03', t: 'Check the VAT invoice', d: 'It tests each invoice against the eleven details HMRC lists for a full VAT invoice, or the four for a simplified invoice of £250 or less. A pro-forma, a statement or a delivery note is not passed as an invoice.' },
  { n: '04', t: 'Check the supplier', d: 'It compares the VAT number and bank details with the supplier record in your ledger, looks for the same invoice number and amount on an earlier bill, and holds anything that differs.' },
  { n: '05', t: 'Code', d: 'It suggests the nominal code, VAT code and tracking category from how you coded that supplier before and from rules your accountant sets.' },
  { n: '06', t: 'Match', d: 'Where you raise purchase orders, it finds the order and the goods received note and shows any price or quantity gap line by line.' },
  { n: '07', t: 'Route and post', d: 'It sends the checked bill to the right approver with the PDF attached, chases late approvals, and creates the bill in your ledger as a draft. A person approves. Payment stays in your normal payment run.' },
];

/* The eleven details HMRC lists for a full VAT invoice (VAT Notice 700,
   section 16.3.1), in our words, in HMRC’s order. */
const VAT_INVOICE_DETAILS: string[] = [
  'A sequential number that uniquely identifies the document',
  'The time of supply, known as the tax point',
  'The date of issue, where it differs from the tax point',
  'The supplier’s name, address and VAT registration number',
  'The name and address of the customer, which is you',
  'A description that identifies the goods or services',
  'For each description: the quantity or extent, the VAT rate and the amount before VAT',
  'The total amount payable before VAT',
  'The rate of any cash discount offered',
  'The total VAT chargeable, shown in sterling',
  'The unit price',
];

/* Ledger notes. Each "says" cell is from the vendor’s developer reference,
   read on 11 October 2026. */
const LEDGERS: { sys: string; url: string; says: string; does: string }[] = [
  {
    sys: 'Xero',
    url: SRC_XERO_INVOICES,
    says: 'The Invoices endpoint can create purchase bills, update draft or submitted ones, attach files and add notes. The invoice number on a bill is described as non-unique. Purchase orders can be retrieved, added and updated.',
    does: 'Creates draft bills with the PDF attached and a note of the checks run, reads purchase orders for matching, and runs its own duplicate check because Xero does not force bill numbers to be unique.',
  },
  {
    sys: 'Sage Accounting',
    url: SRC_SAGE_API,
    says: 'The API’s Purchase Transactions group creates and manages purchase invoices, credit notes and quick entries. The Attachments group uploads and manages files attached to records.',
    does: 'Creates purchase invoices with the source file attached, using your own ledger accounts and tax rates.',
  },
  {
    sys: 'QuickBooks Online',
    url: SRC_QBO_BILL,
    says: 'The Bill object is the accounts payable transaction. The reference lists create, read, query, update and delete, with lines posted by item or by account.',
    does: 'Creates bills against the right supplier, with each line coded to an item or an account.',
  },
  {
    sys: 'NetSuite',
    url: SRC_NETSUITE_REST,
    says: 'The REST record API lists create and update for vendor bills, and an action that turns a purchase order into a vendor bill.',
    does: 'Creates vendor bills, or bills an approved purchase order, inside the approval set-up you already run in NetSuite.',
  },
];

/* How FactoryJet builds it. */
const BUILD_STEPS: { n: string; t: string; d: string }[] = [
  { n: '01', t: 'Scoping call', d: 'A short call about your suppliers, monthly invoice count, ledger and approval limits. After it you get a fixed price in writing for the build and for ongoing support.' },
  { n: '02', t: 'A demo on your own invoices', d: 'Before you sign, we show the agent reading a sample of your own supplier invoices, with the exceptions it would have raised.' },
  { n: '03', t: 'Rules workshop', d: 'With whoever pays your bills, and your accountant if you wish, we write the checks, coding rules, matching tolerances, approval limits and hold rules. You sign them off.' },
  { n: '04', t: 'Build and connect', d: 'We connect the inbox, the ledger and your approval channel, each with the least access the step needs. The agent is given no access to release payments or change supplier bank details.' },
  { n: '05', t: 'Review mode', d: 'The agent starts by creating draft bills that a person checks one by one. A supplier moves to automatic routing only when your team is happy with its results.' },
  { n: '06', t: 'Support', d: 'FactoryJet can keep managing the servers, AI, APIs and maintenance, and add suppliers and rules as your business changes. You own the agent, the rules and the code.' },
];

/* JSON-LD. The Organization is referenced by @id only and is defined once,
   sitewide. Never redefine it here. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${CANONICAL}#service`,
      name: 'Accounts Payable Automation UK',
      serviceType: 'Accounts payable automation: AI invoice processing agent design, ledger integration, approval workflow build and support',
      provider: { '@id': 'https://factoryjet.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: CANONICAL,
      description:
        'Custom AI agents for UK accounts payable. They read supplier invoices, check them against the details HMRC lists for a VAT invoice, flag duplicates and changed bank details, code bills, match purchase orders and goods received notes, route approvals and create draft bills in Xero, Sage, QuickBooks or NetSuite. Payments stay with people. Supported after launch and owned by the client.',
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
      '@id': `${CANONICAL}#products`,
      name: 'Accounts payable automation products sold in the UK, with list prices read on 11 October 2026',
      itemListElement: PRODUCTS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: p.url,
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
      'An AI agent for UK accounts payable. It reads supplier invoices, checks VAT invoice details, matches purchase orders and posts draft bills to Xero, Sage, QuickBooks or NetSuite. Built, supported and owned by you.',
    url: CANONICAL,
    siteName: 'FactoryJet',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/uk/accounts-payable-automation/ap-automation-og.webp', width: 1200, height: 630, alt: 'A woman in a navy jumper at a desk holding a sheet of paper beside a wire tray stacked with envelopes' }],
  },
  robots: { index: true, follow: true },
};

const srcNote = { fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 12 } as const;
const srcLink = { textDecoration: 'underline' } as const;
const ext = { target: '_blank', rel: 'noopener noreferrer nofollow' } as const;

export default function AccountsPayableAutomationUKPage() {
  return (
    <>
      <script id="ld-uk-accounts-payable-automation" type="application/ld+json"
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
                  <span className="chip"><span className="dot dot-orange" />UK AP Automation</span>
                  <span className="chip">AI Invoice Processing</span>
                  <span className="chip">Xero · Sage · QuickBooks · NetSuite</span>
                </div>
                <h1>{H1}</h1>
                <p className="lead mt-6" style={{ maxWidth: 560 }}>
                  FactoryJet designs, builds, implements and supports an AI agent for your accounts payable. It reads every
                  supplier invoice, tests it against the details HMRC lists for a VAT invoice, matches it to the
                  purchase order and sends a draft bill to the right approver in your ledger. Your people approve and
                  pay as they do now, and you own the agent.
                </p>

                <div className="byline mt-6" style={{ maxWidth: 560 }}>
                  <div className="av">BB</div>
                  <div className="who"><b>Bhavesh Barot</b>, Founder<br /><span>500+ businesses served since 2014</span></div>
                  <div className="upd">Last updated<br />11 October 2026</div>
                </div>

                <div className={styles.heroForm} style={{ maxWidth: 560 }}>
                  <HeroInlineForm region="uk" source="uk_accounts_payable_automation_hero" submitLabel="Plan my AP automation" />
                </div>
                
              </div>

              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/accounts-payable-automation/ap-automation-hero.webp" width={1400} height={933} fetchPriority="high" decoding="async" alt="A woman in a navy jumper at a pale wooden desk sorting white paper sheets from a wire tray into two piles beside an orange folder" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What happens to every supplier invoice</span>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Read from your accounts inbox</div><div className="scorecard-note">PDF, scan or photo, any layout</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Read</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Tested against HMRC’s VAT invoice list</div><div className="scorecard-note">eleven details, plus duplicates and bank details</div></div>
                    <div className="scorecard-val" style={{ fontSize: 15 }}>Checked</div>
                  </div>
                  <div className="scorecard-row">
                    <div><div className="scorecard-metric">Held as a draft bill for a person</div><div className="scorecard-note">the agent has no access to payments</div></div>
                    <div className="scorecard-val" style={{ color: T.green, fontSize: 15 }}>You approve</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ANSWER-FIRST DEFINITION (GEO) */}
        <section className="sec">
          <div className="wrap">
            <div className="def" style={{ maxWidth: 940 }} data-speakable="true">
              <span className="lab">Accounts payable automation, in one paragraph</span>
              <p>
                Accounts payable automation is software that collects supplier invoices, reads them, checks them,
                matches them to purchase orders and sends them to the right person to approve, so bills reach your
                ledger without retyping. For a UK business it must also test each invoice against HMRC’s VAT invoice
                rules and keep a digital record for Making Tax Digital.
              </p>
            </div>
            <div className="def mt-6" style={{ maxWidth: 940 }}>
              <span className="lab">Four terms used on this page</span>
              <p>
                <b>Accounts payable</b> (AP) is the money you owe suppliers and the work of paying it. A <b>bill</b> is
                how Xero and QuickBooks record a supplier invoice; Sage calls it a purchase invoice and NetSuite a
                vendor bill. A <b>purchase order</b> (PO) is what you agreed to buy before the invoice arrived. An{' '}
                <b>AI agent</b> is software that uses an AI model to read documents and take set actions inside rules
                you approve.
              </p>
            </div>
            <p className="lead mt-8" style={{ maxWidth: 920 }}>
              On 11 October 2026 we searched Google UK for “accounts payable automation”. Of the nine organic results
              we logged, eight came from companies that sell finance or document software and one was a software review
              site. Renting a product
              suits a finance team whose invoices are tidy and whose approvals fit the product’s settings. FactoryJet
              does the other job, an agent built around your suppliers, your purchase orders, your approval limits and
              your ledger. This page covers both routes, with prices read on each vendor’s own page that day.
            </p>
          </div>
        </section>

        {/* 3. FACTS BAND (each figure read on the linked page on 11 October 2026) */}
        <section className="stats-band">
          <div className="wrap">
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout data-sourced-facts><tbody>{[
                { v: '11', t: 'details HMRC lists for a full VAT invoice, each one checked on every bill', s: 'HMRC, VAT Notice 700', u: SRC_VAT_NOTICE_700 },
                { v: '6 years', t: 'is the least time you must keep VAT records, including invoices you receive', s: 'GOV.UK, keeping VAT records', u: SRC_VAT_RECORDS },
                { v: '30 days', t: 'after the invoice arrives, a business payment is late if no date was agreed', s: 'GOV.UK, late commercial payments', u: SRC_LATE_PAYMENT },
                { v: '2029', t: 'is when the UK will make e-invoicing mandatory for all VAT invoices', s: 'GOV.UK, e-invoicing outcome', u: SRC_EINVOICING },
              ].map((r) => (
                <tr key={r.t}><th scope="row"><div style={{ fontFamily: T.fd, fontWeight: 800, fontSize: 26, color: T.orange }}>{r.v}</div></th><td><p style={{ fontSize: 13.5, color: T.ink, marginTop: 4 }}>{r.t}</p></td><td><a href={r.u} {...(r.u.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer nofollow' } : {})} className={styles.citation} style={{ fontFamily: T.fm, fontSize: 12, color: T.n400, textDecoration: 'underline' }}>{r.s}</a></td></tr>
              ))}</tbody></table></div>
          </div>
        </section>

        {/* 4. THE SEVEN STEPS (numbered list) */}
        <section className="sec-lg dot-grid" id="what-it-does">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">From inbox to draft bill</span>
              <h2>What the AP agent does with every supplier invoice, in seven steps</h2>
              <p className="lead mt-4">
                Each step is a separate job, and you choose which ones the agent does for each supplier. We suggest
                starting with the first four and adding coding, matching and routing once the results hold up.
              </p>
            </div>
            <div className="col-6040 mt-12">
              <figure className={styles.processFigure} data-process-flow aria-label="What the AP agent does with every supplier invoice, in seven steps"><ol className={`stack ${styles.processFlow}`}>
                {INVOICE_STEPS.map((s) => (
                  <li key={s.n} className="card" style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: T.fm, fontWeight: 700, fontSize: 15, color: T.small, minWidth: 34 }} className={styles.stageMarker}>{s.n}</span>
                    <div>
                      <h3 style={{ fontSize: 18 }}>{s.t}</h3>
                      <p className="mt-2" style={{ marginTop: 6 }}>{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol></figure>
              <div className="card card-top-orange">
                <span className="eyebrow">What stays with your people</span>
                <ul className="scope-list mt-4">
                  <li><b>Approving spend.</b> The agent routes a bill. A person with authority for that amount approves it.</li>
                  <li><b>Releasing payments.</b> Payment runs stay in your ledger and your bank, with your usual sign-off.</li>
                  <li><b>Changed bank details.</b> Someone phones the supplier on a number you already hold before anything moves.</li>
                  <li><b>Supplier disputes.</b> Short deliveries and wrong prices need a conversation between people.</li>
                  <li><b>Tax judgement.</b> Partial exemption, mixed-use purchases and anything else your accountant should decide.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. VAT INVOICE RULES */}
        <section className="sec-lg" id="vat-invoice">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">HMRC’s rules, read on 11 October 2026</span>
                <h2>What a valid VAT invoice must show, and how the agent checks it</h2>
                <div className="stack mt-6">
                  <p>
                    HMRC’s VAT guide (VAT Notice 700, section 16.3.1, last updated 25 June 2026) lists eleven details
                    that a full VAT invoice must show. The agent checks all eleven on every invoice and names the
                    missing one in the note your team sees, so nobody has to hunt for it.
                  </p>
                  <p>
                    A supplier may send a simplified invoice when the supply is £250 or less. HMRC asks for four
                    details on that one: the supplier’s name, address and VAT number, the tax point, a description,
                    and for each VAT rate the total including VAT and the rate.
                  </p>
                  <p>
                    The check protects your VAT return. GOV.UK says you cannot reclaim VAT using an invalid invoice, a
                    pro-forma invoice, a statement or a delivery note, and that you cannot claim more VAT than a valid
                    invoice shows. Where the amount on an invoice is wrong, its guidance is to ask the supplier to
                    correct it and issue a new one. The agent drafts that request for your team to send and keeps the
                    bill on hold until the corrected invoice arrives.
                  </p>
                  <p>
                    HMRC also runs a public service to check that a UK VAT number is valid and to see the name and
                    address it is registered to, and its Developer Hub offers the same check as an API. The agent can
                    use it to test the VAT number on a new supplier’s first invoice.
                  </p>
                  <p>
                    You must keep VAT records for at least 6 years, and GOV.UK counts every invoice you receive, as an
                    original or an electronic copy. The agent attaches the original file to each bill for that reason.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources: <a href={SRC_VAT_NOTICE_700} {...ext} style={srcLink}>HMRC, VAT guide (VAT Notice 700)</a>;{' '}
                  <a href={SRC_VAT_RECORDS} {...ext} style={srcLink}>GOV.UK, keeping VAT records</a>;{' '}
                  <a href={SRC_CHECK_VAT} {...ext} style={srcLink}>GOV.UK, check a UK VAT number</a>;{' '}
                  <a href={SRC_CHECK_VAT_API} {...ext} style={srcLink}>HMRC Developer Hub, Check a UK VAT number API</a>.
                  This is general information, not tax advice. Confirm your own position with your accountant.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">The eleven details on a full VAT invoice</span>
                <ol className="scope-list num-list mt-4">
                  {VAT_INVOICE_DETAILS.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* 6. MAKING TAX DIGITAL + E-INVOICING */}
        <section className="sec-lg dot-grid" id="making-tax-digital">
          <div className="wrap">
            <div style={{ maxWidth: 820 }}>
              <span className="eyebrow">Making Tax Digital for VAT</span>
              <h2>Making Tax Digital for VAT: why a bill should reach your ledger without retyping</h2>
              <div className="stack mt-6">
                <p>
                  HMRC’s notice on Making Tax Digital for VAT (VAT Notice 700/22) says every VAT-registered business
                  must keep records digitally and file VAT Returns using software. GOV.UK adds that all VAT-registered
                  businesses should now be signed up. For each supply you receive, the notice asks for three things in
                  the digital record: the tax point, the value of the supply and the input tax you will claim.
                </p>
                <figure className={styles.processFigure} data-process-flow aria-label="Making Tax Digital for VAT"><p>The notice also sets a rule on how figures move.</p><div className={styles.modelFlow}><p className={styles.modelNode}> Once data sits in the software that keeps your VAT
                  account, any further transfer must be by a digital link.</p><p className={styles.modelNode}> HMRC lists API transfer and CSV or XML
                  import among the links it accepts, and says copy and paste is not one.</p><p className={styles.modelNode}> An agent that posts each bill
                  into your ledger through the ledger’s own API is a digital link by that definition.</p></div><p> Which of your
                  systems count depends on where your VAT account is kept, so settle that point with your accountant.
                </p></figure>
                <p>
                  One example in the notice matters for paper. Where software scans an invoice and puts the figures in
                  the ledger, and the image is kept and holds all the detail needed for VAT, the business need not keep
                  the original unless another purpose requires it.
                </p>
              </div>
              <h3 className="mt-8">E-invoicing from 2029</h3>
              <div className="stack mt-4">
                <p>
                  A GOV.UK consultation outcome, last updated on 26 November 2025, says the UK will introduce
                  mandatory e-invoicing for all VAT invoices from 2029 and will publish a roadmap at Budget 2026. It
                  describes an e-invoice as one written into the buyer’s finance system with no manual processing.
                  The full response notes that NHS Supply Chain already requires its suppliers to send e-invoices
                  through the Peppol network. Xero’s UK guide for accountants gives the start date as 1 April 2029.
                </p>
                <p>
                  Until then most suppliers will keep sending PDFs. We build the agent so that an e-invoice skips the
                  reading step and then passes through the same checks, matching and approvals as a PDF.
                </p>
              </div>
              <p style={srcNote}>
                Sources: <a href={SRC_MTD_NOTICE} {...ext} style={srcLink}>HMRC, VAT Notice 700/22</a>;{' '}
                <a href={SRC_VAT_GUIDE} {...ext} style={srcLink}>GOV.UK, charge, reclaim and record VAT</a>;{' '}
                <a href={SRC_EINVOICING} {...ext} style={srcLink}>GOV.UK, electronic invoicing consultation outcome</a>;{' '}
                <a href={SRC_EINVOICING_RESPONSE} {...ext} style={srcLink}>GOV.UK, consultation response</a>;{' '}
                <a href={SRC_XERO_AP_GUIDE} {...ext} style={srcLink}>Xero UK, automated accounts payable</a>.
              </p>
            </div>
          </div>
        </section>

        {/* 7. RENT OR BUILD: UK LIST PRICES (comparison table, ItemList) */}
        <section className="sec-lg" id="rent-or-build">
          <div className="wrap">
            <span className="eyebrow">Rent or build</span>
            <h2 style={{ maxWidth: 860 }}>Rent an AP product or have an agent built: UK list prices read on 11 October 2026</h2>
            <p className="lead mt-4" style={{ maxWidth: 780 }}>
              Nine products a UK finance team is likely to meet, with what each vendor’s own page says it does and what
              it lists as the price. FactoryJet wrote this page and builds the custom route, so every row links to the
              vendor’s own page for you to check. Every figure excludes VAT, and plans change often.
            </p>
            <div className={`card mt-8 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 820 }} data-columns={3}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>What its own page says it does</th>
                    <th className="fj">List price on 11 October 2026, before VAT</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS.map((p) => (
                    <tr key={p.name}>
                      <td className="feat"><a href={p.url} {...ext} style={srcLink}>{p.name}</a></td>
                      <td>{p.does}</td>
                      <td className="fj">{p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              Each row was read on the vendor’s own pricing or product page on 11 October 2026:{' '}
              <a href={SRC_XERO_PRICING} {...ext} style={srcLink}>Xero UK</a>,{' '}
              <a href={SRC_HUBDOC} {...ext} style={srcLink}>Hubdoc</a>,{' '}
              <a href={SRC_DEXT} {...ext} style={srcLink}>Dext</a>,{' '}
              <a href={SRC_AUTOENTRY} {...ext} style={srcLink}>AutoEntry</a>,{' '}
              <a href={SRC_APPROVALMAX} {...ext} style={srcLink}>ApprovalMax</a>,{' '}
              <a href={SRC_LIGHTYEAR} {...ext} style={srcLink}>Lightyear</a>,{' '}
              <a href={SRC_ZAHARA} {...ext} style={srcLink}>Zahara</a>,{' '}
              <a href={SRC_PLEO} {...ext} style={srcLink}>Pleo</a>,{' '}
              <a href={SRC_MEDIUS} {...ext} style={srcLink}>Medius</a> and{' '}
              <a href={SRC_BASWARE} {...ext} style={srcLink}>Basware</a>. ApprovalMax prices are for its Small plan size
              with GBP selected. Being listed here is not a recommendation.
            </p>

            <div className="col-6040 mt-12">
              <div className="card card-top-orange">
                <span className="eyebrow">Have an agent built when</span>
                <ul className="scope-list mt-4">
                  <li><b>Orders or deliveries live elsewhere.</b> A job system, a warehouse system or an older ERP that the rented products do not connect to.</li>
                  <li><b>Your checks are your own.</b> CIS deductions, the reverse charge, contract rates, retentions or supplier-specific tolerances.</li>
                  <li><b>Several entities share one process.</b> One approval structure across companies that each keep a separate ledger.</li>
                  <li><b>You want to hold the keys.</b> Rules, code and data in accounts in your name, with a team that supports it.</li>
                </ul>
              </div>
              <div className="card">
                <span className="eyebrow">Rent a product when</span>
                <ul className="scope-list mt-4">
                  <li><b>Invoices are clean.</b> Mostly PDFs from regular suppliers, with few exceptions each month.</li>
                  <li><b>Approvals are simple.</b> Rules by amount and department cover nearly every bill.</li>
                  <li><b>You run one ledger.</b> The product already connects to it and to nothing else you need.</li>
                  <li><b>Approvers accept another app.</b> They are content to log in to a second tool to sign off.</li>
                </ul>
              </div>
            </div>

            <div className="stack mt-10" style={{ maxWidth: 820 }}>
              <h3>What a custom build costs in the UK market</h3>
              <p>
                Two UK firms publish market ranges. Fulminous puts a back-office agent that covers data entry and
                invoice processing at £30,000 to £90,000 before VAT. LeverX puts a single-workflow agent, with invoice
                or document triage as one of its examples, at £10,000 to £30,000 over 5 to 9 weeks, and a multi-step
                agent with integrations at £30,000 to £80,000. Neither figure is a FactoryJet price. FactoryJet quotes
                the build, and any support you choose, as fixed prices in writing after a short scoping call. Our guide to{' '}
                <a href="/blog/ai-cost-uk-2026">AI cost in the UK (2026)</a> sets out the wider market.
              </p>
            </div>
            <p style={srcNote}>
              Sources: <a href={SRC_FULMINOUS} {...ext} style={srcLink}>Fulminous, AI agent development cost UK</a>;{' '}
              <a href={SRC_LEVERX} {...ext} style={srcLink}>LeverX, AI agent development cost UK</a>. Both read on 11 October 2026.
            </p>
          </div>
        </section>

        <MidPageCTA
          headline={'Bring one month of supplier invoices to a short call'}
          sub={'Tell us your ledger, your monthly invoice count and how approvals work today. On a short call the founder will say whether a rented product covers it or what a custom AP agent would add, and you will get a fixed price in writing.'}
          label={'Plan my AP automation'}
        />

        {/* 8. LEDGERS TABLE */}
        <section className="sec-lg dot-grid" id="ledgers">
          <div className="wrap">
            <span className="eyebrow">Works inside the ledger you already use</span>
            <h2 style={{ maxWidth: 860 }}>Xero, Sage, QuickBooks and NetSuite: what each ledger lets an AP agent do</h2>
            <p className="lead mt-4" style={{ maxWidth: 780 }}>
              Your team keeps working in the ledger. The agent connects through each product’s published API. The
              middle column is what the vendor’s developer reference said on 11 October 2026.
            </p>
            <div className={`card mt-8 ${styles.tableBox}`} tabIndex={0} role="region" aria-label="Comparison table" style={{ padding: 0, overflowX: 'auto' }}><table className="cmp-table" style={{ minWidth: 820 }} data-columns={3}>
                <thead>
                  <tr>
                    <th>Ledger</th>
                    <th>What its developer reference says</th>
                    <th className="fj">What the agent does with it</th>
                  </tr>
                </thead>
                <tbody>
                  {LEDGERS.map((l) => (
                    <tr key={l.sys}>
                      <td className="feat"><a href={l.url} {...ext} style={srcLink}>{l.sys}</a></td>
                      <td>{l.says}</td>
                      <td className="fj">{l.does}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={srcNote}>
              Sources: <a href={SRC_XERO_INVOICES} {...ext} style={srcLink}>Xero Accounting API, invoices and bills</a>;{' '}
              <a href={SRC_XERO_PO} {...ext} style={srcLink}>Xero purchase orders</a>;{' '}
              <a href={SRC_SAGE_API} {...ext} style={srcLink}>Sage Accounting API 3.1</a>;{' '}
              <a href={SRC_QBO_BILL} {...ext} style={srcLink}>Intuit Developer, Bill</a>;{' '}
              <a href={SRC_NETSUITE_REST} {...ext} style={srcLink}>NetSuite REST API Browser 2025.2</a>.
            </p>
            <div className="stack mt-8" style={{ maxWidth: 820 }}>
              <p>
                Two Xero details affect planning. Xero’s reference shows a CIS deduction field on
                bills for organisations under the UK Construction Industry Scheme. And for a build used by one Xero
                organisation, Xero offers a{' '}
                <a href={SRC_XERO_CUSTOM} {...ext}>Custom Connection</a>, which it says is available to UK
                organisations as an extra subscription that you buy and authorise in your own Xero account.
              </p>
              <p>
                FactoryJet has delivered Xero integrations and has worked on NetSuite, Odoo, SAP Business One, ERPNext
                and custom ERPs, on jobs that include daily bookkeeping and purchase and sales orders. If your stock
                and orders sit in a store as well as a ledger, see our{' '}
                <a href="/uk/shopify-xero-integration">Shopify and Xero integration service</a>.
              </p>
            </div>
          </div>
        </section>

        {/* 9. FRAUD CONTROLS */}
        <section className="sec-lg" id="fraud-controls">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Payment controls</span>
                <h2>Fake invoices and changed bank details: the holds built into the agent</h2>
                <div className="stack mt-6">
                  <p>
                    Report Fraud, the fraud reporting service at police.uk, calls it mandate fraud, and also payment
                    diversion fraud or business email compromise. Criminals pose as a company you already deal with, use an
                    email address close to the real one, send a fake invoice and say the bank account has changed.
                    The payment then goes to an account they control.
                  </p>
                  <p>
                    Its advice is plain. When a request arrives to pay into a new bank account, contact the supplier
                    directly on official contact details you can verify. Let only named employees change payment
                    arrangements.
                  </p>
                  <p>
                    Software that passes on whatever arrives makes this fraud easier. The agent we build does the
                    reverse. It compares the bank details on each invoice with the supplier record and holds the bill
                    when they differ. It holds the first invoice from a new supplier, flags a sender address that is
                    one or two characters away from the one on file, and records who made the phone call and when.
                  </p>
                </div>
                <p style={srcNote}>
                  Source: <a href={SRC_MANDATE_FRAUD} {...ext} style={srcLink}>Report Fraud, mandate fraud</a>, read on 11 October 2026.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/accounts-payable-automation/ap-automation-bank-detail-call.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A man in a light blue shirt at a desk holding a desk telephone to his ear and looking at a sheet of paper, with an orange ring binder beside him" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <span className="eyebrow">What puts a bill on hold</span>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Bank details differ from the record</div><div className="scorecard-note">phone the supplier on a number you hold</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Hold</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">First invoice from a new supplier</div><div className="scorecard-note">VAT number and details verified first</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Hold</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Look-alike sender address</div><div className="scorecard-note">a character or two from the real one</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Flag</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Same number and amount as an earlier bill</div><div className="scorecard-note">possible duplicate</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Review</div></div>
                  <div className="scorecard-row"><div><div className="scorecard-metric">Release of payment</div><div className="scorecard-note">outside the agent’s access</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>Your people</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. MATCHING + CONSTRUCTION INVOICES */}
        <section className="sec-lg dot-grid" id="matching">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Invoices that need more than a read</span>
                <h2>Purchase orders, goods received notes and construction invoices</h2>
                <h3 className="mt-6">Two-way and three-way matching</h3>
                <div className="stack mt-4">
                  <p>
                    Two-way matching sets the invoice beside the purchase order. Three-way matching adds the goods
                    received note, the record of what turned up at the door. You set a tolerance, for example a small
                    price difference per line, and the agent passes anything inside it. Anything outside it goes to a
                    person with the three records side by side and the gap marked.
                  </p>
                  <p>
                    The order and the delivery often sit outside the ledger, in a stock system, a job system or a
                    spreadsheet kept at goods-in. Where that system has a usable API or a regular export, the agent
                    reads from it. That link is the main reason to choose a build over a rented product.
                  </p>
                </div>
                <h3 className="mt-8">CIS deductions and the VAT reverse charge</h3>
                <div className="stack mt-4">
                  <p>
                    Construction brings two extra checks. GOV.UK says a contractor in the Construction Industry Scheme
                    (CIS) will usually need to make deductions from payments to subcontractors and pay that money to
                    HMRC, and must file monthly returns. It also says the VAT domestic reverse charge must be used for
                    most supplies of building and construction services between VAT-registered businesses that are
                    reported within CIS.
                  </p>
                  <p>
                    For AP that means a subcontractor’s invoice cannot be coded like a stationery order. The agent
                    marks invoices from CIS subcontractors, applies the treatment your accountant has written into the
                    rules, and sends anything unclear to a person.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources: <a href={SRC_CIS} {...ext} style={srcLink}>GOV.UK, what you must do as a CIS contractor</a>;{' '}
                  <a href={SRC_REVERSE_CHARGE} {...ext} style={srcLink}>GOV.UK, VAT domestic reverse charge for building and construction services</a>.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/accounts-payable-automation/ap-automation-goods-in-check.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A woman in an orange high-visibility vest holding a clipboard and resting one hand on a stack of plain cardboard boxes in a stockroom" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    The goods received note is the third record in a three-way match. If nobody records what arrived,
                    the match can only ever be two-way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. LATE PAYMENT */}
        <section className="sec-lg" id="paying-on-time">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Due dates</span>
                <h2>Paying suppliers on time: the 30-day rule and what the agent tracks</h2>
                <div className="stack mt-6">
                  <p>
                    GOV.UK sets out when a business payment becomes late. If no date was agreed, it is late 30 days
                    after the customer gets the invoice, or after the goods or service are delivered if that is
                    later. An agreed date must usually fall within 60 days between businesses and 30 days for public
                    authorities. A longer period is allowed between businesses only if it is fair to both.
                  </p>
                  <p>
                    Once a payment is late, the supplier can charge statutory interest of 8% plus the Bank of England
                    base rate, and a fixed sum for recovery costs: £40 on a debt under £1,000, £70 from £1,000 up to
                    £9,999.99, and £100 on £10,000 or more.
                  </p>
                  <p>
                    So the date an invoice arrives is a figure worth keeping. The agent records it, works out the due
                    date from that supplier’s terms, and lists the bills that are close to late with the name of the
                    approver holding each one. Companies and LLPs that fall under the payment practices reporting duty
                    must publish how they pay. With received, approved and paid dates on every bill, those figures
                    come from one report.
                  </p>
                </div>
                <p style={srcNote}>
                  Sources: <a href={SRC_LATE_PAYMENT} {...ext} style={srcLink}>GOV.UK, when a payment becomes late</a>;{' '}
                  <a href={SRC_LATE_INTEREST} {...ext} style={srcLink}>interest on late commercial payments</a>;{' '}
                  <a href={SRC_LATE_COSTS} {...ext} style={srcLink}>debt recovery costs</a>;{' '}
                  <a href={SRC_PAYMENT_REPORTING} {...ext} style={srcLink}>payment practices and performance reporting requirements</a>.
                </p>
              </div>
              <div className="card card-top-orange">
                <span className="eyebrow">Dates the agent keeps for every bill</span>
                <div className="scorecard-row"><div><div className="scorecard-metric">Received</div><div className="scorecard-note">when the invoice reached your inbox</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Day 0</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Tax point</div><div className="scorecard-note">the date HMRC asks you to record</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>VAT</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Sent for approval</div><div className="scorecard-note">and to whom</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Routed</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Approved</div><div className="scorecard-note">by name, with any comment</div></div><div className="scorecard-val" style={{ fontSize: 14 }}>Signed</div></div>
                <div className="scorecard-row"><div><div className="scorecard-metric">Due</div><div className="scorecard-note">from the supplier’s agreed terms</div></div><div className="scorecard-val" style={{ color: T.green, fontSize: 14 }}>On time</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. HOW WE BUILD IT (numbered list) */}
        <section className="sec-lg dot-grid" id="how-we-build">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">How we build it</span>
                <h2>How FactoryJet builds your accounts payable agent, in six steps</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  We design, build, implement and support. The steps below are how we run an AP project, and the
                  rules workshop is where most of the value is decided.
                </p>
              </div>
              <div className="card" style={{ padding: 8 }}>
                <img src="/images/uk/accounts-payable-automation/ap-automation-rules-workshop.webp" width={1200} height={800} loading="lazy" decoding="async" alt="A man in a green shirt and a woman in a cream blouse standing at a table sorting white paper into three piles on orange, grey and blue folders" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
                <div style={{ padding: '14px 12px 8px' }}>
                  <p style={{ fontSize: 14 }}>
                    Sorting real invoices into piles is how the rules get written: which ones pass, which ones need a
                    purchase order, and which ones a person must always see.
                  </p>
                </div>
              </div>
            </div>
            <figure className={styles.processFigure} data-process-flow aria-label="How FactoryJet builds your accounts payable agent, in six steps"><ol className={`stack mt-10 ${styles.processFlow}`} style={{ maxWidth: 900 }}>
              {BUILD_STEPS.map((s) => (
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

        {/* 13. WHO IT SUITS */}
        <section className="sec-lg">
          <div className="wrap">
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">Who it suits</span>
              <h2>Accounts payable automation for UK wholesalers, builders, groups and practices</h2>
              <p className="lead mt-4">
                The same seven steps, shaped by the invoices each kind of business receives.
              </p>
            </div>
            <div className={styles.comparisonBox} tabIndex={0} role="region" aria-label="Comparison table"><table className={styles.comparisonTable} data-comparison-layout><tbody><tr className="svc-card"><th><h3>Wholesalers and distributors</h3></th><td><p className="mt-4">Many supplier invoices against purchase orders, with part deliveries and price changes. Three-way matching against your stock system does most of the work here.</p></td></tr><tr className="svc-card"><th><h3>Construction and trades</h3></th><td><p className="mt-4">Subcontractor invoices under CIS, the reverse charge, retentions and invoices tied to a job number. The rules come from your accountant and the agent applies them to each invoice.</p></td></tr><tr className="svc-card"><th><h3>Multi-entity groups</h3></th><td><p className="mt-4">One shared inbox, several companies and a ledger for each. The agent works out which entity an invoice belongs to and follows that entity’s approvers.</p></td></tr><tr className="svc-card"><th><h3>Ecommerce and retail brands</h3></th><td><p className="mt-4">Stock purchases, carriers, marketplaces and software subscriptions. Recurring invoices are checked against the last one, so a price rise is seen on the day it lands.</p></td></tr><tr className="svc-card"><th><h3>Hospitality groups</h3></th><td><p className="mt-4">Daily deliveries from food and drink suppliers across several sites, often on paper. Delivery notes are matched to the weekly invoice by site.</p></td></tr><tr className="svc-card"><th><h3>Accountancy and bookkeeping practices</h3></th><td><p className="mt-4">The same build set up per client, each in the client’s own ledger, with the practice reviewing the exceptions queue.</p></td></tr></tbody></table></div>
            <p className="mt-8" style={{ maxWidth: 760 }}>
              Accounts payable is one job an agent can take on. For the wider picture, see our{' '}
              <a href="/uk/ai-agents">UK AI agent development service</a> and{' '}
              <a href="/uk/ai-development">AI development and integration</a>. If you are still deciding where AI
              would pay off first, start with <a href="/uk/ai-consulting">AI consulting</a>. For the money coming
              in, see <a href="/uk/accounts-receivable-automation">accounts receivable automation for UK firms</a>. For
              delivery notes, statements and other paperwork beyond invoices, see{' '}
              <a href="/uk/document-intake-ai-agents">document intake AI agents</a>. If your ledger is NetSuite or Odoo,
              see <a href="/uk/netsuite-ai-agents">NetSuite AI agents for UK companies</a> and{' '}
              <a href="/uk/odoo-ai-agents">Odoo AI agents for UK firms</a>.
            </p>
          </div>
        </section>

        {/* 14. ENGAGEMENT SHAPES + DEMAND */}
        <section className="sec-lg dot-grid">
          <div className="wrap">
            <div className="col-6040">
              <div>
                <span className="eyebrow">Scope first</span>
                <h2>Three ways to scope an AP automation project with us</h2>
                <p className="lead mt-4" style={{ maxWidth: 560 }}>
                  Every project is quoted for its own scope, as a fixed price in writing. These are the shapes it
                  usually takes.
                </p>
                <ul className="scope-list num-list mt-6" style={{ maxWidth: 580 }}>
                  <li><b>First build.</b> One inbox and one ledger. The agent reads, checks and creates draft bills, and every bill is reviewed by a person.</li>
                  <li><b>Full accounts payable.</b> Purchase order and goods received matching, approval limits by amount and department, and several entities.</li>
                  <li><b>Build plus support.</b> Either of the above with ongoing support: new suppliers, new rules and changes when your ledger or your process changes.</li>
                </ul>
                <p className="mt-6" style={{ maxWidth: 560 }}>
                  Four things move the scope: how many suppliers and invoice layouts you have, whether you raise
                  purchase orders, how many approval levels there are, and how many systems the agent must connect to.
                </p>
                <div className="mt-8">
                  <ModalCTAButton label="Plan my AP automation" region="uk" modalVariant="default" btnVariant="primary-light" />
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
                      { kw: 'accounts payable automation', v: '390', w: '100%', kd: 'The head term' },
                      { kw: 'invoice automation', v: '110', w: '28%', kd: 'The same job, named by the document' },
                      { kw: 'invoice processing automation', v: '90', w: '23%', kd: 'Finance teams comparing methods' },
                      { kw: 'ai invoice processing', v: '70', w: '18%', kd: 'Buyers asking what AI adds' },
                      { kw: 'ai accounts payable', v: '30', w: '8%', kd: 'The newest wording' },
                    ].map((r) => (
                      <li key={r.kw} className="demand-row">
                        <div className="demand-top"><span className="demand-kw">{r.kw}</span><span className="demand-v">{r.v}<span style={{ fontSize: 12, color: T.n400 }}> searches</span></span></div>
                        <div className="demand-bar"><i style={{ width: r.w }} /></div>
                        <div className="demand-kd">{r.kd}</div>
                      </li>
                    ))}
                  </ul>
                  <p style={{ textAlign: 'center', fontFamily: T.fm, fontSize: 12, color: T.n400, marginTop: 10 }}>Source: DataForSEO, United Kingdom, read on 11 October 2026</p>
                </div>
              </div>
            </div>
            <p className="mt-8" style={{ maxWidth: 760 }}>
              Buying for another market? See{' '}
              <a href="/services/accounts-payable-automation">accounts payable automation for US businesses</a> and{' '}
              <a href="/au/accounts-payable-automation">accounts payable automation for Australian businesses</a>.
            </p>
          </div>
        </section>

        {/* 15. FAQ (canonical Linear Minimal) */}
        <section className="sec-lg" id="faq">
          <div className="wrap">
            <div style={{ textAlign: 'center' }}>
              <span className="eyebrow">FAQ</span>
              <h2>Accounts payable automation questions from UK finance teams</h2>
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
                        <div className="faq-ans">
                          <p>{f.answer}</p>
                          {f.sources && (
                            <p style={srcNote}>
                              Source:{' '}
                              {f.sources.map((s, i) => (
                                <span key={s.href}>
                                  {i > 0 && '; '}
                                  <a href={s.href} {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer nofollow' } : {})} style={srcLink}>{s.label}</a>
                                </span>
                              ))}
                            </p>
                          )}
                        </div>
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
            <span className="eyebrow">Ready when you are</span>
            <h2>Supplier invoices checked before they reach your ledger</h2>
            <p className="mt-4">
              Send your name and work email. The founder replies within one business day to book a short call about
              your suppliers, your ledger and your approval rules. You will hear whether to rent or build, and you
              will get a fixed price in writing if a build fits.
            </p>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <ModalCTAButton label="Plan my AP automation" region="uk" modalVariant="default" btnVariant="primary-light" />
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
