import React from 'react';
import { Palette, Zap, Rocket, Wrench, CheckCircle2, Star, Cpu, UserCheck } from 'lucide-react';
import ServiceCard from '../ServiceCard';

export default function WebflowDevelopment() {
  const benefits = [
    { icon: <Palette className="w-6 h-6" />, title: 'Pixel-Perfect Design Control', desc: 'No templates. No compromises. Every pixel exactly where you want it. Webflow\'s visual development platform lets us create designs that would be impossible or prohibitively expensive with traditional WordPress development.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Blazing Fast Performance', desc: 'Webflow sites load incredibly fast right out of the box. Built-in CDN, optimized hosting, and clean code mean your visitors get instant page loads—critical for impatient NYC audiences.' },
    { icon: <Rocket className="w-6 h-6" />, title: 'Animations & Interactions', desc: 'Create engaging, memorable experiences with smooth animations, scroll effects, and micro-interactions. The kind of polish that separates premium NYC brands from the competition.' },
    { icon: <Wrench className="w-6 h-6" />, title: 'Easy Client Management', desc: 'You get a user-friendly CMS that non-technical team members can actually use. Update content, publish blog posts, manage products—all without touching code.' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 tracking-tight font-heading">
            2. Webflow Website Development in NYC
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-[#0052CC] mb-6">
            Design Freedom Meets Professional Development
          </p>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto leading-relaxed">
            Webflow is the designer's choice—offering pixel-perfect control without sacrificing functionality. Perfect for NYC businesses wanting stunning visual experiences with enterprise-grade performance.
          </p>
        </div>

        {/* Why Choose Webflow */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-[#0F172A] mb-12 text-center font-heading">Why NYC Brands Choose Webflow</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((card, idx) => (
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

        {/* What We Build with Webflow */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              index={0}
              icon={<Star className="w-6 h-6" />}
              title="Brand Websites"
              description="For design-forward companies: architecture firms, creative agencies, fashion brands, luxury services. Stunning visual experiences, interactive portfolios, case study showcases, and brand storytelling."
            />
            <ServiceCard 
              index={1}
              icon={<Cpu className="w-6 h-6" />}
              title="SaaS & Tech Websites"
              description="For tech startups, software companies, digital products. Product demonstrations, feature showcases, pricing pages, and integration directories."
            />
            <ServiceCard 
              index={2}
              icon={<UserCheck className="w-6 h-6" />}
              title="Professional Services"
              description="For consulting, legal, finance, real estate. Authority building, team directories, client testimonials, and resource libraries."
            />
          </div>
        </div>

        {/* Webflow Features */}
        <div className="mb-32 bg-[#F8FAFC] border border-[#E2E8F0] p-10 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
            {[
              'Custom CMS architecture', 'E-commerce capable',
              'Advanced animations', 'Membership sites',
              'Responsive breakpoints', 'Third-party integrations',
              'SEO optimization', 'Fast hosting included',
              'Form integrations', 'SSL certificate',
              'Blog functionality', '99.9% uptime'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
                <span className="text-[#334155] font-medium text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Webflow Pricing */}
        <div>
          <h4 className="text-3xl font-bold text-[#0F172A] mb-12 text-center font-heading">Webflow Development Investment</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Starter */}
             <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm">
              <h5 className="text-xl font-bold text-[#0F172A] mb-2 font-heading">Webflow Starter</h5>
              <div className="text-3xl font-bold text-[#0052CC] mb-6">$5,000 - $10,000</div>
              <ul className="space-y-4 mb-6 text-[#334155]">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Up to 10 pages</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Custom design</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Basic CMS</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Mobile responsive</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> 30 days support</li>
              </ul>
            </div>
             {/* Professional */}
             <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-[#0052CC] shadow-md">
              <h5 className="text-xl font-bold text-[#0F172A] mb-2 font-heading">Webflow Professional</h5>
              <div className="text-3xl font-bold text-[#0052CC] mb-6">$10,000 - $20,000</div>
              <ul className="space-y-4 mb-6 text-[#334155]">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> 15-30 pages</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Advanced interactions</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Full CMS integration</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Blog system</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> 60 days support</li>
              </ul>
            </div>
             {/* Premium */}
             <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm">
              <h5 className="text-xl font-bold text-[#0F172A] mb-2 font-heading">Webflow Premium</h5>
              <div className="text-3xl font-bold text-[#0052CC] mb-6">$20,000 - $40,000+</div>
              <ul className="space-y-4 mb-6 text-[#334155]">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Unlimited pages</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Complex animations</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> E-commerce</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> Custom functionality</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-[#0052CC] rounded-full"></div> 90 days support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}