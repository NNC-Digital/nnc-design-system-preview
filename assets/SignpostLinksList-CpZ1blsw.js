import{s as i,R as n}from"./iframe-BNpMeywT.js";import{L as o}from"./LinkIcon-C1ACGYut.js";const r=i.ul`

    ${t=>t.theme.fontStyles}
    margin: 0 !important;
    padding-left: 10px;
    margin-bottom: 20px !important;
    list-style-type: none;

    li:last-of-type {
        margin-bottom: 0;
    }
`,l=i.li`
    margin-bottom: 10px;
    padding-left: 0 !important;

    &:before {
        content: none !important;
    }
`,m=i.a`
    ${t=>t.theme.linkStyles}

    svg {
        fill: ${t=>t.theme.theme_vars.colours.action};
    }

    &:hover{
        ${t=>t.theme.linkStylesHover}
        svg {
            fill: ${t=>t.theme.theme_vars.colours.action_darl};
        }
    }
    &:focus{
        ${t=>t.theme.linkStylesFocus}
        svg {
            fill: ${t=>t.theme.theme_vars.colours.black};
        }
    }
    &:active{
        ${t=>t.theme.linkStylesActive}
    }
`,p=i.div`
    display: inline-block;
    margin-right: 10px;
    svg {
        vertical-align: middle;
    }
`,a=({signpostLinksArray:t})=>n.createElement(r,null,t.map((e,s)=>n.createElement(l,{key:s},n.createElement(m,{href:e.url,title:e.areaName+" (this link will take you to an external website)"},n.createElement(p,null,n.createElement(o,null)),e.cta_text?e.cta_text:e.areaName))));try{a.displayName="SignpostLinksList",a.__docgenInfo={description:"",displayName:"SignpostLinksList",props:{signpostLinksArray:{defaultValue:null,description:"An array of the SignpostLinks",name:"signpostLinksArray",required:!0,type:{name:"SignpostLinkProp[]"}}}}}catch{}export{a as S,m as a};
