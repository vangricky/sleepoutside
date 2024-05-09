import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

function addProductToCart(product) {
  
  // Retrieve existing data from local storage
  let existingData = getLocalStorage("so-cart");

  // If there is existing data, append the new data to it
  if (existingData) {
    existingData.push(product);
    localStorage.setItem("so-cart", JSON.stringify(existingData));
  } else {
    // If there is no existing data, create a new array with the new data and store it
    setLocalStorage("so-cart", product); 
  }
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
