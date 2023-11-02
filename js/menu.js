const cart = document.querySelector(".modal-cart");
const cartIcon = document.querySelector("#cart-icon");
const cartClose = document.querySelector("#close-cart");

cartIcon.addEventListener('click', () => {
    cart.classList.add("active");
})

cartClose.addEventListener('click', () => {
    cart.classList.remove("active");
})