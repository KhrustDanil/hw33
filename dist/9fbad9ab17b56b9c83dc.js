import apples from"./images/apples.png";import bananas from"./images/bananas.png";import carrots from"./images/carrots.png";import coffee from"./images/coffee.png";import celery from"./images/celery.png";import grapes from"./images/grapes.png";import juice from"./images/juice.png";import kale from"./images/kale.png";import milk from"./images/milk.png";import oranges from"./images/oranges.png";import peas from"./images/peas.png";import pears from"./images/pears.png";import soda from"./images/soda.png";import tea from"./images/tea.png";import water from"./images/water.png";import spinach from"./images/spinach.png";import pineapples from"./images/pineapples.png";import broccoli from"./images/broccoli.png";const products=[{name:"Apples",category:"fruits",price:45,img:apples,expirationDate:"2024-08-01"},{name:"Bananas",category:"fruits",price:32,img:bananas,expirationDate:"2024-07-30"},{name:"Oranges",category:"fruits",price:78,img:oranges,expirationDate:"2024-08-10"},{name:"Pears",category:"fruits",price:55,img:pears,expirationDate:"2024-08-05"},{name:"Pineapples",category:"fruits",price:85,img:pineapples,expirationDate:"2024-08-15"},{name:"Grapes",category:"fruits",price:65,img:grapes,expirationDate:"2024-08-03"},{name:"Carrots",category:"vegetables",price:22,img:carrots,expirationDate:"2024-08-02"},{name:"Broccoli",category:"vegetables",price:53,img:broccoli,expirationDate:"2024-08-18"},{name:"Peas",category:"vegetables",price:18,img:peas,expirationDate:"2024-08-22"},{name:"Kale",category:"vegetables",price:19,img:kale,expirationDate:"2024-08-20"},{name:"Spinach",category:"vegetables",price:20,img:spinach,expirationDate:"2024-08-14"},{name:"Celery",category:"vegetables",price:18,img:celery,expirationDate:"2024-08-17"},{name:"Milk",category:"drinks",price:18,img:milk,expirationDate:"2024-08-05"},{name:"Water",category:"drinks",price:10,img:water,expirationDate:"2025-07-01"},{name:"Juice",category:"drinks",price:30,img:juice,expirationDate:"2024-08-20"},{name:"Soda",category:"drinks",price:25,img:soda,expirationDate:"2025-01-01"},{name:"Tea",category:"drinks",price:20,img:tea,expirationDate:"2025-12-31"},{name:"Coffee",category:"drinks",price:40,img:coffee,expirationDate:"2025-06-01"}],categories=document.querySelectorAll(".category"),productList=document.getElementById("product-list"),productInfo=document.getElementById("product-info"),productDetails=document.getElementById("product-details"),buyButton=document.getElementById("buy-button"),orderForm=document.getElementById("order-form"),shoppingCartSection=document.getElementById("shopping-cart-section"),shoppingCart=document.getElementById("shopping-cart"),ordersButton=document.getElementById("orders-button");let selectedProduct;function showProducts(e){productList.innerHTML="",products.filter((t=>t.category===e)).forEach((e=>{const t=document.createElement("li");t.classList.add("product-card"),t.innerHTML=`\n                <img src="${e.img}" alt="${e.name}">\n                <h3>${e.name}</h3>\n                <p>Price: ${e.price} UAH</p>\n                <button class="product-info-button" data-name="${e.name}">More Info</button>\n            `,productList.appendChild(t)})),document.querySelectorAll(".product-info-button").forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.name,r=products.find((e=>e.name===t));selectedProduct=r,displayProductInfo(r)}))}))}function displayProductInfo(e){productDetails.innerHTML=`\n            <h3>${e.name}</h3>\n            <p>Price: ${e.price} UAH</p>\n            <p>Expiration date: ${e.expirationDate}</p>\n        `,productInfo.style.display="block",buyButton.style.display="inline-block",orderForm.style.display="none",buyButton.onclick=()=>showOrderForm(e)}function showOrderForm(e){orderForm.style.display="block",orderForm.addEventListener("submit",handleOrderSubmission,{once:!0})}function handleOrderSubmission(e){if(e.preventDefault(),orderForm.checkValidity()){const e=fillOrderForm();saveOrder(e),alert(`Thank you for your purchase! You bought ${e.quantity} pieces of ${e.product} for ${e.price} UAH!`),orderForm.reset(),orderForm.style.display="none",productInfo.style.display="none",productDetails.innerText=""}}function fillOrderForm(){const e=document.getElementById("full-name").value,t=document.getElementById("city").value,r=document.getElementById("delivery-branch").value,n=document.getElementById("cash-on-delivery"),o=document.getElementById("card-payment"),a=document.getElementById("quantity").value,i=selectedProduct.price*a;let c;return n.checked?c=n.value:o.checked&&(c=o.value),{product:selectedProduct.name,fullName:e,city:t,deliveryBranch:r,paymentMethod:c,quantity:a,price:i,orderTime:(new Date).toLocaleDateString("uk-UA",{timeZone:"Europe/Kiev"})}}function saveOrder(e){const t=JSON.parse(localStorage.getItem("orders"))||[];t.push(e),localStorage.setItem("orders",JSON.stringify(t))}function getOrders(){return JSON.parse(localStorage.getItem("orders"))||[]}function showUserOrders(){shoppingCart.innerHTML="";const e=getOrders();if(e.length>0){const t=document.createElement("table");t.innerHTML="\n                <tr>\n                    <th>Product</th>\n                    <th>Full name</th>\n                    <th>City</th>\n                    <th>Delivery branch</th>\n                    <th>Payment method</th>\n                    <th>Quantity</th>\n                    <th>Price</th>\n                    <th>Order time</th>\n                </tr>\n            ",e.forEach((e=>{const r=document.createElement("tr");r.innerHTML=`\n                    <td>${e.product}</td>\n                    <td>${e.fullName}</td>\n                    <td>${e.city}</td>\n                    <td>${e.deliveryBranch}</td>\n                    <td>${e.paymentMethod}</td>\n                    <td>${e.quantity}</td>\n                    <td>${e.price}</td>\n                    <td>${e.orderTime}</td>\n                `,t.appendChild(r)})),shoppingCart.appendChild(t);const r=document.createElement("button");r.classList.add("delete-orders-button"),r.innerText="Delete all orders",r.addEventListener("click",(()=>{localStorage.removeItem("orders"),showUserOrders()})),shoppingCart.appendChild(r)}else{const e=document.createElement("p");e.innerText="No orders",shoppingCart.appendChild(e)}}categories.forEach((e=>{e.addEventListener("click",(()=>{showProducts(e.textContent.toLowerCase()),productInfo.style.display="none"}))})),ordersButton.addEventListener("click",(()=>{shoppingCartSection.style.display="block",showUserOrders()}));