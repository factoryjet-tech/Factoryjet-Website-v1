import React from 'react';
import { Smartphone, TrendingUp, Search, Award } from 'lucide-react';

const WhyDubai: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-[32px] md:text-[44px] font-bold text-[#0F172A] mb-3 leading-tight">
                    Why Dubai Businesses Need Professional Websites in 2026
                </h2>
                <div className="h-1 w-24 bg-[#FF6B35] mx-auto rounded-full"></div>
            </div>

            {/* Stats Header (Non-overlapping) */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
                 <div className="w-full md:w-[280px] p-8 rounded-[20px] bg-gradient-to-br from-[#0052CC] to-[#3B82F6] text-center text-white shadow-[0_8px_24px_rgba(0,82,204,0.15)] transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-[56px] md:text-[72px] font-extrabold leading-none mb-2 tracking-tight">99%</div>
                    <div className="text-sm font-bold uppercase tracking-widest opacity-90">Internet<br/>Penetration</div>
                 </div>
                 <div className="w-full md:w-[280px] p-8 rounded-[20px] bg-gradient-to-br from-[#FF6B35] to-[#FB923C] text-center text-white shadow-[0_8px_24px_rgba(255,107,53,0.15)] transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-[56px] md:text-[72px] font-extrabold leading-none mb-2 tracking-tight">$50B</div>
                    <div className="text-sm font-bold uppercase tracking-widest opacity-90">Market Size</div>
                    <div className="text-xs font-medium opacity-75 mt-1">By 2027</div>
                 </div>
            </div>

            {/* Intro Paragraph */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <p className="text-[16px] md:text-[18px] text-[#334155] leading-relaxed font-normal">
                    The UAE's digital landscape is rapidly evolving, with 99% internet penetration and 95% mobile usage creating unprecedented opportunities for SMBs. The UAE's Vision 2030 emphasizes digital innovation, making professional web presence not just beneficial but essential for business survival and growth.
                </p>
            </div>

            {/* Content Blocks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Block 1 */}
                <div className="bg-white p-8 md:p-10 rounded-r-2xl border-l-[6px] border-[#0052CC] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:translate-x-2 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-full bg-[#0052CC]/15 flex items-center justify-center mb-6 text-[#0052CC] group-hover:rotate-12 transition-transform">
                        <Smartphone size={28} />
                    </div>
                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#0F172A] mb-4">The Digital-First Consumer in Dubai</h3>
                    <p className="text-[15px] md:text-[16px] text-[#334155] leading-relaxed">
                        UAE residents are among the world's most digitally connected. With <strong className="font-semibold text-[#0052CC]">10+ hours daily screen time</strong> and 8.5 active social media accounts per person, your potential customers are constantly online. 73% research products online before purchasing.
                    </p>
                </div>

                {/* Block 2 */}
                <div className="bg-white p-8 md:p-10 rounded-r-2xl border-l-[6px] border-[#FF6B35] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:translate-x-2 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-full bg-[#FF6B35]/15 flex items-center justify-center mb-6 text-[#FF6B35] group-hover:rotate-12 transition-transform">
                        <TrendingUp size={28} />
                    </div>
                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#0F172A] mb-4">E-Commerce Boom in the UAE</h3>
                    <p className="text-[15px] md:text-[16px] text-[#334155] leading-relaxed">
                        The UAE e-commerce market reached <strong className="font-semibold text-[#FF6B35]">$27 billion in 2024</strong>. Online shopping adoption increased 215% since 2020, with 82% of UAE residents making online purchases monthly. Without e-commerce capabilities, businesses miss this massive opportunity.
                    </p>
                </div>

                {/* Block 3 */}
                <div className="bg-white p-8 md:p-10 rounded-r-2xl border-l-[6px] border-[#10B981] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:translate-x-2 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-full bg-[#10B981]/15 flex items-center justify-center mb-6 text-[#10B981] group-hover:rotate-12 transition-transform">
                        <Search size={28} />
                    </div>
                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#0F172A] mb-4">Search Engine Visibility</h3>
                    <p className="text-[15px] md:text-[16px] text-[#334155] leading-relaxed">
                        90% of UAE consumers use Google to find local businesses. <strong className="font-semibold text-[#10B981]">First-page rankings receive 91% of clicks</strong>. Without SEO optimization, even the best business remains invisible to potential customers actively searching for your services.
                    </p>
                </div>

                {/* Block 4 */}
                <div className="bg-white p-8 md:p-10 rounded-r-2xl border-l-[6px] border-[#0052CC] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:translate-x-2 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-full bg-[#0052CC]/15 flex items-center justify-center mb-6 text-[#0052CC] group-hover:rotate-12 transition-transform">
                        <Award size={28} />
                    </div>
                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#0F172A] mb-4">Trust and Credibility</h3>
                    <p className="text-[15px] md:text-[16px] text-[#334155] leading-relaxed">
                        <strong className="font-semibold text-[#0052CC]">84% of UAE consumers</strong> judge business credibility based on website quality. Professional website design signals legitimacy, expertise, and commitment to customer experience. Poor web presence raises red flags.
                    </p>
                </div>

            </div>
        </div>
    </section>
  );
};

export default WhyDubai;