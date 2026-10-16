import{s as o,R as a}from"./iframe-BNpMeywT.js";import{S as p}from"./SBPadding-D5LoLA9q.js";import"./preload-helper-PPVm8Dsz.js";const d=o.div`
  display: block;
  ${e=>e.theme.fontStyles}
`,u=o.div`
  margin-bottom:15px;
  border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.grey};
  display: grid; 
  grid-template-columns: minmax(80px,min-content) 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 1em; 
  grid-template-areas: 
    "letter data"; 
`,m=o.div`
  text-transform: uppercase;
  ${e=>e.theme.theme_vars.h1}
  grid-area: letter;
`,g=o.div`
  padding:15px;
  column-count: 2;
  column-gap: 15px;
`,h=o.a`
  /* display: block; */
  padding: .5em 0px;
  width: 100%;  
  display: inline-block;

  ${e=>e.theme.linkStyles}
  &:hover{
      ${e=>e.theme.linkStylesHover}
  }
  &:focus{
      ${e=>e.theme.linkStylesFocus}
  }
  &:active{
      ${e=>e.theme.linkStylesActive}
  }
`,n=({data:e})=>{const s=e.sort(function(t,r){return t.group.toLowerCase()<r.group.toLowerCase()?-1:t.group.toLowerCase()>r.group.toLowerCase()?1:0}).map(t=>(t.children.sort(function(r,l){return r.title.toLowerCase()<l.title.toLowerCase()?-1:r.title.toLowerCase()>l.title.toLowerCase()?1:0}),t));return a.createElement(d,{"data-testid":"AlphabeticalDirectory"},s.map((t,r)=>a.createElement(u,{key:r},a.createElement(m,null,t.group),a.createElement(g,null,t.children.map((l,c)=>a.createElement(h,{key:c,href:l.url,className:c>t.children.length/2?"second-column":"first-column"},l.title))))))};try{n.displayName="AlphabeticalDirectory",n.__docgenInfo={description:"",displayName:"AlphabeticalDirectory",props:{data:{defaultValue:null,description:"What is this?",name:"data",required:!0,type:{name:"AlphabeticalDirectoryLetterProps[]"}}}}}catch{}const k={title:"Library/Components/Alphabetical Directory",component:n,parameters:{status:{type:"releaseCandidate"}}},y=e=>a.createElement(p,null,a.createElement(n,{...e})),i=y.bind({});i.args={data:[{group:"a",children:[{title:"Anteater",url:"#"},{title:"Abyssinian",url:"#"},{title:"Adelie Penguin",url:"#"},{title:"Aardvark",url:"#"},{title:"Anteater",url:"#"},{title:"African Bullfrog",url:"#"},{title:"Aardvark",url:"#"},{title:"Anteater",url:"#"},{title:"Aardvark",url:"#"},{title:"Anteater",url:"#"},{title:"Aardvark",url:"#"},{title:"Anteater",url:"#"}]},{group:"z",children:[{title:"Zebra",url:"#"}]},{group:"c",children:[{title:"Cat",url:"#"},{title:"Creepy crawlie",url:"#"}]},,{group:"g",children:[{title:"Guinea pig",url:"#"}]}]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <SBPadding>
    <AlphabeticalDirectory {...args} />
  </SBPadding>`,...i.parameters?.docs?.source}}};const v=["ExampleAlphabeticalDirectory"];export{i as ExampleAlphabeticalDirectory,v as __namedExportsOrder,k as default};
