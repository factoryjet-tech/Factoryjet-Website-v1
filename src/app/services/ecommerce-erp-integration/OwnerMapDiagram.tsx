/**
 * OwnerMapDiagram, co-located with /services/ecommerce-erp-integration.
 *
 * A plain inline SVG table of the eight records a store and an ERP share. Each
 * row carries two dots, one under STORE and one under ERP. The filled dot is
 * the owner. The arrow runs from the owner to the system that follows it.
 *
 * This is the starting map FactoryJet proposes on a scoping call. It is not a
 * statistic and it is not a claim about any one connector: the page text shows
 * where makers' own connectors differ from it (Odoo's Shopify Connector, for
 * one, brings products from Shopify into Odoo).
 *
 * Sized for phones first. The drawing is 320 units wide, so inside the hero
 * card on a 375 px screen it renders at about 0.9 scale and the row labels
 * stay near 11 px.
 *
 * Pure server component. No client JS, no animation, no gradient, no glow.
 */

type Owner = 'erp' | 'store' | 'shared';

const RECORDS: ReadonlyArray<{ label: string; owner: Owner }> = [
  { label: 'Products and SKUs', owner: 'erp' },
  { label: 'Prices', owner: 'erp' },
  { label: 'Stock on hand', owner: 'erp' },
  { label: 'Orders', owner: 'store' },
  { label: 'Customers', owner: 'shared' },
  { label: 'Shipments', owner: 'erp' },
  { label: 'Refunds', owner: 'store' },
  { label: 'Sales tax', owner: 'store' },
];

const INK = '#14110F';
const ORANGE = '#F05A28';
const ORANGE_TEXT = '#B23E13';
const ORANGE_TINT = '#FFF4EE';

const W = 320;
const HEAD_H = 22;
const ROW_H = 32;
const ROW_GAP = 6;
const STORE_X = 236;
const ERP_X = 298;
const DOT_R = 7;
const H = HEAD_H + RECORDS.length * ROW_H + (RECORDS.length - 1) * ROW_GAP;

/** Arrow between the two dots. `to` is the system that follows. */
function Arrow({ y, to }: { y: number; to: 'store' | 'erp' | 'both' }) {
  const left = STORE_X + DOT_R + 5;
  const right = ERP_X - DOT_R - 5;
  const stroke = to === 'store' ? ORANGE_TEXT : INK;
  return (
    <g stroke={stroke} strokeWidth={1.6} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d={`M${left} ${y}H${right}`} />
      {(to === 'store' || to === 'both') && <path d={`M${left + 5} ${y - 4}L${left} ${y}L${left + 5} ${y + 4}`} />}
      {(to === 'erp' || to === 'both') && <path d={`M${right - 5} ${y - 4}L${right} ${y}L${right - 5} ${y + 4}`} />}
    </g>
  );
}

export default function OwnerMapDiagram() {
  return (
    <svg
      viewBox={`-2 -2 ${W + 4} ${H + 4}`}
      role="img"
      aria-labelledby="owner-map-title owner-map-desc"
      className="mt-4 h-auto w-full"
    >
      <title id="owner-map-title">Which system owns each record a store and an ERP share</title>
      <desc id="owner-map-desc">
        The ERP owns products and SKUs, prices, stock on hand and shipments, and the store follows. The store owns
        orders, refunds and sales tax, and the ERP follows. Customers are shared: shoppers start in the store and
        trade accounts start in the ERP.
      </desc>

      <text x={0} y={13} className="font-fj-mono" fontSize="9.5" fontWeight={700} letterSpacing="1" fill={INK}>
        RECORD
      </text>
      <text
        x={STORE_X}
        y={13}
        textAnchor="middle"
        className="font-fj-mono"
        fontSize="9.5"
        fontWeight={700}
        letterSpacing="1"
        fill={INK}
      >
        STORE
      </text>
      <text
        x={ERP_X}
        y={13}
        textAnchor="middle"
        className="font-fj-mono"
        fontSize="9.5"
        fontWeight={700}
        letterSpacing="1"
        fill={ORANGE_TEXT}
      >
        ERP
      </text>

      {RECORDS.map((r, i) => {
        const y = HEAD_H + i * (ROW_H + ROW_GAP);
        const mid = y + ROW_H / 2;
        const erpOwns = r.owner === 'erp' || r.owner === 'shared';
        const storeOwns = r.owner === 'store' || r.owner === 'shared';
        return (
          <g key={r.label}>
            <rect
              x={0}
              y={y}
              width={W}
              height={ROW_H}
              rx={9}
              fill={r.owner === 'erp' ? ORANGE_TINT : '#FFFFFF'}
              stroke={r.owner === 'erp' ? ORANGE : INK}
              strokeWidth={1.5}
            />
            <text x={13} y={mid + 4.5} className="font-fj-body" fontSize="12.5" fontWeight={600} fill={INK}>
              {r.label}
            </text>
            <circle
              cx={STORE_X}
              cy={mid}
              r={DOT_R}
              fill={storeOwns ? INK : '#FFFFFF'}
              stroke={INK}
              strokeWidth={1.5}
            />
            <circle
              cx={ERP_X}
              cy={mid}
              r={DOT_R}
              fill={erpOwns ? ORANGE : '#FFFFFF'}
              stroke={erpOwns ? ORANGE_TEXT : INK}
              strokeWidth={1.5}
            />
            <Arrow y={mid} to={r.owner === 'erp' ? 'store' : r.owner === 'store' ? 'erp' : 'both'} />
          </g>
        );
      })}
    </svg>
  );
}
