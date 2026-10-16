import{s as o,R as t}from"./iframe-BNpMeywT.js";const i=o.blockquote`
    ${e=>e.theme.fontStyles}
    margin: 20px 0px;
    padding: 15px 0px 15px 40px;
    border-left: 5px solid ${e=>e.theme.theme_vars.colours.action};
    max-width: 750px;
`,n=o.q`
    color: ${e=>e.theme.theme_vars.colours.black};
    display: block;
    font-weight: bold;
    font-size: 1.2em; 
    quotes: inherit;

    p {
      margin-bottom: 15px;
    }

    p:last-of-type {
      margin-bottom: 0;
    }
`,r=o.cite`
      color: ${e=>e.theme.theme_vars.colours.black};
      display: block;
      margin-top: 10px;
      line-height: 1.5;
      font-size: 1.05em;
      font-style: italic;
`,l=({quote:e,citation:a})=>t.createElement(i,{"data-testid":"BlockQuote"},t.createElement(n,null,e),a&&t.createElement(r,null,a));try{l.displayName="BlockQuote",l.__docgenInfo={description:"",displayName:"BlockQuote",props:{quote:{defaultValue:null,description:"The text of the quote",name:"quote",required:!0,type:{name:"ReactNode"}},citation:{defaultValue:null,description:"Optionally, the attribution of the quote",name:"citation",required:!1,type:{name:"string"}}}}}catch{}export{l as B};
