import React from 'react';
import { Check, Plus, ShieldCheck, Clock, Zap } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (plan: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section className="py-24 bg-white text-[#0F172A]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 tracking-tight font-heading">
            Transparent, Predictable Pricing for NYC Businesses
          </h2>
          <p className="text-xl text-[#64748B] font-medium">
            No Hidden Costs. No Surprises. Just Clear, Fair Pricing.
          </p>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="group bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-2xl hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-[#0052CC]/10 rounded-xl flex items-center justify-center mb-6 text-[#0052CC]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4 text-[#0F172A] font-heading">Fixed-Scope Pricing</h4>
            <p className="text-[#334155] leading-relaxed">You get a detailed proposal with exact deliverables and costs before we start. No "scope creep" charges.</p>
          </div>
          <div className="group bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-2xl hover:shadow-lg transition-all">
             <div className="w-12 h-12 bg-[#0052CC]/10 rounded-xl flex items-center justify-center mb-6 text-[#0052CC]">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4 text-[#0F172A] font-heading">50/50 Payment Terms</h4>
            <p className="text-[#334155] leading-relaxed">50% to start, 50% on completion. Fair for both sides. We're invested in your success.</p>
          </div>
          <div className="group bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-2xl hover:shadow-lg transition-all">
             <div className="w-12 h-12 bg-[#0052CC]/10 rounded-xl flex items-center justify-center mb-6 text-[#0052CC]">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4 text-[#0F172A] font-heading">All-Inclusive Packages</h4>
            <p className="text-[#334155] leading-relaxed">Design, development, testing, launch, and training all included. Support packages optional.</p>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#F8FAFC] p-10 rounded-3xl border border-[#E2E8F0] shadow-sm">
          <div>
            <h4 className="text-2xl font-bold mb-8 text-[#10B981] flex items-center gap-2 font-heading">
              <span className="w-2 h-2 bg-[#10B981] rounded-full"></span> Included Always
            </h4>
            <ul className="space-y-4">
              {[
                'Project management', 'Custom design', 'Mobile responsiveness', 'SEO foundation', 'Security setup',
                'Speed optimization', 'Browser testing', 'Content migration', 'Staff training', '30-day bug fixes'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="bg-[#10B981]/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <span className="text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-8 text-[#0052CC] flex items-center gap-2 font-heading">
              <span className="w-2 h-2 bg-[#0052CC] rounded-full"></span> Available Add-Ons
            </h4>
            <ul className="space-y-4">
              {[
                'Content writing', 'Professional photography', 'Video production', 'Advanced SEO', 'Paid advertising',
                'Social media setup', 'Email marketing', 'CRM integration', 'Extended support', 'Hosting management'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="bg-[#0052CC]/20 p-1 rounded-full">
                    <Plus className="w-4 h-4 text-[#0052CC]" />
                  </div>
                  <span className="text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Investment Table */}
        <div className="mb-32 overflow-x-auto rounded-2xl border border-[#E2E8F0] shadow-lg">
          <table className="w-full text-left border-collapse min-w-[700px] bg-white">
            <thead>
              <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                <th className="p-6 font-semibold text-[#0F172A] uppercase text-sm tracking-wider font-heading">Project Type</th>
                <th className="p-6 font-semibold text-[#0F172A] uppercase text-sm tracking-wider font-heading">Investment Range</th>
                <th className="p-6 font-semibold text-[#0F172A] uppercase text-sm tracking-wider font-heading">Timeline</th>
                <th className="p-6 font-semibold text-[#0F172A] uppercase text-sm tracking-wider font-heading">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {[
                { type: 'Landing Page', cost: '$2,500 - $5,000', time: '5-7 days', best: 'Campaigns, testing' },
                { type: 'Basic Website (5-10 pages)', cost: '$3,500 - $8,000', time: '7-14 days', best: 'Startups, services' },
                { type: 'Professional Website (10-25 pages)', cost: '$8,000 - $18,000', time: '14-21 days', best: 'Growing businesses' },
                { type: 'E-Commerce Store', cost: '$8,000 - $35,000', time: '21-45 days', best: 'Product sellers' },
                { type: 'Custom Application', cost: '$15,000 - $150,000+', time: '8-24 weeks', best: 'Unique needs' }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="p-6 font-medium text-[#0F172A]">{row.type}</td>
                  <td className="p-6 text-[#FF6B35] font-bold text-lg border-l-4 border-l-[#FF6B35]">{row.cost}</td>
                  <td className="p-6 text-[#334155]">{row.time}</td>
                  <td className="p-6 text-[#334155]">{row.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AMC */}
        <div>
          <h3 className="text-3xl font-bold mb-12 text-center text-[#0F172A] font-heading">Ongoing Support & Maintenance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col shadow-sm">
              <h5 className="text-xl font-bold text-[#0F172A] mb-2 font-heading">Basic AMC</h5>
              <span className="text-[10px] sm:text-xs font-semibold text-[#FF6B35] uppercase tracking-wider">Starting At</span>
              <div className="text-4xl font-bold text-[#0052CC] mb-6 mt-1">$299<span className="text-lg text-[#64748B] font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 text-[#334155] flex-1">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Security updates</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Performance monitoring</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Monthly backups</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Basic support</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> 2 hours/month changes</li>
              </ul>
              <button onClick={() => onSelectPlan('Basic AMC')} className="w-full py-3 rounded-lg border-2 border-[#0052CC] text-[#0052CC] hover:bg-[#0052CC] hover:text-white transition-colors font-medium">
                Select Plan
              </button>
            </div>
            
            {/* Professional */}
            <div className="bg-[#F8FAFC] border-2 border-[#0052CC] p-8 rounded-2xl transform md:-translate-y-4 shadow-xl flex flex-col relative">
               <div className="absolute top-0 right-0 bg-[#0052CC] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl">POPULAR</div>
              <h5 className="text-xl font-bold text-[#0F172A] mb-2 font-heading">Professional AMC</h5>
              <span className="text-[10px] sm:text-xs font-semibold text-[#FF6B35] uppercase tracking-wider">Starting At</span>
              <div className="text-4xl font-bold text-[#0052CC] mb-6 mt-1">$599<span className="text-lg text-[#64748B] font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 text-[#334155] flex-1">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Everything in Basic</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Weekly backups</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Priority support</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> 5 hours/month changes</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> SEO monitoring</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Analytics reports</li>
              </ul>
              <button onClick={() => onSelectPlan('Professional AMC')} className="w-full py-3 rounded-lg bg-[#0052CC] hover:shadow-[0_4px_12px_rgba(0,82,204,0.3)] text-white font-bold transition-all">
                Select Plan
              </button>
            </div>
            
            {/* Enterprise */}
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col shadow-sm">
              <h5 className="text-xl font-bold text-[#0F172A] mb-2 font-heading">Enterprise AMC</h5>
              <span className="text-[10px] sm:text-xs font-semibold text-[#FF6B35] uppercase tracking-wider">Starting At</span>
              <div className="text-4xl font-bold text-[#0052CC] mb-6 mt-1">$1,200<span className="text-lg text-[#64748B] font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 text-[#334155] flex-1">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Everything in Professional</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Daily backups</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> 24/7 emergency support</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> 10 hours/month changes</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Conversion optimization</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Quarterly strategy</li>
              </ul>
              <button onClick={() => onSelectPlan('Enterprise AMC')} className="w-full py-3 rounded-lg border-2 border-[#0052CC] text-[#0052CC] hover:bg-[#0052CC] hover:text-white transition-colors font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}