import{s as l,r as M,R as t}from"./iframe-BNpMeywT.js";import{I as w}from"./Input-B9dK2O81.js";import{D as m}from"./DynamicIcon-C0gKm0XE.js";import{H as h}from"./Heading-C7kzbY1R.js";import{d as c}from"./dayjs.min-BsiGf0vY.js";const $=l.div`
  display: block;
`,x=l.label`
  margin-bottom: 5px;
  font-weight: bold;
`,y=l.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 100% !important;
`,b=l.li`
  display: block;
  width: 100%;
  margin-left: 0;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.medium} !important;
  padding: ${e=>`${e.theme.theme_vars.spacingSizes.small} ${e.theme.theme_vars.spacingSizes.medium}`};
  left: 0;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  background-color: ${e=>e.theme.cardinal_name==="west"?e.theme.theme_vars.colours.grey_light+"7a":e.theme.theme_vars.colours.white};

  h3 {
    margin-top: ${e=>e.theme.theme_vars.spacingSizes.medium} !important;
  }
`,d=l.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};

  &:last-of-type {
    margin-bottom: 0;
  }

  & span svg {
    vertical-align: middle;
  }
`,u=l.div`
  padding-left: ${e=>e.theme.theme_vars.spacingSizes.small};
`,g=l.p`
  padding: ${e=>e.theme.theme_vars.spacingSizes.small} 0;
`,D=l.a`
  color: ${e=>e.theme.theme_vars.colours.action};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: 3px solid ${e=>e.theme.theme_vars.colours.focus};
    outline-offset: 0;
    background-color: ${e=>e.theme.theme_vars.colours.focus};
    color: ${e=>e.theme.theme_vars.colours.black};
    text-decoration: none;
  }

  &:visited {
    color: ${e=>e.theme.theme_vars.colours.action_dark};
  }

  h3 {
    color: inherit;
  }
`,v=({roadworks:e,title:E})=>{const[f,p]=M.useState(e),s=a=>a?.endsWith(".")?a.slice(0,-1):a,Y=a=>{const n=a.target.value.toLowerCase();if(n!=""){const o=e.filter(r=>r.description.toLowerCase().includes(n)||r.detailedLocation.toLocaleLowerCase().includes(n)||r.trafficManagement.toLowerCase().includes(n));p(o)}else p(e)},i=a=>a.format("HH:mm")==="00:00"?"midnight":a.format("HH:mm")==="12:00"?"midday":a.format("mm")==="00"?a.format("ha"):a.format("h:mma"),_=(a,n)=>{if(n){const o=c(n),r=c(a);return r.format("YYYY-MM-DD")===o.format("YYYY-MM-DD")?r.format("HH:mm")==="00:00"&&o.format("HH:mm")==="23:59"?`${r.format("dddd D MMMM YYYY")} - all day`:`${r.format("dddd D MMMM YYYY")} at ${i(r)} to ${i(o)}`:`${r.format("dddd D MMMM YYYY")} at ${i(r)} to ${o.format("dddd D MMMM YYYY")} at ${i(o)}`}else return c(a).format("dddd D MMMM YYYY")+" at "+i(c(a))};return t.createElement($,{"data-testid":"RoadworksList"},t.createElement(h,{level:2,text:E}),t.createElement(x,{htmlFor:"roadworksSearch"},"Search roadworks"),t.createElement(w,{id:"roadworksSearch",name:"roadworksSearch",type:"text",placeholder:"Enter a search term",maxLength:255,onChange:Y,isFullWidth:!0}),t.createElement(y,null,f.map((a,n)=>{const o=new Date(a.startTime),r=new Date(a.endTime);return t.createElement(b,{key:n},t.createElement(d,null,t.createElement(m,{icon:"mappin"}),t.createElement(u,null,a.urlLinkAddress?t.createElement(D,{href:a.urlLinkAddress,target:"_blank",rel:"noopener noreferrer"},t.createElement(h,{text:s(a.detailedLocation),level:3})):t.createElement(h,{text:s(a.detailedLocation),level:3}))),t.createElement(d,null,t.createElement(m,{icon:"events"}),t.createElement(u,null,t.createElement("span",null,_(o,r)))),t.createElement(d,null,t.createElement(m,{icon:"roadworks"}),t.createElement(u,null,t.createElement("span",null,s(a.description)))),t.createElement(d,null,t.createElement(m,{icon:"bollard"}),t.createElement(u,null,t.createElement("span",null,s(a.trafficManagement)))))})),e.length>0&&f.length===0&&t.createElement(g,null,"We couldn't find any results for your search term. Please try a different search."),e.length==0&&t.createElement(g,null,"Sorry, we're not able to find any results at the moment. Please try again later."))};try{v.displayName="RoadworksList",v.__docgenInfo={description:"A filterable list of roadworks",displayName:"RoadworksList",props:{roadworks:{defaultValue:null,description:"A list of roadworks",name:"roadworks",required:!0,type:{name:"Roadwork[]"}},title:{defaultValue:null,description:"The title tag",name:"title",required:!0,type:{name:"string"}}}}}catch{}export{v as R};
