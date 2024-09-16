/*! For license information please see 1561.5d17ee4f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmultichain_poc=self.webpackChunkmultichain_poc||[]).push([[1561],{1561:(e,t,r)=>{r.d(t,{h:()=>L,p:()=>q,s:()=>n,u:()=>S});var o=r(7126),n={},s={exports:{}},a={};!function(e){var t;function r(){if(void 0!==t)return t;if(o.o.XMLHttpRequest){t=new o.o.XMLHttpRequest;try{t.open("GET",o.o.XDomainRequest?"/":"https://example.com")}catch{t=null}}else t=null;return t}function n(e){var t=r();if(!t)return!1;try{return t.responseType=e,t.responseType===e}catch{}return!1}function s(e){return"function"==typeof e}e.fetch=s(o.o.fetch)&&s(o.o.ReadableStream),e.writableStream=s(o.o.WritableStream),e.abortController=s(o.o.AbortController),e.arraybuffer=e.fetch||n("arraybuffer"),e.msstream=!e.fetch&&n("ms-stream"),e.mozchunkedarraybuffer=!e.fetch&&n("moz-chunked-arraybuffer"),e.overrideMimeType=e.fetch||!!r()&&s(r().overrideMimeType),t=null}(a);var i={},h=a,u=(0,o.q)(),c=o.cq,l=i.readyStates={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},f=i.IncomingMessage=function(e,t,r,n){var s=this;if(c.Readable.call(s),s._mode=r,s.headers={},s.rawHeaders=[],s.trailers={},s.rawTrailers=[],s.on("end",(function(){o.d.process.nextTick((function(){s.emit("close")}))})),"fetch"===r){let e=function(){i.read().then((function(t){if(!s._destroyed){if(n(t.done),t.done)return void s.push(null);s.push(o.d.Buffer.from(t.value)),e()}})).catch((function(e){n(!0),s._destroyed||s.emit("error",e)}))};if(s._fetchResponse=t,s.url=t.url,s.statusCode=t.status,s.statusMessage=t.statusText,t.headers.forEach((function(e,t){s.headers[t.toLowerCase()]=e,s.rawHeaders.push(t,e)})),h.writableStream){var a=new WritableStream({write:function(e){return n(!1),new Promise((function(t,r){s._destroyed?r():s.push(o.d.Buffer.from(e))?t():s._resumeFetch=t}))},close:function(){n(!0),s._destroyed||s.push(null)},abort:function(e){n(!0),s._destroyed||s.emit("error",e)}});try{return void t.body.pipeTo(a).catch((function(e){n(!0),s._destroyed||s.emit("error",e)}))}catch{}}var i=t.body.getReader();e()}else{if(s._xhr=e,s._pos=0,s.url=e.responseURL,s.statusCode=e.status,s.statusMessage=e.statusText,e.getAllResponseHeaders().split(/\r?\n/).forEach((function(e){var t=e.match(/^([^:]+):\s*(.*)/);if(t){var r=t[1].toLowerCase();"set-cookie"===r?(void 0===s.headers[r]&&(s.headers[r]=[]),s.headers[r].push(t[2])):void 0!==s.headers[r]?s.headers[r]+=", "+t[2]:s.headers[r]=t[2],s.rawHeaders.push(t[1],t[2])}})),s._charset="x-user-defined",!h.overrideMimeType){var u=s.rawHeaders["mime-type"];if(u){var l=u.match(/;\s*charset=([^;])(;|$)/);l&&(s._charset=l[1].toLowerCase())}s._charset||(s._charset="utf-8")}}};u(f,c.Readable),f.prototype._read=function(){var e=this._resumeFetch;e&&(this._resumeFetch=null,e())},f.prototype._onXHRProgress=function(e){var t=this,r=t._xhr,n=null;switch(t._mode){case"text":if((n=r.responseText).length>t._pos){var s=n.substr(t._pos);if("x-user-defined"===t._charset){for(var a=o.d.Buffer.alloc(s.length),i=0;i<s.length;i++)a[i]=255&s.charCodeAt(i);t.push(a)}else t.push(s,t._charset);t._pos=n.length}break;case"arraybuffer":if(r.readyState!==l.DONE||!r.response)break;n=r.response,t.push(o.d.Buffer.from(new Uint8Array(n)));break;case"moz-chunked-arraybuffer":if(n=r.response,r.readyState!==l.LOADING||!n)break;t.push(o.d.Buffer.from(new Uint8Array(n)));break;case"ms-stream":if(n=r.response,r.readyState!==l.LOADING)break;var h=new o.o.MSStreamReader;h.onprogress=function(){h.result.byteLength>t._pos&&(t.push(o.d.Buffer.from(new Uint8Array(h.result.slice(t._pos)))),t._pos=h.result.byteLength)},h.onload=function(){e(!0),t.push(null)},h.readAsArrayBuffer(n)}t._xhr.readyState===l.DONE&&"ms-stream"!==t._mode&&(e(!0),t.push(null))};var p=a,d=(0,o.q)(),m=i,v=o.cq,y=m.IncomingMessage,g=m.readyStates;var _=s.exports=function(e){var t=this;v.Writable.call(t),t._opts=e,t._body=[],t._headers={},e.auth&&t.setHeader("Authorization","Basic "+o.d.Buffer.from(e.auth).toString("base64")),Object.keys(e.headers).forEach((function(r){t.setHeader(r,e.headers[r])}));var r,n=!0;if("disable-fetch"===e.mode||"requestTimeout"in e&&!p.abortController)n=!1,r=!0;else if("prefer-streaming"===e.mode)r=!1;else if("allow-wrong-content-type"===e.mode)r=!p.overrideMimeType;else{if(e.mode&&"default"!==e.mode&&"prefer-fast"!==e.mode)throw new Error("Invalid value for opts.mode");r=!0}t._mode=function(e,t){return p.fetch&&t?"fetch":p.mozchunkedarraybuffer?"moz-chunked-arraybuffer":p.msstream?"ms-stream":p.arraybuffer&&e?"arraybuffer":"text"}(r,n),t._fetchTimer=null,t._socketTimeout=null,t._socketTimer=null,t.on("finish",(function(){t._onFinish()}))};d(_,v.Writable),_.prototype.setHeader=function(e,t){var r=e.toLowerCase();-1===b.indexOf(r)&&(this._headers[r]={name:e,value:t})},_.prototype.getHeader=function(e){var t=this._headers[e.toLowerCase()];return t?t.value:null},_.prototype.removeHeader=function(e){delete this._headers[e.toLowerCase()]},_.prototype._onFinish=function(){var e=this;if(!e._destroyed){var t=e._opts;"timeout"in t&&0!==t.timeout&&e.setTimeout(t.timeout);var r=e._headers,n=null;"GET"!==t.method&&"HEAD"!==t.method&&(n=new Blob(e._body,{type:(r["content-type"]||{}).value||""}));var s=[];if(Object.keys(r).forEach((function(e){var t=r[e].name,o=r[e].value;Array.isArray(o)?o.forEach((function(e){s.push([t,e])})):s.push([t,o])})),"fetch"===e._mode){var a=null;if(p.abortController){var i=new AbortController;a=i.signal,e._fetchAbortController=i,"requestTimeout"in t&&0!==t.requestTimeout&&(e._fetchTimer=o.o.setTimeout((function(){e.emit("requestTimeout"),e._fetchAbortController&&e._fetchAbortController.abort()}),t.requestTimeout))}o.o.fetch(e._opts.url,{method:e._opts.method,headers:s,body:n||void 0,mode:"cors",credentials:t.withCredentials?"include":"same-origin",signal:a}).then((function(t){e._fetchResponse=t,e._resetTimers(!1),e._connect()}),(function(t){e._resetTimers(!0),e._destroyed||e.emit("error",t)}))}else{var h=e._xhr=new o.o.XMLHttpRequest;try{h.open(e._opts.method,e._opts.url,!0)}catch(u){return void o.d.process.nextTick((function(){e.emit("error",u)}))}"responseType"in h&&(h.responseType=e._mode),"withCredentials"in h&&(h.withCredentials=!!t.withCredentials),"text"===e._mode&&"overrideMimeType"in h&&h.overrideMimeType("text/plain; charset=x-user-defined"),"requestTimeout"in t&&(h.timeout=t.requestTimeout,h.ontimeout=function(){e.emit("requestTimeout")}),s.forEach((function(e){h.setRequestHeader(e[0],e[1])})),e._response=null,h.onreadystatechange=function(){switch(h.readyState){case g.LOADING:case g.DONE:e._onXHRProgress()}},"moz-chunked-arraybuffer"===e._mode&&(h.onprogress=function(){e._onXHRProgress()}),h.onerror=function(){e._destroyed||(e._resetTimers(!0),e.emit("error",new Error("XHR error")))};try{h.send(n)}catch(u){return void o.d.process.nextTick((function(){e.emit("error",u)}))}}}},_.prototype._onXHRProgress=function(){var e=this;e._resetTimers(!1),function(e){try{var t=e.status;return null!==t&&0!==t}catch{return!1}}(e._xhr)&&!e._destroyed&&(e._response||e._connect(),e._response._onXHRProgress(e._resetTimers.bind(e)))},_.prototype._connect=function(){var e=this;e._destroyed||(e._response=new y(e._xhr,e._fetchResponse,e._mode,e._resetTimers.bind(e)),e._response.on("error",(function(t){e.emit("error",t)})),e.emit("response",e._response))},_.prototype._write=function(e,t,r){this._body.push(e),r()},_.prototype._resetTimers=function(e){var t=this;o.o.clearTimeout(t._socketTimer),t._socketTimer=null,e?(o.o.clearTimeout(t._fetchTimer),t._fetchTimer=null):t._socketTimeout&&(t._socketTimer=o.o.setTimeout((function(){t.emit("timeout")}),t._socketTimeout))},_.prototype.abort=_.prototype.destroy=function(e){var t=this;t._destroyed=!0,t._resetTimers(!0),t._response&&(t._response._destroyed=!0),t._xhr?t._xhr.abort():t._fetchAbortController&&t._fetchAbortController.abort(),e&&t.emit("error",e)},_.prototype.end=function(e,t,r){"function"==typeof e&&(r=e,e=void 0),v.Writable.prototype.end.call(this,e,t,r)},_.prototype.setTimeout=function(e,t){var r=this;t&&r.once("timeout",t),r._socketTimeout=e,r._resetTimers(!1)},_.prototype.flushHeaders=function(){},_.prototype.setNoDelay=function(){},_.prototype.setSocketKeepAlive=function(){};var b=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","via"],T=s.exports,w=function(){for(var e={},t=0;t<arguments.length;t++){var r=arguments[t];for(var o in r)C.call(r,o)&&(e[o]=r[o])}return e},C=Object.prototype.hasOwnProperty;var R,x,A={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"},O={exports:{}},E={exports:{}};R=E,x=E.exports,function(e){var t=x&&!x.nodeType&&x,r=R&&!R.nodeType&&R,n="object"==typeof o.o&&o.o;(n.global===n||n.window===n||n.self===n)&&(e=n);var s,a,i=2147483647,h=36,u=1,c=26,l=38,f=700,p=72,d=128,m="-",v=/^xn--/,y=/[^\x20-\x7E]/,g=/[\x2E\u3002\uFF0E\uFF61]/g,_={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},b=h-u,T=Math.floor,w=String.fromCharCode;function C(e){throw new RangeError(_[e])}function A(e,t){for(var r=e.length,o=[];r--;)o[r]=t(e[r]);return o}function O(e,t){var r=e.split("@"),o="";return r.length>1&&(o=r[0]+"@",e=r[1]),o+A((e=e.replace(g,".")).split("."),t).join(".")}function E(e){for(var t,r,o=[],n=0,s=e.length;n<s;)(t=e.charCodeAt(n++))>=55296&&t<=56319&&n<s?56320==(64512&(r=e.charCodeAt(n++)))?o.push(((1023&t)<<10)+(1023&r)+65536):(o.push(t),n--):o.push(t);return o}function q(e){return A(e,(function(e){var t="";return e>65535&&(t+=w((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=w(e)})).join("")}function S(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:h}function U(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function L(e,t,r){var o=0;for(e=r?T(e/f):e>>1,e+=T(e/t);e>b*c>>1;o+=h)e=T(e/b);return T(o+(b+1)*e/(e+l))}function P(e){var t,r,o,n,s,a,l,f,v,y,g=[],_=e.length,b=0,w=d,R=p;for((r=e.lastIndexOf(m))<0&&(r=0),o=0;o<r;++o)e.charCodeAt(o)>=128&&C("not-basic"),g.push(e.charCodeAt(o));for(n=r>0?r+1:0;n<_;){for(s=b,a=1,l=h;n>=_&&C("invalid-input"),((f=S(e.charCodeAt(n++)))>=h||f>T((i-b)/a))&&C("overflow"),b+=f*a,!(f<(v=l<=R?u:l>=R+c?c:l-R));l+=h)a>T(i/(y=h-v))&&C("overflow"),a*=y;R=L(b-s,t=g.length+1,0==s),T(b/t)>i-w&&C("overflow"),w+=T(b/t),b%=t,g.splice(b++,0,w)}return q(g)}function k(e){var t,r,o,n,s,a,l,f,v,y,g,_,b,R,x,A=[];for(_=(e=E(e)).length,t=d,r=0,s=p,a=0;a<_;++a)(g=e[a])<128&&A.push(w(g));for(o=n=A.length,n&&A.push(m);o<_;){for(l=i,a=0;a<_;++a)(g=e[a])>=t&&g<l&&(l=g);for(l-t>T((i-r)/(b=o+1))&&C("overflow"),r+=(l-t)*b,t=l,a=0;a<_;++a)if((g=e[a])<t&&++r>i&&C("overflow"),g==t){for(f=r,v=h;!(f<(y=v<=s?u:v>=s+c?c:v-s));v+=h)x=f-y,R=h-y,A.push(w(U(y+x%R,0))),f=T(x/R);A.push(w(U(f,0))),s=L(r,b,o==n),r=0,++o}++r,++t}return A.join("")}if(s={version:"1.4.1",ucs2:{decode:E,encode:q},decode:P,encode:k,toASCII:function(e){return O(e,(function(e){return y.test(e)?"xn--"+k(e):e}))},toUnicode:function(e){return O(e,(function(e){return v.test(e)?P(e.slice(4).toLowerCase()):e}))}},t&&r)if(R.exports==t)r.exports=s;else for(a in s)s.hasOwnProperty(a)&&(t[a]=s[a]);else e.punycode=s}(o.o);var q=E.exports;!function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=q,n=o.ap;function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=s(r),i=s(n),h=a.default,u={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}},c=S,l=function(e,t){return S(e,!1,!0).resolve(t)},f=function(e,t){return e?S(e,!1,!0).resolveObject(t):t},p=function(e){return u.isString(e)&&(e=S(e)),e instanceof m?e.format():m.prototype.format.call(e)},d=m;function m(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var v=/^([a-z0-9.+-]+:)/i,y=/:[0-9]*$/,g=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,_=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),b=["'"].concat(_),T=["%","/","?",";","#"].concat(b),w=["/","?","#"],C=/^[+a-z0-9A-Z_-]{0,63}$/,R=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,x={javascript:!0,"javascript:":!0},A={javascript:!0,"javascript:":!0},O={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},E=i.default;function S(e,t,r){if(e&&u.isObject(e)&&e instanceof m)return e;var o=new m;return o.parse(e,t,r),o}m.prototype.parse=function(e,t,r){if(!u.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var o=e.indexOf("?"),n=-1!==o&&o<e.indexOf("#")?"?":"#",s=e.split(n);s[0]=s[0].replace(/\\/g,"/");var a=e=s.join(n);if(a=a.trim(),!r&&1===e.split("#").length){var i=g.exec(a);if(i)return this.path=a,this.href=a,this.pathname=i[1],i[2]?(this.search=i[2],this.query=t?E.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var c=v.exec(a);if(c){var l=(c=c[0]).toLowerCase();this.protocol=l,a=a.substr(c.length)}if(r||c||a.match(/^\/\/[^@\/]+@[^@\/]+/)){var f="//"===a.substr(0,2);f&&(!c||!A[c])&&(a=a.substr(2),this.slashes=!0)}if(!A[c]&&(f||c&&!O[c])){for(var p=-1,d=0;d<w.length;d++){-1!==(_=a.indexOf(w[d]))&&(-1===p||_<p)&&(p=_)}var m,y;-1!==(y=-1===p?a.lastIndexOf("@"):a.lastIndexOf("@",p))&&(m=a.slice(0,y),a=a.slice(y+1),this.auth=decodeURIComponent(m)),p=-1;for(d=0;d<T.length;d++){var _;-1!==(_=a.indexOf(T[d]))&&(-1===p||_<p)&&(p=_)}-1===p&&(p=a.length),this.host=a.slice(0,p),a=a.slice(p),this.parseHost(),this.hostname=this.hostname||"";var q="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!q)for(var S=this.hostname.split(/\./),U=(d=0,S.length);d<U;d++){var L=S[d];if(L&&!L.match(C)){for(var P="",k=0,I=L.length;k<I;k++)L.charCodeAt(k)>127?P+="x":P+=L[k];if(!P.match(C)){var j=S.slice(0,d),N=S.slice(d+1),H=L.match(R);H&&(j.push(H[1]),N.unshift(H[2])),N.length&&(a="/"+N.join(".")+a),this.hostname=j.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),q||(this.hostname=h.toASCII(this.hostname));var M=this.port?":"+this.port:"",F=this.hostname||"";this.host=F+M,this.href+=this.host,q&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==a[0]&&(a="/"+a))}if(!x[l])for(d=0,U=b.length;d<U;d++){var D=b[d];if(-1!==a.indexOf(D)){var B=encodeURIComponent(D);B===D&&(B=escape(D)),a=a.split(D).join(B)}}var G=a.indexOf("#");-1!==G&&(this.hash=a.substr(G),a=a.slice(0,G));var z=a.indexOf("?");if(-1!==z?(this.search=a.substr(z),this.query=a.substr(z+1),t&&(this.query=E.parse(this.query)),a=a.slice(0,z)):t&&(this.search="",this.query={}),a&&(this.pathname=a),O[l]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){M=this.pathname||"";var X=this.search||"";this.path=M+X}return this.href=this.format(),this},m.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",o=this.hash||"",n=!1,s="";this.host?n=e+this.host:this.hostname&&(n=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(n+=":"+this.port)),this.query&&u.isObject(this.query)&&Object.keys(this.query).length&&(s=E.stringify(this.query));var a=this.search||s&&"?"+s||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||O[t])&&!1!==n?(n="//"+(n||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):n||(n=""),o&&"#"!==o.charAt(0)&&(o="#"+o),a&&"?"!==a.charAt(0)&&(a="?"+a),t+n+(r=r.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(a=a.replace("#","%23"))+o},m.prototype.resolve=function(e){return this.resolveObject(S(e,!1,!0)).format()},m.prototype.resolveObject=function(e){if(u.isString(e)){var t=new m;t.parse(e,!1,!0),e=t}for(var r=new m,o=Object.keys(this),n=0;n<o.length;n++){var s=o[n];r[s]=this[s]}if(r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var a=Object.keys(e),i=0;i<a.length;i++){var h=a[i];"protocol"!==h&&(r[h]=e[h])}return O[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!O[e.protocol]){for(var c=Object.keys(e),l=0;l<c.length;l++){var f=c[l];r[f]=e[f]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||A[e.protocol])r.pathname=e.pathname;else{for(var p=(e.pathname||"").split("/");p.length&&!(e.host=p.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),r.pathname=p.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var d=r.pathname||"",v=r.search||"";r.path=d+v}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var y=r.pathname&&"/"===r.pathname.charAt(0),g=e.host||e.pathname&&"/"===e.pathname.charAt(0),_=g||y||r.host&&e.pathname,b=_,T=r.pathname&&r.pathname.split("/")||[],w=(p=e.pathname&&e.pathname.split("/")||[],r.protocol&&!O[r.protocol]);if(w&&(r.hostname="",r.port=null,r.host&&(""===T[0]?T[0]=r.host:T.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===p[0]?p[0]=e.host:p.unshift(e.host)),e.host=null),_=_&&(""===p[0]||""===T[0])),g)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,T=p;else if(p.length)T||(T=[]),T.pop(),T=T.concat(p),r.search=e.search,r.query=e.query;else if(!u.isNullOrUndefined(e.search)){if(w)r.hostname=r.host=T.shift(),(q=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=q.shift(),r.host=r.hostname=q.shift());return r.search=e.search,r.query=e.query,(!u.isNull(r.pathname)||!u.isNull(r.search))&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!T.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var C=T.slice(-1)[0],R=(r.host||e.host||T.length>1)&&("."===C||".."===C)||""===C,x=0,E=T.length;E>=0;E--)"."===(C=T[E])?T.splice(E,1):".."===C?(T.splice(E,1),x++):x&&(T.splice(E,1),x--);if(!_&&!b)for(;x--;x)T.unshift("..");_&&""!==T[0]&&(!T[0]||"/"!==T[0].charAt(0))&&T.unshift(""),R&&"/"!==T.join("/").substr(-1)&&T.push("");var q,S=""===T[0]||T[0]&&"/"===T[0].charAt(0);w&&(r.hostname=r.host=S?"":T.length?T.shift():"",(q=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=q.shift(),r.host=r.hostname=q.shift()));return(_=_||r.host&&T.length)&&!S&&T.unshift(""),T.length?r.pathname=T.join("/"):(r.pathname=null,r.path=null),(!u.isNull(r.pathname)||!u.isNull(r.search))&&(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},m.prototype.parseHost=function(){var e=this.host,t=y.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var U=function(e){function t(){var t=this||self;return delete e.prototype.__magic__,t}return"object"==typeof globalThis?globalThis:this?t():(e.defineProperty(e.prototype,"__magic__",{configurable:!0,get:t}),__magic__)}(Object),L=p,P=c,k=l,I=d,j=U.URL,N=U.URLSearchParams,H=/%/g,M=/\\/g,F=/\n/g,D=/\r/g,B=/\t/g;var G=function(e){if(typeof e>"u")throw new TypeError('The "domain" argument must be specified');return new j("http://"+e).hostname},z=function(e){if(typeof e>"u")throw new TypeError('The "domain" argument must be specified');return new j("http://"+e).hostname},X=function(e){var t,r=new j("file://"),o=function(){for(var e="",t=!1,r=arguments.length-1;r>=-1&&!t;r--){var o=r>=0?arguments[r]:"/";if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,t="/"===o.charAt(0))}return e=function(e,t){for(var r=0,o=e.length-1;o>=0;o--){var n=e[o];"."===n?e.splice(o,1):".."===n?(e.splice(o,1),r++):r&&(e.splice(o,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}(function(e,t){if(e.filter)return e.filter(t);for(var r=[],o=0;o<e.length;o++)t(e[o],o,e)&&r.push(e[o]);return r}(e.split("/"),(function(e){return!!e})),!t).join("/"),(t?"/":"")+e||"."}(e);return 47===e.charCodeAt(e.length-1)&&"/"!==o[o.length-1]&&(o+="/"),r.pathname=((t=o).includes("%")&&(t=t.replace(H,"%25")),t.includes("\\")&&(t=t.replace(M,"%5C")),t.includes("\n")&&(t=t.replace(F,"%0A")),t.includes("\r")&&(t=t.replace(D,"%0D")),t.includes("\t")&&(t=t.replace(B,"%09")),t),r},K=function(e){if(!function(e){var t=e??null;return!(null===t||null==t||!t.href||null==t||!t.origin)}(e)&&"string"!=typeof e)throw new TypeError('The "path" argument must be of type string or an instance of URL. Received type '+typeof e+" ("+e+")");var t=new j(e);if("file:"!==t.protocol)throw new TypeError("The URL must be of scheme file");return function(e){if(""!==e.hostname)throw new TypeError('File URL host must be "localhost" or empty on browser');for(var t=e.pathname,r=0;r<t.length;r++)if("%"===t[r]){var o=32|t.codePointAt(r+2);if("2"===t[r+1]&&102===o)throw new TypeError("File URL path must not include encoded / characters")}return decodeURIComponent(t)}(t)},$=function(e,t){var r,o,n;if(void 0===t&&(t={}),!(e instanceof j))return L(e);if("object"!=typeof t||null===t)throw new TypeError('The "options" argument must be of type object.');var s=null==(r=t.auth)||r,a=null==(o=t.fragment)||o,i=null==(n=t.search)||n,h=new j(e.toString());return s||(h.username="",h.password=""),a||(h.hash=""),i||(h.search=""),h.toString()},V={format:$,parse:P,resolve:k,resolveObject:f,Url:I,URL:j,URLSearchParams:N,domainToASCII:G,domainToUnicode:z,pathToFileURL:X,fileURLToPath:K};t.URL=j,t.URLSearchParams=N,t.Url=I,t.default=V,t.domainToASCII=G,t.domainToUnicode=z,t.fileURLToPath=K,t.format=$,t.parse=P,t.pathToFileURL=X,t.resolve=k,t.resolveObject=f,t=e.exports=V}(O,O.exports);var S=O.exports;!function(e){var t=T,r=i,n=w,s=A,a=S,h=e;h.request=function(e,r){e="string"==typeof e?a.parse(e):n(e);var s=-1===o.o.location.protocol.search(/^https?:$/)?"http:":"",i=e.protocol||s,h=e.hostname||e.host,u=e.port,c=e.path||"/";h&&-1!==h.indexOf(":")&&(h="["+h+"]"),e.url=(h?i+"//"+h:"")+(u?":"+u:"")+c,e.method=(e.method||"GET").toUpperCase(),e.headers=e.headers||{};var l=new t(e);return r&&l.on("response",r),l},h.get=function(e,t){var r=h.request(e,t);return r.end(),r},h.ClientRequest=t,h.IncomingMessage=r.IncomingMessage,h.Agent=function(){},h.Agent.defaultMaxSockets=4,h.globalAgent=new h.Agent,h.STATUS_CODES=s,h.METHODS=["CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LOCK","M-SEARCH","MERGE","MKACTIVITY","MKCOL","MOVE","NOTIFY","OPTIONS","PATCH","POST","PROPFIND","PROPPATCH","PURGE","PUT","REPORT","SEARCH","SUBSCRIBE","TRACE","UNLOCK","UNSUBSCRIBE"]}(n);var U={exports:{}};!function(e){var t=n,r=S,o=e.exports;for(var s in t)t.hasOwnProperty(s)&&(o[s]=t[s]);function a(e){if("string"==typeof e&&(e=r.parse(e)),e.protocol||(e.protocol="https:"),"https:"!==e.protocol)throw new Error('Protocol "'+e.protocol+'" not supported. Expected "https:"');return e}o.request=function(e,r){return e=a(e),t.request.call(this,e,r)},o.get=function(e,r){return e=a(e),t.get.call(this,e,r)}}(U);var L=U.exports}}]);
//# sourceMappingURL=1561.5d17ee4f.chunk.js.map