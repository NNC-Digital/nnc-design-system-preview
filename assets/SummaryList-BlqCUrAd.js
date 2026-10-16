import{s as t,R as a}from"./iframe-BNpMeywT.js";import{s as o}from"./index-ClUSzdlr.js";import{H as d}from"./Heading-C7kzbY1R.js";const h=t.div`
  border: ${e=>e.$hasHeading?`1px solid ${e.theme.theme_vars.colours.grey}`:"none"};
  margin: ${e=>e.$hasMargin?e.theme.theme_vars.spacingSizes.medium:0} 0;
`,c=t.div`
  background-color: ${e=>e.theme.theme_vars.colours.grey_light};
  width: 100%;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small};
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.medium};

  h3 {
    margin: 0;
  }
`,p=t.dl`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`,u=t.div`
  border-bottom: ${e=>e.$hasBorders?`1px solid ${e.theme.theme_vars.colours.grey}`:"none"};
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: table-row;
  }

  @media print {
    display: table-row;
    border-bottom: none;
  }
`,g=t.dt`
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
  font-weight: bold;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: table-cell;
    padding: ${e=>e.theme.theme_vars.spacingSizes.small};
    width: 30%;
    vertical-align: middle;
  }

  @media print {
    display: table-cell;
    width: 30%;
  }
`,y=t.dd`
  overflow-wrap: break-word;
  width: 100%;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: table-cell;
    width: 70%;
    padding: ${e=>e.theme.theme_vars.spacingSizes.small};
  }

  @media print {
    display: table-cell;
    width: 70%;
  }
`,i=({terms:e,hasMargin:s=!0,hasBorders:n=!0,heading:r})=>a.createElement(h,{$hasHeading:r,$hasMargin:s},r&&a.createElement(c,null,a.createElement(d,{level:3,text:r})),a.createElement(p,{"data-testid":"SummaryList"},e.map((m,l)=>a.createElement(u,{key:l,$hasBorders:n},a.createElement(g,null,m.term),a.createElement(y,{dangerouslySetInnerHTML:{__html:o(m.detail)}})))));try{i.displayName="SummaryList",i.__docgenInfo={description:"",displayName:"SummaryList",props:{terms:{defaultValue:null,description:"An array of SummaryRowProps",name:"terms",required:!0,type:{name:"SummaryRowProps[]"}},hasMargin:{defaultValue:{value:"true"},description:"Option to remove margin (default is true)",name:"hasMargin",required:!1,type:{name:"boolean"}},hasBorders:{defaultValue:{value:"true"},description:"Option to show borders (default is true)",name:"hasBorders",required:!1,type:{name:"boolean"}},heading:{defaultValue:null,description:"Optional heading for the summary list",name:"heading",required:!1,type:{name:"string"}}}}}catch{}export{i as S};
