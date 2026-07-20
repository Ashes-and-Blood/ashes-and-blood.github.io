import{a as zt}from"./chunk-ISQAQ4KT.js";import{$ as y,$a as ze,Aa as Pt,D as Ne,E as bt,Ea as At,Fa as It,H as U,M as xt,Oa as Ot,Pa as S,Q as je,Qa as I,Ra as _t,Sa as De,Xa as C,Ya as k,Z as wt,Za as Et,_ as Z,ab as Mt,db as ve,ea as re,fa as St,fb as E,ga as Ct,kb as Ft,lb as Tt,ma as he,pa as kt,qa as Y,ra as G,rb as Nt,sa as X,ta as v,tb as jt,ua as b,va as ie,xb as Dt,zb as ye}from"./chunk-CFD4AKUC.js";import{a as pe,b as ge}from"./chunk-2NFLSA4Y.js";function Ue(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}function Aa(e){if(Array.isArray(e))return e}function Ia(e){if(Array.isArray(e))return Ue(e)}function Oa(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function $t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,vn(a.key),a)}}function _a(e,n,t){return n&&$t(e.prototype,n),t&&$t(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function we(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=ot(e))||n&&e&&typeof e.length=="number"){t&&(e=t);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function g(e,n,t){return(n=vn(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ea(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ma(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a,r,i,o,s=[],l=!0,c=!1;try{if(i=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(a=i.call(t)).done)&&(s.push(a.value),s.length!==n);l=!0);}catch(d){c=!0,r=d}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}function Fa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ta(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Lt(Object(t),!0).forEach(function(a){g(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Lt(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Ie(e,n){return Aa(e)||Ma(e,n)||ot(e,n)||Fa()}function j(e){return Ia(e)||Ea(e)||ot(e)||Ta()}function Na(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function vn(e){var n=Na(e,"string");return typeof n=="symbol"?n:n+""}function ke(e){"@babel/helpers - typeof";return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ke(e)}function ot(e,n){if(e){if(typeof e=="string")return Ue(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ue(e,n):void 0}}var Rt=function(){},st={},yn={},bn=null,xn={mark:Rt,measure:Rt};try{typeof window<"u"&&(st=window),typeof document<"u"&&(yn=document),typeof MutationObserver<"u"&&(bn=MutationObserver),typeof performance<"u"&&(xn=performance)}catch{}var ja=st.navigator||{},Wt=ja.userAgent,Bt=Wt===void 0?"":Wt,B=st,x=yn,Ht=bn,be=xn,Qo=!!B.document,R=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",wn=~Bt.indexOf("MSIE")||~Bt.indexOf("Trident/"),$e,Da=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,za=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Sn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},$a={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Cn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],O="classic",ce="duotone",kn="sharp",Pn="sharp-duotone",An="chisel",In="etch",On="jelly",_n="jelly-duo",En="jelly-fill",Mn="notdog",Fn="notdog-duo",Tn="slab",Nn="slab-press",jn="thumbprint",Dn="whiteboard",La="Classic",Ra="Duotone",Wa="Sharp",Ba="Sharp Duotone",Ha="Chisel",Va="Etch",Ua="Jelly",Ya="Jelly Duo",Ga="Jelly Fill",Xa="Notdog",Ka="Notdog Duo",Ja="Slab",qa="Slab Press",Qa="Thumbprint",Za="Whiteboard",zn=[O,ce,kn,Pn,An,In,On,_n,En,Mn,Fn,Tn,Nn,jn,Dn],Zo=($e={},g(g(g(g(g(g(g(g(g(g($e,O,La),ce,Ra),kn,Wa),Pn,Ba),An,Ha),In,Va),On,Ua),_n,Ya),En,Ga),Mn,Xa),g(g(g(g(g($e,Fn,Ka),Tn,Ja),Nn,qa),jn,Qa),Dn,Za)),er={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},tr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},nr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),ar={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},$n=["fak","fa-kit","fakd","fa-kit-duotone"],Vt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},rr=["kit"],ir="kit",or="kit-duotone",sr="Kit",lr="Kit Duotone",es=g(g({},ir,sr),or,lr),fr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},cr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ur={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ut={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Le,xe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],mr="classic",pr="duotone",gr="sharp",hr="sharp-duotone",vr="chisel",yr="etch",br="jelly",xr="jelly-duo",wr="jelly-fill",Sr="notdog",Cr="notdog-duo",kr="slab",Pr="slab-press",Ar="thumbprint",Ir="whiteboard",Or="Classic",_r="Duotone",Er="Sharp",Mr="Sharp Duotone",Fr="Chisel",Tr="Etch",Nr="Jelly",jr="Jelly Duo",Dr="Jelly Fill",zr="Notdog",$r="Notdog Duo",Lr="Slab",Rr="Slab Press",Wr="Thumbprint",Br="Whiteboard",ts=(Le={},g(g(g(g(g(g(g(g(g(g(Le,mr,Or),pr,_r),gr,Er),hr,Mr),vr,Fr),yr,Tr),br,Nr),xr,jr),wr,Dr),Sr,zr),g(g(g(g(g(Le,Cr,$r),kr,Lr),Pr,Rr),Ar,Wr),Ir,Br)),Hr="kit",Vr="kit-duotone",Ur="Kit",Yr="Kit Duotone",ns=g(g({},Hr,Ur),Vr,Yr),Gr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},Xr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Ye={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},Kr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Ln=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(dr,Kr),Jr=["solid","regular","light","thin","duotone","brands","semibold"],Rn=[1,2,3,4,5,6,7,8,9,10],qr=Rn.concat([11,12,13,14,15,16,17,18,19,20]),Qr=["aw","fw","pull-left","pull-right"],Zr=[].concat(j(Object.keys(Xr)),Jr,Qr,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",xe.GROUP,xe.SWAP_OPACITY,xe.PRIMARY,xe.SECONDARY]).concat(Rn.map(function(e){return"".concat(e,"x")})).concat(qr.map(function(e){return"w-".concat(e)})),ei={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},$="___FONT_AWESOME___",Ge=16,Wn="fa",Bn="svg-inline--fa",J="data-fa-i2svg",Xe="data-fa-pseudo-element",ti="data-fa-pseudo-element-pending",lt="data-prefix",ft="data-icon",Yt="fontawesome-i2svg",ni="async",ai=["HTML","HEAD","STYLE","SCRIPT"],Hn=["::before","::after",":before",":after"],Vn=(function(){try{return!0}catch{return!1}})();function ue(e){return new Proxy(e,{get:function(t,a){return a in t?t[a]:t[O]}})}var Un=f({},Sn);Un[O]=f(f(f(f({},{"fa-duotone":"duotone"}),Sn[O]),Vt.kit),Vt["kit-duotone"]);var ri=ue(Un),Ke=f({},ar);Ke[O]=f(f(f(f({},{duotone:"fad"}),Ke[O]),Ut.kit),Ut["kit-duotone"]);var Gt=ue(Ke),Je=f({},Ye);Je[O]=f(f({},Je[O]),ur.kit);var ct=ue(Je),qe=f({},Gr);qe[O]=f(f({},qe[O]),fr.kit);var as=ue(qe),ii=Da,Yn="fa-layers-text",oi=za,si=f({},er),rs=ue(si),li=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Re=$a,fi=[].concat(j(rr),j(Zr)),se=B.FontAwesomeConfig||{};function ci(e){var n=x.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function ui(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}x&&typeof x.querySelector=="function"&&(Xt=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Xt.forEach(function(e){var n=Ie(e,2),t=n[0],a=n[1],r=ui(ci(t));r!=null&&(se[a]=r)}));var Xt,Gn={styleDefault:"solid",familyDefault:O,cssPrefix:Wn,replacementClass:Bn,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};se.familyPrefix&&(se.cssPrefix=se.familyPrefix);var ne=f(f({},Gn),se);ne.autoReplaceSvg||(ne.observeMutations=!1);var m={};Object.keys(Gn).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(t){ne[e]=t,le.forEach(function(a){return a(m)})},get:function(){return ne[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){ne.cssPrefix=n,le.forEach(function(t){return t(m)})},get:function(){return ne.cssPrefix}});B.FontAwesomeConfig=m;var le=[];function di(e){return le.push(e),function(){le.splice(le.indexOf(e),1)}}var W=Ge,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mi(e){if(!(!e||!R)){var n=x.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=x.head.childNodes,a=null,r=t.length-1;r>-1;r--){var i=t[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return x.head.insertBefore(n,a),e}}var pi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Kt(){for(var e=12,n="";e-- >0;)n+=pi[Math.random()*62|0];return n}function ae(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function ut(e){return e.classList?ae(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Xn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gi(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(Xn(e[t]),'" ')},"").trim()}function Oe(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(e[t].trim(),";")},"")}function dt(e){return e.size!==D.size||e.x!==D.x||e.y!==D.y||e.rotate!==D.rotate||e.flipX||e.flipY}function hi(e){var n=e.transform,t=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function vi(e){var n=e.transform,t=e.width,a=t===void 0?Ge:t,r=e.height,i=r===void 0?Ge:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&wn?l+="translate(".concat(n.x/W-a/2,"em, ").concat(n.y/W-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(n.x/W,"em), calc(-50% + ").concat(n.y/W,"em)) "):l+="translate(".concat(n.x/W,"em, ").concat(n.y/W,"em) "),l+="scale(".concat(n.size/W*(n.flipX?-1:1),", ").concat(n.size/W*(n.flipY?-1:1),") "),l+="rotate(".concat(n.rotate,"deg) "),l}var yi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
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
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
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
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
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

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
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
}`;function Kn(){var e=Wn,n=Bn,t=m.cssPrefix,a=m.replacementClass,r=yi;if(t!==e||a!==n){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(a))}return r}var Jt=!1;function We(){m.autoAddCss&&!Jt&&(mi(Kn()),Jt=!0)}var bi={mixout:function(){return{dom:{css:Kn,insertCss:We}}},hooks:function(){return{beforeDOMElementCreation:function(){We()},beforeI2svg:function(){We()}}}},L=B||{};L[$]||(L[$]={});L[$].styles||(L[$].styles={});L[$].hooks||(L[$].hooks={});L[$].shims||(L[$].shims=[]);var N=L[$],Jn=[],qn=function(){x.removeEventListener("DOMContentLoaded",qn),Pe=1,Jn.map(function(n){return n()})},Pe=!1;R&&(Pe=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),Pe||x.addEventListener("DOMContentLoaded",qn));function xi(e){R&&(Pe?setTimeout(e,0):Jn.push(e))}function de(e){var n=e.tag,t=e.attributes,a=t===void 0?{}:t,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Xn(e):"<".concat(n," ").concat(gi(a),">").concat(i.map(de).join(""),"</").concat(n,">")}function qt(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var wi=function(n,t){return function(a,r,i,o){return n.call(t,a,r,i,o)}},Be=function(n,t,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?wi(t,r):t,l,c,d;for(a===void 0?(l=1,d=n[i[0]]):(l=0,d=a);l<o;l++)c=i[l],d=s(d,n[c],c,n);return d};function Qn(e){return j(e).length!==1?null:e.codePointAt(0).toString(16)}function Qt(e){return Object.keys(e).reduce(function(n,t){var a=e[t],r=!!a.icon;return r?n[a.iconName]=a.icon:n[t]=a,n},{})}function Qe(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,r=a===void 0?!1:a,i=Qt(n);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(e,Qt(n)):N.styles[e]=f(f({},N.styles[e]||{}),i),e==="fas"&&Qe("fa",n)}var fe=N.styles,Si=N.shims,Zn=Object.keys(ct),Ci=Zn.reduce(function(e,n){return e[n]=Object.keys(ct[n]),e},{}),mt=null,ea={},ta={},na={},aa={},ra={};function ki(e){return~fi.indexOf(e)}function Pi(e,n){var t=n.split("-"),a=t[0],r=t.slice(1).join("-");return a===e&&r!==""&&!ki(r)?r:null}var ia=function(){var n=function(i){return Be(fe,function(o,s,l){return o[l]=Be(s,i,{}),o},{})};ea=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),ta=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),ra=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var t="far"in fe||m.autoFetchSvg,a=Be(Si,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});na=a.names,aa=a.unicodes,mt=_e(m.styleDefault,{family:m.familyDefault})};di(function(e){mt=_e(e.styleDefault,{family:m.familyDefault})});ia();function pt(e,n){return(ea[e]||{})[n]}function Ai(e,n){return(ta[e]||{})[n]}function K(e,n){return(ra[e]||{})[n]}function oa(e){return na[e]||{prefix:null,iconName:null}}function Ii(e){var n=aa[e],t=pt("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function H(){return mt}var sa=function(){return{prefix:null,iconName:null,rest:[]}};function Oi(e){var n=O,t=Zn.reduce(function(a,r){return a[r]="".concat(m.cssPrefix,"-").concat(r),a},{});return zn.forEach(function(a){(e.includes(t[a])||e.some(function(r){return Ci[a].includes(r)}))&&(n=a)}),n}function _e(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,a=t===void 0?O:t,r=ri[a][e];if(a===ce&&!e)return"fad";var i=Gt[a][e]||Gt[a][r],o=e in N.styles?e:null,s=i||o||null;return s}function _i(e){var n=[],t=null;return e.forEach(function(a){var r=Pi(m.cssPrefix,a);r?t=r:a&&n.push(a)}),{iconName:t,rest:n}}function Zt(e){return e.sort().filter(function(n,t,a){return a.indexOf(n)===t})}var en=Ln.concat($n);function Ee(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.skipLookups,a=t===void 0?!1:t,r=null,i=Zt(e.filter(function(p){return en.includes(p)})),o=Zt(e.filter(function(p){return!en.includes(p)})),s=i.filter(function(p){return r=p,!Cn.includes(p)}),l=Ie(s,1),c=l[0],d=c===void 0?null:c,u=Oi(i),h=f(f({},_i(o)),{},{prefix:_e(d,{family:u})});return f(f(f({},h),Ti({values:e,family:u,styles:fe,config:m,canonical:h,givenPrefix:r})),Ei(a,r,h))}function Ei(e,n,t){var a=t.prefix,r=t.iconName;if(e||!a||!r)return{prefix:a,iconName:r};var i=n==="fa"?oa(r):{},o=K(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!fe.far&&fe.fas&&!m.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}var Mi=zn.filter(function(e){return e!==O||e!==ce}),Fi=Object.keys(Ye).filter(function(e){return e!==O}).map(function(e){return Object.keys(Ye[e])}).flat();function Ti(e){var n=e.values,t=e.family,a=e.canonical,r=e.givenPrefix,i=r===void 0?"":r,o=e.styles,s=o===void 0?{}:o,l=e.config,c=l===void 0?{}:l,d=t===ce,u=n.includes("fa-duotone")||n.includes("fad"),h=c.familyDefault==="duotone",p=a.prefix==="fad"||a.prefix==="fa-duotone";if(!d&&(u||h||p)&&(a.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Mi.includes(t)){var P=Object.keys(s).find(function(_){return Fi.includes(_)});if(P||c.autoFetchSvg){var w=nr.get(t).defaultShortPrefixId;a.prefix=w,a.iconName=K(a.prefix,a.iconName)||a.iconName}}return(a.prefix==="fa"||i==="fa")&&(a.prefix=H()||"fas"),a}var Ni=(function(){function e(){Oa(this,e),this.definitions={}}return _a(e,[{key:"add",value:function(){for(var t=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=f(f({},t.definitions[s]||{}),o[s]),Qe(s,o[s]);var l=ct[O][s];l&&Qe(l,o[s]),ia()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];t[s]||(t[s]={}),d.length>0&&d.forEach(function(u){typeof u=="string"&&(t[s][u]=c)}),t[s][l]=c}),t}}])})(),tn=[],ee={},te={},ji=Object.keys(te);function Di(e,n){var t=n.mixoutsTo;return tn=e,ee={},Object.keys(te).forEach(function(a){ji.indexOf(a)===-1&&delete te[a]}),tn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),ke(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){ee[o]||(ee[o]=[]),ee[o].push(i[o])})}a.provides&&a.provides(te)}),t}function Ze(e,n){for(var t=arguments.length,a=new Array(t>2?t-2:0),r=2;r<t;r++)a[r-2]=arguments[r];var i=ee[e]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function q(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];var r=ee[e]||[];r.forEach(function(i){i.apply(null,t)})}function V(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return te[e]?te[e].apply(null,n):void 0}function et(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,t=e.prefix||H();if(n)return n=K(t,n)||n,qt(la.definitions,t,n)||qt(N.styles,t,n)}var la=new Ni,zi=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,q("noAuto")},$i={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(q("beforeI2svg",n),V("pseudoElements2svg",n),V("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,xi(function(){Ri({autoReplaceSvgRoot:t}),q("watch",n)})}},Li={icon:function(n){if(n===null)return null;if(ke(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:K(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=_e(n[0]);return{prefix:a,iconName:K(a,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match(ii))){var r=Ee(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=H();return{prefix:i,iconName:K(i,n)||n}}}},F={noAuto:zi,config:m,dom:$i,parse:Li,library:la,findIconDefinition:et,toHtml:de},Ri=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,a=t===void 0?x:t;(Object.keys(N.styles).length>0||m.autoFetchSvg)&&R&&m.autoReplaceSvg&&F.dom.i2svg({node:a})};function Me(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return de(a)})}}),Object.defineProperty(e,"node",{get:function(){if(R){var a=x.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Wi(e){var n=e.children,t=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(dt(o)&&t.found&&!a.found){var s=t.width,l=t.height,c={x:s/l/2,y:.5};r.style=Oe(f(f({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Bi(e){var n=e.prefix,t=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:o}),children:a}]}]}function Hi(e){var n=["aria-label","aria-labelledby","title","role"];return n.some(function(t){return t in e})}function gt(e){var n=e.icons,t=n.main,a=n.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,c=e.extra,d=e.watchable,u=d===void 0?!1:d,h=a.found?a:t,p=h.width,P=h.height,w=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(z){return c.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(c.classes).join(" "),_={children:[],attributes:f(f({},c.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(P)})};!Hi(c.attributes)&&!c.attributes["aria-hidden"]&&(_.attributes["aria-hidden"]="true"),u&&(_.attributes[J]="");var A=f(f({},_),{},{prefix:r,iconName:i,main:t,mask:a,maskId:l,transform:o,symbol:s,styles:f({},c.styles)}),M=a.found&&t.found?V("generateAbstractMask",A)||{children:[],attributes:{}}:V("generateAbstractIcon",A)||{children:[],attributes:{}},T=M.children,Q=M.attributes;return A.children=T,A.attributes=Q,s?Bi(A):Wi(A)}function nn(e){var n=e.content,t=e.width,a=e.height,r=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[J]="");var c=f({},i.styles);dt(r)&&(c.transform=vi({transform:r,startCentered:!0,width:t,height:a}),c["-webkit-transform"]=c.transform);var d=Oe(c);d.length>0&&(l.style=d);var u=[];return u.push({tag:"span",attributes:l,children:[n]}),u}function Vi(e){var n=e.content,t=e.extra,a=f(f({},t.attributes),{},{class:t.classes.join(" ")}),r=Oe(t.styles);r.length>0&&(a.style=r);var i=[];return i.push({tag:"span",attributes:a,children:[n]}),i}var He=N.styles;function tt(e){var n=e[0],t=e[1],a=e.slice(4),r=Ie(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Re.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Re.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Re.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var Ui={found:!1,width:512,height:512};function Yi(e,n){!Vn&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function nt(e,n){var t=n;return n==="fa"&&m.styleDefault!==null&&(n=H()),new Promise(function(a,r){if(t==="fa"){var i=oa(e)||{};e=i.iconName||e,n=i.prefix||n}if(e&&n&&He[n]&&He[n][e]){var o=He[n][e];return a(tt(o))}Yi(e,n),a(f(f({},Ui),{},{icon:m.showMissingIcons&&e?V("missingIconAbstract")||{}:{}}))})}var an=function(){},at=m.measurePerformance&&be&&be.mark&&be.measure?be:{mark:an,measure:an},oe='FA "7.0.1"',Gi=function(n){return at.mark("".concat(oe," ").concat(n," begins")),function(){return fa(n)}},fa=function(n){at.mark("".concat(oe," ").concat(n," ends")),at.measure("".concat(oe," ").concat(n),"".concat(oe," ").concat(n," begins"),"".concat(oe," ").concat(n," ends"))},ht={begin:Gi,end:fa},Se=function(){};function rn(e){var n=e.getAttribute?e.getAttribute(J):null;return typeof n=="string"}function Xi(e){var n=e.getAttribute?e.getAttribute(lt):null,t=e.getAttribute?e.getAttribute(ft):null;return n&&t}function Ki(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Ji(){if(m.autoReplaceSvg===!0)return Ce.replace;var e=Ce[m.autoReplaceSvg];return e||Ce.replace}function qi(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function Qi(e){return x.createElement(e)}function ca(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,a=t===void 0?e.tag==="svg"?qi:Qi:t;if(typeof e=="string")return x.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(ca(o,{ceFn:a}))}),r}function Zi(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Ce={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(r){t.parentNode.insertBefore(ca(r),t)}),t.getAttribute(J)===null&&m.keepOriginalSource){var a=x.createComment(Zi(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(n){var t=n[0],a=n[1];if(~ut(t).indexOf(m.replacementClass))return Ce.replace(n);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return de(s)}).join(`
`);t.setAttribute(J,""),t.innerHTML=o}};function on(e){e()}function ua(e,n){var t=typeof n=="function"?n:Se;if(e.length===0)t();else{var a=on;m.mutateApproach===ni&&(a=B.requestAnimationFrame||on),a(function(){var r=Ji(),i=ht.begin("mutate");e.map(r),i(),t()})}}var vt=!1;function da(){vt=!0}function rt(){vt=!1}var Ae=null;function sn(e){if(Ht&&m.observeMutations){var n=e.treeCallback,t=n===void 0?Se:n,a=e.nodeCallback,r=a===void 0?Se:a,i=e.pseudoElementsCallback,o=i===void 0?Se:i,s=e.observeMutationsRoot,l=s===void 0?x:s;Ae=new Ht(function(c){if(!vt){var d=H();ae(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!rn(u.addedNodes[0])&&(m.searchPseudoElements&&o(u.target),t(u.target)),u.type==="attributes"&&u.target.parentNode&&m.searchPseudoElements&&o([u.target],!0),u.type==="attributes"&&rn(u.target)&&~li.indexOf(u.attributeName))if(u.attributeName==="class"&&Xi(u.target)){var h=Ee(ut(u.target)),p=h.prefix,P=h.iconName;u.target.setAttribute(lt,p||d),P&&u.target.setAttribute(ft,P)}else Ki(u.target)&&r(u.target)})}}),R&&Ae.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function eo(){Ae&&Ae.disconnect()}function to(e){var n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),t}function no(e){var n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=Ee(ut(e));return r.prefix||(r.prefix=H()),n&&t&&(r.prefix=n,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ai(r.prefix,e.innerText)||pt(r.prefix,Qn(e.innerText))),!r.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function ao(e){var n=ae(e.attributes).reduce(function(t,a){return t.name!=="class"&&t.name!=="style"&&(t[a.name]=a.value),t},{});return n}function ro(){return{iconName:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ln(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=no(e),a=t.iconName,r=t.prefix,i=t.rest,o=ao(e),s=Ze("parseNodeAttributes",{},e),l=n.styleParser?to(e):[];return f({iconName:a,prefix:r,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var io=N.styles;function ma(e){var n=m.autoReplaceSvg==="nest"?ln(e,{styleParser:!1}):ln(e);return~n.extra.classes.indexOf(Yn)?V("generateLayersText",e,n):V("generateSvgReplacementMutation",e,n)}function oo(){return[].concat(j($n),j(Ln))}function fn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var t=x.documentElement.classList,a=function(u){return t.add("".concat(Yt,"-").concat(u))},r=function(u){return t.remove("".concat(Yt,"-").concat(u))},i=m.autoFetchSvg?oo():Cn.concat(Object.keys(io));i.includes("fa")||i.push("fa");var o=[".".concat(Yn,":not([").concat(J,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(J,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ae(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=ht.begin("onTree"),c=s.reduce(function(d,u){try{var h=ma(u);h&&d.push(h)}catch(p){Vn||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise(function(d,u){Promise.all(c).then(function(h){ua(h,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),l(),d()})}).catch(function(h){l(),u(h)})})}function so(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ma(e).then(function(t){t&&ua([t],n)})}function lo(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:et(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:et(r||{})),e(a,f(f({},t),{},{mask:r}))}}var fo=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,r=a===void 0?D:a,i=t.symbol,o=i===void 0?!1:i,s=t.mask,l=s===void 0?null:s,c=t.maskId,d=c===void 0?null:c,u=t.classes,h=u===void 0?[]:u,p=t.attributes,P=p===void 0?{}:p,w=t.styles,_=w===void 0?{}:w;if(n){var A=n.prefix,M=n.iconName,T=n.icon;return Me(f({type:"icon"},n),function(){return q("beforeDOMElementCreation",{iconDefinition:n,params:t}),gt({icons:{main:tt(T),mask:l?tt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:M,transform:f(f({},D),r),symbol:o,maskId:d,extra:{attributes:P,styles:_,classes:h}})})}},co={mixout:function(){return{icon:lo(fo)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=fn,t.nodeCallback=so,t}}},provides:function(n){n.i2svg=function(t){var a=t.node,r=a===void 0?x:a,i=t.callback,o=i===void 0?function(){}:i;return fn(r,o)},n.generateSvgReplacementMutation=function(t,a){var r=a.iconName,i=a.prefix,o=a.transform,s=a.symbol,l=a.mask,c=a.maskId,d=a.extra;return new Promise(function(u,h){Promise.all([nt(r,i),l.iconName?nt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var P=Ie(p,2),w=P[0],_=P[1];u([t,gt({icons:{main:w,mask:_},prefix:i,iconName:r,transform:o,symbol:s,maskId:c,extra:d,watchable:!0})])}).catch(h)})},n.generateAbstractIcon=function(t){var a=t.children,r=t.attributes,i=t.main,o=t.transform,s=t.styles,l=Oe(s);l.length>0&&(r.style=l);var c;return dt(o)&&(c=V("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},uo={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Me({type:"layer"},function(){q("beforeDOMElementCreation",{assembler:t,params:a});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(j(i)).join(" ")},children:o}]})}}}},mo={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,d=a.styles,u=d===void 0?{}:d;return Me({type:"counter",content:t},function(){return q("beforeDOMElementCreation",{content:t,params:a}),Vi({content:t.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(j(s))}})})}}}},po={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?D:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,d=a.styles,u=d===void 0?{}:d;return Me({type:"text",content:t},function(){return q("beforeDOMElementCreation",{content:t,params:a}),nn({content:t,transform:f(f({},D),i),extra:{attributes:c,styles:u,classes:["".concat(m.cssPrefix,"-layers-text")].concat(j(s))}})})}}},provides:function(n){n.generateLayersText=function(t,a){var r=a.transform,i=a.extra,o=null,s=null;if(wn){var l=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/l,s=c.height/l}return Promise.resolve([t,nn({content:t.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},pa=new RegExp('"',"ug"),cn=[1105920,1112319],un=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),tr),ei),cr),it=Object.keys(un).reduce(function(e,n){return e[n.toLowerCase()]=un[n],e},{}),go=Object.keys(it).reduce(function(e,n){var t=it[n];return e[n]=t[900]||j(Object.entries(t))[0][1],e},{});function ho(e){var n=e.replace(pa,"");return Qn(j(n)[0]||"")}function vo(e){var n=e.getPropertyValue("font-feature-settings").includes("ss01"),t=e.getPropertyValue("content"),a=t.replace(pa,""),r=a.codePointAt(0),i=r>=cn[0]&&r<=cn[1],o=a.length===2?a[0]===a[1]:!1;return i||o||n}function yo(e,n){var t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(n),r=isNaN(a)?"normal":a;return(it[t]||{})[r]||go[t]}function dn(e,n){var t="".concat(ti).concat(n.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(t)!==null)return a();var i=ae(e.children),o=i.filter(function(Fe){return Fe.getAttribute(Xe)===n})[0],s=B.getComputedStyle(e,n),l=s.getPropertyValue("font-family"),c=l.match(oi),d=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),a();if(c&&u!=="none"&&u!==""){var h=s.getPropertyValue("content"),p=yo(l,d),P=ho(h),w=c[0].startsWith("FontAwesome"),_=vo(s),A=pt(p,P),M=A;if(w){var T=Ii(P);T.iconName&&T.prefix&&(A=T.iconName,p=T.prefix)}if(A&&!_&&(!o||o.getAttribute(lt)!==p||o.getAttribute(ft)!==M)){e.setAttribute(t,M),o&&e.removeChild(o);var Q=ro(),z=Q.extra;z.attributes[Xe]=n,nt(A,p).then(function(Fe){var ka=gt(f(f({},Q),{},{icons:{main:Fe,mask:sa()},prefix:p,iconName:M,extra:z,watchable:!0})),Te=x.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(Te,e.firstChild):e.appendChild(Te),Te.outerHTML=ka.map(function(Pa){return de(Pa)}).join(`
`),e.removeAttribute(t),a()}).catch(r)}else a()}else a()})}function bo(e){return Promise.all([dn(e,"::before"),dn(e,"::after")])}function xo(e){return e.parentNode!==document.head&&!~ai.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Xe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var wo=function(n){return!!n&&Hn.some(function(t){return n.includes(t)})},So=function(n){if(!n)return[];var t=new Set,a=n.split(/,(?![^()]*\))/).map(function(l){return l.trim()});a=a.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(c){return c.trim()})});var r=we(a),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(wo(o)){var s=Hn.reduce(function(l,c){return l.replace(c,"")},o);s!==""&&s!=="*"&&t.add(s)}}}catch(l){r.e(l)}finally{r.f()}return t};function mn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(R){var t;if(n)t=e;else if(m.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var a=new Set,r=we(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=we(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var c=l.value,d=So(c.selectorText),u=we(d),h;try{for(u.s();!(h=u.n()).done;){var p=h.value;a.add(p)}}catch(w){u.e(w)}finally{u.f()}}}catch(w){s.e(w)}finally{s.f()}}catch(w){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(w.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(w){r.e(w)}finally{r.f()}if(!a.size)return;var P=Array.from(a).join(", ");try{t=e.querySelectorAll(P)}catch{}}return new Promise(function(w,_){var A=ae(t).filter(xo).map(bo),M=ht.begin("searchPseudoElements");da(),Promise.all(A).then(function(){M(),rt(),w()}).catch(function(){M(),rt(),_()})})}}var Co={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=mn,t}}},provides:function(n){n.pseudoElements2svg=function(t){var a=t.node,r=a===void 0?x:a;m.searchPseudoElements&&mn(r)}}},pn=!1,ko={mixout:function(){return{dom:{unwatch:function(){da(),pn=!0}}}},hooks:function(){return{bootstrap:function(){sn(Ze("mutationObserverCallbacks",{}))},noAuto:function(){eo()},watch:function(t){var a=t.observeMutationsRoot;pn?rt():sn(Ze("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},gn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},t)},Po={mixout:function(){return{parse:{transform:function(t){return gn(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-transform");return r&&(t.transform=gn(r)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var a=t.main,r=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(d)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:u,path:h};return{tag:"g",attributes:f({},p.outer),children:[{tag:"g",attributes:f({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:f(f({},a.icon.attributes),p.path)}]}]}}}},Ve={x:0,y:0,width:"100%",height:"100%"};function hn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function Ao(e){return e.tag==="g"?e.children:[e]}var Io={hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-mask"),i=r?Ee(r.split(" ").map(function(o){return o.trim()})):sa();return i.prefix||(i.prefix=H()),t.mask=i,t.maskId=a.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var a=t.children,r=t.attributes,i=t.main,o=t.mask,s=t.maskId,l=t.transform,c=i.width,d=i.icon,u=o.width,h=o.icon,p=hi({transform:l,containerWidth:u,iconWidth:c}),P={tag:"rect",attributes:f(f({},Ve),{},{fill:"white"})},w=d.children?{children:d.children.map(hn)}:{},_={tag:"g",attributes:f({},p.inner),children:[hn(f({tag:d.tag,attributes:f(f({},d.attributes),p.path)},w))]},A={tag:"g",attributes:f({},p.outer),children:[_]},M="mask-".concat(s||Kt()),T="clip-".concat(s||Kt()),Q={tag:"mask",attributes:f(f({},Ve),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,A]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:Ao(h)},Q]};return a.push(z,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(M,")")},Ve)}),{children:a,attributes:r}}}},Oo={provides:function(n){var t=!1;B.matchMedia&&(t=B.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||a.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},_o={hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},Eo=[bi,co,uo,mo,po,Co,ko,Po,Io,Oo,_o];Di(Eo,{mixoutsTo:F});var is=F.noAuto,ga=F.config,os=F.library,ha=F.dom,va=F.parse,ss=F.findIconDefinition,ls=F.toHtml,ya=F.icon,fs=F.layer,Mo=F.text,Fo=F.counter;var No=["*"],jo=(()=>{class e{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(t){ga.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(a){return new(a||e)};static \u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Do=(()=>{class e{definitions={};addIcons(...t){for(let a of t){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let r of a.icon[2])typeof r=="string"&&(this.definitions[a.prefix][r]=a)}}addIconPacks(...t){for(let a of t){let r=Object.keys(a).map(i=>a[i]);this.addIcons(...r)}}getIconDefinition(t,a){return t in this.definitions&&a in this.definitions[t]?this.definitions[t][a]:null}static \u0275fac=function(a){return new(a||e)};static \u0275prov=Ne({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),zo=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},$o=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},xa=e=>e!=null&&(e===90||e===180||e===270||e==="90"||e==="180"||e==="270"),Lo=e=>{let n=xa(e.rotate),t={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:n,"fa-rotate-by":e.rotate!=null&&!n,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(t).map(a=>t[a]?a:null).filter(a=>a!=null)},yt=new WeakSet,ba="fa-auto-css";function Ro(e,n){if(!n.autoAddCss||yt.has(e))return;if(e.getElementById(ba)!=null){n.autoAddCss=!1,yt.add(e);return}let t=e.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("id",ba),t.innerHTML=ha.css();let a=e.head.childNodes,r=null;for(let i=a.length-1;i>-1;i--){let o=a[i],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}e.head.insertBefore(t,r),n.autoAddCss=!1,yt.add(e)}var Wo=e=>e.prefix!==void 0&&e.iconName!==void 0,Bo=(e,n)=>Wo(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:n,iconName:e},Ho=(()=>{class e{stackItemSize=ve("1x");size=ve();_effect=Mt(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(a){return new(a||e)};static \u0275dir=Ct({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return e})(),Vo=(()=>{class e{size=ve();classes=ze(()=>{let t=this.size(),a=t?{[`fa-${t}`]:!0}:{};return ge(pe({},a),{"fa-stack":!0})});static \u0275fac=function(a){return new(a||e)};static \u0275cmp=re({type:e,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(a,r){a&2&&Ot(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:No,decls:1,vars:0,template:function(a,r){a&1&&(At(),It(0))},encapsulation:2,changeDetection:0})}return e})(),wa=(()=>{class e{icon=E();title=E();animation=E();mask=E();flip=E();size=E();pull=E();border=E();inverse=E();symbol=E();rotate=E();fixedWidth=E();transform=E();a11yRole=E();renderedIconHTML=ze(()=>{let t=this.icon()??this.config.fallbackIcon;if(!t)return $o(),"";let a=this.findIconDefinition(t);if(!a)return"";let r=this.buildParams();Ro(this.document,this.config);let i=ya(a,r);return this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))});document=U(xt);sanitizer=U(Nt);config=U(jo);iconLibrary=U(Do);stackItem=U(Ho,{optional:!0});stack=U(Vo,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(t){let a=Bo(t,this.config.defaultPrefix);if("icon"in a)return a;let r=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return r??(zo(a),null)}buildParams(){let t=this.fixedWidth(),a={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof t=="boolean"?t:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),i=typeof r=="string"?va.transform(r):r,o=this.mask(),s=o!=null?this.findIconDefinition(o):null,l={},c=this.a11yRole();c!=null&&(l.role=c);let d={};return a.rotate!=null&&!xa(a.rotate)&&(d["--fa-rotate-angle"]=`${a.rotate}`),{title:this.title(),transform:i,classes:Lo(a),mask:s??void 0,symbol:this.symbol(),attributes:l,styles:d}}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=re({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,r){a&2&&(Pt("innerHTML",r.renderedIconHTML(),wt),he("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(a,r){},encapsulation:2,changeDetection:0})}return e})();var Sa=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=St({type:e});static \u0275inj=bt({})}return e})();var me=(e,n)=>n.name;function Yo(e,n){if(e&1&&(v(0,"a",11),S(1),C(2,"translate"),C(3,"titlecase"),b()),e&2){let t=n.$implicit;X("href",t.url,Z),y(),De(" ",k(2,3,"app.pages.landing.labels.wishlistOn")," ",k(3,5,t.name)," ")}}function Go(e,n){if(e&1&&(v(0,"div",14)(1,"div",25),S(2),C(3,"number"),b(),v(4,"h2",26),S(5),C(6,"translate"),b(),v(7,"p",27),S(8),C(9,"translate"),b()()),e&2){let t=n.$implicit,a=n.$index;y(2),I(Et(3,3,a+1,"2.0-0")),y(3),I(k(6,6,"app.pages.landing.features."+t+".title")),y(3),I(k(9,8,"app.pages.landing.features."+t+".description"))}}function Xo(e,n){if(e&1&&(v(0,"a",11),S(1),C(2,"translate"),C(3,"titlecase"),b()),e&2){let t=n.$implicit;X("href",t.url,Z),y(),De(" ",k(2,3,"app.pages.landing.labels.wishlistOn")," ",k(3,5,t.name)," ")}}function Ko(e,n){if(e&1&&(v(0,"a",22),C(1,"titlecase"),ie(2,"fa-icon",28),b()),e&2){let t=n.$implicit;X("href",t.url,Z),he("aria-label",k(1,3,t.name)),y(2),X("icon",t.icon)}}function Jo(e,n){if(e&1&&(v(0,"a",22),S(1),C(2,"titlecase"),b()),e&2){let t=n.$implicit;X("href",t.url,Z),y(),I(k(2,2,t.name))}}function qo(e,n){if(e&1&&(v(0,"a",22),S(1),C(2,"titlecase"),b()),e&2){let t=n.$implicit;X("href",t.url,Z),y(),I(k(2,2,t.name))}}var Ca=class e{game=ye.game;year=new Date().getFullYear();featureKeys=["breakTheRules","fastBattles","sandboxCampaign"];storeViews=je([]);socialViews=je([]);async ngOnInit(){await this.loadViews(ye.availableStores,this.mapToView.bind(this),this.storeViews),await this.loadViews(ye.socials,this.mapToView.bind(this),this.socialViews)}async loadViews(n,t,a){let r=n.map(t),o=(await Promise.all(r)).filter(s=>s!==null);a.set(o)}async mapToView(n){let t=await this.getIcon(n.name);return t?ge(pe({},n),{icon:t}):(console.error(`Unknown platform: ${n.name}`),null)}async getIcon(n){let t=await import("./chunk-FALD657Y.js");return{steam:t.faSteam,discord:t.faDiscord,instagram:t.faInstagram,reddit:t.faReddit,youtube:t.faYoutube}[n]||null}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=re({type:e,selectors:[["app-landing"]],decls:67,vars:32,consts:[[1,"site-nav"],["routerLink","/game"],["href","#studio"],["href","#follow"],["id","game",1,"hero"],[1,"hero-inner"],[1,"hero-kicker"],[1,"hero-title"],[1,"amp"],[1,"hero-tagline"],[1,"cta-row"],["target","_blank","rel","noopener",1,"btn","btn-primary",3,"href"],["href","#follow",1,"btn","btn-ghost"],[1,"features"],[1,"feature-row"],["id","studio",1,"studio"],[1,"studio-art"],[1,"studio-copy"],[1,"eyebrow"],[1,"description"],["id","follow",1,"follow"],[1,"social-row"],["target","_blank","rel","noopener",3,"href"],[1,"site-footer"],[1,"copyright"],[1,"feature-num"],[1,"feature-title"],[1,"feature-description"],[3,"icon"]],template:function(t,a){t&1&&(v(0,"header",0),ie(1,"app-logo"),v(2,"nav")(3,"a",1),S(4),C(5,"translate"),b(),v(6,"a",2),S(7),C(8,"translate"),b(),v(9,"a",3),S(10),C(11,"translate"),b()()(),v(12,"section",4)(13,"div",5)(14,"p",6),S(15),C(16,"translate"),b(),v(17,"h1",7),S(18,"Ashes"),ie(19,"br"),v(20,"span",8),S(21,"&"),b(),S(22," Blood"),b(),v(23,"p",9),S(24),b(),v(25,"div",10),Y(26,Yo,4,7,"a",11,me),v(28,"a",12),S(29),C(30,"translate"),b()()()(),v(31,"section",13),Y(32,Go,10,10,"div",14,kt),b(),v(34,"section",15),ie(35,"div",16),v(36,"div",17)(37,"p",18),S(38),C(39,"translate"),b(),v(40,"h2"),S(41),C(42,"translate"),b(),v(43,"p",19),S(44),C(45,"translate"),b()()(),v(46,"section",20)(47,"h2"),S(48),C(49,"translate"),b(),v(50,"p",19),S(51),C(52,"translate"),b(),v(53,"div",10),Y(54,Xo,4,7,"a",11,me),b(),v(56,"div",21),Y(57,Ko,3,5,"a",22,me),b()(),v(59,"footer",23)(60,"span",24),S(61),b(),v(62,"nav"),Y(63,Jo,3,4,"a",22,me),Y(65,qo,3,4,"a",22,me),b()()),t&2&&(y(4),I(k(5,12,"app.pages.landing.nav.game")),y(3),I(k(8,14,"app.pages.landing.nav.studio")),y(3),I(k(11,16,"app.pages.landing.nav.follow")),y(5),I(k(16,18,"app.pages.landing.hero.kicker")),y(9),I(a.game.tagline),y(2),G(a.storeViews()),y(3),I(k(30,20,"app.pages.landing.labels.followUs")),y(3),G(a.featureKeys),y(6),I(k(39,22,"app.pages.landing.studio.eyebrow")),y(3),I(k(42,24,"app.pages.landing.studio.title")),y(3),I(k(45,26,"app.pages.landing.studio.description")),y(4),I(k(49,28,"app.pages.landing.follow.title")),y(3),I(k(52,30,"app.pages.landing.follow.description")),y(3),G(a.storeViews()),y(3),G(a.socialViews()),y(4),_t("\xA9 ",a.year," Small Strategy"),y(2),G(a.storeViews()),y(2),G(a.socialViews()))},dependencies:[jt,Sa,wa,zt,Dt,Tt,Ft],styles:['[_nghost-%COMP%]{display:block;overflow:hidden}.btn[_ngcontent-%COMP%]{padding:17px 36px;font-family:var(--brand-label-font);font-weight:600;font-size:18px;letter-spacing:.1em;text-transform:uppercase}.btn.btn-primary[_ngcontent-%COMP%]{background:var(--brand-ember);color:#fff}.btn.btn-primary[_ngcontent-%COMP%]:hover{background:var(--brand-ember-bright);color:#fff}.btn.btn-ghost[_ngcontent-%COMP%]{border:1px solid #3a3128;padding:17px 32px;color:#e4dccf}.cta-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px;justify-content:center}.site-nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:22px clamp(24px,5vw,64px);border-bottom:1px solid var(--brand-border)}.site-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;gap:clamp(20px,3vw,36px);font-family:var(--brand-label-font);font-size:15px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--brand-nav)}.hero[_ngcontent-%COMP%]{position:relative;min-height:clamp(560px,90vh,760px);display:flex;align-items:center;justify-content:center;text-align:center;background:url(/images/hero-bg.jpg) center/cover no-repeat}.hero[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at center,#14121026,#141210bf 70%,#141210)}.hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%]{position:relative;padding:64px 24px}.hero[_ngcontent-%COMP%]   .hero-kicker[_ngcontent-%COMP%]{margin:0;font-family:var(--brand-label-font);font-size:16px;font-weight:600;letter-spacing:.42em;text-transform:uppercase;color:var(--brand-ember)}.hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{margin:16px 0 0;font-family:var(--brand-heading-font);font-weight:700;font-size:clamp(72px,16vw,190px);line-height:.86;letter-spacing:.01em;text-transform:uppercase}.hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]   .amp[_ngcontent-%COMP%]{color:var(--brand-ember)}.hero[_ngcontent-%COMP%]   .hero-tagline[_ngcontent-%COMP%]{font-size:21px;line-height:1.55;color:var(--brand-ash);max-width:660px;margin:30px auto 0;text-wrap:pretty}.hero[_ngcontent-%COMP%]   .cta-row[_ngcontent-%COMP%]{margin-top:44px}.features[_ngcontent-%COMP%]{padding:88px clamp(24px,5vw,64px);border-top:1px solid var(--brand-border);max-width:1280px;margin:0 auto;box-sizing:border-box}.features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:80px 1fr 1.4fr;gap:36px;align-items:baseline;padding:30px 0;border-bottom:1px solid var(--brand-border)}.features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%]:last-child{border-bottom:none}@media (max-width: 48rem){.features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%]{grid-template-columns:48px 1fr;gap:16px}.features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%]   .feature-description[_ngcontent-%COMP%]{grid-column:2}}.features[_ngcontent-%COMP%]   .feature-num[_ngcontent-%COMP%]{font-family:var(--brand-heading-font);font-size:26px;color:var(--brand-ember)}.features[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%]{margin:0;font-family:var(--brand-heading-font);font-weight:500;font-size:clamp(24px,3vw,32px);text-transform:uppercase;letter-spacing:.02em}.features[_ngcontent-%COMP%]   .feature-description[_ngcontent-%COMP%]{margin:0;font-size:17px;line-height:1.6;color:var(--brand-ash-dim)}.studio[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1.2fr;border-top:1px solid var(--brand-border)}@media (max-width: 48rem){.studio[_ngcontent-%COMP%]{grid-template-columns:1fr}}.studio[_ngcontent-%COMP%]   .studio-art[_ngcontent-%COMP%]{min-height:340px;background:linear-gradient(180deg,#14121033,#1412108c),url(/images/key-art.png) center/cover no-repeat}.studio[_ngcontent-%COMP%]   .studio-copy[_ngcontent-%COMP%]{padding:72px clamp(24px,5vw,64px);display:flex;flex-direction:column;justify-content:center}.studio[_ngcontent-%COMP%]   .studio-copy[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]{margin:0 0 18px;font-family:var(--brand-label-font);font-size:15px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--brand-gold)}.studio[_ngcontent-%COMP%]   .studio-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:var(--brand-heading-font);font-weight:500;font-size:clamp(34px,4vw,46px);line-height:1.05;text-transform:uppercase}.studio[_ngcontent-%COMP%]   .studio-copy[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:18px;line-height:1.65;color:var(--brand-ash-dim);margin:22px 0 0;max-width:560px}.follow[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;padding:88px clamp(24px,5vw,64px);border-top:1px solid var(--brand-border);background:var(--brand-bg-deep)}.follow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:var(--brand-heading-font);font-weight:600;font-size:clamp(30px,4vw,40px);text-transform:uppercase;letter-spacing:.02em}.follow[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:18px;line-height:1.6;color:var(--brand-ash-dim);max-width:560px;margin:16px 0 0;text-wrap:pretty}.follow[_ngcontent-%COMP%]   .cta-row[_ngcontent-%COMP%]{margin-top:36px}.follow[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]{display:flex;gap:22px;margin-top:32px;font-size:26px;color:var(--brand-nav)}.site-footer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding:30px clamp(24px,5vw,64px);border-top:1px solid var(--brand-border)}.site-footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{font-family:var(--brand-label-font);font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:var(--brand-faint)}.site-footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:26px;font-family:var(--brand-label-font);font-size:15px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--brand-nav)}']})};export{Ca as Landing};
