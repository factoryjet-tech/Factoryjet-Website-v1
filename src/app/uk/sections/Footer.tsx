import SiteFooter from "@/components/v2/SiteFooter";
import { UK_FOOTER_COLUMNS } from "@/data/ukFooterColumns";

// 2026-10-31: UK pages now render the primary site's footer (SiteFooter, the same
// component as factoryjet.com) with UK links, instead of their own dark footer.
// The old footer's links (18 UK hubs, all 21 UK city roots, London pages, company
// links) all live in src/data/ukFooterColumns.ts. Its retired Clash Display
// wordmark, "AI-Native Web Design" tagline and WhatsApp +91 link are gone.
//
// Kept as a wrapper so the 50+ UK pages and the city template that import this
// file need no change.
export default function Footer() {
  return <SiteFooter locale="gb" linkColumns={UK_FOOTER_COLUMNS} />;
}
