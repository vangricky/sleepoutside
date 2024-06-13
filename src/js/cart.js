import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  // if cartItem returns null or is empty, then create an empty string
  const cartItems = getLocalStorage("so-cart") || [];
  const htmlItems = cartItems.map((item) => cartItemTemplate(item)); 
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

// function showItems() {
//   // const totalCost = getLocalStorage("so-cart");


//   if (getLocalStorage("so-cart")) {
//     document.querySelector(".total").style.display = "block";
//     // document.querySelector(".total-product").innerHTML = ;
//   } else {
//     document.querySelector(".total").style.display = "none";
//   }
// }

export function showItems() {
  // Retrieve the value associated with the key "so-cart" from local storage
  const cartData = localStorage.getItem("so-cart");

  // Check if cartData is not null (i.e., the key exists in local storage)
  if (cartData) {
    // Parse the JSON string into a JavaScript object
    const cartItems = JSON.parse(cartData);

    // Initialize a variable to keep the sum of FinalPrice values
    let totalFinalPrice = 0;

    // Iterate over the array of cart items and sum up the FinalPrice values
    for (let item of cartItems) {
      // Ensure that FinalPrice is a number before adding it to the total
      if (item.FinalPrice && !isNaN(item.FinalPrice)) {
        totalFinalPrice += parseFloat(item.FinalPrice);
      }
    }

    // Find the element with the class "total-product" and update its content
    const totalProductElement = document.querySelector(".total-product");
    if (totalProductElement) {
      totalProductElement.textContent = `$${totalFinalPrice.toFixed(2)}`;
    } else {
      console.log("Element with class 'total-product' not found.");
    }
  } else {
    console.log("No cart data found in local storage.");
  }
}

// Call the function to show items and update the total price
showItems();

export function displayTotalPrice() {
  // Retrieve the value associated with the key "so-cart" from local storage
  const cartData = localStorage.getItem("so-cart");

  // Check if cartData is not null (i.e., the key exists in local storage)
  if (cartData) {
    // Parse the JSON string into a JavaScript object
    const cartItems = JSON.parse(cartData);

    // Initialize a variable to keep the sum of FinalPrice values
    let totalFinalPrice = 0;

    // Iterate over the array of cart items and sum up the FinalPrice values
    for (let item of cartItems) {
      // Ensure that FinalPrice is a number before adding it to the total
      if (item.FinalPrice && !isNaN(item.FinalPrice)) {
        totalFinalPrice += parseFloat(item.FinalPrice);
      }
    }

    // Create a new element to display the total price
    const totalPriceElement = document.createElement('div');
    totalPriceElement.textContent = `Total Price: $${totalFinalPrice.toFixed(2)}`;

    // Append the new element to the body or any specific part of the DOM
    document.body.appendChild(totalPriceElement);
    // Alternatively, you can append to a specific element like this:
    // document.querySelector('selector').appendChild(totalPriceElement);

  } else {
    console.log("No cart data found in local storage.");
  }
}



function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryLarge}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}



renderCartContents();
showItems();