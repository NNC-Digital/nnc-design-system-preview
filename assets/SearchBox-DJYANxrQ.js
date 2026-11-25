import{s as i,R as a}from"./iframe-CAFc311g.js";import"./style-helpers-DpV8nztG.js";import{L as p}from"./LazyImage-D279gvB3.js";import{C as r}from"./Column-DMOuYhYK.js";import{R as g}from"./Row-CGzcJHjh.js";import{B as f}from"./Button-BMYKF9hv.js";import{H as x}from"./Heading-DiI9px6I.js";import{C as y}from"./CustomSearch-BAKo2gOP.js";const d=i.div`
  padding: 0;
  margin: ${e=>e.theme.theme_vars.spacingSizes.medium} 0;
  ${e=>e.theme.fontStyles}

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    background: url('${e=>e.$image}') no-repeat center center;
    background-size: cover;
    padding-top: ${e=>e.$image?"8rem":0};
    padding-bottom: ${e=>e.$image?"8rem":0};
    padding-left: ${e=>e.$image?e.theme.theme_vars.spacingSizes.x_large:0};
    padding-right: ${e=>e.$image?e.theme.theme_vars.spacingSizes.x_large:0};
  }

  h2 {
    text-align: center;
  }
`,_=i.div`
  height: 100%;
  display: flex;
  align-items: flex-end;

  a {
    width: 100%;
    height: 2.28rem;
    padding: 12px !important;
    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
      height: 2.6rem;
    }
  }
`,v=i.div`
  background-color: ${e=>e.theme.cardinal_name==="west"?e.theme.theme_vars.colours.grey_light:e.theme.theme_vars.colours.white};
  padding: ${e=>e.theme.theme_vars.spacingSizes.small};
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${e=>e.theme.theme_vars.border_radius};

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    padding: ${e=>e.theme.theme_vars.spacingSizes.large};
    max-width: ${e=>e.theme.theme_vars.breakpoints.m};
    margin: 0 auto;
  }
`,c=({customSearch:e,imageSmall:l,imageLarge:n,imageAltText:m,searchBoxLink:t,searchBoxLinkIsPrimary:u=!0,title:o})=>{const s=a.createElement(v,null,a.createElement(g,null,o&&a.createElement(r,{small:"full",medium:"full",large:"full"},a.createElement(x,{text:o,level:2})),a.createElement(r,{small:"full",medium:"full",large:t?"two-thirds":"full"},a.createElement(y,{...e})),t&&a.createElement(r,{small:"full",medium:"full",large:"one-third"},a.createElement(_,null,a.createElement(f,{text:t.title,url:t.url,primary:u})))));return a.createElement(a.Fragment,null,n&&l?a.createElement(a.Fragment,null,a.createElement(p,{src:n,placeholder:l,visibilitySensorProps:{partialVisibility:!0}},h=>a.createElement(d,{$image:h,"data-testid":"SearchBox"},s)),m&&a.createElement("span",{role:"img","aria-label":m})):a.createElement(d,{"data-testid":"SearchBox"},s))};try{c.displayName="SearchBox",c.__docgenInfo={description:"",displayName:"SearchBox",props:{customSearch:{defaultValue:null,description:"The Custom Search sub-component props",name:"customSearch",required:!0,type:{name:"CustomSearchProps"}},imageLarge:{defaultValue:null,description:"URL of the hero image (min 400pix high)",name:"imageLarge",required:!1,type:{name:"string"}},imageSmall:{defaultValue:null,description:"URL of the a smaller version of the image for lazy loading",name:"imageSmall",required:!1,type:{name:"string"}},imageAltText:{defaultValue:null,description:"Optional alt text for the image - ideally the image should be decorative only and not require a long description",name:"imageAltText",required:!1,type:{name:"string"}},searchBoxLink:{defaultValue:null,description:"Optional call to action link",name:"searchBoxLink",required:!1,type:{name:"SearchBoxLinkProps"}},searchBoxLinkIsPrimary:{defaultValue:{value:"true"},description:"Is the search box link primary (true) or secondary (false)",name:"searchBoxLinkIsPrimary",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Optional title",name:"title",required:!1,type:{name:"string"}}}}}catch{}export{c as S};
