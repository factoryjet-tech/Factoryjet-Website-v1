import React from 'react';
import { Section, SectionHeader } from './ui/Section';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    title: "DTC Fashion Brand",
    subtitle: "Shopify Plus Migration",
    challenge: "Manual processes, slow site (4.8s load), 1.2% conversion rate, mobile conversion at 0.8%.",
    solution: "Shopify Plus migration, Custom theme (mobile-first), Checkout optimization, Performance tuning.",
    metrics: [
      { label: "Conversion", value: "4.1%", change: "+242%" },
      { label: "Page Speed", value: "1.6s", change: "-67%" },
      { label: "Revenue", value: "$6.8M", change: "+224%" }
    ],
    tags: ["Fashion", "Migration", "CRO"]
  },
  {
    title: "Industrial Distributor",
    subtitle: "BigCommerce B2B Edition",
    challenge: "Phone/fax orders only, no digital presence, losing customers, order errors.",
    solution: "BigCommerce B2B Edition, Customer-specific pricing (500+ accounts), SAP ERP integration, Self-service portal.",
    metrics: [
      { label: "Online Orders", value: "68%", change: "+68%" },
      { label: "Processing", value: "2 hrs", change: "-96%" },
      { label: "NPS Score", value: "+47", change: "+35 pts" }
    ],
    tags: ["B2B", "ERP Integration", "Portal"]
  },
  {
    title: "Beauty Brand",
    subtitle: "Social Commerce Launch",
    challenge: "Strong social following (500K TikTok) but zero commerce integration.",
    solution: "TikTok Shop integration with Shopify, Affiliate program launch, Weekly livestream commerce schedule.",
    metrics: [
      { label: "Social Rev", value: "$180K/mo", change: "New" },
      { label: "Live Conv", value: "12.3%", change: "New" },
      { label: "Total Rev", value: "$483K", change: "+42%" }
    ],
    tags: ["TikTok Shop", "Instagram", "UGC"]
  },
  {
    title: "Consumer Electronics",
    subtitle: "Mobile App Development",
    challenge: "77% mobile traffic but only 0.9% mobile web conversion.",
    solution: "React Native cross-platform app, Push notification recovery, Apple Pay integration.",
    metrics: [
      { label: "App Conv", value: "3.8%", change: "+322%" },
      { label: "Cart Recov", value: "18%", change: "+125%" },
      { label: "Rev/User", value: "$144", change: "+220%" }
    ],
    tags: ["React Native", "Mobile", "Push"]
  },
  {
    title: "Luxury Brand",
    subtitle: "Headless Commerce",
    challenge: "Template limitations preventing brand expression, poor Core Web Vitals, slow international performance.",
    solution: "Shopify Hydrogen headless implementation, Custom Next.js frontend, Edge caching.",
    metrics: [
      { label: "Load Speed", value: "0.8s", change: "-81%" },
      { label: "Core Vitals", value: "Pass", change: "100%" },
      { label: "Org Traffic", value: "+65%", change: "+65%" }
    ],
    tags: ["Headless", "Hydrogen", "Performance"]
  }
];

const CaseStudies: React.FC = () => {
  return (
    <Section id="case-studies" className="bg-slate-50">
      <SectionHeader 
        eyebrow="PROVEN RESULTS" 
        title="E-Commerce Development Case Studies: Real Brands, Real Revenue Growth" 
        subtitle="We don't just promise results. We deliver them."
      />
      
      <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 hide-scrollbar snap-x px-4 sm:px-0 -mx-4 sm:mx-0">
        {cases.map((study, idx) => (
          <div key={idx} className="snap-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm min-w-[85vw] sm:min-w-[400px] flex-shrink-0 flex flex-col hover:border-jet-blue transition-colors duration-300">
             <div className="flex flex-wrap gap-2 mb-4">
               {study.tags.map(tag => (
                 <span key={tag} className="px-2 py-1 bg-slate-100 text-xs text-slate-600 rounded font-medium">{tag}</span>
               ))}
             </div>
             <h3 className="text-xl font-bold font-heading mb-1 text-jet-dark">{study.title}</h3>
             <p className="text-sm text-jet-blue font-semibold mb-4 flex items-center gap-1">
               {study.subtitle} <ArrowUpRight className="h-4 w-4"/>
             </p>
             
             <div className="mb-6 space-y-2 flex-grow">
               <p className="text-sm text-slate-500"><strong className="text-jet-dark">Challenge:</strong> {study.challenge}</p>
               <p className="text-sm text-slate-500"><strong className="text-jet-dark">Solution:</strong> {study.solution}</p>
             </div>

             <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 mt-auto">
               {study.metrics.map((m, i) => (
                 <div key={i} className="text-center">
                    <div className="text-xs text-slate-400 mb-1">{m.label}</div>
                    <div className="font-bold text-jet-dark text-lg">{m.value}</div>
                    <div className="text-xs text-jet-green font-medium">{m.change}</div>
                 </div>
               ))}
             </div>
          </div>
        ))}
        {/* Spacer for mobile scroll */}
        <div className="w-2 flex-shrink-0 sm:hidden"></div>
      </div>
    </Section>
  );
};

export default CaseStudies;