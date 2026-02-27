import React, { useState, useEffect } from "react";

import productsApi from "apis/products";
import { Header, PageLoader } from "components/commons";

import Card from "./Card";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await productsApi.fetch();
      setProducts(response.products);
    } catch (error) {
      console.log("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex flex-col">
      <Header title="Smile Cart" />
      <div className="grid grid-cols-4 gap-4 p-4">
        {products.map(product => (
          <Card key={product.slug} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
