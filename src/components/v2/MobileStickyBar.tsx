'use client';

import { useEffect, useState } from 'react';

interface MobileStickyBarProps {
  /** The bar shows once this element has scrolled above the screen. */
  targetId: string;
  /** Where the button goes. Defaults to targetId. */
  scrollToId?: string;
}

export default function MobileStickyBar({ targetId, scrollToId }: MobileStickyBarProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const updateViewport = () => {
      setIsMobile(media.matches);
      if (!media.matches) setIsVisible(false);
    };

    updateViewport();
    media.addEventListener('change', updateViewport);

    const target = document.getElementById(targetId);
    if (!target || !media.matches) {
      return () => media.removeEventListener('change', updateViewport);
    }

    // Shown once the target has scrolled above the screen, hidden again while
    // the destination (the form) is on screen so the bar never covers it.
    const destination = scrollToId ? document.getElementById(scrollToId) : null;
    let pastTarget = false;
    let destinationInView = false;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === target) pastTarget = !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
        if (entry.target === destination) destinationInView = entry.isIntersecting;
      }
      setIsVisible(pastTarget && !destinationInView);
    }, { threshold: 0.05 });

    observer.observe(target);
    if (destination) observer.observe(destination);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', updateViewport);
    };
  }, [targetId, scrollToId, isMobile]);

  const returnToForm = () => {
    const target = document.getElementById(scrollToId ?? targetId);
    if (!target) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    target.querySelector<HTMLInputElement>('input:not([aria-hidden="true"])')?.focus({ preventScroll: true });
  };

  return (
    <aside
      className="mobile-sticky-bar"
      data-visible={isVisible}
      aria-hidden={!isVisible}
      aria-label="Commerce audit shortcut"
    >
      <span>Scale your commerce and AI systems</span>
      <button type="button" onClick={returnToForm} tabIndex={isVisible ? 0 : -1}>
        Get Commerce Audit <span aria-hidden="true">→</span>
      </button>
    </aside>
  );
}
