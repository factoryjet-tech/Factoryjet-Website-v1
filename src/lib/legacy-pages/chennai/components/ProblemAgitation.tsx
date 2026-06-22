import React from 'react';
import GlassCard from './GlassCard';
import { AlertCircle, TrendingDown, Clock, Search, XCircle } from 'lucide-react';

const problems = [
  { title: "Invisible to Chennai Customers", desc: "Your competitors rank on page 1 for \"automobile parts Chennai\" or \"IT services OMR\" while your website languishes on page 5. Without proper SEO, GEO, and AIO optimization, potential customers searching locally never find you. Cost of Inaction: Losing 50-100 qualified leads monthly.", icon: Search },
  { title: "Outdated Website Killing Credibility", desc: "Chennai customers expect modern, mobile-first experiences. Your 2018 website with slow loading and poor mobile display screams \"we're behind the times.\" In a city known for innovation, an outdated website destroys trust. Cost of Inaction: 73% of users leave sites that look unprofessional.", icon: XCircle },
  { title: "Generic Design That Doesn't Convert", desc: "You paid ₹15,000 for a template website that looks like every other business. No Chennai-specific messaging, no industry customization, no conversion optimization. Pretty but useless. Cost of Inaction: 2-3% conversion rate vs. 8-12% for optimized sites.", icon: TrendingDown },
  { title: "Vendor Nightmares & Endless Delays", desc: "Your current agency promised 4 weeks, delivered in 4 months. Support tickets go unanswered. Updates take forever. You're stuck with a vendor who doesn't understand Chennai business culture. Cost of Inaction: Opportunity cost of delayed launch and frustration.", icon: Clock },
  { title: "No Results, Just Expenses", desc: "You've spent lakhs on websites and digital marketing with zero measurable ROI. No lead tracking, no analytics, no understanding of what's working. Your digital presence is an expense, not an investment. Cost of Inaction: Continued bleeding of marketing budget without returns.", icon: AlertCircle }
];

const ProblemAgitation: React.FC = () => {
  return (
    <section className="py-20 bg-jet-navy relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-6 text-white">
          Why Most Chennai Businesses <span className="text-red-400">Struggle Online</span> (And How to Fix It)
        </h2>
        
        <p className="text-blue-100 text-center max-w-3xl mx-auto mb-12">
           Chennai's business landscape is fiercely competitive. With 800+ IT companies on OMR, thousands of manufacturing units in Guindy and Ambattur, and countless SMBs across T. Nagar and Anna Nagar, standing out online isn't just difficult – it's becoming impossible without the right digital partner.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((prob, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-red-500/50 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-2 rounded-lg text-red-400 shrink-0">
                  <prob.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{prob.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{prob.desc}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="lg:col-span-1 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-jet-blue to-jet-blueDark rounded-xl border border-white/10 shadow-lg">
             <h3 className="text-xl font-bold text-white mb-2">The Harsh Truth</h3>
             <p className="text-blue-100 mb-4 text-sm">Every day without a proper digital strategy, your Chennai competitors capture customers who should be yours.</p>
             <div className="bg-white/10 p-3 rounded-lg mb-4 w-full">
                <p className="text-white font-bold">The Solution?</p>
                <p className="text-xs text-blue-200">FactoryJet has helped 100+ businesses escape this cycle.</p>
             </div>
             <button className="bg-white text-jet-blue px-6 py-2 rounded-lg font-bold hover:bg-slate-100 transition-colors text-sm w-full">See How We Fix This</button>
          </div>
        </div>
        
        {/* Agitation Summary Stats */}
        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
           <h3 className="text-center text-white font-bold mb-8 text-xl">The Chennai Digital Reality</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                 <span className="block text-3xl md:text-4xl font-bold text-jet-orange mb-2">78%</span>
                 <p className="text-slate-400 text-sm">of Chennai consumers research online before visiting</p>
              </div>
              <div>
                 <span className="block text-3xl md:text-4xl font-bold text-jet-orange mb-2">65%</span>
                 <p className="text-slate-400 text-sm">of B2B buyers shortlist vendors based on website quality</p>
              </div>
              <div>
                 <span className="block text-3xl md:text-4xl font-bold text-jet-orange mb-2">82%</span>
                 <p className="text-slate-400 text-sm">of local searches lead to same-day visits for nearby businesses</p>
              </div>
              <div>
                 <span className="block text-3xl md:text-4xl font-bold text-jet-orange mb-2">3x</span>
                 <p className="text-slate-400 text-sm">more leads generated by businesses with optimized websites</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitation;