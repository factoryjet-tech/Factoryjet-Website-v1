import React from 'react';
import { CheckCircle2, ArrowRight, BadgeCheck, TrendingUp, Clock, DollarSign } from 'lucide-react';

interface SuccessStoriesProps {
  onOpenModal: () => void;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ onOpenModal }) => {
  const stories = [
    {
      industry: "Real Estate",
      badgeColor: "bg-[#0052CC]",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      client: "Dubai Real Estate Firm",
      challenge: "Outdated website, 2% conversion rate, no mobile optimization",
      solution: "Custom Next.js site with virtual tours, bilingual support, CRM integration",
      results: ["340% lead increase", "8.5% conversion rate", "12,000+ monthly visitors"],
      timeline: "10 Weeks",
      investment: "AED 45,000"
    },
    {
      industry: "E-Commerce",
      badgeColor: "bg-[#FF6B35]",
      image: "data:image/jpeg;base64,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",
      client: "UAE E-Commerce Retailer",
      challenge: "Manual inventory, poor checkout experience, limited payment options",
      solution: "Shopify store with 500+ products, Tabby/Tamara integration, mobile optimization",
      results: ["AED 500k monthly sales", "6.2% conversion rate", "40% mobile revenue"],
      timeline: "8 Weeks",
      investment: "AED 40,000"
    },
    {
      industry: "Hospitality",
      badgeColor: "bg-[#10B981]",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      client: "Dubai Hospitality Group",
      challenge: "Slow booking system, no direct reservations, high OTA commissions",
      solution: "WordPress booking engine, payment integration, review system",
      results: ["55% direct bookings", "AED 150k monthly savings", "4.8★ rating"],
      timeline: "6 Weeks",
      investment: "AED 25,000"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
          backgroundImage: 'repeating-linear-gradient(45deg, #0052CC 0, #0052CC 1px, transparent 0, transparent 50%)', 
          backgroundSize: '30px 30px' 
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-navy mb-4">Dubai Success Stories</h2>
          <div className="h-1 w-24 bg-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            See how we've helped leading Dubai businesses transform their digital presence and achieve measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full animate-fade-up border border-gray-100"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              {/* Hero Image Area */}
              <div className="h-56 relative overflow-hidden">
                <img
                  src={story.image}
                  alt={`${story.client} - ${story.industry} success story`}
                  width={400}
                  height={224}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80"></div>
                
                {/* Industry Badge */}
                <div className={`absolute top-4 left-4 ${story.badgeColor} text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 tracking-wider uppercase`}>
                   <BadgeCheck size={12} /> {story.industry}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-grow flex flex-col relative">
                {/* Client Name */}
                <div className="flex items-center justify-between mb-6">
                   <h3 className="text-[20px] font-bold text-navy leading-tight">{story.client}</h3>
                   <div className="bg-blue-50 p-1.5 rounded-full text-primary">
                      <BadgeCheck size={16} />
                   </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-5 mb-6">
                   <div>
                      <div className="inline-block bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded mb-2 uppercase tracking-wide">Challenge</div>
                      <p className="text-[14px] text-gray-600 leading-relaxed">{story.challenge}</p>
                   </div>
                   <div>
                      <div className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded mb-2 uppercase tracking-wide">Solution</div>
                      <p className="text-[14px] text-gray-600 leading-relaxed">{story.solution}</p>
                   </div>
                </div>

                {/* Results Section */}
                <div className="mt-auto relative group/results">
                   <div className="bg-[#10B981]/5 rounded-xl p-5 border border-[#10B981]/10 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                          <TrendingUp size={16} className="text-[#10B981]" />
                          <span className="font-bold text-navy text-sm">Key Results</span>
                      </div>
                      <ul className="space-y-2">
                          {story.results.map((res, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                  <CheckCircle2 size={14} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                                  <span className="font-medium">{res.split(' ').map((word, w) => 
                                    /\d|%/.test(word) ? <strong key={w} className="font-bold text-navy">{word} </strong> : word + ' '
                                  )}</span>
                              </li>
                          ))}
                      </ul>
                   </div>
                   
                   {/* Hover Reveal Link */}
                   <button
                     type="button"
                     onClick={onOpenModal}
                     aria-label={`View full case study for ${story.client}`}
                     className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/10 cursor-pointer shadow-sm"
                   >
                      <span className="text-primary font-bold flex items-center gap-2 text-sm hover:underline">
                          View Full Case Study <ArrowRight size={16} aria-hidden="true" />
                      </span>
                   </button>
                </div>

                {/* Footer Pills */}
                <div className="pt-5 mt-2 flex items-center justify-between border-t border-gray-100">
                   <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wide bg-gray-50 px-3 py-1.5 rounded-full">
                       <Clock size={12} /> {story.timeline}
                   </div>
                   <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wide bg-gray-50 px-3 py-1.5 rounded-full">
                       <DollarSign size={12} /> {story.investment}
                   </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;