import React from 'react';
import { Smartphone, RotateCcw, MousePointerClick, Layout } from 'lucide-react';

export default function FramerDevelopment() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 tracking-tight font-heading">
            3. Framer Website Development in NYC
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-[#0052CC] mb-6">
            The Future of Interactive Web Design
          </p>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto leading-relaxed">
            Framer brings together the best of design tools and development platforms. Perfect for NYC startups and tech companies wanting cutting-edge interactive experiences.
          </p>
        </div>

        {/* Framer Advantages - Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 mb-20 h-auto md:h-[600px]">
          {/* Large Card */}
          <div className="md:col-span-2 md:row-span-2 bg-white border border-[#E2E8F0] p-10 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all shadow-sm">
            <div>
              <h4 className="text-3xl font-bold text-[#0F172A] mb-6 font-heading">AI-Powered Design</h4>
              <p className="text-[#334155] text-lg leading-relaxed">
                Framer's AI capabilities let us prototype and iterate faster than ever. We can generate design variants, test layouts, and optimize experiences in hours instead of days.
              </p>
            </div>
            <div className="mt-8 w-full h-48 bg-gradient-to-br from-[#0052CC]/10 to-[#FF6B35]/10 rounded-xl border border-[#E2E8F0]"></div>
          </div>
          
          {/* Medium Card 1 */}
          <div className="md:col-span-1 md:row-span-2 bg-white border border-[#E2E8F0] p-8 rounded-2xl flex flex-col hover:shadow-lg transition-all shadow-sm">
            <div className="w-12 h-12 bg-[#0052CC]/10 rounded-lg flex items-center justify-center mb-6">
               <Layout className="w-6 h-6 text-[#0052CC]" />
            </div>
            <h4 className="text-xl font-bold text-[#0F172A] mb-4 font-heading">React Components</h4>
            <p className="text-[#334155] text-sm flex-1 leading-relaxed">
              Built on React, Framer sites are fast, modern, and maintainable. Easy to extend with custom functionality when your business needs evolve.
            </p>
          </div>

          {/* Medium Card 2 */}
          <div className="md:col-span-1 md:row-span-2 bg-white border border-[#E2E8F0] p-8 rounded-2xl flex flex-col hover:shadow-lg transition-all shadow-sm">
             <div className="w-12 h-12 bg-[#0052CC]/10 rounded-lg flex items-center justify-center mb-6">
               <MousePointerClick className="w-6 h-6 text-[#0052CC]" />
            </div>
            <h4 className="text-xl font-bold text-[#0F172A] mb-4 font-heading">Real-Time Collaboration</h4>
            <p className="text-[#334155] text-sm flex-1 leading-relaxed">
              Work with our team in real-time. See changes as we make them. Provide feedback instantly. No more email chains with screenshot attachments.
            </p>
          </div>
        </div>

        {/* Small Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl text-center hover:shadow-md transition-all shadow-sm">
            <div className="flex justify-center mb-4"><MousePointerClick className="w-8 h-8 text-[#FF6B35]" /></div>
            <h5 className="font-bold text-[#0F172A] mb-2">Interactive Prototyping</h5>
            <p className="text-sm text-[#64748B]">Test user flows before launch</p>
          </div>
          <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl text-center hover:shadow-md transition-all shadow-sm">
             <div className="flex justify-center mb-4"><RotateCcw className="w-8 h-8 text-[#FF6B35]" /></div>
            <h5 className="font-bold text-[#0F172A] mb-2">Version Control</h5>
            <p className="text-sm text-[#64748B]">Track every change, revert if needed</p>
          </div>
          <div className="bg-white border border-[#E2E8F0] p-6 rounded-xl text-center hover:shadow-md transition-all shadow-sm">
             <div className="flex justify-center mb-4"><Smartphone className="w-8 h-8 text-[#FF6B35]" /></div>
            <h5 className="font-bold text-[#0F172A] mb-2">Mobile Optimized</h5>
            <p className="text-sm text-[#64748B]">Perfect on every device</p>
          </div>
        </div>

        {/* Ideal For */}
        <div className="mb-32">
          <h3 className="text-3xl font-bold text-[#0F172A] mb-12 text-center font-heading">Ideal For</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border-l-4 border-[#0052CC] p-6 rounded-r-xl shadow-sm">
              <h5 className="font-bold text-[#0F172A] text-lg font-heading">Tech Startups</h5>
              <p className="text-[#334155] text-sm mt-2 leading-relaxed">Modern design aesthetic, fast iteration, growth-ready platform</p>
            </div>
            <div className="bg-white border-l-4 border-[#FF6B35] p-6 rounded-r-xl shadow-sm">
              <h5 className="font-bold text-[#0F172A] text-lg font-heading">Digital Products</h5>
              <p className="text-[#334155] text-sm mt-2 leading-relaxed">Interactive demos, product showcases, user onboarding</p>
            </div>
            <div className="bg-white border-l-4 border-[#10B981] p-6 rounded-r-xl shadow-sm">
              <h5 className="font-bold text-[#0F172A] text-lg font-heading">Creative Portfolios</h5>
              <p className="text-[#334155] text-sm mt-2 leading-relaxed">Stunning visuals, smooth animations, memorable experiences</p>
            </div>
            <div className="bg-white border-l-4 border-[#334155] p-6 rounded-r-xl shadow-sm">
              <h5 className="font-bold text-[#0F172A] text-lg font-heading">Landing Pages</h5>
              <p className="text-[#334155] text-sm mt-2 leading-relaxed">High-converting campaign pages with A/B testing capability</p>
            </div>
          </div>
        </div>

        {/* Framer Pricing */}
        <div className="bg-[#0052CC] text-white p-12 rounded-2xl relative overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative z-10">
            <div>
              <h4 className="text-3xl font-bold mb-4 font-heading">Framer Website Investment</h4>
              <div className="text-5xl font-bold text-[#FF6B35]">$6,000 - $25,000</div>
            </div>
            <div className="text-white bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-md">
              <p className="mb-4 font-semibold text-white text-lg">Pricing varies based on:</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"></div> Page count (5-50+ pages)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"></div> Interaction complexity (basic to advanced)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"></div> Custom components needed</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"></div> Integration requirements</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"></div> Support duration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}