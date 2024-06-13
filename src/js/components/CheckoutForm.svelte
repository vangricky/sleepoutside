<script>
  import { getLocalStorage, formDataToJSON } from "../utils.mjs";
  import { checkout } from "../externalServices.mjs";

  let totalFinalPrice = 0;
  let tax = 0.0;
  let shipping = 0;
  let cartCount = getCartCount();
  let orderTotal = 0;

  function getCartCount() {
    const count = getLocalStorage("so-cart")?.length ?? "";
    return count;
  }

  function displayTotalPrice() {
    // Retrieve the value associated with the key "so-cart" from local storage
    const cartData = localStorage.getItem("so-cart");

    // Check if cartData is not null (i.e., the key exists in local storage)
    if (cartData) {
      // Parse the JSON string into a JavaScript object
      const cartItems = JSON.parse(cartData);

      // Initialize a variable to keep the sum of FinalPrice values
      totalFinalPrice = 0;

      // Iterate over the array of cart items and sum up the FinalPrice values
      for (let item of cartItems) {
        // Ensure that FinalPrice is a number before adding it to the total
        if (item.FinalPrice && !isNaN(item.FinalPrice)) {
          totalFinalPrice += parseFloat(item.FinalPrice);
        }
      }

      // Create a new element to display the total price
      const totalPriceElement = document.createElement("div");

      // Append the new element to the body or any specific part of the DOM
      document.body.appendChild(totalPriceElement);
      // Alternatively, you can append to a specific element like this:
      // document.querySelector('selector').appendChild(totalPriceElement);
    } else {
      console.log("No cart data found in local storage.");
    }
    return totalFinalPrice;
  }

  function displayOrderTotal() {
    tax = totalFinalPrice * 0.06;

    if (cartCount >= 1) {
      cartCount -= 1;
      shipping = cartCount * 2 + 10;
      cartCount += 1;
    }

    orderTotal = totalFinalPrice + tax + shipping;
  }

  const packageItems = function (items) {
    const simplifiedItems = items.map((item) => {
      console.log(item);
      return {
        id: item.Id,
        price: item.FinalPrice,
        name: item.Name,
        quantity: 1,
      };
    });
    return simplifiedItems;
  };

  const handleSubmit = async function (e) {
    const json = formDataToJSON(this);
    json.orderDate = new Date();
    json.orderTotal = orderTotal;
    json.tax = tax;
    json.shipping = shipping;
    json.items = packageItems(list);
    console.log(json);
    try {
      const res = await checkout(json);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  displayTotalPrice();
  displayOrderTotal();
</script>

<form name="checkout" on:submit|preventDefault={handleSubmit}>
  <fieldset>
    <legend>Shipping</legend>
    <label for="fname" class="top"
      >First Name<input for="fname" type="text" name="fname" required /></label
    >
    <label for="lname" class="top"
      >Last Name<input type="text" name="lname" required /></label
    >
    <label for="street" class="top"
      >Street<input type="text" name="street" placeholder="" required /></label
    >
    <label for="cityt" class="top"
      >City<input type="text" name="city" required /></label
    >
    <label for="state" class="top"
      >State<input type="text" name="state" required /></label
    >
    <label for="zip" class="top"
      >Zip<input type="number" name="zip" required /></label
    >
  </fieldset>
</form>

<form action="">
  <fieldset>
    <legend>Payment</legend>
    <label for="cardNumber" class="top"
      >Card number<input type="number" name="cardNumber" required /></label
    >
    <label for="expiration" class="top"
      >Expiration<input type="text" name="expiration" required /></label
    >
    <label for="code" class="top"
      >Security Code<input
        type="number"
        name="code"
        placeholder=""
        required
      /></label
    >
  </fieldset>
</form>

<form action="">
  <fieldset>
    <legend>Order Summary</legend>
    <p for="cartTotal" class="subtotal">
      Item Subtotal({cartCount})
      <span>${totalFinalPrice}</span>
    </p>
    <p for="shipping" class="shipping">
      Shipping Estimate <span>
        ${shipping}
      </span>
    </p>
    <p for="tax" class="tax">Tax <span>${tax.toFixed(2)}</span></p>
    <p for="orderTotal" class="orderTotal">
      <strong>Order Total</strong><span>${orderTotal.toFixed(2)}</span>
    </p>
    <button id="checkoutSubmit" type="submit">Checkout</button>
  </fieldset>
</form>
