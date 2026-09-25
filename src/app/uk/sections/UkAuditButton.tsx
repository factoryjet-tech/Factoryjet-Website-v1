"use client";

import type { CSSProperties, ReactNode } from "react";
import { useContactModal } from "@/context/ContactModalContext";
import { trackButtonClick, trackCTAClick } from "@/utils/gtm";

// Tiny client island for the "free digital audit" buttons in the UK sections.
// The sections themselves are server components (no hydration-time GSAP, no
// section-sized client bundles); only this button needs the modal context and
// the click tracking. Tracking calls are exactly the ones the sections used to
// make inline: trackCTAClick(name, location, 'primary') then trackButtonClick.
export default function UkAuditButton({
  trackName,
  location,
  className,
  style,
  children,
}: {
  trackName: string;
  location: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const { openModal } = useContactModal();
  return (
    <button
      type="button"
      onClick={() => {
        trackCTAClick(trackName, location, "primary");
        trackButtonClick(trackName, location);
        openModal("uk", "default");
      }}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
