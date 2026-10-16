import{s,r as n,R as t}from"./iframe-BNpMeywT.js";import{R as c}from"./Row-DErQ7Ddw.js";import{C as l}from"./Column-Dpu6NTYh.js";import{D as _}from"./DynamicIcon-C0gKm0XE.js";const $=s.div`
  position: relative;
`,b=s.button`
  display: flex;
  align-items: center;
  color: ${e=>e.theme.theme_vars.colours.action};
  background: ${e=>e.$show?e.theme.theme_vars.colours.action_light:e.theme.theme_vars.colours.grey_light};
  padding: ${e=>e.theme.theme_vars.spacingSizes.large}
    ${e=>e.theme.theme_vars.spacingSizes.medium};
  width: 100%;
  position: relative;
  border: ${e=>e.theme.theme_vars.border_width_thin} solid
    ${e=>e.$show?e.theme.theme_vars.colours.action:e.theme.theme_vars.colours.grey};
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  ${e=>e.theme.fontStyles};
  ${e=>e.theme.linkStyles};
  text-decoration-style: ${e=>e.$show?"dashed":"solid"};

  &:hover {
    background: ${e=>e.theme.theme_vars.colours.action_light};
    border: ${e=>e.theme.theme_vars.border_width_thin} solid
      ${e=>e.theme.theme_vars.colours.action};
    text-decoration-style: dashed;
    cursor: pointer;
  }

  .service-icon-hover {
    display: none;
  }

  &:hover {
    .service-icon {
      display: none;
    }
    .service-icon-hover {
      display: block !important;
    }
  }

  .serviceLinkChevron {
    position: absolute;
    top: calc(50% - 12px);
    right: 10px;
    width: 34px;
    height: 32px;

    &:before {
      border-style: solid;
      border-width: 4px 4px 0 0;
      content: '';
      display: inline-block;
      height: 12px;
      position: relative;
      vertical-align: top;
      width: 12px;
      border-color: ${e=>e.theme.theme_vars.colours.black};
      top: ${e=>e.show?"10px":"0"};
      left: 6px;
      transform: ${e=>e.$show?"rotate(-45deg)":"rotate(135deg)"};
    }
  }
`,x=s.span`
  color: ${e=>e.theme.theme_vars.colours.action};
  text-align: left;
  padding-left: ${e=>e.theme.theme_vars.spacingSizes.small};
  padding-right: ${e=>e.theme.theme_vars.spacingSizes.medium};
  line-height: 1.25;
  ${e=>e.theme.theme_vars.h3}
`,f=s.div`
  display: ${e=>e.$show?"block":"none"};
  position: absolute;
  overflow: hidden;
  top: auto;
  margin-top: ${e=>e.theme.theme_vars.spacingSizes.medium};
  z-index: 9;
  left: 0;
  right: 0;
  background: ${e=>e.theme.theme_vars.colours.white};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
`,y=s.div`
  background: ${e=>e.theme.theme_vars.colours.action_light};
  border-top: ${e=>e.theme.theme_vars.border_width_thin} solid
    ${e=>e.theme.theme_vars.colours.action};
  padding: ${e=>e.theme.theme_vars.spacingSizes.medium}
    ${e=>e.theme.theme_vars.spacingSizes.small};
  box-shadow: 0px -4px 0px 0px ${e=>e.theme.theme_vars.colours.action} inset;
  -webkit-box-shadow: 0px -4px 0px 0px ${e=>e.theme.theme_vars.colours.action} inset;
  -moz-box-shadow: 0px -4px 0px 0px ${e=>e.theme.theme_vars.colours.action} inset;
`,d=s.a`
  display: block;
  background: ${e=>e.theme.theme_vars.colours.white};
  padding: ${e=>e.theme.theme_vars.spacingSizes.medium};
  border: ${e=>e.theme.theme_vars.border_width_thin} solid ${e=>e.theme.theme_vars.colours.grey};
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  ${e=>e.theme.fontStyles};
  ${e=>e.theme.linkStyles};

  &:hover {
    ${e=>e.theme.linkStylesHover};
    background: ${e=>e.theme.theme_vars.colours.grey_light};
  }

  &:focus {
    ${e=>e.theme.linkStylesFocus};
    background: ${e=>e.theme.theme_vars.colours.grey_light};
  }

  &:active {
    ${e=>e.theme.linkStylesActive};
    background: ${e=>e.theme.theme_vars.colours.grey_light};
  }
`,k=s.div`
  margin-bottom: ${e=>e.$margin??0}px;
  padding-bottom: ${e=>e.$margin?e.theme.theme_vars.spacingSizes.medium:0};
`,C=({serviceLinksArray:e,serviceId:w})=>{const[i,m]=n.useState(null),[u,p]=n.useState(0),v=r=>{m(i===r?null:r)};n.useEffect(()=>{p(a.current[i]?.current?.clientHeight)},[i]);let a=t.useRef([]);return a.current=e.map((r,o)=>a.current[o]??t.createRef()),t.createElement($,{"data-testid":"ServiceLinksBoxed"},t.createElement(c,null,e.map((r,o)=>t.createElement(l,{small:"full",medium:"one-half",large:"one-third",key:o},t.createElement(b,{onClick:()=>v(o),$show:o===i,"aria-label":o===i?"Close "+r.title:"View "+r.title},t.createElement(_,{icon:r.iconKey,level:3}),t.createElement(x,null,r.title),t.createElement("span",{className:"serviceLinkChevron"})),t.createElement(f,{$show:o===i,ref:a.current[o]},t.createElement(y,null,t.createElement(c,{isList:!0},r.quickLinksArray?.map((h,g)=>t.createElement(l,{isList:!0,small:"full",medium:"one-half",large:"one-third",key:g},t.createElement(d,{href:h.url},h.title))),t.createElement(l,{isList:!0,small:"full",medium:"one-half",large:"one-third"},t.createElement(d,{href:r.url},"All ",r.title.toLowerCase()," ",r.title.endsWith("services")?"":"services"))))),t.createElement(k,{$margin:o===i?u:0})))))};try{ServicesLinksBoxed.displayName="ServicesLinksBoxed",ServicesLinksBoxed.__docgenInfo={description:"",displayName:"ServicesLinksBoxed",props:{serviceLinksArray:{defaultValue:null,description:"An array of all the top level service landing pages",name:"serviceLinksArray",required:!0,type:{name:"PageLinkProp[]"}},serviceId:{defaultValue:null,description:"Id of container",name:"serviceId",required:!1,type:{name:"string"}}}}}catch{}export{C as S};
