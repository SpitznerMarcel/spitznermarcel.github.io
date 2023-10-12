(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function C(){}function G(e,t){for(const n in t)e[n]=t[n];return e}function fe(e){return e()}function re(){return Object.create(null)}function W(e){e.forEach(fe)}function de(e){return typeof e=="function"}function X(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let H;function se(e,t){return H||(H=document.createElement("a")),H.href=t,e===H.href}function je(e){return Object.keys(e).length===0}function le(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function m(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function ge(e){return document.createTextNode(e)}function E(){return ge(" ")}function $e(){return ge("")}function Ee(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Le(e){return Array.from(e.childNodes)}function _(e,t,n,o){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function B(e,t,n){e.classList[n?"add":"remove"](t)}let k;function T(e){k=e}function me(){if(!k)throw new Error("Function called outside component initialization");return k}function pe(e){me().$$.on_mount.push(e)}function Oe(e){me().$$.on_destroy.push(e)}const O=[],ae=[];let M=[];const ce=[],he=Promise.resolve();let K=!1;function _e(){K||(K=!0,he.then(ye))}function J(){return _e(),he}function V(e){M.push(e)}const U=new Set;let L=0;function ye(){if(L!==0)return;const e=k;do{try{for(;L<O.length;){const t=O[L];L++,T(t),Se(t.$$)}}catch(t){throw O.length=0,L=0,t}for(T(null),O.length=0,L=0;ae.length;)ae.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];U.has(n)||(U.add(n),n())}M.length=0}while(O.length);for(;ce.length;)ce.pop()();K=!1,U.clear(),T(e)}function Se(e){if(e.fragment!==null){e.update(),W(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}function Me(e){const t=[],n=[];M.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),M=t}const A=new Set;let Pe;function Q(e,t){e&&e.i&&(A.delete(e),e.i(t))}function ve(e,t,n,o){if(e&&e.o){if(A.has(e))return;A.add(e),Pe.c.push(()=>{A.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}const Te=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ce(e,t){const n={},o={},i={$$scope:1};let s=e.length;for(;s--;){const r=e[s],l=t[s];if(l){for(const c in r)c in l||(o[c]=1);for(const c in l)i[c]||(n[c]=l[c],i[c]=1);e[s]=l}else for(const c in r)i[c]=1}for(const r in o)r in n||(n[r]=void 0);return n}function ke(e){return typeof e=="object"&&e!==null?e:{}}function be(e){e&&e.c()}function Z(e,t,n,o){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),o||V(()=>{const r=e.$$.on_mount.map(fe).filter(de);e.$$.on_destroy?e.$$.on_destroy.push(...r):W(r),e.$$.on_mount=[]}),s.forEach(V)}function ee(e,t){const n=e.$$;n.fragment!==null&&(Me(n.after_update),W(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ne(e,t){e.$$.dirty[0]===-1&&(O.push(e),_e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,n,o,i,s,r,l=[-1]){const c=k;T(e);const a=e.$$={fragment:null,ctx:[],props:s,update:C,not_equal:i,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:re(),dirty:l,skip_bound:!1,root:t.target||c.$$.root};r&&r(a.root);let v=!1;if(a.ctx=n?n(e,t.props||{},(g,b,...u)=>{const d=u.length?u[0]:b;return a.ctx&&i(a.ctx[g],a.ctx[g]=d)&&(!a.skip_bound&&a.bound[g]&&a.bound[g](d),v&&Ne(e,g)),b}):[],a.update(),v=!0,W(a.before_update),a.fragment=o?o(a.ctx):!1,t.target){if(t.hydrate){const g=Le(t.target);a.fragment&&a.fragment.l(g),g.forEach(x)}else a.fragment&&a.fragment.c();t.intro&&Q(e.$$.fragment),Z(e,t.target,t.anchor,t.customElement),ye()}T(c)}class ne{$destroy(){ee(this,1),this.$destroy=C}$on(t,n){if(!de(n))return C;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(t){this.$$set&&!je(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},we={},F={};Object.defineProperty(F,"__esModule",{value:!0});F.Signal=void 0;class xe{constructor(t,n){console.log(t,n),this.target=t,this.consumer=n}validCycle(){return this.target!==this.consumer}emit(t,n){console.log("emit",this.validCycle()),this.validCycle()&&console.log(this.target),this.target.postMessage({key:t,data:n},"*")}stop(t){this.validCycle()&&this.consumer.removeEventListener("message",t,!1)}on(t,n){console.log(`listen iframe: ${t}`);const o=i=>{i.data.key===t&&n(i)};return this.validCycle()&&this.consumer.addEventListener("message",o,!1),o}restart(t){console.log("restart"),this.validCycle()&&this.consumer.addEventListener("message",t,!1)}}F.Signal=xe;xe.key=Symbol();(function(e){var t=q&&q.__createBinding||(Object.create?function(o,i,s,r){r===void 0&&(r=s);var l=Object.getOwnPropertyDescriptor(i,s);(!l||("get"in l?!i.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return i[s]}}),Object.defineProperty(o,r,l)}:function(o,i,s,r){r===void 0&&(r=s),o[r]=i[s]}),n=q&&q.__exportStar||function(o,i){for(var s in o)s!=="default"&&!Object.prototype.hasOwnProperty.call(i,s)&&t(i,o,s)};Object.defineProperty(e,"__esModule",{value:!0}),n(F,e)})(we);const{document:ue}=Te;function ze(e){let t,n,o,i,s,r,l,c,a,v,g,b,u,d,p,w,j,N,z,oe,P,R,D,I,ie;return{c(){t=h("script"),o=h("script"),s=E(),r=h("div"),l=h("div"),c=h("div"),a=h("div"),a.innerHTML=`<h2 class="heading-style-h3 text-white svelte-1uu8jb">Redeem your tree-planting gift</h2> 
                <p class="text-white svelte-1uu8jb">Easily download your impact certificate by inputting your code, along with your name for certificate personalisation and your email for certificate delivery.</p>`,v=E(),g=h("div"),b=E(),u=h("div"),d=h("div"),d.innerHTML=`<span class="svelte-1uu8jb">Your personalised certificate is on its way to your e-mail.</span> 
                    <span class="svelte-1uu8jb">Feel like doing more good?</span>`,p=E(),w=h("div"),j=h("a"),N=h("span"),N.innerHTML='<span class="svelte-1uu8jb"><span class="cog-button__text svelte-1uu8jb">Your Certificate</span></span>',oe=E(),P=h("div"),P.innerHTML='<div id="form2"></div>',R=E(),D=$e(),se(t.src,n="https://www.cognitoforms.com/f/seamless.js")||f(t,"src",n),f(o,"type","text/javascript"),se(o.src,i="https://cdn.weglot.com/weglot.min.js")||f(o,"src",i),f(a,"class","content svelte-1uu8jb"),_(a,"align-self","stretch"),_(a,"flex-direction","column"),_(a,"justify-content","flex-start"),_(a,"align-items","flex-start"),_(a,"gap","24px"),_(a,"display","flex"),B(a,"hide",!e[0]),f(g,"id","form1"),f(d,"class","confirmation-message svelte-1uu8jb"),f(N,"class","svelte-1uu8jb"),f(j,"id","cert-link"),f(j,"href",""),f(j,"class",z="button el-button "+(e[1]?"":" button--loading")+" svelte-1uu8jb"),f(j,"target","_blank"),f(w,"class","cog-page__navigation svelte-1uu8jb"),_(w,"height","61px"),_(w,"padding-top","16px"),_(w,"flex-direction","column"),_(w,"justify-content","flex-start"),_(w,"align-items","flex-start"),_(w,"gap","16px"),_(w,"display","inline-flex"),f(u,"id","cert-container"),f(u,"class","alignment svelte-1uu8jb"),B(u,"hide",e[0]),f(c,"id","form-content-1"),f(c,"class","svelte-1uu8jb"),f(P,"id","form-content-2"),f(P,"class","svelte-1uu8jb"),f(l,"id","form-wrapper"),f(l,"class","svelte-1uu8jb"),f(r,"class","row svelte-1uu8jb")},m(y,$){m(ue.head,t),m(ue.head,o),S(y,s,$),S(y,r,$),m(r,l),m(l,c),m(c,a),m(c,v),m(c,g),m(c,b),m(c,u),m(u,d),m(u,p),m(u,w),m(w,j),m(j,N),m(l,oe),m(l,P),S(y,R,$),S(y,D,$),I||(ie=Ee(t,"load",e[2]),I=!0)},p(y,[$]){$&1&&B(a,"hide",!y[0]),$&2&&z!==(z="button el-button "+(y[1]?"":" button--loading")+" svelte-1uu8jb")&&f(j,"class",z),$&1&&B(u,"hide",y[0])},i:C,o:C,d(y){x(t),x(o),y&&x(s),y&&x(r),y&&x(R),y&&x(D),I=!1,ie()}}}function Y(e){var t="Plant My Tree!",n="Thank you!";e==="de"&&(t="Pflanze meinen Baum!"),n="Vielen Dank!",document.getElementsByClassName("cog-button__text")[0].innerHTML=t,document.querySelector(".cog-confirmation h2")!==null&&(document.querySelector(".cog-confirmation h2").innerHTML=n)}function He(e,t,n){let o=!1,i=!1,s=!0,r=!1,l="en";pe(()=>{i=!0,o&&a()});function c(){o=!0,i&&a()}function a(){const v=Cognito("3Mvi0Dz0_Ueo1f-iejxOxw"),g=v.mount("13","#form1");console.log("Api ",v),g.on("ready",function(){l=Weglot.getCurrentLang(),Y(current_language),Weglot.on("languageChanged",Y)}),console.log(Weglot.initialized),g.on("afterSubmit",function(b){Y(l),n(0,s=!1);let u=new XMLHttpRequest;u.open("POST","https://automate.impacthero.com/webhook/parsing-certificate",!0),u.onreadystatechange=function(){if(u.readyState===4&&u.status===200){console.log(this),console.log(this.responseText);const p=JSON.parse(this.responseText);console.log(p),p.lang==="de"?document.getElementById("cert-link").href=p.original.de_certificate:document.getElementById("cert-link").href=p.original.en_certificate,n(1,r=!0)}};var d=JSON.stringify(b.data.entry);u.send(d)})}return[s,r,c]}class Be extends ne{constructor(t){super(),te(this,t,He,ze,X,{})}}function qe(e){let t,n,o;return n=new Be({}),{c(){t=h("div"),be(n.$$.fragment),_(t,"--iframe-height",e[0]),f(t,"class","iframe-container svelte-xl0k8c")},m(i,s){S(i,t,s),Z(n,t,null),o=!0},p(i,[s]){(!o||s&1)&&_(t,"--iframe-height",i[0])},i(i){o||(Q(n.$$.fragment,i),o=!0)},o(i){ve(n.$$.fragment,i),o=!1},d(i){i&&x(t),ee(n)}}}function Ae(e,t,n){let{href:o}=t,{onLoad:i=u=>{}}=t,{onError:s=u=>{}}=t,r,l,c,a,v,g,b="auto";return pe(()=>{l=new we.Signal(r==null?void 0:r.contentWindow,window),c=l.on("__gmt-widget-iframe-init",d=>{const p=d.data.data.height;console.log(`init ${p}px`),n(0,b=`${p}px`)}),a=l.on("__gmt-widget-iframe-resize",d=>{console.log(d),l.stop(a);const p=d.data.data.height;console.log(`resize ${p}px`),n(0,b=`${p}px`),J(),l.restart(a)}),v=l.on("__gmt-widget-iframe-modal-open",d=>{console.log("open modal",d);const p=new URL(d.data.data.url);J(),p.href}),g=l.on("__gmt-widget-iframe-modal-close",d=>{console.log("close modal",d),J()}),new ResizeObserver(d=>{console.log(d),l.emit("__gmt-widget-iframe-resize")}).observe(document.documentElement)}),Oe(()=>{l.stop(c),l.stop(a),l.stop(v),l.stop(g)}),e.$$set=u=>{"href"in u&&n(1,o=u.href),"onLoad"in u&&n(2,i=u.onLoad),"onError"in u&&n(3,s=u.onError)},[b,o,i,s]}class We extends ne{constructor(t){super(),te(this,t,Ae,qe,X,{href:1,onLoad:2,onError:3})}}function Fe(e){let t,n,o;const i=[e[0]];let s={};for(let r=0;r<i.length;r+=1)s=G(s,i[r]);return n=new We({props:s}),{c(){t=h("main"),be(n.$$.fragment)},m(r,l){S(r,t,l),Z(n,t,null),o=!0},p(r,[l]){const c=l&1?Ce(i,[ke(r[0])]):{};n.$set(c)},i(r){o||(Q(n.$$.fragment,r),o=!0)},o(r){ve(n.$$.fragment,r),o=!1},d(r){r&&x(t),ee(n)}}}function Re(e,t,n){return e.$$set=o=>{n(0,t=G(G({},t),le(o)))},t=le(t),[t]}class De extends ne{constructor(t){super(),te(this,t,Re,Fe,X,{})}}new De({target:document.getElementById("app"),props:{href:"http://localhost:8001/",onLoad:function(e){console.log("property",e)}}});
