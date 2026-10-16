import{s as n,n as r,R as s}from"./iframe-BNpMeywT.js";const m=a=>{if(a.theme.is_memorial===!0)return r`
      background-color: ${a.theme.theme_vars.colours.grey_darkest};
      color: ${a.theme.theme_vars.colours.white};
    `;switch(a.theme.cardinal_name){case"north":return r`
        background-color: ${e=>e.$hasBackground?e.theme.theme_vars.colours.white:"transparent"};
        color: ${e=>e.theme.theme_vars.colours.action};
      `;case"west":return r`
        background-color: ${e=>e.$hasBackground?e.theme.theme_vars.colours.grey_light:"transparent"};
        color: ${e=>e.theme.theme_vars.colours.action_dark};
      `}},d=n.div`
  padding: ${a=>a.$hasPadding?"30px 20px":"0"};
  font-size: 1.2em;
  margin-bottom: 15px;
  ${m}

  p {
    max-width: 100%;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`,t=({children:a,hasBackground:e=!0,hasPadding:o=!0})=>s.createElement(d,{"data-testid":"Summary",$hasBackground:e,$hasPadding:o},a);try{t.displayName="Summary",t.__docgenInfo={description:"",displayName:"Summary",props:{hasPadding:{defaultValue:{value:"true"},description:"Should the summary have padding",name:"hasPadding",required:!1,type:{name:"boolean"}},hasBackground:{defaultValue:{value:"true"},description:"Should the summary have a background colour",name:"hasBackground",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The contents of the summary",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{t as S};
