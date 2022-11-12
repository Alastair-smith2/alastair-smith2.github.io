/* Qwik Service Worker */
const appBundles=[["q-027a2e1b.js",[]],["q-040559fc.js",[12]],["q-0e1261b3.js",[12]],["q-0f05f211.js",[]],["q-0fc2d915.js",[12],["3sccYCDd1Z0","hO3b5j0m2ZI"]],["q-1a62d791.js",[4,12,13],["nyM1d8Bsk0c","OjX3HjZadXM"]],["q-1d4e3858.js",[]],["q-2c6666b3.js",[4,12,27],["C1Ywzk9Lfds","VtbRArYhA3c"]],["q-2fd52c2e.js",[12]],["q-3d126683.js",[12]],["q-43213350.js",[12],["NIUMlTWCaeU"]],["q-54ae960e.js",[4,12],["AaAlzKH0KlQ","z1nvHyEppoI"]],["q-587b8509.js",[]],["q-5f35fd33.js",[12]],["q-5fb733f9.js",[12],["VkLNXphUh5s"]],["q-61d72280.js",[12],["ECiboYMa0N8"]],["q-69c5616d.js",[12]],["q-7a3d46c4.js",[4,12,20],["ceU05TscGYE"]],["q-7cc28676.js",[4,12],["nd8yk3KO22c"]],["q-8d47aeaa.js",[4,12],["hA9UPaY8sNQ","mYsiJcA4IBc","skxgNVWVOT8","uVE5iM9H73c"]],["q-8dece01a.js",[12]],["q-8e07e16d.js",[4,12],["zrbrqoaqXSY"]],["q-989e84c1.js",[12],["9IgPNJsxq0g"]],["q-a2a7be92.js",[12]],["q-a5f5bfd3.js",[4,12],["wxLUprz2E0A"]],["q-a693c12d.js",[12,20],["a5PXsfHhA0M"]],["q-aa13206b.js",[12]],["q-ae70d388.js",[12]],["q-dcf11d1b.js",[4,12,13,27],["xYL1qOwPyDI"]],["q-e8df5ff0.js",[12]]];
const libraryBundleIds=[9];
const linkBundles=[[/^\/$/,[1,14,23,28]],[/^\/about\/?$/,[1,14,26,22]],[/^\/posts\/?$/,[1,14,16,15]],[/^\/posts\/new-blog\/?$/,[1,14,29]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
