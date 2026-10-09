/**
 * ConnectorPathDiagram, co-located with /services/netsuite-ai-agents.
 *
 * A plain inline SVG of the four things every request passes through on its
 * way into a NetSuite account, as Oracle's help center describes them
 * (read 2026-10-09):
 *   01  The AI client or agent signs in with OAuth 2.0
 *   02  A NetSuite role made for it, never Administrator
 *   03  The tools: Oracle's MCP Standard Tools, or custom tools
 *   04  Your records, where a draft waits for a person to approve it
 * Black outline means your NetSuite account: the role, the tools, the records.
 * Orange means the agent we build.
 *
 * Same sizing as AgentLoopDiagram on /services/erp-ai-agents: the drawing is
 * 300 units wide, so inside the hero card on a 375 px screen the 9.5 unit
 * labels stay near 9 px.
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
  { n: '01', label: 'THE AGENT', title: 'Reads the bill, RFQ or order', note: 'signs in with OAuth 2.0', agent: true },
  { n: '02', label: 'A NETSUITE ROLE', title: 'Made for the agent', note: 'never the Administrator role', dashed: true },
  { n: '03', label: 'THE TOOLS', title: 'Records, reports, searches', note: 'Oracle’s tools or custom ones' },
  { n: '04', label: 'YOUR RECORDS', title: 'A draft waits for approval', note: 'every call is in the log' },
];

export default function ConnectorPathDiagram() {
  return (
    <svg
      viewBox={`-2 -2 ${W + 4} ${HEIGHT + 4}`}
      role="img"
      aria-labelledby="ns-path-title ns-path-desc"
      className="mt-4 h-auto w-full"
    >
      <title id="ns-path-title">How an AI agent reaches a NetSuite account</title>
      <desc id="ns-path-desc">
        The agent reads a bill, an RFQ or an order and signs in with OAuth 2.0. It works under a NetSuite role made
        for it, never the Administrator role. It uses tools for records, reports and saved searches. A draft then
        waits in NetSuite for a person to approve it, and every call is logged.
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
