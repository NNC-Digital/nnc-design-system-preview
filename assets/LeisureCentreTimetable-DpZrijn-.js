import{s,r as c,R as o}from"./iframe-BNpMeywT.js";import{B as V}from"./Button-S36CQVVg.js";import{D as j}from"./DropDownSelect-CJICILs5.js";const A=s.div`
  font-family: ${e=>e.theme.theme_vars.fontstack};
  color: ${e=>e.theme.theme_vars.colours.black};
`,U=s.div``,P=s.div`
  display: none;

  @media (max-width: 700px) {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 8px;
  }

  button {
    min-width: 44px;
    min-height: 44px;
    padding: 8px 12px;
    border: 1px solid ${e=>e.theme.theme_vars.colours.action};
    border-radius: 4px;
    background: ${e=>e.theme.theme_vars.colours.white};
    color: ${e=>e.theme.theme_vars.colours.action_dark};
    font: inherit;
    font-weight: 700;
    cursor: pointer;

    &:focus-visible {
      outline: 3px solid ${e=>e.theme.theme_vars.colours.focus};
      outline-offset: 2px;
    }

    &:disabled { opacity: 0.5; cursor: not-allowed; }
  }
`,O=s.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
`,W=s.fieldset`
  display: grid;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 6px;
  overflow-x: auto;
  margin: 18px 0 24px;
  padding: 0;
  border: 0;

  &:focus-visible {
    outline: 3px solid ${e=>e.theme.theme_vars.colours.focus};
    outline-offset: 2px;
  }

  legend {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(7, minmax(88px, 1fr));
    margin-bottom: 20px;
    padding: 3px 2px 8px;
  }
`,F=s.label`
  position: relative;
  display: flex;
  min-height: 72px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 5px;
  border: 1px solid ${({$selected:e,theme:r})=>e?r.theme_vars.colours.action:r.theme_vars.colours.grey};
  border-radius: 4px;
  background: ${({$selected:e,theme:r})=>e?r.theme_vars.colours.action:r.theme_vars.colours.white};
  color: ${({$selected:e,theme:r})=>e?r.theme_vars.colours.white:r.theme_vars.colours.black};
  cursor: pointer;
  text-align: center;
  transition: background-color 120ms ease, border-color 120ms ease, color 120ms ease;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  span { font-size: 14px; font-weight: 700; line-height: 1.25; }
  small {
    margin-top: 5px;
    color: ${({$selected:e,theme:r})=>e?r.theme_vars.colours.white:r.theme_vars.colours.grey_darkest};
    font-size: 12px;
    line-height: 1.2;
  }

  &:hover {
    border-color: ${e=>e.theme.theme_vars.colours.action};
    background: ${({$selected:e,theme:r})=>e?r.theme_vars.colours.action:r.theme_vars.colours.action_light};
    color: ${({$selected:e,theme:r})=>e?r.theme_vars.colours.white:r.theme_vars.colours.action};
  }

  &:focus-within {
    outline: 3px solid ${e=>e.theme.theme_vars.colours.focus};
    outline-offset: 2px;
  }
`,H=s.div`
  margin: 0 0 15px;
`,K=s.div`
  display: grid;
  gap: 10px;
  margin-top: 20px;
`,Y=s.article`
  display: grid;
  grid-template-columns: minmax(140px, 0.8fr) minmax(0, 1.3fr) auto;
  grid-template-rows: auto auto;
  align-items: center;
  gap: 2px 20px;
  padding: 14px 16px;
  border: 1px solid ${e=>e.theme.theme_vars.colours.grey};
  border-radius: 4px;
  border-left: 4px solid ${e=>e.theme.theme_vars.colours.action};
  background: ${e=>e.theme.theme_vars.colours.white};

  > a {
    display: inline-flex;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    justify-self: end;
    box-sizing: border-box;
    padding: 0;

    svg { display: block; flex: 0 0 auto; }
  }

  &:hover { background: ${e=>e.theme.theme_vars.colours.action_light}; }

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-rows: auto auto auto;
    gap: 3px 12px;
    padding: 12px;

    > a { grid-column: 2; grid-row: 1 / span 3; }
  }
`,G=s.h5`
  grid-column: 1;
  grid-row: 1 / span 2;
  align-self: center;
  margin: 0;
  color: ${e=>e.theme.theme_vars.colours.action};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 700px) { grid-row: 1; }
`,J=s.h6`
  grid-column: 2;
  grid-row: 1;
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.35;

  @media (max-width: 700px) {
    grid-column: 1;
    grid-row: 2;
  }
`,Q=s.p`
  grid-column: 2;
  grid-row: 2;
  margin: 0 !important;
  color: ${e=>e.theme.theme_vars.colours.grey_darkest};
  font-size: 14px;
  line-height: 1.4;

  @media (max-width: 700px) {
    grid-column: 1;
    grid-row: 3;
  }
`,M=s.div`
  margin: 20px 0;
  padding: 18px 20px;
  border-left: 4px solid ${e=>e.theme.theme_vars.colours.action};
  background: ${e=>e.theme.theme_vars.colours.action_light};
  font-size: 14px;
`,X=s.ul`
  font-family: ${e=>e.theme.theme_vars.fontstack};
  display: grid;
  gap: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: none;
  margin: 18px 0 0;
  padding: 0;
  border-top: 1px solid ${e=>e.theme.theme_vars.colours.grey};
  list-style: none;

  && {
    width: 100%;
    max-width: none;
  }
`,Z=s.li`
  display: grid;
  position: static;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: 100px minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 12px;
  margin: 0;
  padding: 11px 8px;
  border-bottom: 1px solid ${e=>e.theme.theme_vars.colours.grey};
  list-style: none;

  time {
    color: ${e=>e.theme.theme_vars.colours.action_dark};
    font-weight: 700;
    white-space: nowrap;
  }
  strong { min-width: 0; overflow-wrap: anywhere; }

  > a {
    display: inline-flex;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    justify-self: end;
    box-sizing: border-box;
    padding: 0;

    svg { display: block; flex: 0 0 auto; }
  }

  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr) 44px;
    grid-template-rows: auto auto;
    gap: 6px 12px;
    padding: 10px 4px;

    time { grid-column: 1; grid-row: 1; align-self: start; }
    strong {
      grid-column: 1 / -1;
      grid-row: 2;
      font-size: 16px;
      line-height: 1.4;
    }
    > a {
      grid-column: 2;
      grid-row: 1;
      justify-self: end;
    }
  }
`,ee=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,$=e=>{const[r,n]=e.split(":"),i=Number(r);return`${i%12||12}:${n}${i>=12?"pm":"am"}`},z=e=>{const r=new Map;return e.forEach(n=>{const i=r.get(n.start)??[];i.push(n),r.set(n.start,i)}),Array.from(r,([n,i])=>({start:n,sessions:i}))},R=e=>{const[r,n]=c.useState(()=>new Date);return c.useEffect(()=>{if(e)return;const i=window.setInterval(()=>n(new Date),6e4);return()=>window.clearInterval(i)},[e]),e??r},q=({activities:e,defaultBookingUrl:r,sessions:n})=>{const i=n.find(({bookingUrl:p})=>p)?.bookingUrl??r;if(!i)return null;const h=`Book or check availability for ${e.join(", ")}. Opens in a new tab.`;return o.createElement(V,{url:i,title:h,"aria-label":h,size:"small",primary:!1,isExternal:!0},o.createElement("svg",{"aria-hidden":"true",focusable:"false",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("rect",{x:"3",y:"5",width:"18",height:"16",rx:"2"}),o.createElement("path",{d:"M16 3v4M8 3v4M3 11h18M8 15l2 2 4-4"})))},T=({days:e,defaultBookingUrl:r,emptyMessage:n="No sessions are available for this day.",initialDate:i,now:h})=>{const p=R(h),[d,f]=c.useState(i??e[0]?.date??""),[u,g]=c.useState("all"),v=`leisure-centre-day-${c.useId()}`,b=`leisure-centre-activity-${c.useId()}`,l=`leisure-centre-days-${c.useId()}`,m=c.useRef(null),[x,w]=c.useState({canScrollLeft:!1,canScrollRight:!1});c.useEffect(()=>{e.some(({date:t})=>t===d)||(f(e.find(({date:t})=>t===i)?.date??e[0]?.date??""),g("all"))},[e,i,d]);const E=e.find(({date:t})=>t===d),_=Array.from(new Set((E?.sessions??[]).map(({activity:t})=>t)));c.useEffect(()=>{const t=m.current;if(!t)return;const a=()=>{const D=t.scrollLeft>0,C=t.scrollLeft+t.clientWidth<t.scrollWidth-1;w(S=>S.canScrollLeft===D&&S.canScrollRight===C?S:{canScrollLeft:D,canScrollRight:C})};a(),t.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a);const y=typeof ResizeObserver>"u"?void 0:new ResizeObserver(a);return y?.observe(t),()=>{t.removeEventListener("scroll",a),window.removeEventListener("resize",a),y?.disconnect()}},[e.length]);const k=t=>{const a=m.current;a&&a.scrollBy({left:t*a.clientWidth*.75,behavior:"auto"})};c.useEffect(()=>{u!=="all"&&!_.includes(u)&&g("all")},[_,u]);const B=ee(p),I=`${String(p.getHours()).padStart(2,"0")}:${String(p.getMinutes()).padStart(2,"0")}`,L=[...E?.sessions??[]].filter(({activity:t,end:a})=>(u==="all"||t===u)&&(d!==B||a>I)).sort((t,a)=>t.start.localeCompare(a.start));return o.createElement(A,null,o.createElement(U,null,o.createElement(P,{role:"group","aria-label":"Browse timetable days"},o.createElement("button",{type:"button","aria-label":"Show previous timetable days","aria-controls":l,disabled:!x.canScrollLeft,onClick:()=>k(-1)},"‹ Previous"),o.createElement("button",{type:"button","aria-label":"Show next timetable days","aria-controls":l,disabled:!x.canScrollRight,onClick:()=>k(1)},"Next ›")),o.createElement(W,{ref:m,id:l,tabIndex:0,"aria-describedby":`${l}-help`},o.createElement("legend",null,"Choose a day"),o.createElement(O,{id:`${l}-help`},"Use the previous and next buttons to view more days."),e.map(({date:t,label:a,dateLabel:y})=>o.createElement(F,{key:t,$selected:d===t},o.createElement("input",{type:"radio",name:v,value:t,checked:d===t,onChange:()=>{f(t),g("all")}}),o.createElement("span",null,a),o.createElement("small",null,y))))),o.createElement(H,null,o.createElement(j,{key:d,id:b,label:"Activity",selected:u,options:[{title:"All Activities",value:"all"},..._.map(t=>({title:t,value:t}))],onChange:t=>g(t.target.value)})),L.length>0?o.createElement(K,{role:"region","aria-label":"Scheduled sessions"},L.map(t=>o.createElement(Y,{key:`${d}-${t.start}-${t.activity}`},o.createElement(G,null,$(t.start)," - ",$(t.end)),o.createElement(J,null,t.activity),t.location&&o.createElement(Q,null,t.location,t.instructor?` · ${t.instructor}`:""),o.createElement(q,{sessions:[t],activities:[t.activity],defaultBookingUrl:r})))):o.createElement(M,{role:"status"},n))},N=({sessions:e,defaultBookingUrl:r,emptyMessage:n="No upcoming sessions are available.",maxUpcomingSessions:i=3,now:h,ariaLabel:p="Upcoming sessions"})=>{const d=R(h),f=`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`,u=[...e].sort((l,m)=>l.start.localeCompare(m.start)),g=z(u.filter(({start:l,end:m})=>l<=f&&m>f)),v=z(u.filter(({start:l})=>l>f)),b=g.length>0?[...g,...v.slice(0,i)]:v.slice(0,i+1);return b.length===0?o.createElement(M,{role:"status"},n):o.createElement(X,{"aria-label":p},b.map(({start:l,sessions:m})=>{const x=m.map(({activity:w})=>w);return o.createElement(Z,{key:l},o.createElement("time",{dateTime:l},$(l)),o.createElement("strong",null,x.join(" · ")),o.createElement(q,{sessions:m,activities:x,defaultBookingUrl:r}))}))};try{T.displayName="LeisureCentreTimetable",T.__docgenInfo={description:"",displayName:"LeisureCentreTimetable",props:{days:{defaultValue:null,description:"",name:"days",required:!0,type:{name:"LeisureCentreTimetableDay[]"}},defaultBookingUrl:{defaultValue:null,description:"",name:"defaultBookingUrl",required:!1,type:{name:"string"}},emptyMessage:{defaultValue:{value:"No upcoming sessions are available."},description:"",name:"emptyMessage",required:!1,type:{name:"ReactNode"}},initialDate:{defaultValue:null,description:"",name:"initialDate",required:!1,type:{name:"string"}},now:{defaultValue:null,description:"",name:"now",required:!1,type:{name:"Date"}}}}}catch{}try{N.displayName="LeisureCentreTimetablePreview",N.__docgenInfo={description:"",displayName:"LeisureCentreTimetablePreview",props:{sessions:{defaultValue:null,description:"",name:"sessions",required:!0,type:{name:"LeisureCentreTimetableSession[]"}},defaultBookingUrl:{defaultValue:null,description:"",name:"defaultBookingUrl",required:!1,type:{name:"string"}},emptyMessage:{defaultValue:{value:"No upcoming sessions are available."},description:"",name:"emptyMessage",required:!1,type:{name:"ReactNode"}},maxUpcomingSessions:{defaultValue:{value:"3"},description:"",name:"maxUpcomingSessions",required:!1,type:{name:"number"}},now:{defaultValue:null,description:"",name:"now",required:!1,type:{name:"Date"}},ariaLabel:{defaultValue:{value:"Upcoming sessions"},description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}}}catch{}export{T as L,N as a};
