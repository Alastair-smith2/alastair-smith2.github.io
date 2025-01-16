import{E as t}from"./q-Bay4bHT8.js";import{A as i,P as o}from"./q-CbmWr0q4.js";import"./q-Du-Qr_qX.js";const s=[{text:"A new blog",id:"a-new-blog",level:1},{text:"So why a blog?",id:"so-why-a-blog",level:2},{text:"What is this built with?",id:"what-is-this-built-with",level:2}],c={title:"New blog",meta:[{name:"author",content:"Alastair Smith"},{name:"description",content:"Why a new blog?"},{property:"og:title",content:"New blog"},{property:"og:description",content:"Why a new blog?"}],styles:[],links:[],scripts:[],frontmatter:{Date:"31/03/2022"}},d={title:"New blog",author:"Alastair Smith",description:"Why a new blog?",Date:"31/03/2022",og:[{title:"New blog",description:!0}]};function a(n){const e={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",span:"span",...n.components};return t(o,{children:[t(e.h1,{id:"a-new-blog",children:[t(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#a-new-blog",children:t(e.span,{class:"icon icon-link"})}),"A new blog"]}),t(e.ol,{children:[`
`,t(e.li,{children:t(e.a,{href:"#why",children:"So why a blog?"})}),`
`,t(e.li,{children:t(e.a,{href:"#technology",children:"What is this built with?"})}),`
`]}),t(e.h2,{id:"so-why-a-blog",children:[t(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#so-why-a-blog",children:t(e.span,{class:"icon icon-link"})}),"So why a blog?",t("a",{name:"why"})]}),t(e.p,{children:`Mainly because I've wanted a space for a while that I can put down some thoughts
and occasionally cross share. Writing up about a topic is a great way to learn it.`}),t(e.h2,{id:"what-is-this-built-with",children:[t(e.a,{"aria-hidden":"true",tabindex:"-1",href:"#what-is-this-built-with",children:t(e.span,{class:"icon icon-link"})}),"What is this built with?",t("a",{name:"technology"})]}),t(e.p,{children:"I wanted this to be an opportunity to use some technology that I've heard about and see what they were like for the most part. For those who are interested; it includes the following:"}),t(e.ol,{children:[`
`,t(e.li,{children:[t(i,{href:"https://qwik.builder.io/",text:"Qwik"}),", specifically ",t(i,{href:"https://www.builder.io/blog/resumability-from-ground-up",text:"resumability"})," caught my attention and I'm intrigued to see how Qwik develops. A ",t(i,{href:"https://www.builder.io/blog/qwik-rc-milestone",text:"1.0 RC"}),` was announced yesterday but time will tell as there's a lot going on in
the community (e.g. Remix, RSC, Astro, Deno, Bun and the many others that
I've not listed here) at the moment. While the innovation is promising;
trying to keep up to date with everything can fatiguing.`," "]}),`
`,t(e.li,{children:[t(i,{href:"https://tailwindcss.com/",text:"Tailwind"}),`, I hadn't
intended to learn this, but I needed a CSS framework. I have seen people
comment above how much they like Tailwind and now see why.`]}),`
`,t(e.li,{children:[t(i,{href:"https://playwright.dev/",text:"Playwright"}),`, I'd
normally default to cypress for E2E testing in JS / TS but again had heard
good things and given the recent announcement of `,t(i,{href:"https://github.com/microsoft/playwright/releases/tag/v1.27.0",text:"page.getBy\\*"}),`
I thought I'd give a whirl. Getting
`,t(i,{href:"https://playwright.dev/docs/accessibility-testing",text:"axe-core"})," integrated for ",t(e.em,{children:"some"}),` automated accessibility testing was straight forward
as well.`]}),`
`,t(e.li,{children:[t(i,{href:"https://pages.github.com/",text:"Github pages"}),`, is a
convenient way to host for free.`]}),`
`]}),t(e.p,{children:["It's been nice to be able to leverage ",t(i,{href:"https://github.com/features/actions",text:"Github actions"})," to automate the build and deploy process."]}),t(e.p,{children:"We'll see what else pops up on this space."})]})}const w=()=>{const n=a({});return typeof MDXLayout=="function"?t(MDXLayout,{children:n}):n};export{w as default,d as frontmatter,c as head,s as headings};
