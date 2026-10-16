import{s as t}from"./iframe-BNpMeywT.js";const r=t.input`
  ${e=>e.theme.fontStyles}
  margin-top: 0 !important;
  margin-bottom: 25px;
  padding: 5px;
  border: solid
    ${e=>e.$isErrored?e.theme.theme_vars.colours.negative:e.theme.theme_vars.colours.black};
  border-width: ${e=>e.$isErrored?"3px":"2px"};
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  display: block;

  &:focus {
    outline: none;
    box-shadow: ${e=>e.theme.theme_vars.colours.focus} 0 0 0 3px;
    transition: box-shadow 0.3s ease 0s;
  }
`,s=t.p`
  ${e=>e.theme.fontStyles}
  color: ${e=>e.theme.theme_vars.colours.negative};
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
  font-size: 0.8rem;
  line-height: 1.1;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    font-size: 18px;
    font-size: 1rem;
    line-height: 1.25;
  }
`;export{s as E,r as S};
