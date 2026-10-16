import{R as c}from"./iframe-BNpMeywT.js";import{A as d}from"./Autocomplete-tFZAM-dD.js";import{S as p}from"./SBPadding-D5LoLA9q.js";import"./preload-helper-PPVm8Dsz.js";import"./Input.styles-cQ0p_tsj.js";import"./TextInput.styles-if05kC9c.js";import"./style-helpers-0zitJ_SJ.js";import"./index-Chjiymov.js";const r={placeholder:"Enter search text",suggestions:["Apple","Orange","Lemon","Pear","Peach","Kiwifruit is a hairy little fruit from China and this expands nicely to fit on other lines","Kiwi[fruit] $is a hairy little fruit from China and this expands nicely to fit on other lines","Killer tomato","Kinetic energy weapon","Kid gloves","Kiora","Kidderminster"],minimumMatchLength:2},m={...r,id:"empty",name:"Empty",labelText:"This is a hidden label",hasHiddenLabel:!0},u={...r,id:"changed",name:"Changed",labelText:"Hidden label",value:"Banana",isLarge:!0,hasHiddenLabel:!0},h={...r,id:"suggesting",name:"Suggesting",value:"Pe",showSuggestions:!0},y={...r,id:"suggesting-large",name:"Suggesting-large",value:"Ki",showSuggestions:!0,isLarge:!0},S={...r,id:"suggested",name:"Suggested",value:"Peach"},{action:l}=__STORYBOOK_MODULE_ACTIONS__,C={title:"Library/Components/Autocomplete",component:d,parameters:{status:{type:"beta"},actions:{argTypesRegex:"^on.*"}},argTypes:{id:{table:{category:"Component"}},name:{table:{category:"Input control"}},labelText:{table:{category:"Input control"}},hasHiddenLabel:{table:{category:"Input control"}},value:{table:{category:"Input control"}},size:{control:{type:"number",min:1,max:255,step:1},table:{category:"Input control"}},placeholder:{table:{category:"Input control"}},isLarge:{table:{category:"Input control"}},hasAdjacentButton:{table:{category:"Input control"}},suggestions:{table:{category:"Suggestions"}},showSuggestions:{table:{category:"Suggestions"}},minimumMatchLength:{control:{type:"number",min:1,max:16,step:1},table:{category:"Suggestions"}},maximumMatchesShown:{control:{type:"number",min:1,max:200,step:1},table:{category:"Suggestions"}},isErrored:{table:{category:"Input control"}},errorText:{table:{category:"Input control"}},onChange:{control:null,table:{category:"Events"}},onSelect:{control:null,table:{category:"Events"}}}};function b(s){l("selected")(s)}function x(s){l("changed")(s)}const i={onSelect:b,onChange:x},g=s=>c.createElement(p,null,c.createElement("div",{style:{width:"750px"}},c.createElement(d,{...s}))),e=g.bind({});e.args={...i,...m};const t=g.bind({});t.args={...i,...u};const n=g.bind({});n.args={...i,...h};const o=g.bind({});o.args={...i,...y};const a=g.bind({});a.args={...i,...S};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <SBPadding>
    <div style={{
    width: '750px'
  }}>
      <Autocomplete {...args} />
    </div>
  </SBPadding>`,...e.parameters?.docs?.source},description:{story:"Empty, i.e. default state of the Autocomplete component",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <SBPadding>
    <div style={{
    width: '750px'
  }}>
      <Autocomplete {...args} />
    </div>
  </SBPadding>`,...t.parameters?.docs?.source},description:{story:"Autocomplete component with some text entered that doesn't match any suggestion",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <SBPadding>
    <div style={{
    width: '750px'
  }}>
      <Autocomplete {...args} />
    </div>
  </SBPadding>`,...n.parameters?.docs?.source},description:{story:`Autocomplete component with some text entered that does match a suggestion,
with the list of suggestions shown.`,...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <SBPadding>
    <div style={{
    width: '750px'
  }}>
      <Autocomplete {...args} />
    </div>
  </SBPadding>`,...o.parameters?.docs?.source},description:{story:`Autocomplete component with some text entered that does match a suggestion,
with the list of suggestions shown, and isLarge mode on.`,...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <SBPadding>
    <div style={{
    width: '750px'
  }}>
      <Autocomplete {...args} />
    </div>
  </SBPadding>`,...a.parameters?.docs?.source},description:{story:`Autocomplete component with some text entered that matches a suggestion,
and the suggestion was chosen.`,...a.parameters?.docs?.description}}};const D=["EmptyWithHiddenLabel","NoMatchingSuggestionEnlargedWithHiddenLabel","DisplayingSuggestions","DisplayingSuggestionsLarge","SuggestionChosen"];export{n as DisplayingSuggestions,o as DisplayingSuggestionsLarge,e as EmptyWithHiddenLabel,t as NoMatchingSuggestionEnlargedWithHiddenLabel,a as SuggestionChosen,D as __namedExportsOrder,C as default};
