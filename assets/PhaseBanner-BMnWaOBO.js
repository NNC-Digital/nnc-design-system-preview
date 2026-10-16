import{s as a,r as i,H as n,R as t}from"./iframe-BNpMeywT.js";import{M as o}from"./MaxWidthContainer-DfAz8Sy4.js";const s=a.div`
    background: ${e=>e.$isHome?e.theme.theme_vars.theme_name==="Memorial theme North"||e.theme.theme_vars.theme_name==="Memorial theme West"?e.theme.theme_vars.colours.grey_dark:e.theme.theme_vars.colours.action:"transparent"};
`,m=a(o)`
    padding-top:  ${e=>e.$isHome?"5px":"10px"};
    padding-bottom: ${e=>e.$isHome?"5px":"10px"};
    border-bottom: ${e=>e.$isHome?"none":"1px solid "+e.theme.theme_vars.colours.grey+"80"};
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: flex-start;
    margin: ${e=>e.$isHome?"":"0 auto !important"};
    color: ${e=>e.$isHome?e.theme.theme_vars.colours.white:e.theme.theme_vars.colours.black};
`,d=a.span`
    vertical-align: middle;
    padding: 5px;

    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}){

    }
`,l=a.div`
    padding: 5px 0;

    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}){
        padding: 0;
    }
`,c=a.div`
    font-weight: bold;
    padding: 2px 7px;
    margin-right: 5px;
    background: ${e=>e.$isHome?e.theme.theme_vars.colours.white:e.theme.theme_vars.colours.action+"1A"};
    float: left;
    vertical-align: middle;
    color: ${e=>e.theme.theme_vars.colours.black};
    border-radius: 4px;

    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}){
        display: inline-block;
        float: none;
        margin-right: 10px;
        vertical-align: sub;
    }
`,r=({isHome:e=!1})=>(i.useContext(n),t.createElement(s,{$isHome:e},t.createElement(m,{noPadding:!0,noBackground:!0,$isHome:e},t.createElement(l,null,t.createElement(c,{$isHome:e},"New website")),t.createElement(d,null,"This site is new and we are improving it every day."))));try{r.displayName="PhaseBanner",r.__docgenInfo={description:"",displayName:"PhaseBanner",props:{isHome:{defaultValue:{value:"false"},description:"",name:"isHome",required:!1,type:{name:"boolean"}}}}}catch{}export{r as P};
