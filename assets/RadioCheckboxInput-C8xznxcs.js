import{s as o,n as a,r as p,R as t}from"./iframe-BNpMeywT.js";const u=o.div`
  display: block;
`,b=o.div`
  font-size: ${e=>e.theme.theme_vars.fontSizes.small};
  display: block;
  position: relative;
  min-height: 40px;
  margin-bottom: 10px;
  padding-left: 40px;
  clear: left;
`,h=o.input`
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
  margin: 0;
  opacity: 0;

  &:focus + label:before {
    box-shadow: 0 0 0 3px ${e=>e.theme.theme_vars.colours.focus};
  }
`,m=e=>e.$singleSelection?a`
      top: 10px;
      left: 10px;
      width: 0;
      height: 0;
      border: 10px solid currentcolor;
      border-radius: 50%;
      background: currentcolor;
    `:a`
      top: 11px;
      left: 9px;
      width: 23px;
      height: 12px;
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
      border: solid;
      border-width: 0 0 5px 5px;
      border-top-color: transparent;
      background: transparent;
    `,x=o.label`
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  color: #0b0c0c;
  display: block;
  margin-bottom: 5px;

  &:before {
    content: '';
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border: 2px solid currentColor;
    background: transparent;
    border-radius: ${e=>e.$singleSelection?"100%":0};
  }

  &:after {
    content: '';
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    opacity: ${e=>e.$isChecked?1:0};
    ${m}
  }
`,i=({singleSelection:e,value:l,name:s,onChange:c,checked:n,label:d})=>{const r=p.useId();return t.createElement(u,{"data-testid":"RadioCheckboxInput"},t.createElement(b,null,t.createElement(h,{type:e?"radio":"checkbox",value:l,id:r,name:s,onClick:c,defaultChecked:n}),t.createElement(x,{$isChecked:n,htmlFor:r,$singleSelection:e},d)))};try{i.displayName="RadioCheckboxInput",i.__docgenInfo={description:"",displayName:"RadioCheckboxInput",props:{checked:{defaultValue:null,description:"Is the input checked?",name:"checked",required:!0,type:{name:"boolean"}},label:{defaultValue:null,description:"The label for the input",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"The name of the input",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"The on change function",name:"onChange",required:!1,type:{name:"ReactNode | ((e: any) => void)"}},singleSelection:{defaultValue:null,description:"Is this a single selection, if true radio, if false checkbox",name:"singleSelection",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"The value of the input",name:"value",required:!0,type:{name:"string"}}}}}catch{}export{i as R};
