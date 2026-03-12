import { useState } from "react";

import { PageNotFound } from "components/commons";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "routes";

import Product from "./components/Product";
import ProductList from "./components/ProductList";
import CartItemsContext from "./contexts/CartItemsContext";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <main>
        <CartItemsContext.Provider value={[cartItems, setCartItems]}>
          <Switch>
            <Route exact component={ProductList} path={routes.products.index} />
            <Route exact component={Product} path={routes.products.show} />
            <Redirect exact from={routes.root} to={routes.products.index} />
            <Route component={PageNotFound} path="*" />
          </Switch>
        </CartItemsContext.Provider>
      </main>
    </div>
  );
};

export default App;
