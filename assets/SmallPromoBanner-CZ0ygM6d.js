import{s as n,R as t}from"./iframe-BNpMeywT.js";import{C as r}from"./CallToAction-CjqkzkJC.js";import{H as m}from"./Heading-C7kzbY1R.js";const d=n.section`
  ${e=>e.theme.fontStyles};
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px 24px;
  padding: 20px 24px;
  border: 1px solid ${e=>e.theme.theme_vars.colours.grey};
  border-left: 5px solid ${e=>e.theme.theme_vars.colours.action};
  border-radius: 4px;
  background: ${e=>e.theme.theme_vars.colours.action_light};

  h2 { margin: 0 0 6px; }
  p { margin: 0; }

  @media (max-width: 650px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 18px;
  }
`,p=n.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;

  > div { display: block; min-width: 0; margin: 0 !important; }

  > div a {
    display: flex;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 651px) {
    > div { flex: 1 1 0; min-width: 120px; }
  }

  @media (max-width: 650px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr);

    > div { width: 100%; }
  }
`,i=({heading:e,description:l,primaryAction:o,secondaryAction:a})=>t.createElement(d,{"aria-label":e,"data-testid":"SmallPromoBanner"},t.createElement("div",null,t.createElement(m,{text:e,level:2}),t.createElement("p",null,l)),t.createElement(p,{role:"group","aria-label":`${e} actions`},t.createElement(r,{...o,primary:!0}),a&&t.createElement(r,{...a,primary:!1})));try{i.displayName="SmallPromoBanner",i.__docgenInfo={description:"",displayName:"SmallPromoBanner",props:{heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!0,type:{name:"SmallPromoBannerAction"}},secondaryAction:{defaultValue:null,description:"",name:"secondaryAction",required:!1,type:{name:"SmallPromoBannerAction"}}}}}catch{}export{i as S};
