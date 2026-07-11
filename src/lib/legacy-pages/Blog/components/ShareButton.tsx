'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  slug: string;
}

/**
 * ShareButton — the one genuinely-interactive control in the blog footer.
 *
 * Uses the Web Share API when available and falls back to copying the URL to
 * the clipboard. Isolated as a tiny client island so the rest of the article
 * (hero, image, takeaways, prose, FAQ, author box) can stay server-rendered.
 */
export function ShareButton({ title, slug }: ShareButtonProps) {
  const handleShare = async () => {
    const url = `https://factoryjet.com/blog/${slug}`;
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({ title, url });
      } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      // User dismissed the native share sheet or the clipboard was blocked.
      // Nothing to recover; the button simply does nothing further.
    }
  };

  return (
    <button
      type="button"
      aria-label="Share this article"
      onClick={handleShare}
      className="p-2 md:p-3 bg-gray-50 rounded-full hover:bg-[#FFF3EE] hover:text-[#F05A28] transition-colors cursor-pointer"
    >
      <Share2 className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
    </button>
  );
}
