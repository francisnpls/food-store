// Head-menu choices
const menuChoices = {
    all: document.querySelector(".all"),
    vegetable: document.querySelector(".vegetable"),
    sandwich: document.querySelector(".sandwich"),
    burger: document.querySelector(".burger"),
    pizza: document.querySelector(".pizzza"),
    pasta: document.querySelector(".pasta"),
    meal: document.querySelector(".meal"),
};

// Products
const productLists = {
    vegetable: document.querySelectorAll(".vegetable-products"),
    sandwich: document.querySelectorAll(".sandwich-products"),
    burger: document.querySelectorAll(".burger-products"),
    pizza: document.querySelectorAll(".pizza-products"),
    pasta: document.querySelectorAll(".pasta-products"),
    meal: document.querySelectorAll(".meal-products"),
};

// Function to display product list based on menu choice
function displayProductList(menuChoice) {
    for (const key in productLists) {
        productLists[key].forEach(product => {
            product.style.display = "none";
        });
    }
    productLists[menuChoice].forEach(product => {
        product.style.display = "block";
    });
}

// Add click event listeners
for (const key in menuChoices) {
    menuChoices[key].addEventListener('click', () => {
        if (key === 'all') {
            for (const productListKey in productLists) {
                productLists[productListKey].forEach(product => {
                    product.style.display = "block";
                });
            }
        } else {
            displayProductList(key);
        }
    });
}





// Modal-Cart
const cart = document.querySelector(".modal-cart");
const cartIcon = document.querySelector("#cart-icon");
const cartClose = document.querySelector("#close-cart");

// Open cart
cartIcon.addEventListener('click', () => {
    cart.classList.add("active");
});

// Close cart
cartClose.addEventListener('click', () => {
    cart.classList.remove("active");
});



// Working Cart JS 
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// Making Function
function ready() {
    // Remove Item From Cart
    let removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons)
    for (let i = 0; i < removeCartButtons.length; i++) {
        let button = removeCartButtons[i]
        button.addEventListener('click', removeCartItems);
    }

    // Quantity Changes
    let quantityInputs = document.getElementsByClassName("cart-quantity");
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged);
    }

    // Add to Cart
    let addCart = document.getElementsByClassName("add-cart");
    for (let i = 0; i < addCart.length; i++) {
        let button = addCart[i]
        button.addEventListener('click', addCartClicked);
    }

    // Buy Button Work
    document.getElementsByClassName("btn")[0].addEventListener('click', buyButtonClicked);
}



// Remove Cart Button Function
function removeCartItems(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal()
}

// Quantity Changes Function 
function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal()
}

function buyButtonClicked() {
    alert('Your order is placed')
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

// Add to Card Function
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("product-price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");

    // Check if a product with the same title already exists
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].textContent === title) {
            alert("This product is already in your cart.");
            return; // Exit the function to prevent adding the duplicate
        }
    }

    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="fa-solid fa-trash-can cart-remove"></i>`;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener('click', removeCartItems);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener('change', quantityChanged);
}

// Update Total
function updateTotal() {
    const cartContent = document.getElementsByClassName("cart-content")[0];
    const cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        const cartBox = cartBoxes[i];
        const priceElement = cartBox.getElementsByClassName("cart-price")[0];
        const quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        const price = parseFloat(priceElement.innerText.replace("$", ""));
        const quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    // if price Contain some Cents Value
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;

}