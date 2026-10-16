import{s as o,n as h,r as p,R as t}from"./iframe-BNpMeywT.js";import{C as u}from"./ChevronIcon-dH899Igz.js";const b=o.div`
  ${e=>e.theme.fontStyles}
  background-color: ${e=>e.theme.theme_vars.colours.action_light};
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  margin-bottom: 25px;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    background-color: transparent;
  }
`,_=o.button`
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  border-bottom: 2px solid ${e=>e.theme.theme_vars.colours.action};
  padding: ${e=>`${e.theme.theme_vars.spacingSizes.medium} ${e.theme.theme_vars.spacingSizes.small}`};
  font-size: 1em;

  svg {
    fill: ${e=>e.theme.theme_vars.colours.action};
    vertical-align: middle;
  }

  &:focus {
    outline: none;
    ${e=>e.theme.linkStylesFocus}
    border-bottom: 2px solid;
    svg {
      fill: ${e=>e.theme.theme_vars.colours.black};
    }
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: none;
  }
`,v=o.span`
  display: inline-block;
  margin-left: 10px;
  margin-right: 5px;
  float: right;
`,$=o.span`
  display: none;
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: block;
    border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.action};
    padding: ${e=>e.theme.theme_vars.spacingSizes.small};
    font-size: ${e=>e.theme.theme_vars.fontSizes.extra_small};

    &:focus {
      outline: none;
    }
  }
`,g=o.div`
  &.closed {
    display: none;
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    &.closed {
      display: block;
    }
  }
`,k=o.p`
  margin: ${e=>e.theme.theme_vars.spacingSizes.extra_small} 0;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small};
  font-weight: bold;
`,x=o.ul`
  list-style: none;
  margin: 0 !important;
  padding: 0 !important;
`,a=h`
  color: ${e=>e.theme.theme_vars.colours.black};
  background-color: ${e=>e.theme.theme_vars.colours.focus};
  outline: none;
  box-shadow: 0 0 0 2px ${e=>e.theme.theme_vars.colours.focus}, 0 0 0 4px ${e=>e.theme.theme_vars.colours.black};
  -webkit-box-shadow: 0 0 0 2px ${e=>e.theme.theme_vars.colours.focus}, 0 0 0 4px ${e=>e.theme.theme_vars.colours.black};
  -moz-box-shadow: 0 0 0 2px ${e=>e.theme.theme_vars.colours.focus}, 0 0 0 4px ${e=>e.theme.theme_vars.colours.black};
`,f=o.li`
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  left: 0;

  &::before {
    display: none;
    position: relative;
  }

  &[aria-current] a {
    display: none;

    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
      display: block;
      background-color: ${e=>e.theme.theme_vars.colours.action_light};
      color: ${e=>e.theme.theme_vars.colours.black};
      border-bottom-color: transparent;
      &:focus {
        ${a}
      }
      &:focus-visible {
        ${a}
      }
    }
  }
`,S=o.a`
  display: block;
  color: ${e=>e.theme.theme_vars.colours.action};
  padding: ${e=>e.theme.theme_vars.spacingSizes.small};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    transition: background-color 0.3s ease 0s;
    background-color: ${e=>e.theme.theme_vars.colours.action_light}80;
  }
  &:focus {
    ${a}
  }
  &:focus-visible {
    ${a}
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
    -webkit-box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
    -moz-box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
  }

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    margin: ${e=>e.theme.theme_vars.spacingSizes.extra_small} 0;
  }
`,l=({Title:e,Sections:m})=>{const[s,i]=p.useState(!1);return t.createElement(b,{"data-testid":"SectionLinksSidebar"},t.createElement(_,{onClick:()=>i(!s)},e,t.createElement(v,null,t.createElement(u,{direction:s?"up":"down"}))),t.createElement($,null,e),t.createElement(g,{className:!s&&"closed"},m.map((r,c)=>t.createElement("div",{key:c},r.SectionTitle&&t.createElement(k,null,r.SectionTitle),t.createElement(x,null,r.SectionLinks.map((n,d)=>t.createElement(f,{key:d,"aria-current":n.isCurrent?"true":null},t.createElement(S,{href:n.url},n.title))))))))};try{l.displayName="SectionLinksSidebar",l.__docgenInfo={description:"",displayName:"SectionLinksSidebar",props:{Title:{defaultValue:null,description:"Title",name:"Title",required:!0,type:{name:"string"}},Sections:{defaultValue:null,description:"An array of sections",name:"Sections",required:!0,type:{name:"SectionsProps[]"}}}}}catch{}export{l as S};
