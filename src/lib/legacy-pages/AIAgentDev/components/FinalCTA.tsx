// app/services/ai-agent-development/components/FinalCTA.tsx
"use client";

import { useContactModal } from "@/context/ContactModalContext";

export function FinalCTA() {
  const { openModal } = useContactModal();
  const handleCTA = () => openModal("in");

  return (
    <section id="consultation" className="relative bg-[#0a0f1c] py-16 md:py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute -top-60 -right-60 w-[600px] h-[600px] rounded-full bg-[#0052CC] opacity-[0.06] blur-[140px]" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#FF6B35] opacity-[0.04] blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-start">
          {/* Left — Persuasion Copy */}
          <div>
            <span className="text-sm font-bold text-[#FF6B35] uppercase tracking-wider">
              Let&apos;s Talk
            </span>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-white leading-tight mt-3 mb-6">
              Ready to Deploy AI Agents That Drive Real Business Results?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Join the 57% of companies already using AI agents in production. Book your free strategy session and discover how custom AI agents can automate your workflows, delight your customers, and deliver measurable ROI — in weeks, not quarters.
            </p>

            {/* What you get */}
            <div className="space-y-4 mb-10">
              <h3 className="text-base font-bold text-white">In your free 30-minute strategy session, you&apos;ll get:</h3>
              {[
                "AI readiness assessment for your specific business processes",
                "Identification of your top 3 highest-impact automation opportunities",
                "Preliminary ROI projections based on your current metrics",
                "Technology recommendation tailored to your existing stack",
                "Clear next steps with no obligation to proceed",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                Or reach us directly
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919103398557?text=Hi%20FactoryJet%2C%20I%27m%20interested%20in%20AI%20agent%20development%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold text-sm rounded-lg hover:bg-[#25D366]/20 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href="mailto:connect@factoryjet.com?subject=AI%20Agent%20Development%20Inquiry"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/[0.05] border border-white/10 text-gray-300 font-semibold text-sm rounded-lg hover:bg-white/[0.08] transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  connect@factoryjet.com
                </a>
                <a
                  href="tel:+919103398557"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/[0.05] border border-white/10 text-gray-300 font-semibold text-sm rounded-lg hover:bg-white/[0.08] transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +91 910 339 8557
                </a>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8 text-xs text-gray-500">
              <span>✓ No obligation</span>
              <span>✓ 4 countries served</span>
              <span>✓ Enterprise-grade security</span>
              <span>✓ Response within 24 hours</span>
            </div>
          </div>

          {/* Right — CTA Card */}
          <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 lg:sticky lg:top-24">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#0052CC]/20 to-transparent pointer-events-none" />
            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-1">
                Book Your Free AI Strategy Session
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Tell us about your business and we&apos;ll show you exactly how AI agents can help.
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
                className="w-full py-4 bg-[#FF6B35] hover:bg-[#e55a25] text-white font-bold text-base rounded-lg transition-all duration-200 shadow-lg shadow-[#FF6B35]/30 cursor-pointer"
              >
                Book My Free Strategy Session →
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                No obligation · No credit card · We respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
