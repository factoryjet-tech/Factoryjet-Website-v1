import React from 'react';
import { Monitor, Smartphone, Search, BarChart, Zap, Wrench, Star, Check, Globe, Layout, ShoppingBag } from 'lucide-react';

export const SocialProof = () => (
  <section className="bg-slate-50 py-12 border-b border-slate-200">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 mb-12 text-center font-bold text-slate-400 text-lg">
        <span>Google Partner</span>
        <span>Shopify Partners</span>
        <span>WordPress VIP</span>
        <span>Razorpay</span>
        <span>Shiprocket</span>
        <span>HubSpot</span>
        <span>AWS</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {[
            { val: "500+", lbl: "Websites Delivered" },
            { val: "₹150 Cr+", lbl: "Client Revenue" },
            { val: "98%", lbl: "Retention Rate" },
            { val: "7 Days", lbl: "Avg. Delivery" },
            { val: "4.9/5", lbl: "Google Rating" }
        ].map((stat, i) => (
            <div key={i} className="group p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all cursor-default">
                <div className="text-3xl md:text-4xl font-extrabold text-[#0052CC] group-hover:scale-110 transition-transform duration-300">{stat.val}</div>
                <div className="text-sm font-bold text-slate-600 mt-2 uppercase tracking-wider">{stat.lbl}</div>
            </div>
        ))}
      </div>
    </div>
  </section>
);

export const About = () => (
    <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <span className="text-[#FF6B35] font-bold tracking-widest text-sm uppercase mb-2 block">Who We Are</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] leading-tight">
                    About FactoryJet — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#2563EB]">Web Design & Development Experts in Bangalore</span>
                </h2>
                <div className="w-24 h-1 bg-[#FF6B35] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0052CC] transition-colors duration-300 shadow-sm">
                        <Globe className="w-8 h-8 text-[#0052CC] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Company Profile</h3>
                    <ul className="space-y-4 text-slate-700 text-base flex-grow">
                        <li className="flex justify-between border-b border-slate-100 pb-3"><span>Name:</span> <span className="font-bold text-slate-900">FactoryJet Technologies</span></li>
                        <li className="flex justify-between border-b border-slate-100 pb-3"><span>HQ:</span> <span className="font-bold text-slate-900">Bengaluru, KA</span></li>
                        <li className="flex justify-between border-b border-slate-100 pb-3"><span>Exp:</span> <span className="font-bold text-slate-900">25+ Years Combined</span></li>
                        <li className="flex justify-between border-b border-slate-100 pb-3"><span>Rating:</span> <span className="font-bold text-slate-900">4.9/5.0</span></li>
                        <li className="flex justify-between pt-2"><span>Focus:</span> <span className="font-bold text-slate-900">Web Design & E-Comm</span></li>
                    </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full">
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6B35] transition-colors duration-300 shadow-sm">
                        <Layout className="w-8 h-8 text-[#FF6B35] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Core Capabilities</h3>
                    <div className="flex flex-wrap gap-2 content-start">
                        {[
                            "Website Design", "WordPress Dev", "Shopify Stores",
                            "E-Commerce", "Custom Web Apps", "Mobile Responsive",
                            "UI/UX Design", "SEO Optimization", "Landing Pages", "Migrations"
                        ].map((item, i) => (
                            <span key={i} className="bg-slate-50 text-slate-700 text-sm font-bold px-4 py-2 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-default">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#0052CC] to-[#003380] p-8 rounded-3xl shadow-xl shadow-blue-900/30 text-white hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                     <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                        <ShoppingBag className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">Serving Bangalore</h3>
                    <div className="space-y-6 text-base text-blue-50">
                        <div className="bg-white/10 p-4 rounded-xl border border-white/5">
                            <strong className="text-white block mb-1">Tech Hubs</strong>
                            Whitefield, Electronic City, Manyata Tech Park, ITPL
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl border border-white/5">
                            <strong className="text-white block mb-1">Startup Corridors</strong>
                            Koramangala, HSR Layout, Indiranagar
                        </div>
                        <div className="pt-2">
                            <span className="font-bold text-white flex items-center gap-2"><Check className="w-4 h-4 bg-green-500 rounded-full p-0.5" /> Covering all 198 Wards of BBMP</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#0F172A] rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl border border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[100px]"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">Strategic Partnership</div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Strategic Partners for Bangalore's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#ff9f7c]">Digital Growth</span></h3>
                        <p className="text-slate-300 leading-relaxed mb-8 text-lg font-medium">
                            FactoryJet Technologies is a leading web design company in Bangalore with over 25 years of combined expertise. We're not just another website development agency in Bangalore — we're strategic partners. Our deep understanding of Bengaluru's startup ecosystem lets us build tailored solutions for funded startups in Koramangala, D2C brands in HSR Layout, and enterprises in Electronic City.
                        </p>
                        <a href="#contact-form" className="inline-flex items-center gap-3 bg-white text-[#0F172A] px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-lg text-lg group">
                            Start Your Project Now <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                    <div className="space-y-6 text-base text-slate-300 bg-slate-800/50 p-8 rounded-2xl border border-white/10 font-medium backdrop-blur-sm">
                         <p>
                            We've helped 500+ businesses establish a dominant online presence. Our team combines technical depth with real business thinking to deliver websites that generate leads and close sales.
                        </p>
                        <p>
                            Our e-commerce division has launched 120+ stores. As a trusted Shopify partner in Bangalore, we help brands launch and scale. Our WordPress services power 200+ business websites with custom themes and high-speed performance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export const ProblemSection = () => {
    const problems = [
        { icon: Monitor, badge: "Losing ₹5-10 Lakhs/Year", title: "50% of Bangalore Businesses Have No Professional Website", desc: "While Bangalore leads India's digital economy, half of local businesses run no website — or one that's outdated, non-responsive, and built years ago. In a market where 87% of customers research online before buying, that invisibility costs lakhs in lost revenue annually. Your competitors with modern, conversion focused websites are capturing customers you'll never even know existed. For startups in Koramangala and enterprises in Electronic City alike, a professional website is no longer optional." },
        { icon: Smartphone, badge: "Losing 67% of Visitors", title: "82% of Bengaluru Web Traffic is Mobile — Is Your Site Ready?", desc: "Bengaluru has the highest smartphone penetration in India. Your customers browse, research, and buy from mobile — during metro commutes, in auto-rickshaws, during lunch breaks at tech parks, and late at night. Websites that load slow, look cramped, or have tiny buttons on mobile lose 67% of potential customers within 3 seconds. If your site isn't built with mobile first website design in mind, you're losing the majority of your traffic — and in Bangalore's market, that's a serious problem." },
        { icon: Search, badge: "Zero Google Visibility", title: "Invisible on Google = Invisible to Bangalore Customers", desc: "When Bengaluru customers search \"best [your service] in Koramangala\" or \"top [your product] in Whitefield\" — does your business appear? 75% of searchers never go past page one. Websites built without SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization) stay invisible on Google, ChatGPT, and Perplexity. Your competitors on page one are capturing your customers daily. In a city where digital literacy is highest, search visibility is everything." },
        { icon: BarChart, badge: "Zero ROI on Website", title: "Websites That Don't Convert = Wasted Investment", desc: "Many Bangalore businesses have websites that look fine but generate zero leads. No clear CTAs, no lead capture, no WhatsApp integration, no conversion logic. These digital brochures cost money to maintain but add nothing to revenue. A well-built seo friendly website should be your best salesperson — working 24/7 to capture and qualify leads while you focus on scaling. In Bengaluru's startup ecosystem where every rupee counts, a non-converting website is a liability." },
        { icon: Zap, badge: "7% Loss Per Second", title: "3-Second Rule: Every Second of Delay Costs You 7% in Conversions", desc: "Bangalore customers are tech-savvy and impatient — they expect instant loading. Studies show 53% of mobile users leave sites that take longer than 3 seconds to load. Slow hosting, unoptimized images, bloated code, and poor caching kill your conversions silently. If your site takes 5+ seconds, you're losing half your visitors before they see a single word. In Electronic City and Whitefield, where users are used to world-class UX, slow websites are simply unforgivable." },
        { icon: Wrench, badge: "Hidden Long-Term Costs", title: "Cheap Templates = Expensive Mistakes", desc: "Many Bengaluru entrepreneurs try DIY websites using Wix, Squarespace, or free WordPress themes. The result is generic sites that look like thousands of others — poor SEO performance, limited functionality, and constant technical issues. What seems like savings upfront becomes expensive when you calculate lost customers, support costs, and eventual professional redesign. In Bangalore's market, cookie-cutter websites signal \"amateur\" — not the impression you want to make on investors, partners, or customers." }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Why 50% of Bengaluru Businesses Are Losing Lakhs to Competitors with Better Websites</h2>
                    <p className="text-xl text-slate-700">Bengaluru's Digital Reality</p>
                    <p className="mt-6 text-slate-700 text-lg leading-relaxed">Bangalore is India's most competitive tech ecosystem. With 60,000+ startups, thousands of SMBs, and hundreds of enterprise companies competing for the same customers — your digital presence is survival-critical. Our research reveals a stark gap between Bengaluru's tech reputation and the actual digital reality of most local businesses.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {problems.map((p, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#FF6B35] hover:-translate-y-2 transition-transform">
                            <div className="flex justify-between items-start mb-4">
                                <p.icon className="w-10 h-10 text-[#FF6B35]" />
                                <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded">{p.badge}</span>
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] mb-3">{p.title}</h3>
                            <p className="text-slate-700 text-base leading-relaxed">{p.desc}</p>
                            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                                <a href="#contact-form" className="text-[#0052CC] text-sm font-bold hover:underline">Get Audit</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-700 mb-6 font-medium text-lg">If any of these challenges sound familiar, you're not alone — and you're not stuck. FactoryJet has helped 500+ Bangalore businesses overcome these exact problems with strategic web design services in Bangalore that drive real results.</p>
                    <a href="#contact-form" className="inline-block bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-orange-600 transition-colors">
                        Get Free Website Audit
                    </a>
                </div>
            </div>
        </section>
    );
};

export const SolutionSection = () => {
    const solutions = [
        { icon: Star, title: "Stunning Websites Built to Convert", desc: "We design modern, professional websites that reflect your brand's quality and turn visitors into customers. Our designers create custom website development solutions — never templates — optimized for your specific industry and audience. Every element, from hero sections to CTAs, is placed strategically to guide visitors toward action. Result: Websites that look premium and generate 3–5x more leads than generic designs." },
        { icon: Smartphone, title: "Mobile-First Design for Bengaluru's Mobile Users", desc: "Every website we build starts mobile-first. Our team ensures your site loads fast, looks great, and works perfectly on every smartphone, tablet, and desktop. Touch-friendly buttons, readable fonts, optimized images, and intuitive navigation create seamless experiences. Result: Capture the 82% of Bangalore traffic that comes from mobile devices." },
        { icon: Check, title: "Dominate Google, ChatGPT & AI Search", desc: "Our websites aren't just attractive — they're built for visibility. We implement comprehensive SEO, GEO, AEO, and AI optimization from day one. Keyword strategy, schema markup, fast loading, and quality content Structured to improve visibility across AI-driven search platforms. Result: First-page rankings and visibility across every major search platform." },
        { icon: Check, title: "Turn Every Visitor Into a Qualified Lead", desc: "We design websites with conversion at the core. Strategic lead capture forms, compelling CTAs, WhatsApp integration, exit-intent triggers, and automated follow-ups turn passive visitors into active leads. Our web design agency in Bangalore has generated ₹150+ crore in client revenue through conversion-focused websites. Result: Your website becomes your most productive sales channel." },
        { icon: Zap, title: "Sub-2-Second Load Time Optimization", desc: "Speed is non-negotiable. Our website development services in Bangalore include premium hosting, CDN integration, image optimization, code minification, and caching strategies that deliver sub-2-second load times. We optimize for core web vitals optimized benchmarks — LCP, FID, CLS — for perfect Lighthouse scores. Result: Optimized for sub-2-second performance based on best-practice benchmarks." },
        { icon: Star, title: "Bespoke Designs That Set You Apart", desc: "Every website is custom-designed for your brand, industry, and goals. No templates, no cookie-cutter layouts. Our team creates unique digital experiences that differentiate you from competitors and establish your brand as a market leader. Result: A website that's uniquely yours — impossible to replicate." }
    ];

    return (
        <section className="py-20 bg-[#0F172A] text-white">
            <div className="container mx-auto px-4">
                 <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">The FactoryJet Solution: Websites That Win in Bangalore's Competitive Market</h2>
                    <p className="text-xl text-slate-300">How We Transform Bengaluru Businesses Into Digital Leaders — One Strategic Website at a Time</p>
                    <p className="mt-6 text-slate-300 text-lg leading-relaxed">FactoryJet isn't just another web design company in Bangalore. We're a strategic partner that understands the unique challenges of doing business in India's startup capital. Our proven methodology has helped 500+ businesses across Koramangala, Whitefield, Electronic City, HSR Layout, Indiranagar, and all of Bengaluru achieve measurable results.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((s, i) => (
                        <div key={i} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-[#0052CC] transition-colors">
                            <s.icon className="w-10 h-10 text-[#0052CC] mb-4" />
                            <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                            <p className="text-slate-300 text-base leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center bg-blue-900/30 p-8 rounded-xl border border-blue-500/30">
                    <p className="text-lg font-medium mb-6 text-slate-200">Every website we deliver includes: custom design, mobile responsiveness, SEO optimization, SSL security, speed optimization, WhatsApp integration, and 30-90 day post-launch support. We don't just build websites — we build digital growth engines.</p>
                    <a href="#contact-form" className="inline-block bg-[#FF6B35] text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-orange-600 transition-colors">
                        Get Your Custom Solution
                    </a>
                </div>
            </div>
        </section>
    );
}
