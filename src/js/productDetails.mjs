import { findProductById } from "./productData.mjs";
import { setLocalStorage, getLocalStorage } from "./utils.mjs";

let product = {};

export default async function productDetails(productId, selector) {
    product = await findProductById(productId);
    const el = document.querySelector(selector);
    el.insertAdjacentHTML("afterBegin", productDetailsTemplate(product));
    
    document.getElementById("addToCart").addEventListener("click", addToCartHandler);
}

async function addToCartHandler(e) {
    const product = await findProductById(e.target.dataset.id);
    addProductToCart(product);
}

function addProductToCart(productCart) {
    let cart = getLocalStorage("so-cart");
    if (!cart) {
        cart = [];
    } else if (!Array.isArray(cart)) {
        cart = [];
    }
    cart.push(productCart);
    setLocalStorage("so-cart", cart);

    cartCount.set(cart);
}

function productDetailsTemplate() {
    return `<h3>${product.Brand.Name}</h3>
  <h2 class="divider">${product.NameWithoutBrand}</h2>
  <img
    class="divider"
    src="${product.Image}"
    alt="${product.Name}"
  />
  <p class="product-card__price">$${product.FinalPrice}</p>
  <p class="product__color">${product.Colors[0].ColorName}</p>
  <p class="product__description">
  ${product.DescriptionHtmlSimple}
  </p>
  <div class="product-detail__add">
    <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
  </div>`;
}
