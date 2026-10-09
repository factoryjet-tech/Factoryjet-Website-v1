/**
 * AgentLoopDiagram, co-located with /services/erp-ai-agents.
 *
 * A plain inline SVG of the four steps every agent on the page follows:
 *   01  A request arrives (an RFQ, a purchase order, an invoice)
 *   02  The agent reads it and looks up the ERP
 *   03  A person approves or edits the draft
 *   04  The record is posted to the ERP through its own API
 * Black outline means your side: the inbox, the person, the ERP.
 * Orange means the agent we build.
 *
 * Sized for phones first, like ThreeSetupsDiagram on the WordPress Shopify
 * page: the drawing is 300 units wide, so inside the hero card on a 375 px
 * screen the 9.5 unit labels stay near 9 px.
 *
 * Pure server component. No client JS, no animation, no gradient, no glow.
 */

const INK = '#14110F';
const MUTED = '#55524E';
const ORANGE = '#F05A28';
const ORANGE_TEXT = '#B23E13';
const ORANGE_TINT = '#FFF4EE';

const W = 300;
const LABEL_H = 22;
const BOX_H = 54;
const GAP = 18;
const STEP = LABEL_H + BOX_H + GAP;
const HEIGHT = STEP * 4 - GAP;

type Step = {
  n: string;
  label: string;
  title: string;
  note: string;
  agent?: boolean;
  dashed?: boolean;
};

const STEPS: ReadonlyArray<Step> = [
  { n: '01', label: 'A REQUEST ARRIVES', title: 'Email, PDF or chat', note: 'an RFQ, a purchase order, an invoice' },
  { n: '02', label: 'THE AGENT', title: 'Reads it, looks up your ERP', note: 'price, stock, customer terms', agent: true },
  { n: '03', label: 'A PERSON', title: 'Approves or edits the draft', note: 'nothing posts before this', dashed: true },
  { n: '04', label: 'YOUR ERP', title: 'The record is posted', note: 'through the ERP’s own API' },
];

export default function AgentLoopDiagram() {
  return (
    <svg
      viewBox={`-2 -2 ${W + 4} ${HEIGHT + 4}`}
      role="img"
      aria-labelledby="agent-loop-title agent-loop-desc"
      className="mt-4 h-auto w-full"
    >
      <title id="agent-loop-title">How an AI agent works with an ERP</title>
      <desc id="agent-loop-desc">
        A request arrives by email, PDF or chat. The agent reads it and looks up price, stock and customer terms in
        the ERP. A person approves or edits the draft. The record is then posted to the ERP through its own API.
      </desc>

      {STEPS.map((s, i) => {
        const y = i * STEP;
        const top = y + LABEL_H;
        const stroke = s.agent ? ORANGE : INK;
        return (
          <g key={s.n}>
            <text x={0} y={y + 13} className="font-fj-mono" fontSize="10" fontWeight={700} letterSpacing="0.8" fill={INK}>
              <tspan fill={ORANGE_TEXT}>{s.n}</tspan>
              {`  ${s.label}`}
            </text>
            <rect
              x={0}
              y={top}
              width={W}
              height={BOX_H}
              rx={10}
              fill={s.agent ? ORANGE_TINT : '#FFFFFF'}
              stroke={stroke}
              strokeWidth={1.5}
              strokeDasharray={s.dashed ? '5 4' : undefined}
            />
            <text x={14} y={top + 23} className="font-fj-body" fontSize="13" fontWeight={600} fill={INK}>
              {s.title}
            </text>
            <text x={14} y={top + 40} className="font-fj-mono" fontSize="9.5" fill={s.agent ? ORANGE_TEXT : MUTED}>
              {s.note}
            </text>
            {i < STEPS.length - 1 ? (
              <>
                <line x1={W - 28} y1={top + BOX_H + 2} x2={W - 28} y2={top + BOX_H + GAP + LABEL_H - 3} stroke={ORANGE_TEXT} strokeWidth={1.5} />
                <path
                  d={`M${W - 32.5} ${top + BOX_H + GAP + LABEL_H - 8}L${W - 28} ${top + BOX_H + GAP + LABEL_H - 3}L${W - 23.5} ${top + BOX_H + GAP + LABEL_H - 8}`}
                  fill="none"
                  stroke={ORANGE_TEXT}
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
