
import React from 'react';
import { Smartphone, AlertTriangle, IndianRupee, ArrowDownRight } from 'lucide-react';

interface ProblemSectionProps {
  onCtaClick?: () => void;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 md:py-24 bg-jet-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4 md:mb-6 text-jet-navy">
            Is Your Website Costing You Sales? Ahmedabad Businesses Lose &#8377;40,000+ Monthly to Poor Websites.
          </h2>
          <p className="text-lg text-jet-slate">
            Every day you wait, your competitors capture more customers. Your outdated
            website frustrates mobile users. Your marketing spend goes to waste.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-jet-light group hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Smartphone size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-jet-navy">Competitors Stealing Customers</h3>
            <p className="text-jet-slate text-sm leading-relaxed mb-4">
              65%+ of your customers search on mobile first. Without a modern mobile-friendly store, you are losing them to faster competitors in Prahlad Nagar & SG Highway.
            </p>
            <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase">
              <ArrowDownRight size={16} /> 42% Conversion Drop
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-jet-light group hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <AlertTriangle size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-jet-navy">DIY Websites Don't Work</h3>
            <p className="text-jet-slate text-sm leading-relaxed mb-4">
              Wix sites are slow on Indian 4G/5G, lack UPI integration, and have ZERO local SEO for Ahmedabad neighborhoods like Navrangpura or Satellite.
            </p>
            <div className="flex items-center gap-2 text-yellow-600 font-bold text-xs uppercase">
              <AlertTriangle size={16} /> Zero Trust Signal
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-jet-light group hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-50 text-jet-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <IndianRupee size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-jet-navy">Agencies Overcharging SMBs</h3>
            <p className="text-jet-slate text-sm leading-relaxed mb-4">
              CG Road agencies charge &#8377;4+ lakhs for basic sites and take 6 months. You need results now, not next year.
            </p>
            <div className="flex items-center gap-2 text-jet-blue font-bold text-xs uppercase">
              <IndianRupee size={16} /> Overpriced & Slow
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16 p-6 md:p-8 bg-jet-blue rounded-2xl text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <h3 className="text-xl sm:text-2xl font-bold mb-4">There's a better way.</h3>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            FactoryJet delivers world-class websites for Ahmedabad businesses&mdash;in 4 weeks, at prices that make sense.</p>
          <button
            onClick={onCtaClick}
            className="inline-block bg-jet-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30"
          >
            See Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
