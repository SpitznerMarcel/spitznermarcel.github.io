(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function N(){}function ee(e,t){for(const n in t)e[n]=t[n];return e}function pe(e){return e()}function ce(){return Object.create(null)}function J(e){e.forEach(pe)}function ge(e){return typeof e=="function"}function Q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let I;function be(e,t){return I||(I=document.createElement("a")),I.href=t,e===I.href}function Ee(e){return Object.keys(e).length===0}function fe(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function h(e,t){e.appendChild(t)}function k(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function me(e){return document.createTextNode(e)}function E(){return me(" ")}function ke(){return me("")}function Se(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Le(e){return Array.from(e.childNodes)}function v(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function Y(e,t,n){e.classList[n?"add":"remove"](t)}let j;function O(e){j=e}function he(){if(!j)throw new Error("Function called outside component initialization");return j}function oe(e){he().$$.on_mount.push(e)}function $e(e){he().$$.on_destroy.push(e)}const P=[],ue=[];let C=[];const de=[],_e=Promise.resolve();let te=!1;function ye(){te||(te=!0,_e.then(ve))}function V(){return ye(),_e}function ne(e){C.push(e)}const U=new Set;let $=0;function ve(){if($!==0)return;const e=j;do{try{for(;$<P.length;){const t=P[$];$++,O(t),Pe(t.$$)}}catch(t){throw P.length=0,$=0,t}for(O(null),P.length=0,$=0;ue.length;)ue.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];U.has(n)||(U.add(n),n())}C.length=0}while(P.length);for(;de.length;)de.pop()();te=!1,U.clear(),O(e)}function Pe(e){if(e.fragment!==null){e.update(),J(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}function Ne(e){const t=[],n=[];C.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),C=t}const H=new Set;let Ce;function z(e,t){e&&e.i&&(H.delete(e),e.i(t))}function ie(e,t,n,i){if(e&&e.o){if(H.has(e))return;H.add(e),Ce.c.push(()=>{H.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const Me=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Oe(e,t){const n={},i={},o={$$scope:1};let s=e.length;for(;s--;){const r=e[s],l=t[s];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)o[c]||(n[c]=l[c],o[c]=1);e[s]=l}else for(const c in r)o[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function je(e){return typeof e=="object"&&e!==null?e:{}}function re(e){e&&e.c()}function A(e,t,n,i){const{fragment:o,after_update:s}=e.$$;o&&o.m(t,n),i||ne(()=>{const r=e.$$.on_mount.map(pe).filter(ge);e.$$.on_destroy?e.$$.on_destroy.push(...r):J(r),e.$$.on_mount=[]}),s.forEach(ne)}function q(e,t){const n=e.$$;n.fragment!==null&&(Ne(n.after_update),J(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Te(e,t){e.$$.dirty[0]===-1&&(P.push(e),ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(e,t,n,i,o,s,r,l=[-1]){const c=j;O(e);const f=e.$$={fragment:null,ctx:[],props:s,update:N,not_equal:o,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:ce(),dirty:l,skip_bound:!1,root:t.target||c.$$.root};r&&r(f.root);let w=!1;if(f.ctx=n?n(e,t.props||{},(u,p,...g)=>{const a=g.length?g[0]:p;return f.ctx&&o(f.ctx[u],f.ctx[u]=a)&&(!f.skip_bound&&f.bound[u]&&f.bound[u](a),w&&Te(e,u)),p}):[],f.update(),w=!0,J(f.before_update),f.fragment=i?i(f.ctx):!1,t.target){if(t.hydrate){const u=Le(t.target);f.fragment&&f.fragment.l(u),u.forEach(x)}else f.fragment&&f.fragment.c();t.intro&&z(e.$$.fragment),A(e,t.target,t.anchor,t.customElement),ve()}O(c)}class R{$destroy(){q(this,1),this.$destroy=N}$on(t,n){if(!ge(n))return N;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!Ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},we={},B={};Object.defineProperty(B,"__esModule",{value:!0});B.Signal=void 0;class xe{constructor(t,n){console.log(t,n),this.target=t,this.consumer=n}validCycle(){return this.target!==this.consumer}emit(t,n){console.log("emit",this.validCycle()),this.validCycle()&&console.log(this.target),this.target.postMessage({key:t,data:n},"*")}stop(t){this.validCycle()&&this.consumer.removeEventListener("message",t,!1)}on(t,n){console.log(`listen iframe: ${t}`);const i=o=>{o.data.key===t&&n(o)};return this.validCycle()&&this.consumer.addEventListener("message",i,!1),i}restart(t){console.log("restart"),this.validCycle()&&this.consumer.addEventListener("message",t,!1)}}B.Signal=xe;xe.key=Symbol();(function(e){var t=F&&F.__createBinding||(Object.create?function(i,o,s,r){r===void 0&&(r=s);var l=Object.getOwnPropertyDescriptor(o,s);(!l||("get"in l?!o.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return o[s]}}),Object.defineProperty(i,r,l)}:function(i,o,s,r){r===void 0&&(r=s),i[r]=o[s]}),n=F&&F.__exportStar||function(i,o){for(var s in i)s!=="default"&&!Object.prototype.hasOwnProperty.call(o,s)&&t(o,i,s)};Object.defineProperty(e,"__esModule",{value:!0}),n(B,e)})(we);function De(e){let t,n;return{c(){t=E(),n=y("div"),n.innerHTML=`<div class="payment-button"><b>Want to buy more? 📬</b> 
        <p>Check out our shop!</p> 
        <button class="submit">Create more impact!</button> 
        <span class="close svelte-kv7mg8">x</span></div>`,d(n,"class","exit-intent-popup svelte-kv7mg8")},m(i,o){k(i,t,o),k(i,n,o)},p:N,i:N,o:N,d(i){i&&x(t),i&&x(n)}}}function We(e){const t={setCookie(o,s,r){let l="";if(r){const c=new Date;c.setTime(c.getTime()+r*24*60*60*1e3),l="; expires="+c.toUTCString()}document.cookie=o+"="+(s||"")+l+";"},getCookie(o){const s=document.cookie.split(";");for(const r of s)if(r.indexOf(o+"=")>-1)return r.split("=")[1];return null}},n=o=>{([...o.target.classList].includes("exit-intent-popup")||o.target.className==="close"||o.keyCode===27)&&document.querySelector(".exit-intent-popup").classList.remove("visible")},i=o=>{!o.toElement&&!o.relatedTarget&&o.clientY<10&&(document.removeEventListener("mouseout",i),document.querySelector(".exit-intent-popup").classList.add("visible"),t.setCookie("exitIntentShown",!0,30))};return oe(()=>{console.log(!t.getCookie("exitIntentShown")),t.getCookie("exitIntentShown")||setTimeout(()=>{document.addEventListener("mouseout",i),document.addEventListener("keydown",n),document.querySelector(".exit-intent-popup").addEventListener("click",n)},0)}),[]}class Ie extends R{constructor(t){super(),G(this,t,We,De,Q,{})}}const{document:Ye}=Me;function Fe(e){let t,n,i,o,s,r,l,c,f,w,u,p,g,a,_,T,D,se,M,le,W,L,Z,K,S,X,ae;return L=new Ie({}),{c(){t=y("script"),i=E(),o=y("div"),s=y("div"),r=y("div"),l=y("div"),l.innerHTML=`<div class="RedeemYourTreePlantingGift" style="align-self: stretch; color: white; font-size: 48px; font-family: Plus Jakarta Sans; font-weight: 700; line-height: 57.60px; word-wrap: break-word">Redeem your tree-planting gift</div> 
                <div class="EasilyDownloadYourImpactCertificateByInputtingYourCodeAlongWithYourNameForCertificatePersonalisationAndYourEmailForCertificateDelivery" style="align-self: stretch; color: white; font-size: 18px; font-family: Plus Jakarta Sans; font-weight: 600; line-height: 27px; word-wrap: break-word">Easily download your impact certificate by inputting your code, along with your name for certificate personalisation and your email for certificate delivery.</div>`,c=E(),f=y("div"),w=E(),u=y("div"),p=y("div"),p.innerHTML=`<span style="color: &#39;white&#39;, fontSize: 20, fontFamily: &#39;Plus Jakarta Sans&#39;, fontWeight: &#39;500&#39;, lineHeight: 30, wordWrap: &#39;break-word&#39;">Your personalised certificate is on its way to your e-mail.</span> 
                    <span style="color: &#39;white&#39;, fontSize: 20, fontFamily: &#39;Plus Jakarta Sans&#39;, fontWeight: &#39;500&#39;, lineHeight: 30, wordWrap: &#39;break-word&#39;">Feel like doing more good?</span>`,g=E(),a=y("div"),_=y("a"),T=y("span"),T.innerHTML='<span class="svelte-1ski6ph"><span class="cog-button__text svelte-1ski6ph">Your Certificate</span></span>',se=E(),M=y("div"),M.innerHTML=`<div id="form2"><picture><source srcset="img_smallflower.jpg" media="(max-width: 400px)"/> 
                    <source srcset="https://s3-alpha-sig.figma.com/img/79b2/55f4/e3414a4b5acf0dd303534395fd8db27c?Expires=1696204800&amp;Signature=N9M96hTN-l795-v7Q7QM55ZgL4p1XMPckXB6GiNi6PUYsSvOpPIv-J96xYa96qYWGZQMDDYwHMJWsjLvfeSjYbNmWF2dg~uryE-nPL8zeLTfBxruDhef808p1hWnxKfigDWHI2F-83yD3JB-5TcwS9Ly15QrfeZ7csEZtx-Cf8mgq~DtrdY1duQbHsRrX96ruD~4A9ftrT4EgykoeeGkwcN3-pNa1LI8pRIDFVmELdD~tnmnsnKlMsuMjs6PNhgTNqVDcavQ6J3qvl9AiP6mwPlGF6xsUkQ4jzJ--E-eaR5hm1SxNGE32XE5WoZSRozZKgV-C~JjDo-y5clE4vP8kQ__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/> 
                    <img src="https://s3-alpha-sig.figma.com/img/79b2/55f4/e3414a4b5acf0dd303534395fd8db27c?Expires=1696204800&amp;Signature=N9M96hTN-l795-v7Q7QM55ZgL4p1XMPckXB6GiNi6PUYsSvOpPIv-J96xYa96qYWGZQMDDYwHMJWsjLvfeSjYbNmWF2dg~uryE-nPL8zeLTfBxruDhef808p1hWnxKfigDWHI2F-83yD3JB-5TcwS9Ly15QrfeZ7csEZtx-Cf8mgq~DtrdY1duQbHsRrX96ruD~4A9ftrT4EgykoeeGkwcN3-pNa1LI8pRIDFVmELdD~tnmnsnKlMsuMjs6PNhgTNqVDcavQ6J3qvl9AiP6mwPlGF6xsUkQ4jzJ--E-eaR5hm1SxNGE32XE5WoZSRozZKgV-C~JjDo-y5clE4vP8kQ__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Woman Picking" class="svelte-1ski6ph"/></picture></div>`,le=E(),W=y("div"),re(L.$$.fragment),Z=E(),K=ke(),be(t.src,n="https://www.cognitoforms.com/f/seamless.js")||d(t,"src",n),d(l,"class","content svelte-1ski6ph"),v(l,"align-self","stretch"),v(l,"flex-direction","column"),v(l,"justify-content","flex-start"),v(l,"align-items","flex-start"),v(l,"gap","24px"),v(l,"display","flex"),Y(l,"hide",!e[0]),d(f,"id","form1"),d(p,"class","thank-message"),d(T,"class","svelte-1ski6ph"),d(_,"id","cert-link"),d(_,"href",""),d(_,"class",D="button el-button "+(e[1]?"":" button--loading")+" svelte-1ski6ph"),d(_,"target","_blank"),d(a,"class","cog-page__navigation svelte-1ski6ph"),v(a,"height","61px"),v(a,"padding-top","16px"),v(a,"flex-direction","column"),v(a,"justify-content","flex-start"),v(a,"align-items","flex-start"),v(a,"gap","16px"),v(a,"display","inline-flex"),d(u,"id","cert-container"),d(u,"class","alignment svelte-1ski6ph"),Y(u,"hide",e[0]),d(r,"id","form-content-1"),d(r,"class","svelte-1ski6ph"),d(M,"id","form-content-2"),d(M,"class","svelte-1ski6ph"),d(s,"id","form-wrapper"),d(s,"class","svelte-1ski6ph"),d(W,"id","popup"),d(o,"class","row svelte-1ski6ph")},m(m,b){h(Ye.head,t),k(m,i,b),k(m,o,b),h(o,s),h(s,r),h(r,l),h(r,c),h(r,f),h(r,w),h(r,u),h(u,p),h(u,g),h(u,a),h(a,_),h(_,T),h(s,se),h(s,M),h(o,le),h(o,W),A(L,W,null),k(m,Z,b),k(m,K,b),S=!0,X||(ae=Se(t,"load",e[2]),X=!0)},p(m,[b]){(!S||b&1)&&Y(l,"hide",!m[0]),(!S||b&2&&D!==(D="button el-button "+(m[1]?"":" button--loading")+" svelte-1ski6ph"))&&d(_,"class",D),(!S||b&1)&&Y(u,"hide",m[0])},i(m){S||(z(L.$$.fragment,m),S=!0)},o(m){ie(L.$$.fragment,m),S=!1},d(m){x(t),m&&x(i),m&&x(o),q(L),m&&x(Z),m&&x(K),X=!1,ae()}}}function He(e,t,n){let i=!1,o=!1,s=!0,r=!1;oe(()=>{o=!0,i&&c()});function l(){i=!0,o&&c()}function c(){const f=Cognito("3Mvi0Dz0_Ueo1f-iejxOxw"),w=f.mount("13","#form1");console.log("Api ",f),w.on("afterSubmit",function(u){n(0,s=!1);let p=new XMLHttpRequest;p.open("POST","https://automate.impacthero.com/webhook/parsing-certificate",!0),p.onreadystatechange=function(){if(p.readyState===4&&p.status===200){console.log(this),console.log(this.responseText);const a=JSON.parse(this.responseText);console.log(a),a.lang==="de"?document.getElementById("cert-link").href=a.original.de_certificate:document.getElementById("cert-link").href=a.original.en_certificate,n(1,r=!0)}};var g=JSON.stringify(u.data.entry);p.send(g)})}return[s,r,l]}class Je extends R{constructor(t){super(),G(this,t,He,Fe,Q,{})}}function Qe(e){let t,n,i;return n=new Je({}),{c(){t=y("div"),re(n.$$.fragment),v(t,"--iframe-height",e[0]),d(t,"class","iframe-container svelte-17cme9v")},m(o,s){k(o,t,s),A(n,t,null),i=!0},p(o,[s]){(!i||s&1)&&v(t,"--iframe-height",o[0])},i(o){i||(z(n.$$.fragment,o),i=!0)},o(o){ie(n.$$.fragment,o),i=!1},d(o){o&&x(t),q(n)}}}function ze(e,t,n){let{href:i}=t,{onLoad:o=g=>{}}=t,{onError:s=g=>{}}=t,r,l,c,f,w,u,p="auto";return oe(()=>{l=new we.Signal(r==null?void 0:r.contentWindow,window),c=l.on("__gmt-widget-iframe-init",a=>{const _=a.data.data.height;console.log(`init ${_}px`),n(0,p=`${_}px`)}),f=l.on("__gmt-widget-iframe-resize",a=>{console.log(a),l.stop(f);const _=a.data.data.height;console.log(`resize ${_}px`),n(0,p=`${_}px`),V(),l.restart(f)}),w=l.on("__gmt-widget-iframe-modal-open",a=>{console.log("open modal",a);const _=new URL(a.data.data.url);V(),_.href}),u=l.on("__gmt-widget-iframe-modal-close",a=>{console.log("close modal",a),V()}),new ResizeObserver(a=>{console.log(a),l.emit("__gmt-widget-iframe-resize")}).observe(document.documentElement)}),$e(()=>{l.stop(c),l.stop(f),l.stop(w),l.stop(u)}),e.$$set=g=>{"href"in g&&n(1,i=g.href),"onLoad"in g&&n(2,o=g.onLoad),"onError"in g&&n(3,s=g.onError)},[p,i,o,s]}class Ae extends R{constructor(t){super(),G(this,t,ze,Qe,Q,{href:1,onLoad:2,onError:3})}}function qe(e){let t,n,i;const o=[e[0]];let s={};for(let r=0;r<o.length;r+=1)s=ee(s,o[r]);return n=new Ae({props:s}),{c(){t=y("main"),re(n.$$.fragment)},m(r,l){k(r,t,l),A(n,t,null),i=!0},p(r,[l]){const c=l&1?Oe(o,[je(r[0])]):{};n.$set(c)},i(r){i||(z(n.$$.fragment,r),i=!0)},o(r){ie(n.$$.fragment,r),i=!1},d(r){r&&x(t),q(n)}}}function Ge(e,t,n){return e.$$set=i=>{n(0,t=ee(ee({},t),fe(i)))},t=fe(t),[t]}class Re extends R{constructor(t){super(),G(this,t,Ge,qe,Q,{})}}new Re({target:document.getElementById("app"),props:{href:"http://localhost:8001/",onLoad:function(e){console.log("property",e)}}});
