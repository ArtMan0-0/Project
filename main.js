const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

let cart = {}; // об'єкт кошика
let total = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".product-catalog");
    const id = product.dataset.id;
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);

    if (cart[id]) {
      cart[id].quantity += 1;
    } else {
      cart[id] = {
        name,
        price,
        quantity: 1,
      };
    }

    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  total = 0;

  for (let id in cart) {
    const item = cart[id];
    const li = document.createElement("li");
    li.classList.add("cart-item");

    li.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-qty">${item.quantity} шт</span>
            <span class="item-total">₴${(item.price * item.quantity).toFixed(
              2
            )}</span>
        `;

    cartItems.appendChild(li);
    total += item.price * item.quantity;
  }

  totalElement.textContent = total.toFixed(2);
}

const confirmBtn = document.querySelector(".confirm");

confirmBtn.addEventListener("click", () => {
  alert("Замовлено!");
});
