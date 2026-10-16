import{s as l,r as c,R as t}from"./iframe-BNpMeywT.js";import{C as m}from"./Column-Dpu6NTYh.js";import{R as f}from"./Row-DErQ7Ddw.js";const v=l.div`
  display: block;
  ${e=>e.theme.fontStyles}
`,C=l.div`
  margin-bottom: 15px;
  border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.grey};
`,w=l.div`
  text-transform: uppercase;
  ${e=>e.theme.theme_vars.h1}
`,$=l.a`
  padding: 0.5em 0px;
  width: 100%;
  display: inline-block;
  cursor: pointer;

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
`,_=l.a`
  display: inline-block;
  position: relative;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 14px;
  cursor: pointer;

  ${e=>e.theme.fontStyles}

  &:hover {
    ${e=>e.theme.linkStylesHover}
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 3px;
    width: 7px;
    height: 7px;
    margin: auto 0;
    -webkit-transform: rotate(225deg);
    -ms-transform: rotate(225deg);
    transform: rotate(225deg);
    border: solid;
    border-width: 1px 1px 0 0;
    border-color: #505a5f;
  }

  &:focus:before {
    border-color: #0b0c0c;
  }

  &:after {
    content: '';
    position: absolute;
    top: -14px;
    right: 0;
    bottom: -14px;
    left: 0;
  }
`,S=l.p`
  ${e=>e.theme.fontStyles}
  color: ${e=>e.theme.theme_vars.colours.negative};
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
  font-size: 0.8rem;
  line-height: 1.1;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    font-size: 18px;
    font-size: 1rem;
    line-height: 1.25;
  }
`,g=({financialYear:e,parishes:u})=>{const[y,b]=c.useState([]),[s,p]=c.useState(null),h=c.useRef(null);c.useEffect(()=>{b(x(u))},[]);const E=r=>{p(r),h.current.scrollIntoView()},d=r=>r.endsWith("NCP")?r.slice(0,-4):r.endsWith("CP")?r.slice(0,-3):r,x=r=>{const n=r.reduce((a,o)=>{let i=o.parish[0];return a[i]?a[i].children.push({title:d(o.parish),values:o.bands}):a[i]={group:i,children:[{title:d(o.parish),values:o.bands}]},a},{});return Object.keys(n).map((a,o)=>n[a])},k=y.sort(function(r,n){return r.group.toLowerCase()<n.group.toLowerCase()?-1:r.group.toLowerCase()>n.group.toLowerCase()?1:0}).map(r=>(r.children.sort(function(n,a){return n.title.toLowerCase()<a.title.toLowerCase()?-1:n.title.toLowerCase()>a.title.toLowerCase()?1:0}),r));return t.createElement(v,{"data-testid":"AlphabeticalDirectory",ref:h},t.createElement(t.Fragment,null,u.length===0&&t.createElement(S,null,"There was an issue fetching the parish data. Please try again later."),s===null?t.createElement(t.Fragment,null,k.map((r,n)=>t.createElement(C,{key:n},t.createElement(f,null,t.createElement(m,{small:"full",medium:"one-quarter",large:"one-quarter"},t.createElement(w,null,r.group)),t.createElement(m,{small:"full",medium:"three-quarters",large:"three-quarters"},t.createElement(f,null,r.children.map((a,o)=>t.createElement(m,{small:"one-half",medium:"one-half",large:"one-half",key:o},t.createElement($,{onClick:()=>E(a)},a.title))))))))):t.createElement(t.Fragment,null,t.createElement(_,{onClick:()=>p(null)},"Back"),t.createElement("div",{className:"table-container"},t.createElement("table",null,t.createElement("caption",null,`Council tax charges for ${s.title} in ${e}`),t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",{scope:"col"},"Bands"))),t.createElement("tbody",null,Object.keys(s.values).filter(r=>r!=="__typename").map((r,n)=>t.createElement("tr",{key:n},t.createElement("th",{scope:"row"},r.toUpperCase()),t.createElement("td",null,Number(s.values[r]).toLocaleString("en-GB",{style:"currency",currency:"GBP"}))))))))))};try{g.displayName="CouncilTaxAlphabeticalDirectory",g.__docgenInfo={description:"An list of parishes, sorted alphabetically, containing parish council tax bands",displayName:"CouncilTaxAlphabeticalDirectory",props:{financialYear:{defaultValue:null,description:"",name:"financialYear",required:!0,type:{name:"string"}},parishes:{defaultValue:null,description:"",name:"parishes",required:!0,type:{name:"BandingAPIResponse[]"}}}}}catch{}export{g as C};
