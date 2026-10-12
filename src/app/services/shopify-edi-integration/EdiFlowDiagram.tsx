/**
 * EdiFlowDiagram, co-located with /services/shopify-edi-integration.
 *
 * A plain inline SVG list of the EDI documents a Shopify seller meets first,
 * each row tagged with the way it travels. The orange row is sent by the buyer
 * (a retailer or a business customer) and lands in Shopify. Ink rows are sent
 * from the store back to the buyer. The last row travels both ways.
 *
 * Document numbers and names are X12's, read on 2026-10-11:
 *   https://x12.org/products/transaction-sets
 * "Receipt" is our plain-word label for the 997 Functional Acknowledgment.
 *
 * Sized for phones first: the drawing is 300 units wide, so inside the hero
 * card on a 375 px screen the row text stays near 12 px and the pill text
 * near 9 px.
 *
 * Pure server component. No client JS, no animation, no gradient, no glow.
 */

type Flow = 'in' | 'out' | 'both';

const GROUPS: ReadonlyArray<{ title: string; flow: Flow; rows: ReadonlyArray<string> }> = [
  { title: 'SENT BY THE BUYER', flow: 'in', rows: ['850 Purchase order'] },
  { title: 'SENT FROM YOUR STORE', flow: 'out', rows: ['855 Acknowledgment', '856 Ship notice', '810 Invoice'] },
  { title: 'BOTH WAYS', flow: 'both', rows: ['997 Receipt'] },
];

const INK = '#14110F';
const ORANGE = '#F05A28';
const ORANGE_TEXT = '#B23E13';
const ORANGE_TINT = '#FFF4EE';

const W = 300;
const LABEL_H = 22;
const ROW_H = 34;
const ROW_GAP = 6;
const GROUP_GAP = 10;
/* Each row adds a gap below it. The last one is taken back off the height. */
const TRAILING_GAP = -ROW_GAP;

/* Pill geometry is written out as plain numbers: x is the left edge, w the
   width, mid the centre used to anchor the label. Right edge is 288 for all. */
const PILL: Record<Flow, { text: string; x: number; w: number; mid: number; fill: string }> = {
  in: { text: '→ SHOPIFY', x: 194, w: 94, mid: 241, fill: ORANGE_TEXT },
  out: { text: '→ BUYER', x: 206, w: 82, mid: 247, fill: INK },
  both: { text: 'BOTH WAYS', x: 194, w: 94, mid: 241, fill: INK },
};

type Placed = { kind: 'label' | 'row'; y: number; text: string; flow: Flow };

/** Lay the groups out top to bottom once, at module load. */
function place(): { items: Placed[]; height: number } {
  const items: Placed[] = [];
  let y = 0;
  GROUPS.forEach((g, gi) => {
    if (gi > 0) y += GROUP_GAP;
    items.push({ kind: 'label', y, text: g.title, flow: g.flow });
    y += LABEL_H;
    g.rows.forEach((text) => {
      items.push({ kind: 'row', y, text, flow: g.flow });
      y += ROW_H + ROW_GAP;
    });
  });
  return { items, height: y + TRAILING_GAP };
}

const LAYOUT = place();

export default function EdiFlowDiagram() {
  return (
    <svg
      viewBox={`-2 -2 ${W + 4} ${LAYOUT.height + 4}`}
      role="img"
      aria-labelledby="edi-flow-title edi-flow-desc"
      className="mt-4 h-auto w-full"
    >
      <title id="edi-flow-title">Which way each EDI document travels between a buyer and a Shopify store</title>
      <desc id="edi-flow-desc">
        The buyer sends the 850 purchase order, which lands in Shopify. The store sends back the 855 acknowledgment,
        the 856 ship notice and the 810 invoice. The 997 receipt travels both ways.
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
              fill={it.flow === 'in' ? ORANGE_TEXT : INK}
            >
              {it.text}
            </text>
          );
        }
        const pill = PILL[it.flow];
        const inbound = it.flow === 'in';
        return (
          <g key={`r-${it.text}`}>
            <rect
              x={0}
              y={it.y}
              width={W}
              height={ROW_H}
              rx={10}
              fill={inbound ? ORANGE_TINT : '#FFFFFF'}
              stroke={inbound ? ORANGE : INK}
              strokeWidth={1.5}
            />
            <text x={14} y={it.y + 22} className="font-fj-body" fontSize="13" fontWeight={600} fill={INK}>
              {it.text}
            </text>
            <rect x={pill.x} y={it.y + 7} width={pill.w} height={20} rx={10} fill={pill.fill} />
            <text
              x={pill.mid}
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
