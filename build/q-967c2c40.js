import{d as a,z as h,c as e}from"./q-af9f9f38.js";import{A as i,P as l}from"./q-238f6065.js";const d=[{text:"A new blog",id:"a-new-blog",level:1},{text:"So why a blog?",id:"so-why-a-blog",level:2},{text:"What is this built with?",id:"what-is-this-built-with",level:2}],g={title:"New blog",meta:[{name:"author",content:"Alastair Smith"},{name:"description",content:"Why a new blog?"},{property:"og:title",content:"New blog"},{property:"og:description",content:"Why a new blog?"}],styles:[],links:[],frontmatter:{Date:"30/03/2022"}},w={title:"New blog",author:"Alastair Smith",description:"Why a new blog?",Date:"30/03/2022",og:[{title:"New blog",description:!0}]};function o(n){const t=Object.assign({h1:"h1",a:"a",span:"span",ol:"ol",li:"li",h2:"h2",p:"p",em:"em"},n.components);return e(l,{children:[e(t.h1,{id:"a-new-blog",children:[e(t.a,{"aria-hidden":"true",tabindex:"-1",href:"#a-new-blog",children:e(t.span,{class:"icon icon-link"})}),"A new blog"]}),e(t.ol,{children:[`
`,e(t.li,{children:e(t.a,{href:"#why",children:"So why a blog?"})}),`
`,e(t.li,{children:e(t.a,{href:"#technology",children:"What is this built with?"})}),`
`]}),e(t.h2,{id:"so-why-a-blog",children:[e(t.a,{"aria-hidden":"true",tabindex:"-1",href:"#so-why-a-blog",children:e(t.span,{class:"icon icon-link"})}),"So why a blog?",e("a",{name:"why"})]}),e(t.p,{children:`Mainly because I've wanted a space for a while that I can put down some thoughts
and occasionally cross share. Writing up about a topic is a great way to learn it.`}),e(t.h2,{id:"what-is-this-built-with",children:[e(t.a,{"aria-hidden":"true",tabindex:"-1",href:"#what-is-this-built-with",children:e(t.span,{class:"icon icon-link"})}),"What is this built with?",e("a",{name:"technology"})]}),e(t.p,{children:"I wanted this to be an opportunity to use some technology that I've heard about and see what they were like for the most part. For those who are interested; it includes the following:"}),e(t.ol,{children:[`
`,e(t.li,{children:[e(i,{href:"https://qwik.builder.io/",text:"Qwik"}),`, which looks
really promising in general. Specifically `,e(i,{href:"https://qwik.builder.io/docs/concepts/resumable/",text:"resumability"}),` could truly change the JavaScript dicussion but time will tell as there's
a lot going on in the community at the moment.`]}),`
`,e(t.li,{children:[e(i,{href:"https://tailwindcss.com/",text:"Tailwind"}),`, I hadn't
intended to learn this, but I needed a CSS framework. I have seen people
comment above how much they like Tailwind and now see why.`]}),`
`,e(t.li,{children:[e(i,{href:"https://playwright.dev/",text:"Playwright"}),`, I'd
normally default to cypress for E2E testing in JS / TS but again had heard
good things and given the recent announcement of `,e(i,{href:"https://github.com/microsoft/playwright/releases/tag/v1.27.0",text:"page.getBy\\*"}),`
I thought I'd give a whirl. Getting
`,e(i,{href:"https://playwright.dev/docs/accessibility-testing",text:"axe-core"})," integrated for ",e(t.em,{children:"some"}),` automated accessibility testing was straight forward
as well.`]}),`
`,e(t.li,{children:[e(i,{href:"https://pages.github.com/",text:"Github pages"}),`, is a
convenient way to host for free.`]}),`
`]}),e(t.p,{children:["It's been nice to be able to leverage ",e(i,{href:"https://github.com/features/actions",text:"Github actions"})," to automate the build and deploy process."]}),e(t.p,{children:"We'll see what else pops up on this space."})]})}function s(n={}){const{wrapper:t}=n.components||{};return t?e(t,Object.assign({},n,{children:e(o,n)})):o(n)}const p=()=>a(h,{children:a(s,{},3,null)},3,"obMxS8Bh");export{p as default,w as frontmatter,g as head,d as headings};
