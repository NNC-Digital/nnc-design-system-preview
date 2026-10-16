import{s as r,R as t}from"./iframe-BNpMeywT.js";import{H as l}from"./Heading-C7kzbY1R.js";const d=r.div`
  border: solid 4px;
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  border-color: ${e=>e.$alertType==="alert"?e.theme.theme_vars.colours.negative:e.$alertType==="warning"?e.theme.theme_vars.colours.focus:e.$alertType==="positive"?e.theme.theme_vars.colours.positive:e.$alertType==="london_bridge"?e.theme.theme_vars.colours.black:e.theme.theme_vars.colours.negative};

  padding: 15px;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  margin-top: ${e=>e.$hasTopSpacing?"25px":"0"};

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    padding: 20px;
    border-width: 6px;
  }
`,s=r.div`
  width: 100%;

  p {
    margin-bottom: 15px;

    &:last-of-type {
      margin-bottom: 0;
    }
    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
      min-width: 100%;
    }
  }

  h2 {
    margin-top: 0;
    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
      min-width: 100%;
    }
  }
`,a=({title:e,hasTopSpacing:n=!1,alertType:i="alert",children:o})=>t.createElement(d,{$alertType:i,"data-testid":"AlertBannerService",$hasTopSpacing:n},t.createElement(s,{"data-testid":"AlertBannerServiceInner"},e?.trim()&&t.createElement(l,{text:e}),o));try{a.displayName="AlertBannerService",a.__docgenInfo={description:`A banner to be displayed at the top of a page before the main content
to draw the viewer's attention to an alert notice`,displayName:"AlertBannerService",props:{title:{defaultValue:null,description:"The optional title of this alert banner",name:"title",required:!1,type:{name:"string"}},hasTopSpacing:{defaultValue:{value:"false"},description:"Set to true for additional margin above the alert banner",name:"hasTopSpacing",required:!1,type:{name:"boolean"}},alertType:{defaultValue:{value:"alert"},description:"The type of alert banner",name:"alertType",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"warning"'},{value:'"positive"'},{value:'"london_bridge"'}]}},children:{defaultValue:null,description:"All child content for the alert banner",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}export{a as A};
