import { Left } from "neetoicons";
import { Button } from "neetoui";
import { useHistory } from "react-router-dom";

const Header = ({ title, shouldShowBackButton }) => {
  const history = useHistory();

  return (
    <div className="mx-6 mb-2 mt-6">
      {shouldShowBackButton && (
        <Button icon={Left} style="text" onClick={() => history.goBack()} />
      )}
      <p className="py-2 text-4xl font-semibold">{title}</p>
      <hr className="border-2 border-black" />
    </div>
  );
};

export default Header;
