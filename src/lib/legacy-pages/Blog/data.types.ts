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
  readTime: string;
  imageUrl: string;
  isFeatured?: boolean;
  content?: React.ReactNode;
  keyTakeaways?: string[];
  faqs?: FAQItem[];
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