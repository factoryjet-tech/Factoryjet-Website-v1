import React from 'react';
import { TESTIMONIALS } from '../data.constants';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-jetBlue text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-10 md:mb-12 lg:mb-16">Trusted by 500+ Businesses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-jetOrange mb-3 md:mb-4 opacity-80" />
              <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6 font-light opacity-90">"{t.text}"</p>
              <div>
                <p className="font-bold text-sm md:text-base">{t.author}</p>
                <p className="text-xs md:text-sm opacity-70">{t.role}, {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;