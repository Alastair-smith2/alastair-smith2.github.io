/* Qwik Service Worker */
const appBundles=[["q-00b1447a.js",[24]],["q-01cd5381.js",[8,24],["T0GZMKDZCyg"]],["q-090f40f5.js",[24],["PGBT6410xR4"]],["q-0b81c076.js",[17,24],["5g4B0Gd1Wck","8gdLBszqbaM","kzjavhDI3L0"]],["q-1b951d70.js",[24],["ZDH6m7xhU0Y"]],["q-1c8ac69d.js",[24]],["q-3c5794f1.js",[24],["FdbX4M10c2k"]],["q-403b1881.js",[24],["mugBPYCrWd4"]],["q-43319b3e.js",[24]],["q-45aab3b6.js",[]],["q-46e99131.js",[]],["q-5cf23b79.js",[24]],["q-66a136fc.js",[24,33]],["q-6700c31d.js",[5,8,24],["CjZOqE3On9Q"]],["q-691b8b92.js",[15,17,24],["RROCiSXLpBU"]],["q-76157808.js",[24]],["q-77901102.js",[24]],["q-830a532b.js",[24],["PtIy9e0pwRQ","uxbNVnTmfAY"]],["q-85ead696.js",[24]],["q-8f36e32c.js",[5,17,24],["900feYRxgqE","fKODp7mHk5w"]],["q-92b9c5a3.js",[17,24],["02wMImzEAbk","fX0bDjeJa0E","TxCFOy819ag"]],["q-ac0b73e1.js",[24,33]],["q-adab8dc2.js",[17,24],["AKetNByE5TM","KnNE9eL0qfc"]],["q-bbb406e0.js",[15,24],["pvSfpEP9GdM"]],["q-d22d1c89.js",[]],["q-d473e47d.js",[17,24],["9HbNuki98sM","d3WSHrdqLlc"]],["q-df1774f8.js",[24],["uAkoKsdd5OI"]],["q-e2111f39.js",[24]],["q-efa19ca4.js",[24]],["q-f3058292.js",[17,24],["GrGqEiNIrL8"]],["q-f4de79cd.js",[17,24],["0zdjSlyYHGs"]],["q-f948a491.js",[24,33]],["q-f9e2d866.js",[24]],["q-f9e8ea3d.js",[24]],["q-fb4708ad.js",[24],["BIIgoEnYwqI"]],["q-fbea24ed.js",[5,17,24],["oxFHno0q65A"]],["q-fcf68d81.js",[24,33]]];
const libraryBundleIds=[20];
const linkBundles=[[/^\/$/,[18,26,11,35]],[/^\/404\.html\/?$/,[18,26,32,4]],[/^\/posts\/learnings-from-cryptopals\/?$/,[18,26,36]],[/^\/posts\/musings-on-being-a-tech-lead\/?$/,[18,26,21]],[/^\/posts\/new-blog\/?$/,[18,26,31]],[/^\/posts\/statecharts\/?$/,[18,26,12]],[/^\/about\/?$/,[18,26,27,1]],[/^\/posts\/?$/,[18,26,0,6]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
