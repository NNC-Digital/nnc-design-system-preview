import{s as o,R as i}from"./iframe-BNpMeywT.js";import{H as l}from"./Heading-C7kzbY1R.js";import{D as c}from"./DynamicIcon-C0gKm0XE.js";const s=o.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    vertical-align: middle;
    display: inline-block;
    width: calc(100% - 65px);
    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
      width: calc(100% - 85px);
    }
  }

  .service-icon-hover {
    display: none;
  }

  &:hover {
    .service-icon {
      display: ${e=>e.$hasHover?"none":"block"};
    }
    .service-icon-hover {
      display: ${e=>e.$hasHover?"block":"none"};
    }
  }
`,a=({level:e=2,text:t,icon:n,hasHover:r=!1})=>i.createElement(s,{"data-testid":"HeadingWithIcon",$hasHover:r},i.createElement(c,{icon:n,level:e}),i.createElement(l,{text:t,level:e}));try{a.displayName="HeadingWithIcon",a.__docgenInfo={description:"A Heading With an Icon - used for service landing pages",displayName:"HeadingWithIcon",props:{level:{defaultValue:{value:"2"},description:"What level of heading is this?",name:"level",required:!1,type:{name:"number"}},text:{defaultValue:null,description:"The text of the title",name:"text",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"The icon",name:"icon",required:!0,type:{name:"string"}},hasHover:{defaultValue:{value:"false"},description:"Should there be a hover effect on the icon",name:"hasHover",required:!1,type:{name:"boolean"}}}}}catch{}export{a as H};
