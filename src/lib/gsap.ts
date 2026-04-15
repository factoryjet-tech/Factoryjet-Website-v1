"use client";

import { gsap as gsapCore } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsapCore.registerPlugin(ScrollTrigger, SplitText);

  // Optimize ScrollTrigger for performance
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,domContentLoaded,load",
    ignoreMobileResize: true,
  });
}

export const gsap = gsapCore;
export { ScrollTrigger, SplitText };
