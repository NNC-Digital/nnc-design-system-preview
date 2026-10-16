import{s as t,R as a}from"./iframe-BNpMeywT.js";const n=t.div`  
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 50px;
    height: 50px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${e=>e.theme.theme_vars.colours.action};
    border-color: ${e=>e.theme.theme_vars.colours.action} transparent ${e=>e.theme.theme_vars.colours.action} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`,r=()=>a.createElement(n,null);try{r.displayName="LoadingSpinner",r.__docgenInfo={description:"",displayName:"LoadingSpinner",props:{}}}catch{}export{r as L};
