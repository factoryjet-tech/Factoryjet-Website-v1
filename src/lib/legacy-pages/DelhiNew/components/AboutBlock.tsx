import React from 'react';
import { Building2, Zap, MapPin, Check, ArrowRight } from 'lucide-react';
import { ABOUT_CONTENT } from '../data.constants';

const AboutBlock: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-10 lg:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
            About FactoryJet — Website Design Company in Delhi NCR
          </h2>
        </div>

        {/* Visual Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-heading font-bold text-lg mb-4 text-jet-blue flex items-center">
              <Building2 className="w-5 h-5 mr-2" /> Company Info
            </h3>
            <ul className="space-y-3 text-sm text-slate">
              {ABOUT_CONTENT.column1.map((item, idx) => (
                <li key={idx} className="flex items-start border-l-2 border-gray-100 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-heading font-bold text-lg mb-4 text-jet-blue flex items-center">
              <Zap className="w-5 h-5 mr-2" /> Core Capabilities
            </h3>
            <ul className="space-y-3 text-sm text-slate">
              {ABOUT_CONTENT.column2.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="h-4 w-4 text-jet-green mr-2 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-heading font-bold text-lg mb-4 text-jet-blue flex items-center">
              <MapPin className="w-5 h-5 mr-2" /> Service Areas
            </h3>
            <ul className="space-y-3 text-sm text-slate">
              {ABOUT_CONTENT.column3.map((item, idx) => (
                <li key={idx} className="flex items-start border-l-2 border-gray-100 pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visually Dazzling Keyword-Dense Paragraph Block */}
        <div className="relative rounded-3xl overflow-hidden bg-navy text-white shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-jet-blue opacity-20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-jet-orange opacity-20 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="prose prose-lg prose-invert max-w-none text-blue-50 leading-relaxed font-light">
              <div className="text-lg md:text-xl lg:text-2xl font-sans font-light tracking-wide text-justify">
                {ABOUT_CONTENT.paragraph.split('\n\n').map((p, i) => (
                  <p key={i} className="mb-8 last:mb-0 border-l-4 border-jet-orange pl-6">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Call to Action integrated in the block */}
            <div className="mt-10 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-1">
                  Ready to scale?
                </p>
                <p className="text-xl font-heading font-bold text-white">
                  Let's build your digital empire.
                </p>
              </div>
              <button
                onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-navy hover:bg-gray-100 px-8 py-4 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1 flex items-center"
              >
                Start Project <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;
