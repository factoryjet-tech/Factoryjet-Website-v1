"use client";

import { useContactModal } from "@/context/ContactModalContext";
import { trackButtonClick, trackCTAClick } from "@/utils/gtm";

export default function MidPageCTA() {
  const { openModal: openContactModal } = useContactModal();
  const openModal = () => openContactModal('uk', 'default');
  return (
    <div
      style={{ background: "#F05A28", padding: "64px 0" }}
      aria-label="Call to action"
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8"
        style={{ maxWidth: "1400px" }}
      >
        {/* Left: statement */}
        <div className="text-center lg:text-left" style={{ maxWidth: "600px" }}>
          <p
            className="font-clash text-white"
            style={{
              fontSize: "clamp(1.5rem, 1.3rem + 1vw, 2.2rem)",
              lineHeight: 1.25,
            }}
          >
            Ready to Transform Your Leeds Business?
          </p>
          <p
            className="text-white/80 mt-3"
            style={{
              fontSize: "15px",
              lineHeight: 1.55,
            }}
          >
            Get a free digital audit and custom proposal. No obligation. No pressure. Just clarity on what you need, what it costs, and how fast we can deliver.
          </p>
        </div>

        {/* Right: CTA */}
        <button
          onClick={() => {
            trackCTAClick('get_your_free_leeds_digital_audit', 'leeds_midpage_cta', 'primary');
            trackButtonClick('get_your_free_leeds_digital_audit', 'leeds_midpage_cta');
            openModal();
          }}
          className="w-full lg:w-auto text-center font-semibold text-white rounded-lg transition-all duration-200 hover:brightness-110 flex-shrink-0"
          style={{
            background: "#B23E13",
            padding: "16px 32px",
            fontSize: "15px",
          }}
        >
          Get Your Free Leeds Digital Audit →
        </button>
      </div>
    </div>
  );
}
