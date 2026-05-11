import React from 'react';
import { useContactModal } from '@/context/ContactModalContext';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { trackCTAClick } from '@/utils/gtm';
import AuthorByline from '@/components/AuthorByline';

interface HeroProps {
  h1: string;
  h2: string;
  city: string;
  service: string;
}

const Hero: React.FC<HeroProps> = ({ h1, h2, city, service }) => {
  const { openModal } = useContactModal();

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center bg-gradient-to-br from-jet-navy via-blue-900 to-jet-blue overflow-hidden pt-10 md:pt-12 lg:pt-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Animated circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-jetOrange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-jet-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 w-fit">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">4.9/5 Rating • 150+ Happy Clients</span>
            </div>

            {/* H1 - Primary Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              {h1}
            </h1>
            <AuthorByline variant="dark" />

            {/* H2 - Secondary Heading */}
            <h2 className="text-xl md:text-2xl text-blue-100 font-normal leading-relaxed">
              {h2}
            </h2>

            {/* Value Props */}
            <div className="flex flex-col gap-3">
              {[
                'Fast 7-day delivery for most projects',
                'Transparent pricing with no hidden costs',
                'SEO-optimized & mobile-responsive',
                '24/7 support & ongoing maintenance'
              ].map((prop, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-jetGreen shrink-0" />
                  <span className="text-blue-100">{prop}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => {
                  trackCTAClick('get_free_consultation', `service_location_hero_${city.toLowerCase()}`, 'primary');
                  openModal();
                }}
                className="group bg-jetOrange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#pricing"
                onClick={() => trackCTAClick('view_pricing', `service_location_hero_${city.toLowerCase()}`, 'secondary')}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center"
              >
                View Pricing
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm text-blue-200">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold">7 Days</div>
                <div className="text-sm text-blue-200">Average Delivery</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-blue-200">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Graphic */}
          <div className="hidden lg:block relative">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded w-full"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="h-32 bg-gradient-to-br from-jetOrange/30 to-jetOrange/10 rounded-lg"></div>
                    <div className="h-32 bg-gradient-to-br from-jet-blue/30 to-jet-blue/10 rounded-lg"></div>
                  </div>
                  <div className="h-24 bg-white/5 rounded-lg mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
