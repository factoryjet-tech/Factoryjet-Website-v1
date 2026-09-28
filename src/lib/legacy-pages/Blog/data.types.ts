import React from 'react';

export interface FAQItem {
  q: string;
  a: string;
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