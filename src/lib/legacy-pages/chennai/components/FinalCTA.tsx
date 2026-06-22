import React from 'react';
import Button from './Button';
import { Phone, MessageCircle } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-jet-blue">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
         <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[80px]" />
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-jet-orange rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
          Ready to Transform Your Chennai Business Online?
        </h2>
        
        <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
           Join 100+ Chennai businesses already growing with FactoryJet. Whether you're a startup in Taramani, a manufacturer in Guindy, or a hospital in Adyar – we have the expertise, technology, and local knowledge to transform your digital presence.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-blue-100 font-medium">
          <span className="flex items-center gap-1">✓ 7-Day Delivery</span>
          <span className="flex items-center gap-1">✓ ₹29,999 Starting</span>
          <span className="flex items-center gap-1">✓ Chennai Expert Team</span>
          <span className="flex items-center gap-1">✓ Complete Optimization</span>
          <span className="flex items-center gap-1">✓ Proven Results</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
          <p className="text-white mb-6 font-bold">
            Our Guarantee: If you're not satisfied with the initial design concept, we'll revise until you are or refund your advance. Zero risk to get started.
          </p>
          
          <Button variant="white" className="w-full text-lg mb-6 py-4 text-jet-blue">
            Get Free Website Consultation
          </Button>
          <p className="text-xs text-blue-200 mb-6">30-minute call. No obligation. Custom quote in 24 hours.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-white">
            <a href="tel:+919699977699" className="flex items-center justify-center gap-2 hover:text-jet-orange transition-colors">
              <Phone size={20} /> +91 96999 77699
            </a>
            <a href="https://wa.me/919699977699?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20web%20design%20services%20in%20Chennai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-jet-orange transition-colors">
              <MessageCircle size={20} /> WhatsApp: +91 96999 77699
            </a>
          </div>
        </div>
        
        <p className="mt-8 text-blue-200 font-semibold animate-pulse">
          ⚡ Book this week and get FREE premium hosting upgrade (₹10,000 value)
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;