(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports={page:"errorScreen_page__3UNtk",title:"errorScreen_title__1Xhh3",message:"errorScreen_message__1XkSv",infoWrap:"errorScreen_infoWrap__JW06V",decorWrap:"errorScreen_decorWrap__Gxkk_",btnWrap:"errorScreen_btnWrap__1eBxW",animation:"errorScreen_animation__L2iO3",mTomRound:"errorScreen_mTomRound__3ceX-","btn-wrap":"errorScreen_btn-wrap__2udjQ"}},2:function(e,t,a){e.exports={exchangeWidget:"exchangeWidget_exchangeWidget__2_VgS",wrap:"exchangeWidget_wrap__2PQUt",partConvertFrom:"exchangeWidget_partConvertFrom__3XwxU",navWrap:"exchangeWidget_navWrap__3ck7d",partConvertTo:"exchangeWidget_partConvertTo__2FBok",container:"exchangeWidget_container__2wwhg",form:"exchangeWidget_form__18NU6",currencyStateElem:"exchangeWidget_currencyStateElem__Jkz1e",heading:"exchangeWidget_heading__1VxT5",off:"exchangeWidget_off__3BUMU",label:"exchangeWidget_label__25tyP",labelRight:"exchangeWidget_labelRight__2MTPF",small:"exchangeWidget_small__3kG3d",sumInputWrap:"exchangeWidget_sumInputWrap__uL8Tn",sumInput:"exchangeWidget_sumInput__CYtQB",inputTip:"exchangeWidget_inputTip__2TtYB",on:"exchangeWidget_on__3-OZV",exchangeResult:"exchangeWidget_exchangeResult__3bknv",header:"exchangeWidget_header__1TE6j",exchangeBtn:"exchangeWidget_exchangeBtn__QRNdm",sign:"exchangeWidget_sign__2f-Ia"}},20:function(e,t,a){e.exports={elem:"navigation_elem__3GC1V",list:"navigation_list__1dgLs",item:"navigation_item__LcPye",btn:"navigation_btn__2Fnxy",active:"navigation_active___MHKS"}},21:function(e,t,a){e.exports={preloader:"preloader_preloader__P5Kfv",inner:"preloader_inner__xqPfn",spinner:"preloader_spinner__-vy9e",rotate:"preloader_rotate__lwHjw",path:"preloader_path__2L80I",dash:"preloader_dash__JfZh3",messageWrap:"preloader_messageWrap__1U3on"}},33:function(e,t,a){e.exports={btn:"commonButton_btn__2FZp6"}},34:function(e,t,a){e.exports=a.p+"static/media/astronaut.8aa75ecb.svg"},41:function(e,t,a){e.exports=a(63)},46:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(29),u=a.n(o),s=(a(46),a(10)),i=a(11),l=a(13),m=a(12),p=a(14),d=a(4),g=a(69),f=Object(g.a)("SET_CRUCIAL_ERROR"),h={setCrucialError:f,setUserData:Object(g.a)("SET_USER_DATA"),setRates:Object(g.a)("SET_RATES"),setUserCurrency:Object(g.a)("SET_USER_CURRENCY"),setExchangeFromCurrency:Object(g.a)("SET_EXCHANGE_FROM_CURRENCY"),setExchangeToCurrency:Object(g.a)("SET_EXCHANGE_TO_CURRENCY"),setExchangeSum:Object(g.a)("SET_EXCHANGE_SUM"),setIsExchangeSumAvailable:Object(g.a)("IS_EXCHANGE_SUM_AVAILABLE"),updateUserBalance:Object(g.a)("UPDATE_USER_BALANCE"),managePreloader:Object(g.a)("MANAGE_SCREEN_BLOCKING"),setPreloaderMessage:Object(g.a)("SET_PRELOADER_MESSAGE")},b=a(6),_={EUR:{shortName:"eur",fullName:"Euro",code:"EUR",number:978,symbol:"\u20ac",htmlCode:"&euro;"},USD:{shortName:"usd",fullName:"US Dollar",code:"USD",number:840,symbol:"$",htmlCode:"&#36;"},GBP:{shortName:"gbp",fullName:"Pound Sterling",code:"GBP",number:826,symbol:"\xa3",htmlCode:"&pound;"},JPY:{shortName:"jpy",fullName:"Japanese Yen",code:"JPY",number:392,symbol:"\xa5",htmlCode:"&yen;"}},E={name:"Vlad",surname:"Pocheptcov",mainCurrency:_.USD.code,account:{EUR:{symbol:_.EUR.code,amount:"2100"},USD:{symbol:_.USD.code,amount:"4623.05"},GBP:{symbol:_.GBP.code,amount:"4319.49"},JPY:{symbol:_.JPY.code,amount:"35123.48"}}},v=(n=E,function(){return new Promise(function(e,t){setTimeout(function(){return e(n)},1800)})}),y=a(24),j=function(e){return(t=e.status)>=200&&t<300?Promise.resolve(e):Promise.reject("API response: ".concat(e.statusText));var t},O=function(e){return e.json()},x=function(e){return R.BASE_URL+e+"?app_id=".concat(R.KEY)},C=function(e){return R.BASE_URL+e+"?app_id=".concat(R.FAKE_KEY)},S=function(e){return function(t){return function(a){return Object.entries(a).reduce(function(e,t){var a=Object(y.a)(t,2),n=a[0],r=a[1];return e+"&".concat(n,"=").concat(r)},e(t))}}},N=function(e){return fetch(e).then(j).then(O)},R={KEY:"45df0613a845463591657cc7242dd4c0",FAKE_KEY:"qwerty12345",BASE_URL:"https://openexchangerates.org/api"},W="/latest.json",k={getBasicRates:function(){var e=W,t={base:E.mainCurrency,symbols:Object.values(_).map(function(e){return e.code}).join(",")},a=S(x)(e)(t);return console.log("url requested = ",a),N(a)},getBasicRatesWithError:function(){var e=W,t={base:E.mainCurrency,symbols:Object.values(_).map(function(e){return e.code}).join(",")},a=S(C)(e)(t);return console.log("url requested = ",a),N(a)}},T=function(e,t){var a=Object.keys(t),n=a.indexOf(e);return a[n===a.length-1?0:n+1]},A=/^$|(^\d{1,10}(\.\d{0,2})?$)/,U=a(3),P=a(32),w=a.n(P),B=function(e){return w()(e)},F=function(e){return function(t){return e.lte(t)}},D=function(e){return function(t){return(a=B(e),function(e){return a.div(e)})(t);var a}},M=function(e){return function(t){return function(a){return(n=D(t)(a),function(e){return n.times(e)})(e);var n}}},I=a(8),H=function(e){return"We see that some error occurred because of the following reason:\n".concat(e)},Y=function(e){e(h.managePreloader(!1)),e(h.setPreloaderMessage(""))},L=function(e,t,a){console.error(t),e(h.setCrucialError(a))},G=a(61),J=a(65),q=a(16),K=a.n(q),X=a(33),V=a.n(X),Q=function(e){return c.a.createElement("button",{type:e.type,className:V.a.btn,onClick:e.clickHandler,title:e.title},e.text)},Z=a(34),$=a.n(Z),z=function(e){return c.a.createElement("img",{src:$.a,style:{width:e.width,height:e.height},alt:"astronaut"})};z.defaultProps={width:"40px",height:"40px"};var ee=z,te=function(e){return c.a.createElement("article",{className:K.a.page},c.a.createElement("h4",{className:"visuallyhidden",hidden:!0},"Error"),c.a.createElement("div",{className:K.a.infoWrap},c.a.createElement("span",{className:K.a.title},"Oops!"),c.a.createElement("p",{className:K.a.message},e.message),c.a.createElement("div",{className:K.a.btnWrap},c.a.createElement(Q,{text:e.buttonText,type:"button",clickHandler:e.buttonClickHandler}))),c.a.createElement("div",{className:K.a.decorWrap},c.a.createElement("div",{className:K.a.animation},c.a.createElement(ee,{width:"100%",height:"100%"}))))};te.defaultProps={message:"Some undetected error occurred"};var ae=te,ne="/",re=a(2),ce=a.n(re),oe=a(1),ue=a.n(oe),se=function(e){return c.a.createElement("div",{className:ce.a.currencyStateElem},c.a.createElement("span",{className:ce.a.heading},e.currency),c.a.createElement("small",{className:ce.a.label},function(e,t){var a=_[e].symbol;return c.a.createElement(r.Fragment,null,"You have ",c.a.createElement("span",{className:ce.a.small},a),t)}(e.currency,e.balance)))};se.propsTypes={currency:ue.a.string.isRequired,balance:ue.a.string.isRequired};var ie=se,le=a(35),me=function(e){return Object(I.get)(e.exchange,"fromCurrency")},pe=function(e){return Object(I.get)(e.exchange,"toCurrency")},de=function(e){return Object(I.get)(e.user,"account")},ge=function(e){return Object(I.get)(e.exchange,"sum")},fe=function(e){return e.user.account[e.exchange.fromCurrency].amount},he=Object(le.a)([ge,fe],function(e,t){return F(B(e||0))(t)}),be=a(18),_e=a.n(be),Ee=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).inputRef=c.a.createRef(),a.handleSumChange=function(e){var t=e.target.value;A.test(t)&&a.props.dispatchSum(t)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){var e,t=_e()((e={},Object(U.a)(e,ce.a.label,!0),Object(U.a)(e,ce.a.inputTip,!0),Object(U.a)(e,ce.a.on,!this.props.exchangeSum||this.props.exchangeSum&&!this.props.isAvailable),e)),a=this.props.exchangeSum?this.props.isAvailable?"":"overbalanced":"type the sum";return c.a.createElement("div",{className:"".concat(ce.a.sumInputWrap," ").concat(ce.a.heading),"data-value":this.props.exchangeSum},this.props.exchangeSum&&c.a.createElement("span",{className:ce.a.sign},"\u2014 "),c.a.createElement("input",{className:ce.a.sumInput,type:"text",id:"sum",value:this.props.exchangeSum,name:"exchange-sum",onChange:this.handleSumChange,ref:this.inputRef}),c.a.createElement("label",{htmlFor:"sum",className:t},a))}}]),t}(r.Component);Ee.propsTypes={changeHandler:ue.a.func.isRequired,value:ue.a.string};var ve=Object(d.b)(function(e){return{exchangeSum:ge(e),max:fe(e),isAvailable:he(e)}},function(e){return{dispatchSum:function(t){e(h.setExchangeSum(t))}}})(Ee),ye=function(e){return{userAccount:de(e),exchange:function(e){return Object(I.get)(e,"exchange")}(e)}},je=function(e,t){var a=function(a){function n(){return Object(s.a)(this,n),Object(l.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,a),Object(i.a)(n,[{key:"render",value:function(){var a=this,n=function(e){switch(e){case"from":return a.props.exchange.fromCurrency;case"to":return a.props.exchange.toCurrency;default:return console.error("An error occurred. Please check CurrencyStatePropsProxy function to clarify"),!1}}(t);return n?c.a.createElement(e,{currency:n,balance:this.props.userAccount[n].amount}):c.a.createElement("span",null,"n/d")}}]),n}(r.Component);return Object(d.b)(ye)(a)},Oe=function(e){return{fromCurrency:me(e),toCurrency:pe(e),userCurrencies:de(e)}},xe=function(e){return{changeFormCurrency:function(t){e(h.setExchangeFromCurrency(t))},changeToCurrency:function(t){e(h.setExchangeToCurrency(t))}}},Ce=function(e,t){var a=function(a){function n(){return Object(s.a)(this,n),Object(l.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,a),Object(i.a)(n,[{key:"componentDidUpdate",value:function(){this.props.fromCurrency===this.props.toCurrency&&this.props.changeToCurrency(T(this.props.fromCurrency,this.props.userCurrencies))}},{key:"render",value:function(){return c.a.createElement(e,{changeCurrencyHandler:"from"===t?this.props.changeFormCurrency:this.props.changeToCurrency,userCurrencies:this.props.userCurrencies,currentCurrency:"from"===t?this.props.fromCurrency:this.props.toCurrency})}}]),n}(r.Component);return Object(d.b)(Oe,xe)(a)},Se=function(e){var t,a,n,o,u=e.exchangeSum,s=e.fromCurrency,i=e.toCurrency,l=e.rates,m=M(u||0)(l[i])(l[s]).toFixed(2),p=M(1)(l[i])(l[s]).toFixed(2),d=_e()((t={},Object(U.a)(t,ce.a.heading,!0),Object(U.a)(t,ce.a.off,!u),t));return c.a.createElement("div",{className:ce.a.exchangeResult},c.a.createElement("span",{className:d},c.a.createElement("span",{className:ce.a.sign},"+ "),m),c.a.createElement("small",{className:ce.a.label},(a=s,n=i,o=p,c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:ce.a.small},_[a].symbol),"1 =",c.a.createElement("span",{className:ce.a.small},_[n].symbol),o))))};Se.propsTypes={exchangeSum:ue.a.string,rate:ue.a.string,fromCurrency:ue.a.string,toCurrency:ue.a.string};var Ne=Object(d.b)(function(e){return{exchangeSum:ge(e),fromCurrency:me(e),toCurrency:pe(e),rates:function(e){return Object(I.get)(e.rates,"rates")}(e)}})(Se),Re=a(20),We=a.n(Re),ke=function(e){var t=e.userCurrencies,a=e.currentCurrency,n=e.changeCurrencyHandler;return c.a.createElement("nav",{className:We.a.elem},c.a.createElement("ul",{className:We.a.list},Object.keys(t).map(function(e){var t,r;return c.a.createElement("li",{className:We.a.item,key:Object(I.uniqueId)()},c.a.createElement("button",{className:_e()((t={},Object(U.a)(t,We.a.btn,!0),Object(U.a)(t,We.a.active,e===a),t)),type:"button",title:e,onClick:(r=e,function(){n(r)})}))})))},Te={updateBalance:function(){return function(e,t){var a,n=t(),r=n.exchange,c=r.fromCurrency,o=r.toCurrency,u=r.sum,s=n.user.account,i=n.rates.rates,l=function(e,t,a,n,r){var c,o;return Object(b.a)({},e,(c={},Object(U.a)(c,t,{symbol:t,amount:(o=B(e[t].amount),function(e){return o.minus(e)})(a).toFixed(2)}),Object(U.a)(c,n,{symbol:n,amount:function(e){return function(t){return e.plus(t)}}(B(e[n].amount))(r).toFixed(2)}),c))}(s,c,u,o,M(u)(i[o])(i[c]).toFixed(4));!function(e,t){e(h.managePreloader(!0)),e(h.setPreloaderMessage(t))}(e,"Updating your balance..."),(a=l,new Promise(function(e,t){var n={status:200,message:"Yor balance successfully updated",balance:Object(b.a)({},a)};setTimeout(function(){return e(n)},1200)})).then(function(t){if(200!==t.status)throw Error(t.message);e(h.updateUserBalance(t.balance)),e(h.setExchangeSum("")),Y(e)}).catch(function(t){var a=H(t.message);L(e,t,a),Y(e)})}}},Ae=Object(d.b)(function(e){return{exchangeSum:ge(e),isAvailable:he(e)}},Te)(function(e){var t=!e.isAvailable||F(B(e.exchangeSum||0))(0);return c.a.createElement("button",{className:ce.a.exchangeBtn,type:"button",disabled:t,onClick:e.updateBalance},"Exchange")}),Ue=je(ie,"from"),Pe=je(ie,"to"),we=Ce(ke,"from"),Be=Ce(ke,"to"),Fe=function(){return c.a.createElement("article",{className:ce.a.exchangeWidget},c.a.createElement("div",{className:ce.a.wrap},c.a.createElement("header",{className:ce.a.header},c.a.createElement("h1",{className:"visuallyhidden"},"Ex Widget"),c.a.createElement("div",{className:ce.a.container},c.a.createElement(Ae,null))),c.a.createElement("div",{className:ce.a.partConvertFrom},c.a.createElement("div",{className:ce.a.container},c.a.createElement("div",{className:ce.a.form},c.a.createElement(Ue,null),c.a.createElement(ve,null))),c.a.createElement("div",{className:ce.a.navWrap},c.a.createElement(we,null))),c.a.createElement("div",{className:ce.a.partConvertTo},c.a.createElement("div",{className:ce.a.container},c.a.createElement("div",{className:ce.a.form},c.a.createElement(Pe,null),c.a.createElement(Ne,null))),c.a.createElement("div",{className:ce.a.navWrap},c.a.createElement(Be,null)))))},De={updateRates:function(){return function(e,t){return k.getBasicRates().then(function(a){var n=a.base,r=a.rates,c=a.timestamp,o=t().rates,u={base:n,rates:r,timestamp:c};Object(I.isEqual)(o,u)||e(h.setRates(u))},function(e){var t=H("API response ".concat(e));return Promise.reject(t)})}},setCrucialError:f},Me=a(21),Ie=a.n(Me),He=function(e){return c.a.createElement("div",{className:Ie.a.preloader},c.a.createElement("div",{className:Ie.a.inner},e.message&&c.a.createElement("div",{className:Ie.a.messageWrap},e.message),c.a.createElement("svg",{className:Ie.a.spinner,viewBox:"0 0 50 50"},c.a.createElement("circle",{className:Ie.a.path,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}))))};He.defaultProps={message:""};var Ye,Le,Ge,Je=He,qe=function(e){var t=function(t){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).interval={id:0},t}return Object(p.a)(a,t),Object(i.a)(a,[{key:"componentDidMount",value:function(){!function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:25e3,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2e3;return function o(u){return t().then(function(){e.id=setTimeout(function(){return o(1)},r)}).catch(function(t){if(u>n)return clearTimeout(e.id),void a(t);e.id=setTimeout(function(){return o(++u)},c)})}}(this.interval,this.props.updateRates,this.props.setCrucialError)(1)}},{key:"componentWillUnmount",value:function(){var e;e=this.interval,clearTimeout(e.id)}},{key:"render",value:function(){return c.a.createElement(e,null)}}]),a}(r.Component);return Object(d.b)(null,De)(t)}(Object(d.b)(function(e){return{isDataReady:function(e){return!(!Object(I.get)(e,"rates")||!Object(I.get)(e,"user"))}(e)}})(function(e){return e.isDataReady?c.a.createElement(Fe,null):c.a.createElement(Je,{message:"Loading you data..."})})),Ke=function(){window.location.reload()},Xe=function(e){return c.a.createElement(ae,{message:"Page not found",buttonText:"Home",buttonClickHandler:e.buttonClickHandler})},Ve=Object(d.b)(function(e){return{hasError:!function(e){return Object(I.get)(e.appStatus,"works")}(e),errorMessage:function(e){return Object(I.get)(e.appStatus,"errorMessage")}(e)}})(function(e){return e.hasError?c.a.createElement(G.a,{render:function(){return c.a.createElement(ae,{message:e.errorMessage,buttonText:"Reload",buttonClickHandler:Ke})}}):c.a.createElement(J.a,null,c.a.createElement(G.a,{path:ne,exact:!0,render:function(){return c.a.createElement(qe,null)}}),c.a.createElement(G.a,{render:function(){return c.a.createElement(Xe,{buttonClickHandler:(t=e.history,function(){t.push("/")})});var t}}))}),Qe=a(66),Ze=Object(d.b)(function(e){return{isActive:function(e){return Object(I.get)(e.ui.preloaderBlock,"isActive")}(e),message:function(e){return Object(I.get)(e.ui.preloaderBlock,"message")}(e)}})(function(e){return e.isActive&&c.a.createElement(Je,{message:e.message})}),$e={getUserData:function(){return function(e){v().then(function(t){e(h.setExchangeFromCurrency(t.mainCurrency)),e(h.setExchangeToCurrency(T(t.mainCurrency,t.account))),e(h.setUserData(t))}).catch(function(t){var a=H('"'.concat(t,'"'));L(e,t,a)})}}},ze=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).initialUploadCallback=function(){a.setState(function(){return{isPending:!1}})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserData()}},{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement(Ve,this.props),c.a.createElement(Ze,null))}}]),t}(r.Component),et=Object(Qe.a)(Object(d.b)(null,$e)(ze)),tt=a(68),at=a(15),nt=a(38),rt=a(67),ct=Object(rt.a)(Object(U.a)({},h.setCrucialError,function(e,t){var a=t.payload;return{works:!1,errorMessage:void 0===a?"Undefined error occurred. Please contact the support":a}}),{works:!0,errorMessage:""}),ot=Object(rt.a)((Ye={},Object(U.a)(Ye,h.setUserData,function(e,t){return t.payload}),Object(U.a)(Ye,h.setUserCurrency,function(e,t){var a=t.payload;return Object(b.a)({},e,{mainCurrency:a})}),Object(U.a)(Ye,h.updateUserBalance,function(e,t){var a=t.payload;return Object(b.a)({},e,{account:a})}),Ye),null),ut=Object(rt.a)(Object(U.a)({},h.setRates,function(e,t){return t.payload}),null),st=Object(rt.a)((Le={},Object(U.a)(Le,h.setExchangeFromCurrency,function(e,t){var a=t.payload;return Object(b.a)({},e,{fromCurrency:a})}),Object(U.a)(Le,h.setExchangeToCurrency,function(e,t){var a=t.payload;return Object(b.a)({},e,{toCurrency:a})}),Object(U.a)(Le,h.setExchangeSum,function(e,t){var a=t.payload;return Object(b.a)({},e,{sum:a})}),Object(U.a)(Le,h.setIsExchangeSumAvailable,function(e,t){var a=t.payload;return Object(b.a)({},e,{isAvailable:a})}),Le),{fromCurrency:"",toCurrency:"",sum:"",isSumAvailable:!0}),it=Object(rt.a)((Ge={},Object(U.a)(Ge,h.managePreloader,function(e,t){var a=t.payload;return Object(b.a)({},e,{preloaderBlock:Object(b.a)({},e.preloaderBlock,{isActive:a})})}),Object(U.a)(Ge,h.setPreloaderMessage,function(e,t){var a=t.payload,n=void 0===a?"":a;return Object(b.a)({},e,{preloaderBlock:Object(b.a)({},e.preloaderBlock,{message:n})})}),Ge),{preloaderBlock:{isActive:!1,message:""}}),lt=Object(at.combineReducers)({appStatus:ct,user:ot,rates:ut,exchange:st,ui:it}),mt=a(39),pt=Object(at.createStore)(lt,Object(nt.composeWithDevTools)(Object(at.applyMiddleware)(mt.a))),dt=document.getElementById("root");u.a.render(c.a.createElement(d.a,{store:pt},c.a.createElement(tt.a,{basename:"/exwidget"},c.a.createElement(et,null))),dt)}},[[41,2,1]]]);
//# sourceMappingURL=main.65c4a1ad.chunk.js.map