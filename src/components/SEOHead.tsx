import React from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
}

/**
 * SEO Head Component - DEPRECATED
 * In Next.js App Router, use metadata export in page.tsx instead.
 * This component is kept for backwards compatibility but returns null.
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  noindex = false
}) => {
  // In Next.js App Router, metadata should be handled via:
  // - metadata export in page.tsx for static metadata
  // - generateMetadata function for dynamic metadata
  // This component returns null as a compatibility shim
  return null;
};

export default SEOHead;
