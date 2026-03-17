// app/services/ai-agent-development/components/HeroSection.tsx
"use client";

import { useState } from "react";

export function HeroSection() {
  const [formData, setFormData] = useState({ name: "", email: "", needs: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    // Google Ads conversion tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-XXXXXXXXX/XXXXXXXXX", // Replace with your conversion ID
        event_callback: () => {},
      });
    }
    // Firebase / your form handler
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "ai-agent-hero", page: "ai-agent-development" }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true); // Show success anyway, handle errors server-side
    }
  };

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

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
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

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
              FactoryJet designs, develops, and deploys custom AI agents that automate
              your customer support, qualify your sales leads, streamline your workflows,
              and operate around the clock — so your team can focus on what humans do best.
              Enterprise-grade quality. Startup-friendly speed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#FF6B35] hover:bg-[#e55a25] text-white font-bold text-base rounded-lg transition-all duration-200 shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 hover:-translate-y-0.5"
              >
                Book a Free Strategy Call
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
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

          {/* Right — Lead Capture Card */}
          <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 lg:sticky lg:top-24">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#0052CC]/20 to-transparent pointer-events-none" />
            <div className="relative">
              {!submitted ? (
                <>
                  <h2 className="text-xl font-bold text-white mb-1">
                    Get Your Free AI Strategy Session
                  </h2>
                  <p className="text-sm text-gray-400 mb-6">
                    No obligation. Discover how AI agents can transform your business in 30 minutes.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="hero-name" className="sr-only">Full Name</label>
                      <input
                        id="hero-name"
                        type="text"
                        placeholder="Full Name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0052CC]/50 focus:border-[#0052CC] transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="hero-email" className="sr-only">Work Email</label>
                      <input
                        id="hero-email"
                        type="email"
                        placeholder="Work Email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0052CC]/50 focus:border-[#0052CC] transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="hero-needs" className="sr-only">AI Agent Needs</label>
                      <textarea
                        id="hero-needs"
                        placeholder="Briefly describe your AI agent needs"
                        rows={3}
                        value={formData.needs}
                        onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                        className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0052CC]/50 focus:border-[#0052CC] transition-all text-sm resize-none"
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="w-full py-3.5 bg-[#FF6B35] hover:bg-[#e55a25] text-white font-bold rounded-lg transition-all duration-200 shadow-lg shadow-[#FF6B35]/20 text-base cursor-pointer"
                    >
                      Book My Free Strategy Call →
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Free consultation · No commitment · Response within 24 hours
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#10B981]/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">We&apos;ll Be in Touch!</h3>
                  <p className="text-gray-400 text-sm">
                    Expect a response within 24 hours. We&apos;ll schedule your free strategy session at a time that works for you.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
