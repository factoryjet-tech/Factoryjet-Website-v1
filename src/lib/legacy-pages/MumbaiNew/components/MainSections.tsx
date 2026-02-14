import React from 'react';
import {
  Users, Star, Clock, Globe, TrendingUp, ShieldCheck,
  AlertTriangle, TrendingDown, Smartphone, AlertCircle, Filter, Check, MapPin
} from 'lucide-react';

/* --- SECTION 2: SOCIAL PROOF --- */
export const SocialProof: React.FC = () => {
  return (
    <section className="bg-bgLight py-12 border-b border-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale mb-12">
           <span className="font-bold text-xl">Google Partner</span>
           <span className="font-bold text-xl">IndiaMART</span>
           <span className="font-bold text-xl">TradeIndia</span>
           <span className="font-bold text-xl">ExportersIndia</span>
           <span className="font-bold text-xl">Razorpay</span>
           <span className="font-bold text-xl">Shiprocket</span>
           <span className="font-bold text-xl">Alibaba Verified</span>
           <span className="font-bold text-xl">Shopify Partners</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-xs font-bold text-slate uppercase tracking-wider">Industrial Websites Delivered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">₹150 Cr+</div>
            <div className="text-xs font-bold text-slate uppercase tracking-wider">Export Orders Generated</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-xs font-bold text-slate uppercase tracking-wider">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">7 Days</div>
            <div className="text-xs font-bold text-slate uppercase tracking-wider">Avg Delivery Time</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
            <div className="text-xs font-bold text-slate uppercase tracking-wider">Google Rating</div>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-light text-center max-w-3xl mx-auto">
          <p className="italic text-slate">"FactoryJet built our industrial catalog website in just 5 days. We started receiving export inquiries from UAE and Europe within the first month." — Chemical Manufacturer, MIDC Industrial Area</p>
        </div>
      </div>
    </section>
  );
};

/* --- SECTION 3: ENTITY/ABOUT BLOCK --- */
export const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">About FactoryJet — Website Design Company in Mumbai for Industrial Businesses</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-navy">Company Information</h3>
            <ul className="space-y-2 text-slate text-sm">
              <li><strong className="text-navy">Name:</strong> FactoryJet Technologies</li>
              <li><strong className="text-navy">Type:</strong> Industrial Digital Transformation Agency</li>
              <li><strong className="text-navy">Specialization:</strong> Manufacturer Website Design</li>
              <li><strong className="text-navy">HQ:</strong> Mumbai, Maharashtra</li>
              <li><strong className="text-navy">Experience:</strong> 25+ Years Combined</li>
              <li><strong className="text-navy">Rating:</strong> 4.9/5.0 (Google & Facebook)</li>
              <li><strong className="text-navy">Clients Served:</strong> 500+ Industrial Businesses</li>
              <li><strong className="text-navy">Focus:</strong> Manufacturing, Export, B2B</li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-navy">Core Capabilities</h3>
            <ul className="space-y-2 text-slate text-sm">
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Industrial Website Design & Development</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Manufacturer Catalog Websites</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> B2B E-Commerce Portals</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Export Lead Generation Websites</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Wholesale/Distributor Portals</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Mobile Responsive Industrial Sites</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> IndiaMART & TradeIndia Integration</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> Product Catalog Management</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> International SEO for Exporters</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-accent" /> WhatsApp Business Integration</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-navy">Service Coverage</h3>
            <p className="text-slate text-sm leading-relaxed">
              We proudly serve industrial businesses across Greater Mumbai Region including key manufacturing zones, industrial estates, and commercial areas throughout Mumbai and surrounding districts.
            </p>
          </div>
        </div>

        {/* Industry Tags */}
        <div className="mt-12 flex flex-wrap gap-2">
          {["Manufacturing & Engineering", "Export & Import", "Chemicals & Pharmaceuticals", "Textiles & Garments", "Food Processing & FMCG", "Automotive Components", "Plastics & Packaging", "Diamond & Jewelry", "Metals & Fabrication", "Industrial Machinery", "Logistics & Warehousing", "Wholesale & Distribution"].map(tag => (
            <span key={tag} className="bg-light/50 text-slate px-3 py-1 rounded-full text-xs hover:bg-primary hover:text-white transition-colors cursor-pointer">{tag}</span>
          ))}
        </div>

        {/* Narrative Text */}
        <div className="mt-12 bg-bgLight p-8 rounded-2xl border border-light">
          <h3 className="text-2xl font-bold text-navy mb-4">Why Mumbai Manufacturers Choose FactoryJet</h3>
          <p className="text-slate mb-6">
            Mumbai is India's largest industrial hub with the country's busiest port handling 60% of container trade. The city's manufacturing zones house 50,000+ units and 15,000+ registered exporters.
          </p>
          <p className="text-slate mb-6">
            Yet 70% of these industrial businesses operate without professional websites. They rely solely on marketplaces like IndiaMART and WhatsApp — missing direct international buyer inquiries, higher-margin export orders, and brand credibility.
          </p>
          <p className="text-slate mb-4">
            FactoryJet specializes in industrial web design for India's leading manufacturing and export-driven businesses. We understand B2B buyer psychology, industrial product catalogs, export inquiry generation, and factory-specific positioning.
          </p>
          <ul className="list-disc list-inside text-slate space-y-2 ml-4">
            <li>Get found by international importers searching for Indian manufacturers</li>
            <li>Generate direct export inquiries (skip marketplace commissions)</li>
            <li>Showcase your factory, machinery, certifications, and capabilities</li>
            <li>Build credibility with procurement managers and corporate buyers</li>
            <li>Convert website visitors into qualified RFQs and bulk orders</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

/* --- SECTION 4: PROBLEMS SECTION --- */
export const ProblemsSection: React.FC = () => {
  return (
    <section className="bg-bgBlueTint py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">Is Your Mumbai Factory Losing Export Orders Every Day?</h2>
        <p className="text-lg text-slate text-center mb-12 max-w-3xl mx-auto">
          Without a professional website, manufacturers lose millions in potential orders. In India's industrial capital, having no online presence means invisible revenue loss.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-red-100 hover:-translate-y-1 transition-transform">
            <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
            <div className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 inline-block rounded mb-2">COST: ₹50K/DAY LOST</div>
            <h3 className="text-lg font-bold text-navy mb-3">Invisible to International Buyers</h3>
            <p className="text-sm text-slate">
              85% of international importers search Google for "manufacturers in India" before placing orders. If you're not appearing in search results, you don't exist to them. Your competitors with professional industrial websites are capturing bulk orders from UAE, USA, Europe, and Africa that should be yours. Every day without a website, you're losing ₹50,000+ in potential export orders to manufacturers who invested in their digital presence.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-red-100 hover:-translate-y-1 transition-transform">
            <TrendingDown className="w-12 h-12 text-red-500 mb-4" />
            <div className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 inline-block rounded mb-2">COST: 70% ORDERS LOST</div>
            <h3 className="text-lg font-bold text-navy mb-3">Paying 15% Commission</h3>
            <p className="text-sm text-slate">
              IndiaMART charges 15-20% commission on every lead. TradeIndia and Alibaba take similar cuts. If you're doing ₹1 Cr annual business through marketplaces, you're paying ₹15-20 Lakh in commissions. A professional manufacturer website with SEO generates direct inquiries — zero commission, higher margins, and you own the customer relationship. Stop paying rent; own your digital real estate.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-red-100 hover:-translate-y-1 transition-transform">
            <Smartphone className="w-12 h-12 text-red-500 mb-4" />
            <div className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 inline-block rounded mb-2">COST: 78% BUYERS LOST</div>
            <h3 className="text-lg font-bold text-navy mb-3">No Mobile Responsive Site</h3>
            <p className="text-sm text-slate">
              78% of B2B buyers now research suppliers on mobile devices. Procurement managers, importers, and business owners browse on phones during travel, meetings, and trade shows. If your website isn't mobile responsive (or doesn't exist), you're invisible to 78% of potential buyers. Google also penalizes non-mobile-friendly sites, pushing you down in search results.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-red-100 hover:-translate-y-1 transition-transform">
            <Clock className="w-12 h-12 text-red-500 mb-4" />
            <div className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 inline-block rounded mb-2">COST: ZERO CREDIBILITY</div>
            <h3 className="text-lg font-bold text-navy mb-3">No Online Trust Signals</h3>
            <p className="text-sm text-slate">
              International buyers need trust before placing ₹50 Lakh orders. They look for: professional website, factory photos, machinery details, quality certifications (ISO, CE, FDA), client testimonials, and export history. A WhatsApp-only business or basic marketplace listing screams "small-time operation." Professional websites with trust signals close deals 3x faster with 40% higher order values.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-red-100 hover:-translate-y-1 transition-transform">
            <Filter className="w-12 h-12 text-red-500 mb-4" />
            <div className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 inline-block rounded mb-2">COST: ZERO DIRECT INQUIRIES</div>
            <h3 className="text-lg font-bold text-navy mb-3">100% Dependent on Marketplaces</h3>
            <p className="text-sm text-slate">
              Marketplace platforms control your leads. They decide pricing, visibility, and customer access. When you don't renew subscription, leads stop. With your own manufacturer website, you own the traffic, the leads, and the customer relationships forever. SEO traffic compounds over time — more content, more backlinks, more organic inquiries. Break free from marketplace dependency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- SECTION 5: SOLUTION SECTION --- */
export const SolutionSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">How FactoryJet Solves Manufacturers' Website Problems</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Comparison Table */}
          <div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-bgLight border-b border-light">
                    <th className="p-4 font-semibold text-navy">Feature</th>
                    <th className="p-4 font-bold text-primary">FactoryJet</th>
                    <th className="p-4 font-semibold text-slate">Typical Agency</th>
                    <th className="p-4 font-semibold text-slate">Freelancers</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["Delivery Time", "7 days", "8-14 weeks", "Unpredictable"],
                    ["Starting Price", "Value-Driven Packages", "High & Hidden Fees", "Low but risky"],
                    ["Industrial Expertise", "✓ 500+ factories", "Generic", "Generic"],
                    ["Export SEO", "✓ Included", "Extra cost", "Not available"],
                    ["Mobile Responsive", "✓ 100%", "Sometimes", "Sometimes"],
                    ["Post-Launch Support", "₹2,999/mo AMC", "Expensive Retainers", "None"],
                    ["B2B Lead Gen", "✓ Optimized", "Basic", "Basic"],
                    ["Catalog Management", "✓ Included", "Extra cost", "Limited"]
                  ].map(([feature, fj, agency, free], i) => (
                    <tr key={i} className="border-b border-light">
                      <td className="p-4 text-navy font-medium">{feature}</td>
                      <td className="p-4 text-primary font-bold">{fj}</td>
                      <td className="p-4 text-slate">{agency}</td>
                      <td className="p-4 text-slate">{free}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Differentiators */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">1. Industrial Sector Expertise</h3>
              <p className="text-slate text-sm">We've built 500+ websites for industrial businesses — manufacturers, exporters, fabricators, chemical companies, and wholesale distributors. We understand industrial product catalogs, B2B buyer behavior, export compliance, and manufacturing terminology. Generic agencies don't.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">2. Export-Focused SEO</h3>
              <p className="text-slate text-sm">We optimize for international buyers searching "textile manufacturer India," "chemical supplier Mumbai," or "auto parts exporter Maharashtra." Our international SEO strategy gets you found by importers in UAE, USA, UK, Germany, and Africa. We've generated ₹150 Cr+ in export orders for clients through organic search.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">3. Mobile Responsive Sites Standard</h3>
              <p className="text-slate text-sm">Every FactoryJet website is mobile responsive by default — no extra charge. Your industrial catalog, product pages, and inquiry forms work perfectly on phones and tablets. Critical for procurement managers browsing during trade shows, factory visits, and international travel.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">4. Fast Delivery — 7 Days</h3>
              <p className="text-slate text-sm">Traditional agencies take 3-6 months for industrial websites. We deliver in 7 days. Our AI-powered design process, industrial templates, and experienced team enable rapid delivery without sacrificing quality. Your competitors are getting leads while you wait.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">5. ROI-Focused Pricing</h3>
              <p className="text-slate text-sm">We offer transparent, flexible packages designed for measurable ROI. Whether you are a startup or enterprise, we have a plan that fits your budget and growth goals. No hidden fees, just predictable value.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">6. Catalog & Product Management</h3>
              <p className="text-slate text-sm">Industrial businesses have 100s or 1000s of products. We build easy-to-manage product catalogs with categories, specifications, images, datasheets, and inquiry buttons. Update products yourself without technical knowledge.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">7. Ongoing Partnership</h3>
              <p className="text-slate text-sm">Our Annual Maintenance Contracts (AMC) at ₹2,999/month keep your website updated, secure, and optimized. We add new products, update content, monitor performance, and provide technical support. Long-term partnership, not one-time project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- SECTION 7: PROCESS --- */
export const ProcessSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-navy text-center mb-2">Our 7-Day Industrial Website Delivery Process</h2>
        <p className="text-center text-slate mb-12">From first call to live website in one week. Industrial expertise, no delays.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              days: "Day 1-2",
              title: "Discovery & Industrial Requirements",
              items: ["Initial consultation and factory understanding", "Product catalog review and structure planning", "Export market and target buyer analysis", "Competitor research in your industrial niche", "Content strategy and sitemap finalization", "Deliverable: Detailed project brief and wireframes"]
            },
            {
              days: "Day 3-4",
              title: "Design & Industrial Content",
              items: ["UI/UX design for B2B buyers", "Product catalog layout design", "Factory and machinery showcase design", "Trust signal placement (certifications, clients)", "Content writing for industrial audience", "Deliverable: Approved design mockups"]
            },
            {
              days: "Day 5-6",
              title: "Development",
              items: ["Frontend development (React/Next.js/WordPress)", "Product catalog backend setup", "Inquiry form and WhatsApp integration", "Payment gateway (if B2B e-commerce)", "Third-party integrations", "Deliverable: Functional staging website"]
            },
            {
              days: "Day 7",
              title: "Testing & Launch",
              items: ["Cross-browser compatibility testing", "Mobile responsiveness verification", "Form testing (inquiries, RFQs)", "Performance and speed optimization", "Security testing and SSL setup", "DNS configuration and go-live", "Deliverable: Live industrial website!"]
            }
          ].map((step, i) => (
             <div key={i} className="border border-light rounded-xl p-6 relative">
               <div className="absolute -top-4 left-6 bg-primary text-white font-bold px-4 py-1 rounded-full text-sm">{step.days}</div>
               <h3 className="mt-4 text-xl font-bold text-navy mb-4">{step.title}</h3>
               <ul className="text-sm text-slate space-y-2 list-disc list-inside">
                 {step.items.map((item, idx) => <li key={idx}>{item}</li>)}
               </ul>
             </div>
          ))}
        </div>
        <p className="mt-8 text-center text-slate text-sm">Included: 30-90 days priority support, product additions, bug fixes, and admin training. Annual Maintenance Contracts available from ₹2,999/month for ongoing updates, SEO, and optimization.</p>
      </div>
    </section>
  );
};

/* --- SECTION 8: TECHNOLOGIES --- */
export const TechnologiesSection: React.FC = () => {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Platforms & Technologies for Industrial Websites</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Website Platforms */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">Website Platforms</h3>
            <div className="bg-white/5 rounded-lg overflow-hidden">
               <table className="w-full text-left text-sm">
                 <thead className="bg-white/10">
                   <tr><th className="p-3">Platform</th><th className="p-3">Best For</th></tr>
                 </thead>
                 <tbody className="divide-y divide-white/10">
                   <tr><td className="p-3">WordPress</td><td className="p-3">Manufacturer catalogs, corporate</td></tr>
                   <tr><td className="p-3">WooCommerce</td><td className="p-3">B2B e-commerce, wholesale</td></tr>
                   <tr><td className="p-3">React/Next.js</td><td className="p-3">High-performance, large catalogs</td></tr>
                   <tr><td className="p-3">Custom Build</td><td className="p-3">Enterprise B2B portals</td></tr>
                 </tbody>
               </table>
            </div>
          </div>

          {/* E-commerce Platforms */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">B2B E-Commerce Platforms</h3>
            <div className="bg-white/5 rounded-lg overflow-hidden">
               <table className="w-full text-left text-sm">
                 <thead className="bg-white/10">
                   <tr><th className="p-3">Platform</th><th className="p-3">Best For</th></tr>
                 </thead>
                 <tbody className="divide-y divide-white/10">
                   <tr><td className="p-3">WooCommerce B2B</td><td className="p-3">Flexible, cost-effective</td></tr>
                   <tr><td className="p-3">Shopify B2B</td><td className="p-3">Quick launch, hosted</td></tr>
                   <tr><td className="p-3">Magento</td><td className="p-3">Enterprise, large catalogs</td></tr>
                   <tr><td className="p-3">Custom Portal</td><td className="p-3">Complex pricing/workflows</td></tr>
                 </tbody>
               </table>
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="text-center">
             <h4 className="text-sm font-bold uppercase tracking-widest text-white/70 mb-4">Payment Gateways</h4>
             <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
               <span>Razorpay</span><span>PayU</span><span>CCAvenue</span><span>HDFC Payment Gateway</span><span>ICICI Eazypay</span><span>LC/Trade Finance Integration</span>
             </div>
           </div>
           <div className="text-center">
             <h4 className="text-sm font-bold uppercase tracking-widest text-white/70 mb-4">Shipping & Logistics Partners</h4>
             <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
               <span>Shiprocket</span><span>Delhivery</span><span>BlueDart</span><span>DTDC</span><span>Maersk</span><span>DHL</span><span>FedEx</span><span>SafeXpress</span>
             </div>
           </div>
           <div className="bg-white/5 p-6 rounded-lg text-sm text-center">
             <p><strong className="text-accent">Technology Stack:</strong> Frontend: React, Next.js, Vue.js, HTML5, CSS3, Tailwind CSS | Backend: Node.js, Python, PHP, Java | CMS: WordPress, Webflow, Sanity, Strapi | Database: MySQL, PostgreSQL, MongoDB | Cloud: AWS, Google Cloud, Azure, Vercel, Cloudflare | Integrations: Tally, SAP, ERPNext, Zoho, HubSpot</p>
           </div>
        </div>
      </div>
    </section>
  );
};

/* --- SECTION 14: LOCAL SEO --- */
export const LocalSEOSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
       <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">Visit FactoryJet Mumbai</h2>
            <div className="bg-bgLight p-6 rounded-xl border border-light space-y-4">
               <h3 className="text-xl font-bold text-navy">FactoryJet Technologies</h3>
               <p className="text-slate text-sm flex gap-2"><MapPin className="w-4 h-4 text-primary" /> Building #20, 10, Ajit Glass Garden Rd, opp. Amrutnagar, Somani Gram, Goregaon West, Mumbai, Maharashtra 400063</p>
               <p className="text-slate text-sm"><strong>Phone:</strong> +91 96999 77699</p>
               <p className="text-slate text-sm"><strong>WhatsApp:</strong> +91 96999 77699</p>
               <p className="text-slate text-sm"><strong>Email:</strong> connect@factoryjet.com</p>
               <p className="text-slate text-sm"><strong>Website:</strong> www.factoryjet.com</p>
               <hr className="border-light"/>
               <h4 className="font-bold text-navy text-sm">Business Hours</h4>
               <p className="text-slate text-sm">Monday – Friday: 9:00 AM – 7:00 PM IST</p>
               <p className="text-slate text-sm">Saturday: 10:00 AM – 4:00 PM IST</p>
               <p className="text-slate text-sm">Sunday: Closed (Email/WhatsApp support available)</p>
            </div>
            <div className="mt-6 text-sm text-slate">
              <h4 className="font-bold text-navy mb-2">Nearby Landmarks</h4>
              <p className="mb-4">BKC, Bandra East, Near Diamond District, 10 mins from Bandra Kurla Complex Metro Station</p>
              <h4 className="font-bold text-navy mb-2">Service Areas</h4>
              <p>We serve industrial businesses across the Greater Mumbai Region and surrounding areas.</p>
            </div>
          </div>
          <div className="h-full min-h-[400px] rounded-xl overflow-hidden">
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0089037095047!2d72.84677!3d19.16460!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c7f5f9f1f7%3A0x9b9b9b9b9b9b9b9b!2sBuilding%20%2320%2C%20Ajit%20Glass%20Garden%20Rd%2C%20Goregaon%20West%2C%20Mumbai%2C%20Maharashtra%20400063!5e0!3m2!1sen!2sin!4v1234567890"
               width="100%"
               height="100%"
               style={{ border: 0, minHeight: '400px' }}
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               title="FactoryJet Mumbai Office Location"
             ></iframe>
          </div>
       </div>
    </section>
  );
};

interface FinalCTAProps {
  onOpenModal?: () => void;
}

/* --- SECTION 15: FINAL CTA --- */
export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="bg-gradient-to-r from-navy to-blue-900 py-24 text-white text-center">
       <div className="max-w-4xl mx-auto px-4">
         <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Export Leads & Grow Wholesale Orders?</h2>
         <p className="text-xl text-white/90 mb-12">Stop losing orders to competitors with better websites. Get a professional industrial website that works 24/7 to generate inquiries.</p>

         <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <button onClick={onOpenModal} className="bg-secondary hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-xl shadow-lg transition-transform hover:scale-105">Get Free Quote Today</button>
            <div className="flex flex-col text-left justify-center text-sm font-medium">
               <span>📞 Call: +91 96999 77699</span>
               <span>💬 WhatsApp: +91 96999 77699</span>
            </div>
         </div>

         <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 text-center border-t border-white/20 pt-8">
            <div>
               <div className="text-3xl font-bold text-accent">100%</div>
               <div className="text-xs uppercase tracking-wider">Satisfaction Guarantee</div>
            </div>
            <div>
               <div className="text-3xl font-bold text-accent">7 Days</div>
               <div className="text-xs uppercase tracking-wider">Average Delivery</div>
            </div>
            <div>
               <div className="text-3xl font-bold text-accent">24/7</div>
               <div className="text-xs uppercase tracking-wider">Mumbai Support</div>
            </div>
         </div>

         <div className="bg-white/10 p-4 rounded-lg inline-block text-sm">
            ⚠️ Limited Availability: We accept only 10 new industrial projects per month to ensure quality. Currently 5 slots available for January.
         </div>

         <div className="mt-8 text-xs text-white/60">
            ✓ 500+ Industrial Websites Delivered | ✓ 4.9★ Google Rating | ✓ 7-Day Delivery | ✓ Transparent Pricing
         </div>
       </div>
    </section>
  );
};
