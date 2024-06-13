<script>
  import { cartCount } from "../stores.mjs";
</script>

<form action="">
  <fieldset>
    <legend>Shipping</legend>
    <label class="top"
      >First Name<input type="text" name="fname" required /></label
    >
    <label class="top"
      >Last Name<input type="text" name="lname" required /></label
    >
    <label class="top"
      >Street<input type="text" name="street" placeholder="" required /></label
    >
    <label class="top">City<input type="text" name="city" required /></label>
    <label class="top">State<input type="text" name="state" required /></label>
    <label class="top">Zip<input type="number" name="zip" required /></label>
  </fieldset>
</form>

<form action="">
  <fieldset>
    <legend>Payment</legend>
    <label class="top"
      >Card number<input type="number" name="cardNumber" required /></label
    >
    <label class="top"
      >Expiration<input type="text" name="expiration" required /></label
    >
    <label class="top"
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
    <p class="subtotal">
      Item Subtotal({$cartCount}) <span class="total-product"></span>
    </p>
    <p class="shipping">
      Shipping Estimate <span
        >$10 for the first item plus $2 for each additional item
      </span>
    </p>
    <p class="tax">Tax <span>6%</span></p>
    <p class="orderTotal"><strong>Order Total</strong></p>
  </fieldset>
</form>
