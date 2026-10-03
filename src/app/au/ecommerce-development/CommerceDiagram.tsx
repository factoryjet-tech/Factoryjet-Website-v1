const line = '#D7D8D0';
const ink = '#404740';
const accent = '#C94A1A';

function Catalogue({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return <g transform={`translate(${x} ${y})`}><rect width="132" height="108" rx="6" fill="white" stroke={line}/><path d="M0 22h132" stroke={line}/><circle cx="12" cy="11" r="3" fill={accent}/>{[0,1,2].map(i=><g key={i} transform={`translate(${12+i*38} 34)`}><rect width="30" height="32" rx="3" fill="#F1F1EA"/><path d="M3 75h24M3 65h18" stroke={line}/><path d="M11 43h8" stroke={accent} strokeWidth="3"/></g>)}</g>;
}
function Order({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return <g transform={`translate(${x} ${y})`}><rect width="100" height="116" rx="6" fill="white" stroke={line}/><path d="M18 22h64M18 39h44M18 72h64M18 88h42" stroke={line} strokeWidth="3"/><rect x="18" y="49" width="64" height="12" rx="3" fill="#FAEDE5"/><path d="m67 95 7 7 12-15" stroke={accent} strokeWidth="3" fill="none"/></g>;
}
export function CommerceArchitecture({ compact = false }: { compact?: boolean }) {
  return <svg className={compact ? 'commerce-architecture commerce-compact' : 'commerce-architecture'} viewBox="0 0 640 260" role="img" aria-label="Illustrative catalogue and order connections to accounting, inventory and shipping">
    <path d="M152 122h68m100 0h95m-42 0V58h42m-42 64v75h42" stroke={accent} strokeWidth="2" fill="none"/>
    <Catalogue x={20} y={68}/><Order x={220} y={64}/>
    <g transform="translate(415 22)"><rect width="194" height="70" rx="6" fill="white" stroke={line}/><path d="M17 18h32v36H17zM23 27h20m-20 9h20m-20 9h15" stroke={ink} fill="none"/><path d="M70 22h98m-98 13h85m-85 13h91" stroke={line} strokeWidth="3"/></g>
    <g transform="translate(415 105)"><rect width="194" height="57" rx="6" fill="white" stroke={line}/><path d="m18 17 18-9 18 9v23l-18 9-18-9Zm0 0 18 9 18-9m-18 9v23" fill="none" stroke={ink}/><path d="M75 20h88m-88 15h58" stroke={line} strokeWidth="3"/></g>
    <g transform="translate(415 176)"><rect width="194" height="65" rx="6" fill="white" stroke={line}/><path d="M16 20h28v22H16Zm28 8h12l10 10v4H44" stroke={ink} fill="none"/><circle cx="26" cy="45" r="5" fill="white" stroke={accent}/><circle cx="56" cy="45" r="5" fill="white" stroke={accent}/><path d="M86 22h87m-87 16h59" stroke={line} strokeWidth="3"/></g>
    <circle cx="373" cy="122" r="5" fill={accent}/>
  </svg>;
}
export function CommerceServiceDiagram({ search = false }: { search?: boolean }) {
  return <svg className="commerce-service-diagram" viewBox="0 0 440 170" aria-hidden="true"><Catalogue x={28} y={30}/>{search ? <><path d="M160 85h60" stroke={accent} strokeWidth="2"/><rect x="220" y="25" width="192" height="110" rx="8" fill="white" stroke={line}/><path d="m235 135 8 18 23-18" fill="white" stroke={line}/><path d="M239 49h148m-148 17h132m-132 17h144" stroke={line} strokeWidth="4"/><rect x="239" y="104" width="55" height="12" rx="4" fill="#FAEDE5"/><path d="M251 109h31" stroke={accent}/></> : <><path d="M160 85h69" stroke={accent} strokeWidth="2"/><rect x="240" y="30" width="165" height="108" rx="5" fill="#FAEDE5" stroke={line}/><rect x="253" y="42" width="138" height="28" rx="3" fill="white"/><rect x="253" y="80" width="62" height="44" rx="3" fill="white"/><path d="M330 87h48m-48 15h37m-37 16h48" stroke={accent} strokeWidth="2"/></>}</svg>;
}
export function CommerceChannelsDiagram() {
  return <svg className="commerce-channels" viewBox="0 0 640 180" role="img" aria-label="Illustrative single catalogue feeding multiple marketplace channels"><Catalogue x={20} y={36}/><path d="M152 90h70m0 0V40h58m-58 50h58m-58 0v50h58" stroke={accent} fill="none" strokeWidth="2"/>{[20,70,120].map((y,i)=><g key={y} transform={`translate(280 ${y})`}><rect width="328" height="40" rx="5" fill="white" stroke={line}/><rect x="12" y="10" width="20" height="20" rx="3" fill={i===1?'#FAEDE5':'#F1F1EA'}/><path d="M48 16h100m-100 10h76M215 20h84" stroke={line} strokeWidth="3"/><circle cx="198" cy="20" r="4" fill={accent}/></g>)}</svg>;
}
