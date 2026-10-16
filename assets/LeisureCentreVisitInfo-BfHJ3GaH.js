import{s as r,R as t}from"./iframe-BNpMeywT.js";import{H as a}from"./Heading-C7kzbY1R.js";import{M as h}from"./MaxWidthContainer-DfAz8Sy4.js";const g=r.div`
  ${e=>e.theme.fontStyles}
  display: grid;
  grid-template-columns: 1.15fr 1fr 0.9fr;
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

  @media screen and (max-width: 900px) {
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
`,y=r.div``,v=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: ${e=>e.theme.theme_vars.fontSizes.extra_small};
  gap: ${e=>e.theme.theme_vars.spacingSizes.small};
  padding: 12px 0;
  border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.grey};

  span:last-child {
    font-weight: 700;
    text-align: right;
    white-space: nowrap;
  }
`,_=r.p`
  margin: ${e=>e.theme.theme_vars.spacingSizes.extra_small} 0 0;
  color: ${e=>e.theme.theme_vars.colours.grey_darkest};
`,m=r.a`
  display: block;
  font-size: ${({$email:e,theme:n})=>e?n.theme_vars.fontSizes.extra_small:"inherit"};
  white-space: ${({$email:e})=>e?"nowrap":"normal"};
  ${e=>e.theme.linkStyles}
  &:hover { ${e=>e.theme.linkStylesHover} }
  &:focus-visible { ${e=>e.theme.linkStylesFocus} }

  @media screen and (max-width: 900px) {
    white-space: normal;
    overflow-wrap: anywhere;
  }
`,c=({visitDescription:e,visitLink:n,openingHours:d,openingHoursNote:l,address:p,phone:s,email:o})=>t.createElement(h,null,t.createElement(g,{"data-testid":"LeisureCentreVisitInfo"},t.createElement("section",{"aria-label":"Plan your visit"},t.createElement(a,{text:"Plan your visit",level:2}),t.createElement("p",null,e),n&&t.createElement(f,{href:n.url},n.label)),t.createElement("section",{"aria-label":"Opening hours"},t.createElement(a,{text:"Opening hours",level:3}),t.createElement(y,null,d.map(({day:i,hours:u})=>t.createElement(v,{key:i},t.createElement("span",null,i),t.createElement("span",null,u)))),l&&t.createElement(_,null,l)),t.createElement("section",{"aria-label":"Get in touch"},t.createElement(a,{text:"Get in touch",level:3}),t.createElement("address",null,p.map(i=>t.createElement(t.Fragment,{key:i},i,t.createElement("br",null)))),t.createElement(m,{href:`tel:${s.replace(/[^\d+]/g,"")}`},s),t.createElement(m,{$email:!0,href:`mailto:${o}`},o))));try{c.displayName="LeisureCentreVisitInfo",c.__docgenInfo={description:"",displayName:"LeisureCentreVisitInfo",props:{visitDescription:{defaultValue:null,description:"",name:"visitDescription",required:!0,type:{name:"string"}},visitLink:{defaultValue:null,description:"",name:"visitLink",required:!1,type:{name:"{ label: string; url: string; }"}},openingHours:{defaultValue:null,description:"",name:"openingHours",required:!0,type:{name:"LeisureCentreOpeningHour[]"}},openingHoursNote:{defaultValue:null,description:"",name:"openingHoursNote",required:!1,type:{name:"string"}},address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string[]"}},phone:{defaultValue:null,description:"",name:"phone",required:!0,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!0,type:{name:"string"}}}}}catch{}export{c as L};
