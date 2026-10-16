import{s,r as a,H,u as O,R as e}from"./iframe-BNpMeywT.js";import{a as q}from"./index-Dnk_-Q5K.js";import{H as U}from"./HintText-0RdKCmvx.js";import{F as V}from"./FormWithLine-BJuaIBWT.js";import{I as B}from"./Input-B9dK2O81.js";import{F as R}from"./FormButton-qyf2Sj6r.js";import{C as G}from"./ChevronIcon-dH899Igz.js";import{B as W}from"./Button-S36CQVVg.js";import{D as M}from"./DropDownSelect-CJICILs5.js";import{L as Y}from"./LoadingSpinner-DpSLQ5hG.js";import{g as j}from"./api-helpers-BjdAoqM8.js";const J=s.div`
  strong {
    font-weight: bold;
  }

  p {
    margin-bottom: 15px;
  }
`,K=s.span`
  display: inline-block;
  margin-right: 15px;
  padding-left: 3px;
`,Q=s.button`
  background: transparent;
  border: 0;
  ${t=>t.theme.linkStyles}
  font-weight: 400;
  padding-left: 0;
  color: ${t=>t.theme.theme_vars.colours.black};
  text-align: left;

  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;

  @media screen and (min-width: ${t=>t.theme.theme_vars.breakpoints.m}) {
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.45;
  }

  &:hover {
    ${t=>t.theme.linkStylesHover}
    cursor: pointer;
  }
  &:focus {
    ${t=>t.theme.linkStylesFocus}
  }
  &:active {
    ${t=>t.theme.linkStylesActive}
  }
`,X=s.div`
  margin-top: 10px;

  input {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`,Z=s.label`
  margin-bottom: 5px;
  display: block;
`,ee=s.div`
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
`,te=s.div`
  background: ${t=>t.theme.theme_vars.colours.grey_dark};
  width: 5px;
  border-radius: 2px;
`,w=s.button`
  background: transparent;
  border: 0;
  margin-top: 15px;
  margin-left: -6px;
  ${t=>t.theme.linkStyles}
  &:hover {
    ${t=>t.theme.linkStylesHover}
    cursor: pointer;
  }
  &:focus {
    ${t=>t.theme.linkStylesFocus}
  }
  &:active {
    ${t=>t.theme.linkStylesActive}
  }

  font-size: 16px;
  font-size: 1rem;
  line-height: 1.25;

  @media screen and (min-width: ${t=>t.theme.theme_vars.breakpoints.m}) {
    font-size: 19px;
    font-size: 1.1875rem;
    line-height: 1.45;
  }
`,re=s.div`
  padding-left: 30px;
`,ne=s.div`
  display: ${t=>t.$isLoading?"none":"block"};
`,S=({title:t="Enter your postcode to find your area",formError:_=!1,otherCouncilLink:C,signPostLinks:oe,isUnitary:L=!1})=>{const i=a.useContext(H),$=O(),[d,P]=a.useState(!1),[E,u]=a.useState(!1),[p,N]=a.useState(_),[D,F]=a.useState(""),[c,h]=a.useState(""),[A,y]=a.useState(!1),[v,x]=a.useState([]),b={sovereigns:[],unitaries:[],addresses:[]},[n,f]=a.useState(b),k=()=>{f(b),h(""),x([])},z=r=>{r.preventDefault();const o=r.target.elements.postcode.value;h(o),o===""?m(!0,"You need to enter a postcode"):(u(!0),I(o))},I=async r=>{q({method:"GET",url:`${j($)}${r.replace(/ /g,"").substring(0,10)}`}).then(o=>{u(!1),o.data.unitaries?.length>0?f(o.data):m(!0)}).catch(o=>{u(!1),m(!0)})},m=(r,o="There is an issue with the postcode you entered, it may not be in Northamptonshire, or if your property is new there may be a 6 week delay for new postcodes.")=>{F(o),N(r)};a.useEffect(()=>{n.unitaries?.length>0&&(p&&m(!1,""),n.unitaries?.length>1&&(y(!0),n.addresses.map(r=>{x(o=>[...o,{title:r.single_line_address.split(",")[0].toLowerCase().replace(/\w\S*/g,l=>l.replace(/^\w/,g=>g.toUpperCase()))+", "+r.single_line_address.split(",")[1].toLowerCase().replace(/\w\S*/g,l=>l.replace(/^\w/,g=>g.toUpperCase())),value:r.uprn,info:[{sovereigns:[{name:r.sovereign}],unitaries:[{name:r.unitary}],addresses:[]}]}])})))},[n]);function T(r){if(r.target.value!==""){const o=v.find(l=>l.value===r.target.value);y(!1),f(o.info[0]),h(c+" ("+o.title+")")}}return e.createElement(J,{"data-testid":"PostCodeSearch"},e.createElement(Q,{onClick:()=>P(!d)},e.createElement(K,null,e.createElement(G,{direction:d?"down":"right",colourFill:i.theme_vars.colours.black})),t),d&&e.createElement(X,null,n.unitaries.length===0?e.createElement(V,{onSubmit:r=>{z(r)},isError:p,lineColour:i.theme_vars.colours.grey_dark},E&&e.createElement(re,null,e.createElement(Y,null),e.createElement("p",null,"Loading...")),e.createElement(ne,{$isLoading:E},e.createElement(Z,{htmlFor:"postcode"},"Enter your postcode",e.createElement(U,{text:i.cardinal_name==="north"?"For example NN16 0AP":"For example NN1 1DE"}),e.createElement(B,{type:"text",placeholder:"Enter a postcode",name:"postcode",errorText:D,isErrored:p,maxLength:10})),e.createElement(R,{type:"submit","aria-label":"Submit",text:"Find"}))):e.createElement(ee,null,e.createElement(te,null),A?e.createElement("div",{className:"result"},e.createElement("p",null,"This postcode ",e.createElement("strong",null,c)," includes addresses that are in multiple areas, please select your address so that we can tell you which area you are in."),e.createElement(M,{onChange:T,id:"address",label:"Select your address",options:[{title:"Select an address to continue",value:""},...v],"data-testid":"AddressDropdown"})):L?e.createElement("div",{className:"result"},e.createElement("p",null,"This postcode ",e.createElement("strong",null,c)," is in"," ",e.createElement("strong",null,n.unitaries[0].name),", in the"," ",e.createElement("strong",null,n.sovereigns[0].name)," area."),i.theme_vars.cardinal_name!==n.unitaries[0].name.toLowerCase()?e.createElement("p",null,"In order to find the right information for you, please visit the"," ",e.createElement("a",{href:i.theme_vars.other_council_link,title:"Go to the other council"},n.unitaries[0].name," website.")):e.createElement("p",null,"You are on the ",e.createElement("strong",null,"correct website for this postcode"),"."),e.createElement(w,{onClick:()=>k()},"Check another postcode")):e.createElement("div",{className:"result"},e.createElement("p",null,"This postcode ",e.createElement("strong",null,c)," is in"," ",e.createElement("strong",null,n.unitaries[0].name," Northamptonshire"),", in the"," ",e.createElement("strong",null,n.sovereigns[0].name)," area."),i.theme_vars.cardinal_name!==n.unitaries[0].name.split(" ")[0].toLowerCase()&&e.createElement(e.Fragment,null,e.createElement("p",null,"In order to find the right information for you, please visit the"," ",n.unitaries[0].name," Northamptonshire website and find your local area (",n.sovereigns[0].name,") for this service."),e.createElement(W,{size:"large",colourOverride:i.theme_vars.other_council_action,text:"Go to "+n.unitaries[0].name+" Northamptonshire's website",url:C,isExternal:!0}),e.createElement("br",null)),e.createElement(w,{onClick:()=>k()},"Check another postcode")))))};try{S.displayName="PostCodeSearch",S.__docgenInfo={description:"The functionality for searching for a postcode",displayName:"PostCodeSearch",props:{title:{defaultValue:{value:"Enter your postcode to find your area"},description:"Title of postcode search link",name:"title",required:!1,type:{name:"string"}},formError:{defaultValue:{value:"false"},description:"Is there an error in the form?",name:"formError",required:!1,type:{name:"boolean"}},signPostLinks:{defaultValue:null,description:"An array of the SignpostLinks",name:"signPostLinks",required:!1,type:{name:"SignpostLinkProp[]"}},otherCouncilLink:{defaultValue:null,description:"Optional, but recommended - a link to send the user to the other council's (West or North) specific service page, defaults to the homepage",name:"otherCouncilLink",required:!1,type:{name:"string"}},isUnitary:{defaultValue:{value:"false"},description:"Optional - changes it to only give back the area you are from",name:"isUnitary",required:!1,type:{name:"boolean"}}}}}catch{}export{S as P};
