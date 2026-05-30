"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { CheckCircle2, MessageCircle, Mail, Phone } from "lucide-react";
import LeadFormInline from "@/components/LeadFormInline";

const TRUST_POINTS = [
  "Free quote — no obligation",
  "Response within 4 business hours",
  "Fixed-price projects, no hidden fees",
  "90-day post-launch support included",
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(leftRef.current, { x: -30, autoAlpha: 0, duration: 0.8, ease: "power3.out" })
        .from(rightRef.current, { x: 30, autoAlpha: 0, duration: 0.8, ease: "power3.out" }, "-=0.65");
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      style={{ background: "#0a0f1c", padding: "128px 0", overflow: "hidden" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1400px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-start">

          {/* ── LEFT: copy ────────────────────────────────────────────────── */}
          <div ref={leftRef}>
            <p
              className="font-semibold uppercase"
              style={{
                color: "#FF6B35",
                fontSize: "13px",
                letterSpacing: "0.15em",
                marginBottom: "16px",
              }}
            >
              Get Started
            </p>

            <h2
              className="font-clash text-white"
              style={{
                fontSize: "clamp(2rem, 1.7rem + 1.3vw, 3rem)",
                lineHeight: 1.15,
                marginBottom: "24px",
              }}
            >
              Ready to Build a Manchester Website That Actually Works?
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
                marginBottom: "32px",
                maxWidth: "50ch",
              }}
            >
              Manchester&apos;s digital economy is worth £5 billion and growing.
              Your website should reflect the ambition of the city you operate
              in — fast, intelligent, visible, and engineered to convert.
              FactoryJet builds AI-native websites on Next.js 15 at 50–60%
              below Manchester agency rates, with guaranteed Lighthouse scores
              and AI search visibility baked into every page.
            </p>

            {/* Trust checkpoints */}
            <ul className="flex flex-col" style={{ gap: "12px", marginBottom: "40px" }}>
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    style={{ color: "#10B981", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)" }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Contact details */}
            <div className="flex flex-col" style={{ gap: "12px" }}>
              <a
                href="https://wa.me/919699977699"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
              >
                <MessageCircle size={17} style={{ color: "#10B981", flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                  Message us on WhatsApp
                </span>
              </a>
              <a
                href="mailto:connect@factoryjet.com"
                className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
              >
                <Mail size={17} style={{ color: "#F05A28", flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                  connect@factoryjet.com
                </span>
              </a>
              <a
                href="tel:+13391702199"
                className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
              >
                <Phone size={17} style={{ color: "#FF6B35", flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                  +1-339-170-2199 (US)
                </span>
              </a>
            </div>
          </div>

          {/* ── RIGHT: standard lead form ─────────────────────────────────── */}
          <div ref={rightRef}>
            <LeadFormInline
              region="uk"
              source="uk_manchester_final_cta"
              heading="Get your free Manchester quote"
              subheading="Just your name and email to start — we reply within 4 business hours."
            />
          </div>

        </div>
      </div>
    </section>
  );
}
