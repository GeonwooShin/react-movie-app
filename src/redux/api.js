import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { "Content-type": "application/json" },
});

api.interceptors.request.use(
  function (config) {
    console.log("request start", config);
    return config;
  },
  function (error) {
    console.log("request", error);
    return Promise.reject(error);
  }
);

api.interceptors.request.use(
  function (response) {
    console.log("response", response);
    return response;
  },
  function (error) {
    console.log("request", error);
    return Promise.reject(error);
  }
);

export default api;
