import{s as a,R as t}from"./iframe-BNpMeywT.js";import{L as p}from"./LazyImage-CiqbweeC.js";import{H as h}from"./Heading-C7kzbY1R.js";import{C as u}from"./CallToAction-CjqkzkJC.js";const g=a.div`
  ${e=>e.theme.fontStyles};
  overflow: hidden;
  margin: 40px auto 5px auto;
  background: ${e=>e.theme.cardinal_name==="north"?e.theme.theme_vars.colours.white:e.theme.theme_vars.colours.grey_light};
  border-bottom: 3px solid ${e=>e.theme.theme_vars.colours.action};

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: none;
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    margin-left: 0;
    width: 100%;
    border-radius: 5px;
  }
`,x=a.div`
  width: 100%;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    width: 50%;
    min-height: 300px;
  }
`,l=a.div`
  background-image: url('${e=>e.$img}');
  background-size: cover;
  background-position: center;
  min-height: 200px;
  width: 100%;
  display: block;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    min-height: 300px;
  }
`,f=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: ${e=>e.theme.theme_vars.spacingSizes.extra_small};

  > div { flex: 1 1 120px; margin: 0 !important; }

  > div a {
    display: flex;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }
`,b=a.div`
  width: calc(100% - 30px);
  padding: 15px;

  h2 {
    margin-top: 0;
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    width: calc(50% - 60px);
    padding: 30px;
  }
`,y=a.div``,w=a.a`
  margin-top: ${e=>e.theme.theme_vars.spacingSizes.extra_small};
  display: inline-block;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small} 7px;
  margin-left: -7px;
  ${e=>e.theme.linkStyles};
  :hover {
    ${e=>e.theme.linkStylesHover};
  }
  :focus {
    ${e=>e.theme.linkStylesFocus};
  }
  :active {
    ${e=>e.theme.linkStylesActive};
  }
`,m=({title:e,image1440x810:s,image144x81:d,ctaText:r,ctaUrl:n,actions:o,children:c})=>t.createElement(g,null,t.createElement(x,null,t.createElement(p,{src:s,placeholder:d,visibilitySensorProps:{partialVisibility:!0}},i=>n?t.createElement(l,{$img:i,as:"a",href:n,title:r,"data-testid":"PromoBannerImage"}):t.createElement(l,{$img:i,"aria-hidden":"true","data-testid":"PromoBannerImage"}))),t.createElement(b,null,t.createElement(h,{text:e}),t.createElement(y,null,c),o&&o.length>0?t.createElement(f,{role:"group","aria-label":`${e} download options`},o.map(i=>t.createElement(u,{key:i.text,...i}))):r&&n?t.createElement(w,{href:n},r):null));try{m.displayName="PromoBanner",m.__docgenInfo={description:`Promotional banner used as the first wide line in a promotional block,
incorporated within PromoBlock use.`,displayName:"PromoBanner",props:{title:{defaultValue:null,description:"Title of the promo banner",name:"title",required:!0,type:{name:"string"}},ctaText:{defaultValue:null,description:"Call to action text",name:"ctaText",required:!1,type:{name:"string"}},ctaUrl:{defaultValue:null,description:"Call to action url",name:"ctaUrl",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"Optional button actions that replace the single call to action",name:"actions",required:!1,type:{name:"{ text: string; url: string; primary?: boolean; isExternal?: boolean; }[]"}},image1440x810:{defaultValue:null,description:"The url of the image",name:"image1440x810",required:!0,type:{name:"string"}},image144x81:{defaultValue:null,description:"The url of the image in 10x smaller for lazy loading",name:"image144x81",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"The children used for the text section of the promo banner",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}export{m as P};
