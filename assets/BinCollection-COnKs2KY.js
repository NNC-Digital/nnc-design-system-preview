import{s as i,u as M,r as c,H as W,R as r}from"./iframe-BNpMeywT.js";import{a as k}from"./index-Dnk_-Q5K.js";import{F as K}from"./FormWithLine-BJuaIBWT.js";import{F as V}from"./FormButton-qyf2Sj6r.js";import{D as Y}from"./DropDownSelect-CJICILs5.js";import{H as $}from"./Heading-C7kzbY1R.js";import{E as J}from"./Input.styles-cQ0p_tsj.js";import{S as Q}from"./TextInput.styles-if05kC9c.js";const X=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Z=i.label`
  display: block;
  margin-bottom: 15px;
`,ee=i(Z)`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  border: 0;
  white-space: nowrap;
`,te=i.div`
    button {
      margin: 10px 10px 12px 10px;
    }
`,ne=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${u=>u.$isLoading&&`
          opacity: 0.5; 
          pointer-events: none;
      `}
`,re=i.div`
  display: block;
  width: 100%;
`,ae=i.div`
  padding-bottom: 20px;
  width: 90%;
`,oe=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;i.label`
  display: flex;
  align-items: center;
  margin-right: ${u=>u.theme.theme_vars.spacingSizes.$small};
`;i.div`
  display: flex;
  justify-content: left;
  margin-bottom: .5em;
  width: 100%;
`;i.input``;const q=({formError:u=!1,graphqlApiEndpoint:B})=>{const E=M(),x=B||E.binCollectionApiBaseUrl||E.nextPublicBinCollectionApiBaseUrl||"",L=`${x}bin-collection-search/premiselist/`,O=`${x}bin-collection-search/calendarevents/`,I=c.useContext(W),[_,h]=c.useState(!1),[S,m]=c.useState(u),[C,f]=c.useState(""),[A,w]=c.useState([]),D=c.useRef(new Set),[P,b]=c.useState(!1),U=n=>{n.preventDefault();const e=n.target.elements.postcode.value;e===""?(m(!0),f("You need to enter a postcode")):(h(!0),N(e))},G=n=>{const e=n.replace(/\s/g,"").toUpperCase();return e.slice(0,-3)+" "+e.slice(-3)},N=async n=>{v({}),m(!1),f(""),h(!0),n=G(n),k.get(`${L}${n}`).then(e=>{if(h(!1),e.data.data.length===0){m(!0),f("No addresses found for the provided postcode.");return}const a=[],t=[];e.data.data.forEach(d=>{const l=`${d.Address}`;/^\d/.test(l)?a.push({value:d.UPRN,title:l}):t.push({value:d.UPRN,title:l})}),a.sort((d,l)=>parseInt(d.title,10)-parseInt(l.title,10)),t.sort((d,l)=>d.title.localeCompare(l.title));const s=a.concat(t);w(s)}).catch(e=>{h(!1),m(!0),console.error("API call error:",e),f("Error fetching addresses")})},R=(n=0)=>{const e=new Date;return e.setDate(e.getDate()+n),e.toISOString().split("T")[0]},F=n=>{const e=parseInt(n.match(/\d+/)[0],10);return new Date(e)},H=n=>{const e=new Date;return n.reduce((a,t)=>{const s=F(t.start);return s>=e&&(a[t.title]||(a[t.title]=[]),a[t.title].push(s)),a},{})},[g,v]=c.useState({}),j=n=>{const e=n.target.value;if(e){const a=R(),t=R(70);k.get(`${O}${e}/${a}/${t}`).then(s=>{const d=s.data.filter(o=>{const y=F(o.start).toISOString().split("T")[0];return y>=a&&y<=t}),l=H(d);Object.keys(l).length===0?b(!0):b(!1),v(l)}).catch(s=>{console.error("API call error:",s)})}},z=()=>{w([]),v({}),m(!1),f(""),D.current.clear(),b(!1)},T=n=>{const e=[{keyword:"Refuse",replacement:"General refuse bin",allowedValues:["Refuse bin 1100","Refuse bin 140","Refuse bin 180","Refuse bin 240","Refuse bin 360","Refuse bin 660","Refuse Chamberlain","Refuse Palladin","Authorised bin (larger h/hold) 120","Authorised bin (larger h/hold) 140","Authorised bin (larger h/hold) 180","Authorised bin (offensive) 140","Authorised bin (offensive) 180","Authorised bin (offensive) 240"]},{keyword:"Recycling",replacement:"Recycling bin",allowedValues:["Recycling 1100","Recycling 140","Recycling 180","Recycling 240","Recycling bin 1100"]},{keyword:"Garden",replacement:"Garden bin",allowedValues:["Garden 140","Garden 180","Garden 240"]},{keyword:"Food",replacement:"Food caddy",allowedValues:["Communal food bin (exterior) 180","Food Caddy (exterior) 23","Food Caddy (indoor) 5"]}];for(const a of e)for(const t of a.allowedValues)if(n.includes(t))return a.replacement;return null};return c.useEffect(()=>{D.current.clear()},[g]),r.createElement(X,{"data-testid":"BinCollection"},r.createElement(K,{onSubmit:U,isError:S,lineColour:I.theme_vars.colours.$grey_dark,hideLine:!0},r.createElement(ne,{$isLoading:_},r.createElement($,{level:2,text:"Bin collection checker"}),r.createElement(re,null,C&&r.createElement(J,null,C)),r.createElement(oe,null,r.createElement(ee,{id:"postcode-label",htmlFor:"postcode-input"},"Enter a postcode"),r.createElement(Q,{type:"text",placeholder:"Enter a postcode",name:"postcode",id:"postcode-input",$isErrored:S,"aria-labelledby":"postcode-label",autoComplete:"postal-code"}),r.createElement(te,null,r.createElement(V,{size:"large","aria-label":"Submit",text:"Find"}))))),A.length>0&&r.createElement(ae,null,r.createElement(Y,{onChange:j,id:"address",label:"Select your address",options:[{title:"Select an address",value:""},...A]})),P&&r.createElement("p",null,"No results found."),r.createElement("div",null,(()=>{const n=["General refuse bin","Recycling bin","Garden bin","Food caddy"],a=Array.from(new Set(Object.keys(g).map(t=>T(t)).filter(t=>t!==null))).sort((t,s)=>n.indexOf(t)-n.indexOf(s));return a.length,a.map((t,s)=>{const l=Object.keys(g).filter(o=>T(o)===t).flatMap(o=>g[o]).map(o=>new Date(o).toISOString().split("T")[0]).filter((o,p,y)=>y.indexOf(o)===p).sort((o,p)=>new Date(o).getTime()-new Date(p).getTime());return r.createElement(r.Fragment,{key:`${t}-${s}`},r.createElement($,{level:3,text:t}),l.map((o,p)=>r.createElement("p",{key:p},new Date(o).toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"}))))})})()),Object.keys(g).length>0&&r.createElement(V,{size:"small",type:"button","aria-label":"Reset",text:"Find a different address",onClick:z}))};try{q.displayName="BinCollection",q.__docgenInfo={description:"Returns the Bin Collection Checker form component to conduct search by postcode.",displayName:"BinCollection",props:{title:{defaultValue:null,description:"Title of bin collection search",name:"title",required:!1,type:{name:"string"}},formError:{defaultValue:{value:"false"},description:"Error in the form",name:"formError",required:!1,type:{name:"boolean"}},relatedServiceLink:{defaultValue:null,description:"Link to send the user to another related service page or resource.",name:"relatedServiceLink",required:!1,type:{name:"string"}},isSpecificArea:{defaultValue:null,description:"Modifies search behavior based on the specific area (e.g., different collection zones or services)",name:"isSpecificArea",required:!1,type:{name:"boolean"}},graphqlApiEndpoint:{defaultValue:null,description:"graphqlApiEndpoint of the Drupal application API",name:"graphqlApiEndpoint",required:!1,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},addressOptions:{defaultValue:null,description:"",name:"addressOptions",required:!1,type:{name:"AddressOption[]"}},calendarEvents:{defaultValue:null,description:"",name:"calendarEvents",required:!1,type:{name:"Record<string, Date[]>"}},onAddressChange:{defaultValue:null,description:"",name:"onAddressChange",required:!1,type:{name:"(e: ChangeEvent<HTMLSelectElement>) => void"}},onFormSubmit:{defaultValue:null,description:"",name:"onFormSubmit",required:!1,type:{name:"(e: FormEvent<HTMLFormElement>) => void"}},resetForm:{defaultValue:null,description:"",name:"resetForm",required:!1,type:{name:"() => void"}}}}}catch{}export{q as B};
