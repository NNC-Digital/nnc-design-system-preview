import{s as a,r as c,R as t}from"./iframe-BNpMeywT.js";import{V as u}from"./style-helpers-0zitJ_SJ.js";import{I as h}from"./Input-B9dK2O81.js";const p=a.div`
  display: block;

  input[type='text'] {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    flex-grow: 1;
    margin-bottom: 0;
  }
`,b=a.label`
  font-weight: bold;
  font-family: ${e=>e.theme.theme_vars.fontstack};
  ${e=>e.hasHiddenLabel?u:`display: inline-block; padding-bottom: ${e.theme.theme_vars.spacingSizes.small}`}
`,f=a.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
`,g=a.input`
  flex-grow: 0;
  cursor: pointer;
  margin: 0;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small};
  background: ${e=>e.isLight?e.theme.theme_vars.colours.action:e.theme.theme_vars.colours.grey_darkest};
  color: ${e=>e.theme.theme_vars.colours.white};
  border: 1px solid transparent;
  border-top-right-radius: calc(${e=>e.theme.theme_vars.border_radius} * 2);
  border-bottom-right-radius: calc(${e=>e.theme.theme_vars.border_radius} * 2);
  text-align: center;
  height: 2.28rem;
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    height: 2.6rem;
  }

  &:hover {
    background: ${e=>e.isLight?e.theme.theme_vars.colours.action_dark:e.theme.theme_vars.colours.black};
  }

  &:focus {
    outline: none;
    background: ${e=>e.theme.theme_vars.colours.focus};
    svg {
      path {
        fill: ${e=>e.theme.theme_vars.colours.black};
      }
    }
  }

  &:active {
    transform: translateY(1px);
    background-color: ${e=>e.theme.theme_vars.colours.focus};
    box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black};
    border-top-color: ${e=>e.theme.theme_vars.colours.black};
    border-bottom-color: transparent;
  }
`,l=({method:e,path:s,label:o,hasHiddenLabel:i=!0,fieldName:n,placeholder:m,searchText:d,id:r})=>(r||(r=c.useId()),t.createElement(p,{"data-testid":"CustomSearch"},t.createElement("form",{method:e,action:s,"aria-label":o},t.createElement("div",{role:"search"},t.createElement(b,{htmlFor:r,$hasHiddenLabel:i},o),t.createElement(f,null,t.createElement(h,{name:n,placeholder:m,id:r}),t.createElement(g,{type:"submit",value:d}))))));try{l.displayName="CustomSearch",l.__docgenInfo={description:"",displayName:"CustomSearch",props:{fieldName:{defaultValue:null,description:"Field name for search box",name:"fieldName",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"The search box id",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The search box label",name:"label",required:!0,type:{name:"string"}},hasHiddenLabel:{defaultValue:{value:"true"},description:"Should the label be visible",name:"hasHiddenLabel",required:!1,type:{name:"boolean"}},method:{defaultValue:null,description:"Form submission method",name:"method",required:!0,type:{name:"string"}},path:{defaultValue:null,description:"Where to submit the form",name:"path",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"Optional placeholder text",name:"placeholder",required:!1,type:{name:"string"}},searchText:{defaultValue:null,description:"The search button text",name:"searchText",required:!0,type:{name:"string"}}}}}catch{}export{l as C};
