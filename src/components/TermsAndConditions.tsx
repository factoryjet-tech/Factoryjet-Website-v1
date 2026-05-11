'use client';

import { useState, useEffect } from 'react';
export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = [
    {
      id: 1,
      title: 'Introduction & Acceptance of Terms',
      content: `These Terms & Conditions ("Terms") govern your access to and use of the website, services, and online payment facilities provided by FactoryJet Private Limited ("FactoryJet", "we", "our", or "us"). By accessing our website, engaging our services, submitting inquiries, or making payments online, you agree to be legally bound by these Terms, our Privacy Policy, and Refund & Cancellation Policy. If you do not agree with these Terms, please do not use our services or make any payments.`
    },
    {
      id: 2,
      title: 'Company Information',
      company: {
        name: 'FactoryJet Private Limited',
        cin: 'U74999KA2020PTC140850',
        gstin: '29AAECF3218J1ZK',
        address: '70/1, Willow Herbs, Tigalarpalya, Kundalahalli, Bengaluru, Karnataka – 560037, India',
        email: 'connect@factoiryjet.com',
        phone: '+91 96999 77699',
        hours: 'Monday to Friday, 10:00 AM – 6:00 PM IST'
      }
    },
    {
      id: 3,
      title: 'Scope of Services',
      content: 'FactoryJet provides professional digital services including but not limited to:',
      list: [
        'Website design and development',
        'E-commerce store design & development',
        'B2B and B2C commerce solutions',
        'Digital marketing, SEO, paid advertising, and growth services',
        'IT services, SaaS, ERP, AI, and automation solutions',
        'Consulting, strategy, and technical implementation'
      ],
      note: 'The exact scope, deliverables, timelines, and pricing will be defined in written proposals, emails, Statements of Work (SoW), project agreements or invoices. Only written commitments explicitly agreed upon by FactoryJet shall be binding.'
    },
    {
      id: 4,
      title: 'User Responsibilities',
      content: 'You agree to:',
      list: [
        'Provide accurate and complete information',
        'Share required content, approvals, and feedback on time',
        'Ensure you have rights to any content, data, or materials you provide',
        'Respond within reasonable timelines to avoid project delays'
      ],
      note: 'FactoryJet shall not be responsible for delays or failures caused by incomplete inputs, delayed approvals, or third-party dependencies.'
    },
    {
      id: 5,
      title: 'Payments & Billing',
      subsections: [
        {
          subtitle: 'Advance & Milestone Payments',
          list: [
            'All services require advance payment unless agreed otherwise in writing',
            'Payments may be milestone-based or phase-based',
            'Work commences only after receipt of the agreed payment'
          ]
        },
        {
          subtitle: 'Online Payments',
          content: 'Payments made on the website are processed securely via third-party payment gateways such as Razorpay. FactoryJet does not store or process card, UPI, or banking details.'
        },
        {
          subtitle: 'Taxes',
          content: 'Prices are exclusive of applicable taxes unless stated otherwise. GST will be charged as per Indian law.'
        },
        {
          subtitle: 'Delayed Payments',
          content: 'FactoryJet reserves the right to pause work, withhold deliverables, or suspend services until outstanding payments are cleared.'
        }
      ]
    },
    {
      id: 6,
      title: 'No Guarantee of Results',
      content: 'FactoryJet provides services on a best-effort and professional basis. We do not guarantee: Search engine rankings, Advertising performance, Revenue, sales, leads, or conversions, or Platform approvals or third-party outcomes. Results depend on multiple external factors beyond our control.'
    },
    {
      id: 7,
      title: 'Intellectual Property Rights',
      subsections: [
        {
          subtitle: 'Client IP',
          content: 'Any content, data, or materials provided by the client remain the client\'s property.'
        },
        {
          subtitle: 'FactoryJet IP',
          content: 'All frameworks, code libraries, methodologies, templates, and internal tools remain the intellectual property of FactoryJet unless explicitly transferred in writing.'
        },
        {
          subtitle: 'Final Deliverables',
          content: 'Ownership of final deliverables transfers to the client only after full payment of all dues, unless otherwise agreed.'
        }
      ]
    },
    {
      id: 8,
      title: 'Revisions & Change Requests',
      list: [
        'Revisions are limited to the agreed scope',
        'Additional features, redesigns, or scope changes will be billed separately',
        'Verbal requests are not binding unless confirmed in writing'
      ]
    },
    {
      id: 9,
      title: 'Third-Party Services & Tools',
      content: 'FactoryJet may integrate or recommend third-party tools, platforms, plugins, or services. FactoryJet is not responsible for third-party downtime, pricing changes, policy changes, or service discontinuation. Clients agree to comply with third-party terms independently.'
    },
    {
      id: 10,
      title: 'Limitation of Liability',
      content: 'To the maximum extent permitted by law: FactoryJet shall not be liable for indirect, incidental, or consequential damages. Total liability shall not exceed the amount paid by the client for the specific service. This applies to all claims including contract, tort, negligence, or otherwise.'
    },
    {
      id: 11,
      title: 'Indemnification',
      content: 'You agree to indemnify and hold harmless FactoryJet, its directors, employees, and partners from any claims, damages, losses, or expenses arising from:',
      list: [
        'Content provided by you',
        'Violation of laws or third-party rights',
        'Misuse of services'
      ]
    },
    {
      id: 12,
      title: 'Termination',
      content: 'FactoryJet reserves the right to terminate or suspend services if Terms are violated, payments are not made, or unlawful or abusive activities are detected.',
      note: 'Upon termination: Fees already paid are non-refundable and outstanding dues remain payable.'
    },
    {
      id: 13,
      title: 'Refunds & Cancellations',
      content: 'Refunds, if any, are governed strictly by our Refund & Cancellation Policy, available on the website and incorporated by reference into these Terms.'
    },
    {
      id: 14,
      title: 'Confidentiality',
      content: 'Both parties agree to maintain confidentiality of business information, pricing, project details, and trade secrets unless disclosure is required by law.'
    },
    {
      id: 15,
      title: 'Governing Law & Jurisdiction',
      content: 'These Terms shall be governed by and construed in accordance with the laws of India. All disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.'
    },
    {
      id: 16,
      title: 'Modifications to Terms',
      content: 'FactoryJet may modify these Terms at any time. Updated Terms will be posted on this page with a revised "Last updated" date. Continued use of services constitutes acceptance of revised Terms.'
    },
    {
      id: 17,
      title: 'Contact Information',
      content: 'For any questions regarding these Terms, please contact:',
      contact: {
        company: 'FactoryJet Private Limited',
        email: 'connect@factoiryjet.com',
        phone: '+91 96999 77699'
      }
    }
  ];

  return ( <>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 mt-9">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative">
        {/* Header */}
        {/* <header className={`border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  Terms & Conditions
                </h1>
                <p className="text-sm text-slate-500 mt-2 tracking-wide" style={{ fontFamily: 'Courier New, monospace' }}>
                  Last updated: 01/01/2026
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </header> */}

        {/* Main content */}
        <main className="max-w-5xl mx-auto px-6 py-12">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <article
                key={`section-${section.id}`}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 50}ms`
                }}
                onMouseEnter={() => setActiveSection(section.id)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <div className={`p-8 transition-colors duration-300 ${
                  activeSection === section.id ? 'bg-gradient-to-r from-blue-50 to-indigo-50' : ''
                }`}>
                  {/* Section number and title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md transition-transform duration-300 ${
                      activeSection === section.id ? 'scale-110 rotate-3' : ''
                    }`}>
                      {section.id}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                        {section.title}
                      </h2>
                      {section.content && (
                        <p className="text-slate-700 leading-relaxed">
                          {section.content}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company information */}
                  {section.company && (
                    <div className="ml-16 space-y-3 text-slate-700">
                      <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-blue-500">
                        <p className="mb-2"><strong>Legal Entity Name:</strong> {section.company.name}</p>
                        <p className="mb-2"><strong>CIN:</strong> <span className="font-mono text-sm">{section.company.cin}</span></p>
                        <p className="mb-3"><strong>GSTIN:</strong> <span className="font-mono text-sm">{section.company.gstin}</span></p>
                        <p className="mb-2"><strong>Registered & Operational Address:</strong></p>
                        <p className="ml-4 mb-3">{section.company.address}</p>
                        <p className="mb-2"><strong>Email:</strong> <span className="font-mono text-sm">{section.company.email}</span></p>
                        <p className="mb-2"><strong>Phone:</strong> <span className="font-mono text-sm">{section.company.phone}</span></p>
                        <p className="text-slate-600 text-sm">({section.company.hours})</p>
                      </div>
                    </div>
                  )}

                  {/* List items */}
                  {section.list && (
                    <ul className="space-y-3 ml-16">
                      {section.list.map((item, idx) => (
                        <li key={`list-${section.id}-${idx}`} className="flex items-start gap-3 text-slate-700">
                          <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"></span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="ml-16 space-y-6 mt-6">
                      {section.subsections.map((sub, idx) => (
                        <div key={`subsection-${section.id}-${idx}`} className="bg-slate-50 rounded-xl p-6 border-l-4 border-blue-500">
                          <h3 className="font-bold text-slate-900 mb-3 text-lg">
                            {sub.subtitle}
                          </h3>
                          {sub.content && (
                            <p className="text-slate-700 mb-3">{sub.content}</p>
                          )}
                          {sub.list && (
                            <ul className="space-y-2">
                              {sub.list.map((item, i) => (
                                <li key={`sublist-${section.id}-${idx}-${i}`} className="flex items-start gap-2 text-slate-700">
                                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500"></span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Note */}
                  {section.note && (
                    <div className="ml-16 mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                      <p className="text-slate-700 italic">{section.note}</p>
                    </div>
                  )}

                  {/* Contact information */}
                  {section.contact && (
                    <div className="ml-16 mt-6 bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl p-6 text-white shadow-lg">
                      <h3 className="font-bold text-xl mb-4">{section.contact.company}</h3>
                      <div className="space-y-2">
                        <p className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">✉</span>
                          <span className="font-mono">{section.contact.email}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">☎</span>
                          <span className="font-mono">{section.contact.phone}</span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Footer notice */}
          {/* <div className={`mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-center text-slate-600 text-sm leading-relaxed">
              By using FactoryJet services, you acknowledge that you have read and agreed to these Terms & Conditions.
              <br />
              <span className="text-slate-500">© 2026 FactoryJet Private Limited. All rights reserved.</span>
            </p>
          </div> */}
        </main>
      </div>

      <style >{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>

    </>
  );
}