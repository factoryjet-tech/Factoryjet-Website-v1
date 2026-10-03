/* Illustrative feed and enquiry structure; no listing prices, vendors or outcomes. */
export function AgencyFeedVisual() {
 return <svg className="agency-feed-visual" viewBox="0 0 700 260" role="img" aria-label="One CRM listing feed supplies an agency website and property portals, with website enquiries routed back to the agency" fill="none" stroke="currentColor" strokeWidth="2">
  <path d="M135 119h86m-10-10 10 10-10 10M296 119h42V48h31M338 119v84h31" stroke="#B23E13"/>
  <rect x="15" y="56" width="120" height="126" rx="7" fill="white"/><ellipse cx="75" cy="79" rx="39" ry="12" fill="#FFF8F5"/><path d="M36 79v65c0 16 78 16 78 0V79M36 113c0 16 78 16 78 0" stroke="#B9ABA1"/>
  <rect x="234" y="81" width="62" height="80" rx="4" fill="#FFF8F5"/><path d="M246 100h37M246 114h37M246 128h23" stroke="#B9ABA1"/>
  <rect x="371" y="14" width="164" height="76" rx="5" fill="white"/><path d="M371 33h164M390 67l18-16 18 16v14h-36zM445 50h71M445 66h50" stroke="#B9ABA1"/>
  <rect x="371" y="160" width="74" height="76" rx="5" fill="white"/><rect x="461" y="160" width="74" height="76" rx="5" fill="white"/><path d="M383 178h50M383 191h50M383 205h28M473 178h50M473 191h50M473 205h28" stroke="#B9ABA1"/>
  <path d="M552 53h49m-9-9 9 9-9 9" stroke="#B23E13"/><circle cx="648" cy="53" r="18" fill="#FFF8F5"/><path d="M620 115v-19a28 28 0 0 1 56 0v19M618 126h60"/>
  <path d="M630 144v91H148v-37m-9 9 9-9 9 9" stroke="#F05A28" strokeDasharray="6 6"/>
 </svg>;
}
export function AgencyJob({ job }: { job: number }) {
 return <svg className="agency-job" viewBox="0 0 320 110" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7">
  {job===0 && <><rect x="32" y="18" width="65" height="76" rx="5" fill="white"/><path d="M45 37h40M45 51h40M45 65h24" stroke="#B9ABA1"/><path d="M113 55h48m-8-8 8 8-8 8" stroke="#B23E13"/><path d="M192 53l44-34 44 34v42h-88z" fill="#FFF8F5"/><path d="M225 95V67h22v28"/></>}
  {job===1 && <><path d="M30 30h258v60H30zM91 30v60M220 30v60M30 66h258" stroke="#B9ABA1"/><path d="M162 7a20 20 0 0 0-20 20c0 15 20 34 20 34s20-19 20-34a20 20 0 0 0-20-20Z" fill="#FFF8F5" stroke="#B23E13"/><circle cx="162" cy="27" r="5"/></>}
  {job===2 && <><rect x="52" y="12" width="214" height="87" rx="5" fill="white"/><circle cx="92" cy="44" r="14"/><path d="M71 82v-8a21 21 0 0 1 42 0v8M132 31h113M132 46h84M132 72h84" stroke="#B9ABA1"/><path d="M132 84h99" stroke="#F05A28"/></>}
  {job===3 && <><rect x="35" y="14" width="90" height="84" rx="4" fill="white"/><path d="M48 35h64M48 50h64M48 66h38" stroke="#B9ABA1"/><path d="M142 55h47m-8-8 8 8-8 8" stroke="#B23E13"/><circle cx="241" cy="35" r="14" fill="#FFF8F5"/><path d="M214 89V75a27 27 0 0 1 54 0v14"/></>}
  {job===4 && <><rect x="42" y="18" width="80" height="76" rx="4" fill="white"/><path d="M53 38h57M53 52h57M53 66h34" stroke="#B9ABA1"/><path d="M140 55h44m-8-8 8 8-8 8" stroke="#B23E13"/><rect x="202" y="18" width="80" height="76" rx="4" fill="#FFF8F5"/><path d="M213 38h57M213 52h57M213 66h34" stroke="#B9ABA1"/><path d="M91 10h139M219 5l11 5-11 5" stroke="#F05A28"/></>}
  {job===5 && <><rect x="34" y="17" width="166" height="75" rx="4" fill="white"/><path d="M34 34h166M51 49h110M51 63h72M51 77h110" stroke="#B9ABA1"/><rect x="237" y="9" width="48" height="94" rx="6" fill="#FFF8F5"/><path d="M248 28h27M248 43h27M248 58h27" stroke="#B9ABA1"/></>}
 </svg>;
}
export function SuburbVisual() {
 return <svg className="suburb-visual" viewBox="0 0 480 360" role="img" aria-label="An agency office connected to individual suburb pages with their own local detail" fill="none" stroke="currentColor" strokeWidth="2">
  <rect x="15" y="15" width="450" height="330" rx="7" fill="#FFF8F5" stroke="#E4DCD6"/>
  <path d="M15 125h450M15 253h450M135 15v330M319 15v330M15 325 445 15" stroke="#E4DCD6"/>
  <path d="M229 129a27 27 0 0 0-27 27c0 21 27 52 27 52s27-31 27-52a27 27 0 0 0-27-27Z" fill="white" stroke="#B23E13"/><circle cx="229" cy="156" r="8"/>
  {[{x:43,y:46},{x:346,y:47},{x:45,y:264},{x:347,y:264}].map(({x,y})=><g key={x+':'+y}><rect x={x} y={y} width="90" height="65" rx="5" fill="white"/><path d={`M${x+15} ${y+19}h60M${x+15} ${y+32}h60M${x+15} ${y+45}h38`} stroke="#B9ABA1"/></g>)}
  <path d="M195 144 142 112M269 139l66-31M193 210l-51 48M270 217l64 42" stroke="#F05A28" strokeDasharray="5 5"/>
 </svg>;
}
