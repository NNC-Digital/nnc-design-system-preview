import{s as a,R as i}from"./iframe-BNpMeywT.js";import{h as x}from"./url-helpers-1hshT-U6.js";const C=a.div`
  ${e=>e.theme.fontStyles};
  display: block;
  border-top: 1px solid ${e=>e.theme.theme_vars.colours.grey};
  padding-top: ${e=>e.theme.theme_vars.spacingSizes.small};
`,u=`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 15px;
`,_=a.button`
  ${u}
  ${e=>e.theme.fontStyles}
  ${e=>e.theme.linkStyles}

  &:hover {
    ${e=>e.theme.linkStylesHover}
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }
`,E=a.button`
  ${u}
  ${e=>e.theme.fontStyles}
  ${e=>e.theme.linkStyles}

  &:hover {
    ${e=>e.theme.linkStylesHover}
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }
`,N=a.ul`
  margin: 0 !important;
  padding: 0;
  display: inline-block;
  list-style: none;
`,V=a.li`
  display: inline-block;
  padding-left: 0 !important;

  &:before {
    display: none;
  }
`,q=a.button`
  ${u}
  padding: 8px 12px;
  ${e=>e.theme.fontStyles}
  ${e=>e.theme.linkStyles}

  &:hover {
    ${e=>e.theme.linkStylesHover}
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }

  text-decoration: ${e=>e.$isCurrent?"none":"underline"};
  font-weight: ${e=>e.$isCurrent?"normal":"700"};
`,A=a.span``,H=a.span`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
`,b=({currentPage:e,totalResults:v,resultsPerPage:s,postTo:$="search",buttonClickOverride:c})=>{const k=(t,m)=>{var h=t,f=m,y=2,S=h-y,w=h+y+1,g=[],r=[],o;for(let n=1;n<=f;n++)(n==1||n==f||n>=S&&n<w)&&g.push(n);for(let n of g)o&&(n-o===2?r.push(o+1):n-o!==1&&r.push("...")),r.push(n),o=n;return r};s===void 0&&(s=10);const l=Math.ceil(v/s);e<1?e=1:e>l&&(e=l);const d=k(e,l),p=t=>{c?c(t):x($,[{key:"page",value:t}])};return d.length>1?i.createElement(C,{"data-testid":"Pagination",role:"navigation","aria-label":"Pagination"},e>1&&i.createElement(_,{onClick:()=>p(e-1),title:"Go back a page"},"Previous"),i.createElement(N,null,d.map((t,m)=>i.createElement(V,{key:m},t==="..."&&i.createElement(A,null,"..."),t!=="..."&&i.createElement(q,{onClick:()=>p(t),$isCurrent:e===t,title:e===t?"This is the current page":"Go to page "+t},i.createElement(H,null,"Page "),t)))),e<l&&i.createElement(E,{onClick:()=>p(e+1),title:"Go forward a page"},"Next")):null};try{b.displayName="Pagination",b.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"What page are we on?",name:"currentPage",required:!0,type:{name:"number"}},resultsPerPage:{defaultValue:null,description:"How many results are we showing per page, defaults to 10",name:"resultsPerPage",required:!1,type:{name:"number"}},totalResults:{defaultValue:null,description:"What is the total number of results",name:"totalResults",required:!0,type:{name:"number"}},postTo:{defaultValue:{value:"search"},description:"Which end point are we going to - defaults to search",name:"postTo",required:!1,type:{name:"string"}},buttonClickOverride:{defaultValue:null,description:"An optional pagination override function",name:"buttonClickOverride",required:!1,type:{name:"Dispatch<SetStateAction<number>>"}}}}}catch{}export{b as P};
