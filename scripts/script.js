const menu = document.getElementById("menu");

for (let i = 0; i < categories.length; i++) {
  menu.innerHTML += `<h2>${categories[i].name}</h2>`;
  menu.innerHTML += `<img src="${categories[i].image}" alt="${categories[i].name} icon">`;

  for (let j = 0; j < categories[i].products.length; j++) {
    menu.innerHTML += `
    <div class="product-section">
    <img src= "${categories[i].products[j].image}" alt="${categories[i].products[j].name}">
    <h3>${categories[i].products[j].name}</h3>
    <p>${categories[i].products[j].description}</p>
    <p>${categories[i].products[j].price} €</p>
    <button type="button">Add to basket </button>
    </div>
    `;
  }
}
