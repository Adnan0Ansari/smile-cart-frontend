import { keysToCamelCase } from "@bigbinary/neeto-cist";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://smile-cart-backend-staging.neetodeployapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(response =>
  keysToCamelCase(response.data)
);

export default axiosInstance;
