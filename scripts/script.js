const menu = document.getElementById("menu");
const basket = document.getElementById("basket");

function renderCategories() {
  for (let i = 0; i < categories.length; i++) {
    menu.innerHTML += `  
<div class="category-section">
<div class="category-content">

<img src="${categories[i].image}" alt="${categories[i].name} icon">
<h2>${categories[i].name}</h2>
</div>
</div>`;

    for (let j = 0; j < categories[i].products.length; j++) {
      menu.innerHTML += `
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
  const product = categories[categoryIndex].products[productIndex];
  basket.innerHTML += `
<div class="basket-item">
      <p>${product.name}</p>
      <p>${product.price.toFixed(2)}</p>
<div>
<button type="button">-</button>
<p id="quantity">1</p>
<button type="button">+</button>
</div> 
</div>
`;
}
