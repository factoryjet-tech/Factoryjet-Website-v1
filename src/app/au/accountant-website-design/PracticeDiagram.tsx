/** Practice website and document paths, without implied credentials or live data. */
export function PracticeJourneyDiagram({ compact = false }: { compact?: boolean }) {
  return <svg className={compact ? 'practice-journey compact' : 'practice-journey'} viewBox="0 0 960 300" role="img" aria-label="Illustrative practice journey: find a service, check the firm, then book a meeting or use a document portal" fill="none">
    <g stroke="#CBD3D5" strokeWidth="2"><path d="M236 150h80M510 150h69V82h85M579 150v74h85" />
      <rect x="46" y="81" width="190" height="139" rx="8" fill="white" /><path d="M65 104h152M65 129h95M65 150h119M65 172h102" strokeWidth="5" strokeLinecap="round" />
      <rect x="316" y="61" width="194" height="178" rx="8" fill="white" /><circle cx="367" cy="106" r="20" /><path d="M342 145c0-27 49-27 49 0M411 98h73M411 114h59M342 171h144M342 192h117" />
      <rect x="664" y="36" width="222" height="98" rx="8" fill="white" /><path d="M691 60h164M691 75h164M723 49v19M818 49v19M717 96h15M750 96h15M783 96h15M816 96h15" />
      <rect x="664" y="175" width="222" height="98" rx="8" fill="white" /></g>
    <rect x="339" y="209" width="70" height="11" rx="3" fill="#FFF0E7" stroke="#FC6927" />
    <rect x="746" y="88" width="28" height="22" rx="3" fill="#FFF0E7" stroke="#FC6927" />
    <path d="M705 213h30l8 8h43v31h-81v-39Z" fill="#FFF0E7" stroke="#FC6927" strokeWidth="2" />
    <rect x="816" y="212" width="28" height="29" rx="4" stroke="#172B35" strokeWidth="2" /><path d="M821 212v-10a9 9 0 0 1 18 0v10M830 222v8" stroke="#172B35" strokeWidth="2" />
  </svg>;
}

export function PracticeCapabilityDiagram({ step }: { step: number }) {
  const shapes = [
    <g key="services"><rect x="167" y="15" width="85" height="36" rx="4" /><path d="M210 51v22M82 73h256M82 73v18M210 73v18M338 73v18" /><rect x="43" y="91" width="79" height="53" rx="4" /><rect x="170" y="91" width="79" height="53" rx="4" /><rect x="299" y="91" width="79" height="53" rx="4" /><path d="M58 108h49M58 122h30M185 108h49M185 122h30M314 108h49M314 122h30" /></g>,
    <g key="clients">{[66,174,282].map(x=><g key={x}><rect x={x} y="24" width="76" height="116" rx="5" /><circle cx={x+38} cy="53" r="13" /><path d={`M${x+20} 84c0-19 36-19 36 0M${x+14} 106h48M${x+14} 121h35`} /></g>)}</g>,
    <g key="trust"><rect x="123" y="18" width="176" height="130" rx="6" /><circle cx="164" cy="55" r="18" /><path d="M191 47h85M191 64h62M144 92h133M144 109h133M144 126h84" /><path d="M299 59h25l12-12M323 41l13 6-4 14" /></g>,
    <g key="booking"><rect x="124" y="26" width="177" height="117" rx="6" /><path d="M124 57h177M161 16v29M264 16v29M146 77h132M146 104h132M179 62v71M222 62v71M263 62v71" /><rect x="185" y="82" width="30" height="17" rx="3" fill="#FFF0E7" /></g>,
    <g key="portal"><path d="M65 68h44l12 13h61v59H65V68Z" /><path d="M197 106h40M226 94l12 12-12 12" /><rect x="272" y="71" width="70" height="69" rx="7" /><path d="M285 71V47a22 22 0 0 1 44 0v24M307 98v16" /></g>,
    <g key="search"><rect x="88" y="15" width="244" height="36" rx="18" /><circle cx="110" cy="32" r="8" /><path d="m116 38 7 7M142 32h165M107 82h199M107 99h157M107 127h199M107 144h132" /></g>
  ];
  return <svg className="practice-capability" viewBox="0 0 420 170" aria-hidden="true" fill="none"><g stroke="#B74918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{shapes[step]}</g></svg>;
}

export function PracticeIntakeDiagram() {
  return <svg className="practice-intake" viewBox="0 0 960 300" role="img" aria-label="Illustrative intake path: client documents enter a portal, a checklist identifies missing items, and staff review the file" fill="none">
    <g stroke="#CBD3D5" strokeWidth="2">
      {[54,120,186].map(y=><g key={y}><rect x="54" y={y} width="106" height="52" rx="4" fill="white" /><path d={`M70 ${y+17}h72M70 ${y+33}h52`} /></g>)}
      <path d="M160 80h51v70h42M160 147h93M160 212h51v-62M451 150h76M706 150h52" />
      <rect x="527" y="57" width="179" height="185" rx="7" fill="white" />
      <path d="M565 84h113M565 118h89M565 154h98M565 190h113" strokeWidth="5" strokeLinecap="round" />
      <circle cx="821" cy="114" r="27" fill="white" /><path d="M772 206c0-54 98-54 98 0" strokeWidth="3" />
    </g>
    <rect x="253" y="74" width="198" height="151" rx="8" fill="#FFF0E7" stroke="#FC6927" strokeWidth="2" />
    <path d="M319 145h66v50h-66zM330 145v-24a22 22 0 0 1 44 0v24M352 163v14" stroke="#172B35" strokeWidth="3" />
    <path d="m541 79 6 6 11-12M541 112l6 6 11-12" stroke="#B74918" strokeWidth="2" />
    <circle cx="548" cy="151" r="6" stroke="#FC6927" strokeWidth="2" /><path d="M548 148v6M542 186h12" stroke="#FC6927" strokeWidth="2" />
  </svg>;
}

export function PracticeSearchDiagram() {
  return <svg className="practice-search" viewBox="0 0 600 400" role="img" aria-label="Illustrative phone search connects to distinct nearby, service and question pages" fill="none">
    <g stroke="#CBD3D5" strokeWidth="2"><rect x="40" y="79" width="128" height="246" rx="16" fill="white" /><path d="M75 98h59M64 128h80M64 148h55M64 174h80M64 196h67M86 306h36M168 200h82M250 78v245M250 78h46M250 200h46M250 323h46" />
      {[40,162,285].map(y=><g key={y}><rect x="296" y={y} width="247" height="78" rx="5" fill="white" /><path d={`M355 ${y+24}h164M355 ${y+43}h133M355 ${y+59}h154`} /></g>)}
    </g>
    <g stroke="#FC6927" strokeWidth="2"><circle cx="322" cy="74" r="9" /><path d="M322 84v9M314 87h16M312 193h23v25h-23zM312 231h20M311 324h24v20h-24z" /></g>
  </svg>;
}
