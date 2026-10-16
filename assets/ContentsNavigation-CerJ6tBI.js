import{s as n,R as t}from"./iframe-BNpMeywT.js";const p=n.div`
  display: block;
  border-top: 1px solid ${e=>e.theme.theme_vars.colours.grey}80;
  margin: ${e=>e.theme.theme_vars.spacingSizes.medium} 0;
`,l=n.a`
  display: flex;
  padding: ${e=>e.theme.theme_vars.spacingSizes.medium} 0;
  border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.grey}80;
  ${e=>e.theme.fontStyles};
  ${e=>e.theme.linkStyles};
  text-decoration: none !important;

  &:hover {
    ${e=>e.theme.linkStylesHover};
    text-decoration: underline !important;
    text-decoration-style: dashed !important;
  }

  &:focus {
    ${e=>e.theme.linkStylesFocus};
  }

  &:active {
    ${e=>e.theme.linkStylesActive};
  }
`,o=n.span`
  font-size: 0.9rem;
  text-decoration: underline;
`,s=n.div`
  margin-right: ${e=>e.theme.theme_vars.spacingSizes.small};
  text-decoration: none;
`,c=n.div`
  flex-grow: 1;
`,m=({contents:e,currentPath:d})=>{const r=()=>e.findIndex(u=>u.url===d),a=r()<e.length-1?e[r()+1]:void 0,i=r()!==0?e[r()-1]:void 0;return t.createElement(p,{"data-testid":"ContentsNavigation"},i&&t.createElement(l,{href:i.url},t.createElement(s,null,"←"),t.createElement(c,null,"Previous",t.createElement("br",null),t.createElement(o,null,i.title))),a&&t.createElement(l,{href:a.url},t.createElement(s,null,"→"),t.createElement(c,null,"Next",t.createElement("br",null),t.createElement(o,null,a.title))))};try{m.displayName="ContentsNavigation",m.__docgenInfo={description:"",displayName:"ContentsNavigation",props:{contents:{defaultValue:null,description:"An array of content links",name:"contents",required:!0,type:{name:"ContentLink[]"}},currentPath:{defaultValue:null,description:"The optional current path",name:"currentPath",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The optional contents title, defaults to 'Contents'",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{m as C};
