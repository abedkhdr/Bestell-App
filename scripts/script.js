const menu = document.getElementById("menu");

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
<button type="button">Add to basket </button>
</div>
</div>
</div>
 `;
    }
  }
}

renderCategories();
