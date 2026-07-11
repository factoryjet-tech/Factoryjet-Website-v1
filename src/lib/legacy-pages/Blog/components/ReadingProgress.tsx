'use client';

import { useEffect, useRef } from 'react';

/**
 * ReadingProgress — fixed top scroll-progress bar for blog posts.
 *
 * Rewritten to drop the framer-motion dependency. It previously pulled the
 * whole library into the blog route's JS bundle just to animate a 1.5px bar.
 * This version writes the transform directly on a ref inside a rAF-throttled
 * scroll handler, so it renders once and never triggers a React re-render on
 * scroll. Visual output (position, height, colour) is unchanged.
 */
export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let frame = 0;
    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? doc.scrollTop / scrollable : 0;
      bar.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed left-0 right-0 top-0 z-[100] h-1.5 bg-[#FF6B35]"
      style={{ transform: 'scaleX(0)', transformOrigin: 'left', willChange: 'transform' }}
      aria-hidden="true"
    />
  );
}
