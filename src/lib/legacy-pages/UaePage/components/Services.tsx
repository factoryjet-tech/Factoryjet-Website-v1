import React from 'react';
import { Smartphone, BarChart, ShoppingCart, Settings, Globe, Layers, Code, Check } from 'lucide-react';

const services = [
  {
    title: "WordPress Development",
    priceRange: "AED 9,999 - AED 25,000",
    description: "As a leading WordPress design agency, we build sites that power 43% of the web. Perfect for businesses needing a robust CMS. We are the wordpress website design company of choice for content-rich sites.",
    bestFor: "SMBs, content-heavy sites, blogging businesses",
    features: ["Custom themes", "Plugin integration", "SEO optimization", "Blog management", "E-commerce (WooCommerce)"],
    timeline: "2-5 weeks",
    keyBenefit: "Most cost-effective with largest developer community",
    accentColor: "#0052CC",
    Icon: Globe
  },
  {
    title: "Shopify Website Design",
    priceRange: "AED 15,000 - AED 35,000",
    description: "Our shopify web design agency services create high-converting stores. Whether you need a shopify web designer or a full shopify website development team, we deliver sales-focused results.",
    bestFor: "E-commerce brands, Retailers, Dropshipping",
    features: ["Custom Store Design", "App Integration", "Payment Gateway Setup", "Conversion Optimization"],
    timeline: "3-6 weeks",
    keyBenefit: "Sales-focused design with powerful e-commerce tools",
    accentColor: "#FF6B35",
    Icon: ShoppingCart
  },
  {
    title: "Framer & Webflow",
    priceRange: "AED 15,000 - AED 40,000",
    description: "Looking for a creative website design? We are experts in Framer and Webflow. Ideal for startups wanting unique, interactive, and award-winning visuals without the bloat.",
    bestFor: "Tech startups, interactive experiences, modern brands",
    features: ["Component-based", "AI tools", "Real-time collaboration", "React foundation"],
    timeline: "4-7 weeks",
    keyBenefit: "Cutting-edge interactivity and modern tech stack",
    accentColor: "#10B981",
    Icon: Layers
  },
  {
    title: "Custom Development",
    priceRange: "AED 50,000+",
    description: "For enterprise needs, our custom web development services utilize React, Next.js, and Python. We are the custom web development company for scalable, secure applications.",
    bestFor: "Complex applications, unique requirements, high-traffic sites",
    features: ["Complete customization", "Proprietary features", "Unlimited scalability"],
    timeline: "8-12 weeks",
    keyBenefit: "Total control and unlimited possibilities",
    accentColor: "#0052CC",
    Icon: Code
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-offwhite relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
         <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-navy mb-6">Comprehensive Web Development Services in Dubai</h2>
          <div className="h-[3px] w-[60px] bg-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">From <strong>simple website for small business</strong> to complex portals, we do it all.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl shadow-sm transition-all duration-500 overflow-hidden flex flex-col h-full animate-fade-up border border-gray-100"
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {/* Top Accent Bar */}
              <div className="h-2 w-full" style={{ backgroundColor: service.accentColor }}></div>

              {/* Tech Watermark */}
              <div className="absolute top-6 right-6 opacity-[0.03] pointer-events-none text-navy">
                 <service.Icon size={140} />
              </div>

              <div className="p-8 flex-grow flex flex-col relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-navy mb-3">{service.title}</h3>
                  <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-5">
                    {service.priceRange}
                  </p>
                  
                  {/* Best For Pill */}
                  <div className="inline-block bg-blue-50 text-primary-dark text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-blue-100">
                    Best For: {service.bestFor}
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 border border-green-100">
                           <Check size={12} className="text-green-600" strokeWidth={3} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                    <div>
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Timeline</span>
                        <span className="font-semibold text-navy">{service.timeline}</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Key Benefit</span>
                        <span className="font-semibold text-navy text-sm leading-tight">{service.keyBenefit}</span>
                    </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 opacity-80 hover:opacity-100 transition-opacity">
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-primary transition-colors hover:shadow-lg group">
            <Smartphone className="mx-auto text-primary mb-3 group-hover:scale-110 transition-transform" size={32} />
            <h4 className="font-bold text-navy mb-2">Mobile-First Design</h4>
            <p className="text-xs text-gray-500">95% UAE adoption. We provide mobile friendly design.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-primary transition-colors hover:shadow-lg group">
            <BarChart className="mx-auto text-secondary mb-3 group-hover:scale-110 transition-transform" size={32} />
            <h4 className="font-bold text-navy mb-2">SEO Optimization</h4>
            <p className="text-xs text-gray-500">Rank high with our web design and seo services.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-primary transition-colors hover:shadow-lg group">
            <ShoppingCart className="mx-auto text-primary-dark mb-3 group-hover:scale-110 transition-transform" size={32} />
            <h4 className="font-bold text-navy mb-2">E-Commerce Solutions</h4>
            <p className="text-xs text-gray-500">Shopify & WooCommerce experts.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-primary transition-colors hover:shadow-lg group">
            <Settings className="mx-auto text-accent mb-3 group-hover:scale-110 transition-transform" size={32} />
            <h4 className="font-bold text-navy mb-2">AMC Support</h4>
            <p className="text-xs text-gray-500">Reliable website design and management.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;