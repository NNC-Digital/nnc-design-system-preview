import{s as o,R as t,r as c,H as l}from"./iframe-BNpMeywT.js";import{C as n}from"./Column-Dpu6NTYh.js";import{R as i}from"./Row-DErQ7Ddw.js";import{S as s}from"./Icon-DRo6U2FY.js";import{S as m}from"./Icon-DbMPhXfQ.js";import{S as u}from"./Icon-ClDmJrXr.js";import{S as d}from"./Icon-2pAw7FvT.js";import{S as p}from"./Icon-BaVIv-U0.js";const f=o.div`
  display: flex;
  overflow: hidden;

  .striped-socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${e=>e.theme.theme_vars.spacingSizes.medium};
    box-shadow: 0.5px 0.5px 0 0.5px
      ${e=>e.theme.cardinal_name==="north"?e.theme.theme_vars.colours.grey:e.theme.theme_vars.colours.action_light};
  }
`,h=o.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.medium};
`,v=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
`,S=o.a`
  word-break: break-all;
  display: block;
  text-align: center;
`,a=({profiles:e})=>t.createElement(f,{"data-testid":"ServiceSocialLinks"},t.createElement(i,null,e?.map(r=>t.createElement(n,{key:r.id,small:"full",medium:"one-half",large:"one-third",classes:"striped-socials"},t.createElement(h,null,_(r)),t.createElement(v,null,t.createElement(S,{href:r.link},r.name)))))),_=e=>{const r=c.useContext(l);switch(e.social_network){case"facebook":return t.createElement(s,{colourFill:r.theme_vars.colours.black});case"instagram":return t.createElement(m,{colourFill:r.theme_vars.colours.black});case"linkedin":return t.createElement(u,{colourFill:r.theme_vars.colours.black});case"twitter":return t.createElement(d,{colourFill:r.theme_vars.colours.black});case"youtube":return t.createElement(p,{colourFill:r.theme_vars.colours.black})}};try{a.displayName="ServiceSocialLinks",a.__docgenInfo={description:"",displayName:"ServiceSocialLinks",props:{profiles:{defaultValue:null,description:"An array of social links",name:"profiles",required:!1,type:{name:"SocialProfile[]"}}}}}catch{}export{a as S};
