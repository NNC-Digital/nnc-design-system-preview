import{s as o,r as m,H as s,R as t}from"./iframe-BNpMeywT.js";import{S as c,a as p}from"./SignpostLinksList-CpZ1blsw.js";import{P as u}from"./PostCodeSearch-Bb08xUFW.js";import{B as h}from"./Button-S36CQVVg.js";import{L as d}from"./LinkIcon-C1ACGYut.js";const f=o.div`
    ${e=>e.theme.fontStyles}
    max-width: 500px;
    border-radius: ${e=>e.theme.theme_vars.border_radius};
    padding: 20px;
    background-color: ${e=>e.theme.theme_vars.colours.grey_light};


    p:first-of-type {
        margin-top: 0;
        margin-bottom: 15px;
    }
    p:last-of-type {
        margin-bottom: 0 !important;
    }

    width: 100%;
    margin-left: -15px;
    padding: 15px;

    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}){
        margin-left: 0;
        padding: 20px;
        max-width: calc(100% - 40px);
    }
`,g=o.p`

`,_=o.p`
    margin-top: 25px;
    margin-bottom: 0;
`,x=o.div`
    svg {
        fill: ${e=>e.theme.theme_vars.colours.white};
        margin-right: 5px;
        vertical-align: bottom;
    }
    &:focus-within {
        svg {
            fill: ${e=>e.theme.theme_vars.colours.black};
        }
    }
`,i=({signpostLinksArray:e,TopLineText:l="Select your local area for more information:",otherCouncilLink:r})=>{const a=m.useContext(s),n=r||a.theme_vars.other_council_link;return t.createElement(t.Fragment,null,e.length>1?t.createElement(f,null,t.createElement(g,null,l),t.createElement(c,{signpostLinksArray:e}),t.createElement(u,{otherCouncilLink:n,signPostLinks:e}),(r||a.theme_vars.other_council_link)&&t.createElement(_,null,"If your area isn't listed, you may be a resident of ",t.createElement(p,{href:n,title:a.theme_vars.other_council_name+" (this link will take you to an external website)"},a.theme_vars.other_council_name),".")):t.createElement(x,null,t.createElement(h,{url:e[0].url,title:e[0].areaName+" (this link will take you to an external website)"},t.createElement(d,null),e[0].cta_text?e[0].cta_text:e[0].areaName)))};try{i.displayName="SignpostLinks",i.__docgenInfo={description:"",displayName:"SignpostLinks",props:{TopLineText:{defaultValue:{value:"Select your local area for more information:"},description:"Optional override for the top line of text",name:"TopLineText",required:!1,type:{name:"string"}},signpostLinksArray:{defaultValue:null,description:"An array of the SignpostLinks",name:"signpostLinksArray",required:!0,type:{name:"SignpostLinkProp[]"}},otherCouncilLink:{defaultValue:null,description:"Optional, but recommended - a link to send the user to the other council's (West or North) specific service page, defaults to the homepage",name:"otherCouncilLink",required:!1,type:{name:"string"}}}}}catch{}export{i as S};
