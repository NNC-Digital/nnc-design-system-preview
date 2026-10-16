import{s as a,r as w,R as i}from"./iframe-BNpMeywT.js";import{V as u}from"./style-helpers-0zitJ_SJ.js";import{N as L}from"./NewsArticleFilterAccordionText-CnKYmjT5.js";import{h as $}from"./url-helpers-1hshT-U6.js";const z=a.div`
  ${e=>e.theme.fontStyles};
  margin-bottom: 30px;
`,_=a.fieldset`
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`,F=e=>{if(e.$labelHidden)return u},H=a.legend`
  color: #0b0c0c;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: table;
  max-width: 100%;
  margin-bottom: 10px;
  padding: 0;
  white-space: normal;
  ${F}
`,V=e=>{if(e.$hintHidden)return u},E=a.div`
  font-size: ${e=>e.theme.theme_vars.fontSizes.small};
  display: block;
  margin-bottom: 15px;
  color: #505a5f;
  margin-top: -5px;
  ${V}
`,S=a.div`
  display: block;
`,q=a.div`
  font-size: ${e=>e.theme.theme_vars.fontSizes.small};
  display: block;
  position: relative;
  min-height: 40px;
  margin-bottom: 10px;
  padding-left: 40px;
  clear: left;
`,T=a.input`
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
  margin: 0;
  opacity: 0;

  &:focus + label:before {
    box-shadow: 0 0 0 3px ${e=>e.theme.theme_vars.colours.focus};
  }
`,N=a.label`
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  color: #0b0c0c;
  display: block;
  margin-bottom: 5px;

  &:before {
    content: '';
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border: 2px solid currentColor;
    background: transparent;
  }

  &:after {
    content: '';
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    top: 11px;
    left: 9px;
    width: 23px;
    height: 12px;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    border: solid;
    border-width: 0 0 5px 5px;
    border-top-color: transparent;
    opacity: ${e=>e.$isChecked?1:0};
    background: transparent;
  }
`,b=({options:e,checked:m,label:r=null,hint:s=null,displayLegend:x,hintId:c="hint"})=>{let p=r===null||!x,k=s===null;const f=()=>e.map(t=>({...t,checked:!!m.includes(t.value)})),[n,g]=w.useState(f()),y=t=>{const l=t.target.value;let d=[...n];d.find(o=>{o.value===l&&(o.checked=!o.checked)}),g(d);let h=[...n];h=d.filter(o=>o.checked===!0);let v=h.map(o=>o.value).join(",");$("news",[{key:L.articleType.queryParamKey,value:v}],["page"])},C=Math.random().toString(36).substring(7);return i.createElement(z,{"data-testid":"CheckboxListFilter"},i.createElement(_,{"aria-describedby":c},i.createElement(H,{$labelHidden:p,"data-testid":"CheckboxListFilterLegend"},r),i.createElement(E,{id:c,$hintHidden:k,"data-testid":"CheckboxListFilterHint"},s),i.createElement(S,null,n.map((t,l)=>i.createElement(q,{key:l},i.createElement(T,{id:t.value,name:p?C:r,type:"checkbox",onChange:y,value:t.value,checked:t.checked}),i.createElement(N,{$isChecked:t.checked,htmlFor:t.value},t.title))))))};try{b.displayName="CheckboxListFilter",b.__docgenInfo={description:"",displayName:"CheckboxListFilter",props:{options:{defaultValue:null,description:"What to show in the checkboxes",name:"options",required:!0,type:{name:"CheckboxValsProps[]"}},checked:{defaultValue:null,description:"Which fields are checked",name:"checked",required:!0,type:{name:"string[]"}},label:{defaultValue:{value:"null"},description:"The label text",name:"label",required:!1,type:{name:"string"}},hint:{defaultValue:{value:"null"},description:"The hint text",name:"hint",required:!1,type:{name:"string"}},hintId:{defaultValue:{value:"hint"},description:"The id for the hint aria-describedby",name:"hintId",required:!1,type:{name:"string"}},displayLegend:{defaultValue:null,description:"Should the legend be displayed",name:"displayLegend",required:!0,type:{name:"boolean"}}}}}catch{}export{b as C};
