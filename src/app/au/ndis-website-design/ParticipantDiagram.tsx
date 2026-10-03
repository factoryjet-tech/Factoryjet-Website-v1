/** Accessible website anatomy, illustrative only: no participant data or outcomes. */
export function ParticipantPathDiagram({ compact = false }: { compact?: boolean }) {
  return <svg className={compact ? 'participant-path compact' : 'participant-path'} viewBox="0 0 960 300" role="img" aria-label="Illustrative accessible journey: clear support information connects to contact and referral choices, with keyboard focus and plain-language content" fill="none">
    <rect x="52" y="46" width="335" height="208" rx="9" fill="white" stroke="#CBD3D5" strokeWidth="2" />
    <path d="M74 70h178M74 94h270M74 111h213" stroke="#CBD3D5" strokeWidth="5" strokeLinecap="round" />
    <rect x="73" y="134" width="125" height="89" rx="5" fill="#FFF0E7" stroke="#FC6927" strokeWidth="2" />
    <circle cx="106" cy="158" r="12" stroke="#172B35" strokeWidth="2" /><path d="M88 193c0-21 36-21 36 0M141 156h39M141 171h30M141 189h37" stroke="#172B35" strokeWidth="2" />
    <rect x="212" y="135" width="153" height="88" rx="5" fill="white" stroke="#CBD3D5" strokeWidth="2" /><path d="M228 154h120M228 172h91M228 191h114" stroke="#CBD3D5" strokeWidth="4" />
    <path d="M388 150h89M477 74v152M477 74h75M477 226h75" stroke="#FC6927" strokeWidth="2" />
    <rect x="552" y="32" width="349" height="90" rx="9" fill="white" stroke="#CBD3D5" strokeWidth="2" />
    <rect x="552" y="177" width="349" height="90" rx="9" fill="white" stroke="#CBD3D5" strokeWidth="2" />
    <g stroke="#172B35" strokeWidth="2"><rect x="578" y="55" width="59" height="44" rx="4" /><path d="m578 57 30 24 29-24M657 58h217M657 76h169M657 94h193M582 199h36M582 214h36M582 229h36M657 199h217M657 217h180M657 235h200" /></g>
    <rect x="546" y="26" width="361" height="102" rx="12" stroke="#FC6927" strokeWidth="3" strokeDasharray="7 5" />
  </svg>;
}

export function ParticipantCapabilityDiagram({ step }: { step: number }) {
  const shapes = [
    <g key="supports"><rect x="114" y="14" width="192" height="136" rx="7" /><path d="M135 38h143M135 58h120M135 76h141M135 94h100" /><rect x="135" y="113" width="109" height="22" rx="4" fill="#FFF0E7" /></g>,
    <g key="access"><rect x="173" y="14" width="160" height="101" rx="6" /><rect x="191" y="67" width="115" height="25" rx="4" /><rect x="184" y="60" width="129" height="39" rx="7" strokeDasharray="5 4" /><path d="M59 109h95v32H59zM70 119h5M87 119h5M104 119h5M121 119h5M138 119h5M71 132h58M155 124h56v-24" /></g>,
    <g key="easyread"><rect x="111" y="12" width="198" height="142" rx="6" />{[35,76,116].map(y=><g key={y}><rect x="128" y={y} width="27" height="26" rx="3" /><path d={`M174 ${y+7}h112M174 ${y+20}h83`} /></g>)}</g>,
    <g key="referral"><rect x="107" y="14" width="211" height="141" rx="6" /><path d="M126 35h142M126 53h174v19H126zM126 87h174v19H126zM126 125h56M126 138h39" /><rect x="261" y="122" width="25" height="24" rx="3" /><path d="M266 122v-10a8 8 0 0 1 16 0v10" /></g>,
    <g key="search"><rect x="84" y="14" width="252" height="37" rx="18" /><path d="M127 32h183M102 29a7 7 0 1 0 14 0 7 7 0 1 0-14 0m13 6 6 6M92 75h236M92 96h183" /><path d="M211 151c-23-30-30-39-30-53a30 30 0 0 1 60 0c0 14-7 23-30 53Z" fill="white" /><circle cx="211" cy="96" r="8" /></g>,
    <g key="message"><rect x="85" y="21" width="134" height="130" rx="5" /><rect x="254" y="30" width="72" height="120" rx="9" /><path d="M102 43h98M102 61h70M102 83h98M102 101h88M102 127h80M267 53h46M267 69h34M267 87h45M267 103h39M278 134h24M229 82h16" /></g>
  ];
  return <svg className="participant-capability" viewBox="0 0 420 170" aria-hidden="true" fill="none"><g stroke="#B74918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{shapes[step]}</g></svg>;
}

export function ParticipantAccessDiagram() {
  return <svg className="participant-access" viewBox="0 0 960 300" role="img" aria-label="Illustrative accessibility anatomy: readable page structure, an obvious keyboard focus target, and paired pictures and short text" fill="none">
    <g stroke="#CBD3D5" strokeWidth="2">
      {[65,365,665].map(x=><rect key={x} x={x} y="42" width="230" height="217" rx="7" fill="white" />)}
      <path d="M86 70h169M86 96h187M86 114h157M86 132h179M86 167h152M86 189h185M86 211h134M388 69h182M388 92h156" strokeWidth="5" strokeLinecap="round" />
      <rect x="391" y="131" width="170" height="49" rx="6" />
      <path d="M432 151h88M432 165h62M408 218h137v22H408zM420 226h4M434 226h4M448 226h4M462 226h4M476 226h4M490 226h4M504 226h4M518 226h4M532 226h4" />
      {[70,131,192].map(y=><g key={y}><rect x="686" y={y} width="40" height="40" rx="4" /><path d={`M745 ${y+10}h130M745 ${y+28}h100`} strokeWidth="4" /></g>)}
    </g>
    <rect x="383" y="123" width="186" height="65" rx="10" stroke="#FC6927" strokeWidth="3" strokeDasharray="6 4" />
    <path d="m546 201 16-15-3 22-5-4-8 13-6-4 8-12-7-2Z" fill="#FFF0E7" stroke="#B74918" strokeWidth="2" />
    <g stroke="#B74918" strokeWidth="2"><circle cx="706" cy="82" r="6" /><path d="M698 101c0-12 16-12 16 0M699 143h14v16h-14zM697 203h18v15h-18z" /></g>
  </svg>;
}
