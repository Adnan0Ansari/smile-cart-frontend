import axiosInstance from "./axios";

const fetch = () => axiosInstance.get("/products");
const show = slug => axiosInstance.get(`/products/${slug}`);
const productsApi = { fetch, show };

export default productsApi;
