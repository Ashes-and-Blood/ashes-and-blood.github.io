import{t as S}from"./chunk-EG_Fg-4a.js";import{B as Py,D as Jo$1,Et as cT,I as Mr$1,Mt as iT,N as La$1,Nt as i_,O as KG,Ot as cf,Pt as ir,Q as Um,Qt as rv,Rt as mS,St as bS,T as J_,Ut as ov,Vt as nf,Wt as p$1,X as T$1,Y as SS,Zt as rf,_t as aT,a as B,et as VG,f as FS,fn as l,ft as Za$1,h as Fy,in as uf,j as Ko$1,jt as iE,k as KH,l as Ct$1,lt as Ya$1,nn as te$1,nt as Vw,o as By,on as vi$1,pn as m$1,qt as qa,st as Xr$1,vt as a_,x as Im}from"./main-5MILTPN4.js";function qe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function Ta(e){if(Array.isArray(e))return e}function ja(e){if(Array.isArray(e))return qe(e)}function La(e,t){if(!(e instanceof t))throw new TypeError(`Cannot call a class as a function`)}function Rn(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,`value`in a&&(a.writable=!0),Object.defineProperty(e,bt(a.key),a)}}function $a(e,t,n){return t&&Rn(e.prototype,t),n&&Rn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ce(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=sn(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return o=l.done,l},e:function(l){s=!0,r=l},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw r}}}}function p(e,t,n){return(t=bt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ra(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Wa(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var a,i,r,o,s=[],l=!0,c=!1;try{if(r=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=r.call(n)).done)&&(s.push(a.value),s.length!==t);l=!0);}catch(d){c=!0,i=d}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw i}}return s}}function Ha(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ua(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wn(Object(n),!0).forEach(function(a){p(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Oe(e,t){return Ta(e)||Wa(e,t)||sn(e,t)||Ha()}function E(e){return ja(e)||Ra(e)||sn(e)||Ua()}function Va(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||`default`);if(typeof a!=`object`)return a;throw new TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function bt(e){var t=Va(e,`string`);return typeof t==`symbol`?t:t+``}function Pe(e){"@babel/helpers - typeof";return Pe=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(t){return typeof t}:function(t){return t&&typeof Symbol==`function`&&t.constructor===Symbol&&t!==Symbol.prototype?`symbol`:typeof t},Pe(e)}function sn(e,t){if(e){if(typeof e==`string`)return qe(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qe(e,t):void 0}}var Hn=function(){};var ln={};var yt={};var xt=null;var St={mark:Hn,measure:Hn};try{typeof window<`u`&&(ln=window),typeof document<`u`&&(yt=document),typeof MutationObserver<`u`&&(xt=MutationObserver),typeof performance<`u`&&(St=performance)}catch{}var Un=(ln.navigator||{}).userAgent;var Vn=Un===void 0?``:Un;var U=ln;var y=yt;var qn=xt;var ye=St;U.document;var R=!!y.documentElement&&!!y.head&&typeof y.addEventListener==`function`&&typeof y.createElement==`function`;var wt=~Vn.indexOf(`MSIE`)||~Vn.indexOf(`Trident/`);var xe;var Ya=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/;var Ba=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i;var Ct={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}};var Xa={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`};var It=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];var z=`classic`;var ce=`duotone`;var kt=`sharp`;var Pt=`sharp-duotone`;var zt=`chisel`;var At=`etch`;var Ot=`graphite`;var Mt=`jelly`;var Ft=`jelly-duo`;var Nt=`jelly-fill`;var _t=`mosaic`;var Dt=`notdog`;var Et=`notdog-duo`;var Tt=`pixel`;var jt=`slab`;var Lt=`slab-duo`;var $t=`slab-press`;var Rt=`slab-press-duo`;var Wt=`thumbprint`;var Ht=`utility`;var Ut=`utility-duo`;var Vt=`utility-fill`;var qt=`vellum`;var Yt=`whiteboard`;var Ga=`Classic`;var Ka=`Duotone`;var Ja=`Sharp`;var Qa=`Sharp Duotone`;var Za=`Chisel`;var ei=`Etch`;var ni=`Graphite`;var ti=`Jelly`;var ai=`Jelly Duo`;var ii=`Jelly Fill`;var ri=`Mosaic`;var oi=`Notdog`;var si=`Notdog Duo`;var li=`Pixel`;var fi=`Slab`;var ci=`Slab Duo`;var ui=`Slab Press`;var di=`Slab Press Duo`;var mi=`Thumbprint`;var pi=`Utility`;var gi=`Utility Duo`;var vi=`Utility Fill`;var hi=`Vellum`;var bi=`Whiteboard`;var Bt=[z,ce,kt,Pt,zt,At,Ot,Mt,Ft,Nt,_t,Dt,Et,Tt,jt,Lt,$t,Rt,Wt,Ht,Ut,Vt,qt,Yt];xe={},p(p(p(p(p(p(p(p(p(p(xe,z,Ga),ce,Ka),kt,Ja),Pt,Qa),zt,Za),At,ei),Ot,ni),Mt,ti),Ft,ai),Nt,ii),p(p(p(p(p(p(p(p(p(p(xe,_t,ri),Dt,oi),Et,si),Tt,li),jt,fi),Lt,ci),$t,ui),Rt,di),Wt,mi),Ht,pi),p(p(p(p(xe,Ut,gi),Vt,vi),qt,hi),Yt,bi);var yi={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}};var xi={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}};var Si=/* @__PURE__ */ new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]);var wi={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}};var Xt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`];var Yn={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}};var Ci=[`kit`];p(p({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Ai={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}};var Oi={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}};var Mi={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}};var Bn={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}};var Se;var we={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`};var Fi=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Se={},p(p(p(p(p(p(p(p(p(p(Se,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),p(p(p(p(p(p(p(p(p(p(Se,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),p(p(p(p(Se,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`);p(p({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Mr={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}};var Fr={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]};var Ye={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}};var Gt=[`fa`,`fas`,`far`,`fal`,`fat`,`fad`,`fadr`,`fadl`,`fadt`,`fab`,`fass`,`fasr`,`fasl`,`fast`,`fasds`,`fasdr`,`fasdl`,`fasdt`,`faslr`,`faslpr`,`fasldr`,`faslpdr`,`fapr`,`fams`,`favs`,`fawsb`,`fatl`,`fans`,`fands`,`faes`,`fagt`,`fajr`,`fajfr`,`fajdr`,`facr`,`fausb`,`faudsb`,`faufsb`].concat(Fi,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]);var _r=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`];var Kt=[1,2,3,4,5,6,7,8,9,10];var Dr=Kt.concat([11,12,13,14,15,16,17,18,19,20]);var Tr=[].concat(E(Object.keys(Fr)),_r,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,we.GROUP,we.SWAP_OPACITY,we.PRIMARY,we.SECONDARY]).concat(Kt.map(function(e){return``.concat(e,`x`)})).concat(Dr.map(function(e){return`w-`.concat(e)}));var jr={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}};var L=`___FONT_AWESOME___`;var Be=16;var Jt=`fa`;var Qt=`svg-inline--fa`;var K=`data-fa-i2svg`;var Xe=`data-fa-pseudo-element`;var Lr=`data-fa-pseudo-element-pending`;var fn=`data-prefix`;var cn=`data-icon`;var Xn=`fontawesome-i2svg`;var $r=`async`;var Rr=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`];var Zt=[`::before`,`::after`,`:before`,`:after`];var ea=(function(){try{return!0}catch{return!1}})();function ue(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[z]}})}var na=f({},Ct);na[z]=f(f(f(f({},{"fa-duotone":`duotone`}),Ct[z]),Yn.kit),Yn[`kit-duotone`]);var Wr=ue(na);var Ge=f({},wi);Ge[z]=f(f(f(f({},{duotone:`fad`}),Ge[z]),Bn.kit),Bn[`kit-duotone`]);var Gn=ue(Ge);var Ke=f({},Ye);Ke[z]=f(f({},Ke[z]),Mi.kit);var un=ue(Ke);var Je=f({},Mr);Je[z]=f(f({},Je[z]),Ai.kit);ue(Je);var Hr=Ya;var ta=`fa-layers-text`;var Ur=Ba;ue(f({},yi));var qr=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`];var Re=Xa;var Yr=[].concat(E(Ci),E(Tr));var se=U.FontAwesomeConfig||{};function Br(e){var t=y.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Xr(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}y&&typeof y.querySelector==`function`&&(Kn=[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]],Kn.forEach(function(e){var t=Oe(e,2),n=t[0],a=t[1],i=Xr(Br(n));i!=null&&(se[a]=i)}));var Kn;var aa={styleDefault:`solid`,familyDefault:z,cssPrefix:Jt,replacementClass:Qt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};se.familyPrefix&&(se.cssPrefix=se.familyPrefix);var te=f(f({},aa),se);te.autoReplaceSvg||(te.observeMutations=!1);var m={};Object.keys(aa).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(n){te[e]=n,le.forEach(function(a){return a(m)})},get:function(){return te[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){te.cssPrefix=t,le.forEach(function(n){return n(m)})},get:function(){return te.cssPrefix}});U.FontAwesomeConfig=m;var le=[];function Gr(e){return le.push(e),function(){le.splice(le.indexOf(e),1)}}var H=Be;var T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Kr(e){if(!(!e||!R)){var t=y.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=y.head.childNodes,a=null,i=n.length-1;i>-1;i--){var r=n[i],o=(r.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(a=r)}return y.head.insertBefore(t,a),e}}var Jr=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function Jn(){for(var e=12,t=``;e-->0;)t+=Jr[Math.random()*62|0];return t}function ae(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function dn(e){return e.classList?ae(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(t){return t})}function ia(e){return``.concat(e).replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Qr(e){return Object.keys(e||{}).reduce(function(t,n){return t+``.concat(n,`="`).concat(ia(e[n]),`" `)},``).trim()}function Me(e){return Object.keys(e||{}).reduce(function(t,n){return t+``.concat(n,`: `).concat(e[n].trim(),`;`)},``)}function mn(e){return e.size!==T.size||e.x!==T.x||e.y!==T.y||e.rotate!==T.rotate||e.flipX||e.flipY}function Zr(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,i={transform:`translate(`.concat(n/2,` 256)`)},r=`translate(`.concat(t.x*32,`, `).concat(t.y*32,`) `),o=`scale(`.concat(t.size/16*(t.flipX?-1:1),`, `).concat(t.size/16*(t.flipY?-1:1),`) `),s=`rotate(`.concat(t.rotate,` 0 0)`);return{outer:i,inner:{transform:``.concat(r,` `).concat(o,` `).concat(s)},path:{transform:`translate(`.concat(a/2*-1,` -256)`)}}}function eo(e){var t=e.transform,n=e.width,a=n===void 0?Be:n,i=e.height,r=i===void 0?Be:i,o=e.startCentered,s=o===void 0?!1:o,l=``;return s&&wt?l+=`translate(`.concat(t.x/H-a/2,`em, `).concat(t.y/H-r/2,`em) `):s?l+=`translate(calc(-50% + `.concat(t.x/H,`em), calc(-50% + `).concat(t.y/H,`em)) `):l+=`translate(`.concat(t.x/H,`em, `).concat(t.y/H,`em) `),l+=`scale(`.concat(t.size/H*(t.flipX?-1:1),`, `).concat(t.size/H*(t.flipY?-1:1),`) `),l+=`rotate(`.concat(t.rotate,`deg) `),l}var no=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ra(){var e=Jt,t=Qt,n=m.cssPrefix,a=m.replacementClass,i=no;if(n!==e||a!==t){var r=new RegExp(`\\.`.concat(e,`\\-`),`g`),o=new RegExp(`\\--`.concat(e,`\\-`),`g`),s=new RegExp(`\\.`.concat(t),`g`);i=i.replace(r,`.`.concat(n,`-`)).replace(o,`--`.concat(n,`-`)).replace(s,`.`.concat(a))}return i}var Qn=!1;function We(){m.autoAddCss&&!Qn&&(Kr(ra()),Qn=!0)}var to={mixout:function(){return{dom:{css:ra,insertCss:We}}},hooks:function(){return{beforeDOMElementCreation:function(){We()},beforeI2svg:function(){We()}}}};var $=U||{};$[L]||($[L]={});$[L].styles||($[L].styles={});$[L].hooks||($[L].hooks={});$[L].shims||($[L].shims=[]);var D=$[L];var oa=[];var sa=function(){y.removeEventListener(`DOMContentLoaded`,sa),ze=1,oa.map(function(t){return t()})};var ze=!1;R&&(ze=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),ze||y.addEventListener(`DOMContentLoaded`,sa));function ao(e){R&&(ze?setTimeout(e,0):oa.push(e))}function de(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,i=e.children,r=i===void 0?[]:i;return typeof e==`string`?ia(e):`<`.concat(t,` `).concat(Qr(a),`>`).concat(r.map(de).join(``),`</`).concat(t,`>`)}function Zn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var io=function(t,n){return function(a,i,r,o){return t.call(n,a,i,r,o)}};var He=function(t,n,a,i){var r=Object.keys(t),o=r.length,s=i!==void 0?io(n,i):n,l,c,d;for(a===void 0?(l=1,d=t[r[0]]):(l=0,d=a);l<o;l++)c=r[l],d=s(d,t[c],c,t);return d};function la(e){return E(e).length!==1?null:e.codePointAt(0).toString(16)}function et(e){return Object.keys(e).reduce(function(t,n){var a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function Qe(e,t){var a=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,i=a===void 0?!1:a,r=et(t);typeof D.hooks.addPack==`function`&&!i?D.hooks.addPack(e,et(t)):D.styles[e]=f(f({},D.styles[e]||{}),r),e===`fas`&&Qe(`fa`,t)}var fe=D.styles;var ro=D.shims;var fa=Object.keys(un);var oo=fa.reduce(function(e,t){return e[t]=Object.keys(un[t]),e},{});var pn=null;var ca={};var ua={};var da={};var ma={};var pa={};function so(e){return~Yr.indexOf(e)}function lo(e,t){var n=t.split(`-`),a=n[0],i=n.slice(1).join(`-`);return a===e&&i!==``&&!so(i)?i:null}var ga=function(){var t=function(r){return He(fe,function(o,s,l){return o[l]=He(s,r,{}),o},{})};ca=t(function(i,r,o){if(r[3]&&(i[r[3]]=o),r[2])r[2].filter(function(l){return typeof l==`number`}).forEach(function(l){i[l.toString(16)]=o});return i}),ua=t(function(i,r,o){if(i[o]=o,r[2])r[2].filter(function(l){return typeof l==`string`}).forEach(function(l){i[l]=o});return i}),pa=t(function(i,r,o){var s=r[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n=`far`in fe||m.autoFetchSvg,a=He(ro,function(i,r){var o=r[0],s=r[1],l=r[2];return s===`far`&&!n&&(s=`fas`),typeof o==`string`&&(i.names[o]={prefix:s,iconName:l}),typeof o==`number`&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});da=a.names,ma=a.unicodes,pn=Fe(m.styleDefault,{family:m.familyDefault})};Gr(function(e){pn=Fe(e.styleDefault,{family:m.familyDefault})});ga();function gn(e,t){return(ca[e]||{})[t]}function fo(e,t){return(ua[e]||{})[t]}function G(e,t){return(pa[e]||{})[t]}function va(e){return da[e]||{prefix:null,iconName:null}}function co(e){var t=ma[e],n=gn(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function V(){return pn}var ha=function(){return{prefix:null,iconName:null,rest:[]}};function uo(e){var t=z,n=fa.reduce(function(a,i){return a[i]=``.concat(m.cssPrefix,`-`).concat(i),a},{});return Bt.forEach(function(a){(e.includes(n[a])||e.some(function(i){return oo[a].includes(i)}))&&(t=a)}),t}function Fe(e){var n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,a=n===void 0?z:n,i=Wr[a][e];if(a===ce&&!e)return`fad`;var r=Gn[a][e]||Gn[a][i],o=e in D.styles?e:null;return r||o||null}function mo(e){var t=[],n=null;return e.forEach(function(a){var i=lo(m.cssPrefix,a);i?n=i:a&&t.push(a)}),{iconName:n,rest:t}}function nt(e){return e.sort().filter(function(t,n,a){return a.indexOf(t)===n})}var tt=Gt.concat(Xt);function Ne(e){var n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,a=n===void 0?!1:n,i=null,r=nt(e.filter(function(g){return tt.includes(g)})),o=nt(e.filter(function(g){return!tt.includes(g)})),c=Oe(r.filter(function(g){return i=g,!It.includes(g)}),1)[0],d=c===void 0?null:c,u=uo(r),v=f(f({},mo(o)),{},{prefix:Fe(d,{family:u})});return f(f(f({},v),ho({values:e,family:u,styles:fe,config:m,canonical:v,givenPrefix:i})),po(a,i,v))}function po(e,t,n){var a=n.prefix,i=n.iconName;if(e||!a||!i)return{prefix:a,iconName:i};var r=t===`fa`?va(i):{},o=G(a,i);return i=r.iconName||o||i,a=r.prefix||a,a===`far`&&!fe.far&&fe.fas&&!m.autoFetchSvg&&(a=`fas`),{prefix:a,iconName:i}}var go=Bt.filter(function(e){return e!==z||e!==ce});var vo=Object.keys(Ye).filter(function(e){return e!==z}).map(function(e){return Object.keys(Ye[e])}).flat();function ho(e){var t=e.values,n=e.family,a=e.canonical,i=e.givenPrefix,r=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,l=e.config,c=l===void 0?{}:l,d=n===ce,u=t.includes(`fa-duotone`)||t.includes(`fad`),v=c.familyDefault===`duotone`,g=a.prefix===`fad`||a.prefix===`fa-duotone`;if(!d&&(u||v||g)&&(a.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(a.prefix=`fab`),!a.prefix&&go.includes(n)){if(Object.keys(s).find(function(O){return vo.includes(O)})||c.autoFetchSvg)a.prefix=Si.get(n).defaultShortPrefixId,a.iconName=G(a.prefix,a.iconName)||a.iconName}return(a.prefix===`fa`||r===`fa`)&&(a.prefix=V()||`fas`),a}var bo=(function(){function e(){La(this,e),this.definitions={}}return $a(e,[{key:`add`,value:function(){for(var n=this,a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=f(f({},n.definitions[s]||{}),o[s]),Qe(s,o[s]);var l=un[z][s];l&&Qe(l,o[s]),ga()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(n,a){var i=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(i).map(function(r){var o=i[r],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(u){typeof u==`string`&&(n[s][u]=c)}),n[s][l]=c}),n}}])})();var at=[];var ee={};var ne={};var yo=Object.keys(ne);function xo(e,t){var n=t.mixoutsTo;return at=e,ee={},Object.keys(ne).forEach(function(a){yo.indexOf(a)===-1&&delete ne[a]}),at.forEach(function(a){var i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]==`function`&&(n[o]=i[o]),Pe(i[o])===`object`&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),a.hooks){var r=a.hooks();Object.keys(r).forEach(function(o){ee[o]||(ee[o]=[]),ee[o].push(r[o])})}a.provides&&a.provides(ne)}),n}function Ze(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return(ee[e]||[]).forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function J(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(ee[e]||[]).forEach(function(r){r.apply(null,n)})}function q(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ne[e]?ne[e].apply(null,t):void 0}function en(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||V();if(t)return t=G(n,t)||t,Zn(ba.definitions,n,t)||Zn(D.styles,n,t)}var ba=new bo;var So=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,J(`noAuto`)};var N={noAuto:So,config:m,dom:{i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(J(`beforeI2svg`,t),q(`pseudoElements2svg`,t),q(`i2svg`,t)):Promise.reject(/* @__PURE__ */ new Error(`Operation requires a DOM of some kind.`))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ao(function(){Io({autoReplaceSvgRoot:n}),J(`watch`,t)})}},parse:{icon:function(t){if(t===null)return null;if(Pe(t)===`object`&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:G(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf(`fa-`)===0?t[1].slice(3):t[1],a=Fe(t[0]);return{prefix:a,iconName:G(a,n)||n}}if(typeof t==`string`&&(t.indexOf(``.concat(m.cssPrefix,`-`))>-1||t.match(Hr))){var i=Ne(t.split(` `),{skipLookups:!0});return{prefix:i.prefix||V(),iconName:G(i.prefix,i.iconName)||i.iconName}}if(typeof t==`string`){var r=V();return{prefix:r,iconName:G(r,t)||t}}}},library:ba,findIconDefinition:en,toHtml:de};var Io=function(){var n=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,a=n===void 0?y:n;(Object.keys(D.styles).length>0||m.autoFetchSvg)&&R&&m.autoReplaceSvg&&N.dom.i2svg({node:a})};function _e(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return de(a)})}}),Object.defineProperty(e,"node",{get:function(){if(R){var a=y.createElement(`div`);return a.innerHTML=e.html,a.children}}}),e}function ko(e){var t=e.children,n=e.main,a=e.mask,i=e.attributes,r=e.styles,o=e.transform;if(mn(o)&&n.found&&!a.found){var c={x:n.width/n.height/2,y:.5};i.style=Me(f(f({},r),{},{"transform-origin":``.concat(c.x+o.x/16,`em `).concat(c.y+o.y/16,`em`)}))}return[{tag:`svg`,attributes:i,children:t}]}function Po(e){var t=e.prefix,n=e.iconName,a=e.children,i=e.attributes,r=e.symbol,o=r===!0?``.concat(t,`-`).concat(m.cssPrefix,`-`).concat(n):r;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:f(f({},i),{},{id:o}),children:a}]}]}function zo(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(n){return n in e})}function vn(e){var t=e.icons,n=t.main,a=t.mask,i=e.prefix,r=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,c=e.extra,d=e.watchable,u=d===void 0?!1:d,v=a.found?a:n,g=v.width,k=v.height,S=[m.replacementClass,r?``.concat(m.cssPrefix,`-`).concat(r):``].filter(function(j){return c.classes.indexOf(j)===-1}).filter(function(j){return j!==``||!!j}).concat(c.classes).join(` `),O={children:[],attributes:f(f({},c.attributes),{},{"data-prefix":i,"data-icon":r,class:S,role:c.attributes.role||`img`,viewBox:`0 0 `.concat(g,` `).concat(k)})};!zo(c.attributes)&&!c.attributes[`aria-hidden`]&&(O.attributes[`aria-hidden`]=`true`),u&&(O.attributes[K]=``);var P=f(f({},O),{},{prefix:i,iconName:r,main:n,mask:a,maskId:l,transform:o,symbol:s,styles:f({},c.styles)}),F=a.found&&n.found?q(`generateAbstractMask`,P)||{children:[],attributes:{}}:q(`generateAbstractIcon`,P)||{children:[],attributes:{}},_=F.children,Q=F.attributes;return P.children=_,P.attributes=Q,s?Po(P):ko(P)}function it(e){var t=e.content,n=e.width,a=e.height,i=e.transform,r=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},r.attributes),{},{class:r.classes.join(` `)});s&&(l[K]=``);var c=f({},r.styles);mn(i)&&(c.transform=eo({transform:i,startCentered:!0,width:n,height:a}),c[`-webkit-transform`]=c.transform);var d=Me(c);d.length>0&&(l.style=d);var u=[];return u.push({tag:`span`,attributes:l,children:[t]}),u}function Ao(e){var t=e.content,n=e.extra,a=f(f({},n.attributes),{},{class:n.classes.join(` `)}),i=Me(n.styles);i.length>0&&(a.style=i);var r=[];return r.push({tag:`span`,attributes:a,children:[t]}),r}var Ue=D.styles;function nn(e){var t=e[0],n=e[1],r=Oe(e.slice(4),1)[0],o=null;return Array.isArray(r)?o={tag:`g`,attributes:{class:``.concat(m.cssPrefix,`-`).concat(Re.GROUP)},children:[{tag:`path`,attributes:{class:``.concat(m.cssPrefix,`-`).concat(Re.SECONDARY),fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:``.concat(m.cssPrefix,`-`).concat(Re.PRIMARY),fill:`currentColor`,d:r[1]}}]}:o={tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:o}}var Oo={found:!1,width:512,height:512};function Mo(e,t){!ea&&!m.showMissingIcons&&e&&console.error(`Icon with name "`.concat(e,`" and prefix "`).concat(t,`" is missing.`))}function tn(e,t){var n=t;return t===`fa`&&m.styleDefault!==null&&(t=V()),new Promise(function(a,i){if(n===`fa`){var r=va(e)||{};e=r.iconName||e,t=r.prefix||t}if(e&&t&&Ue[t]&&Ue[t][e]){var o=Ue[t][e];return a(nn(o))}Mo(e,t),a(f(f({},Oo),{},{icon:m.showMissingIcons&&e?q(`missingIconAbstract`)||{}:{}}))})}var rt=function(){};var an=m.measurePerformance&&ye&&ye.mark&&ye.measure?ye:{mark:rt,measure:rt};var oe=`FA "7.3.1"`;var Fo=function(t){return an.mark(``.concat(oe,` `).concat(t,` begins`)),function(){return ya(t)}};var ya=function(t){an.mark(``.concat(oe,` `).concat(t,` ends`)),an.measure(``.concat(oe,` `).concat(t),``.concat(oe,` `).concat(t,` begins`),``.concat(oe,` `).concat(t,` ends`))};var hn={begin:Fo,end:ya};var Ie=function(){};function ot(e){return typeof(e.getAttribute?e.getAttribute(K):null)==`string`}function No(e){var t=e.getAttribute?e.getAttribute(fn):null,n=e.getAttribute?e.getAttribute(cn):null;return t&&n}function _o(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Do(){if(m.autoReplaceSvg===!0)return ke.replace;return ke[m.autoReplaceSvg]||ke.replace}function Eo(e){return y.createElementNS(`http://www.w3.org/2000/svg`,e)}function To(e){return y.createElement(e)}function xa(e){var n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,a=n===void 0?e.tag===`svg`?Eo:To:n;if(typeof e==`string`)return y.createTextNode(e);var i=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});return(e.children||[]).forEach(function(o){i.appendChild(xa(o,{ceFn:a}))}),i}function jo(e){var t=` `.concat(e.outerHTML,` `);return t=``.concat(t,`Font Awesome fontawesome.com `),t}var ke={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(xa(i),n)}),n.getAttribute(K)===null&&m.keepOriginalSource){var a=y.createComment(jo(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~dn(n).indexOf(m.replacementClass))return ke.replace(t);var i=new RegExp(``.concat(m.cssPrefix,`-.*`));if(delete a[0].attributes.id,a[0].attributes.class){var r=a[0].attributes.class.split(` `).reduce(function(s,l){return l===m.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=r.toSvg.join(` `),r.toNode.length===0?n.removeAttribute(`class`):n.setAttribute(`class`,r.toNode.join(` `))}var o=a.map(function(s){return de(s)}).join(`
`);n.setAttribute(K,``),n.innerHTML=o}};function st(e){e()}function Sa(e,t){var n=typeof t==`function`?t:Ie;if(e.length===0)n();else{var a=st;m.mutateApproach===$r&&(a=U.requestAnimationFrame||st),a(function(){var i=Do(),r=hn.begin(`mutate`);e.map(i),r(),n()})}}var bn=!1;function wa(){bn=!0}function rn(){bn=!1}var Ae=null;function lt(e){if(qn&&m.observeMutations){var t=e.treeCallback,n=t===void 0?Ie:t,a=e.nodeCallback,i=a===void 0?Ie:a,r=e.pseudoElementsCallback,o=r===void 0?Ie:r,s=e.observeMutationsRoot,l=s===void 0?y:s;Ae=new qn(function(c){if(!bn){var d=V();ae(c).forEach(function(u){if(u.type===`childList`&&u.addedNodes.length>0&&!ot(u.addedNodes[0])&&(m.searchPseudoElements&&o(u.target),n(u.target)),u.type===`attributes`&&u.target.parentNode&&m.searchPseudoElements&&o([u.target],!0),u.type===`attributes`&&ot(u.target)&&~qr.indexOf(u.attributeName))if(u.attributeName===`class`&&No(u.target)){var v=Ne(dn(u.target)),g=v.prefix,k=v.iconName;u.target.setAttribute(fn,g||d),k&&u.target.setAttribute(cn,k)}else _o(u.target)&&i(u.target)})}}),R&&Ae.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Lo(){Ae&&Ae.disconnect()}function $o(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(a,i){var r=i.split(`:`),o=r[0],s=r.slice(1);return o&&s.length>0&&(a[o]=s.join(`:`).trim()),a},{})),n}function Ro(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),a=e.innerText!==void 0?e.innerText.trim():``,i=Ne(dn(e));return i.prefix||(i.prefix=V()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=fo(i.prefix,e.innerText)||gn(i.prefix,la(e.innerText))),!i.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Wo(e){return ae(e.attributes).reduce(function(n,a){return n.name!==`class`&&n.name!==`style`&&(n[a.name]=a.value),n},{})}function Ho(){return{iconName:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ft(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ro(e),a=n.iconName,i=n.prefix,r=n.rest,o=Wo(e),s=Ze(`parseNodeAttributes`,{},e);return f({iconName:a,prefix:i,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:t.styleParser?$o(e):[],attributes:o}},s)}var Uo=D.styles;function Ca(e){var t=m.autoReplaceSvg===`nest`?ft(e,{styleParser:!1}):ft(e);return~t.extra.classes.indexOf(ta)?q(`generateLayersText`,e,t):q(`generateSvgReplacementMutation`,e,t)}function Vo(){return[].concat(E(Xt),E(Gt))}function ct(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var n=y.documentElement.classList,a=function(u){return n.add(``.concat(Xn,`-`).concat(u))},i=function(u){return n.remove(``.concat(Xn,`-`).concat(u))},r=m.autoFetchSvg?Vo():It.concat(Object.keys(Uo));r.includes(`fa`)||r.push(`fa`);var o=[`.`.concat(ta,`:not([`).concat(K,`])`)].concat(r.map(function(d){return`.`.concat(d,`:not([`).concat(K,`])`)})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=ae(e.querySelectorAll(o))}catch{}if(s.length>0)a(`pending`),i(`complete`);else return Promise.resolve();var l=hn.begin(`onTree`),c=s.reduce(function(d,u){try{var v=Ca(u);v&&d.push(v)}catch(g){ea||g.name===`MissingIcon`&&console.error(g)}return d},[]);return new Promise(function(d,u){Promise.all(c).then(function(v){Sa(v,function(){a(`active`),a(`complete`),i(`pending`),typeof t==`function`&&t(),l(),d()})}).catch(function(v){l(),u(v)})})}function qo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ca(e).then(function(n){n&&Sa([n],t)})}function Yo(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:en(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:en(i||{})),e(a,f(f({},n),{},{mask:i}))}}var Bo=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,i=a===void 0?T:a,r=n.symbol,o=r===void 0?!1:r,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,u=n.classes,v=u===void 0?[]:u,g=n.attributes,k=g===void 0?{}:g,S=n.styles,O=S===void 0?{}:S;if(t){var P=t.prefix,F=t.iconName,_=t.icon;return _e(f({type:`icon`},t),function(){return J(`beforeDOMElementCreation`,{iconDefinition:t,params:n}),vn({icons:{main:nn(_),mask:l?nn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:F,transform:f(f({},T),i),symbol:o,maskId:d,extra:{attributes:k,styles:O,classes:v}})})}};var Xo={mixout:function(){return{icon:Yo(Bo)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ct,n.nodeCallback=qo,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,i=a===void 0?y:a,r=n.callback;return ct(i,r===void 0?function(){}:r)},t.generateSvgReplacementMutation=function(n,a){var i=a.iconName,r=a.prefix,o=a.transform,s=a.symbol,l=a.mask,c=a.maskId,d=a.extra;return new Promise(function(u,v){Promise.all([tn(i,r),l.iconName?tn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var k=Oe(g,2),S=k[0],O=k[1];u([n,vn({icons:{main:S,mask:O},prefix:r,iconName:i,transform:o,symbol:s,maskId:c,extra:d,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var a=n.children,i=n.attributes,r=n.main,o=n.transform,s=n.styles,l=Me(s);l.length>0&&(i.style=l);var c;return mn(o)&&(c=q(`generateAbstractTransformGrouping`,{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),a.push(c||r.icon),{children:a,attributes:i}}}};var Go={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.classes,r=i===void 0?[]:i;return _e({type:`layer`},function(){J(`beforeDOMElementCreation`,{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:`span`,attributes:{class:[``.concat(m.cssPrefix,`-layers`)].concat(E(r)).join(` `)},children:o}]})}}}};var Ko={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.title,r=i===void 0?null:i,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,d=a.styles,u=d===void 0?{}:d;return _e({type:`counter`,content:n},function(){return J(`beforeDOMElementCreation`,{content:n,params:a}),Ao({content:n.toString(),title:r,extra:{attributes:c,styles:u,classes:[``.concat(m.cssPrefix,`-layers-counter`)].concat(E(s))}})})}}}};var Jo={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.transform,r=i===void 0?T:i,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,d=a.styles,u=d===void 0?{}:d;return _e({type:`text`,content:n},function(){return J(`beforeDOMElementCreation`,{content:n,params:a}),it({content:n,transform:f(f({},T),r),extra:{attributes:c,styles:u,classes:[``.concat(m.cssPrefix,`-layers-text`)].concat(E(s))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var i=a.transform,r=a.extra,o=null,s=null;if(wt){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();o=c.width/l,s=c.height/l}return Promise.resolve([n,it({content:n.innerHTML,width:o,height:s,transform:i,extra:r,watchable:!0})])}}};var Ia=new RegExp(`"`,`ug`);var ut=[1105920,1112319];var dt=f(f(f(f({},{FontAwesome:{normal:`fas`,400:`fas`}}),xi),jr),Oi);var on=Object.keys(dt).reduce(function(e,t){return e[t.toLowerCase()]=dt[t],e},{});var Qo=Object.keys(on).reduce(function(e,t){var n=on[t];return e[t]=n[900]||E(Object.entries(n))[0][1],e},{});function Zo(e){return la(E(e.replace(Ia,``))[0]||``)}function es(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),a=e.getPropertyValue(`content`).replace(Ia,``),i=a.codePointAt(0),r=i>=ut[0]&&i<=ut[1],o=a.length===2?a[0]===a[1]:!1;return r||o||t}function ns(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),a=parseInt(t),i=isNaN(a)?`normal`:a;return(on[n]||{})[i]||Qo[n]}function mt(e,t){var n=``.concat(Lr).concat(t.replace(`:`,`-`));return new Promise(function(a,i){if(e.getAttribute(n)!==null)return a();var o=ae(e.children).filter(function(De){return De.getAttribute(Xe)===t})[0],s=U.getComputedStyle(e,t),l=s.getPropertyValue(`font-family`),c=l.match(Ur),d=s.getPropertyValue(`font-weight`),u=s.getPropertyValue(`content`);if(o&&!c)return e.removeChild(o),a();if(c&&u!==`none`&&u!==``){var v=s.getPropertyValue(`content`),g=ns(l,d),k=Zo(v),S=c[0].startsWith(`FontAwesome`),O=es(s),P=gn(g,k),F=P;if(S){var _=co(k);_.iconName&&_.prefix&&(P=_.iconName,g=_.prefix)}if(P&&!O&&(!o||o.getAttribute(fn)!==g||o.getAttribute(cn)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var Q=Ho(),j=Q.extra;j.attributes[Xe]=t,tn(P,g).then(function(De){var Da=vn(f(f({},Q),{},{icons:{main:De,mask:ha()},prefix:g,iconName:F,extra:j,watchable:!0})),Ee=y.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(Ee,e.firstChild):e.appendChild(Ee),Ee.outerHTML=Da.map(function(Ea){return de(Ea)}).join(`
`),e.removeAttribute(n),a()}).catch(i)}else a()}else a()})}function ts(e){return Promise.all([mt(e,`::before`),mt(e,`::after`)])}function as(e){return e.parentNode!==document.head&&!~Rr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Xe)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var is=function(t){return!!t&&Zt.some(function(n){return t.includes(n)})};var rs=function(t){if(!t)return[];var n=/* @__PURE__ */ new Set,a=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});a=a.flatMap(function(l){return l.includes(`(`)?l:l.split(`,`).map(function(c){return c.trim()})});var i=Ce(a),r;try{for(i.s();!(r=i.n()).done;){var o=r.value;if(is(o)){var s=Zt.reduce(function(l,c){return l.replace(c,``)},o);s!==``&&s!==`*`&&n.add(s)}}}catch(l){i.e(l)}finally{i.f()}return n};function pt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(R){var n;if(t)n=e;else if(m.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var a=/* @__PURE__ */ new Set,i=Ce(document.styleSheets),r;try{for(i.s();!(r=i.n()).done;){var o=r.value;try{var s=Ce(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var c=l.value,u=Ce(rs(c.selectorText)),v;try{for(u.s();!(v=u.n()).done;){var g=v.value;a.add(g)}}catch(S){u.e(S)}finally{u.f()}}}catch(S){s.e(S)}finally{s.f()}}catch(S){m.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: `.concat(o.href,` (`).concat(S.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(S){i.e(S)}finally{i.f()}if(!a.size)return;var k=Array.from(a).join(`, `);try{n=e.querySelectorAll(k)}catch{}}return new Promise(function(S,O){var P=ae(n).filter(as).map(ts),F=hn.begin(`searchPseudoElements`);wa(),Promise.all(P).then(function(){F(),rn(),S()}).catch(function(){F(),rn(),O()})})}}var os={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=pt,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,i=a===void 0?y:a;m.searchPseudoElements&&pt(i)}}};var gt=!1;var ss={mixout:function(){return{dom:{unwatch:function(){wa(),gt=!0}}}},hooks:function(){return{bootstrap:function(){lt(Ze(`mutationObserverCallbacks`,{}))},noAuto:function(){Lo()},watch:function(n){var a=n.observeMutationsRoot;gt?rn():lt(Ze(`mutationObserverCallbacks`,{observeMutationsRoot:a}))}}}};var vt=function(t){return t.toLowerCase().split(` `).reduce(function(a,i){var r=i.toLowerCase().split(`-`),o=r[0],s=r.slice(1).join(`-`);if(o&&s===`h`)return a.flipX=!0,a;if(o&&s===`v`)return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case`grow`:a.size=a.size+s;break;case`shrink`:a.size=a.size-s;break;case`left`:a.x=a.x-s;break;case`right`:a.x=a.x+s;break;case`up`:a.y=a.y-s;break;case`down`:a.y=a.y+s;break;case`rotate`:a.rotate=a.rotate+s}return a},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})};var ls={mixout:function(){return{parse:{transform:function(n){return vt(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var i=a.getAttribute(`data-fa-transform`);return i&&(n.transform=vt(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,i=n.transform,r=n.containerWidth,o=n.iconWidth,s={transform:`translate(`.concat(r/2,` 256)`)},l=`translate(`.concat(i.x*32,`, `).concat(i.y*32,`) `),c=`scale(`.concat(i.size/16*(i.flipX?-1:1),`, `).concat(i.size/16*(i.flipY?-1:1),`) `),d=`rotate(`.concat(i.rotate,` 0 0)`),g={outer:s,inner:{transform:``.concat(l,` `).concat(c,` `).concat(d)},path:{transform:`translate(`.concat(o/2*-1,` -256)`)}};return{tag:`g`,attributes:f({},g.outer),children:[{tag:`g`,attributes:f({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:f(f({},a.icon.attributes),g.path)}]}]}}}};var Ve={x:0,y:0,width:`100%`,height:`100%`};function ht(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function fs(e){return e.tag===`g`?e.children:[e]}xo([to,Xo,Go,Ko,Jo,os,ss,ls,{hooks:function(){return{parseNodeAttributes:function(n,a){var i=a.getAttribute(`data-fa-mask`),r=i?Ne(i.split(` `).map(function(o){return o.trim()})):ha();return r.prefix||(r.prefix=V()),n.mask=r,n.maskId=a.getAttribute(`data-fa-mask-id`),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,i=n.attributes,r=n.main,o=n.mask,s=n.maskId,l=n.transform,c=r.width,d=r.icon,u=o.width,v=o.icon,g=Zr({transform:l,containerWidth:u,iconWidth:c}),k={tag:`rect`,attributes:f(f({},Ve),{},{fill:`white`})},S=d.children?{children:d.children.map(ht)}:{},O={tag:`g`,attributes:f({},g.inner),children:[ht(f({tag:d.tag,attributes:f(f({},d.attributes),g.path)},S))]},P={tag:`g`,attributes:f({},g.outer),children:[O]},F=`mask-`.concat(s||Jn()),_=`clip-`.concat(s||Jn()),Q={tag:`mask`,attributes:f(f({},Ve),{},{id:F,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[k,P]},j={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:fs(v)},Q]};return a.push(j,{tag:`rect`,attributes:f({fill:`currentColor`,"clip-path":`url(#`.concat(_,`)`),mask:`url(#`.concat(F,`)`)},Ve)}),{children:a,attributes:i}}}},{provides:function(t){var n=!1;U.matchMedia&&(n=U.matchMedia(`(prefers-reduced-motion: reduce)`).matches),t.missingIconAbstract=function(){var a=[],i={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};a.push({tag:`path`,attributes:f(f({},i),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var o=f(f({},r),{},{attributeName:`opacity`}),s={tag:`circle`,attributes:f(f({},i),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return n||s.children.push({tag:`animate`,attributes:f(f({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:f(f({},o),{},{values:`1;0;1;1;0;1;`})}),a.push(s),a.push({tag:`path`,attributes:f(f({},i),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:n?[]:[{tag:`animate`,attributes:f(f({},o),{},{values:`1;0;0;0;0;1;`})}]}),n||a.push({tag:`path`,attributes:f(f({},i),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:f(f({},o),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:a}}}},{hooks:function(){return{parseNodeAttributes:function(n,a){var i=a.getAttribute(`data-fa-symbol`);return n.symbol=i===null?!1:i===``?!0:i,n}}}}],{mixoutsTo:N});N.noAuto;var ka=N.config;N.library;var Pa=N.dom;var za=N.parse;N.findIconDefinition;N.toHtml;var Aa=N.icon;N.layer;N.text;N.counter;var hs=(()=>{class e{defaultPrefix=`fas`;fallbackIcon=null;fixedWidth;set autoAddCss(n){ka.autoAddCss=n,this._autoAddCss=n}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static ɵfac=function(a){return new(a||e)};static ɵprov=T$1({token:e,factory:e.ɵfac,providedIn:`root`})}return e})();var bs=(()=>{class e{definitions={};addIcons(...n){for(let a of n){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let i of a.icon[2])typeof i==`string`&&(this.definitions[a.prefix][i]=a)}}addIconPacks(...n){for(let a of n){let i=Object.keys(a).map(r=>a[r]);this.addIcons(...i)}}getIconDefinition(n,a){return n in this.definitions&&a in this.definitions[n]?this.definitions[n][a]:null}static ɵfac=function(a){return new(a||e)};static ɵprov=T$1({token:e,factory:e.ɵfac,providedIn:`root`})}return e})();var ys=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)};var xs=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")};var Ma=e=>e!=null&&(e===90||e===180||e===270||e===`90`||e===`180`||e===`270`);var Ss=e=>{let t=Ma(e.rotate),n={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith(`spin`),"fa-spin":e.animation===`spin`||e.animation===`spin-reverse`,"fa-spin-pulse":e.animation===`spin-pulse`||e.animation===`spin-pulse-reverse`,"fa-spin-reverse":e.animation===`spin-reverse`||e.animation===`spin-pulse-reverse`,"fa-pulse":e.animation===`spin-pulse`||e.animation===`spin-pulse-reverse`,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`,[`fa-${e.size}`]:e.size!=null,[`fa-rotate-${e.rotate}`]:t,"fa-rotate-by":e.rotate!=null&&!t,[`fa-pull-${e.pull}`]:e.pull!=null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(n).map(a=>n[a]?a:null).filter(a=>a!=null)};var yn=/* @__PURE__ */ new WeakSet;var Oa=`fa-auto-css`;function ws(e,t,n){if(!t.autoAddCss||yn.has(e))return;if(e.getElementById(Oa)!=null){t.autoAddCss=!1,yn.add(e);return}let a=e.createElement(`style`);a.setAttribute(`type`,`text/css`),a.setAttribute(`id`,Oa),n&&a.setAttribute(`nonce`,n),a.innerHTML=Pa.css();let i=e.head.childNodes,r=null;for(let o=i.length-1;o>-1;o--){let s=i[o],l=s.nodeName.toUpperCase();[`STYLE`,`LINK`].indexOf(l)>-1&&(r=s)}e.head.insertBefore(a,r),t.autoAddCss=!1,yn.add(e)}var Cs=e=>e.prefix!==void 0&&e.iconName!==void 0;var Is=(e,t)=>Cs(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:t,iconName:e};var ks=(()=>{class e{stackItemSize=Xr$1(`1x`);size=Xr$1();_effect=Jo$1(()=>{if(this.size())throw new Error(`fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.`)});static ɵfac=function(a){return new(a||e)};static ɵdir=ir({type:e,selectors:[[`fa-icon`,`stackItemSize`,``],[`fa-duotone-icon`,`stackItemSize`,``]],inputs:{stackItemSize:[1,`stackItemSize`],size:[1,`size`]}})}return e})();var Ps=(()=>{class e{size=Xr$1();classes=Ct$1(()=>{let n=this.size(),a=n?{[`fa-${n}`]:!0}:{};return m$1(l({},a),{"fa-stack":!0})});static ɵfac=function(a){return new(a||e)};static ɵcmp=(function(){return qa({type:e,selectors:[[`fa-stack`]],hostVars:2,hostBindings:function(i,r){i&2&&FS(r.classes())},inputs:{size:[1,`size`]},ngContentSelectors:[`*`],decls:1,vars:0,template:function(i,r){i&1&&(bS(),SS(0))},encapsulation:2})})()}return e})();var Fa=(()=>{class e{icon=KH();title=KH();animation=KH();mask=KH();flip=KH();size=KH();pull=KH();border=KH();inverse=KH();symbol=KH();rotate=KH();fixedWidth=KH();transform=KH();a11yRole=KH();renderedIconHTML=Ct$1(()=>{let n=this.icon()??this.config.fallbackIcon;if(!n)return xs(),``;let a=this.findIconDefinition(n);if(!a)return``;let i=this.buildParams();ws(this.document,this.config,this.cspNonce);let r=Aa(a,i);return this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))});cspNonce=p$1(Ko$1);document=p$1(te$1);sanitizer=p$1(J_);config=p$1(hs);iconLibrary=p$1(bs);stackItem=p$1(ks,{optional:!0});stack=p$1(Ps,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error(`FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.`)}findIconDefinition(n){let a=Is(n,this.config.defaultPrefix);if(`icon`in a)return a;return this.iconLibrary.getIconDefinition(a.prefix,a.iconName)??(ys(a),null)}buildParams(){let n=this.fixedWidth(),a={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof n==`boolean`?n:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},i=this.transform(),r=typeof i==`string`?za.transform(i):i,o=this.mask(),s=o!=null?this.findIconDefinition(o):null,l={},c=this.a11yRole();c!=null&&(l.role=c);let d={};return a.rotate!=null&&!Ma(a.rotate)&&(d[`--fa-rotate-angle`]=`${a.rotate}`),{title:this.title(),transform:r,classes:Ss(a),mask:s??void 0,symbol:this.symbol(),attributes:l,styles:d}}static ɵfac=function(a){return new(a||e)};static ɵcmp=qa({type:e,selectors:[[`fa-icon`]],hostAttrs:[1,`ng-fa-icon`],hostVars:2,hostBindings:function(a,i){a&2&&(By(`innerHTML`,i.renderedIconHTML(),Vw),Ya$1(`title`,i.title()??void 0))},inputs:{icon:[1,`icon`],title:[1,`title`],animation:[1,`animation`],mask:[1,`mask`],flip:[1,`flip`],size:[1,`size`],pull:[1,`pull`],border:[1,`border`],inverse:[1,`inverse`],symbol:[1,`symbol`],rotate:[1,`rotate`],fixedWidth:[1,`fixedWidth`],transform:[1,`transform`],a11yRole:[1,`a11yRole`]},outputs:{icon:`iconChange`,title:`titleChange`,animation:`animationChange`,mask:`maskChange`,flip:`flipChange`,size:`sizeChange`,pull:`pullChange`,border:`borderChange`,inverse:`inverseChange`,symbol:`symbolChange`,rotate:`rotateChange`,fixedWidth:`fixedWidthChange`,transform:`transformChange`,a11yRole:`a11yRoleChange`},decls:0,vars:0,template:function(a,i){},encapsulation:2})}return e})();var Na=(()=>{class e{static ɵfac=function(a){return new(a||e)};static ɵmod=vi$1({type:e});static ɵinj=Mr$1({})}return e})();var me=(e,t)=>t.name;function As(e,t){if(e&1&&(La$1(0,`a`,9),rv(1),iT(2,`translate`),iT(3,`titlecase`),rf()),e&2){let n=t.$implicit;nf(`href`,n.url,Im),Um(),ov(` `,aT(2,3,`app.pages.landing.labels.wishlistOn`),` `,aT(3,5,n.name),` `)}}function Os(e,t){if(e&1&&(La$1(0,`div`,12)(1,`div`,23),rv(2),iT(3,`number`),rf(),La$1(4,`h2`,24),rv(5),iT(6,`translate`),rf(),La$1(7,`p`,25),rv(8),iT(9,`translate`),rf()()),e&2){let n=t.$implicit,a=t.$index;Um(2),cf(cT(3,3,a+1,`2.0-0`)),Um(3),cf(aT(6,6,`app.pages.landing.features.`+n+`.title`)),Um(3),cf(aT(9,8,`app.pages.landing.features.`+n+`.description`))}}function Ms(e,t){if(e&1&&(La$1(0,`a`,9),rv(1),iT(2,`translate`),iT(3,`titlecase`),rf()),e&2){let n=t.$implicit;nf(`href`,n.url,Im),Um(),ov(` `,aT(2,3,`app.pages.landing.labels.wishlistOn`),` `,aT(3,5,n.name),` `)}}function Fs(e,t){if(e&1&&(La$1(0,`a`,20),iT(1,`titlecase`),Za$1(2,`fa-icon`,26),rf()),e&2){let n=t.$implicit;nf(`href`,n.url,Im),Ya$1(`aria-label`,aT(1,3,n.name)),Um(2),nf(`icon`,n.icon)}}function Ns(e,t){if(e&1&&(La$1(0,`a`,20),rv(1),iT(2,`titlecase`),rf()),e&2){let n=t.$implicit;nf(`href`,n.url,Im),Um(),cf(aT(2,2,n.name))}}function _s(e,t){if(e&1&&(La$1(0,`a`,20),rv(1),iT(2,`titlecase`),rf()),e&2){let n=t.$implicit;nf(`href`,n.url,Im),Um(),cf(aT(2,2,n.name))}}var _a=class e{game=KG.game;year=(/* @__PURE__ */ new Date()).getFullYear();featureKeys=[`breakTheRules`,`fastBattles`,`sandboxCampaign`];storeViews=B([]);socialViews=B([]);async ngOnInit(){await this.loadViews(KG.availableStores,this.mapToView.bind(this),this.storeViews),await this.loadViews(KG.socials,this.mapToView.bind(this),this.socialViews)}async loadViews(t,n,a){let i=t.map(n),o=(await Promise.all(i)).filter(s=>s!==null);a.set(o)}async mapToView(t){let n=await this.getIcon(t.name);return n?m$1(l({},t),{icon:n}):(console.error(`Unknown platform: ${t.name}`),null)}async getIcon(t){let n=await import(`./chunk-vAZhjHIL.js`);return{steam:n.faSteam,discord:n.faDiscord,instagram:n.faInstagram,reddit:n.faReddit,youtube:n.faYoutube}[t]||null}static ɵfac=function(n){return new(n||e)};static ɵcmp=qa({type:e,selectors:[[`app-landing`]],decls:60,vars:31,consts:[[1,`site-nav`],[`routerLink`,`/game`],[`href`,`#studio`],[`href`,`#follow`],[`id`,`game`,1,`hero`],[1,`hero-inner`],[1,`hero-kicker`],[`src`,`/images/ashes-and-blood-logo-vertical.png`,1,`hero-art`],[1,`cta-row`],[`target`,`_blank`,`rel`,`noopener`,1,`btn`,`btn-primary`,3,`href`],[`href`,`#follow`,1,`btn`,`btn-ghost`],[1,`features`],[1,`feature-row`],[`id`,`studio`,1,`studio`],[1,`studio-art`],[1,`studio-copy`],[1,`eyebrow`],[1,`description`],[`id`,`follow`,1,`follow`],[1,`social-row`],[`target`,`_blank`,`rel`,`noopener`,3,`href`],[1,`site-footer`],[1,`copyright`],[1,`feature-num`],[1,`feature-title`],[1,`feature-description`],[3,`icon`]],template:function(n,a){n&1&&(La$1(0,`header`,0),Za$1(1,`app-logo`),La$1(2,`nav`)(3,`a`,1),rv(4),iT(5,`translate`),rf(),La$1(6,`a`,2),rv(7),iT(8,`translate`),rf(),La$1(9,`a`,3),rv(10),iT(11,`translate`),rf()()(),La$1(12,`section`,4)(13,`div`,5)(14,`p`,6),rv(15),iT(16,`translate`),rf(),Za$1(17,`img`,7),La$1(18,`div`,8),Py(19,As,4,7,`a`,9,me),La$1(21,`a`,10),rv(22),iT(23,`translate`),rf()()()(),La$1(24,`section`,11),Py(25,Os,10,10,`div`,12,mS),rf(),La$1(27,`section`,13),Za$1(28,`div`,14),La$1(29,`div`,15)(30,`p`,16),rv(31),iT(32,`translate`),rf(),La$1(33,`h2`),rv(34),iT(35,`translate`),rf(),La$1(36,`p`,17),rv(37),iT(38,`translate`),rf()()(),La$1(39,`section`,18)(40,`h2`),rv(41),iT(42,`translate`),rf(),La$1(43,`p`,17),rv(44),iT(45,`translate`),rf(),La$1(46,`div`,8),Py(47,Ms,4,7,`a`,9,me),rf(),La$1(49,`div`,19),Py(50,Fs,3,5,`a`,20,me),rf()(),La$1(52,`footer`,21)(53,`span`,22),rv(54),rf(),La$1(55,`nav`),Py(56,Ns,3,4,`a`,20,me),Py(58,_s,3,4,`a`,20,me),rf()()),n&2&&(Um(4),cf(aT(5,11,`app.pages.landing.nav.game`)),Um(3),cf(aT(8,13,`app.pages.landing.nav.studio`)),Um(3),cf(aT(11,15,`app.pages.landing.nav.follow`)),Um(5),cf(aT(16,17,`app.pages.landing.hero.kicker`)),Um(4),Fy(a.storeViews()),Um(3),cf(aT(23,19,`app.pages.landing.labels.followUs`)),Um(3),Fy(a.featureKeys),Um(6),cf(aT(32,21,`app.pages.landing.studio.eyebrow`)),Um(3),cf(aT(35,23,`app.pages.landing.studio.title`)),Um(3),cf(aT(38,25,`app.pages.landing.studio.description`)),Um(4),cf(aT(42,27,`app.pages.landing.follow.title`)),Um(3),cf(aT(45,29,`app.pages.landing.follow.description`)),Um(3),Fy(a.storeViews()),Um(3),Fy(a.socialViews()),Um(4),uf(`© `,a.year,` Small Strategy`),Um(2),Fy(a.storeViews()),Um(2),Fy(a.socialViews()))},dependencies:[iE,Na,Fa,S,VG,a_,i_],styles:[`[_nghost-%COMP%]{display:block;overflow:hidden}.btn[_ngcontent-%COMP%]{padding:17px 36px;font-family:var(--%NS%brand-label-font);font-weight:600;font-size:18px;letter-spacing:.1em;text-transform:uppercase}.btn.btn-primary[_ngcontent-%COMP%]{background:var(--%NS%brand-ember);color:#fff}.btn.btn-primary[_ngcontent-%COMP%]:hover{background:var(--%NS%brand-ember-bright);color:#fff}.btn.btn-ghost[_ngcontent-%COMP%]{border:1px solid #3a3128;padding:17px 32px;color:#e4dccf}.cta-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px;justify-content:center}.site-nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:22px clamp(24px,5vw,64px);border-bottom:1px solid var(--%NS%brand-border)}.site-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;gap:clamp(20px,3vw,36px);font-family:var(--%NS%brand-label-font);font-size:15px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--%NS%brand-nav)}.hero[_ngcontent-%COMP%]{position:relative;min-height:clamp(560px,90vh,760px);display:flex;align-items:center;justify-content:center;text-align:center;background:url(/images/hero-bg.png) center/cover no-repeat}.hero[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at center,#14121026,#141210bf 70%,#141210)}.hero[_ngcontent-%COMP%]   .hero-art[_ngcontent-%COMP%]{max-width:50%;height:auto}.hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%]{position:relative;padding:64px 24px}.hero[_ngcontent-%COMP%]   .hero-kicker[_ngcontent-%COMP%]{margin:0;font-family:var(--%NS%brand-label-font);font-size:16px;font-weight:600;letter-spacing:.42em;text-transform:uppercase;color:var(--%NS%brand-text)}.hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{margin:16px 0 0;font-family:var(--%NS%brand-heading-font);font-weight:700;font-size:clamp(72px,16vw,190px);line-height:.86;letter-spacing:.01em;text-transform:uppercase}.hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]   .amp[_ngcontent-%COMP%]{color:var(--%NS%brand-ember)}.hero[_ngcontent-%COMP%]   .hero-tagline[_ngcontent-%COMP%]{font-size:21px;line-height:1.55;color:var(--%NS%brand-ash);max-width:660px;margin:30px auto 0;text-wrap:pretty}.hero[_ngcontent-%COMP%]   .cta-row[_ngcontent-%COMP%]{margin-top:44px}.features[_ngcontent-%COMP%]{padding:88px clamp(24px,5vw,64px);border-top:1px solid var(--%NS%brand-border);max-width:1280px;margin:0 auto;box-sizing:border-box}.features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:80px 1fr 1.4fr;gap:36px;align-items:baseline;padding:30px 0;border-bottom:1px solid var(--%NS%brand-border)}.features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%]:last-child{border-bottom:none}@media(max-width:48rem){.features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%]{grid-template-columns:48px 1fr;gap:16px}.features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%]   .feature-description[_ngcontent-%COMP%]{grid-column:2}}.features[_ngcontent-%COMP%]   .feature-num[_ngcontent-%COMP%]{font-family:var(--%NS%brand-heading-font);font-size:26px;color:var(--%NS%brand-ember)}.features[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%]{margin:0;font-family:var(--%NS%brand-heading-font);font-weight:500;font-size:clamp(24px,3vw,32px);text-transform:uppercase;letter-spacing:.02em}.features[_ngcontent-%COMP%]   .feature-description[_ngcontent-%COMP%]{margin:0;font-size:17px;line-height:1.6;color:var(--%NS%brand-ash-dim)}.studio[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1.2fr;border-top:1px solid var(--%NS%brand-border)}@media(max-width:48rem){.studio[_ngcontent-%COMP%]{grid-template-columns:1fr}}.studio[_ngcontent-%COMP%]   .studio-art[_ngcontent-%COMP%]{min-height:340px;background:linear-gradient(180deg,#14121033,#1412108c),url(/images/small-strategy-logo-2.png) center/cover no-repeat}.studio[_ngcontent-%COMP%]   .studio-copy[_ngcontent-%COMP%]{padding:72px clamp(24px,5vw,64px);display:flex;flex-direction:column;justify-content:center}.studio[_ngcontent-%COMP%]   .studio-copy[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]{margin:0 0 18px;font-family:var(--%NS%brand-label-font);font-size:15px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--%NS%brand-gold)}.studio[_ngcontent-%COMP%]   .studio-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:var(--%NS%brand-heading-font);font-weight:500;font-size:clamp(34px,4vw,46px);line-height:1.05;text-transform:uppercase}.studio[_ngcontent-%COMP%]   .studio-copy[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:18px;line-height:1.65;color:var(--%NS%brand-ash-dim);margin:22px 0 0;max-width:560px}.follow[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;padding:88px clamp(24px,5vw,64px);border-top:1px solid var(--%NS%brand-border);background:var(--%NS%brand-bg-deep)}.follow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:var(--%NS%brand-heading-font);font-weight:600;font-size:clamp(30px,4vw,40px);text-transform:uppercase;letter-spacing:.02em}.follow[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:18px;line-height:1.6;color:var(--%NS%brand-ash-dim);max-width:560px;margin:16px 0 0;text-wrap:pretty}.follow[_ngcontent-%COMP%]   .cta-row[_ngcontent-%COMP%]{margin-top:36px}.follow[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]{display:flex;gap:22px;margin-top:32px;font-size:26px;color:var(--%NS%brand-nav)}.site-footer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding:30px clamp(24px,5vw,64px);border-top:1px solid var(--%NS%brand-border)}.site-footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{font-family:var(--%NS%brand-label-font);font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:var(--%NS%brand-faint)}.site-footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:26px;font-family:var(--%NS%brand-label-font);font-size:15px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--%NS%brand-nav)}`],changeDetection:1})};export{_a as Landing};