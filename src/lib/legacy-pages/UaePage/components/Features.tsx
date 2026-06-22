import React from 'react';
import { Smartphone, Zap, Search, Lock, Globe, Mail, Share2, BarChart2, MessageSquare, CreditCard, Edit3, ArrowRight } from 'lucide-react';

interface FeaturesProps {
  onOpenModal?: () => void;
}

const Features: React.FC<FeaturesProps> = ({ onOpenModal }) => {
  const features = [
    { icon: Smartphone, title: "Mobile Responsiveness", desc: "95% UAE traffic is mobile", priority: true, color: "#0052CC" },
    { icon: Zap, title: "Fast Loading Speed", desc: "<2 seconds load time required", priority: true, color: "#FF6B35" },
    { icon: Search, title: "SEO Optimization", desc: "Rank on Google UAE searches", priority: true, color: "#10B981" },
    { icon: Lock, title: "Security (SSL)", desc: "HTTPS encryption mandatory", color: "#334155" },
    { icon: Globe, title: "Arabic/English Support", desc: "Bilingual content capability", color: "#0052CC" },
    { icon: Mail, title: "Contact Forms", desc: "Lead capture optimization", color: "#FF6B35" },
    { icon: Share2, title: "Social Integration", desc: "Connect with UAE social platforms", color: "#10B981" },
    { icon: BarChart2, title: "Analytics Tracking", desc: "Monitor visitor behavior", color: "#334155" },
    { icon: MessageSquare, title: "WhatsApp Integration", desc: "Preferred UAE communication", color: "#0052CC" },
    { icon: CreditCard, title: "Payment Gateway", desc: "Local payment method support", color: "#FF6B35" },
    { icon: Edit3, title: "CMS Access", desc: "Easy content management", color: "#10B981" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#0F172A] mb-3">
            11 Essential Features Every Dubai Website Needs
          </h2>
          <div className="h-1 w-20 bg-[#FF6B35] mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {features.map((item, index) => (
                <div 
                    key={index}
                    className="w-full bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,82,204,0.12)] hover:-translate-y-2 hover:border-[#0052CC] transition-all duration-300 relative group flex flex-col min-h-[220px]"
                >
                    {/* Essential Badge */}
                    {item.priority && (
                        <div className="absolute top-0 right-0 bg-[#0F172A] text-white text-[11px] font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-xl uppercase tracking-wider shadow-sm z-10">
                            Essential
                        </div>
                    )}

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${item.color}15` }}>
                        <item.icon size={24} style={{ color: item.color }} />
                    </div>

                    {/* Content */}
                    <h3 className="text-[20px] font-semibold text-[#0F172A] mb-3 leading-tight group-hover:text-[#0052CC] transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-[15px] text-[#64748B] leading-relaxed">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center max-w-4xl mx-auto bg-gradient-to-r from-[#0052CC] to-[#003D99] rounded-2xl p-10 md:p-12 text-white shadow-2xl relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B35]/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

             <div className="relative z-10">
                <h3 className="text-[24px] md:text-[28px] font-bold mb-3">Ready to Build Your Dubai Website with All These Features?</h3>
                <p className="text-white/90 text-lg mb-8 font-light">Get a free consultation and custom quote in 24 hours.</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={onOpenModal} className="bg-[#FF6B35] hover:bg-[#e55a28] text-white px-8 py-3.5 rounded-lg font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                        Get Free Consultation <ArrowRight size={18} />
                    </button>
                     <a href="#portfolio" className="bg-white/10 hover:bg-white text-white hover:text-[#0052CC] border border-white/20 px-8 py-3.5 rounded-lg font-bold backdrop-blur-sm transition-all flex items-center justify-center gap-2">
                        View Our Portfolio
                    </a>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Features;