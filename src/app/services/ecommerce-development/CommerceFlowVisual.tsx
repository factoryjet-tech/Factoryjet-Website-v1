/** Decorative commerce architecture, not a client store or performance result. */
export default function CommerceFlowVisual() {
  return (
    <svg className="ec-growth-flow" viewBox="0 0 480 170" fill="none" aria-hidden="true" focusable="false">
      <path d="M174 85H220M308 85H350" stroke="#C94A1A" strokeWidth="2" />
      <path d="m211 80 9 5-9 5m130-10 9 5-9 5" stroke="#C94A1A" strokeWidth="2" strokeLinejoin="round" />
      <rect x="2" y="21" width="172" height="128" rx="10" fill="white" stroke="#E7DED6" />
      <path d="M2 43H174" stroke="#E7DED6" />
      <circle cx="15" cy="32" r="3" fill="#F05A28" />
      <circle cx="26" cy="32" r="3" fill="#E7DED6" />
      <circle cx="37" cy="32" r="3" fill="#E7DED6" />
      {[16, 68, 120].map((x) => (
        <g key={x}>
          <rect x={x} y="58" width="39" height="47" rx="4" fill="#FFF8F5" />
          <path d={`M${x + 9} 72h21v22h-21zM${x + 16} 72v-5h7v5`} stroke="#C94A1A" strokeWidth="1.5" strokeLinejoin="round" />
          <path d={`M${x} 116h30M${x} 125h18`} stroke="#6E635A" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
      <rect x="220" y="8" width="88" height="154" rx="12" fill="white" stroke="#E7DED6" />
      <path d="M250 17h28" stroke="#E7DED6" strokeWidth="3" strokeLinecap="round" />
      <rect x="230" y="34" width="68" height="43" rx="5" fill="#FFF8F5" />
      <path d="M241 47h42M241 58h26M231 93h65M231 106h65" stroke="#6E635A" strokeWidth="2" strokeLinecap="round" />
      <rect x="230" y="123" width="68" height="22" rx="5" fill="#C94A1A" />
      <path d="m257 134 5 5 9-10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="350" y="42" width="104" height="87" rx="10" fill="#FFF8F5" stroke="#E7DED6" />
      <path d="m370 70 31-13 31 13v35l-31 14-31-14zM370 70l31 14 31-14M401 84v35M386 63l31 14v12" stroke="#C94A1A" strokeWidth="2" strokeLinejoin="round" />
      <circle className="ec-growth-flow-arrival" cx="451" cy="45" r="14" fill="#C94A1A" />
      <path d="m445 45 4 4 8-9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
