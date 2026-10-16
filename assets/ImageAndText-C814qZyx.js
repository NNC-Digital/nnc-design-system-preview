import{s as n,R as e}from"./iframe-BNpMeywT.js";import{R as s}from"./Row-DErQ7Ddw.js";import{C as a}from"./Column-Dpu6NTYh.js";import{I as d}from"./Image-Dt4XLn7e.js";import{H as c}from"./Heading-C7kzbY1R.js";import{s as r}from"./index-ClUSzdlr.js";const u=n.div`
  display: block;
`,g=n.div`
  h3 {
    margin-bottom: 0;
  }
`,i=n.div`
  @media screen and (min-width: ${t=>t.theme.theme_vars.breakpoints.m}) {
    margin: ${t=>t.theme.theme_vars.spacingSizes.medium} 0;
  }
`,o=({heading:t,textContent:l,image:m})=>e.createElement(u,{"data-testid":"ImageAndText"},e.createElement(s,null,t&&e.createElement(a,{small:"full",medium:"full",large:"full"},e.createElement(g,null,e.createElement(c,{text:t,level:3}))),m?e.createElement(e.Fragment,null,e.createElement(a,{small:"full",medium:"one-third",large:"one-third"},e.createElement(d,{...m})),e.createElement(a,{small:"full",medium:"two-thirds",large:"two-thirds"},e.createElement(i,{dangerouslySetInnerHTML:{__html:r(l)}}))):e.createElement(a,{small:"full",medium:"full",large:"full"},e.createElement(i,{dangerouslySetInnerHTML:{__html:r(l)}}))));try{o.displayName="ImageAndText",o.__docgenInfo={description:"A container for an image and text content, with an optional heading",displayName:"ImageAndText",props:{heading:{defaultValue:null,description:"An optional heading",name:"heading",required:!1,type:{name:"string"}},textContent:{defaultValue:null,description:"The string of html text content",name:"textContent",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"The image, containing the paths, alt text and caption",name:"image",required:!1,type:{name:"ImageProps"}}}}}catch{}export{o as I};
