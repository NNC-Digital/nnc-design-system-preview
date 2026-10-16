import{s as a,R as t}from"./iframe-BNpMeywT.js";const o=a.div`
  max-width: 750px;
  margin: 20px 0px;
  margin-top: 65px;
  padding: 25px;
  padding-top: 0;
  background: ${e=>e.$isWarning?e.theme.theme_vars.colours.focus:e.theme.theme_vars.colours.secondary}80;
  border-radius: ${e=>e.theme.theme_vars.border_radius};

  a {
    color: ${e=>e.theme.theme_vars.colours.black} !important;
  }
`,s=a.div`
  background: ${e=>e.$isWarning?e.theme.theme_vars.colours.focus:e.theme.theme_vars.colours.secondary};
  position: relative;
  margin-left: -25px;
  margin-bottom: 0;
  top: -20px;
  display: inline-block;
  padding: 8px 25px;
  font-weight: 600;
  font-size: 24px;
  font-size: 1.3rem;
  line-height: 1.25;
  border-radius: ${e=>e.theme.theme_vars.border_radius};

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    font-size: 36px;
    font-size: 1.5rem;
    max-width: 960px;
  }
`,l=a.div``,r=({title:e,isWarning:n=!1,children:i})=>t.createElement(o,{$isWarning:n,"data-testid":"WarningText"},t.createElement(s,{$isWarning:n},e),t.createElement(l,null,i));try{r.displayName="WarningText",r.__docgenInfo={description:"Display text as a highlight or warning with a title",displayName:"WarningText",props:{title:{defaultValue:null,description:"The title of the warning",name:"title",required:!0,type:{name:"string"}},isWarning:{defaultValue:{value:"false"},description:"Optional to change the colour from a secondary colour to warning",name:"isWarning",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The WarningText contents",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{r as W};
