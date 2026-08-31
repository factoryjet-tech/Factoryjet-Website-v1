'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Section {
  id: string;
  number: string;
  title: string;
  summary?: string;
  content?: string;
  subsections?: Array<{
    title: string;
    content?: string;
    list?: string[];
    note?: string;
  }>;
  list?: string[];
  note?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export default function RefundPolicy() {
  const [activeSection, setActiveSection] = useState<string>('cancellation-framework');

  const policySections: Section[] = [
    {
      id: 'preamble',
      number: '01',
      title: 'Preamble & Legal Framework',
      content: `This Cancellation and Refund Policy ("Policy") forms a legally binding agreement between you (the "Client", "Customer", or "You") and FactoryJet Private Limited ("FactoryJet", "Company", "We", "Our", or "Us"), a private limited company incorporated under the Indian Companies Act, 2013, bearing Corporate Identification Number (CIN) U74999KA2020PTC140850 and GSTIN 29AAECF3218J1ZK, having its registered office at 70/1, Willow Herbs, Tigalarpalya, Kundalahalli, Bengaluru, Karnataka - 560037, India.`,
      note: 'This Policy is formulated in strict compliance with the Indian Contract Act, 1872; the Information Technology Act, 2000 (and applicable Intermediary Guidelines); the Consumer Protection Act, 2019 (including the Consumer Protection [E-Commerce] Rules, 2020); the Central Goods and Services Tax (CGST) Act, 2017; and applicable international commercial standards for B2B Information Technology and software consulting services.',
    },
    {
      id: 'scope-of-services',
      number: '02',
      title: 'Scope of Services & Custom Deliverables',
      content: `FactoryJet specializes in bespoke technology engineering, digital commerce architecture, and AI-driven growth systems. Services governed by this Policy encompass:`,
      list: [
        'Custom web design, UI/UX architecture, and headless Next.js application development',
        'Enterprise e-commerce engineering across Shopify, Shopify Plus, WooCommerce, Magento, and BigCommerce',
        'B2B commerce portals, marketplace integrations, and omnichannel architecture',
        'Autonomous AI agent development, workflow automations, and system integrations (n8n, Python, custom APIs)',
        'Search Engine Optimization (SEO), Generative Engine Optimization (GEO), and technical visibility programs',
        'Annual Maintenance Contracts (AMC), server infrastructure management, and technical support retainers',
        'Software-as-a-Service (SaaS) subscriptions, proprietary software tools, and digital platforms',
      ],
      note: 'Due to the customized, intellectual-property-intensive, and resource-dedicated nature of professional technology services, resource allocation and infrastructure provisioning commence immediately upon contract execution and advance invoice settlement.',
    },
    {
      id: 'cancellation-framework',
      number: '03',
      title: 'Cancellation Terms by Service Category',
      content: 'Cancellation rules and required notice periods differ based on the engagement model, as detailed below:',
      table: {
        headers: ['Service Category', 'Notice Period', 'Effective Cancellation', 'Financial Obligation'],
        rows: [
          [
            'SaaS & Monthly Subscriptions',
            'Anytime before next cycle',
            'Upcoming billing month',
            'Usage consumed or remainder of current active monthly cycle.',
          ],
          [
            'Annual Maintenance Contracts (AMC)',
            '30 Days written notice',
            'End of 30-day notice period',
            'Pro-rata billing settled for all maintenance coverage through day 30.',
          ],
          [
            'Custom Design & Development Works',
            '90 Days written notice',
            'End of 90-day notice period',
            'Full payment for all design, engineering, and milestones completed or in progress.',
          ],
          [
            'Hourly / Time & Materials (T&M)',
            '14 Days written notice',
            'Upon notice expiration',
            'All logged engineering hours and approved expenses up to the termination date.',
          ],
        ],
      },
      subsections: [
        {
          title: 'A. Subscriptions, SaaS Plans & Monthly Retainers',
          content: 'Clients may cancel recurring monthly subscriptions, software access, or ongoing retainer services at any time via written notice to connect@factoryjet.com or through their designated client portal.',
          list: [
            'Cancellation becomes effective starting from the upcoming billing month.',
            'The client will be charged for the usage consumed or the remaining period of the current active monthly billing cycle.',
            'No mid-month prorated refunds are issued for already provisioned cloud servers, reserved developer bandwidth, or consumed API quotas during the active cycle.',
            'Service access continues uninterrupted until the conclusion of the paid monthly billing cycle.',
          ],
        },
        {
          title: 'B. Annual Maintenance Contracts (AMC)',
          content: 'Clients subscribed to Annual Maintenance Contracts (AMC) or dedicated technical support agreements may terminate the agreement subject to the following statutory terms:',
          list: [
            'Cancellation requires a mandatory 30 days prior written notice submitted via formal email to connect@factoryjet.com.',
            'FactoryJet will continue delivering maintenance, security patching, uptime monitoring, and SLA coverage throughout the 30-day notice period.',
            'The client is billed pro-rata for all maintenance services and software updates delivered up to the final day of the 30-day notice period.',
            'Any unused portion of prepaid annual fees extending beyond the 30-day notice period, if agreed in writing in the Statement of Work, will be credited or refunded after deducting applicable administrative and setup fees.',
          ],
        },
        {
          title: 'C. Custom Design, Development & Implementation Works',
          content: 'For all bespoke design projects, web development sprints, Shopify/e-commerce store builds, ERP/SaaS implementations, and AI agent engineering:',
          list: [
            'Cancellation requires a mandatory 90 days prior written notice submitted in writing to connect@factoryjet.com.',
            'The 90-day notice window ensures orderly code documentation, repository handoff, environment decommissioning, and resource reallocation.',
            'The customer is strictly and legally obligated to pay for all design assets, wireframes, architectural blueprints, code modules, database structures, and sprint milestones completed or in progress up to the conclusion of the 90-day notice window.',
            'All advance payments and milestone disbursements allocated to started or delivered phases are non-refundable under Section 74 of the Indian Contract Act, 1872.',
            'Upon full financial settlement of all pending invoices and accrued expenses, FactoryJet will deliver the completed source code and digital assets up to the approved milestone.',
          ],
        },
      ],
    },
    {
      id: 'advance-payments',
      number: '04',
      title: 'Advance Payments & Milestone Disbursements',
      content: 'FactoryJet operates on a structured milestone and sprint delivery framework. Unless explicitly agreed otherwise in a written Statement of Work (SoW):',
      list: [
        'All project kickoff deposits and milestone disbursements represent advance commitments for dedicated engineering capacity, software licenses, and cloud staging infrastructure.',
        'Engineering and architectural work begins only upon verified receipt of the stipulated advance payment.',
        'Advance payments are non-refundable once project kickoff, sprint planning, or UI/UX prototyping has commenced.',
        'For milestone-based contracts, payment approval for any completed milestone constitutes final client acceptance of that milestone deliverable.',
      ],
    },
    {
      id: 'non-refundable-expenses',
      number: '05',
      title: 'Non-Refundable Third-Party Costs & Disbursements',
      content: 'In delivering end-to-end technology solutions, FactoryJet frequently procures specialized third-party licenses, cloud services, and digital assets on the client\'s behalf. The following expenses are strictly non-refundable under all circumstances:',
      list: [
        'Domain name registrations, transfers, DNS management fees, and premium SSL certificates',
        'Third-party cloud infrastructure and server hosting fees (Cloudflare, AWS, Google Cloud, Vercel, DigitalOcean)',
        'Commercial theme licenses, software plugins, extensions, and SaaS application subscriptions',
        'Third-party AI model usage tokens and API fees (OpenAI, Anthropic, Google Gemini, Perplexity, Pinecone)',
        'Direct advertising expenditures paid to third-party ad networks (Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads)',
        'Payment gateway onboarding, verification, or merchant processing charges',
      ],
      note: 'FactoryJet acts solely as an implementation agent for third-party tools. Third-party vendor terms, warranties, and refund policies apply exclusively to their respective services.',
    },
    {
      id: 'refund-eligibility',
      number: '06',
      title: 'Refund Eligibility & Exceptional Circumstances',
      content: 'Refunds are granted strictly under exceptional circumstances evaluated on a case-by-case basis by FactoryJet management:',
      subsections: [
        {
          title: 'Eligible Circumstances',
          list: [
            'Mutual written agreement for project termination executed before any design, development, or discovery work has commenced. In such instances, payments may be refunded after deducting a 10% administrative and payment gateway processing fee.',
            'Accidental duplicate transaction or verified billing error caused by technical gateway failure.',
            'Inability of FactoryJet to initiate agreed project services within 30 days of the contractual start date due entirely to internal operational constraints.',
          ],
        },
        {
          title: 'Ineligible Circumstances (No Refunds)',
          list: [
            'Client change of mind, internal business restructuring, market pivots, or budget reallocation after project kickoff.',
            'Delays or failure to launch caused by client inaction, including delayed feedback, failure to provide content/assets, or lack of third-party API credentials.',
            'Subjective dissatisfaction with aesthetic choices where deliverables strictly comply with the approved design system, wireframes, and project brief.',
            'Unrealistic commercial outcome expectations, including third-party search engine algorithm changes, organic traffic variations, or commercial sales volumes.',
            'Services rendered under custom development agreements during the 90-day notice period or AMC agreements during the 30-day notice period.',
          ],
        },
      ],
    },
    {
      id: 'refund-processing',
      number: '07',
      title: 'Refund Processing Timelines & Mechanism',
      content: 'Where a refund is approved in writing by FactoryJet management:',
      list: [
        'Refunds will be processed within 7 to 10 working days from the date of formal written approval.',
        'Refunds will be credited exclusively to the original payment source (bank account, debit/credit card, UPI, or international wire transfer) used during the transaction.',
        'For international remittances, bank intermediary charges, currency conversion differences, and wire fees will be deducted from the net refundable sum.',
        'Under Indian Goods and Services Tax (GST) regulations, an official Credit Note will be generated and issued in compliance with Rule 54 of the CGST Rules, 2017, adjusting the corresponding tax liability.',
      ],
      note: 'Processing timelines of beneficiary banking institutions or card issuers are beyond FactoryJet\'s direct control.',
    },
    {
      id: 'chargebacks',
      number: '08',
      title: 'Chargebacks, Payment Disputes & Suspension of Services',
      content: 'FactoryJet is committed to transparent dispute resolution. Clients agree to contact FactoryJet management directly at connect@factoryjet.com to resolve any billing discrepancy before initiating a chargeback or payment reversal with their bank or credit card company.',
      subsections: [
        {
          title: 'Consequences of Unauthorized Chargebacks',
          list: [
            'Immediate revocation and suspension of all active cloud hosting, staging environments, API tokens, and software licenses.',
            'Withholding of all source code repositories, databases, and intellectual property transfers.',
            'Submission of complete electronic logs, time-stamped project communications, signed Statements of Work, and delivery receipts to financial institutions and merchant gateways (Razorpay, Stripe) as legal evidence of service fulfillment.',
            'Assessment of a $250 (or INR 20,000) administrative dispute fee plus legal recovery expenses incurred in defending unjustified chargeback claims.',
          ],
        },
      ],
    },
    {
      id: 'termination-by-company',
      number: '09',
      title: 'Termination by FactoryJet',
      content: 'FactoryJet reserves the right to suspend or terminate services immediately upon written notice under the following circumstances:',
      list: [
        'Failure by the client to settle undisputed milestone invoices within 14 days of the due date.',
        'Material breach of FactoryJet\'s Terms and Conditions, Privacy Policy, or intellectual property rights.',
        'Abusive, threatening, defamatory, or unlawful conduct directed at FactoryJet personnel or contractors.',
        'Client requests that require violating applicable laws, data protection regulations, or third-party platform policies.',
      ],
      note: 'In the event of termination for cause, all accrued fees for completed milestones and logged engineering hours remain immediately payable, and advance deposits are non-refundable.',
    },
    {
      id: 'ip-rights',
      number: '10',
      title: 'Intellectual Property Ownership on Cancellation',
      content: 'Rights to deliverables upon cancellation are governed by the following intellectual property principles:',
      list: [
        'Client Content: All raw text, trademarks, proprietary datasets, and materials provided by the client remain the client\'s exclusive property.',
        'Custom Deliverables: Ownership of custom code, bespoke graphic designs, and unique software workflows transfers to the client ONLY upon 100% full settlement of all pending invoices and cancellation notice dues.',
        'FactoryJet Pre-Existing IP: Frameworks, proprietary component libraries, boilerplate code, and AI workflow templates developed independently by FactoryJet remain Company IP, with the client receiving a non-exclusive, perpetual license for deployed instances upon full payment.',
      ],
    },
    {
      id: 'governing-law',
      number: '11',
      title: 'Governing Law & Dispute Resolution',
      content: `This Policy and any contractual dispute arising out of or in connection with it shall be governed by and construed in accordance with the laws of the Republic of India, without regard to its conflict of law principles.`,
      subsections: [
        {
          title: 'Amicable Resolution & Arbitration',
          content: 'In the event of any controversy or claim, the parties agree to first attempt resolution through good-faith executive negotiations within 30 days. If unresolved, disputes shall be referred to and final resolved by a sole arbitrator appointed mutually under the provisions of the Indian Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be Bengaluru, Karnataka, India, and proceedings shall be conducted in the English language.',
        },
        {
          title: 'Judicial Jurisdiction',
          content: 'Subject to the arbitration clause, the competent courts located in Bengaluru, Karnataka, India (or Ahmedabad, Gujarat, India as designated in specific Statements of Work) shall have exclusive jurisdiction over all matters arising hereunder.',
        },
      ],
    },
    {
      id: 'modifications',
      number: '12',
      title: 'Policy Modifications & Updates',
      content: `FactoryJet reserves the right to modify, amend, or update this Policy at any time to reflect statutory changes, technological advancements, or operational updates. All revisions will be published on this URL with an updated "Last Updated" timestamp. Continued engagement of FactoryJet services or payment of invoices following any amendment constitutes acceptance of the updated Policy.`,
    },
    {
      id: 'grievance-officer',
      number: '13',
      title: 'Statutory Grievance Redressal Officer',
      content: `In accordance with the Information Technology Act, 2000 and the Consumer Protection (E-Commerce) Rules, 2020, the contact details of the designated Grievance Redressal Officer for FactoryJet Private Limited are provided below:`,
      subsections: [
        {
          title: 'Grievance Officer Contact Details',
          content: `Name: Grievance Redressal Officer
Company: FactoryJet Private Limited
CIN: U74999KA2020PTC140850
Address: 70/1, Willow Herbs, Tigalarpalya, Kundalahalli, Bengaluru, Karnataka - 560037, India
Email: connect@factoryjet.com
Phone: +91 96999 77699
Working Hours: Monday to Friday, 10:00 AM - 6:00 PM IST
Response SLA: Acknowledgment within 48 hours; resolution within 15 business days.`,
        },
      ],
    },
    {
      id: 'contact-channels',
      number: '14',
      title: 'Official Communications & Support',
      content: 'All formal cancellation notices, refund requests, and legal communications must be transmitted in writing via verifiable electronic mail or registered postal correspondence to:',
      subsections: [
        {
          title: 'FactoryJet Private Limited',
          content: `Email: connect@factoryjet.com
Support Phone: +91 96999 77699
Founder Direct: bhavesh@factoryjet.com
Corporate Address: 70/1, Willow Herbs, Tigalarpalya, Kundalahalli, Bengaluru, Karnataka - 560037, India
Website: https://factoryjet.com`,
        },
      ],
    },
  ];

  return (
    <div className="bg-[#FAFAF7] text-[#0F0F12] min-h-screen">
      {/* Hero Header */}
      <section className="border-b border-[#E5E5DF] bg-white pt-24 pb-14 md:pt-28 md:pb-18">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-[#F05A28]/10 text-[#B23E13] text-xs font-bold uppercase rounded-full tracking-wider">
              Legal & Commercial Terms
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Last Updated: August 31, 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 tracking-tight mb-4">
            Cancellation & Refund Policy
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
            Transparent, legally binding commercial terms governing subscriptions, annual maintenance contracts (AMC), custom software development, and AI engineering services for FactoryJet Private Limited.
          </p>
        </div>
      </section>

      {/* Summary Highlight Cards */}
      <section className="py-8 bg-[#FAFAF7] border-b border-[#E5E5DF]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: Subscriptions */}
            <div className="bg-white rounded-xl p-5 border border-[#E5E5DF] shadow-sm hover:border-[#F05A28]/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#F05A28]/10 flex items-center justify-center text-[#B23E13] font-bold text-xs">
                  SaaS
                </div>
                <h2 className="font-display font-bold text-gray-900 text-base">
                  Subscriptions & Retainers
                </h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Cancel anytime. Cancellation takes effect from the <strong>upcoming billing month</strong>. Billed for usage consumed or period remaining in the active cycle.
              </p>
              <span className="inline-block text-xs font-semibold text-[#B23E13] bg-[#F05A28]/5 px-2.5 py-1 rounded">
                Effective Next Billing Month
              </span>
            </div>

            {/* Card 2: AMC */}
            <div className="bg-white rounded-xl p-5 border border-[#E5E5DF] shadow-sm hover:border-[#F05A28]/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#F05A28]/10 flex items-center justify-center text-[#B23E13] font-bold text-xs">
                  AMC
                </div>
                <h2 className="font-display font-bold text-gray-900 text-base">
                  Annual Maintenance (AMC)
                </h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Requires <strong>30 days written notice</strong>. Support and pro-rata billing continue through day 30 to ensure zero downtime.
              </p>
              <span className="inline-block text-xs font-semibold text-[#B23E13] bg-[#F05A28]/5 px-2.5 py-1 rounded">
                30 Days Written Notice
              </span>
            </div>

            {/* Card 3: Custom Builds */}
            <div className="bg-white rounded-xl p-5 border border-[#E5E5DF] shadow-sm hover:border-[#F05A28]/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#F05A28]/10 flex items-center justify-center text-[#B23E13] font-bold text-xs">
                  DEV
                </div>
                <h2 className="font-display font-bold text-gray-900 text-base">
                  Design & Custom Builds
                </h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Requires <strong>90 days written notice</strong>. Customer pays for all work, code, and milestones completed or in progress up to the end of the notice period.
              </p>
              <span className="inline-block text-xs font-semibold text-[#B23E13] bg-[#F05A28]/5 px-2.5 py-1 rounded">
                90 Days Notice + Work Completed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block sticky top-28 bg-white rounded-xl p-5 border border-[#E5E5DF] shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 px-2">
                Policy Sections
              </p>
              <nav className="space-y-1">
                {policySections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      activeSection === section.id
                        ? 'bg-[#F05A28]/10 text-[#B23E13] font-bold'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <span className="truncate">{section.title}</span>
                    <span className="text-[10px] text-gray-400 ml-2">{section.number}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-2">Need billing clarification?</p>
                <a
                  href="mailto:connect@factoryjet.com"
                  className="block text-xs font-bold text-[#F05A28] hover:text-[#C94818] transition-colors"
                >
                  connect@factoryjet.com →
                </a>
              </div>
            </aside>

            {/* Policy Clauses Body */}
            <div className="space-y-10">
              {policySections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E5DF] shadow-sm scroll-mt-28"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-bold text-[#F05A28] bg-[#F05A28]/10 px-2.5 py-1 rounded">
                      SECTION {section.number}
                    </span>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>

                  {section.content && (
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4 whitespace-pre-line">
                      {section.content}
                    </p>
                  )}

                  {section.table && (
                    <div className="overflow-x-auto my-5">
                      <table className="w-full border-collapse text-xs md:text-sm">
                        <thead>
                          <tr className="bg-gray-900 text-white">
                            {section.table.headers.map((h, i) => (
                              <th key={i} className="p-3 text-left border border-gray-700 font-semibold">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="text-gray-800">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF7]'}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 border border-[#E5E5DF] align-top">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {section.list && (
                    <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700 text-sm md:text-base">
                      {section.list.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && (
                    <div className="space-y-5 my-5">
                      {section.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className="bg-[#FAFAF7] rounded-xl p-5 border border-[#E5E5DF]">
                          <h3 className="font-display font-bold text-gray-900 text-sm md:text-base mb-2">
                            {sub.title}
                          </h3>
                          {sub.content && (
                            <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3 whitespace-pre-line">
                              {sub.content}
                            </p>
                          )}
                          {sub.list && (
                            <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-xs md:text-sm">
                              {sub.list.map((item, i) => (
                                <li key={i} className="leading-relaxed">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.note && (
                    <div className="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-lg mt-4 text-xs md:text-sm text-gray-800 leading-relaxed">
                      <strong>Statutory Note:</strong> {section.note}
                    </div>
                  )}
                </div>
              ))}

              {/* Related Legal Links Card */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="max-w-2xl">
                  <span className="inline-block px-3 py-1 bg-[#F05A28] text-white text-xs font-bold uppercase rounded-full tracking-wider mb-3">
                    Legal & Compliance Center
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                    Review Complete FactoryJet Legal Policies
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Our Terms and Conditions, Privacy Policy, and Service Framework work in unison to protect client intellectual property, data security, and project governance.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/terms"
                      className="inline-flex items-center justify-center bg-[#F05A28] hover:bg-[#C94818] text-white font-semibold text-xs md:text-sm px-5 py-2.5 rounded-lg transition-colors"
                    >
                      Terms & Conditions
                    </Link>
                    <Link
                      href="/privacy"
                      className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs md:text-sm px-5 py-2.5 rounded-lg transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <a
                      href="mailto:connect@factoryjet.com"
                      className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs md:text-sm px-5 py-2.5 rounded-lg transition-colors"
                    >
                      Contact Legal Team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}