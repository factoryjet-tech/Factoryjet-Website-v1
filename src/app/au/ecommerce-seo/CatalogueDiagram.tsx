/** Text-free structural illustrations. The adjacent copy supplies every explanation. */
export default function CatalogueDiagram({ variant = 0 }: { variant?: number }) {
  const mode = variant % 4;
  return (
    <svg className={`catalogue-diagram catalogue-diagram-${mode}`} viewBox="0 0 420 140" fill="none" aria-hidden="true" focusable="false">
      {mode === 0 && <>
        <path d="M210 48v22M68 70h284M68 70v20M210 70v20M352 70v20" stroke="currentColor" strokeWidth="1.5" />
        <rect x="150" y="10" width="120" height="38" rx="6" className="diagram-root" />
        {[26,168,310].map(x => <g key={x}><rect x={x} y="90" width="84" height="38" rx="6" className="diagram-page" /><path d={`M${x+15} 103h28m-28 10h50`} stroke="currentColor" strokeWidth="2" /></g>)}
        <path d="M167 24h22m10 0h48M167 35h80" stroke="currentColor" strokeWidth="2" />
      </>}
      {mode === 1 && <>
        <rect x="32" y="16" width="106" height="110" rx="7" className="diagram-page" /><rect x="45" y="28" width="80" height="48" rx="3" className="diagram-root" />
        <path d="M49 90h55m-55 12h73m-73 12h34M151 69h80m-9-8 9 8-9 8" stroke="currentColor" strokeWidth="2" />
        {[24,64,104].map(y => <g key={y}><rect x="254" y={y-9} width="134" height="25" rx="4" className="diagram-page" /><circle cx="269" cy={y+3} r="3" className="diagram-root" /><path d={`M283 ${y+3}h88`} stroke="currentColor" strokeWidth="2" /></g>)}
      </>}
      {mode === 2 && <>
        {[28,77,126].map((x,i) => <g key={x}><rect x={x} y={20+i*16} width="80" height="80" rx="6" className="diagram-page" /><path d={`M${x+14} ${39+i*16}h38m-38 13h52m-52 13h27`} stroke="currentColor" strokeWidth="1.5" /></g>)}
        <path d="M224 74h43m-9-8 9 8-9 8" stroke="currentColor" strokeWidth="2" />
        <rect x="290" y="24" width="95" height="90" rx="7" className="diagram-root" /><path d="m314 67 15 15 30-34" stroke="currentColor" strokeWidth="2" />
      </>}
      {mode === 3 && <>
        <rect x="24" y="20" width="110" height="99" rx="7" className="diagram-page" /><path d="M43 43h65m-65 17h42m-42 17h65m-65 17h32" stroke="currentColor" strokeWidth="1.5" />
        <path d="M149 69h119m-9-8 9 8-9 8" stroke="currentColor" strokeWidth="2" /><circle cx="210" cy="69" r="18" className="diagram-root" /><path d="m202 69 6 6 11-12" stroke="currentColor" strokeWidth="2" />
        <rect x="286" y="20" width="110" height="99" rx="7" className="diagram-page" /><path d="M305 43h65m-65 17h42m-42 17h65m-65 17h32" stroke="currentColor" strokeWidth="1.5" />
      </>}
    </svg>
  );
}
