"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[1399],{13240:(e,i,n)=>{n.d(i,{A:()=>o});var t=n(77991),r=n(70720),s=n(99745);const a=s.default.button.withConfig({displayName:"MultiToggle__ToggleWrapper",componentId:"sc-6dfd833b-0"})(["display:flex;align-items:center;width:",";padding:1px;background:",";border-radius:8px;border:",";cursor:pointer;outline:none;"],(({width:e})=>e??"100%"),(({theme:e})=>e.surface2),(({theme:e})=>"1px solid "+e.surface3)),d=s.default.span.withConfig({displayName:"MultiToggle__ToggleElement",componentId:"sc-6dfd833b-1"})(["display:flex;align-items:center;width:100%;padding:4px 0.5rem;border-radius:6px;justify-content:center;height:100%;background:",";color:",";font-size:",";font-weight:535;white-space:nowrap;:hover{user-select:initial;color:",";}"],(({theme:e,isActive:i})=>i?e.surface1:"none"),(({theme:e,isActive:i})=>i?e.neutral1:e.neutral3),(({fontSize:e})=>e??"1rem"),(({theme:e,isActive:i})=>i?e.neutral2:e.neutral3));function o({currencyA:e,currencyB:i,handleRateToggle:n}){const s=e?.wrapped,o=i?.wrapped,c=s&&o&&s.sortsBefore(o);return s&&o?(0,t.jsx)("div",{style:{width:"fit-content",display:"flex",alignItems:"center"},onClick:n,children:(0,t.jsxs)(a,{width:"fit-content",children:[(0,t.jsx)(d,{isActive:c,fontSize:"12px",children:(0,t.jsx)(r.x6,{id:"J/hVSQ",values:{0:c?e.symbol:i.symbol}})}),(0,t.jsx)(d,{isActive:!c,fontSize:"12px",children:(0,t.jsx)(r.x6,{id:"J/hVSQ",values:{0:c?i.symbol:e.symbol}})})]})}):null}},89245:(e,i,n)=>{n.d(i,{R:()=>x});var t=n(40004),r=n(33642),s=n(56662),a=n(88230),d=n(60319),o=n(15569),c=n(21447);const l=t.gH.from(2).pow(128).sub(1);function x(e,i,n=!1){const t=(0,c.TA)(!1),x=(0,s.DD)(i?t:null,"ownerOf",[i]).result?.[0],p=i?.toHexString(),u=(0,a.Ay)(),[h,m]=(0,d.useState)();return(0,d.useEffect)((()=>{!async function(){if(t&&p&&x)try{const e=await t.callStatic.collect({tokenId:p,recipient:x,amount0Max:l,amount1Max:l},{from:x});m([e.amount0,e.amount1])}catch{}}()}),[t,p,x,u]),e&&h?[r.CurrencyAmount.fromRawAmount(n?e.token0:(0,o.U)(e.token0),h[0].toString()),r.CurrencyAmount.fromRawAmount(n?e.token1:(0,o.U)(e.token1),h[1].toString())]:[void 0,void 0]}},41399:(e,i,n)=>{n.r(i),n.d(i,{PositionPageUnsupportedContent:()=>fe,default:()=>ye});var t=n(77991),r=n(40004),s=n(70720),a=n(57690),d=n(33642),o=n(57061),c=n(95887),l=n(36438),x=n(88716),p=n(84480),u=n(82232),h=n(89142),m=n(12811),g=n(726),j=n(11942),f=n(75910),y=n(63297),w=n(87326);const v=[d.ChainId.MAINNET,d.ChainId.OPTIMISM,d.ChainId.POLYGON,d.ChainId.ARBITRUM_ONE,d.ChainId.CELO];var b=n(84789),R=n(21447),P=n(84193),A=n(95103),S=n(80585),I=n(89245),C=n(56119),D=n(56662),k=n(81540),M=n(60319),N=n(75375),T=n(34012),_=n(39092),B=n(3686),L=n(99745),F=n(72446),q=n(55034),z=n(56791),O=n(63358),E=n(75874),$=n(15569),U=n(99203),W=n(42878),J=n(13240),H=n(59159);const G="data:application/json;base64,";var Q=n(49147),V=n(47399),X=n(88673),Y=n(36993);const Z=(0,L.default)(l.$$).withConfig({displayName:"PositionPage__PositionPageButtonPrimary",componentId:"sc-cab9dae3-0"})(["width:228px;height:40px;font-size:16px;line-height:20px;border-radius:12px;"]),K=L.default.div.withConfig({displayName:"PositionPage__PageWrapper",componentId:"sc-cab9dae3-1"})(["padding:68px 16px 16px 16px;min-width:800px;max-width:960px;@media only screen and (max-width:","){min-width:100%;padding:16px;}@media only screen and (max-width:","){min-width:100%;padding:16px;}"],(({theme:e})=>`${e.breakpoint.md}px`),(({theme:e})=>`${e.breakpoint.sm}px`)),ee=L.default.div.withConfig({displayName:"PositionPage__BadgeText",componentId:"sc-cab9dae3-2"})(["font-weight:535;font-size:14px;color:",";"],(({theme:e})=>e.neutral2)),ie=(0,L.default)((({end:e,...i})=>(0,t.jsx)(F.PR.DeprecatedLabel,{...i}))).withConfig({displayName:"PositionPage__Label",componentId:"sc-cab9dae3-3"})(["display:flex;font-size:16px;justify-content:",";align-items:center;"],(({end:e})=>e?"flex-end":"flex-start")),ne=L.default.span.withConfig({displayName:"PositionPage__ExtentsText",componentId:"sc-cab9dae3-4"})(["color:",";font-size:14px;text-align:center;margin-right:4px;font-weight:535;"],(({theme:e})=>e.neutral2)),te=(0,L.default)(F.PR.DeprecatedMain).withConfig({displayName:"PositionPage__HoverText",componentId:"sc-cab9dae3-5"})(["text-decoration:none;color:",";:hover{color:",";text-decoration:none;}"],(({theme:e})=>e.neutral2),(({theme:e})=>e.neutral1)),re=L.default.span.withConfig({displayName:"PositionPage__DoubleArrow",componentId:"sc-cab9dae3-6"})(["color:",";margin:0 1rem;"],(({theme:e})=>e.neutral3)),se=(0,L.default)(g.JA).withConfig({displayName:"PositionPage__ResponsiveRow",componentId:"sc-cab9dae3-7"})(["@media only screen and (max-width:","){flex-direction:column;align-items:flex-start;row-gap:16px;width:100%;}"],(({theme:e})=>`${e.breakpoint.sm}px`)),ae=(0,L.default)(se).withConfig({displayName:"PositionPage__ActionButtonResponsiveRow",componentId:"sc-cab9dae3-8"})(["width:50%;justify-content:flex-end;@media only screen and (max-width:","){width:100%;flex-direction:row;*{width:100%;}}"],(({theme:e})=>`${e.breakpoint.sm}px`)),de=(0,L.default)(l.m$).withConfig({displayName:"PositionPage__ResponsiveButtonConfirmed",componentId:"sc-cab9dae3-9"})(["border-radius:12px;padding:6px 8px;width:fit-content;font-size:16px;@media only screen and (max-width:","){width:fit-content;}@media only screen and (max-width:","){width:fit-content;}"],(({theme:e})=>`${e.breakpoint.md}px`),(({theme:e})=>`${e.breakpoint.sm}px`)),oe=L.default.div.withConfig({displayName:"PositionPage__NFTGrid",componentId:"sc-cab9dae3-10"})(["display:grid;grid-template:'overlap';min-height:400px;"]),ce=L.default.canvas.withConfig({displayName:"PositionPage__NFTCanvas",componentId:"sc-cab9dae3-11"})(["grid-area:overlap;"]),le=L.default.img.withConfig({displayName:"PositionPage__NFTImage",componentId:"sc-cab9dae3-12"})(["grid-area:overlap;height:400px;z-index:1;"]);function xe({inverted:e,pool:i,currencyQuote:n,currencyBase:r}){const{formatPrice:a}=(0,E.kc)();return i&&n&&r?(0,t.jsx)(x.R4,{padding:"12px",children:(0,t.jsxs)(p.mm,{gap:"sm",justify:"center",children:[(0,t.jsx)(ne,{children:(0,t.jsx)(s.x6,{id:"DWd30U"})}),(0,t.jsx)(F.PR.DeprecatedMediumHeader,{textAlign:"center",children:a({price:e?i.token1Price:i.token0Price,type:E.wl.TokenTx})}),(0,t.jsx)(ne,{children:(0,t.jsx)(s.x6,{id:"7Z4WfS",values:{0:n?.symbol,1:r?.symbol}})})]})}):null}const pe=({children:e,chainId:i,address:n})=>{const r=w.kW[i];return(0,t.jsx)(F.b4,{to:`/tokens/${r}/${n}`,children:e})},ue=({children:e,chainId:i,address:n})=>(0,t.jsx)(F.Gr,{href:(0,X.a)(i,n,X.u.TOKEN),children:e});function he({chainId:e,currency:i}){const n=i?.address;if("number"===typeof e&&n){const r=function(e){return!!e&&v.includes(e)}(e)?pe:ue;return(0,t.jsx)(r,{chainId:e,address:n,children:(0,t.jsxs)(g.Bp,{children:[(0,t.jsx)(m.A,{currency:i,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsxs)(F.PR.DeprecatedMain,{children:[i?.symbol," \u2197"]})]})})}return(0,t.jsxs)(g.Bp,{children:[(0,t.jsx)(m.A,{currency:i,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsx)(F.PR.DeprecatedMain,{children:i?.symbol})]})}function me(e,i,n){const t=i.getContext("2d");if(t){let{width:r,height:s}=e;const a=r/s;s=n,r=Math.round(a*n),i.width=r*devicePixelRatio,i.height=s*devicePixelRatio,i.style.width=r+"px",i.style.height=s+"px",t.scale(devicePixelRatio,devicePixelRatio),t.clearRect(0,0,r,s),t.drawImage(e,0,0,r,s)}}function ge({image:e,height:i}){const[n,r]=(0,M.useState)(!1),s=(0,M.useRef)(null),a=(0,M.useRef)(null);return(0,t.jsxs)(oe,{onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{a.current&&s.current&&me(a.current,s.current,i),r(!1)},children:[(0,t.jsx)(ce,{ref:s}),(0,t.jsx)(le,{ref:a,src:e,hidden:!n,onLoad:()=>{a.current&&s.current&&me(a.current,s.current,i)}})]})}const je=({priceLower:e,priceUpper:i,quote:n,base:t,invert:r})=>({priceUpper:r?e?.invert():i,priceLower:r?i?.invert():e,quote:r?t:n,base:r?n:t});function fe(){return(0,t.jsx)(K,{children:(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,t.jsx)(F.PR.HeadlineLarge,{style:{marginBottom:"8px"},children:(0,t.jsx)(s.x6,{id:"Ij/sE3"})}),(0,t.jsx)(F.PR.BodyPrimary,{style:{marginBottom:"32px"},children:(0,t.jsx)(s.x6,{id:"Jbim1e"})}),(0,t.jsx)(Z,{as:N.N_,to:"/pools",width:"fit-content",children:(0,t.jsx)(s.x6,{id:"7IwSeQ"})})]})})}function ye(){const{chainId:e}=(0,o.useWeb3React)();return(0,w.Gv)(e)?(0,t.jsx)(ve,{}):(0,t.jsx)(fe,{})}const we=(0,L.default)(g.Bp).withConfig({displayName:"PositionPage__PositionLabelRow",componentId:"sc-cab9dae3-13"})({flexWrap:"wrap",gap:8});function ve(){const{tokenId:e}=(0,T.g)(),{chainId:i,account:n,provider:w}=(0,o.useWeb3React)(),v=(0,L.useTheme)(),{formatTickPrice:Z}=(0,E.kc)(),oe=function(e){if(e)try{return r.gH.from(e)}catch(i){return}}(e),{loading:ce,position:le}=(0,C.C)(oe),{token0:pe,token1:ue,fee:me,liquidity:ye,tickLower:ve,tickUpper:be,tokenId:Re}=le||{},Pe=ye?.eq(0),Ae=function(e){const i=(0,R.TA)(),n=(0,M.useMemo)((()=>[e instanceof r.gH?e.toHexString():e?.toString(16)]),[e]),{result:t,error:s,loading:a,valid:d}=(0,D.DD)(i,"tokenURI",n,{...D.bo,gasRequired:3e6});return(0,M.useMemo)((()=>{if(s||!d||!e)return{valid:!1,loading:!1};if(a)return{valid:!0,loading:!0};if(!t)return{valid:!1,loading:!1};const[i]=t;if(!i||!i.startsWith(G))return{valid:!1,loading:!1};try{return{valid:!0,loading:!1,result:JSON.parse(atob(i.slice(G.length)))}}catch(s){return{valid:!1,loading:!1}}}),[s,a,t,e,d])}(oe),Se=(0,b.rd)(pe),Ie=(0,b.rd)(ue),Ce=Se?(0,$.U)(Se):void 0,De=Ie?(0,$.U)(Ie):void 0,[ke,Me]=(0,M.useState)(!1),Ne=(0,k.A)(i).wrapped.symbol,[Te,_e]=(0,A.Q)(Se??void 0,Ie??void 0,me),Be=(0,M.useMemo)((()=>{if(_e&&ye&&"number"===typeof ve&&"number"===typeof be)return new a.Position({pool:_e,liquidity:ye.toString(),tickLower:ve,tickUpper:be})}),[ye,_e,ve,be]),Le=(0,P.A)(me,ve,be),Fe=(0,W.s)(Be),[qe,ze]=(0,M.useState)(!1),{priceLower:Oe,priceUpper:Ee,base:$e}=je({priceLower:Fe.priceLower,priceUpper:Fe.priceUpper,quote:Fe.quote,base:Fe.base,invert:qe}),Ue=Ie?$e?.equals(Ie):void 0,We=Ue?Ce:De,Je=Ue?De:Ce,He=(0,M.useMemo)((()=>Oe&&_e&&Ee?function(e,i,n){try{if(!i.greaterThan(e))return 100;if(!i.lessThan(n))return 0;const t=Number.parseFloat(e.toSignificant(15)),r=Number.parseFloat(n.toSignificant(15)),s=Number.parseFloat(i.toSignificant(15)),a=Math.floor(1/((Math.sqrt(t*r)-Math.sqrt(r*s))/(s-Math.sqrt(r*s))+1)*100);if(a<0||a>100)throw Error("Out of range");return a}catch{return}}(Ue?Ee.invert():Oe,_e.token0Price,Ue?Oe.invert():Ee):void 0),[Ue,_e,Oe,Ee]),[Ge,Qe]=(0,I.R)(_e??void 0,le?.tokenId,ke),Ve=_e?ke?_e.token0:(0,$.U)(_e.token0):void 0,Xe=_e?ke?_e.token1:(0,$.U)(_e.token1):void 0,[Ye,Ze]=(0,M.useState)(!1),[Ke,ei]=(0,M.useState)(null),ii=(0,B.tp)(Ke??void 0),[ni,ti]=(0,M.useState)(!1),ri=(0,S.Ay)(Se??void 0),si=(0,S.Ay)(Ie??void 0),ai=(0,M.useMemo)((()=>{if(!ri||!si||!Ge||!Qe)return null;const e=Ge?.wrapped,i=Qe?.wrapped;if(!e||!i)return null;const n=ri.quote(e),t=si.quote(i);return n.add(t)}),[ri,si,Ge,Qe]),di=(0,M.useMemo)((()=>{if(!ri||!si||!Be)return null;const e=ri.quote(Be.amount0),i=si.quote(Be.amount1);return e.add(i)}),[ri,si,Be]),oi=(0,B.OQ)(),ci=(0,R.TA)(),li=(0,M.useCallback)((async()=>{if(!Ve||!Xe||!i||!ci||!n||!Re||!w)return;Ze(!0);const{calldata:e,value:t}=a.NonfungiblePositionManager.collectCallParameters({tokenId:Re.toString(),expectedCurrencyOwed0:Ge??d.CurrencyAmount.fromRawAmount(Ve,0),expectedCurrencyOwed1:Qe??d.CurrencyAmount.fromRawAmount(Xe,0),recipient:n}),r={to:ci.address,data:e,value:t},s=await w.getSigner().getChainId();if(i!==s)throw new z.$c;w.getSigner().estimateGas(r).then((e=>{const i={...r,gasLimit:(0,V.K)(e)};return w.getSigner().sendTransaction(i).then((e=>{ei(e.hash),Ze(!1),oi(e,{type:Q.D.COLLECT_FEES,currencyId0:(0,q.V)(Ve),currencyId1:(0,q.V)(Xe),expectedCurrencyOwed0:Ge?.quotient.toString()??d.CurrencyAmount.fromRawAmount(Ve,0).toExact(),expectedCurrencyOwed1:Qe?.quotient.toString()??d.CurrencyAmount.fromRawAmount(Xe,0).toExact()})}))})).catch((e=>{Ze(!1),console.error(e)}))}),[i,Ge,Qe,Ve,Xe,ci,n,Re,oi,w]),xi=(0,D.DD)(Re?ci:null,"ownerOf",[Re]).result?.[0],pi=xi===n||le?.operator===n,ui=Ue?Ge:Qe,hi=Ue?Qe:Ge,mi=_e&&"number"===typeof ve?_e.tickCurrent<ve:void 0,gi=_e&&"number"===typeof be?_e.tickCurrent>=be:void 0,ji="boolean"===typeof mi&&"boolean"===typeof gi&&(!mi&&!gi);function fi(){return(0,t.jsxs)(p.mm,{gap:"md",style:{marginTop:"20px"},children:[(0,t.jsx)(x.R4,{padding:"12px 16px",children:(0,t.jsxs)(p.mm,{gap:"md",children:[(0,t.jsxs)(g.JA,{children:[(0,t.jsxs)(g.Bp,{children:[(0,t.jsx)(m.A,{currency:ui?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsx)(F.PR.DeprecatedMain,{children:ui?(0,O.N)(ui,4):"-"})]}),(0,t.jsx)(F.PR.DeprecatedMain,{children:ui?.currency?.symbol})]}),(0,t.jsxs)(g.JA,{children:[(0,t.jsxs)(g.Bp,{children:[(0,t.jsx)(m.A,{currency:hi?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsx)(F.PR.DeprecatedMain,{children:hi?(0,O.N)(hi,4):"-"})]}),(0,t.jsx)(F.PR.DeprecatedMain,{children:hi?.currency?.symbol})]})]})}),(0,t.jsx)(F.PR.DeprecatedItalic,{children:(0,t.jsx)(s.x6,{id:"R8aNfS"})}),(0,t.jsx)(l.$$,{"data-testid":"modal-collect-fees-button",onClick:li,children:(0,t.jsx)(s.x6,{id:"vR1m9d"})})]})}const yi=Boolean(pi&&(Ge?.greaterThan(0)||Qe?.greaterThan(0))&&Ce&&De&&(Ce.isNative||De.isNative)&&!Ke);return le||ce?ce||Te===A.S.LOADING||!me?(0,t.jsxs)(Y.ar,{children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(K,{children:[(0,t.jsx)(y.A,{isOpen:ni,onDismiss:()=>ti(!1),attemptingTxn:Ye,hash:Ke??"",reviewContent:()=>(0,t.jsx)(y.Y,{title:(0,t.jsx)(s.x6,{id:"tu/fxg"}),onDismiss:()=>ti(!1),topContent:fi}),pendingText:(0,t.jsx)(s.x6,{id:"SGG5Oz"})}),(0,t.jsxs)(p.mm,{gap:"md",children:[(0,t.jsxs)(p.mm,{gap:"sm",children:[(0,t.jsx)(N.N_,{"data-cy":"visit-pool",style:{textDecoration:"none",width:"fit-content",marginBottom:"0.5rem"},to:"/pools",children:(0,t.jsx)(te,{children:(0,t.jsx)(s.x6,{id:"sYYMH3"})})}),(0,t.jsxs)(se,{children:[(0,t.jsxs)(we,{children:[(0,t.jsx)(u.A,{currency0:Je,currency1:We,size:24,margin:!0}),(0,t.jsxs)(F.PR.DeprecatedLabel,{fontSize:"24px",mr:"10px",children:["\xa0",We?.symbol,"\xa0/\xa0",Je?.symbol]}),(0,t.jsx)(c.A,{style:{marginRight:"8px"},children:(0,t.jsx)(ee,{children:(0,t.jsx)(s.x6,{id:"hbO8db",values:{0:new d.Percent(me,1e6).toSignificant()}})})}),(0,t.jsx)(U.A,{removed:Pe,inRange:ji})]}),pi&&(0,t.jsxs)(ae,{children:[Ce&&De&&me&&Re?(0,t.jsx)(l.EA,{as:N.N_,to:`/increase/${(0,q.V)(Ce)}/${(0,q.V)(De)}/${me}/${Re}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",style:{marginRight:"8px"},children:(0,t.jsx)(s.x6,{id:"3pgmAj"})}):null,Re&&!Pe?(0,t.jsx)(l.Au,{as:N.N_,to:`/remove/${Re}`,padding:"6px 8px",width:"fit-content",$borderRadius:"12px",children:(0,t.jsx)(s.x6,{id:"cJtosk"})}):null]})]})]}),(0,t.jsxs)(se,{align:"flex-start",children:[(0,t.jsx)(F.QZ,{style:{height:"100%",marginRight:12},children:"result"in Ae?(0,t.jsxs)(x.RR,{width:"100%",height:"100%",style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around",minWidth:"340px"},children:[(0,t.jsx)(ge,{image:Ae.result.image,height:400}),"number"===typeof i&&xi&&!pi?(0,t.jsx)(F.Gr,{href:(0,X.a)(i,xi,X.u.ADDRESS),children:(0,t.jsx)(s.x6,{id:"LtI9AS"})}):null]}):(0,t.jsx)(x.RR,{width:"100%",height:"100%",style:{minWidth:"340px",position:"relative",overflow:"hidden"},children:(0,t.jsx)(h.qp,{})})}),(0,t.jsxs)(p.mm,{gap:"sm",style:{width:"100%",height:"100%"},children:[(0,t.jsx)(x.RR,{children:(0,t.jsxs)(p.mm,{gap:"md",style:{width:"100%"},children:[(0,t.jsxs)(p.mm,{gap:"md",children:[(0,t.jsx)(ie,{children:(0,t.jsx)(s.x6,{id:"6y2TB3"})}),di?.greaterThan(new d.Fraction(1,100))?(0,t.jsx)(F.PR.DeprecatedLargeHeader,{fontSize:"36px",fontWeight:535,children:(0,t.jsx)(s.x6,{id:"8F8jpm",values:{0:di.toFixed(2,{groupSeparator:","})}})}):(0,t.jsx)(F.PR.DeprecatedLargeHeader,{color:v.neutral1,fontSize:"36px",fontWeight:535,children:(0,t.jsx)(s.x6,{id:"5qs2w+"})})]}),(0,t.jsx)(x.R4,{padding:"12px 16px",children:(0,t.jsxs)(p.mm,{gap:"md",children:[(0,t.jsxs)(g.JA,{children:[(0,t.jsx)(he,{chainId:i,currency:We}),(0,t.jsxs)(g.Bp,{children:[(0,t.jsx)(F.PR.DeprecatedMain,{children:Ue?Be?.amount0.toSignificant(4):Be?.amount1.toSignificant(4)}),"number"!==typeof He||Pe?null:(0,t.jsx)(c.A,{style:{marginLeft:"10px"},children:(0,t.jsx)(ee,{children:(0,t.jsx)(s.x6,{id:"hbO8db",values:{0:Ue?He:100-He}})})})]})]}),(0,t.jsxs)(g.JA,{children:[(0,t.jsx)(he,{chainId:i,currency:Je}),(0,t.jsxs)(g.Bp,{children:[(0,t.jsx)(F.PR.DeprecatedMain,{children:Ue?Be?.amount1.toSignificant(4):Be?.amount0.toSignificant(4)}),"number"!==typeof He||Pe?null:(0,t.jsx)(c.A,{style:{marginLeft:"10px"},children:(0,t.jsx)(ee,{children:(0,t.jsx)(s.x6,{id:"hbO8db",values:{0:Ue?100-He:He}})})})]})]})]})})]})}),(0,t.jsx)(x.RR,{children:(0,t.jsxs)(p.mm,{gap:"md",style:{width:"100%"},children:[(0,t.jsx)(p.mm,{gap:"md",children:(0,t.jsxs)(g.JA,{style:{alignItems:"flex-start"},children:[(0,t.jsxs)(p.mm,{gap:"md",children:[(0,t.jsx)(ie,{children:(0,t.jsx)(s.x6,{id:"XCqY8/"})}),ai?.greaterThan(new d.Fraction(1,100))?(0,t.jsx)(F.PR.DeprecatedLargeHeader,{color:v.success,fontSize:"36px",fontWeight:535,children:(0,t.jsx)(s.x6,{id:"8F8jpm",values:{0:ai.toFixed(2,{groupSeparator:","})}})}):(0,t.jsx)(F.PR.DeprecatedLargeHeader,{color:v.neutral1,fontSize:"36px",fontWeight:535,children:(0,t.jsx)(s.x6,{id:"5qs2w+"})})]}),pi&&(Ge?.greaterThan(0)||Qe?.greaterThan(0)||Ke)?(0,t.jsx)(de,{"data-testid":"collect-fees-button",disabled:Ye||!!Ke,confirmed:!!Ke&&!ii,width:"fit-content",style:{borderRadius:"12px"},padding:"4px 8px",onClick:()=>ti(!0),children:Ke&&!ii?(0,t.jsx)(F.PR.DeprecatedMain,{color:v.neutral1,children:(0,t.jsx)(s.x6,{id:"Jpq3gO"})}):ii||Ye?(0,t.jsxs)(F.PR.DeprecatedMain,{color:v.neutral1,children:[" ",(0,t.jsx)(j.nv,{children:(0,t.jsx)(s.x6,{id:"1RB9kv"})})]}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(F.PR.DeprecatedMain,{color:v.white,children:(0,t.jsx)(s.x6,{id:"h5pjuM"})})})}):null]})}),(0,t.jsx)(x.R4,{padding:"12px 16px",children:(0,t.jsxs)(p.mm,{gap:"md",children:[(0,t.jsxs)(g.JA,{children:[(0,t.jsxs)(g.Bp,{children:[(0,t.jsx)(m.A,{currency:ui?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsx)(F.PR.DeprecatedMain,{children:ui?.currency?.symbol})]}),(0,t.jsx)(g.Bp,{children:(0,t.jsx)(F.PR.DeprecatedMain,{children:ui?(0,O.N)(ui,4):"-"})})]}),(0,t.jsxs)(g.JA,{children:[(0,t.jsxs)(g.Bp,{children:[(0,t.jsx)(m.A,{currency:hi?.currency,size:"20px",style:{marginRight:"0.5rem"}}),(0,t.jsx)(F.PR.DeprecatedMain,{children:hi?.currency?.symbol})]}),(0,t.jsx)(g.Bp,{children:(0,t.jsx)(F.PR.DeprecatedMain,{children:hi?(0,O.N)(hi,4):"-"})})]})]})}),yi&&(0,t.jsx)(p.mm,{gap:"md",children:(0,t.jsxs)(g.JA,{children:[(0,t.jsx)(F.PR.DeprecatedMain,{children:(0,t.jsx)(s.x6,{id:"oCijuv",values:{nativeWrappedSymbol:Ne}})}),(0,t.jsx)(f.A,{id:"receive-as-weth",isActive:ke,toggle:()=>Me((e=>!e))})]})})]})})]})]}),(0,t.jsx)(x.RR,{children:(0,t.jsxs)(p.mm,{gap:"md",children:[(0,t.jsxs)(g.JA,{children:[(0,t.jsxs)(g.Bp,{children:[(0,t.jsx)(ie,{display:"flex",style:{marginRight:"12px"},children:(0,t.jsx)(s.x6,{id:"7Bu2+f"})}),(0,t.jsx)(F.Av,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(U.A,{removed:Pe,inRange:ji}),(0,t.jsx)("span",{style:{width:"8px"}})]})})]}),(0,t.jsx)(g.Bp,{children:Je&&We&&(0,t.jsx)(J.A,{currencyA:Je,currencyB:We,handleRateToggle:()=>ze(!qe)})})]}),(0,t.jsxs)(g.JA,{children:[(0,t.jsx)(x.R4,{padding:"12px",width:"100%",children:(0,t.jsxs)(p.mm,{gap:"sm",justify:"center",children:[(0,t.jsx)(ne,{children:(0,t.jsx)(s.x6,{id:"EQs1sJ"})}),(0,t.jsx)(F.PR.DeprecatedMediumHeader,{textAlign:"center",children:Z({price:Oe,atLimit:Le,direction:_.zm.LOWER,numberType:E.wl.TokenTx})}),(0,t.jsxs)(ne,{children:[" ",(0,t.jsx)(s.x6,{id:"7Z4WfS",values:{0:We?.symbol,1:Je?.symbol}})]}),ji&&(0,t.jsx)(F.PR.DeprecatedSmall,{color:v.neutral3,children:(0,t.jsx)(s.x6,{id:"NxMldE",values:{0:Je?.symbol}})})]})}),(0,t.jsx)(re,{children:"\u27f7"}),(0,t.jsx)(x.R4,{padding:"12px",width:"100%",children:(0,t.jsxs)(p.mm,{gap:"sm",justify:"center",children:[(0,t.jsx)(ne,{children:(0,t.jsx)(s.x6,{id:"5etEUX"})}),(0,t.jsx)(F.PR.DeprecatedMediumHeader,{textAlign:"center",children:Z({price:Ee,atLimit:Le,direction:_.zm.UPPER,numberType:E.wl.TokenTx})}),(0,t.jsxs)(ne,{children:[" ",(0,t.jsx)(s.x6,{id:"7Z4WfS",values:{0:We?.symbol,1:Je?.symbol}})]}),ji&&(0,t.jsx)(F.PR.DeprecatedSmall,{color:v.neutral3,children:(0,t.jsx)(s.x6,{id:"NxMldE",values:{0:We?.symbol}})})]})})]}),(0,t.jsx)(xe,{inverted:Ue,pool:_e,currencyQuote:We,currencyBase:Je})]})})]})]}),(0,t.jsx)(H.j,{})]}):(0,t.jsx)(fe,{})}},63358:(e,i,n)=>{n.d(i,{N:()=>o});var t=n(33642),r=n(63077),s=n(31134),a=n.n(s);function d({number:e,locale:i,sigFigs:n,fixedDecimals:t,options:s={}}){let a,d;if(a=!i||i&&!r.dI.includes(i)?r.Xn:[i,r.Xn],s.minimumFractionDigits=s.minimumFractionDigits||t,s.maximumFractionDigits=s.maximumFractionDigits||t,s.maximumSignificantDigits=s.maximumSignificantDigits||t?void 0:n,"number"===typeof e)d=t?parseFloat(e.toFixed(t)):e;else{const i=parseFloat(e.toSignificant(n));d=t?parseFloat(i.toFixed(t)):i}return d.toLocaleString(a,s)}function o(e,i,n=r.Xn,s){return e?a().equal(e.quotient,a().BigInt(0))?"0":e.divide(e.decimalScale).lessThan(new t.Fraction(1,1e5))?`<${d({number:1e-5,locale:n})}`:d({number:e,locale:n,sigFigs:i,fixedDecimals:s}):"-"}}}]);