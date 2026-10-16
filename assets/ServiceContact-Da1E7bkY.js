import{s as t,r as u,H as g,R as a}from"./iframe-BNpMeywT.js";import{R as f}from"./Row-DErQ7Ddw.js";import{C as l}from"./Column-Dpu6NTYh.js";import{W as v}from"./WebsiteIcon-D_41eJvM.js";import{E as y}from"./EmailIcon-mZ8Xawbg.js";import{P as b}from"./PhoneIcon-67qwjQ5f.js";const L=t.div`
  display: block;

  .striped-column {
    padding: ${e=>e.theme.theme_vars.spacingSizes.small};

    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
      padding: ${e=>e.theme.theme_vars.spacingSizes.large};
    }

    &:nth-of-type(even) {
      background-color: ${e=>e.theme.cardinal_name==="north"?e.theme.theme_vars.colours.white:e.theme.theme_vars.colours.action_light};
    }
  }
`,P=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    flex-wrap: nowrap;
    justify-content: flex-end;
  }
`;t.div`
  position: relative;
  padding-top: 50%;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.medium};
`;t.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;const q=t.a`
  display: block;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small};
`;t.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;const H=t.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
  cursor: pointer;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small} 0;
  margin-right: ${e=>e.theme.theme_vars.spacingSizes.medium};
  &:hover {
    ${e=>e.theme.linkStylesHover}
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }

  svg {
    margin-right: ${e=>e.theme.theme_vars.spacingSizes.small};
  }
`,R=t.div``,T=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  flex-wrap: wrap;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    flex-wrap: nowrap;
    flex-grow: 0;
  }
`,V=t.div`
  min-width: 200px;
  margin-left: ${e=>e.theme.theme_vars.spacingSizes.medium};
`,W=t.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 70%;
`,A=t.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
`,_=t.div`
  display: flex;

  .striped-contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${e=>e.theme.theme_vars.spacingSizes.medium};

    @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
      border-right: 1px solid
        ${e=>e.theme.cardinal_name==="north"?e.theme.theme_vars.colours.grey:e.theme.theme_vars.colours.action_light};
    }

    &:last-of-type {
      border: none;
    }
  }
`,r=t.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.medium};
`,o=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
`,x=t.div``,w=t.div`
  font-weight: bold;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
  text-align: center;
`,S=t.a`
  display: block;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small} 0;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
  text-align: center;
`,k=t.a`
  word-break: break-all;
  display: block;
  text-align: center;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small} 0;
`,$=t.a`
  word-break: break-all;
  display: block;
  text-align: center;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small} 0;
`,p=({website:e,email:n,contacts:m,websiteTitle:c})=>{const s=u.useContext(g);return a.createElement(_,{"data-testid":"ServiceContact"},a.createElement(f,{hasWrap:!1},e&&a.createElement(l,{small:"full",medium:"full",large:"auto",classes:"striped-contacts"},a.createElement(r,null,a.createElement(v,{colourFill:s.theme_vars.colours.black})),a.createElement(o,null,a.createElement(k,{href:e},c?`${c}`:e))),n&&a.createElement(l,{small:"full",medium:"full",large:"auto",classes:"striped-contacts"},a.createElement(r,null,a.createElement(y,{colourFill:s.theme_vars.colours.black})),a.createElement(o,null,a.createElement($,{href:`mailto:${n}`},n))),m?.length>0&&a.createElement(l,{small:"full",medium:"full",large:"auto",classes:"striped-contacts"},a.createElement(r,null,a.createElement(b,{colourFill:s.theme_vars.colours.black})),a.createElement(o,null,m.map(i=>a.createElement(x,{key:i.id},i.name&&a.createElement(w,null,i.name),i.phones.map((d,h)=>a.createElement(S,{href:`tel:${d.number}`,key:h},d.number))))))))};try{p.displayName="ServiceContact",p.__docgenInfo={description:"",displayName:"ServiceContact",props:{email:{defaultValue:null,description:"The optional email address",name:"email",required:!1,type:{name:"string"}},website:{defaultValue:null,description:"The optional website address",name:"website",required:!1,type:{name:"string"}},websiteTitle:{defaultValue:null,description:"The optional website title (if provided, used as link text)",name:"websiteTitle",required:!1,type:{name:"string"}},contacts:{defaultValue:null,description:"An array of service contacts. May be empty.",name:"contacts",required:!0,type:{name:"ServiceContactProps[]"}}}}}catch{}export{L as C,H as F,q as M,R as P,T as S,V as a,W as b,A as c,P as d,p as e};
