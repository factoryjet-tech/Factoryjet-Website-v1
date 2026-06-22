import React from 'react';
import { Palette, Zap, Shield, Smartphone, Plug, Target, BarChart, ShoppingCart, Users, Globe, Mail, RefreshCw, Building2, Briefcase, Image, FileText } from 'lucide-react';
import ServiceCard from '../ServiceCard';

export default function WordPressDevelopment() {
  const features = [
    { icon: <Palette className="w-6 h-6" />, title: 'Custom Theme Development', description: 'Pixel-perfect designs built from scratch, no templates' },
    { icon: <Zap className="w-6 h-6" />, title: 'Lightning-Fast Performance', description: 'Sub-2-second load times, 95+ PageSpeed scores' },
    { icon: <Shield className="w-6 h-6" />, title: 'Enterprise Security', description: 'Hardened security, SSL, regular updates, malware scanning' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile-First Design', description: 'Perfect experience on any device, responsive framework' },
    { icon: <Plug className="w-6 h-6" />, title: 'Plugin Integration', description: 'Connect with 50,000+ plugins, custom development available' },
    { icon: <Target className="w-6 h-6" />, title: 'SEO Optimized', description: 'Built-in SEO best practices, schema markup, fast indexing' },
    { icon: <BarChart className="w-6 h-6" />, title: 'Analytics Integration', description: 'Google Analytics 4, Tag Manager, conversion tracking' },
    { icon: <ShoppingCart className="w-6 h-6" />, title: 'WooCommerce Ready', description: 'Full e-commerce capabilities, payment gateway integration' },
    { icon: <Users className="w-6 h-6" />, title: 'Multi-User Support', description: 'Role-based permissions, team collaboration tools' },
    { icon: <Globe className="w-6 h-6" />, title: 'Multilingual Capable', description: 'WPML integration, serve global audiences' },
    { icon: <Mail className="w-6 h-6" />, title: 'Email Marketing', description: 'Mailchimp, ConvertKit, HubSpot integration' },
    { icon: <RefreshCw className="w-6 h-6" />, title: 'Easy Content Updates', description: 'Intuitive admin panel, drag-and-drop page builders' },
  ];

  const buildCards = [
    { icon: <Building2 className="w-6 h-6" />, title: 'Corporate Websites', desc: 'Professional websites for NYC law firms, accounting practices, consulting firms, and B2B service providers. Clean design, authority-building content architecture, client portal integration, and lawyer/consultant-specific SEO.' },
    { icon: <Briefcase className="w-6 h-6" />, title: 'Service Provider Websites', desc: 'Conversion-optimized sites for agencies, contractors, healthcare providers, and professional services. Appointment booking, service catalogs, client testimonials, before/after galleries, and lead capture systems.' },
    { icon: <Image className="w-6 h-6" />, title: 'Portfolio & Agency Websites', desc: 'Visual-first designs for creative agencies, photographers, designers, architects, and media companies. Custom post types for projects, filterable portfolios, case study templates, and client login areas.' },
    { icon: <FileText className="w-6 h-6" />, title: 'Content-Heavy Websites', desc: 'Publication-quality sites for media companies, blogs, educational institutions, and content marketers. Advanced editorial workflows, multi-author support, subscription systems, and content monetization.' }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 tracking-tight font-heading">
            1. WordPress Website Development in NYC
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-[#0052CC] max-w-4xl mx-auto mb-8">
            Why WordPress Powers 43% of the Internet—Including Major NYC Brands
          </p>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto leading-relaxed">
            WordPress isn't just a blogging platform. It's the world's most powerful content management system, running websites for Sony, The New Yorker, Bloomberg Professional, and thousands of NYC businesses across every industry.
          </p>
        </div>

        {/* What We Build with WordPress */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-[#0F172A] mb-12 text-center font-heading">What We Build with WordPress</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {buildCards.map((card, idx) => (
              <ServiceCard 
                key={idx}
                index={idx}
                icon={card.icon}
                title={card.title}
                description={card.desc}
              />
            ))}
          </div>
        </div>

        {/* WordPress Feature Grid */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-[#0F172A] mb-12 text-center font-heading">Enterprise WordPress Features We Build</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <ServiceCard 
                key={idx}
                index={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* WordPress Pricing */}
        <div>
          <h4 className="text-3xl font-bold text-[#0F172A] mb-12 text-center font-heading">WordPress Development Investment</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col shadow-sm">
              <h5 className="text-xl font-bold text-[#0F172A] mb-2 font-heading">Basic WordPress</h5>
              <div className="text-3xl font-bold text-[#0052CC] mb-6">$3,500 - $7,500</div>
              <ul className="space-y-4 mb-8 flex-1 text-[#334155]">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> 5-10 pages</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Mobile-responsive design</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Contact forms</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Basic SEO</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> 30 days support</li>
              </ul>
              <div className="pt-6 border-t border-[#E2E8F0] text-sm font-medium text-[#64748B]">
                Perfect for: Startups, small businesses
              </div>
            </div>

            {/* Professional */}
            <div className="bg-white border-2 border-[#0052CC] rounded-xl p-8 relative flex flex-col transform md:-translate-y-4 shadow-xl">
              <div className="absolute top-0 right-0 bg-[#0052CC] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-lg">RECOMMENDED</div>
              <h5 className="text-xl font-bold text-[#0F172A] mb-2 font-heading">Professional WordPress</h5>
              <div className="text-3xl font-bold text-[#0052CC] mb-6">$7,500 - $15,000</div>
              <ul className="space-y-4 mb-8 flex-1 text-[#334155]">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> 10-25 pages</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Custom design</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Blog integration</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Advanced SEO</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Email marketing</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> 60 days support</li>
              </ul>
              <div className="pt-6 border-t border-[#E2E8F0] text-sm font-medium text-[#64748B]">
                Perfect for: Growing businesses, agencies
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col shadow-sm">
              <h5 className="text-xl font-bold text-[#0F172A] mb-2 font-heading">Enterprise WordPress</h5>
              <div className="text-3xl font-bold text-[#0052CC] mb-6">$15,000 - $35,000+</div>
              <ul className="space-y-4 mb-8 flex-1 text-[#334155]">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Unlimited pages</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Complex functionality</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> E-commerce capability</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Multiple integrations</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Custom development</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> 90 days support</li>
              </ul>
              <div className="pt-6 border-t border-[#E2E8F0] text-sm font-medium text-[#64748B]">
                Perfect for: Established businesses, large sites
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}