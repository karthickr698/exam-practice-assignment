import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Team from "../Pages/Team/Team";
import Contact from "../Pages/Contact/Contact";
import Stor from "../Pages/Stor/Stor";
import Journey from "../Pages/Journey/Journey";
import ProductDetails from "../Pages/Stor/ProductDetails";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Stor />
      </Route>
      <Route exact path="/team">
        <Team />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/journey">
        <Journey />
      </Route>
      <Route exact path="/products">
        <Stor />
      </Route>
      <Route exact path="/product_details">
        <ProductDetails />
      </Route>
    </Switch>
  );
};

export default Routers;
