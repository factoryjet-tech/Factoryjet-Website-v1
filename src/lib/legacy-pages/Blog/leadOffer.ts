/**
 * leadOffer: the lead-form offer a blog post should show, matched to what the
 * reader came for.
 *
 * Why this exists (2026-10-04): every post showed the same block ("Get a free,
 * no-pitch plan for your site ... most sites ship in about 7 days"), including
 * AI agent and SEO cost guides, and every blog lead was recorded as region "us"
 * even on India, UK and Australia posts. US blog traffic in the 28 days to
 * 3 Oct 2026: 142 sessions, 1 lead.
 *
 * Pure function, no React, so the route, tests and scripts can all call it.
 * Claims used here are confirmed ones only: a fixed quote before work starts,
 * the founder's usual reply time, and a working demo before you sign (stores
 * and AI agents only).
 */

import { serviceFromPath, type ServiceCategory } from '@/utils/leadService';
import type { BlogPost } from './data.types';

export type BlogLeadRegion = 'us' | 'uk' | 'in' | 'au' | 'ae';

export interface BlogLeadOffer {
  service: ServiceCategory;
  region: BlogLeadRegion;
  eyebrow: string;
  heading: string;
  body: string;
  button: string;
}

const CATEGORY_SERVICE: Partial<Record<BlogPost['category'], ServiceCategory>> = {
  'E-Commerce Development': 'E-commerce',
  'Web Design & Strategy': 'Website Design',
  'Maintenance & Security': 'Website Design',
  'Emerging Tech': 'AI Agent Development',
};

/**
 * Blog slugs name their topic more loosely than service URLs do
 * ("ai-customer-support-agent-...", "how-to-get-chatgpt-to-recommend-..."),
 * so two extra checks run after the site-wide path rules.
 */
function serviceFromBlogSlug(slug: string): ServiceCategory | '' {
  const s = slug.toLowerCase();
  if (/(chatgpt|ai-overviews|perplexity|recommend-your-business)/.test(s)) return 'SEO & AI Search';
  if (/((^|-)ai(-|$)|agent|automation|(^|-)sdr(-|$)|receptionist|chatbot)/.test(s)) return 'AI Agent Development';
  return '';
}

/** Market the post is written for, read from its slug. Defaults to the US. */
export function blogLeadRegion(slug: string): BlogLeadRegion {
  const s = `-${slug.toLowerCase()}-`;
  if (/-(india|indian)-/.test(s)) return 'in';
  if (/-(uk|britain|british)-/.test(s)) return 'uk';
  if (/-(australia|australian)-/.test(s)) return 'au';
  if (/-(uae|dubai)-/.test(s)) return 'ae';
  return 'us';
}

/** True when the post answers a price question. */
export function isCostPost(slug: string): boolean {
  return /(^|-)(cost|costs|price|prices|pricing|fees|how-much)(-|$)/.test(slug.toLowerCase());
}

export function blogLeadOffer(post: Pick<BlogPost, 'slug' | 'category'>): BlogLeadOffer {
  // Ads and general marketing guides are not a service line of their own, so
  // they get the general offer instead of a website or SEO one.
  const general = /(google-ads|digital-marketing)/.test(post.slug.toLowerCase());
  const service: ServiceCategory = general
    ? 'Other'
    : serviceFromPath(`/blog/${post.slug}`) || serviceFromBlogSlug(post.slug) || CATEGORY_SERVICE[post.category] || 'Other';
  const region = blogLeadRegion(post.slug);
  const cost = isCostPost(post.slug);

  switch (service) {
    case 'E-commerce':
      return {
        service, region,
        eyebrow: cost ? 'Get a real number' : 'Planning a store',
        heading: cost ? 'Get a Fixed Quote for Your Store' : 'Tell Us What You Sell, and Where',
        body: cost
          ? 'Tell us your platform and what you need built. You get a fixed quote before any work starts, and you see a working draft of your store before you sign.'
          : 'We reply with what we would build and how long it takes. You see a working draft of your store before you sign.',
        button: 'Get my quote',
      };
    case 'AI Agent Development':
      return {
        service, region,
        eyebrow: cost ? 'Get a real number' : 'Free assessment',
        heading: cost ? 'Get a Fixed Quote for Your AI Agent' : 'Find Out if an AI Agent Can Take the Task',
        body: cost
          ? 'Name the task you want automated and the systems it touches. You get a fixed quote, and we build a demo on your own sample files before you sign.'
          : 'Name one task your team repeats every day. We tell you whether an agent can do it or whether a tool you can buy already does, and we build a demo on your own sample files before you sign.',
        button: cost ? 'Get my quote' : 'Assess my task',
      };
    case 'SEO & AI Search':
      return {
        service, region,
        eyebrow: cost ? 'Get a real number' : 'Free review',
        heading: cost ? 'Get a Fixed Quote for SEO and AI Search' : 'See Where You Stand in Google and AI Answers',
        body: cost
          ? 'Send your website address. We reply with what we would fix first and a fixed quote for the work.'
          : 'Send your website address. We reply with what we would fix first, in plain language.',
        button: cost ? 'Get my quote' : 'Review my site',
      };
    case 'Website Design':
      return {
        service, region,
        eyebrow: cost ? 'Get a real number' : 'Planning a website',
        heading: cost ? 'Get a Fixed Quote for Your Website' : 'Tell Us What Your Website Needs to Do',
        body: 'You get a fixed quote that lists every page and integration before any work starts.',
        button: 'Get my quote',
      };
    default:
      return {
        service, region,
        eyebrow: 'Have a project in mind',
        heading: 'Tell Us What You Need Built',
        body: 'You get a straight answer and a fixed quote before any work starts.',
        button: 'Get my quote',
      };
  }
}
