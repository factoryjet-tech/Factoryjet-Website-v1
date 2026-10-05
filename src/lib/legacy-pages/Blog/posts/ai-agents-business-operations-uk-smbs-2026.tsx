import React from 'react';
import type { BlogPost } from '../data.types';

const OPERATIONS = [
  {
    "name": "Support and order enquiries",
    "input": "A customer asks about an existing order or an approved policy.",
    "boundary": "Authenticate access to the right order, retrieve current status and prepare a response. Route account mismatches, missing tracking and policy exceptions to the support queue. Refunds and changes need their own permissions and review rules.",
    "measure": "Correct order matching, accepted answers, review time, repeat contacts and customer feedback."
  },
  {
    "name": "Inbound sales and scheduling",
    "input": "An enquiry provides enough information for a next step.",
    "boundary": "Extract stated needs, suggest routing and check calendar availability. Ask for missing details without inventing a fit score. Keep negotiation, unusual commitments and sensitive account decisions with the owner.",
    "measure": "Time to useful action, routing acceptance, scheduling rework and qualified meetings."
  },
  {
    "name": "Invoice and purchase-order processing",
    "input": "An approved supplier sends an invoice or acknowledgement.",
    "boundary": "Extract line items and match them to the source purchase order. Flag price, quantity and date differences. Stage a correction for review; payment approval and changed bank details require independent controls.",
    "measure": "Field accuracy, match exceptions, correction time and duplicate documents."
  },
  {
    "name": "RFQ intake and quote preparation",
    "input": "A buyer sends a request for quotation and its supporting files.",
    "boundary": "Organise requirements and use approved pricing rules to draft a line-level estimate. Missing rates and contradictory notes become questions. The estimator approves the result before the system creates or sends a commercial offer.",
    "measure": "Line-level agreement, unresolved fields, estimator review time and valid quote turnaround."
  },
  {
    "name": "Research and monitoring",
    "input": "A scheduled check finds potentially relevant public information.",
    "boundary": "Retrieve authorised sources, extract candidate facts and link them to the source. Group repeated reports and keep uncertain findings in review. A relevant article is a research input, not proof of a customer or a business outcome.",
    "measure": "Source coverage, verified fields, duplicates, relevance and useful reviewed findings."
  }
];

export const post: BlogPost = {
  id: "135",
  slug: "ai-agents-business-operations-uk-smbs-2026",
  title: "AI Agents for UK SMB Operations: Workflows, Costs and Pilot Plan",
  excerpt: "A practical guide to choosing operations workflows, measuring savings, reviewing data access and running a controlled AI agent pilot for a UK small business.",
  category: "Emerging Tech",
  author: "Bhavesh Barot",
  date: "May 05, 2026",
  dateModified: "Oct 04, 2026",
  readTime: "12 min read",
  imageUrl: "/blog-images/ai-agents-business-operations-uk-smbs-2026-hero.webp",
  meta: {
  "title": "AI Agents for UK SMB Operations: Workflows, Costs and Pilot Plan",
  "description": "A practical guide to choosing operations workflows, measuring savings, reviewing data access and running a controlled AI agent pilot for a UK small business."
},
  keyTakeaways: [
  "Select a task with clear records, stable rules and a named review owner.",
  "Measure task completion, corrections and review effort before claiming savings.",
  "Use narrow permissions and approved sources; exact arithmetic belongs in deterministic software.",
  "Review current UK data protection requirements for the actual processing involved.",
  "Washington Law Group documents a deployed monitoring agent; GPSUK documents a commerce storefront."
],
  faqs: [
  {
    "q": "What are AI agents for business operations?",
    "a": "They are software workflows that interpret inputs, retrieve approved information and use tools to complete defined tasks. Examples include enquiry routing, invoice matching and research monitoring. Autonomy is a design choice for each action: a system can prepare work for review without having permission to send messages, change prices or approve payments."
  },
  {
    "q": "Which operation should we automate first?",
    "a": "Choose a task with repeat volume, stable rules, usable records and a manageable error cost. Check that the time spent reviewing the agent will be lower than the manual effort it replaces. A task with unclear policy or infrequent use may benefit more from a better process or a simple rule-based automation."
  },
  {
    "q": "How much can a UK small business save?",
    "a": "There is no universal saving percentage. Record your own task volume, handling time, review time, rework and operating costs. Compare similar work before and during a pilot. Time released increases capacity; it becomes cash savings only when actual spending changes. Do not assume all revenue or service improvements were caused by the agent."
  },
  {
    "q": "Will an agent work with our current systems?",
    "a": "Confirm API availability, permissions, data quality and custom fields during discovery. Start with read-only or sandbox access and prove the exact record lookups and allowed writes. An integration logo does not establish that a provider can operate every version or customised instance of that system."
  },
  {
    "q": "How should we handle UK data protection?",
    "a": "Identify the personal data needed for the task, the purpose of processing, who receives it and how long it is retained. Review lawful basis, vendor terms, transfers and any need for a data protection impact assessment with your responsible adviser. Check current ICO guidance; an AI label alone neither establishes compliance nor defines every obligation."
  },
  {
    "q": "Can we send the whole CRM to the model?",
    "a": "Limit access to the records and fields needed for the task. Separate retrieval permissions from write permissions, and avoid including unnecessary personal or confidential information in model prompts or logs. The ICO’s AI data minimisation guidance explains why potential future usefulness does not by itself justify collecting or retaining data."
  },
  {
    "q": "Should the agent approve refunds or payments?",
    "a": "Treat each financial action as a separate permission decision. Start with a draft for an authorised person to approve and test identity checks, duplicate requests and limits. Enforce the rules in application code. A prompt telling the model to be careful is not an adequate financial control."
  },
  {
    "q": "Do voice agents need different testing?",
    "a": "Yes. Test interruption, silence, accents, background noise, call transfer and identity checks using your actual service needs. A successful text conversation does not establish call quality. Define a reachable human path and verify contact and recording requirements before launch rather than assuming a vendor’s voice feature settles them."
  },
  {
    "q": "How long does implementation take?",
    "a": "The schedule depends on access, source quality, action risk and acceptance testing. FactoryJet uses a focused pilot of roughly two to four weeks and a production plan of roughly six to twelve weeks as planning ranges, subject to scope. Agree milestones for prototype, supervised pilot and production separately."
  },
  {
    "q": "What does a production AI agent case demonstrate?",
    "a": "It should describe what was deployed, the sources or systems used, who reviews output and who operates it. Washington Law Group’s published case documents a deployed monitoring agent with source checks and duplicate handling. It does not claim a measured increase in clients or revenue, and it does not prove unrelated support or finance workflows."
  },
  {
    "q": "Did GPSUK deploy the AI agent described in older claims?",
    "a": "The current published GPSUK case describes a Commerceflo trade storefront, account-based pricing and quote-to-order workflows. It does not substantiate an AI sales agent saving a particular number of hours. Evaluate that delivered commerce work on its own terms and require separate evidence for any proposed agent."
  },
  {
    "q": "What happens when a source or API is unavailable?",
    "a": "The agent should record the failed step and avoid presenting stale or missing information as current. Use bounded retries where safe and send unresolved work to a named owner. Test duplicate events and incomplete writes so recovery does not repeat a message, order or payment."
  },
  {
    "q": "How do we choose an agent development partner?",
    "a": "Give candidates the same workflow, representative inputs and expected outputs. Ask for a relevant deployed example, a tested failure path, clear ownership terms and a support plan. Compare complete implementation and operating costs. A prototype can be useful evidence of progress if it is labelled accurately."
  }
],
  content: (
    <>
      <p className="text-lg leading-relaxed mb-6">AI agents can help a UK small business prepare support replies, route enquiries, match documents and monitor information across its existing systems. The useful starting point is one task with clear records and a review owner. Measure that task before making a claim about savings or expanding the scope.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">What an operations agent actually needs</h2>
      <p className="mb-4">A model interprets information; the surrounding application controls access, retrieves records, performs calculations and executes allowed actions. Define those parts separately. For an order enquiry, the customer must be matched to the correct order before its details are retrieved. A plausible answer from a model does not establish that the correct record was used.</p>
      <p className="mb-6">Use stable rules where the task is already deterministic. A due-date reminder may only need a scheduled workflow. An agent becomes useful when inputs vary, such as unstructured supplier messages or several documents that need to be read together. Keep approvals and exact arithmetic in ordinary software rather than asking the model to supply missing facts.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Choose a first workflow by evidence and risk</h2>
      <p className="mb-4">Assess task volume, manual effort, rule clarity, data access, error consequences and review effort. High volume is only useful if the task can be completed correctly and exceptions have an owner. A low-volume task with costly mistakes can need more review than it saves. An unclear process should be documented before it is automated.</p>
      <div className="overflow-x-auto mb-8"><table className="min-w-full border border-gray-200 text-sm"><thead className="bg-gray-100"><tr><th scope="col" className="border p-3 text-left">Operation</th><th scope="col" className="border p-3 text-left">Starting input</th><th scope="col" className="border p-3 text-left">Measure in the pilot</th></tr></thead><tbody>{OPERATIONS.map(operation=><tr key={operation.name}><th scope="row" className="border p-3 text-left">{operation.name}</th><td className="border p-3">{operation.input}</td><td className="border p-3">{operation.measure}</td></tr>)}</tbody></table></div>
      {OPERATIONS.map(operation=><section key={operation.name} className="mb-6"><h3 className="text-xl font-bold mb-3">{operation.name}</h3><p className="mb-3">{operation.boundary}</p><p className="mb-3"><strong>Evaluation:</strong> {operation.measure}</p></section>)}
      <h2 className="text-2xl font-bold mt-8 mb-4">Build a baseline and count the review work</h2>
      <p className="mb-4">Sample completed tasks from normal operations and record their handling time, correction time and result. Keep the source inputs and expected output so the same examples can test the agent. Include incomplete records and difficult cases as well as routine ones. Decide how to count a valid completion before running the pilot.</p>
      <p className="mb-4">During the pilot, record agent output, human review, corrections and failures. Compare similar task types at similar volumes. Count all operating costs: software, model calls, storage, engineering support and staff oversight. If people use released time for other work, report capacity rather than treating their unchanged salary as a cash saving.</p>
      <p className="mb-6">For an estimate, compare the value of demonstrated capacity or actual avoided spending with the complete operating cost. Keep uncertain assumptions visible. Changes in seasonality, lead mix, stock availability or staff activity can affect results, so a simple before-and-after revenue difference is not enough to prove causation.</p>
      <div className="my-8 p-6 bg-orange-50 border border-orange-200 rounded-lg"><h2 className="text-xl font-bold mb-2">Scope one operations workflow</h2><p className="mb-4">Bring a representative input, an approved result and the names of the systems involved. We can map the action boundaries and acceptance checks.</p><a href="/services/ai-agent-development" className="text-[#B23E13] underline font-semibold">Explore FactoryJet AI agent development</a></div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Review data handling before connecting systems</h2>
      <p className="mb-4">Map the personal and confidential data the task needs, where it is processed and who can access it. Set limited permissions, an appropriate retention period and a documented process for revoking access. Review provider terms and any international transfers with the person responsible for data protection.</p>
      <p className="mb-4">The ICO’s <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-should-we-assess-security-and-data-minimisation-in-ai/" className="text-[#B23E13] underline">AI security and data minimisation guidance</a> explains that necessary data depends on the particular task. Sending the entire CRM because it might be useful later is not a sound default. Keep sensitive information out of model prompts and logs when the task does not need it.</p>
      <p className="mb-6">Check the ICO’s <a href="https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-what-does-it-mean-for-organisations/" className="text-[#B23E13] underline">current guidance on the Data (Use and Access) Act</a> when reviewing your deployment. Applicable obligations depend on the processing and sector. A customer-facing assistant, financial decision workflow and internal document sorter need different reviews.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">A deployed agent example: Washington Law Group</h2>
      <p className="mb-4">FactoryJet delivered Washington Law Group’s news-monitoring and research agent on a dedicated US server. It checks public reporting for serious road incidents, verifies extracted names against source text and groups repeated reports. A private console presents findings for the firm to review, with access controls and daily backups.</p>
      <p className="mb-6"><a href="/case-studies/washington-law-group-accident-detection-agent" className="text-[#B23E13] underline">Read the implementation case study</a>. It documents a US research workflow, not a UK cost-savings benchmark. For another operations project, test its own inputs, data handling and actions. The case does not establish performance for refunds, quote approval or employee decisions.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">A commerce foundation: GPSUK</h2>
      <p className="mb-4">The <a href="/case-studies/gpsuk-promotional-products" className="text-[#B23E13] underline">GPSUK case study</a> documents a Commerceflo trade storefront with account-based pricing and quote-to-order workflows. These delivered features give buyers and staff a shared commercial process. The case does not report a measured agent-driven time saving or revenue lift.</p>
      <p className="mb-6">That distinction helps when planning automation. Reliable catalogue, customer and quote data may be the necessary first investment. Add an agent only where interpreting variable inputs or coordinating actions adds value beyond the commerce workflow already available.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Move from draft mode to controlled production</h2>
      <p className="mb-4">Begin with read-only access and supervised outputs. Test source matching, missing fields, duplicate events, unavailable APIs and unauthorised instructions in an incoming document. Make sure the application enforces action permissions even if a model suggests an action outside scope. Define a way to pause writes while the team reviews outstanding work.</p>
      <p className="mb-4">Enable production actions only after the agreed acceptance checks pass. Name the person responsible for exceptions and document how they correct a record or recover a failed task. Keep representative tests for changes to prompts, policies, connectors and models. Operating support is part of delivery, not an assumption that the agent will keep working indefinitely.</p>
      <p className="mb-6">For the next decision, compare <a href="/blog/ai-agent-build-vs-buy-2026" className="text-[#B23E13] underline">building versus buying an agent</a>, review <a href="/blog/sales-automation-ai-uk-smbs-workflows" className="text-[#B23E13] underline">sales workflow recipes</a> and plan <a href="/services/ai-agent-monitoring" className="text-[#B23E13] underline">monitoring after launch</a>.</p>
    </>
  ),
};

export default post;
