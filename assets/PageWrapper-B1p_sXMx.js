import{s as a,n as o,R as c}from"./iframe-BNpMeywT.js";const n=e=>{const r=e.theme.theme_vars.colours[e.$colour];return e.$colour?o`
      background-color: ${r};
      `:o`
        background-color: transparent;
        `},s=a.div`
 ${n};
 padding-top: 1.5em;
`,t=({colour:e,children:r})=>c.createElement(s,{"data-testid":"PageWrapper",$colour:e},r);try{t.displayName="PageWrapper",t.__docgenInfo={description:"",displayName:"PageWrapper",props:{colour:{defaultValue:null,description:"which background colour from the theme to choose",name:"colour",required:!0,type:{name:"string"}}}}}catch{}export{t as P};
