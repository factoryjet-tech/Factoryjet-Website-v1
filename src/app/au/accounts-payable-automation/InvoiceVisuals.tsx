/* Text-free explanatory diagrams; no financial values or invented results. */
function Paper({ x, y, marked = false }: { x: number; y: number; marked?: boolean }) {
  return <g transform={`translate(${x} ${y})`}><rect width="64" height="82" rx="5" fill="white" stroke="currentColor"/><path d="M13 17h26M13 28h38M13 40h38M13 51h22" stroke="#B9ABA1"/><rect x="12" y="62" width="40" height="8" rx="2" fill={marked ? '#F05A28' : '#E7DED6'}/></g>;
}
export function InvoiceRail({ compact = false }: { compact?: boolean }) {
  return <svg className="ap-rail" viewBox="0 0 720 240" role="img" aria-label="An invoice is checked against matching documents, then routed for human approval; an exception branches into a hold queue" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M100 120H600" stroke="#E7DED6" strokeWidth="5"/>
    <Paper x={28} y={70}/><path d="m111 111 9 9-9 9"/>
    <g transform="translate(167 47)"><Paper x={0} y={0}/><Paper x={24} y={24} marked/><path d="m103 63 9 9-9 9"/></g>
    <rect x="342" y="62" width="98" height="115" rx="9" fill="#FFF8F5" stroke="#F05A28"/><path d="m366 112 17 17 33-38" stroke="#B23E13" strokeWidth="3"/>
    <path d="M441 120h58m-9-9 9 9-9 9M391 177v31h75" stroke="#B23E13"/>
    <rect x="468" y="190" width="58" height="30" rx="4" fill="#FFF8F5" stroke="#F05A28"/><path d="M483 198v14m9-14v14" stroke="#B23E13"/>
    <Paper x={522} y={78} marked/><circle cx="645" cy="89" r="16" fill="white"/><path d="M617 155v-14a28 28 0 0 1 56 0v14M606 173h78"/>
    {!compact && <path d="M28 227h664" stroke="#E7DED6"/>}
  </svg>;
}
export function InvoiceJob({ job }: { job: number }) {
  return <svg viewBox="0 0 300 110" className="ap-job" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
    {job === 0 && <><path d="M36 27h72v52H36zM36 27l36 29 36-29"/><path d="M127 55h45m-9-9 9 9-9 9"/><path d="M192 70v19h70V70"/><path d="M205 31h44v44h-44z" fill="#FFF8F5"/></>}
    {job === 1 && <><Paper x={60} y={13} marked/><path d="M149 30h78M149 51h58M149 72h78" stroke="#B23E13"/><rect x="51" y="4" width="82" height="100" rx="7" stroke="#F05A28"/></>}
    {job === 2 && <><Paper x={34} y={13}/><path d="M119 54h41m-9-9 9 9-9 9"/><path d="M182 24h62v63h-62z" fill="#FFF8F5"/><path d="m195 54 12 12 26-27" stroke="#B23E13"/><path d="M173 99h84" stroke="#F05A28"/></>}
    {job === 3 && <><Paper x={30} y={13}/><path d="M120 54h30v-29h72M150 54h72M150 54v29h72"/><rect x="223" y="15" width="40" height="20" rx="3"/><rect x="223" y="44" width="40" height="20" rx="3" fill="#FFF8F5" stroke="#F05A28"/><rect x="223" y="73" width="40" height="20" rx="3"/></>}
    {job === 4 && <><Paper x={24} y={13}/><Paper x={118} y={13} marked/><Paper x={212} y={13}/><path d="M89 54h28M183 54h28" stroke="#F05A28"/></>}
    {job === 5 && <><Paper x={35} y={13} marked/><path d="M119 54h65m-9-9 9 9-9 9"/><circle cx="232" cy="30" r="14"/><path d="M207 88V72a25 25 0 0 1 50 0v16"/><path d="M197 96h70" stroke="#F05A28"/></>}
  </svg>;
}
export function InvoiceMerge() {
  return <svg className="ap-merge" viewBox="0 0 520 340" role="img" aria-label="PDF invoices pass a reading step, while structured eInvoices join directly; both use the same checks and approval route" fill="none" stroke="currentColor" strokeWidth="2"><Paper x={30} y={45}/><rect x="30" y="224" width="64" height="55" rx="5" fill="#FFF8F5" stroke="#F05A28"/><path d="M44 242h36M44 254h36" stroke="#B23E13"/><path d="M94 85h65v85h101M94 250h122v-80h44"/><rect x="132" y="65" width="54" height="42" rx="4" fill="white"/><path d="M145 80h28M145 92h19" stroke="#F05A28"/><rect x="260" y="132" width="74" height="76" rx="6" fill="#FFF8F5"/><path d="m279 169 12 12 22-27" stroke="#B23E13"/><path d="M334 170h52m-9-9 9 9-9 9"/><Paper x={405} y={128} marked/></svg>;
}
