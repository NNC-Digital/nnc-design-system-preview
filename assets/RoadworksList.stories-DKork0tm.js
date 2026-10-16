import{R as r}from"./iframe-BNpMeywT.js";import{R as s}from"./RoadworksList-CvOhYexz.js";import{P as n}from"./PageMain-HiY_E30G.js";import{M as i}from"./MaxWidthContainer-DfAz8Sy4.js";import"./preload-helper-PPVm8Dsz.js";import"./Input-B9dK2O81.js";import"./Input.styles-cQ0p_tsj.js";import"./DynamicIcon-C0gKm0XE.js";import"./Heading-C7kzbY1R.js";import"./dayjs.min-BsiGf0vY.js";const l={location:"Sondes Close",detailedLocation:"Sondes Close, Oundle Ward, North Northamptonshire",latitude:"52.490513",longitude:"-0.4821568",startTime:"2025-09-01T14:01:00.000+01:00",endTime:"2025-09-01T23:59:59.999+01:00",description:"PATCH C/W TOT 1.5 M SQ",trafficManagement:"Roadworks scheduled 01/09/2025 - 01/09/2025 (North Northamptonshire)",responsibility:"North Northamptonshire",urlLinkAddress:"https://one.network/uk/northamptonshire/roadworks/123456"},d={location:"Hall Lane",detailedLocation:"Hall Lane, Northall Ward, North Northamptonshire",latitude:"52.39311",longitude:"-0.740246",startTime:"2025-09-05T00:00:00.000+01:00",endTime:"2025-09-06T23:59:59.999+01:00",description:"Roadworks scheduled 05/09/2025 - 06/09/2025",trafficManagement:"Roadworks scheduled 05/09/2025 - 06/09/2025 (Virgin Media)",responsibility:"Virgin Media"},m={location:"The Jamb",detailedLocation:"The Jamb, Corby Rural Ward, North Northamptonshire",latitude:"52.491116",longitude:"-0.6834958",startTime:"2025-09-01T11:38:00.000+01:00",endTime:"2025-09-01T16:00:00.000+01:00",description:"1x CW PH, 1m x 1.5m - Road blocked",trafficManagement:"Road closure scheduled 01/09/2025 - 01/09/2025 (North Northamptonshire)",responsibility:"North Northamptonshire",urlLinkAddress:"https://one.network/uk/northamptonshire/roadworks/789012"},T={title:"Library/Slices/RoadworksList",component:s,parameters:{status:{type:"beta"}}},o={args:{title:"Current roadworks",roadworks:[l,d,m]},render:a=>r.createElement(i,null,r.createElement(n,null,r.createElement(s,{...a})))},e={...o,args:{title:"Current roadworks",roadworks:[]}},t={args:{title:"Roadworks without links",roadworks:[{...d,urlLinkAddress:void 0}]},render:a=>r.createElement(i,null,r.createElement(n,null,r.createElement(s,{...a})))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Current roadworks',
    roadworks: [ExampleRoadwork, AnotherExampleRoadwork, ThirdExampleRoadwork]
  },
  render: args => <MaxWidthContainer>
      <PageMain>
        <RoadworksList {...args} />
      </PageMain>
    </MaxWidthContainer>
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...ExampleRoadWorksList,
  args: {
    title: 'Current roadworks',
    roadworks: []
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Roadworks without links',
    roadworks: [{
      ...AnotherExampleRoadwork,
      urlLinkAddress: undefined
    }]
  },
  render: args => <MaxWidthContainer>
      <PageMain>
        <RoadworksList {...args} />
      </PageMain>
    </MaxWidthContainer>
}`,...t.parameters?.docs?.source}}};const E=["ExampleRoadWorksList","RoadworksListNoResults","RoadworksListWithoutLinks"];export{o as ExampleRoadWorksList,e as RoadworksListNoResults,t as RoadworksListWithoutLinks,E as __namedExportsOrder,T as default};
