import React, { useState, useEffect } from "react";

import productsApi from "apis/products";
import { Header, PageLoader } from "components/commons";
import useDebounce from "hooks/useDebounce";
import { NoData } from "neetoui";
import { isEmpty, without } from "ramda";

import Card from "./Card";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm);

  const toggleIsInCart = slug => {
    setCartItems(prevCartItems =>
      prevCartItems.includes(slug)
        ? without([slug], prevCartItems)
        : [slug, ...prevCartItems]
    );
  };

  const fetchProducts = async () => {
    try {
      const response = await productsApi.fetch({
        searchTerm: debouncedSearchTerm,
      });

      setProducts(response.products);
    } catch (error) {
      console.log("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [debouncedSearchTerm]);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex flex-col">
      <Header
        cartItemsCount={cartItems.length}
        title="Smile Cart"
        actionBlock={
          <input
            className="border p-2"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        }
      />
      {isEmpty(products) ? (
        <NoData title="No products to show" />
      ) : (
        <div className="grid grid-cols-4 gap-4 p-4">
          {products.map(product => (
            <Card
              key={product.slug}
              {...product}
              isInCart={cartItems.includes(product.slug)}
              toggleIsInCart={() => toggleIsInCart(product.slug)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
