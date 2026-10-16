import{s as d,g as M,r as S,R as a}from"./iframe-BNpMeywT.js";import{F as Y}from"./FormButton-qyf2Sj6r.js";import{g as H,c as k}from"./cookies-eTrdNKtl.js";import{d as E}from"./dayjs.min-BsiGf0vY.js";const _=d.div`
  ${e=>e.theme.fontStyles}
  background-color: ${e=>e.theme.theme_vars.colours.grey_light};
  padding: ${e=>e.theme.theme_vars.spacingSizes.medium} 0;
  padding-bottom: 25px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  position: sticky;
  z-index: 1;
`,z=d.button`
  border: 0;
  background: transparent;
  padding: ${e=>`${e.theme.theme_vars.spacingSizes.medium} ${e.theme.theme_vars.spacingSizes.small}`};
  cursor: pointer;

  ${e=>e.theme.fontStyles}
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
`,j=d.div`
  display: ${e=>e.isInline?"grid":"block"};
  grid-template-columns: 1fr auto;
  align-items: baseline;
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
`,q=d.p`
  ${e=>e.theme.theme_vars.h3}
`,O=d.div`
  margin: ${e=>e.theme.theme_vars.spacingSizes.medium} 0;

  a {
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
  }
`,F=d.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  align-items: flex-start;

  .button--primary {
    margin-right: 10px;
    line-height: 1.3;
    width: 50%;

    &:last-of-type {
      margin-right: 0;
      line-height: 1.3;
    }
  }

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.s}) {
    display: block;

    .button--primary {
      width: auto;
      &:last-of-type {
        line-height: 1.3;
      }
    }
  }

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.m}) {
    display: block;

    .button--primary {
      width: auto;
      &:last-of-type {
        line-height: 1.3;
      }
    }
  }
`;var b={exports:{}},V=b.exports,N;function I(){return N||(N=1,(function(e,u){(function(m,f){e.exports=f()})(V,(function(){var m="minute",f=/[+-]\d\d(?::?\d\d)?/g,T=/([+-]|\d\d)/g;return function(U,C,l){var i=C.prototype;l.utc=function(t){var n={date:t,utc:!0,args:arguments};return new C(n)},i.utc=function(t){var n=l(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),m):n},i.local=function(){return l(this.toDate(),{locale:this.$L,utc:!1})};var B=i.parse;i.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),B.call(this,t)};var $=i.init;i.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else $.call(this)};var w=i.utcOffset;i.utcOffset=function(t,n){var s=this.$utils().u;if(s(t))return this.$u?0:s(this.$offset)?w.call(this):this.$offset;if(typeof t=="string"&&(t=(function(p){p===void 0&&(p="");var y=p.match(f);if(!y)return null;var g=(""+y[0]).match(T)||["-",0,0],A=g[0],x=60*+g[1]+ +g[2];return x===0?0:A==="+"?x:-x})(t),t===null))return this;var c=Math.abs(t)<=16?60*t:t,o=this;if(n)return o.$offset=c,o.$u=t===0,o;if(t!==0){var r=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(c+r,m)).$offset=c,o.$x.$localOffset=r}else o=this.utc();return o};var v=i.format;i.format=function(t){var n=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return v.call(this,n)},i.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var D=i.toDate;i.toDate=function(t){return t==="s"&&this.$offset?l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():D.call(this)};var h=i.diff;i.diff=function(t,n,s){if(t&&this.$u===t.$u)return h.call(this,t,n,s);var c=this.local(),o=l(t).local();return h.call(c,o,n,s)}}}))})(b)),b.exports}var J=I();const L=M(J),P=()=>{let e=new Date;e.setTime(e.getTime()+365*24*60*60*1e3);const u={bannerDismissed:!0,cookiesAccepted:!0,cookiesAcceptedConfirmationBanner:!1,cookieCreated:e.toUTCString()};document.cookie=`${k}=${JSON.stringify(u)};expires=${e.toUTCString()};path=/`,location.reload()},W=()=>{let e=new Date;e.setTime(e.getTime()+365*24*60*60*1e3);const u={bannerDismissed:!0,cookiesAccepted:!1,cookiesAcceptedConfirmationBanner:!1,cookieCreated:e.toUTCString()};document.cookie=`${k}=${JSON.stringify(u)};expires=${e.toUTCString()};path=/`},R=({title:e,paragraph:u,acceptButtonText:m,acceptConfirmationText:f="You've accepted all cookies.",rejectButtonText:T,rejectConfirmationText:U="You've rejected all cookies.",acceptCallback:C})=>{E.extend(L),S.useEffect(()=>{D()},[]);const[l,i]=S.useState(!1),[B,$]=S.useState(!1),[w,v]=S.useState(!1),D=()=>{let o=H(k);if(o==null)i(!0);else{var r=o.includes('"cookiesAccepted":true'),p=o.includes('"bannerDismissed":true'),y=o.includes('"cookiesAcceptedConfirmationBanner":true');if(p||i(!1),r&&!y){var g=JSON.parse(o);let A=E(g.cookieCreated).utc().subtract(1,"year");E().utc().diff(A,"milliseconds")<=6e4?v(!0):s()}r&&C()}},h=o=>{o===!0?P():(W(),i(!1),$(!0))},t=o=>{h(!1)},n=o=>{h(!0)},s=()=>{v(!1);let o=H(k);var r=JSON.parse(o);r.cookiesAcceptedConfirmationBanner=!0,document.cookie=`${k}=${JSON.stringify(r)};expires=${r.cookieCreated};path=/`},c=o=>{$(!1),s()};return a.createElement(a.Fragment,null,l&&a.createElement(_,{"data-testid":"CookieBanner"},a.createElement(j,null,a.createElement(q,null,e),a.createElement(O,null,u),a.createElement(F,null,a.createElement(Y,{primary:!0,text:m,isDisabled:!0,onClick:n,size:"large"}),a.createElement(Y,{primary:!0,text:T,isDisabled:!0,onClick:t,size:"large"})))),B&&a.createElement(_,{"data-testid":"CookieBannerRejected",id:"CookieBannerRejected"},a.createElement(j,{isInline:!0},a.createElement(O,null,U),a.createElement(z,{onClick:c,"aria-controls":"CookieBannerRejected","aria-hidden":"false"},"Hide"))),w&&a.createElement(_,{"data-testid":"CookieBannerAccepted",id:"CookieBannerAccepted"},a.createElement(j,{isInline:!0},a.createElement(O,null,f),a.createElement(z,{onClick:c,"aria-controls":"CookieBannerAccepted","aria-hidden":"false"},"Hide"))))};try{R.displayName="CookieBanner",R.__docgenInfo={description:"",displayName:"CookieBanner",props:{title:{defaultValue:null,description:"Title of cookie banner",name:"title",required:!0,type:{name:"string"}},paragraph:{defaultValue:null,description:"Paragraph about cookies",name:"paragraph",required:!0,type:{name:"ReactNode"}},acceptButtonText:{defaultValue:null,description:"Accept all button text",name:"acceptButtonText",required:!0,type:{name:"string"}},acceptConfirmationText:{defaultValue:{value:"You've accepted all cookies."},description:"Confirmation of acceptance text",name:"acceptConfirmationText",required:!1,type:{name:"string"}},rejectButtonText:{defaultValue:null,description:"Reject all button text",name:"rejectButtonText",required:!0,type:{name:"string"}},rejectConfirmationText:{defaultValue:{value:"You've rejected all cookies."},description:"Confirmation of rejection text",name:"rejectConfirmationText",required:!1,type:{name:"string"}},acceptCallback:{defaultValue:null,description:"gets called on accept - lets you do extra things - like set the 🍪",name:"acceptCallback",required:!1,type:{name:"Function"}}}}}catch{}export{P as A,R as C};
