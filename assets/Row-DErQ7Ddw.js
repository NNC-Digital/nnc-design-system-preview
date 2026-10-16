import{s as n,R as o}from"./iframe-BNpMeywT.js";const i=n.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
  margin: 0 -${e=>e.theme.theme_vars.spacingSizes.small};
  border: ${e=>e.$hasBorder?`1px solid ${e.theme.theme_vars.colours.grey}`:"none"};
  list-style: none;
  max-width: none !important;
  min-width: calc(
    100% + ${e=>e.theme.theme_vars.spacingSizes.small} +
      ${e=>e.theme.theme_vars.spacingSizes.small}
  );

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    flex-wrap: ${e=>e.$hasWrap?"wrap":"nowrap"};
  }
`,a=({hasBorder:e=!1,isList:t=!1,hasWrap:r=!0,children:s})=>o.createElement(i,{"data-testid":"Row",$hasBorder:e,$hasWrap:r,as:t?"ul":"div"},s);try{a.displayName="Row",a.__docgenInfo={description:"",displayName:"Row",props:{hasBorder:{defaultValue:{value:"false"},description:`Option to display the border
Should only used for demonstrating grid`,name:"hasBorder",required:!1,type:{name:"boolean"}},isList:{defaultValue:{value:"false"},description:"Is the container an unordered list?",name:"isList",required:!1,type:{name:"boolean"}},hasWrap:{defaultValue:{value:"true"},description:"Option to prevent wrapping",name:"hasWrap",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The contents of the Row (should be Column)",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{a as R};
