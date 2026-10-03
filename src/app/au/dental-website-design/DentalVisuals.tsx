/* Static, text-free explanatory diagrams. They represent a booking path and
   practice structures, never a real patient record or a software screenshot. */
export function DentalBookingFlow() {
  return (
    <svg className="dental-flow-svg" viewBox="0 0 1000 360" fill="none" aria-hidden="true" focusable="false">
      <path d="M220 180H398M615 180H748" stroke="currentColor" strokeWidth="2" />
      <path d="m386 174 12 6-12 6m350-12 12 6-12 6" stroke="currentColor" strokeWidth="2" />
      <g className="dental-flow-phone">
        <rect x="98" y="51" width="146" height="258" rx="16" fill="white" stroke="currentColor" strokeWidth="2" />
        <path d="M153 67h36M159 293h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <rect x="116" y="95" width="110" height="62" rx="4" fill="#FFF8F5" />
        <path d="M126 180h89m-89 14h65" stroke="#D8CCC0" strokeWidth="5" strokeLinecap="round" />
        <rect className="dental-flow-accent" x="116" y="226" width="110" height="35" rx="5" fill="#F05A28" />
        <path d="m156 243 10 9 19-20" stroke="white" strokeWidth="3" />
      </g>
      <g className="dental-flow-site">
        <rect x="398" y="84" width="217" height="192" rx="10" fill="white" stroke="currentColor" strokeWidth="2" />
        <path d="M398 114h217" stroke="#E7DED6" />
        <circle cx="414" cy="99" r="3" fill="#D8CCC0" /><circle cx="426" cy="99" r="3" fill="#D8CCC0" /><circle cx="438" cy="99" r="3" fill="#D8CCC0" />
        <path d="M447 173h120l-60-35-60 35Zm15 0v48h89v-48m-57 48v-24h25v24" stroke="currentColor" strokeWidth="2" />
        <rect x="426" y="241" width="161" height="14" rx="3" fill="#FFF8F5" />
      </g>
      <g className="dental-flow-calendar">
        <rect x="748" y="81" width="168" height="198" rx="10" fill="white" stroke="currentColor" strokeWidth="2" />
        <path d="M748 125h168m-133-55v24m94-24v24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {[0, 1, 2].map((row) => [0, 1, 2].map((column) => (
          <rect key={`${row}-${column}`} x={768 + column * 45} y={143 + row * 38} width="34" height="27" rx="3" fill={row === 1 && column === 1 ? '#F05A28' : '#FFF8F5'} />
        )))}
        <path d="m816 193 6 6 13-14" stroke="white" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function DentalPracticeDiagram({ variant }: { variant: number }) {
  const multi = variant === 1 || variant === 5;
  const pair = variant === 2 || variant === 3;
  const nodes = multi ? [55, 145, 235] : pair ? [100, 215] : [157];
  return (
    <svg viewBox="0 0 320 110" fill="none" aria-hidden="true" focusable="false">
      <path d={multi ? 'M55 58V27h180v31M145 27v31' : pair ? 'M134 60h44' : 'M157 28v27'} stroke="#D8CCC0" strokeWidth="1.5" />
      {!pair && <rect x={multi ? 124 : 136} y="9" width="42" height="19" rx="3" fill="#F05A28" />}
      {nodes.map((x) => (
        <g key={x}>
          <rect x={x - 28} y="53" width="56" height="40" rx="5" fill="white" stroke="#D8CCC0" />
          <path d={`M${x - 13} 67h26m-26 8h18m-18 8h22`} stroke="#E7DED6" strokeWidth="2" />
          <rect x={x + 12} y="77" width="10" height="10" rx="2" fill="#F05A28" />
        </g>
      ))}
      {pair && <path d="m168 55 10 5-10 5" stroke="#B23E13" strokeWidth="1.5" />}
    </svg>
  );
}
