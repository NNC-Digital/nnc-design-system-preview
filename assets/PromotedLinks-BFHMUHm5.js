import{s as r,n,R as t}from"./iframe-BNpMeywT.js";import{R as s}from"./Row-DErQ7Ddw.js";import{C as l}from"./Column-Dpu6NTYh.js";import{D as h}from"./DynamicIcon-C0gKm0XE.js";const p=e=>{if(e.$oneCol)return n`
      width: 100%;
      display: block;
    `},c=r.div`
  ${e=>e.theme.fontStyles}
  margin-top: 15px;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
  }
  @media screen and (min-width: calc(${e=>e.theme.theme_vars.breakpoints.l} + 60px)) {
    margin-top: 45px;
  }
  flex-direction: ${e=>e.oneCol?"column":"inherit"};
`,x=r.a`
  display: block;
  height: 100%;

  /* Memorial theme styling - horizontal layout like HeadingWithIconLink */
  ${e=>e.theme.is_memorial&&e.theme.theme_vars&&e.theme.theme_vars.theme_name&&e.theme.theme_vars.theme_name.includes("Memorial")&&`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    padding: 20px;
  `}
  @media screen and (min-width: calc(${e=>e.theme.theme_vars.breakpoints.l} + 60px)) {
    box-sizing: border-box;
  }
  background: ${e=>e.theme.theme_vars.colours.white};
  background: ${e=>e.theme.theme_vars.colours.white}F2;
  border-radius: 3px;
  box-shadow:
    0px -4px 0px 0px ${e=>e.theme.theme_vars.colours.action} inset,
    0px 4px 15px rgba(0, 0, 0, 0.11);
  -webkit-box-shadow:
    0px -4px 0px 0px ${e=>e.theme.theme_vars.colours.action} inset,
    0px 4px 15px rgba(0, 0, 0, 0.11);
  -moz-box-shadow:
    0px -4px 0px 0px ${e=>e.theme.theme_vars.colours.action} inset,
    0px 4px 15px rgba(0, 0, 0, 0.11);

  padding: 20px 15px;
  width: 100%;
  margin-bottom: 15px;

  span {
    ${e=>e.theme.linkStyles};

    /* Memorial theme - larger text like Heading component */
    ${e=>e.theme.is_memorial&&e.theme.theme_vars&&e.theme.theme_vars.theme_name&&e.theme.theme_vars.theme_name.includes("Memorial")&&`
      font-size: 24px;
      font-size: 1.3rem;
      line-height: 1.4;
      margin-top: 0;
      margin-left: 15px;

      @media screen and (min-width: ${e.theme.theme_vars.breakpoints.m}) {
        font-size: 36px;
        font-size: 1.5rem;
        line-height: 1.3;
      }
    `}
  }

  [data-testid="DynamicIcon"] {
    .service-icon-hover {
      display: none;
    }

    /* Regular theme - icon above text */
    margin-bottom: 10px;

    /* Memorial theme - icon on left */
    ${e=>e.theme.is_memorial&&e.theme.theme_vars&&e.theme.theme_vars.theme_name&&e.theme.theme_vars.theme_name.includes("Memorial")&&`
      margin-bottom: 0;
      margin-right: 0;
    `}
  }

  &:hover,
  &:focus {
    [data-testid="DynamicIcon"] {
      .service-icon {
        display: none;
      }
      .service-icon-hover {
        display: block !important;
      }
    }
  }

  &:hover {
    background: ${e=>e.theme.theme_vars.colours.white};
  }

  &:focus {
    ${e=>e.theme.linkStylesFocus};
    box-shadow:
      0 0 0 2px ${e=>e.theme.theme_vars.colours.black},
      0 0 0 4px ${e=>e.theme.theme_vars.colours.focus};
    -webkit-box-shadow:
      0 0 0 2px ${e=>e.theme.theme_vars.colours.black},
      0 0 0 4px ${e=>e.theme.theme_vars.colours.focus};
    -moz-box-shadow:
      0 0 0 2px ${e=>e.theme.theme_vars.colours.black},
      0 0 0 4px ${e=>e.theme.theme_vars.colours.focus};
    
    span {
      color: ${e=>e.theme.theme_vars.colours.black};
    }
  }
  &:active {
    ${e=>e.theme.linkStylesActive};
    transform: translateY(3px);
    box-shadow:
      0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset,
      0px 4px 15px rgba(0, 0, 0, 0.11);
    -webkit-box-shadow:
      0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset,
      0px 4px 15px rgba(0, 0, 0, 0.11);
    -moz-box-shadow:
      0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset,
      0px 4px 15px rgba(0, 0, 0, 0.11);
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    width: 100%;
    margin-right: 15px;
    flex: 0 0 calc(50% - 38px);
    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    width: 100%;
    margin-right: 30px;

    margin-bottom: ${e=>e.oneCol?"20px":"0px"};
    padding: 30px;
    flex: 1;

    &:nth-of-type(2n) {
      margin-right: 30px;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
  ${p}
`,m=({promotedLinksArray:e,oneCol:o})=>e.length>0?t.createElement(c,{"data-testid":"PromotedLinks",$oneCol:o},t.createElement(s,{isList:!0,hasWrap:!0},e.map((a,i)=>t.createElement(l,{isList:!0,small:"full",medium:"one-half",large:"one-third",key:i},t.createElement(x,{$oneCol:o,href:a.url,title:a.title},a.iconKey&&t.createElement(h,{icon:a.iconKey,level:2}),t.createElement("span",null,a.title)))))):null;try{m.displayName="PromotedLinks",m.__docgenInfo={description:"",displayName:"PromotedLinks",props:{promotedLinksArray:{defaultValue:null,description:"The main promoted links, an array that should be from 1-4, preferably 3",name:"promotedLinksArray",required:!0,type:{name:"PromotedLinkProp[]"}},oneCol:{defaultValue:null,description:"One column layout",name:"oneCol",required:!1,type:{name:"boolean"}}}}}catch{}export{m as P};
