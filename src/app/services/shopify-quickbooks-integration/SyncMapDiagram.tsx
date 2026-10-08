/**
 * SyncMapDiagram, co-located with /services/shopify-quickbooks-integration.
 *
 * A plain inline SVG list of the data Shopify and QuickBooks share, each row
 * tagged with the system that leads it. Orange rows are led by QuickBooks and
 * followed by Shopify. Ink rows are led by Shopify and followed by QuickBooks.
 *
 * This is the map FactoryJet sets up when QuickBooks is the master for items,
 * stock and prices (confirmed by Bhavesh 2026-10-08). The Shopify-led rows and
 * the wholesale invoice row restate Intuit's own help article, read 2026-10-08:
 *   https://quickbooks.intuit.com/learn-support/en-us/help-article/manage-integrations/connect-shopify-quickbooks-online/L1Xv7ZCFB_US_en_US
 *
 * Sized for phones first: the drawing is 300 units wide, so inside the hero
 * card on a 375 px screen it renders at about 0.95 scale and the pill text
 * stays near 9 px. A wider drawing with longer pills shrank that text to 7 px.
 *
 * Pure server component. No client JS, no animation, no gradient, no glow.
 */

type Lead = 'quickbooks' | 'shopify' | 'both';

const GROUPS: ReadonlyArray<{ title: string; lead: Lead; rows: ReadonlyArray<string> }> = [
  { title: 'QUICKBOOKS LEADS', lead: 'quickbooks', rows: ['Items and SKUs', 'Stock counts', 'Prices'] },
  {
    title: 'SHOPIFY LEADS',
    lead: 'shopify',
    rows: ['Orders and refunds', 'Fees and payouts', 'Sales tax collected', 'Customers'],
  },
  { title: 'BOTH WAYS', lead: 'both', rows: ['Wholesale invoice status'] },
];

const INK = '#14110F';
const ORANGE = '#F05A28';
const ORANGE_TEXT = '#B23E13';
const ORANGE_TINT = '#FFF4EE';

const LABEL_H = 22;
const W = 300;
const ROW_H = 34;
const ROW_GAP = 6;
const GROUP_GAP = 10;

const PILL: Record<Lead, { text: string; w: number; fill: string }> = {
  quickbooks: { text: '→ SHOPIFY', w: 78, fill: ORANGE_TEXT },
  shopify: { text: '→ QUICKBOOKS', w: 100, fill: INK },
  both: { text: 'BOTH WAYS', w: 78, fill: INK },
};

type Placed = { kind: 'label'; y: number; text: string; lead: Lead } | { kind: 'row'; y: number; text: string; lead: Lead };

/** Lay the groups out top to bottom once, at module load. */
function place(): { items: Placed[]; height: number } {
  const items: Placed[] = [];
  let y = 0;
  GROUPS.forEach((g, gi) => {
    if (gi > 0) y += GROUP_GAP;
    items.push({ kind: 'label', y, text: g.title, lead: g.lead });
    y += LABEL_H;
    g.rows.forEach((text) => {
      items.push({ kind: 'row', y, text, lead: g.lead });
      y += ROW_H + ROW_GAP;
    });
  });
  return { items, height: y - ROW_GAP };
}

const LAYOUT = place();

export default function SyncMapDiagram() {
  return (
    <svg
      viewBox={`-2 -2 ${W + 4} ${LAYOUT.height + 4}`}
      role="img"
      aria-labelledby="sync-map-title sync-map-desc"
      className="mt-4 h-auto w-full"
    >
      <title id="sync-map-title">Which system leads each kind of data when QuickBooks is the master</title>
      <desc id="sync-map-desc">
        QuickBooks leads items and SKUs, stock counts and prices, and Shopify follows. Shopify leads orders and
        refunds, fees and payouts, sales tax collected and customers, and QuickBooks follows. The paid status of a
        wholesale invoice moves both ways.
      </desc>

      {LAYOUT.items.map((it) => {
        if (it.kind === 'label') {
          return (
            <text
              key={`l-${it.text}`}
              x={0}
              y={it.y + 13}
              className="font-fj-mono"
              fontSize="10"
              fontWeight={700}
              letterSpacing="1"
              fill={it.lead === 'quickbooks' ? ORANGE_TEXT : INK}
            >
              {it.text}
            </text>
          );
        }
        const pill = PILL[it.lead];
        const led = it.lead === 'quickbooks';
        return (
          <g key={`r-${it.text}`}>
            <rect
              x={0}
              y={it.y}
              width={W}
              height={ROW_H}
              rx={10}
              fill={led ? ORANGE_TINT : '#FFFFFF'}
              stroke={led ? ORANGE : INK}
              strokeWidth={1.5}
            />
            <text x={14} y={it.y + 22} className="font-fj-body" fontSize="13" fontWeight={600} fill={INK}>
              {it.text}
            </text>
            <rect x={W - 12 - pill.w} y={it.y + 7} width={pill.w} height={20} rx={10} fill={pill.fill} />
            <text
              x={W - 12 - pill.w / 2}
              y={it.y + 20.5}
              textAnchor="middle"
              className="font-fj-mono"
              fontSize="9.5"
              fontWeight={700}
              letterSpacing="0.5"
              fill="#FFFFFF"
            >
              {pill.text}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
