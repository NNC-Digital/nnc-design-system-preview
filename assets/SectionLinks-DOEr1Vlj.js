import{s as r,R as t}from"./iframe-BNpMeywT.js";import{H as d}from"./Heading-C7kzbY1R.js";import{L as p}from"./LazyImage-CiqbweeC.js";import{R as u}from"./Row-DErQ7Ddw.js";import{C as g}from"./Column-Dpu6NTYh.js";const y=r.div``,f=r(d)`
  background: ${e=>e.theme.cardinal_name==="north"?e.theme.theme_vars.colours.grey:e.theme.theme_vars.colours.grey_light};
  padding: 10px 15px;
  width: 100%;
  margin-bottom: 15px;
  max-width: none !important;
  border-radius: ${e=>e.theme.theme_vars.border_radius};

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 25px;
  }
`,b=r.a`
  color: ${e=>e.theme.theme_vars.colours.black};
  text-decoration: none !important;
  display: block;
  padding: ${e=>e.theme.theme_vars.spacingSizes.medium};
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  width: 100%;
  height: 100%;

  &:hover,
  &:focus {
    background: ${e=>e.theme.cardinal_name==="north"?e.theme.theme_vars.colours.grey+"7a":e.theme.theme_vars.colours.grey_light};

    p:first-of-type {
      color: ${e=>e.theme.theme_vars.colours.action_dark};
      text-decoration-style: dotted;
    }
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    transform: translate(3px);
    box-shadow: 0px -2px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset !important;
    -webkit-box-shadow: 0px -2px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset !important;
    -moz-box-shadow: 0px -2px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset !important;
  }
`,_=r.p`
  ${e=>e.theme.linkStyles}
  margin-top: 0;
  margin-bottom: 15px;

  &:hover {
    ${e=>e.theme.linkStylesHover}
  }
`,x=r.p`
  margin: 0;
  color: ${e=>e.theme.theme_vars.colours.black} !important;
  font-weight: 400;
`,i=r.span`
  position: relative;
  padding-top: 56.25%;
  width: 100%;
  display: block;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
  background: ${e=>e.$image?'url("'+e.$image+'") center center / cover no-repeat':""};
`;r.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;const o=({sectionTitle:e,displayTitle:n=!0,sectionSlug:s,pageLinksArray:l,hasImages:m=!1})=>t.createElement(y,{id:s,"data-testid":"SectionLinks"},n?t.createElement(f,{text:e}):t.createElement("br",null),t.createElement(u,{isList:!0},l.map((a,c)=>t.createElement(g,{isList:!0,small:"full",medium:"one-half",large:"one-third",key:c},t.createElement(b,{href:a.url,title:a.title},m&&t.createElement(t.Fragment,null,a.imageLarge?.trim()?t.createElement(p,{placeholder:a.imageSmall,src:a.imageLarge,visibilitySensorProps:{partialVisibility:!0}},h=>t.createElement(i,{$image:h,role:"img","aria-label":a.imageAltText})):t.createElement(i,null)),t.createElement(_,null,a.title),t.createElement(x,null,a.summary))))));try{o.displayName="SectionLinks",o.__docgenInfo={description:"Display a list of links for a section with optional images",displayName:"SectionLinks",props:{sectionTitle:{defaultValue:null,description:"The title of the section",name:"sectionTitle",required:!0,type:{name:"string"}},displayTitle:{defaultValue:{value:"true"},description:"If there is only one section then do not display the title",name:"displayTitle",required:!1,type:{name:"boolean"}},sectionSlug:{defaultValue:null,description:"A url slug for the section title",name:"sectionSlug",required:!0,type:{name:"string"}},pageLinksArray:{defaultValue:null,description:"An array of page links that sit under this section",name:"pageLinksArray",required:!0,type:{name:"PageLinkProp[]"}},hasImages:{defaultValue:{value:"false"},description:"Should the section links have images",name:"hasImages",required:!1,type:{name:"boolean"}}}}}catch{}export{o as S};
