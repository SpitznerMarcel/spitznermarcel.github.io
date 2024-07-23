(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function F(){}function _e(t,e){for(const n in e)t[n]=e[n];return t}function qe(t){return t()}function Me(){return Object.create(null)}function W(t){t.forEach(qe)}function Ae(t){return typeof t=="function"}function re(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let te;function Ue(t,e){return te||(te=document.createElement("a")),te.href=e,t===te.href}function Je(t){return Object.keys(t).length===0}function je(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Pe(t){return t??""}function d(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function C(){return x(" ")}function Ze(){return x("")}function ge(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ye(t){return Array.from(t.childNodes)}function E(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ne(t,e,n){t.classList[n?"add":"remove"](e)}let Z;function J(t){Z=t}function De(){if(!Z)throw new Error("Function called outside component initialization");return Z}function be(t){De().$$.on_mount.push(t)}function Ke(t){De().$$.on_destroy.push(t)}const H=[],Ne=[];let G=[];const Te=[],He=Promise.resolve();let he=!1;function Fe(){he||(he=!0,He.then(Ge))}function me(){return Fe(),He}function ve(t){G.push(t)}const pe=new Set;let D=0;function Ge(){if(D!==0)return;const t=Z;do{try{for(;D<H.length;){const e=H[D];D++,J(e),Ve(e.$$)}}catch(e){throw H.length=0,D=0,e}for(J(null),H.length=0,D=0;Ne.length;)Ne.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];pe.has(n)||(pe.add(n),n())}G.length=0}while(H.length);for(;Te.length;)Te.pop()();he=!1,pe.clear(),J(t)}function Ve(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ve)}}function Xe(t){const e=[],n=[];G.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),G=e}const oe=new Set;let q;function Qe(){q={r:0,c:[],p:q}}function et(){q.r||W(q.c),q=q.p}function A(t,e){t&&t.i&&(oe.delete(t),t.i(e))}function Y(t,e,n,i){if(t&&t.o){if(oe.has(t))return;oe.add(t),q.c.push(()=>{oe.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const tt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function nt(t,e){const n={},i={},o={$$scope:1};let r=t.length;for(;r--;){const l=t[r],c=e[r];if(c){for(const s in l)s in c||(i[s]=1);for(const s in c)o[s]||(n[s]=c[s],o[s]=1);t[r]=c}else for(const s in l)o[s]=1}for(const l in i)l in n||(n[l]=void 0);return n}function it(t){return typeof t=="object"&&t!==null?t:{}}function ye(t){t&&t.c()}function le(t,e,n,i){const{fragment:o,after_update:r}=t.$$;o&&o.m(e,n),i||ve(()=>{const l=t.$$.on_mount.map(qe).filter(Ae);t.$$.on_destroy?t.$$.on_destroy.push(...l):W(l),t.$$.on_mount=[]}),r.forEach(ve)}function se(t,e){const n=t.$$;n.fragment!==null&&(Xe(n.after_update),W(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){t.$$.dirty[0]===-1&&(H.push(t),Fe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ce(t,e,n,i,o,r,l,c=[-1]){const s=Z;J(t);const a=t.$$={fragment:null,ctx:[],props:r,update:F,not_equal:o,bound:Me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:Me(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};l&&l(a.root);let v=!1;if(a.ctx=n?n(t,e.props||{},(g,y,...m)=>{const b=m.length?m[0]:y;return a.ctx&&o(a.ctx[g],a.ctx[g]=b)&&(!a.skip_bound&&a.bound[g]&&a.bound[g](b),v&&ot(t,g)),y}):[],a.update(),v=!0,W(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){const g=Ye(e.target);a.fragment&&a.fragment.l(g),g.forEach(_)}else a.fragment&&a.fragment.c();e.intro&&A(t.$$.fragment),le(t,e.target,e.anchor,e.customElement),Ge()}J(s)}class ae{$destroy(){se(this,1),this.$destroy=F}$on(e,n){if(!Ae(n))return F;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!Je(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var ie=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},We={},fe={};Object.defineProperty(fe,"__esModule",{value:!0});fe.Signal=void 0;class Re{constructor(e,n){console.log(e,n),this.target=e,this.consumer=n}validCycle(){return this.target!==this.consumer}emit(e,n){console.log("emit",this.validCycle()),this.validCycle()&&console.log(this.target),this.target.postMessage({key:e,data:n},"*")}stop(e){this.validCycle()&&this.consumer.removeEventListener("message",e,!1)}on(e,n){console.log(`listen iframe: ${e}`);const i=o=>{o.data.key===e&&n(o)};return this.validCycle()&&this.consumer.addEventListener("message",i,!1),i}restart(e){console.log("restart"),this.validCycle()&&this.consumer.addEventListener("message",e,!1)}}fe.Signal=Re;Re.key=Symbol();(function(t){var e=ie&&ie.__createBinding||(Object.create?function(i,o,r,l){l===void 0&&(l=r);var c=Object.getOwnPropertyDescriptor(o,r);(!c||("get"in c?!o.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return o[r]}}),Object.defineProperty(i,l,c)}:function(i,o,r,l){l===void 0&&(l=r),i[l]=o[r]}),n=ie&&ie.__exportStar||function(i,o){for(var r in i)r!=="default"&&!Object.prototype.hasOwnProperty.call(o,r)&&e(o,i,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(fe,t)})(We);function rt(t){let e,n,i,o,r,l,c,s,a,v,g,y;return{c(){e=C(),n=p("div"),i=p("div"),o=p("b"),o.textContent="Want to do more good? 🌱",r=C(),l=p("p"),l.textContent="Check out our shop!",c=C(),s=p("div"),s.innerHTML='<a href="https://www.impacthero.com/impact/templatev1-payment-widget" class="button el-button" target="_blank"><span class="svelte-1brw37d"><span class="svelte-1brw37d"><span class="cog-button__text close-button svelte-1brw37d">Create more Impact!</span></span></span></a>',a=C(),v=p("span"),v.textContent="x",u(o,"class","svelte-1brw37d"),u(l,"class","svelte-1brw37d"),u(s,"class","cog-page__navigation"),E(s,"height","61px"),E(s,"flex-direction","column"),E(s,"justify-content","flex-start"),E(s,"align-items","flex-start"),E(s,"gap","16px"),E(s,"display","inline-flex"),u(v,"class","close svelte-1brw37d"),u(i,"class","payment-button svelte-1brw37d"),u(n,"class","exit-intent-popup svelte-1brw37d")},m(m,b){h(m,e,b),h(m,n,b),d(n,i),d(i,o),d(i,r),d(i,l),d(i,c),d(i,s),d(i,a),d(i,v),g||(y=[ge(v,"click",t[0]),ge(v,"keypress",t[0])],g=!0)},p:F,i:F,o:F,d(m){m&&_(e),m&&_(n),g=!1,W(y)}}}function lt(t){const e={setCookie(o,r,l){let c="";if(l){const s=new Date;s.setTime(s.getTime()+l*24*60*60*1e3),c="; expires="+s.toUTCString()}document.cookie=o+"="+(r||"")+c+";"},getCookie(o){const r=document.cookie.split(";");for(const l of r)if(l.indexOf(o+"=")>-1)return l.split("=")[1];return null}},n=o=>{console.log("Exit intent"),([...o.target.classList].includes("exit-intent-popup")||o.target.classList.contains("close")||o.target.classList.contains("close-button")||o.keyCode===27)&&document.querySelector(".exit-intent-popup").classList.remove("visible")},i=o=>{const r=o.clientY<10||!document.getElementById("form-wrapper").contains(o.target);o.target===document.querySelector("#cert-container .cog-page__navigation")&&document.removeEventListener("mouseout",i),console.log("ShouldShowExitIntent",r),r&&(document.removeEventListener("mouseout",i),document.querySelector(".exit-intent-popup").classList.add("visible"),e.setCookie("exitIntentShown",!0,1))};return be(()=>{console.log("Mount"),e.getCookie("exitIntentShown")||setTimeout(()=>{console.log("Set cookies"),document.addEventListener("mouseout",i),document.querySelector("#cert-container .cog-page__navigation").addEventListener("click",i),document.querySelector("#popup .cog-page__navigation").addEventListener("click",i),document.addEventListener("keydown",n),document.querySelector(".exit-intent-popup").addEventListener("click",n)},0)}),[n]}class st extends ae{constructor(e){super(),ce(this,e,lt,rt,re,{})}}const{document:ct}=tt;function at(t){let e;return{c(){e=x("Löse dein Geschenk ein und pflanze deinen Baum")},m(n,i){h(n,e,i)},d(n){n&&_(e)}}}function ft(t){let e;return{c(){e=x("Redeem your tree-planting gift")},m(n,i){h(n,e,i)},d(n){n&&_(e)}}}function ut(t){let e;return{c(){e=x("Danke dir!")},m(n,i){h(n,e,i)},d(n){n&&_(e)}}}function dt(t){let e;return{c(){e=x("Thank you!")},m(n,i){h(n,e,i)},d(n){n&&_(e)}}}function mt(t){let e;return{c(){e=x("Dein personalisiertes Zertifikat ist auf dem Weg zu deiner E-Mail. ")},m(n,i){h(n,e,i)},d(n){n&&_(e)}}}function pt(t){let e;return{c(){e=x("Your personalised certificate in on its way to your e-mail. ")},m(n,i){h(n,e,i)},d(n){n&&_(e)}}}function _t(t){let e;return{c(){e=x("Zertifikat herunterladen")},m(n,i){h(n,e,i)},d(n){n&&_(e)}}}function gt(t){let e;return{c(){e=x("Download Certificate")},m(n,i){h(n,e,i)},d(n){n&&_(e)}}}function Be(t){let e;function n(r,l){return r[3]==="en"?vt:ht}let i=n(t),o=i(t);return{c(){e=p("span"),o.c(),u(e,"class","svelte-vnv07m")},m(r,l){h(r,e,l),o.m(e,null)},p(r,l){i!==(i=n(r))&&(o.d(1),o=i(r),o&&(o.c(),o.m(e,null)))},d(r){r&&_(e),o.d()}}}function ht(t){let e;return{c(){e=x("Du möchtest mehr Gutes erreichen? Schenke das Gechenk, dass mehr und mehr schenkt")},m(n,i){h(n,e,i)},d(n){n&&_(e)}}}function vt(t){let e;return{c(){e=x("Feel like doing more good? Continue gifting the gift that keeps on gifting 🤪")},m(n,i){h(n,e,i)},d(n){n&&_(e)}}}function Ie(t){let e,n,i,o,r;function l(a,v){return a[3]==="en"?yt:bt}let c=l(t),s=c(t);return{c(){e=p("div"),n=p("a"),i=p("span"),o=p("span"),r=p("span"),s.c(),u(r,"class","cog-button__text svelte-vnv07m"),u(o,"class","svelte-vnv07m"),u(i,"class","svelte-vnv07m"),u(n,"href","https://www.impacthero.com/impact/templatev1-payment-widget"),u(n,"class","button el-button"),u(n,"target","_blank"),u(e,"class","cog-page__navigation svelte-vnv07m"),E(e,"height","61px"),E(e,"padding-top","16px"),E(e,"flex-direction","column"),E(e,"justify-content","flex-start"),E(e,"align-items","flex-start"),E(e,"gap","16px"),E(e,"display","inline-flex")},m(a,v){h(a,e,v),d(e,n),d(n,i),d(i,o),d(o,r),s.m(r,null)},p(a,v){c!==(c=l(a))&&(s.d(1),s=c(a),s&&(s.c(),s.m(r,null)))},d(a){a&&_(e),s.d()}}}function bt(t){let e;return{c(){e=x("Pflanze dein eigenen Baum oder ein Gift für deine Liebsten")},m(n,i){h(n,e,i)},d(n){n&&_(e)}}}function yt(t){let e;return{c(){e=x("Plant your own trees or gift a loved one")},m(n,i){h(n,e,i)},d(n){n&&_(e)}}}function ze(t){let e,n,i;return n=new st({}),{c(){e=p("div"),ye(n.$$.fragment),u(e,"id","popup")},m(o,r){h(o,e,r),le(n,e,null),i=!0},i(o){i||(A(n.$$.fragment,o),i=!0)},o(o){Y(n.$$.fragment,o),i=!1},d(o){o&&_(e),se(n)}}}function wt(t){let e,n,i,o,r,l,c,s,a,v,g,y,m,b,j,O,S,R,we,I,M,K,ke,Ee,xe,ue,U,z,de,$e;function Le(f,k){return f[3]==="en"?ft:at}let V=Le(t),P=V(t);function Se(f,k){return f[3]==="en"?dt:ut}let X=Se(t),N=X(t);function Ce(f,k){return f[3]==="en"?pt:mt}let Q=Ce(t),T=Q(t);function Oe(f,k){return f[3]==="en"?gt:_t}let ee=Oe(t),B=ee(t),$=t[1]&&Be(t),L=t[1]&&Ie(t),w=t[1]&&!t[0]&&ze();return{c(){e=p("script"),i=C(),o=p("div"),r=p("div"),l=p("div"),c=p("div"),s=p("div"),a=p("div"),a.innerHTML='<img src="https://assets-global.website-files.com/63bd28ff3bf2dd779febe5a3/652ea063583f67a8de378d70_gift-dilemma.webp" loading="lazy" sizes="40px" srcset="https://assets-global.website-files.com/63bd28ff3bf2dd779febe5a3/652ea063583f67a8de378d70_gift-dilemma-p-500.webp 500w, https://assets-global.website-files.com/63bd28ff3bf2dd779febe5a3/652ea063583f67a8de378d70_gift-dilemma-p-800.webp 800w, https://assets-global.website-files.com/63bd28ff3bf2dd779febe5a3/652ea063583f67a8de378d70_gift-dilemma-p-1080.webp 1080w, https://assets-global.website-files.com/63bd28ff3bf2dd779febe5a3/652ea063583f67a8de378d70_gift-dilemma.webp 2082w" alt="" class="icon-1x1-small"/>',v=C(),g=p("h2"),P.c(),y=C(),m=C(),b=p("div"),j=C(),O=p("div"),S=p("div"),R=p("h2"),N.c(),we=C(),I=p("span"),T.c(),M=p("a"),B.c(),ke=x("."),Ee=C(),$&&$.c(),xe=C(),L&&L.c(),ue=C(),w&&w.c(),U=Ze(),Ue(e.src,n="https://www.cognitoforms.com/f/seamless.js")||u(e,"src",n),u(a,"class","layout-icon-wrapper svelte-vnv07m"),u(g,"class","heading-style-h4 text-white svelte-vnv07m"),u(s,"class","heading-wrapper svelte-vnv07m"),u(c,"class","content svelte-vnv07m"),u(c,"style",""),ne(c,"hide",!t[0]),u(b,"id","form1"),u(R,"class","svelte-vnv07m"),u(M,"id","cert-link"),u(M,"href",""),u(M,"class",K=Pe(t[2]?"":"link--loading")+" svelte-vnv07m"),u(M,"target","_blank"),u(I,"class","svelte-vnv07m"),u(S,"class","confirmation-message svelte-vnv07m"),u(O,"id","cert-container"),u(O,"class","alignment svelte-vnv07m"),ne(O,"hide",t[0]),u(l,"id","form-content-1"),u(l,"class","svelte-vnv07m"),u(r,"id","form-wrapper"),u(r,"class","svelte-vnv07m"),u(o,"class","row svelte-vnv07m")},m(f,k){d(ct.head,e),h(f,i,k),h(f,o,k),d(o,r),d(r,l),d(l,c),d(c,s),d(s,a),d(s,v),d(s,g),P.m(g,null),d(c,y),d(l,m),d(l,b),d(l,j),d(l,O),d(O,S),d(S,R),N.m(R,null),d(S,we),d(S,I),T.m(I,null),d(I,M),B.m(M,null),d(I,ke),d(S,Ee),$&&$.m(S,null),d(O,xe),L&&L.m(O,null),h(f,ue,k),w&&w.m(f,k),h(f,U,k),z=!0,de||($e=ge(e,"load",t[4]),de=!0)},p(f,[k]){V!==(V=Le(f))&&(P.d(1),P=V(f),P&&(P.c(),P.m(g,null))),(!z||k&1)&&ne(c,"hide",!f[0]),X!==(X=Se(f))&&(N.d(1),N=X(f),N&&(N.c(),N.m(R,null))),Q!==(Q=Ce(f))&&(T.d(1),T=Q(f),T&&(T.c(),T.m(I,M))),ee!==(ee=Oe(f))&&(B.d(1),B=ee(f),B&&(B.c(),B.m(M,null))),(!z||k&4&&K!==(K=Pe(f[2]?"":"link--loading")+" svelte-vnv07m"))&&u(M,"class",K),f[1]?$?$.p(f,k):($=Be(f),$.c(),$.m(S,null)):$&&($.d(1),$=null),f[1]?L?L.p(f,k):(L=Ie(f),L.c(),L.m(O,null)):L&&(L.d(1),L=null),(!z||k&1)&&ne(O,"hide",f[0]),f[1]&&!f[0]?w?k&3&&A(w,1):(w=ze(),w.c(),A(w,1),w.m(U.parentNode,U)):w&&(Qe(),Y(w,1,1,()=>{w=null}),et())},i(f){z||(A(w),z=!0)},o(f){Y(w),z=!1},d(f){_(e),f&&_(i),f&&_(o),P.d(),N.d(),T.d(),B.d(),$&&$.d(),L&&L.d(),f&&_(ue),w&&w.d(f),f&&_(U),de=!1,$e()}}}const kt="3Mvi0Dz0_Ueo1f-iejxOxw",Et="18",xt="13",$t="https://automate.impacthero.com/webhook/parsing-certificate",Lt="https://automate.impacthero.com/webhook/parsing-certificate-live";function St(t){if(t==="de"){var e=document.getElementsByClassName("el-input__inner");e[0].placeholder="Code",e[2].placeholder="Vorname",e[3].placeholder="Nachname",document.getElementsByClassName("el-checkbox__label")[0].innerHTML=" Ja, ",document.querySelector(".cog-helptext p em").innerHTML='&nbsp;ich stimme dem <a title="Data Privacy" href="https://www.impacthero.com/data-privacy" target="_blank">Datenschutz</a> und den <a title="Terms of Service" href="https://www.impacthero.com/terms-of-service" target="_blank">Nutzungsbedingungen</a> zu.&nbsp;',document.getElementsByClassName("cog-button__text")[0].innerHTML="PFLANZE MEINEN BAUM"}}function Ct(t,e,n){let i=!1,o=!1,r=!0,l=!0,c=!1;var s="";let a="en";be(()=>{o=!0,i&&g();var y=document.getElementById("app").getAttribute("data-booster");n(1,l=y==="true"||y===""||y===null),s=document.getElementById("app").getAttribute("data-dev-mode"),n(3,a=document.getElementById("app").getAttribute("data-lang")||a)});function v(){i=!0,o&&g()}function g(){const m=Cognito(kt).mount(s==="true"?xt:Et,"#form1");m.on("ready",function(){St(a)}),m.on("afterSubmit",function(b){n(0,r=!1);let j=new XMLHttpRequest;j.open("POST",s==="true"?$t:Lt,!0),j.onreadystatechange=function(){if(j.readyState===4&&j.status===200){const S=JSON.parse(this.responseText);S.lang==="de"?document.getElementById("cert-link").href=S.original.de_certificate:document.getElementById("cert-link").href=S.original.en_certificate,n(2,c=!0)}};var O=JSON.stringify(b.data.entry);j.send(O)})}return[r,l,c,a,v]}class Ot extends ae{constructor(e){super(),ce(this,e,Ct,wt,re,{})}}function Mt(t){let e,n,i;return n=new Ot({}),{c(){e=p("div"),ye(n.$$.fragment),E(e,"--iframe-height",t[0]),u(e,"class","iframe-container svelte-1kwecjl")},m(o,r){h(o,e,r),le(n,e,null),i=!0},p(o,[r]){(!i||r&1)&&E(e,"--iframe-height",o[0])},i(o){i||(A(n.$$.fragment,o),i=!0)},o(o){Y(n.$$.fragment,o),i=!1},d(o){o&&_(e),se(n)}}}function jt(t,e,n){let{href:i}=e,{onLoad:o=m=>{}}=e,{onError:r=m=>{}}=e,l,c,s,a,v,g,y="auto";return be(()=>{c=new We.Signal(l==null?void 0:l.contentWindow,window),s=c.on("__gmt-widget-iframe-init",m=>{const b=m.data.data.height;console.log(`init ${b}px`),n(0,y=`${b}px`)}),a=c.on("__gmt-widget-iframe-resize",m=>{c.stop(a);const b=m.data.data.height;console.log(`resize ${b}px`),n(0,y=`${b}px`),me(),c.restart(a)}),v=c.on("__gmt-widget-iframe-modal-open",m=>{const b=new URL(m.data.data.url);me(),b.href}),g=c.on("__gmt-widget-iframe-modal-close",m=>{me()})}),Ke(()=>{c.stop(s),c.stop(a),c.stop(v),c.stop(g)}),t.$$set=m=>{"href"in m&&n(1,i=m.href),"onLoad"in m&&n(2,o=m.onLoad),"onError"in m&&n(3,r=m.onError)},[y,i,o,r]}class Pt extends ae{constructor(e){super(),ce(this,e,jt,Mt,re,{href:1,onLoad:2,onError:3})}}function Nt(t){let e,n,i;const o=[t[0]];let r={};for(let l=0;l<o.length;l+=1)r=_e(r,o[l]);return n=new Pt({props:r}),{c(){e=p("main"),ye(n.$$.fragment)},m(l,c){h(l,e,c),le(n,e,null),i=!0},p(l,[c]){const s=c&1?nt(o,[it(l[0])]):{};n.$set(s)},i(l){i||(A(n.$$.fragment,l),i=!0)},o(l){Y(n.$$.fragment,l),i=!1},d(l){l&&_(e),se(n)}}}function Tt(t,e,n){return t.$$set=i=>{n(0,e=_e(_e({},e),je(i)))},e=je(e),[e]}class Bt extends ae{constructor(e){super(),ce(this,e,Tt,Nt,re,{})}}new Bt({target:document.getElementById("app"),props:{href:"http://localhost:8001/",onLoad:function(t){console.log("property",t)}}});
