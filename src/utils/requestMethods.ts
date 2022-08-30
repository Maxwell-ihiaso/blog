import axios from "axios";

export const requestWithAuth = axios.create({
  baseURL: `https://secure-ravine-59876.herokuapp.com/api`,
  timeout: 10000,
});

requestWithAuth.interceptors.request.use(
  (config) => {
    /* ---- 'Authorization': Bearer *Token ---- */

    config.headers = {
      // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      Authorization: `Bearer 62ff3084b2ec53f4046d58f89c89f80b33c0deeac1eb5315c382f5603fe84655e6b66a77df6d4a6fa8b2313dca4b855066eb8a6371f68d282aced19aa993bfa220c14b3c890588659d12738418fbc767a2095f1e87f828a6bca0db8bb2f76bb95c090f9ea0001c9dc8f3a326871d09820c249ec170d36a317763567c6e6da63d`,
    };

    return config;
  },
  (error) => {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export const requestWithoutAuth = axios.create({
  baseURL: `https://secure-ravine-59876.herokuapp.com/api`,
  timeout: 10000,
});
