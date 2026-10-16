import{s as o,R as t}from"./iframe-BNpMeywT.js";import{S as s}from"./SBPadding-D5LoLA9q.js";import"./preload-helper-PPVm8Dsz.js";const n=o.div`
  ${e=>e.theme.fontStyles}
  display: block;
`,c=o.label`
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: 0 !important;
    white-space: nowrap !important;
`,i=o.input`

    margin-top: 0;
    margin-bottom: 25px;
    padding: 5px;
    border: 0;
    border-radius: ${e=>e.theme.theme_vars.border_radius};
    display: block;

    &:focus {
        outline: none;
        box-shadow: ${e=>e.theme.theme_vars.colours.focus} 0 0 0 3px;
        transition: box-shadow 0.3s ease 0s;
    }

`,d=o.button`
  background-color: ${e=>e.theme.theme_vars.border_radius};
  background-image
`,a=()=>t.createElement(n,{"data-testid":"SearchHeader"},t.createElement(c,{htmlFor:"searchHeader"},"Search"),t.createElement(i,{type:"text",id:"searchHeader",name:"input-autocomplete",placeholder:"Search"}),t.createElement(d,{type:"submit"},"Search"));try{a.displayName="SearchHeader",a.__docgenInfo={description:"",displayName:"SearchHeader",props:{}}}catch{}const u={title:"Library/structure/Search header",component:a,parameters:{status:{type:"stable"}}},p=e=>t.createElement(s,null,t.createElement(a,{...e})),r=p.bind({});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <SBPadding>
    <SearchHeader {...args} />
  </SBPadding>`,...r.parameters?.docs?.source}}};const b=["ExampleSearchHeader"];export{r as ExampleSearchHeader,b as __namedExportsOrder,u as default};
