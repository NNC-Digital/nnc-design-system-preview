import{s as o,r as s,R as r}from"./iframe-BNpMeywT.js";import{h as g}from"./url-helpers-1hshT-U6.js";import{I as q}from"./SearchIcon-P-t3fl5x.js";import{N as b}from"./NewsArticleFilterAccordionText-CnKYmjT5.js";import{A as T}from"./Autocomplete-tFZAM-dD.js";const V=o.div`
  ${e=>e.theme.fontStyles}
  width: calc(100% - ${e=>e.$isLarge?"5rem":"3rem"});
`;o.label`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
`;const I=o.div`
  position: relative;
  width: auto;
  max-width: 750px;

  p {
    margin-bottom: 5px !important;
  }
`,A=o.button`
  position: absolute;
  top: 0;
  right: ${e=>e.$isLarge?"-5rem":"-3rem"};
  cursor: pointer;
  margin: 0;
  margin-top: ${e=>e.$isErrored?(e.$isLarge,"20px"):0};
  padding: ${e=>e.theme.theme_vars.spacingSizes.small};
  background: ${e=>e.$isLight?e.theme.theme_vars.colours.action:e.theme.theme_vars.colours.grey_darkest};
  color: ${e=>e.theme.theme_vars.colours.white};
  border: 1px solid transparent;
  border-top-right-radius: calc(${e=>e.theme.theme_vars.border_radius} * 2);
  border-bottom-right-radius: calc(${e=>e.theme.theme_vars.border_radius} * 2);

  width: ${e=>e.$isLarge?"5rem":"3rem"};
  text-align: center;
  /* height: ${e=>e.$isLarge?"2.9rem":"2.28rem"}; */
  height: ${e=>e.$isLarge?"3.22rem":"2.6rem"};
  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    margin-top: ${e=>e.$isErrored?(e.$isLarge,"26px"):0};
  }

  &:hover {
    background: ${e=>e.$isLight?e.theme.theme_vars.colours.action_dark:e.theme.theme_vars.colours.black};
  }

  &:focus {
    outline: none;
    background: ${e=>e.theme.theme_vars.colours.focus};
    box-shadow: 0 0 0 2px ${e=>e.theme.theme_vars.colours.focus}, 0 0 0 4px ${e=>e.theme.theme_vars.colours.black};
    -webkit-box-shadow: 0 0 0 2px ${e=>e.theme.theme_vars.colours.focus}, 0 0 0 4px ${e=>e.theme.theme_vars.colours.black};
    -moz-box-shadow: 0 0 0 2px ${e=>e.theme.theme_vars.colours.focus}, 0 0 0 4px ${e=>e.theme.theme_vars.colours.black};
    svg {
      path {
        fill: ${e=>e.theme.theme_vars.colours.black};
      }
    }
  }

  &:active {
    transform: translateY(1px);
    background-color: ${e=>e.theme.theme_vars.colours.focus};
    box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black};
    border-top-color: ${e=>e.theme.theme_vars.colours.black};
    border-bottom-color: transparent;
  }
`,P=o.span`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
`,$=({placeholder:e="Search",isLight:c,isLarge:n,searchTerm:v="",submitInfo:m,id:x="search",suggestions:_=[],minimumMatchLength:w=2,maximumMatchesShown:S=5})=>{let l=v,[a,u]=s.useState(l),[p,h]=s.useState(!1),[i,d]=s.useState(!1);function y(t){u(t),h(!0)}function k(t){u(t)}s.useEffect(()=>{if(i&&d(!1),!p)return;h(!1);let t=m.params;if(l!==a||!(b.search.queryParamKey in t)){t={...t,searchTerm:a};let E=Object.keys(t).map(function(f){return{key:f,value:t[f]}});g(m.postTo,E,["page"])}},[p,m,l,a,g]);const L=t=>{if(t&&t.preventDefault(),a==""){i||d(!0);return}h(!0)};return r.createElement(V,{"data-testid":"Searchbar",$isLarge:n},r.createElement("form",{onSubmit:L},r.createElement("div",{role:"search"},r.createElement(I,null,r.createElement(T,{id:x,name:b.search.queryParamKey,placeholder:e,onSelect:y,onChange:k,value:a,suggestions:_,minimumMatchLength:w,maximumMatchesShown:S,isLarge:n,hasAdjacentButton:!0,isErrored:i,hasHiddenLabel:!0,required:!0,errorText:"The search field is required.",hasLightBackground:c}),r.createElement(A,{type:"submit",value:"Search",$isLarge:n,$isLight:c,$isErrored:i,"data-testid":"SearchButton"},r.createElement(q,{colourFill:"#fff"}),r.createElement(P,null,"Search"))))))};try{$.displayName="Searchbar",$.__docgenInfo={description:"",displayName:"Searchbar",props:{id:{defaultValue:{value:"search"},description:"ID passed to the Autocomplete component",name:"id",required:!1,type:{name:"string"}},searchTerm:{defaultValue:{value:""},description:"The searched for term",name:"searchTerm",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"Search"},description:"Placeholder text",name:"placeholder",required:!1,type:{name:"string"}},isLight:{defaultValue:null,description:"Whether or not this is the light version of the search",name:"isLight",required:!1,type:{name:"boolean"}},isLarge:{defaultValue:null,description:"If used on it's own (eg search results page) then will be slightly larger",name:"isLarge",required:!1,type:{name:"boolean"}},suggestions:{defaultValue:{value:"[]"},description:"Array of suggestion strings for autocomplete input",name:"suggestions",required:!1,type:{name:"string[]"}},minimumMatchLength:{defaultValue:{value:"2"},description:"The minimum number of characters that need to be typed before matches in the suggestions list are looked for",name:"minimumMatchLength",required:!1,type:{name:"number"}},maximumMatchesShown:{defaultValue:{value:"5"},description:"The maximum number of matched suggestions shown in the dropdown list",name:"maximumMatchesShown",required:!1,type:{name:"number"}},submitInfo:{defaultValue:null,description:"Where to post the form submission to and what params to use",name:"submitInfo",required:!1,type:{name:"SubmitInfoProps"}}}}}catch{}export{$ as S};
