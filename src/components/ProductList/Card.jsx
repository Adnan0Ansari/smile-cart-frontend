import { Link } from "react-router-dom";

const Card = ({ name, mrp, offerPrice, imageUrl, slug }) => (
  <Link to={`/products/${slug}`}>
    <div className="m-2 w-48 cursor-pointer rounded-lg border p-4 hover:shadow-lg">
      <img alt={name} className="h-48 w-48 object-contain" src={imageUrl} />
      <div className="mt-2 space-y-1">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-gray-500">MRP: {mrp}</p>
        <p className="font-semibold text-green-600">
          Offer price: {offerPrice}
        </p>
      </div>
    </div>
  </Link>
);

export default Card;
