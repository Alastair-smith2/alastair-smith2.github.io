import{l as J,j as K,k as it,r as at,m as Z,n as W,o as $,p as lt,q as tt,s as A,t as q,v as ct,w as ut,x as _t,y as dt,z as mt,c as pt,C as vt,d as ft,D as yt,R as ht,e as Et,f as St,h as Ct,i as Rt}from"./q-a1e776aa.js";import{b as s,c as et,J as Lt,o as ot,e as gt,l as bt,O as qt,H as Pt,L as H,f as wt,R as M,B as y,k as At,d as Dt,q as It,i as N,h as Tt}from"./q-70a9053d.js";const _=()=>s(()=>import("./q-9b4c1b5f.js"),["build/q-9b4c1b5f.js","build/q-70a9053d.js"]),B=[["/",[_,()=>s(()=>import("./q-8d93e498.js"),["build/q-8d93e498.js","build/q-70a9053d.js"])]],["404.html",[_,()=>s(()=>import("./q-8eb9cd2c.js"),["build/q-8eb9cd2c.js","build/q-70a9053d.js"])]],["posts/cryptopals/",[_,()=>s(()=>import("./q-8d052eaf.js"),["build/q-8d052eaf.js","build/q-70a9053d.js","build/q-20166d7a.js"])]],["posts/major-version-upgrades/",[_,()=>s(()=>import("./q-c479e783.js"),["build/q-c479e783.js","build/q-70a9053d.js","build/q-20166d7a.js"])]],["posts/musings-on-being-a-tech-lead/",[_,()=>s(()=>import("./q-eb5e6131.js"),["build/q-eb5e6131.js","build/q-70a9053d.js","build/q-20166d7a.js"])]],["posts/new-blog/",[_,()=>s(()=>import("./q-efb58351.js"),["build/q-efb58351.js","build/q-70a9053d.js","build/q-20166d7a.js"])]],["posts/statecharts/",[_,()=>s(()=>import("./q-0de1670a.js"),["build/q-0de1670a.js","build/q-70a9053d.js","build/q-20166d7a.js"])]],["about/",[_,()=>s(()=>import("./q-4c927780.js"),["build/q-4c927780.js","build/q-70a9053d.js"])]],["posts/",[_,()=>s(()=>import("./q-cab76040.js"),["build/q-cab76040.js","build/q-70a9053d.js"])]],["tags/[tag]/",[_,()=>s(()=>import("./q-89c4bc48.js"),["build/q-89c4bc48.js","build/q-70a9053d.js"])]]],Q=[["/",()=>s(()=>import("./q-87802b2a.js"),[])]];const X=!0;const Ot=({track:h})=>{const[n,E,C,i,R,l,m,p,L,c,o]=et();async function g(){var F;const[d,P]=h(()=>[c.value,n.value]),nt=Lt(""),D=o.url,v=P?"form":d.type,rt=d.replaceState;let r,w,U=null,I;{r=new URL(d.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let T=J(B,Q,X,r.pathname);I=ot();const O=w=await K(r,I,!0,P);if(!O){c.untrackedValue={type:v,dest:r};return}const x=O.href,k=new URL(x,r);it(k,r)||(r=k,T=J(B,Q,X,r.pathname)),U=await T}if(U){const[T,O,x,k]=U,V=x,st=V[V.length-1];o.prevUrl=D,o.url=r,o.params={...O},c.untrackedValue={type:v,dest:r};const b=at(w,o,V,nt);E.headings=st.headings,E.menu=k,C.value=gt(V),i.links=b.links,i.meta=b.meta,i.styles=b.styles,i.scripts=b.scripts,i.title=b.title,i.frontmatter=b.frontmatter;{L.viewTransition!==!1&&(document.__q_view_transition__=!0);let Y;v==="popstate"&&(Y=Z()),d.scroll&&(!d.forceReload||!W(r,D))&&(v==="link"||v==="popstate")&&(document.__q_scroll_restore__=()=>$(v,r,D,Y));const G=w==null?void 0:w.loaders,t=window;if(G&&Object.assign(m,G),lt.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),l(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const a=history.pushState,f=history.replaceState,S=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||q(document.documentElement),e);history.pushState=(e,u,j)=>(e=S(e),a.call(history,e,u,j)),history.replaceState=(e,u,j)=>(e=S(e),f.call(history,e,u,j))}document.body.addEventListener("click",a=>{if(a.defaultPrevented)return;const f=a.target.closest("a[href]");if(f&&!f.hasAttribute("preventdefault:click")){const S=f.getAttribute("href"),e=new URL(location.href),u=new URL(S,e);if(tt(u,e)&&W(u,e)){if(a.preventDefault(),!u.hash&&!u.href.endsWith("#")){u.href!==e.href&&history.pushState(null,"",u),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),A({...q(document.documentElement),x:0,y:0}),location.reload();return}l(f.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const a=q(document.documentElement);A(a)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const a=q(document.documentElement);A(a),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(F=t._qCityBootstrap)==null||F.remove(),t._qCityBootstrap=void 0,ct.resolve()}if(v!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const a=q(document.documentElement);A(a)}ut(window,v,D,r,rt),bt(I).then(()=>{var S;_t(I).setAttribute("q:route",T);const f=q(document.documentElement);A(f),t._qCityScrollEnabled=!0,o.isNavigating=!1,(S=p.r)==null||S.call(p)})}}}g()},kt=":root{view-transition-name:none}",Vt=async(h,n)=>{const[E,C,i,R]=et(),{type:l="link",forceReload:m=h===void 0,replaceState:p=!1,scroll:L=!0}=typeof n=="object"?n:{forceReload:n},c=i.value.dest,o=h===void 0?c:dt(h,R.url);if(!tt(o,c)){location.href=o.href;return}if(!m&&W(o,c)){l==="link"&&o.href!==location.href&&history.pushState(null,"",o),$(l,o,new URL(location.href),Z()),l==="popstate"&&(window._qCityScrollEnabled=!0);return}return i.value={type:l,dest:o,forceReload:m,replaceState:p,scroll:L},K(o,ot()),J(B,Q,X,o.pathname),E.value=void 0,R.isNavigating=!0,new Promise(g=>{C.r=g})},Ht=h=>{qt(N(()=>s(()=>Promise.resolve().then(()=>z),void 0),"s_RPDJAz33WLA"));const n=mt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const E=Pt("url");if(!E)throw new Error("Missing Qwik URL Env Data");const C=new URL(E),i=H({url:C,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),R={},l=wt(H(n.response.loaders,{deep:!1})),m=M({type:"initial",dest:C,forceReload:!1,replaceState:!1,scroll:!0}),p=H(pt),L=H({headings:void 0,menu:void 0}),c=M(),o=n.response.action,g=o?n.response.loaders[o]:void 0,d=M(g?{id:o,data:n.response.formData,output:{result:g,status:n.response.status}}:void 0),P=N(()=>s(()=>Promise.resolve().then(()=>z),void 0),"s_fX0bDjeJa0E",[d,R,m,i]);return y(vt,L),y(ft,c),y(yt,p),y(ht,i),y(Et,P),y(St,l),y(Ct,d),y(Rt,m),At(N(()=>s(()=>Promise.resolve().then(()=>z),void 0),"s_02wMImzEAbk",[d,L,c,p,n,P,l,R,h,m,i])),Dt(It,null,3,"qY_0")},z=Object.freeze(Object.defineProperty({__proto__:null,_hW:Tt,s_02wMImzEAbk:Ot,s_RPDJAz33WLA:kt,s_TxCFOy819ag:Ht,s_fX0bDjeJa0E:Vt},Symbol.toStringTag,{value:"Module"}));export{Tt as _hW,Ot as s_02wMImzEAbk,kt as s_RPDJAz33WLA,Ht as s_TxCFOy819ag,Vt as s_fX0bDjeJa0E};
