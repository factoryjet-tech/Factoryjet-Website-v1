/** Illustrative extraction anatomy; no results, rankings or client evidence. */
export default function CitationDiagram({ compact = false }: { compact?: boolean }) {
  return <svg className={`aseo-citation${compact ? ' aseo-citation-compact' : ''}`} viewBox="0 0 960 320" role="img" aria-label="Illustrative diagram: readable source documents feed a cited answer, followed by a human accuracy check" fill="none">
    <g stroke="#CED5D8" strokeWidth="2">
      <path d="M258 79H336V160H395M258 160H395M258 241H336V160M633 160H697" />
      {[44,125,206].map((y) => <g key={y}><rect x="72" y={y} width="186" height="70" rx="5" fill="white" /><path d={`M96 ${y+22}h113M96 ${y+34}h137M96 ${y+46}h85`} /></g>)}
    </g>
    <rect x="395" y="62" width="238" height="196" rx="10" fill="white" stroke="#172B35" strokeWidth="2" />
    <path d="M420 90h188M420 112h151M420 134h173M420 177h176M420 199h132" stroke="#CED5D8" strokeWidth="6" strokeLinecap="round" />
    <path d="M420 151h80M509 151h81" stroke="#FC6927" strokeWidth="8" strokeLinecap="round" />
    {[433,472,511].map(x=><g key={x}><rect x={x} y="224" width="26" height="18" rx="3" fill="#FFF0E7" stroke="#FC6927" /><path d={`M${x+7} 231h12M${x+7} 236h8`} stroke="#B74918" /></g>)}
    <circle cx="785" cy="160" r="69" fill="#FFF0E7" stroke="#FC6927" strokeWidth="2" />
    <circle cx="785" cy="145" r="19" stroke="#172B35" strokeWidth="3" />
    <path d="M754 190c0-22 62-22 62 0M808 174l11 11 22-25" stroke="#172B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}
