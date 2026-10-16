import{s as d,r as n,R as t}from"./iframe-BNpMeywT.js";import{w as f}from"./cookies-eTrdNKtl.js";var a=(e=>(e.YouTube="YouTube",e.Vimeo="Vimeo",e))(a||{});const y=d.figure`
  display: block;
  padding-top: 56.25%;
  position: relative;
  margin-bottom: 15px;

  iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-style: none;
  }
`,h=d.a`
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
`,s=({video_id:e,provider:l,description:o,allowCookies:c,...b})=>{const u=f(c),[m,p]=n.useState(!1);let i,r;return l==a.YouTube&&(i=`https://www.youtube.com/watch?v=${e}`,r=`https://www.youtube.com/embed/${e}?rel=0&cc_load_policy=1`),l==a.Vimeo&&(i=`https://vimeo.com/${e}`,r=`https://player.vimeo.com/video/${e}`),n.useEffect(()=>{p(!0)},[]),t.createElement(t.Fragment,null,u&&m?t.createElement(y,{"data-testid":"Video"},t.createElement("iframe",{src:r,title:o,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;","data-testid":"VideoIframe"})):t.createElement(h,{href:i,title:o,"data-testid":"VideoLink"},o))};try{s.displayName="Video",s.__docgenInfo={description:"A responsive video embed for YouTube or Vimeo",displayName:"Video",props:{video_id:{defaultValue:null,description:"The unique video id",name:"video_id",required:!0,type:{name:"string"}},provider:{defaultValue:null,description:"The video streaming provider",name:"provider",required:!0,type:{name:"enum",value:[{value:'"YouTube"'},{value:'"Vimeo"'}]}},description:{defaultValue:null,description:"The description link text displayed when cookies are disabled",name:"description",required:!0,type:{name:"string"}},allowCookies:{defaultValue:null,description:"Allow overriding if cookies are allowed",name:"allowCookies",required:!1,type:{name:"boolean"}}}}}catch{}export{s as V};
