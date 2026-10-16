import{s as a,R as t}from"./iframe-BNpMeywT.js";import{H as o}from"./Heading-C7kzbY1R.js";const m=a.div`
  display: block;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.large};
  padding-bottom: ${e=>e.theme.theme_vars.spacingSizes.large};
  border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.grey}80;
`,c=a.ul`
  list-style-type: '-';
`,p=a.li`
  margin-bottom: 5px !important;

  &::marker {
    font-size: ${e=>e.theme.theme_vars.spacingSizes.medium};
  }

  &::before {
    display: none;
  }
`,d=a.a`
  display: inline-block;
  padding: ${e=>e.theme.theme_vars.spacingSizes.extra_small} 0;
  ${e=>e.theme.fontStyles};
  ${e=>e.theme.linkStyles};
  margin-left: ${e=>e.theme.theme_vars.spacingSizes.small};

  &:hover {
    ${e=>e.theme.linkStylesHover};
  }

  &:focus {
    ${e=>e.theme.linkStylesFocus};
  }

  &:active {
    ${e=>e.theme.linkStylesActive};
  }
`,u=a.span`
  ${e=>e.theme.fontStyles};
  margin-left: ${e=>e.theme.theme_vars.spacingSizes.small};
`,i=({contents:e,currentPath:s=void 0,title:l="Contents"})=>t.createElement(m,{"data-testid":"Contents"},t.createElement(o,{text:l,level:2}),t.createElement(c,null,e.map((n,r)=>t.createElement(p,{key:r},n.url===s?t.createElement(u,null,n.title):t.createElement(d,{href:n.url,$active:n.url===s},n.title)))));try{i.displayName="Contents",i.__docgenInfo={description:"",displayName:"Contents",props:{contents:{defaultValue:null,description:"An array of content links",name:"contents",required:!0,type:{name:"ContentLink[]"}},currentPath:{defaultValue:{value:"undefined"},description:"The optional current path",name:"currentPath",required:!1,type:{name:"string"}},title:{defaultValue:{value:"Contents"},description:"The optional contents title, defaults to 'Contents'",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{i as C};
