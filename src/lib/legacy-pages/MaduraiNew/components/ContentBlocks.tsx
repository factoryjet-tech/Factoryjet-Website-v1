import React from 'react';
import { Check, Globe, Zap, ShieldCheck } from 'lucide-react';
import { STATS, PROBLEMS, COMPARISON } from '../data.constants';

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-12 px-4">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-[#64748B] max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

export const SocialProof = () => (
  <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-sm font-bold text-[#64748B] uppercase tracking-[0.2em] mb-10">Trusted by 500+ Businesses</p>

      {/* Modern Logo Strip with Gradient Mask */}
      <div className="relative w-full max-w-5xl mx-auto mb-16 group">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
          {/* Stylized Text Logos acting as modern placeholders */}
          <div className="text-2xl font-bold text-gray-400 font-heading tracking-tight hover:text-[#4285F4] transition-colors flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-current opacity-20"></span> Google Partner
          </div>
          <div className="text-2xl font-bold text-gray-400 font-sans tracking-wide hover:text-[#95BF47] transition-colors flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-current opacity-20"></span> Shopify
          </div>
          <div className="text-2xl font-bold text-gray-400 font-serif italic hover:text-[#0052CC] transition-colors flex items-center gap-2">
            <span className="w-6 h-6 rotate-45 bg-current opacity-20"></span> WordPress VIP
          </div>
          <div className="text-2xl font-bold text-gray-400 font-mono hover:text-[#5865F2] transition-colors flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-current opacity-20"></span> Razorpay
          </div>
          <div className="text-2xl font-bold text-gray-400 tracking-tighter hover:text-[#FF6B35] transition-colors flex items-center gap-2">
            <span className="w-6 h-6 rounded-full border-2 border-current opacity-20"></span> WooCommerce
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-gray-100 pt-12">
        {STATS.map((stat, i) => (
          <div key={i} className="text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-1 group-hover:text-[#0052CC] transition-colors">{stat.value}</div>
            <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const About = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Abstract Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-[#0F172A] z-0"></div>
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 z-0 pointer-events-none">
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#0052CC] rounded-full blur-[120px]"></div>
      <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-[#FF6B35] rounded-full blur-[100px]"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Visual Side */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={120} />
            </div>
            <h3 className="text-3xl font-heading font-bold mb-6">Our DNA</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-extrabold text-[#FF6B35] mb-1">25+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Years Exp.</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-[#10B981] mb-1">500+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-blue-400 mb-1">100%</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">In-House</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-purple-400 mb-1">24/7</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Support</div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -bottom-6 -right-6 bg-white text-[#0F172A] px-6 py-4 rounded-xl shadow-xl font-bold flex items-center hidden md:flex animate-bounce-slow">
            <ShieldCheck className="text-[#10B981] mr-3" />
            Madurai's Most Trusted
          </div>
        </div>

        {/* Content Side */}
        <div className="text-white">
          <div className="inline-flex items-center bg-white/10 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 border border-white/20">
            <Globe className="w-3 h-3 mr-2" /> About FactoryJet
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            Building Digital Empires from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-pink-500">Madurai</span>
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              FactoryJet is more than just a website design company. We are Madurai's premier digital transformation agency. Founded by industry veterans with over two decades of combined experience, we bridge the gap between local business values and global digital standards.
            </p>
            <p>
              We don't just build websites; we engineer growth engines. Whether you are a textile giant in South Gate or a startup in Anna Nagar, our mission is single-minded: to make your business dominant online. We specialize in creating high-performance, mobile-first, and SEO-optimized digital experiences that convert visitors into loyal customers.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            {['Google Certified', 'AWS Partners', 'Shopify Experts'].map(tag => (
              <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors cursor-default">{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export const ProblemSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle
        title="Why Madurai Businesses Struggle Online"
        subtitle="65% of Madurai businesses lack professional websites. Here's what happens when your competitors have websites and you don't."
      />

      <div className="space-y-6">
        {PROBLEMS.map((problem, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-red-500">
                <problem.icon size={28} />
              </div>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-[#0F172A]">{problem.title}</h3>
                <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">{problem.badge}</span>
              </div>
              <p className="text-[#64748B] leading-relaxed">{problem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SolutionSection = () => (
  <section className="py-20 bg-[#0F172A] text-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">The FactoryJet Difference</h2>
        <p className="text-gray-400">See why 500+ Tamil Nadu businesses chose FactoryJet</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-4 px-6 text-gray-400 font-medium uppercase tracking-wider text-sm">Aspect</th>
              <th className="py-4 px-6 text-gray-400 font-medium uppercase tracking-wider text-sm">Without Website</th>
              <th className="py-4 px-6 text-[#FF6B35] font-bold uppercase tracking-wider text-sm">With FactoryJet</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {COMPARISON.map((row, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-medium">{row.aspect}</td>
                <td className="py-4 px-6 text-gray-400">{row.without}</td>
                <td className="py-4 px-6 text-white font-semibold flex items-center">
                  <Check className="w-4 h-4 text-[#10B981] mr-2" /> {row.with}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);
