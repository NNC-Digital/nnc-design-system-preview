import{s as a,n as r,r as y,H as w,R as t}from"./iframe-BNpMeywT.js";import{M as x}from"./MaxWidthContainer-DfAz8Sy4.js";import{G as c}from"./logo-CIk8PYf1.js";import{N as E}from"./logo-CyCPhMS1.js";import{N as L}from"./logo-CzpEqyTh.js";import{W as h}from"./logo-FWGfQOt2.js";import{S}from"./Searchbar-cozrMXEC.js";const H=e=>{if(e.theme.is_memorial===!0)return r`
      background-color: ${e.theme.theme_vars.colours.grey_darkest};
      border-bottom: none;
      color: ${e.theme.theme_vars.colours.white};
    `;switch(e.theme.cardinal_name){case"north":return r`
        background-color: ${e.theme.theme_vars.colours.white};
        border-bottom: 5px solid ${e.theme.theme_vars.colours.action};
        color: ${e.theme.theme_vars.colours.black};
      `;case"west":return r`
        background-color: ${e.theme.theme_vars.colours.action};
        border-bottom: none;
        color: ${e.theme.theme_vars.colours.white};
      `}},N=a.header`
  font-family: ${e=>e.theme.theme_vars.fontstack};
  padding: 3px 0;
  position: sticky;
  z-index: 1;
  ${H}
`,W=a(x)`
  overflow: visible; // Fix for search suggestions
  display: grid;
  align-items: center;
  grid-template-areas: 'headerlogo headerlinks headersearch';
  @media screen and (max-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    grid-template-areas:
      'headerlogo   headerlinks'
      'headersearch headersearch';
  }
  @media screen and (max-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    grid-template-areas:
      'headerlogo'
      'headerlinks'
      'headersearch';
  }
`,g=()=>r`
    svg {
      width: 240px;
      height: auto;
      vertical-align: middle;
    }
    &.black_logo {
      svg {
        fill: black !important;
        path {
          fill: black !important;
        }
      }
    }
  `,m=a.div`
  ${g}
`,o=a.div`
  ${g}
`,q=a.div`
  grid-area: headerlogo;
`,C=a.a`
  display: inline-block;

  &:hover {
    opacity: 0.8;

    svg {
      opacity: 0.8;
    }
  }
  &:focus {
    outline: none;
    background: ${e=>e.theme.theme_vars.colours.focus};
    box-shadow: 0 0 0 2px ${e=>e.theme.theme_vars.colours.focus}, 0 0 0 4px ${e=>e.theme.theme_vars.colours.black};
    -webkit-box-shadow: 0 0 0 2px ${e=>e.theme.theme_vars.colours.focus}, 0 0 0 4px ${e=>e.theme.theme_vars.colours.black};
    -moz-box-shadow: 0 0 0 2px ${e=>e.theme.theme_vars.colours.focus}, 0 0 0 4px ${e=>e.theme.theme_vars.colours.black};
    transition: box-shadow 0.3s ease 0s;
  }
`,V=e=>{if(e.theme.is_memorial===!0)return r`
      color: ${e.theme.theme_vars.colours.white};
      &:hover {
        color: ${e.theme.theme_vars.colours.white};
        opacity: 0.8;
      }
    `;switch(e.theme.cardinal_name){case"north":return r`
        color: ${e.theme.theme_vars.colours.action};
        &:hover {
          color: ${e.theme.theme_vars.colours.action_dark};
          opacity: 1;
        }
      `;case"west":return r`
        color: ${e.theme.theme_vars.colours.white};
        &:hover {
          color: ${e.theme.theme_vars.colours.white};
          opacity: 0.8;
        }
      `}},T=a.div`
  grid-area: headerlinks;
  text-align: right;
  padding-right: 1em;
  @media screen and (max-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    padding-right: 0;
  }
  @media screen and (max-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    padding-right: 0;
    text-align: center;
  }
`,d=a.a`
  ${e=>e.theme.linkStyles};
  padding: 0 ${e=>e.theme.theme_vars.spacingSizes.small};
  vertical-align: middle;
  margin-top: -10px;

  &:hover {
    ${e=>e.theme.linkStylesHover};
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus};
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }

  display: inline-block;
  padding-bottom: 15px;
  padding-top: 15px;

  ${V}
`,z=a.div`
  grid-area: headersearch;
  padding-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
`,u=({children:e,hideSearchBar:p=!1,homeLink:v="/",hasNewsLink:n=!1,allServicesLink:s="/",isHomepage:f=!1,searchSuggestions:_=[],...k})=>{const l=y.useContext(w),b=(i,$)=>{if($===!0)switch(i){case"north":return t.createElement(o,null,t.createElement(L,null));case"west":return t.createElement(o,null,t.createElement(h,null));default:return t.createElement(o,null,t.createElement(c,null))}else switch(i){case"north":return t.createElement(m,null,t.createElement(E,null));case"west":return t.createElement(o,null,t.createElement(h,null));default:return t.createElement(m,{className:"black_logo"},t.createElement(c,null))}};return t.createElement(t.Fragment,null,t.createElement(N,{...k,"data-testid":"Header"},t.createElement(W,{noBackground:!0},t.createElement(q,null,t.createElement(C,{href:v,title:"Home",id:"logo"},b(l.cardinal_name,l.is_memorial))),(n||s)&&t.createElement(T,null,n&&t.createElement(d,{href:"/news"},"News"),s&&t.createElement(d,{href:f?"#all-services":s+"#all-services"},"All services")),!p&&t.createElement(z,null,t.createElement(S,{isLight:l.cardinal_name==="north",isLarge:!0,submitInfo:{postTo:"/search",params:{type:"search"}},suggestions:_})))))};try{u.displayName="Header",u.__docgenInfo={description:"The header that should appear at the top of every page.",displayName:"Header",props:{hideSearchBar:{defaultValue:{value:"false"},description:"Hide the searchbar, set to true on the search page so there aren't two search inputs.",name:"hideSearchBar",required:!1,type:{name:"boolean"}},homeLink:{defaultValue:{value:"/"},description:"Link to the root of the website that will be used on the logo",name:"homeLink",required:!1,type:{name:"string"}},hasNewsLink:{defaultValue:{value:"false"},description:"Set to true to include a link to /news in the header",name:"hasNewsLink",required:!1,type:{name:"boolean"}},allServicesLink:{defaultValue:{value:"/"},description:"Link to the list of all services displayed at top right (#all-services anchor added to this)",name:"allServicesLink",required:!1,type:{name:"string"}},isHomepage:{defaultValue:{value:"false"},description:"This flag is used to alter the all-services link to an in-page anchor if true",name:"isHomepage",required:!1,type:{name:"boolean"}},searchSuggestions:{defaultValue:{value:"[]"},description:"Array of suggestions for the autocomplete input in the search bar",name:"searchSuggestions",required:!1,type:{name:"string[]"}},children:{defaultValue:null,description:"The Header contents",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{u as H};
