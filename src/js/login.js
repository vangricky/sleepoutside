import { renderHeaderFooter } from "./utils.mjs"
import { getParam } from "./utils.mjs"
import { login, checkLogin } from "./auth.mjs";


const loginBtn = document.querySelector("#loginButton");
loginBtn.addEventListener("click", retrieveData)

function retrieveData() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    login({username, password}, redirect);
}


const redirect = getParam("redirect");


renderHeaderFooter();
checkLogin()

