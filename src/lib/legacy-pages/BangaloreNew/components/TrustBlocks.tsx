import React, { useState } from 'react';
import { ChevronDown, Check, Star, MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

export const Testimonials = () => {
    const reviews = [
        { text: "FactoryJet is the best website design company in Bangalore hands down. They understood our startup's needs perfectly and delivered a website that helped us raise our Series A. The attention to detail and understanding of investor expectations was remarkable.", author: "Rahul M., Founder & CEO, Fintech Startup, Koramangala" },
        { text: "We evaluated 10+ website development companies in Bangalore before choosing FactoryJet. Their 7-day delivery was real — our e-commerce store went live exactly when promised. Professional team, excellent communication, outstanding results.", author: "Priya S., D2C Brand Owner, HSR Layout" },
        { text: "As an enterprise company in Electronic City, we needed a website that conveyed global standards while appealing to Indian clients. FactoryJet delivered exactly that — a world-class website that has significantly improved our lead quality.", author: "Venkat K., Marketing Director, IT Services Company" },
        { text: "Our Shopify store built by FactoryJet generated ₹50 lakhs in the first month. Their understanding of e-commerce, payment gateways, and shipping integration is exceptional. Truly the best Shopify store development company in Bangalore.", author: "Meera R., Fashion Brand Founder, Indiranagar" },
        { text: "FactoryJet redesigned our outdated WordPress site and the transformation was incredible. Page speed went from 8 seconds to under 2 seconds. Our organic traffic doubled in three months. Highly recommend their WordPress website development Bangalore services.", author: "Arun T., CEO, EdTech Company, Whitefield" },
        { text: "We needed a complex B2B portal with dealer management and custom pricing. FactoryJet's web design agency in Bangalore team delivered beyond our expectations. The portal has streamlined our entire distribution network.", author: "Kumar P., Director, Manufacturing Company, Peenya" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-12 text-center">What Our Clients Say — Top Website Design Company in Bangalore</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-1 text-[#FF6B35] mb-4">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <span className="ml-2 text-sm font-bold">(5/5)</span>
                            </div>
                            <p className="text-slate-700 mb-4 italic text-base">"{r.text}"</p>
                            <p className="font-bold text-[#0F172A] text-sm border-t pt-4 border-slate-200">{r.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`group rounded-2xl transition-all duration-300 bg-white ${isOpen ? 'shadow-xl border-l-4 border-l-[#0052CC] ring-1 ring-slate-100' : 'shadow-sm border border-slate-100 hover:shadow-md'}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-start p-6 text-left cursor-pointer"
            >
                <span className={`font-bold text-lg pr-4 transition-colors duration-300 ${isOpen ? 'text-[#0052CC]' : 'text-[#0F172A] group-hover:text-[#0052CC]'}`}>
                    {q}
                </span>
                <span className={`flex-shrink-0 ml-2 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-[#0052CC] text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-[#0052CC]'}`}>
                    <ChevronDown className="w-5 h-5" />
                </span>
            </button>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <div className="px-6 pb-6 text-slate-700 text-base leading-relaxed border-t border-dashed border-slate-100 mt-[-8px] pt-4">
                    {a}
                </div>
            </div>
        </div>
    );
};

export const FAQ = () => {
    const faqs = [
        { q: "How much does website design cost in Bangalore?", a: "Website costs in Bangalore range from ₹15,000 to ₹5,00,000+ depending on your requirements. FactoryJet, the best website design company in Bangalore, offers transparent pricing starting at ₹29,999 for starter packages (5-7 pages, mobile responsive, basic SEO), ₹59,999 for professional business websites (10-15 pages, custom design, advanced features), ₹99,999 for e-commerce stores (up to 200 products, payment/shipping integration), and custom quotes for enterprise solutions. Our pricing includes hosting, SSL, mobile responsiveness, and 30-day support. No hidden costs — the price we quote is the price you pay." },
        { q: "What is included in FactoryJet's ₹29,999 starter package for Bangalore businesses?", a: "Our starter package — the most affordable professional website from a top website design company in Bangalore — includes: 5-7 page responsive website, custom design (no templates), mobile-first development, contact form with email notifications, WhatsApp chat integration, basic SEO setup (meta tags, sitemap), Google Analytics integration, SSL certificate for security, 1-year hosting on premium servers, and 30-day post-launch support. This package is ideal for small businesses, startups, and professionals in Bengaluru who need a credible online presence without a large budget." },
        { q: "How long does it take to build a website in Bangalore?", a: "Website development timelines for Bangalore businesses vary by project type. At FactoryJet, our delivery schedule is: Landing pages: 3-5 days, Basic business websites (5-7 pages): 7-10 days, Professional websites (10-15 pages): 10-14 days, E-commerce stores (up to 200 products): 3-4 weeks, Custom web applications: 4-8 weeks, Large marketplaces or complex platforms: 6-12 weeks. We offer expedited delivery for urgent projects at additional cost. Our streamlined process ensures faster turnaround without compromising quality — clients across Koramangala, Whitefield, and Electronic City appreciate our efficient delivery." },
        { q: "Do you provide SEO optimization for websites in Bangalore?", a: "Yes, all FactoryJet websites include SEO optimization. Our SEO services include: Basic SEO (all packages): Meta titles and descriptions, XML sitemap, robots.txt, image optimization, mobile-friendliness, page speed optimization. Advanced SEO (professional packages and above): Keyword research and implementation, schema markup (LocalBusiness, FAQ, Product), internal linking structure, GEO optimization (for AI search), local SEO for Bangalore rankings. Ongoing SEO: Available as monthly service (₹15,000-50,000/month) for continuous optimization and content marketing. Our websites consistently rank well for Bangalore search terms within 2-3 months of launch." },
        { q: "Should I choose WordPress or Shopify for my Bangalore business?", a: "The choice depends on your specific needs. WordPress is ideal for: Content-heavy websites (blogs, news, portfolios), businesses needing maximum customization, companies preferring ownership and control, budget-conscious projects, and SEO-focused content marketing. Shopify is better for: E-commerce focused businesses, D2C brands wanting quick launch, businesses preferring hosted solutions (less technical management), companies needing reliable payment processing, and scaling e-commerce operations. FactoryJet recommends WordPress for content businesses and Shopify for e-commerce. We can also build WooCommerce stores for businesses wanting WordPress with e-commerce." },
        { q: "Can you integrate payment gateways for Bangalore e-commerce websites?", a: "Yes, FactoryJet integrates all major payment gateways for Bangalore e-commerce businesses: Indian Gateways: Razorpay (most popular), PayU, CCAvenue, Paytm, Instamojo. International Gateways: Stripe, PayPal (for international sales). Payment Methods Supported: Credit/Debit Cards, UPI, Net Banking, Wallets, EMI, Buy Now Pay Later. We handle complete integration including test transactions, webhook setup, and reconciliation configuration. Payment gateway integration is included in our e-commerce packages." },
        { q: "Do you build mobile-responsive websites for Bangalore businesses?", a: "Yes, every FactoryJet website is mobile-responsive by default. This is non-negotiable because: 82% of Bangalore web traffic comes from mobile devices, Google uses mobile-first indexing (mobile experience affects rankings), mobile users expect instant loading and easy navigation, and non-responsive sites lose 67% of visitors immediately. Our mobile-first approach means we design for smartphones first, then scale up to tablets and desktops. We test on 15+ devices and all major browsers. Mobile-responsive design is included in all packages — never an add-on or extra cost." },
        { q: "What happens after my Bangalore website is launched?", a: "FactoryJet provides comprehensive post-launch support for all Bangalore clients: 30-90 day free support (depending on package) covering bug fixes, minor adjustments, and technical questions. Handover documentation including admin credentials, hosting details, and user guides. Training session on managing your website (content updates, basic maintenance). Optional Annual Maintenance Contract (AMC) starting at ₹2,999/month for ongoing updates, security, and support. We don't disappear after launch — our relationship continues as your ongoing website partner." }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-6">Frequently Asked Questions — Website Design Company in Bangalore</h2>
                    <p className="text-lg text-slate-600">Everything you need to know about our services, pricing, and process.</p>
                 </div>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
                 </div>
            </div>
        </section>
    );
};

export const LocalSEO = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Serving All of Bangalore (Bengaluru) — Koramangala to Whitefield, Electronic City to Yelahanka</h2>
                <p className="text-xl text-slate-700">Local Website Design Experts with Deep Understanding of Bengaluru's Business Landscape</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-base text-slate-700 mb-12">
                <div><h4 className="font-bold text-[#0F172A] mb-2">Central Bangalore</h4>MG Road, Brigade Road, Residency Road, Lavelle Road, Commercial Street, Shivajinagar, Ulsoor, Richmond Town, Ashok Nagar, Cubbon Park, Cunningham Road</div>
                <div><h4 className="font-bold text-[#0F172A] mb-2">East Bangalore</h4>Koramangala (All Blocks), Indiranagar, HSR Layout (All Sectors), BTM Layout, Whitefield, Marathahalli, ITPL, Brookefield, Mahadevapura, Varthur, Bellandur, Sarjapur Road</div>
                <div><h4 className="font-bold text-[#0F172A] mb-2">North Bangalore</h4>Hebbal, Yelahanka, Manyata Tech Park, Nagawara, Jakkur, Thanisandra, Hennur, Kalyan Nagar, HRBR Layout, Banaswadi, RT Nagar</div>
                <div><h4 className="font-bold text-[#0F172A] mb-2">South Bangalore</h4>Jayanagar (All Blocks), JP Nagar (All Phases), Bannerghatta Road, Electronic City (Phase 1 & 2), Bommanahalli, Begur, Hulimavu, Arekere, BTM Layout, Kudlu</div>
                <div><h4 className="font-bold text-[#0F172A] mb-2">West Bangalore</h4>Rajajinagar, Malleshwaram, Sadashivanagar, Basavanagudi, Vijayanagar, Peenya, Yeshwanthpur, Nagarbhavi, Kengeri</div>
            </div>

            <div className="h-64 rounded-xl overflow-hidden mb-8 border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0096039182056!2d77.59468!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sWeWork%20Galaxy!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FactoryJet Bangalore Office Location"
                ></iframe>
            </div>
             <p className="text-center text-slate-700 text-base flex items-center justify-center gap-2"><MapPin className="w-4 h-4 text-[#0052CC]" /> Office: WeWork Galaxy, 43 Residency Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025</p>
             <p className="text-center text-slate-700 mt-4 italic max-w-3xl mx-auto text-base">FactoryJet is headquartered in Bangalore with team members across the city. We offer: In-person meetings in Central, East, and South Bangalore, virtual consultations for all locations, same-day visits for enterprise clients, and local market understanding that remote agencies lack. Being Bengaluru-based means we understand the startup culture, tech ecosystem, business landscape, and regional preferences — translating to better results for your website.</p>
        </div>
    </section>
);

export const FinalCTA = () => (
    <section className="py-20 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto bg-slate-800/50 rounded-3xl border border-slate-700 p-8 md:p-12 shadow-2xl backdrop-blur-sm">

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                        Ready to Transform Your <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Bangalore Business Online?</span>
                    </h2>
                    <p className="text-xl text-slate-300 font-medium">Join 500+ Successful Businesses Who Chose FactoryJet — Get Started in 24 Hours</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-8">
                        <div className="prose prose-invert prose-lg">
                             <p className="text-slate-300 text-lg leading-relaxed">
                                Your competitors in Bangalore are already investing in professional websites. Every day without a conversion-optimized site is a day of lost opportunities — leads going to competitors, customers choosing businesses that look more credible, and revenue slipping away.
                            </p>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                FactoryJet has helped 500+ businesses across Koramangala, Whitefield, Electronic City, HSR Layout, Indiranagar, and all of Bengaluru transform their digital presence. From funded startups to established enterprises, from D2C brands to manufacturing companies — we deliver websites that generate real business results.
                            </p>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                            <p className="text-white font-bold mb-4">Here's what happens when you reach out:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-500/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                    <span className="text-slate-300 text-sm">Free 30-min consultation</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-500/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                    <span className="text-slate-300 text-sm">Custom proposal in 48h</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-500/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                    <span className="text-slate-300 text-sm">Launch in 7-14 days</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-500/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                    <span className="text-slate-300 text-sm">30-90 day support included</span>
                                </div>
                            </div>
                        </div>
                         <p className="text-slate-400 italic">Don't let another day pass with an outdated or non-existent website. Your Bangalore competitors aren't waiting — neither should you.</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center shadow-xl transform lg:scale-105 border border-white/20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-white/5 skew-x-12 transform -translate-x-full animate-[shimmer_3s_infinite]"></div>

                        <div className="relative z-10 space-y-6">
                             <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 inline-block w-full border border-white/10">
                                <p className="text-yellow-300 text-sm font-bold flex items-center justify-center gap-2">
                                    Limited Availability
                                </p>
                                <p className="text-white text-xs mt-1">We accept only 20 new projects per month. Currently [X] slots available.</p>
                            </div>

                            <a href="#contact-form" className="block w-full bg-[#FF6B35] hover:bg-orange-500 text-white py-4 rounded-xl font-extrabold text-2xl shadow-lg shadow-orange-900/20 transition-all transform hover:-translate-y-1">
                                Get Free Quote Today
                            </a>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a href="tel:+919699977699" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 py-3 px-6 rounded-lg text-white font-bold transition-colors border border-white/10">
                                    <span>Call Now</span>
                                </a>
                                <a href="https://wa.me/919699977699?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20web%20design%20services%20in%20Bangalore" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-600 py-3 px-6 rounded-lg text-white font-bold transition-colors shadow-lg">
                                    <span>WhatsApp</span>
                                </a>
                            </div>

                            <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-6 mt-2">
                                <div><div className="text-xl font-bold text-white">100%</div><div className="text-[10px] uppercase text-blue-200">Satisfaction</div></div>
                                <div><div className="text-xl font-bold text-white">7 Days</div><div className="text-[10px] uppercase text-blue-200">Delivery</div></div>
                                <div><div className="text-xl font-bold text-white">24/7</div><div className="text-[10px] uppercase text-blue-200">Support</div></div>
                            </div>

                            <p className="text-xs text-blue-200 mt-4 opacity-80">
                                ✓ 500+ Delivered | ✓ 4.9★ Google Rating | ✓ Starts @ ₹29,999
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
);

export const Footer = () => (
    <footer className="bg-[#0F172A] text-slate-400 py-12 border-t border-slate-800 text-sm">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div>
                    <h3 className="text-white font-bold text-lg mb-4">FactoryJet</h3>
                    <p className="mb-4">Bengaluru's most trusted website design company. We transform businesses into digital powerhouses through professional websites and e-commerce solutions.</p>
                    <div className="flex gap-4">
                        <span>Facebook</span><span>Twitter</span><span>Instagram</span><span>LinkedIn</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>Home</li><li>About Us</li><li>Services</li><li>Portfolio</li><li>Case Studies</li><li>Blog</li><li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
                    <ul className="space-y-2">
                        <li>Website Design</li><li>WordPress Development</li><li>Shopify E-Commerce</li><li>WooCommerce Stores</li><li>Custom Web Apps</li><li>UI/UX Design</li><li>Mobile Responsive Sites</li><li>Website Redesign</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-[#0052CC] shrink-0" /> WeWork Galaxy, 43 Residency Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025</li>
                        <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#0052CC]" /> +91 96999 77699</li>
                        <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp: +91 96999 77699</li>
                        <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#0052CC]" /> connect@factoryjet.com</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-xs leading-relaxed space-y-4 text-slate-500">
                <p>FactoryJet is the leading website design company in Bangalore providing professional website development, WordPress website development, Shopify store development, and e-commerce solutions for businesses across Karnataka's Silicon Valley. As the top website development company in Bangalore, best website development company in Bangalore, and premier web design agency in Bangalore, we specialize in corporate websites, e-commerce platforms, landing pages, custom web applications, mobile responsive sites, and website redesign services.</p>
                <p>Our website development in Bangalore services help businesses in Koramangala, Whitefield, Electronic City, HSR Layout, Indiranagar, Marathahalli, Jayanagar, and all Bengaluru areas establish powerful online presence. Whether you need a website designer in Bangalore, website developer in Bangalore, or complete website development agency in Bangalore services — FactoryJet delivers results.</p>
                <p>As a top-rated e-commerce design company in Bangalore and e-commerce development company in Bangalore, we build Shopify stores, WooCommerce platforms, and custom e-commerce solutions. Looking for Shopify store development company in Bangalore? FactoryJet has delivered 120+ successful online stores. Our WordPress website development Bangalore services power 200+ business websites.</p>
                <p>Service Areas: Bangalore, Bengaluru, Koramangala, Whitefield, Electronic City, HSR Layout, Indiranagar, Marathahalli, BTM Layout, Jayanagar, JP Nagar, Hebbal, Yelahanka, Malleshwaram, and all Karnataka districts. Best website design company in Bangalore — delivering results with 25+ years of expertise.</p>
                <p className="text-center pt-4">© 2026 FactoryJet Technologies. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
        </div>
    </footer>
);
