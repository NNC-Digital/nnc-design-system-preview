import{s as C,b as se,g as me,r as U,R as c}from"./iframe-BNpMeywT.js";import{u as ge,D as ce}from"./DirectoryAddToShortList-C7ZGiGgg.js";import{R as K}from"./Row-DErQ7Ddw.js";import{C as b}from"./Column-Dpu6NTYh.js";import{S as $}from"./SummaryList-BlqCUrAd.js";import{d as ve}from"./DirectoryServiceTransform-Bgyr63kp.js";import{r as le}from"./index-Chjiymov.js";const pe=C.div`
  display: block;

    @media print {  
        font-size: ${e=>e.theme.theme_vars.fontSizes.extra_small} !important;
        [data-testid='Column'] {
            padding: ${e=>e.theme.theme_vars.spacingSizes.extra_small} !important;
        }

        .favourite-outer:nth-of-type(2n + 1) {
            page-break-after: always;
        }

        .favourite-outer:last-of-type {
            page-break-after: avoid !important;
        }
    }
`,Ee=C.a`
    display: block;
    margin-bottom: ${e=>e.theme.theme_vars.spacingSizes.small};
    ${e=>e.theme.theme_vars.h4}
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

    @media print {
        color: ${e=>e.theme.theme_vars.colours.black} !important;
        text-decoration: none !important;
        font-size: ${e=>e.theme.theme_vars.fontSizes.small};
        margin-bottom: 0;
    }
`,_e=C.div`
    p {
        display: none;
    }

    @media print {
        p {
            display: none;
            margin-bottom: 0 !important;
        }
    }
`,ye=C.div`
  @media print {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ce=C.div`
    max-width: 80px;
    display: none;

    @media print {
        display: block;
        margin-left: ${e=>e.theme.theme_vars.spacingSizes.small};
    }
`,X=C.div`
    background: ${e=>e.theme.cardinal_name==="north"?e.theme.theme_vars.colours.white:e.theme.theme_vars.colours.grey_light};
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.3s ease;
    border-bottom: 5px solid ${e=>e.theme.theme_vars.colours.action};
    border-radius: ${e=>e.theme.theme_vars.border_radius};
    padding: ${e=>e.theme.theme_vars.spacingSizes.medium};

    @media print {
        box-shadow: none;
        border: 1px solid ${e=>e.theme.theme_vars.colours.grey};
        background: none;
        padding: 0 ${e=>e.theme.theme_vars.spacingSizes.small};
    }
`,be=C.div`
  display: flex;
  justify-content: flex-end;

  @media print {
    display: none;
  }
`,Y=C.button`
  border: 2px solid ${e=>e.theme.theme_vars.colours.action};
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  background: ${e=>e.theme.theme_vars.colours.action};
  color: ${e=>e.theme.theme_vars.colours.white};
  cursor: pointer;
  padding: ${e=>e.theme.theme_vars.spacingSizes.small};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: ${e=>e.theme.theme_vars.spacingSizes.medium};
  &:hover {
    ${e=>e.theme.linkStylesHover}
    color: ${e=>e.theme.theme_vars.colours.white};
    background: ${e=>e.theme.theme_vars.colours.action_dark};
  }
  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }
  &:active {
    ${e=>e.theme.linkStylesActive}
  }
`,Te=C.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${e=>e.theme.theme_vars.breakpoints.l}) {
    justify-content: flex-end;
  }
`,Be=C.p`
  font-weight: bold;
  margin-top: ${e=>e.theme.theme_vars.spacingSizes.medium};
`,we=C.button`
  border: 1px solid ${e=>e.theme.theme_vars.colours.negative};
  background: ${e=>e.theme.theme_vars.colours.white};
  color: ${e=>e.theme.theme_vars.colours.negative};
  padding: ${e=>e.theme.theme_vars.spacingSizes.small};
  cursor: pointer;
  border-radius: ${e=>e.theme.theme_vars.border_radius};
  min-height: 42px;
  font-weight: bold;

  &:hover {
    background: ${e=>e.theme.theme_vars.colours.action_light};
    color: ${e=>e.theme.theme_vars.colours.action_dark};
    text-decoration: underline;
    text-decoration-style: dotted;
  }

  &:focus {
    ${e=>e.theme.linkStylesFocus}
  }

  &:active {
    ${e=>e.theme.linkStylesActive}
  }
`,Le=C.div`
  display: block;

  @media print {
    display: none;
  }
`,Pe=C.div`
  display: none;

  @media print {
    display: block;
  }
`;var R={},O,J;function ue(){return J||(J=1,O={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}),O}var N,W;function Re(){if(W)return N;W=1;var e=ue();function h(l){this.mode=e.MODE_8BIT_BYTE,this.data=l}return h.prototype={getLength:function(l){return this.data.length},write:function(l){for(var g=0;g<this.data.length;g++)l.put(this.data.charCodeAt(g),8)}},N=h,N}var I,j;function he(){return j||(j=1,I={L:1,M:0,Q:3,H:2}),I}var z,Z;function Ae(){if(Z)return z;Z=1;var e=he();function h(l,g){this.totalCount=l,this.dataCount=g}return h.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h.getRSBlocks=function(l,g){var m=h.getRsBlockTable(l,g);if(m==null)throw new Error("bad rs block @ typeNumber:"+l+"/errorCorrectLevel:"+g);for(var i=m.length/3,o=new Array,n=0;n<i;n++)for(var t=m[n*3+0],r=m[n*3+1],a=m[n*3+2],s=0;s<t;s++)o.push(new h(r,a));return o},h.getRsBlockTable=function(l,g){switch(g){case e.L:return h.RS_BLOCK_TABLE[(l-1)*4+0];case e.M:return h.RS_BLOCK_TABLE[(l-1)*4+1];case e.Q:return h.RS_BLOCK_TABLE[(l-1)*4+2];case e.H:return h.RS_BLOCK_TABLE[(l-1)*4+3];default:return}},z=h,z}var Q,V;function De(){if(V)return Q;V=1;function e(){this.buffer=new Array,this.length=0}return e.prototype={get:function(h){var l=Math.floor(h/8);return(this.buffer[l]>>>7-h%8&1)==1},put:function(h,l){for(var g=0;g<l;g++)this.putBit((h>>>l-g-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(h){var l=Math.floor(this.length/8);this.buffer.length<=l&&this.buffer.push(0),h&&(this.buffer[l]|=128>>>this.length%8),this.length++}},Q=e,Q}var H,ee;function fe(){if(ee)return H;ee=1;for(var e={glog:function(l){if(l<1)throw new Error("glog("+l+")");return e.LOG_TABLE[l]},gexp:function(l){for(;l<0;)l+=255;for(;l>=256;)l-=255;return e.EXP_TABLE[l]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;h<8;h++)e.EXP_TABLE[h]=1<<h;for(var h=8;h<256;h++)e.EXP_TABLE[h]=e.EXP_TABLE[h-4]^e.EXP_TABLE[h-5]^e.EXP_TABLE[h-6]^e.EXP_TABLE[h-8];for(var h=0;h<255;h++)e.LOG_TABLE[e.EXP_TABLE[h]]=h;return H=e,H}var q,te;function de(){if(te)return q;te=1;var e=fe();function h(l,g){if(l.length==null)throw new Error(l.length+"/"+g);for(var m=0;m<l.length&&l[m]==0;)m++;this.num=new Array(l.length-m+g);for(var i=0;i<l.length-m;i++)this.num[i]=l[i+m]}return h.prototype={get:function(l){return this.num[l]},getLength:function(){return this.num.length},multiply:function(l){for(var g=new Array(this.getLength()+l.getLength()-1),m=0;m<this.getLength();m++)for(var i=0;i<l.getLength();i++)g[m+i]^=e.gexp(e.glog(this.get(m))+e.glog(l.get(i)));return new h(g,0)},mod:function(l){if(this.getLength()-l.getLength()<0)return this;for(var g=e.glog(this.get(0))-e.glog(l.get(0)),m=new Array(this.getLength()),i=0;i<this.getLength();i++)m[i]=this.get(i);for(var i=0;i<l.getLength();i++)m[i]^=e.gexp(e.glog(l.get(i))+g);return new h(m,0).mod(l)}},q=h,q}var F,re;function ke(){if(re)return F;re=1;var e=ue(),h=de(),l=fe(),g={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},m={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(i){for(var o=i<<10;m.getBCHDigit(o)-m.getBCHDigit(m.G15)>=0;)o^=m.G15<<m.getBCHDigit(o)-m.getBCHDigit(m.G15);return(i<<10|o)^m.G15_MASK},getBCHTypeNumber:function(i){for(var o=i<<12;m.getBCHDigit(o)-m.getBCHDigit(m.G18)>=0;)o^=m.G18<<m.getBCHDigit(o)-m.getBCHDigit(m.G18);return i<<12|o},getBCHDigit:function(i){for(var o=0;i!=0;)o++,i>>>=1;return o},getPatternPosition:function(i){return m.PATTERN_POSITION_TABLE[i-1]},getMask:function(i,o,n){switch(i){case g.PATTERN000:return(o+n)%2==0;case g.PATTERN001:return o%2==0;case g.PATTERN010:return n%3==0;case g.PATTERN011:return(o+n)%3==0;case g.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2==0;case g.PATTERN101:return o*n%2+o*n%3==0;case g.PATTERN110:return(o*n%2+o*n%3)%2==0;case g.PATTERN111:return(o*n%3+(o+n)%2)%2==0;default:throw new Error("bad maskPattern:"+i)}},getErrorCorrectPolynomial:function(i){for(var o=new h([1],0),n=0;n<i;n++)o=o.multiply(new h([1,l.gexp(n)],0));return o},getLengthInBits:function(i,o){if(1<=o&&o<10)switch(i){case e.MODE_NUMBER:return 10;case e.MODE_ALPHA_NUM:return 9;case e.MODE_8BIT_BYTE:return 8;case e.MODE_KANJI:return 8;default:throw new Error("mode:"+i)}else if(o<27)switch(i){case e.MODE_NUMBER:return 12;case e.MODE_ALPHA_NUM:return 11;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 10;default:throw new Error("mode:"+i)}else if(o<41)switch(i){case e.MODE_NUMBER:return 14;case e.MODE_ALPHA_NUM:return 13;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 12;default:throw new Error("mode:"+i)}else throw new Error("type:"+o)},getLostPoint:function(i){for(var o=i.getModuleCount(),n=0,t=0;t<o;t++)for(var r=0;r<o;r++){for(var a=0,s=i.isDark(t,r),u=-1;u<=1;u++)if(!(t+u<0||o<=t+u))for(var f=-1;f<=1;f++)r+f<0||o<=r+f||u==0&&f==0||s==i.isDark(t+u,r+f)&&a++;a>5&&(n+=3+a-5)}for(var t=0;t<o-1;t++)for(var r=0;r<o-1;r++){var d=0;i.isDark(t,r)&&d++,i.isDark(t+1,r)&&d++,i.isDark(t,r+1)&&d++,i.isDark(t+1,r+1)&&d++,(d==0||d==4)&&(n+=3)}for(var t=0;t<o;t++)for(var r=0;r<o-6;r++)i.isDark(t,r)&&!i.isDark(t,r+1)&&i.isDark(t,r+2)&&i.isDark(t,r+3)&&i.isDark(t,r+4)&&!i.isDark(t,r+5)&&i.isDark(t,r+6)&&(n+=40);for(var r=0;r<o;r++)for(var t=0;t<o-6;t++)i.isDark(t,r)&&!i.isDark(t+1,r)&&i.isDark(t+2,r)&&i.isDark(t+3,r)&&i.isDark(t+4,r)&&!i.isDark(t+5,r)&&i.isDark(t+6,r)&&(n+=40);for(var E=0,r=0;r<o;r++)for(var t=0;t<o;t++)i.isDark(t,r)&&E++;var p=Math.abs(100*E/o/o-50)/5;return n+=p*10,n}};return F=m,F}var G,ne;function Se(){if(ne)return G;ne=1;var e=Re(),h=Ae(),l=De(),g=ke(),m=de();function i(n,t){this.typeNumber=n,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var o=i.prototype;return o.addData=function(n){var t=new e(n);this.dataList.push(t),this.dataCache=null},o.isDark=function(n,t){if(n<0||this.moduleCount<=n||t<0||this.moduleCount<=t)throw new Error(n+","+t);return this.modules[n][t]},o.getModuleCount=function(){return this.moduleCount},o.make=function(){if(this.typeNumber<1){var n=1;for(n=1;n<40;n++){for(var t=h.getRSBlocks(n,this.errorCorrectLevel),r=new l,a=0,s=0;s<t.length;s++)a+=t[s].dataCount;for(var s=0;s<this.dataList.length;s++){var u=this.dataList[s];r.put(u.mode,4),r.put(u.getLength(),g.getLengthInBits(u.mode,n)),u.write(r)}if(r.getLengthInBits()<=a*8)break}this.typeNumber=n}this.makeImpl(!1,this.getBestMaskPattern())},o.makeImpl=function(n,t){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var a=0;a<this.moduleCount;a++)this.modules[r][a]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(n,t),this.typeNumber>=7&&this.setupTypeNumber(n),this.dataCache==null&&(this.dataCache=i.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},o.setupPositionProbePattern=function(n,t){for(var r=-1;r<=7;r++)if(!(n+r<=-1||this.moduleCount<=n+r))for(var a=-1;a<=7;a++)t+a<=-1||this.moduleCount<=t+a||(0<=r&&r<=6&&(a==0||a==6)||0<=a&&a<=6&&(r==0||r==6)||2<=r&&r<=4&&2<=a&&a<=4?this.modules[n+r][t+a]=!0:this.modules[n+r][t+a]=!1)},o.getBestMaskPattern=function(){for(var n=0,t=0,r=0;r<8;r++){this.makeImpl(!0,r);var a=g.getLostPoint(this);(r==0||n>a)&&(n=a,t=r)}return t},o.createMovieClip=function(n,t,r){var a=n.createEmptyMovieClip(t,r),s=1;this.make();for(var u=0;u<this.modules.length;u++)for(var f=u*s,d=0;d<this.modules[u].length;d++){var E=d*s,p=this.modules[u][d];p&&(a.beginFill(0,100),a.moveTo(E,f),a.lineTo(E+s,f),a.lineTo(E+s,f+s),a.lineTo(E,f+s),a.endFill())}return a},o.setupTimingPattern=function(){for(var n=8;n<this.moduleCount-8;n++)this.modules[n][6]==null&&(this.modules[n][6]=n%2==0);for(var t=8;t<this.moduleCount-8;t++)this.modules[6][t]==null&&(this.modules[6][t]=t%2==0)},o.setupPositionAdjustPattern=function(){for(var n=g.getPatternPosition(this.typeNumber),t=0;t<n.length;t++)for(var r=0;r<n.length;r++){var a=n[t],s=n[r];if(this.modules[a][s]==null)for(var u=-2;u<=2;u++)for(var f=-2;f<=2;f++)u==-2||u==2||f==-2||f==2||u==0&&f==0?this.modules[a+u][s+f]=!0:this.modules[a+u][s+f]=!1}},o.setupTypeNumber=function(n){for(var t=g.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var a=!n&&(t>>r&1)==1;this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=a}for(var r=0;r<18;r++){var a=!n&&(t>>r&1)==1;this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=a}},o.setupTypeInfo=function(n,t){for(var r=this.errorCorrectLevel<<3|t,a=g.getBCHTypeInfo(r),s=0;s<15;s++){var u=!n&&(a>>s&1)==1;s<6?this.modules[s][8]=u:s<8?this.modules[s+1][8]=u:this.modules[this.moduleCount-15+s][8]=u}for(var s=0;s<15;s++){var u=!n&&(a>>s&1)==1;s<8?this.modules[8][this.moduleCount-s-1]=u:s<9?this.modules[8][15-s-1+1]=u:this.modules[8][15-s-1]=u}this.modules[this.moduleCount-8][8]=!n},o.mapData=function(n,t){for(var r=-1,a=this.moduleCount-1,s=7,u=0,f=this.moduleCount-1;f>0;f-=2)for(f==6&&f--;;){for(var d=0;d<2;d++)if(this.modules[a][f-d]==null){var E=!1;u<n.length&&(E=(n[u]>>>s&1)==1);var p=g.getMask(t,a,f-d);p&&(E=!E),this.modules[a][f-d]=E,s--,s==-1&&(u++,s=7)}if(a+=r,a<0||this.moduleCount<=a){a-=r,r=-r;break}}},i.PAD0=236,i.PAD1=17,i.createData=function(n,t,r){for(var a=h.getRSBlocks(n,t),s=new l,u=0;u<r.length;u++){var f=r[u];s.put(f.mode,4),s.put(f.getLength(),g.getLengthInBits(f.mode,n)),f.write(s)}for(var d=0,u=0;u<a.length;u++)d+=a[u].dataCount;if(s.getLengthInBits()>d*8)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+d*8+")");for(s.getLengthInBits()+4<=d*8&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=d*8||(s.put(i.PAD0,8),s.getLengthInBits()>=d*8));)s.put(i.PAD1,8);return i.createBytes(s,a)},i.createBytes=function(n,t){for(var r=0,a=0,s=0,u=new Array(t.length),f=new Array(t.length),d=0;d<t.length;d++){var E=t[d].dataCount,p=t[d].totalCount-E;a=Math.max(a,E),s=Math.max(s,p),u[d]=new Array(E);for(var v=0;v<u[d].length;v++)u[d][v]=255&n.buffer[v+r];r+=E;var _=g.getErrorCorrectPolynomial(p),y=new m(u[d],_.getLength()-1),w=y.mod(_);f[d]=new Array(_.getLength()-1);for(var v=0;v<f[d].length;v++){var L=v+w.getLength()-f[d].length;f[d][v]=L>=0?w.get(L):0}}for(var P=0,v=0;v<t.length;v++)P+=t[v].totalCount;for(var B=new Array(P),T=0,v=0;v<a;v++)for(var d=0;d<t.length;d++)v<u[d].length&&(B[T++]=u[d][v]);for(var v=0;v<s;v++)for(var d=0;d<t.length;d++)v<f[d].length&&(B[T++]=f[d][v]);return B},G=i,G}var A={},ae;function Me(){if(ae)return A;ae=1,Object.defineProperty(A,"__esModule",{value:!0});var e=Object.assign||function(a){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(a[f]=u[f])}return a},h=le(),l=i(h),g=se(),m=i(g);function i(a){return a&&a.__esModule?a:{default:a}}function o(a,s){var u={};for(var f in a)s.indexOf(f)>=0||Object.prototype.hasOwnProperty.call(a,f)&&(u[f]=a[f]);return u}var n={bgColor:l.default.oneOfType([l.default.object,l.default.string]).isRequired,bgD:l.default.string.isRequired,fgColor:l.default.oneOfType([l.default.object,l.default.string]).isRequired,fgD:l.default.string.isRequired,size:l.default.number.isRequired,title:l.default.string,viewBoxSize:l.default.number.isRequired,xmlns:l.default.string},t={title:void 0,xmlns:"http://www.w3.org/2000/svg"},r=(0,g.forwardRef)(function(a,s){var u=a.bgColor,f=a.bgD,d=a.fgD,E=a.fgColor,p=a.size,v=a.title,_=a.viewBoxSize,y=o(a,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize"]);return m.default.createElement("svg",e({},y,{height:p,ref:s,viewBox:"0 0 "+_+" "+_,width:p}),v?m.default.createElement("title",null,v):null,m.default.createElement("path",{d:f,fill:u}),m.default.createElement("path",{d,fill:E}))});return r.displayName="QRCodeSvg",r.propTypes=n,r.defaultProps=t,A.default=r,A}var ie;function xe(){if(ie)return R;ie=1,Object.defineProperty(R,"__esModule",{value:!0});var e=Object.assign||function(p){for(var v=1;v<arguments.length;v++){var _=arguments[v];for(var y in _)Object.prototype.hasOwnProperty.call(_,y)&&(p[y]=_[y])}return p},h=Se(),l=s(h),g=he(),m=s(g),i=le(),o=s(i),n=se(),t=s(n),r=Me(),a=s(r);function s(p){return p&&p.__esModule?p:{default:p}}function u(p,v){var _={};for(var y in p)v.indexOf(y)>=0||Object.prototype.hasOwnProperty.call(p,y)&&(_[y]=p[y]);return _}var f={bgColor:o.default.oneOfType([o.default.object,o.default.string]),fgColor:o.default.oneOfType([o.default.object,o.default.string]),level:o.default.string,size:o.default.number,value:o.default.string.isRequired},d={bgColor:"#FFFFFF",fgColor:"#000000",level:"L",size:256},E=(0,n.forwardRef)(function(p,v){var _=p.bgColor,y=p.fgColor,w=p.level,L=p.size,P=p.value,B=u(p,["bgColor","fgColor","level","size","value"]),T=new l.default(-1,m.default[w]);T.addData(P),T.make();var D=T.modules;return t.default.createElement(a.default,e({},B,{bgColor:_,bgD:D.map(function(k,S){return k.map(function(M,x){return M?"":"M "+x+" "+S+" l 1 0 0 1 -1 0 Z"}).join(" ")}).join(" "),fgColor:y,fgD:D.map(function(k,S){return k.map(function(M,x){return M?"M "+x+" "+S+" l 1 0 0 1 -1 0 Z":""}).join(" ")}).join(" "),ref:v,size:L,viewBoxSize:D.length}))});return E.displayName="QRCode",E.propTypes=f,E.defaultProps=d,R.default=E,R}var $e=xe();const Oe=me($e),oe=({directoryPath:e})=>{const{favourites:{favourites:h},clearShortlist:l}=ge(),[g,m]=U.useState(!1);U.useEffect(()=>{m(!0)},[]);const i=()=>{window.confirm("Are you sure you want to clear your shortlist?")&&l()},o=t=>Object.values(t).filter(r=>r!==""&&r!==t.id&&r!==t.country).join(", "),n=async()=>{const t=h.map(r=>{const a=r.addresses.length>0?o(r.addresses[0]):"";return`
Name: ${r.name}
Link: ${r.id}
Address: ${a}
Email: ${r.email??""}
Website: ${r.website??""}
Telephone: ${r.phone??""}
About: ${r.snippet.replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g," ")??""}

      `});try{await navigator.clipboard.writeText(t.join("")).then(()=>{window.alert("Copied to clipboard")})}catch{window.alert("Unable to copy")}};return c.createElement(pe,{"data-testid":"DirectoryShortList"},g&&c.createElement(K,null,h.length>0?c.createElement(c.Fragment,null,c.createElement(b,{small:"full",medium:"full",large:"full"},c.createElement(be,null,c.createElement(we,{onClick:i},"Clear Shortlist"),c.createElement(Y,{onClick:n},"Copy To Clipboard"),c.createElement(Y,{onClick:()=>window.print()},"Print Shortlist"))),h.map(t=>c.createElement(b,{key:t.id,small:"full",medium:"full",large:"full",classes:"favourite-outer"},c.createElement(X,null,c.createElement(K,null,c.createElement(b,{small:"full",medium:"full",large:"full"},c.createElement(Ee,{href:`${t.id}`},t.name),c.createElement(_e,null,c.createElement("p",null,`${t.id}`))),c.createElement(b,{small:"full",medium:"full",large:"one-half"},c.createElement(ye,null,c.createElement("div",null,t.snippet),c.createElement(Ce,null,c.createElement(Oe,{value:`${t.id}`,size:256,style:{height:"auto",maxWidth:"100%",width:"100%"},viewBox:"0 0 256 256"}))),t.addresses?.length>0&&c.createElement(c.Fragment,null,c.createElement(Le,null,c.createElement(Be,null,"Address"),t.addresses?.length===1?c.createElement("p",null,o(t.addresses[0])):c.createElement("ul",null,t.addresses.map(r=>c.createElement("li",{key:r.id},o(r))))),c.createElement(Pe,null,c.createElement($,{terms:[{term:"Address",detail:o(t.addresses[0])}],hasMargin:!1})))),c.createElement(b,{small:"full",medium:"full",large:"one-half"},c.createElement($,{terms:ve(t.email,t.website,t.phone),hasMargin:!1}),t.fees&&c.createElement($,{terms:[{term:"Cost",detail:t.fees}],hasMargin:!1})),c.createElement(b,{small:"full",medium:"full",large:"full"},c.createElement(Te,null,c.createElement(ce,{id:t.id,name:t.name,snippet:t.snippet,email:t.email,website:t.website,phone:t.phone,addresses:t.addresses})))))))):c.createElement(b,{small:"full",medium:"full",large:"full"},c.createElement(X,null,c.createElement("p",null,"No items in the shortlist")))))};try{oe.displayName="DirectoryShortList",oe.__docgenInfo={description:"",displayName:"DirectoryShortList",props:{directoryPath:{defaultValue:null,description:"The path of the directory",name:"directoryPath",required:!0,type:{name:"string"}}}}}catch{}export{oe as D};
