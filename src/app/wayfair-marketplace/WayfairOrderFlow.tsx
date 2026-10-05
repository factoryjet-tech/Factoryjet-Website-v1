/**
 * WayfairOrderFlow: the one diagram on /wayfair-marketplace.
 *
 * Inline SVG, no image file, no client JS. It shows the five hand-offs in a
 * Wayfair drop-ship order: the stock feed going up to Wayfair, the purchase
 * order coming down, the order reaching the warehouse, the parcel leaving, and
 * the ship notice going back. Orange lines are data links (the part FactoryJet
 * builds). The dashed dark line is the physical parcel.
 *
 * Every label is a fact from Wayfair's own supplier pages, read 2026-10-05:
 *   - purchase order sent to the supplier's warehouse, supplier picks and packs:
 *     https://sell.wayfair.com/start-beginners-guide ("What is drop-shipping?")
 *   - Wayfair covers shipping; carriers are FedEx small parcel, LTL, White Glove:
 *     same page ("What is the base cost?", "Do I pay for shipping?")
 *   - EDI or API for orders, inventory and tracking:
 *     https://sell.wayfair.com/onboarding-checklist ("Operations & Integration")
 *
 * viewBox is 360 wide on purpose. The hero column is about 300px on a phone, so
 * a wider drawing would scale the 12px labels below a readable size.
 *
 * Fonts come from the site's Tailwind font utilities (font-fj-display,
 * font-fj-mono) set as classes on the SVG text, the same tokens the rest of the
 * page uses.
 *
 * Pure server component.
 */

const INK = '#14110F';
const BODY = '#46403B';
const LINE = '#E7DED6';
const ORANGE = '#F05A28';
const ORANGE_DARK = '#B23E13';
const TINT = '#FFF8F5';

type FlowNode = { y: number; title: string; sub: string; highlight?: boolean };

const NODES: ReadonlyArray<FlowNode> = [
  { y: 12, title: 'Wayfair', sub: 'Shopper places an order' },
  { y: 132, title: 'Your store or ERP', sub: 'Connector: EDI or API', highlight: true },
  { y: 252, title: 'Your warehouse or 3PL', sub: 'Picks, packs, labels' },
  { y: 372, title: "The shopper's home", sub: 'FedEx, LTL, White Glove' },
];

function StepBadge({ cx, cy, n, dark = false }: { cx: number; cy: number; n: number; dark?: boolean }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={9} fill={dark ? INK : ORANGE_DARK} />
      <text
        x={cx}
        y={cy + 3.6}
        textAnchor="middle"
        fontSize={10.5}
        fontWeight={700}
        fill="#FFFFFF"
        className="font-fj-mono"
      >
        {n}
      </text>
    </g>
  );
}

export default function WayfairOrderFlow() {
  return (
    <figure className="rounded-2xl border border-fj-neutral-200 bg-white p-5 sm:p-6">
      <svg
        viewBox="0 0 360 480"
        role="img"
        aria-labelledby="wf-flow-title wf-flow-desc"
        className="mx-auto h-auto w-full max-w-[400px]"
      >
        <title id="wf-flow-title">How a Wayfair order moves between Wayfair, your store or ERP, and your warehouse</title>
        <desc id="wf-flow-desc">
          Your stock feed tells Wayfair what is available. A shopper orders and Wayfair sends a purchase order to
          your store or ERP, which passes it to your warehouse or 3PL. The parcel ships to the shopper, Wayfair pays
          the carrier, and a ship notice with tracking goes back to Wayfair.
        </desc>

        <defs>
          <marker id="wf-arrow-orange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M1 1 L9 5 L1 9 Z" fill={ORANGE} />
          </marker>
          <marker id="wf-arrow-ink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M1 1 L9 5 L1 9 Z" fill={INK} />
          </marker>
        </defs>

        {/* Return paths, drawn first so the node cards sit on top of the line ends */}
        {/* 1. Stock feed: store or ERP up to Wayfair */}
        <path d="M218 163 H262 V36 H225" fill="none" stroke={ORANGE} strokeWidth={2} strokeLinejoin="round" markerEnd="url(#wf-arrow-orange)" />
        {/* 5. Ship notice and tracking: warehouse up to Wayfair */}
        <path d="M218 283 H336 V24 H225" fill="none" stroke={ORANGE} strokeWidth={2} strokeLinejoin="round" markerEnd="url(#wf-arrow-orange)" />

        {/* Downward hand-offs */}
        <line x1={36} y1={78} x2={36} y2={125} stroke={ORANGE} strokeWidth={2} markerEnd="url(#wf-arrow-orange)" />
        <line x1={36} y1={198} x2={36} y2={245} stroke={ORANGE} strokeWidth={2} markerEnd="url(#wf-arrow-orange)" />
        <line x1={36} y1={318} x2={36} y2={365} stroke={INK} strokeWidth={2} strokeDasharray="5 4" markerEnd="url(#wf-arrow-ink)" />

        {/* Node cards */}
        {NODES.map((node) => (
          <g key={node.title}>
            <rect
              x={12}
              y={node.y}
              width={206}
              height={62}
              rx={12}
              fill={node.highlight ? TINT : '#FFFFFF'}
              stroke={node.highlight ? ORANGE : LINE}
              strokeWidth={node.highlight ? 1.75 : 1.25}
            />
            <text x={26} y={node.y + 27} fontSize={15} fontWeight={800} fill={INK} className="font-fj-display" letterSpacing="-0.01em">
              {node.title}
            </text>
            <text x={26} y={node.y + 46} fontSize={12} fill={node.highlight ? ORANGE_DARK : BODY} className="font-fj-mono">
              {node.sub}
            </text>
          </g>
        ))}

        {/* Labels for the downward hand-offs */}
        <StepBadge cx={58} cy={103} n={2} />
        <text x={72} y={107} fontSize={12} fill={ORANGE_DARK} className="font-fj-mono">
          Purchase order
        </text>

        <StepBadge cx={58} cy={223} n={3} />
        <text x={72} y={227} fontSize={12} fill={ORANGE_DARK} className="font-fj-mono">
          Order to warehouse
        </text>

        <StepBadge cx={58} cy={343} n={4} dark />
        <text x={72} y={347} fontSize={12} fill={INK} className="font-fj-mono">
          Parcel, Wayfair pays carrier
        </text>

        {/* Labels for the return paths */}
        <StepBadge cx={279} cy={88} n={1} />
        <text x={270} y={111} fontSize={12} fill={ORANGE_DARK} className="font-fj-mono">
          Stock
        </text>
        <text x={270} y={125} fontSize={12} fill={ORANGE_DARK} className="font-fj-mono">
          feed
        </text>

        <StepBadge cx={237} cy={207} n={5} />
        <text x={228} y={229} fontSize={12} fill={ORANGE_DARK} className="font-fj-mono">
          Ship notice
        </text>
        <text x={228} y={243} fontSize={12} fill={ORANGE_DARK} className="font-fj-mono">
          and tracking
        </text>

        {/* Legend */}
        <line x1={12} y1={462} x2={40} y2={462} stroke={ORANGE} strokeWidth={2} />
        <text x={48} y={466} fontSize={11} fill={BODY} className="font-fj-mono">
          Data link we build
        </text>
        <line x1={196} y1={462} x2={224} y2={462} stroke={INK} strokeWidth={2} strokeDasharray="5 4" />
        <text x={232} y={466} fontSize={11} fill={BODY} className="font-fj-mono">
          Physical parcel
        </text>
      </svg>

      <figcaption className="mt-4 border-t border-fj-neutral-200 pt-4 font-fj-body text-sm leading-relaxed text-fj-neutral-600">
        One Wayfair order, five hand-offs. FactoryJet builds and watches the four data links.
      </figcaption>
    </figure>
  );
}
