"use strict";(self.webpackChunk_vanadex_datadex=self.webpackChunk_vanadex_datadex||[]).push([[290],{10278:(e,n,i)=>{i.d(n,{A:()=>a});var t=i(54674),r=i(88178),o=i.n(r);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},s.apply(this,arguments)}function l(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=(0,t.forwardRef)(function(e,n){var i=e.color,r=void 0===i?"currentColor":i,o=e.size,d=void 0===o?24:o,a=l(e,["color","size"]);return t.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),t.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))});d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="Plus";const a=d},12991:(e,n,i)=>{i.d(n,{A:()=>l,q:()=>s});var t=i(96410),r=i(3405),o=i(33370);const s=t.default.main`
  position: relative;
  margin-top: ${({$margin:e})=>null!==e&&void 0!==e?e:"0px"};
  max-width: ${({$maxWidth:e})=>null!==e&&void 0!==e?e:"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${r.M.default};
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
`;function l(e){return(0,o.jsx)(s,{...e})}},15042:(e,n,i)=>{i.d(n,{A:()=>r});var t=i(54674);function r(e,n,i=100){const[r,o]=(0,t.useState)(()=>e),s=(0,t.useRef)(),l=(0,t.useCallback)(e=>{o(e),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{n(e),s.current=void 0},i)},[i,n]);return(0,t.useEffect)(()=>{s.current&&(clearTimeout(s.current),s.current=void 0),o(e)},[e]),[r,l]}},19933:(e,n,i)=>{i.d(n,{h:()=>a,e:()=>m});var t=i(65264),r=i(54644),o=i(94999),s=i(45416),l=i(54674),d=i(38740);let a=function(e){return e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED",e}({});function u(e,n,i){var u;const{chainId:c}=(0,r.useWeb3React)(),p=null!==e&&void 0!==e&&null!==(u=e.currency)&&void 0!==u&&u.isToken?e.currency:void 0,h=function(e,n,i){var t;const{account:o}=(0,r.useWeb3React)(),d=null!==e&&void 0!==e&&null!==(t=e.currency)&&void 0!==t&&t.isToken?e.currency:void 0,{tokenAllowance:u}=(0,s.l)(d,null!==o&&void 0!==o?o:void 0,n),c=i(d,n);return(0,l.useMemo)(()=>e&&n?e.currency.isNative?a.APPROVED:u?u.lessThan(e)?c?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN:a.UNKNOWN,[e,c,n,u])}(e,n,i),m=(0,o.dV)(null===p||void 0===p?void 0:p.address),v=(0,l.useCallback)(async()=>{function i(e){console.warn(`${(null===p||void 0===p?void 0:p.symbol)||"Token"} approval failed:`,e)}if(h!==a.NOT_APPROVED)return i("approve was called unnecessarily");if(!c)return i("no chainId");if(!p)return i("no token");if(!m)return i("tokenContract is null");if(!e)return i("missing amount to approve");if(!n)return i("no spender");let r=!1;const o=await m.estimateGas.approve(n,t.Is).catch(()=>(r=!0,m.estimateGas.approve(n,e.quotient.toString())));return m.approve(n,r?e.quotient.toString():t.Is,{gasLimit:(0,d.K)(o)}).then(i=>({response:i,tokenAddress:p.address,spenderAddress:n,amount:e})).catch(e=>{throw i(e),e})},[h,p,m,e,n,c]);return[h,v]}var c=i(47519),p=i(19456);function h(e){const n=(0,c.OQ)();return(0,l.useCallback)(()=>e().then(e=>{if(e){const{response:i,tokenAddress:t,spenderAddress:r,amount:o}=e;n(i,{type:p.D.APPROVAL,tokenAddress:t,spender:r,amount:o.quotient.toString()})}}),[n,e])}function m(e,n){const[i,t]=u(e,n,c.yI);return[i,h(t)]}},21982:(e,n,i)=>{i.d(n,{a:()=>b});var t=i(86762),r=i(53847),o=i(54644),s=i(67197),l=i.n(s),d=i(66295),a=i(54674),u=i(93405),c=i(94999),p=i(82685);let h=function(e){return e[e.AMOUNT=1]="AMOUNT",e[e.ALLOWED=2]="ALLOWED",e}({});const m=1200,v={[r.ChainId.MAINNET]:{[u.pP.address]:{type:h.AMOUNT,name:"USD Coin",version:"2"},[u.dM.address]:{type:h.ALLOWED,name:"Dai Stablecoin",version:"1"},[u.nf[r.ChainId.MAINNET].address]:{type:h.AMOUNT,name:"Uniswap"}},[r.ChainId.GOERLI]:{[u.nf[r.ChainId.GOERLI].address]:{type:h.AMOUNT,name:"Uniswap"}},[r.ChainId.SEPOLIA]:{[u.nf[r.ChainId.SEPOLIA].address]:{type:h.AMOUNT,name:"Uniswap"}}};var x=function(e){return e[e.NOT_APPLICABLE=0]="NOT_APPLICABLE",e[e.LOADING=1]="LOADING",e[e.NOT_SIGNED=2]="NOT_SIGNED",e[e.SIGNED=3]="SIGNED",e}(x||{});const g=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],f=[{name:"name",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],y=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],I=[{name:"holder",type:"address"},{name:"spender",type:"address"},{name:"nonce",type:"uint256"},{name:"expiry",type:"uint256"},{name:"allowed",type:"bool"}];var C=i(265);const j={version:"1",name:"Uniswap V2",type:h.AMOUNT};function b(e,n){return function(e,n,i,r){var s,u;const{account:C,chainId:j,provider:b}=(0,o.useWeb3React)(),E=null!==e&&void 0!==e&&null!==(s=e.currency)&&void 0!==s&&s.isToken?e.currency.address:void 0,D=(0,c.Z7)(E),R=(0,p.A)(),A=(0,a.useMemo)(()=>[null!==C&&void 0!==C?C:void 0],[C]),N=(0,d.DD)(D,"nonces",A),T=null!==r&&void 0!==r?r:j&&E?null===(u=v[j])||void 0===u?void 0:u[E]:void 0,[w,U]=(0,a.useState)(null);return(0,a.useMemo)(()=>{var r,o;if(R||!e||!D||!C||!j||!i||!b||!N.valid||!E||!n||!T)return{state:x.NOT_APPLICABLE,signatureData:null,gatherPermitSignature:null};const s=null===(r=N.result)||void 0===r||null===(o=r[0])||void 0===o?void 0:o.toNumber();if(N.loading||"number"!==typeof s)return{state:x.LOADING,signatureData:null,gatherPermitSignature:null};const d=w&&w.owner===C&&w.deadline>=i.toNumber()&&w.tokenAddress===E&&w.nonce===s&&w.spender===n&&("allowed"in w||l().greaterThanOrEqual(l().BigInt(w.amount),e.quotient));return{state:d?x.SIGNED:x.NOT_SIGNED,signatureData:d?w:null,gatherPermitSignature:async function(){const r=T.type===h.ALLOWED,o=i.toNumber()+m,l=e.quotient.toString(),d=r?{holder:C,spender:n,allowed:r,nonce:s,expiry:o}:{owner:C,spender:n,value:l,nonce:s,deadline:o},a=T.version?{name:T.name,version:T.version,verifyingContract:E,chainId:j}:{name:T.name,verifyingContract:E,chainId:j},u=JSON.stringify({types:{EIP712Domain:T.version?g:f,Permit:r?I:y},domain:a,primaryType:"Permit",message:d});return b.send("eth_signTypedData_v4",[C,u]).then(t.splitSignature).then(e=>{U({v:e.v,r:e.r,s:e.s,deadline:o,...r?{allowed:r}:{amount:l},nonce:s,chainId:j,owner:C,spender:n,tokenAddress:E,permitType:T.type})})}}},[e,D,C,j,R,i,b,N.loading,N.valid,N.result,E,n,T,w])}(e,n,(0,C.A)(),j)}},53947:(e,n,i)=>{i.d(n,{U:()=>j,m:()=>E});var t=i(19984),r=i(54644),o=i(86642),s=i(41019),l=i(4126),d=i(85713),a=i(92947),u=i(26467),c=i(56119),p=i(11577),h=i(96410),m=i(33121),v=i(73141),x=i(12763),g=i(33370);const f=h.default.div`
  ${v.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,h.default)(l.N_)`
  flex: ${({flex:e})=>null!==e&&void 0!==e?e:"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,I=(0,h.default)(m.PR.SubHeaderLarge)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,C=(0,h.default)(s.A)`
  color: ${({theme:e})=>e.neutral1};
`;function j({origin:e}){return(0,g.jsx)(f,{children:(0,g.jsxs)(x.JA,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,g.jsx)(l.N_,{to:e,children:(0,g.jsx)(C,{})}),(0,g.jsx)(I,{children:(0,g.jsx)(t.x6,{id:"LCFvJr"})})]})})}const b=(0,h.default)(m.PR.SubHeaderLarge)`
  flex: 1;
  margin: auto;
`;function E({adding:e,creating:n,autoSlippage:i,positionID:s,children:l}){const{chainId:m}=(0,r.useWeb3React)(),v=(0,h.useTheme)(),I=(0,u.j)(),j=(0,d.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(s?`/${s.toString()}`:"");return(0,g.jsx)(f,{children:(0,g.jsxs)(x.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,g.jsx)(y,{to:j,onClick:()=>{e&&(I((0,c.JE)()),I((0,p.JE)()))},flex:l?"1":void 0,children:(0,g.jsx)(C,{stroke:v.neutral2})}),(0,g.jsx)(b,{textAlign:l?"start":"center",children:n?(0,g.jsx)(t.x6,{id:"ma87bD"}):e?(0,g.jsx)(t.x6,{id:"E6MqGy"}):(0,g.jsx)(t.x6,{id:"cJtosk"})}),l&&(0,g.jsx)(a.az,{style:{marginRight:".5rem"},children:l}),(0,g.jsx)(o.A,{autoSlippage:i,chainId:m})]})})}},60290:(e,n,i)=>{i.r(n),i.d(n,{default:()=>te});var t=i(19984),r=i(34203),o=i(53847),s=i(54644),l=i(36794),d=i(10530),a=i(9157),u=i(7951),c=i(21982),p=i(42831),h=i(54674),m=i(10278),v=i(78066),x=i(85713),g=i(92947),f=i(96410),y=i(33121),I=i(50645),C=i(21959),j=i(75423),b=i(70694),E=i(20295),D=i(87014),R=i(53947),A=i(74222),N=i(12763),T=i(84962),w=i(66451),U=i(57235),k=i(93405),Y=i(17567),P=i(19933),S=i(94999),_=i(15042),O=i(265),$=i(51374),L=i(67197),q=i.n(L),B=i(3368),z=i(26467),W=i(41580),Q=i(91128),V=i(23843),M=i(33370);function J(){return(0,z.G)(e=>e.burn)}var G=i(47519),H=i(19456),F=i(34342),K=i(38740),Z=i(87314),X=i(97805),ee=i(12991),ne=i(5294);const ie=new o.Percent(5,100);function te(){var e,n;const{chainId:i}=(0,s.useWeb3React)(),{currencyIdA:t,currencyIdB:r}=(0,x.g)(),[o,l]=[null!==(e=(0,Y.H2)(t))&&void 0!==e?e:void 0,null!==(n=(0,Y.H2)(r))&&void 0!==n?n:void 0];return(0,a.Gv)(i)&&o!==l?(0,M.jsx)(re,{}):(0,M.jsx)(p.PositionPageUnsupportedContent,{})}function re(){var e,n,i,a,p,L,te,re,oe,se,le,de,ae,ue,ce,pe,he,me;const ve=(0,x.Zp)(),{currencyIdA:xe,currencyIdB:ge}=(0,x.g)(),[fe,ye]=[null!==(e=(0,Y.H2)(xe))&&void 0!==e?e:void 0,null!==(n=(0,Y.H2)(ge))&&void 0!==n?n:void 0],{account:Ie,chainId:Ce,provider:je}=(0,s.useWeb3React)(),[be,Ee]=(0,h.useMemo)(()=>[null===fe||void 0===fe?void 0:fe.wrapped,null===ye||void 0===ye?void 0:ye.wrapped],[fe,ye]),De=(0,f.useTheme)(),Re=(0,l.QO)(),{independentField:Ae,typedValue:Ne}=J(),{pair:Te,parsedAmounts:we,error:Ue}=function(e,n){var i,r;const{account:l}=(0,s.useWeb3React)(),{independentField:d,typedValue:a}=J(),[,u]=(0,Q.ek)(e,n),c=(0,V.mK)(null!==l&&void 0!==l?l:void 0,[null===u||void 0===u?void 0:u.liquidityToken]),p=null===c||void 0===c?void 0:c[null!==(i=null===u||void 0===u||null===(r=u.liquidityToken)||void 0===r?void 0:r.address)&&void 0!==i?i:""],[h,m]=[null===e||void 0===e?void 0:e.wrapped,null===n||void 0===n?void 0:n.wrapped],v={[$.D.CURRENCY_A]:h,[$.D.CURRENCY_B]:m,[$.D.LIQUIDITY]:null===u||void 0===u?void 0:u.liquidityToken},x=(0,W.P)(null===u||void 0===u?void 0:u.liquidityToken),g=u&&x&&p&&h&&q().greaterThanOrEqual(x.quotient,p.quotient)?o.CurrencyAmount.fromRawAmount(h,u.getLiquidityValue(h,x,p,!1).quotient):void 0,f=u&&x&&p&&m&&q().greaterThanOrEqual(x.quotient,p.quotient)?o.CurrencyAmount.fromRawAmount(m,u.getLiquidityValue(m,x,p,!1).quotient):void 0,y={[$.D.CURRENCY_A]:g,[$.D.CURRENCY_B]:f};let I=new o.Percent("0","100");if(d===$.D.LIQUIDITY_PERCENT)I=new o.Percent(a,"100");else if(d===$.D.LIQUIDITY){if(null!==u&&void 0!==u&&u.liquidityToken){const e=(0,B.A)(a,u.liquidityToken);e&&p&&!e.greaterThan(p)&&(I=new o.Percent(e.quotient,p.quotient))}}else if(v[d]){const e=(0,B.A)(a,v[d]),n=y[d];e&&n&&!e.greaterThan(n)&&(I=new o.Percent(e.quotient,n.quotient))}const C={[$.D.LIQUIDITY_PERCENT]:I,[$.D.LIQUIDITY]:p&&I&&I.greaterThan("0")?o.CurrencyAmount.fromRawAmount(p.currency,I.multiply(p.quotient).quotient):void 0,[$.D.CURRENCY_A]:h&&I&&I.greaterThan("0")&&g?o.CurrencyAmount.fromRawAmount(h,I.multiply(g.quotient).quotient):void 0,[$.D.CURRENCY_B]:m&&I&&I.greaterThan("0")&&f?o.CurrencyAmount.fromRawAmount(m,I.multiply(f.quotient).quotient):void 0};let j;var b;return l||(j=(0,M.jsx)(t.x6,{id:"VHOVEJ"})),C[$.D.LIQUIDITY]&&C[$.D.CURRENCY_A]&&C[$.D.CURRENCY_B]||(j=null!==(b=j)&&void 0!==b?b:(0,M.jsx)(t.x6,{id:"iPMIoT"})),{pair:u,parsedAmounts:C,error:j}}(null!==fe&&void 0!==fe?fe:void 0,null!==ye&&void 0!==ye?ye:void 0),{onUserInput:ke}=function(){const e=(0,z.j)();return{onUserInput:(0,h.useCallback)((n,i)=>{e((0,$.$)({field:n,typedValue:i}))},[e])}}(),Ye=!Ue,[Pe,Se]=(0,h.useState)(!1),[_e,Oe]=(0,h.useState)(!1),[$e,Le]=(0,h.useState)(!1),[qe,Be]=(0,h.useState)(""),ze=(0,O.A)(),We=(0,F.co)(ie),Qe={[$.D.LIQUIDITY_PERCENT]:we[$.D.LIQUIDITY_PERCENT].equalTo("0")?"0":we[$.D.LIQUIDITY_PERCENT].lessThan(new o.Percent("1","100"))?"<1":we[$.D.LIQUIDITY_PERCENT].toFixed(0),[$.D.LIQUIDITY]:Ae===$.D.LIQUIDITY?Ne:null!==(i=null===(a=we[$.D.LIQUIDITY])||void 0===a?void 0:a.toSignificant(6))&&void 0!==i?i:"",[$.D.CURRENCY_A]:Ae===$.D.CURRENCY_A?Ne:null!==(p=null===(L=we[$.D.CURRENCY_A])||void 0===L?void 0:L.toSignificant(6))&&void 0!==p?p:"",[$.D.CURRENCY_B]:Ae===$.D.CURRENCY_B?Ne:null!==(te=null===(re=we[$.D.CURRENCY_B])||void 0===re?void 0:re.toSignificant(6))&&void 0!==te?te:""},Ve=null===(oe=we[$.D.LIQUIDITY_PERCENT])||void 0===oe?void 0:oe.equalTo(new o.Percent("1")),Me=(0,S.Qg)(null===Te||void 0===Te||null===(se=Te.liquidityToken)||void 0===se?void 0:se.address),Je=(0,S.Ps)(),{gatherPermitSignature:Ge,signatureData:He}=(0,c.a)(we[$.D.LIQUIDITY],null===Je||void 0===Je?void 0:Je.address),[Fe,Ke]=(0,P.e)(we[$.D.LIQUIDITY],null===Je||void 0===Je?void 0:Je.address);const Ze=(0,h.useCallback)((e,n)=>ke(e,n),[ke]),Xe=(0,h.useCallback)(e=>Ze($.D.LIQUIDITY,e),[Ze]),en=(0,h.useCallback)(e=>Ze($.D.CURRENCY_A,e),[Ze]),nn=(0,h.useCallback)(e=>Ze($.D.CURRENCY_B,e),[Ze]),tn=(0,G.OQ)(),rn=(0,u.S)();async function on(){if(!Ce||!je||!Ie||!ze||!Je||!rn)throw new Error("missing dependencies");const{[$.D.CURRENCY_A]:e,[$.D.CURRENCY_B]:n}=we;if(!e||!n)throw new Error("missing currency amounts");const i={[$.D.CURRENCY_A]:(0,Z.w)(e,We)[0],[$.D.CURRENCY_B]:(0,Z.w)(n,We)[0]};if(!fe||!ye)throw new Error("missing tokens");const t=we[$.D.LIQUIDITY];if(!t)throw new Error("missing liquidity amount");const o=ye.isNative,s=fe.isNative||o;if(!be||!Ee)throw new Error("could not wrap");let l,d;if(Fe===P.h.APPROVED)s?(l=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],d=[o?be.address:Ee.address,t.quotient.toString(),i[o?$.D.CURRENCY_A:$.D.CURRENCY_B].toString(),i[o?$.D.CURRENCY_B:$.D.CURRENCY_A].toString(),Ie,ze.toHexString()]):(l=["removeLiquidity"],d=[be.address,Ee.address,t.quotient.toString(),i[$.D.CURRENCY_A].toString(),i[$.D.CURRENCY_B].toString(),Ie,ze.toHexString()]);else{if(null===He)throw new Error("Attempting to confirm without approval or a signature. Please contact support.");s?(l=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],d=[o?be.address:Ee.address,t.quotient.toString(),i[o?$.D.CURRENCY_A:$.D.CURRENCY_B].toString(),i[o?$.D.CURRENCY_B:$.D.CURRENCY_A].toString(),Ie,He.deadline,!1,He.v,He.r,He.s]):(l=["removeLiquidityWithPermit"],d=[be.address,Ee.address,t.quotient.toString(),i[$.D.CURRENCY_A].toString(),i[$.D.CURRENCY_B].toString(),Ie,He.deadline,!1,He.v,He.r,He.s])}const a=await Promise.all(l.map(e=>Je.estimateGas[e](...d).then(e=>(0,K.K)(e)).catch(n=>{console.error("estimateGas failed",e,d,n)}))),u=a.findIndex(e=>r.gH.isBigNumber(e));if(-1===u)console.error("This transaction would fail. Please contact support.");else{const e=l[u],n=a[u];Le(!0),await Je[e](...d,{gasLimit:n}).then(e=>{var n,i,t,r;Le(!1),tn(e,{type:H.D.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,X.V)(fe),quoteCurrencyId:(0,X.V)(ye),expectedAmountBaseRaw:null!==(n=null===(i=we[$.D.CURRENCY_A])||void 0===i?void 0:i.quotient.toString())&&void 0!==n?n:"0",expectedAmountQuoteRaw:null!==(t=null===(r=we[$.D.CURRENCY_B])||void 0===r?void 0:r.quotient.toString())&&void 0!==t?t:"0"}),Be(e.hash)}).catch(e=>{Le(!1),console.error(e)})}}function sn(){var e,n;return(0,M.jsxs)(j.mm,{gap:"md",style:{marginTop:"20px"},children:[(0,M.jsxs)(N.JA,{align:"flex-end",children:[(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,children:null===(e=we[$.D.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),(0,M.jsxs)(N.Bp,{gap:"4px",children:[(0,M.jsx)(D.A,{currency:fe,size:"24px"}),(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,style:{marginLeft:"10px"},children:null===fe||void 0===fe?void 0:fe.symbol})]})]}),(0,M.jsx)(N.Bp,{children:(0,M.jsx)(m.A,{size:"16",color:De.neutral2})}),(0,M.jsxs)(N.JA,{align:"flex-end",children:[(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,children:null===(n=we[$.D.CURRENCY_B])||void 0===n?void 0:n.toSignificant(6)}),(0,M.jsxs)(N.Bp,{gap:"4px",children:[(0,M.jsx)(D.A,{currency:ye,size:"24px"}),(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,style:{marginLeft:"10px"},children:null===ye||void 0===ye?void 0:ye.symbol})]})]}),(0,M.jsx)(y.PR.DeprecatedItalic,{fontSize:12,color:De.neutral2,textAlign:"left",padding:"12px 0 0 0",children:(0,M.jsx)(t.x6,{id:"4nBvG6",values:{0:We.toSignificant(4)}})})]})}function ln(){var e;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(g.EY,{color:De.neutral2,fontWeight:535,fontSize:16,children:(0,M.jsx)(t.x6,{id:"pKfYXn",values:{0:null===fe||void 0===fe?void 0:fe.symbol,1:null===ye||void 0===ye?void 0:ye.symbol}})}),(0,M.jsxs)(N.Bp,{children:[(0,M.jsx)(E.A,{currency0:fe,currency1:ye,margin:!0}),(0,M.jsx)(g.EY,{fontWeight:535,fontSize:16,children:null===(e=we[$.D.LIQUIDITY])||void 0===e?void 0:e.toSignificant(6)})]})]}),Te&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(g.EY,{color:De.neutral2,fontWeight:535,fontSize:16,children:(0,M.jsx)(t.x6,{id:"a7u1N9"})}),(0,M.jsxs)(g.EY,{fontWeight:535,fontSize:16,color:De.neutral1,children:["1 ",null===fe||void 0===fe?void 0:fe.symbol," = ",be?Te.priceOf(be).toSignificant(6):"-"," ",null===ye||void 0===ye?void 0:ye.symbol]})]}),(0,M.jsxs)(N.JA,{children:[(0,M.jsx)("div",{}),(0,M.jsxs)(g.EY,{fontWeight:535,fontSize:16,color:De.neutral1,children:["1 ",null===ye||void 0===ye?void 0:ye.symbol," = ",Ee?Te.priceOf(Ee).toSignificant(6):"-"," ",null===fe||void 0===fe?void 0:fe.symbol]})]})]}),(0,M.jsx)(I.$$,{disabled:!(Fe===P.h.APPROVED||null!==He),onClick:on,children:(0,M.jsx)(g.EY,{fontWeight:535,fontSize:20,children:(0,M.jsx)(t.x6,{id:"7VpPHA"})})})]})}const dn=(0,M.jsx)(t.x6,{id:"OqNe1s",values:{0:null===(le=we[$.D.CURRENCY_A])||void 0===le?void 0:le.toSignificant(6),1:null===fe||void 0===fe?void 0:fe.symbol,2:null===(de=we[$.D.CURRENCY_B])||void 0===de?void 0:de.toSignificant(6),3:null===ye||void 0===ye?void 0:ye.symbol}}),an=(0,h.useCallback)(e=>{Ze($.D.LIQUIDITY_PERCENT,e.toString())},[Ze]),un=(null===fe||void 0===fe?void 0:fe.isNative)||(null===ye||void 0===ye?void 0:ye.isNative),cn=Boolean(Ce&&k.Im[Ce]&&(fe&&(null===(ae=k.Im[Ce])||void 0===ae?void 0:ae.equals(fe))||ye&&(null===(ue=k.Im[Ce])||void 0===ue?void 0:ue.equals(ye)))),pn=(0,h.useCallback)(e=>{ge&&(0,X.V)(e)===ge?ve(`/remove/v2/${(0,X.V)(e)}/${xe}`):ve(`/remove/v2/${(0,X.V)(e)}/${ge}`)},[xe,ge,ve]),hn=(0,h.useCallback)(e=>{xe&&(0,X.V)(e)===xe?ve(`/remove/v2/${ge}/${(0,X.V)(e)}`):ve(`/remove/v2/${xe}/${(0,X.V)(e)}`)},[xe,ge,ve]),mn=(0,h.useCallback)(()=>{Se(!1),qe&&Ze($.D.LIQUIDITY_PERCENT,"0"),Be("")},[Ze,qe]),[vn,xn]=(0,_.A)(Number.parseInt(we[$.D.LIQUIDITY_PERCENT].toFixed(0)),an);return rn?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(ee.A,{children:[(0,M.jsx)(R.m,{creating:!1,adding:!1,autoSlippage:ie}),(0,M.jsxs)(ne.mO,{children:[(0,M.jsx)(U.A,{isOpen:Pe,onDismiss:mn,attemptingTxn:$e,hash:qe||"",reviewContent:()=>(0,M.jsx)(U.Y,{title:(0,M.jsx)(t.x6,{id:"AeZIvT"}),onDismiss:mn,topContent:sn,bottomContent:ln}),pendingText:dn}),(0,M.jsxs)(j.mm,{gap:"md",children:[(0,M.jsx)(C.tZ,{children:(0,M.jsx)(j.mm,{gap:"10px",children:(0,M.jsx)(y.PR.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,M.jsx)(t.x6,{id:"Vp58p0",components:{0:(0,M.jsx)("b",{})}})})})}),(0,M.jsx)(C.R4,{children:(0,M.jsxs)(j.mm,{gap:"20px",children:[(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(g.EY,{fontWeight:535,children:(0,M.jsx)(t.x6,{id:"nC4M5t"})}),(0,M.jsx)(ne.SC,{fontWeight:535,onClick:()=>{Oe(!_e)},children:_e?(0,M.jsx)(t.x6,{id:"AQK14J"}):(0,M.jsx)(t.x6,{id:"tUVwfQ"})})]}),(0,M.jsx)(N.Ay,{style:{alignItems:"flex-end"},children:(0,M.jsxs)(g.EY,{fontSize:72,fontWeight:535,children:[Qe[$.D.LIQUIDITY_PERCENT],"%"]})}),!_e&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(T.A,{value:vn,onChange:xn}),(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(ne.LJ,{onClick:()=>Ze($.D.LIQUIDITY_PERCENT,"25"),width:"20%",children:"25%"}),(0,M.jsx)(ne.LJ,{onClick:()=>Ze($.D.LIQUIDITY_PERCENT,"50"),width:"20%",children:"50%"}),(0,M.jsx)(ne.LJ,{onClick:()=>Ze($.D.LIQUIDITY_PERCENT,"75"),width:"20%",children:"75%"}),(0,M.jsx)(ne.LJ,{onClick:()=>Ze($.D.LIQUIDITY_PERCENT,"100"),width:"20%",children:"Max"})]})]})]})}),!_e&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(j.YA,{children:(0,M.jsx)(v.A,{size:"16",color:De.neutral2})}),(0,M.jsx)(C.R4,{children:(0,M.jsxs)(j.mm,{gap:"10px",children:[(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,children:Qe[$.D.CURRENCY_A]||"-"}),(0,M.jsxs)(N.Bp,{children:[(0,M.jsx)(D.A,{currency:fe,style:{marginRight:"12px"}}),(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,id:"remove-liquidity-tokena-symbol",children:null===fe||void 0===fe?void 0:fe.symbol})]})]}),(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,children:Qe[$.D.CURRENCY_B]||"-"}),(0,M.jsxs)(N.Bp,{children:[(0,M.jsx)(D.A,{currency:ye,style:{marginRight:"12px"}}),(0,M.jsx)(g.EY,{fontSize:24,fontWeight:535,id:"remove-liquidity-tokenb-symbol",children:null===ye||void 0===ye?void 0:ye.symbol})]})]}),Ce&&(cn||un)?(0,M.jsx)(N.JA,{style:{justifyContent:"flex-end"},children:un?(0,M.jsx)(y.Bl,{to:`/remove/v2/${null!==fe&&void 0!==fe&&fe.isNative&&Ce&&k.Im[Ce]?null===(ce=k.Im[Ce])||void 0===ce?void 0:ce.address:xe}/${null!==ye&&void 0!==ye&&ye.isNative&&Ce&&k.Im[Ce]?null===(pe=k.Im[Ce])||void 0===pe?void 0:pe.address:ge}`,children:"Receive WETH"}):cn?(0,M.jsx)(y.Bl,{to:`/remove/v2/${fe&&null!==(he=k.Im[Ce])&&void 0!==he&&he.equals(fe)?"ETH":xe}/${ye&&null!==(me=k.Im[Ce])&&void 0!==me&&me.equals(ye)?"ETH":ge}`,children:"Receive ETH"}):null}):null]})})]}),_e&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(b.A,{value:Qe[$.D.LIQUIDITY],onUserInput:Xe,onMax:()=>{Ze($.D.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ve,currency:null===Te||void 0===Te?void 0:Te.liquidityToken,pair:Te,id:"liquidity-amount"}),(0,M.jsx)(j.YA,{children:(0,M.jsx)(v.A,{size:"16",color:De.neutral2})}),(0,M.jsx)(b.A,{hideBalance:!0,value:Qe[$.D.CURRENCY_A],onUserInput:en,onMax:()=>Ze($.D.LIQUIDITY_PERCENT,"100"),showMaxButton:!Ve,currency:fe,label:"Output",onCurrencySelect:pn,id:"remove-liquidity-tokena"}),(0,M.jsx)(j.YA,{children:(0,M.jsx)(m.A,{size:"16",color:De.neutral2})}),(0,M.jsx)(b.A,{hideBalance:!0,value:Qe[$.D.CURRENCY_B],onUserInput:nn,onMax:()=>Ze($.D.LIQUIDITY_PERCENT,"100"),showMaxButton:!Ve,currency:ye,label:"Output",onCurrencySelect:hn,id:"remove-liquidity-tokenb"})]}),Te&&(0,M.jsxs)("div",{style:{padding:"10px 20px"},children:[(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(t.x6,{id:"rcNnsQ"}),(0,M.jsxs)("div",{children:["1 ",null===fe||void 0===fe?void 0:fe.symbol," = ",be?Te.priceOf(be).toSignificant(6):"-"," ",null===ye||void 0===ye?void 0:ye.symbol]})]}),(0,M.jsxs)(N.JA,{children:[(0,M.jsx)("div",{}),(0,M.jsxs)("div",{children:["1 ",null===ye||void 0===ye?void 0:ye.symbol," = ",Ee?Te.priceOf(Ee).toSignificant(6):"-"," ",null===fe||void 0===fe?void 0:fe.symbol]})]})]}),(0,M.jsx)("div",{style:{position:"relative"},children:Ie?(0,M.jsxs)(N.JA,{children:[(0,M.jsx)(I.m$,{onClick:async function(){if(!Me||!Te||!je||!ze)throw new Error("missing dependencies");if(!we[$.D.LIQUIDITY])throw new Error("missing liquidity amount");if(Ge)try{await Ge()}catch(Ue){4001!==(null===Ue||void 0===Ue?void 0:Ue.code)&&await Ke()}else await Ke()},confirmed:Fe===P.h.APPROVED||null!==He,disabled:Fe!==P.h.NOT_APPROVED||null!==He,mr:"0.5rem",fontWeight:535,fontSize:16,children:Fe===P.h.PENDING?(0,M.jsx)(w.nv,{children:(0,M.jsx)(t.x6,{id:"j2Uisd"})}):Fe===P.h.APPROVED||null!==He?(0,M.jsx)(t.x6,{id:"7kb4LU"}):(0,M.jsx)(t.x6,{id:"Z7ZXbT"})}),(0,M.jsx)(I.Jk,{onClick:()=>{Se(!0)},disabled:!Ye||null===He&&Fe!==P.h.APPROVED,error:!Ye&&!!we[$.D.CURRENCY_A]&&!!we[$.D.CURRENCY_B],children:(0,M.jsx)(g.EY,{fontSize:16,fontWeight:535,children:Ue||(0,M.jsx)(t.x6,{id:"t/YqKh"})})})]}):(0,M.jsx)(I.N$,{onClick:Re,children:(0,M.jsx)(t.x6,{id:"VHOVEJ"})})})]})]})]}),Te?(0,M.jsx)(j.mm,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:(0,M.jsx)(A.tA,{showUnwrapped:cn,pair:Te})}):null]}):(0,M.jsx)(d.O,{})}},70694:(e,n,i)=>{i.d(n,{A:()=>P});var t=i(19984),r=i(54644),o=i(18223),s=i(9157),l=i(24523),d=i(54674),a=i(96410),u=i(33121),c=i(73141),p=i(80672),h=i(49225),m=i(23843),v=i(50645),x=i(20295),g=i(87014),f=i(86724),y=i(12763),I=i(462),C=i(17176),j=i(33370);const b=a.default.div`
  ${c.ZZ};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,E=a.default.div`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:i})=>!i&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,D=(0,a.default)(v.EA)`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,l.e$)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,R=a.default.div`
  ${c.BI};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,A=a.default.div`
  ${c.BI};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,l.e$)(.2,e.neutral2)};
  }
`,N=(0,a.default)(A)`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,T=a.default.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,w=(0,a.default)(h.h)`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,U=a.default.span`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
`,k=a.default.button`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,Y=(0,a.default)(f.p)`
  ${o.fp};
  text-align: left;
`;function P({value:e,onUserInput:n,onMax:i,showMaxButton:l,onCurrencySelect:c,currency:h,otherCurrency:v,id:f,showCommonBases:A,showCurrencyAmount:P,disableNonToken:S,renderBalance:_,fiatValue:O,hideBalance:$=!1,pair:L=null,hideInput:q=!1,locked:B=!1,loading:z=!1,...W}){const[Q,V]=(0,d.useState)(!1),{account:M,chainId:J}=(0,r.useWeb3React)(),G=(0,m.rL)(null!==M&&void 0!==M?M:void 0,null!==h&&void 0!==h?h:void 0),H=(0,a.useTheme)(),F=(0,d.useCallback)(()=>{V(!1)},[V]),K=(0,s.Gv)(J);return(0,j.jsxs)(b,{id:f,hideInput:q,...W,children:[!B&&(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(E,{hideInput:q,disabled:!K,children:[(0,j.jsxs)(R,{style:q?{padding:"0",borderRadius:"8px"}:{},selected:!c,children:[!q&&(0,j.jsx)(Y,{className:"token-amount-input",value:e,onUserInput:n,disabled:!K,$loading:z}),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(D,{disabled:!K,visible:void 0!==h,selected:!!h,hideInput:q,className:"open-currency-select-button",onClick:()=>{c&&V(!0)},pointerEvents:c?void 0:"none",children:(0,j.jsxs)(T,{children:[(0,j.jsxs)(y.Bp,{children:[L?(0,j.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,j.jsx)(x.A,{currency0:L.token0,currency1:L.token1,size:24,margin:!0})}):h&&(0,j.jsx)(g.A,{style:{marginRight:"0.5rem"},currency:h,size:"24px"}),L?(0,j.jsxs)(U,{className:"pair-name-container",children:[null===L||void 0===L?void 0:L.token0.symbol,":",null===L||void 0===L?void 0:L.token1.symbol]}):(0,j.jsx)(U,{className:"token-symbol-container",active:Boolean(h&&h.symbol),children:(h&&h.symbol&&h.symbol.length>20?h.symbol.slice(0,4)+"..."+h.symbol.slice(h.symbol.length-5,h.symbol.length):null===h||void 0===h?void 0:h.symbol)||(0,j.jsx)(t.x6,{id:"T0Y2+3"})})]}),c&&(0,j.jsx)(w,{selected:!!h})]})})})]}),Boolean(!q&&!$&&h)&&(0,j.jsx)(N,{children:(0,j.jsxs)(y.JA,{children:[(0,j.jsx)(o.N3,{$loading:z,children:O&&(0,j.jsx)(C.s,{fiatValue:O})}),M&&(0,j.jsxs)(y.Bp,{style:{height:"17px"},children:[(0,j.jsx)(u.PR.DeprecatedBody,{onClick:i,color:H.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!$&&h&&G)&&((null===_||void 0===_?void 0:_(G))||(0,j.jsx)(t.x6,{id:"VuFd5C",values:{0:(0,p.N)(G,4)}}))}),Boolean(l&&G)&&(0,j.jsx)(k,{onClick:i,children:(0,j.jsx)(t.x6,{id:"4HtGBb"})})]})]})})]})}),c&&(0,j.jsx)(I.A,{isOpen:Q,onDismiss:F,onCurrencySelect:c,selectedCurrency:h,otherSelectedCurrency:v,showCommonBases:A,showCurrencyAmount:P,disableNonToken:S})]})}},82685:(e,n,i)=>{i.d(n,{A:()=>l});var t=i(54644),r=i(66295),o=i(54674),s=i(94999);function l(){var e;const{account:n}=(0,t.useWeb3React)(),i=(0,s._Q)(),l=(0,o.useMemo)(()=>[null!==n&&void 0!==n?n:void 0],[n]),d=(0,r.DD)(i,"isArgentWallet",l,r.bo);return Boolean(null===d||void 0===d||null===(e=d.result)||void 0===e?void 0:e[0])}},84962:(e,n,i)=>{i.d(n,{A:()=>l});var t=i(54674),r=i(96410),o=i(33370);const s=r.default.input`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: ${({theme:e})=>e.accent1};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.accent1}, ${({theme:e})=>e.accent1});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.surface4}, ${({theme:e})=>e.surface2});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:e})=>e.surface4};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:e})=>e.surface4};
  }
  &::-ms-fill-upper {
    background: ${({theme:e})=>e.surface2};
  }
`;function l({value:e,onChange:n,min:i=0,step:r=1,max:l=100,size:d=28,...a}){const u=(0,t.useCallback)(e=>{n(parseInt(e.target.value))},[n]);return(0,o.jsx)(s,{size:d,...a,type:"range",value:e,style:{padding:"15px 0"},onChange:u,"aria-labelledby":"input slider",step:r,min:i,max:l})}},87314:(e,n,i)=>{i.d(n,{w:()=>r});const t=new(i(53847).Fraction)(1,1);function r(e,n){if(n.lessThan(0)||n.greaterThan(t))throw new Error("Unexpected slippage");return[e.multiply(t.subtract(n)).quotient,e.multiply(t.add(n)).quotient]}}}]);
//# sourceMappingURL=290.ccd24378.chunk.js.map