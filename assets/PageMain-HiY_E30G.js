import{s as l,R as n}from"./iframe-BNpMeywT.js";const r=l.main`
  padding-top: 30px;

  a {
    ${e=>e.theme.linkStyles}
    &:hover {
      ${e=>e.theme.linkStylesHover}
    }
    &:focus {
      ${e=>e.theme.linkStylesFocus}
    }
    &:active {
      ${e=>e.theme.linkStylesActive}
    }
  }

  p {
    margin-bottom: 15px;
  }

  & > p,
  & > ul,
  & > ol,
  & > h2,
  & > h3,
  & > h4 {
    max-width: ${e=>e.$fullWidthText?"100%":"750px"};
  }

  li {
    margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.extra_small};
  }

  strong,
  bold {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }

  // TABLE STYLES
  .table-container {
    max-width: 100%;
    overflow-y: auto;

    table {
      max-width: none;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 25px;
    max-width: 100%;
    overflow-y: auto;

    caption {
      text-align: left;
      padding-left: 10px;
      margin-bottom: 15px;
      font-weight: bold;
    }
  }

  tr {
    border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.grey};
    &:hover {
      background: ${e=>e.theme.theme_vars.colours.grey_light} !important;
    }
  }

  tr:nth-of-type(even) {
    background: ${e=>e.theme.theme_vars.colours.grey_light}40;
  }

  td,
  th {
    padding: 10px;
    text-align: left;
  }

  td > a:only-child {
    padding: 12px 20px;
    display: inline-block;
    min-height: 44px;
    min-width: 44px;
  }

  td > a:not(:only-child) {
    padding: 0;
  }

  th {
    font-weight: bold;
  }
  thead tr {
    border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.black};
    &:hover {
      background: transparent !important;
    }
  }

  @media only screen and (max-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    table {
      width: 100%;
    }
  }
`,t=({children:e,classes:a,fullWidthText:o=!1,...i})=>n.createElement(r,{id:"main",className:a,$fullWidthText:o,...i,"data-testid":"PageMain"},e);try{t.displayName="PageMain",t.__docgenInfo={description:"A container for holding the main content of a page",displayName:"PageMain",props:{classes:{defaultValue:null,description:"Any unique class names to apply to the page container",name:"classes",required:!1,type:{name:"string"}},fullWidthText:{defaultValue:{value:"false"},description:"Should the paragraph text be full width?",name:"fullWidthText",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The PageMain contents",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{t as P};
