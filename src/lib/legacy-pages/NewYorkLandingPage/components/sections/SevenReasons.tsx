'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Smartphone, MapPin, Gauge, ShieldCheck, TrendingUp, BarChart, Plus, Minus } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const reasons = [
  {
    icon: Zap,
    headline: "First Impressions Happen in Milliseconds",
    content: "Research shows users form opinions about your website in just 0.05 seconds. In a city where premium brands and sophisticated consumers are the norm, your website must communicate professionalism, credibility, and value instantly. A poorly designed website signals to NYC customers that you cut corners—and they'll assume you cut corners in your products and services too."
  },
  {
    icon: Smartphone,
    headline: "Mobile Traffic Dominates NYC",
    content: "80% of New Yorkers browse on smartphones during their commute, lunch breaks, and evening downtime. If your website isn't mobile-first—not just mobile-responsive, but designed for mobile FIRST—you're losing the majority of your potential customers. Google now uses mobile-first indexing, meaning your mobile site IS your site in their eyes."
  },
  {
    icon: MapPin,
    headline: "Local SEO Determines Visibility",
    content: "When someone searches \"web development company near me\" or \"professional website developer New York,\" Google's algorithm prioritizes businesses with optimized local SEO. Without proper schema markup, Google Business Profile integration, and location-optimized content, you're invisible to high-intent local searches—searches that convert at 3-5X higher rates than generic queries."
  },
  {
    icon: Gauge,
    headline: "Speed Equals Revenue",
    content: "Amazon found that every 100ms delay in page load time costs them 1% in sales. For NYC e-commerce businesses, professional services, and B2B companies, slow websites directly impact revenue. FactoryJet websites achieve Core Web Vitals scores of 90+ because we optimize performance from day one—not as an afterthought."
  },
  {
    icon: ShieldCheck,
    headline: "Security Breaches Destroy Trust",
    content: "NYC businesses—especially in finance, healthcare, and legal services—handle sensitive customer data. A single security breach can destroy decades of reputation building. Professional web development includes SSL certificates, secure hosting, regular updates, PCI compliance (for e-commerce), and vulnerability monitoring. DIY website builders and cheap developers often skip these critical security layers."
  },
  {
    icon: TrendingUp,
    headline: "Conversion Optimization Multiplies ROI",
    content: "The difference between a 2% conversion rate and a 5% conversion rate is 150% more revenue—from the same traffic. Professional web design companies understand conversion rate optimization: strategic CTA placement, trust indicators, friction reduction in forms, psychological triggers, and A/B testing frameworks. Most NYC businesses focus on driving traffic but ignore conversion optimization, leaving massive revenue on the table."
  },
  {
    icon: BarChart,
    headline: "Scalability Supports Growth",
    content: "NYC startups and growing SMBs need websites that scale. What works for 100 visitors per day breaks when you hit 10,000. Professional development ensures your website architecture can handle traffic spikes, integrates with business tools (CRM, marketing automation, payment processors), and allows for feature additions without complete rebuilds."
  }
];

export const SevenReasons: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-20 px-6 lg:px-20">
      <div className="max-w-[1000px] mx-auto">
        <FadeIn>
          <h3 className="text-3xl font-bold text-navy text-center mb-12 font-heading">
            Seven Critical Reasons NYC Businesses Can't Afford Poor Web Design
          </h3>
        </FadeIn>

        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div 
                className={`bg-white rounded-lg overflow-hidden transition-all duration-300 border ${
                  openIndex === index 
                    ? 'border-primary shadow-lg' 
                    : 'border-light shadow-md hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className={`p-2 rounded-md transition-colors duration-200 ${
                      openIndex === index 
                        ? 'bg-primary text-white' 
                        : 'bg-light text-slate group-hover:bg-gray-100'
                    }`}>
                      <reason.icon className="w-6 h-6 flex-shrink-0" />
                    </div>
                    <h4 className={`text-lg font-semibold transition-colors duration-200 ${
                      openIndex === index 
                        ? 'text-primary' 
                        : 'text-slate-800 group-hover:text-primary'
                    }`}>
                      {reason.headline}
                    </h4>
                  </div>
                  
                  <div className={`ml-4 p-1 rounded-full transition-all duration-200 ${
                    openIndex === index 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-slate-400 group-hover:text-primary group-hover:bg-primary/5'
                  }`}>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        ease: [0.04, 0.62, 0.23, 0.98],
                        opacity: { duration: 0.2 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="pl-14">
                          <p className="text-slate-600 leading-relaxed">
                            {reason.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
                