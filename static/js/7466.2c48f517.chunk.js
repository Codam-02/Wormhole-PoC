"use strict";(self.webpackChunkmultichain_poc=self.webpackChunkmultichain_poc||[]).push([[7466],{7466:(e,t,s)=>{s.r(t),s.d(t,{R:()=>y,T:()=>m,a:()=>v,i:()=>Z,n:()=>Q,o:()=>Y,p:()=>I,s:()=>K,t:()=>V,y:()=>O});const o=Symbol(),n=Object.getPrototypeOf,a=new WeakMap,i=e=>(e=>e&&(a.has(e)?a.get(e):n(e)===Object.prototype||n(e)===Array.prototype))(e)&&e[o]||null,r=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];a.set(e,t)};var l={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,REACT_APP_CONNECT_VERSION:"0.3.21"};const c=e=>"object"==typeof e&&null!==e,d=new WeakMap,p=new WeakSet,[u]=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e,t)=>new Proxy(e,t),s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e=>c(e)&&!p.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;const i=n.get(e);if((null==i?void 0:i[0])===t)return i[1];const l=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return r(l,!0),n.set(e,[t,l]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(l,t))return;const o=Reflect.get(e,t),n={value:o,enumerable:!0,configurable:!0};if(p.has(o))r(o,!1);else if(o instanceof Promise)delete n.value,n.get=()=>s(o);else if(d.has(o)){const[e,t]=d.get(o);n.value=a(e,t(),s)}Object.defineProperty(l,t,n)})),Object.preventExtensions(l)},u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],g=arguments.length>8&&void 0!==arguments[8]?arguments[8]:o=>{if(!c(o))throw new Error("object required");const n=u.get(o);if(n)return n;let r=h[0];const f=new Set,m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++h[0];r!==t&&(r=t,f.forEach((s=>s(e,t))))};let v=h[1];const b=e=>(t,s)=>{const o=[...t];o[1]=[e,...o[1]],m(o,s)},y=new Map,w=e=>{var t;const s=y.get(e);s&&(y.delete(e),null==(t=s[1])||t.call(s))},I=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),C=t(I,{deleteProperty(e,t){const s=Reflect.get(e,t);w(t);const o=Reflect.deleteProperty(e,t);return o&&m(["delete",[t],s]),o},set(t,o,n,a){const r=Reflect.has(t,o),h=Reflect.get(t,o,a);if(r&&(e(h,n)||u.has(n)&&e(h,u.get(n))))return!0;w(o),c(n)&&(n=i(n)||n);let v=n;if(n instanceof Promise)n.then((e=>{n.status="fulfilled",n.value=e,m(["resolve",[o],e])})).catch((e=>{n.status="rejected",n.reason=e,m(["reject",[o],e])}));else{!d.has(n)&&s(n)&&(v=g(n));const e=!p.has(v)&&d.get(v);e&&((e,t)=>{if("production"!==(l?"production":void 0)&&y.has(e))throw new Error("prop listener already exists");if(f.size){const s=t[3](b(e));y.set(e,[t,s])}else y.set(e,[t])})(o,e)}return Reflect.set(t,o,v,a),m(["set",[o],n,h]),!0}});u.set(o,C);const O=[I,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++h[1];return v!==e&&!f.size&&(v=e,y.forEach((t=>{let[s]=t;const o=s[1](e);o>r&&(r=o)}))),r},a,e=>(f.add(e),1===f.size&&y.forEach(((e,t)=>{let[s,o]=e;if("production"!==(l?"production":void 0)&&o)throw new Error("remove already exists");const n=s[3](b(t));y.set(t,[s,n])})),()=>{f.delete(e),0===f.size&&y.forEach(((e,t)=>{let[s,o]=e;o&&(o(),y.set(t,[s]))}))})];return d.set(C,O),Reflect.ownKeys(o).forEach((e=>{const t=Object.getOwnPropertyDescriptor(o,e);"value"in t&&(C[e]=o[e],delete t.value,delete t.writable),Object.defineProperty(I,e,t)})),C};return[g,d,p,e,t,s,o,n,a,u,h]}();function h(){return u(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function g(e,t,s){const o=d.get(e);let n;"production"!==(l?"production":void 0)&&!o&&console.warn("Please use proxy object");const a=[],i=o[3];let r=!1;const c=i((e=>{a.push(e),n||(n=Promise.resolve().then((()=>{n=void 0,r&&t(a.splice(0))})))}));return r=!0,()=>{r=!1,c()}}const f=h({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),m={state:f,subscribe:e=>g(f,(()=>e(f))),push(e,t){e!==f.view&&(f.view=e,t&&(f.data=t),f.history.push(e))},reset(e){f.view=e,f.history=[e]},replace(e){f.history.length>1&&(f.history[f.history.length-1]=e,f.view=e)},goBack(){if(f.history.length>1){f.history.pop();const[e]=f.history.slice(-1);f.view=e}},setData(e){f.data=e}},v={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&!(!window.matchMedia("(pointer:coarse)").matches&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>v.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return v.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(v.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);return`${o}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!v.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);return`${o}wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(v.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(v.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(v.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(v.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=m.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},b=h({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),y={state:b,subscribe:e=>g(b.events,(()=>e(function(e,t){const s=d.get(e);"production"!==(l?"production":void 0)&&!s&&console.warn("Please use proxy object");const[o,n,a]=s;return a(o,n(),t)}(b.events[b.events.length-1])))),initialize(){b.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(b.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){b.connectedWalletId=e},click(e){if(b.enabled){const t={type:"CLICK",name:e.name,userSessionId:b.userSessionId,timestamp:Date.now(),data:e};b.events.push(t)}},track(e){if(b.enabled){const t={type:"TRACK",name:e.name,userSessionId:b.userSessionId,timestamp:Date.now(),data:e};b.events.push(t)}},view(e){if(b.enabled){const t={type:"VIEW",name:e.name,userSessionId:b.userSessionId,timestamp:Date.now(),data:e};b.events.push(t)}}},w=h({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:w,subscribe:e=>g(w,(()=>e(w))),setChains(e){w.chains=e},setWalletConnectUri(e){w.walletConnectUri=e},setIsCustomDesktop(e){w.isCustomDesktop=e},setIsCustomMobile(e){w.isCustomMobile=e},setIsDataLoaded(e){w.isDataLoaded=e},setIsUiLoaded(e){w.isUiLoaded=e},setIsAuth(e){w.isAuth=e}},C=h({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),O={state:C,subscribe:e=>g(C,(()=>e(C))),setConfig(e){var t,s;y.initialize(),I.setChains(e.chains),I.setIsAuth(!!e.enableAuthMode),I.setIsCustomMobile(!(null==(t=e.mobileWallets)||!t.length)),I.setIsCustomDesktop(!(null==(s=e.desktopWallets)||!s.length)),v.setModalVersionInStorage(),Object.assign(C,e)}};var E=Object.defineProperty,W=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,A=(e,t,s)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const M="https://explorer-api.walletconnect.com",k="wcm",U="js-2.6.2";async function D(e,t){const s=((e,t)=>{for(var s in t||(t={}))L.call(t,s)&&A(e,s,t[s]);if(W)for(var s of W(t))j.call(t,s)&&A(e,s,t[s]);return e})({sdkType:k,sdkVersion:U},t),o=new URL(e,M);return o.searchParams.append("projectId",O.state.projectId),Object.entries(s).forEach((e=>{let[t,s]=e;s&&o.searchParams.append(t,String(s))})),(await fetch(o)).json()}const P={getDesktopListings:async e=>D("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>D("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>D("/w3m/v1/getInjectedListings",e),getAllListings:async e=>D("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${M}/w3m/v1/getWalletImage/${e}?projectId=${O.state.projectId}&sdkType=${k}&sdkVersion=${U}`,getAssetImageUrl:e=>`${M}/w3m/v1/getAssetImage/${e}?projectId=${O.state.projectId}&sdkType=${k}&sdkVersion=${U}`};var S=Object.defineProperty,N=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,_=(e,t,s)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const x=v.isMobile(),$=h({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),V={state:$,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=O.state;if("NONE"===e||"ALL"===t&&!e)return $.recomendedWallets;if(v.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await P.getAllListings(t),o=Object.values(s);o.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),$.recomendedWallets=o}else{const{chains:e,isAuth:s}=I.state,o=null==e?void 0:e.join(","),n=v.isArray(t),a={page:1,sdks:s?"auth_v1":void 0,entries:v.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:n?t.join(","):void 0},{listings:i}=x?await P.getMobileListings(a):await P.getDesktopListings(a);$.recomendedWallets=Object.values(i)}return $.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))R.call(t,s)&&_(e,s,t[s]);if(N)for(var s of N(t))T.call(t,s)&&_(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=O.state,{recomendedWallets:n}=$;if("ALL"===o)return $.wallets;n.length?t.excludedIds=n.map((e=>e.id)).join(","):v.isArray(s)&&(t.excludedIds=s.join(",")),v.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:a,search:i}=e,{listings:r,total:l}=x?await P.getMobileListings(t):await P.getDesktopListings(t),c=Object.values(r),d=i?"search":"wallets";return $[d]={listings:[...$[d].listings,...c],total:l,page:a??1},{listings:c,total:l}},getWalletImageUrl:e=>P.getWalletImageUrl(e),getAssetImageUrl:e=>P.getAssetImageUrl(e),resetSearch(){$.search={listings:[],total:0,page:1}}},H=h({open:!1}),K={state:H,subscribe:e=>g(H,(()=>e(H))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:o}=I.state;if(v.removeWalletConnectDeepLink(),I.setWalletConnectUri(null==e?void 0:e.uri),I.setChains(null==e?void 0:e.chains),m.reset("ConnectWallet"),s&&o)H.open=!0,t();else{const e=setInterval((()=>{const s=I.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),H.open=!0,t())}),200)}})),close(){H.open=!1}};var z=Object.defineProperty,B=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,F=(e,t,s)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const G=h({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),Q={state:G,subscribe:e=>g(G,(()=>e(G))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(G.themeMode=t),s&&(G.themeVariables=((e,t)=>{for(var s in t||(t={}))J.call(t,s)&&F(e,s,t[s]);if(B)for(var s of B(t))q.call(t,s)&&F(e,s,t[s]);return e})({},s))}},X=h({open:!1,message:"",variant:"success"}),Y={state:X,subscribe:e=>g(X,(()=>e(X))),openToast(e,t){X.open=!0,X.message=e,X.variant=t},closeToast(){X.open=!1}};const Z=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:class{constructor(e){this.openModal=K.open,this.closeModal=K.close,this.subscribeModal=K.subscribe,this.setTheme=Q.setThemeConfig,Q.setThemeConfig(e),O.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await s.e(3065).then(s.bind(s,3065));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),I.setIsUiLoaded(!0)}}}},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=7466.2c48f517.chunk.js.map