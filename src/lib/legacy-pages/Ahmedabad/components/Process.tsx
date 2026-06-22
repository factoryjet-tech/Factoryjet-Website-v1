
import React from 'react';
import { MessageCircle, Palette, Rocket } from 'lucide-react';

interface ProcessProps {
  onCtaClick?: () => void;
}

const Process: React.FC<ProcessProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 md:py-24 bg-jet-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-jet-navy mb-4">Simple 3-Step Process</h2>
          <p className="text-jet-slate">From first call to live website in 4 weeks</p>
        </div>

        <div className="relative">
          {/* Timeline Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-jet-light -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-jet-light text-center relative hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-jet-blue text-white rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-lg shadow-blue-100 border-4 border-white">
                <MessageCircle size={28} />
              </div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-jet-blue text-[10px] font-bold rounded-full uppercase mb-4 tracking-wider">Free Discovery Call</span>
              <h3 className="text-xl font-bold mb-4 text-jet-navy">Understand Your Goals</h3>
              <p className="text-sm text-jet-slate leading-relaxed">
                We understand your business, goals, and competition. Get a clear roadmap&mdash;no jargon, no pressure.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-jet-light text-center relative hover:shadow-xl transition-shadow lg:mt-12">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-jet-orange text-white rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-lg shadow-orange-100 border-4 border-white">
                <Palette size={28} />
              </div>
              <span className="inline-block px-3 py-1 bg-orange-50 text-jet-orange text-[10px] font-bold rounded-full uppercase mb-4 tracking-wider">Unlimited Revisions</span>
              <h3 className="text-xl font-bold mb-4 text-jet-navy">Design & Mockups</h3>
              <p className="text-sm text-jet-slate leading-relaxed">
                See your website before we build it. We share progress via WhatsApp daily. You only pay when you love the design.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-jet-light text-center relative hover:shadow-xl transition-shadow lg:mt-24">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-jet-green text-white rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-lg shadow-green-100 border-4 border-white">
                <Rocket size={28} />
              </div>
              <span className="inline-block px-3 py-1 bg-green-50 text-jet-green text-[10px] font-bold rounded-full uppercase mb-4 tracking-wider">4-Week Guarantee</span>
              <h3 className="text-xl font-bold mb-4 text-jet-navy">Launch & Training</h3>
              <p className="text-sm text-jet-slate leading-relaxed">
                Go live with full training. We don't disappear&mdash;ongoing support from our Ahmedabad team whenever you need.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-20 text-center">
          <button
            onClick={onCtaClick}
            className="bg-jet-orange text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-orange-600 transition-all shimmer"
          >
            &#128640; Start with a Free Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
