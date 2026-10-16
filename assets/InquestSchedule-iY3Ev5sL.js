import{s as g,R as e}from"./iframe-BNpMeywT.js";import{H as u}from"./Heading-C7kzbY1R.js";import{R as O}from"./Row-DErQ7Ddw.js";import{C as k}from"./Column-Dpu6NTYh.js";import{A as d}from"./Accordion-BeE9qXJE.js";import{S as C}from"./SummaryList-BlqCUrAd.js";var s=(t=>(t.Formal="formal",t.Hearing="inquest hearing",t.Opening="opening",t.PreInquest="pre-inquest review",t.Writing="writing",t))(s||{});const _=g.div`
  display: block;
  box-sizing: border-box;
`,p=g.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${t=>t.theme.theme_vars.spacingSizes.large};
`,G=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;g.div`
  flex-grow: 1;
  flex-shrink: 0;

  strong {
    display: block;
    &::first-letter {
      text-transform: capitalize;
    }
  }
`;const H=g.div`
  flex-grow: 1;
  h3 {
    display: block;
    &::first-letter {
      text-transform: capitalize;
    }
  }
`,I=t=>new Date(t).toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).replace(",",""),L=t=>{const o=new Date(t),a=o.getHours(),f=o.getMinutes(),h=a===0?12:a>12?a-12:a,y=a<12?"am":"pm";return f===0?`${h}${y}`:`${h}:${f.toString().padStart(2,"0")}${y}`},j=t=>new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),S=({caseAppointments:t,title:o,error:a=!1})=>{const f=t.filter(r=>r.appointmentType.toLowerCase().includes(s.Hearing)),h=t.filter(r=>r.appointmentType.toLowerCase().includes(s.PreInquest)),y=t.filter(r=>r.appointmentType.toLowerCase().includes(s.Opening)),T=t.filter(r=>r.appointmentType.toLowerCase().includes(s.Writing)),q=t.filter(r=>r.appointmentType.toLowerCase().includes(s.Formal)),c=r=>r.reduce((l,n)=>{const i=new Date(n.startDateTime).toISOString().substring(0,10);return l[i]||(l[i]=[]),l[i].push(n),l},{}),E=c(f),w=c(h),x=c(y),b=c(T),v=c(q),m=r=>Object.keys(r).map(l=>({title:I(l),content:e.createElement(O,null,r[l].sort((n,D)=>new Date(n.startDateTime).getTime()-new Date(D.startDateTime).getTime()).map((n,D)=>{const i=[{term:"Name",detail:n.fullName},{term:"Died",detail:I(n.dateTimeOfDeath)+" at "+n.placeOfDeath+". Aged "+n.age+" years."},{term:"Court location",detail:n.courtroomFullAddress+"."},{term:"Coroner",detail:n.coroner+"."}];return n.endDateTime&&i.push({term:"End date",detail:j(n.endDateTime)+"."}),e.createElement(k,{small:"full",medium:"full",large:"full",key:D},e.createElement(G,null,e.createElement(H,null,e.createElement(C,{terms:i,hasBorders:!1,heading:L(n.startDateTime)}))))}))}));return e.createElement(_,{"data-testid":"InquestSchedule"},Object.keys(E).length>0&&e.createElement(p,null,e.createElement(u,{level:2,text:o}),e.createElement(d,{sections:m(E)})),Object.keys(x).length>0&&e.createElement(p,null,e.createElement(u,{level:2,text:"Inquest Openings"}),e.createElement(d,{sections:m(x)})),Object.keys(w).length>0&&e.createElement(p,null,e.createElement(u,{level:2,text:"Pre-inquest Review Hearings"}),e.createElement(d,{sections:m(w)})),Object.keys(b).length>0&&e.createElement(p,null,e.createElement(u,{level:2,text:"Inquests in Writing"}),e.createElement(d,{sections:m(b)})),Object.keys(v).length>0&&e.createElement(p,null,e.createElement(u,{level:2,text:"Formal Suspension Hearings"}),e.createElement(d,{sections:m(v)})),t.length===0&&e.createElement("div",null,e.createElement("p",null,"We can't find any results at the moment."),a?e.createElement("p",null," The information is currently unavailable."):e.createElement("p",null,"There are no inquests scheduled for next month.")))};try{S.displayName="InquestSchedule",S.__docgenInfo={description:"A table displaying a schedule of inquests",displayName:"InquestSchedule",props:{caseAppointments:{defaultValue:null,description:"An array of Case Appointments",name:"caseAppointments",required:!0,type:{name:"CaseAppointmentProps[]"}},title:{defaultValue:null,description:"The table title or caption",name:"title",required:!0,type:{name:"string"}},error:{defaultValue:{value:"false"},description:"Was there an error fetching results",name:"error",required:!1,type:{name:"boolean"}}}}}catch{}export{S as I};
