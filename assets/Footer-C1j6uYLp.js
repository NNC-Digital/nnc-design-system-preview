import{s as r,r as c,H as h,R as t}from"./iframe-BNpMeywT.js";import{M as p}from"./MaxWidthContainer-DfAz8Sy4.js";import{G as u}from"./logo-CIk8PYf1.js";import{W as d}from"./logo-FWGfQOt2.js";import{N as x}from"./logo-CzpEqyTh.js";import{S as _}from"./Icon-DbMPhXfQ.js";import{S as v}from"./Icon-DRo6U2FY.js";import{S as w}from"./Icon-2pAw7FvT.js";import{S as f}from"./Icon-ClDmJrXr.js";import{S as k}from"./Icon-BaVIv-U0.js";import{T as g}from"./Icon-CSNlv73Q.js";import{N as b}from"./Icon-BxouQimN.js";const y=r.footer`
  background-color: ${e=>e.theme.theme_vars.colours.black};
  padding: 25px 0;
`,$=r(p)`
  color: ${e=>e.theme.theme_vars.colours.white};
`,E=r.ul`
  padding: 0px;
  margin-left: 0;
  margin-bottom: 25px;
  list-style-type: none;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    margin-bottom: 0px;
  }
`,S=r.li`
  display: inline-block;
  left: 0;
  padding-right: 0;
  margin-right: 0;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
  width: 100%;
  
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    width: auto;
    margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.medium};
    margin-right: ${e=>e.theme.theme_vars.spacingSizes.small};
  }
`,F=r.ul`
  margin: 5px 0 15px 0;
  list-style: none;
`,a=r.li`
  left: 0;
  display: inline-block;
`,i=r.a`
  display: block;
  padding: ${e=>e.theme.theme_vars.spacingSizes.extra_small};

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: 2px transparent solid;
    border-radius: 4px;
    box-shadow: ${e=>e.theme.theme_vars.colours.focus} 0 0 0 3px;
    transition: box-shadow 0.3s ease 0s;

    svg {
      path {
        fill: ${e=>e.theme.theme_vars.colours.focus} !important;
      }
    }
  }
  &:active {
    opacity: 1;
    border-radius: 4px;
    box-shadow: ${e=>e.theme.theme_vars.colours.focus} 0 0 0 3px;
    transition: box-shadow 0.3s ease 0s;

    svg {
      path {
        fill: ${e=>e.theme.theme_vars.colours.focus} !important;
      }
    }
  }
`,L=r.a`
  display: block;
  ${e=>e.theme.linkStyles}
  color: ${e=>e.theme.theme_vars.colours.white};
  font-weight: 400;
  padding: ${e=>`${e.theme.theme_vars.spacingSizes.small} ${e.theme.theme_vars.spacingSizes.extra_small}`};

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: inline-block;
  }

  &:hover {
    ${e=>e.theme.linkStylesHover}
    color: ${e=>e.theme.theme_vars.colours.white};
    opacity: 0.8;
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
    box-shadow: 0px -2px 0px 0px ${e=>e.theme.theme_vars.colours.white} inset;
    -webkit-box-shadow: 0px -2px 0px 0px ${e=>e.theme.theme_vars.colours.white} inset;
    -moz-box-shadow: 0px -2px 0px 0px ${e=>e.theme.theme_vars.colours.white} inset;
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  &:focus-visible {
    ${e=>e.theme.linkStylesFocus}
    box-shadow: 0px -2px 0px 0px ${e=>e.theme.theme_vars.colours.white} inset;
    -webkit-box-shadow: 0px -2px 0px 0px ${e=>e.theme.theme_vars.colours.white} inset;
    -moz-box-shadow: 0px -2px 0px 0px ${e=>e.theme.theme_vars.colours.white} inset;
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
    box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.white} inset;
    -webkit-box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.white} inset;
    -moz-box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.white} inset;
  }
`,I=r.p``,z=r.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`,N=r.div`
  svg {
    width: 240px;
    height: auto;
    vertical-align: middle;
  }
`,s=({footerLinksArray:e=null,year:n=new Date().getFullYear()})=>{const o=c.useContext(h);return t.createElement(y,{"data-testid":"Footer"},t.createElement($,{noBackground:!0},t.createElement(z,null,t.createElement("div",null,e&&t.createElement(E,null,e.map((l,m)=>t.createElement(S,{key:m},t.createElement(L,{key:l.title,href:l.url,title:l.title},l.title)))),t.createElement(F,null,o.theme_vars.twitter_link&&t.createElement(a,null,t.createElement(i,{href:o.theme_vars.twitter_link,title:"View our Twitter feed"},t.createElement(w,{colourFill:o.theme_vars.colours.white}))),o.theme_vars.facebook_link&&t.createElement(a,null,t.createElement(i,{href:o.theme_vars.facebook_link,title:"View our Facebook page"},t.createElement(v,{colourFill:o.theme_vars.colours.white}))),o.theme_vars.instagram_link&&t.createElement(a,null,t.createElement(i,{href:o.theme_vars.instagram_link,title:"View our Instagram feed"},t.createElement(_,{colourFill:o.theme_vars.colours.white}))),o.theme_vars.youtube_link&&t.createElement(a,null,t.createElement(i,{href:o.theme_vars.youtube_link,title:"View our YouTube channel"},t.createElement(k,{colourFill:o.theme_vars.colours.white}))),o.theme_vars.linkedin_link&&t.createElement(a,null,t.createElement(i,{href:o.theme_vars.linkedin_link,title:"View our LinkedIn page"},t.createElement(f,{colourFill:o.theme_vars.colours.white}))),o.theme_vars.tiktok_link&&t.createElement(a,null,t.createElement(i,{href:o.theme_vars.tiktok_link,title:"View our TikTok page"},t.createElement(g,{colourFill:o.theme_vars.colours.white}))),o.theme_vars.nextdoor_link&&t.createElement(a,null,t.createElement(i,{href:o.theme_vars.nextdoor_link,title:"View our Nextdoor page"},t.createElement(b,{colourFill:o.theme_vars.colours.white})))),t.createElement(I,null,"© ",o.full_name," Council ",n)),t.createElement(N,{className:o.theme_vars.theme_name==="Memorial theme North"||o.theme_vars.theme_name==="Memorial theme West"?"black_logo":""},o.cardinal_name==="north"?t.createElement(x,null):o.cardinal_name==="west"?t.createElement(d,null):t.createElement(u,null)))))};try{s.displayName="Footer",s.__docgenInfo={description:"",displayName:"Footer",props:{footerLinksArray:{defaultValue:{value:"null"},description:"An array of links for the bottom of the footer, for things like cookie and privacy policies",name:"footerLinksArray",required:!1,type:{name:"FooterLinkProp[]"}},year:{defaultValue:{value:"new Date().getFullYear()"},description:"The year for the copyright",name:"year",required:!1,type:{name:"string"}}}}}catch{}export{s as F};
