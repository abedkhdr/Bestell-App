function getCategoryTemplate(i) {
  return `
<div class="category-section">
  <div class="category-content">
    <img src="${categories[i].image}" alt="${categories[i].name} icon">
    <h2>${categories[i].name}</h2>
  </div>
</div>

<div class="products-container" id="products-${i}"></div>
`;
}

function getProductTemplate(i, j) {
  return `
<div class="product-section">
  <img src="${categories[i].products[j].image}" alt="${categories[i].products[j].name}">

  <div class="product-info">
    <div class="product-left">
      <h3>${categories[i].products[j].name}</h3>
      <p>${categories[i].products[j].description}</p>
    </div>

    <div class="product-right">
      <p>${categories[i].products[j].price.toFixed(2)} €</p>
      <button type="button" onclick="addToBasket(${i}, ${j})">
        Add to basket
      </button>
    </div>
  </div>
</div>
`;
}

function getBasketItemTemplate(i) {
  return `
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

function getEmptyBasketTemplate() {
  return `
    <div class="empty-basket">
      <p>Nothing here yet.<br>Go ahead and choose something delicious!</p>
      <img src="./assets/icons/basket.png" alt="Empty basket icon">
    </div>
  `;
}

function getBasketSummaryTemplate() {
  return `
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
