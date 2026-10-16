import{s as i,n as a,R as t}from"./iframe-BNpMeywT.js";import{L as p}from"./LazyImage-CiqbweeC.js";const d=i.figure`
  display: block;
  background: ${e=>e.theme.cardinal_name==="north"?e.theme.theme_vars.colours.white:e.theme.theme_vars.colours.grey_light};
  border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.grey};
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.medium};
  margin-top: ${e=>e.theme.theme_vars.spacingSizes.medium};
  float: none;
  width: 100%;
  margin-right: 0;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    float: ${e=>e.$wrapText===!0?"left":"none"};
    width: ${e=>e.$wrapText===!0?"30%":"100%"};
    margin-right: ${e=>e.$wrapText===!0?"1.5rem":"0"};
  }
`,c=e=>{switch(e.$ratio){case"4by3":return a`
        padding-top: 75%;
      `;case"4by1":return a`
        padding-top: 25%;
      `;case"16by9":return a`
        padding-top: 56.25%;
      `;default:return a`
        padding-top: 56.25%;
      `}},u=i.div`
  position: relative;
  ${c}
`,h=i.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,y=i.figcaption`
  ${e=>e.theme.fontStyles};
  font-size: 0.9rem !important;
  color: ${e=>e.theme.theme_vars.colours.black};
  padding: 15px;
`,n=({imageSmall:e,imageLarge:o,imageAltText:m,ratio:l="4by3",caption:r,wrapText:s})=>t.createElement(d,{"data-testid":"Image",$wrapText:s},t.createElement(u,{"data-testid":"ImageContainer",$ratio:l},t.createElement(p,{placeholder:e,src:o,visibilitySensorProps:{partialVisibility:!0}},g=>t.createElement(h,{src:g,alt:m}))),r?.trim()&&t.createElement(y,null,r));try{n.displayName="Image",n.__docgenInfo={description:`Responsive image slice component that allows 4 by 3 or 16 by 9 images
with an optional caption.`,displayName:"Image",props:{imageLarge:{defaultValue:null,description:"The large image url",name:"imageLarge",required:!0,type:{name:"string"}},imageSmall:{defaultValue:null,description:"The small image url",name:"imageSmall",required:!0,type:{name:"string"}},imageAltText:{defaultValue:null,description:"The image alt text to describe the image",name:"imageAltText",required:!1,type:{name:"string"}},ratio:{defaultValue:{value:"4by3"},description:"The image ratio, either '4by3' or '16by9'",name:"ratio",required:!1,type:{name:"string"}},caption:{defaultValue:null,description:"The optional image caption that goes under the image",name:"caption",required:!1,type:{name:"string"}},wrapText:{defaultValue:null,description:"Set to true to have following text wrap against image",name:"wrapText",required:!1,type:{name:"boolean"}}}}}catch{}export{n as I};
