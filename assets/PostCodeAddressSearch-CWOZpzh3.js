import{r as o,R as t,s,H,u as I}from"./iframe-BNpMeywT.js";import{a as U}from"./index-Dnk_-Q5K.js";import{H as k}from"./HintText-0RdKCmvx.js";import{F as W}from"./FormWithLine-BJuaIBWT.js";import{I as S}from"./Input-B9dK2O81.js";import{F as B}from"./FormButton-qyf2Sj6r.js";import{L as D}from"./LoadingSpinner-DpSLQ5hG.js";import{g as G}from"./api-helpers-BjdAoqM8.js";const $=o.createContext({}),d={addresses:[],postcode:"",records_in_payload:null,requested_page:null,total_pages:null,total_records:null,sovereigns:[],unitaries:[]},P=({children:e})=>{const[c,h]=o.useState(""),[f,g]=o.useState(d),a={postcodeValue:{postcode:c,setPostcode:h},resultsValue:{results:f,setResults:g}};return t.createElement($.Provider,{value:a},e)},O=()=>o.useContext($);try{P.displayName="PostCodeAddressProvider",P.__docgenInfo={description:"",displayName:"PostCodeAddressProvider",props:{children:{defaultValue:null,description:"What is this?",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const Y=s.div`
  strong {
    font-weight: bold;
  }

  p {
    margin-bottom: 15px;
  }
`;s.div`
  display: inline-block;
  margin-right: 15px;
  padding-left: 3px;
`;s.button`
  background: transparent;
  border: 0;
  ${e=>e.theme.linkStyles}
  font-weight: 400;
  padding-left: 0;
  color: ${e=>e.theme.theme_vars.colours.black};
  text-align: left;

  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.45;
  }

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
`;s.div`
  margin-top: 10px;

  input {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;const C=s.label`
  margin-bottom: 5px;
  display: block;
`;s.div`
  margin-top: 15px;

  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  align-items: flex-start;

  .result {
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 12px;
    max-width: calc(100% - 30px);
  }
`;s.div`
  background: ${e=>e.theme.theme_vars.colours.grey_dark};
  width: 5px;
  border-radius: 2px;
`;s.button`
  background: transparent;
  border: 0;
  margin-top: 15px;
  margin-left: -6px;
  ${e=>e.theme.linkStyles}
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

  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.45;
  }
`;const j=s.div`
  padding-left: 30px;
`,J=s.div`
  display: ${e=>e.$isLoading?"none":"block"};
`,L=({title:e="Enter your postcode to find your area",formError:c=!1,otherCouncilLink:h,signPostLinks:f,isUnitary:g=!1})=>{const a=o.useContext(H),A=I(),{postcodeValue:{postcode:K,setPostcode:w},resultsValue:{results:y,setResults:n}}=O(),[x,u]=o.useState(!1),[p,v]=o.useState(c),[F,_]=o.useState(""),[N,E]=o.useState(""),[M,T]=o.useState(""),[b,V]=o.useState(!1),z=r=>{r.preventDefault(),T(r.target.postcode.value),r.target.postcode.value===""?m(!0,"You need to enter a postcode"):(n(d),w(r.target.postcode.value),u(!0),q(r.target.postcode.value,r.target?.address_search?r.target.address_search.value:""))},q=async(r,i)=>{_(null),E(null),v(!1);const R=i!=""?`?address=${i}`:"";U({method:"GET",url:`${G(A)}${r.replace(/ /g,"")}${R}`}).then(l=>{u(!1),l.data?.total_records>0?(l.data.total_pages>1&&V(!0),n(l.data)):(m(!0),n(d))}).catch(l=>{u(!1),m(!0),n(d)})},m=(r,i="There is an issue with the postcode you entered, it may not be in Northamptonshire, or if your property is new there may be a 6 week delay for new post codes.")=>{b?E("No matching addresses found. Please try another search term."):_(i),v(r)};return t.createElement(Y,{"data-testid":"PostCodeAddressSearch"},t.createElement(W,{onSubmit:r=>{z(r)},isError:p,lineColour:a.theme_vars.colours.grey_dark},x&&t.createElement(j,null,t.createElement(D,null),t.createElement("p",null,"Loading...")),t.createElement(J,{$isLoading:x},t.createElement(C,{htmlFor:"postcode"},"Enter your postcode",t.createElement(k,{text:a.cardinal_name==="north"?"For example NN16 0AP":"For example NN1 1DE"}),t.createElement(S,{type:"text",placeholder:"Enter a postcode",name:"postcode",errorText:F,isErrored:p})),b&&t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement("strong",null,Number(y.total_records).toLocaleString("en-GB")," ",Number(y.total_records)>1?"addresses":"address"," found.")),t.createElement(C,{htmlFor:"address_search"},"Enter part of your address to filter results",t.createElement(k,{text:"For example, Room 2, Flat 4"}),t.createElement(S,{type:"text",placeholder:"Enter part of address",name:"address_search",errorText:N,isErrored:p}))),t.createElement(B,{type:"submit","aria-label":"Submit",text:"Search"}))))};try{L.displayName="PostCodeAddressSearch",L.__docgenInfo={description:"The functionality for searching for a postcode",displayName:"PostCodeAddressSearch",props:{title:{defaultValue:{value:"Enter your postcode to find your area"},description:"Title of postcode search link",name:"title",required:!1,type:{name:"string"}},formError:{defaultValue:{value:"false"},description:"Is there an error in the form?",name:"formError",required:!1,type:{name:"boolean"}},signPostLinks:{defaultValue:null,description:"An array of the SignpostLinks",name:"signPostLinks",required:!1,type:{name:"SignpostLinkProp[]"}},otherCouncilLink:{defaultValue:null,description:"Optional, but recommended - a link to send the user to the other council's (West or North) specific service page, defaults to the homepage",name:"otherCouncilLink",required:!1,type:{name:"string"}},isUnitary:{defaultValue:{value:"false"},description:"Optional - changes it to only give back the area you are from",name:"isUnitary",required:!1,type:{name:"boolean"}}}}}catch{}export{P,L as a,O as u};
