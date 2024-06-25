import { checkLogin, login } from "./auth.mjs";
import { getParam, renderHeaderFooter } from "./utils.mjs";

renderHeaderFooter();
const redirect = getParam("redirect");

document.querySelector("#loginButton").addEventListener("click", (e) => {
  const email = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  login({ email, password }, redirect);
});