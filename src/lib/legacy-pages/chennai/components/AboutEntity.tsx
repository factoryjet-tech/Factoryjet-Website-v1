import React from 'react';
import { MapPin, Users, Star, Award, Building, Globe } from 'lucide-react';
import GlassCard from './GlassCard';

const AboutEntity: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* 
            Mobile Layout: Flex-col (Image Stacked Top, Text Bottom) 
            Desktop Layout: Flex-row (Image Left, Text Right)
            Fixed: Removed 'sticky' to prevent overlay issues on variable screen heights.
        */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Visual Column */}
          <div className="w-full lg:w-1/2 relative">
             {/* New Relatable Image: Web Design/Team Collaboration */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 mb-8 group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="FactoryJet Web Design Team in Chennai" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jet-navy/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                   <p className="font-bold text-sm">Chennai Operations Center</p>
                   <p className="text-xs opacity-80">Tidel Park, OMR</p>
                </div>
             </div>

             {/* Key Stats Grid */}
             <div className="grid grid-cols-2 gap-4">
                 <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-bold text-jet-blue mb-1">25+</span>
                    <span className="text-xs font-bold text-jet-slate uppercase tracking-wide">Experts</span>
                 </div>
                 <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-bold text-jet-blue mb-1">ISO</span>
                    <span className="text-[10px] font-bold text-jet-slate uppercase tracking-wide">9001:2015 Certified</span>
                 </div>
             </div>
          </div>
          
          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-jet-orange/10 text-jet-orange rounded-full text-xs font-bold uppercase tracking-wider mb-4">
               Entity Establishment
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-jet-navy leading-tight">
              About FactoryJet – Chennai's Trusted Digital Partner
            </h2>
            
            <div className="prose prose-lg prose-slate text-jet-slate mb-8 leading-relaxed">
               <p className="mb-6">
                  <strong>FactoryJet</strong> is a full-service digital transformation agency headquartered in India, with a dedicated Chennai office at Tidel Park on OMR serving businesses across Tamil Nadu. Established with over 25 years of combined team expertise, FactoryJet specializes in website design, e-commerce development, AI-powered digital marketing, CRM implementation, and ERPNext solutions.
               </p>
               <p className="mb-6">
                  As a leading <strong>website design company in Chennai</strong>, FactoryJet has completed 500+ successful projects, with 100+ clients specifically in the Chennai metropolitan area. Our Chennai team operates from the prestigious Tidel Park IT complex, providing convenient access for client consultations and project discussions.
               </p>
               
               <h3 className="text-xl font-bold text-jet-navy mt-8 mb-4 border-l-4 border-jet-blue pl-4">Why FactoryJet Leads Web Design in Chennai:</h3>
               <p className="mb-6 text-base">
                  Chennai represents India's fourth-largest economy with an $80+ billion GDP, home to India's automobile capital, major IT corridors, and a thriving startup ecosystem. The city hosts 800+ software companies, numerous Fortune 500 offices, and produces 40% of India's automobile output. This dynamic business environment demands sophisticated digital solutions – exactly what FactoryJet delivers.
               </p>
               
               <ul className="grid grid-cols-1 gap-y-3 pl-0 mb-8 text-sm md:text-base">
                  {[
                    "Automobile Industry Websites: Dealer portals, parts catalogs",
                    "IT Services Company Sites: SaaS platforms, B2B lead gen",
                    "Healthcare Digital Solutions: Hospital websites, booking portals",
                    "Manufacturing B2B Portals: Industrial catalogs, quote systems",
                    "Education Platforms: University websites, LMS integration",
                    "BFSI Solutions: Secure banking interfaces, fintech apps"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-jet-orange shrink-0"></span>
                       <span>{item}</span>
                    </li>
                  ))}
               </ul>

               <h3 className="text-xl font-bold text-jet-navy mt-8 mb-4 border-l-4 border-jet-blue pl-4">FactoryJet's Chennai Mission:</h3>
               <p className="text-base">
                  To empower every Chennai business – from OMR tech startups to traditional T. Nagar retailers – with world-class digital presence that competes globally while resonating locally with Tamil Nadu's diverse customer base.
               </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <GlassCard className="flex items-center gap-4 p-5 hover:border-jet-blue transition-colors group">
                 <div className="bg-blue-50 p-3 rounded-full text-jet-blue group-hover:bg-jet-blue group-hover:text-white transition-colors">
                    <MapPin size={24} />
                 </div>
                 <div>
                   <span className="block font-bold text-jet-navy text-sm">Tidel Park, OMR</span>
                   <span className="text-xs text-slate-500">Chennai - 600113</span>
                 </div>
              </GlassCard>
              <GlassCard className="flex items-center gap-4 p-5 hover:border-jet-blue transition-colors group">
                 <div className="bg-blue-50 p-3 rounded-full text-jet-blue group-hover:bg-jet-blue group-hover:text-white transition-colors">
                    <Globe size={24} />
                 </div>
                 <div>
                   <span className="block font-bold text-jet-navy text-sm">Service Coverage</span>
                   <span className="text-xs text-slate-500">All Chennai Zones + TN</span>
                 </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEntity;