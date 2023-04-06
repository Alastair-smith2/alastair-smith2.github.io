/* Qwik Service Worker */
const appBundles=[["q-0e93f1b2.js",[7],["BIIgoEnYwqI"]],["q-0f19ef8a.js",[7],["mugBPYCrWd4"]],["q-105574f9.js",[7],["PtIy9e0pwRQ","uxbNVnTmfAY"]],["q-10fd469a.js",[7,16]],["q-1725479c.js",[7,21],["pvSfpEP9GdM"]],["q-2065d02f.js",[7]],["q-2fd573f2.js",[2,7],["5g4B0Gd1Wck","8gdLBszqbaM","kzjavhDI3L0"]],["q-33b82f27.js",[]],["q-39e2d812.js",[7,9,26],["CjZOqE3On9Q"]],["q-3f98974f.js",[7]],["q-45aab3b6.js",[]],["q-46238ee4.js",[7]],["q-46e99131.js",[]],["q-4932f3fa.js",[7,16]],["q-4a86446d.js",[7,16]],["q-55cbb4c7.js",[2,7,9],["oxFHno0q65A"]],["q-5ec48a9c.js",[7]],["q-5f04d66b.js",[2,7,9],["900feYRxgqE","fKODp7mHk5w"]],["q-69699bba.js",[2,7],["AKetNByE5TM","KnNE9eL0qfc"]],["q-6ac026ac.js",[7],["PGBT6410xR4"]],["q-6edf45d0.js",[2,7],["0zdjSlyYHGs"]],["q-72f29fad.js",[7]],["q-74a12db0.js",[7]],["q-7ce6f236.js",[2,7,21],["RROCiSXLpBU"]],["q-90969f90.js",[7]],["q-95f971c0.js",[7],["FdbX4M10c2k"]],["q-a1b724b6.js",[7]],["q-c297b973.js",[7],["uAkoKsdd5OI"]],["q-c5111488.js",[7]],["q-c99449f1.js",[2,7],["02wMImzEAbk","fX0bDjeJa0E","TxCFOy819ag"]],["q-df1fe659.js",[7,26],["T0GZMKDZCyg"]],["q-e6ea2109.js",[2,7],["9HbNuki98sM","d3WSHrdqLlc"]],["q-eec6deb8.js",[7,16]],["q-ef518f2f.js",[2,7],["GrGqEiNIrL8"]],["q-f897f23b.js",[7]]];
const libraryBundleIds=[29];
const linkBundles=[[/^\/$/,[22,27,11,15]],[/^\/posts\/learnings-from-cryptopals\/?$/,[22,27,3]],[/^\/posts\/musings-on-being-a-tech-lead\/?$/,[22,27,14]],[/^\/posts\/new-blog\/?$/,[22,27,13]],[/^\/posts\/statecharts\/?$/,[22,27,32]],[/^\/about\/?$/,[22,27,34,30]],[/^\/posts\/?$/,[22,27,28,25]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
