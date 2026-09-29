'use client';

import { useEffect, useState } from 'react';

interface MobileStickyBarProps {
  targetId: string;
}

export default function MobileStickyBar({ targetId }: MobileStickyBarProps) {
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

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
    }, { threshold: 0.05 });

    observer.observe(target);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', updateViewport);
    };
  }, [targetId, isMobile]);

  const returnToForm = () => {
    const target = document.getElementById(targetId);
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
