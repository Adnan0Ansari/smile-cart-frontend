import { useEffect, useState } from "react";

import productsApi from "apis/product";
import { append, isNotNil } from "ramda";

import Carousel from "./Carousel";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await productsApi.show();

      setProduct(response.data);
    } catch (error) {
      console.log("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return <div className="p-10 text-center text-2xl">Loading...</div>;
  }

  if (!product) {
    return <div className="p-10 text-center text-2xl">Product not found.</div>;
  }

  const { name, description, mrp, offer_price, image_url, image_urls } =
    product;
  const totalDiscounts = mrp - offer_price;
  const discountPercentage = ((totalDiscounts / mrp) * 100).toFixed(1);

  return (
    <div className="px-6 pb-6">
      <div>
        <p className="py-2 text-4xl font-semibold">{name}</p>
        <hr className="border-2 border-black" />
      </div>
      <div className="mt-6 flex gap-4">
        <div className="w-2/5">
          {isNotNil(image_urls) ? (
            <Carousel imageUrls={append(image_url, image_urls)} title={name} />
          ) : (
            <img alt={name} className="w-48" src={image_url} />
          )}
        </div>
        <div className="w-3/5 space-y-4">
          <p>{description}</p>
          <p>{mrp}</p>
          <p className="font-semibold">Offer price: {offer_price}</p>
          <p className="font-semibold text-green-600">{discountPercentage}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
