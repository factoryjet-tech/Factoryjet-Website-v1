import React, { useState } from 'react';
import { ShieldCheck, Users, Globe2, Award, Zap, Target, Rocket, CheckCircle2, ChevronRight } from 'lucide-react';

const AgencyInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "AI Workflows",
      content: "Our AI-native methodology doesn't replace human expertise—it amplifies it. AI handles repetitive technical tasks, code optimization, and testing automation while our expert designers focus on innovation, user experience, and business strategy."
    },
    {
      title: "Comprehensive Optimization",
      content: "Every website is optimized for the complete discovery ecosystem: SEO for Google rankings, GEO for AI search engines like Perplexity, AEO for featured snippets, and AIO ensuring accurate brand representation in ChatGPT and Claude."
    },
    {
      title: "Quality Assurance",
      content: "AI-speed doesn't mean compromised quality. Our human experts review every deliverable, ensuring brand alignment, conversion optimization, and strategic positioning. You get the best of both worlds: fast delivery with expert quality control."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* === HEADER SECTION === */}
        <div className="max-w-4xl mb-12 animate-fade-up">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy/5 text-navy rounded-full text-xs font-bold tracking-wide uppercase mb-6">
              <Award size={14} className="text-secondary" />
              <span>Leading Web Design Firm</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
              What is FactoryJet? <br/>
              <span className="text-primary">Your Strategic Web Design Partner</span>
            </h2>
            <div className="h-1 w-20 bg-secondary rounded-full mb-8"></div>

            <p className="text-[18px] leading-relaxed text-[#334155] max-w-3xl">
               FactoryJet is the UAE's pioneering AI-native digital transformation partner. Recognized as a top web design agency in Dubai, we've fundamentally reimagined how website designers and developers work through revolutionary AI-enhanced workflows.
            </p>
        </div>

        {/* === VISUAL HIGHLIGHT BAR === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="bg-gradient-to-br from-blue-50/50 to-orange-50/50 rounded-2xl p-8 border border-blue-100 hover:-translate-y-1 transition-transform duration-300 text-center group">
               <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-primary">
                  <Zap size={28} />
               </div>
               <div className="text-3xl font-bold text-primary mb-1">5-7 Days</div>
               <div className="text-base font-bold text-navy mb-1">Delivery</div>
               <div className="text-sm text-gray-500">vs Industry 6-8 Weeks</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50/50 to-orange-50/50 rounded-2xl p-8 border border-blue-100 hover:-translate-y-1 transition-transform duration-300 text-center group">
               <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-secondary">
                  <Target size={28} />
               </div>
               <div className="text-3xl font-bold text-primary mb-1">AI + Human</div>
               <div className="text-base font-bold text-navy mb-1">Expertise</div>
               <div className="text-sm text-gray-500">25+ Years Experience</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50/50 to-orange-50/50 rounded-2xl p-8 border border-blue-100 hover:-translate-y-1 transition-transform duration-300 text-center group">
               <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-accent">
                  <Rocket size={28} />
               </div>
               <div className="text-3xl font-bold text-primary mb-1">4-in-1</div>
               <div className="text-base font-bold text-navy mb-1">Optimization</div>
               <div className="text-sm text-gray-500">SEO · GEO · AEO · AIO</div>
            </div>
        </div>

        {/* === MAIN CONTENT GRID === */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
           
           {/* LEFT: Benefits List */}
           <div>
              <h3 className="text-2xl font-bold text-navy mb-8">Why Choose FactoryJet</h3>
              <div className="space-y-8">
                 {[
                    {
                       icon: Zap,
                       color: "bg-blue-100 text-primary",
                       title: "AI-Native Approach",
                       desc: "While traditional agencies use manual processes, we leverage AI-enhanced workflows that enable expert designers to work at unprecedented speed."
                    },
                    {
                       icon: Rocket,
                       color: "bg-orange-100 text-secondary",
                       title: "Speed Without Compromise",
                       desc: "Complete websites in 5-7 days compared to industry standard 6-8 weeks. Fast delivery without sacrificing quality or attention to detail."
                    },
                    {
                       icon: Target,
                       color: "bg-green-100 text-accent",
                       title: "Future-Proof Optimization",
                       desc: "Every site optimized for traditional search (SEO), AI search engines (GEO), featured snippets (AEO), and LLM citations (AIO)."
                    },
                    {
                       icon: Globe2,
                       color: "bg-blue-100 text-primary",
                       title: "Dubai-Focused, Globally Capable",
                       desc: "Local agency understanding UAE market dynamics with international-grade expertise and standards."
                    }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                       <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform`}>
                          <item.icon size={24} />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-navy mb-2">{item.title}</h4>
                          <p className="text-[15px] text-gray-600 leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* RIGHT: Trust Cards (Existing Staggered Layout) */}
           <div className="relative">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 relative z-20">
                {/* Column 1 - Starts higher */}
                <div className="space-y-4 lg:space-y-6 pt-0">
                   {/* Card 1 */}
                   <div className="bg-white p-5 rounded-xl shadow-[0_10px_30px_rgba(0,82,204,0.08)] border border-gray-100 group hover:-translate-y-2 hover:border-primary/20 transition-all duration-300">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-3">
                         <ShieldCheck size={20} />
                      </div>
                      <h3 className="text-base font-bold text-navy mb-1">Trusted Agency</h3>
                      <p className="text-xs text-gray-500">Guaranteed data security & privacy.</p>
                   </div>

                   {/* Card 3 */}
                   <div className="bg-white p-5 rounded-xl shadow-[0_10px_30px_rgba(0,82,204,0.08)] border border-gray-100 group hover:-translate-y-2 hover:border-primary/20 transition-all duration-300 mt-8 lg:mt-12">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-3">
                         <Globe2 size={20} />
                      </div>
                      <h3 className="text-base font-bold text-navy mb-1">Global Standards</h3>
                      <p className="text-xs text-gray-500">World-class digital solutions.</p>
                   </div>
                </div>

                {/* Column 2 - Starts lower */}
                <div className="space-y-4 lg:space-y-6 pt-8 lg:pt-16">
                   {/* Card 2 */}
                   <div className="bg-white p-5 rounded-xl shadow-[0_10px_30px_rgba(0,82,204,0.08)] border border-gray-100 group hover:-translate-y-2 hover:border-primary/20 transition-all duration-300">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-3">
                         <Users size={20} />
                      </div>
                      <h3 className="text-base font-bold text-navy mb-1">Expert Team</h3>
                      <p className="text-xs text-gray-500">Best designers in the region.</p>
                   </div>

                   {/* Card 4 */}
                   <div className="bg-white p-5 rounded-xl shadow-[0_10px_30px_rgba(0,82,204,0.08)] border border-gray-100 group hover:-translate-y-2 hover:border-primary/20 transition-all duration-300 mt-8 lg:mt-12">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-3">
                         <Award size={20} />
                      </div>
                      <h3 className="text-base font-bold text-navy mb-1">Award Winning</h3>
                      <p className="text-xs text-gray-500">Top rated design agency.</p>
                   </div>
                </div>
             </div>
             
             {/* Background Blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
           </div>

        </div>

        {/* === METHODOLOGY TABS === */}
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
           <h3 className="text-2xl font-bold text-navy mb-6">How We Work Differently</h3>
           
           <div className="flex flex-wrap gap-2 mb-0">
              {tabs.map((tab, idx) => (
                 <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-6 py-3 rounded-t-lg font-semibold text-sm transition-all ${
                       activeTab === idx 
                       ? 'bg-primary text-white shadow-lg translate-y-[1px] z-10' 
                       : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                    }`}
                 >
                    {tab.title}
                 </button>
              ))}
           </div>

           <div className="bg-white border border-gray-200 rounded-b-lg rounded-tr-lg p-8 shadow-sm min-h-[160px] relative z-0">
              <div className="animate-fade-up key={activeTab}">
                 <p className="text-[15px] leading-relaxed text-gray-600 max-w-4xl">
                    {tabs[activeTab].content}
                 </p>
                 <span className="mt-4 flex items-center text-primary text-sm font-bold gap-1">
                    Learn more <ChevronRight size={16} aria-hidden="true" />
                 </span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AgencyInfo;