const baseURL = import.meta.env.VITE_SERVER_URL

async function convertToJson(res) {
  const jsonResponse = await res.json();
  if (res.ok) {
    return jsonResponse;
  } else {
    throw { name: 'ServicesError', message: jsonResponse};
  }
}

export async function getProductsByCategory(category) {
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);
  return data.Result;
}

export async function checkout(payload) {
  // try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + "checkout/", options).then(convertToJson);
  // }
  // catch(error){
  //   console.error('Something went wrong');
  // }
  
}

export async function findProductById(id) {
  const response = await fetch(baseURL + `product/${id}`);
  const data = await convertToJson(response);
  return data.Result;
}

export function loginRequest(creds) {
  const loginReq = {
  method: "POST",
  headers: {
    "email": "user@gmail.com",
    "password": "user1"
  },
}
}

export function auth() {
  const options = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  };
  return fetch(baseURL + "checkout/", options).then(convertToJson);
}