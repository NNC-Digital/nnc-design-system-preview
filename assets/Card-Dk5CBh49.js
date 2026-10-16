import{s as a,R as t}from"./iframe-BNpMeywT.js";import{H as m}from"./Heading-C7kzbY1R.js";import{s as g}from"./index-ClUSzdlr.js";const f=a.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  background-color: ${e=>e.theme.cardinal_name==="west"?e.theme.theme_vars.colours.grey_light+"7a":e.theme.theme_vars.colours.white};
`,x=a.div`
  padding: ${e=>e.theme.theme_vars.spacingSizes.medium};
  flex-grow: 1;

  p:last-of-type {
    margin-bottom: 0;
  }
`,d=a.img`
  width: 100%;
  vertical-align: bottom;
  height: auto;
`,y=a.a`
  &:hover {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  }
`,c=a.div`
  h3 {
    margin-top: 0;
  }
`,v=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.theme_vars.spacingSizes.small};
`,h=a.span`
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: ${e=>e.theme.theme_vars.colours.action};

  svg {
    display: block;
    width: 32px;
    height: 32px;
  }
`,_=a.div`
  margin-top: 0;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small}
    ${e=>e.theme.theme_vars.spacingSizes.medium} ${e=>e.theme.theme_vars.spacingSizes.medium};

  border-top: 1px solid
    ${e=>e.theme.cardinal_name==="north"?e.theme.theme_vars.colours.grey_light:e.theme.theme_vars.colours.white};
`,$=a.a`
  ${e=>e.theme.fontStyles};
  ${e=>e.theme.linkStyles};
  display: flex;

  &:hover {
    ${e=>e.theme.linkStylesHover};
  }

  &:focus {
    ${e=>e.theme.linkStylesFocus};
  }

  &:active {
    ${e=>e.theme.linkStylesActive};
  }
`,p=({header:e,icon:l,content:i,footerLink:n,imageLarge:r,imageSmall:s,imageAltText:o})=>{const u=i||e||l;return t.createElement(f,{"data-testid":"Card"},r&&s&&t.createElement(t.Fragment,null,n?t.createElement(y,{href:n.url},t.createElement(d,{src:r,alt:o,srcSet:`${s} 400w, ${r} 800w`,sizes:"(max-width: 550px) 400px, 800px",loading:"lazy"})):t.createElement(d,{src:r,alt:o,srcSet:`${s} 400w, ${r} 800w`,sizes:"(max-width: 550px) 400px, 800px",loading:"lazy"})),u&&t.createElement(x,null,e&&(l?t.createElement(v,null,t.createElement(h,{"aria-hidden":"true"},l),t.createElement(c,null,t.createElement(m,{text:e,level:3}))):t.createElement(c,null,t.createElement(m,{text:e,level:3}))),!e&&l&&t.createElement(h,{"aria-hidden":"true"},l),i&&t.createElement("div",{dangerouslySetInnerHTML:{__html:g(i)}})),n&&t.createElement(_,null,t.createElement($,{href:n.url},n.title)))};try{p.displayName="Card",p.__docgenInfo={description:"A card component with header, footer and content",displayName:"Card",props:{header:{defaultValue:null,description:"Optional card header",name:"header",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Optional icon displayed beside the card header",name:"icon",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"The card content as a string of html",name:"content",required:!1,type:{name:"string"}},imageLarge:{defaultValue:null,description:"Optional large image",name:"imageLarge",required:!1,type:{name:"string"}},imageSmall:{defaultValue:null,description:"Optional small image",name:"imageSmall",required:!1,type:{name:"string"}},imageAltText:{defaultValue:null,description:"Optional image alt text",name:"imageAltText",required:!1,type:{name:"string"}},footerLink:{defaultValue:null,description:"The optional footer link",name:"footerLink",required:!1,type:{name:"CardFooterLinkProps"}}}}}catch{}export{p as C};
