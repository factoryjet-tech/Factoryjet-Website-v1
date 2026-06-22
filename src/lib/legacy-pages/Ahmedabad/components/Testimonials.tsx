
import React from 'react';
import { motion } from 'framer-motion';
import {
  Quote, Star, ArrowRight, ShieldCheck, Database,
  Warehouse, Factory, Receipt, BarChart4, Ship,
  Layers, PackageSearch, Sparkles
} from 'lucide-react';

const Testimonials: React.FC = () => {
  // Real Ahmedabad client testimonials
  const reviews = [
    {
      text: "FactoryJet transformed our textile export business with a B2B platform that handles multi-currency orders seamlessly. Our international inquiries tripled within 3 months.",
      author: "Ahmedabad Textile Mills",
      role: "Export Client",
      rating: 5,
      img: "https://picsum.photos/seed/textile/200/200"
    },
    {
      text: "The dealer management system they built connects all our 45+ showrooms across Gujarat. Real-time inventory sync has eliminated stockouts completely.",
      author: "Gujarat Automotive",
      role: "Automotive Client",
      rating: 5,
      img: "https://picsum.photos/seed/auto/200/200"
    }
  ];

  const erpFlow = [
    { icon: <Database size={18} />, label: "Purchase", desc: "Automated Sourcing" },
    { icon: <Factory size={18} />, label: "Manufacturing", desc: "Production Control" },
    { icon: <Warehouse size={18} />, label: "Inventory", desc: "Live Stock Sync" },
    { icon: <Receipt size={18} />, label: "Finance", desc: "GST & Tax Filing" },
    { icon: <Ship size={18} />, label: "Exports", desc: "Global Sales Ops" }
  ];

  return (
    <section className="py-14 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-jet-blue font-bold text-xs uppercase tracking-widest mb-3 block">Testimonials & Impact</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-jet-navy">Proven in Ahmedabad, <br className="md:hidden" /> Trusted Locally</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
          {reviews.map((r, i) => (
            <div key={i} className="bg-jet-white p-5 sm:p-6 rounded-[2rem] border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, idx) => <Star key={idx} size={14} className="text-yellow-500 fill-yellow-500" />)}
              </div>
              <p className="text-jet-navy text-base leading-relaxed mb-6 font-medium italic">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <img src={r.img} alt={r.author} className="w-10 h-10 rounded-full grayscale border border-slate-200" />
                <div>
                  <h4 className="font-bold text-jet-navy text-sm">{r.author}</h4>
                  <p className="text-[10px] text-jet-gray font-bold uppercase">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COMPACT DASHBOARD CASE STUDY: BALAJI WAFERS */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0f172a] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative border border-white/5">
            <div className="grid lg:grid-cols-2">

              {/* CONTENT PANEL */}
              <div className="p-6 sm:p-8 md:p-14 lg:p-20 flex flex-col justify-center bg-white text-jet-navy order-2 lg:order-1 relative z-20">
                <div className="inline-flex items-center gap-2 bg-jet-green/10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-5 md:mb-6 border border-jet-green/20">
                  <Layers size={14} className="text-jet-green" />
                  <span className="text-[10px] font-black text-jet-green uppercase tracking-widest">Enterprise E-Commerce Success</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-4 md:mb-6 leading-tight tracking-tight">
                  Scaling <span className="text-jet-orange underline decoration-orange-100 decoration-8 underline-offset-4">Balaji Wafers</span> Digital
                </h3>

                <p className="text-sm sm:text-base text-jet-slate mb-6 md:mb-8 leading-relaxed">
                  How we transformed Gujarat's beloved snack brand into a <strong>pan-India e-commerce powerhouse</strong>&mdash;with distributor portals and real-time inventory management.</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-10">
                  {erpFlow.map((step, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-jet-orange/30 transition-colors">
                      <div className="text-jet-orange mb-2">{step.icon}</div>
                      <h4 className="text-[11px] font-black text-jet-navy uppercase tracking-tighter mb-0.5">{step.label}</h4>
                      <p className="text-[9px] text-jet-gray font-bold">{step.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 bg-jet-navy text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-jet-blue transition-all group active:scale-95"
                  >
                    View Case Study <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-jet-navy">5X &rarr; Revenue</span>
                    <span className="text-[9px] font-bold text-jet-gray uppercase tracking-widest">Online Sales Growth</span>
                  </div>
                </div>
              </div>

              {/* VISUAL PANEL - VIBRANT IMAGE & DASHBOARD OVERLAY */}
              <div className="relative bg-[#020617] min-h-[450px] md:min-h-[500px] lg:min-h-full overflow-hidden order-1 lg:order-2 flex flex-col items-center justify-center p-6 md:p-12">
                {/* Real High-Quality Visual */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=1200"
                    className="w-full h-full object-cover opacity-60"
                    alt="FMCG Distribution"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/40" />
                </div>

                {/* Dashboard App Interface Mockup */}
                <motion.div
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full max-w-[440px] bg-white/95 backdrop-blur-md rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col z-10 border border-white/20"
                >
                  {/* Internal Mockup Header */}
                  <div className="bg-slate-50/80 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="bg-white px-4 py-1.5 rounded-lg border border-slate-200 text-[10px] text-slate-400 font-bold uppercase tracking-widest w-full max-w-[160px] text-center truncate">
                      Distributor Portal
                    </div>
                  </div>

                  {/* Mockup Dashboard Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h4 className="text-2xl font-black text-jet-navy tracking-tighter">Balaji</h4>
                        <p className="text-[10px] font-black text-jet-orange uppercase tracking-[0.2em]">Pan-India Network</p>
                      </div>
                      <Sparkles className="text-jet-orange" size={24} />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-[#f8fafc] p-4 rounded-3xl border border-slate-100 flex flex-col justify-end h-28">
                        <PackageSearch className="text-jet-blue mb-auto" size={20} />
                        <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Distributors</span>
                        <span className="text-base font-bold text-jet-navy">500+ Active</span>
                      </div>
                      <div className="bg-[#fff7ed] p-4 rounded-3xl border border-[#fed7aa] flex flex-col justify-end h-28">
                        <BarChart4 className="text-jet-orange mb-auto" size={20} />
                        <span className="text-[9px] font-black uppercase text-jet-orange/60 tracking-widest">Growth</span>
                        <span className="text-base font-bold text-jet-navy">+500% Orders</span>
                      </div>
                    </div>

                    {/* Dashboard Detail Line */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 bg-jet-navy text-white rounded-lg flex items-center justify-center">
                              <Ship size={16} />
                           </div>
                           <span className="text-xs font-bold text-jet-navy">Order #GJ-4092</span>
                        </div>
                        <span className="px-3 py-1 bg-jet-green/20 text-jet-green text-[9px] font-black rounded-full uppercase">Shipped</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Top Badge Overlay */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-10 right-10 bg-jet-navy/80 backdrop-blur-md text-white px-5 py-3 rounded-2xl border border-white/10 hidden md:flex items-center gap-3 z-30 shadow-2xl"
                >
                  <ShieldCheck size={20} className="text-jet-orange" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Gujarat's #1 FMCG Platform</span>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
