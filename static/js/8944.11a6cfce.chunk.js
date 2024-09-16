"use strict";(self.webpackChunkmultichain_poc=self.webpackChunkmultichain_poc||[]).push([[8944],{8944:(t,i,e)=>{e.r(i),e.d(i,{A:()=>d,a:()=>c,b:()=>a,c:()=>p,d:()=>m,e:()=>k,i:()=>u});var s=e(7126),r=e(6310),o=Object.defineProperty,n=(t,i,e)=>(((t,i,e)=>{i in t?o(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e})(t,"symbol"!=typeof i?i+"":i,e),e);const a="0x1::aptos_coin::AptosCoin",c="::";class h extends r.C{}const l="Aptos",u=t=>/^(0x)?[0-9a-fA-F]+::\w+::\w+$/.test(t),p=t=>t.split(c)[0],g=class t extends r.P{constructor(i,e){super(i,e??(0,s.au)(i,t._platform))}getRpc(t){if(t in this.config)return new s.ae(this.config[t].rpc);throw new Error("No configuration available for chain: "+t)}getChain(t,i){if(t in this.config)return new h(t,this);throw new Error("No configuration available for chain: "+t)}static nativeTokenId(t,i){if(!this.isSupportedChain(i))throw new Error(`invalid chain: ${i}`);return s.av.tokenId(i,a)}static isNativeTokenId(t,i,e){return!(!this.isSupportedChain(i)||e.chain!==i)&&this.nativeTokenId(t,i)==e}static isSupportedChain(i){return(0,s.aw)(i)===t._platform}static async getDecimals(i,e,r){if((0,s.ax)(r))return(0,s.ay)(t._platform);const o=r.toString(),n=`0x1::coin::CoinInfo<${o}>`;return(await e.getAccountResource(o.split(c)[0],n)).data.decimals}static async getBalance(t,i,e,r){const o=(0,s.ax)(r)?a:r.toString(),n=new s.aZ(i);try{return await n.checkBalance(e,{coinType:o})}catch(c){if("resource_not_found"===c.errorCode&&404===c.status)return null;throw c}}static async getBalances(t,i,e,r){return(await Promise.all(r.map((async r=>{const o=await this.getBalance(t,i,e,r);return{[(0,s.ax)(r)?"native":new m(r).toString()]:o}})))).reduce(((t,i)=>Object.assign(t,i)),{})}static async sendWait(t,i,e){const s=[];for(const r of e){const t=await i.submitTransaction(r),e=await i.waitForTransactionWithResult(t.hash);s.push(e.hash)}return s}static async getLatestBlock(t){const i=await t.getLedgerInfo();return Number(i.block_height)}static async getLatestFinalizedBlock(t){const i=await t.getLedgerInfo();return Number(i.block_height)}static chainFromChainId(i){const e=(0,s.az)(t._platform,BigInt(i));if(!e)throw new Error(`No matching chainId to determine network and chain: ${i}`);const[r,o]=e;return[r,o]}static async chainFromRpc(t){const i=await t.getChainId();return this.chainFromChainId(i.toString())}};n(g,"_platform",l);let d=g;const f=class t{constructor(i){if(n(this,"platform",d._platform),n(this,"type","Native"),n(this,"address"),n(this,"module"),t.instanceof(i))this.address=i.address,this.module=i.module;else if(s.as.instanceof(i))this.address=i.toUint8Array();else if("string"==typeof i){if(u(i)){const t=i.split(c);this.module=t.slice(1).join(c),i=t[0]}if(i=(e=i).length%2!==0||e.length<66?"0x"+(e=e.startsWith("0x")?e.slice(2):e).padStart(64,"0"):e,!s.ar.valid(i))throw new Error("Invalid Aptos address: "+i);this.address=s.ar.decode(i)}else this.address=i;var e}unwrap(){return`0x${s.ar.encode(this.address).replace(/^0+/,"")}${this.module?c+this.module:""}`}toString(){return this.unwrap()}toNative(){return this}toUint8Array(){return this.address}toUniversalAddress(){return new s.as(this.toUint8Array())}static instanceof(t){return t.platform===d._platform}equals(i){return t.instanceof(i)?i.unwrap()===this.unwrap():this.toUniversalAddress().equals(i)}};n(f,"byteSize",32);let m=f;(0,s.at)(l,m);class w{constructor(t,i,e,s){n(this,"_chain"),n(this,"_account"),n(this,"_rpc"),n(this,"_debug"),this._chain=t,this._account=i,this._rpc=e,this._debug=s}chain(){return this._chain}address(){return this._account.address().hex()}async signAndSend(t){const i=[];for(const e of t){const{description:t,transaction:s}=e;this._debug&&console.log(`Signing: ${t} for ${this.address()}`);const r={gas_unit_price:"100",max_gas_amount:"30000",expiration_timestamp_secs:(BigInt(Date.now()+288e5)/1000n).toString()},o=await this._rpc.generateTransaction(this._account.address(),s,r),{hash:n}=await this._simSignSend(o);i.push(n)}return i}async _simSignSend(t){return await this._rpc.simulateTransaction(this._account,t).then((t=>t.forEach((t=>{if(!t.success)throw new Error(`Transaction failed: ${t.vm_status}\n${JSON.stringify(t,null,2)}`)})))),this._rpc.signTransaction(this._account,t).then((t=>this._rpc.submitTransaction(t))).then((t=>this._rpc.waitForTransactionWithResult(t.hash)))}}const _={Address:m,Platform:d,getSigner:async function(t,i){const[e,r]=await d.chainFromRpc(t);return new w(r,new s.a_(s.ar.decode(i)),t)},protocols:{WormholeCore:()=>e.e(2706).then(e.bind(e,2706)),TokenBridge:()=>e.e(4038).then(e.bind(e,4038))},getChain:(t,i,e)=>new h(i,new d(t,(0,s.aC)(t,l,{[i]:e})))},k=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}))},6310:(t,i,e)=>{e.d(i,{C:()=>l,P:()=>h,r:()=>a});var s=e(7126),r=Object.defineProperty,o=(t,i,e)=>(((t,i,e)=>{i in t?r(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e})(t,"symbol"!=typeof i?i+"":i,e),e);const n={};function a(t,i,e){i in n||(n[i]={});if(t in n[i])throw new Error(`Protocol ${t} for protocol ${i} has already registered`);n[i][t]=e}function c(t,i){if(i in n){const e=n[i];if(e&&t in e){const i=e[t];if(i)return i}}throw new Error(`No protocols registered for ${t}:${i}. This may be because the platform specific protocol implementation is not registered (by installing and importing it) or no implementation exists for this platform`)}class h{constructor(t,i){o(this,"network"),o(this,"config"),this.network=t,this.config=i}utils(){return this.constructor}getProtocol(t,i){return((t,i,e,s)=>c(t,i).fromRpc(e,s))(this.utils()._platform,t,i,this.config)}getProtocolInitializer(t){return c(this.utils()._platform,t)}async parseWormholeMessages(t,i,e){return(await this.getProtocol("WormholeCore",i)).parseTransaction(e)}}class l{constructor(t,i,e){o(this,"network"),o(this,"chain"),o(this,"config"),o(this,"platform"),o(this,"rpc"),o(this,"protocols",new Map),o(this,"supportsWormholeCore",(()=>this.supportsProtocol("WormholeCore"))),o(this,"getWormholeCore",(()=>this.getProtocol("WormholeCore"))),o(this,"supportsTokenBridge",(()=>this.supportsProtocol("TokenBridge"))),o(this,"getTokenBridge",(()=>this.getProtocol("TokenBridge"))),o(this,"supportsAutomaticTokenBridge",(()=>this.supportsProtocol("AutomaticTokenBridge"))),o(this,"getAutomaticTokenBridge",(()=>this.getProtocol("AutomaticTokenBridge"))),o(this,"supportsCircleBridge",(()=>this.supportsProtocol("CircleBridge"))),o(this,"getCircleBridge",(()=>this.getProtocol("CircleBridge"))),o(this,"supportsAutomaticCircleBridge",(()=>this.supportsProtocol("AutomaticCircleBridge"))),o(this,"getAutomaticCircleBridge",(()=>this.getProtocol("AutomaticCircleBridge"))),o(this,"supportsIbcBridge",(()=>this.supportsProtocol("IbcBridge"))),o(this,"getIbcBridge",(()=>this.getProtocol("IbcBridge"))),o(this,"supportsPorticoBridge",(()=>this.supportsProtocol("PorticoBridge"))),o(this,"getPorticoBridge",(()=>this.getProtocol("PorticoBridge"))),this.config=i.config[t],this.platform=i,this.chain=this.config.key,this.network=this.config.network,this.rpc=e}getRpc(){return this.rpc=this.rpc?this.rpc:this.platform.getRpc(this.chain),this.rpc}async getDecimals(t){if((0,s.ax)(t))return this.config.nativeTokenDecimals;if(this.config.tokenMap){const i=(0,s.ch)({chain:this.chain,address:t}),e=(0,s.ci)(this.network,this.chain,i);if(e)return e.decimals}return this.platform.utils().getDecimals(this.chain,await this.getRpc(),t)}async getBalance(t,i){return this.platform.utils().getBalance(this.chain,await this.getRpc(),t,i)}async getLatestBlock(){return this.platform.utils().getLatestBlock(await this.getRpc())}async getLatestFinalizedBlock(){return this.platform.utils().getLatestFinalizedBlock(await this.getRpc())}async parseTransaction(t){return this.platform.parseWormholeMessages(this.chain,await this.getRpc(),t)}async sendWait(t){return this.platform.utils().sendWait(this.chain,await this.getRpc(),t)}getToken(t){if(this.config.tokenMap&&t in this.config.tokenMap)return this.config.tokenMap[t]}async getNativeWrappedTokenId(){if(this.config.wrappedNative){const{address:t}=this.config.wrappedNative;return{chain:this.chain,address:(0,s.cj)(this.chain,t)}}const t=await this.getTokenBridge();return{chain:this.chain,address:await t.getWrappedNative()}}async getTokenAccount(t,i){return{chain:this.chain,address:t}}supportsProtocol(t){return function(t,i){const e=(0,s.cg)(t)?s.aw.get(t):t;return i in n&&e in n[i]}(this.chain,t)}async getProtocol(t,i,e){if(!i&&this.protocols.has(t))return this.protocols.get(t);const s=i?{...this.config.contracts,...i}:this.config.contracts,r=e??await this.getRpc(),o=this.platform.getProtocolInitializer(t);let n;if(e){if(i)throw new Error("Custom contracts are currently not supported with custom rpc connection. Add the contracts to the base config.");n=await this.platform.getProtocol(t,r)}else if("getVersion"in o){const t=await o.getVersion(r,s);n=new o(this.network,this.chain,r,s,t)}else n=new o(this.network,this.chain,r,s);return i||this.protocols.set(t,n),n}}}}]);
//# sourceMappingURL=8944.11a6cfce.chunk.js.map