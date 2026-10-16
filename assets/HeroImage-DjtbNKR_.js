import{s as a,r as u,R as t}from"./iframe-BNpMeywT.js";import{H as k}from"./Heading-C7kzbY1R.js";import{L as _}from"./LazyImage-CiqbweeC.js";import{s as w}from"./index-ClUSzdlr.js";import{C as S}from"./CallToAction-CjqkzkJC.js";import{C as E}from"./CustomSearch-kPtvHzbt.js";const z=a.div`
  position: relative;
  overflow: hidden;
  background-image: ${e=>{const n=e.$backgroundBox?"":"linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75))",r=e.$image&&e.$image.trim()?`url('${e.$image}')`:"";return n&&r?`${n}, ${r}`:n||r||"none"}};

  padding-bottom: 10px;
  background-position: ${e=>e.$backgroundPosition};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;

  /* Max heights for large screens */
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    max-height: 410px;
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    max-height: 560px;
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.xl}) {
    max-height: 636px;
  }

  &::before {
    content: '';
    /* phones */
    padding-top: 90%;
    /* tablet */
    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
      padding-top: 40%;
    }
    /* everything else */
    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
      padding-top: 31.25%;
    }
  }
`,V=a.div`
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  flex-grow: 1;
  z-index: 2;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    max-width: ${e=>e.theme.theme_vars.breakpoints.l};
  }
`,I=a.div`
  ${e=>e.theme.fontStyles}
  text-align: left;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
  margin-left: 15px;
  margin-right: 15px;
  padding: 25px 25px 0 25px;
  color: ${e=>e.$backgroundBox?e.theme.theme_vars.colours.black:e.theme.theme_vars.colours.white};
  background-color: ${e=>e.$backgroundBox?e.theme.theme_vars.colours.grey_light+"F2":"transparent"};
  box-shadow: ${e=>e.$backgroundBox?"0px -4px 0px 0px "+e.theme.theme_vars.colours.action+" inset, 0px 4px 15px rgba(0, 0, 0, 0.11)":"none"};

  border-radius: 5px;
  overflow: hidden;

  /* default - phones */
  max-width: calc(100% - 30px);

  /* tablets */
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    max-width: 65%;
    margin-left: ${e=>e.theme.theme_vars.spacingSizes.large};
    margin-right: 0;
    margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.medium};
  }

  /* desktop */
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    max-width: 50%;
    margin-left: 0;
    margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.x_large};
  }
`,P=a(k)`
  margin: 0;
  color: ${e=>e.$backgroundBox?e.theme.theme_vars.colours.black:e.theme.theme_vars.colours.white};

  /* default - phones */
  font-size: 22px;

  /* tablets */
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    font-size: 32px;
  }

  /* desktop */
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    font-size: 44px;
  }
`,q=a.div`
  margin-top: 10px;
  p,
  div {
    margin-bottom: 10px;
  }
`,C=a.a`
  ${e=>e.theme.fontStyles}
  text-decoration: underline;
  color: ${e=>e.theme.theme_vars.colours.white} !important;
  width: 100%;
  padding: 0;
  margin-top: 10px;
  display: inline-block;
  outline: none;

  &:hover {
    text-decoration-style: dotted;
    text-shadow: 2px 2px 4px rgba(150, 150, 150, 0.5), -2px 2px 4px rgba(150, 150, 150, 0.5),
      2px -2px 4px rgba(150, 150, 150, 0.5), -2px -2px 4px rgba(150, 150, 150, 0.5);
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus};
  }
  &:active {
    transform: translate(3px);
  }
`,H=a.a`
  ${e=>e.theme.fontStyles}
  ${e=>e.theme.linkStyles}
  color: ${e=>e.$backgroundBox?e.theme.theme_vars.colours.action:e.theme.theme_vars.colours.white};
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
  display: block;

  &:hover,
  &:focus {
    text-decoration-style: dashed;
    text-shadow: ${e=>e.$backgroundBox?"none":`2px 2px 4px rgba(150, 150, 150, 0.5), -2px 2px 4px rgba(150, 150, 150, 0.5),
      2px -2px 4px rgba(150, 150, 150, 0.5), -2px -2px 4px rgba(150, 150, 150, 0.5)`};
  }
`,B=a.div`
  margin: ${e=>e.theme.theme_vars.spacingSizes.medium} 0;
`,L=a.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`,A=a.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`,F=a.button`
  position: absolute;
  display: none;
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid white;
    color: white;
    font-size: 32px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
    &:focus {
      outline: none;
      background: ${e=>e.theme.theme_vars.colours.focus};
      color: ${e=>e.theme.theme_vars.colours.black};
      box-shadow: 0 0 0 2px ${e=>e.theme.theme_vars.colours.focus}, 0 0 0 4px ${e=>e.theme.theme_vars.colours.black};
      -webkit-box-shadow: 0 0 0 2px ${e=>e.theme.theme_vars.colours.focus}, 0 0 0 4px ${e=>e.theme.theme_vars.colours.black};
      -moz-box-shadow: 0 0 0 2px ${e=>e.theme.theme_vars.colours.focus}, 0 0 0 4px ${e=>e.theme.theme_vars.colours.black};
    }
  }
`,p=({headline:e,content:n,callToActionText:r,callToActionURL:i,callToActionIsPrimary:g=!0,backgroundBox:o=!0,imageLarge:x,imageSmall:f,backgroundPosition:b="center",imageAltText:d,heroVideoUrl:c,breadcrumb:s,customSearch:h})=>{const[m,v]=u.useState(!0),l=u.useRef(null),$=()=>{l.current&&(m?l.current.pause():l.current.play(),v(!m))};return t.createElement(t.Fragment,null,t.createElement(_,{src:x,placeholder:f,visibilitySensorProps:{partialVisibility:!0}},y=>t.createElement(z,{$image:y,$backgroundBox:o,$backgroundPosition:b,"data-testid":"HeroImage"},c&&t.createElement(t.Fragment,null,t.createElement(L,null,t.createElement(A,{ref:l,autoPlay:!0,loop:!0,muted:!0},t.createElement("source",{src:c,type:"video/mp4"}),"Your browser doesn't support this video."),t.createElement(F,{onClick:$},m?"⏸":"▶"))),t.createElement(V,null,t.createElement(I,{$backgroundBox:o,"data-testid":"HeroImageOverlay"},s&&t.createElement(H,{href:s.url,$backgroundBox:o},s.title),e&&t.createElement(P,{level:1,text:e,$backgroundBox:o}),n&&t.createElement(q,{dangerouslySetInnerHTML:{__html:w(n)}}),h&&t.createElement(B,null,t.createElement(E,{...h})),i&&o&&t.createElement(S,{url:i,text:r,primary:g}),!i&&o&&t.createElement("br",null),i&&!o&&t.createElement(C,{href:i},r||"Find out more"))))),d&&t.createElement("span",{role:"img","aria-label":d}))};try{p.displayName="HeroImage",p.__docgenInfo={description:`Hero image banner with optional text and call to action with varying presentation of text area.
For optional use at the top of a service landing page, if set in the CMS.`,displayName:"HeroImage",props:{headline:{defaultValue:null,description:"Headline text, optional. Intention to use page title if missing.",name:"headline",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"Any text after the headline and before the call to action, optional",name:"content",required:!1,type:{name:"string"}},imageLarge:{defaultValue:null,description:"URL of the hero image (min 400pix high)",name:"imageLarge",required:!1,type:{name:"string"}},imageSmall:{defaultValue:null,description:"URL of the a smaller version of the image for lazy loading",name:"imageSmall",required:!1,type:{name:"string"}},backgroundPosition:{defaultValue:{value:"center"},description:"CSS background position for the hero image. Defaults to center.",name:"backgroundPosition",required:!1,type:{name:"string"}},heroVideoUrl:{defaultValue:null,description:"URL of the hero video",name:"heroVideoUrl",required:!1,type:{name:"string"}},imageAltText:{defaultValue:null,description:"Optional alt text for the image - ideally the image should be decorative only and not require a long description",name:"imageAltText",required:!1,type:{name:"string"}},callToActionText:{defaultValue:null,description:"Optional call to action text",name:"callToActionText",required:!1,type:{name:"string"}},callToActionURL:{defaultValue:null,description:"Optional call to action link URL",name:"callToActionURL",required:!1,type:{name:"string"}},callToActionIsPrimary:{defaultValue:{value:"true"},description:"Is the call to action a primary button",name:"callToActionIsPrimary",required:!1,type:{name:"boolean"}},backgroundBox:{defaultValue:{value:"true"},description:"Set to true to put the text and call to action on a white box, false to overlay on a darkened image",name:"backgroundBox",required:!1,type:{name:"boolean"}},breadcrumb:{defaultValue:null,description:"An optional breadcrumb. If not set then the breadcrumb is not shown",name:"breadcrumb",required:!1,type:{name:"BreadcrumbProp"}},customSearch:{defaultValue:null,description:"An optional custom search",name:"customSearch",required:!1,type:{name:"CustomSearchProps"}}}}}catch{}export{p as H};
