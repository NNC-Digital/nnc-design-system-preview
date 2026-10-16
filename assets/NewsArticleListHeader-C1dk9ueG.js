import{s,r as o,R as e}from"./iframe-BNpMeywT.js";import{S as P}from"./SortBy-_myfZUPq.js";import{c as q,g as S,a as _,b as w,d,e as K}from"./url-helpers-1hshT-U6.js";import{R as u}from"./RemovableTag-D9m4fAKV.js";import{N as a}from"./NewsArticleFilterAccordionText-CnKYmjT5.js";const N=s.div`
${t=>t.theme.fontStyles};
padding-bottom: 20px;
border-bottom: 1px solid ${t=>t.theme.theme_vars.colours.grey};
display: grid;
grid-template-columns: 1fr 1fr;
margin-bottom: 20px;
`,k=s.div`
  display: block;
  align-self: end;
  font-weight: bold;
`,A=s.div`
  display: block;
  text-align: right;
`,B=s.div`
  margin-top: 20px;
  grid-column-start: span 2;
`,p=s.div`
  padding: 5px;
  border-bottom: 1px solid ${t=>t.theme.theme_vars.colours.grey}80;

  &:last-of-type {
    border-bottom: none;
  }
`,y=s.div`
  font-weight: bold;
  vertical-align: middle;
  display: inline-block;
  margin-right: 5px;
  font-size: 80%;
`,g=({totalResults:t,sortBy:f,sortByOptions:h})=>{const[b,v]=o.useState(0),[n,V]=o.useState([]),[i,x]=o.useState([]),[c,E]=o.useState([]);o.useEffect(()=>{v(q([a.search.queryParamKey,a.services.queryParamKey,a.articleType.queryParamKey,a.sortBy.queryParamKey])),E(S(a.search.queryParamKey)),V(_(a.services.queryParamKey)),x(w(a.articleType.queryParamKey))},[]);const m=(r,l)=>{K(r,l)};return e.createElement(N,{"data-testid":"NewsArticleListHeader"},e.createElement(k,null,t," article",(t>1||t===0)&&"s"," ",(n.length>0||i.length>0)&&" found"," ",c.length>0&&' for "'+c+'"'),e.createElement(A,null,e.createElement(P,{selected:f,options:h})),b>0&&e.createElement(B,null,n.length>0&&e.createElement(p,null,e.createElement(y,null,"Related to"),n.map((r,l)=>e.createElement(u,{key:l,clickHandler:()=>m(a.services.queryParamKey,r),index:l,label:d(r),value:r}))),i.length>0&&e.createElement(p,null,e.createElement(y,null,"Article type"),i.map((r,l)=>e.createElement(u,{key:l,clickHandler:()=>m(a.articleType.queryParamKey,r),index:l,preposition:"and",label:d(r),value:r})))))};try{g.displayName="NewsArticleListHeader",g.__docgenInfo={description:"",displayName:"NewsArticleListHeader",props:{totalResults:{defaultValue:null,description:"",name:"totalResults",required:!0,type:{name:"number"}},sortBy:{defaultValue:null,description:"",name:"sortBy",required:!0,type:{name:"string"}},sortByOptions:{defaultValue:null,description:"",name:"sortByOptions",required:!0,type:{name:"SortByValsProps[]"}}}}}catch{}export{g as N};
