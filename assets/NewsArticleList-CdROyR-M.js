import{s as r,R as a}from"./iframe-BNpMeywT.js";import{L as m}from"./LazyImage-CiqbweeC.js";import{N as l}from"./NewsArticleDate-FDqXfZ0Q.js";import{R as d}from"./Row-DErQ7Ddw.js";import{C as p}from"./Column-Dpu6NTYh.js";const i=150,h=200,n=r.div`
  ${e=>e.theme.fontStyles};
`,c=r.div`
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
`,g=r.a`
  background: ${e=>e.theme.cardinal_name==="north"?e.theme.theme_vars.colours.white:e.theme.theme_vars.colours.grey_light} !important;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.3s ease;
  border-bottom: 5px solid ${e=>e.theme.theme_vars.colours.action};
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  overflow: hidden;
  /* display: block; */
  text-decoration: none !important;
  font-weight: normal !important;

  &:hover {
    border-bottom: 5px solid ${e=>e.theme.theme_vars.colours.action_dark};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;

    .news-article-list__title {
      ${e=>e.theme.linkStylesHover};
    }
  }

  &:focus {
    outline: none;
    border-bottom: 5px solid ${e=>e.theme.theme_vars.colours.focus};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;

    .news-article-list__title {
      ${e=>e.theme.linkStylesFocus};
    }
  }

  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.medium};

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    display: flex;
  }
`,u=r.div`
  padding: 15px;

  ${e=>e.theme.fontStyles};

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    width: ${e=>e.$withImage?"50%":"100%"};
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    width: ${e=>e.$withImage?"66%":"100%"};
  }
`,x=r.div`
  width: 100%;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    width: 180px;
    flex: 0 0 180px;
  }

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    width: 50%;
    flex: none;
  }

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    width: 33%;
  }
`,b=r.span`
  display: block;
  width: 100%;
  height: ${i}px;
  overflow: hidden;
  background-image: url('${e=>e.$background}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-self: center;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    height: ${i}px;
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    height: ${h}px;
  }
`,w=r.div`
  padding-top: 1em;
  margin-top: auto;
  p {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  }
`,f=r.div`
  font-weight: bold;
  margin: ${e=>e.theme.theme_vars.spacingSizes.large} 0;
`,o=({results:e})=>e&&e.length>0?a.createElement(n,{"data-testid":"NewsArticleList"},a.createElement(d,{isList:!0},e.map(t=>a.createElement(p,{isList:!0,small:"full",medium:"full",large:"full",key:t.id},a.createElement(g,{href:t.url,title:t.title},t.image720x405&&a.createElement(x,null,a.createElement(m,{src:t.image720x405,placeholder:t.image72x41,visibilitySensorProps:{partialVisibility:!0}},s=>a.createElement(b,{className:"news-article-list__image",$background:s,role:"img","aria-label":t.imageAltText?t.imageAltText:"News article"}))),a.createElement(u,{$withImage:!!t.image720x405},a.createElement(c,{className:"news-article-list__title"},t.title),t.excerpt.length>140?t.excerpt.substr(0,139).trim()+"…":t.excerpt,a.createElement(w,null,a.createElement(l,{text:t.date.toString(),format:"X"})))))))):a.createElement(n,{"data-testid":"NewsArticleList"},a.createElement(f,null,"No results found"));try{o.displayName="NewsArticleList",o.__docgenInfo={description:"",displayName:"NewsArticleList",props:{results:{defaultValue:null,description:"Array of results",name:"results",required:!0,type:{name:"NewsArticleProps[]"}},totalResults:{defaultValue:null,description:"The total number of results",name:"totalResults",required:!1,type:{name:"number"}},pageNumber:{defaultValue:null,description:"The current page number",name:"pageNumber",required:!1,type:{name:"number"}},sortBy:{defaultValue:null,description:"What we're currently sorting by",name:"sortBy",required:!1,type:{name:"string"}}}}}catch{}export{o as N};
