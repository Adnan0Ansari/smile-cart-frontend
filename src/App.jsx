import PageNotFound from "components/PageNotFound";
import { Route, Switch, Redirect } from "react-router-dom";

import Product from "./components/Product";
import ProductList from "./components/ProductList";

const App = () => (
  <div>
    <main>
      <Switch>
        <Route exact component={ProductList} path="/products" />
        <Route exact component={Product} path="/products/:slug" />
        <Redirect exact from="/" to="/products" />
        <Route component={PageNotFound} path="*" />
      </Switch>
    </main>
  </div>
);

export default App;
