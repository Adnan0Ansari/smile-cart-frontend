import Home from "components/Home";
import PageNotFound from "components/PageNotFound";
import { Route, Switch, NavLink } from "react-router-dom";

import Product from "./components/Product";

const App = () => (
  <div>
    <nav className="flex space-x-4 bg-gray-100 p-4">
      <NavLink exact activeClassName="underline font-bold" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="underline font-bold" to="/product">
        Product
      </NavLink>
    </nav>
    <main>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Product} path="/product" />
        <Route component={PageNotFound} path="*" />
      </Switch>
    </main>
  </div>
);

export default App;
