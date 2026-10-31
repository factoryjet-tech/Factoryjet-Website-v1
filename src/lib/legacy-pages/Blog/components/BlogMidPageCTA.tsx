import React from 'react';
import Link from 'next/link';
import type { BlogLeadOffer } from '../leadOffer';

/**
 * Mid-article call to action for blog posts.
 *
 * Why this exists (2026-10-22): the weak-pages audit of all 534 live URLs found 70 blog posts
 * (52 of them over 2,500 words) with no call to action between 20% and 80% of the article.
 * The hero and sidebar forms sit at the top and beside the text, and the sidebar is hidden below
 * lg, so a phone reader who is convinced halfway down has nothing to tap.
 *
 * Server-rendered, a plain <Link>, no client JS. Placed by `withMidPageCTA` just before the 4th
 * H2, so it closes a section instead of splitting a heading from its first paragraph.
 */

/** Hrefs that are a call to action wherever they appear in a post. */
const CTA_HREF = /^\/contact\b|\/get-quote\b|\/quote\b|calendly\.com|#contact\b|#quote\b/i;
/** Link or button text that reads as a call to action (same words the audit counted). */
const CTA_TEXT = /\b(get a quote|get my quote|book a|book your|talk to|contact us|get started|start your|schedule a|free (audit|consult|call)|call us|get a demo|see a demo)\b/i;
/** Components that render their own CTA or lead form inside a post. */
const CTA_COMPONENT = /CTA|LeadCapture|LeadForm|GatedDownload|ScheduleCall/;

/** The audit's mid-page window: a CTA between 20% and 80% of the article text counts. */
const MID_START = 0.2;
const MID_END = 0.8;
/** The CTA goes before this H2, so a post needs at least this many. */
const INSERT_BEFORE_H2 = 4;

type Props = { children?: React.ReactNode; href?: unknown };

function componentName(type: unknown): string {
  if (typeof type === 'function') return (type as { displayName?: string; name?: string }).displayName || type.name || '';
  if (typeof type === 'object' && type !== null) {
    const t = type as { displayName?: string; render?: { name?: string } };
    return t.displayName || t.render?.name || '';
  }
  return '';
}

function textOf(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  if (React.isValidElement<Props>(node)) return textOf(node.props.children);
  return '';
}

function isCta(el: React.ReactElement<Props>): boolean {
  const { href } = el.props;
  if (typeof href === 'string' && CTA_HREF.test(href)) return true;
  const name = componentName(el.type);
  if (name && CTA_COMPONENT.test(name)) return true;
  const clickable = el.type === 'a' || el.type === 'button' || name === 'Link' || typeof href === 'string';
  return clickable && CTA_TEXT.test(textOf(el.props.children));
}

export interface MidPageScan {
  h2: number;
  /** Positions (0 to 1, by share of article text) of every CTA the post renders itself. */
  ctaAt: number[];
  hasOwnMidCta: boolean;
}

/** Reads a post's content tree: how many H2s it has and where its own CTAs sit. */
export function scanPostContent(content: React.ReactNode): MidPageScan {
  let chars = 0;
  let h2 = 0;
  const ctaChars: number[] = [];
  const walk = (node: React.ReactNode): void => {
    if (typeof node === 'string' || typeof node === 'number') {
      chars += String(node).length;
      return;
    }
    if (Array.isArray(node)) return node.forEach(walk);
    if (!React.isValidElement<Props>(node)) return;
    if (node.type === 'h2') h2 += 1;
    if (isCta(node)) ctaChars.push(chars);
    walk(node.props.children);
  };
  walk(content);
  const ctaAt = ctaChars.map((c) => c / Math.max(1, chars));
  return { h2, ctaAt, hasOwnMidCta: ctaAt.some((p) => p >= MID_START && p <= MID_END) };
}

const COPY: Record<string, { heading: string; body: string }> = {
  'AI Agent Development': {
    heading: 'See the agent work on your own data',
    body: 'Name one task your team repeats. We build a demo on your own sample files before you sign, then quote each phase at a fixed price.',
  },
  'E-commerce': {
    heading: 'See a working draft of your store first',
    body: 'Tell us what you sell and where. You see a working draft before you sign, and each phase has a fixed price.',
  },
  'SEO & AI Search': {
    heading: 'Find out what to fix first',
    body: 'Send your website address. The founder replies with what we would fix first, in plain language, and a fixed price for the work.',
  },
  default: {
    heading: 'Get a fixed price before any work starts',
    body: 'Tell us what you need built. The founder replies with a plan and a fixed price for each phase, before you sign anything.',
  },
};

export function BlogMidPageCTA({ offer }: { offer: Pick<BlogLeadOffer, 'service'> }) {
  const copy = COPY[offer.service] ?? COPY.default;
  return (
    <aside
      aria-label="Talk to FactoryJet"
      className="blog-midpage-cta not-prose my-10 md:my-12 rounded-xl md:rounded-2xl border border-gray-200 border-l-4 border-l-[#B23E13] bg-[#FAFAF7] px-5 py-6 md:px-8 md:py-7"
    >
      <p className="font-fj-mono text-xs font-semibold uppercase tracking-widest text-[#B23E13]">Next step</p>
      <p className="mt-2 font-fj-display text-xl md:text-2xl font-extrabold tracking-[-0.02em] text-[#0F0F12]">{copy.heading}</p>
      <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#3A3A38]">{copy.body}</p>
      <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        {/* White on #B23E13 measures 5.85:1 (same fill as MidPageCTA, fixed 8 Oct). */}
        <Link
          prefetch={false}
          href="/contact?from=blog_midpage_cta"
          data-cta="blog_midpage_cta"
          data-cta-service={offer.service}
          className="inline-flex items-center gap-2 rounded-full bg-[#B23E13] px-6 py-3 text-base font-semibold text-white no-underline transition-opacity hover:opacity-90 hover:no-underline"
        >
          Talk to the founder
          <span aria-hidden="true">&rarr;</span>
        </Link>
        <span className="text-sm text-[#4A4A45]">Bhavesh replies within 24 hours.</span>
      </div>
    </aside>
  );
}

/**
 * Returns the post content with `cta` placed just before the 4th H2, at whatever depth that H2
 * sits. Returns the content unchanged when the post has fewer than 4 H2s.
 */
export function withMidPageCTA(content: React.ReactNode, cta: React.ReactElement): React.ReactNode {
  let seen = 0;
  let placed = false;
  const visit = (node: React.ReactNode): React.ReactNode => {
    if (Array.isArray(node)) {
      const out: React.ReactNode[] = [];
      for (let child of node) {
        if (!placed && React.isValidElement(child) && child.type === 'h2' && ++seen === INSERT_BEFORE_H2) {
          placed = true;
          out.push(React.cloneElement(cta, { key: 'blog-midpage-cta' }));
        } else if (!placed && !(React.isValidElement(child) && child.type === 'h2')) {
          child = visit(child);
        }
        out.push(child);
      }
      return out;
    }
    if (!React.isValidElement<Props>(node)) return node;
    const kids = node.props.children;
    if (kids === undefined || typeof kids === 'function') return node;
    if (node.type === 'h2') {
      seen += 1;
      return node;
    }
    const before = placed;
    const children = visit(React.Children.toArray(kids));
    // Clone only the branch that received the CTA; everything else stays the original element.
    return placed && !before ? React.cloneElement(node, undefined, children) : node;
  };
  const result = visit(content);
  return placed ? result : content;
}
