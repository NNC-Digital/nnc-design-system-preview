import{s as o,n as y,r as p,R as t}from"./iframe-BNpMeywT.js";const $=o.div`
  ${e=>e.theme.fontStyles}
  margin-bottom: 20px;
  border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.grey};

  @media (min-width: 40.0625em) {
    margin-bottom: 30px;
  }
`,S=o.div`
  text-align: right;
`,k=o.button`
  font-size: ${e=>e.theme.theme_vars.fontSizes.extra_small};
  position: relative;
  z-index: 1;
  margin: 0;
  margin-bottom: 5px;
  padding-top: ${e=>e.theme.theme_vars.spacingSizes.medium};
  padding-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
  border-width: 0;
  color: ${e=>e.theme.theme_vars.colours.action};
  background: none;
  cursor: pointer;
  &:hover {
    ${e=>e.theme.linkStylesHover};
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus};
  }
  &:active {
    ${e=>e.theme.linkStylesActive};
  }
`,w=o.span`
  ${e=>e.theme.visuallyHidden}
`,A=o.div`
  padding-top: 0;
`,E=o.div`
  ${e=>e.theme.headingStyles}
  position: relative;
  padding-right: 40px;
  border-top: 1px solid ${e=>e.theme.theme_vars.colours.grey};
  color: ${e=>e.theme.theme_vars.colours.action};
  cursor: pointer;
  padding-bottom: 10px;

  &:hover {
    border-top-color: ${e=>e.theme.theme_vars.colours.action};
    -webkit-box-shadow: inset 0 2px 0 0 ${e=>e.theme.theme_vars.colours.action};
    box-shadow: inset 0 2px 0 0 ${e=>e.theme.theme_vars.colours.action};
  }
`,q=o.div``,V=e=>e.$isFilter?y`
      ${n=>n.theme.theme_vars.h4}
      padding-top: 15px;
      padding-bottom: 15px;
    `:y`
      ${n=>n.theme.theme_vars.h3}
      padding-top: ${n=>n.theme.theme_vars.spacingSizes.small};
      padding-bottom: ${n=>n.theme.theme_vars.spacingSizes.small};
    `,z=o.button`
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  padding: 0;
  border-width: 0;
  color: inherit;
  background: none;
  text-align: left;
  cursor: pointer;
  -webkit-appearance: none;
  text-decoration: underline;

  ${V}

  &:focus {
    outline: 3px solid transparent;
    color: ${e=>e.theme.theme_vars.colours.black};
    background-color: ${e=>e.theme.theme_vars.colours.focus};
    -webkit-box-shadow: 0 -2px ${e=>e.theme.theme_vars.colours.focus},
      0 4px ${e=>e.theme.theme_vars.colours.black};
    box-shadow: 0 -2px ${e=>e.theme.theme_vars.colours.focus},
      0 4px ${e=>e.theme.theme_vars.colours.black};
    text-decoration: none;
  }

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:hover:not(:focus) {
    text-decoration: underline;
    text-decoration-style: dotted;
  }

  &:hover {
    text-decoration: none;
  }
`,I=o.button`
  ${e=>e.theme.linkStyles}
  background: none;
  border: none;
  margin-top: 15px;
  margin-bottom: 10px;
  padding: 0;
  font-size: ${e=>e.theme.theme_vars.fontSizes.extra_small};
`,C=o.button`
  ${e=>e.theme.linkStyles}
  background: none;
  border: none;
  margin-top: 15px;
  padding: 0;
  font-size: ${e=>e.theme.theme_vars.fontSizes.extra_small};
  cursor: pointer;

  &:hover {
    ${e=>e.theme.linkStylesHover}
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }
`,R=o.span`
  position: absolute;
  top: 22px;
  right: 4px;
  width: 34px;
  height: 32px;

  &:before {
    border-style: solid;
    border-width: 4px 4px 0 0;
    content: '';
    display: inline-block;
    height: 12px;
    position: relative;
    vertical-align: top;
    width: 12px;
    border-color: ${e=>e.theme.theme_vars.colours.black};
    top: 0;
    left: 6px;
    transform: rotate(135deg);
  }

  &:before {
    .accordion__section--expanded & {
      transform: rotate(-45deg);
      top: 10px;
    }
  }
`,F=o.div`
  margin-top: 10px;
  margin-bottom: 0;
  color: ${e=>e.theme.theme_vars.colours.black};
`,H=o.div`
  display: none;
  padding-top: 5px;
  padding-bottom: 15px;

  h2,
  h3,
  h4,
  h5 {
    &:first-child {
      margin-top: 0;
    }
  }

  @media (min-width: 40.0625em) {
    padding-bottom: 25px;
  }

  > :last-child {
    margin-bottom: 0;
  }

  .accordion__section--expanded & {
    display: block;
  }
`,b=({title:e,content:n,summary:h,isExpanded:s,accordionSectionId:r,onToggle:d,isFilter:l=!1,withReadMore:m,sectionId:u=!1})=>{const f=()=>s===!0?d(r,!1):d(r,!0),c=u===!1?`accordion_section${p.useId()}`:u;return t.createElement(A,{id:c,className:s&&"accordion__section--expanded"},t.createElement(E,{onClick:f},t.createElement(q,{as:l?"h3":"h2"},t.createElement(z,{title:s?"Minimise "+e:e,$isFilter:l,type:"button",id:`${c}_${r}-heading`,"aria-controls":`${c}_${r}-content`,"aria-expanded":s?"true":"false"},e,t.createElement(R,{"aria-hidden":"true"}))),h&&t.createElement(F,{id:`${c}_${r}-summary`},h),!s&&m&&t.createElement(I,{title:"Read more about "+e},"Read more")),t.createElement(H,{id:`${c}_${r}-content`,"aria-labelledby":`${c}_${r}-heading`},n,s&&m&&t.createElement(C,{onClick:f},"Show less")))};try{b.displayName="AccordionSection",b.__docgenInfo={description:"",displayName:"AccordionSection",props:{title:{defaultValue:null,description:"Section title",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"Section content",name:"content",required:!0,type:{name:"ReactNode"}},summary:{defaultValue:null,description:"Section summary",name:"summary",required:!1,type:{name:"string"}},isExpanded:{defaultValue:null,description:"Is the section expanded",name:"isExpanded",required:!1,type:{name:"boolean"}},accordionSectionId:{defaultValue:null,description:"Identify the section so sections can have the same title",name:"accordionSectionId",required:!1,type:{name:"number"}},onToggle:{defaultValue:null,description:"Method used internally for opening closing element",name:"onToggle",required:!1,type:{name:"(title: any, value: any) => void"}},isFilter:{defaultValue:{value:"false"},description:"We reuse this on filter pages where the section buttons have h4 styles, instead of h3 styles",name:"isFilter",required:!1,type:{name:"boolean"}},withReadMore:{defaultValue:null,description:"Should there be a read more link at the bottom of each section?",name:"withReadMore",required:!1,type:{name:"boolean"}},sectionId:{defaultValue:{value:"false"},description:"unique ID for the section",name:"sectionId",required:!1,type:{name:"string"}}}}}catch{}const x=({sections:e,isFilter:n=!1,withReadMore:h=!1})=>{e.map((i,a)=>{i.accordionSectionId=a});const[s,r]=p.useState(!1),[d,l]=p.useState(!0),[m,u]=p.useState(e);p.useEffect(()=>{const i=m.find(a=>a.isExpanded===!0);l(!i),r(!0)});const f=(i,a)=>{const v=m.map(g=>(g.accordionSectionId===i&&(g.isExpanded=a),g));u(v),l(!a)},c=()=>{l(!d);const i=m.map(a=>(a.isExpanded=d,a));u(i)},_=`accordion${p.useId()}`;return t.createElement($,{"data-testid":"Accordion",id:_},s&&e.length>1&&t.createElement(S,null,t.createElement(k,{onClick:c,type:"button","aria-expanded":!d},d?"Open all":"Close all",t.createElement(w,null," sections"))),m.map((i,a)=>t.createElement(b,{...i,key:a,onToggle:f,isFilter:n,withReadMore:h})))};try{x.displayName="Accordion",x.__docgenInfo={description:"",displayName:"Accordion",props:{sections:{defaultValue:null,description:"accepts multiple sections",name:"sections",required:!0,type:{name:"AccordionSectionProps[]"}},isFilter:{defaultValue:{value:"false"},description:"We reuse this on filter pages - but it looks slightly different",name:"isFilter",required:!1,type:{name:"boolean"}},withReadMore:{defaultValue:{value:"false"},description:"Should there be a read more link at the bottom of each section?",name:"withReadMore",required:!1,type:{name:"boolean"}}}}}catch{}export{x as A};
