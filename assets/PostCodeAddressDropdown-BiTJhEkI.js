import{s as o,r as x,R as e}from"./iframe-BNpMeywT.js";import{u as E}from"./PostCodeAddressSearch-CWOZpzh3.js";import{D as b}from"./DropDownSelect-CJICILs5.js";import{H as i}from"./Heading-C7kzbY1R.js";const v=o.div`
  display: block;
  padding: ${t=>t.theme.theme_vars.spacingSizes.small}
    ${t=>t.theme.theme_vars.spacingSizes.large};
  margin-top: ${t=>t.theme.theme_vars.spacingSizes.large};
  background-color: ${t=>t.theme.cardinal_name==="north"?t.theme.theme_vars.colours.grey+"7a":t.theme.theme_vars.colours.grey_light};
  ${t=>t.theme.fontStyles}
`;o.div``;const p=o.dl`
  color: ${t=>t.theme.theme_vars.colours.black};
  margin: 0;
  margin-bottom: 20px;

  @media (min-width: 40.0625em) {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
`,l=o.div`
  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
    border-bottom: 1px solid ${t=>t.theme.theme_vars.colours.grey};
  }

  @media (min-width: 40.0625em) {
    display: table-row;
  }
`,n=o.dt`
  font-weight: bold;
  margin: 0;
  display: table-cell;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin-bottom: 5px;
  font-weight: 700;

  @media (min-width: 40.0625em) {
    width: 30%;
  }
`,s=o.dd`
  margin: 0;
  display: table-cell;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 40.0525em) {
    margin-bottom: 15px;
  }

  @media (min-width: 40.0625em) {
    width: 50%;
  }

  @media (min-width: 40.0625em) {
    &:last-child {
      width: 70%;
    }
  }

  > p {
    margin-bottom: 10px;
  }

  > :last-child {
    margin-bottom: 0;
  }
`,u=()=>{const[t,m]=x.useState(null),{resultsValue:{results:c}}=E(),g=r=>{if(r.target.value!==""){const h=a.find(w=>parseInt(w.value)===parseInt(r.target.value));m(h)}},d=c.total_records>0;let a=[{title:"No results found",value:"no-results"}];return d&&(a=c.addresses.map(r=>({title:r.single_line_address,value:r.uprn,extra:r})),a=[{title:"Choose an address",value:"choose-address"},...a],a.length===2&&t?.value!==a[1].value&&m(a[1])),e.createElement(e.Fragment,null,d&&e.createElement(v,{"data-testid":"PostCodeAddressDropdown"},e.createElement(i,{level:3,text:"Address Results"}),e.createElement(b,{id:"postcodeAddressLookup",label:"Select your address",options:a,onChange:g,selected:t?t.value:d?"choose-address":"no-results"}),e.createElement("br",null),t&&e.createElement(e.Fragment,null,t.extra.bands&&e.createElement(e.Fragment,null,e.createElement(i,{level:3,text:"Council Tax Bands"}),e.createElement(p,null,Object.keys(t.extra.bands).map(r=>e.createElement(l,{key:r},e.createElement(n,null,r.toUpperCase()),e.createElement(s,null,Number(t.extra.bands[r]).toLocaleString("en-GB",{style:"currency",currency:"GBP"})))))),e.createElement(i,{level:3,text:"Property Details"}),e.createElement(p,null,e.createElement(l,null,e.createElement(n,null,"Town/Parish:"),e.createElement(s,null,t.extra.parish)),e.createElement(l,null,e.createElement(n,null,"Address:"),e.createElement(s,null,t.extra.single_line_address)),e.createElement(l,null,e.createElement(n,null,"Postcode:"),e.createElement(s,null,t.extra.postcode)),e.createElement(l,null,e.createElement(n,null,"Area:"),e.createElement(s,null,e.createElement("p",null,"This address is in ",e.createElement("strong",null,t.extra.unitary)," Northamptonshire, in the"," ",e.createElement("strong",null,t.extra.sovereign)," area."))),e.createElement(l,null,e.createElement(n,null,"Map:"),e.createElement(s,null,e.createElement("a",{href:`https://www.google.com/maps/search/?api=1&query=${t.extra.latitude},${t.extra.longitude}`,target:"_blank"},"View on google maps")," ","(link opens in a new window)"))))))};try{u.displayName="PostCodeAddressDropdown",u.__docgenInfo={description:"The dropdown component for selecting and displaying address information",displayName:"PostCodeAddressDropdown",props:{}}}catch{}export{u as P};
