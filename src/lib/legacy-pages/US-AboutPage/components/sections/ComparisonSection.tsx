import React from 'react';
import { Container, Section } from '../ui/UIComponents';
import { Check, X, AlertTriangle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ComparisonSection() {
  const features = [
    { name: "Design Freedom", webflow: true, wp: "warn", custom: true, wix: false },
    { name: "Code Quality", webflow: true, wp: false, custom: true, wix: "warn" },
    { name: "SEO Performance", webflow: true, wp: "warn", custom: true, wix: false },
    { name: "Page Speed", webflow: true, wp: false, custom: true, wix: "warn" },
    { name: "Security", webflow: true, wp: false, custom: "warn", wix: true },
    { name: "Maintenance", webflow: true, wp: false, custom: false, wix: true },
    { name: "Content Updates", webflow: true, wp: "warn", custom: false, wix: true },
    { name: "Hosting Included", webflow: true, wp: false, custom: false, wix: true },
    { name: "Average Cost", webflow: "$5,000", wp: "$10,000+", custom: "$50,000+", wix: "$2,000", isText: true },
    { name: "Average Timeline", webflow: "2-5 weeks", wp: "6-10 weeks", custom: "12-20 weeks", wix: "1-2 weeks", isText: true },
  ];

  const renderCell = (status: boolean | "warn" | string, isText: boolean = false) => {
    if (isText) return <span className="text-sm font-bold">{status}</span>;
    if (status === true) return <div className="bg-emerald-50 w-8 h-8 rounded-full flex items-center justify-center mx-auto ring-1 ring-emerald-500/20"><Check className="w-4 h-4 text-emerald-600" strokeWidth={3} /></div>;
    if (status === false) return <div className="w-8 h-8 flex items-center justify-center mx-auto opacity-40"><X className="w-5 h-5 text-slate-400" /></div>;
    return <div className="w-8 h-8 flex items-center justify-center mx-auto bg-amber-50 rounded-full ring-1 ring-amber-500/20"><AlertTriangle className="w-4 h-4 text-amber-500" /></div>;
  };

  return (
    <Section className="bg-slate-50 py-32">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-4 tracking-tight">Why Webflow Wins: The Comprehensive Comparison</h2>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[1000px] bg-white rounded-[20px] shadow-lg shadow-slate-200/50 border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-5 p-4 bg-[#0F172A] text-white font-bold text-xs tracking-widest uppercase items-end">
              <div className="text-left pl-8 pb-3 flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5 text-blue-400" /> Feature
              </div>
              <div className="text-center pb-0">
                 <div className="bg-blue-600 text-white py-3 rounded-t-lg mx-2 shadow-lg relative top-4">Webflow</div>
              </div>
              <div className="text-center text-slate-400 pb-3">WordPress</div>
              <div className="text-center text-slate-400 pb-3">Custom Code</div>
              <div className="text-center text-slate-400 pb-3">Wix/Squarespace</div>
            </div>
            
            {features.map((row, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`grid grid-cols-5 p-5 border-b border-slate-100 items-center group transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-slate-50`}
              >
                <div className="font-semibold text-[#0F172A] pl-8 text-sm md:text-base">{row.name}</div>
                <div className="text-center py-2 relative">
                    {/* Highlight column background */}
                    <div className="absolute inset-y-[-20px] inset-x-2 bg-blue-50/50 -z-10 group-hover:bg-blue-50 transition-colors border-x border-blue-100/50" />
                    {renderCell(row.webflow, row.isText)}
                </div>
                <div className="text-center text-slate-600">{renderCell(row.wp, row.isText)}</div>
                <div className="text-center text-slate-600">{renderCell(row.custom, row.isText)}</div>
                <div className="text-center text-slate-600">{renderCell(row.wix, row.isText)}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center max-w-4xl mx-auto">
           <div className="inline-flex items-center justify-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1 h-full bg-blue-600" />
              <p className="text-xl text-[#0F172A] font-medium leading-relaxed">
                 <strong className="text-blue-600 block text-sm uppercase tracking-widest mb-2">Verdict</strong> 
                 Webflow delivers the perfect balance: design freedom of custom code, ease of DIY builders, and superior performance—at a fraction of the cost.
              </p>
           </div>
        </div>
      </Container>
    </Section>
  );
}