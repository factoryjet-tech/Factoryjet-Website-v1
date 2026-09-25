// Liverpool FAQ. No accordion, no filter, no hidden panels.
// Every answer is permanently visible in the DOM, so AI crawlers (GPTBot,
// ClaudeBot, PerplexityBot) read all of them straight out of the HTML source.
// The count in the header is derived from FAQS.length so it can never drift.

import { FAQS } from '../faqData';

export default function FAQ() {
  // 2026-09-26 (perf): the GSAP header and card stagger-in on scroll was removed.
  // Every card now paints in its final state; this section is a server component.

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions, SEO agency Liverpool"
      className="relative w-full"
      style={{ backgroundColor: "#FAFAF7", maxWidth: "100vw" }}
    >
      <div
        className="mx-auto w-full max-w-[1200px] px-6 sm:px-8"
        style={{
          paddingTop: "clamp(64px, 10vw, 120px)",
          paddingBottom: "clamp(64px, 10vw, 120px)",
        }}
      >
        {/* Two-column layout: header left, cards right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[35%_1fr] lg:gap-16">

          {/* Left, section header, sticky on desktop */}
          <aside>
            <div className="lg:sticky lg:top-[120px]">
              <p
                data-faq-head
                style={{
                  color: "#B23E13",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Liverpool SEO FAQ
              </p>

              <h2
                data-faq-head
                className="font-clash mt-4"
                style={{
                  color: "#1A1A1A",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3.2vw, 36px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                What Liverpool businesses ask before they hire an SEO agency
              </h2>

              <p
                data-faq-head
                style={{
                  color: "#4A4A45",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  lineHeight: 1.6,
                  marginTop: 10,
                }}
              >
                {FAQS.length} answers, written out in full. No jargon, no hedging.
              </p>
            </div>
          </aside>

          {/* Right: every card, permanently expanded */}
          <ul className="flex list-none flex-col gap-4 p-0">
            {FAQS.map((item, i) => (
              <li
                key={item.q}
                data-faq-card
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D9D9D2",
                  borderRadius: 16,
                  padding: "24px",
                }}
              >
                <div className="flex items-start gap-5">
                  {/* Numbered badge */}
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 flex items-center justify-center rounded-full font-bold"
                    style={{
                      width: 40,
                      height: 40,
                      minWidth: 40,
                      backgroundColor: "#FEF3E8",
                      border: "1px solid #F3C9B6",
                      color: "#B23E13",
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3
                      style={{
                        color: "#1A1A1A",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: "clamp(15px, 1.1vw, 17px)",
                        lineHeight: 1.4,
                        letterSpacing: "-0.005em",
                        margin: 0,
                      }}
                    >
                      {item.q}
                    </h3>

                    <div>
                      <p
                        style={{
                          color: "#4A4A45",
                          fontFamily: "var(--font-sans)",
                          fontWeight: 400,
                          fontSize: "clamp(14px, 1.05vw, 15px)",
                          lineHeight: 1.75,
                          marginTop: 10,
                          marginBottom: 0,
                        }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
