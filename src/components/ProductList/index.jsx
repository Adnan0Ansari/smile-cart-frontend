import React, { useState, useEffect } from "react";

import productsApi from "apis/products";
import { Header, PageLoader } from "components/commons";
import useDebounce from "hooks/useDebounce";
import { NoData } from "neetoui";
import { isEmpty } from "ramda";

import Card from "./Card";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const debouncedSeachTerm = useDebounce(searchTerm);

  const handleCartItems = slug => {
    if (cartItems.includes(slug)) {
      setCartItems(cartItems.filter(item => item !== slug));
    } else {
      setCartItems([...cartItems, slug]);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await productsApi.fetch({
        searchTerm: debouncedSeachTerm,
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
  }, [debouncedSeachTerm]);

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
              cartItems={cartItems}
              handleCartItems={handleCartItems}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
