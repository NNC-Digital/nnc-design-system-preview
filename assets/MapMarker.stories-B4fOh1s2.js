import{R as e}from"./iframe-CAFc311g.js";import{M as n}from"./MapMarker-BtsDupEB.js";import{S as l}from"./SBPadding-Am7yvgMe.js";import{i as o,M as p}from"./index.umd--a59AFzo.js";import{M as s}from"./MaxWidthContainer-C1N-QUOI.js";import{P as m}from"./PageMain-T45ra0cH.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Library/Components/MapMarker",component:n,parameters:{status:{type:"beta"}}},i="",M=t=>e.createElement(l,null,e.createElement(o.Wrapper,{apiKey:i},e.createElement(p,{zoom:15,center:{lat:52.40410666556486,lng:52.40410666556486}},e.createElement(n,{...t})))),a=M.bind({});a.args={position:{lat:52.40410666556486,lng:52.40410666556486},label:"A",title:"My map marker"};const c=t=>e.createElement(l,null,e.createElement(s,null,e.createElement(m,null,e.createElement(o.Wrapper,{apiKey:i},e.createElement(p,{zoom:15,center:{lat:52.40410666556486,lng:52.40410666556486}},e.createElement(n,{position:{lat:52.40410666556486,lng:52.40410666556486},label:"A",title:"One Angel Square"}),e.createElement(n,{position:{lat:52.237139432507114,lng:-.8948307081133049},label:"B",title:"The Guildhall"})))))),r=c.bind({});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <SBPadding>
    <Wrapper apiKey={apiKey}>
      <Map zoom={15} center={{
      lat: 52.40410666556486,
      lng: 52.40410666556486
    }}>
        <MapMarker {...args} />
      </Map>
    </Wrapper>
  </SBPadding>`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <Wrapper apiKey={apiKey}>
          <Map zoom={15} center={{
          lat: 52.40410666556486,
          lng: 52.40410666556486
        }}>
            <MapMarker {...{
            position: {
              lat: 52.40410666556486,
              lng: 52.40410666556486
            },
            label: 'A',
            title: 'One Angel Square'
          }} />
            <MapMarker {...{
            position: {
              lat: 52.237139432507114,
              lng: -0.8948307081133049
            },
            label: 'B',
            title: 'The Guildhall'
          }} />
          </Map>
        </Wrapper>
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>`,...r.parameters?.docs?.source}}};const P=["ExampleGoogleMapMarker","ExampleGoogleMapMultipleMarker"];export{a as ExampleGoogleMapMarker,r as ExampleGoogleMapMultipleMarker,P as __namedExportsOrder,b as default};
