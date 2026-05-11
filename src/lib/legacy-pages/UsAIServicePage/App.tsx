'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactModal } from '@/context/ContactModalContext';
import AuthorByline from '@/components/AuthorByline';
import {
  ArrowRight, Check, CheckCircle, ChevronDown, ChevronUp,
  Star, Lock, Plus, Minus, Clock, Rocket
} from 'lucide-react';

// --- Types ---
export interface Stat { value: string; label: string }
export interface ProblemStat { value: string; description: string }
export interface Capability { title: string; description: string; icon: React.ReactNode }
export interface PricingTier {
  title: string;
  price: string;
  description: string;
  features: string[];
  timeline?: string;
  isPopular?: boolean;
}
export interface FAQItem { question: string; answer: string }
export interface IndustryItem { title: string; description: string; icon: React.ReactNode }
export interface ComparisonRow { feature: string; custom: string; template: string }
export interface ProcessStep { title: string; duration: string; items: string[]; icon: React.ReactNode }
export interface ChannelItem { title: string; platforms: string; icon: React.ReactNode }

export interface AIServicePageData {
  breadcrumb: string;
  heroTitle: React.ReactNode;
  heroDescription: string;
  heroStats: Stat[];
  navLinks: string[];
  problemLabel: string;
  problemTitle: string;
  problemSubtitle: string;
  problemStats: ProblemStat[];
  capabilitiesLabel: string;
  capabilitiesTitle: string;
  capabilitiesSubtitle?: string;
  capabilities: Capability[];
  // Optional extra sections
  comparison?: { title: string; rows: ComparisonRow[] };
  industries?: { label: string; title: string; subtitle?: string; items: IndustryItem[] };
  channels?: { label: string; title: string; subtitle?: string; items: ChannelItem[] };
  integrations?: { label: string; title: string; categories: { name: string; items: string[] }[] };
  process?: { label: string; title: string; subtitle?: string; steps: ProcessStep[] };
  serviceAreas?: { label: string; title: string; items: string[] };
  pricingTitle: string;
  pricingSubtitle: string;
  tiers: PricingTier[];
  faqTitle: string;
  faqs: FAQItem[];
  ctaTitle: string;
  ctaSubtitle: string;
}

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

// --- Accordion ---
const Accordion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div initial={false} className={`rounded-lg mb-2 overflow-hidden transition-all duration-300 ${isOpen ? 'bg-blue-50/40 shadow-sm' : 'bg-white'}`}>
      <button className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none relative group min-h-[64px]" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#0052CC] transition-transform duration-300 ${isOpen ? 'scale-y-100' : 'scale-y-0'}`} />
        <span className={`text-[18px] font-space font-semibold pr-6 transition-colors ${isOpen ? 'text-[#0F172A]' : 'text-[#0F172A] group-hover:text-[#0052CC]'}`}>{question}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#0052CC]/10 text-[#0052CC]' : 'bg-transparent text-[#0052CC]'}`}>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }} className="overflow-hidden">
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main Page Component ---
export default function AIServicePage({ data, region = 'us' }: { data: AIServicePageData; region?: 'us' | 'in' }) {
  const { openModal } = useContactModal();
  const onCta = () => openModal(region, 'ai');

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-inter selection:bg-[#FF6B35] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0F172A] text-white pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-[10%] -left-[10%] w-[80vw] md:w-[800px] h-[80vw] md:h-[800px] bg-[#0052CC] opacity-20 rounded-full blur-[120px] will-change-transform" />
          <motion.div animate={{ x: [0, -70, 70, 0], y: [0, 70, -70, 0], scale: [1, 1.1, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[30%] -right-[10%] w-[60vw] md:w-[600px] h-[60vw] md:h-[600px] bg-[#FF6B35] opacity-10 rounded-full blur-[100px] will-change-transform" />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-sm text-slate-400 mb-6 flex items-center gap-2">
              <a href="/us" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <a href="/us" className="hover:text-white transition-colors">Services</a>
              <span>/</span>
              <span className="text-[#FF6B35]">{data.breadcrumb}</span>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6" style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>
            {data.heroTitle}
          </motion.h1>
          <AuthorByline variant="dark" />

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
            {data.heroDescription}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <button onClick={onCta} className="bg-gradient-to-b from-[#FF6B35] to-[#E65020] text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-xl shadow-orange-900/30 flex items-center gap-2 group hover:scale-105 transition-all min-h-[56px]">
              Free Assessment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={onCta} className="bg-transparent border border-white/20 text-slate-300 font-medium text-lg px-8 py-4 rounded-xl flex items-center gap-2 transition-colors hover:border-white/40 hover:text-white min-h-[56px]">
              View Pricing
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-6 text-sm text-slate-400">
            {data.heroStats.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#10B981]" />
                <span className="text-white font-bold">{s.value}</span> {s.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0052CC] py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.heroStats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-blue-200 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">{data.problemLabel}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">{data.problemTitle}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{data.problemSubtitle}</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {data.problemStats.map((ps, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl md:text-5xl font-bold text-[#0052CC] mb-3 font-space">{ps.value}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{ps.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">{data.capabilitiesLabel}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">{data.capabilitiesTitle}</h2>
            {data.capabilitiesSubtitle && <p className="text-lg text-slate-500 max-w-2xl mx-auto">{data.capabilitiesSubtitle}</p>}
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.capabilities.map((cap, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-blue-50 text-[#0052CC] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">{cap.icon}</div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2 font-space">{cap.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table (optional) */}
      {data.comparison && (
        <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">{data.comparison.title}</h2>
            </motion.div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                <thead>
                  <tr className="bg-[#0F172A] text-white">
                    <th className="py-4 px-6 text-left text-sm font-semibold">Feature</th>
                    <th className="py-4 px-6 text-center text-sm font-semibold">FactoryJet Custom AI</th>
                    <th className="py-4 px-6 text-center text-sm font-semibold">SaaS Templates</th>
                  </tr>
                </thead>
                <tbody>
                  {data.comparison.rows.map((row, i) => (
                    <tr key={i} className={`border-t border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                      <td className="py-4 px-6 text-sm font-medium text-[#0F172A]">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-sm text-[#10B981] font-semibold">{row.custom}</td>
                      <td className="py-4 px-6 text-center text-sm text-slate-500">{row.template}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Industries / Use Cases (optional) */}
      {data.industries && (
        <section id="industries" className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">{data.industries.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">{data.industries.title}</h2>
              {data.industries.subtitle && <p className="text-lg text-slate-500 max-w-2xl mx-auto">{data.industries.subtitle}</p>}
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.industries.items.map((ind, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">{ind.icon}</div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 font-space">{ind.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{ind.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Channels (optional) */}
      {data.channels && (
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block bg-green-50 text-[#10B981] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">{data.channels.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">{data.channels.title}</h2>
              {data.channels.subtitle && <p className="text-lg text-slate-500 max-w-2xl mx-auto">{data.channels.subtitle}</p>}
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.channels.items.map((ch, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-white text-[#0052CC] rounded-lg flex items-center justify-center mb-3 shadow-sm">{ch.icon}</div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-1 font-space">{ch.title}</h3>
                  <p className="text-slate-500 text-xs">{ch.platforms}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Integrations (optional) */}
      {data.integrations && (
        <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">{data.integrations.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">{data.integrations.title}</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.integrations.categories.map((cat, i) => (
                <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                  <h4 className="text-sm font-bold text-[#0052CC] uppercase tracking-wider mb-3">{cat.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, j) => (
                      <span key={j} className="bg-slate-50 text-slate-600 text-xs px-3 py-1.5 rounded-full border border-slate-100 font-medium">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Areas (optional) */}
      {data.serviceAreas && (
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
              <span className="inline-block bg-teal-50 text-teal-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">{data.serviceAreas.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">{data.serviceAreas.title}</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.serviceAreas.items.map((area, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 px-5 py-4 rounded-lg border border-slate-100">
                  <CheckCircle size={18} className="text-[#10B981] shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process (optional) */}
      {data.process && (
        <section id="process" className="py-24 bg-gradient-to-b from-white to-[#F0F7FF]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block bg-blue-50 text-[#0052CC] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">{data.process.label}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">{data.process.title}</h2>
              {data.process.subtitle && <p className="text-lg text-slate-500 max-w-2xl mx-auto">{data.process.subtitle}</p>}
            </motion.div>
            <div className="space-y-8">
              {data.process.steps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 bg-[#0052CC] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <span className="font-bold font-space text-lg">{i + 1}</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-bold text-[#0F172A] font-space">{step.title}</h3>
                      <span className="text-xs font-bold text-[#0052CC] bg-blue-50 px-3 py-1 rounded-full">{step.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {step.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check size={16} className="text-[#10B981] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-white to-[#F0F7FF]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 font-space">{data.pricingTitle}</h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">{data.pricingSubtitle}</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-8 items-start">
            {data.tiers.map((tier, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -8 }} className={`relative rounded-2xl flex flex-col h-full bg-white transition-all duration-300 ${tier.isPopular ? 'border-2 border-[#FF6B35] shadow-2xl scale-105 z-10' : 'border border-slate-200 shadow-lg hover:shadow-xl'}`}>
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FF6B35] text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/30 flex items-center gap-2">
                    <Star size={12} fill="currentColor" /> Most Popular
                  </div>
                )}
                <div className="p-8 pb-0">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">{tier.title}</h3>
                  <div className="mb-2">
                    <span className="text-sm text-slate-400 font-medium block mb-1">Starting at</span>
                    <h4 className="text-3xl font-bold font-space text-[#0052CC] leading-none">{tier.price}</h4>
                  </div>
                  <p className="text-slate-600 text-sm font-medium border-b border-slate-100 pb-6 mb-6">{tier.description}</p>
                </div>
                <div className="px-8 space-y-4 mb-8 flex-1">
                  {tier.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-3 text-[15px] text-slate-600">
                      <div className="bg-[#10B981]/10 rounded-full p-0.5 mt-0.5 shrink-0"><Check size={14} className="text-[#10B981]" /></div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="p-8 pt-0 mt-auto">
                  {tier.timeline && (
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500 font-medium mb-6 bg-slate-50 py-2 rounded-lg">
                      <Clock size={16} className="text-[#0052CC]" /> <span>Timeline: {tier.timeline}</span>
                    </div>
                  )}
                  <button onClick={onCta} className={`w-full py-4 rounded-xl font-bold text-[16px] transition-all flex items-center justify-center gap-2 group min-h-[56px] ${tier.isPopular ? 'bg-[#FF6B35] hover:bg-[#E65020] text-white shadow-lg shadow-orange-500/20' : 'bg-white border-2 border-slate-200 text-[#0F172A] hover:border-[#0F172A] hover:bg-slate-50'}`}>
                    Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 font-space">{data.faqTitle}</h2>
          </div>
          <div>
            {data.faqs.map((faq, i) => (
              <Accordion key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F172A] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0052CC]/10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space">{data.ctaTitle}</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">{data.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onCta} className="bg-[#FF6B35] hover:bg-[#E65020] text-white font-bold text-xl px-12 py-5 rounded-xl shadow-2xl shadow-orange-600/30 hover:scale-105 transition-all flex items-center justify-center gap-3 min-h-[64px]">
              Get Your Free Assessment <ArrowRight size={24} />
            </button>
            <button onClick={onCta} className="bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-bold text-lg px-12 py-5 rounded-xl hover:scale-105 transition-all flex items-center justify-center gap-3 min-h-[64px]">
              View Pricing
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-400 flex items-center justify-center gap-2">
            <Lock size={14} /> No obligation. 100% free consultation.
          </p>
        </div>
      </section>

    </div>
  );
}
