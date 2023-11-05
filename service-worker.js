/* Qwik Service Worker */
const appBundles=[["q-04d38ace.js",[9,17,36],["PtIy9e0pwRQ","uxbNVnTmfAY"]],["q-0de1670a.js",[3,17]],["q-1c9e7457.js",[17]],["q-20166d7a.js",[17]],["q-261d4254.js",[17],["T0GZMKDZCyg"]],["q-2d06fa53.js",[17,27],["pvSfpEP9GdM"]],["q-2f6abb90.js",[17,21],["CjZOqE3On9Q"]],["q-38bbcdce.js",[17],["uAkoKsdd5OI"]],["q-3aa01437.js",[9,17],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-3f234a83.js",[17]],["q-3f6fc194.js",[9,17,21,36],["900feYRxgqE","fKODp7mHk5w"]],["q-4c927780.js",[17]],["q-528b9db1.js",[17],["A5bZC7WO00A"]],["q-58438111.js",[]],["q-5d36417b.js",[9,17],["0zdjSlyYHGs"]],["q-663033b0.js",[],["DyVc0YBIqQU"]],["q-6fd34075.js",[9,17],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-70a9053d.js",[]],["q-7ecfe391.js",[17],["PGBT6410xR4"]],["q-7ef9acb7.js",[9,17,27],["RROCiSXLpBU"]],["q-807d7185.js",[17]],["q-85c80465.js",[17]],["q-8d052eaf.js",[3,17]],["q-8db91e6a.js",[17]],["q-8ea06850.js",[]],["q-8eb9cd2c.js",[17]],["q-9c6abfcf.js",[17]],["q-9dd9210a.js",[17]],["q-9f2dbc91.js",[17],["ZDH6m7xhU0Y"]],["q-a7ab73cb.js",[17],["FdbX4M10c2k"]],["q-ad814b7c.js",[9,17],["GrGqEiNIrL8"]],["q-b03258f6.js",[17]],["q-b0c55399.js",[9,17,37],["9HbNuki98sM","d3WSHrdqLlc"]],["q-bd0884a4.js",[9,17],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-bd22045d.js",[9,17],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-c479e783.js",[3,17]],["q-c4dfedf0.js",[17]],["q-ddc2cabe.js",[]],["q-de893f52.js",[17],["mugBPYCrWd4"]],["q-dff078ac.js",[9,17],["wOIPfiQ04l4"]],["q-e5f73f82.js",[9,17,21,36],["oxFHno0q65A"]],["q-ea3548ec.js",[9,17],["e0ssiDXoeAM"]],["q-eb5e6131.js",[3,17]],["q-efb58351.js",[3,17]],["q-f4a518f6.js",[9,17],["eBQ0vFsFKsk"]],["q-fe431c66.js",[9,17,21,37],["h0P7Uo7GonY"]],["q-fedd28de.js",[17],["BIIgoEnYwqI"]]];
const libraryBundleIds=[16];
const linkBundles=[[/^\/$/,[26,7,23,40]],[/^\/404\.html\/?$/,[26,7,25,28]],[/^\/posts\/cryptopals\/?$/,[26,7,22]],[/^\/posts\/major-version-upgrades\/?$/,[26,7,35]],[/^\/posts\/musings-on-being-a-tech-lead\/?$/,[26,7,42]],[/^\/posts\/new-blog\/?$/,[26,7,43]],[/^\/posts\/statecharts\/?$/,[26,7,1]],[/^\/about\/?$/,[26,7,11,4]],[/^\/posts\/?$/,[26,7,2,29]],[/^\/tags\/([^/]+?)\/?$/,[26,7,31,45]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
