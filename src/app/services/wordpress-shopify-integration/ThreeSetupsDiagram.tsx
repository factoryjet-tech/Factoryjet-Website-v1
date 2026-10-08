/**
 * ThreeSetupsDiagram, co-located with /services/wordpress-shopify-integration.
 *
 * A plain inline SVG of the three ways WordPress and Shopify fit together:
 *   01  WordPress on the main address, the Shopify store on its own address
 *   02  Shopify products placed inside a WordPress page, paid on Shopify
 *   03  WordPress content moved into Shopify, WordPress switched off
 * Black outline means WordPress. Orange means Shopify.
 *
 * The first setup restates Shopify's subdomain guide and the second its Sell on
 * WordPress guide, both read 2026-10-08:
 *   https://help.shopify.com/en/manual/domains/add-a-domain/connecting-domains/connect-subdomain
 *   https://help.shopify.com/en/manual/online-sales-channels/sell-on-wordpress
 *
 * Sized for phones first: the drawing is 300 units wide, so inside the hero
 * card on a 375 px screen it renders at about 0.95 scale and the 9.5 unit
 * labels stay near 9 px. A wider drawing shrank that text to 7 px on page 1.
 *
 * Pure server component. No client JS, no animation, no gradient, no glow.
 */

const INK = '#14110F';
const MUTED = '#55524E';
const ORANGE = '#F05A28';
const ORANGE_TEXT = '#B23E13';
const ORANGE_TINT = '#FFF4EE';
const BAR = '#E4E2DC';

const W = 300;
const LABEL_H = 22;
const GAP = 16;

/* Vertical layout, top to bottom. Each panel is a label line plus a drawing. */
const P1 = { label: 0, top: LABEL_H, h: 58 };
const P2 = { label: P1.top + P1.h + GAP, top: P1.top + P1.h + GAP + LABEL_H, h: 66, pillGap: 8, pillH: 22 };
const P2_END = P2.top + P2.h + P2.pillGap + P2.pillH;
const P3 = { label: P2_END + GAP, top: P2_END + GAP + LABEL_H, h: 58 };
const HEIGHT = P3.top + P3.h;

function PanelLabel({ y, n, text }: { y: number; n: string; text: string }) {
  return (
    <text x={0} y={y + 13} className="font-fj-mono" fontSize="10" fontWeight={700} letterSpacing="0.8" fill={INK}>
      <tspan fill={ORANGE_TEXT}>{n}</tspan>
      {`  ${text}`}
    </text>
  );
}

export default function ThreeSetupsDiagram() {
  return (
    <svg
      viewBox={`-2 -2 ${W + 4} ${HEIGHT + 4}`}
      role="img"
      aria-labelledby="three-setups-title three-setups-desc"
      className="mt-4 h-auto w-full"
    >
      <title id="three-setups-title">Three ways WordPress and Shopify fit together</title>
      <desc id="three-setups-desc">
        First, WordPress stays on the main address and the Shopify store sits on its own address, joined by links.
        Second, a Shopify product is placed inside a WordPress page and the buyer pays on Shopify checkout. Third,
        WordPress pages and posts are moved into Shopify and WordPress is switched off.
      </desc>

      {/* 01 Two sites, two addresses */}
      <PanelLabel y={P1.label} n="01" text="TWO SITES, TWO ADDRESSES" />
      <rect x={0} y={P1.top} width={128} height={P1.h} rx={10} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} />
      <text x={12} y={P1.top + 25} className="font-fj-body" fontSize="13" fontWeight={600} fill={INK}>
        WordPress
      </text>
      <text x={12} y={P1.top + 42} className="font-fj-mono" fontSize="9.5" fill={MUTED}>
        yourname.com
      </text>
      <line x1={133} y1={P1.top + 29} x2={167} y2={P1.top + 29} stroke={INK} strokeWidth={1.5} />
      <path d={`M138 ${P1.top + 24.5}L133 ${P1.top + 29}L138 ${P1.top + 33.5}`} fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M162 ${P1.top + 24.5}L167 ${P1.top + 29}L162 ${P1.top + 33.5}`} fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <text x={150} y={P1.top + 20} textAnchor="middle" className="font-fj-mono" fontSize="9.5" fontWeight={700} fill={INK}>
        links
      </text>
      <rect x={172} y={P1.top} width={128} height={P1.h} rx={10} fill={ORANGE_TINT} stroke={ORANGE} strokeWidth={1.5} />
      <text x={184} y={P1.top + 25} className="font-fj-body" fontSize="13" fontWeight={600} fill={INK}>
        Shopify store
      </text>
      <text x={184} y={P1.top + 42} className="font-fj-mono" fontSize="9.5" fill={ORANGE_TEXT}>
        shop.yourname.com
      </text>

      {/* 02 Products inside WordPress pages */}
      <PanelLabel y={P2.label} n="02" text="PRODUCTS INSIDE WORDPRESS PAGES" />
      <rect x={0} y={P2.top} width={W} height={P2.h} rx={10} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} />
      <text x={12} y={P2.top + 22} className="font-fj-body" fontSize="13" fontWeight={600} fill={INK}>
        WordPress page
      </text>
      <rect x={12} y={P2.top + 32} width={112} height={6} rx={3} fill={BAR} />
      <rect x={12} y={P2.top + 43} width={96} height={6} rx={3} fill={BAR} />
      <rect x={12} y={P2.top + 54} width={76} height={6} rx={3} fill={BAR} />
      <rect x={150} y={P2.top + 10} width={138} height={46} rx={8} fill={ORANGE_TINT} stroke={ORANGE} strokeWidth={1.5} />
      <text x={160} y={P2.top + 29} className="font-fj-body" fontSize="12" fontWeight={600} fill={INK}>
        Shopify product
      </text>
      <rect x={160} y={P2.top + 35} width={46} height={15} rx={7.5} fill={ORANGE_TEXT} />
      <text x={183} y={P2.top + 45.5} textAnchor="middle" className="font-fj-mono" fontSize="9.5" fontWeight={700} fill="#FFFFFF">
        BUY
      </text>
      <line x1={219} y1={P2.top + 56} x2={219} y2={P2.top + P2.h + P2.pillGap - 1} stroke={ORANGE_TEXT} strokeWidth={1.5} />
      <path
        d={`M214.5 ${P2.top + P2.h + P2.pillGap - 6}L219 ${P2.top + P2.h + P2.pillGap - 1}L223.5 ${P2.top + P2.h + P2.pillGap - 6}`}
        fill="none"
        stroke={ORANGE_TEXT}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x={138} y={P2.top + P2.h + P2.pillGap} width={162} height={P2.pillH} rx={11} fill={ORANGE_TEXT} />
      <text
        x={219}
        y={P2.top + P2.h + P2.pillGap + 14.5}
        textAnchor="middle"
        className="font-fj-mono"
        fontSize="9.5"
        fontWeight={700}
        letterSpacing="0.5"
        fill="#FFFFFF"
      >
        PAYS ON SHOPIFY CHECKOUT
      </text>

      {/* 03 Content moved into Shopify */}
      <PanelLabel y={P3.label} n="03" text="CONTENT MOVED INTO SHOPIFY" />
      <rect x={0} y={P3.top} width={96} height={P3.h} rx={10} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} strokeDasharray="5 4" />
      <text x={12} y={P3.top + 25} className="font-fj-body" fontSize="13" fontWeight={600} fill={MUTED}>
        WordPress
      </text>
      <text x={12} y={P3.top + 42} className="font-fj-mono" fontSize="9.5" fill={MUTED}>
        switched off
      </text>
      <line x1={101} y1={P3.top + 29} x2={135} y2={P3.top + 29} stroke={ORANGE_TEXT} strokeWidth={1.5} />
      <path d={`M130 ${P3.top + 24.5}L135 ${P3.top + 29}L130 ${P3.top + 33.5}`} fill="none" stroke={ORANGE_TEXT} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <text x={118} y={P3.top + 20} textAnchor="middle" className="font-fj-mono" fontSize="9.5" fontWeight={700} fill={ORANGE_TEXT}>
        moved
      </text>
      <rect x={140} y={P3.top} width={160} height={P3.h} rx={10} fill={ORANGE_TINT} stroke={ORANGE} strokeWidth={1.5} />
      <text x={152} y={P3.top + 25} className="font-fj-body" fontSize="13" fontWeight={600} fill={INK}>
        Shopify
      </text>
      <text x={152} y={P3.top + 42} className="font-fj-mono" fontSize="9.5" fill={ORANGE_TEXT}>
        pages, posts, products
      </text>
    </svg>
  );
}
