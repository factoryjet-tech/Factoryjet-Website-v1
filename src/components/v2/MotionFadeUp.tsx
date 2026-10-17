'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode, CSSProperties } from 'react';

/**
 * MotionFadeUp — v2.0 scroll-triggered fade-up wrapper.
 *
 * Plain CSS transition + IntersectionObserver (2026-10-17). It used to import
 * GSAP + ScrollTrigger (43 KB, 260-440 ms of mobile CPU in PageSpeed) for this
 * one tween. Same motion: opacity 0 -> 1 and 28px rise over 0.55s, GSAP's
 * power2.out curve (= cubic-bezier(0.33, 1, 0.68, 1)), starting when the top of
 * the element reaches 88% of the viewport. The element stays visible in the SSR
 * HTML until JS hydrates. Elements already in view animate immediately.
 *
 * Anti-slop rules: no bounce, no spring physics, no elastic. Simple
 * ease-out with 0.6s duration max.
 */

export interface MotionFadeUpProps {
  children: ReactNode;
  /** Stagger delay in seconds (default 0). */
  delay?: number;
  /** CSS class names forwarded to the wrapper div. */
  className?: string;
  /** Inline styles forwarded to the wrapper div. */
  style?: CSSProperties;
  /** Kept for API compatibility. The fade plays once either way (as it did with GSAP). */
  once?: boolean;
}

const EASE = 'cubic-bezier(0.33, 1, 0.68, 1)';

export default function MotionFadeUp({
  children,
  delay = 0,
  className = '',
  style,
}: MotionFadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user's motion preference — skip all animation if reduce is set.
    // This also satisfies WCAG 2.1 SC 2.3.3 (AAA).
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;

    let raf = 0;
    const play = () => {
      el.style.transition = `opacity 0.55s ${EASE} ${delay}s, transform 0.55s ${EASE} ${delay}s`;
      // Two frames so the hidden start state is painted before the transition.
      raf = requestAnimationFrame(() => {
        raf = requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      });
    };

    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          play();
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [delay]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export { MotionFadeUp };
