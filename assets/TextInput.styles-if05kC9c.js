import{s as r}from"./iframe-BNpMeywT.js";const o=r.input`
  display: block;
  width: 100%;
  ${e=>e.theme.fontStyles}
  margin-top: 0 !important;
  margin-bottom: 0;
  padding: ${e=>e.$isLarge?e.theme.theme_vars.spacingSizes.small:e.theme.theme_vars.spacingSizes.extra_small};
  border: solid
    ${e=>e.$isErrored?e.theme.theme_vars.colours.negative:e.theme.theme_vars.colours.black};
  border-width: ${e=>e.$isErrored?e.theme.theme_vars.border_width_error:e.theme.theme_vars.border_width};
  border-radius: ${e=>e.$isLarge?e.theme.theme_vars.border_radius_large:e.theme.theme_vars.border_radius};

  &:focus {
    outline: none;
    box-shadow: ${e=>e.theme.theme_vars.colours.focus} 0 0 0 2px,
      ${e=>e.theme.theme_vars.colours.black} 0 0 0 4px;
    transition: box-shadow 0.3s ease 0s;
  }

  &::placeholder {
    color: ${e=>e.theme.theme_vars.colours.placeholder};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: ${e=>e.theme.theme_vars.colours.placeholder};
  }
  &::-ms-input-placeholder {
    color: ${e=>e.theme.theme_vars.colours.placeholder};
  }
`;export{o as S};
