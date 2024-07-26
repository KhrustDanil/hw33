import apples from './images/apples.png';
import bananas from './images/bananas.png';
import carrots from './images/carrots.png';
import coffee from './images/coffee.png';
import celery from './images/celery.png';
import grapes from './images/grapes.png';
import juice from './images/juice.png';
import kale from './images/kale.png';
import milk from './images/milk.png';
import oranges from './images/oranges.png';
import peas from './images/peas.png';
import pears from './images/pears.png';
import soda from './images/soda.png';
import tea from './images/tea.png';
import water from './images/water.png';
import spinach from './images/spinach.png';
import pineapples from './images/pineapples.png';
import broccoli from './images/broccoli.png';

const products = [
    {
        name: 'Apples',
        category: 'fruits',
        price: 45,
        img: apples,
        expirationDate: '2024-08-01'
    },
    {
        name: 'Bananas',
        category: 'fruits',
        price: 32,
        img: bananas,
        expirationDate: '2024-07-30'
    },
    {
        name: 'Oranges',
        category: 'fruits',
        price: 78,
        img: oranges,
        expirationDate: '2024-08-10'
    },
    {
        name: 'Pears',
        category: 'fruits',
        price: 55,
        img: pears,
        expirationDate: '2024-08-05'
    },
    {
        name: 'Pineapples',
        category: 'fruits',
        price: 85,
        img: pineapples,
        expirationDate: '2024-08-15'
    },
    {
        name: 'Grapes',
        category: 'fruits',
        price: 65,
        img: grapes,
        expirationDate: '2024-08-03'
    },
    {
        name: 'Carrots',
        category: 'vegetables',
        price: 22,
        img: carrots,
        expirationDate: '2024-08-02'
    },
    {
        name: 'Broccoli',
        category: 'vegetables',
        price: 53,
        img: broccoli,
        expirationDate: '2024-08-18'
    },
    {
        name: 'Peas',
        category: 'vegetables',
        price: 18,
        img: peas,
        expirationDate: '2024-08-22'
    },
    {
        name: 'Kale',
        category: 'vegetables',
        price: 19,
        img: kale,
        expirationDate: '2024-08-20'
    },
    {
        name: 'Spinach',
        category: 'vegetables',
        price: 20,
        img: spinach,
        expirationDate: '2024-08-14'
    },
    {
        name: 'Celery',
        category: 'vegetables',
        price: 18,
        img: celery,
        expirationDate: '2024-08-17'
    },
    {
        name: 'Milk',
        category: 'drinks',
        price: 18,
        img: milk,
        expirationDate: '2024-08-05'
    },
    {
        name: 'Water',
        category: 'drinks',
        price: 10,
        img: water,
        expirationDate: '2025-07-01'
    },
    {
        name: 'Juice',
        category: 'drinks',
        price: 30,
        img: juice,
        expirationDate: '2024-08-20'
    },
    {
        name: 'Soda',
        category: 'drinks',
        price: 25,
        img: soda,
        expirationDate: '2025-01-01'
    },
    {
        name: 'Tea',
        category: 'drinks',
        price: 20,
        img: tea,
        expirationDate: '2025-12-31'
    },
    {
        name: 'Coffee',
        category: 'drinks',
        price: 40,
        img: coffee,
        expirationDate: '2025-06-01'
    }
];

    const categories = document.querySelectorAll('.category');
    const productList = document.getElementById('product-list');
    const productInfo = document.getElementById('product-info');
    const productDetails = document.getElementById('product-details');
    const buyButton = document.getElementById('buy-button');
    const orderForm = document.getElementById('order-form');
    const shoppingCartSection = document.getElementById('shopping-cart-section');
    const shoppingCart = document.getElementById('shopping-cart');
    const ordersButton = document.getElementById('orders-button');

    let selectedProduct;

    categories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryName = category.textContent.toLowerCase();
            showProducts(categoryName);
            productInfo.style.display = 'none';
        });
    });

    ordersButton.addEventListener('click', () => {
        shoppingCartSection.style.display = 'block';
        showUserOrders();
    });

    function showProducts(category) {
        productList.innerHTML = '';
        const filteredProducts = products.filter(product => product.category === category);
        filteredProducts.forEach(product => {
            const listItem = document.createElement('li');
            listItem.classList.add('product-card');
            listItem.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ${product.price} UAH</p>
                <button class="product-info-button" data-name="${product.name}">More Info</button>
            `;
            productList.appendChild(listItem);
        });

        document.querySelectorAll('.product-info-button').forEach(button => {
            button.addEventListener('click', () => {
                const productName = button.dataset.name;
                const product = products.find(p => p.name === productName);
                selectedProduct = product;
                displayProductInfo(product);
            });
        });
    }

    function displayProductInfo(product) {
        productDetails.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price} UAH</p>
            <p>Expiration date: ${product.expirationDate}</p>
        `;
        productInfo.style.display = 'block';
        buyButton.style.display = 'inline-block';
        orderForm.style.display = 'none';
        buyButton.onclick = () => showOrderForm(product);
    }

    function showOrderForm(product) {
        orderForm.style.display = 'block';
        orderForm.addEventListener('submit', handleOrderSubmission, { once: true });
    }

    function handleOrderSubmission(e) {
        e.preventDefault();
        if (orderForm.checkValidity()) {
            const order = fillOrderForm();
            saveOrder(order);
            alert(`Thank you for your purchase! You bought ${order.quantity} pieces of ${order.product} for ${order.price} UAH!`);
            orderForm.reset();
            orderForm.style.display = 'none';
            productInfo.style.display = 'none';
            productDetails.innerText = '';
        }
    }

    function fillOrderForm() {
        const fullName = document.getElementById('full-name').value;
        const city = document.getElementById('city').value;
        const deliveryBranch = document.getElementById('delivery-branch').value;
        const cashOnDelivery = document.getElementById('cash-on-delivery');
        const cardPayment = document.getElementById('card-payment');
        const quantity = document.getElementById('quantity').value;
        const price = selectedProduct.price * quantity;

        let selectedPaymentMethod;
        if (cashOnDelivery.checked) {
            selectedPaymentMethod = cashOnDelivery.value;
        } else if (cardPayment.checked) {
            selectedPaymentMethod = cardPayment.value;
        }

        return {
            product: selectedProduct.name,
            fullName: fullName,
            city: city,
            deliveryBranch: deliveryBranch,
            paymentMethod: selectedPaymentMethod,
            quantity: quantity,
            price: price,
            orderTime: new Date().toLocaleDateString('uk-UA', { timeZone: 'Europe/Kiev' })
        };
    }

    function saveOrder(order) {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
    }

    function getOrders() {
        return JSON.parse(localStorage.getItem('orders')) || [];
    }

    function showUserOrders() {
        shoppingCart.innerHTML = '';
        const storedOrders = getOrders();
        if (storedOrders.length > 0) {
            const table = document.createElement('table');
            table.innerHTML = `
                <tr>
                    <th>Product</th>
                    <th>Full name</th>
                    <th>City</th>
                    <th>Delivery branch</th>
                    <th>Payment method</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Order time</th>
                </tr>
            `;
            storedOrders.forEach(order => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${order.product}</td>
                    <td>${order.fullName}</td>
                    <td>${order.city}</td>
                    <td>${order.deliveryBranch}</td>
                    <td>${order.paymentMethod}</td>
                    <td>${order.quantity}</td>
                    <td>${order.price}</td>
                    <td>${order.orderTime}</td>
                `;
                table.appendChild(row);
            });
            shoppingCart.appendChild(table);
            const delOrdersListButton = document.createElement('button');
            delOrdersListButton.classList.add('delete-orders-button');
            delOrdersListButton.innerText = 'Delete all orders';
            delOrdersListButton.addEventListener('click', () => {
                localStorage.removeItem('orders');
                showUserOrders();
            });
            shoppingCart.appendChild(delOrdersListButton);
        } else {
            const noOrders = document.createElement('p');
            noOrders.innerText = 'No orders';
            shoppingCart.appendChild(noOrders);
        }
    }

