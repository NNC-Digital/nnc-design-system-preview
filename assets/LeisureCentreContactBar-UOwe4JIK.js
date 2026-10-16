import{s as n,R as e}from"./iframe-BNpMeywT.js";import{M as o}from"./MaxWidthContainer-DfAz8Sy4.js";const s=n.section`
  ${t=>t.theme.fontStyles}
  background: ${t=>t.theme.theme_vars.colours.action_light};
  border-bottom: 1px solid ${t=>t.theme.theme_vars.colours.grey};
  color: ${t=>t.theme.theme_vars.colours.black};
  font-size: 1.25rem;
`,m=n.div`
  min-height: 100px;
  padding: 16px 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-items: center;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: minmax(max-content, 1.05fr) minmax(max-content, 1.4fr) minmax(max-content, 1fr);
    gap: 16px;
    padding: 16px 0;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
    padding: 16px 0;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 16px 0;
  }
`,i=n.div`
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-style: normal;

  @media screen and (max-width: 650px) {
    gap: 14px;
  }
`,r=n.span`
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${t=>t.theme.theme_vars.colours.action};

  svg {
    display: block;
    width: 30px;
    height: 30px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.4;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`,d=n.a`
  justify-self: center;
  display: inline-flex;
  align-items: center;
  gap: 18px;
  color: ${t=>t.theme.theme_vars.colours.action};
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;

  &:hover { text-decoration: underline; }
  &:focus-visible { ${t=>t.theme.linkStylesFocus} }

  @media screen and (max-width: 900px) {
    grid-column: 1 / -1;
    justify-self: center;
  }

  @media screen and (max-width: 650px) {
    gap: 14px;
  }
`,l=({address:t,openingHours:c,phone:a})=>e.createElement(s,{"data-testid":"LeisureCentreContactBar"},e.createElement(o,{noBackground:!0,noPadding:!0,overflowVisible:!0},e.createElement(m,null,e.createElement(i,{as:"address"},e.createElement(r,{"aria-hidden":"true"},e.createElement("svg",{viewBox:"0 0 32 32"},e.createElement("path",{d:"M16 29s11-9.5 11-17a11 11 0 1 0-22 0c0 7.5 11 17 11 17Z"}),e.createElement("circle",{cx:"16",cy:"12",r:"3.5"}))),e.createElement("span",null,t)),e.createElement(i,null,e.createElement(r,{"aria-hidden":"true"},e.createElement("svg",{viewBox:"0 0 32 32"},e.createElement("circle",{cx:"16",cy:"16",r:"12"}),e.createElement("path",{d:"M16 8v8l5 3"}))),e.createElement("span",null,c)),e.createElement(d,{href:`tel:${a.replace(/[^\d+]/g,"")}`,"aria-label":`Call ${a}`},e.createElement(r,{"aria-hidden":"true"},e.createElement("svg",{viewBox:"0 0 32 32"},e.createElement("path",{d:"m7 4 5-1 3 7-4 3a20 20 0 0 0 8 8l3-4 7 3-1 5a3 3 0 0 1-3 2C14 26 6 18 4 7a3 3 0 0 1 3-3Z"}))),e.createElement("span",null,a)))));try{l.displayName="LeisureCentreContactBar",l.__docgenInfo={description:"",displayName:"LeisureCentreContactBar",props:{address:{defaultValue:null,description:"",name:"address",required:!0,type:{name:"string"}},openingHours:{defaultValue:null,description:"",name:"openingHours",required:!0,type:{name:"string"}},phone:{defaultValue:null,description:"",name:"phone",required:!0,type:{name:"string"}}}}}catch{}export{l as L};
