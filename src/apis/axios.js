import { keysToCamelCase, keysToSnakeCase } from "@bigbinary/neeto-cist";
import axios from "axios";
import { evolve } from "ramda";

const axiosInstance = axios.create({
  baseURL: "https://smile-cart-backend-staging.neetodeployapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(evolve({ params: keysToSnakeCase }));

axiosInstance.interceptors.response.use(response =>
  keysToCamelCase(response.data)
);

export default axiosInstance;
