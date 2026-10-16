import{s as t,R as a}from"./iframe-BNpMeywT.js";const o=t.div`
    vertical-align: middle;
    margin: 5px 0;
    display: inline-block;

    @media (max-width: 40.0525em) {
            vertical-align:baseline
    }




`,s=t.div`
    display: inline-block;
    vertical-align: middle;
    text-transform: lowercase;
    margin: 0 3px;
    font-size: 80%;
`,d=t.span`
    margin: 0 5px;
    display: inline-block;
    position: relative;
    border: 1px solid ${e=>e.theme.theme_vars.colours.grey_darkest};
    border-radius: 5px;
    background-color: ${e=>e.theme.theme_vars.colours.grey_light};
    padding: 3px 6px 3px 17px;
    font-size: 80%;

  @media (max-width: 40.0525em) {
      /* background: none; */
      border: 2px solid ${e=>e.theme.theme_vars.colours.grey_darkest};
  }
`,p=t.span`
  display: block;
  display: inline-block;
  margin-left: 0;
  margin-left: 5px;
`,m=t.button`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 8px;
    border-radius: 5px;
    font-weight: bold;
    font-family: "nta",arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 700;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    background: none;
    border: 0;
    display: inline-block;
    border: 1px solid transparent;
    font-size: 80%;
    line-height: 0.85;

  &:focus {
    -webkit-box-shadow: inset 0 0 0 2px;
    box-shadow: inset 0 0 0 2px;
    border: solid 1px ${e=>e.theme.theme_vars.colours.grey_darkest};
    outline: 3px solid ${e=>e.theme.theme_vars.colours.focus};
  }
`,l=({index:e,preposition:n,label:i,value:c,param:u,clickHandler:r})=>a.createElement(o,{"data-testid":"RemovableTag"},e>0&&n&&a.createElement(s,null,n),a.createElement(d,null,a.createElement(p,null,i),a.createElement(m,{"aria-label":`Remove filter ${i}`,onClick:r},"x")));try{l.displayName="RemovableTag",l.__docgenInfo={description:"",displayName:"RemovableTag",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},preposition:{defaultValue:null,description:"",name:"preposition",required:!1,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},param:{defaultValue:null,description:"",name:"param",required:!1,type:{name:"string"}},clickHandler:{defaultValue:null,description:"",name:"clickHandler",required:!1,type:{name:"Function"}}}}}catch{}export{l as R};
