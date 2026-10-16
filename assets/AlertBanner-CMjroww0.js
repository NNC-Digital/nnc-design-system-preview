import{s as r,r as a,H as b,R as t}from"./iframe-BNpMeywT.js";import{I as f}from"./CloseIcon-DQAr5twY.js";import{M as $}from"./MaxWidthContainer-DfAz8Sy4.js";import{u as w}from"./UseLocalStorage-DuLyX1N_.js";const y=r.div`
  padding: ${e=>e.theme.theme_vars.spacingSizes.medium} 0;
  background: ${e=>e.$alertType==="alert"?e.theme.theme_vars.colours.alert_background:e.$alertType==="warning"?e.theme.theme_vars.colours.warning_background:e.$alertType==="positive"?e.theme.theme_vars.colours.positive_background:e.$alertType==="london_bridge"?e.theme.theme_vars.colours.black:e.theme.theme_vars.colours.negative};
  p,
  button {
    line-height: 1.3;
    color: ${e=>e.$alertType==="warning"||e.$alertType==="positive"?e.theme.theme_vars.colours.black:e.theme.theme_vars.colours.white} !important;
  }

  a {
    ${e=>e.theme.linkStyles}
    color: ${e=>e.$alertType==="warning"||e.$alertType==="positive"?e.theme.theme_vars.colours.black:e.theme.theme_vars.colours.white} !important;

    &:hover {
      ${e=>e.theme.linkStylesHover}
    }
    &:focus {
      ${e=>e.theme.linkStylesFocus}
      color: ${e=>e.$alertType==="warning"||e.$alertType==="positive"?e.theme.theme_vars.colours.white:e.theme.theme_vars.colours.black} !important;
      background: ${e=>e.$alertType==="warning"||e.$alertType==="positive"?e.theme.theme_vars.colours.action:e.theme.theme_vars.colours.warning_background} !important;
    }
    &:active {
      ${e=>e.theme.linkStylesActive}
    }
  }

  svg {
    fill: ${e=>e.$alertType==="warning"||e.$alertType==="positive"?e.theme.theme_vars.colours.black:e.theme.theme_vars.colours.white} !important;
  }
`,k=r.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`,T=r.div`
  flex-grow: 1;
  padding-right: ${e=>e.theme.theme_vars.spacingSizes.medium};
`,p=r.p`
  font-weight: bold;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
`,x=r.div`
  p {
    max-width: 100% !important;
  }
`,E=r.button`
  ${e=>e.theme.fontStyles}
  border: none;
  background: none;
  cursor: pointer;
  flex-grow: 0;

  &:focus {
    outline: none;
    border-radius: ${e=>e.theme.theme_vars.border_radius};
    color: ${e=>e.$alertType==="warning"||e.$alertType==="positive"?e.theme.theme_vars.colours.white:e.theme.theme_vars.colours.black} !important;
    background: ${e=>e.$alertType==="warning"||e.$alertType==="positive"?e.theme.theme_vars.colours.action:e.theme.theme_vars.colours.warning_background} !important;
    border-bottom: 3px solid ${e=>e.theme.theme_vars.colours.black};

    svg {
      path {
        fill: ${e=>e.$alertType==="warning"||e.$alertType==="positive"?e.theme.theme_vars.colours.white:e.theme.theme_vars.colours.black} !important;
      }
    }
  }
  &:active {
    transform: translateY(2px);
    border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.black};
  }
`,s=({uid:e,title:c,alertType:n="alert",children:m})=>{const o=a.useContext(b),l=a.useRef(null),[u,h]=w("alert_"+e,!0),[d,v]=a.useState(!1);a.useEffect(()=>{l?.current?.addEventListener("click",g)},[l]),a.useEffect(()=>{v(!0)},[]);const g=_=>{_?.target?.tagName==="A"&&i()},i=()=>{h(!1)};return u&&d&&t.createElement(y,{$alertType:n,"data-testid":"AlertBanner"},t.createElement($,{noBackground:!0},t.createElement(k,null,t.createElement(T,null,t.createElement(p,null,c),t.createElement(x,{ref:l},m)),t.createElement(E,{title:"Click to dismiss this alert banner",onClick:i,$alertType:n},t.createElement(f,{colourFill:n==="warning"||n==="positive"?o.theme_vars.colours.black:o.theme_vars.colours.white}),t.createElement("br",null),"Dismiss"))))};try{s.displayName="AlertBanner",s.__docgenInfo={description:"A site wide alert banner, once dismissed it won't be shown again",displayName:"AlertBanner",props:{title:{defaultValue:null,description:"Title of the alert",name:"title",required:!0,type:{name:"string"}},uid:{defaultValue:null,description:"A unique idenification for the alert banner to store the localstorage for the hide button",name:"uid",required:!0,type:{name:"string"}},alertType:{defaultValue:{value:"alert"},description:"The type of alert",name:"alertType",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"warning"'},{value:'"positive"'},{value:'"london_bridge"'}]}},children:{defaultValue:null,description:"All children content for the banner",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}export{s as A};
