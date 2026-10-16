import{s as n,R as t}from"./iframe-BNpMeywT.js";const o=n.a`
  font-family: ${e=>e.theme.theme_vars.fontstack};
  ${e=>e.theme.linkStyles}
  display: inline-flex;
  align-items: center;
  gap: 8px;

  svg {
    display: block;
    flex: 0 0 16px;
  }

  &:hover { ${e=>e.theme.linkStylesHover} }
  &:focus-visible { ${e=>e.theme.linkStylesFocus} }
  &:active { ${e=>e.theme.linkStylesActive} }
`,r=({children:e,...i})=>t.createElement(o,{...i},e,t.createElement("svg",{"aria-hidden":"true",focusable:"false",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t.createElement("path",{d:"M5 12h14M13 6l6 6-6 6"})));try{r.displayName="ArrowLink",r.__docgenInfo={description:"",displayName:"ArrowLink",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}}}catch{}export{r as A};
