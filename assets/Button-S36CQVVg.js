import{s as h,R as x}from"./iframe-BNpMeywT.js";const b=h.a`
  font-weight: 700;
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-family: ${e=>e.theme.theme_vars.fontstack};
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  text-decoration: none !important;
  width: calc(100% - 48px);
  width: -webkit-fill-available;
  text-align: center;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    width: auto;
  }
  &.button--primary {
    color: white !important;
    background-color: ${e=>e.$colourOverride?e.$colourOverride:e.theme.theme_vars.colours.action};

    &:hover {
      background-color: ${e=>e.$colourOverride?e.$colourOverride:e.theme.theme_vars.colours.action_dark};
    }
    &:focus {
      outline: none;
      color: ${e=>e.theme.theme_vars.colours.black} !important;
      background-color: ${e=>e.theme.theme_vars.colours.focus};
      box-shadow: 0px -3px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
      -webkit-box-shadow: 0px -3px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
      -moz-box-shadow: 0px -3px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
    }
    &:active {
      transform: translateY(2px);
      color: ${e=>e.theme.theme_vars.colours.black} !important;
      background-color: ${e=>e.theme.theme_vars.colours.focus};
      box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
      -webkit-box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
      -moz-box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
    }
  }
  &.button--secondary {
    color: ${e=>e.$colourOverride?e.$colourOverride:e.theme.theme_vars.colours.action} !important;
    background-color: transparent;
    border: 3px solid
    ${e=>e.$colourOverride?e.$colourOverride:e.theme.theme_vars.colours.action};

    &:hover {
      background-color: ${e=>e.$colourOverride?e.$colourOverride:e.theme.theme_vars.colours.action}1A;
    }
    &:focus {
      outline: none;
      color: ${e=>e.theme.theme_vars.colours.black} !important;
      background-color: ${e=>e.theme.theme_vars.colours.focus};
      border-color: transparent;
      box-shadow: 0px -3px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
      -webkit-box-shadow: 0px -3px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
      -moz-box-shadow: 0px -3px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
    }
    &:active {
      transform: translateY(2px);
      color: ${e=>e.theme.theme_vars.colours.black} !important;
      background-color: ${e=>e.theme.theme_vars.colours.focus};
      border-color: transparent !important;
      box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
      -webkit-box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
      -moz-box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
    }
  }
  &.button--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  &.button--medium {
    font-size: 14px;
    padding: 11px 20px;

    &.button--secondary {
      padding: 8px 12px;
    }
  }
  &.button--large {
    font-size: 16px;
    padding: 14px 24px;
  }
`,a=({primary:e=!0,size:l="medium",text:o,title:t,url:n,colourOverride:r,isExternal:s=!1,isDisabled:i=!1,children:c,...u})=>{const m=e?"button--primary":"button--secondary",d=i?null:{href:n},p=s?{target:"_blank",rel:"noreferrer"}:{};return x.createElement(b,{className:[`button--${l}`,m].join(" "),...d,...p,title:t||o,$colourOverride:r&&r,...u},o||c)};try{a.displayName="Button",a.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"true"},description:"Is this the principal Button on the page?",name:"primary",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"How large should the Button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},text:{defaultValue:null,description:"Button label",name:"text",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Button title optional",name:"title",required:!1,type:{name:"string"}},url:{defaultValue:null,description:"The URL for where to load when a user clicks on the Button",name:"url",required:!0,type:{name:"string"}},isExternal:{defaultValue:{value:"false"},description:"Is the link to an external page?",name:"isExternal",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"Is the button disabled?",name:"isDisabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"onClick",name:"onClick",required:!1,type:{name:"Function"}},colourOverride:{defaultValue:null,description:"Optional override for the colour",name:"colourOverride",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Button contents",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{a as B};
