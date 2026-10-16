import{s as o,R as t}from"./iframe-BNpMeywT.js";import{H as a}from"./Heading-C7kzbY1R.js";import{D as c}from"./DynamicIcon-C0gKm0XE.js";const s=o.a`
  display: flex;
  justify-content: start;
  align-items: center;

  .service-icon-hover {
    display: none;
  }

  &:hover .service-icon-hover,
  &:focus .service-icon-hover {
    display: block;
  }

  &:hover .service-icon,
  &:focus .service-icon {
    display: none;
  }

  &:hover {
    text-decoration: none;

    h2 {
      ${e=>e.theme.linkStylesHover}
    }
  }

  &:focus {
    outline: none;
    text-decoration: none;
    ${e=>e.theme.linkStylesFocus}

    h2 {
      text-decoration: none;
    }
  }

  &:active {
    ${e=>e.theme.linkStylesActive}
  }
`,l=o(a)`
  ${e=>e.theme.linkStyles}

  padding: 15px 0;
  margin: 0;
  font-size: 24px;
  font-size: 1.3rem;
  line-height: 1.4;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    font-size: 36px;
    font-size: 1.5rem;
    line-height: 1.3;
  }
`,i=({iconKey:e,link:r,title:n})=>t.createElement(s,{"data-testid":"HeadingWithIconLink",href:r,title:n},t.createElement(c,{icon:e,level:2}),t.createElement(l,{text:n},n));try{i.displayName="HeadingWithIconLink",i.__docgenInfo={description:"",displayName:"HeadingWithIconLink",props:{iconKey:{defaultValue:null,description:"The key for the icon",name:"iconKey",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"The link for the icons",name:"link",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"The title text for the heading",name:"title",required:!0,type:{name:"string"}}}}}catch{}export{i as H};
