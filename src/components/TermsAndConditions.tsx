'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const sections = [
    {
      id: 1,
      number: '01',
      title: 'Introduction & Acceptance of Terms',
      content: `These Terms & Conditions ("Terms") govern your access to and use of the website, services, and online payment facilities provided by FactoryJet Private Limited ("FactoryJet", "we", "our", or "us"), a company incorporated under the Indian Companies Act, 2013 (CIN: U74999KA2020PTC140850, GSTIN: 29AAECF3218J1ZK). By accessing our website, engaging our services, submitting inquiries, or making payments online, you agree to be legally bound by these Terms, our Privacy Policy, and our Cancellation and Refund Policy. If you do not agree with these Terms, please do not use our services or make any payments.`,
    },
    {
      id: 2,
      number: '02',
      title: 'Company Information',
      company: {
        name: 'FactoryJet Private Limited',
        cin: 'U74999KA2020PTC140850',
        gstin: '29AAECF3218J1ZK',
        address: '70/1, Willow Herbs, Tigalarpalya, Kundalahalli, Bengaluru, Karnataka - 560037, India',
        email: 'connect@factoryjet.com',
        phone: '+91 96999 77699',
        hours: 'Monday to Friday, 10:00 AM - 6:00 PM IST',
      },
    },
    {
      id: 3,
      number: '03',
      title: 'Scope of Services',
      content: 'FactoryJet provides professional digital services including but not limited to:',
      list: [
        'Website design, UI/UX, and Next.js frontend engineering',
        'E-commerce store design and development (Shopify, WooCommerce, Magento, BigCommerce)',
        'B2B and B2C commerce architectures and systems integration',
        'Digital marketing, technical SEO, Generative Engine Optimization (GEO), and paid advertising',
        'AI agent engineering, workflow automation (n8n, Python), and custom API solutions',
        'Annual Maintenance Contracts (AMC) and ongoing technical infrastructure retainers',
      ],
      note: 'The exact scope, deliverables, timelines, and pricing are defined in written proposals, Statements of Work (SoW), project agreements, or invoices. Only written commitments explicitly executed by FactoryJet shall be legally binding.',
    },
    {
      id: 4,
      number: '04',
      title: 'User & Client Responsibilities',
      content: 'You agree to:',
      list: [
        'Provide accurate, authentic, and complete information necessary for project kickoff and execution',
        'Share required content, design feedback, and formal milestone approvals in a timely manner',
        'Ensure you hold lawful rights, licenses, or authorizations to all content, trademarks, or datasets provided',
        'Designate a primary decision-maker to prevent communication bottlenecks and delivery delays',
      ],
      note: 'FactoryJet shall not be responsible for delivery delays or project blockers caused by incomplete inputs, delayed approvals, or third-party platform dependencies.',
    },
    {
      id: 5,
      number: '05',
      title: 'Payments, Invoicing & Taxes',
      subsections: [
        {
          subtitle: 'Advance & Milestone Payments',
          list: [
            'All professional services require advance deposit disbursements unless expressly agreed otherwise in writing',
            'Project billing is milestone-based, phase-based, or monthly retainer-based',
            'Engineering sprints commence only upon verified receipt of the corresponding invoice payment',
          ],
        },
        {
          subtitle: 'Online Payment Gateways',
          content: 'Online transactions are processed securely via PCI-DSS compliant third-party payment gateways (Razorpay, Stripe). FactoryJet does not store or process payment card numbers, CVVs, UPI PINs, or net banking passwords.',
        },
        {
          subtitle: 'Goods & Services Tax (GST)',
          content: 'Quoted prices are exclusive of statutory taxes unless stated otherwise. GST (18%) is charged on domestic Indian transactions as per Indian tax law. International transactions comply with zero-rated export of services regulations under Letter of Undertaking (LUT).',
        },
        {
          subtitle: 'Delayed Payments & Suspension',
          content: 'FactoryJet reserves the right to pause active development sprints, withhold production deployments, or suspend staging environments if undisputed invoices remain unpaid beyond 14 days.',
        },
      ],
    },
    {
      id: 6,
      number: '06',
      title: 'Commercial Outcomes & Performance Disclaimer',
      content: 'FactoryJet provides professional engineering, design, and growth consulting on a best-effort, industry-standard basis. We do not guarantee specific third-party outcomes, including search engine rankings, advertising conversion rates, or sales figures, as these depend on external market conditions and algorithm factors beyond our direct control.',
    },
    {
      id: 7,
      number: '07',
      title: 'Intellectual Property Rights',
      subsections: [
        {
          subtitle: 'Client Intellectual Property',
          content: 'All trademarks, proprietary brand assets, datasets, and raw content supplied by the client remain the client\'s exclusive property.',
        },
        {
          subtitle: 'FactoryJet Core IP & Frameworks',
          content: 'All pre-existing internal frameworks, modular code libraries, design methodologies, workflow automations, and custom tools developed independently by FactoryJet remain Company IP.',
        },
        {
          subtitle: 'Custom Deliverables Transfer',
          content: 'Ownership of custom deliverables and unique application source code transfers to the client upon 100% full settlement of all project invoices and dues.',
        },
      ],
    },
    {
      id: 8,
      number: '08',
      title: 'Scope Revisions & Change Requests',
      list: [
        'Deliverables are strictly bounded by the agreed Statement of Work (SoW) or project specification',
        'Feature enhancements, structural redesigns, or third-party integrations outside the SoW will be scoped and billed as separate change orders',
        'Verbal or informal requests are non-binding until confirmed via written amendment or signed change order',
      ],
    },
    {
      id: 9,
      number: '09',
      title: 'Third-Party Services & Dependencies',
      content: 'FactoryJet may recommend or integrate third-party platforms, hosting services, theme marketplaces, or software APIs. FactoryJet is not liable for third-party service interruptions, API rate limits, pricing revisions, or platform policy deprecations.',
    },
    {
      id: 10,
      number: '10',
      title: 'Limitation of Liability',
      content: 'To the maximum extent permitted by applicable law, FactoryJet shall not be liable for indirect, incidental, special, or consequential damages. FactoryJet\'s total aggregate liability arising under any contract or claim shall not exceed the total fees received by FactoryJet from the client for the specific service during the three months preceding the claim.',
    },
    {
      id: 11,
      number: '11',
      title: 'Indemnification',
      content: 'You agree to indemnify, defend, and hold harmless FactoryJet Private Limited, its directors, officers, and employees against any third-party claims, liabilities, damages, or legal expenses arising from client-provided materials, copyright infringements, or unlawful activities conducted through the deliverables.',
    },
    {
      id: 12,
      number: '12',
      title: 'Contractual Termination & Notice Periods',
      content: 'Contracts may be terminated in accordance with our Cancellation and Refund Policy. Specifically:',
      list: [
        'SaaS & Subscriptions: Cancellable anytime, effective upcoming billing month.',
        'Annual Maintenance Contracts (AMC): Requires 30 days written notice.',
        'Custom Design & Development: Requires 90 days written notice, with client obligated to pay for all work completed or in progress.',
      ],
      note: 'Upon termination for convenience or cause, all completed work and accrued engineering hours remain payable.',
    },
    {
      id: 13,
      number: '13',
      title: 'Refund & Cancellation Policy',
      content: 'All cancellations, refunds, and financial adjustments are governed strictly by our dedicated Cancellation and Refund Policy, incorporated by reference into these Terms.',
    },
    {
      id: 14,
      number: '14',
      title: 'Confidentiality & Non-Disclosure',
      content: 'Both parties agree to hold all proprietary business information, source code, client records, and technical architectures in strict confidence, disclosing only to personnel with a need to know under equivalent non-disclosure obligations.',
    },
    {
      id: 15,
      number: '15',
      title: 'Governing Law & Dispute Resolution',
      content: 'These Terms are governed by and construed in accordance with the laws of the Republic of India. Disputes shall first be resolved through good-faith negotiation, failing which they shall be settled by binding arbitration under the Indian Arbitration and Conciliation Act, 1996 in Bengaluru, Karnataka, India.',
    },
    {
      id: 16,
      number: '16',
      title: 'Modifications to Terms',
      content: 'FactoryJet reserves the right to revise these Terms at any time. Changes take effect upon posting with an updated "Last Updated" timestamp. Continued use of services after updates signifies your agreement to the revised Terms.',
    },
    {
      id: 17,
      number: '17',
      title: 'Official Contact Information',
      content: 'For questions regarding these Terms, please contact our legal and compliance department:',
      contact: {
        company: 'FactoryJet Private Limited',
        email: 'connect@factoryjet.com',
        phone: '+91 96999 77699',
      },
    },
  ];

  return (
    <div className="bg-[#FAFAF7] text-[#0F0F12] min-h-screen">
      {/* Hero Header */}
      <section className="border-b border-[#E5E5DF] bg-white pt-24 pb-14 md:pt-28 md:pb-18">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-[#F05A28]/10 text-[#B23E13] text-xs font-bold uppercase rounded-full tracking-wider">
              Legal Agreement
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Last Updated: August 31, 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 tracking-tight mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
            Standard contractual guidelines, user obligations, intellectual property rights, and service agreements governing all engagements with FactoryJet Private Limited.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block sticky top-28 bg-white rounded-xl p-5 border border-[#E5E5DF] shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 px-2">
                Table of Contents
              </p>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#section-${section.id}`}
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
                <p className="text-xs text-gray-500 mb-2">Legal inquiries?</p>
                <a
                  href="mailto:connect@factoryjet.com"
                  className="block text-xs font-bold text-[#F05A28] hover:text-[#C94818] transition-colors"
                >
                  connect@factoryjet.com →
                </a>
              </div>
            </aside>

            {/* Terms Articles */}
            <div className="space-y-8">
              {sections.map((section) => (
                <article
                  key={`section-${section.id}`}
                  id={`section-${section.id}`}
                  className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E5DF] shadow-sm scroll-mt-28"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-bold text-[#F05A28] bg-[#F05A28]/10 px-2.5 py-1 rounded">
                      CLAUSE {section.number}
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

                  {section.company && (
                    <div className="bg-[#FAFAF7] rounded-xl p-5 border border-[#E5E5DF] my-4 space-y-2 text-xs md:text-sm text-gray-800">
                      <p><strong>Legal Entity:</strong> {section.company.name}</p>
                      <p><strong>CIN:</strong> <span className="font-mono">{section.company.cin}</span></p>
                      <p><strong>GSTIN:</strong> <span className="font-mono">{section.company.gstin}</span></p>
                      <p><strong>Registered Address:</strong> {section.company.address}</p>
                      <p><strong>Official Email:</strong> <span className="font-mono">{section.company.email}</span></p>
                      <p><strong>Contact Phone:</strong> <span className="font-mono">{section.company.phone}</span> ({section.company.hours})</p>
                    </div>
                  )}

                  {section.list && (
                    <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700 text-sm md:text-base">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && (
                    <div className="space-y-4 my-4">
                      {section.subsections.map((sub, idx) => (
                        <div key={idx} className="bg-[#FAFAF7] rounded-xl p-5 border border-[#E5E5DF]">
                          <h3 className="font-display font-bold text-gray-900 text-sm md:text-base mb-2">
                            {sub.subtitle}
                          </h3>
                          {sub.content && (
                            <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3">
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
                      <strong>Note:</strong> {section.note}
                    </div>
                  )}

                  {section.contact && (
                    <div className="bg-[#FAFAF7] rounded-xl p-5 border border-[#E5E5DF] my-4 space-y-2 text-xs md:text-sm text-gray-800">
                      <p className="font-bold text-gray-900">{section.contact.company}</p>
                      <p>Email: <a href={`mailto:${section.contact.email}`} className="text-[#F05A28] font-mono hover:underline">{section.contact.email}</a></p>
                      <p>Phone: <span className="font-mono">{section.contact.phone}</span></p>
                    </div>
                  )}
                </article>
              ))}

              {/* Related Links Card */}
              <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                  Related Legal Documentation
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Review our complete policies regarding user privacy, data handling, and cancellation terms.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/privacy"
                    className="inline-flex items-center justify-center bg-[#F05A28] hover:bg-[#C94818] text-white font-semibold text-xs md:text-sm px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/refund-policy"
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs md:text-sm px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Cancellation & Refund Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}