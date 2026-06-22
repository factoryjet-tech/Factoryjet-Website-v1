import React from 'react';

const PROCESS_STEPS = ['Discovery', 'Strategy', 'Design', 'Development', 'Testing', 'Launch'];

const ProcessSection: React.FC = () => (
  <section id="process" className="py-16 lg:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
          Our Website Development Process
        </h2>
        <p className="text-base lg:text-lg text-slate">From Concept to Launch in 7-14 Days</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={idx}
            className="relative text-center p-4 bg-gray-50 md:bg-transparent rounded-lg md:rounded-none flex flex-row md:flex-col items-center md:justify-start gap-4 md:gap-0"
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 mx-auto bg-jet-blue text-white rounded-full flex items-center justify-center font-bold text-lg lg:text-xl md:mb-4 shadow-lg z-10 relative">
              {idx + 1}
            </div>
            {idx < 5 && <div className="hidden lg:block absolute top-8 left-1/2 w-full h-1 bg-gray-200 -z-0"></div>}
            <h3 className="font-bold text-navy text-lg md:text-base">{step}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
