'use client';

import { useEffect, useRef, useState } from 'react';

interface BlogHeroImageProps {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';
}

/**
 * BlogHeroImage — the LCP hero image, kept as a tiny client island purely for
 * the onError fallback to /blog_placeholder.webp.
 *
 * The eager / high-priority loading hints are preserved so this stays the
 * prioritized LCP element. A mount check (complete + naturalWidth === 0) also
 * catches a load that failed before React hydrated the onError handler, which
 * matters now that the surrounding article is server-rendered.
 */
export function BlogHeroImage({ src, alt, fit }: BlogHeroImageProps) {
  const [errored, setErrored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setErrored(true);
    }
  }, []);

  const imageUrl = errored ? '/blog_placeholder.webp' : src;

  return (
    <img
      ref={imgRef}
      src={imageUrl}
      alt={alt}
      onError={() => setErrored(true)}
      width={1200}
      height={514}
      loading="eager"
      decoding="async"
      fetchPriority="high"
      className={`w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
    />
  );
}
