import{s as o,r as c,R as t}from"./iframe-BNpMeywT.js";import{I as m}from"./DownloadFileIcon-CeTHGcW8.js";const p=o.div`
  ${e=>e.theme.fontStyles}
  max-width: 725px;
  &:not(:first-child) {
    a {
      margin-top: 15px;
      border-top: 1px solid ${e=>e.theme.theme_vars.colours.grey_dark}80;
      padding-top: 15px;
    }
  }
`,d=o.a`
  margin-bottom: 15px;
  display: block;
  width: 100%;
  position: relative;
  min-width: 300px;

  svg {
    margin-right: 10px;
    vertical-align: top;
    margin-left: 5px;
    margin-top: 5px;
    g {
      fill: ${e=>e.theme.theme_vars.colours.grey_dark};
    }
  }

  &:hover {
    .file-title {
      color: ${e=>e.theme.theme_vars.colours.action};
    }
    .file-details {
      transform: translate(3px, 0px);
    }
    svg {
      g {
        fill: ${e=>e.theme.theme_vars.colours.action};
      }
    }
  }

  &:focus {
    outline: none;
    background: ${e=>e.theme.theme_vars.colours.focus};
    box-shadow: 0px 0px 0px 3px ${e=>e.theme.theme_vars.colours.focus},
      0px 3px 0px 3px ${e=>e.theme.theme_vars.colours.black};
    svg {
      g {
        fill: ${e=>e.theme.theme_vars.colours.black};
      }
    }
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 0px 0px 0px 3px ${e=>e.theme.theme_vars.colours.focus},
      0px 1px 0px 3px ${e=>e.theme.theme_vars.colours.black};
  }
`,u=o.div`
  display: inline-block;
  max-width: calc(100% - 45px);
  transition: transform 0.3s;
`,h=o.p`
  display: block;
  color: ${e=>e.theme.theme_vars.colours.action};
  font-weight: 700;
  margin-bottom: 0 !important;
`,f=o.span`
  color: ${e=>e.theme.theme_vars.colours.black};
  margin-right: 5px;
  font-weight: 400 !important;
  font-size: ${e=>e.theme.theme_vars.fontSizes.extra_small};
`,x=o.span`
  color: ${e=>e.theme.theme_vars.colours.black};
  font-size: ${e=>e.theme.theme_vars.fontSizes.extra_small};
  font-weight: 400 !important;
`,l=({title:e,type:a,url:i,size:s,archived:n=!1,...v})=>{const[g,r]=c.useState(!1);return t.createElement(p,{"data-testid":"FileDownload"},t.createElement(d,{href:i,download:!0,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),rel:n?"archived":""},t.createElement(m,null),t.createElement(u,{className:"file-details"},t.createElement(h,{className:"file-title"},e),t.createElement(f,null,a=="Microsoft Office - OOXML - Word Document"?"Word Document":a=="Adobe Portable Document Format"||a=="application/pdf"?"PDF":a),t.createElement(x,null,s))))};try{l.displayName="FileDownload",l.__docgenInfo={description:"A styled file download link",displayName:"FileDownload",props:{title:{defaultValue:null,description:"The title of the file, not including the file extension",name:"title",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"The type of file",name:"type",required:!0,type:{name:"string"}},url:{defaultValue:null,description:"A URL to download the file",name:"url",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"The size of the file in KB or MB",name:"size",required:!0,type:{name:"string"}},archived:{defaultValue:{value:"false"},description:"Should the file be marked as archived",name:"archived",required:!1,type:{name:"boolean"}}}}}catch{}export{l as F};
