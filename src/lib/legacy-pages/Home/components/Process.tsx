'use client';

import React from 'react';
import Link from 'next/link';

const Process: React.FC = () => {
  const steps = [
    { num: '01', title: "Discovery", desc: "We analyze your goals, competitors, and audience to build a solid strategy." },
    { num: '02', title: "Design", desc: "We create wireframes and custom UI aligned with your brand identity." },
    { num: '03', title: "Develop", desc: "Our experts build the frontend and backend with clean, optimized code." },
    { num: '04', title: "Launch", desc: "After rigorous testing and SEO setup, we go live and help you grow." }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-jet-blue font-bold tracking-wide uppercase text-xs md:text-sm mb-2 md:mb-3">Our Process</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-jet-navy mb-4 md:mb-6">
              From concept to launch in record time
            </h3>
            <p className="text-jet-slate text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
              We've streamlined our workflow to deliver high-quality results without the typical agency delays.
              Our 7-step process ensures transparency and speed.
            </p>
            <Link href="/services/web-design#process">
            <button  className="text-jet-blue font-bold hover:text-blue-700 flex items-center gap-2 group justify-center lg:justify-start mx-auto lg:mx-0 text-sm md:text-base">
              See detailed timeline <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            </Link>
          
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-gray-50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 hover:shadow-lg transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 md:p-4 opacity-10 font-display font-bold text-4xl md:text-6xl text-jet-blue group-hover:scale-110 transition-transform select-none">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-jet-blue rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm mb-3 md:mb-4 shadow-md shadow-blue-500/30">
                    {step.num}
                  </div>
                  <h4 className="text-base md:text-xl font-bold text-jet-navy mb-1 md:mb-2">{step.title}</h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
