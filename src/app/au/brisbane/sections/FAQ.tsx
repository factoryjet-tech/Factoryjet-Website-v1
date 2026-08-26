/**
 * Visible FAQ for /au/brisbane.
 *
 * Uses the shared v2 FAQ component with sidebar category navigation, chevron
 * accordions, and pill nav on mobile — matching the US and India pages exactly.
 * The FAQS array is the SAME one page.tsx maps into FAQPage JSON-LD. There is no
 * second copy of these questions anywhere.
 */

import FAQ from '@/components/v2/FAQ';
import { FAQS } from '../faqData';

const CATEGORIES = [
  { key: 'cost', label: 'Cost & scope' },
  { key: 'websites', label: 'Websites' },
  { key: 'seo', label: 'SEO' },
  { key: 'local', label: 'Google & local search' },
  { key: 'working', label: 'Working with us' },
] as const;

const TOPIC_MAP: Record<string, string> = {
  'Cost and scope': 'cost',
  'Websites': 'websites',
  'SEO': 'seo',
  'Google and local search': 'local',
  'Working with us': 'working',
};

export default function FAQSection() {
  return (
    <FAQ
      eyebrow="QUESTIONS"
      headline="Questions Brisbane businesses actually ask"
      lead="Every question below is one Google itself shows Australian searchers, taken from People Also Ask data collected in August 2026. We have not invented any of them."
      categories={CATEGORIES}
      items={FAQS.map((f) => ({
        question: f.q,
        answer: f.a,
        category: TOPIC_MAP[f.topic] ?? 'cost',
      }))}
    />
  );
}
