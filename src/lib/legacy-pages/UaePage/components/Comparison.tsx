import React from 'react';
import { Check, DollarSign, Zap, ShieldCheck, Cpu, Headphones, TrendingUp, XCircle } from 'lucide-react';

interface ComparisonProps {
  onOpenModal: () => void;
}

const features = [
  { 
    icon: DollarSign, 
    label: "Cost Strategy", 
    fj: "Affordable & Transparent", 
    trad: "Expensive Retainers", 
    free: "Hidden Costs",
  },
  { 
    icon: Zap, 
    label: "Delivery Speed", 
    fj: "2-4 Weeks (AI-Powered)", 
    trad: "3-6 Months", 
    free: "Unpredictable",
  },
  { 
    icon: ShieldCheck, 
    label: "Reliability", 
    fj: "99.9% Uptime SLA", 
    trad: "Variable", 
    free: "Low Reliability",
  },
  { 
    icon: Cpu, 
    label: "Technology", 
    fj: "Next.js, React, Modern", 
    trad: "Legacy Wordpress", 
    free: "Outdated Templates",
  },
  { 
    icon: Headphones, 
    label: "Support", 
    fj: "24/7 Dedicated Team", 
    trad: "Business Hours Only", 
    free: "Ghosting Risk",
  },
  { 
    icon: TrendingUp, 
    label: "Scalability", 
    fj: "Enterprise Ready", 
    trad: "Costly to Scale", 
    free: "Limited",
  },
];

const Comparison: React.FC<ComparisonProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1e293b]/50 to-[#0F172A]"></div>
          {/* Diagonal Lines Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
          {/* Floating Shapes */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-white mb-6">Why We Are The Best Website Design Company</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Compare FactoryJet against a typical <strong>low cost website design company</strong> or expensive traditional <strong>web design firms</strong>.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-[1.2fr_1.5fr_1fr_1fr] relative">
            {/* The FactoryJet Highlight Column Background Card - Positioned to match 2nd column (1.5fr) in 4.7fr total */}
            <div className="absolute top-0 bottom-0 left-[25.5%] w-[32%] bg-[#1a2332] rounded-2xl border-[3px] border-[#FF6B35] shadow-[0_0_50px_-12px_rgba(255,107,53,0.3)] z-0 -my-6">
                {/* Spotlight effect inside card */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#FF6B35]/10 to-transparent"></div>
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FF6B35] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg tracking-wider border border-white/20">
                    BEST VALUE
                </div>
            </div>

            {/* Header Row */}
            <div className="p-6"></div> {/* Empty top-left */}
            <div className="p-6 text-center z-10">
                <h3 className="text-2xl font-bold text-white">FactoryJet UAE</h3>
                <p className="text-sm text-[#FF6B35] font-medium mt-1">Premium & Affordable</p>
            </div>
            <div className="p-6 text-center z-10 flex flex-col justify-end pb-4">
                <h3 className="text-lg font-bold text-gray-400">Traditional Agencies</h3>
                <p className="text-xs text-gray-500 mt-1">Old School</p>
            </div>
            <div className="p-6 text-center z-10 flex flex-col justify-end pb-4">
                <h3 className="text-lg font-bold text-gray-400">Freelancers</h3>
                <p className="text-xs text-gray-500 mt-1">High Risk</p>
            </div>

            {/* Data Rows */}
            {features.map((item, idx) => (
                <React.Fragment key={idx}>
                    {/* Feature Label */}
                    <div className={`p-6 flex items-center gap-3 border-b border-white/5 ${idx % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                        <div className="text-gray-500"><item.icon size={20} /></div>
                        <span className="text-[16px] font-medium text-gray-300">{item.label}</span>
                    </div>

                    {/* FJ Value */}
                    <div className="p-6 flex items-center justify-center gap-3 z-10 border-b border-white/5 relative">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                            <Check size={14} className="text-green-500" strokeWidth={3} />
                        </div>
                        <span className="font-bold text-white text-[16px]">{item.fj}</span>
                    </div>

                    {/* Traditional Value */}
                    <div className={`p-6 flex items-center justify-center text-center border-b border-white/5 ${idx % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                         <div className="flex flex-col items-center gap-1">
                           <XCircle size={14} className="text-red-400/50" />
                           <span className="text-[14px] text-[#64748B]">{item.trad}</span>
                         </div>
                    </div>

                    {/* Freelancer Value */}
                    <div className={`p-6 flex items-center justify-center text-center border-b border-white/5 ${idx % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                         <div className="flex flex-col items-center gap-1">
                            <XCircle size={14} className="text-red-400/50" />
                            <span className="text-[14px] text-[#64748B]">{item.free}</span>
                         </div>
                    </div>
                </React.Fragment>
            ))}

            {/* Footer Row (CTA) */}
             <div className="p-6"></div>
             <div className="p-6 z-10 text-center pt-8">
                 <button 
                    onClick={onOpenModal}
                    className="w-full bg-[#0052CC] hover:bg-blue-600 text-white py-4 rounded-xl font-bold shadow-xl shadow-blue-900/20 hover:shadow-blue-900/40 transition-all transform hover:-translate-y-1 animate-pulse-slow border border-white/10"
                 >
                    Get Custom Quote
                 </button>
             </div>
             <div className="p-6"></div>
             <div className="p-6"></div>
        </div>

        {/* Mobile Stack View */}
        <div className="lg:hidden space-y-8">
            {/* FactoryJet Card */}
            <div className="bg-[#1a2332] rounded-2xl border-[3px] border-[#FF6B35] p-6 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FF6B35]/10 to-transparent"></div>
                 <div className="absolute top-4 right-4 bg-[#FF6B35] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Best Value
                </div>
                <div className="relative z-10 mb-8 text-center">
                    <h3 className="text-2xl font-bold text-white">FactoryJet UAE</h3>
                    <p className="text-sm text-gray-400 mt-2">The clear winner for serious businesses</p>
                </div>
                <div className="space-y-4 relative z-10">
                    {features.map((item, i) => (
                        <div key={i} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0">
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <item.icon size={16} /> {item.label}
                            </div>
                            <div className="text-white font-bold text-right text-sm flex items-center gap-2">
                                {item.fj} <Check size={14} className="text-green-500" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 relative z-10">
                     <button 
                        onClick={onOpenModal}
                        className="w-full bg-[#0052CC] hover:bg-blue-600 text-white py-3 rounded-lg font-bold shadow-lg transition-colors animate-pulse-slow"
                     >
                        Get Custom Quote
                     </button>
                </div>
            </div>

            {/* Competitors Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-80">
                <div className="bg-[#1e293b]/50 rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-bold text-gray-300 mb-4 text-center">Traditional Agencies</h3>
                    <ul className="space-y-3">
                         {features.slice(0,5).map((item, i) => (
                             <li key={i} className="flex justify-between text-xs text-[#64748B]">
                                 <span>{item.label}</span>
                                 <span className="text-red-400/70">{item.trad}</span>
                             </li>
                         ))}
                    </ul>
                </div>
                <div className="bg-[#1e293b]/50 rounded-xl p-6 border border-white/10">
                     <h3 className="text-lg font-bold text-gray-300 mb-4 text-center">Freelancers</h3>
                     <ul className="space-y-3">
                         {features.slice(0,5).map((item, i) => (
                             <li key={i} className="flex justify-between text-xs text-[#64748B]">
                                 <span>{item.label}</span>
                                 <span className="text-red-400/70">{item.free}</span>
                             </li>
                         ))}
                    </ul>
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Comparison;