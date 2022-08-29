import axios from "axios";

export const requestWithAuth = axios.create({
  baseURL: `http://localhost:1337/api`,
  timeout: 10000,
});

requestWithAuth.interceptors.request.use(
  (config) => {
    /* ---- 'Authorization': Bearer *Token ---- */

    config.headers = {
      // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      Authorization: `Bearer ef5a181b1a9072c220d0b5aee9a4019152c031ff72623737025b67b5517243cd4ffcae7508395db0a6366e14bf365332b0d6c3f3035c1e2fe8070d3ee7008d221ed9c3fff04758ac23577d46cda2ecd3f965459c7ad38b7cde7a3e6991ea45cc43bb0334ca5fc7c43d7f8521c5ded81a807e0e5acfb61bacd95ddf24e1614e05`,
    };

    return config;
  },
  (error) => {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export const requestWithoutAuth = axios.create({
  baseURL: `http://localhost:1337/api`,
  timeout: 10000,
});
