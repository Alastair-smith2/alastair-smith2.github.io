import{E as e}from"./q-Bay4bHT8.js";import{A as t,P as o}from"./q-CbmWr0q4.js";import"./q-Du-Qr_qX.js";const c=[{text:"Technical writing: Learnings from Google's technical writing course",id:"technical-writing-learnings-from-googles-technical-writing-course",level:1},{text:"Why should you care about writing skills?",id:"why-should-you-care-about-writing-skills",level:2},{text:"Google’s technical writing course",id:"googles-technical-writing-course",level:2},{text:"Who are you writing for?",id:"who-are-you-writing-for",level:2},{text:"Ambigious pronouns",id:"ambigious-pronouns",level:2},{text:"Active voice",id:"active-voice",level:2},{text:"Reduce subordinate clauses",id:"reduce-subordinate-clauses",level:2},{text:"Lists",id:"lists",level:2},{text:"Conclusion",id:"conclusion",level:2}],h={title:"Technical writing",meta:[{name:"author",content:"Alastair Smith"},{name:"description",content:"Learning about technical writing from Google's technical writing course"},{property:"og:title",content:"Technical writing"},{property:"og:description",content:"Learning about technical writing from Google's technical writing course"}],styles:[],links:[],scripts:[],frontmatter:{Date:"16/01/2025"}},d={title:"Technical writing",author:"Alastair Smith",description:"Learning about technical writing from Google's technical writing course",Date:"16/01/2025",og:[{title:"Technical writing",description:!0}]};function a(n){const i={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...n.components};return e(o,{children:[e(i.h1,{id:"technical-writing-learnings-from-googles-technical-writing-course",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#technical-writing-learnings-from-googles-technical-writing-course",children:e(i.span,{class:"icon icon-link"})}),"Technical writing: Learnings from Google's technical writing course"]}),e(i.ol,{children:[`
`,e(i.li,{children:e(i.a,{href:"#why-should-you-care-about-writing-skills",children:"Why should you care about writing skills?"})}),`
`,e(i.li,{children:e(i.a,{href:"#googles-technical-writing-course",children:"Google’s technical writing course"})}),`
`,e(i.li,{children:e(i.a,{href:"#who-are-you-writing-for",children:"Who are you writing for?"})}),`
`,e(i.li,{children:e(i.a,{href:"#ambigious-pronouns",children:"Ambigious pronouns"})}),`
`,e(i.li,{children:e(i.a,{href:"#active-voice",children:"Active voice"})}),`
`,e(i.li,{children:e(i.a,{href:"#reduce-subordinate-clauses",children:"Reduce subordinate clauses"})}),`
`,e(i.li,{children:e(i.a,{href:"#lists",children:"Lists"})}),`
`,e(i.li,{children:e(i.a,{href:"#conclusion",children:"Conclusion"})}),`
`]}),e(i.h2,{id:"why-should-you-care-about-writing-skills",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#why-should-you-care-about-writing-skills",children:e(i.span,{class:"icon icon-link"})}),"Why should you care about writing skills?",e("a",{name:"why-should-you-care-about-writing-skills"})]}),e(i.p,{children:["Technical writing, writing which attains to technical documents, is undervalued and underdeveloped as a skill amongst software engineers is my current conclusion. None of the colleagues that I’ve talked to about technical writing have had any training or mentoring on improving their skills and looking online that doesn’t seem the exception. Yet, all of my colleagues agreed that well written and structured documentation was a game changer on their projects. The lack of well documented systems, whether it is about how systems should function or how they actually do, has a wide range of impacts. One particular impact which I’ve seen repeatedly relates to teams who have inherited systems. A proposed change is asked for in that system but the team cannot find the appropriate context to evaluate the change with confidence. Therefore, very understandably, the team attempts some investigation in order to gain context, which the previous team would have had, to ensure there aren’t any unforeseen side effects of the change. Another scenario which seems common place is there being plenty of documentation available about a system. But, large parts of the documentation is irrelevant, structured in an unhelpful manner or expects readers to have more familarity about the system then the reader does. In both of these examples there are unnecessary risk and time factors in delivery that could have been mitigated by well written and maintained documentation. Having led multiple teams, one valuable part of writing in my mind is how it helps teams make timely and informed decisions without creating bottlenecks. ",e(t,{text:"Stripe",href:"https://slab.com/blog/stripe-writing-culture/"}),", ",e(t,{text:"Oxide",href:"https://rfd.shared.oxide.computer/rfd/0001"})," and ",e(t,{text:"Shopify",href:"https://shopify.engineering/good-documentation-productivity#"})," all cover the benefits of having a culture which values writing, alongside some of their own individual practices, in more detail than I want to here. What I’d like to look at in a bit more depth is some of the specific writing skills that are used."]}),e(i.h2,{id:"googles-technical-writing-course",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#googles-technical-writing-course",children:e(i.span,{class:"icon icon-link"})}),"Google’s technical writing course",e("a",{name:"googles-technical-writing-course"})]}),e(i.p,{children:["After reflecting on how I could probably start by improving my own technical writing I found ",e(t,{href:"https://www.reddit.com/r/ExperiencedDevs/comments/105tr8c/how_to_improve_documentation_technical_writing/",text:"https://www.reddit.com/r/ExperiencedDevs/comments/105tr8c/how_to_improve_documentation_technical_writing/"})," and ",e(t,{href:"https://github.com/reduxjs/redux/issues/3609",text:"Issue #3609"}),". It was the first comment on the reddit post, at least at the time of writing this article, which pointed me towards Google’s technical writing course. ",e(t,{text:"Google for Developers Technical writing",href:"https://developers.google.com/tech-writing"}),". I’d highly recommend going through Google’s course. It has a good balance of introducing a concept and then consolidating the concepts through simple exercises. The following sections of this article are selected items and learnings from the course which stood out based on my own experience. I’m only going to give a high level summary of the skills and practices. If they interest you please go and spend some time looking at the course material for fuller material."]}),e(i.h2,{id:"who-are-you-writing-for",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#who-are-you-writing-for",children:e(i.span,{class:"icon icon-link"})}),"Who are you writing for?",e("a",{name:"who-are-you-writing-for"})]}),e(i.p,{children:["Know your audience. What skills, whether it’s programming related, domain specific or otherwise, do you expect readers to have while reviewing a document you have created? What should they take away from the document you’re creating? ",e(t,{text:"Cypress",href:"https://www.cypress.io/"})," and ",e(t,{text:"Redux",href:"https://redux.js.org/"})," both have “callouts” throughout their documentation which state “What you’ll learn” or “Pre-requisites”. I quite like making a “callout” when writing a document because it helps me sanity check what I’m expecting from the reader and what I’m hoping they’re expecting from me. A document is far more likely to be relevant if some upfront thinking is done about who is going to read it."]}),e(i.h2,{id:"ambigious-pronouns",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#ambigious-pronouns",children:e(i.span,{class:"icon icon-link"})}),"Ambigious pronouns",e("a",{name:"ambigious-pronouns"})]}),e(i.p,{children:"Pronouns are nouns that are intended replace or point to another noun. Nouns are abundantly present throughout writing and used to identify people, places, or things. An example from the course would be “Sam runs races. He like to compete”. Sam is the noun here and “he” is the pronoun. But in the following example “We went to the beach on a hot sunny day. It was delightful” what the “it” is referring to isn’t clear. Was “it” meant to be about the beach, the hot sunny day or a combination of the two? Which noun is being replaced by “it” in this context isn’t clear. Another example would be “Team Bulbasaur are replacing team Charmander as the owners for the catalog service. It has been a real pleasure working with them”. Does “them” refer to team Charmander or team Bulbasaur? “It”, “they”, “them” and “their” are apparently the most common source of confusion which would align to my experience. In my mind most cases of amibigous pronous are a result from people trying to be concise but accidentally causing more work for the reader."}),e(i.h2,{id:"active-voice",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#active-voice",children:e(i.span,{class:"icon icon-link"})}),"Active voice",e("a",{name:"active-voice"})]}),e(i.p,{children:"The course recommends that most technical documentations should be done in active voice. The following example shows the typical difference between active and passive voices."}),e(i.ul,{children:[`
`,e(i.li,{children:"“The cat sat on the bean bag.” This is using the active voice"}),`
`,e(i.li,{children:"“The bean bag was sat on by the cat.” This is using the passive voice"}),`
`]}),e(i.p,{children:"Both forms have the following components:"}),e(i.ul,{children:[`
`,e(i.li,{children:"An actor (the cat)"}),`
`,e(i.li,{children:"A verb (sat)"}),`
`,e(i.li,{children:"A target (the mat)"}),`
`]}),e(i.p,{children:"The active voice has a formula of “actor + verb + target”. The passive voice has a formula of “target + verb + actor”. An important point is the passive voice can omit the actor. E.g. “The bean bag was sat on”. But in the previous example who was sitting on the bean bag? In this context the bean bag was most likely sat on by a cat but we’ll never know."}),e(i.p,{children:"The primary benefits of the active voice are:"}),e(i.ul,{children:[`
`,e(i.li,{children:"Readers generally convert passive voice to active voice internally. Removing this extra mental conversion helps readers digest information more easily."}),`
`,e(i.li,{children:"The actor is clearly identifiable"}),`
`]}),e(i.p,{children:"I enjoyed the section about the active voice on the course. I realised there were places where I defaulted to either voice without consciously choosing to."}),e(i.h2,{id:"reduce-subordinate-clauses",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#reduce-subordinate-clauses",children:e(i.span,{class:"icon icon-link"})}),"Reduce subordinate clauses",e("a",{name:"reduce-subordinate-clauses"})]}),e(i.blockquote,{children:[`
`,e(i.p,{children:["A ",e(i.strong,{children:"clause"})," is an independent logical fragment of a sentence, which contains an actor and an action. Every sentence contains the following:"]}),`
`,e(i.ul,{children:[`
`,e(i.li,{children:"A main clause"}),`
`,e(i.li,{children:"Zero or more subordinate clauses"}),`
`]}),`
`,e(i.p,{children:"Subordinate clauses modify the idea in the main clause. As the name implies, subordinate clauses are less important than the main clause."}),`
`]}),e(i.p,{children:"The above is taken directly from Google's course. An example of a subordinate clause would be “considered an awful language by many” in the following sentence “JavaScript, considered an awful language by many, was created in 10 days”. A subodinate clause doesn’t make sense by itself without the main clause. I found it surprising that this advice is marked as optional in the course. The reason being that a lot of subordinate clauses I’ve read in documentation are irrelevant. In my mind authors often add multiple subordinate clauses as a “oh yeah these bits of extra information will be helpful” but often they cloud the important detail."}),e(i.h2,{id:"lists",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#lists",children:e(i.span,{class:"icon icon-link"})}),"Lists",e("a",{name:"lists"})]}),e(i.p,{children:["Lists can be an incredibly useful way to convey information. It’s not uncommon however to see what is an ",e(i.strong,{children:"embedded list"})," within internal documentation. One example of an embedded list would be “our API provides the ability to list pets, retrieve a single pet, update a single pet and delete a pet”. This API description could be better presented as a bulleted list which describes the API’s ability to:"]}),e(i.ul,{children:[`
`,e(i.li,{children:"List pets."}),`
`,e(i.li,{children:"Retrieve a pet."}),`
`,e(i.li,{children:"Update a single pet."}),`
`,e(i.li,{children:"Delete a pet."}),`
`]}),e(i.p,{children:"Importantly in the example above the ordering of the individual items does not matter. If the ordering did matter then a numbered list should be used. None of the information about this topic was new for me. However, reviewing the topic did highlight how I had developed a habit of using numbered lists by default including cases where a bulleted list would be better."}),e(i.h2,{id:"conclusion",children:[e(i.a,{"aria-hidden":"true",tabindex:"-1",href:"#conclusion",children:e(i.span,{class:"icon icon-link"})}),"Conclusion",e("a",{name:"conclusion"})]}),e(i.p,{children:"I learnt a lot about my writing from doing the technical writing course. I also learned about practical ways to improve my writing. I’m keeping an eye out for the virtual live sessions as I’d like to further consolidate this skill. The topics from the course covered in this post only really scratch the surface but I hope their applicability is evident. There’s real benefit to an organisation when valuing quality writing as part of a culture and encouraging individuals to hone their writing."})]})}const u=()=>{const n=a({});return typeof MDXLayout=="function"?e(MDXLayout,{children:n}):n};export{u as default,d as frontmatter,h as head,c as headings};
