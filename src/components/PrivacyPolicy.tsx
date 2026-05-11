'use client';

import { useState, useEffect } from 'react';
export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = [
    {
      id: 1,
      title: 'Introduction',
      content: `FactoryJet Private Limited ("FactoryJet", "we", "our", or "us") is committed to protecting the privacy and personal data of its users, customers, and visitors. This Privacy Policy explains how we collect, use, store, disclose, and protect your information when you visit our website, use our services, or make payments online. By accessing or using our website or services, you agree to the collection and use of information in accordance with this Privacy Policy.`
    },
    {
      id: 2,
      title: 'Company Information',
      company: {
        name: 'FactoryJet Private Limited',
        cin: 'U74999KA2020PTC140850',
        gstin: '29AAECF3218J1ZK',
        address: '70/1, Willow Herbs, Tigalarpalya, Kundalahalli, Bengaluru, Karnataka – 560037, India',
        phone: '+91 96999 77699',
        hours: 'Monday to Friday, 10:00 AM – 6:00 PM IST',
        email: 'connect@factoiryjet.com'
      }
    },
    {
      id: 3,
      title: 'Information We Collect',
      content: 'We may collect the following types of information:',
      subsections: [
        {
          subtitle: 'Personal Information',
          list: [
            'Full name',
            'Email address',
            'Phone number / WhatsApp number',
            'Company or business name',
            'Billing and invoicing details',
            'GST number (if applicable)'
          ]
        },
        {
          subtitle: 'Payment Information',
          content: 'Payments made on our website are processed securely by third-party payment gateways such as Razorpay. We do not store or process your credit/debit card details, UPI credentials, or banking information. Payment gateways may collect:',
          list: [
            'Transaction amount',
            'Transaction ID',
            'Payment method used',
            'Payment status'
          ],
          note: 'These are governed by the payment gateway\'s own privacy policy and security standards.'
        },
        {
          subtitle: 'Technical & Usage Information',
          list: [
            'IP address',
            'Browser type and version',
            'Device information',
            'Pages visited and time spent',
            'Referral URLs'
          ]
        },
        {
          subtitle: 'Cookies & Tracking Technologies',
          content: 'We use cookies and similar technologies to:',
          list: [
            'Improve website functionality',
            'Analyze traffic and user behavior',
            'Enhance user experience'
          ],
          note: 'You can control or disable cookies through your browser settings.'
        }
      ]
    },
    {
      id: 4,
      title: 'How We Use Your Information',
      content: 'We use collected information for the following purposes:',
      list: [
        'To provide and deliver our services',
        'To communicate regarding inquiries, proposals, or ongoing projects',
        'To process payments and issue invoices',
        'To improve our website, services, and customer experience',
        'To send important service-related updates',
        'To comply with legal, regulatory, or contractual obligations'
      ],
      note: 'We do not sell, rent, or trade your personal data to third parties.'
    },
    {
      id: 5,
      title: 'Data Sharing & Disclosure',
      content: 'We may share your information only in the following circumstances:',
      subsections: [
        {
          subtitle: 'Service Providers',
          content: 'With trusted third-party service providers who assist us in:',
          list: [
            'Payment processing (e.g., Razorpay)',
            'Website hosting',
            'CRM, analytics, or email communication tools'
          ],
          note: 'These providers are bound by confidentiality and data protection obligations.'
        },
        {
          subtitle: 'Legal Requirements',
          content: 'When required by law, court order, government authority, or regulatory requirement.'
        },
        {
          subtitle: 'Business Transfers',
          content: 'In case of merger, acquisition, or restructuring, user information may be transferred as part of business assets.'
        }
      ]
    },
    {
      id: 6,
      title: 'Data Security',
      content: 'We implement reasonable technical and organizational security measures to protect your personal information, including:',
      list: [
        'Secure servers and hosting environments',
        'SSL encryption on our website',
        'Restricted access to personal data'
      ],
      note: 'However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.'
    },
    {
      id: 7,
      title: 'Data Retention',
      content: 'We retain personal information only for as long as necessary to:',
      list: [
        'Fulfill the purposes outlined in this policy',
        'Comply with legal, accounting, or regulatory requirements'
      ],
      note: 'Once data is no longer required, it is securely deleted or anonymized.'
    },
    {
      id: 8,
      title: 'Your Rights',
      content: 'As a user, you have the right to:',
      list: [
        'Request access to your personal data',
        'Request correction of inaccurate information',
        'Request deletion of your data (subject to legal obligations)',
        'Withdraw consent for communication'
      ],
      note: 'To exercise your rights, please contact us at connect@factoiryjet.com.'
    },
    {
      id: 9,
      title: 'Third-Party Links',
      content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such external sites. We encourage you to review their privacy policies separately.'
    },
    {
      id: 10,
      title: 'Children\'s Privacy',
      content: 'Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.'
    },
    {
      id: 11,
      title: 'Changes to This Privacy Policy',
      content: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. Continued use of our website or services after changes constitutes acceptance of the updated policy.'
    },
    {
      id: 12,
      title: 'Contact & Grievance Redressal',
      content: 'If you have any questions, concerns, or complaints regarding this Privacy Policy or your data, please contact:',
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
                  Privacy Policy
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
                        <p className="mb-2"><strong>Phone:</strong> <span className="font-mono text-sm">{section.company.phone}</span></p>
                        <p className="text-slate-600 text-sm mb-2">({section.company.hours})</p>
                        <p><strong>Email:</strong> <span className="font-mono text-sm">{section.company.email}</span></p>
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
                          {sub.note && (
                            <div className="mt-3 p-3 bg-amber-50 border-l-2 border-amber-400 rounded-r">
                              <p className="text-slate-700 text-sm italic">{sub.note}</p>
                            </div>
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
              By using FactoryJet services, you acknowledge that you have read and agreed to this Privacy Policy.
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