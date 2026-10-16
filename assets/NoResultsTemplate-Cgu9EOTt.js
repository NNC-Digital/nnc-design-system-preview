import{s as t,R as i}from"./iframe-BNpMeywT.js";const s=t.div`
  display: block;

  input {
    max-width: 100%;
  }

  input[type='text'] {
    margin-bottom: 0;
  }
`,r=t.div`
  width: 100%;
  display: flex;
  background: ${e=>e.theme.theme_vars.colours.grey_light}75;
  padding: 0 ${e=>e.theme.theme_vars.spacingSizes.medium};

  input {
    width: 100%;
    margin-bottom: 0;
  }
`,n=t.label`
  margin-bottom: 5px;
  font-weight: bold;
`;t.div`
  color: ${e=>e.theme.theme_vars.colours.grey_dark};
`;const l=t.div`
  display: flex;
  align-items: end;
  padding-bottom: 0;
  height: 100%;
`,d=t.button`
    border: ${e=>e.$isWarning?"3px":"1px"} solid
    ${e=>e.$isWarning?e.theme.theme_vars.colours.negative:e.theme.theme_vars.colours.white};
    background: ${e=>e.$isWarning?e.theme.theme_vars.colours.white:e.theme.theme_vars.colours.action};
    color: ${e=>e.$isWarning?e.theme.theme_vars.colours.negative:e.theme.theme_vars.colours.white};
    padding: ${e=>e.theme.theme_vars.spacingSizes.small};
    cursor: pointer;
    border-radius: ${e=>e.theme.theme_vars.border_radius};
    min-height: 42px;
    margin-right: ${e=>e.theme.theme_vars.spacingSizes.medium};
    font-weight: bold;

    &:hover {
        background: ${e=>e.$isWarning?e.theme.theme_vars.colours.action_light:e.theme.theme_vars.colours.action_dark};
        color: ${e=>e.$isWarning?e.theme.theme_vars.colours.action_dark:e.theme.theme_vars.colours.white};
        text-decoration: underline;
        text-decoration-style: dotted;
    }

    &:focus {
        ${e=>e.theme.linkStylesFocus}
    }

    &:active {
        ${e=>e.theme.linkStylesActive}
    }

    ${e=>{if(e.size==="large")return`
          font-size: 16px;
          padding: 14px 24px;
        `}}

    ${e=>e.$isWarning&&e.size==="large"&&`
        padding: 12px 24px;
      `}
`,h=t.span`
  margin-right: ${e=>e.theme.theme_vars.spacingSizes.small};
`,m=t.div`
  width: 100%;
  border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.grey};
  color: ${e=>e.theme.theme_vars.colours.grey_dark};
`,c=t.div`
  background: ${e=>e.theme.theme_vars.colours.white};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.3s ease;
  border-bottom: 5px solid ${e=>e.theme.theme_vars.colours.action};
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  padding-top: ${e=>e.theme.theme_vars.spacingSizes.small};
  padding-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
  padding-left: ${e=>e.theme.theme_vars.spacingSizes.medium};
  padding-right: ${e=>e.theme.theme_vars.spacingSizes.medium};
`;t.span`
  word-wrap: break-word;
`;const p=t.div`
  display: ${e=>e.$showFilters?"flex":"none"};

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: flex;
  }
`,g=t.button`
  cursor: pointer;
  width: 100%;
  border: none;
  background: none;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small};
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
  ${e=>e.theme.theme_vars.h4}
  ${e=>e.theme.linkStyles}
  &:hover {
    ${e=>e.theme.linkStylesHover}
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: none;
  }
`,v=t.fieldset`
  display: block;
  border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.grey};
  padding-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
  position: relative;
`,u=t.legend`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 0;
`,b=t.button`
    position: relative;
    background: none;
    border: none;
    color: ${e=>e.theme.theme_vars.colours.action};
    width: 100%;
    white-space: normal;
    cursor: pointer;
    text-align: left;
    padding-right: 30px;
    padding-top: ${e=>e.theme.theme_vars.spacingSizes.small};
    padding-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
    ${e=>e.theme.theme_vars.h4}
    ${e=>e.theme.linkStyles}
    &:hover {
        ${e=>e.theme.linkStylesHover}
    }
    &:focus {
        ${e=>e.theme.linkStylesFocus}
    }
    &:active {
        ${e=>e.theme.linkStylesActive}
    }
    margin: 0;
`,f=t.span`
  position: absolute;
  top: 5px;
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
    top: ${e=>e.$isOpen?"15px":"10px"};
    left: 6px;
    transform: ${e=>e.$isOpen?"rotate(-45deg)":"rotate(135deg)"};
  }
`,$=t.div``;t.div`
  font-weight: bold;
  display: none;
  padding: 0 ${e=>e.theme.theme_vars.spacingSizes.medium};

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    display: block;
  }
`;const y=t.div`
  display: ${e=>e.$isOpen?"block":"none"};
`,_=t.div`
  display: flex;
  justify-content: space-between;
`,w=t.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${e=>e.theme.theme_vars.spacingSizes.small};
`,x=t.button`
  font-size: ${e=>e.theme.theme_vars.fontSizes.extra_small};
  position: relative;
  z-index: 1;
  margin: 0;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small} 0;
  margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.extra_small};
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
`,k=t.span`
  ${e=>e.theme.visuallyHidden}
`,S=t.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${e=>e.theme.theme_vars.spacingSizes.small};
`,z=t.button`
  margin-right: ${e=>e.theme.theme_vars.spacingSizes.medium};
  border: 2px solid ${e=>e.theme.theme_vars.colours.action};
  background: ${e=>e.theme.theme_vars.colours.white};
  color: ${e=>e.theme.theme_vars.colours.action};
  cursor: pointer;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    ${e=>e.theme.linkStylesHover}
    background: ${e=>e.theme.theme_vars.colours.action_light}
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }
  ${e=>{if(e.size==="large")return`
        font-size: 16px;
        padding: 14px 24px;
      `}}
`,F=t.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  cursor: pointer;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small} 0;
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
`,C=t.a`
  display: block;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small} 0;
  flex-grow: 1;
  ${e=>e.theme.theme_vars.h4}
  ${e=>e.theme.linkStyles}
  &:hover {
    ${e=>e.theme.linkStylesHover}
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }
`,A=t.p`
  font-weight: bold;
  margin: ${e=>e.theme.theme_vars.spacingSizes.small} 0;
`,H=t.div`
  display: flex;
  justify-content: space-between;
`,T=t.div`
  width: 32px;
  height: 58px;
  position: relative;
  svg {
    color: ${e=>e.theme.theme_vars.colours.action_dark};
  }

  span {
    position: absolute;
    top: 6px;
    left: 11px;
    color: white;
    font-size: 0.9rem;
  }
`,W=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`,j=t.div`
  width: 100%;
  padding-top: 70%;
  position: relative;
`,L=t.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
`,a=({contentType:e="results"})=>i.createElement("div",{dangerouslySetInnerHTML:{__html:`
        <p>
            <span>We couldn't find any ${e} on our directory that match your search.</span>
        </p>
        <p>
            <span>You can try again with a different search term or remove the postcode to view ${e==="events"?"events":"support"} available across all of North Northamptonshire.</span>
        </p>
        <p>
            <span>You might also find what you need in one of our popular support categories:</span>
        </p>
        <ul>
            <li data-list-item-id="e22c4dc39c92119d26e70c62385849b39">
                <a href="https://www.northnorthants.gov.uk/directory/support-offer?page=1&amp;provider_category=204"><span>Children and families</span></a>
            </li>
            <li data-list-item-id="e4433aae6c1c132dc567a0033d721f23a">
                <a href="https://www.northnorthants.gov.uk/directory/support-offer?page=1&amp;provider_category=126"><span>Community groups</span></a>
            </li>
            <li data-list-item-id="e8258a989ae79b013fa3ddb0757487755">
                <a href="https://www.northnorthants.gov.uk/directory/support-offer?page=1&amp;provider_category=162"><span>Food support</span></a>
            </li>
            <li data-list-item-id="e2a5c68c4edd91b64635095e52910c320">
                <a href="https://www.northnorthants.gov.uk/directory/support-offer?page=1&amp;provider_category=135"><span>Housing</span></a>
            </li>
            <li data-list-item-id="e13fe4ab6d0899849a45a12873b28cdc7">
                <a href="https://www.northnorthants.gov.uk/directory/support-offer?page=1&amp;provider_category=195"><span>Mental health and wellbeing</span></a>
            </li>
            <li data-list-item-id="eb6c0dce58edbff50832aa0b10a7583d1">
                <a href="https://www.northnorthants.gov.uk/directory/support-offer?page=1&amp;provider_category=141"><span>Money, benefits and debt</span></a>
            </li>
            <li data-list-item-id="e4d9919952839158bd6c8428d3f1618d9">
                <a href="https://www.northnorthants.gov.uk/directory/support-offer?page=1&amp;provider_category=147"><span>Physical health and disabilities</span></a>
            </li>
            <li data-list-item-id="e75ec6e837465b16129ecb4e684de5916">
                <a href="https://www.northnorthants.gov.uk/directory/support-offer?page=1&amp;provider_category=198"><span>Sports, leisure and wellbeing</span></a>
            </li>
            <li data-list-item-id="e041fb0b546f99e164806e88766dafde2">
                <a href="https://www.northnorthants.gov.uk/directory/support-offer?page=1&amp;provider_category=150"><span>Work, education and volunteering</span></a>
            </li>
        </ul>
      `}});try{a.displayName="NoResultsTemplate",a.__docgenInfo={description:"",displayName:"NoResultsTemplate",props:{contentType:{defaultValue:{value:"results"},description:"The type of content being searched (e.g., 'events', 'results')",name:"contentType",required:!1,type:{name:"string"}}}}}catch{}export{_ as A,l as B,s as C,g as F,n as L,z as M,a as N,m as R,r as S,x as T,k as V,d as a,h as b,p as c,v as d,u as e,b as f,f as g,y as h,w as i,$ as j,W as k,S as l,F as m,c as n,H as o,C as p,T as q,j as r,L as s,A as t};
