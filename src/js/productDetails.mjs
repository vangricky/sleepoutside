import { findProductById } from "./productData.mjs";
import { setLocalStorage } from "./utils.mjs";

let product = {};

export default async function productDetails(productId, selector){
    product = await findProductById(productId);
    const el = document.querySelector(selector);
    el.insertAdjacentHTML("afterBegin", productDetailsTemplate(product));
    document.getElementById("addToCart").addEventListener("click", addProductToCart);


}

function addProductToCart(product) {
  
    // // Retrieve existing data from local storage
    // let existingData = getLocalStorage("so-cart");
  
    // // If there is existing data, append the new data to it
    // if (existingData) {
    //   existingData.push(product);
    //    localStorage.setItem("so-cart", JSON.stringify(existingData));
    // } else {
      // If there is no existing data, create a new array with the new data and store it
      setLocalStorage("so-cart", product); 
    // }
  }

// // add to cart button event handler
// async function addToCartHandler(e) {
//     const product = await findProductById(e.target.dataset.id);
//     addProductToCart(product);
//   }
  
//   // add listener to Add to Cart button
//   document
//     .getElementById("addToCart")
//     .addEventListener("click", addToCartHandler);
  

function productDetailsTemplate(){
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