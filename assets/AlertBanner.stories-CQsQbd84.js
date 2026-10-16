import{R as e}from"./iframe-BNpMeywT.js";import{A as c}from"./AlertBanner-CMjroww0.js";import{B as u}from"./Button-S36CQVVg.js";import{M as m}from"./MaxWidthContainer-DfAz8Sy4.js";import"./preload-helper-PPVm8Dsz.js";import"./CloseIcon-DQAr5twY.js";import"./UseLocalStorage-DuLyX1N_.js";const x={title:"library/Structure/Alert Banner",component:c,parameters:{status:{type:"stable"}}},o=e.createElement("p",null,"Coronavirus | National lockdown: stay at home."," ",e.createElement("a",{href:"#"},"Learn what this means for residents and workers here")),d=s=>{window.localStorage.clear(),window.location.replace(window.location.href.split("&")[0])},l=s=>e.createElement(e.Fragment,null,e.createElement(c,{...s}),e.createElement(m,null,e.createElement("br",null),e.createElement("br",null),e.createElement("p",null,"Once this unique alert has been hidden it will not be shown again on this device."),e.createElement("br",null),e.createElement(u,{url:null,onClick:d},"Click to reset"))),n=l.bind({});n.args={title:"Coronavirus (COVID-19)",uid:"5",children:o};const t=l.bind({});t.args={title:"Warning message",uid:"6",alertType:"warning",children:o};const r=l.bind({});r.args={title:"Positive message",uid:"7",alertType:"positive",children:o};const a=l.bind({});a.args={title:"Something terrible has happened",uid:"4",alertType:"london_bridge",children:o};const i=l.bind({});i.args={title:"An alert with long text",uid:"8",alertType:"positive",children:e.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum pretium mauris a imperdiet. Vestibulum nulla felis, aliquet ut massa non, vulputate molestie lectus. Etiam risus lectus, porta non metus eget, efficitur elementum dolor. Donec odio turpis, ullamcorper sit amet convallis in, feugiat sit amet mi."," ")};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <>
    <AlertBanner {...args} />

    <MaxWidthContainer>
      <br />
      <br />
      <p>Once this unique alert has been hidden it will not be shown again on this device.</p>
      <br />
      <Button url={null} onClick={resetAlert}>
        Click to reset
      </Button>
    </MaxWidthContainer>
  </>`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <>
    <AlertBanner {...args} />

    <MaxWidthContainer>
      <br />
      <br />
      <p>Once this unique alert has been hidden it will not be shown again on this device.</p>
      <br />
      <Button url={null} onClick={resetAlert}>
        Click to reset
      </Button>
    </MaxWidthContainer>
  </>`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <>
    <AlertBanner {...args} />

    <MaxWidthContainer>
      <br />
      <br />
      <p>Once this unique alert has been hidden it will not be shown again on this device.</p>
      <br />
      <Button url={null} onClick={resetAlert}>
        Click to reset
      </Button>
    </MaxWidthContainer>
  </>`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <>
    <AlertBanner {...args} />

    <MaxWidthContainer>
      <br />
      <br />
      <p>Once this unique alert has been hidden it will not be shown again on this device.</p>
      <br />
      <Button url={null} onClick={resetAlert}>
        Click to reset
      </Button>
    </MaxWidthContainer>
  </>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <>
    <AlertBanner {...args} />

    <MaxWidthContainer>
      <br />
      <br />
      <p>Once this unique alert has been hidden it will not be shown again on this device.</p>
      <br />
      <Button url={null} onClick={resetAlert}>
        Click to reset
      </Button>
    </MaxWidthContainer>
  </>`,...i.parameters?.docs?.source}}};const w=["AlertBannerExampleAlert","AlertBannerExampleWarning","AlertBannerExamplePositive","AlertBannerExampleMemorial","AlertBannerWithLongText"];export{n as AlertBannerExampleAlert,a as AlertBannerExampleMemorial,r as AlertBannerExamplePositive,t as AlertBannerExampleWarning,i as AlertBannerWithLongText,w as __namedExportsOrder,x as default};
