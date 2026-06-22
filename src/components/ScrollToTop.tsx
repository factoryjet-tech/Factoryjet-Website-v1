'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '../utils/gtm';

const ScrollToTop: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Get hash from window.location if needed
    const hash = window.location.hash;

    // If there's a hash, scroll to that element
    if (hash) {
      // Retry function to handle lazy-loaded components
      const scrollToHash = (retries = 0) => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (retries < 10) {
          // Retry up to 10 times (1 second total)
          setTimeout(() => scrollToHash(retries + 1), 100);
        }
      };

      // Initial delay to let page render
      setTimeout(() => scrollToHash(), 300);
    } else {
      // Otherwise scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    // Track page view in GTM
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
