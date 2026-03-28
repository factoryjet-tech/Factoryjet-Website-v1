'use client';

import React from "react";
import {
  CheckCircle,
  Star,
  MousePointer,
  BarChart3,
  Rocket,
} from "lucide-react";
import { useContactModal } from '@/context/ContactModalContext';
import { trackCTAClick, trackContactClick } from '@/utils/gtm';

// WhatsApp icon component
const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 16,
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

// Track WhatsApp click conversion for Google Ads
const trackWhatsAppConversion = () => {
  if (
    typeof window !== "undefined" &&
    typeof (window as any).gtag === "function"
  ) {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-11127037244/N5PhCPWusNQbELy65Lkp",
    });
  }
};

const Hero: React.FC = () => {
  const { openModal } = useContactModal();

  const benefits = [
    "Trusted by 500+ businesses",
    "25+ years expertise",
    "7-day delivery guarantee",
    "Full SEO & AI Optimization",
  ];

  return (
    <section className="relative overflow-hidden pt-24 pb-8 md:pt-28 md:pb-12 lg:pt-36 lg:pb-24 bg-[#0052CC] min-h-[85vh] md:min-h-[90vh] flex items-center">
      {/* 1. Stunning Jet Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0052CC] via-[#053885] to-[#02122b]"></div>

      {/* 2. Light Leaks for Depth */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

      {/* 3. Texture & Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left Side - Using CSS animation instead of framer-motion for LCP */}
          <div
            className="flex flex-col justify-center animate-[fadeInUp_0.8s_ease-out_forwards]"
            style={{ opacity: 0 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-[10px] md:text-xs backdrop-blur-md shadow-lg shadow-blue-500/20 mb-4 md:mb-6 hover:bg-white/20 transition-colors cursor-default w-fit">
              <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-cyan-400"></span>
              </span>
              <span className="text-cyan-50 tracking-wide uppercase font-bold">
                New: AI-Enhanced Development
              </span>
            </div>

            {/* Headline - SEO Optimized H1 with visual enhancement */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-[1.15] md:leading-[1.1] mb-4 md:mb-5 drop-shadow-lg tracking-tight">
              FactoryJet - Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-100">
                Website Design
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white">
                E-Commerce
              </span>{" "}
              <br className="hidden lg:block" />
              Development Company (7-Day Delivery)
            </h1>

            <h2 className="text-sm md:text-lg text-blue-100/90 mb-6 md:mb-8 leading-relaxed max-w-lg font-medium">
              High-Performance Web Development & E-Commerce Development Services for Growing Indian Businesses
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-10">
              <button
                onClick={() => {
                  trackCTAClick('start_your_project', 'home_hero', 'primary');
                  openModal();
                }}
                className="relative overflow-hidden bg-orange-700 hover:bg-orange-800 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-bold text-sm md:text-base transition-all shadow-[0_0_40px_-10px_rgba(194,65,12,0.6)] hover:shadow-[0_0_60px_-10px_rgba(194,65,12,0.8)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:translate-x-full transition-transform duration-500 ease-in-out -skew-x-12 -ml-4 w-[120%]"></div>
                <Rocket
                  size={16}
                  className="md:w-[18px] md:h-[18px] fill-white/20 relative z-10"
                />
                <span className="relative z-10">Start Your Project</span>
              </button>

              <a
                href="https://wa.me/919699977699"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackContactClick('whatsapp', '+919699977699', 'home_hero');
                  trackWhatsAppConversion();
                }}
                className="bg-whatsapp hover:bg-whatsapp-hover text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
              >
                <WhatsAppIcon size={18} className="md:w-[20px] md:h-[20px]" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-x-3 md:gap-x-4 gap-y-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 md:gap-2 text-blue-50 text-xs md:text-sm font-medium"
                >
                  <div className="bg-cyan-500/20 rounded-full p-0.5 shrink-0">
                    <CheckCircle className="text-cyan-300 w-3 h-3 md:w-[14px] md:h-[14px]" />
                  </div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual/Dashboard Mockup - Right Side - Using CSS animation for faster LCP */}
          <div
            className="relative hidden md:flex items-center justify-center lg:justify-end animate-[fadeInRight_1s_ease-out_0.2s_forwards]"
            style={{ opacity: 0 }}
          >
            {/* Glow behind the mockup */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-500/30 blur-[60px] rounded-full -z-10 mix-blend-screen"></div>

            <div className="w-full max-w-lg relative rounded-xl bg-gray-900/80 border border-white/10 shadow-2xl backdrop-blur-md p-2 overflow-hidden ring-1 ring-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-700">
              {/* Decorative "Browser" Header */}
              <div className="flex items-center gap-2 mb-2 px-1">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                  <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex-1 bg-black/40 rounded-sm h-5 ml-3 flex items-center px-2 text-[9px] text-gray-400 font-mono border border-white/5">
                  <span className="text-gray-500 mr-1">https://</span>
                  factoryjet.com
                </div>
              </div>

              {/* Mock Website UI */}
              <div className="bg-white rounded-b-md overflow-hidden w-full aspect-[16/10] flex flex-col shadow-inner relative">
                {/* Mock Navbar */}
                <div className="bg-white border-b border-gray-100 px-3 py-2 flex justify-between items-center z-20 relative">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 bg-black rounded flex items-center justify-center text-white text-[8px] font-bold">
                      L
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-black">
                      LUXE.CO
                    </span>
                  </div>
                  <div className="hidden sm:flex gap-3 text-[8px] font-medium text-gray-600">
                    <span className="text-black font-bold">Shop</span>
                    <span>Stories</span>
                    <span>About</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-4 h-4 rounded-full border border-gray-200 flex items-center justify-center">
                      <div className="w-2 h-2 border-[1px] border-black rounded-full"></div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-black text-white text-[7px] flex items-center justify-center">
                      2
                    </div>
                  </div>
                </div>

                {/* Mock Content */}
                <div className="flex-1 overflow-hidden relative flex">
                  {/* Sidebar / Hero Banner */}
                  <div className="relative w-2/3 h-full group">
                    <img
                      src="/hero-ecommerce-store.webp"
                      sizes="(max-width: 768px) 66vw, 33vw"
                      alt="Fashion Website Hero"
                      width={320}
                      height={200}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute bottom-4 left-4 flex flex-col justify-end">
                      <span className="text-[7px] bg-white text-black px-1.5 py-0.5 rounded-full w-fit font-bold uppercase tracking-widest mb-1.5 shadow-sm">
                        New Season
                      </span>
                      <div
                        className="text-white font-display font-bold text-xl leading-none mb-2 drop-shadow-md"
                        aria-hidden="true"
                      >
                        Summer <br />
                        Essentials
                      </div>
                      <button className="bg-white text-black text-[8px] font-bold px-3 py-1.5 w-fit rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                        Explore
                      </button>
                    </div>
                  </div>

                  {/* Right Side / Product Grid */}
                  <div className="w-1/3 bg-gray-50 h-full p-2 overflow-hidden">
                    <h4 className="text-[8px] font-bold text-gray-900 mb-2">
                      Trending
                    </h4>
                    <div className="flex flex-col gap-2">
                      {[
                        {
                          price: "₹2.4k",
                          img: "/hero-trending-shoe-red.webp",
                        },
                        {
                          price: "₹5.9k",
                          img: "/hero-trending-shoe-brown.webp",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-white p-1.5 rounded-lg border border-gray-100 shadow-sm flex items-center gap-2"
                        >
                          <div className="w-8 h-8 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                            <img
                              src={item.img}
                              width={32}
                              height={32}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover"
                              alt="Product"
                            />
                          </div>
                          <div>
                            <div className="h-1 w-8 bg-gray-200 rounded mb-0.5"></div>
                            <div className="text-[8px] font-bold text-gray-900">
                              {item.price}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cursor Animation Overlay - GPU-accelerated CSS animation */}
                <div
                  className="absolute top-0 left-0 z-30 pointer-events-none drop-shadow-xl animate-[cursorMove_4s_ease-in-out_infinite]"
                  style={{
                    transform: "translate3d(60%, 60%, 0)", // Use translate3d for GPU acceleration
                    willChange: "transform", // Hint browser to optimize
                  }}
                >
                  <MousePointer className="text-black fill-white" size={20} />
                  <div className="ml-3 mt-1 bg-black text-white text-[8px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap shadow-lg">
                    Click
                  </div>
                </div>
              </div>

              {/* Floating Badges - Analytics - GPU-accelerated CSS animation */}
              <div
                className="absolute -right-4 top-16 bg-white/90 backdrop-blur-md mr-5 p-2 rounded-lg shadow-xl shadow-blue-900/20 hidden md:block z-30 border border-white/50 max-w-[120px] animate-[floatUp_4s_ease-in-out_infinite]"
                style={{ willChange: "transform" }} // GPU acceleration hint
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="bg-blue-100 p-1 rounded text-blue-600">
                    <BarChart3 size={12} />
                  </div>
                  <div>
                    <p className="text-[8px]  text-gray-500 font-bold uppercase">
                      Revenue
                    </p>
                    <p className="text-gray-900 font-bold text-xs">
                      ₹12.4 Lakh
                    </p>
                  </div>
                </div>
                {/* Mini Chart */}
                <div className="flex items-end gap-0.5 h-6 mt-0.5 border-b border-gray-100 pb-0.5">
                  <div className="w-1/5 bg-blue-100 h-[40%] rounded-t-[1px]"></div>
                  <div className="w-1/5 bg-blue-100 h-[60%] rounded-t-[1px]"></div>
                  <div className="w-1/5 bg-blue-200 h-[30%] rounded-t-[1px]"></div>
                  <div className="w-1/5 bg-blue-600 h-[85%] rounded-t-[1px] relative shadow-lg shadow-blue-500/50"></div>
                  <div className="w-1/5 bg-blue-100 h-[50%] rounded-t-[1px]"></div>
                </div>
              </div>

              {/* Floating Badges - Rating - GPU-accelerated CSS animation */}
              <div
                className="absolute -left-4 bottom-12 bg-white/90 backdrop-blur-md ml-5 p-2 rounded-lg shadow-xl shadow-blue-900/20 hidden md:block z-30 border border-white/50 animate-[floatDown_5s_ease-in-out_1s_infinite]"
                style={{ willChange: "transform" }} // GPU acceleration hint
              >
                <div className="flex items-center gap-2">
                  <div className="bg-orange-100 p-1.5 rounded">
                    <Star
                      className="text-orange-500 fill-orange-500"
                      size={12}
                    />
                  </div>
                  <div>
                    <p className="text-[8px] text-gray-500 font-bold uppercase">
                      Rating
                    </p>
                    <div className="flex items-baseline gap-1">
                      <p className="text-gray-900 font-bold text-xs">4.9</p>
                      <span className="text-[8px] text-gray-400 font-medium">
                        Trusted
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
