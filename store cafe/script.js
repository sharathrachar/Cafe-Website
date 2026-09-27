let cart = [];


// ADD PRODUCT TO CART
function addToCart(name, price) {

    const existingProduct = cart.find(
        product => product.name === name
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    alert(name + " added to cart!");
}


// UPDATE CART COUNT
function updateCart() {

    let totalQuantity = 0;

    cart.forEach(function(product) {

        totalQuantity += product.quantity;

    });

    document.getElementById("cartCount").innerText =
        totalQuantity;
}


// OPEN CART
function openCart() {

    document.getElementById("cartPopup").style.display =
        "block";

    displayCart();
}


// CLOSE CART
function closeCart() {

    document.getElementById("cartPopup").style.display =
        "none";
}


// DISPLAY CART PRODUCTS
function displayCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        cartTotal.innerText = "0";

        return;
    }


    cartItems.innerHTML = "";

    let total = 0;


    cart.forEach(function(product, index) {

        const itemTotal =
            product.price * product.quantity;

        total += itemTotal;


        cartItems.innerHTML += `

            <div class="cart-item">

                <span>
                    ${product.name}
                    × ${product.quantity}
                </span>

                <strong>
                    ₹${itemTotal}
                </strong>

            </div>

        `;

    });


    cartTotal.innerText = total;
}


// CLOSE POPUP WHEN CLICKING OUTSIDE
window.onclick = function(event) {

    const popup =
        document.getElementById("cartPopup");

    if (event.target === popup) {

        closeCart();

    }

};