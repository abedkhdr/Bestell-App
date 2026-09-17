const menu = document.getElementById("menu");
const basketItems = [];
const basketItemsContainer = document.getElementById("basket-items");
const basketSummary = document.getElementById("basket-summary");
const basket = document.getElementById("basket");

function renderCategories() {
  for (let i = 0; i < categories.length; i++) {
    menu.innerHTML += getCategoryTemplate(i);

    const productsContainer = document.getElementById(`products-${i}`);

    for (let j = 0; j < categories[i].products.length; j++) {
      productsContainer.innerHTML += getProductTemplate(i, j);
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

    basketItemsContainer.innerHTML = getEmptyBasketTemplate();
    return;
  }
  for (let i = 0; i < basketItems.length; i++) {
    basketItemsContainer.innerHTML += getBasketItemTemplate(i);
  }
  basketSummary.innerHTML = getBasketSummaryTemplate();
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

function openMobileBasket() {
  if (basket.style.display === "flex") {
    basket.style.display = "none";
  } else {
    basket.style.display = "flex";
  }
}

function closeMobileBasket() {
  basket.style.display = "flex";
}
