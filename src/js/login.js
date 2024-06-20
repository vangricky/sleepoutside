import { doc } from "prettier";
import { renderHeaderFooter } from "./utils.mjs"
import { getParam } from "./utils.mjs"
import { login, isTokenValid, checkLogin } from "./auth.mjs";


const loginBtn = document.querySelector("#loginButton");
loginBtn.addEventListener(onclick, retrieveData)

function retrieveData() {
    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value
}


const redirect = getParam("redirect");
function login(redirect) {
    
}

renderHeaderFooter();