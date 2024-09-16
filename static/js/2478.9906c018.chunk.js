"use strict";(self.webpackChunkmultichain_poc=self.webpackChunkmultichain_poc||[]).push([[2478],{97:(e,a,t)=>{t.d(a,{offchainLookup:()=>u,offchainLookupSignature:()=>c});var r=t(4606);class s extends r.B{constructor(e){let{callbackSelector:a,cause:t,data:s,extraData:n,sender:o,urls:c}=e;var l;super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],null!=(l=t.metaMessages)&&l.length?"":[],"Offchain Gateway Call:",c&&["  Gateway URL(s):",...c.map((e=>`    ${(0,r.g)(e)}`))],`  Sender: ${o}`,`  Data: ${s}`,`  Callback selector: ${a}`,`  Extra data: ${n}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class n extends r.B{constructor(e){let{result:a,url:t}=e;super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,r.g)(t)}`,`Response: ${(0,r.s)(a)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class o extends r.B{constructor(e){let{sender:a,to:t}=e;super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${a}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}const c="0x556f1830",l={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function u(e,a){let{blockNumber:t,blockTag:c,data:u,to:d}=a;const{args:i}=(0,r.d)({data:u,abi:[l]}),[f,h,p,b,w]=i;try{if(!function(e,a){if(!(0,r.i)(e))throw new r.I({address:e});if(!(0,r.i)(a))throw new r.I({address:a});return e.toLowerCase()===a.toLowerCase()}(d,f))throw new o({sender:f,to:d});const a=await async function(e){let{data:a,sender:t,urls:s}=e;var o;let c=new Error("An unknown error occurred.");for(let l=0;l<s.length;l++){const e=s[l],u=e.includes("{data}")?"GET":"POST",d="POST"===u?{data:a,sender:t}:void 0;try{const s=await fetch(e.replace("{sender}",t).replace("{data}",a),{body:JSON.stringify(d),method:u});let l;if(l=null!=(o=s.headers.get("Content-Type"))&&o.startsWith("application/json")?(await s.json()).data:await s.text(),!s.ok){c=new r.H({body:d,details:null!=l&&l.error?(0,r.s)(l.error):s.statusText,headers:s.headers,status:s.status,url:e});continue}if(!(0,r.b)(l)){c=new n({result:l,url:e});continue}return l}catch(b){c=new r.H({body:d,details:b.message,url:e})}}throw c}({data:p,sender:f,urls:h}),{data:s}=await(0,r.c)(e,{blockNumber:t,blockTag:c,data:(0,r.a)([b,(0,r.e)([{type:"bytes"},{type:"bytes"}],[a,w])]),to:d});return s}catch(m){throw new s({callbackSelector:b,cause:m,data:u,extraData:w,sender:f,urls:h})}}}}]);
//# sourceMappingURL=2478.9906c018.chunk.js.map