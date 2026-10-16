import{s as t,R as r}from"./iframe-BNpMeywT.js";const n=t.div`
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: flex;
    flex-wrap: wrap;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;

    main {
      width: calc(66.66% - 30px);

      margin-right: ${e=>e.$sidebarLeft?"0":"30px"};
      margin-left: ${e=>e.$sidebarLeft?"30px":"0"};
    }
    aside {
      width: 33.33%;
    }
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    main {
      width: calc(66.66% - 45px);

      margin-right: ${e=>e.$sidebarLeft?"0":"45px"};
      margin-left: ${e=>e.$sidebarLeft?"45px":"0"};
    }
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.xl}) {
    main {
      width: calc(66.66% - 60px);

      margin-right: ${e=>e.$sidebarLeft?"0":"60px"};
      margin-left: ${e=>e.$sidebarLeft?"60px":"0"};
    }
  }
`,i=({sidebarLeft:e=!1,children:a})=>r.createElement(n,{$sidebarLeft:e},a);try{i.displayName="PageWithSidebarContainer",i.__docgenInfo={description:"A container for holding the main content of a page",displayName:"PageWithSidebarContainer",props:{sidebarLeft:{defaultValue:{value:"false"},description:"Rare occassions trhe sidebar is on the left",name:"sidebarLeft",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"All children content within the page",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}export{i as P};
