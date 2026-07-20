import{a as $t}from"./chunk-HQ4KBRAZ.js";import{$ as b,$a as Rn,Aa as Pt,D as Nn,E as xt,Ea as At,Fa as zt,H as Y,M as wt,Oa as Ot,Pa as S,Q as $n,Qa as A,Ra as Ft,Sa as Ln,Xa as k,Ya as I,Z as St,Za as _t,_ as Z,ab as Et,db as bn,fb as F,ha as rn,ia as kt,ja as It,kb as Mt,lb as Tt,ma as hn,pa as Ct,qa as B,ra as X,rb as jt,sa as G,ta as h,tb as Dt,ua as y,va as on,xb as Nt,zb as yn}from"./chunk-E4UUVNYL.js";import{a as gn,b as vn}from"./chunk-2NFLSA4Y.js";function Bn(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,a=Array(e);t<e;t++)a[t]=n[t];return a}function ja(n){if(Array.isArray(n))return n}function Da(n){if(Array.isArray(n))return Bn(n)}function Na(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Lt(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,he(a.key),a)}}function $a(n,e,t){return e&&Lt(n.prototype,e),t&&Lt(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function In(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=st(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var a=0,i=function(){};return{s:i,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(l){throw l},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var r,o=!0,s=!1;return{s:function(){t=t.call(n)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,r=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw r}}}}function p(n,e,t){return(e=he(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function La(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ra(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var a,i,r,o,s=[],l=!0,c=!1;try{if(r=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(a=r.call(t)).done)&&(s.push(a.value),s.length!==e);l=!0);}catch(d){c=!0,i=d}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw i}}return s}}function Wa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ua(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rt(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,a)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Rt(Object(t),!0).forEach(function(a){p(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Rt(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function Fn(n,e){return ja(n)||Ra(n,e)||st(n,e)||Wa()}function j(n){return Da(n)||La(n)||st(n)||Ua()}function Va(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var a=t.call(n,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function he(n){var e=Va(n,"string");return typeof e=="symbol"?e:e+""}function An(n){"@babel/helpers - typeof";return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},An(n)}function st(n,e){if(n){if(typeof n=="string")return Bn(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Bn(n,e):void 0}}var Wt=function(){},lt={},be={},ye=null,xe={mark:Wt,measure:Wt};try{typeof window<"u"&&(lt=window),typeof document<"u"&&(be=document),typeof MutationObserver<"u"&&(ye=MutationObserver),typeof performance<"u"&&(xe=performance)}catch{}var Ha=lt.navigator||{},Ut=Ha.userAgent,Vt=Ut===void 0?"":Ut,U=lt,x=be,Ht=ye,xn=xe,Ts=!!U.document,R=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",we=~Vt.indexOf("MSIE")||~Vt.indexOf("Trident/"),wn,Ya=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Ba=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Se={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Xa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ke=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],z="classic",un="duotone",Ie="sharp",Ce="sharp-duotone",Pe="chisel",Ae="etch",ze="graphite",Oe="jelly",Fe="jelly-duo",_e="jelly-fill",Ee="mosaic",Me="notdog",Te="notdog-duo",je="pixel",De="slab",Ne="slab-duo",$e="slab-press",Le="slab-press-duo",Re="thumbprint",We="utility",Ue="utility-duo",Ve="utility-fill",He="vellum",Ye="whiteboard",Ga="Classic",qa="Duotone",Ka="Sharp",Ja="Sharp Duotone",Qa="Chisel",Za="Etch",ni="Graphite",ti="Jelly",ei="Jelly Duo",ai="Jelly Fill",ii="Mosaic",ri="Notdog",oi="Notdog Duo",si="Pixel",li="Slab",fi="Slab Duo",ci="Slab Press",ui="Slab Press Duo",di="Thumbprint",mi="Utility",pi="Utility Duo",gi="Utility Fill",vi="Vellum",hi="Whiteboard",Be=[z,un,Ie,Ce,Pe,Ae,ze,Oe,Fe,_e,Ee,Me,Te,je,De,Ne,$e,Le,Re,We,Ue,Ve,He,Ye],js=(wn={},p(p(p(p(p(p(p(p(p(p(wn,z,Ga),un,qa),Ie,Ka),Ce,Ja),Pe,Qa),Ae,Za),ze,ni),Oe,ti),Fe,ei),_e,ai),p(p(p(p(p(p(p(p(p(p(wn,Ee,ii),Me,ri),Te,oi),je,si),De,li),Ne,fi),$e,ci),Le,ui),Re,di),We,mi),p(p(p(p(wn,Ue,pi),Ve,gi),He,vi),Ye,hi)),bi={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},yi={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},xi=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),wi={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},Xe=["fak","fa-kit","fakd","fa-kit-duotone"],Yt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Si=["kit"],ki="kit",Ii="kit-duotone",Ci="Kit",Pi="Kit Duotone",Ds=p(p({},ki,Ci),Ii,Pi),Ai={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},zi={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Oi={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Bt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Sn,kn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fi=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],_i="classic",Ei="duotone",Mi="sharp",Ti="sharp-duotone",ji="chisel",Di="etch",Ni="graphite",$i="jelly",Li="jelly-duo",Ri="jelly-fill",Wi="mosaic",Ui="notdog",Vi="notdog-duo",Hi="pixel",Yi="slab",Bi="slab-duo",Xi="slab-press",Gi="slab-press-duo",qi="thumbprint",Ki="utility",Ji="utility-duo",Qi="utility-fill",Zi="vellum",nr="whiteboard",tr="Classic",er="Duotone",ar="Sharp",ir="Sharp Duotone",rr="Chisel",or="Etch",sr="Graphite",lr="Jelly",fr="Jelly Duo",cr="Jelly Fill",ur="Mosaic",dr="Notdog",mr="Notdog Duo",pr="Pixel",gr="Slab",vr="Slab Duo",hr="Slab Press",br="Slab Press Duo",yr="Thumbprint",xr="Utility",wr="Utility Duo",Sr="Utility Fill",kr="Vellum",Ir="Whiteboard",Ns=(Sn={},p(p(p(p(p(p(p(p(p(p(Sn,_i,tr),Ei,er),Mi,ar),Ti,ir),ji,rr),Di,or),Ni,sr),$i,lr),Li,fr),Ri,cr),p(p(p(p(p(p(p(p(p(p(Sn,Wi,ur),Ui,dr),Vi,mr),Hi,pr),Yi,gr),Bi,vr),Xi,hr),Gi,br),qi,yr),Ki,xr),p(p(p(p(Sn,Ji,wr),Qi,Sr),Zi,kr),nr,Ir)),Cr="kit",Pr="kit-duotone",Ar="Kit",zr="Kit Duotone",$s=p(p({},Cr,Ar),Pr,zr),Or={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Fr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Xn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},_r=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Ge=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Fi,_r),Er=["solid","regular","light","thin","duotone","brands","semibold"],qe=[1,2,3,4,5,6,7,8,9,10],Mr=qe.concat([11,12,13,14,15,16,17,18,19,20]),Tr=["aw","fw","pull-left","pull-right"],jr=[].concat(j(Object.keys(Fr)),Er,Tr,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",kn.GROUP,kn.SWAP_OPACITY,kn.PRIMARY,kn.SECONDARY]).concat(qe.map(function(n){return"".concat(n,"x")})).concat(Mr.map(function(n){return"w-".concat(n)})),Dr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},$="___FONT_AWESOME___",Gn=16,Ke="fa",Je="svg-inline--fa",K="data-fa-i2svg",qn="data-fa-pseudo-element",Nr="data-fa-pseudo-element-pending",ft="data-prefix",ct="data-icon",Xt="fontawesome-i2svg",$r="async",Lr=["HTML","HEAD","STYLE","SCRIPT"],Qe=["::before","::after",":before",":after"],Ze=(function(){try{return!0}catch{return!1}})();function dn(n){return new Proxy(n,{get:function(t,a){return a in t?t[a]:t[z]}})}var na=f({},Se);na[z]=f(f(f(f({},{"fa-duotone":"duotone"}),Se[z]),Yt.kit),Yt["kit-duotone"]);var Rr=dn(na),Kn=f({},wi);Kn[z]=f(f(f(f({},{duotone:"fad"}),Kn[z]),Bt.kit),Bt["kit-duotone"]);var Gt=dn(Kn),Jn=f({},Xn);Jn[z]=f(f({},Jn[z]),Oi.kit);var ut=dn(Jn),Qn=f({},Or);Qn[z]=f(f({},Qn[z]),Ai.kit);var Ls=dn(Qn),Wr=Ya,ta="fa-layers-text",Ur=Ba,Vr=f({},bi),Rs=dn(Vr),Hr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Wn=Xa,Yr=[].concat(j(Si),j(jr)),ln=U.FontAwesomeConfig||{};function Br(n){var e=x.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function Xr(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}x&&typeof x.querySelector=="function"&&(qt=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],qt.forEach(function(n){var e=Fn(n,2),t=e[0],a=e[1],i=Xr(Br(t));i!=null&&(ln[a]=i)}));var qt,ea={styleDefault:"solid",familyDefault:z,cssPrefix:Ke,replacementClass:Je,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ln.familyPrefix&&(ln.cssPrefix=ln.familyPrefix);var en=f(f({},ea),ln);en.autoReplaceSvg||(en.observeMutations=!1);var m={};Object.keys(ea).forEach(function(n){Object.defineProperty(m,n,{enumerable:!0,set:function(t){en[n]=t,fn.forEach(function(a){return a(m)})},get:function(){return en[n]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){en.cssPrefix=e,fn.forEach(function(t){return t(m)})},get:function(){return en.cssPrefix}});U.FontAwesomeConfig=m;var fn=[];function Gr(n){return fn.push(n),function(){fn.splice(fn.indexOf(n),1)}}var W=Gn,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qr(n){if(!(!n||!R)){var e=x.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=x.head.childNodes,a=null,i=t.length-1;i>-1;i--){var r=t[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=r)}return x.head.insertBefore(e,a),n}}var Kr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Kt(){for(var n=12,e="";n-- >0;)e+=Kr[Math.random()*62|0];return e}function an(n){for(var e=[],t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function dt(n){return n.classList?an(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(e){return e})}function aa(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jr(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(aa(n[t]),'" ')},"").trim()}function _n(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t].trim(),";")},"")}function mt(n){return n.size!==D.size||n.x!==D.x||n.y!==D.y||n.rotate!==D.rotate||n.flipX||n.flipY}function Qr(n){var e=n.transform,t=n.containerWidth,a=n.iconWidth,i={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Zr(n){var e=n.transform,t=n.width,a=t===void 0?Gn:t,i=n.height,r=i===void 0?Gn:i,o=n.startCentered,s=o===void 0?!1:o,l="";return s&&we?l+="translate(".concat(e.x/W-a/2,"em, ").concat(e.y/W-r/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/W,"em), calc(-50% + ").concat(e.y/W,"em)) "):l+="translate(".concat(e.x/W,"em, ").concat(e.y/W,"em) "),l+="scale(".concat(e.size/W*(e.flipX?-1:1),", ").concat(e.size/W*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var no=`:root, :host {
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
}`;function ia(){var n=Ke,e=Je,t=m.cssPrefix,a=m.replacementClass,i=no;if(t!==n||a!==e){var r=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(a))}return i}var Jt=!1;function Un(){m.autoAddCss&&!Jt&&(qr(ia()),Jt=!0)}var to={mixout:function(){return{dom:{css:ia,insertCss:Un}}},hooks:function(){return{beforeDOMElementCreation:function(){Un()},beforeI2svg:function(){Un()}}}},L=U||{};L[$]||(L[$]={});L[$].styles||(L[$].styles={});L[$].hooks||(L[$].hooks={});L[$].shims||(L[$].shims=[]);var T=L[$],ra=[],oa=function(){x.removeEventListener("DOMContentLoaded",oa),zn=1,ra.map(function(e){return e()})},zn=!1;R&&(zn=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),zn||x.addEventListener("DOMContentLoaded",oa));function eo(n){R&&(zn?setTimeout(n,0):ra.push(n))}function mn(n){var e=n.tag,t=n.attributes,a=t===void 0?{}:t,i=n.children,r=i===void 0?[]:i;return typeof n=="string"?aa(n):"<".concat(e," ").concat(Jr(a),">").concat(r.map(mn).join(""),"</").concat(e,">")}function Qt(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var ao=function(e,t){return function(a,i,r,o){return e.call(t,a,i,r,o)}},Vn=function(e,t,a,i){var r=Object.keys(e),o=r.length,s=i!==void 0?ao(t,i):t,l,c,d;for(a===void 0?(l=1,d=e[r[0]]):(l=0,d=a);l<o;l++)c=r[l],d=s(d,e[c],c,e);return d};function sa(n){return j(n).length!==1?null:n.codePointAt(0).toString(16)}function Zt(n){return Object.keys(n).reduce(function(e,t){var a=n[t],i=!!a.icon;return i?e[a.iconName]=a.icon:e[t]=a,e},{})}function Zn(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,i=a===void 0?!1:a,r=Zt(e);typeof T.hooks.addPack=="function"&&!i?T.hooks.addPack(n,Zt(e)):T.styles[n]=f(f({},T.styles[n]||{}),r),n==="fas"&&Zn("fa",e)}var cn=T.styles,io=T.shims,la=Object.keys(ut),ro=la.reduce(function(n,e){return n[e]=Object.keys(ut[e]),n},{}),pt=null,fa={},ca={},ua={},da={},ma={};function oo(n){return~Yr.indexOf(n)}function so(n,e){var t=e.split("-"),a=t[0],i=t.slice(1).join("-");return a===n&&i!==""&&!oo(i)?i:null}var pa=function(){var e=function(r){return Vn(cn,function(o,s,l){return o[l]=Vn(s,r,{}),o},{})};fa=e(function(i,r,o){if(r[3]&&(i[r[3]]=o),r[2]){var s=r[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),ca=e(function(i,r,o){if(i[o]=o,r[2]){var s=r[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),ma=e(function(i,r,o){var s=r[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var t="far"in cn||m.autoFetchSvg,a=Vn(io,function(i,r){var o=r[0],s=r[1],l=r[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});ua=a.names,da=a.unicodes,pt=En(m.styleDefault,{family:m.familyDefault})};Gr(function(n){pt=En(n.styleDefault,{family:m.familyDefault})});pa();function gt(n,e){return(fa[n]||{})[e]}function lo(n,e){return(ca[n]||{})[e]}function q(n,e){return(ma[n]||{})[e]}function ga(n){return ua[n]||{prefix:null,iconName:null}}function fo(n){var e=da[n],t=gt("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function V(){return pt}var va=function(){return{prefix:null,iconName:null,rest:[]}};function co(n){var e=z,t=la.reduce(function(a,i){return a[i]="".concat(m.cssPrefix,"-").concat(i),a},{});return Be.forEach(function(a){(n.includes(t[a])||n.some(function(i){return ro[a].includes(i)}))&&(e=a)}),e}function En(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.family,a=t===void 0?z:t,i=Rr[a][n];if(a===un&&!n)return"fad";var r=Gt[a][n]||Gt[a][i],o=n in T.styles?n:null,s=r||o||null;return s}function uo(n){var e=[],t=null;return n.forEach(function(a){var i=so(m.cssPrefix,a);i?t=i:a&&e.push(a)}),{iconName:t,rest:e}}function ne(n){return n.sort().filter(function(e,t,a){return a.indexOf(e)===t})}var te=Ge.concat(Xe);function Mn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.skipLookups,a=t===void 0?!1:t,i=null,r=ne(n.filter(function(g){return te.includes(g)})),o=ne(n.filter(function(g){return!te.includes(g)})),s=r.filter(function(g){return i=g,!ke.includes(g)}),l=Fn(s,1),c=l[0],d=c===void 0?null:c,u=co(r),v=f(f({},uo(o)),{},{prefix:En(d,{family:u})});return f(f(f({},v),vo({values:n,family:u,styles:cn,config:m,canonical:v,givenPrefix:i})),mo(a,i,v))}function mo(n,e,t){var a=t.prefix,i=t.iconName;if(n||!a||!i)return{prefix:a,iconName:i};var r=e==="fa"?ga(i):{},o=q(a,i);return i=r.iconName||o||i,a=r.prefix||a,a==="far"&&!cn.far&&cn.fas&&!m.autoFetchSvg&&(a="fas"),{prefix:a,iconName:i}}var po=Be.filter(function(n){return n!==z||n!==un}),go=Object.keys(Xn).filter(function(n){return n!==z}).map(function(n){return Object.keys(Xn[n])}).flat();function vo(n){var e=n.values,t=n.family,a=n.canonical,i=n.givenPrefix,r=i===void 0?"":i,o=n.styles,s=o===void 0?{}:o,l=n.config,c=l===void 0?{}:l,d=t===un,u=e.includes("fa-duotone")||e.includes("fad"),v=c.familyDefault==="duotone",g=a.prefix==="fad"||a.prefix==="fa-duotone";if(!d&&(u||v||g)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&po.includes(t)){var C=Object.keys(s).find(function(O){return go.includes(O)});if(C||c.autoFetchSvg){var w=xi.get(t).defaultShortPrefixId;a.prefix=w,a.iconName=q(a.prefix,a.iconName)||a.iconName}}return(a.prefix==="fa"||r==="fa")&&(a.prefix=V()||"fas"),a}var ho=(function(){function n(){Na(this,n),this.definitions={}}return $a(n,[{key:"add",value:function(){for(var t=this,a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=f(f({},t.definitions[s]||{}),o[s]),Zn(s,o[s]);var l=ut[z][s];l&&Zn(l,o[s]),pa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var i=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(i).map(function(r){var o=i[r],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];t[s]||(t[s]={}),d.length>0&&d.forEach(function(u){typeof u=="string"&&(t[s][u]=c)}),t[s][l]=c}),t}}])})(),ee=[],nn={},tn={},bo=Object.keys(tn);function yo(n,e){var t=e.mixoutsTo;return ee=n,nn={},Object.keys(tn).forEach(function(a){bo.indexOf(a)===-1&&delete tn[a]}),ee.forEach(function(a){var i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(t[o]=i[o]),An(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=i[o][s]})}),a.hooks){var r=a.hooks();Object.keys(r).forEach(function(o){nn[o]||(nn[o]=[]),nn[o].push(r[o])})}a.provides&&a.provides(tn)}),t}function nt(n,e){for(var t=arguments.length,a=new Array(t>2?t-2:0),i=2;i<t;i++)a[i-2]=arguments[i];var r=nn[n]||[];return r.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function J(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];var i=nn[n]||[];i.forEach(function(r){r.apply(null,t)})}function H(){var n=arguments[0],e=Array.prototype.slice.call(arguments,1);return tn[n]?tn[n].apply(null,e):void 0}function tt(n){n.prefix==="fa"&&(n.prefix="fas");var e=n.iconName,t=n.prefix||V();if(e)return e=q(t,e)||e,Qt(ha.definitions,t,e)||Qt(T.styles,t,e)}var ha=new ho,xo=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,J("noAuto")},wo={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(J("beforeI2svg",e),H("pseudoElements2svg",e),H("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,eo(function(){ko({autoReplaceSvgRoot:t}),J("watch",e)})}},So={icon:function(e){if(e===null)return null;if(An(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=En(e[0]);return{prefix:a,iconName:q(a,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(Wr))){var i=Mn(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||V(),iconName:q(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var r=V();return{prefix:r,iconName:q(r,e)||e}}}},E={noAuto:xo,config:m,dom:wo,parse:So,library:ha,findIconDefinition:tt,toHtml:mn},ko=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot,a=t===void 0?x:t;(Object.keys(T.styles).length>0||m.autoFetchSvg)&&R&&m.autoReplaceSvg&&E.dom.i2svg({node:a})};function Tn(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(a){return mn(a)})}}),Object.defineProperty(n,"node",{get:function(){if(R){var a=x.createElement("div");return a.innerHTML=n.html,a.children}}}),n}function Io(n){var e=n.children,t=n.main,a=n.mask,i=n.attributes,r=n.styles,o=n.transform;if(mt(o)&&t.found&&!a.found){var s=t.width,l=t.height,c={x:s/l/2,y:.5};i.style=_n(f(f({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Co(n){var e=n.prefix,t=n.iconName,a=n.children,i=n.attributes,r=n.symbol,o=r===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},i),{},{id:o}),children:a}]}]}function Po(n){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(t){return t in n})}function vt(n){var e=n.icons,t=e.main,a=e.mask,i=n.prefix,r=n.iconName,o=n.transform,s=n.symbol,l=n.maskId,c=n.extra,d=n.watchable,u=d===void 0?!1:d,v=a.found?a:t,g=v.width,C=v.height,w=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(function(N){return c.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(c.classes).join(" "),O={children:[],attributes:f(f({},c.attributes),{},{"data-prefix":i,"data-icon":r,class:w,role:c.attributes.role||"img",viewBox:"0 0 ".concat(g," ").concat(C)})};!Po(c.attributes)&&!c.attributes["aria-hidden"]&&(O.attributes["aria-hidden"]="true"),u&&(O.attributes[K]="");var P=f(f({},O),{},{prefix:i,iconName:r,main:t,mask:a,maskId:l,transform:o,symbol:s,styles:f({},c.styles)}),_=a.found&&t.found?H("generateAbstractMask",P)||{children:[],attributes:{}}:H("generateAbstractIcon",P)||{children:[],attributes:{}},M=_.children,Q=_.attributes;return P.children=M,P.attributes=Q,s?Co(P):Io(P)}function ae(n){var e=n.content,t=n.width,a=n.height,i=n.transform,r=n.extra,o=n.watchable,s=o===void 0?!1:o,l=f(f({},r.attributes),{},{class:r.classes.join(" ")});s&&(l[K]="");var c=f({},r.styles);mt(i)&&(c.transform=Zr({transform:i,startCentered:!0,width:t,height:a}),c["-webkit-transform"]=c.transform);var d=_n(c);d.length>0&&(l.style=d);var u=[];return u.push({tag:"span",attributes:l,children:[e]}),u}function Ao(n){var e=n.content,t=n.extra,a=f(f({},t.attributes),{},{class:t.classes.join(" ")}),i=_n(t.styles);i.length>0&&(a.style=i);var r=[];return r.push({tag:"span",attributes:a,children:[e]}),r}var Hn=T.styles;function et(n){var e=n[0],t=n[1],a=n.slice(4),i=Fn(a,1),r=i[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Wn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Wn.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Wn.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:t,icon:o}}var zo={found:!1,width:512,height:512};function Oo(n,e){!Ze&&!m.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function at(n,e){var t=e;return e==="fa"&&m.styleDefault!==null&&(e=V()),new Promise(function(a,i){if(t==="fa"){var r=ga(n)||{};n=r.iconName||n,e=r.prefix||e}if(n&&e&&Hn[e]&&Hn[e][n]){var o=Hn[e][n];return a(et(o))}Oo(n,e),a(f(f({},zo),{},{icon:m.showMissingIcons&&n?H("missingIconAbstract")||{}:{}}))})}var ie=function(){},it=m.measurePerformance&&xn&&xn.mark&&xn.measure?xn:{mark:ie,measure:ie},sn='FA "7.3.1"',Fo=function(e){return it.mark("".concat(sn," ").concat(e," begins")),function(){return ba(e)}},ba=function(e){it.mark("".concat(sn," ").concat(e," ends")),it.measure("".concat(sn," ").concat(e),"".concat(sn," ").concat(e," begins"),"".concat(sn," ").concat(e," ends"))},ht={begin:Fo,end:ba},Cn=function(){};function re(n){var e=n.getAttribute?n.getAttribute(K):null;return typeof e=="string"}function _o(n){var e=n.getAttribute?n.getAttribute(ft):null,t=n.getAttribute?n.getAttribute(ct):null;return e&&t}function Eo(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(m.replacementClass)}function Mo(){if(m.autoReplaceSvg===!0)return Pn.replace;var n=Pn[m.autoReplaceSvg];return n||Pn.replace}function To(n){return x.createElementNS("http://www.w3.org/2000/svg",n)}function jo(n){return x.createElement(n)}function ya(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.ceFn,a=t===void 0?n.tag==="svg"?To:jo:t;if(typeof n=="string")return x.createTextNode(n);var i=a(n.tag);Object.keys(n.attributes||[]).forEach(function(o){i.setAttribute(o,n.attributes[o])});var r=n.children||[];return r.forEach(function(o){i.appendChild(ya(o,{ceFn:a}))}),i}function Do(n){var e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Pn={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(i){t.parentNode.insertBefore(ya(i),t)}),t.getAttribute(K)===null&&m.keepOriginalSource){var a=x.createComment(Do(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(e){var t=e[0],a=e[1];if(~dt(t).indexOf(m.replacementClass))return Pn.replace(e);var i=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var r=a[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",r.toNode.join(" "))}var o=a.map(function(s){return mn(s)}).join(`
`);t.setAttribute(K,""),t.innerHTML=o}};function oe(n){n()}function xa(n,e){var t=typeof e=="function"?e:Cn;if(n.length===0)t();else{var a=oe;m.mutateApproach===$r&&(a=U.requestAnimationFrame||oe),a(function(){var i=Mo(),r=ht.begin("mutate");n.map(i),r(),t()})}}var bt=!1;function wa(){bt=!0}function rt(){bt=!1}var On=null;function se(n){if(Ht&&m.observeMutations){var e=n.treeCallback,t=e===void 0?Cn:e,a=n.nodeCallback,i=a===void 0?Cn:a,r=n.pseudoElementsCallback,o=r===void 0?Cn:r,s=n.observeMutationsRoot,l=s===void 0?x:s;On=new Ht(function(c){if(!bt){var d=V();an(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!re(u.addedNodes[0])&&(m.searchPseudoElements&&o(u.target),t(u.target)),u.type==="attributes"&&u.target.parentNode&&m.searchPseudoElements&&o([u.target],!0),u.type==="attributes"&&re(u.target)&&~Hr.indexOf(u.attributeName))if(u.attributeName==="class"&&_o(u.target)){var v=Mn(dt(u.target)),g=v.prefix,C=v.iconName;u.target.setAttribute(ft,g||d),C&&u.target.setAttribute(ct,C)}else Eo(u.target)&&i(u.target)})}}),R&&On.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function No(){On&&On.disconnect()}function $o(n){var e=n.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce(function(a,i){var r=i.split(":"),o=r[0],s=r.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),t}function Lo(n){var e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),a=n.innerText!==void 0?n.innerText.trim():"",i=Mn(dt(n));return i.prefix||(i.prefix=V()),e&&t&&(i.prefix=e,i.iconName=t),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=lo(i.prefix,n.innerText)||gt(i.prefix,sa(n.innerText))),!i.iconName&&m.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=n.firstChild.data)),i}function Ro(n){var e=an(n.attributes).reduce(function(t,a){return t.name!=="class"&&t.name!=="style"&&(t[a.name]=a.value),t},{});return e}function Wo(){return{iconName:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function le(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Lo(n),a=t.iconName,i=t.prefix,r=t.rest,o=Ro(n),s=nt("parseNodeAttributes",{},n),l=e.styleParser?$o(n):[];return f({iconName:a,prefix:i,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},s)}var Uo=T.styles;function Sa(n){var e=m.autoReplaceSvg==="nest"?le(n,{styleParser:!1}):le(n);return~e.extra.classes.indexOf(ta)?H("generateLayersText",n,e):H("generateSvgReplacementMutation",n,e)}function Vo(){return[].concat(j(Xe),j(Ge))}function fe(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var t=x.documentElement.classList,a=function(u){return t.add("".concat(Xt,"-").concat(u))},i=function(u){return t.remove("".concat(Xt,"-").concat(u))},r=m.autoFetchSvg?Vo():ke.concat(Object.keys(Uo));r.includes("fa")||r.push("fa");var o=[".".concat(ta,":not([").concat(K,"])")].concat(r.map(function(d){return".".concat(d,":not([").concat(K,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=an(n.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),i("complete");else return Promise.resolve();var l=ht.begin("onTree"),c=s.reduce(function(d,u){try{var v=Sa(u);v&&d.push(v)}catch(g){Ze||g.name==="MissingIcon"&&console.error(g)}return d},[]);return new Promise(function(d,u){Promise.all(c).then(function(v){xa(v,function(){a("active"),a("complete"),i("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(v){l(),u(v)})})}function Ho(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Sa(n).then(function(t){t&&xa([t],e)})}function Yo(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:tt(e||{}),i=t.mask;return i&&(i=(i||{}).icon?i:tt(i||{})),n(a,f(f({},t),{},{mask:i}))}}var Bo=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,i=a===void 0?D:a,r=t.symbol,o=r===void 0?!1:r,s=t.mask,l=s===void 0?null:s,c=t.maskId,d=c===void 0?null:c,u=t.classes,v=u===void 0?[]:u,g=t.attributes,C=g===void 0?{}:g,w=t.styles,O=w===void 0?{}:w;if(e){var P=e.prefix,_=e.iconName,M=e.icon;return Tn(f({type:"icon"},e),function(){return J("beforeDOMElementCreation",{iconDefinition:e,params:t}),vt({icons:{main:et(M),mask:l?et(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:_,transform:f(f({},D),i),symbol:o,maskId:d,extra:{attributes:C,styles:O,classes:v}})})}},Xo={mixout:function(){return{icon:Yo(Bo)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=fe,t.nodeCallback=Ho,t}}},provides:function(e){e.i2svg=function(t){var a=t.node,i=a===void 0?x:a,r=t.callback,o=r===void 0?function(){}:r;return fe(i,o)},e.generateSvgReplacementMutation=function(t,a){var i=a.iconName,r=a.prefix,o=a.transform,s=a.symbol,l=a.mask,c=a.maskId,d=a.extra;return new Promise(function(u,v){Promise.all([at(i,r),l.iconName?at(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var C=Fn(g,2),w=C[0],O=C[1];u([t,vt({icons:{main:w,mask:O},prefix:r,iconName:i,transform:o,symbol:s,maskId:c,extra:d,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){var a=t.children,i=t.attributes,r=t.main,o=t.transform,s=t.styles,l=_n(s);l.length>0&&(i.style=l);var c;return mt(o)&&(c=H("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),a.push(c||r.icon),{children:a,attributes:i}}}},Go={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.classes,r=i===void 0?[]:i;return Tn({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:t,params:a});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(j(r)).join(" ")},children:o}]})}}}},qo={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.title,r=i===void 0?null:i,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,d=a.styles,u=d===void 0?{}:d;return Tn({type:"counter",content:t},function(){return J("beforeDOMElementCreation",{content:t,params:a}),Ao({content:t.toString(),title:r,extra:{attributes:c,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(j(s))}})})}}}},Ko={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.transform,r=i===void 0?D:i,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,d=a.styles,u=d===void 0?{}:d;return Tn({type:"text",content:t},function(){return J("beforeDOMElementCreation",{content:t,params:a}),ae({content:t,transform:f(f({},D),r),extra:{attributes:c,styles:u,classes:["".concat(m.cssPrefix,"-layers-text")].concat(j(s))}})})}}},provides:function(e){e.generateLayersText=function(t,a){var i=a.transform,r=a.extra,o=null,s=null;if(we){var l=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/l,s=c.height/l}return Promise.resolve([t,ae({content:t.innerHTML,width:o,height:s,transform:i,extra:r,watchable:!0})])}}},ka=new RegExp('"',"ug"),ce=[1105920,1112319],ue=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),yi),Dr),zi),ot=Object.keys(ue).reduce(function(n,e){return n[e.toLowerCase()]=ue[e],n},{}),Jo=Object.keys(ot).reduce(function(n,e){var t=ot[e];return n[e]=t[900]||j(Object.entries(t))[0][1],n},{});function Qo(n){var e=n.replace(ka,"");return sa(j(e)[0]||"")}function Zo(n){var e=n.getPropertyValue("font-feature-settings").includes("ss01"),t=n.getPropertyValue("content"),a=t.replace(ka,""),i=a.codePointAt(0),r=i>=ce[0]&&i<=ce[1],o=a.length===2?a[0]===a[1]:!1;return r||o||e}function ns(n,e){var t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),i=isNaN(a)?"normal":a;return(ot[t]||{})[i]||Jo[t]}function de(n,e){var t="".concat(Nr).concat(e.replace(":","-"));return new Promise(function(a,i){if(n.getAttribute(t)!==null)return a();var r=an(n.children),o=r.filter(function(jn){return jn.getAttribute(qn)===e})[0],s=U.getComputedStyle(n,e),l=s.getPropertyValue("font-family"),c=l.match(Ur),d=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!c)return n.removeChild(o),a();if(c&&u!=="none"&&u!==""){var v=s.getPropertyValue("content"),g=ns(l,d),C=Qo(v),w=c[0].startsWith("FontAwesome"),O=Zo(s),P=gt(g,C),_=P;if(w){var M=fo(C);M.iconName&&M.prefix&&(P=M.iconName,g=M.prefix)}if(P&&!O&&(!o||o.getAttribute(ft)!==g||o.getAttribute(ct)!==_)){n.setAttribute(t,_),o&&n.removeChild(o);var Q=Wo(),N=Q.extra;N.attributes[qn]=e,at(P,g).then(function(jn){var Ma=vt(f(f({},Q),{},{icons:{main:jn,mask:va()},prefix:g,iconName:_,extra:N,watchable:!0})),Dn=x.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(Dn,n.firstChild):n.appendChild(Dn),Dn.outerHTML=Ma.map(function(Ta){return mn(Ta)}).join(`
`),n.removeAttribute(t),a()}).catch(i)}else a()}else a()})}function ts(n){return Promise.all([de(n,"::before"),de(n,"::after")])}function es(n){return n.parentNode!==document.head&&!~Lr.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(qn)&&(!n.parentNode||n.parentNode.tagName!=="svg")}var as=function(e){return!!e&&Qe.some(function(t){return e.includes(t)})},is=function(e){if(!e)return[];var t=new Set,a=e.split(/,(?![^()]*\))/).map(function(l){return l.trim()});a=a.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(c){return c.trim()})});var i=In(a),r;try{for(i.s();!(r=i.n()).done;){var o=r.value;if(as(o)){var s=Qe.reduce(function(l,c){return l.replace(c,"")},o);s!==""&&s!=="*"&&t.add(s)}}}catch(l){i.e(l)}finally{i.f()}return t};function me(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(R){var t;if(e)t=n;else if(m.searchPseudoElementsFullScan)t=n.querySelectorAll("*");else{var a=new Set,i=In(document.styleSheets),r;try{for(i.s();!(r=i.n()).done;){var o=r.value;try{var s=In(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var c=l.value,d=is(c.selectorText),u=In(d),v;try{for(u.s();!(v=u.n()).done;){var g=v.value;a.add(g)}}catch(w){u.e(w)}finally{u.f()}}}catch(w){s.e(w)}finally{s.f()}}catch(w){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(w.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(w){i.e(w)}finally{i.f()}if(!a.size)return;var C=Array.from(a).join(", ");try{t=n.querySelectorAll(C)}catch{}}return new Promise(function(w,O){var P=an(t).filter(es).map(ts),_=ht.begin("searchPseudoElements");wa(),Promise.all(P).then(function(){_(),rt(),w()}).catch(function(){_(),rt(),O()})})}}var rs={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=me,t}}},provides:function(e){e.pseudoElements2svg=function(t){var a=t.node,i=a===void 0?x:a;m.searchPseudoElements&&me(i)}}},pe=!1,os={mixout:function(){return{dom:{unwatch:function(){wa(),pe=!0}}}},hooks:function(){return{bootstrap:function(){se(nt("mutationObserverCallbacks",{}))},noAuto:function(){No()},watch:function(t){var a=t.observeMutationsRoot;pe?rt():se(nt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},ge=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,i){var r=i.toLowerCase().split("-"),o=r[0],s=r.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},t)},ss={mixout:function(){return{parse:{transform:function(t){return ge(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,a){var i=a.getAttribute("data-fa-transform");return i&&(t.transform=ge(i)),t}}},provides:function(e){e.generateAbstractTransformGrouping=function(t){var a=t.main,i=t.transform,r=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:u,path:v};return{tag:"g",attributes:f({},g.outer),children:[{tag:"g",attributes:f({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:f(f({},a.icon.attributes),g.path)}]}]}}}},Yn={x:0,y:0,width:"100%",height:"100%"};function ve(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function ls(n){return n.tag==="g"?n.children:[n]}var fs={hooks:function(){return{parseNodeAttributes:function(t,a){var i=a.getAttribute("data-fa-mask"),r=i?Mn(i.split(" ").map(function(o){return o.trim()})):va();return r.prefix||(r.prefix=V()),t.mask=r,t.maskId=a.getAttribute("data-fa-mask-id"),t}}},provides:function(e){e.generateAbstractMask=function(t){var a=t.children,i=t.attributes,r=t.main,o=t.mask,s=t.maskId,l=t.transform,c=r.width,d=r.icon,u=o.width,v=o.icon,g=Qr({transform:l,containerWidth:u,iconWidth:c}),C={tag:"rect",attributes:f(f({},Yn),{},{fill:"white"})},w=d.children?{children:d.children.map(ve)}:{},O={tag:"g",attributes:f({},g.inner),children:[ve(f({tag:d.tag,attributes:f(f({},d.attributes),g.path)},w))]},P={tag:"g",attributes:f({},g.outer),children:[O]},_="mask-".concat(s||Kt()),M="clip-".concat(s||Kt()),Q={tag:"mask",attributes:f(f({},Yn),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,P]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:ls(v)},Q]};return a.push(N,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(_,")")},Yn)}),{children:a,attributes:i}}}},cs={provides:function(e){var t=!1;U.matchMedia&&(t=U.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:f(f({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:f(f({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:f(f({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||a.push({tag:"path",attributes:f(f({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},us={hooks:function(){return{parseNodeAttributes:function(t,a){var i=a.getAttribute("data-fa-symbol"),r=i===null?!1:i===""?!0:i;return t.symbol=r,t}}}},ds=[to,Xo,Go,qo,Ko,rs,os,ss,fs,cs,us];yo(ds,{mixoutsTo:E});var Ws=E.noAuto,Ia=E.config,Us=E.library,Ca=E.dom,Pa=E.parse,Vs=E.findIconDefinition,Hs=E.toHtml,Aa=E.icon,Ys=E.layer,ms=E.text,ps=E.counter;var vs=["*"],hs=(()=>{class n{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(t){Ia.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(a){return new(a||n)};static \u0275prov=Nn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),bs=(()=>{class n{definitions={};addIcons(...t){for(let a of t){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let i of a.icon[2])typeof i=="string"&&(this.definitions[a.prefix][i]=a)}}addIconPacks(...t){for(let a of t){let i=Object.keys(a).map(r=>a[r]);this.addIcons(...i)}}getIconDefinition(t,a){return t in this.definitions&&a in this.definitions[t]?this.definitions[t][a]:null}static \u0275fac=function(a){return new(a||n)};static \u0275prov=Nn({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ys=n=>{throw new Error(`Could not find icon with iconName=${n.iconName} and prefix=${n.prefix} in the icon library.`)},xs=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Oa=n=>n!=null&&(n===90||n===180||n===270||n==="90"||n==="180"||n==="270"),ws=n=>{let e=Oa(n.rotate),t={[`fa-${n.animation}`]:n.animation!=null&&!n.animation.startsWith("spin"),"fa-spin":n.animation==="spin"||n.animation==="spin-reverse","fa-spin-pulse":n.animation==="spin-pulse"||n.animation==="spin-pulse-reverse","fa-spin-reverse":n.animation==="spin-reverse"||n.animation==="spin-pulse-reverse","fa-pulse":n.animation==="spin-pulse"||n.animation==="spin-pulse-reverse","fa-fw":n.fixedWidth,"fa-border":n.border,"fa-inverse":n.inverse,"fa-layers-counter":n.counter,"fa-flip-horizontal":n.flip==="horizontal"||n.flip==="both","fa-flip-vertical":n.flip==="vertical"||n.flip==="both",[`fa-${n.size}`]:n.size!==null,[`fa-rotate-${n.rotate}`]:e,"fa-rotate-by":n.rotate!=null&&!e,[`fa-pull-${n.pull}`]:n.pull!==null,[`fa-stack-${n.stackItemSize}`]:n.stackItemSize!=null};return Object.keys(t).map(a=>t[a]?a:null).filter(a=>a!=null)},yt=new WeakSet,za="fa-auto-css";function Ss(n,e){if(!e.autoAddCss||yt.has(n))return;if(n.getElementById(za)!=null){e.autoAddCss=!1,yt.add(n);return}let t=n.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("id",za),t.innerHTML=Ca.css();let a=n.head.childNodes,i=null;for(let r=a.length-1;r>-1;r--){let o=a[r],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=o)}n.head.insertBefore(t,i),e.autoAddCss=!1,yt.add(n)}var ks=n=>n.prefix!==void 0&&n.iconName!==void 0,Is=(n,e)=>ks(n)?n:Array.isArray(n)&&n.length===2?{prefix:n[0],iconName:n[1]}:{prefix:e,iconName:n},Cs=(()=>{class n{stackItemSize=bn("1x");size=bn();_effect=Et(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(a){return new(a||n)};static \u0275dir=It({type:n,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return n})(),Ps=(()=>{class n{size=bn();classes=Rn(()=>{let t=this.size(),a=t?{[`fa-${t}`]:!0}:{};return vn(gn({},a),{"fa-stack":!0})});static \u0275fac=function(a){return new(a||n)};static \u0275cmp=rn({type:n,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(a,i){a&2&&Ot(i.classes())},inputs:{size:[1,"size"]},ngContentSelectors:vs,decls:1,vars:0,template:function(a,i){a&1&&(At(),zt(0))},encapsulation:2,changeDetection:0})}return n})(),Fa=(()=>{class n{icon=F();title=F();animation=F();mask=F();flip=F();size=F();pull=F();border=F();inverse=F();symbol=F();rotate=F();fixedWidth=F();transform=F();a11yRole=F();renderedIconHTML=Rn(()=>{let t=this.icon()??this.config.fallbackIcon;if(!t)return xs(),"";let a=this.findIconDefinition(t);if(!a)return"";let i=this.buildParams();Ss(this.document,this.config);let r=Aa(a,i);return this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))});document=Y(wt);sanitizer=Y(jt);config=Y(hs);iconLibrary=Y(bs);stackItem=Y(Cs,{optional:!0});stack=Y(Ps,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(t){let a=Is(t,this.config.defaultPrefix);if("icon"in a)return a;let i=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return i??(ys(a),null)}buildParams(){let t=this.fixedWidth(),a={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof t=="boolean"?t:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},i=this.transform(),r=typeof i=="string"?Pa.transform(i):i,o=this.mask(),s=o!=null?this.findIconDefinition(o):null,l={},c=this.a11yRole();c!=null&&(l.role=c);let d={};return a.rotate!=null&&!Oa(a.rotate)&&(d["--fa-rotate-angle"]=`${a.rotate}`),{title:this.title(),transform:r,classes:ws(a),mask:s??void 0,symbol:this.symbol(),attributes:l,styles:d}}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=rn({type:n,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,i){a&2&&(Pt("innerHTML",i.renderedIconHTML(),St),hn("title",i.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(a,i){},encapsulation:2,changeDetection:0})}return n})();var _a=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=kt({type:n});static \u0275inj=xt({})}return n})();var pn=(n,e)=>e.name;function zs(n,e){if(n&1&&(h(0,"a",11),S(1),k(2,"translate"),k(3,"titlecase"),y()),n&2){let t=e.$implicit;G("href",t.url,Z),b(),Ln(" ",I(2,3,"app.pages.landing.labels.wishlistOn")," ",I(3,5,t.name)," ")}}function Os(n,e){if(n&1&&(h(0,"div",14)(1,"div",25),S(2),k(3,"number"),y(),h(4,"h2",26),S(5),k(6,"translate"),y(),h(7,"p",27),S(8),k(9,"translate"),y()()),n&2){let t=e.$implicit,a=e.$index;b(2),A(_t(3,3,a+1,"2.0-0")),b(3),A(I(6,6,"app.pages.landing.features."+t+".title")),b(3),A(I(9,8,"app.pages.landing.features."+t+".description"))}}function Fs(n,e){if(n&1&&(h(0,"a",11),S(1),k(2,"translate"),k(3,"titlecase"),y()),n&2){let t=e.$implicit;G("href",t.url,Z),b(),Ln(" ",I(2,3,"app.pages.landing.labels.wishlistOn")," ",I(3,5,t.name)," ")}}function _s(n,e){if(n&1&&(h(0,"a",22),k(1,"titlecase"),on(2,"fa-icon",28),y()),n&2){let t=e.$implicit;G("href",t.url,Z),hn("aria-label",I(1,3,t.name)),b(2),G("icon",t.icon)}}function Es(n,e){if(n&1&&(h(0,"a",22),S(1),k(2,"titlecase"),y()),n&2){let t=e.$implicit;G("href",t.url,Z),b(),A(I(2,2,t.name))}}function Ms(n,e){if(n&1&&(h(0,"a",22),S(1),k(2,"titlecase"),y()),n&2){let t=e.$implicit;G("href",t.url,Z),b(),A(I(2,2,t.name))}}var Ea=class n{game=yn.game;year=new Date().getFullYear();featureKeys=["breakTheRules","fastBattles","sandboxCampaign"];storeViews=$n([]);socialViews=$n([]);async ngOnInit(){await this.loadViews(yn.availableStores,this.mapToView.bind(this),this.storeViews),await this.loadViews(yn.socials,this.mapToView.bind(this),this.socialViews)}async loadViews(e,t,a){let i=e.map(t),o=(await Promise.all(i)).filter(s=>s!==null);a.set(o)}async mapToView(e){let t=await this.getIcon(e.name);return t?vn(gn({},e),{icon:t}):(console.error(`Unknown platform: ${e.name}`),null)}async getIcon(e){let t=await import("./chunk-EI6RGIMO.js");return{steam:t.faSteam,discord:t.faDiscord,instagram:t.faInstagram,reddit:t.faReddit,youtube:t.faYoutube}[e]||null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=rn({type:n,selectors:[["app-landing"]],decls:67,vars:32,consts:[[1,"site-nav"],["routerLink","/game"],["href","#studio"],["href","#follow"],["id","game",1,"hero"],[1,"hero-inner"],[1,"hero-kicker"],[1,"hero-title"],[1,"amp"],[1,"hero-tagline"],[1,"cta-row"],["target","_blank","rel","noopener",1,"btn","btn-primary",3,"href"],["href","#follow",1,"btn","btn-ghost"],[1,"features"],[1,"feature-row"],["id","studio",1,"studio"],[1,"studio-art"],[1,"studio-copy"],[1,"eyebrow"],[1,"description"],["id","follow",1,"follow"],[1,"social-row"],["target","_blank","rel","noopener",3,"href"],[1,"site-footer"],[1,"copyright"],[1,"feature-num"],[1,"feature-title"],[1,"feature-description"],[3,"icon"]],template:function(t,a){t&1&&(h(0,"header",0),on(1,"app-logo"),h(2,"nav")(3,"a",1),S(4),k(5,"translate"),y(),h(6,"a",2),S(7),k(8,"translate"),y(),h(9,"a",3),S(10),k(11,"translate"),y()()(),h(12,"section",4)(13,"div",5)(14,"p",6),S(15),k(16,"translate"),y(),h(17,"h1",7),S(18,"Ashes"),on(19,"br"),h(20,"span",8),S(21,"&"),y(),S(22," Blood"),y(),h(23,"p",9),S(24),y(),h(25,"div",10),B(26,zs,4,7,"a",11,pn),h(28,"a",12),S(29),k(30,"translate"),y()()()(),h(31,"section",13),B(32,Os,10,10,"div",14,Ct),y(),h(34,"section",15),on(35,"div",16),h(36,"div",17)(37,"p",18),S(38),k(39,"translate"),y(),h(40,"h2"),S(41),k(42,"translate"),y(),h(43,"p",19),S(44),k(45,"translate"),y()()(),h(46,"section",20)(47,"h2"),S(48),k(49,"translate"),y(),h(50,"p",19),S(51),k(52,"translate"),y(),h(53,"div",10),B(54,Fs,4,7,"a",11,pn),y(),h(56,"div",21),B(57,_s,3,5,"a",22,pn),y()(),h(59,"footer",23)(60,"span",24),S(61),y(),h(62,"nav"),B(63,Es,3,4,"a",22,pn),B(65,Ms,3,4,"a",22,pn),y()()),t&2&&(b(4),A(I(5,12,"app.pages.landing.nav.game")),b(3),A(I(8,14,"app.pages.landing.nav.studio")),b(3),A(I(11,16,"app.pages.landing.nav.follow")),b(5),A(I(16,18,"app.pages.landing.hero.kicker")),b(9),A(a.game.tagline),b(2),X(a.storeViews()),b(3),A(I(30,20,"app.pages.landing.labels.followUs")),b(3),X(a.featureKeys),b(6),A(I(39,22,"app.pages.landing.studio.eyebrow")),b(3),A(I(42,24,"app.pages.landing.studio.title")),b(3),A(I(45,26,"app.pages.landing.studio.description")),b(4),A(I(49,28,"app.pages.landing.follow.title")),b(3),A(I(52,30,"app.pages.landing.follow.description")),b(3),X(a.storeViews()),b(3),X(a.socialViews()),b(4),Ft("\xA9 ",a.year," Small Strategy"),b(2),X(a.storeViews()),b(2),X(a.socialViews()))},dependencies:[Dt,_a,Fa,$t,Nt,Tt,Mt],styles:['[_nghost-%COMP%]{display:block;overflow:hidden}.btn[_ngcontent-%COMP%]{padding:17px 36px;font-family:var(--brand-label-font);font-weight:600;font-size:18px;letter-spacing:.1em;text-transform:uppercase}.btn.btn-primary[_ngcontent-%COMP%]{background:var(--brand-ember);color:#fff}.btn.btn-primary[_ngcontent-%COMP%]:hover{background:var(--brand-ember-bright);color:#fff}.btn.btn-ghost[_ngcontent-%COMP%]{border:1px solid #3a3128;padding:17px 32px;color:#e4dccf}.cta-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px;justify-content:center}.site-nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:22px clamp(24px,5vw,64px);border-bottom:1px solid var(--brand-border)}.site-nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;gap:clamp(20px,3vw,36px);font-family:var(--brand-label-font);font-size:15px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--brand-nav)}.hero[_ngcontent-%COMP%]{position:relative;min-height:clamp(560px,90vh,760px);display:flex;align-items:center;justify-content:center;text-align:center;background:url(/images/hero-bg.jpg) center/cover no-repeat}.hero[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at center,#14121026,#141210bf 70%,#141210)}.hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%]{position:relative;padding:64px 24px}.hero[_ngcontent-%COMP%]   .hero-kicker[_ngcontent-%COMP%]{margin:0;font-family:var(--brand-label-font);font-size:16px;font-weight:600;letter-spacing:.42em;text-transform:uppercase;color:var(--brand-ember)}.hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{margin:16px 0 0;font-family:var(--brand-heading-font);font-weight:700;font-size:clamp(72px,16vw,190px);line-height:.86;letter-spacing:.01em;text-transform:uppercase}.hero[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]   .amp[_ngcontent-%COMP%]{color:var(--brand-ember)}.hero[_ngcontent-%COMP%]   .hero-tagline[_ngcontent-%COMP%]{font-size:21px;line-height:1.55;color:var(--brand-ash);max-width:660px;margin:30px auto 0;text-wrap:pretty}.hero[_ngcontent-%COMP%]   .cta-row[_ngcontent-%COMP%]{margin-top:44px}.features[_ngcontent-%COMP%]{padding:88px clamp(24px,5vw,64px);border-top:1px solid var(--brand-border);max-width:1280px;margin:0 auto;box-sizing:border-box}.features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:80px 1fr 1.4fr;gap:36px;align-items:baseline;padding:30px 0;border-bottom:1px solid var(--brand-border)}.features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%]:last-child{border-bottom:none}@media(max-width:48rem){.features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%]{grid-template-columns:48px 1fr;gap:16px}.features[_ngcontent-%COMP%]   .feature-row[_ngcontent-%COMP%]   .feature-description[_ngcontent-%COMP%]{grid-column:2}}.features[_ngcontent-%COMP%]   .feature-num[_ngcontent-%COMP%]{font-family:var(--brand-heading-font);font-size:26px;color:var(--brand-ember)}.features[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%]{margin:0;font-family:var(--brand-heading-font);font-weight:500;font-size:clamp(24px,3vw,32px);text-transform:uppercase;letter-spacing:.02em}.features[_ngcontent-%COMP%]   .feature-description[_ngcontent-%COMP%]{margin:0;font-size:17px;line-height:1.6;color:var(--brand-ash-dim)}.studio[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1.2fr;border-top:1px solid var(--brand-border)}@media(max-width:48rem){.studio[_ngcontent-%COMP%]{grid-template-columns:1fr}}.studio[_ngcontent-%COMP%]   .studio-art[_ngcontent-%COMP%]{min-height:340px;background:linear-gradient(180deg,#14121033,#1412108c),url(/images/key-art.png) center/cover no-repeat}.studio[_ngcontent-%COMP%]   .studio-copy[_ngcontent-%COMP%]{padding:72px clamp(24px,5vw,64px);display:flex;flex-direction:column;justify-content:center}.studio[_ngcontent-%COMP%]   .studio-copy[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]{margin:0 0 18px;font-family:var(--brand-label-font);font-size:15px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--brand-gold)}.studio[_ngcontent-%COMP%]   .studio-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:var(--brand-heading-font);font-weight:500;font-size:clamp(34px,4vw,46px);line-height:1.05;text-transform:uppercase}.studio[_ngcontent-%COMP%]   .studio-copy[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:18px;line-height:1.65;color:var(--brand-ash-dim);margin:22px 0 0;max-width:560px}.follow[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;padding:88px clamp(24px,5vw,64px);border-top:1px solid var(--brand-border);background:var(--brand-bg-deep)}.follow[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-family:var(--brand-heading-font);font-weight:600;font-size:clamp(30px,4vw,40px);text-transform:uppercase;letter-spacing:.02em}.follow[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:18px;line-height:1.6;color:var(--brand-ash-dim);max-width:560px;margin:16px 0 0;text-wrap:pretty}.follow[_ngcontent-%COMP%]   .cta-row[_ngcontent-%COMP%]{margin-top:36px}.follow[_ngcontent-%COMP%]   .social-row[_ngcontent-%COMP%]{display:flex;gap:22px;margin-top:32px;font-size:26px;color:var(--brand-nav)}.site-footer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding:30px clamp(24px,5vw,64px);border-top:1px solid var(--brand-border)}.site-footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{font-family:var(--brand-label-font);font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:var(--brand-faint)}.site-footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:26px;font-family:var(--brand-label-font);font-size:15px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--brand-nav)}']})};export{Ea as Landing};
