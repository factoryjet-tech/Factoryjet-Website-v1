"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { CheckCircle2, MessageCircle, Mail, Globe } from "lucide-react";
import LeadFormInline from "@/components/LeadFormInline";

const TRUST_POINTS = [
  "Free, no-obligation digital audit",
  "Response within 4 hours",
  "2–4 week delivery for websites",
  "Lighthouse 90+ performance guarantee",
  "90 days post-launch support included",
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

      const trigger = {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      gsap.from(leftRef.current, {
        x: -30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: trigger,
      });

      gsap.from(rightRef.current, {
        x: 30,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: trigger,
      });
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
              GET STARTED
            </p>

            <h2
              className="font-clash text-white"
              style={{
                fontSize: "clamp(2rem, 1.7rem + 1.3vw, 3rem)",
                lineHeight: 1.15,
                marginBottom: "24px",
              }}
            >
              Let&apos;s Build Something That Grows Your Leeds Business
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
              Whether you need a website, an online store, an AI agent, or a complete digital strategy, we will give you an honest assessment of what will work, what it costs, and how fast we can deliver. No obligation. No jargon. Just a clear plan.
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
                href="mailto:connect@factoryjet.com"
                className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
              >
                <Mail size={17} style={{ color: "#F05A28", flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                  connect@factoryjet.com
                </span>
              </a>
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
                href="https://factoryjet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
              >
                <Globe size={17} style={{ color: "#FF6B35", flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                  factoryjet.com
                </span>
              </a>
            </div>
          </div>

          {/* ── RIGHT: standard lead form ─────────────────────────────────── */}
          <div ref={rightRef}>
            <LeadFormInline
              region="uk"
              source="uk_leeds_final_cta"
              heading="Get your free Leeds digital audit"
              subheading="Just your name and email to start, we reply within 4 hours."
            />
          </div>

        </div>
      </div>
    </section>
  );
}
