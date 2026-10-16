import{s as r,n as s,r as n,H as E,R as t}from"./iframe-BNpMeywT.js";import{C as S}from"./ChevronIcon-dH899Igz.js";import{H as C}from"./Heading-C7kzbY1R.js";import{H as L}from"./HeadingWithIconLink-BXbTg6CT.js";import{S as B}from"./ServicesLinksBoxed-BC8G-Dku.js";import{u as V}from"./UseLocalStorage-DuLyX1N_.js";const H=e=>e.$hideHeader||e.$isBoxed?s`
      max-height: none;
      overflow: visible;
    `:s`
      max-height: 385px;
      overflow: hidden;
    `,A=r.div`
  ${e=>e.theme.fontStyles}
  ${H}

  &.open {
    max-height: none;
  }

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    max-height: none;
    margin-top: 15px;
  }
`,O=r.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`,z=r.div`
  display: none;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: block;
    width: calc(33.333% - 21px);
    margin-bottom: 31px;
  }
`,I=r.div`
  padding-left: 76px;
`,F=s`
  // display: block;
  background: ${e=>e.theme.theme_vars.colours.white};
  background: ${e=>e.theme.theme_vars.colours.white}F2;
  border-radius: 3px;
  box-shadow: 0px -4px 0px 0px ${e=>e.theme.theme_vars.colours.action} inset,
    0px 4px 15px rgba(0, 0, 0, 0.11);
  -webkit-box-shadow: 0px -4px 0px 0px ${e=>e.theme.theme_vars.colours.action} inset,
    0px 4px 15px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px -4px 0px 0px ${e=>e.theme.theme_vars.colours.action} inset,
    0px 4px 15px rgba(0, 0, 0, 0.11);

  padding: 20px 15px;
  // width: calc(100% - 30px);
  // margin-bottom: 15px;

  &:hover {
    background: ${e=>e.theme.theme_vars.colours.white};
  }

  &:focus {
    ${e=>e.theme.linkStylesFocus};
    box-shadow: 0px -4px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset,
      0px 4px 15px rgba(0, 0, 0, 0.11);
    -webkit-box-shadow: 0px -4px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset,
      0px 4px 15px rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 0px -4px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset,
      0px 4px 15px rgba(0, 0, 0, 0.11);
  }
  &:active {
    ${e=>e.theme.linkStylesActive};
    transform: translateY(3px);
    box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset,
      0px 4px 15px rgba(0, 0, 0, 0.11);
    -webkit-box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset,
      0px 4px 15px rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset,
      0px 4px 15px rgba(0, 0, 0, 0.11);
  }

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    //width: calc(50% - 16px);
    //margin-bottom: 31px;
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    width: calc(33.333% - 45px);
  }
`,M=(e,u)=>e.$oneCol?s`
      width: 100%;
      @media screen and (min-width: ${o=>`${o.theme.theme_vars.breakpointsVals.m}px`}) and (max-width: ${o=>`${o.theme.theme_vars.breakpointsVals.l+150}px`}) {
        width: 100%;
      }
      @media screen and (min-width: ${o=>o.theme.theme_vars.breakpoints.l}) {
        width: 100%;
      }
    `:s`
      @media screen and (min-width: ${o=>`${o.theme.theme_vars.breakpointsVals.m}px`}) and (max-width: ${o=>`${o.theme.theme_vars.breakpointsVals.l+150}px`}) {
        width: calc(50% - 16px);
      }
      @media screen and (min-width: ${o=>o.theme.theme_vars.breakpoints.l}) {
        width: calc(33.333% - 45px);
      }
    `,P=e=>{if(e.$hasBackground)return F},q=r.div`
  width: 100%;
  display: flex;
  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;

  @media screen and (min-width: ${e=>`${e.theme.theme_vars.breakpointsVals.m}px`}) and (max-width: ${e=>`${e.theme.theme_vars.breakpointsVals.l+150}px`}) {
    margin-bottom: 31px;
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    //
  }

  &:hover,
  &:focus-within {
    .service-icon {
      display: none;
    }
    .service-icon-hover {
      display: block !important;
    }
  }
  ${P}

  ${M}
`,N=r.ul`
  display: none;
  margin: 0 !important;
  padding: 0 !important;
  list-style-type: none;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    display: block;
    padding-left: 20px !important;
  }
`,R=r.li`
  margin-bottom: 10px;
  padding: 0 !important;
  position: relative;
  left: 0;

  &:before {
    background: ${e=>e.theme.theme_vars.colours.grey} !important;
    margin-left: -15px;
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 10px;
  }

  &:last-of-type {
    margin-bottom: 0 !important;
  }
`,j=r.a`
  ${e=>e.theme.linkStyles}
  font-weight: 400 !important;
  text-decoration: none !important;
  padding: 5px 10px;

  &:hover {
    ${e=>e.theme.linkStylesHover}
    text-decoration: underline !important;
    text-decoration-style: dotted !important;
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }
`,Q=r.div`
  text-align: center;
  margin-top: 30px;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    display: none;
  }
`,K=r.button`
  padding: 10px 15px;
  border: none;
  background: none;
  ${e=>e.theme.linkStyles}

  &:hover {
    cursor: pointer;
    ${e=>e.theme.linkStylesHover}
  }
  &:focus {
    outline: none;
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }
`,W=r.span`
  display: inline-block;
  margin-right: 15px;
  padding-left: 3px;
  vertical-align: middle;
`,Y=r.div`
  margin-bottom: 15px;

  h2 {
    margin-top: 0;
  }

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.grey_dark};
    margin-bottom: 35px;

    h2 {
      margin-top: 30px;
    }
  }
`,D=r.div`
  margin-bottom: 15px;
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    text-align: right;
  }
`,p=r.button`
  background: transparent;
  border: 2px solid ${e=>e.theme.theme_vars.colours.action};
  box-shadow: 0px -2px 0px 0px ${e=>e.theme.theme_vars.colours.action} inset;
  -webkit-box-shadow: 0px -2px 0px 0px ${e=>e.theme.theme_vars.colours.action} inset;
  -moz-box-shadow: 0px -2px 0px 0px ${e=>e.theme.theme_vars.colours.action} inset;
  border-bottom: none;
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  margin-top: 10px;
  margin-right: 10px;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small};
  line-height: 1.5;
  font-size: 0.9em;
  cursor: pointer;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    margin-left: 10px;
    margin-right: 0px;
  }

  &:hover {
    background: ${e=>e.theme.theme_vars.colours.action_light};
  }

  &.chosen {
    cursor: default;
    border: none;
    box-shadow: none;
    color: ${e=>e.theme.theme_vars.colours.black};
    background: ${e=>e.theme.theme_vars.colours.focus};
    border: 2px solid ${e=>e.theme.theme_vars.colours.focus};
    border-bottom: none;
    &:focus {
      outline: none;
    }
  }
  &:focus:not(.chosen) {
    outline: none;
    border-color: transparent;
    background: ${e=>e.theme.theme_vars.colours.focus};
    color: ${e=>e.theme.theme_vars.colours.black};
    border-color: ${e=>e.theme.theme_vars.colours.focus};
    box-shadow: 0px -3px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
    -webkit-box-shadow: 0px -3px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
    -moz-box-shadow: 0px -3px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
  }
  &:active:not(.chosen) {
    transform: translateY(2px);
    border-color: transparent;
    background: ${e=>e.theme.theme_vars.colours.focus};
    color: ${e=>e.theme.theme_vars.colours.black};
    border-color: ${e=>e.theme.theme_vars.colours.focus};
    box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
    -webkit-box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
    -moz-box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
  }
`,g=({serviceLinksArray:e,hasBackground:u=!1,hideHeader:o=!1,oneCol:f=!1,serviceId:w="all-services",isBoxed:d=!1})=>{const $=n.useContext(E),[i,b]=n.useState(e),_=[...e].sort((a,x)=>a.title>x.title?1:-1),[l,v]=n.useState(!1),[h,c]=V($.cardinal_name+"-savedOrder",0),[y,k]=n.useState(!0);return n.useEffect(()=>{h==="0"||h===0?(b(e),k(!0)):(b(_),k(!1))},[h]),t.createElement(t.Fragment,null,t.createElement(A,{id:w,className:l&&"open",$hideHeader:o,$isBoxed:d},!o&&t.createElement(Y,{"data-testid":"servicesLinksListHeader"},t.createElement(C,{text:"Council services"}),t.createElement(D,null,"Order services by",t.createElement("br",null),y?t.createElement(t.Fragment,null,t.createElement(p,{onClick:()=>c(0),tabIndex:"-1",className:"chosen",title:"Most used services selected","aria-label":"Order services by most used"},"Most used"),t.createElement(p,{onClick:()=>c(1),title:"Alphabetical services",name:"alphabetical services","aria-label":"Order services alphabetically"},"Alphabetical")):t.createElement(t.Fragment,null,t.createElement(p,{onClick:()=>c(0),title:"Most used services","aria-label":"Order services by most used"},"Most used"),t.createElement(p,{onClick:()=>c(1),tabIndex:"-1",className:"chosen",title:"Alphabetical services selected","aria-label":"Order services alphabetically"},"Alphabetical")))),d?t.createElement(B,{serviceLinksArray:i}):t.createElement(O,null,i.map((a,x)=>t.createElement(q,{$oneCol:f,key:x,$hasBackground:u},t.createElement(L,{title:a.title,iconKey:a.iconKey,link:a.url}),t.createElement(I,null,a.quickLinksArray?.length>0&&t.createElement(N,null,a.quickLinksArray.slice(0,3).map(m=>t.createElement(R,{key:m.title},t.createElement(j,{href:m.url,title:m.title},m.title))))))),i.length>1&&(i.length+1)%3===0&&t.createElement(z,null))),!d&&!o&&t.createElement(Q,null,t.createElement(K,{onClick:()=>v(!l)},t.createElement(W,null,t.createElement(S,{direction:l?"up":"down",colourFill:"#000000"})),"View ",l?"less":"more"," services")))};try{g.displayName="ServicesLinksList",g.__docgenInfo={description:"",displayName:"ServicesLinksList",props:{serviceLinksArray:{defaultValue:null,description:"An array of all the top level service landing pages",name:"serviceLinksArray",required:!0,type:{name:"PageLinkProp[]"}},hasBackground:{defaultValue:{value:"false"},description:"Display a white background on each block",name:"hasBackground",required:!1,type:{name:"boolean"}},hideHeader:{defaultValue:{value:"false"},description:"Hide the header",name:"hideHeader",required:!1,type:{name:"boolean"}},oneCol:{defaultValue:{value:"false"},description:"Show everything in a single column",name:"oneCol",required:!1,type:{name:"boolean"}},serviceId:{defaultValue:{value:"all-services"},description:"Id of container",name:"serviceId",required:!1,type:{name:"string"}},isBoxed:{defaultValue:{value:"false"},description:"Should the view be boxed",name:"isBoxed",required:!1,type:{name:"boolean"}}}}}catch{}export{g as S};
