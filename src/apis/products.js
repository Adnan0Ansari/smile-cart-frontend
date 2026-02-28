import axiosInstance from "./axios";

const fetch = params => axiosInstance.get("/products", { params });
const show = slug => axiosInstance.get(`/products/${slug}`);
const productsApi = { fetch, show };

export default productsApi;
