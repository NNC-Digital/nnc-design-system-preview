import{s as a,R as t}from"./iframe-BNpMeywT.js";import{L as p}from"./LazyImage-CiqbweeC.js";import{H as h}from"./Heading-C7kzbY1R.js";import{s as c}from"./index-ClUSzdlr.js";import{R as d}from"./Row-DErQ7Ddw.js";import{C as n}from"./Column-Dpu6NTYh.js";const m=150,r=200,x=a.div`
  ${e=>e.theme.fontStyles};
  padding: 15px 0;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
  }
`,i=a.a`
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  background: ${e=>e.theme.cardinal_name==="north"?e.theme.theme_vars.colours.white:e.theme.theme_vars.colours.grey_light} !important;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.3s ease;
  border-bottom: 5px solid ${e=>e.theme.theme_vars.colours.action};
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  margin-bottom: 15px;
  overflow: hidden;
  display: block;

  /* we don't want all the text within the tile to look like a link */
  text-decoration: none !important;
  font-weight: normal !important;
  ${e=>e.theme.fontStyles};

  &:hover {
    border-bottom: 5px solid ${e=>e.theme.theme_vars.colours.action_dark};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
  }

  &:focus {
    outline: none;
    border-bottom: 5px solid ${e=>e.theme.theme_vars.colours.focus};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
  }

  &:active {
    outline: none;
    transform: translateY(3px);
    border-bottom: 5px solid transparent;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15), 0px 2px 0px 0px ${e=>e.theme.theme_vars.colours.black} !important;
    -webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15),
      0px 2px 0px 0px ${e=>e.theme.theme_vars.colours.black} !important;
    -moz-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15),
      0px 2px 0px 0px ${e=>e.theme.theme_vars.colours.black} !important;
  }
`,b=a.span`
  display: block;
  width: 100%;
  height: ${m}px;
  overflow: hidden;
  background-image: url('${e=>e.$background}');
  background-size: cover;
  background-position: center;
  justify-self: center;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    min-height: ${r}px;
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    flex: none;
    height: ${r}px;
  }
`,g=a.div`
  padding: 15px;
  height: calc(100% - ${m+30}px);
  ${e=>e.theme.fontStyles};

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    height: calc(100% - ${r+30}px);
  }
`,u=a(h)`
  margin-top: 5px;
`,k=a.div`
  ${e=>e.theme.fontStyles};

  /* re-style bold and italic elements within the content */
  strong,
  b {
    font-weight: bold;
  }
  em,
  i {
    font-style: italic;
  }

  /* style links within the content correctly though ideally there won't be any */
  a {
    ${e=>e.theme.linkStyles};
  }
  a:hover {
    ${e=>e.theme.linkStylesHover};
  }
  a:focus {
    ${e=>e.theme.linkStylesFocus};
  }
  a:active {
    ${e=>e.theme.linkStylesActive};
  }
`,w=a.p`
  margin-top: 10px;
  padding: 3px 7px;
  margin-left: -7px;
  ${e=>e.theme.linkStyles};
  ${i}:hover & {
    ${e=>e.theme.linkStylesHover};
  }
  ${i}:focus & {
    ${e=>e.theme.linkStylesFocus};
  }
  ${i}:active & {
    ${e=>e.theme.linkStylesActive};
  }
`,l=({promos:e})=>t.createElement(t.Fragment,null,e&&e.length>0&&t.createElement(x,{"data-testid":"PromoBlock"},t.createElement(d,{isList:!0,hasWrap:!1},e.map((o,f)=>t.createElement(n,{isList:!0,small:"full",medium:"one-half",large:"auto",key:o.callToActionURL},t.createElement(i,{href:o.callToActionURL},t.createElement(p,{src:o.imageMedium,placeholder:o.imageSmall,visibilitySensorProps:{partialVisibility:!0}},s=>t.createElement(b,{$background:s,role:"img","aria-label":o.imageAltText?o.imageAltText:""})),t.createElement(g,null,t.createElement(u,{level:3,text:o.title}),t.createElement(k,{dangerouslySetInnerHTML:{__html:c(o.content)}}),t.createElement(w,null,o.callToActionText))))),e.length===1&&t.createElement(n,{small:"full",medium:"one-half",large:"one-half"}))));try{l.displayName="PromoBlock",l.__docgenInfo={description:`Promotional campaign block, showing a tile for each campaign, similar to news article featured block.
Note that the main promotional campaign is to be displayed above these in a PromoBanner.`,displayName:"PromoBlock",props:{promos:{defaultValue:null,description:"The promo tiles to show",name:"promos",required:!0,type:{name:"PromoProps[]"}}}}}catch{}export{k as P,l as a};
