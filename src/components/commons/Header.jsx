import { Left } from "neetoicons";
import { Button } from "neetoui";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const Header = ({
  title,
  actionBlock,
  shouldShowBackButton,
  cartItemsCount,
}) => {
  const history = useHistory();

  return (
    <div className="m-2">
      <div className="mx-6 mb-2 mt-6 flex items-end justify-between">
        <div className="flex items-center">
          {shouldShowBackButton && (
            <Button icon={Left} style="text" onClick={() => history.goBack()} />
          )}
          <p className="py-2 text-4xl font-semibold">{title}</p>
        </div>
        <div className="flex items-end space-x-4">
          {actionBlock}
          <div className="flex flex-col">
            {cartItemsCount > 0 && (
              <span className="neeto-ui-border-black neeto-ui-rounded-full min-w-fit flex h-5 w-5 items-center self-end border p-1">
                {cartItemsCount}
              </span>
            )}
            <AiOutlineShoppingCart size="2rem" />
          </div>
        </div>
      </div>
      <hr className="border-2 border-black" />
    </div>
  );
};

export default Header;
