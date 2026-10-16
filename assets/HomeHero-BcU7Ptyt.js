import{s as r,r as l,H as f,R as t}from"./iframe-BNpMeywT.js";import{V as b}from"./style-helpers-0zitJ_SJ.js";import{G as _}from"./logo-CIk8PYf1.js";import{N as v}from"./logo-CyCPhMS1.js";import{W as k}from"./logo-ijHT6FvV.js";import{L as w}from"./LazyImage-CiqbweeC.js";import{S as y}from"./Searchbar-cozrMXEC.js";import{P as E}from"./PromotedLinks-BFHMUHm5.js";const $=r.header`
  background: ${e=>e.noBackground?"transparent":e.theme.cardinal_name==="north"?e.theme.theme_vars.colours.grey_light+"7a":e.theme.theme_vars.colours.white};
`,L=r.div`
  font-family: ${e=>e.theme.theme_vars.fontstack};
  overflow: hidden;
  background: ${e=>e.theme.theme_vars.colours.action}5A;
  padding: 30px 0;
  padding-bottom: 15px;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    background-image: url('${e=>e.$image}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &.loading {
      background-image: none;
    }
  }
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    padding: 60px 0;
  }
  @media screen and (min-width: calc(${e=>e.theme.theme_vars.breakpoints.l} + 60px)) {
    margin-right: auto;
    margin-left: auto;
    padding: 90px 0;
    max-width: 1680px;
  }
`,H=r.div`
  ${e=>e.theme.fontStyles}
  margin-right: 15px;
  margin-left: 15px;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    margin-right: 30px;
    margin-left: 30px;
  }

  @media screen and (min-width: calc(${e=>e.theme.theme_vars.breakpoints.l} + 60px)) {
    margin-right: auto;
    margin-left: auto;
    max-width: ${e=>e.theme.theme_vars.breakpoints.l};
  }
`,S=r.h1`
  ${e=>b};
`,T=r.div`
  padding: 30px;
  background: ${e=>e.theme.theme_vars.colours.white};
  background: ${e=>e.theme.theme_vars.colours.white}F2;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  border-radius: 5px;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    max-width: calc(50% - 60px);
  }
`,V=r.p`
  color: ${e=>e.theme.theme_vars.colours.grey_dark};
`,q=r.div`
  svg {
    margin-top: -17px;
    max-width: 450px;
    width: 95%;
    height: auto;
  }
  &.black_logo {
    svg {
      fill: black !important;
      path {
        fill: black !important;
      }
    }
  }
`,C=r.div`
  img {
    margin-top: -45px;
    max-width: 520px;
    width: 100%;
    height: auto;
  }
`,M=r.p`
  margin-bottom: 20px;
  margin-top: -10px;
`,p=({topline:e,strapline:s,imagesArray:o,promotedLinksArray:h,searchSuggestions:c=[],showSearch:u=!0,imageOverrideLogo:i,imageOverrideLogoAltText:d})=>{const n=l.useContext(f),[a,g]=l.useState(999),m=n.theme_vars.theme_name==="Memorial theme North"||n.theme_vars.theme_name==="Memorial theme West";return l.useEffect(()=>{g(Math.floor(Math.random()*o.length))},[]),t.createElement(t.Fragment,null,t.createElement($,null,t.createElement(w,{src:a!==999&&o[a].image1440x810?o[a].image1440x810:"",placeholder:a!==999&&o[a].image144x81?o[a].image144x81:"",visibilitySensorProps:{partialVisibility:!0}},x=>t.createElement(L,{className:a!==999?"loaded":"loading",$image:x,title:a!==999&&o[a].imageAltText?o[a].imageAltText:""},t.createElement(H,null,t.createElement(T,null,e&&t.createElement(V,null,e),t.createElement(S,null,`${n.full_name} Council`),i&&!m&&t.createElement(C,null,t.createElement("img",{src:i,width:"520",height:"150",alt:d?.trim()?d:"Logo"})),(!i||m)&&t.createElement(q,{className:m?"black_logo":""},n.cardinal_name==="north"?t.createElement(v,null):n.cardinal_name==="west"?t.createElement(k,null):t.createElement(_,null)),s&&t.createElement(M,null,s),u&&t.createElement(y,{isLight:!0,isLarge:!0,placeholder:"Search the site",submitInfo:{postTo:"/search",params:{type:"search"}},suggestions:c,maximumMatchesShown:4})),h.length>0&&t.createElement(E,{promotedLinksArray:h}))))))};try{p.displayName="HomeHero",p.__docgenInfo={description:"The Hero that should appear at the top of the home page.",displayName:"HomeHero",props:{topline:{defaultValue:null,description:"The line of text before the logo",name:"topline",required:!1,type:{name:"string"}},imageOverrideLogo:{defaultValue:null,description:"URL of an alternative logo to override the preset ones (520 x 150 px)",name:"imageOverrideLogo",required:!1,type:{name:"string"}},imageOverrideLogoAltText:{defaultValue:null,description:"Alt text for overridden logo",name:"imageOverrideLogoAltText",required:!1,type:{name:"string"}},strapline:{defaultValue:null,description:"The line of text after the logo",name:"strapline",required:!1,type:{name:"string"}},imagesArray:{defaultValue:null,description:"The images for the hero, minimum of one",name:"imagesArray",required:!0,type:{name:"HeroImageProp[]"}},promotedLinksArray:{defaultValue:null,description:"The main promoted links, an array that should be from 1-4, preferably 3",name:"promotedLinksArray",required:!0,type:{name:"PromotedLinkProp[]"}},searchSuggestions:{defaultValue:{value:"[]"},description:"Array of suggestion strings for autocomplete search input",name:"searchSuggestions",required:!1,type:{name:"string[]"}},showSearch:{defaultValue:{value:"true"},description:"Whether to display the site search within the hero",name:"showSearch",required:!1,type:{name:"boolean"}}}}}catch{}export{p as H};
