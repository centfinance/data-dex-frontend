"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[8201],{74253:(S,C,e)=>{e.d(C,{Ay:()=>H,SF:()=>v,tA:()=>G});var t=e(77991),s=e(70720),x=e(33642),l=e(57061),P=e.n(l),h=e(31134),g=e.n(h),j=e(32550),R=e(60319),B=e(1116),u=e(41029),m=e(75375),i=e(35442),L=e(99745),f=e(72446),E=e(51304),K=e(85419),n=e(38335),d=e(48791),o=e(55034),r=e(15569),a=e(36438),p=e(88716),O=e(84480),b=e(82232),U=e(13e3),A=e(12811),M=e(726),k=e(11942);const v=(0,L.default)(M.JA).withConfig({displayName:"PositionCard__FixedHeightRow",componentId:"sc-eba04bae-0"})(["height:24px;"]),X=(0,L.default)(p.R4).withConfig({displayName:"PositionCard__StyledPositionCard",componentId:"sc-eba04bae-1"})(["border:none;background:",";position:relative;overflow:hidden;"],({theme:c,bgColor:w})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,j.No)(.8,w)} 0%, ${c.surface2} 100%) `);function G({pair:c,showUnwrapped:w=!1,border:W}){const{account:N}=(0,l.useWeb3React)(),y=w?c.token0:(0,r.U)(c.token0),T=w?c.token1:(0,r.U)(c.token1),[z,V]=(0,R.useState)(!1),_=(0,d.nC)(N??void 0,c.liquidityToken),D=(0,n.P)(c.liquidityToken),I=_&&D&&g().greaterThanOrEqual(D.quotient,_.quotient)?new x.Percent(_.quotient,D.quotient):void 0,[F,$]=c&&D&&_&&g().greaterThanOrEqual(D.quotient,_.quotient)?[c.getLiquidityValue(c.token0,D,_,!1),c.getLiquidityValue(c.token1,D,_,!1)]:[void 0,void 0];return(0,t.jsx)(t.Fragment,{children:_&&g().greaterThan(_.quotient,g().BigInt(0))?(0,t.jsx)(p._c,{border:W,children:(0,t.jsxs)(O.mm,{gap:"md",children:[(0,t.jsx)(v,{children:(0,t.jsx)(M.Bp,{children:(0,t.jsx)(i.EY,{fontWeight:535,fontSize:16,children:(0,t.jsx)(s.x6,{id:"VdLEAW"})})})}),(0,t.jsxs)(v,{onClick:()=>V(!z),children:[(0,t.jsxs)(M.Bp,{children:[(0,t.jsx)(b.A,{currency0:y,currency1:T,margin:!0,size:20}),(0,t.jsxs)(i.EY,{fontWeight:535,fontSize:20,children:[y.symbol,"/",T.symbol]})]}),(0,t.jsx)(M.Bp,{children:(0,t.jsx)(i.EY,{fontWeight:535,fontSize:20,children:_?_.toSignificant(4):"-"})})]}),(0,t.jsxs)(O.mm,{gap:"4px",children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(i.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.x6,{id:"wcXFoV"})}),(0,t.jsx)(i.EY,{fontSize:16,fontWeight:535,children:I?I.toFixed(6)+"%":"-"})]}),(0,t.jsxs)(v,{children:[(0,t.jsxs)(i.EY,{fontSize:16,fontWeight:535,children:[y.symbol,":"]}),F?(0,t.jsx)(M.Bp,{children:(0,t.jsx)(i.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:F?.toSignificant(6)})}):"-"]}),(0,t.jsxs)(v,{children:[(0,t.jsxs)(i.EY,{fontSize:16,fontWeight:535,children:[T.symbol,":"]}),$?(0,t.jsx)(M.Bp,{children:(0,t.jsx)(i.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:$?.toSignificant(6)})}):"-"]})]})]})}):(0,t.jsx)(p.R4,{children:(0,t.jsxs)(f.PR.DeprecatedSubHeader,{style:{textAlign:"center"},children:[(0,t.jsx)("span",{role:"img","aria-label":"wizard-icon",children:"\u2B50\uFE0F"})," ",(0,t.jsx)(s.x6,{id:"Z4Vy7Z"})," "]})})})}function H({pair:c,border:w,stakedBalance:W}){const{account:N}=(0,l.useWeb3React)(),y=(0,r.U)(c.token0),T=(0,r.U)(c.token1),[z,V]=(0,R.useState)(!1),_=(0,d.nC)(N??void 0,c.liquidityToken),D=(0,n.P)(c.liquidityToken),I=W?_?.add(W):_,F=I&&D&&g().greaterThanOrEqual(D.quotient,I.quotient)?new x.Percent(I.quotient,D.quotient):void 0,[$,Y]=c&&D&&I&&g().greaterThanOrEqual(D.quotient,I.quotient)?[c.getLiquidityValue(c.token0,D,I,!1),c.getLiquidityValue(c.token1,D,I,!1)]:[void 0,void 0],J=(0,K.b)(c?.token0);return(0,t.jsxs)(X,{border:w,bgColor:J,children:[(0,t.jsx)(U.jK,{}),(0,t.jsxs)(O.mm,{gap:"md",children:[(0,t.jsxs)(v,{children:[(0,t.jsxs)(M.eF,{gap:"8px",style:{marginLeft:"8px"},children:[(0,t.jsx)(b.A,{currency0:y,currency1:T,size:20}),(0,t.jsx)(i.EY,{fontWeight:535,fontSize:20,children:!y||!T?(0,t.jsx)(k.nv,{children:(0,t.jsx)(s.x6,{id:"yQE2r9"})}):`${y.symbol}/${T.symbol}`})]}),(0,t.jsx)(M.Bp,{gap:"8px",style:{marginRight:"4px"},children:(0,t.jsx)(a.Wv,{padding:"6px 8px",$borderRadius:"12px",width:"100%",onClick:()=>V(!z),children:z?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.x6,{id:"wckWOP"}),(0,t.jsx)(B.A,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.x6,{id:"wckWOP"}),(0,t.jsx)(u.A,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]})})})]}),z&&(0,t.jsxs)(O.mm,{gap:"sm",children:[(0,t.jsxs)(v,{children:[(0,t.jsx)(i.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.x6,{id:"EJ2nlN"})}),(0,t.jsx)(i.EY,{fontSize:16,fontWeight:535,children:I?I.toSignificant(4):"-"})]}),W&&(0,t.jsxs)(v,{children:[(0,t.jsx)(i.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.x6,{id:"kOe6n7"})}),(0,t.jsx)(i.EY,{fontSize:16,fontWeight:535,children:W.toSignificant(4)})]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(M.Bp,{children:(0,t.jsx)(i.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.x6,{id:"I4bzgz",values:{0:y.symbol}})})}),$?(0,t.jsxs)(M.Bp,{children:[(0,t.jsx)(i.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:$?.toSignificant(6)}),(0,t.jsx)(A.A,{size:"20px",style:{marginLeft:"8px"},currency:y})]}):"-"]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(M.Bp,{children:(0,t.jsx)(i.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.x6,{id:"I4bzgz",values:{0:T.symbol}})})}),Y?(0,t.jsxs)(M.Bp,{children:[(0,t.jsx)(i.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:Y?.toSignificant(6)}),(0,t.jsx)(A.A,{size:"20px",style:{marginLeft:"8px"},currency:T})]}):"-"]}),(0,t.jsxs)(v,{children:[(0,t.jsx)(i.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(s.x6,{id:"wcXFoV"})}),(0,t.jsx)(i.EY,{fontSize:16,fontWeight:535,children:F?(0,t.jsx)(s.x6,{id:"70DOjk",values:{0:F.toFixed(2)==="0.00"?"<0.01":F.toFixed(2)}}):"-"})]}),(0,t.jsx)(a.nR,{padding:"8px",$borderRadius:"8px",children:(0,t.jsx)(f.Gr,{style:{width:"100%",textAlign:"center"},href:`https://v2.info.uniswap.org/account/${N}`,children:(0,t.jsx)(s.x6,{id:"DdWFnk",components:{0:(0,t.jsx)("span",{style:{fontSize:"11px"}})}})})}),_&&g().greaterThan(_.quotient,E.CL)&&(0,t.jsxs)(M.JA,{marginTop:"10px",children:[(0,t.jsx)(a.$$,{padding:"8px",$borderRadius:"8px",as:m.N_,to:`/migrate/v2/${c.liquidityToken.address}`,width:"32%",children:(0,t.jsx)(s.x6,{id:"y5rS9U"})}),(0,t.jsx)(a.$$,{padding:"8px",$borderRadius:"8px",as:m.N_,to:`/add/v2/${(0,o.V)(y)}/${(0,o.V)(T)}`,width:"32%",children:(0,t.jsx)(s.x6,{id:"m16xKo"})}),(0,t.jsx)(a.$$,{padding:"8px",$borderRadius:"8px",as:m.N_,width:"32%",to:`/remove/v2/${(0,o.V)(y)}/${(0,o.V)(T)}`,children:(0,t.jsx)(s.x6,{id:"t/YqKh"})})]}),W&&g().greaterThan(W.quotient,E.CL)&&(0,t.jsx)(a.$$,{padding:"8px",$borderRadius:"8px",as:m.N_,to:`/uni/${(0,o.V)(y)}/${(0,o.V)(T)}`,width:"100%",children:(0,t.jsx)(s.x6,{id:"wD6KPn"})})]})]})]})}},43059:(S,C,e)=>{e.d(C,{O:()=>g});var t=e(77991),s=e(70720),x=e(84480),l=e(99745),P=e(72446);const h=l.default.div.withConfig({displayName:"V2Unsupported__TextWrapper",componentId:"sc-bf87c185-0"})(["border:1px solid ",";padding:16px 12px;border-radius:12px;display:flex;flex-direction:column;justify-content:center;align-items:center;"],({theme:j})=>j.neutral3);function g(){return(0,t.jsx)(x.mm,{gap:"lg",justify:"center",children:(0,t.jsx)(x.mm,{gap:"md",style:{width:"100%"},children:(0,t.jsx)(h,{children:(0,t.jsx)(P.PR.BodySecondary,{color:"neutral2",textAlign:"center",children:(0,t.jsx)(s.x6,{id:"r7a5gC"})})})})})}},13e3:(S,C,e)=>{e.d(C,{qC:()=>R,LR:()=>h,jK:()=>g,yj:()=>j,pL:()=>P});var t=e(99745);const s=e.p+"static/media/big_unicorn.90ddcbf00b3ff1ad4495.png",x=e.p+"static/media/noise.3c7efafc83614205bd1a.png";var l=e(84480);const P=(0,t.default)(l.mm).withConfig({displayName:"styled__DataCard",componentId:"sc-3de63375-0"})(["background:radial-gradient(76.02% 75.41% at 1.84% 0%,#000000 0%,#2172e5 100%);border-radius:12px;width:100%;position:relative;overflow:hidden;"]),h=t.default.span.withConfig({displayName:"styled__CardBGImage",componentId:"sc-3de63375-1"})(["background:url(",");width:1000px;height:600px;position:absolute;border-radius:12px;opacity:0.4;top:-100px;left:-100px;transform:rotate(-15deg);user-select:none;",""],s,({desaturate:B})=>B&&"filter: saturate(0)"),g=t.default.span.withConfig({displayName:"styled__CardNoise",componentId:"sc-3de63375-2"})(["background:url(",");background-size:cover;mix-blend-mode:overlay;border-radius:12px;width:100%;height:100%;opacity:0.15;position:absolute;top:0;left:0;user-select:none;"],x),j=(0,t.default)(l.mm).withConfig({displayName:"styled__CardSection",componentId:"sc-3de63375-3"})(["padding:1rem;z-index:1;opacity:",";"],({disabled:B})=>B&&"0.4"),R=t.default.div.withConfig({displayName:"styled__Break",componentId:"sc-3de63375-4"})(["width:100%;background-color:rgba(255,255,255,0.2);height:1px;"])},85419:(S,C,e)=>{e.d(C,{b:()=>K});var t=e(33642);const s=[35,43,43],x={"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png":[240,146,65],"https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744":[240,146,65],"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png":[250,176,27],"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png":[230,53,140],"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x4Fabb145d64652a948d72533023f6E7A623C7C53/logo.png":[239,186,9],"https://s2.coinmarketcap.com/static/img/coins/64x64/26984.png":[41,161,241],"https://token-icons.s3.amazonaws.com/eth.png":[73,112,213],"https://assets.coingecko.com/coins/images/30323/large/hpos10i_logo_casino_night-dexview.png?1684117567":[222,49,16],"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x6982508145454Ce325dDbE47a25d4ec3d2311933/logo.png":[62,174,20],"https://s2.coinmarketcap.com/static/img/coins/64x64/25436.png":[74,10,79],"https://assets.coingecko.com/coins/images/30462/small/logonoline_%281%29.png?1687510315":[74,10,79],"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png":[0,102,217],"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39/logo.png":[249,63,140],"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x1ce270557C1f68Cfb577b856766310Bf8B47FD9C/logo.png":[169,109,255],"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1/logo.png":[41,161,241],"https://s2.coinmarketcap.com/static/img/coins/64x64/25422.png":[232,143,0],"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png":[169,109,255],"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA35923162C49cF95e6BF26623385eb431ad920D3/logo.png":[189,110,41],"https://assets.coingecko.com/coins/images/29852/large/photo_2023-04-18_14-25-28.jpg?1681799160":[41,161,241],"https://assets.coingecko.com/coins/images/30243/large/1111.png?1683692033":[232,143,0],"https://assets.coingecko.com/coins/images/30604/large/Logo2.png?1685522119":[41,89,217],"https://assets.coingecko.com/coins/images/19060/large/ANGLE_Token-light.png?1666774221":[255,85,85],"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x4d224452801ACEd8B2F0aebE155379bb5D594381/logo.png":[5,74,169],"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd/logo.png":[0,164,189],"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26/logo.png":[5,74,169],"https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xD33526068D116cE69F19A9ee46F0bd304F21A51f/logo.png":[255,123,79]};var l=e(97933),P=e(32550),h=e(60319),g=e(96148),j=e(49426),R=e(49278),B=e.n(R),u=e(7507);async function m(n,d=!1){if(!n)return s;if(n in x)return x[n];try{const o=await fetch(n),r=await o.arrayBuffer(),a=j.Buffer.from(r),p=o.headers.get("content-type")??"";return i(a,p,d)}catch{return s}}function i(n,d,o){let r;switch(d){case"image/png":{r=u.A.load(n).decode();break}case"image/jpeg":{r=B().decode(n,{useTArray:!0}).data;break}default:return s}const a=r.length/4;let p=0,O=0,b=0,U=0;for(let A=0;A<a;A++){if(r[A*4+3]===0){p++;continue}O+=r[A*4],b+=r[A*4+1],U+=r[A*4+2]}return O=Math.floor(O/(a-p)),b=Math.floor(b/(a-p)),U=Math.floor(U/(a-p)),o&&Math.sqrt(Math.pow(O-255,2)+Math.pow(b-255,2)+Math.pow(U-255,2))<50?s:[O,b,U]}function L(n){return`https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/${n}/logo.png`}async function f(n,d){if(!(n instanceof g.X))return null;const o=n;let r=null;try{if(d){const a=await m(d);r=a===s?null:E(a)}if(!r&&o.logoURI){const a=await m(o.logoURI);r=a===s?null:E(a)}if(!r&&n.chainId===t.ChainId.MAINNET){const a=await m(L(o.address));r=a===s?null:E(a)}return r}catch{return console.warn(`Unable to load logoURI (${n.symbol}): ${d}, ${o.logoURI}`),null}}function E([n,d,o]){return(0,P.Qh)({red:n,green:d,blue:o})}function K(n){const[d,o]=(0,h.useState)("#2172E5"),[r]=(0,l.A)(n?.address,n?.chainId,n?.isNative);return(0,h.useEffect)(()=>{let a=!1;return n&&f(n,r).then(p=>{!a&&p!==null&&o(p)}),()=>{a=!0,o("#2172E5")}},[r,n]),d}},40156:(S,C,e)=>{e.d(C,{S:()=>l});var t=e(57061),s=e.n(t),x=e(87326);function l(){const{chainId:P}=(0,t.useWeb3React)();return P&&x.vC.includes(P)}},38335:(S,C,e)=>{e.d(C,{P:()=>P});var t=e(33642),s=e(56662),x=e(60319),l=e(21447);function P(h){const g=(0,l.dV)(h?.isToken?h.address:void 0,!1),j=(0,s.DD)(g,"totalSupply")?.result?.[0]?.toString();return(0,x.useMemo)(()=>h?.isToken&&j?t.CurrencyAmount.fromRawAmount(h,j):void 0,[h,j])}},39363:(S,C,e)=>{e.d(C,{CN:()=>j,ek:()=>B,hM:()=>R});var t=e(33161),s=e(91385),x=e(59126),l=e(33642),P=e(56662),h=e(60319);const g=new t.KA(s.HV);var j=function(u){return u[u.LOADING=0]="LOADING",u[u.NOT_EXISTS=1]="NOT_EXISTS",u[u.EXISTS=2]="EXISTS",u[u.INVALID=3]="INVALID",u}({});function R(u){const m=(0,h.useMemo)(()=>u.map(([f,E])=>[f?.wrapped,E?.wrapped]),[u]),i=(0,h.useMemo)(()=>m.map(([f,E])=>f&&E&&f.chainId===E.chainId&&!f.equals(E)&&l.V2_FACTORY_ADDRESSES[f.chainId]?(0,x.computePairAddress)({factoryAddress:l.V2_FACTORY_ADDRESSES[f.chainId],tokenA:f,tokenB:E}):void 0),[m]),L=(0,P._l)(i,g,"getReserves");return(0,h.useMemo)(()=>L.map((f,E)=>{const{result:K,loading:n}=f,d=m[E][0],o=m[E][1];if(n)return[0,null];if(!d||!o||d.equals(o))return[3,null];if(!K)return[1,null];const{reserve0:r,reserve1:a}=K,[p,O]=d.sortsBefore(o)?[d,o]:[o,d];return[2,new x.Pair(l.CurrencyAmount.fromRawAmount(p,r.toString()),l.CurrencyAmount.fromRawAmount(O,a.toString()))]}),[L,m])}function B(u,m){const i=(0,h.useMemo)(()=>[[u,m]],[u,m]);return R(i)[0]}}}]);