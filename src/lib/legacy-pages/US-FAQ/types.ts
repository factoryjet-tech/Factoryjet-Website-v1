import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

export interface FAQItem {
  id: string;
  question: string;
  answer: ReactNode;
  popular?: boolean;
}

export interface FAQCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items: FAQItem[];
}

export interface SearchResult {
  item: FAQItem;
  categoryId: string;
  categoryTitle: string;
  score: number;
  matchType: 'question' | 'answer';
}
