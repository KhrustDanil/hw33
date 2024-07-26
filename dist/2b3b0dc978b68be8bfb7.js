import apples from"./images/apples.png";import bananas from"./images/bananas.png";import carrots from"./images/carrots.png";import coffee from"./images/coffee.png";import celery from"./images/celery.png";import grapes from"./images/grapes.png";import juice from"./images/juice.png";import kale from"./images/kale.png";import milk from"./images/milk.png";import oranges from"./images/oranges.png";import peas from"./images/peas.png";import pears from"./images/pears.png";import soda from"./images/soda.png";import tea from"./images/tea.png";import water from"./images/water.png";import spinach from"./images/spinach.png";import pineapples from"./images/pineapples.png";import broccoli from"./images/broccoli.png";const products=[{name:"Apples",category:"fruits",price:45,img:apples,expirationDate:"2024-08-01"},{name:"Bananas",category:"fruits",price:32,img:bananas,expirationDate:"2024-07-30"},{name:"Oranges",category:"fruits",price:78,img:oranges,expirationDate:"2024-08-10"},{name:"Pears",category:"fruits",price:55,img:pears,expirationDate:"2024-08-05"},{name:"Pineapples",category:"fruits",price:85,img:pineapples,expirationDate:"2024-08-15"},{name:"Grapes",category:"fruits",price:65,img:grapes,expirationDate:"2024-08-03"},{name:"Carrots",category:"vegetables",price:22,img:carrots,expirationDate:"2024-08-20"},{name:"Broccoli",category:"vegetables",price:53,img:broccoli,expirationDate:"2024-08-18"},{name:"Peas",category:"vegetables",price:18,img:peas,expirationDate:"2024-08-22"},{name:"Kale",category:"vegetables",price:30,img:kale,expirationDate:"2024-08-12"},{name:"Spinach",category:"vegetables",price:20,img:spinach,expirationDate:"2024-08-14"},{name:"Celery",category:"vegetables",price:25,img:celery,expirationDate:"2024-08-17"},{name:"Milk",category:"drinks",price:15,img:milk,expirationDate:"2024-08-05"},{name:"Water",category:"drinks",price:10,img:water,expirationDate:"2025-07-01"},{name:"Juice",category:"drinks",price:30,img:juice,expirationDate:"2024-08-20"},{name:"Soda",category:"drinks",price:25,img:soda,expirationDate:"2025-01-01"},{name:"Tea",category:"drinks",price:20,img:tea,expirationDate:"2025-12-31"},{name:"Coffee",category:"drinks",price:40,img:coffee,expirationDate:"2025-06-01"}];document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".category"),t=document.getElementById("product-list"),n=document.getElementById("product-info"),a=document.getElementById("product-details"),r=document.getElementById("buy-button"),i=document.getElementById("order-form"),o=document.getElementById("shopping-cart-section"),c=document.getElementById("shopping-cart"),m=document.getElementById("orders-button");let p;function s(e){if(e.preventDefault(),i.checkValidity()){const e=function(){const e=document.getElementById("full-name").value,t=document.getElementById("city").value,n=document.getElementById("delivery-branch").value,a=document.getElementById("cash-on-delivery"),r=document.getElementById("card-payment"),i=document.getElementById("quantity").value,o=p.price*i;let c;return a.checked?c=a.value:r.checked&&(c=r.value),{product:p.name,fullName:e,city:t,deliveryBranch:n,paymentMethod:c,quantity:i,price:o,orderTime:(new Date).toLocaleDateString("uk-UA",{timeZone:"Europe/Kiev"})}}();!function(e){const t=JSON.parse(localStorage.getItem("orders"))||[];t.push(e),localStorage.setItem("orders",JSON.stringify(t))}(e),alert(`Thank you for your purchase! You bought ${e.quantity} pieces of ${e.product} for ${e.price} UAH!`),i.reset(),i.style.display="none",n.style.display="none",a.innerText=""}}function d(){c.innerHTML="";const e=JSON.parse(localStorage.getItem("orders"))||[];if(e.length>0){const t=document.createElement("table");t.innerHTML="\n                <tr>\n                    <th>Product</th>\n                    <th>Full name</th>\n                    <th>City</th>\n                    <th>Delivery branch</th>\n                    <th>Payment method</th>\n                    <th>Quantity</th>\n                    <th>Price</th>\n                    <th>Order time</th>\n                </tr>\n            ",e.forEach((e=>{const n=document.createElement("tr");n.innerHTML=`\n                    <td>${e.product}</td>\n                    <td>${e.fullName}</td>\n                    <td>${e.city}</td>\n                    <td>${e.deliveryBranch}</td>\n                    <td>${e.paymentMethod}</td>\n                    <td>${e.quantity}</td>\n                    <td>${e.price}</td>\n                    <td>${e.orderTime}</td>\n                `,t.appendChild(n)})),c.appendChild(t);const n=document.createElement("button");n.classList.add("delete-orders-button"),n.innerText="Delete all orders",n.addEventListener("click",(()=>{localStorage.removeItem("orders"),d()})),c.appendChild(n)}else{const e=document.createElement("p");e.innerText="No orders",c.appendChild(e)}}e.forEach((e=>{e.addEventListener("click",(()=>{!function(e){t.innerHTML="";products.filter((t=>t.category===e)).forEach((e=>{const n=document.createElement("li");n.classList.add("product-card"),n.innerHTML=`\n                <img src="${e.img}" alt="${e.name}">\n                <h3>${e.name}</h3>\n                <p>Price: ${e.price} UAH</p>\n                <button class="product-info-button" data-name="${e.name}">More Info</button>\n            `,t.appendChild(n)})),document.querySelectorAll(".product-info-button").forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.name,o=products.find((e=>e.name===t));p=o,function(e){a.innerHTML=`\n            <h3>${e.name}</h3>\n            <p>Price: ${e.price} UAH</p>\n            <p>Expiration date: ${e.expirationDate}</p>\n        `,n.style.display="block",r.style.display="inline-block",i.style.display="none",r.onclick=()=>(i.style.display="block",void i.addEventListener("submit",s,{once:!0}))}(o)}))}))}(e.textContent.toLowerCase()),n.style.display="none"}))})),m.addEventListener("click",(()=>{o.style.display="block",d()}))}));