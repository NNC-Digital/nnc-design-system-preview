import{s as t,R as n}from"./iframe-BNpMeywT.js";const d=(e,a)=>a||e?0:"50px",m=t.div`
  background: ${e=>e.$noBackground?"transparent":e.theme.cardinal_name==="north"?e.theme.theme_vars.colours.grey_light+"7a":e.theme.theme_vars.colours.white};
  overflow: ${e=>e.$noPadding?"hidden":"visible"};
  padding-bottom: ${({$noBackground:e,$noPadding:a})=>d(e,a)};
`,h=t.div`
  ${e=>e.theme.fontStyles}
  padding-right: ${e=>e.theme.theme_vars.spacingSizes.medium};
  padding-left: ${e=>e.theme.theme_vars.spacingSizes.medium};
  overflow: ${e=>e.$overflowVisible?"visible":"hidden"};

  pre {
    font-family: monospace;
    white-space: pre;
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    margin-right: ${e=>e.theme.theme_vars.spacingSizes.large};
    margin-left: ${e=>e.theme.theme_vars.spacingSizes.large};
    padding-left: ${e=>e.theme.theme_vars.spacingSizes.small};
    padding-right: ${e=>e.theme.theme_vars.spacingSizes.small};
  }

  @media screen and (min-width: calc(${e=>e.theme.theme_vars.breakpoints.l} + 60px)) {
    margin-right: auto;
    margin-left: auto;
    padding-left: ${e=>e.theme.theme_vars.spacingSizes.small};
    padding-right: ${e=>e.theme.theme_vars.spacingSizes.small};
    max-width: ${e=>e.theme.theme_vars.breakpoints.l};
  }
`,i=({children:e,classes:a,noBackground:r=!1,noPadding:s=!1,overflowVisible:o=!1,...l})=>n.createElement(m,{$noBackground:r,$noPadding:s},n.createElement(h,{className:a,$overflowVisible:o,...l},e));try{i.displayName="MaxWidthContainer",i.__docgenInfo={description:"A container for holding the main content of a page",displayName:"MaxWidthContainer",props:{classes:{defaultValue:null,description:"Any unique class names to apply to the page container outer div",name:"classes",required:!1,type:{name:"string"}},noBackground:{defaultValue:{value:"false"},description:"Remove background colour",name:"noBackground",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:{value:"false"},description:"Remove bottom padding",name:"noPadding",required:!1,type:{name:"boolean"}},overflowVisible:{defaultValue:{value:"false"},description:"Allow overflow to be visible in inner div (only makes sense with padding allowed)",name:"overflowVisible",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The MaxWidthContainer contents",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{i as M};
