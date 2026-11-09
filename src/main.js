import "./style.css";

// =================================
// SHOPMATE PRODUCT DATA
// =================================

const products = [
  {
    id: 1,
    name: "Handwoven bag",
    price: 120.0,
    seller: "Made locally",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
    alt: "Handcrafted bag",
  },

  {
    id: 2,
    name: "Artisan pottery",
    price: 85.0,
    seller: "Made locally",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500",
    alt: "Ceramic pottery",
  },

  {
    id: 3,
    name: "Local creation",
    price: 65.0,
    seller: "Made locally",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500",
    alt: "Handcrafted product",
  },

  {
    id: 4,
    name: "Home collection",
    price: 95.0,
    seller: "Made locally",
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=500",
    alt: "Handmade home decor",
  },
];

// =================================
// DOM ELEMENTS
// =================================

const productContainer = document.querySelector("#products-container");

// =================================
// DISPLAY PRODUCTS
// =================================

function displayProducts() {
  if (!productContainer) {
    console.error("Shopmate: Product container not found.");
    return;
  }

  productContainer.innerHTML = products
    .map((product) => {
      return `
            <article class="product">

                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${product.alt}"
                    loading="lazy"
                />

                <div class="product-info">

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <p class="product-seller">
                        <svg class="shopmate-icon product-origin-icon" aria-hidden="true">
                            <use href="/icons.svg#icon-leaf"></use>
                        </svg>

                        <span>${product.seller}</span>
                    </p>

                    <p class="product-price">
                        GH₵ ${product.price.toFixed(2)}
                    </p>

                </div>

            </article>
        `;
    })
    .join("");
}

// =================================
// INITIALIZE SHOPMATE
// =================================

displayProducts();
