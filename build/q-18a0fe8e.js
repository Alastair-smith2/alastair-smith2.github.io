import{S as s}from"./q-7c94c57e.js";import{L as g,d as e,X as i,F as l,m as n,x as a}from"./q-f9e5cc2d.js";import{g as r}from"./q-c7f9962b.js";const f=t=>{if(g(),!t.item.items||t.item.items.length==0)return e(a,{children:[e(s,{get text(){return t.item.text},[i]:{text:l(m=>m.item.text,[t])}},3,"my_0"),n("p",null,{class:"text-white text-lg mt-6"},"No posts at the moment",3,null)]},1,"my_1");const o=t.item.items.length<=1,x=t.item.items.slice(0,3),c=t.mostRecentItemsOnly?r(x,!t.showDrafts):r(t.item.items,!t.showDrafts);return e(a,{children:[e(s,{get text(){return t.item.text},[i]:{text:l(m=>m.item.text,[t])}},3,"my_2"),n("ul",{class:`grid ${o?"sm:grid-cols-1":"sm:grid-cols-2"} gap-8`},null,c,1,null)]},1,"my_3")};export{f as s_CjZOqE3On9Q};
