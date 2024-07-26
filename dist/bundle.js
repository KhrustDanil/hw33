(()=>{"use strict";var n={83:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,'\nbody {\n  font-family: Arial, sans-serif;\n  background-color: #F5F5F5;\n  margin: 0;\n  padding: 0;box-sizing: border-box;\n}\n\nh2, h3, h4 {\n  color: #333333;\n}\n\n.header {\n  background-color: #FF7043;\n  color: white;\n  padding: 20px;\n  text-align: center;\n  font-size: 24px;\n}\n\n.wrapper {\n  display: flex;\n  justify-content: space-between;\n  margin: 20px;\n}\n\n.left-sidebar, .right-sidebar {\n  background-color: #FFF;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n  width: 25%;\n}\n\n.left-sidebar h2, .right-sidebar h2 {\n  border-bottom: 2px solid #FF7043;\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n}\n\n.categories ul {\n  list-style: none;\n  padding: 0;\n}\n\n.category {\n  padding: 10px 0;\n  cursor: pointer;\n  color: #00796B;\n}\n\n.category:hover {\n  color: #FF7043;\n}\n\n/* Main Content */\n.main-content {\n  width: 50%;\n}\n\n#product-info {\n  display: none;\n}\n\n#products-section h2 {\n  border-bottom: 2px solid #FF7043;\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n#product-list {\n  padding-left: 0;\n}\n\n.product-card {\n  display: inline-block;\n  width: calc(33.333% - 20px);\n  margin: 10px;\n  vertical-align: top;\n  background-color: #FFF;\n  padding: 10px;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n  box-sizing: border-box;\n  text-align: center;\n}\n\n.product-card img {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 10px;\n}\n\n.product-info-button, #buy-button, #form-submit, .orders-button {\n  background-color: #00796B;\n  color: white;\n  border: none;\n  padding: 10px 40px;\n  border-radius: 8px;\n  cursor: pointer;\n  margin-top: 10px;\n}\n\n.product-info-button:hover, #buy-button:hover, #form-submit:hover, .orders-button:hover {\n  background-color: #005B4F;\n}\n\n.product-info-button:focus, #buy-button:focus, #form-submit:focus, .orders-button:focus {\n  outline: none;\n}\n\n/* Order Form */\n.order-form {\n  display: none;\n}\n\n.order-form label, .order-form input, .order-form select {\n  display: block;\n  width: 90%;\n  margin-bottom: 10px;\n}\n\n.order-form select {\n  width: 95%;\n}\n\n.order-form input, .order-form select {\n  padding: 10px;\n  border: 1px solid #CCC;\n  border-radius: 4px;\n}\n\n.order-form h4 {\n  border-bottom: 2px solid #FF7043;\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n}\n\n.order-form .form-item {\n  margin-top: 10px;\n}\n\n.order-form input[type="radio"] {\n  display: none;\n}\n\n.order-form input[type="radio"] + label {\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  display: inline-block;\n  margin-right: 15px;\n  color: #00796B;\n}\n\n.order-form input[type="radio"] + label:before {\n  content: \'\';\n  width: 18px;\n  height: 18px;\n  border: 2px solid #00796B;\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: white;\n}\n\n.order-form input[type="radio"]:checked + label:after {\n  content: \'\';\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #00796B;\n  position: absolute;\n  top: 6px;\n  left: 6px;\n}\n\n#shopping-cart-section {\n  display: none;\n  margin-top: 30px;\n}\n\n#shopping-cart {\n  max-height: 400px; \n  overflow-y: auto; \n  max-width: 100%;\n}\n\n#shopping-cart table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 20px;\n}\n\n#shopping-cart th, #shopping-cart td {\n  padding: 10px 15px;\n  border-bottom: 1px solid #ddd;\n  text-align: left;\n}\n\n#shopping-cart th {\n  background-color: #f4f4f4;\n  font-weight: bold;\n}\n\n#shopping-cart td {\n  background-color: #fff;\n}\n\n#shopping-cart tr:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\n/* Стиль для кнопок */\n.delete-orders-button {\n  background-color: #ff4c4c;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n\n.delete-orders-button:hover {\n  background-color: #ff0000;\n}\n\n\n#shopping-cart-section h2 {\n  font-size: 24px;\n  margin-bottom: 15px;\n}',""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var p=this[c][0];null!=p&&(i[p]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},601:n=>{n.exports=function(n){return n[1]}},385:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),e.hash&&(n+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(n)?'"'.concat(n,'"'):n):n}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var p=n[c],d=r.base?p[0]+r.base:p[0],s=a[d]||0,l="".concat(d," ").concat(s);a[d]=s+1;var u=t(l),m={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var p=r(n,o),d=0;d<a.length;d++){var s=t(a[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=p}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},912:(n,e,t)=>{n.exports=t.p+"e2e8c146cac87b0be70b.js"},817:(n,e,t)=>{n.exports=t.p+"456df8258c9eb4725e48.css"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),p=t.n(c),d=t(56),s=t.n(d),l=t(540),u=t.n(l),m=t(113),g=t.n(m),f=t(83),h={};h.styleTagTransform=g(),h.setAttributes=s(),h.insert=p().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),o()(f.A,h),f.A&&f.A.locals&&f.A.locals;const b=t.p+"images/apples.png",y=t.p+"images/bananas.png",x=t.p+"images/carrots.png",v=t.p+"images/coffee.png",k=t.p+"images/celery.png",w=t.p+"images/grapes.png",E=t.p+"images/juice.png",D=t.p+"images/kale.png",I=t.p+"images/milk.png",B=t.p+"images/oranges.png",F=t.p+"images/peas.png",T=t.p+"images/pears.png",C=t.p+"images/soda.png",S=t.p+"images/tea.png",L=t.p+"images/water.png",$=t.p+"images/spinach.png",M=[{name:"Apples",category:"fruits",price:45,img:b,expirationDate:"2024-08-01"},{name:"Bananas",category:"fruits",price:32,img:y,expirationDate:"2024-07-30"},{name:"Oranges",category:"fruits",price:78,img:B,expirationDate:"2024-08-10"},{name:"Pears",category:"fruits",price:55,img:T,expirationDate:"2024-08-05"},{name:"Pineapples",category:"fruits",price:85,img:t.p+"images/pineapples.png",expirationDate:"2024-08-15"},{name:"Grapes",category:"fruits",price:65,img:w,expirationDate:"2024-08-03"},{name:"Carrots",category:"vegetables",price:22,img:x,expirationDate:"2024-08-02"},{name:"Broccoli",category:"vegetables",price:53,img:t.p+"images/broccoli.png",expirationDate:"2024-08-18"},{name:"Peas",category:"vegetables",price:18,img:F,expirationDate:"2024-08-22"},{name:"Kale",category:"vegetables",price:19,img:D,expirationDate:"2024-08-20"},{name:"Spinach",category:"vegetables",price:20,img:$,expirationDate:"2024-08-14"},{name:"Celery",category:"vegetables",price:18,img:k,expirationDate:"2024-08-17"},{name:"Milk",category:"drinks",price:18,img:I,expirationDate:"2024-08-05"},{name:"Water",category:"drinks",price:10,img:L,expirationDate:"2025-07-01"},{name:"Juice",category:"drinks",price:30,img:E,expirationDate:"2024-08-20"},{name:"Soda",category:"drinks",price:25,img:C,expirationDate:"2025-01-01"},{name:"Tea",category:"drinks",price:20,img:S,expirationDate:"2025-12-31"},{name:"Coffee",category:"drinks",price:40,img:v,expirationDate:"2025-06-01"}];document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelectorAll(".category"),e=document.getElementById("product-list"),t=document.getElementById("product-info"),r=document.getElementById("product-details"),o=document.getElementById("buy-button"),a=document.getElementById("order-form"),i=document.getElementById("shopping-cart-section"),c=document.getElementById("shopping-cart"),p=document.getElementById("orders-button");let d;function s(n){if(n.preventDefault(),a.checkValidity()){const n=function(){const n=document.getElementById("full-name").value,e=document.getElementById("city").value,t=document.getElementById("delivery-branch").value,r=document.getElementById("cash-on-delivery"),o=document.getElementById("card-payment"),a=document.getElementById("quantity").value,i=d.price*a;let c;return r.checked?c=r.value:o.checked&&(c=o.value),{product:d.name,fullName:n,city:e,deliveryBranch:t,paymentMethod:c,quantity:a,price:i,orderTime:(new Date).toLocaleDateString("uk-UA",{timeZone:"Europe/Kiev"})}}();!function(n){const e=JSON.parse(localStorage.getItem("orders"))||[];e.push(n),localStorage.setItem("orders",JSON.stringify(e))}(n),alert(`Thank you for your purchase! You bought ${n.quantity} pieces of ${n.product} for ${n.price} UAH!`),a.reset(),a.style.display="none",t.style.display="none",r.innerText=""}}function l(){c.innerHTML="";const n=JSON.parse(localStorage.getItem("orders"))||[];if(n.length>0){const e=document.createElement("table");e.innerHTML="\n                <tr>\n                    <th>Product</th>\n                    <th>Full name</th>\n                    <th>City</th>\n                    <th>Delivery branch</th>\n                    <th>Payment method</th>\n                    <th>Quantity</th>\n                    <th>Price</th>\n                    <th>Order time</th>\n                </tr>\n            ",n.forEach((n=>{const t=document.createElement("tr");t.innerHTML=`\n                    <td>${n.product}</td>\n                    <td>${n.fullName}</td>\n                    <td>${n.city}</td>\n                    <td>${n.deliveryBranch}</td>\n                    <td>${n.paymentMethod}</td>\n                    <td>${n.quantity}</td>\n                    <td>${n.price}</td>\n                    <td>${n.orderTime}</td>\n                `,e.appendChild(t)})),c.appendChild(e);const t=document.createElement("button");t.classList.add("delete-orders-button"),t.innerText="Delete all orders",t.addEventListener("click",(()=>{localStorage.removeItem("orders"),l()})),c.appendChild(t)}else{const n=document.createElement("p");n.innerText="No orders",c.appendChild(n)}}n.forEach((n=>{n.addEventListener("click",(()=>{!function(n){e.innerHTML="";M.filter((e=>e.category===n)).forEach((n=>{const t=document.createElement("li");t.classList.add("product-card"),t.innerHTML=`\n                <img src="${n.img}" alt="${n.name}">\n                <h3>${n.name}</h3>\n                <p>Price: ${n.price} UAH</p>\n                <button class="product-info-button" data-name="${n.name}">More Info</button>\n            `,e.appendChild(t)})),document.querySelectorAll(".product-info-button").forEach((n=>{n.addEventListener("click",(()=>{const e=n.dataset.name,i=M.find((n=>n.name===e));d=i,function(n){r.innerHTML=`\n            <h3>${n.name}</h3>\n            <p>Price: ${n.price} UAH</p>\n            <p>Expiration date: ${n.expirationDate}</p>\n        `,t.style.display="block",o.style.display="inline-block",a.style.display="none",o.onclick=()=>(a.style.display="block",void a.addEventListener("submit",s,{once:!0}))}(i)}))}))}(n.textContent.toLowerCase()),t.style.display="none"}))})),p.addEventListener("click",(()=>{i.style.display="block",l()}))}));var A=t(385),P=t.n(A),N=new URL(t(817),t.b),H=new URL(t(912),t.b);P()(N),P()(H)})();