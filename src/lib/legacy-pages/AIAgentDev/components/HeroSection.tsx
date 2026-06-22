// app/services/ai-agent-development/components/HeroSection.tsx
"use client";

import { useContactModal } from "@/context/ContactModalContext";
import AuthorByline from "@/components/AuthorByline";

export function HeroSection() {
  const { openModal } = useContactModal();
  const handleCTA = () => openModal("in", "ai");

  return (
    <section className="relative bg-[#0a0f1c] overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Gradient orb - top right */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0052CC] opacity-[0.08] blur-[120px]" />
      {/* Gradient orb - bottom left */}
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#FF6B35] opacity-[0.05] blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <a href="/" className="hover:text-white transition-colors">Home</a>
            </li>
            <li><span className="text-gray-600">/</span></li>
            <li>
              <a href="/services" className="hover:text-white transition-colors">Services</a>
            </li>
            <li><span className="text-gray-600">/</span></li>
            <li className="text-[#0052CC] font-medium">AI Agent Development</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">
          {/* Left — Copy */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0052CC]/30 bg-[#0052CC]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-sm font-semibold text-[#0052CC] tracking-wide uppercase">
                AI Agent Development Services
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-white mb-6">
              We Build AI Agents That Actually Work
              <span className="block text-[#FF6B35] mt-1">
                — Deployed in Weeks, Not Quarters
              </span>
            </h1>
            <AuthorByline variant="dark" />

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
              FactoryJet designs, develops, and deploys custom AI agents that automate
              your customer support, qualify your sales leads, streamline your workflows,
              and operate around the clock — so your team can focus on what humans do best.
              Enterprise-grade quality. Startup-friendly speed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={handleCTA}
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#FF6B35] hover:bg-[#e55a25] text-white font-bold text-base rounded-lg transition-all duration-200 shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 hover:-translate-y-0.5 cursor-pointer"
              >
                Book a Free Strategy Call
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-7 py-4 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold text-base rounded-lg transition-all duration-200"
              >
                See Our AI Agents in Action
              </a>
            </div>

            {/* Social Proof Micro-Bar */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Trusted across 4 countries
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                SOC 2 &amp; GDPR Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Built on LangChain, OpenAI, Claude &amp; Gemini
              </span>
            </div>
          </div>

          {/* Right — CTA Card */}
          <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 lg:sticky lg:top-24">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#0052CC]/20 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-xl font-bold text-white mb-1">
                Get Your Free AI Strategy Session
              </h2>
              <p className="text-sm text-gray-400 mb-6">
                No obligation. Discover how AI agents can transform your business in 30 minutes.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  "AI readiness assessment for your business",
                  "Top 3 highest-impact automation opportunities",
                  "Preliminary ROI projections",
                  "Technology recommendation for your stack",
                  "Clear next steps — no obligation",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={handleCTA}
                className="w-full py-3.5 bg-[#FF6B35] hover:bg-[#e55a25] text-white font-bold rounded-lg transition-all duration-200 shadow-lg shadow-[#FF6B35]/20 text-base cursor-pointer"
              >
                Book My Free Strategy Call →
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Free consultation · No commitment · Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
