const menu = document.getElementById("menu");
const basketItems = [];
const basketItemsContainer = document.getElementById("basket-items");
const basketSummary = document.getElementById("basket-summary");
const basket = document.getElementById("basket");

function renderCategories() {
  for (let i = 0; i < categories.length; i++) {
    menu.innerHTML += `  
<div class="category-section">
<div class="category-content">

<img src="${categories[i].image}" alt="${categories[i].name} icon">
<h2>${categories[i].name}</h2>
</div>
</div>
<div class="products-container" id="products-${i}"></div>
`;

    const productsContainer = document.getElementById(`products-${i}`);

    for (let j = 0; j < categories[i].products.length; j++) {
      productsContainer.innerHTML += `
<div class="product-section">
<img src= "${categories[i].products[j].image}" alt="${categories[i].products[j].name}">
<div class="product-info">
    
<div class="product-left">
<h3>${categories[i].products[j].name}</h3>
<p>${categories[i].products[j].description}</p>
</div>
<div class="product-right" >
<p>${categories[i].products[j].price.toFixed(2)} €</p>
<button type="button" onclick="addToBasket(${i}, ${j})">Add to basket </button>
</div>
</div>
</div>
 `;
    }
  }
}

renderCategories();

function addToBasket(categoryIndex, productIndex) {
  basket.style.display = "flex";
  const product = categories[categoryIndex].products[productIndex];

  for (let i = 0; i < basketItems.length; i++) {
    if (basketItems[i].product === product) {
      basketItems[i].quantity++;
      renderBasket();
      return;
    }
  }

  const basketItem = { product, quantity: 1 };

  basketItems.push(basketItem);

  renderBasket();
}

function increaseQuantity(i) {
  basketItems[i].quantity++;
  renderBasket();
}

function decreaseQuantity(i) {
  if (basketItems[i].quantity > 1) {
    basketItems[i].quantity--;
  } else {
    basketItems.splice(i, 1);
  }

  renderBasket();
}

function renderBasket() {
  basketItemsContainer.innerHTML = "";

  if (basketItems.length === 0) {
    basketSummary.innerHTML = "";
    basketItemsContainer.innerHTML = `
    <div class="empty-basket">
      <p>Nothing here yet.<br>Go ahead and choose something delicious!</p>
      <img src="./assets/icons/basket.png" alt="Empty basket icon">
    </div>
  `;
    return;
  }
  for (let i = 0; i < basketItems.length; i++) {
    basketItemsContainer.innerHTML += `
<div class="basket-item">
  <div class="basket-product">
    <p>${basketItems[i].quantity}x ${basketItems[i].product.name}</p>
<p>${(basketItems[i].product.price * basketItems[i].quantity).toFixed(2)} €</p>
</div>

  <div class="quantity">
    <button type="button" onclick="decreaseQuantity(${i})">-</button>
    <p>${basketItems[i].quantity}</p>
    <button type="button" onclick="increaseQuantity(${i})">+</button>
  </div>
</div>
`;
  }

  basketSummary.innerHTML = `
    <div class="basket-summary-row">
    <p>Subtotal</p>
    <p>${calculatePrice().toFixed(2)} €</p>
  </div>

  <div class="basket-summary-row">
    <p>Delivery fee</p>
    <p>4.99 €</p>
  </div>
  <div class="basket-total">
  <p>Total</p>
  <p>${(calculatePrice() + 4.99).toFixed(2)} €</p>
</div>

<button type="button" class="buy-button" onclick="buyNow()">Buy now (${(calculatePrice() + 4.99).toFixed(2)} €)</button>
  `;
}

function calculatePrice() {
  let price = 0;

  for (let i = 0; i < basketItems.length; i++) {
    price += basketItems[i].product.price * basketItems[i].quantity;
  }
  return price;
}

renderBasket();

function buyNow() {
  const orderDialog = document.getElementById("order-dialog");

  basketItems.length = 0;
  renderBasket();

  basket.style.display = "none";

  orderDialog.showModal();
}

function closeOrderDialog() {
  const orderDialog = document.getElementById("order-dialog");
  orderDialog.close();
}
