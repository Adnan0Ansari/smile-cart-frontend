import { Button } from "neetoui";

const AddToCart = ({ isInCart, toggleIsInCart }) => {
  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    toggleIsInCart();
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
