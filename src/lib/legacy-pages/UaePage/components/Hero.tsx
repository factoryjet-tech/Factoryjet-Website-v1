import React, { useEffect, useState } from 'react';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import HeroForm from './HeroForm';

// Official WhatsApp icon SVG
const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 18,
  className = "",
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative pt-12 w-full bg-[#0052CC] overflow-hidden hero-section font-sans lg:h-[720px] flex items-center">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC] to-[#0041a8] z-0"></div>
        {/* Diagonal Stripe Pattern */}
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #ffffff, #ffffff 2px, transparent 2px, transparent 12px)'
        }}></div>
        {/* Grid Dots Optional */}
        <div className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none" style={{
             backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
             backgroundSize: '32px 32px'
        }}></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 pt-24 pb-10 lg:py-0 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-8 lg:gap-12 items-center w-full">
                
                {/* === LEFT COLUMN === */}
                <div className="w-full max-w-[640px] flex flex-col justify-center order-1 lg:order-1 pt-4 lg:pt-0">
                    
                    {/* 1. Top Badge (Compact) */}
                    <div className={`inline-flex items-center gap-2 bg-[#10B981]/15 border border-[#10B981]/40 px-5 py-2 rounded-full w-fit mb-4 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                        <Star size={13} className="text-[#10B981] fill-[#10B981]" />
                        <span className="text-[13px] font-semibold text-white tracking-wide">#1 Rated Web Design Agency in Dubai</span>
                    </div>

                    {/* 2. Main Headline (Optimized Size) */}
                    <h1 className={`font-display text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.1] font-bold text-white tracking-tight mb-5 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <span className="block">Web Design and Development Agency</span>
                        <span className="block relative w-fit mt-1">
                            Top Website Designing Company
                            <span className="absolute -bottom-2 left-0 w-[100px] h-[3px] bg-[#FF6B35] rounded-sm"></span>
                        </span>
                        <span className="block mt-3">in Dubai</span>
                    </h1>

                    {/* 3. Description (Condensed) */}
                    <p className={`font-sans text-[15px] leading-[1.5] text-white/90 mb-6 max-w-[550px] transition-all duration-700 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                        FactoryJet is Dubai's first <strong className="font-semibold text-white">AI-native</strong> web design agency and website development company, combining cutting-edge artificial intelligence with <strong className="font-semibold text-white">25+ years</strong> of human expertise. Our AI-powered workflows enable our expert team to deliver stunning, high-performance websites <strong className="font-semibold text-white">10x faster</strong> than traditional agencies—without compromising quality.
                    </p>

                    {/* 4. CTA Buttons (Compact) */}
                    <div className={`flex flex-wrap gap-4 mb-6 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <button 
                            onClick={onOpenModal}
                            className="bg-[#FF6B35] hover:bg-[#e55a28] text-white px-7 py-3 rounded-lg font-semibold text-[15px] shadow-[0_4px_12px_rgba(255,107,53,0.25)] hover:shadow-[0_6px_16px_rgba(255,107,53,0.35)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group h-[48px]"
                        >
                            Get Free Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="https://wa.me/919699977699?text=Hi%20FactoryJet%20Dubai"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contact us via WhatsApp"
                            className="bg-transparent hover:bg-[#10B981] text-[#10B981] hover:text-white border-2 border-[#10B981] px-6 py-3 rounded-lg font-semibold text-[15px] backdrop-blur-sm transition-all duration-300 flex items-center gap-2 h-[48px]"
                        >
                             <WhatsAppIcon size={18} /> WhatsApp Us
                        </a>
                    </div>

                    {/* 5. Trust Indicators (Compact Inline) */}
                    <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                         <div className="flex items-center gap-3 bg-white/[0.08] border border-white/[0.12] px-4 py-3 rounded-lg backdrop-blur-md">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#10B981]/20 rounded-full flex items-center justify-center">
                                <Star size={16} className="text-[#10B981] fill-[#10B981]" />
                            </div>
                            <div>
                                <p className="text-[13px] font-bold text-white leading-none mb-1">Top Ranked</p>
                                <p className="text-[11px] text-white/80 leading-none">In UAE Agencies</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-3 bg-white/[0.08] border border-white/[0.12] px-4 py-3 rounded-lg backdrop-blur-md">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#0052CC]/40 rounded-full flex items-center justify-center">
                                <CheckCircle size={16} className="text-blue-200" />
                            </div>
                            <div>
                                <p className="text-[13px] font-bold text-white leading-none mb-1">98% Satisfaction</p>
                                <p className="text-[11px] text-white/80 leading-none">500+ Projects</p>
                            </div>
                         </div>
                    </div>

                </div>

                {/* === RIGHT COLUMN (Contact Form) === */}
                <div className={`flex justify-center items-center h-full relative transition-all duration-1000 delay-300 order-2 lg:order-2 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <HeroForm />
                </div>

            </div>
        </div>
    </section>
  );
};

export default Hero;