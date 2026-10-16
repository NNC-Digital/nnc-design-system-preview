import{s as m,n as a,R as h}from"./iframe-BNpMeywT.js";const t=e=>{switch(e){case"full":return a`
        width: 100%;
      `;case"one-half":return a`
        width: 50%;
      `;case"one-third":return a`
        width: 33.333%;
      `;case"two-thirds":return a`
        width: 66.666%;
      `;case"one-quarter":return a`
        width: 25%;
      `;case"three-quarters":return a`
        width: 75%;
      `;case"auto":return a`
        flex-grow: 1;
      `}},c=e=>a`
    ${t(e.$small)};

    @media screen and (min-width: ${l=>l.theme.theme_vars.breakpoints.m}) {
      ${t(e.$medium)};
    }

    @media screen and (min-width: ${l=>l.theme.theme_vars.breakpoints.l}) {
      ${t(e.$large)};
    }
  `,f=m.div`
  box-sizing: border-box;
  display: block;
  padding: ${e=>e.$hasPadding?e.theme.theme_vars.spacingSizes.small:"0"};
  border: ${e=>e.$hasBorder?`1px solid ${e.theme.theme_vars.colours.negative}`:"none"};
  left: 0;
  ${c};
`,r=({small:e="full",medium:l="one-half",large:n="one-third",hasPadding:s=!0,hasBorder:u=!1,isList:i=!1,classes:d,children:o})=>h.createElement(f,{"data-testid":"Column",$small:e,$medium:l,$large:n,$hasPadding:s,$hasBorder:u,as:i?"li":"div",className:d},o);try{r.displayName="Column",r.__docgenInfo={description:"",displayName:"Column",props:{small:{defaultValue:{value:"full"},description:"Available column sizes for small screen",name:"small",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"one-half"'},{value:'"one-third"'},{value:'"two-thirds"'},{value:'"one-quarter"'},{value:'"three-quarters"'},{value:'"auto"'}]}},medium:{defaultValue:{value:"one-half"},description:"Available column sizes for small screen",name:"medium",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"one-half"'},{value:'"one-third"'},{value:'"two-thirds"'},{value:'"one-quarter"'},{value:'"three-quarters"'},{value:'"auto"'}]}},large:{defaultValue:{value:"one-third"},description:"Available column sizes for small screen",name:"large",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"one-half"'},{value:'"one-third"'},{value:'"two-thirds"'},{value:'"one-quarter"'},{value:'"three-quarters"'},{value:'"auto"'}]}},hasPadding:{defaultValue:{value:"true"},description:"Should the column have padding",name:"hasPadding",required:!1,type:{name:"boolean"}},hasBorder:{defaultValue:{value:"false"},description:`Option to display the border
Should only used for demonstrating grid`,name:"hasBorder",required:!1,type:{name:"boolean"}},isList:{defaultValue:{value:"false"},description:"Is the column within a list",name:"isList",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"Any optional classes to add to the column",name:"classes",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The contents of the column",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{r as C};
