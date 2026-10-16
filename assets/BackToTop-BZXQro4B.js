import{s as r,r as o,H as h,R as a}from"./iframe-BNpMeywT.js";import{C as p}from"./ChevronIcon-dH899Igz.js";const d=r.div`
  display: block;
`,u=r.button`
  display: ${e=>e.$visible?"inline-block":"none"};
  position: fixed;
  bottom: ${e=>e.theme.theme_vars.spacingSizes.medium};
  right: ${e=>e.theme.theme_vars.spacingSizes.medium};
  z-index: 2;
  background-color: ${e=>e.theme.theme_vars.colours.action};
  color: ${e=>e.theme.theme_vars.white};
  padding: ${e=>e.theme.theme_vars.spacingSizes.medium};
  font-weight: 700;
  border: 0;
  cursor: pointer;
  line-height: 1;
  font-family: ${e=>e.theme.theme_vars.fontstack};
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  text-decoration: none !important;

  /* When larger than xl position button to be just outside the container */
  @media screen and (min-width: calc(${e=>e.theme.theme_vars.breakpoints.xl} + ${e=>e.theme.theme_vars.spacingSizes.medium})) {
    right: calc((100% - ${e=>e.theme.theme_vars.breakpoints.xl}) / 2);
  }

  &:hover {
    background-color: ${e=>e.theme.theme_vars.colours.action_dark};
  }
  &:focus {
    outline: none;
    color: ${e=>e.theme.theme_vars.colours.black} !important;
    background-color: ${e=>e.theme.theme_vars.colours.focus};
    box-shadow: 0px -3px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
  }
  &:active {
    transform: translateY(2px);
    color: ${e=>e.theme.theme_vars.colours.black} !important;
    background-color: ${e=>e.theme.theme_vars.colours.focus};
    box-shadow: 0px -1px 0px 0px ${e=>e.theme.theme_vars.colours.black} inset;
  }
`,s=({isActive:e=!1})=>{const i=o.useContext(h),[c,n]=o.useState(!1),l=()=>{const t=document.documentElement.scrollTop;n(t>300)},m=t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})};return o.useEffect(()=>{window.addEventListener("scroll",l)}),a.createElement(d,{"data-testid":"BackToTop"},e&&a.createElement(u,{onClick:m,$visible:c,"data-testid":"BackToTopButton",type:"button","aria-label":"Go to the top of the page"},a.createElement(p,{colourFill:i.theme_vars.colours.white,direction:"up"})))};try{s.displayName="BackToTop",s.__docgenInfo={description:"",displayName:"BackToTop",props:{isActive:{defaultValue:{value:"false"},description:"Should the back to top button be displayed?",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}export{s as B};
