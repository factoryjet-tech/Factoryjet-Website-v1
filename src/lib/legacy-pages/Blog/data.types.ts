import React from 'react';

export interface FAQItem {
  q: string;
  a: string;
}

/**
 * A next step written for one post. When set, the mid-article CTA shows this copy, a button
 * that opens the lead form and a link to the closest service page, instead of the generic copy.
 */
export interface BlogPostCta {
  eyebrow?: string;
  heading: string;
  body: string;
  /** Label of the button that opens the lead form. */
  button: string;
  serviceHref: string;
  serviceLabel: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  author: string;
  date: string;
  /** Optional last-updated date (same format as `date`). Falls back to `date`. */
  dateModified?: string;
  readTime: string;
  imageUrl: string;
  imageAlt?: string;
  imageFit?: 'cover' | 'contain';
  isFeatured?: boolean;
  content?: React.ReactNode;
  keyTakeaways?: string[];
  faqs?: FAQItem[];
  hideExcerptOnPage?: boolean;
  /** Keep the post live but out of the index: robots noindex,follow, dropped from the sitemap. */
  noindex?: boolean;
  /** Topic-matched mid-article CTA. Leave unset for the generic one. */
  cta?: BlogPostCta;
  meta?: {
    title: string;
    description: string;
  };
}

export type Category = 
  | 'All' 
  | 'Web Design & Strategy' 
  | 'E-Commerce Development' 
  | 'Maintenance & Security' 
  | 'Emerging Tech';