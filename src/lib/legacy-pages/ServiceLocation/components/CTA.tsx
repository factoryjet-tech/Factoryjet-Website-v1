import React from 'react';
import { useContactModal } from '@/context/ContactModalContext';
import { ArrowRight, Phone } from 'lucide-react';
import { trackCTAClick, trackContactClick } from '@/utils/gtm';

interface CTAProps {
  service: string;
  city: string;
}

const CTA: React.FC<CTAProps> = ({ service, city }) => {
  const { openModal } = useContactModal();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-jet-navy via-blue-900 to-jet-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-blue-100 mb-8 md:mb-12">
          Let's build something amazing together in {city}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              trackCTAClick('get_free_consultation', `service_location_cta_${city.toLowerCase()}`, 'primary');
              openModal();
            }}
            className="group bg-jetOrange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="tel:+919699977699"
            onClick={() => trackContactClick('phone', '+919699977699', `service_location_cta_${city.toLowerCase()}`)}
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            +91 96999 77699
          </a>
        </div>

        <p className="text-blue-200 mt-6 text-sm">
          Free consultation • No obligation • Quick response
        </p>
      </div>
    </section>
  );
};

export default CTA;
