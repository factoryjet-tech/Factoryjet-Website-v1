/**
 * BlogLeadCapture: the lead form shown on blog posts, at the end of the article
 * and (on desktop) in the sticky sidebar beside it.
 *
 * Server component. The form itself is HeroInlineForm, so blog leads go through
 * the same pipeline as every other inline form: submitLead() -> /api/notify-lead
 * (Firestore + email + ERPNext), the conversion is counted on this page, then the
 * step-2 details modal, then /thank-you?...&counted=1.
 *
 * 2026-10-04: the offer now matches the post (see Blog/leadOffer.ts) and carries
 * the service and the post's market, the sidebar holds the form itself instead of
 * a link to /contact, and the old "most sites ship in about 7 days" line is gone
 * (true only for websites of up to five pages).
 *
 * source = `blog_<slug>` at the end of the article (unchanged, so old and new
 * leads compare) and `blog_<slug>_side` in the sidebar.
 */

import HeroInlineForm from '@/components/HeroInlineForm';
import type { BlogLeadOffer } from '@/lib/legacy-pages/Blog/leadOffer';

export interface BlogLeadCaptureProps {
  /** Post slug, used to attribute the lead. */
  slug: string;
  offer: BlogLeadOffer;
  placement?: 'article' | 'sidebar';
}

const TRUST = 'Bhavesh, our founder, reads every request and usually replies within 2 to 3 hours.';

export default function BlogLeadCapture({ slug, offer, placement = 'article' }: BlogLeadCaptureProps) {
  const side = placement === 'sidebar';
  const Heading = side ? 'h3' : 'h2';
  return (
    <section className={side ? 'blog-lead blog-lead-side' : 'blog-lead'} aria-label={offer.heading}>
      <p className="blog-lead-eyebrow">{offer.eyebrow}</p>
      <Heading className="blog-lead-heading">{offer.heading}</Heading>
      <p className="blog-lead-body">{offer.body}</p>
      <HeroInlineForm
        region={offer.region}
        source={side ? `blog_${slug}_side` : `blog_${slug}`}
        service={offer.service}
        submitLabel={offer.button}
        trustText={TRUST}
      />
    </section>
  );
}
