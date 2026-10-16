import{s as a,R as t}from"./iframe-BNpMeywT.js";import{C as n}from"./ChevronIcon-dH899Igz.js";const s=a.div`
  padding-top: 15px;
  border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.grey}80;
  margin-bottom: ${e=>e.$hasMargin?e.theme.theme_vars.spacingSizes.large:0};
`,o=a.ol`
  list-style: none;
  padding-left: 0px;
  margin-left: 0;
  margin-top: 0;
  display: block;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
`,m=a.li`
  margin-right: ${e=>e.theme.theme_vars.spacingSizes.small};
  margin-bottom: 0;
  display: none;
  left: 0;
  padding-right: 0;

  &:first-of-type,
  &:last-of-type {
    display: inline-block;
  }

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: inline-block;
  }

  &:last-of-type svg {
    display: none;
  }
`,c=a.div`
  display: inline-block;
  margin-left: ${e=>e.theme.theme_vars.spacingSizes.small};
  vertical-align: middle;
`,d=a.a`
  ${e=>e.theme.linkStyles}
  font-weight: 400;
  display: inline-block;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small} 0;

  svg {
    fill: ${e=>e.theme.theme_vars.colours.action};
  }

  &:hover {
    ${e=>e.theme.linkStylesHover}
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
    svg {
      fill: ${e=>e.theme.theme_vars.colours.black};
    }
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }
`,l=({breadcrumbsArray:e,hasMargin:r=!1})=>t.createElement(s,{$hasMargin:r,"data-testid":"Breadcrumbs"},t.createElement(o,{as:e.length===1?"div":"ol"},e.map(i=>t.createElement(m,{key:i.title,as:e.length===1?"span":"li"},t.createElement(t.Fragment,null,t.createElement(d,{href:i.url,title:i.title},i.title),t.createElement(c,null,t.createElement(n,{direction:"right",colourFill:"#C6C6C6"})))))));try{l.displayName="Breadcrumbs",l.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{breadcrumbsArray:{defaultValue:null,description:"An array of the breadcrumbs, each with a title and a URL not including the current page users are on",name:"breadcrumbsArray",required:!0,type:{name:"BreadcrumbProp[]"}},hasMargin:{defaultValue:{value:"false"},description:"Should the breadcrumbs have bottom margin",name:"hasMargin",required:!1,type:{name:"boolean"}}}}}catch{}export{l as B};
