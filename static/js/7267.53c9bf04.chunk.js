"use strict";(self.webpackChunkmultichain_poc=self.webpackChunkmultichain_poc||[]).push([[7267],{7267:(e,t,r)=>{r.d(t,{getAssociatedTokenAddress:()=>u});var n=r(5002),s=r(7126);class i extends Error{constructor(e){super(e)}}class o extends i{constructor(){super(...arguments),this.name="TokenOwnerOffCurveError"}}async function u(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.T,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.A;if(!r&&!n.P.isOnCurve(t.toBuffer()))throw new o;const[u]=await n.P.findProgramAddress([t.toBuffer(),s.toBuffer(),e.toBuffer()],i);return u}(0,s.aG)([(0,s.aH)("mintAuthorityOption"),(0,s.cJ)("mintAuthority"),(0,s.cH)("supply"),(0,s.aJ)("decimals"),(0,s.cI)("isInitialized"),(0,s.aH)("freezeAuthorityOption"),(0,s.cJ)("freezeAuthority")]).span}}]);
//# sourceMappingURL=7267.53c9bf04.chunk.js.map