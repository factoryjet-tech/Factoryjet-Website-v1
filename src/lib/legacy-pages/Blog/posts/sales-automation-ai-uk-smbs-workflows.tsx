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
  excerpt: "Seven practical AI sales workflows for UK SMBs, with CRM actions, human review gates, acceptance checks and a method to measure cost and results.",
  category: "Emerging Tech",
  author: "Bhavesh Barot",
  date: "May 07, 2026",
  dateModified: "Oct 04, 2026",
  readTime: "12 min read",
  imageUrl: "/blog-images/sales-automation-ai-uk-smbs-workflows-hero.webp",
  meta: {
  "title": "Sales Automation AI for UK SMBs: 7 Workflows to Pilot",
  "description": "Seven practical AI sales workflows for UK SMBs, with CRM actions, human review gates, acceptance checks and a method to measure cost and results."
},
  keyTakeaways: [
  "Start with one measurable sales bottleneck and a named owner.",
  "Use approved data and deterministic calculations for prices and commercial terms.",
  "Test replies, opt-outs and duplicate events before enabling automatic sending.",
  "Measure review time and corrections alongside speed; attribute revenue cautiously.",
  "The GPSUK case documents commerce functionality, not outcomes from these AI workflow recipes."
],
  faqs: [
  {
    "q": "What is sales automation AI?",
    "a": "Sales automation AI uses a model to interpret sales inputs, retrieve relevant records and prepare or perform allowed actions. Useful tasks include enquiry triage, follow-up drafting and proposal preparation. The workflow still needs deterministic rules, contact restrictions and a person responsible for exceptions. Ordinary reminders do not necessarily need AI."
  },
  {
    "q": "Which sales workflow should a UK small business start with?",
    "a": "Choose a repeated task with clear inputs, an agreed result and a manageable error cost. Inbound routing or internal follow-up drafts can be easier to evaluate than autonomous outbound messaging. Record the current handling time and correction rate, then test a supervised version against the same kind of work."
  },
  {
    "q": "Can an agent integrate with our CRM?",
    "a": "That depends on your CRM version, API access, permissions and custom fields. Discovery should confirm the exact reads and writes the workflow needs and test them in a sandbox. Keep existing record identifiers and ownership rules so the agent does not create another disconnected sales database."
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
    "q": "How much does sales automation cost?",
    "a": "Ask for an estimate covering discovery, integration, testing, training, model usage, software, hosting and support. Volume, connector access and action permissions affect the scope. FactoryJet quotes after discovery; this article does not establish a universal implementation price or a guaranteed payback period."
  },
  {
    "q": "How do we measure sales automation ROI?",
    "a": "Measure handling time, review time, corrections and operating cost first. Then examine qualification, meeting and conversion outcomes using comparable cohorts. Time released is capacity unless it changes actual spending. Attribute additional revenue cautiously: marketing mix, seasonality and sales activity may change alongside the automation."
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
    "q": "Did GPSUK achieve the revenue results from these seven workflows?",
    "a": "The published GPSUK case documents a Commerceflo trade storefront, account-based pricing and quote-to-order workflows. It does not report revenue attributable to these AI sales recipes. Use that case to assess the delivered commerce foundation, and evaluate any proposed agent separately."
  },
  {
    "q": "How does the sales team stay in control?",
    "a": "Give the team access to source records, drafts, approval history and exceptions. Define which actions remain human decisions, including negotiated terms and sensitive account communications. Train an owner to pause the workflow, correct a source record and recover failed work before extending automation coverage."
  }
],
  content: (
    <>
      <p className="text-lg leading-relaxed mb-6">Sales automation AI can help a UK small business move enquiries, follow-ups and proposals through its existing sales process. Start with one repeated task, keep commercial decisions under review and measure the result. The seven workflows below are implementation recipes, not reported revenue results.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Pick a bottleneck you can measure</h2>
      <p className="mb-4">Map one enquiry from arrival to its next useful action. Identify where someone retypes information, waits for a colleague or assembles the same material repeatedly. Name the system of record for contacts, prices and deal status. A reliable workflow needs those sources before it needs a model.</p>
      <p className="mb-6">Write the expected output and the stopping conditions. If a proposal cannot be prepared without an approved rate, the system should ask for that rate. If the next action depends on a negotiation, it should prepare context for the salesperson. This makes the pilot testable and preserves the decisions your team should own.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Seven workflows and their review gates</h2>
      <div className="overflow-x-auto mb-8"><table className="min-w-full border border-gray-200 text-sm"><thead className="bg-gray-100"><tr><th scope="col" className="border p-3 text-left">Workflow</th><th scope="col" className="border p-3 text-left">Starting event</th><th scope="col" className="border p-3 text-left">Acceptance check</th></tr></thead><tbody>{WORKFLOWS.map(workflow => <tr key={workflow.title}><th scope="row" className="border p-3 text-left">{workflow.title}</th><td className="border p-3">{workflow.trigger}</td><td className="border p-3">{workflow.test.split('. ')[0]}.</td></tr>)}</tbody></table></div>
      {WORKFLOWS.map((workflow,index) => <section key={workflow.title} className="mb-8"><h3 className="text-xl font-bold mb-3">{index+1}. {workflow.title}</h3><p className="mb-3"><strong>Trigger:</strong> {workflow.trigger}</p><p className="mb-3"><strong>Allowed action:</strong> {workflow.action}</p><p className="mb-3"><strong>Human review:</strong> {workflow.review}</p><p className="mb-3"><strong>Test and measure:</strong> {workflow.test}</p>{index===2 && <div className="my-6 p-6 bg-orange-50 border border-orange-200 rounded-lg"><p className="mb-3">Bring your current enquiry-to-quote process and a completed example. We can scope its integrations and review gates.</p><a href="/services/ai-sdr" className="text-[#B23E13] underline font-semibold">Explore AI sales agent services</a></div>}</section>)}
      <h2 className="text-2xl font-bold mt-8 mb-4">Check UK contact and data handling requirements</h2>
      <p className="mb-4">The ICO distinguishes corporate subscribers from sole traders and some partnerships in its <a href="https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/" className="text-[#B23E13] underline">business-to-business marketing guidance</a>. Personal data use still needs a lawful basis. Review the relevant channel and recipient rules with the person responsible for your marketing and data protection before enabling an agent to send messages.</p>
      <p className="mb-6">Keep a shared suppression record, a clear sender identity and an effective opt-out process. Test how an objection arriving in one system stops messages scheduled in another. The ICO notes that parts of its guidance are under review following the Data (Use and Access) Act, so check the current guidance at implementation rather than copying an old compliance checklist.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Separate delivered commerce work from proposed AI workflows</h2>
      <p className="mb-4">FactoryJet’s <a href="/case-studies/gpsuk-promotional-products" className="text-[#B23E13] underline">GPSUK case study</a> describes a Commerceflo trade storefront with account-based pricing and quote-to-order workflows. That is a delivered commerce implementation. It does not establish that the seven recipes in this guide were deployed there or produced a measured revenue increase.</p>
      <p className="mb-6">Reliable catalogue, account and quote records are useful foundations for future automation. When you evaluate an agent, ask for separate evidence of the agent’s own actions, deployment stage and results. Compare an implementation with a <a href="/blog/ai-agent-build-vs-buy-2026" className="text-[#B23E13] underline">platform-first approach</a> before committing to custom work.</p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Run a supervised pilot and review the full cost</h2>
      <p className="mb-4">Keep a baseline for the selected workflow, then run the agent in draft or shadow mode. Record accepted outputs, corrections, review minutes and failures. After the team accepts that behaviour, enable only the agreed actions. Keep broader CRM access or autonomous sending outside the pilot until their controls have been tested.</p>
      <p className="mb-4">Estimate operating cost from actual task volume, model use, connector subscriptions, hosting and support. Include the time your team spends reviewing work and fixing source records. Count a time saving as released capacity unless it changes actual spending. For a revenue comparison, keep channel mix and sales effort visible so the agent is not credited for every improvement.</p>
      <p className="mb-6">A useful handover includes the workflow rules, access list, exception owner and recovery procedure. Review new model or connector versions against saved examples before changing production. <a href="/services/ai-agent-monitoring" className="text-[#B23E13] underline">Ongoing monitoring and support</a> should be part of the decision to launch.</p>
    </>
  ),
};

export default post;
