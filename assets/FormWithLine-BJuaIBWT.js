import{s as o,R as r}from"./iframe-BNpMeywT.js";const f=o.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`,h=o.form`
  padding-top: 10px;
  padding-bottom: 12px;
  padding-left: ${e=>e.$hideLine?"0":"15px"};
  max-width: 100%;
  width: 100%;
`,c=o.div`
  background: ${e=>e.$isError?e.theme.theme_vars.colours.negative:e.$lineColour};
  display: ${e=>e.$hideLine?"none":"block"};
  width: 5px;
  border-radius: 2px;
`,p=o.div`
  color: ${e=>e.theme.theme_vars.colours.negative};
  font-weight: bold;
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  border: 3px solid ${e=>e.theme.theme_vars.colours.negative};
  margin-bottom: 15px;
  padding: 15px;
`,n=({lineColour:e="#C6C6C6",hideLine:t=!1,formRole:a,formMethod:l,formURL:d,isError:m=!1,errorSummary:i,onSubmit:s,children:u})=>r.createElement(f,null,r.createElement(c,{$lineColour:e,$hideLine:t,$isError:m}),r.createElement(h,{onSubmit:s,$hideLine:t,role:a,method:l,url:d,"data-testid":"FormWithLine"},i&&r.createElement(p,null,i),u));try{n.displayName="FormWithLine",n.__docgenInfo={description:"Form element - a container with a line on the left",displayName:"FormWithLine",props:{lineColour:{defaultValue:{value:"#C6C6C6"},description:"The colour of the line",name:"lineColour",required:!1,type:{name:"string"}},hideLine:{defaultValue:{value:"false"},description:"An optional boolean to hide the line",name:"hideLine",required:!1,type:{name:"boolean"}},formRole:{defaultValue:null,description:"The role of the form",name:"formRole",required:!1,type:{name:"string"}},formMethod:{defaultValue:null,description:"The method of the form",name:"formMethod",required:!1,type:{name:"string"}},formURL:{defaultValue:null,description:"The url of the form",name:"formURL",required:!1,type:{name:"string"}},isError:{defaultValue:{value:"false"},description:"An optional boolean to set the form as an error - if true, the lineColour will be replaced with red",name:"isError",required:!1,type:{name:"boolean"}},errorSummary:{defaultValue:null,description:"An optional string to explain the error",name:"errorSummary",required:!1,type:{name:"string"}},onSubmit:{defaultValue:null,description:"An optional function to be called on the submit of the form",name:"onSubmit",required:!1,type:{name:"ReactNode | ((e: any) => void)"}},children:{defaultValue:null,description:"The FormWithLine contents",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}export{n as F};
