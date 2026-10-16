import{s as u,R as m}from"./iframe-BNpMeywT.js";const c=u.button`
    font-weight: 700;
    border: none;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    font-family: ${e=>e.theme.theme_vars.fontstack};
    border-radius: ${e=>e.theme.theme_vars.border_radius};
    text-decoration: none;

    &.button--primary {
        color: white;
        background-color: ${e=>e.theme.theme_vars.colours.action};

        &:hover {
            background-color: ${e=>e.theme.theme_vars.colours.action_dark};
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
        color: ${e=>e.theme.theme_vars.colours.action};
        background-color: transparent;
        border: 2px solid ${e=>e.theme.theme_vars.colours.action};

        &:hover {
            background-color: ${e=>e.theme.theme_vars.colours.action}1A;
        }
        &:focus {
            outline: none;
            border: 2px solid ${e=>e.theme.theme_vars.colours.focus};
            background-color: ${e=>e.theme.theme_vars.colours.action}1A;
        }
    }
    &.button--small {
        font-size: 12px;
        padding: 10px 16px;
    }
    &.button--medium {
        font-size: 14px;
        padding: 11px 20px;
    }
    &.button--large {
        font-size: 16px;
        padding: 14px 24px;
    }
`,o=({primary:e=!0,size:t="medium",text:a,type:r="submit",isDisabled:d=!1,ariaExpanded:n,ariaControls:s,...l})=>{const i=e?"button--primary":"button--secondary";return m.createElement(c,{type:r,className:[`button--${t}`,i].join(" "),"aria-expanded":n,"aria-controls":s,...l},a)};try{o.displayName="FormButton",o.__docgenInfo={description:"Primary UI component for user interaction",displayName:"FormButton",props:{text:{defaultValue:null,description:"Button label",name:"text",required:!0,type:{name:"string"}},primary:{defaultValue:{value:"true"},description:"Is this the principal Button on the page?",name:"primary",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"How large should the Button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},type:{defaultValue:{value:"submit"},description:"Button type, defaults to submit",name:"type",required:!1,type:{name:"string"}},isDisabled:{defaultValue:{value:"false"},description:"Is the button disabled?",name:"isDisabled",required:!1,type:{name:"boolean"}},ariaExpanded:{defaultValue:null,description:"",name:"ariaExpanded",required:!1,type:{name:"boolean"}},ariaControls:{defaultValue:null,description:"",name:"ariaControls",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Is the button disabled?",name:"onClick",required:!1,type:{name:"ReactNode | ((e: any) => void)"}}}}}catch{}export{o as F};
