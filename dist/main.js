(()=>{"use strict";var e={298:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(81),r=n.n(a),i=n(645),o=n.n(i),d=n(667),c=n.n(d),s=new URL(n(281),n.b),l=o()(r()),p=c()(s);l.push([e.id,'@font-face{font-family:"TeyvatFont";src:url('+p+') format("truetype");font-weight:600;font-style:normal}body{background:linear-gradient(0deg, #bb8a37 0%, #d0753e 48%, #bb2920 100%);color:#fff;font-family:"TeyvatFont";display:flex;flex-direction:column;align-items:center;margin:0px}#header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;background-color:#681919;animation-name:header-fade-in;animation-duration:1.5s}@keyframes header-fade-in{from{opacity:0}to{opacity:1}}#wanmin{padding-left:32px}#links{display:flex;justify-content:space-evenly;align-items:center;gap:32px;padding-right:32px}#home-button{animation-name:bounce;animation-duration:1.5s;animation-timing-function:ease}#menu-button{animation-name:bounce;animation-duration:1.5s;animation-timing-function:ease}#contact-button{animation-name:bounce;animation-duration:1.5s;animation-timing-function:ease}@keyframes bounce{0%{transform:scale(1, 1) translateY(0)}10%{transform:scale(1.1, 0.9) translateY(0)}30%{transform:scale(0.9, 1.1) translateY(-30px)}50%{transform:scale(1.05, 0.95) translateY(0)}57%{transform:scale(1, 1) translateY(-7px)}64%{transform:scale(1, 1) translateY(0)}100%{transform:scale(1, 1) translateY(0)}}#home-button:hover{animation:wobble .5s linear infinite alternate}#menu-button:hover{animation:wobble .5s linear infinite alternate}#contact-button:hover{animation:wobble .5s linear infinite alternate}@keyframes wobble{from{transform:rotate(-5deg) scale(1)}50%{transform:scale(1.2)}to{transform:rotate(5deg) scale(1)}}#home-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-left:100px;padding-right:100px}#middle-container{border-radius:16px;position:relative;animation-name:hours-fade-in;animation-duration:1.5s;display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:32px}#subtext{font-style:italic;text-align:center}#home-wanmin{border-radius:16px;box-shadow:10px 5px 5px rgba(82,40,30,.548)}#guoba-container{position:relative;animation-name:guoba-fade-in;animation-duration:.75s}@keyframes guoba-fade-in{from{opacity:0;right:200px}to{opacity:1;right:0px}}#guoba:hover{animation:guoba-xiangling-wobble .3s linear infinite alternate}@keyframes guoba-xiangling-wobble{from{transform:rotate(0deg)}to{transform:rotate(-5deg)}}#hours-container{border:2px solid #681919;border-radius:16px;background-color:#85b485;width:300px;height:200px;padding-top:16px;box-shadow:10px 5px 5px rgba(82,40,30,.548)}ul{list-style-type:none}@keyframes hours-fade-in{from{opacity:0}33%{opacity:0;bottom:100px}to{opacity:1;bottom:0px}}#xiangling-container{position:relative;animation-name:xiangling-fade-in;animation-duration:.75s}@keyframes xiangling-fade-in{from{opacity:0;left:200px}to{opacity:1;left:0px}}#xiangling:hover{animation:guoba-xiangling-wobble .5s linear infinite alternate}#menu-container{padding-left:100px;padding-right:100px;padding-top:32px;padding-bottom:32px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:repeat(5, 1fr);gap:16px}@keyframes menu-fadein{100%{opacity:1}}#menu-container div{animation:menu-fadein .5s forwards}#menu-container div:nth-child(1){animation-delay:.2s}#menu-container div:nth-child(2){animation-delay:.4s}#menu-container div:nth-child(3){animation-delay:.6s}#menu-container div:nth-child(4){animation-delay:.8s}#menu-container div:nth-child(5){animation-delay:1s}#menu-container div:nth-child(6){animation-delay:1.2s}#menu-container div:nth-child(7){animation-delay:1.4s}#menu-container div:nth-child(8){animation-delay:1.6s}#menu-container div:nth-child(9){animation-delay:1.8s}#menu-container div:nth-child(10){animation-delay:2s}.food-container{border-radius:16px;display:grid;grid-template-columns:4fr .5fr 1fr 1fr 1fr;grid-template-rows:1fr 3fr 1fr 1fr;height:256px;width:768px;padding:16px;box-shadow:10px 5px 5px rgba(82,40,30,.548);opacity:0}.food-image{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:3;padding-left:32px}.food-name{grid-column-start:2;grid-column-end:6;grid-row-start:1;grid-row-end:2}.food-text{grid-column-start:2;grid-column-end:6;grid-row-start:2;grid-row-end:3}.food-currency{grid-column-start:2;grid-column-end:3;grid-row-start:3;grid-row-end:4}.food-price{grid-column-start:3;grid-column-end:5;grid-row-start:3;grid-row-end:4}.food-rarity{grid-column-start:2;grid-column-end:4;grid-row-start:4;grid-row-end:5}.one-star{background-color:#b9b9b9}.two-star{background-color:#85b485}.three-star{background-color:#79b0ee}#contact-container{display:grid;grid-template-columns:.5fr 1fr 1fr 4fr 1fr 1fr .5fr;grid-template-rows:.5fr 1fr 1fr 1fr 1fr .5fr}#pepper{grid-column-start:2;grid-column-end:3;grid-row-start:3;grid-row-end:4;animation:pepper-anim 2s linear infinite}@keyframes pepper-anim{0%{transform:rotate(0deg) translateY(0px)}20%{transform:rotate(170deg) translateY(0px)}30%{transform:rotate(170deg) translateY(-30px)}35%{transform:rotate(170deg) translateY(10px)}40%{transform:rotate(170deg) translateY(-30px)}45%{transform:rotate(170deg) translateY(10px)}50%{transform:rotate(170deg) translateY(0px)}70%{transform:rotate(0deg) translateY(0px)}}#fish{grid-column-start:2;grid-column-end:3;grid-row-start:4;grid-row-end:5;animation:fish-anim .5s linear infinite alternate}@keyframes fish-anim{from{transform:rotate(-5deg) translateX(-30px)}to{transform:rotate(5deg) translateX(-10px)}}#map-container{display:flex;flex-direction:column;align-items:center;animation-name:map-fadein;animation-duration:1.5s;padding-top:50px;padding-bottom:100px;grid-column-start:4;grid-column-end:5;grid-row-start:1;grid-row-end:6;border:2px solid #681919;background-color:#85b485;border-radius:24px;margin-top:32px;box-shadow:10px 5px 5px rgba(82,40,30,.548)}@keyframes map-fadein{from{opacity:0}to{opacity:1}}#wanmin-map{border-radius:16px;box-shadow:5px 3px 3px rgba(30,92,35,.548)}#jueyun{grid-column-start:6;grid-column-end:7;grid-row-start:3;grid-row-end:4;animation:jueyun-anim .3s linear infinite alternate}@keyframes jueyun-anim{from{transform:rotate(0deg)}to{transform:rotate(-10deg)}}#chibi-xiangling{grid-column-start:6;grid-column-end:7;grid-row-start:4;grid-row-end:5;animation:chibi-xiangling-anim .5s linear infinite alternate}@keyframes chibi-xiangling-anim{from{transform:scale(1)}to{transform:scale(1.1)}}#footer{text-align:center;background-color:#681919;width:100%;animation-name:footer-fade-in;animation-duration:1.5s;margin:0px}@keyframes footer-fade-in{from{opacity:0}to{opacity:1}}',""]);const m=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(o[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},o=[],d=0;d<e.length;d++){var c=e[d],s=a.base?c[0]+a.base:c[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var m=n(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var f=r(u,a);a.byIndex=d,t.splice(d,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var d=n(i[o]);t[d].references--}for(var c=a(e,r),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},351:(e,t,n)=>{e.exports=n.p+"db542aa7fbfdd07a52c8.png"},556:(e,t,n)=>{e.exports=n.p+"c993b0a8b15c91dae1bc.png"},817:(e,t,n)=>{e.exports=n.p+"dc5cfe266031adf21736.png"},753:(e,t,n)=>{e.exports=n.p+"d2c724945ad9474f99ab.png"},964:(e,t,n)=>{e.exports=n.p+"6440d788e2aa1184de72.png"},843:(e,t,n)=>{e.exports=n.p+"2dcd95af6f46a1d0f8a1.png"},93:(e,t,n)=>{e.exports=n.p+"3d1af8e346ebece40dd9.png"},557:(e,t,n)=>{e.exports=n.p+"cff4df27e8a4b8d5171a.png"},75:(e,t,n)=>{e.exports=n.p+"14af5bff2f9d9d278e3f.png"},69:(e,t,n)=>{e.exports=n.p+"6925cbf37897ebcad985.png"},562:(e,t,n)=>{e.exports=n.p+"018e0edae26b104caddb.png"},160:(e,t,n)=>{e.exports=n.p+"3fc164a2b860873a1deb.png"},855:(e,t,n)=>{e.exports=n.p+"376205b90d58838bc10a.png"},357:(e,t,n)=>{e.exports=n.p+"4123edff1c3ad49eb3ea.png"},227:(e,t,n)=>{e.exports=n.p+"7e30101d0caee0283f7a.png"},474:(e,t,n)=>{e.exports=n.p+"d01ae2115371f6ae4e33.png"},29:(e,t,n)=>{e.exports=n.p+"c219a0eebe96e4ad3deb.png"},961:(e,t,n)=>{e.exports=n.p+"7d9e321a01990337444a.png"},113:(e,t,n)=>{e.exports=n.p+"d2c65be60814e9531ee4.png"},679:(e,t,n)=>{e.exports=n.p+"e8c5abb6e5745098ec7f.png"},659:(e,t,n)=>{e.exports=n.p+"068df8d1aac2115ff8f6.png"},202:(e,t,n)=>{e.exports=n.p+"30c03b515ff96f0c8b50.png"},389:(e,t,n)=>{e.exports=n.p+"68d2a9fd87446a07a105.png"},709:(e,t,n)=>{e.exports=n.p+"364e9a01e17569df59e9.png"},698:(e,t,n)=>{e.exports=n.p+"16d615e8d48fd18eeb32.png"},222:(e,t,n)=>{e.exports=n.p+"f260366ec1c72ef1b691.png"},328:(e,t,n)=>{e.exports=n.p+"e635ae52411695f867d1.jpeg"},281:(e,t,n)=>{e.exports=n.p+"0509051ea175e37199f7.ttf"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(351),t=n(202),a=n(328);const r=function(){const n=document.querySelector("#content");n.textContent="",n.appendChild(function(){const n=document.createElement("div");n.id="home-container";const r=document.createElement("div");r.id="middle-container";const i=document.createElement("h3");i.textContent="Come enjoy the best food in all of Liyue!",i.id="subtext",r.appendChild(i);const o=document.createElement("img");o.src=a,o.id="home-wanmin",r.appendChild(o);const d=document.createElement("div");d.id="guoba-container";const c=document.createElement("img");c.src=t,c.id="guoba",d.appendChild(c);const s=document.createElement("div");s.id="hours-container";const l=document.createElement("ul");l.id="hours-list";const p=document.createElement("li");p.textContent="MON: 7:00 AM - 10:00 PM",l.appendChild(p);const m=document.createElement("li");m.textContent="TUE: 7:00 AM - 10:00 PM",l.appendChild(m);const u=document.createElement("li");u.textContent="WED: 7:00 AM - 10:00 PM",l.appendChild(u);const f=document.createElement("li");f.textContent="THU: 7:00 AM - 10:00 PM",l.appendChild(f);const g=document.createElement("li");g.textContent="FRI: 7:00 AM - 10:00 PM",l.appendChild(g);const h=document.createElement("li");h.textContent="SAT: 7:00 AM - 10:00 PM",l.appendChild(h);const x=document.createElement("li");x.textContent="SUN: 7:00 AM - 10:00 PM",l.appendChild(x),s.appendChild(l),r.appendChild(s);const b=document.createElement("div");b.id="xiangling-container";const y=document.createElement("img");return y.src=e,y.id="xiangling",b.appendChild(y),n.appendChild(d),n.appendChild(r),n.appendChild(b),n}())};var i=n(964),o=n(389),d=n(113),c=n(817),s=n(679),l=n(556),p=n(709),m=n(698),u=n(659),f=n(753),g=n(29),h=n(843),x=n(93),b=n(557);n(75),n(69);var y=n(222),v=n(961),w=n(474),C=n(227),E=n(160);var k=n(562),M=n(855),T=n(357);var S=n(379),A=n.n(S),j=n(795),Y=n.n(j),N=n(569),P=n.n(N),L=n(565),q=n.n(L),F=n(216),I=n.n(F),R=n(589),U=n.n(R),H=n(298),J={};J.styleTagTransform=U(),J.setAttributes=q(),J.insert=P().bind(null,"head"),J.domAPI=Y(),J.insertStyleElement=I(),A()(H.Z,J),H.Z&&H.Z.locals&&H.Z.locals,function(){const e=document.querySelector("body");e.insertBefore(function(){const e=document.createElement("div");e.id="header";const t=document.createElement("h1");t.id="wanmin",t.textContent="Wanmin Restaurant",e.appendChild(t);const n=document.createElement("div");n.id="links";const a=document.createElement("img");a.src=k,a.id="home-button",n.appendChild(a);const r=document.createElement("img");r.src=M,r.id="menu-button",n.appendChild(r);const i=document.createElement("img");return i.src=T,i.id="contact-button",n.appendChild(i),e.appendChild(n),e}(),e.firstChild),e.appendChild(function(){const e=document.createElement("div");e.id="footer";const t=document.createElement("p");t.id="disclaimer",t.textContent="All images and IP belong to MiHoYo. This website was created for practice.",e.appendChild(t);const n=document.createElement("p");return n.id="copyright",n.textContent="Created © 2022 Jonathan Chen",e.appendChild(n),e}())}(),r();const O=document.querySelector("#home-button"),Z=document.querySelector("#menu-button"),$=document.querySelector("#contact-button");O.addEventListener("click",(()=>{r()})),Z.addEventListener("click",(()=>{!function(){const e=document.querySelector("#content");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.id="menu-container";let t=[{id:0,name:"Grilled Tiger Fish",text:"A fish kebab grilled over an open flame. The fish is a fresh catch stright from the harbor, lightly picked and swifty grilled.",img:i,currency:g,price:"1,250",rarity:h},{id:1,name:"Rice Buns",text:"Soft and fluffy food. The rice and horsetail have been ground into flour and kneaded into dough before being put in a steaming basket.",img:o,currency:g,price:"1,250",rarity:h},{id:2,name:"Jueyun Chili Chicken",text:"The finesse technique used in mixing the dish retained the freshness of the delightful juice contained within the chicken.",img:d,currency:g,price:"2,500",rarity:x},{id:3,name:"Crystal Shrimp",text:"The stuffing is taken from whole fresh shrimp, and the glistening quality of the flour can be guessed at from the translucence of the outer skin.",img:c,currency:g,price:"2,500",rarity:x},{id:4,name:"Mint Salad",text:"A fragrant salad dish. Finely chopped Jueyun Chilis blended with a sauce and mixed with Mint leaves.",img:s,currency:g,price:"2,500",rarity:x},{id:5,name:"Crab Roe Tofu",text:"A dish with a tender mouthfeel. Crab roe is stir-fried till the oil within oozes out before being added to boiled tofu and accented with broth.",img:l,currency:g,price:"2,500",rarity:x},{id:6,name:"Squirrel Fish",text:"Deboned fish with crisscross cuts on the skin. Coated in flour and deep-fried to a golden-brown color, then served with ketchup drizzled on top.",img:p,currency:g,price:"5,000",rarity:b},{id:7,name:"Universal Peace",text:"A colorful staple dish that maintains a perfect balance between soft and fragrant rice mixed with all kinds of carefully selected sweet ingredients.",img:m,currency:g,price:"5,000",rarity:b},{id:8,name:"Minty Meat Rolls",text:"The marinated meat has been thinly sliced and rolled into mint leaves, before being brushed with a sauce blend containing Jueyun Chilis.",img:u,currency:g,price:"5,000",rarity:b},{id:9,name:"Dragon Beard Noodles",text:"Noodles that are as slender as the hairs on a dragon's beard. The green onion is fried in a wok before the soup and condiments are added.",img:f,currency:g,price:"5,000",rarity:b}];for(let n=0;n<t.length;n++){const a=document.createElement("div");a.className="food-container";const r=document.createElement("img");r.src=t[n].img,r.id=`${t[n].name}`,r.className="food-image",a.appendChild(r);const i=document.createElement("h2");i.textContent=t[n].name,i.className="food-name",a.appendChild(i);const o=document.createElement("p");o.textContent=t[n].text,o.className="food-text",a.appendChild(o);const d=document.createElement("img");d.src=t[n].currency,d.className="food-currency",a.appendChild(d);const c=document.createElement("p");c.textContent=t[n].price,c.className="food-price",a.appendChild(c);const s=document.createElement("img");s.src=t[n].rarity,s.className="food-rarity",a.appendChild(s),t[n].rarity===h?a.classList.add("one-star"):t[n].rarity===x?a.classList.add("two-star"):t[n].rarity===b&&a.classList.add("three-star"),e.appendChild(a)}return e}())}()})),$.addEventListener("click",(()=>{!function(){const e=document.querySelector("#content");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.id="contact-container";const t=document.createElement("img");t.src=v,t.id="pepper",e.appendChild(t);const n=document.createElement("img");n.src=C,n.id="fish",e.appendChild(n);const a=document.createElement("div");a.id="map-container";const r=document.createElement("h1");r.id="contact-us-title",r.textContent="Map",a.appendChild(r);const i=document.createElement("img");i.src=y,i.id="wanmin-map",a.appendChild(i);const o=document.createElement("p");o.id="contact-us-text",o.textContent="You can find us at: 888 Main St., Liyue Harbor, Teyvat",a.appendChild(o),e.appendChild(a);const d=document.createElement("img");d.src=w,d.id="jueyun",e.appendChild(d);const c=document.createElement("img");return c.src=E,c.id="chibi-xiangling",e.appendChild(c),e}())}()}))})()})();