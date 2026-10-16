import{s as a,R as t}from"./iframe-BNpMeywT.js";import{V as u}from"./style-helpers-0zitJ_SJ.js";const p=a.div`
  ${e=>e.theme.fontStyles};
`,m=e=>{if(e.$hideLabel===!0)return u},h=a.label`
  display: block;
  margin-bottom: 5px;
  ${m}
`,f=a.select`
  ${e=>e.theme.fontStyles};
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  box-sizing: border-box;
  max-width: 100%;
  height: 44px;
  height: 2.75rem;
  padding: 5px;
  border: 2px solid ${e=>e.theme.theme_vars.colours.black};

  &:focus {
    outline: 2px transparent solid;
    box-shadow: ${e=>e.theme.theme_vars.colours.focus} 0 0 0 2px,
      ${e=>e.theme.theme_vars.colours.black} 0 0 0 4px;
    transition: box-shadow 0.3s ease 0s;
  }
`,b=a.option`
  :active,
  :checked,
  :focus::-ms-value {
    color: #fff;
    background-color: #1d70b8;
  }
`,n=({id:e,label:s,options:i,onChange:o,selected:l,hideLabel:d=!1})=>t.createElement(p,null,t.createElement(h,{htmlFor:e,$hideLabel:d},s),t.createElement(f,{id:e,name:e,onChange:o&&o,defaultValue:l&&l},i.map((r,c)=>t.createElement(b,{key:c,value:r.value},r.title))));try{n.displayName="DropDownSelect",n.__docgenInfo={description:"",displayName:"DropDownSelect",props:{id:{defaultValue:null,description:"ID for the dropdown",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"What question are we asking?",name:"label",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"Which value is auto selected",name:"selected",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"What to show in the dropdown",name:"options",required:!0,type:{name:"DropDownSelectOptionsProps[]"}},onChange:{defaultValue:null,description:"A function tfor what happnens if the select is changed (totally optional)",name:"onChange",required:!1,type:{name:"(e: any) => void"}},hideLabel:{defaultValue:{value:"false"},description:"Hide label, but visible for screen readers (totally optional)",name:"hideLabel",required:!1,type:{name:"boolean"}}}}}catch{}export{n as D};
