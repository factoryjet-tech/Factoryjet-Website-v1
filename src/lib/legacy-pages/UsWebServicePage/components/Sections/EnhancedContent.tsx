import React, { useState } from 'react';
import Link from 'next/link';
import { Check, CheckCircle, Star, Building2, Rocket, MapPin, Scale, ArrowUpRight, Briefcase, Layers, AlertCircle, ArrowRight, Clock, Flag, Layout, Trophy, TrendingUp, Users, Zap, ShoppingBag, Globe, Smartphone, MousePointerClick, Search, BarChart3, HelpCircle, ShieldCheck, CreditCard, Stethoscope, Landmark, Home, Server, ChevronDown, Calculator, Minus, Plus, Cpu, Hammer } from 'lucide-react';
import { QuickAnswer, ExpertTake, Button, CtaSection, SectionHeader } from '../UI/Common';
import { useForm } from '../UI/FormContext';

// B2B Section
export const B2BSection: React.FC = () => {
  const { openForm } = useForm();
  
  return (
    <section id="b2b" className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-100 to-white">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        <SectionHeader 
          icon={Building2}
          eyebrow="Specialized Web Design Services"
          title="B2B Website Design That Shortens Sales Cycles"
          subtitle="Your website should qualify leads before your sales team ever makes a call."
        />

        <QuickAnswer>
          B2B website design focuses on educating and qualifying complex buyers through content-rich experiences, lead capture mechanisms, and integration with sales tools. Unlike B2C sites that optimize for immediate purchase, B2B websites nurture relationships over weeks or months.
        </QuickAnswer>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-16 md:mb-24 mt-12 opacity-0 animate-fade-up delay-300">
           <div className="p-6 bg-slate-50 border-b border-slate-200">
              <h3 className="text-xl font-bold text-navy">Why B2B Websites Are Different</h3>
           </div>
           <div className="w-full overflow-x-auto">
               <div className="min-w-[600px] divide-y divide-slate-100">
                 {/* Table Header */}
                 <div className="grid grid-cols-3 bg-gradient-to-br from-navy to-slate-800 text-white p-6">
                    <div className="text-sm font-bold uppercase tracking-widest">Factor</div>
                    <div className="text-sm font-bold uppercase tracking-widest opacity-70">B2C Website</div>
                    <div className="text-sm font-bold uppercase tracking-widest text-jet-blue-light">B2B Website</div>
                 </div>
                 {/* Rows */}
                 {[
                   { factor: "Decision Timeline", b2c: "Minutes to days", b2b: "Weeks to months" },
                   { factor: "Decision Makers", b2c: "1 person", b2b: "3-7 stakeholders" },
                   { factor: "Content Depth", b2c: "Surface level", b2b: "Technical detail" },
                   { factor: "Primary CTA", b2c: "Buy Now", b2b: "Book Demo / Download Guide" },
                   { factor: "Trust Requirements", b2c: "Reviews, badges", b2b: "Case studies, ROI data" },
                   { factor: "Integration Needs", b2c: "E-commerce", b2b: "CRM, marketing automation" }
                 ].map((row, i) => (
                   <div key={i} className="grid grid-cols-3 p-6 items-center transition-all duration-300 hover:bg-blue-50/30 hover:border-l-4 hover:border-l-jet-blue hover:shadow-sm group border-l-4 border-transparent">
                      <div className="font-bold text-navy text-sm md:text-base">{row.factor}</div>
                      <div className="text-slate-500 text-sm md:text-base">{row.b2c}</div>
                      <div className="font-bold text-jet-blue flex items-center gap-2 text-sm md:text-base">
                         <div className="w-6 h-6 rounded-full bg-jet-green/10 flex items-center justify-center p-1 shrink-0">
                            <Check className="w-3 h-3 text-jet-green" strokeWidth={3} />
                         </div>
                         {row.b2b}
                      </div>
                   </div>
                 ))}
               </div>
           </div>
        </div>

        {/* Buyer Journey Stages */}
        <div className="mb-24">
           <h3 className="text-2xl font-bold text-navy mb-10 text-center">The B2B Buyer Journey Your Website Must Support</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                 { 
                   step: "01", title: "Awareness Stage", 
                   subtitle: "(Top of Funnel)",
                   bullets: ["Educational blog content", "Industry reports and whitepapers", "Thought leadership articles", "SEO-optimized landing pages"],
                   color: "from-blue-400 to-blue-600"
                 },
                 { 
                   step: "02", title: "Consideration Stage", 
                   subtitle: "(Middle of Funnel)",
                   bullets: ["Detailed product/service pages", "Case studies with metrics", "Comparison guides", "Webinar recordings", "ROI calculators"],
                   color: "from-blue-600 to-indigo-600"
                 },
                 { 
                   step: "03", title: "Decision Stage", 
                   subtitle: "(Bottom of Funnel)",
                   bullets: ["Pricing transparency", "Demo scheduling", "Customer testimonials", "Implementation timelines", "Security/compliance documentation"],
                   color: "from-indigo-600 to-purple-600"
                 }
              ].map((stage, i) => (
                 <div key={i} className={`bg-white rounded-[20px] p-8 shadow-lg border border-slate-100 relative group opacity-0 animate-card-entrance`} style={{ animationDelay: `${i * 150}ms` }}>
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stage.color} rounded-t-[20px]`}></div>
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform`}>
                       {stage.step}
                    </div>
                    <h4 className="text-xl font-bold text-navy">{stage.title}</h4>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">{stage.subtitle}</p>
                    <ul className="space-y-3">
                       {stage.bullets.map((b, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                             <Check className="w-4 h-4 text-jet-green shrink-0 mt-0.5" />
                             {b}
                          </li>
                       ))}
                    </ul>
                 </div>
              ))}
           </div>
        </div>

        <ExpertTake 
           quote="The biggest mistake B2B companies make is building a website that talks about themselves instead of their customers' problems. We structure B2B sites around buyer personas and pain points, not org charts and product features."
           author="David Chen"
           role="B2B Strategy Director"
        />
      </div>
    </section>
  );
};

// Startup Section
export const StartupSection: React.FC = () => {
  const { openForm } = useForm();
  
  return (
    <section id="startup" className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-[#F0FDF4] to-white">
      {/* Radial Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-jet-green/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        <SectionHeader 
          icon={Rocket}
          eyebrow="Startup-Focused Development"
          title="Startup Website Development That Scales With You"
          subtitle="From MVP landing page to Series A—we've helped 50+ startups build their digital foundation."
        />

        <QuickAnswer>
          Startup web design prioritizes speed-to-market, conversion optimization, and scalable architecture. Unlike enterprise websites that optimize for comprehensive features, startup sites focus on validating product-market fit and capturing early adopters.
        </QuickAnswer>

        {/* The Startup Website Challenge */}
        <div className="my-16 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
           <h3 className="text-2xl font-bold text-navy mb-6">The Startup Website Challenge</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                  <p className="mb-4 font-bold text-slate-700">You need to:</p>
                  <ul className="space-y-2">
                      {['Launch fast (investors are waiting)', 'Look credible (despite being unknown)', 'Convert visitors (prove traction)', 'Scale later (without rebuilding)', 'Stay lean (preserve runway)'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-600"><div className="w-1.5 h-1.5 bg-jet-green rounded-full shrink-0"></div> {item}</li>
                      ))}
                  </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <p className="mb-4 font-bold text-red-800">Most agencies either:</p>
                  <ul className="space-y-3">
                      <li className="flex gap-2 text-red-700"><AlertCircle className="w-5 h-5 shrink-0"/> Build too slow (agency timelines don't match startup speed)</li>
                      <li className="flex gap-2 text-red-700"><AlertCircle className="w-5 h-5 shrink-0"/> Build too cheap (breaks when you scale)</li>
                      <li className="flex gap-2 text-red-700"><AlertCircle className="w-5 h-5 shrink-0"/> Build too expensive (burns precious runway)</li>
                  </ul>
              </div>
           </div>
        </div>

        <h3 className="text-2xl font-bold text-navy mb-10 text-center">The FactoryJet Startup Approach</h3>

        {/* Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
           {/* Phase 1 */}
           <div className="bg-white border border-slate-200 rounded-[24px] p-8 relative flex flex-col group hover:shadow-lg transition-all duration-300 opacity-0 animate-card-entrance [animation-delay:100ms]">
              <div className="inline-block bg-orange-100 text-jet-orange font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-6 w-max">
                 Phase 1: Validate
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Launch Fast</h3>
              <p className="text-sm text-slate-500 mb-6">Pre-launch, validation.</p>
              
              <div className="mb-6">
                 <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <span>Timeline</span>
                    <span>1-2 Weeks</span>
                 </div>
                 <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[33%] bg-gradient-to-r from-jet-orange to-orange-400 rounded-full"></div>
                 </div>
              </div>

              <div className="mb-8">
                 <div className="text-xs text-slate-500 mb-1">Investment</div>
                 <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-jet-orange to-red-500">$999 - $2,999</div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                 {['Single landing page', 'Clear value proposition', 'Email capture', 'Analytics tracking', 'Social proof'].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 group-hover:translate-x-1 transition-transform">
                       <div className="mt-0.5 w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-jet-orange" strokeWidth={3} />
                       </div>
                       {feat}
                    </li>
                 ))}
              </ul>
           </div>

           {/* Phase 2 */}
           <div className="bg-white border border-slate-200 rounded-[24px] p-8 relative flex flex-col group hover:shadow-xl transition-all duration-300 transform md:scale-105 z-10 opacity-0 animate-card-entrance [animation-delay:200ms]">
              <div className="absolute -top-3 right-6 bg-gradient-to-br from-jet-green to-jet-green-dark text-white text-[11px] font-bold px-4 py-2 rounded-full shadow-[0_4px_12px_rgba(16,185,129,0.4)] animate-badge-bounce flex items-center gap-1.5 z-20">
                 <Star className="w-3 h-3 fill-current" />
                 Most Common
              </div>

              <div className="inline-block bg-blue-100 text-jet-blue font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-6 w-max">
                 Phase 2: Convert
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Grow Smart</h3>
              <p className="text-sm text-slate-500 mb-6">Post-funding, scaling.</p>
              
              <div className="mb-6">
                 <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <span>Timeline</span>
                    <span>3-4 Weeks</span>
                 </div>
                 <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-gradient-to-r from-jet-blue to-blue-400 rounded-full"></div>
                 </div>
              </div>

              <div className="mb-8">
                 <div className="text-xs text-slate-500 mb-1">Investment</div>
                 <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-jet-blue to-blue-600">$4,999 - $8,999</div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                 {['Multi-page marketing site', 'Product/feature pages', 'Pricing page', 'Blog foundation', 'Basic SEO'].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 group-hover:translate-x-1 transition-transform">
                       <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-jet-blue" strokeWidth={3} />
                       </div>
                       {feat}
                    </li>
                 ))}
              </ul>
           </div>

           {/* Phase 3 */}
           <div className="bg-white border border-slate-200 rounded-[24px] p-8 relative flex flex-col group hover:shadow-lg transition-all duration-300 opacity-0 animate-card-entrance [animation-delay:300ms]">
              <div className="inline-block bg-green-100 text-jet-green-dark font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-6 w-max">
                 Phase 3: Scale
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Scale Big</h3>
              <p className="text-sm text-slate-500 mb-6">Series A+, enterprise ready.</p>
              
              <div className="mb-6">
                 <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <span>Timeline</span>
                    <span>6-8 Weeks</span>
                 </div>
                 <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[100%] bg-gradient-to-r from-jet-green to-emerald-500 rounded-full"></div>
                 </div>
              </div>

              <div className="mb-8">
                 <div className="text-xs text-slate-500 mb-1">Investment</div>
                 <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-jet-green to-emerald-600">$12,000+</div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                 {['Full marketing site', 'Content hub', 'Lead generation system', 'CRM integration', 'Product demo/trial'].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 group-hover:translate-x-1 transition-transform">
                       <div className="mt-0.5 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-jet-green" strokeWidth={3} />
                       </div>
                       {feat}
                    </li>
                 ))}
              </ul>
           </div>
        </div>

        {/* Startup Tech Stack Recommendations */}
        <div className="max-w-4xl mx-auto mb-24 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white opacity-0 animate-fade-up [animation-delay:400ms]">
           <div className="bg-gradient-to-r from-navy to-slate-800 p-6 text-white">
              <h3 className="font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                  <Layers className="w-4 h-4 text-jet-blue" /> Startup Tech Stack Recommendations
              </h3>
           </div>
           <div className="w-full overflow-x-auto">
              <table className="w-full text-sm text-left min-w-[600px]">
                  <thead className="bg-slate-50 text-slate-500 uppercase font-bold text-xs">
                      <tr>
                          <th className="px-6 py-4 whitespace-nowrap">Startup Stage</th>
                          <th className="px-6 py-4 whitespace-nowrap">Recommended Stack</th>
                          <th className="px-6 py-4 whitespace-nowrap">Why</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                      {[
                          { stage: "Pre-Seed", stack: "Framer or Webflow", why: "Speed, low cost, easy iteration" },
                          { stage: "Seed", stack: "Next.js + Headless CMS", why: "Performance, SEO, scalability" },
                          { stage: "Series A", stack: "Next.js + Custom Backend", why: "Full control, complex features" },
                          { stage: "Series B+", stack: "Custom Application", why: "Enterprise requirements" }
                      ].map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-4 font-bold text-navy whitespace-nowrap">{row.stage}</td>
                              <td className="px-6 py-4 text-jet-blue font-semibold whitespace-nowrap">{row.stack}</td>
                              <td className="px-6 py-4 text-slate-600">{row.why}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
           </div>
        </div>

        <ExpertTake 
           quote="Don't overbuild. Your Series A website shouldn't be your seed stage website. We design upgrade paths so you can start lean and scale smart."
           author="Sarah Jenkins"
           role="Startup Advisor & Angel Investor"
        />

        {/* Custom CTA Section */}
        <div className="relative rounded-[24px] p-8 md:p-12 text-center text-white overflow-hidden shadow-2xl opacity-0 animate-fade-up [animation-delay:600ms]" 
             style={{ background: 'linear-gradient(135deg, #FF6B35, #F97316)' }}>
           <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
           
           <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Launch?</h3>
              <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">Get your MVP to market in as little as 14 days with our rapid development sprint.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => openForm('MVP Launch')} className="px-8 py-4 bg-white text-jet-orange font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-orange-50 transition-all flex items-center justify-center gap-2 group">
                      Launch Your MVP in 2 Weeks
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                  <Link href="/us/pricing" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white transition-all">
                      View Startup Pricing
                  </Link>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

// Local Section
export const LocalSection: React.FC = () => {
  // Data for Tiers
  const tiers = [
    {
      name: "Major Markets",
      color: "blue", // Jet Blue #0052CC
      hex: "#0052CC",
      bg: "bg-blue-50",
      text: "text-blue-700",
      cities: ["New York City, NY", "San Francisco, CA", "Los Angeles, CA", "Austin, TX", "Seattle, WA", "Chicago, IL"]
    },
    {
      name: "Regional Hubs",
      color: "orange", // Jet Orange #FF6B35
      hex: "#FF6B35",
      bg: "bg-orange-50",
      text: "text-orange-600",
      cities: ["Denver, CO", "Miami, FL", "Boston, MA", "Atlanta, GA", "Portland, OR", "Dallas, TX"]
    },
    {
      name: "Emerging Markets",
      color: "green", // Jet Green #10B981
      hex: "#10B981",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      cities: ["Buffalo, NY", "Nashville, TN", "Raleigh, NC", "Salt Lake City, UT", "Phoenix, AZ", "Pittsburgh, PA"]
    }
  ];

  return (
    <section id="local" className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">
       {/* Map Overlay */}
       <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 800 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M750 200c0 0-20-50-50-50s-40 10-60 10-50-30-70-30-40 20-60 20-40-10-60-10-50 20-70 20-40-10-60-10-50 20-70 20-40-10-60-10-40 30-60 30-40-20-60-20-40 10-60 10-50-30-70-30-30 40-30 60 20 40 40 40 40-10 60-10 40 20 60 20 40-10 60-10 50 30 70 30 40-20 60-20 40 10 60 10 50-20 70-20 40 10 60 10 40-30 60-30 20-50 20-70z' fill='%23000'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }}>
       </div>

       <div className="container mx-auto px-4 md:px-6 relative z-10">
         
         <SectionHeader 
            icon={MapPin}
            eyebrow="US Coverage"
            title="Professional Web Design Services in Your City"
            subtitle="FactoryJet provides web design services across the United States. We combine national expertise with local market understanding."
         />

         <QuickAnswer>
            FactoryJet provides web design services across the United States, with particular expertise in emerging tech hubs and growing markets. Our distributed team model means you get Silicon Valley-quality development with local market knowledge.
         </QuickAnswer>

         {/* Tier Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {tiers.map((tier, i) => (
               <div key={i} className="group bg-white rounded-[20px] p-8 border border-slate-200 shadow-sm hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: tier.hex }}></div>
                  
                  <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 ${tier.bg} ${tier.text}`}>
                     Tier {i + 1}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy mb-6">{tier.name}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                     {tier.cities.map((city, idx) => (
                        <span key={idx} 
                              className="px-3 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-lg transition-colors group-hover:bg-opacity-50 hover:!bg-opacity-100 hover:scale-105 transform duration-200 cursor-default"
                              style={{ '--hover-color': tier.hex } as any}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = `${tier.hex}15`;
                                e.currentTarget.style.color = tier.hex;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '';
                                e.currentTarget.style.color = '';
                              }}
                        >
                           {city}
                        </span>
                     ))}
                  </div>
               </div>
            ))}
         </div>

         {/* Service Highlights */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             <div className="flex flex-col items-center text-center p-6">
                 <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-jet-blue mb-4">
                     <Clock className="w-8 h-8" />
                 </div>
                 <h4 className="font-bold text-navy text-lg mb-2">Same Timezone Support</h4>
                 <p className="text-slate-600 text-sm">Real-time collaboration during your business hours.</p>
             </div>
             <div className="flex flex-col items-center text-center p-6">
                 <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-jet-orange mb-4">
                     <MapPin className="w-8 h-8" />
                 </div>
                 <h4 className="font-bold text-navy text-lg mb-2">Local Market Knowledge</h4>
                 <p className="text-slate-600 text-sm">Design trends that resonate with your specific region.</p>
             </div>
             <div className="flex flex-col items-center text-center p-6">
                 <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-jet-green mb-4">
                     <Flag className="w-8 h-8" />
                 </div>
                 <h4 className="font-bold text-navy text-lg mb-2">100% US-Based</h4>
                 <p className="text-slate-600 text-sm">No outsourcing. All code is written in the USA.</p>
             </div>
         </div>
       </div>
    </section>
  );
};

// Comparisons Section
export const ComparisonsSection: React.FC = () => {
  return (
    <section id="compare" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
                icon={Scale}
                eyebrow="Compare"
                title="Why Choose FactoryJet?"
                subtitle="See how we stack up against traditional agencies and freelancers."
            />
            
            <div className="overflow-x-auto pb-8">
                <div className="min-w-[800px] bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="grid grid-cols-4 bg-navy text-white p-6 text-sm font-bold uppercase tracking-wider">
                        <div className="flex items-center">Feature</div>
                        <div className="flex items-center justify-center opacity-70">Freelancer</div>
                        <div className="flex items-center justify-center opacity-70">Traditional Agency</div>
                        <div className="flex items-center justify-center text-jet-blue-light">FactoryJet</div>
                    </div>
                    {[
                        { name: "Code Quality", freelance: "Variable", agency: "Outsourced", fj: "Enterprise Grade" },
                        { name: "Turnaround Time", freelance: "Unpredictable", agency: "3-6 Months", fj: "21 Days" },
                        { name: "Cost", freelance: "$2k - $10k", agency: "$25k - $100k", fj: "$5k - $15k" },
                        { name: "Ownership", freelance: "Full", agency: "Vendor Lock-in", fj: "100% Code Ownership" },
                        { name: "Scalability", freelance: "Low", agency: "Medium", fj: "High (Next.js)" },
                    ].map((row, i) => (
                        <div key={i} className="grid grid-cols-4 p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                            <div className="font-bold text-navy">{row.name}</div>
                            <div className="text-center text-slate-500">{row.freelance}</div>
                            <div className="text-center text-slate-500">{row.agency}</div>
                            <div className="text-center font-bold text-jet-blue flex items-center justify-center gap-2">
                                <Check className="w-4 h-4" /> {row.fj}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

// Case Studies Section
export const CaseStudiesSection: React.FC = () => {
  const { openForm } = useForm();
  
  return (
    <section id="case-studies" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
                icon={Trophy}
                eyebrow="Results"
                title="Proven Track Record"
                subtitle="We don't just build websites; we build business assets."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { company: "TechFlow SaaS", metric: "+140%", label: "Lead Conversion", desc: "Migrated from WordPress to Next.js, reducing load time to 0.8s." },
                    { company: "Urban Gear", metric: "+85%", label: "Mobile Sales", desc: "Redesigned Shopify Plus store with mobile-first UX." },
                    { company: "Apex Finance", metric: "2.5x", label: "Organic Traffic", desc: "SEO-optimized architecture and content strategy implementation." },
                ].map((study, i) => (
                    <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all">
                        <div className="text-4xl font-black text-jet-blue mb-2">{study.metric}</div>
                        <div className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">{study.label}</div>
                        <h4 className="text-xl font-bold text-navy mb-3">{study.company}</h4>
                        <p className="text-slate-600">{study.desc}</p>
                    </div>
                ))}
            </div>
            
            <div className="mt-12 text-center">
                <Link href="/case" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-300 text-navy font-bold rounded-xl hover:border-jet-blue hover:bg-jet-blue/5 transition-all">
                  View All Case Studies <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    </section>
  );
};

// Migration Section
export const MigrationSection: React.FC = () => {
  const { openForm } = useForm();
  
  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-jet-blue/10 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-jet-blue/20 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Trapped in a Legacy Platform?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                We specialize in complex migrations. Whether it's moving from Drupal to Next.js, or Magento to Shopify Plus, we handle the data, SEO redirects, and design upgrades.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {['Zero Data Loss', 'SEO Preservation', 'No Downtime', 'Training Included'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-bold">
                        <Check className="w-4 h-4 text-jet-green" /> {item}
                    </div>
                ))}
            </div>
            <Button variant="accent" onClick={() => openForm('Migration Inquiry')}>Discuss Your Migration</Button>
        </div>
    </section>
  );
};

// Industries Section
export const IndustriesSection: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
                icon={Briefcase}
                eyebrow="Industries"
                title="Specialized Expertise"
                subtitle="We have deep experience in regulated and high-trust industries."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { icon: Stethoscope, name: "Healthcare" },
                    { icon: Landmark, name: "Finance" },
                    { icon: Home, name: "Real Estate" },
                    { icon: ShoppingBag, name: "E-Commerce" },
                    { icon: Server, name: "SaaS" },
                    { icon: Hammer, name: "Construction" },
                    { icon: Briefcase, name: "Legal" },
                    { icon: Zap, name: "Energy" },
                ].map((ind, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-6 rounded-xl border border-slate-100 hover:border-jet-blue/50 hover:bg-blue-50/50 transition-all group">
                        <ind.icon className="w-8 h-8 text-slate-400 group-hover:text-jet-blue mb-3 transition-colors" />
                        <span className="font-bold text-navy">{ind.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ROI Section
export const ROISection: React.FC = () => {
  const { openForm } = useForm();
  
  return (
    <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
             <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 flex flex-col md:flex-row items-center gap-12">
                 <div className="flex-1">
                     <SectionHeader
                        icon={TrendingUp}
                        eyebrow="ROI Focused"
                        title="The Cost of a Bad Website"
                        subtitle="A slow, outdated website isn't just an eyesore—it's leaking revenue every hour."
                        centered={false}
                     />
                     <ul className="space-y-4">
                         {[
                             "75% of users judge credibility based on design.",
                             "53% of mobile users leave if load time > 3s.",
                             "A bad experience drives customers to competitors."
                         ].map((stat, i) => (
                             <li key={i} className="flex items-start gap-3">
                                 <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                 <span className="text-slate-700 font-medium">{stat}</span>
                             </li>
                         ))}
                     </ul>
                 </div>
                 <div className="flex-1 w-full bg-navy rounded-2xl p-8 text-white relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-jet-blue opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                     <h3 className="text-2xl font-bold mb-6 relative z-10">Projected Impact</h3>
                     <div className="space-y-6 relative z-10">
                         <div>
                             <div className="flex justify-between text-sm text-slate-400 mb-1">Conversion Rate Increase</div>
                             <div className="text-3xl font-bold text-jet-green">+25% to +200%</div>
                         </div>
                         <div>
                             <div className="flex justify-between text-sm text-slate-400 mb-1">Page Load Speed</div>
                             <div className="text-3xl font-bold text-jet-blue">&lt; 1 Second</div>
                         </div>
                         <Link href="/us/pricing" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-jet-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg">
                           Calculate Your ROI <ArrowRight className="w-4 h-4" />
                         </Link>
                     </div>
                 </div>
             </div>
        </div>
    </section>
  );
};

// Pricing Section
export const PricingSection: React.FC = () => {
  const { openForm } = useForm();
  
  return (
    <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <SectionHeader
                icon={CreditCard}
                eyebrow="Transparent Pricing"
                title="Investment Packages"
                subtitle="No hidden fees. No hourly billing surprises. Just flat-rate pricing for exceptional results."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                    { name: "Starter", price: "$4,999", desc: "Perfect for local businesses.", features: ["Custom Design", "5 Pages", "Contact Form", "Basic SEO", "CMS Training"] },
                    { name: "Growth", price: "$9,999", desc: "Best for growing companies.", featured: true, features: ["Everything in Starter", "10-15 Pages", "Blog/News Section", "Advanced SEO", "Analytics Dashboard", "Lead Magnet Setup"] },
                    { name: "Enterprise", price: "Custom", desc: "For large scale operations.", features: ["Complex Web Apps", "E-Commerce", "Custom API Integrations", "SSO / Security", "SLA Support"] },
                ].map((plan, i) => (
                    <div key={i} className={`relative rounded-2xl p-8 border ${plan.featured ? 'border-jet-blue shadow-2xl scale-105 z-10 bg-white' : 'border-slate-200 bg-slate-50'}`}>
                        {plan.featured && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-jet-blue text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                Most Popular
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-navy mb-2">{plan.name}</h3>
                        <div className="text-3xl font-black text-navy mb-4">{plan.price}</div>
                        <p className="text-slate-500 mb-6 text-sm">{plan.desc}</p>
                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feat, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                                    <Check className="w-4 h-4 text-jet-green shrink-0" />
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <Button variant={plan.featured ? 'primary' : 'secondary'} fullWidth onClick={() => openForm(`${plan.name} Plan`)}>Choose {plan.name}</Button>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

// Expanded FAQ Section
export const ExpandedFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqs = [
        { q: "How long does a project take?", a: "Our standard turnaround for a marketing website is 21 days. Larger e-commerce or web app projects typically take 6-8 weeks." },
        { q: "Do I own the code?", a: "Yes, absolutely. Unlike other agencies that hold your site hostage, you get full ownership of the GitHub repository and all assets upon completion." },
        { q: "Will I be able to edit the site myself?", a: "Yes. We build with user-friendly CMS options (like Sanity, WordPress, or Shopify) so you can easily update text and images without touching code." },
        { q: "Do you offer hosting?", a: "We can set up hosting for you on high-performance platforms like Vercel or Netlify, but the account will be in your name. We don't markup hosting fees." },
        { q: "What is your payment schedule?", a: "Typically 50% upfront to book your slot, 25% at design approval, and 25% upon launch." },
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
            },
        })),
    };

    return (
        <section id="faq" className="py-20 bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <SectionHeader
                    icon={HelpCircle}
                    eyebrow="FAQ"
                    title="Common Questions"
                    subtitle="Everything you need to know before we start."
                />
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-navy text-lg">{faq.q}</span>
                                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`px-6 text-slate-600 overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};