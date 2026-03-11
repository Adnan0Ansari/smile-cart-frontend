import { Link } from "react-router-dom";
import routes from "routes";
import { buildUrl } from "utils";

import AddToCart from "./AddToCart";

const Card = ({
  name,
  mrp,
  offerPrice,
  imageUrl,
  slug,
  isInCart,
  toggleIsInCart,
}) => (
  <Link to={buildUrl(routes.products.show, { slug })}>
    <div className="m-2 w-48 cursor-pointer rounded-lg border p-4 hover:shadow-lg">
      <img alt={name} className="h-48 w-48 object-contain" src={imageUrl} />
      <div className="mt-2 space-y-1">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-gray-500">MRP: {mrp}</p>
        <p className="font-semibold text-green-600">
          Offer price: {offerPrice}
        </p>
        <AddToCart
          isInCart={isInCart}
          slug={slug}
          toggleIsInCart={toggleIsInCart}
        />
      </div>
    </div>
  </Link>
);

export default Card;
