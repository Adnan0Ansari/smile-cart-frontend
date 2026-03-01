import { Button } from "neetoui";

const AddToCart = ({ slug, cartItems, handleCartItems }) => {
  const isInCart = cartItems.includes(slug);

  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    handleCartItems(slug);
  };

  return (
    <Button
      label={isInCart ? "Remove from Cart" : "Add to Cart"}
      size="large"
      onClick={handleClick}
    />
  );
};
export default AddToCart;
