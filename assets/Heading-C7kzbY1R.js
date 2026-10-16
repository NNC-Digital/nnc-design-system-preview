import{s as a,R as i}from"./iframe-BNpMeywT.js";const m=a.h1`
    color: ${e=>e.theme.theme_vars.colours.black};
    margin-left: 0;
    font-weight: 700;
    font-family: ${e=>e.theme.theme_vars.fontstack};
    margin-bottom: 20px;

    font-size: 32px;
    font-size: 2rem;
    line-height: 1.1;

    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}){
        font-size: 44px;
        font-size: 2.6rem;
        max-width: 960px;
        margin-bottom: 30px;
    }
`,r=a.h2`
    color: ${e=>e.theme.theme_vars.colours.black};
    font-weight: 700;
    line-height: 1;
    font-family: ${e=>e.theme.theme_vars.fontstack};
    margin-top: 25px;
    margin-bottom: 15px;

    font-size: 24px;
    font-size: 1.5rem;
    line-height: 1.25;

    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}){
        font-size: 36px;
        font-size: 1.75rem;
        max-width: 960px;
    }
`,h=a.h3`
    color: ${e=>e.theme.theme_vars.colours.black};
    font-weight: 600;
    line-height: 1;
    font-family: ${e=>e.theme.theme_vars.fontstack};
    margin-top: 25px;
    margin-bottom: 15px;

    font-size: 24px;
    font-size: 1.3rem;
    line-height: 1.25;

    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}){
        font-size: 36px;
        font-size: 1.5rem;
        max-width: 960px;
    }
`,s=a.h4`
    color: ${e=>e.theme.theme_vars.colours.black};
    line-height: 1;
    font-family: ${e=>e.theme.theme_vars.fontstack};
    margin-top: 25px;
    margin-bottom: 15px;

    font-weight: 600;
    line-height: 1;
    font-family: ${e=>e.theme.theme_vars.fontstack};
`,o=({level:e=2,text:t,...n})=>e===1?i.createElement(m,{...n},t):e===2?i.createElement(r,{...n},t):e===3?i.createElement(h,{...n},t):e===4?i.createElement(s,{...n},t):null;try{o.displayName="Heading",o.__docgenInfo={description:"A heading of different levels",displayName:"Heading",props:{level:{defaultValue:{value:"2"},description:"What level of heading is this?",name:"level",required:!1,type:{name:"number"}},text:{defaultValue:null,description:"WThe text of the title",name:"text",required:!0,type:{name:"string"}}}}}catch{}export{o as H};
