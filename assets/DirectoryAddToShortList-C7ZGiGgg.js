import{s as $,R as t,r as h,H as q}from"./iframe-BNpMeywT.js";import{u as F}from"./UseLocalStorage-DuLyX1N_.js";import{I as A}from"./CloseIcon-DQAr5twY.js";import{H as L}from"./HeartIcon-3Tfw5PC6.js";const V=$.button`
  border: 2px solid
    ${e=>e.$favourite?e.theme.theme_vars.colours.negative:e.theme.theme_vars.colours.action};
  background: ${e=>e.theme.theme_vars.colours.white};
  color: ${e=>e.$favourite?e.theme.theme_vars.colours.negative:e.theme.theme_vars.colours.action};
  cursor: pointer;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    ${e=>e.theme.linkStylesHover}
    background: ${e=>e.theme.theme_vars.colours.action_light}
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }

  svg {
    margin-right: ${e=>e.theme.theme_vars.spacingSizes.small};
  }

  @media print {
    display: none;
  }
`,g=h.createContext({}),v=({shortlistKey:e="DirectoryShort",children:d})=>{const[o,i]=F(e,[]),u=(r,s,c,a,f,_,S,T)=>{const n=[...o];if(l(r)){const x=n.find(D=>D.id===r);n.splice(n.indexOf(x),1)}else n.push({id:r,name:s,snippet:c,email:a,website:f,phone:_,addresses:S,fees:T});i(n)},l=r=>typeof o.find(s=>s.id===r)<"u",m={favourites:{favourites:o,setFavourites:i},toggleFavourites:u,isFavourite:l,clearShortlist:()=>{i([])}};return t.createElement(g.Provider,{value:m},d)},b=()=>h.useContext(g);try{v.displayName="DirectoryShortListProvider",v.__docgenInfo={description:"",displayName:"DirectoryShortListProvider",props:{children:{defaultValue:null,description:"The child components",name:"children",required:!0,type:{name:"ReactNode"}},shortlistKey:{defaultValue:{value:"DirectoryShort"},description:"An optional shortlist key to store and get different directory favourites",name:"shortlistKey",required:!1,type:{name:"string"}}}}}catch{}const y=({id:e,name:d,snippet:o,email:i,website:u,phone:l,addresses:p,fees:m})=>{const{toggleFavourites:r,isFavourite:s}=b(),c=h.useContext(q),a=s(e);return t.createElement(V,{onClick:f=>r(e,d,o,i,u,l,p,m),"data-testid":"DirectoryAddToShortList",$favourite:a},a?t.createElement(A,{colourFill:c.theme_vars.colours.negative}):t.createElement(L,{colourFill:c.theme_vars.colours.action}),a?t.createElement(t.Fragment,null,"Remove from shortlist"):t.createElement(t.Fragment,null,"Add to shortlist"))};try{y.displayName="DirectoryAddToShortList",y.__docgenInfo={description:"",displayName:"DirectoryAddToShortList",props:{id:{defaultValue:null,description:"The unique identifier",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"The service name",name:"name",required:!0,type:{name:"string"}},snippet:{defaultValue:null,description:"A snippet from the service description",name:"snippet",required:!0,type:{name:"string"}},email:{defaultValue:null,description:"The optional contact email address",name:"email",required:!1,type:{name:"string"}},website:{defaultValue:null,description:"The optional website address",name:"website",required:!1,type:{name:"string"}},phone:{defaultValue:null,description:"The optional phone number",name:"phone",required:!1,type:{name:"string"}},addresses:{defaultValue:null,description:"The optional addresses",name:"addresses",required:!1,type:{name:"PhysicalAddressProps[]"}},fees:{defaultValue:null,description:"The optional fees for the service",name:"fees",required:!1,type:{name:"string"}}}}}catch{}export{y as D,v as a,b as u};
