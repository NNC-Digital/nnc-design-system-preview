import{s as r,R as t}from"./iframe-CAFc311g.js";import{H as a}from"./Heading-DiI9px6I.js";import{M as h}from"./MaxWidthContainer-C1N-QUOI.js";const g=r.div`
  ${e=>e.theme.fontStyles}
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 0;
  padding: 56px 0 48px;
  color: ${e=>e.theme.theme_vars.colours.black};

  section {
    min-width: 0;
    padding: 0 32px;
  }
  section:first-child { padding-left: 0; }
  section + section {
    border-left: calc(${e=>e.theme.theme_vars.border_width_thin} / 2) solid
      ${e=>e.theme.theme_vars.colours.grey};
  }
  p { margin: 0 0 ${e=>e.theme.theme_vars.spacingSizes.small}; }
  address { margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.extra_small}; font-style: normal; }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 32px 0;

    section,
    section:first-child {
      padding: 24px 0;
    }
    section + section {
      border-top: calc(${e=>e.theme.theme_vars.border_width_thin} / 2) solid
        ${e=>e.theme.theme_vars.colours.grey};
      border-left: 0;
    }
  }
`,f=r.a`
  ${e=>e.theme.linkStyles}
  &:hover { ${e=>e.theme.linkStylesHover} }
  &:focus-visible { ${e=>e.theme.linkStylesFocus} }
`,v=r.div``,y=r.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: start;
  font-weight: 400;
  font-size: ${e=>e.theme.theme_vars.fontSizes.extra_small};
  gap: ${e=>e.theme.theme_vars.spacingSizes.small};
  padding: 12px 0;
  border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.grey};

  span {
    min-width: 0;
  }

  span:last-child {
    font-weight: 700;
    text-align: right;
    overflow-wrap: anywhere;
  }
`,_=r.p`
  margin: ${e=>e.theme.theme_vars.spacingSizes.extra_small} 0 0;
  color: ${e=>e.theme.theme_vars.colours.grey_darkest};
`,m=r.a`
  display: block;
  font-size: ${({$email:e,theme:n})=>e?n.theme_vars.fontSizes.extra_small:"inherit"};
  overflow-wrap: anywhere;
  ${e=>e.theme.linkStyles}
  &:hover { ${e=>e.theme.linkStylesHover} }
  &:focus-visible { ${e=>e.theme.linkStylesFocus} }
`,c=({visitDescription:e,visitLink:n,openingHours:d,openingHoursNote:l,address:p,phone:s,email:o})=>t.createElement(h,null,t.createElement(g,{"data-testid":"LeisureCentreVisitInfo"},t.createElement("section",{"aria-label":"Plan your visit"},t.createElement(a,{text:"Plan your visit",level:2}),t.createElement("p",null,e),n&&t.createElement(f,{href:n.url},n.label)),t.createElement("section",{"aria-label":"Opening hours"},t.createElement(a,{text:"Opening hours",level:3}),t.createElement(v,null,d.map(({day:i,hours:u})=>t.createElement(y,{key:i},t.createElement("span",null,i),t.createElement("span",null,u)))),l&&t.createElement(_,null,l)),t.createElement("section",{"aria-label":"Get in touch"},t.createElement(a,{text:"Get in touch",level:3}),t.createElement("address",null,p.map(i=>t.createElement(t.Fragment,{key:i},i,t.createElement("br",null)))),t.createElement(m,{href:`tel:${s.replace(/[^\d+]/g,"")}`},s),t.createElement(m,{$email:!0,href:`mailto:${o}`},o))));try{c.displayName="LeisureCentreVisitInfo",c.__docgenInfo={description:"",displayName:"LeisureCentreVisitInfo",props:{visitDescription:{defaultValue:null,description:"",name:"visitDescription",required:!0,type:{name:"string"}},visitLink:{defaultValue:null,description:"",name:"visitLink",required:!1,type:{name:"{ label: string; url: string; }"}},openingHours:{defaultValue:null,description:"",name:"openingHours",required:!0,type:{name:"LeisureCentreOpeningHour[]"}},openingHoursNote:{defaultValue:null,description:"",name:"openingHoursNote",required:!1,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string[]"}},phone:{defaultValue:null,description:"",name:"phone",required:!0,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!0,type:{name:"string"}}}}}catch{}export{c as L};
