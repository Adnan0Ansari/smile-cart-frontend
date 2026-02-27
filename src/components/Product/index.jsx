import { useEffect, useState } from "react";

import productsApi from "apis/products";
import { Header, PageNotFound } from "components/commons";
import { append, isNotNil } from "ramda";
import { useParams } from "react-router-dom";

import Carousel from "./Carousel";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const [isError, setIsError] = useState(false);

  const fetchProduct = async () => {
    try {
      const response = await productsApi.show(slug);
      console.log("slug:", slug);
      console.log("response:", response);
      setProduct(response);
    } catch (error) {
      console.log("An error occurred:", error);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  if (isError) return <PageNotFound />;

  if (loading) {
    return <div className="p-10 text-center text-2xl">Loading..</div>;
  }

  if (!product) {
    return <div className="p-10 text-center text-2xl">Product not found.</div>;
  }

  const { name, description, mrp, offerPrice, imageUrl, imageUrls } = product;
  const totalDiscounts = mrp - offerPrice;
  const discountPercentage = ((totalDiscounts / mrp) * 100).toFixed(1);

  return (
    <div className="px-6 pb-6">
      <Header shouldShowBackButton title={name} />
      <div className="mt-6 flex gap-4">
        <div className="w-2/5">
          {isNotNil(imageUrls) ? (
            <Carousel imageUrls={append(imageUrl, imageUrls)} title={name} />
          ) : (
            <img alt={name} className="w-48" src={imageUrl} />
          )}
        </div>
        <div className="w-3/5 space-y-4">
          <p>{description}</p>
          <p>{mrp}</p>
          <p className="font-semibold">Offer price: {offerPrice}</p>
          <p className="font-semibold text-green-600">{discountPercentage}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
