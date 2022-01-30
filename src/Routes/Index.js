import {Route, Switch} from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Team from "../Pages/Team/Team"
import Contact from "../Pages/Contact/Contact"
import Stor from "../Pages/Stor/Stor";
import Journey from "../Pages/Journey/Journey";
import Product_details from "../Pages/Stor/Product_details";

const Routers = (path) => {

    // console.log(props)

  return (
    <Switch>
      <Route exact path="/"><Dashboard/></Route>
      <Route exact path="/team"><Team/></Route>
      <Route exact path="/contact"><Contact/></Route>
      <Route exact path="/journey"><Journey/></Route>
      <Route exact path="/stor"><Stor/></Route>
      <Route exact path="/product_details"><Product_details/></Route>
    </Switch>
  );
};

export default Routers;