import{s as n,R as e}from"./iframe-BNpMeywT.js";const a=n.aside`
  padding-top: 20px;
  display: block;

  @media screen and (min-width: ${t=>t.theme.theme_vars.breakpoints.m}) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;

    &:focus-within {
      position: static;
      width: auto;
      height: auto;
      margin: inherit;
      overflow: visible;
      clip: auto;
      -webkit-clip-path: none;
      clip-path: none;
      white-space: inherit;
    }
  }
`,r=n.nav``,s=n.ul`
  margin-top: 10px !important;
  margin-left: 0 !important;
  margin-bottom: 20px;
  list-style-type: none;

  font-weight: 400;
  /* font-size: 14px; */
  line-height: 1.5;
`,l=n.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
`,p=n.li`
  position: relative;
  margin-bottom: 5px !important;
  padding-left: 25px;

  &:before {
    content: '—' !important;
    position: absolute !important;
    left: 0 !important;
    width: 20px !important;
    overflow: hidden !important;
    background: transparent !important;
    height: auto !important;
    width: auto !important;
    border-radius: 0 !important;
    top: 10px !important;
  }
`,c=n.a`
  ${t=>t.theme.linkStyles}
  padding: ${t=>t.theme.theme_vars.spacingSizes.small} 0;
  font-weight: 400;
  display: inline-block;

  &:hover {
    ${t=>t.theme.linkStylesHover}
  }
  &:focus {
    ${t=>t.theme.linkStylesFocus}
    svg {
      fill: ${t=>t.theme.theme_vars.colours.black};
    }
  }
  &:active {
    ${t=>t.theme.linkStylesActive}
  }
`,o=({sectionLinksArray:t})=>e.createElement(a,null,e.createElement(r,null,e.createElement(l,null,"Contents"),e.createElement(s,null,t.map(i=>e.createElement(p,{key:i.title},e.createElement(c,{href:"#"+i.id,title:i.title},i.title))))));try{o.displayName="SectionLinksMobileContents",o.__docgenInfo={description:"",displayName:"SectionLinksMobileContents",props:{sectionLinksArray:{defaultValue:null,description:"An array of the SectionLinksMobileContents, each with a title and a URL not including the current page users are on",name:"sectionLinksArray",required:!0,type:{name:"SectionProp[]"}}}}}catch{}export{o as S};
