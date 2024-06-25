import { loginRequest } from "./externalServices.mjs";
import { alertMessage, getLocalStorage, setLocalStorage } from "./utils.mjs";
import jwt_decode from "jwt-decode";

// const log = "http://server-nodejs.cit.byui.edu:3000/login"
const tokenKey = "so-token";

export async function login(creds, redirect = "/") {
    try {
        const token = await loginRequest(creds);
        setLocalStorage(tokenKey, token);
        window.location = redirect;
    } catch(err) {
        alertMessage(err.message.message);
    }

};

export function isTokenValid(token) {
    if (token) {
        const decoded = jwt_decode(token) ;
        let currentDate = new Date();
        if (decoded.exp * 1000 < currentDate.getTime()){
            console.log("Token has expired.")
            return false;
        } else {
            console.log("Valid token.")
            return true;
        }
    } else return false;
    
};

export function checkLogin() {
    const getToken = getLocalStorage("so-token");
    isTokenValid(getToken);

    if (!isTokenValid) {
        localStorage.removeItem("so-token")
        const location = window.location;
        console.log(location);
        window.location = `/login/index.html?redirect=${location.pathname}`;
    } else return getToken;
};


