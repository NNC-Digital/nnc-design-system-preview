import{s as r,R as t}from"./iframe-BNpMeywT.js";import{L as d}from"./LazyImage-CiqbweeC.js";import{N as x}from"./NewsArticleDate-FDqXfZ0Q.js";import{H as c}from"./Heading-C7kzbY1R.js";import{B as h}from"./Button-S36CQVVg.js";import{R as n}from"./Row-DErQ7Ddw.js";import{C as o}from"./Column-Dpu6NTYh.js";const l=150,u=200,g=r.div`
  ${e=>e.theme.fontStyles};
  padding: 15px 0;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
  }
`;r.div`
  h2 {
    margin-top: 30px;
  }
`;const b=r.p`
  ${e=>e.theme.linkStyles};
  display: block;
  margin-bottom: 15px;
  height: fit-content;
  font-size: 1.2rem;
  line-height: 1.2;
  min-width: 100%;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    font-size: 1.35rem;
    line-height: 1.3;
    max-width: 960px;
  }
`,w=r.a`
  background: ${e=>e.theme.cardinal_name==="north"?e.theme.theme_vars.colours.white:e.theme.theme_vars.colours.grey_light} !important;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.3s ease;
  border-bottom: 5px solid ${e=>e.theme.theme_vars.colours.action};
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  overflow: hidden;
  display: block;
  text-decoration: none !important;
  font-weight: normal !important;
  margin-bottom: 15px;
  width: 100%;
  height: 100%;

  &:hover {
    border-bottom: 5px solid ${e=>e.theme.theme_vars.colours.action_dark};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;

    .article_title {
      ${e=>e.theme.linkStylesHover};
    }
  }

  &:focus {
    outline: none;
    border-bottom: 5px solid ${e=>e.theme.theme_vars.colours.focus};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;

    .article_title {
      ${e=>e.theme.linkStylesFocus};
    }
  }

  &:active {
    outline: none;
    transform: translateY(3px);
    border-bottom: 5px solid transparent;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15), 0px 2px 0px 0px ${e=>e.theme.theme_vars.colours.black} !important;
    -webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15),
      0px 2px 0px 0px ${e=>e.theme.theme_vars.colours.black} !important;
    -moz-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15),
      0px 2px 0px 0px ${e=>e.theme.theme_vars.colours.black} !important;

    .article_title {
      ${e=>e.theme.linkStylesActive};
    }
  }
`,f=r.div`
  padding: 15px;
`,k=r.span`
  display: block;
  width: 100%;
  height: ${l}px;
  overflow: hidden;
  background-image: url('${e=>e.$background}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-self: center;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    flex: 0 0 40%;
    height: 100%;
    min-height: ${l}px;
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    flex: none;
    height: ${u}px;
  }
`,y=r.div`
  margin-top: auto;
  p {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  }
`,v=r.div`
  text-align: center;
  margin-top: 25px;
`,m=({articles:e,withoutTitle:s=!1,viewAllLink:i="/"})=>e&&e.length>0?t.createElement(t.Fragment,null,!s&&t.createElement(c,{text:"News articles and press releases"}),t.createElement(g,null,t.createElement(n,{isList:!0},e.map(a=>t.createElement(o,{isList:!0,small:"full",medium:"one-half",large:"one-third",key:a.id},t.createElement(w,{href:a.url},t.createElement(n,null,a.image720x405&&t.createElement(o,{small:"full",medium:"full",large:"full",hasPadding:!1},t.createElement(d,{src:a.image720x405,placeholder:a.image72x41,visibilitySensorProps:{partialVisibility:!0}},p=>t.createElement(k,{$background:p,role:"img","aria-label":a.imageAltText?a.imageAltText:""}))),t.createElement(o,{small:"full",medium:"full",large:"full"},t.createElement(f,null,t.createElement(b,{className:"article_title"},a.title),t.createElement(y,null,t.createElement(x,{text:a.date.toString(),format:"X"})))))))))),i&&t.createElement(v,null,t.createElement(h,{text:"View all news",primary:!1,url:i,size:"large"}))):t.createElement(t.Fragment,null);try{m.displayName="NewsArticleFeaturedBlock",m.__docgenInfo={description:"Block displaying up to 9 news article tiles, with image, title and date for each",displayName:"NewsArticleFeaturedBlock",props:{articles:{defaultValue:null,description:"Array of news article data",name:"articles",required:!0,type:{name:"NewsArticleProps[]"}},withoutTitle:{defaultValue:{value:"false"},description:"Optionally do not display the title",name:"withoutTitle",required:!1,type:{name:"boolean"}},viewAllLink:{defaultValue:{value:"/"},description:"Optionally add a button to view all news",name:"viewAllLink",required:!1,type:{name:"string"}}}}}catch{}export{m as N};
