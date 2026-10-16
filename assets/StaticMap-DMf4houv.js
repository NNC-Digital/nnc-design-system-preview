import{s as o,u as f,R as a}from"./iframe-BNpMeywT.js";import{A as v}from"./CookieBanner-BJ3L-yuw.js";const $=o.div`
  display: block;
`,k=o.img`
  max-width: 100%;
`,b=o.div`
  background-color: ${e=>e.theme.theme_vars.colours.focus};
  padding: ${e=>e.theme.theme_vars.spacingSizes.medium};
`,z=o.button`
  outline: none;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: ${e=>e.theme.theme_vars.fontSizes.small};
  color: ${e=>e.theme.theme_vars.colours.action};
  text-decoration: underline;
  ${e=>e.theme.theme_vars.linkStyles}

  &:hover {
    ${e=>e.theme.linkStylesHover}
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }
`,i=({centre:e,imageAltText:r,mapMarkers:l=[],mapType:s="roadmap",size:m="640x320",zoom:c=14,apiKey:p})=>{const n=f(),u=p||n.googleMapsApiKey||n.nextPublicGoogleMapsApiKey||"",d=l.map(t=>{const h=t.size??"normal",g=t.colour??"red",y=t.label?`%7Clabel:${t.label}`:"";return`&markers=size:${h}%7Ccolor:${g}${y}%7C${t.lat},${t.lng}`}).join("");return a.createElement($,{"data-testid":"StaticMap"},a.createElement(b,null,a.createElement("span",null,"To interact with the map, you need to ",a.createElement(z,{onClick:v},"accept cookies"),".")),a.createElement(k,{src:`https://maps.googleapis.com/maps/api/staticmap?center=${e}&size=${m}&zoom=${c}&maptype=${s}${d}&key=${u}`,alt:r}))};try{i.displayName="StaticMap",i.__docgenInfo={description:"A static Google map with optional markers",displayName:"StaticMap",props:{centre:{defaultValue:null,description:"Where to centre the map, in the format lat,lng",name:"centre",required:!0,type:{name:"string"}},imageAltText:{defaultValue:null,description:"The alt text for the static map image",name:"imageAltText",required:!0,type:{name:"string"}},mapType:{defaultValue:{value:"roadmap"},description:"The type of map",name:"mapType",required:!1,type:{name:"enum",value:[{value:'"roadmap"'},{value:'"satellite"'},{value:'"terrain"'},{value:'"hybrid"'}]}},mapMarkers:{defaultValue:{value:"[]"},description:"An array of map markers",name:"mapMarkers",required:!1,type:{name:"MapMarkerProps[]"}},size:{defaultValue:{value:"640x320"},description:"The size of the map in the format wxh, such as 640x320",name:"size",required:!1,type:{name:"string"}},zoom:{defaultValue:{value:"14"},description:"The optional zoom level, between 1 and 20. 1 = world, 20 = buildings",name:"zoom",required:!1,type:{name:"number"}},apiKey:{defaultValue:null,description:"Optional Google Maps API key. Falls back to config if not provided.",name:"apiKey",required:!1,type:{name:"string"}}}}}catch{}export{i as S};
