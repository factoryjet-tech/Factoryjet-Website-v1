/**
 * relatedLinks - deterministic internal-linking engine for blog posts.
 *
 * Why this exists: a July 2026 link audit found 72 of 102 blog posts had ZERO inbound
 * in-content links, and the post template emitted no outbound links to money pages.
 * The blog is the only asset ranking pos 4-13, so that authority was going nowhere.
 *
 * This module derives, for any post:
 *   1. related posts    -> sibling blog links (fixes the orphan problem, both directions)
 *   2. related services -> links into /services/* money pages (passes authority down)
 *
 * Everything is pure and deterministic (no Math.random, no Date.now) so static export
 * output is stable across builds.
 */
import type { BlogPost } from './data.types';

export interface RelatedService {
  href: string;
  label: string;
  blurb: string;
}

/* ---------------------------------------------------------------------------
   Service map. Each entry: keywords that may appear in a post slug or title,
   mapped to the canonical money page that should receive the link.
   Order matters only for tie-breaks; scoring below handles specificity.
--------------------------------------------------------------------------- */
interface ServiceRule {
  href: string;
  label: string;
  blurb: string;
  keywords: string[];
  /** higher = more specific, wins ties over generic parents */
  weight: number;
  /**
   * Geo-scoped target. A rule with a market is only ever offered to posts whose
   * own market resolves to the same value, and it outranks the market-neutral
   * (US) equivalent for those posts. Without this every UK post sent its whole
   * block to US service pages, which is both wrong for the reader and the reason
   * the /uk/* hubs received no internal links at all.
   */
  market?: 'uk';
}

const SERVICE_RULES: ServiceRule[] = [
  // --- AI SEO / GEO / AEO ---
  {
    href: '/services/ai-seo',
    label: 'AI SEO',
    blurb: 'Get named and quoted by ChatGPT, Perplexity, Gemini and Google AI Overviews.',
    keywords: ['ai seo', 'geo', 'aeo', 'generative engine', 'answer engine', 'ai search', 'ai overview', 'chatgpt', 'perplexity', 'ai visibility', 'ai citation'],
    weight: 3,
  },
  // --- SEO family ---
  {
    href: '/services/seo-consulting',
    label: 'SEO Consulting',
    blurb: 'Audits, strategy and roadmaps for teams with in-house resource.',
    keywords: ['seo consult', 'seo strategy', 'seo roadmap'],
    weight: 3,
  },
  {
    href: '/services/seo-audit',
    label: 'SEO Audit',
    blurb: 'Find what is holding the site back before spending on content or links.',
    keywords: ['seo audit', 'technical seo', 'site audit'],
    weight: 3,
  },
  {
    href: '/services/local-seo',
    label: 'Local SEO',
    blurb: 'Show up in the map pack and in searches near you.',
    keywords: ['local seo', 'map pack', 'google business profile', 'near me'],
    weight: 3,
  },
  {
    href: '/services/ecommerce-seo',
    label: 'Ecommerce SEO',
    blurb: 'Organic growth for online stores, from category pages to product schema.',
    keywords: ['ecommerce seo', 'woocommerce seo', 'store seo', 'product page seo'],
    weight: 3,
  },
  {
    href: '/services/shopify-seo',
    label: 'Shopify SEO',
    blurb: 'Technical and content SEO built around how Shopify actually works.',
    keywords: ['shopify seo'],
    weight: 4,
  },
  {
    href: '/services/small-business-seo',
    label: 'Small Business SEO',
    blurb: 'Search growth scoped to a small team and a real budget.',
    keywords: ['small business seo', 'seo for small business', 'seo cost', 'how long does seo'],
    weight: 3,
  },
  {
    href: '/services/seo',
    label: 'SEO Services',
    blurb: 'Search strategy, technical fixes and content that compounds.',
    keywords: ['seo'],
    weight: 1,
  },
  // --- Web design family ---
  {
    href: '/services/website-redesign',
    label: 'Website Redesign',
    blurb: 'Modernise an existing site without throwing away its search equity.',
    keywords: ['redesign', 'rebuild site', 'website refresh'],
    weight: 3,
  },
  {
    href: '/services/small-business-website-design',
    label: 'Small Business Web Design',
    blurb: 'Websites for small teams that need to look credible and convert.',
    keywords: ['small business website', 'small business web design', 'website cost', 'lead generation website'],
    weight: 3,
  },
  {
    href: '/services/wordpress-development',
    label: 'WordPress Development',
    blurb: 'Custom block themes and headless WordPress your team can manage.',
    keywords: ['wordpress', 'gutenberg', 'elementor'],
    weight: 3,
  },
  {
    href: '/services/web-design',
    label: 'Web Design',
    blurb: 'Design and build for sites that have to earn their keep.',
    keywords: ['web design', 'website design', 'webflow', 'web designer', 'ux', 'landing page'],
    weight: 2,
  },
  // --- Ecommerce family ---
  {
    href: '/services/shopify-development',
    label: 'Shopify Development',
    blurb: 'Custom themes and headless Shopify storefronts.',
    keywords: ['shopify'],
    weight: 2,
  },
  {
    href: '/services/woocommerce-development',
    label: 'WooCommerce Development',
    blurb: 'WooCommerce builds and rescues for stores on WordPress.',
    keywords: ['woocommerce'],
    weight: 3,
  },
  {
    href: '/services/magento-development',
    label: 'Magento Development',
    blurb: 'Adobe Commerce and Magento builds for complex catalogues.',
    keywords: ['magento', 'adobe commerce'],
    weight: 3,
  },
  {
    href: '/services/ecommerce-marketing-agency',
    label: 'Ecommerce Marketing',
    blurb: 'Paid acquisition for online stores: ads, feeds, marketplaces and retention.',
    keywords: ['ecommerce marketing', 'ecommerce ads', 'google ads', 'paid social', 'ppc', 'advertising', 'flash sale', 'checkout optimization'],
    weight: 3,
  },
  {
    href: '/services/ecommerce-development',
    label: 'Ecommerce Development',
    blurb: 'Online stores built for catalogue depth, speed and conversion.',
    keywords: ['ecommerce', 'online store', 'bigcommerce', 'headless', 'b2b ecommerce', 'dtc'],
    weight: 2,
  },
  // --- Marketplaces ---
  {
    href: '/services/amazon-agency',
    label: 'Amazon Agency',
    blurb: 'Listings, ads and account management for Amazon sellers.',
    keywords: ['amazon'],
    weight: 3,
  },
  {
    href: '/services/walmart-marketplace-agency',
    label: 'Walmart Marketplace',
    blurb: 'Getting live and getting found on Walmart Marketplace.',
    keywords: ['walmart'],
    weight: 3,
  },
  {
    href: '/services/tiktok-shop-agency',
    label: 'TikTok Shop Agency',
    blurb: 'Setup, content and ads for selling on TikTok Shop.',
    keywords: ['tiktok'],
    weight: 3,
  },
  // --- AI / agents ---
  {
    href: '/agentic-commerce',
    label: 'Agentic Commerce',
    blurb: 'Getting a store ready for AI agents that browse and buy.',
    keywords: ['agentic commerce', 'agentic', 'ai shopping agent', 'instant checkout'],
    weight: 4,
  },
  {
    href: '/services/ai-chatbot-development',
    label: 'AI Chatbot Development',
    blurb: 'Support and sales chatbots that actually resolve things.',
    keywords: ['chatbot', 'chat bot', 'customer support ai'],
    weight: 3,
  },
  {
    href: '/services/ai-automation',
    label: 'AI Automation',
    blurb: 'Automate the repetitive work a small team should not be doing.',
    keywords: ['ai automation', 'workflow automation', 'sales automation', 'n8n', 'zapier', 'rpa'],
    weight: 3,
  },
  {
    href: '/services/ai-agent-development',
    label: 'AI Agent Development',
    blurb: 'Custom AI agents wired into the tools a business already runs.',
    keywords: ['ai agent', 'ai agents', 'agentic ai', 'build ai agent'],
    weight: 3,
  },
  {
    href: '/services/ai-agents',
    label: 'AI Agents for Business',
    blurb: 'Where AI agents pay for themselves, and where they do not.',
    keywords: ['ai for business', 'ai adoption', 'artificial intelligence'],
    weight: 2,
  },
  // --- Commerce pillars ---
  {
    href: '/headless-commerce',
    label: 'Headless Commerce',
    blurb: 'Decoupled storefronts for teams that have outgrown a theme.',
    keywords: ['headless', 'headless commerce', 'composable', 'composable commerce', 'decoupled'],
    weight: 4,
  },
  {
    href: '/best-ecommerce-platforms',
    label: 'Ecommerce Platform Comparison',
    blurb: 'Which platform fits which kind of store, without the vendor pitch.',
    keywords: ['ecommerce platform', 'best platform', 'platform comparison', 'shopify vs', 'woocommerce vs', 'bigcommerce vs', 'magento vs'],
    weight: 3,
  },
  {
    href: '/commerceflo',
    label: 'Commerceflo',
    blurb: 'The AI operator that runs the repetitive work behind a storefront.',
    keywords: ['commerceflo', 'ai commerce', 'ai for ecommerce', 'ai for e-commerce', 'commerce operator'],
    weight: 3,
  },
  {
    href: '/services/ecommerce-growth-agency',
    label: 'Ecommerce Growth',
    blurb: 'Growth work for stores past launch: retention, AOV and channel mix.',
    keywords: ['ecommerce growth', 'grow online store', 'scale a store', 'dtc growth', 'ecommerce agency'],
    weight: 3,
  },
  // --- Verticals ---
  {
    href: '/services/roofing-seo',
    label: 'Roofing SEO',
    blurb: 'Search and lead generation built around how roofing buyers actually search.',
    keywords: ['roofing', 'roofer', 'contractor seo', 'home services'],
    weight: 4,
  },
  // --- Tools / reference ---
  {
    href: '/ai-visibility-checker',
    label: 'AI Visibility Checker',
    blurb: 'See whether ChatGPT, Perplexity and Google AI Overviews mention you today.',
    keywords: ['ai visibility check', 'visibility checker', 'chatgpt recommend', 'get cited', 'cited by ai'],
    weight: 2,
  },
  {
    href: '/glossary',
    label: 'Glossary',
    blurb: 'Plain definitions for the search, AI and commerce terms used here.',
    keywords: ['glossary', 'terminology', 'jargon', 'definitions'],
    weight: 1,
  },
  // --- UK hubs (market-gated: only offered to UK posts) ---
  {
    href: '/uk/ai-seo',
    label: 'AI SEO (UK)',
    blurb: 'Get named and quoted by ChatGPT, Perplexity, Gemini and Google AI Overviews.',
    keywords: ['ai seo', 'geo', 'aeo', 'generative engine', 'answer engine', 'ai search', 'ai overview', 'chatgpt', 'perplexity', 'ai visibility', 'ai citation'],
    weight: 3,
    market: 'uk',
  },
  {
    href: '/uk/seo-audit',
    label: 'SEO Audit (UK)',
    blurb: 'Find what is holding the site back before spending on content or links.',
    keywords: ['seo audit', 'technical seo', 'site audit'],
    weight: 3,
    market: 'uk',
  },
  {
    href: '/uk/local-seo',
    label: 'Local SEO (UK)',
    blurb: 'Show up in the map pack and in searches near you.',
    keywords: ['local seo', 'map pack', 'google business profile', 'near me'],
    weight: 3,
    market: 'uk',
  },
  {
    href: '/uk/ecommerce-development',
    label: 'Ecommerce Development (UK)',
    blurb: 'Online stores built for catalogue depth, speed and conversion.',
    keywords: ['ecommerce', 'online store', 'shopify', 'woocommerce', 'magento', 'bigcommerce', 'dtc'],
    weight: 3,
    market: 'uk',
  },
  {
    href: '/uk/ai-agents',
    label: 'AI Agents (UK)',
    blurb: 'Custom AI agents wired into the tools a business already runs.',
    keywords: ['ai agent', 'ai agents', 'agentic ai', 'ai automation', 'workflow automation', 'chatbot', 'automation agency'],
    weight: 3,
    market: 'uk',
  },
  {
    href: '/uk/web-design',
    label: 'Web Design (UK)',
    blurb: 'Design and build for sites that have to earn their keep.',
    keywords: ['web design', 'website design', 'webflow', 'web designer', 'website cost', 'landing page'],
    weight: 2,
    market: 'uk',
  },
  {
    href: '/uk/seo',
    label: 'SEO Services (UK)',
    blurb: 'Search strategy, technical fixes and content that compounds.',
    keywords: ['seo'],
    weight: 1,
    market: 'uk',
  },
];

/** Category fallback when no keyword matches. */
const CATEGORY_FALLBACK: Record<string, string[]> = {
  'Web Design & Strategy': ['/services/web-design', '/services/small-business-website-design', '/services/website-redesign'],
  'E-Commerce Development': ['/services/ecommerce-development', '/services/shopify-development', '/services/ecommerce-marketing-agency'],
  'Emerging Tech': ['/services/ai-agents', '/services/ai-seo', '/ai-visibility-checker', '/glossary'],
  'Maintenance & Security': ['/services/web-design', '/services/wordpress-development', '/services/seo-audit'],
};

/** UK posts fall back to the UK hubs before any US page. */
const UK_CATEGORY_FALLBACK: Record<string, string[]> = {
  'Web Design & Strategy': ['/uk/web-design', '/uk/seo', '/uk/seo-audit'],
  'E-Commerce Development': ['/uk/ecommerce-development', '/uk/seo', '/uk/ai-seo'],
  'Emerging Tech': ['/uk/ai-agents', '/uk/ai-seo', '/uk/seo'],
  'Maintenance & Security': ['/uk/web-design', '/uk/seo-audit', '/uk/seo'],
};

const BY_HREF = new Map(SERVICE_RULES.map((r) => [r.href, r]));

function haystack(post: BlogPost): string {
  return `${post.slug.replace(/-/g, ' ')} ${post.title}`.toLowerCase();
}

/**
 * Pick the money pages most relevant to a post. Deterministic.
 * Specific rules (weight 3-4) beat generic parents (weight 1-2), so a Shopify SEO
 * post links to /services/shopify-seo rather than the generic /services/seo.
 */
export function getRelatedServices(post: BlogPost, limit = 3): RelatedService[] {
  const hay = haystack(post);
  const postMarket = marketOf(post);
  const scored: Array<{ rule: ServiceRule; score: number }> = [];

  for (const rule of SERVICE_RULES) {
    // A geo-scoped rule is invisible to every post outside its market.
    if (rule.market && rule.market !== postMarket) continue;

    let hits = 0;
    for (const kw of rule.keywords) {
      if (hay.includes(kw)) hits += 1;
    }
    if (hits === 0) continue;

    // Scoring is hit-count dominant (weight only breaks ties), so the home-market
    // bonus has to clear one whole extra keyword hit for a UK hub to beat the US
    // page that matched one more term.
    const marketBonus = rule.market && rule.market === postMarket ? 15 : 0;
    scored.push({ rule, score: hits * 10 + rule.weight + marketBonus });
  }

  scored.sort((a, b) => b.score - a.score || a.rule.href.localeCompare(b.rule.href));

  const out: RelatedService[] = [];
  const seen = new Set<string>();
  for (const { rule } of scored) {
    if (seen.has(rule.href)) continue;
    seen.add(rule.href);
    out.push({ href: rule.href, label: rule.label, blurb: rule.blurb });
    if (out.length >= limit) break;
  }

  // Fill from the category fallback so every post gets links, never an empty block.
  // UK posts exhaust the UK hubs first, then fall through to the US list.
  if (out.length < limit) {
    const chain = postMarket === 'uk'
      ? [...(UK_CATEGORY_FALLBACK[post.category] ?? []), ...(CATEGORY_FALLBACK[post.category] ?? [])]
      : (CATEGORY_FALLBACK[post.category] ?? []);

    for (const href of chain) {
      if (seen.has(href)) continue;
      const rule = BY_HREF.get(href);
      if (!rule) continue;
      if (rule.market && rule.market !== postMarket) continue;
      seen.add(href);
      out.push({ href: rule.href, label: rule.label, blurb: rule.blurb });
      if (out.length >= limit) break;
    }
  }

  return out;
}

/* ---------------------------------------------------------------------------
   Related posts
--------------------------------------------------------------------------- */

const STOPWORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'for', 'to', 'of', 'in', 'on', 'is', 'it', 'your', 'you',
  'how', 'what', 'why', 'best', 'guide', 'does', 'do', 'with', 'vs', 'be', 'are', 'can',
  '2024', '2025', '2026', 'complete', 'from', 'that', 'this', 'my', 'we', 'us', 'not',
]);

/** Market tokens: keep US posts recommending US posts where possible. */
const MARKETS = ['uk', 'india', 'indian', 'australia', 'australian', 'usa', 'america', 'american'];

function tokens(post: BlogPost): Set<string> {
  return new Set(
    `${post.slug.replace(/-/g, ' ')} ${post.title}`
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((t) => t.length > 2 && !STOPWORDS.has(t))
  );
}

function marketOf(post: BlogPost): string | null {
  const hay = haystack(post);
  for (const m of MARKETS) {
    if (new RegExp(`\\b${m}\\b`).test(hay)) {
      if (m === 'usa' || m === 'america' || m === 'american') return 'us';
      if (m === 'indian') return 'india';
      if (m === 'australian') return 'australia';
      return m;
    }
  }
  return null;
}

/** Similarity of `b` as a recommendation from `a`. Higher is closer. */
function similarity(a: BlogPost, b: BlogPost): number {
  const mine = tokens(a);
  const theirs = tokens(b);
  let overlap = 0;
  for (const t of mine) if (theirs.has(t)) overlap += 1;

  let score = overlap * 4;
  if (a.category === b.category) score += 3;

  const myMarket = marketOf(a);
  const theirMarket = marketOf(b);
  if (myMarket && theirMarket) {
    score += myMarket === theirMarket ? 3 : -4;
  } else if (!myMarket && theirMarket) {
    // a market-neutral post should not be pushed into a foreign-market post
    score -= 2;
  }
  return score;
}

function rank(post: BlogPost, all: BlogPost[]): BlogPost[] {
  return all
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ post: p, score: similarity(post, p) }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || a.post.slug.localeCompare(b.post.slug))
    .map((s) => s.post);
}

/**
 * Full related-post graph, built once per POSTS array and memoised.
 *
 * Two passes:
 *   1. every post gets its top-N most similar siblings
 *   2. ORPHAN RESCUE - any post that ended up with no inbound link is appended to
 *      the related list of its own closest sibling. Without this, ~18 posts stayed
 *      unreachable through in-content links, which is the exact problem this module
 *      exists to solve. Appending (rather than swapping) means rescuing one post can
 *      never orphan another, so the pass cannot cascade.
 *
 * Deterministic throughout: all ties break on slug, so static output is stable.
 */
const graphCache = new WeakMap<BlogPost[], Map<string, BlogPost[]>>();

function buildGraph(all: BlogPost[], limit: number): Map<string, BlogPost[]> {
  const cached = graphCache.get(all);
  if (cached) return cached;

  const bySlug = new Map(all.map((p) => [p.slug, p]));
  const graph = new Map<string, BlogPost[]>();
  const ranked = new Map<string, BlogPost[]>();

  for (const p of all) {
    const r = rank(p, all);
    ranked.set(p.slug, r);
    graph.set(p.slug, r.slice(0, limit));
  }

  // pass 2: rescue orphans
  const inbound = new Set<string>();
  for (const list of graph.values()) for (const p of list) inbound.add(p.slug);

  const orphans = all
    .filter((p) => !inbound.has(p.slug))
    .sort((a, b) => a.slug.localeCompare(b.slug));

  for (const orphan of orphans) {
    // closest sibling that is not the orphan itself and is not already showing it
    const candidates = ranked.get(orphan.slug) ?? [];
    let host: BlogPost | undefined;
    for (const c of candidates) {
      const list = graph.get(c.slug) ?? [];
      if (!list.some((x) => x.slug === orphan.slug)) {
        host = c;
        break;
      }
    }
    if (!host) {
      // no scored candidate: fall back to the first same-category post by slug
      host = all
        .filter((p) => p.slug !== orphan.slug && p.category === orphan.category)
        .sort((a, b) => a.slug.localeCompare(b.slug))[0];
    }
    if (!host) continue;
    const list = graph.get(host.slug) ?? [];
    if (!list.some((x) => x.slug === orphan.slug)) {
      graph.set(host.slug, [...list, orphan]);
      inbound.add(orphan.slug);
    }
  }

  // safety: never leave a post with an empty block
  for (const p of all) {
    const list = graph.get(p.slug) ?? [];
    if (list.length > 0) continue;
    const filler = all
      .filter((x) => x.slug !== p.slug && x.category === p.category)
      .sort((a, b) => a.slug.localeCompare(b.slug))
      .slice(0, limit);
    graph.set(p.slug, filler);
  }

  void bySlug;
  graphCache.set(all, graph);
  return graph;
}

/**
 * Topically closest sibling posts, with orphan rescue applied across the whole
 * blog so every post is reachable through in-content links.
 */
export function getRelatedPosts(post: BlogPost, all: BlogPost[], limit = 3): BlogPost[] {
  return buildGraph(all, limit).get(post.slug) ?? [];
}
