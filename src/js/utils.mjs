// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, newData) {
  // Retrieve existing data from local storage
  let existingData = getLocalStorage(key);

  // If there is existing data, append the new data to it
  if (existingData) {
    existingData.push(newData);
    localStorage.setItem(key, JSON.stringify(existingData));
  } else {
    // If there is no existing data, create a new array with the new data and store it
    localStorage.setItem(key, JSON.stringify([newData]));
  }
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
