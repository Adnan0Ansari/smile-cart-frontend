import axiosInstance from "./axios";

const show = () => axiosInstance.get("/products/infinix-inbook-2");

const productsApi = { show };

export default productsApi;
