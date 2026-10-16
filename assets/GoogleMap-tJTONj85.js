import{s as i,r as m,R as a}from"./iframe-BNpMeywT.js";import{w as b}from"./cookies-eTrdNKtl.js";import{H as v}from"./Heading-C7kzbY1R.js";import{A as w}from"./AlertBannerService-GoXrRY6Z.js";import{s as k}from"./index-ClUSzdlr.js";const p=i.div``,E=i.div`
  ${e=>e.theme.fontStyles};
  margin-bottom: 15px;

  /* re-style bold and italic elements within the content */
  strong,
  b {
    font-weight: bold;
  }
  em,
  i {
    font-style: italic;
  }

  /* style links within the content correctly though ideally there won't be any */
  a {
    ${e=>e.theme.linkStyles};
  }
  a:hover {
    ${e=>e.theme.linkStylesHover};
  }
  a:focus {
    ${e=>e.theme.linkStylesFocus};
  }
  a:active {
    ${e=>e.theme.linkStylesActive};
  }
`,M=i.figure`
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 75%; /* 4:3 aspect ratio */
  @media screen and (orientation: portrait) {
    padding-top: 133%; /* 3:4 aspect ratio for phones */
  }
  margin-bottom: 15px;
`,S=i.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`,h=i.a`
  ${e=>e.theme.fontStyles};
  ${e=>e.theme.linkStyles};
  margin-bottom: 15px;
  display: block;

  &:hover {
    ${e=>e.theme.linkStylesHover};
  }

  &:focus {
    ${e=>e.theme.linkStylesFocus};
  }

  &:active {
    ${e=>e.theme.linkStylesActive};
  }
`,G=i(h)`
  ${e=>e.theme.visuallyHidden};
`,d=({title:e,description:r,iframe_html:g,link_title:n,link_url:t,allowCookies:f})=>{const s=b(f),[l,u]=m.useState(!1),c=g.match(/src="([^"]+)"/gi);let o=c?.length==1?c[0].replace('src="',""):"";return o&&(o=o.match(/^https:\/\/www.google.com\/maps/gi)?.length==1?o:""),t&&(t=t.match(/^https:\/\/goo.gl\/maps|https:\/\/www.google.com\/maps/gi)?.length==1?t:""),m.useEffect(()=>{u(!0)},[]),a.createElement(a.Fragment,null,a.createElement(p,null,e&&a.createElement(v,{level:3,text:e}),r&&a.createElement(E,{dangerouslySetInnerHTML:{__html:k(r)}}),(!t||!o)&&a.createElement(w,{alertType:"warning",title:"Invalid map"},"Embedded map contains invalid ",!t&&"link",!t&&!o&&" and ",!o&&"iframe data","; please report this to the content editor"),s&&o&&l&&a.createElement(M,{"data-testid":"GoogleMapContainer"},a.createElement(S,{src:o,"data-testid":"GoogleMapIframe",title:e||"Embedded map","aria-hidden":"true"})),s&&t&&l&&a.createElement(p,null,a.createElement(G,{href:t},n||"Google Maps link")),!s&&t&&l&&a.createElement(h,{href:t},n||"Google Maps link")))};try{d.displayName="GoogleMap",d.__docgenInfo={description:"A responsive Google Maps embed",displayName:"GoogleMap",props:{title:{defaultValue:null,description:"Title text. Optional.",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"The description text displayed under the title and above the map. Optional.",name:"description",required:!1,type:{name:"string"}},iframe_html:{defaultValue:null,description:`The map's iframe code as provide by the 'Embed a map' sharing option on Google Maps.
Used if cookies have been accepted.`,name:"iframe_html",required:!0,type:{name:"string"}},link_url:{defaultValue:null,description:`The map's URL as provided by the 'Send a link' sharing option on Google Maps.
Used if cookies have not been accepted; a link will be displayed instead of an embed.`,name:"link_url",required:!0,type:{name:"string"}},link_title:{defaultValue:null,description:"Title for the link used if cookies were not accepted. Optional.",name:"link_title",required:!1,type:{name:"string"}},allowCookies:{defaultValue:null,description:"Allow overriding if cookies are allowed (for stories).",name:"allowCookies",required:!1,type:{name:"boolean"}}}}}catch{}export{d as G};
