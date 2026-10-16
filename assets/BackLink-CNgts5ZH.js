import{s as n,R as t}from"./iframe-BNpMeywT.js";const o=n.a`
  display: inline-block;
  position: relative;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 14px;
  border: none;
  background: transparent;

  ${e=>e.theme.fontStyles}

  &:hover {
    ${e=>e.theme.linkStylesHover}
    cursor: pointer;
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 3px;
    width: 7px;
    height: 7px;
    margin: auto 0;
    -webkit-transform: rotate(225deg);
    -ms-transform: rotate(225deg);
    transform: rotate(225deg);
    border: solid;
    border-width: 1px 1px 0 0;
    border-color: #505a5f;
  }

  &:focus:before {
    border-color: #0b0c0c;
  }

  &:after {
    content: '';
    position: absolute;
    top: -14px;
    right: 0;
    bottom: -14px;
    left: 0;
  }
`,a=({link:e,useHistory:r=!1})=>t.createElement(t.Fragment,null,r?t.createElement(o,{onClick:()=>history.back(),"data-testid":"BackLink",as:"button"},"Back"):t.createElement(o,{href:e,"data-testid":"BackLink"},"Back"));try{a.displayName="BackLink",a.__docgenInfo={description:"A back link or a back button when using history",displayName:"BackLink",props:{link:{defaultValue:null,description:"The optional uri to navigate back to",name:"link",required:!1,type:{name:"string"}},useHistory:{defaultValue:{value:"false"},description:"Should the browser history be used instead of the link?",name:"useHistory",required:!1,type:{name:"boolean"}}}}}catch{}export{a as B};
