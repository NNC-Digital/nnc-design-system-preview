import{s as a,R as t}from"./iframe-BNpMeywT.js";import{L as o}from"./LazyImage-CiqbweeC.js";const s=a.div`
    position: relative;
    margin-bottom: 25px;

    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}){
        max-width: 800px;
    }
`,d=a.img`
    width: 100%;
    height: auto;

    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}){
        max-width: 800px;
    }
`,c=a.small`
    text-align: center;
    color: ${e=>e.theme.theme_vars.colours.gray_dark};
    font-size: 14px;
    font-size: 0.8rem;
    line-height: 1.3;
    margin: 0 auto;
    display: block;
    &:hover {
        cursor: default;
    }

    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}){
        font-size: 16px;
        font-size: 1rem;
        max-width: 800px;
        line-height: 1.4;
    }
`,n=({image1440x810:e,image144x81:l,imageAltText:i,imageCaption:r})=>t.createElement(s,null,t.createElement(o,{src:e,placeholder:l,visibilitySensorProps:{partialVisibility:!0}},m=>t.createElement(t.Fragment,null,t.createElement(d,{src:m,alt:i||""}),r&&t.createElement(c,{itemProp:"copyrightHolder"},r))));try{n.displayName="NewsArticleImage",n.__docgenInfo={description:"An image for a news article",displayName:"NewsArticleImage",props:{image1440x810:{defaultValue:null,description:"The url of the image",name:"image1440x810",required:!0,type:{name:"string"}},image144x81:{defaultValue:null,description:"The url of the image in 10x smaller for lazy loading",name:"image144x81",required:!0,type:{name:"string"}},imageAltText:{defaultValue:null,description:"Optional alt text for the image - this should only be included if the image contains content that is important to users and not purely decorative",name:"imageAltText",required:!1,type:{name:"string"}},imageCaption:{defaultValue:null,description:"An optional caption to be presented underneath the image",name:"imageCaption",required:!1,type:{name:"string"}}}}}catch{}export{n as N};
