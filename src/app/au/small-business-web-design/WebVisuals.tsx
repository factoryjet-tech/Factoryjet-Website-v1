/* Service navigation and enquiries, not an ecommerce catalogue or invented results. */
export function ServiceEnquiryVisual() {
 return <svg className="service-enquiry-visual" viewBox="0 0 660 240" role="img" aria-label="A clear service page adapts to a phone and sends an enquiry to the business inbox" fill="none" stroke="currentColor" strokeWidth="2">
  <rect x="17" y="30" width="253" height="168" rx="7" fill="white"/><path d="M17 58h253M35 46h27M176 46h18M204 46h18M233 46h18" stroke="#B9ABA1"/>
  <rect x="35" y="78" width="89" height="54" rx="3" fill="#FFF8F5"/><path d="M140 84h108M140 99h108M140 114h75M35 150h129M35 164h104" stroke="#B9ABA1"/>
  <rect x="177" y="146" width="70" height="31" rx="4" fill="#F05A28" stroke="none"/><path d="M289 115h48m-9-9 9 9-9 9" stroke="#B23E13"/>
  <rect x="357" y="18" width="102" height="204" rx="12" fill="white"/><path d="M386 31h44M372 61h73M372 75h52M372 143h72M372 158h49" stroke="#B9ABA1"/><rect x="372" y="91" width="72" height="38" rx="3" fill="#FFF8F5"/><rect x="372" y="179" width="72" height="22" rx="4" fill="#F05A28" stroke="none"/>
  <path d="M479 116h42m-9-9 9 9-9 9" stroke="#B23E13"/><rect x="540" y="76" width="102" height="77" rx="5" fill="#FFF8F5"/><path d="m540 77 51 38 51-38M551 173h79" stroke="#B23E13"/>
 </svg>;
}
export function WebJob({ job }: { job: number }) {
 return <svg className="web-job" viewBox="0 0 300 110" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7">
 {job===0 && <><rect x="28" y="16" width="95" height="80" rx="4" fill="white"/><path d="M42 34h67M42 49h44M42 69h67M42 82h38" stroke="#B9ABA1"/><path d="M137 55h31m-8-8 8 8-8 8" stroke="#B23E13"/><rect x="185" y="16" width="86" height="80" rx="4" fill="#FFF8F5"/><path d="M196 31h62M196 44h62M196 59h35" stroke="#B9ABA1"/><rect x="197" y="75" width="60" height="9" fill="#F05A28" stroke="none"/></>}
 {job===1 && <><rect x="62" y="12" width="177" height="87" rx="5" fill="white"/><path d="M80 31h134M80 45h99M80 60h134M80 75h86" stroke="#B9ABA1"/><path d="m200 81 28-28 9 9-28 28-13 4zM218 63l9 9" fill="#FFF8F5" stroke="#B23E13"/></>}
 {job===2 && <><rect x="101" y="6" width="94" height="98" rx="9" fill="white"/><path d="M117 24h62M117 38h62M117 54h37" stroke="#B9ABA1"/><rect x="117" y="75" width="62" height="15" rx="3" fill="#F05A28" stroke="none"/><path d="M40 34h42M28 54h54M40 74h42" stroke="#B9ABA1"/></>}
 {job===3 && <><rect x="34" y="18" width="100" height="76" rx="4" fill="white"/><path d="M48 35h72M48 49h72M48 64h44" stroke="#B9ABA1"/><path d="M150 55h33m-8-8 8 8-8 8" stroke="#B23E13"/><circle cx="226" cy="43" r="25" fill="#FFF8F5"/><path d="m245 62 21 21M213 34h26M213 45h26M213 56h16"/></>}
 {job===4 && <><rect x="32" y="13" width="69" height="89" rx="6" fill="white"/><path d="M43 31h47M43 46h47M43 61h26" stroke="#B9ABA1"/><rect x="43" y="80" width="47" height="10" rx="2" fill="#F05A28" stroke="none"/><path d="M119 55h46m-8-8 8 8-8 8" stroke="#B23E13"/><rect x="188" y="29" width="80" height="59" rx="4" fill="#FFF8F5"/><path d="m188 30 40 28 40-28"/></>}
 {job===5 && <><circle cx="92" cy="51" r="24" fill="#FFF8F5"/><circle cx="92" cy="51" r="8"/><path d="M116 51h133M209 51v22M229 51v22M249 51v22" stroke="#B23E13"/><path d="M63 90h206" stroke="#B9ABA1"/></>}
 </svg>;
}
