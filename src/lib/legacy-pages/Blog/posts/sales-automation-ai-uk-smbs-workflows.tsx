import React from 'react';
import type { BlogPost } from '../data.types';

const WORKFLOWS = [
  {
    "title": "Lead qualification and routing",
    "trigger": "A new inbound enquiry reaches the CRM or shared inbox.",
    "action": "Extract the stated need, company, timing and existing conversation. Check it against written qualification rules, identify missing fields and prepare a routing recommendation. Preserve the prospect’s wording alongside the extracted fields so the owner can see what was actually said.",
    "review": "A salesperson reviews ambiguous fit, sensitive requests and unusually large opportunities. Missing budget is a missing field, not evidence that the prospect is unqualified. Keep the reason for every routing decision, and avoid silently dropping enquiries.",
    "test": "Send the same lead twice, submit incomplete details and include a customer already in the CRM. Verify that the workflow links or updates the correct record without creating duplicate outreach. Measure response time, owner acceptance and later qualification outcomes; a model-generated score is not a calibrated probability."
  },
  {
    "title": "Follow-up drafting and scheduling",
    "trigger": "A prospect has an agreed next step that has not yet happened.",
    "action": "Read the last conversation and draft a message about that next step. Check the current deal status, assigned owner and contact restrictions before scheduling it. Use approved facts from the conversation, with a link back to the source note for the reviewer.",
    "review": "The owner approves new message types and exceptions. Stop a sequence when a reply, booking, unsubscribe or account restriction arrives. Recheck those conditions immediately before sending rather than relying on the state when the draft was created.",
    "test": "Simulate a reply between scheduling and sending, a bounce, an opt-out and a reopened deal. Track accepted drafts, corrections, replies and complaints. Email opens alone are a weak basis for deciding that a buyer is ready for a sales conversation."
  },
  {
    "title": "Proposal and quote preparation",
    "trigger": "An approved opportunity has sufficient requirements to prepare a proposal.",
    "action": "Assemble the agreed scope, customer details and approved commercial terms. Use ordinary software for prices, discounts and arithmetic, with the rule version recorded. The agent can extract a requirement or suggest wording, but it should not invent a rate or change the terms.",
    "review": "An estimator or sales owner approves the scope and each price line before a document is sent. Conflicting requirements, absent rates and expired terms go to a review queue. Distinguish a draft estimate from an approved commercial offer in the interface.",
    "test": "Compare individual lines against approved examples, then compare totals. Include missing rates, changed discounts and contradictory notes. Measure preparation time, correction rate and approval time. A matching total can conceal wrong lines that cancel each other out."
  },
  {
    "title": "Meeting scheduling and preparation",
    "trigger": "A qualified prospect agrees to a meeting.",
    "action": "Check the correct calendar, time zone, working hours and meeting rules. Offer valid slots and reserve the selected one through the calendar system. Prepare a brief from the enquiry and approved account notes, with clear labels for anything still unknown.",
    "review": "A person handles special scheduling arrangements, sensitive account notes and meetings outside the usual rules. Recheck availability at booking time and confirm the result from the calendar API before telling the prospect a meeting is booked.",
    "test": "Try daylight-saving transitions, a slot taken during the conversation, a cancellation and a repeated booking request. Measure booking completion and scheduling rework. Compare attendance separately; the scheduling workflow alone does not establish why a prospect attends."
  },
  {
    "title": "Pipeline hygiene and deal alerts",
    "trigger": "A deal has an overdue next action, missing field or inconsistent stage.",
    "action": "Check CRM records against agreed stage definitions and produce a short list for the manager. Link each alert to its source record and explain the rule that triggered it. Summarise stalled work rather than automatically treating an old opportunity as lost.",
    "review": "The account owner confirms changes to stage, close date and forecast category. Keep official revenue reporting tied to the finance and CRM rules. A language model can explain a record but should not invent a probability from sparse notes.",
    "test": "Include deals with missing history, different sales cycles and duplicate activities. Track alert usefulness, false positives and action completion. If forecasting is added later, evaluate it on a held-out period against a simple baseline before describing it as accurate."
  },
  {
    "title": "Renewal reminders and account reviews",
    "trigger": "An approved contract or CRM record approaches its renewal date.",
    "action": "Create a reminder, retrieve the current terms and prepare an account review from approved service records. Route it to the account owner with the source document and relevant dates. A straightforward rules-based reminder may be enough without an agent.",
    "review": "The owner checks renewal rights, pricing and any unresolved service issues before contacting the customer. Free-form contract interpretation and proposed changes require appropriate review. Record a changed date or cancellation in the source system so old reminders stop.",
    "test": "Use an amended contract, a missing date and an account that has already renewed. Check that only one reminder is created and that the correct owner receives it. Measure timely reviews and missed renewals, separating retained revenue from revenue caused by automation."
  },
  {
    "title": "Channel coordination and activity logging",
    "trigger": "An account has a new inbound message or an approved outreach task.",
    "action": "Check the shared contact record and recent interactions across approved channels. Log the activity and draft the next action for the assigned owner. Use one account history to avoid sending an email while another colleague is already handling a live conversation.",
    "review": "A person approves new channels and exceptions. Enforce contact restrictions across the whole workflow, not just the email tool. Messages must identify the sender and use the business’s approved communication policy. More touchpoints are not automatically better.",
    "test": "Simulate two owners, an opt-out arriving through another channel and a failed send followed by a retry. Count duplicate messages, correct activity logs and owner review time. Keep a manual recovery path when a channel connector cannot confirm delivery."
  }
];

export const post: BlogPost = {
  id: "139",
  slug: "sales-automation-ai-uk-smbs-workflows",
  title: "Sales Automation AI for UK SMBs: 7 Workflows to Pilot",
  excerpt: "Seven AI sales workflows a UK small business can pilot, each with its trigger, what the agent may do, where a person signs off and how to test it. Includes sourced 2026 cost ranges.",
  category: "Emerging Tech",
  author: "Bhavesh Barot",
  date: "May 07, 2026",
  dateModified: "Oct 05, 2026",
  readTime: "12 min read",
  imageUrl: "/blog-images/sales-automation-ai-uk-smbs-workflows-hero.webp",
  meta: {
  "title": "Sales Automation AI for UK SMBs: 7 Workflows to Pilot",
  "description": "Seven AI sales workflows for UK SMBs: the trigger, what the agent may do, where a person signs off and how to test each one. With sourced 2026 cost ranges."
},
  keyTakeaways: [
  "Start with one sales bottleneck you can measure and give it a named owner.",
  "Prices, discounts and arithmetic belong in ordinary software with approved data. The agent drafts and a person approves.",
  "Test replies, opt-outs and duplicate events before you let anything send automatically.",
  "US AI automation agencies typically charge $5,000 to $15,000 to automate one workflow, according to Layer3 Labs. We found no UK price survey we could verify.",
  "A pilot on one workflow usually takes two to four weeks. Measure review time and corrections as well as speed."
],
  faqs: [
  {
    "q": "What is sales automation AI?",
    "a": "Sales automation AI is software that uses an AI model to read sales inputs such as enquiries and emails, look up the right CRM records and prepare or carry out the next step. Common jobs are sorting enquiries, drafting follow-ups and preparing proposals. It still needs fixed rules, contact restrictions and a person who owns the exceptions. A plain reminder does not need AI at all."
  },
  {
    "q": "Which sales workflow should a UK small business start with?",
    "a": "Start with inbound lead routing or follow-up drafts for your own team to review. Both repeat often, have clear inputs and cost little when they go wrong. They are easier to judge than outbound messages sent without review. Record how long the task takes today and how often it needs correcting, then run a supervised version on the same kind of work."
  },
  {
    "q": "Can an agent integrate with our CRM?",
    "a": "Yes, when the CRM has an API, and HubSpot, Salesforce and Pipedrive all do. What needs checking is your plan, permissions and custom fields. Discovery should confirm the exact reads and writes the workflow needs and test them in a sandbox. Keep your existing record IDs and ownership rules so the agent does not create a second, disconnected sales database."
  },
  {
    "q": "Should AI automatically send follow-up messages?",
    "a": "Begin with drafts for review. Enable sending only for approved message types after testing contact restrictions, replies, duplicate events and cancellation conditions. Check those conditions again at send time. Keep a record of the message and its source facts so a salesperson can investigate an error."
  },
  {
    "q": "Can AI prepare quotes without inventing prices?",
    "a": "Use approved price data and deterministic calculations for the commercial numbers. The model can extract requirements or draft explanatory text. Missing rates and conflicting instructions should stop approval and become questions for the estimator. Validate line items as well as totals, since wrong lines can offset each other."
  },
  {
    "q": "How much does sales automation AI cost for a UK small business?",
    "a": "We have not found a UK price survey we could verify, so the closest published reference is in US dollars. US AI automation agencies typically charge $5,000 to $15,000 to automate one workflow and $15,000 to $50,000 for several connected workflows, according to Layer3 Labs. Ongoing retainers run $3,000 to $20,000 a month in the same guide. Treat these as a rough guide for the UK. FactoryJet quotes a fixed price in writing after a short scoping call."
  },
  {
    "q": "How long does it take to set up a sales automation workflow?",
    "a": "A pilot on one narrow workflow, such as lead routing or follow-up drafts, usually takes two to four weeks. A production setup with permissions, logging, approvals and monitoring usually takes six to twelve weeks. Timelines stretch when the workflow touches several systems, or when CRM access arrives late."
  },
  {
    "q": "How do we measure sales automation ROI?",
    "a": "Measure four things first: handling time, review time, corrections and running cost. Then look at qualified leads, meetings and conversions for similar groups of leads before and after. Time handed back to the team is capacity, and it becomes a saving only when spending changes. Be careful crediting new revenue to the agent, because marketing mix, season and sales effort change at the same time."
  },
  {
    "q": "What UK rules matter for automated outreach?",
    "a": "Check current ICO guidance and your own processing arrangements before enabling outreach. Rules depend on the channel and recipient type; corporate subscribers, sole traders and some partnerships are treated differently. Personal data use still needs a lawful basis. Apply suppression and objection handling across every connected sending tool."
  },
  {
    "q": "Will AI forecasting reliably predict our revenue?",
    "a": "It needs validation on your own historical data. Sparse records, changing stages and different sales cycles can make forecasts misleading. Start with reliable pipeline hygiene, then evaluate a forecasting method on data it has not been fitted to. Compare it with a simple baseline and disclose uncertainty."
  },
  {
    "q": "What should we require before production launch?",
    "a": "Require correct CRM record matching, approved action limits, tested duplicates and retries, contact restriction checks and a usable exception queue. Agree acceptance criteria and an operating owner. A working demonstration is a different milestone from a supervised pilot or a production workflow with support."
  },
  {
    "q": "How does the sales team stay in control?",
    "a": "Give the team access to source records, drafts, approval history and exceptions. Define which actions remain human decisions, including negotiated terms and sensitive account communications. Train an owner to pause the workflow, correct a source record and recover failed work before extending automation coverage."
  }
],
  content: (
    <>
      <p className="text-lg leading-relaxed mb-6">Sales automation AI can help a UK small business move enquiries, follow-ups and proposals through its existing sales process. Start with one repeated task, keep commercial decisions with a person and measure the result. The seven workflows below are build recipes. Each one gives the trigger, what the agent may do, where a person signs off and how to test it.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Pick a bottleneck you can measure</h2>
      <p className="mb-4">Map one enquiry from arrival to its next useful action. Identify where someone retypes information, waits for a colleague or assembles the same material repeatedly. Name the system of record for contacts, prices and deal status. A reliable workflow needs those sources before it needs a model.</p>
      <p className="mb-6">Write the expected output and the stopping conditions. If a proposal cannot be prepared without an approved rate, the system should ask for that rate. If the next action depends on a negotiation, it should prepare context for the salesperson. This makes the pilot testable and preserves the decisions your team should own.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Seven workflows and their review gates</h2>
      <div className="overflow-x-auto mb-8"><table className="min-w-full border border-gray-200 text-sm"><thead className="bg-gray-100"><tr><th scope="col" className="border p-3 text-left">Workflow</th><th scope="col" className="border p-3 text-left">Starting event</th><th scope="col" className="border p-3 text-left">Acceptance check</th></tr></thead><tbody>{WORKFLOWS.map(workflow => <tr key={workflow.title}><th scope="row" className="border p-3 text-left">{workflow.title}</th><td className="border p-3">{workflow.trigger}</td><td className="border p-3">{workflow.test.split('. ')[0]}.</td></tr>)}</tbody></table></div>
      {WORKFLOWS.map((workflow,index) => <section key={workflow.title} className="mb-8"><h3 className="text-xl font-bold mb-3">{index+1}. {workflow.title}</h3><p className="mb-3"><strong>Trigger:</strong> {workflow.trigger}</p><p className="mb-3"><strong>Allowed action:</strong> {workflow.action}</p><p className="mb-3"><strong>Human review:</strong> {workflow.review}</p><p className="mb-3"><strong>Test and measure:</strong> {workflow.test}</p>{index===2 && <div className="my-6 p-6 bg-orange-50 border border-orange-200 rounded-lg"><p className="mb-3">Bring your current enquiry-to-quote process and a completed example. We can scope its integrations and review gates.</p><a href="/services/ai-sdr" className="text-[#B23E13] underline font-semibold">Explore AI sales agent services</a></div>}</section>)}
      <h2 className="text-2xl font-bold mt-8 mb-4">Check UK contact and data handling requirements</h2>
      <p className="mb-4">The ICO distinguishes corporate subscribers from sole traders and some partnerships in its <a href="https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/" className="text-[#B23E13] underline">business-to-business marketing guidance</a>. Personal data use still needs a lawful basis. Review the relevant channel and recipient rules with the person responsible for your marketing and data protection before enabling an agent to send messages.</p>
      <p className="mb-6">Keep a shared suppression record, a clear sender identity and an effective opt-out process. Test how an objection arriving in one system stops messages scheduled in another. The ICO notes that parts of its guidance are under review following the Data (Use and Access) Act, so check the current guidance at implementation rather than copying an old compliance checklist.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Get the quote data right first</h2>
      <p className="mb-4">For GPSUK, a UK promotional products supplier, we built a Commerceflo trade storefront with account-based pricing and quote-to-order workflows. The <a href="/case-studies/gpsuk-promotional-products" className="text-[#B23E13] underline">GPSUK case study</a> covers it. It is a commerce build, and none of the seven AI workflows in this guide run on it.</p>
      <p className="mb-6">We mention it because a sales agent can only draft a quote from catalogue, account and price records it can trust. If those records are not in order, fix them before you add an agent. Then compare a custom build with a <a href="/blog/ai-agent-build-vs-buy-2026" className="text-[#B23E13] underline">platform-first approach</a> before you commit.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">What it costs and how long it takes</h2>
      <p className="mb-4">We have not found a UK price survey we could verify, so this market reference is in US dollars. US AI automation agencies typically charge $5,000 to $15,000 to automate one workflow and $15,000 to $50,000 for several connected workflows, and ongoing retainers run $3,000 to $20,000 a month, according to <a href="https://www.layer3labs.io/roi/ai-automation-agency-cost" className="text-[#B23E13] underline" target="_blank" rel="noopener noreferrer">Layer3 Labs&apos; 2026 agency cost guide</a>. We read that page on September 30, 2026. None of these is a FactoryJet price.</p>
      <p className="mb-6">FactoryJet quotes a fixed price in writing after a short scoping call. A pilot on one narrow workflow usually takes two to four weeks, and a production setup with permissions, logging and monitoring usually takes six to twelve weeks.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Run a supervised pilot and review the full cost</h2>
      <p className="mb-4">Keep a baseline for the selected workflow, then run the agent in draft or shadow mode. Record accepted outputs, corrections, review minutes and failures. After the team accepts that behaviour, enable only the agreed actions. Keep broader CRM access or autonomous sending outside the pilot until their controls have been tested.</p>
      <p className="mb-4">Estimate operating cost from actual task volume, model use, connector subscriptions, hosting and support. Include the time your team spends reviewing work and fixing source records. Count a time saving as released capacity unless it changes actual spending. For a revenue comparison, keep channel mix and sales effort visible so the agent is not credited for every improvement.</p>
      <p className="mb-6">A useful handover includes the workflow rules, access list, exception owner and recovery procedure. Review new model or connector versions against saved examples before changing production. <a href="/services/ai-agent-monitoring" className="text-[#B23E13] underline">Ongoing monitoring and support</a> should be part of the decision to launch.</p>
    </>
  ),
};

export default post;
