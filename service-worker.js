/* Qwik Service Worker */
const appBundles=[["q-06dbf56a.js",[27]],["q-16d0ea36.js",[9,27],["GrGqEiNIrL8"]],["q-17b11470.js",[]],["q-204e0575.js",[9,27],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-2854045c.js",[27],["BIIgoEnYwqI"]],["q-286aecd7.js",[11,27]],["q-2d30968f.js",[11,27]],["q-31d630db.js",[27],["mugBPYCrWd4"]],["q-376e23b7.js",[0,9,23,27],["oxFHno0q65A"]],["q-3cfa68c8.js",[27]],["q-4d9aead8.js",[0,9,23,27],["900feYRxgqE","fKODp7mHk5w"]],["q-51a65602.js",[27]],["q-551a296e.js",[9,27],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-63cdda11.js",[27],["uAkoKsdd5OI"]],["q-656344b6.js",[11,27]],["q-663033b0.js",[],["DyVc0YBIqQU"]],["q-6cf63173.js",[0,27,29],["CjZOqE3On9Q"]],["q-6f6111d5.js",[27]],["q-7a005ad7.js",[9,27],["eBQ0vFsFKsk"]],["q-7b975fb3.js",[27],["FdbX4M10c2k"]],["q-7dc1970c.js",[27]],["q-7f01986d.js",[9,17,27],["RROCiSXLpBU"]],["q-8ea06850.js",[]],["q-95501fda.js",[27]],["q-9c5bab5d.js",[9,23,27],["PtIy9e0pwRQ","uxbNVnTmfAY"]],["q-9df74b72.js",[27]],["q-a2797e62.js",[17,27],["pvSfpEP9GdM"]],["q-aabf3092.js",[]],["q-afc97e57.js",[27]],["q-b009ea05.js",[27]],["q-b42eb30e.js",[27],["ZDH6m7xhU0Y"]],["q-baacc88a.js",[9,27],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-c00babcf.js",[27,29],["T0GZMKDZCyg"]],["q-c1d3dc37.js",[27],["PGBT6410xR4"]],["q-c2e78db3.js",[27],["A5bZC7WO00A"]],["q-c3d2f849.js",[27]],["q-c47699d3.js",[9,27],["0zdjSlyYHGs"]],["q-c8dccf09.js",[9,27],["e0ssiDXoeAM"]],["q-cc8c024b.js",[9,27],["9HbNuki98sM","d3WSHrdqLlc"]],["q-d511f180.js",[11,27]],["q-dc26134b.js",[9,27],["wOIPfiQ04l4"]],["q-ee95f427.js",[27]],["q-f1528409.js",[9,27],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-fbd866e4.js",[27]]];
const libraryBundleIds=[31];
const linkBundles=[[/^\/$/,[20,13,43,8]],[/^\/404\.html\/?$/,[20,13,25,30]],[/^\/posts\/cryptopals\/?$/,[20,13,6]],[/^\/posts\/musings-on-being-a-tech-lead\/?$/,[20,13,39]],[/^\/posts\/new-blog\/?$/,[20,13,5]],[/^\/posts\/statecharts\/?$/,[20,13,14]],[/^\/about\/?$/,[20,13,28,32]],[/^\/posts\/?$/,[20,13,35,19]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
