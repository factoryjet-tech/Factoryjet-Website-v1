import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';
import { trackCTAClick } from '@/utils/gtm';

const CTA = () => {
  const { openModal } = useContactModal();

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 md:mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto px-4 md:px-0">
          Whether you're just starting your digital journey or ready to scale, we're here to help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4 md:px-0">
          <button
            onClick={() => {
              trackCTAClick('schedule_free_consultation', 'about_cta', 'primary');
              openModal();
            }}
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-jetBlue text-white font-bold text-sm md:text-base rounded-lg shadow-xl shadow-jetBlue/30 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            Schedule Free Consultation <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={() => {
              trackCTAClick('contact_us', 'about_cta', 'secondary');
              openModal();
            }}
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-slate-700 font-bold text-sm md:text-base rounded-lg border border-slate-200 hover:border-jetBlue hover:text-jetBlue transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;