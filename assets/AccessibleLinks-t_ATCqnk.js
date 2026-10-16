import{s,R as t}from"./iframe-BNpMeywT.js";import{S as r}from"./SkipToMainContent-BnipvpP7.js";const p=s.ul`
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    margin-top: -1rem;
`,m=s.li`
    margin-bottom: 10px;
    left: unset;
`,u=s.a`
  ${e=>e.theme.fontStyles}

  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  display: block;
  padding: 10px 15px;
 
  &:active,
  &:focus {
    position: static;
    width: auto;
    height: auto;
    margin: inherit;
    overflow: visible;
    clip: auto;
    -webkit-clip-path: none;
    clip-path: none;
    white-space: inherit
  }

  &:link,
  &:visited,
  &:hover,
  &:active,
  &:focus {
    color: ${e=>e.theme.theme_vars.colours.black};
  }



  @media (min-width: 40.0625em) {
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25
  }



  &:focus {
    outline: 3px solid ${e=>e.theme.theme_vars.colours.focus};
    outline-offset: 0;
    background-color: ${e=>e.theme.theme_vars.colours.focus};
  }




`,h=({AccessibleLinksArray:e=null,includeSkipToMainContent:o=!1,listItem:n=!0})=>{const l=({children:i})=>n?t.createElement(m,null,i):t.createElement(t.Fragment,null,i),c=({children:i})=>n?t.createElement(p,null,i):t.createElement(t.Fragment,null,i);return t.createElement(c,null,o&&t.createElement(l,null,t.createElement(r,null)),e&&e.map((i,a)=>t.createElement(l,{key:"accessible-link-li-"+a},t.createElement(u,{key:"accessible-link-"+a,href:i.url},i.title))))};try{AccessibleLinks.displayName="AccessibleLinks",AccessibleLinks.__docgenInfo={description:"",displayName:"AccessibleLinks",props:{AccessibleLinksArray:{defaultValue:{value:"null"},description:"An array of links for the accessible links section at the top of the page, for things like accessibility message and feedback form",name:"AccessibleLinksArray",required:!1,type:{name:"AccessibleLinkProp[]"}},includeSkipToMainContent:{defaultValue:{value:"false"},description:"",name:"includeSkipToMainContent",required:!1,type:{name:"boolean"}},listItem:{defaultValue:{value:"true"},description:"",name:"listItem",required:!1,type:{name:"boolean"}}}}}catch{}export{h as A};
