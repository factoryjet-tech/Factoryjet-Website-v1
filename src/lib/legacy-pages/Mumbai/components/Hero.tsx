import React from "react";
import {
  CheckCircle,
  MessageCircle,
  MapPin,
  Award,
  Globe,
  Phone,
} from "lucide-react";
import AuthorByline from "@/components/AuthorByline";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-hero-gradient pt-24 pb-16 md:pt-28 md:pb-20 px-4 md:px-8 overflow-hidden">
      {/* Background Effects - Optimized for Mobile */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white/5 rounded-full blur-2xl md:blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section: Headlines & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          {/* Left Column: Headlines & CTA (Span 7) - Mobile Order 1-5 */}
          <div className="lg:col-span-7 text-white space-y-5 pt-4">
            {/* Breadcrumb - Hidden on tiny screens if needed, but keeping for SEO */}
            <nav className="hidden md:flex items-center gap-2 text-xs text-blue-200 font-medium font-mono uppercase tracking-wide">
              <span>Home</span>
              <span className="text-blue-400">/</span>
              <span>Services</span>
              <span className="text-blue-400">/</span>
              <span className="text-white">Web Development Mumbai</span>
            </nav>

            {/* Badge - Mobile Item [1] */}
            <div className="inline-flex items-center gap-2 bg-secondary/90 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full border border-orange-400/30 shadow-sm">
              <Award className="w-3 h-3" />
              <span>#1 Web Development Agency in Mumbai</span>
            </div>

            {/* H1 Headline - Mobile Item [2] */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight tracking-tight text-white drop-shadow-lg">
              Professional Web Development Company in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Mumbai
              </span>
            </h1>
            <AuthorByline variant="dark" />

            {/* Subheadline - Mobile Item [3] */}
            <h2 className="text-lg md:text-2xl font-medium text-blue-100 leading-relaxed max-w-2xl">
              Custom Website Development Services in Mumbai —{" "}
              <span className="text-accent font-bold">Built for Growth</span>
            </h2>

            {/* WhatsApp CTA - Mobile Item [4] - Primary on Mobile */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Enforcing Jet Orange (#FF6B35 / bg-secondary) for Primary Mobile CTA */}
              <a
                href="https://wa.me/919699977699"
                className="inline-flex items-center justify-center gap-3 bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1 group w-full sm:w-auto"
              >
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-lg">Chat on WhatsApp</span>
              </a>
              {/* Helper Text */}
              <div className="hidden sm:flex items-center gap-2 text-sm text-blue-200 px-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-mono">WhatsApp: +91 96999 77699</span>
              </div>
            </div>

            {/* Trust Badges - Mobile Item [5] - Before Form */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10 mt-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                <span className="text-xs md:text-sm font-semibold">
                  500+ Projects
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <Globe className="w-3 h-3 md:w-4 md:h-4 text-blue-300" />
                <span className="text-xs md:text-sm font-semibold">
                  150 Cr+ Export Orders
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <Award className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                <span className="text-xs md:text-sm font-semibold">
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Form (Span 5) - Mobile Item [6] */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Reduced Blur for Mobile Performance */}
            <div className="bg-white/10 backdrop-blur-md md:backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent"></div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  Get Free Consultation
                </h3>
                <p className="text-blue-200 text-sm">
                  Custom proposal in 2 hours. Packages for every stage.
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-blue-100 uppercase ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 min-h-[48px] rounded-lg bg-white/90 border-0 text-navy placeholder:text-slate-400 focus:ring-2 focus:ring-accent transition-all text-base"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-blue-100 uppercase ml-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91..."
                      className="w-full px-4 py-3 min-h-[48px] rounded-lg bg-white/90 border-0 text-navy placeholder:text-slate-400 focus:ring-2 focus:ring-accent transition-all text-base"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-blue-100 uppercase ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 min-h-[48px] rounded-lg bg-white/90 border-0 text-navy placeholder:text-slate-400 focus:ring-2 focus:ring-accent transition-all text-base"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-blue-100 uppercase ml-1">
                    Business Type
                  </label>
                  <select className="w-full px-4 py-3 min-h-[48px] rounded-lg bg-white/90 border-0 text-navy focus:ring-2 focus:ring-accent transition-all text-base">
                    <option value="">Select Industry...</option>
                    <option value="Manufacturing">Manufacturing Company</option>
                    <option value="Exporter">Exporter / Importer</option>
                    <option value="Wholesale">Wholesaler / Distributor</option>
                    <option value="Engineering">
                      Engineering / Fabrication
                    </option>
                    <option value="Pharma">Chemical / Pharma</option>
                    <option value="Textile">Textile / Garments</option>
                    <option value="Food">Food Processing</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-blue-100 uppercase ml-1">
                    Budget
                  </label>
                  <select className="w-full px-4 py-3 min-h-[48px] rounded-lg bg-white/90 border-0 text-navy focus:ring-2 focus:ring-accent transition-all text-base">
                    <option value="">Estimated Budget...</option>
                    <option value="Starter">Starter</option>
                    <option value="Growth">Growth</option>
                    <option value="Pro">Professional</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-4 min-h-[52px] rounded-lg text-lg shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 mt-2"
                >
                  Get Free Quote Now
                </button>

                <p className="text-[10px] text-center text-blue-200 opacity-80 mt-3">
                  100% Secure. We respect your privacy. Response in 2 hours.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Hero Authority Content (Full Width below top section) - Mobile Item [7] */}
        <div className="bg-navy/40 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/5 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-blue-50/90 font-light leading-relaxed text-sm md:text-base text-justify">
            <div className="space-y-6">
              <p>
                <strong className="text-white font-semibold">
                  FactoryJet is Mumbai's leading professional web development
                  company
                </strong>{" "}
                specializing in manufacturer website design, B2B website
                development, and web design for factories across Maharashtra.
                With 25+ years of expertise in industrial web design, we help
                manufacturers, exporters, wholesalers, and industrial businesses
                in Thane, Navi Mumbai, Vasai-Virar, Boisar, and Palghar
                establish powerful online presence that generates export leads
                and grows wholesale orders.
              </p>
              <p>
                We serve industrial businesses across Mumbai's manufacturing
                hubs —{" "}
                <span className="text-white font-medium">
                  MIDC Andheri, MIDC Taloja, Thane-Belapur Industrial Belt,
                  Vasai Industrial Area, Boisar Industrial Zone, Palghar
                  Industrial Area, Bhiwandi Warehousing Hub, and Panvel
                  Industrial Estate
                </span>
                . Our mobile responsive sites are designed specifically for B2B
                buyers, procurement managers, and international importers
                searching for Indian manufacturers.
              </p>
              <p>
                As the best B2B website design company in Mumbai, we've helped
                500+ manufacturing businesses — from engineering workshops in
                Thane to chemical exporters in MIDC to textile manufacturers in
                Bhiwandi — launch professional, mobile-optimized, SEO-ready
                websites that convert visitors into qualified inquiries. Whether
                you need an industrial catalog website, B2B e-commerce portal,
                or export-focused lead generation site, FactoryJet delivers
                results tailored to your budget.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                Mumbai and surrounding regions form India's largest industrial
                corridor with 50,000+ manufacturing units, 15,000+ exporters,
                and ₹5 lakh crore annual industrial output. Yet 70% of these
                businesses lack professional websites, losing millions in
                potential orders to competitors with better digital presence.
                FactoryJet changes that — we build websites that help Mumbai
                manufacturers compete globally and get found by international
                buyers.
              </p>
              <div className="border-l-4 border-secondary pl-4 italic bg-white/5 p-4 rounded-r-lg">
                <p className="font-medium text-white/90">
                  If you're searching for industrial web design near me,
                  manufacturer website design Mumbai, B2B website development
                  Thane, web design agency Vasai-Virar, or factory website
                  design Navi Mumbai — FactoryJet works with manufacturers,
                  exporters, wholesalers, and industrial businesses across the
                  Mumbai Metropolitan Region. Get a free quote today.
                </p>
              </div>

              {/* Secondary CTA in text */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
                <button className="text-accent font-bold hover:text-white transition-colors flex items-center gap-2 group">
                  View Case Studies{" "}
                  <span className="text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
                <button className="text-white font-bold hover:text-secondary transition-colors flex items-center gap-2 group">
                  Check Pricing{" "}
                  <span className="text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Indicators - Grid adjusted for Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 pt-6 border-t border-white/10 text-xs font-semibold text-blue-200 tracking-wide uppercase">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" /> 7-Day
              Delivery
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" /> SEO
              Optimized
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" /> Mobile
              Ready
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" /> B2B
              Specialist
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" /> Export
              Focused
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" /> No Hidden
              Cost
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
