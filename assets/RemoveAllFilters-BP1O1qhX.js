import{s as i,r as t,R as c}from"./iframe-BNpMeywT.js";import{g as n,r as h}from"./url-helpers-1hshT-U6.js";import{N as r}from"./NewsArticleFilterAccordionText-CnKYmjT5.js";const u=i.a`
    ${e=>e.theme.linkStyles}
    color: ${e=>e.theme.theme_vars.colours.negative} !important;
    font-weight: normal;

    &:hover {
      ${e=>e.theme.linkStylesHover}
      color: ${e=>e.theme.theme_vars.colours.negative} !important;
    }
    &:focus {
      ${e=>e.theme.linkStylesFocus}
      color: ${e=>e.theme.theme_vars.colours.black} !important;
    }
    &:active {
      ${e=>e.theme.linkStylesActive}
      color: ${e=>e.theme.theme_vars.colours.black} !important;
    }
`,a=({count:e})=>{const[o,l]=t.useState([]);t.useEffect(()=>{l(n(r.search.queryParamKey))},[]);const s=m=>{m.preventDefault(),h([...r.removeFiltersList,"page"])};return c.createElement(u,{"data-testid":"RemoveAllFilters",href:"#",onClick:s},"Clear ",o.length>0&&"search term and ","filters",e>0&&` (${e})`)};try{a.displayName="RemoveAllFilters",a.__docgenInfo={description:"",displayName:"RemoveAllFilters",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}}}}}catch{}export{a as R};
