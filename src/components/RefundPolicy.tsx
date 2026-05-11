'use client';

import { useState, useEffect } from 'react';
export default function RefundPolicy() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = [
    {
      id: 1,
      title: 'Introduction',
      content: `This Refund & Cancellation Policy ("Policy") governs payments made to FactoryJet Private Limited ("FactoryJet", "we", "our", or "us") for all services offered through our website, proposals, invoices, or online payment links. By making a payment to FactoryJet, you acknowledge that you have read, understood, and agreed to this Policy along with our Terms & Conditions and Privacy Policy.`
    },
    {
      id: 2,
      title: 'Nature of Services',
      content: `FactoryJet provides professional digital services, including but not limited to:`,
      list: [
        'Website design and development',
        'E-commerce store development',
        'Digital marketing, SEO, and paid advertising',
        'IT, SaaS, ERP, AI, and automation services',
        'Consulting and custom technology solutions'
      ],
      note: 'These services are customized, time-bound, and effort-based, involving planning, resources, and execution once work has commenced.'
    },
    {
      id: 3,
      title: 'Advance Payments',
      list: [
        'All payments made towards services are considered advance payments unless stated otherwise in writing.',
        'Work begins only after receipt of the agreed advance payment.',
        'Advance payments are non-refundable once work has commenced, as resources, time, and costs are immediately allocated.'
      ]
    },
    {
      id: 4,
      title: 'Cancellation by Client',
      subsections: [
        {
          subtitle: 'Before Work Commences',
          content: 'If a cancellation request is made before any work has started, FactoryJet may, at its sole discretion: Refund the payment after deducting administrative and processing charges, if applicable.'
        },
        {
          subtitle: 'After Work Commences',
          content: 'If cancellation is requested after work has commenced:',
          list: [
            'No refund shall be provided',
            'All work completed up to that point shall be deemed delivered',
            'Any outstanding dues shall remain payable'
          ]
        }
      ]
    },
    {
      id: 5,
      title: 'Milestone-Based Projects',
      content: 'For projects billed on milestones or phases:',
      list: [
        'Payments made for a completed or ongoing milestone are non-refundable',
        'If a project is paused or terminated mid-milestone, no refund will be issued for that milestone',
        'Deliverables completed up to the date of cancellation will be shared where applicable'
      ]
    },
    {
      id: 6,
      title: 'Non-Refundable Items',
      content: 'Refunds will not be provided for:',
      list: [
        'Services already rendered or partially rendered',
        'Delays caused by the client (including delayed inputs, approvals, or feedback)',
        'Third-party costs, including but not limited to: Domain registrations, Hosting services, Plugins, themes, licenses, Advertising spend (Google Ads, Meta Ads, etc.)',
        'Change of mind after project initiation',
        'Business outcomes not meeting expectations (e.g., sales, leads, rankings)'
      ]
    },
    {
      id: 7,
      title: 'No Guarantee of Results',
      content: `FactoryJet does not guarantee specific results, including but not limited to: Search engine rankings, Advertising performance, Revenue, leads, or conversions. Dissatisfaction with outcomes does not qualify for a refund.`
    },
    {
      id: 8,
      title: 'Refund Processing',
      content: 'If a refund is approved at FactoryJet\'s discretion:',
      list: [
        'Refunds will be processed within 5–10 working days',
        'Refunds will be issued to the original payment method used',
        'Payment gateway or bank processing timelines are outside FactoryJet\'s control'
      ]
    },
    {
      id: 9,
      title: 'Chargebacks & Payment Disputes',
      content: 'Clients are encouraged to contact FactoryJet directly before raising disputes or chargebacks. Unauthorized chargebacks may result in:',
      list: [
        'Immediate suspension of services',
        'Legal action for recovery of dues',
        'FactoryJet reserves the right to submit project records, communication, and agreements as evidence to payment gateways or banks.'
      ]
    },
    {
      id: 10,
      title: 'Cancellation by FactoryJet',
      content: 'FactoryJet reserves the right to cancel or terminate services if:',
      list: [
        'Payments are not received on time',
        'Terms & Conditions are violated',
        'Client engages in unlawful, abusive, or unethical activities'
      ],
      note: 'In such cases: Fees already paid are non-refundable. Any completed work remains payable.'
    },
    {
      id: 11,
      title: 'Modifications to This Policy',
      content: `FactoryJet may update this Refund & Cancellation Policy at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of services constitutes acceptance of the revised policy.`
    },
    {
      id: 12,
      title: 'Contact Information',
      content: 'For questions related to refunds or cancellations, please contact:',
      contact: {
        company: 'FactoryJet Private Limited',
        email: 'connect@factoiryjet.com',
        phone: '+91 96999 77699',
        hours: 'Monday to Friday, 10:00 AM – 6:00 PM IST'
      }
    }
  ];

  return (<>
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
                  Refund & Cancellation Policy
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
                key={section.id}
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

                  {/* List items */}
                  {section.list && (
                    <ul className="space-y-3 ml-16">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700">
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
                        <div key={idx} className="bg-slate-50 rounded-xl p-6 border-l-4 border-blue-500">
                          <h3 className="font-bold text-slate-900 mb-3 text-lg">
                            {sub.subtitle}
                          </h3>
                          <p className="text-slate-700 mb-3">{sub.content}</p>
                          {sub.list && (
                            <ul className="space-y-2">
                              {sub.list.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-700">
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
                        <p className="flex items-center gap-2 text-sm text-blue-200">
                          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">⏰</span>
                          <span>{section.contact.hours}</span>
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
              By using FactoryJet services, you acknowledge that you have read and agreed to this Refund & Cancellation Policy.
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