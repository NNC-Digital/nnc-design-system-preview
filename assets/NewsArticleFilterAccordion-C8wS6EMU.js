import{s as n,n as F,r as s,R as a}from"./iframe-BNpMeywT.js";import{A as w}from"./Accordion-BeE9qXJE.js";import{R as x}from"./RemoveAllFilters-BP1O1qhX.js";import{N as i}from"./NewsArticleFilterAccordionText-CnKYmjT5.js";import{c as S,g as k,a as _,b as $}from"./url-helpers-1hshT-U6.js";const A=n.div`
  /* margin-top: 50px; */
  /* border: 1px solid red; */

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    /* border: 1px solid green; */
  }

  @media screen and (min-width: calc(${e=>e.theme.theme_vars.breakpoints.l} + 60px)) {
    /* border: 1px solid blue; */
  }
`,c=n.button`
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  ${e=>e.theme.linkStyles}
  font-size: 1.2em;
  margin-bottom: 5px;
  display: block;

  &:hover {
    ${e=>e.theme.linkStylesHover}
    cursor: pointer;
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: none;
  }
`,E=e=>{if(e.$isFullScreen)return F`
      background: ${t=>t.noBackground?"transparent":t.theme.cardinal_name==="north"?t.theme.theme_vars.colours.grey_light:t.theme.theme_vars.colours.white};
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      padding: 20px;
      box-sizing: border-box;
      overflow: auto;
    `},P=n.div`
  display: ${e=>e.$isFullScreen?"block":"none"};

  ${E}

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: block;
    position: relative;
    background: transparent;
  }
`,N=n.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 10px;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: block;
    margin-bottom: 0px;
    margin-top: 20px;
    padding: 0;
  }
`,V=n.h2`
  ${e=>e.theme.theme_vars.h2}

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    ${e=>e.theme.theme_vars.h3}
  }
`,d=({sections:e})=>{const[t,m]=s.useState(0),[h,p]=s.useState([]),[u,b]=s.useState([]),[g,y]=s.useState([]);s.useEffect(()=>{m(S(i.removeFiltersList)),p(k(i.search.queryParamKey)),b(_(i.services.queryParamKey)),y($(i.articleType.queryParamKey))},[]);const[l,o]=s.useState(!1),f=r=>{o(!0),document.body.style.overflow="hidden"},v=r=>{o(!1),document.body.style.overflow="visible"};return e.map(r=>{r.title===i.search.title&&h.length>0||r.title===i.services.title&&u.length>0||r.title===i.articleType.title&&g.length>0?r.isExpanded=!0:r.isExpanded=!1}),a.createElement(A,{"data-testid":"NewsArticleFilterAccordion"},a.createElement(c,{onClick:f,"aria-expanded":!!l,"aria-controls":"PageFilters"},"Show Search and filters",t>0&&` (${t})`),a.createElement(P,{$isFullScreen:l,id:"PageFilters","aria-labelledby":"PageFiltersLabel"},a.createElement(N,null,a.createElement(V,{id:"PageFiltersLabel"},"Search and filters"),a.createElement(c,{onClick:v},"Close window")),a.createElement(w,{isFilter:!0,sections:e,withReadMore:!1}),t>0&&a.createElement(x,{count:t})))};try{d.displayName="NewsArticleFilterAccordion",d.__docgenInfo={description:"",displayName:"NewsArticleFilterAccordion",props:{sections:{defaultValue:null,description:"What is this?",name:"sections",required:!0,type:{name:"AccordionSectionProps[]"}}}}}catch{}export{d as N};
