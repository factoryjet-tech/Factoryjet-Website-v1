import React from 'react';
import { Search, PenTool, FileText, Code, CheckCircle, Rocket, BookOpen, Settings } from 'lucide-react';

const steps = [
  { step: 1, title: "Discovery & Strategy", time: "Week 1-2", desc: "Understand business goals, analyze competition, identify target audience, define success metrics, create project roadmap.", icon: Search },
  { step: 2, title: "Design & Prototyping", time: "Week 2-4", desc: "Create wireframes, design mockups, develop clickable prototypes, gather feedback, finalize visual direction.", icon: PenTool },
  { step: 3, title: "Content Development", time: "Week 2-4", desc: "Strategic copywriting, SEO optimization, image sourcing, video integration, brand messaging alignment.", icon: FileText },
  { step: 4, title: "Development & Build", time: "Week 4-10", desc: "Convert designs to code, implement functionality, integrate CMS, setup analytics, optimize performance.", icon: Code },
  { step: 5, title: "Testing & QA", time: "Week 9-11", desc: "Cross-browser testing, device testing, performance optimization, security audit, accessibility compliance.", icon: CheckCircle },
  { step: 6, title: "Launch & Deploy", time: "Week 11-12", desc: "Domain setup, SSL installation, DNS configuration, final backups, monitoring activation.", icon: Rocket },
  { step: 7, title: "Training & Handover", time: "Week 12-13", desc: "CMS training, documentation delivery, best practices guidance, ongoing support setup.", icon: BookOpen },
  { step: 8, title: "Optimization & Support", time: "Ongoing", desc: "Performance monitoring, security updates, content updates, continuous improvement, monthly reporting.", icon: Settings },
];

const getColor = (step: number) => {
  if (step <= 2) return '#0052CC'; // Blue
  if (step <= 4) return '#FF6B35'; // Orange
  if (step <= 6) return '#10B981'; // Green
  return '#0052CC'; // Blue
};

const getGradient = (step: number) => {
  if (step <= 2) return 'from-[#0052CC] to-[#003D99]';
  if (step <= 4) return 'from-[#FF6B35] to-[#e55a28]';
  if (step <= 6) return 'from-[#10B981] to-[#059669]';
  return 'from-[#0052CC] to-[#003D99]';
};

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#0052CC 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-navy mb-6">Our Proven 8-Step Development Process</h2>
          <div className="h-1.5 w-24 bg-[#FF6B35] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Central Spine */}
          <div className="absolute left-9 md:left-1/2 top-0 bottom-0 w-1 md:w-1 bg-[#E2E8F0] transform md:-translate-x-1/2 z-0">
             {/* Animated Progress Line */}
             <div className="absolute inset-0 bg-gradient-to-b from-[#0052CC] via-[#FF6B35] to-[#10B981] opacity-30 w-full"></div>
          </div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => {
               const color = getColor(step.step);
               const gradient = getGradient(step.step);
               const isEven = step.step % 2 === 0;

               return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} animate-fade-up`} style={{ animationDelay: `${idx * 100}ms` }}>
                    
                    {/* Card Side */}
                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 mb-8 md:mb-0 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                         <div 
                            className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_4px_16px_rgba(0,82,204,0.1)] hover:shadow-[0_15px_30px_rgba(0,82,204,0.15)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group border-l-[4px]"
                            style={{ borderLeftColor: color }}
                         >
                            {/* Week Pill */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-lg bg-gray-50 text-navy group-hover:scale-110 transition-transform duration-300">
                                   <step.icon size={28} style={{ color: color }} strokeWidth={1.5} />
                                </div>
                                <div className="bg-[#E2E8F0] text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {step.time}
                                </div>
                            </div>

                            <h3 className="text-[20px] font-bold text-[#0F172A] mb-3">{step.title}</h3>
                            <p className="text-[14px] text-gray-600 leading-relaxed">{step.desc}</p>
                         </div>
                    </div>

                    {/* Timeline Number Circle */}
                    <div className="absolute left-9 md:left-1/2 transform -translate-x-1/2 w-[72px] h-[72px] rounded-full z-10 flex items-center justify-center shadow-lg border-[6px] border-white">
                        <div className={`w-full h-full rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center animate-pulse-slow shadow-inner`}>
                            <span className="text-[24px] font-bold text-white">{step.step}</span>
                        </div>
                    </div>

                    {/* Connecting Line (Horizontal) */}
                    {/* Mobile: Connects left circle to card */}
                    <div className="absolute left-[70px] top-[36px] w-8 h-0.5 bg-gray-300 md:hidden"></div>
                    
                    {/* Desktop: Connects center circle to card */}
                    <div className={`hidden md:block absolute top-1/2 w-16 h-0.5 bg-gray-300 transform -translate-y-1/2 -z-10 ${isEven ? 'right-1/2 mr-[36px]' : 'left-1/2 ml-[36px]'}`}></div>

                    {/* Empty Side for Grid Balance */}
                    <div className="w-full md:w-1/2"></div>
                </div>
               );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;