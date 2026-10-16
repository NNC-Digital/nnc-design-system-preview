import{s as r,r as c,H as m,R as t}from"./iframe-BNpMeywT.js";import{L as p}from"./LazyImage-CiqbweeC.js";const h=r.section`
  background: ${e=>e.theme.theme_vars.colours.black};
  overflow: ${e=>e.noPadding?"hidden":"visible"};
  padding-bottom: 0px;
`,u=r.div`
  font-family: ${e=>e.theme.theme_vars.fontstack};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
  margin-left: 15px;
  overflow: hidden;
  flex-direction: column;
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    flex-direction: row;
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    margin-right: 30px;
    margin-left: 30px;
  }
  @media screen and (min-width: calc(${e=>e.theme.theme_vars.breakpoints.l} + 60px)) {
    margin-right: auto;
    margin-left: auto;
    max-width: ${e=>e.theme.theme_vars.breakpoints.l};
  }
`,g=r.div`
  order: 1;
  flex-basis: 40%;
  padding-right: 40px;
  @media screen and (max-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    padding-right: 0;
    flex-basis: auto;
    padding-top: 20px;
    order: 2;
    > div {
      padding-bottom: 20px;
      width: 100%;
    }
  }
`,f=r.div`
  order: 2;
  flex-grow: 1;
  @media screen and (max-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    order: 1;
    flex-basis: 100%;
    width: 100%;
  }
`,x=r.div`
  transition: all 0.25s ease;
  background-image: url('${e=>e.$image}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 760px;
  @media screen and (max-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    background-size: cover;
    height: 350px;
  }
`,b=r.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,a=({src:e,placeholder:i,alt:n,children:o,councilServices:l,searchSuggestions:v=[]})=>{const s=c.useContext(m);return t.createElement(t.Fragment,null,t.createElement(h,{"aria-label":"Memorial Hero"},t.createElement(b,null,s.full_name," Council"),t.createElement(u,null,t.createElement(g,null,o,l),t.createElement(f,null,t.createElement(p,{src:e,placeholder:i,visibilitySensorProps:{partialVisibility:!0}},d=>t.createElement(x,{$image:d,title:n}))))))};try{a.displayName="MemorialHero",a.__docgenInfo={description:"",displayName:"MemorialHero",props:{src:{defaultValue:null,description:"Full sized image",name:"src",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"smaller version as a placeholder for lazy loading",name:"placeholder",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"Alt text for hero",name:"alt",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Pass through any children to be shown (condolence links)",name:"children",required:!0,type:{name:"ReactNode"}},councilServices:{defaultValue:null,description:"Council services links section",name:"councilServices",required:!0,type:{name:"ReactNode"}},searchSuggestions:{defaultValue:{value:"[]"},description:"Search suggestions for the search bar",name:"searchSuggestions",required:!1,type:{name:"string[]"}}}}}catch{}export{a as M};
