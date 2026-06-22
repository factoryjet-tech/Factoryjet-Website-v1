import React, { useState, FormEvent } from 'react';
import { Clock, Check, Search, Layout, Code, Rocket } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { SERVICES, PRICING_TABS } from '../data.constants';

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-12 px-4">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-[#64748B] max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

export const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setFormData(prev => ({ ...prev, service: serviceTitle }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using direct db import
      // Direct db usage

      await addDoc(collection(db, 'madurai_leads'), {
        ...formData,
        source: 'Services Section',
        timestamp: serverTimestamp(),
        page: 'Madurai'
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: selectedService || ''
      });

      setTimeout(() => {
        setSubmitStatus('idle');
        setSelectedService(null);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Website Design & Development Services"
          subtitle="From starter websites to enterprise e-commerce — FactoryJet is your complete web design agency in Madurai"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div key={i} className={`group rounded-2xl p-6 md:p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col ${service.highlight ? 'ring-2 ring-[#0052CC] bg-blue-50/50' : ''}`}>
              {service.highlight && (
                <span className="inline-block bg-[#0052CC] text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4">MOST POPULAR</span>
              )}
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">{service.title}</h3>
              <div className="mb-4 flex flex-col items-start">
                {service.originalPrice && <span className="text-gray-400 line-through text-sm">{service.originalPrice}</span>}
                <div className="flex flex-col">
                  <span className="text-xs text-[#64748B] font-medium">starting at</span>
                  <span className="text-2xl font-bold text-[#FF6B35]">{service.price}</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-[#10B981] mb-4 flex items-center">
                <Clock className="w-4 h-4 mr-1" /> {service.delivery}
              </div>
              <p className="text-[#64748B] text-sm mb-6 flex-grow">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="text-[#0052CC] mr-2">✓</span> {feat}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleServiceClick(service.title)}
                className={`w-full inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 px-6 py-3 min-h-[44px] cursor-pointer ${service.highlight ? 'bg-[#0052CC] text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0' : 'border-2 border-[#0052CC] text-[#0052CC] hover:bg-[#0052CC] hover:text-white'}`}
              >
                {service.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Service Inquiry Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div
              className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-md transition-opacity animate-fade-in"
              onClick={() => setSelectedService(null)}
            />

            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 z-20 transition-all"
              >
                ✕
              </button>

              <div className="relative bg-gradient-to-br from-[#0052CC] to-blue-800 p-8 text-white overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">Get Quote for {selectedService}</h3>
                  <p className="text-blue-100 text-sm font-medium">We'll respond within 2 hours</p>
                </div>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Eg. Suresh Kumar"
                      className="w-full h-11 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0052CC] focus:border-transparent bg-gray-50 focus:bg-white transition-all outline-none"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full h-11 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0052CC] focus:border-transparent bg-gray-50 focus:bg-white transition-all outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full h-11 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0052CC] focus:border-transparent bg-gray-50 focus:bg-white transition-all outline-none"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-lg shadow-lg shadow-blue-200/50 mt-4 h-12 relative overflow-hidden inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 px-6 py-3 bg-[#0052CC] text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Custom Proposal'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded-lg text-sm">
                      Thank you! We'll contact you within 2 hours.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-2 rounded-lg text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export const Process = () => (
  <section id="process" className="py-24 bg-gray-900 text-white relative overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#0052CC]/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">Our 7-Day Website Delivery Process</h2>

        {/* Dazzling Subtitle */}
        <div className="relative inline-block">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#FF6B35] via-pink-600 to-purple-600 rounded-lg blur-xl opacity-30 animate-pulse"></div>
          <p className="relative text-xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-white drop-shadow-sm px-4 py-2">
            From consultation to live website in just 7 days
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { step: "01", title: "Discovery", desc: "We learn your business goals and requirements via call.", icon: Search },
          { step: "02", title: "Design", desc: "We create custom mockups for your review within 48 hours.", icon: Layout },
          { step: "03", title: "Develop", desc: "We build the site with SEO and mobile responsiveness.", icon: Code },
          { step: "04", title: "Launch", desc: "Final review, training, and go-live on your domain.", icon: Rocket }
        ].map((p, i) => (
          <div key={i} className="group relative p-8 border border-gray-800 rounded-2xl bg-gray-800/40 hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0052CC]/10 hover:-translate-y-2 overflow-hidden">
            {/* Corner Number */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0052CC]/5 rounded-full blur-xl group-hover:bg-[#0052CC]/10 transition-colors"></div>
            <div className="absolute top-4 right-4 text-4xl font-black text-gray-800 group-hover:text-gray-700 transition-colors pointer-events-none">{p.step}</div>

            <div className="w-14 h-14 bg-gray-700/50 rounded-2xl flex items-center justify-center text-[#FF6B35] mb-6 group-hover:scale-110 group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-300 relative z-10 shadow-lg shadow-black/20">
              {p.icon && <p.icon size={26} strokeWidth={2} />}
            </div>
            <h4 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-[#0052CC] transition-colors">{p.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Technologies = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle title="Technologies We Use" subtitle="Enterprise-grade technology stack, local expertise" />
      <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-gray-500">
        {['WordPress', 'Shopify', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MySQL', 'AWS', 'WooCommerce'].map(tech => (
          <span key={tech} className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">{tech}</span>
        ))}
      </div>
    </div>
  </section>
);

export const Pricing = () => {
  const [activeTabId, setActiveTabId] = useState("website-design");

  const activeTab = PRICING_TABS.find(tab => tab.id === activeTabId) || PRICING_TABS[0];

  return (
    <section id="pricing" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Transparent, Value-Driven Pricing"
          subtitle="Enterprise-grade technology stacks at SMB-friendly prices. No hidden fees, just pure engineering excellence."
        />

        {/* Tab Navigation */}
        <div className="flex justify-center mb-20">
          <div className="bg-white p-1 rounded-full border border-gray-200 shadow-sm inline-flex">
            {PRICING_TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTabId === tab.id ? 'bg-[#0052CC] text-white shadow-md' : 'text-[#64748B] hover:bg-gray-50'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTab.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col bg-white rounded-2xl p-6 shadow-sm border transition-all duration-300 overflow-hidden ${plan.highlight ? 'border-[#0052CC] ring-1 ring-[#0052CC]/20 shadow-xl z-10 scale-105 md:-mt-4 md:mb-4' : 'border-gray-200 hover:shadow-lg'}`}
            >
              {plan.highlight && (
                <div className="bg-[#0052CC] text-white text-[10px] font-bold py-2 text-center uppercase tracking-wider absolute top-0 left-0 w-full z-20">
                  Most Popular Choice
                </div>
              )}

              <div className={`mb-6 pt-8 ${plan.highlight ? 'mt-6' : ''}`}>
                <h3 className="text-[#0052CC] font-bold text-sm tracking-wide uppercase mb-1">{plan.name}</h3>
                <p className="text-xs text-[#64748B] mb-4">{plan.subtitle}</p>
                <div className="flex flex-col items-start text-[#0F172A]">
                  <span className="text-xs text-[#64748B] font-medium mb-1">starting at</span>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                    <span className="text-xs text-[#64748B] ml-1 font-medium">{plan.suffix}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <button className={`w-full text-sm py-2.5 inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 px-6 ${plan.highlight ? 'bg-[#FF6B35] text-white hover:bg-orange-600 shadow-lg shadow-orange-200' : 'border-2 border-[#0052CC] text-[#0052CC] hover:bg-[#0052CC] hover:text-white'}`}>
                  {plan.cta}
                </button>
              </div>

              <div className="flex-grow space-y-6 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
                {plan.features.map((category, idx) => (
                  <div key={idx}>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-100 pb-1">{category.category}</h4>
                    <ul className="space-y-2.5">
                      {category.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-xs font-medium text-[#64748B]">
                          <Check className="w-3.5 h-3.5 text-[#10B981] mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
