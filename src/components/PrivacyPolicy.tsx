'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const sections = [
    {
      id: 1,
      number: '01',
      title: 'Introduction & Scope',
      content: `FactoryJet Private Limited ("FactoryJet", "we", "our", or "us"), a company incorporated under the Indian Companies Act, 2013 (CIN: U74999KA2020PTC140850, GSTIN: 29AAECF3218J1ZK), is committed to safeguarding the privacy and personal data of its clients, prospective customers, and website visitors. This Privacy Policy governs the collection, processing, storage, disclosure, and protection of personal data in accordance with the Information Technology Act, 2000; the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011; and the Digital Personal Data Protection (DPDP) Act, 2023 of India.`,
    },
    {
      id: 2,
      number: '02',
      title: 'Data Fiduciary & Company Information',
      company: {
        name: 'FactoryJet Private Limited',
        cin: 'U74999KA2020PTC140850',
        gstin: '29AAECF3218J1ZK',
        address: '70/1, Willow Herbs, Tigalarpalya, Kundalahalli, Bengaluru, Karnataka - 560037, India',
        phone: '+91 96999 77699',
        hours: 'Monday to Friday, 10:00 AM - 6:00 PM IST',
        email: 'connect@factoryjet.com',
      },
    },
    {
      id: 3,
      number: '03',
      title: 'Information We Collect',
      content: 'We collect and process personal data strictly necessary to fulfill business engagements, client onboarding, and service delivery:',
      subsections: [
        {
          subtitle: 'A. Direct Client Information',
          list: [
            'Full legal name and authorized signatory designations',
            'Corporate email address, direct phone, and WhatsApp contact numbers',
            'Business entity name, website URL, and registered billing address',
            'Goods & Services Tax Identification Number (GSTIN) and PAN for tax compliance',
          ],
        },
        {
          subtitle: 'B. Payment & Billing Transactions',
          content: 'Online transactions are processed via PCI-DSS certified payment processors (Razorpay, Stripe). FactoryJet does not capture or store credit/debit card numbers, CVVs, UPI PINs, or net banking credentials. The gateway shares transaction metadata (Payment ID, status, currency, timestamp) for accounting and GST invoice generation.',
        },
        {
          subtitle: 'C. Technical & Diagnostic Telemetry',
          list: [
            'Internet Protocol (IP) addresses and approximate geographic region',
            'Browser engine, operating system, device viewport specifications',
            'Pages requested, navigation flows, time on page, and referral headers',
          ],
        },
      ],
    },
    {
      id: 4,
      number: '04',
      title: 'Lawful Purpose & Processing Grounds',
      content: 'We process personal data solely on legitimate grounds including contractual necessity, legal compliance, and explicit consent:',
      list: [
        'Contractual Performance: Executing custom software builds, Shopify/WooCommerce architectures, AI integrations, and AMC retainers',
        'Customer Support: Communicating sprint updates, technical deliverables, and SLA notifications',
        'Financial Accounting: Generating statutory GST invoices, processing payments, and issuing credit notes',
        'Platform Optimization: Improving website performance, Core Web Vitals, and user navigation architecture',
        'Statutory Compliance: Fulfilling obligations under Indian tax and corporate regulatory statutes',
      ],
      note: 'We do not sell, rent, monetize, or trade your personal data with third-party advertisers or data brokers under any circumstances.',
    },
    {
      id: 5,
      number: '05',
      title: 'Data Sharing & Third-Party Processors',
      content: 'We share personal data only with trusted enterprise processors operating under strict confidentiality and data protection agreements:',
      subsections: [
        {
          subtitle: 'Enterprise Service Providers',
          list: [
            'Payment Gateways: Razorpay, Stripe for secure financial settlements',
            'Cloud & Infrastructure: Cloudflare, AWS, Google Cloud for encrypted hosting and CDN delivery',
            'Communication & Collaboration: Google Workspace, Slack for project management and client communications',
          ],
        },
        {
          subtitle: 'Statutory Disclosures',
          content: 'We may disclose information if required to comply with court orders, statutory law enforcement requests, or regulatory tax audits under Indian law.',
        },
      ],
    },
    {
      id: 6,
      number: '06',
      title: 'Data Security & Technical Safeguards',
      content: 'FactoryJet enforces comprehensive organizational and technical security controls:',
      list: [
        'End-to-end TLS 1.3 encryption across all website data transmission channels',
        'Role-based access controls (RBAC) and mandatory two-factor authentication (2FA) for all engineering databases',
        'Continuous vulnerability scanning and automated code security auditing',
        'Strict non-disclosure agreements (NDAs) enforced across all employees and technical contractors',
      ],
    },
    {
      id: 7,
      number: '07',
      title: 'Data Retention & Deletion Lifecycle',
      content: 'We retain personal data only for the duration necessary to satisfy the commercial purpose of the engagement or statutory retention mandates:',
      list: [
        'Active Project Records: Retained throughout the contract and active AMC support lifecycle',
        'Financial & Tax Invoices: Retained for 8 statutory financial years in accordance with Indian Income Tax and GST regulations',
        'Inquiry Leads: Decommissioned and securely deleted after 24 months of client inactivity',
      ],
    },
    {
      id: 8,
      number: '08',
      title: 'Data Principal Rights',
      content: 'Under applicable Indian data protection laws and international standards, clients and visitors possess the following rights:',
      list: [
        'Right to Access: Request a copy of the personal data held by FactoryJet',
        'Right to Correction: Request correction of inaccurate or incomplete corporate data',
        'Right to Erasure: Request deletion of data no longer required for statutory compliance',
        'Right to Withdraw Consent: Opt out of marketing correspondence at any time',
      ],
      note: 'To exercise any data rights, submit a written request to connect@factoryjet.com.',
    },
    {
      id: 9,
      number: '09',
      title: 'Statutory Grievance Redressal Officer',
      content: 'In compliance with the Information Technology Act, 2000 and the DPDP Act, 2023, the designated Grievance Officer details are:',
      company: {
        name: 'Grievance Redressal Officer - FactoryJet Private Limited',
        cin: 'U74999KA2020PTC140850',
        gstin: '29AAECF3218J1ZK',
        address: '70/1, Willow Herbs, Tigalarpalya, Kundalahalli, Bengaluru, Karnataka - 560037, India',
        phone: '+91 96999 77699',
        hours: 'Monday to Friday, 10:00 AM - 6:00 PM IST',
        email: 'connect@factoryjet.com',
      },
    },
    {
      id: 10,
      number: '10',
      title: 'Policy Revisions & Contact',
      content: 'FactoryJet reserves the right to amend this Privacy Policy periodically. For queries regarding data protection, reach us directly at connect@factoryjet.com.',
    },
  ];

  return (
    <div className="bg-[#FAFAF7] text-[#0F0F12] min-h-screen">
      {/* Hero Header */}
      <section className="border-b border-[#E5E5DF] bg-white pt-24 pb-14 md:pt-28 md:pb-18">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-[#F05A28]/10 text-[#B23E13] text-xs font-bold uppercase rounded-full tracking-wider">
              Data Privacy & Security
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Last Updated: August 31, 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
            How FactoryJet Private Limited collects, processes, and protects client data in compliance with Indian Information Technology and Digital Personal Data Protection laws.
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
                Policy Sections
              </p>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#privacy-section-${section.id}`}
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
                <p className="text-xs text-gray-500 mb-2">Privacy inquiries?</p>
                <a
                  href="mailto:connect@factoryjet.com"
                  className="block text-xs font-bold text-[#F05A28] hover:text-[#C94818] transition-colors"
                >
                  connect@factoryjet.com →
                </a>
              </div>
            </aside>

            {/* Privacy Clauses Body */}
            <div className="space-y-8">
              {sections.map((section) => (
                <article
                  key={`privacy-section-${section.id}`}
                  id={`privacy-section-${section.id}`}
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
                      <p><strong>Entity:</strong> {section.company.name}</p>
                      <p><strong>CIN:</strong> <span className="font-mono">{section.company.cin}</span></p>
                      <p><strong>GSTIN:</strong> <span className="font-mono">{section.company.gstin}</span></p>
                      <p><strong>Address:</strong> {section.company.address}</p>
                      <p><strong>Email:</strong> <a href={`mailto:${section.company.email}`} className="text-[#F05A28] font-mono hover:underline">{section.company.email}</a></p>
                      <p><strong>Phone:</strong> <span className="font-mono">{section.company.phone}</span> ({section.company.hours})</p>
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
                </article>
              ))}

              {/* Related Legal Links Card */}
              <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                  Complete Legal Documentation
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Review our complete terms of service and commercial cancellation policies.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/terms"
                    className="inline-flex items-center justify-center bg-[#F05A28] hover:bg-[#C94818] text-white font-semibold text-xs md:text-sm px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Terms & Conditions
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