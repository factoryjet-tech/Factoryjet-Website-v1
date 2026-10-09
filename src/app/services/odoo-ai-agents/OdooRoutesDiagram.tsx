/**
 * OdooRoutesDiagram, co-located with /services/odoo-ai-agents.
 *
 * A plain inline SVG of the three ways an AI agent can reach an Odoo database,
 * and the one place all three end up:
 *   01  Odoo's own AI: Ask AI and the agents in the AI app (Odoo 19 and 20)
 *   02  Odoo's MCP server: your own AI client connects (Odoo 20, Online 19.4)
 *   03  A custom agent: reads what arrives from outside, uses the JSON-2 API
 *   04  Your Odoo database: access rights first, then a person confirms
 * Black outline means what Odoo ships. Orange means the agent we build.
 * The three routes are alternatives, so no arrow joins them to each other.
 * One arrow runs from the group down to the database.
 *
 * Sized for phones first, like AgentLoopDiagram on the ERP AI agents page:
 * the drawing is 300 units wide, so inside the hero card on a 375 px screen
 * the 9.5 unit labels stay near 9 px.
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
const GAP = 8;
const ARROW_GAP = 22;
const STEP = LABEL_H + BOX_H + GAP;
const HEIGHT = STEP * 3 - GAP + ARROW_GAP + LABEL_H + BOX_H;

type Route = {
  n: string;
  label: string;
  title: string;
  note: string;
  agent?: boolean;
  dashed?: boolean;
};

const ROUTES: ReadonlyArray<Route> = [
  { n: '01', label: 'ODOO’S OWN AI', title: 'Ask AI and the agents in its AI app', note: 'built into Odoo 19 and Odoo 20' },
  { n: '02', label: 'ODOO’S MCP SERVER', title: 'Your own AI client connects', note: 'Odoo 20, and Odoo Online from 19.4' },
  { n: '03', label: 'A CUSTOM AGENT', title: 'Reads what arrives from outside', note: 'JSON-2 API, its own user, draft first', agent: true },
];

const DATABASE: Route = {
  n: '04',
  label: 'YOUR ODOO DATABASE',
  title: 'Access rights, then a person',
  note: 'nothing is confirmed before this',
  dashed: true,
};

function RouteBox({ r, y }: { r: Route; y: number }) {
  const top = y + LABEL_H;
  return (
    <g>
      <text x={0} y={y + 13} className="font-fj-mono" fontSize="10" fontWeight={700} letterSpacing="0.8" fill={INK}>
        <tspan fill={ORANGE_TEXT}>{r.n}</tspan>
        {`  ${r.label}`}
      </text>
      <rect
        x={0}
        y={top}
        width={W}
        height={BOX_H}
        rx={10}
        fill={r.agent ? ORANGE_TINT : '#FFFFFF'}
        stroke={r.agent ? ORANGE : INK}
        strokeWidth={1.5}
        strokeDasharray={r.dashed ? '5 4' : undefined}
      />
      <text x={14} y={top + 23} className="font-fj-body" fontSize="13" fontWeight={600} fill={INK}>
        {r.title}
      </text>
      <text x={14} y={top + 40} className="font-fj-mono" fontSize="9.5" fill={r.agent ? ORANGE_TEXT : MUTED}>
        {r.note}
      </text>
    </g>
  );
}

export default function OdooRoutesDiagram() {
  const groupBottom = STEP * 3 - GAP;
  const dbY = groupBottom + ARROW_GAP;
  const arrowX = W - 28;
  const arrowTip = dbY + LABEL_H - 3;
  return (
    <svg
      viewBox={`-2 -2 ${W + 4} ${HEIGHT + 4}`}
      role="img"
      aria-labelledby="odoo-routes-title odoo-routes-desc"
      className="mt-4 h-auto w-full"
    >
      <title id="odoo-routes-title">Three ways an AI agent can reach an Odoo database</title>
      <desc id="odoo-routes-desc">
        Route one is the AI that Odoo ships: Ask AI and the agents in its AI app. Route two is the MCP server in Odoo
        20, which lets your own AI client connect. Route three is a custom agent that reads what arrives from outside
        and uses the JSON-2 API under its own user. All three end at your Odoo database, where access rights apply and
        a person confirms the record.
      </desc>

      {ROUTES.map((r, i) => (
        <RouteBox key={r.n} r={r} y={i * STEP} />
      ))}

      <line x1={arrowX} y1={groupBottom + 2} x2={arrowX} y2={arrowTip} stroke={ORANGE_TEXT} strokeWidth={1.5} />
      <path
        d={`M${arrowX - 4.5} ${arrowTip - 5}L${arrowX} ${arrowTip}L${arrowX + 4.5} ${arrowTip - 5}`}
        fill="none"
        stroke={ORANGE_TEXT}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <RouteBox r={DATABASE} y={dbY} />
    </svg>
  );
}
