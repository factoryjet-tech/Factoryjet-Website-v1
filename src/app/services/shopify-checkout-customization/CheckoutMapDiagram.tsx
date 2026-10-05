/**
 * CheckoutMapDiagram, co-located with /services/shopify-checkout-customization.
 *
 * A plain inline SVG wireframe of Shopify checkout that tags each part with the
 * plan it needs. Orange rows are the places where a store's own blocks need
 * Shopify Plus. Ink rows are open on the Basic plan and higher.
 *
 * Plan facts come from Shopify's own availability table, fetched 2026-10-05:
 *   https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations
 *   https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/checkout-apps
 *
 * Pure server component. No client JS, no animation, no gradient, no glow.
 */

type Row = { y: number; label: string; plus: boolean };

const ROW_H = 46;

const ROWS: ReadonlyArray<Row> = [
  { y: 0, label: 'Header: logo, colors, fonts', plus: false },
  { y: 54, label: 'Contact: custom fields, notices', plus: true },
  { y: 108, label: 'Delivery: date picker, notes', plus: true },
  { y: 162, label: 'Payment: trust badges, notes', plus: true },
  { y: 216, label: 'Order summary: upsell offers', plus: true },
];

const INK = '#14110F';
const ORANGE = '#F05A28';
const ORANGE_TEXT = '#B23E13';
const ORANGE_TINT = '#FFF4EE';

function Pill({ x, y, plus }: { x: number; y: number; plus: boolean }) {
  const w = plus ? 46 : 98;
  return (
    <g>
      <rect x={x - w} y={y} width={w} height={20} rx={10} fill={plus ? ORANGE_TEXT : INK} />
      <text
        x={x - w / 2}
        y={y + 13.5}
        textAnchor="middle"
        className="font-fj-mono"
        fontSize="9.5"
        fontWeight={700}
        letterSpacing="0.6"
        fill="#FFFFFF"
      >
        {plus ? 'PLUS' : 'BASIC AND UP'}
      </text>
    </g>
  );
}

export default function CheckoutMapDiagram() {
  return (
    <svg
      viewBox="-2 -2 364 416"
      role="img"
      aria-labelledby="checkout-map-title checkout-map-desc"
      className="mt-4 h-auto w-full"
    >
      <title id="checkout-map-title">Which parts of Shopify checkout need Shopify Plus</title>
      <desc id="checkout-map-desc">
        A wireframe of Shopify checkout. The header with logo, colors and fonts is open on the Basic plan and
        higher. Custom blocks in the contact, delivery, payment and order summary areas need Shopify Plus. The
        Thank you page and the Order status page are open on the Basic plan and higher.
      </desc>

      {ROWS.map((r) => (
        <g key={r.label}>
          <rect
            x={0}
            y={r.y}
            width={360}
            height={ROW_H}
            rx={10}
            fill={r.plus ? ORANGE_TINT : '#FFFFFF'}
            stroke={r.plus ? ORANGE : INK}
            strokeWidth={1.5}
          />
          <text x={14} y={r.y + 28} className="font-fj-body" fontSize="13" fontWeight={600} fill={INK}>
            {r.label}
          </text>
          <Pill x={346} y={r.y + 13} plus={r.plus} />
        </g>
      ))}

      {/* Pay now button */}
      <rect x={0} y={272} width={360} height={40} rx={10} fill={INK} />
      <text x={180} y={297} textAnchor="middle" className="font-fj-body" fontSize="13" fontWeight={600} fill="#FFFFFF">
        Pay now
      </text>

      {/* Order placed, on to the after-purchase pages */}
      <path d="M180 318v16M174 329l6 6 6-6" fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />

      <rect x={0} y={344} width={174} height={66} rx={10} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} />
      <text x={14} y={368} className="font-fj-body" fontSize="13" fontWeight={600} fill={INK}>
        Thank you page
      </text>
      <Pill x={112} y={378} plus={false} />

      <rect x={186} y={344} width={174} height={66} rx={10} fill="#FFFFFF" stroke={INK} strokeWidth={1.5} />
      <text x={200} y={368} className="font-fj-body" fontSize="13" fontWeight={600} fill={INK}>
        Order status page
      </text>
      <Pill x={298} y={378} plus={false} />
    </svg>
  );
}
