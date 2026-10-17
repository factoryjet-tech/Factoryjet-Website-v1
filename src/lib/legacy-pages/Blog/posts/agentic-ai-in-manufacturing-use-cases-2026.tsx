import React from 'react';
import type { BlogPost, FAQItem } from '../data.types';

/*
 * Agentic AI in manufacturing: nine use cases with the systems they touch (US, 2026). Written 18 Oct 2026.
 * Target terms (DataForSEO, US, 17 Oct 2026): agentic ai in manufacturing 90/mo KD 0, ai agents for manufacturing 70 KD 0,
 * agentic ai use cases in manufacturing 50 KD 0 $48.80 (+800% yoy). Weakest page-one sites had 85 and 112 referring domains.
 * PAA (18 Oct): "How can AI be used in the manufacturing industry?", "What are some examples of AI applications in the
 * manufacturing industry?", "Which AI is best for the manufacturing industry?", "What companies use AI for manufacturing?",
 * "Is there an AI for scheduling?".
 * Outside facts: Gartner 28 Oct 2025 manufacturing strategy survey and 25 Jun 2025 agentic AI release (read in the
 * built-in browser 17 and 18 Oct 2026). FactoryJet experience stated only as confirmed by Bhavesh on 9 Oct 2026 (RFQ
 * automation, purchase and sales order generation, daily bookkeeping; Odoo, NetSuite, SAP Business One, ERPNext, custom ERPs).
 * No FactoryJet prices, no running-cost figures, no team location, no client names.
 * The FAQ array below is the single source for the visible FAQ and FAQPage JSON-LD.
 */

const SRC = {
  gartnerMfg: 'https://www.gartner.com/en/newsroom/press-releases/2025-10-28-gartner-survey-shows-49-percent-of-organizations-lack-confidence-in-future-manufacturing-strategy',
  gartner40: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027',
};

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;
const IMG = '/images/blog/agentic-ai-in-manufacturing-use-cases-2026';

function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-800 text-white">
            {head.map((h) => (
              <th key={h} className="p-3 text-left border border-gray-700">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
              {r.map((c, j) => (
                <td key={j} className={`p-3 border border-gray-200 align-top${j === 0 ? ' font-semibold' : ''}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const faqs: FAQItem[] = [
  {
    q: 'What is agentic AI in manufacturing?',
    a: 'Agentic AI in manufacturing means AI agents that do business work around production end to end: read an RFQ or purchase order, look up drawings, prices and stock in the ERP, prepare a quote or sales order, chase a late supplier, or draft a quality report, then hand anything outside their rules to a person. It works on the business layer, not on machine controls.',
  },
  {
    q: 'How can AI be used in the manufacturing industry?',
    a: 'Mostly in the office work that surrounds production: quoting from RFQs, entering orders from emails and EDI, answering order-status questions, chasing supplier deliveries, flagging material shortages, drafting nonconformance reports and turning operator notes into maintenance work orders. Plant-floor uses such as machine vision and predictive maintenance exist too, but they are usually bought as specialist products.',
  },
  {
    q: 'What are examples of agentic AI use cases in manufacturing?',
    a: 'Nine that fit mid-sized manufacturers: RFQ intake and quote preparation, order entry from emailed POs and EDI, customer order-status answers, supplier delivery follow-up, shortage alerts with suggested purchase orders, schedule-change impact notes, nonconformance report drafting, maintenance request intake, and drawing revision checks on incoming orders. Each needs ERP access and a person to approve anything that commits the company.',
  },
  {
    q: 'Which AI is best for the manufacturing industry?',
    a: 'It depends on the job. For plant-floor data and machine monitoring, specialist industrial platforms lead. For the office work around production, the best fit is usually a custom agent connected to your ERP, because quoting rules, part numbers and approval steps are specific to each manufacturer. Many manufacturers use both.',
  },
  {
    q: 'Should AI agents control machines on the shop floor?',
    a: 'No. Keep agents out of machine control loops. PLCs, CNC programs and safety systems need deterministic control and their own validated changes. Agents belong in the business layer: reading documents, preparing ERP records, answering questions and alerting people. If an agent suggests a schedule change, a planner approves it in the scheduling system.',
  },
  {
    q: 'Can AI agents do quoting for manufacturers?',
    a: 'Yes, and RFQ quoting is one of the strongest first uses. An agent reads the RFQ and drawings, extracts parts, quantities, materials and dates, looks up costs and past quotes in your ERP, applies your pricing rules, and prepares a draft quote for an estimator to review. We have built RFQ automation and demo pricing agents that run on a manufacturer\'s own rule book.',
  },
  {
    q: 'Can AI turn customer purchase orders into sales orders?',
    a: 'Yes. The agent reads the emailed PDF or EDI order, matches the customer and their part numbers to your item codes, checks price, stock and dates, and creates a draft sales order with any mismatches flagged for a person. An idempotency key built from the customer PO number stops duplicates when the same order arrives twice.',
  },
  {
    q: 'Is there an AI for production scheduling?',
    a: 'Scheduling optimization is usually done by dedicated scheduling or MES software. An agent adds value around it: reading a customer change or a supplier delay, working out which orders it affects, and drafting a note or a suggested change for the planner to approve in the scheduling system. The planner stays in control of the schedule.',
  },
  {
    q: 'What ERP systems can manufacturing AI agents work with?',
    a: 'Any ERP with a usable API or reliable exports. We have worked on Odoo, NetSuite, SAP Business One, ERPNext and custom ERPs. The agent reads and writes through the ERP\'s own API with a limited service account, so permissions and audit history stay inside the ERP.',
  },
  {
    q: 'Do manufacturers need clean data to use AI agents?',
    a: 'They need reachable data for the job they pick. If you can pull 50 to 200 past RFQs, orders or reports with their outcomes, you can test an agent on them. Reading messy PDFs, drawings and emails is what agents do well; the harder part is usually mapping customer part numbers and units to your own item master.',
  },
  {
    q: 'How do manufacturers start with agentic AI?',
    a: 'Pick one office job with volume and written rules, such as quoting or order entry. Pull past cases with their outcomes. Run a proof of concept on those cases with a pass mark agreed in advance. Then run it supervised on live work, with an estimator or order clerk approving every draft, before widening its limits.',
  },
  {
    q: 'What are the risks of AI agents in manufacturing?',
    a: 'Wrong quotes or orders committed without review, wrong part or revision matched to a customer order, private drawings shared outside the company, and an agent acting on hidden instructions inside a supplier or customer document. Draft-only writes, approval on anything that commits the company, revision checks and limited data access address most of them.',
  },
  {
    q: 'Why do manufacturing AI projects stall?',
    a: 'Gartner\'s October 2025 survey of 128 manufacturing and supply chain leaders found 66% say integrating supply chain and manufacturing is the most significant challenge for the next three years, and two-thirds are not pursuing the redesign needed for advanced automation. AI agents stall for the same reason: the hard part is connecting systems, not the model.',
  },
  {
    q: 'Can AI agents help with quality management?',
    a: 'Yes, on the documentation side. An agent can turn an inspector\'s notes and photos into a draft nonconformance report, pull the order, lot and supplier details from the ERP, suggest the right defect code, and route it for review. Disposition decisions and corrective actions stay with your quality team.',
  },
  {
    q: 'Can AI agents handle maintenance requests?',
    a: 'They can turn an operator\'s message or note into a structured maintenance work order: machine, symptom, urgency, and any history from past work orders, ready for the maintenance lead to approve in your maintenance system. Predictive maintenance from sensor data is a different, specialist job.',
  },
  {
    q: 'How do AI agents check drawing revisions?',
    a: 'When an order or RFQ arrives, the agent reads the drawing number and revision on the customer document and compares it with the revision on file in your ERP or document system. A mismatch is flagged before the order is entered, which catches one of the costlier errors in make-to-print manufacturing.',
  },
  {
    q: 'Do manufacturers need a data scientist to use AI agents?',
    a: 'Not usually. The work is integration and process: connecting the ERP, mapping part numbers, writing down quoting or order rules, and testing on past cases. You need an owner who knows the process, someone to build and maintain the connections, and a reviewer for the agent\'s drafts.',
  },
  {
    q: 'What does an AI agent for manufacturers cost?',
    a: 'Market figures vary by scope; Layer3 Labs, in its AI consulting pricing guide updated 9 September 2026, puts a production MVP workflow at $5,000 to $25,000. That is a market range, not a FactoryJet price. FactoryJet quotes a fixed price in writing after a short scoping call and builds a demo on your own sample files first.',
  },
  {
    q: 'Can an AI agent work with EDI orders?',
    a: 'Yes. An agent can read incoming EDI purchase orders (the 850 transaction) alongside emailed and portal orders, handle the exceptions the EDI translator cannot, and prepare acknowledgements for review. We deliver EDI work as well as agents, so both sides can be built together.',
  },
  {
    q: 'How does FactoryJet help manufacturers with AI agents?',
    a: 'We pick one office job with you, pull past cases from your ERP, and build a demo on your own data before you sign. We have built RFQ automation, purchase and sales order generation and daily bookkeeping on several ERPs. You own the code, and we quote the build and any support as fixed prices in writing.',
  },
];

export const post: BlogPost = {
  id: '775',
  slug: 'agentic-ai-in-manufacturing-use-cases-2026',
  title: 'Agentic AI in Manufacturing: 9 Use Cases for Mid-Sized Manufacturers, With the Systems Each Touches (2026)',
  excerpt:
    'Nine agentic AI use cases for mid-sized manufacturers, from RFQ quoting and PO-to-sales-order entry to supplier follow-up, shortage alerts, NCR drafting and drawing revision checks, with the ERP data each needs, what a person approves, and why agents stay out of machine control.',
  category: 'Emerging Tech',
  author: 'Bhavesh Barot',
  date: 'Oct 18, 2026',
  dateModified: 'Oct 18, 2026',
  readTime: '13 min read',
  imageUrl: `${IMG}/hero.webp`,
  imageAlt:
    'A woman in safety glasses and a navy work jacket shows a tablet to a grey-bearded colleague beside a CNC machine on a bright shop floor, an orange hard hat on the steel workbench.',
  meta: {
    title: 'Agentic AI in Manufacturing: 9 Use Cases (2026)',
    description:
      'Agentic AI use cases for mid-sized manufacturers: RFQ quoting, order entry, supplier follow-up, shortages, NCRs and revisions, with the ERP data each needs.',
  },
  keyTakeaways: [
    'In manufacturing, AI agents earn their keep in the office work around production: quoting, order entry, supplier follow-up, shortages and quality paperwork.',
    'Keep agents out of machine control loops. They belong in the business layer, preparing records for people to approve.',
    'RFQ quoting and PO-to-sales-order entry are the strongest first jobs: high volume, written rules, and ERP data to check against.',
    'Gartner\'s October 2025 survey found 66% of manufacturing and supply chain leaders say integrating supply chain and manufacturing is their most significant challenge.',
    'Every use case needs ERP access through a limited service account, and draft-only writes until the agent has a track record.',
    'Test on 50 to 200 of your own past RFQs or orders before anything goes live.',
  ],
  faqs,
  content: (
    <article>
      {/* Answer-first block */}
      <div className="bg-white border-2 border-[#E5DFD7] rounded-xl p-6 sm:p-8 mb-10">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-3">The short answer</p>
        <p className="text-lg leading-relaxed mb-0">
          <strong>Agentic AI in manufacturing</strong> works best on the business work around production: reading RFQs
          and purchase orders, preparing quotes and sales orders in the ERP, chasing suppliers, flagging shortages and
          drafting quality reports for people to approve. Keep agents out of machine control, start with one office job,
          and test on your own past cases first.
        </p>
      </div>

      <div className="bg-[#FAF8F5] border-l-4 border-[#B23E13] p-5 rounded-r-lg mb-10">
        <p className="text-sm text-[#1F2937] leading-relaxed mb-0">
          <strong>We design, build and support custom AI agents for manufacturers and distributors, so weigh this page
          with that in mind.</strong> Outside facts come from Gartner releases opened on 17 and 18 October 2026. Search
          figures are our own DataForSEO measurement for the US on 17 October 2026.
        </p>
      </div>

      <p>
        US searches for &quot;agentic ai use cases in manufacturing&quot; rose 800% in a year, with advertisers paying
        about $49 a click (DataForSEO, 17 October 2026). Gartner&apos;s{' '}
        <a href={SRC.gartnerMfg} {...ext}>October 2025 survey</a> of 128 manufacturing and supply chain leaders found
        nearly half lack confidence that their manufacturing strategy will deliver over the next three years, and 66%
        say integrating supply chain and manufacturing is their most significant challenge. That integration gap is
        exactly where agents help a mid-sized manufacturer: the work between the inbox, the ERP and the shop.
      </p>

      <h2 id="where">Where agents belong in a factory, and where they do not</h2>
      <Table
        head={['Layer', 'Examples', 'Agents?']}
        rows={[
          ['Machine control', 'PLCs, CNC programs, safety systems', 'No. Deterministic control with validated changes'],
          ['Shop-floor data', 'Machine monitoring, vision inspection, sensors', 'Usually specialist products, not general agents'],
          ['Business operations', 'RFQs, orders, purchasing, quality paperwork, customer questions', 'Yes. This is where agents fit'],
        ]}
      />

      <h2 id="use-cases">Nine agentic AI use cases for mid-sized manufacturers</h2>
      <Table
        head={['Use case', 'What the agent does', 'Systems it needs', 'A person approves']}
        rows={[
          ['1. RFQ intake and quoting', 'Reads RFQs and drawings, extracts parts, materials, quantities and dates, applies your pricing rules, drafts a quote', 'ERP costs and past quotes, document store', 'Every quote'],
          ['2. PO to sales order', 'Reads emailed or EDI POs, maps customer part numbers, checks price, stock and dates, creates a draft order', 'ERP orders, items, price lists', 'Drafts with flags'],
          ['3. Order-status answers', 'Answers "where is my order?" by PO number from ERP and shipping data', 'ERP, carrier tracking', 'Exceptions only'],
          ['4. Supplier delivery follow-up', 'Finds late or at-risk purchase orders and drafts chasers to suppliers', 'ERP purchasing, email', 'Messages at first, then limits'],
          ['5. Shortage alerts', 'Compares open orders and stock, flags shortages, suggests purchase orders', 'ERP stock, BOMs, open orders', 'Every suggested PO'],
          ['6. Schedule-change impact', 'Reads a customer change or supplier delay and lists affected orders for the planner', 'ERP or scheduling system', 'Any schedule change'],
          ['7. Nonconformance reports', 'Turns inspector notes and photos into a draft NCR with order, lot and supplier details', 'ERP, quality system', 'Disposition and actions'],
          ['8. Maintenance requests', 'Turns operator messages into structured work orders with machine history', 'Maintenance system', 'Every work order'],
          ['9. Drawing revision checks', 'Compares the revision on an incoming order with the revision on file', 'ERP, document control', 'Any mismatch'],
        ]}
      />

      <figure className="my-8">
        <img
          src={`${IMG}/schedule.webp`}
          alt="Seen over his shoulder in a factory office, a man in a charcoal work shirt reviews a schedule of grey bars with one orange bar, an orange safety vest on his chair and the shop floor through the window."
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl border border-gray-200"
        />
        <figcaption className="text-xs text-gray-500 mt-2">
          Agents prepare the record; the planner, estimator or buyer approves it in the system they already use.
        </figcaption>
      </figure>

      <h2 id="first-two">Why quoting and order entry come first</h2>
      <p>
        Both have volume, written rules and an ERP to check against, and a person already reviews the result. We have
        built RFQ automation and purchase and sales order generation on Odoo, NetSuite, SAP Business One, ERPNext and
        custom ERPs, and the pattern repeats: the model reads and matches; plain code applies the pricing rules, checks
        for duplicates and writes a draft. Our{' '}
        <a href="/blog/ai-agent-architecture-manufacturing-rfq-erp-sync-2026">RFQ-to-ERP architecture post</a> goes
        through the quoting side in detail, and our{' '}
        <a href="/blog/agentic-ai-architecture-mid-sized-companies-2026">agentic AI architecture guide</a> traces an
        emailed PO to a draft sales order step by step.
      </p>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg my-8">
        <h3 className="text-lg font-bold mb-3">See an agent quote or enter orders on your own data</h3>
        <p className="mb-4">
          Send a handful of past RFQs or customer POs and tell us your ERP. In a 30-minute call with founder Bhavesh
          Barot we will tell you which use case to start with, then build a demo on your own sample files before any
          contract. FactoryJet quotes a fixed price in writing after that call.
        </p>
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          {...ext}
          className="inline-block bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors"
        >
          Talk to the Founder
        </a>
      </div>

      <h2 id="how-to-start">How a mid-sized manufacturer should start</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Pick one office job with weekly volume: quoting or order entry, usually.</li>
        <li>Pull 50 to 200 past cases with their outcomes: the RFQ and the quote sent, the PO and the order entered.</li>
        <li>Write down the rules, including the exceptions your estimators or order clerks handle by feel.</li>
        <li>Run a <a href="/blog/ai-proof-of-concept-to-production-2026">proof of concept</a> on those cases with a pass mark agreed in advance.</li>
        <li>Go live supervised, with drafts only, and widen limits as the track record builds.</li>
      </ol>

      <h2 id="risks">Risks specific to manufacturers</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Wrong revision or part.</strong> Check revisions and part cross-references before any order is entered.</li>
        <li><strong>Commitments without review.</strong> Quotes, delivery promises and orders stay drafts until a person approves.</li>
        <li><strong>Drawings leaving the company.</strong> Limit which model providers see customer drawings, and under which account.</li>
        <li><strong>Hidden instructions in documents.</strong> Treat RFQs and supplier documents as data; see our <a href="/blog/ai-agent-security-risks-controls-2026">AI agent security guide</a>.</li>
      </ul>
      <p>
        Gartner&apos;s{' '}
        <a href={SRC.gartner40} {...ext}>June 2025 forecast</a> that over 40% of agentic AI projects will be canceled by
        the end of 2027 notes that integrating agents into legacy systems can be technically complex. Starting with one
        job on one ERP keeps that complexity small.
      </p>

      <h2 id="how-factoryjet-works">How FactoryJet works with manufacturers</h2>
      <p>
        We design, build, implement and support custom AI agents, and you own what we build. We pick one job with you,
        pull past cases from your ERP, and show working software on your own data before you sign. We also deliver EDI,
        punchout and ERP integration work, so the connections and the agent can be built together. FactoryJet quotes the
        build, and any support you choose, as fixed prices in writing after a short scoping call.
      </p>
      <p>
        See <a href="/services/manufacturing-ai-agents">manufacturing AI agents</a>,{' '}
        <a href="/services/ai-agent-development/rfq-bidding-agent">RFQ and bidding agents</a>,{' '}
        <a href="/services/ai-quoting-software">AI quoting</a>,{' '}
        <a href="/services/sales-order-automation-ai-agents">sales order automation</a> and{' '}
        <a href="/services/erp-ai-agents">AI agents for ERP systems</a>. For a list of firms, see{' '}
        <a href="/blog/best-ai-agent-development-companies-for-manufacturers-2026">AI agent development companies for manufacturers</a>.
      </p>

      <h2 id="sources">Sources</h2>
      <p className="text-sm text-gray-600">Pages opened and read on 17 and 18 October 2026.</p>
      <ul className="list-disc pl-6 space-y-1 text-sm mb-8">
        <li><a href={SRC.gartnerMfg} {...ext}>Gartner, Gartner Survey Shows 49% of Organizations Lack Confidence in Future Manufacturing Strategy</a> (28 October 2025)</li>
        <li><a href={SRC.gartner40} {...ext}>Gartner, Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027</a> (25 June 2025)</li>
        <li>Market range in the FAQ: Layer3 Labs, AI consulting rates and pricing (updated 9 September 2026)</li>
        <li>Our own measurement: US search volumes, year-on-year change and click prices, DataForSEO, 17 October 2026</li>
      </ul>

      <div className="bg-[#FAF8F5] border-2 border-[#E5DFD7] p-6 sm:p-8 rounded-xl my-10 shadow-sm">
        <p className="font-fj-mono text-xs font-bold uppercase tracking-wider text-[#B23E13] mb-2">
          Manufacturing AI agent scoping for US manufacturers
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] mb-3">
          See an agent prepare quotes or orders from your own RFQs and POs
        </h3>
        <p className="text-[#4B5563] text-base leading-relaxed mb-6">
          Tell us your ERP and send a few past documents. We will build a demo on your own files before any contract.
          FactoryJet quotes a fixed price in writing after a short scoping call.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://calendly.com/bhavesh-factoryjet/30min"
            {...ext}
            className="inline-flex items-center gap-2 bg-[#B23E13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9A3510] transition-colors shadow-sm"
          >
            Talk to the Founder
          </a>
          <a
            href="/services/manufacturing-ai-agents"
            className="inline-flex items-center gap-2 bg-white text-[#1F2937] border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            See manufacturing AI agents
          </a>
        </div>
      </div>
    </article>
  ),
};
