import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { AlertTriangle, Clock, BarChart3, Settings, TrendingUp, DollarSign } from 'lucide-react';
import { useLeadCapture } from '../context/LeadCaptureContext';

export const Problem: React.FC = () => {
  const { openForm } = useLeadCapture();

  return (
    <Section id="problem" className="bg-white">
      <SectionHeader 
        eyebrow="THE HIDDEN COST OF BAD E-COMMERCE" 
        title="Why 73% of E-Commerce Stores Fail to Hit Revenue Goals" 
        subtitle="The problem isn't your products. It's your platform."
      />

      {/* Quick Answer Box */}
      <div className="bg-blue-50 border-l-4 border-jet-blue p-6 rounded-r-lg mb-12 max-w-4xl mx-auto">
        <p className="text-sm text-jet-blue font-bold mb-2 uppercase tracking-wide">💡 Quick Answer</p>
        <p className="text-jet-gray text-base leading-relaxed">
          Most e-commerce stores underperform because of platform limitations, poor checkout optimization, slow page speeds, and inadequate mobile experiences. A properly built e-commerce store should convert 3-5% of visitors into buyers—most struggle to hit 1%. FactoryJet's e-commerce development services address these issues through revenue-focused engineering, achieving an average 247% revenue increase for clients.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { problem: "Slow Page Load", impact: "-7% conversion/sec", avg: "4.2 seconds" },
          { problem: "Poor Mobile UX", impact: "70% abandonment", avg: "67% of traffic" },
          { problem: "Complex Checkout", impact: "69% abandonment", avg: "5+ steps" },
          { problem: "No Personalization", impact: "80% prefer personalized", avg: "<20% implement" }
        ].map((item, idx) => (
          <div key={idx} className="bg-red-50 border border-red-100 p-6 rounded-lg">
            <h4 className="font-bold text-red-900 mb-2">{item.problem}</h4>
            <p className="text-2xl font-bold text-red-600 mb-1">{item.impact}</p>
            <p className="text-sm text-red-400">Industry Avg: {item.avg}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-xl max-w-4xl mx-auto text-center shadow-xl">
        <h3 className="text-2xl font-bold mb-4">While You Wait, Your Competition Sells</h3>
        <p className="text-slate-300 mb-6 text-lg">Every day without optimization costs you sales. 67% of shoppers won't return after a bad experience. Platform migrations get harder with time. Your competitors with better UX are winning your customers right now.</p>
        <button 
          onClick={() => openForm('Revenue Loss Audit')} 
          className="text-jet-orange font-bold text-lg hover:underline inline-flex items-center"
        >
          Stop Losing Sales <span className="ml-2">→</span> Get Your Free E-Commerce Audit
        </button>
      </div>
    </Section>
  );
};

export const Difference: React.FC = () => (
  <Section id="difference" className="bg-jet-light">
    <SectionHeader
      eyebrow="WHY LEADING US BRANDS CHOOSE FACTORYJET"
      title="The E-Commerce Development Company Built for Revenue Growth"
    />

    {/* Quick Answer Box */}
    <div className="bg-blue-50 border-l-4 border-jet-blue p-6 rounded-r-lg mb-12 max-w-4xl mx-auto shadow-sm">
      <p className="text-sm text-jet-blue font-bold mb-2 uppercase tracking-wide">💡 Quick Answer</p>
      <p className="text-jet-gray text-base leading-relaxed">
        FactoryJet builds enterprise-grade e-commerce systems engineered to increase conversions, improve checkout completion, and scale online revenue. Unlike traditional agencies that focus only on design, every decision we make is measured against one question: <strong>Will this increase sales?</strong> Our clients trust us for 7-day delivery, full code ownership, platform-neutral recommendations, and revenue-first engineering.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {[
        { title: "Revenue-First Engineering", desc: "We don't build pretty stores. We build stores that sell. Every design decision, every feature, every integration is evaluated against one metric: will it increase revenue?", icon: DollarSign },
        { title: "Platform Expertise, Not Bias", desc: "We recommend the platform that's right for YOUR business—not the one that pays us the highest commission. We're experts in Shopify, BigCommerce, Adobe, and more.", icon: Settings },
        { title: "AI-Accelerated Dev", desc: "While traditional agencies spend months, we leverage AI tools to deliver in weeks. Same quality, fraction of the time. Your competition launches while traditional clients wait.", icon: Clock },
        { title: "Conversion Optimization Built-In", desc: "Every store includes: optimized checkout flow, mobile-first design, A/B testing framework, analytics integration, and performance monitoring. CRO isn't an add-on.", icon: TrendingUp },
        { title: "Scalability by Design", desc: "We build stores that grow with you. From 100 to 100,000 orders/month—your platform won't be the bottleneck. Headless architecture and multi-channel ready.", icon: BarChart3 },
        { title: "Transparent, Fixed Pricing", desc: "No hourly billing surprises. Know your investment upfront. Pay for outcomes, not hours.", icon: DollarSign }
      ].map((card, idx) => {
        const Icon = card.icon;
        return (
          <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100 group">
             <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-jet-blue transition-colors">
                <Icon className="text-jet-blue group-hover:text-white transition-colors h-6 w-6" />
             </div>
             <h3 className="text-xl font-bold mb-3 font-heading">{card.title}</h3>
             <p className="text-jet-gray leading-relaxed text-sm">{card.desc}</p>
          </div>
        )
      })}
    </div>

    {/* Results Stats */}
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden max-w-5xl mx-auto">
       <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
         <div className="p-6 text-center hover:bg-slate-50 transition">
            <div className="text-3xl font-bold text-jet-green mb-1">247%</div>
            <div className="text-sm text-jet-gray font-medium">Revenue Increase</div>
            <div className="text-xs text-slate-400 mt-1">Industry Avg: 45%</div>
         </div>
         <div className="p-6 text-center hover:bg-slate-50 transition">
            <div className="text-3xl font-bold text-jet-blue mb-1">3.8%</div>
            <div className="text-sm text-jet-gray font-medium">Conversion Rate</div>
            <div className="text-xs text-slate-400 mt-1">Industry Avg: 1.8%</div>
         </div>
         <div className="p-6 text-center hover:bg-slate-50 transition">
            <div className="text-3xl font-bold text-jet-dark mb-1">1.6s</div>
            <div className="text-sm text-jet-gray font-medium">Page Load Speed</div>
             <div className="text-xs text-slate-400 mt-1">Industry Avg: 4.2s</div>
         </div>
         <div className="p-6 text-center hover:bg-slate-50 transition">
            <div className="text-3xl font-bold text-jet-orange">7 Days</div>
            <div className="text-sm text-jet-gray font-medium">Time to Launch</div>
             <div className="text-xs text-slate-400 mt-1">Industry Avg: 12-16 wks</div>
         </div>
       </div>
    </div>
  </Section>
);